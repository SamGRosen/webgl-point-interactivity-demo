import Drawer from "./drawer";
import SchemaProcessor from "./schema-processor";
import { scale } from "./utilities";
import VertexCalculator from "./vertex-calculator";

import { VertexShader, varyingColorsFragmentShader } from "./webgl.js";

const twgl = require("twgl.js");

class WebGLCanvasDrawer extends Drawer {
  constructor(viewportData) {
    super(viewportData);

    this.gl = this.canvas.getContext("webgl2", {
      // Setting these to false makes webgl handle more like opengl
      // Source: https://webglfundamentals.org/webgl/lessons/webgl-and-alpha.html
      alpha: false,
      premultipliedAlpha: false,
    });

    if (!this.gl) {
      console.error("Unable to initialize WebGL!");
      return;
    }
  }

  /**
   * Calculates the viewport for this.gl.viewport to control zooming. Also calculates point size.
   * @returns Array of 5 elements, first 4 are viewport parameters, last is pointSizeMultiplier:
   *   [xOffset, yOffset, displayAsIfThisWide, displayAsIfThisHigh, pointSizeMultiplier]
   */
  getWebGLViewport() {
    // Calculate appropriate webgl viewport given current selection window

    // Transform current data coordinates to GPU cordinates
    const scaleXWindowSpace = scale([this.minX, this.maxX], [-1, 1]);
    const scaleYWindowSpace = scale([this.minY, this.maxY], [-1, 1]);

    // Multiply point size by the ratio of max dimension and current width
    const pointSize = Math.max(
      1,
      Math.min(
        1 /
          (scaleXWindowSpace(this.currentXRange[1]) -
            scaleXWindowSpace(this.currentXRange[0])),
        1 /
          (scaleYWindowSpace(this.currentYRange[1]) -
            scaleYWindowSpace(this.currentYRange[0]))
      )
    );
    // Return [x1, y1, x2, y2] and pointsize, camera corners coordinates in GPU space
    // Which becomes uniform in vertex shader
    return [
      scaleXWindowSpace(this.currentXRange[0]),
      scaleYWindowSpace(this.currentYRange[0]),
      scaleXWindowSpace(this.currentXRange[1]),
      scaleYWindowSpace(this.currentYRange[1]),
      pointSize,
    ];
  }

  /**
   * Sets the schema and begins the process of drawing it.
   *  1. Cancels any current animation
   *  2. Builds shaders for the tracks
   *  3. After data is loaded, calls populateBuffers.
   *
   * @param {Object} schema of visualization
   */
  setSchema(schema) {
    super.render(); // Cancels current animation frame

    // Populate buffers needs a trackShader built to know what buffers to fill
    this.trackShaders = VertexShader.fromSchema(schema);

    new SchemaProcessor(schema, this.populateBuffers.bind(this));
  }

  /**
   * Populate the buffers that are fed to webgl for drawing.
   *
   * @param {SchemaProcessor} schemaHelper created in the setSchema method
   */
  populateBuffers(schemaHelper) {
    let currentTrack = schemaHelper.getNextTrack();
    let currentTrackShaderIndex = 0;

    while (currentTrack) {
      // Construct calculator in track loop as calculator keeps internal state for each track
      let vertexCalculator = new VertexCalculator(
        schemaHelper.xScale,
        schemaHelper.yScale,
        currentTrack.track // Access actual track schema
      );

      let currentMark = currentTrack.getNextMark();

      while (currentMark) {
        // A lot of the heavy lifting occurs in the track shaders, this class is mostly boilerplate for webgl
        this.trackShaders[currentTrackShaderIndex].addMarkToBuffers(
          currentMark,
          vertexCalculator
        );

        currentMark = currentTrack.getNextMark();
      }

      currentTrack = schemaHelper.getNextTrack();
      currentTrackShaderIndex++;
    }

    this.render();
  }

  /**
   * Animates the frames by setting viewport, uniforms, blending, clearing, and calling webgl draw.
   */
  animate() {
    if (!this.needsAnimation) {
      // Prevent pointless animation if canvas does not change
      this.lastFrame = requestAnimationFrame(this.animate.bind(this));
      this.tick();
      return;
    }

    const viewport = this.getWebGLViewport();
    this.globalUniforms.viewport = new Float32Array(viewport.slice(0, 4));
    this.globalUniforms.pointSizeModifier = viewport[4];

    this.trackShaders.forEach((trackShader, index) => {
      this.gl.useProgram(this.programInfos[index].program);

      twgl.setUniforms(this.programInfos[index], {
        ...this.globalUniforms,
        ...trackShader.uniforms,
      });
    });

    // Clear the canvas before we start drawing on it.
    this.gl.clearColor(1, 1, 1, 1);

    // Set the blending function
    // Blend functions are weird, play with them:
    // https://mrdoob.github.io/webgl-blendfunctions/blendfunc.html
    // http://www.andersriggelsen.dk/glblendfunc.php
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    // For each track shader, use their shader program then draw it
    this.trackShaders.forEach((trackShader, index) => {
      this.gl.useProgram(this.programInfos[index].program);
      twgl.setBuffersAndAttributes(
        this.gl,
        this.programInfos[index],
        this.bufferInfos[index]
      );
      twgl.drawBufferInfo(
        this.gl,
        this.bufferInfos[index],
        this.gl[trackShader.drawMode],
        trackShader.attributes.aVertexPosition.data.length / 2
      );
    });

    this.needsAnimation = false;
    this.lastFrame = requestAnimationFrame(this.animate.bind(this));
    this.tick();
  }

  /**
   * Prepares animation by compiling shaders, setting uniforms, constructing buffers,
   * and handling additional boilerplate.
   */
  render() {
    super.render();

    this.programInfos = this.trackShaders.map((trackShader) =>
      twgl.createProgramInfo(this.gl, [
        trackShader.buildShader(),
        varyingColorsFragmentShader,
      ])
    );

    this.globalUniforms = {
      viewport: new Float32Array([-1, -1, 1, 1]),
      pointSizeModifier: 1,
    };

    this.bufferInfos = this.trackShaders.map((trackShader) =>
      twgl.createBufferInfoFromArrays(this.gl, trackShader.attributes)
    );

    this.needsAnimation = true;
    this.animate();
  }
}

export default WebGLCanvasDrawer;
