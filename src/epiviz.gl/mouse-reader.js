import {
  scale,
  getViewportForSchema,
  getDimAndMarginStyleForSchema,
} from "./utilities";
import SVGInteractor from "./svg-interactor";

/**
 * event.layerX and event.layerY are deprecated. We will use them if they are on the event, but
 * if not we will use a manual calculation.
 *
 * @param {Event} event
 * @returns layerX and layerY, coordinates of event with origin at top right corner of bounding box
 */
const getLayerXandYFromEvent = (event) => {
  if (event.layerX !== undefined && event.layerY !== undefined) {
    return [event.layerX, event.layerY];
  }
  const bbox = event.target.getBoundingClientRect();
  const x = event.clientX - bbox.left;
  const y = event.clientY - bbox.top;
  return [x, y];
};

class MouseReader {
  /**
   *
   * @param {HTMLElement} element meant to read mouse events, necessary since OffscreenCanvas cannot read DOM events
   * @param {WebGLVis} handler WebGLVis that is using this mousereader
   */
  constructor(element, handler) {
    this.element = element;
    this.element.style.position = "absolute";
    this.element.style.width = "100%";
    this.element.style.height = "100%";

    this.handler = handler;

    this._currentSelectionPoints = [];

    this.tool = "box";

    // Initializing elements to show user their current selection
    this.SVGInteractor = new SVGInteractor(
      document.createElementNS("http://www.w3.org/2000/svg", "svg")
    );
  }

  /**
   * Set the schema of the mouse reader and the svg interaction
   * @param {Object} schema
   */
  setSchema(schema) {
    const styles = getDimAndMarginStyleForSchema(schema);
    this.element.style.width = styles.width;
    this.element.style.height = styles.height;
    this.element.style.margin = styles.margin;

    this.viewport = getViewportForSchema(schema);
    this.SVGInteractor.setSchema(schema);
    this._updateSVG();
  }

  /**
   * Set the viewport in the format mouseReader.viewport = [minX, maxX, minY, maxY].
   * Mostly used to make Scatterplot.setOptions simpler.
   */
  set viewport(toSet) {
    this.minX = toSet[0];
    this.maxX = toSet[1];
    this.minY = toSet[2];
    this.maxY = toSet[3];

    this.currentXRange = [this.minX, this.maxX];
    this.currentYRange = [this.minY, this.maxY];

    this._wheelDampenX = (this.maxX - this.minX) / 1000;
    this._wheelDampenY = (this.maxY - this.minY) / 1000;

    this._panDampenX = (this.maxX - this.minX) / 1000;
    this._panDampenY = (this.maxY - this.minY) / 1000;
  }

  /**
   * Init the mouse reader by adding its elements to DOM and adding event handlers
   */
  init() {
    this.width = this.element.clientWidth;
    this.height = this.element.clientHeight;

    this.element.parentElement.appendChild(this.SVGInteractor.svg);
    this.SVGInteractor.init();
    this._updateSVG();

    this.element.addEventListener("wheel", this._onWheel.bind(this), false);

    let mouseDown = false;
    this.element.addEventListener(
      "mousedown",
      (event) => {
        mouseDown = true;
        switch (this.tool) {
          case "pan":
            break;
          case "box":
          case "lasso":
            this._currentSelectionPoints = [
              ...this._calculateViewportSpot(...getLayerXandYFromEvent(event)),
            ];
            break;
        }
      },
      false
    );

    this.element.addEventListener(
      "mousemove",
      (event) => {
        if (!mouseDown) {
          return;
        }
        switch (this.tool) {
          case "pan":
            this._onPan(event);
            break;
          case "box":
            this._currentSelectionPoints = this._currentSelectionPoints
              .slice(0, 2)
              .concat(
                this._calculateViewportSpot(...getLayerXandYFromEvent(event))
              );
            break;
          case "lasso":
            this._currentSelectionPoints.push(
              ...this._calculateViewportSpot(...getLayerXandYFromEvent(event))
            );
            break;
          case "tooltip":
            break;
        }
        this._updateSVG();
      },
      false
    );

    this.element.addEventListener("mouseup", (event) => {
      mouseDown = false;
      switch (this.tool) {
        case "pan":
          break;
        case "box":
          if (this._currentSelectionPoints.length !== 4) {
            this._currentSelectionPoints = [];
            return;
          }
          this._onSelect();
          break;
        case "lasso":
          if (this._currentSelectionPoints.length < 6) {
            this._currentSelectionPoints = [];
            this._updateSVG();
            return;
          }
          this._onSelect();
          break;
      }
    });

    this.element.addEventListener("mouseleave", () => {
      switch (this.tool) {
        case "pan": // Ensures panning does not continue if user leaves canvas
          mouseDown = false;
          break;
        case "box":
          break;
        case "lasso":
          break;
        case "tooltip":
          break;
      }
    });
  }

  /**
   * Get current viewport info such as min/max bounds and current ranges
   *
   * @returns Current viewport information the mouse reader has calculated
   */
  getViewport() {
    return {
      minX: this.minX,
      maxX: this.maxX,
      minY: this.minY,
      maxY: this.maxY,
      xRange: this.currentXRange,
      yRange: this.currentYRange,
    };
  }

  /**
   * Method to handle wheel events for zooming in and out of canvas
   *
   * @param {WheelEvent} event
   */
  _onWheel(event) {
    event.preventDefault();
    if (!this.lockedX) {
      const previousX = [...this.currentXRange]; // ... to avoid aliasing
      const t = -event.wheelDelta * this._wheelDampenX;
      const inDataSpace = this._calculateViewportSpot(
        ...getLayerXandYFromEvent(event)
      );
      this.currentXRange[0] =
        t * inDataSpace[0] + (1 - t) * this.currentXRange[0];

      this.currentXRange[1] =
        t * inDataSpace[0] + (1 - t) * this.currentXRange[1];

      this.currentXRange[0] = Math.max(this.currentXRange[0], this.minX);
      this.currentXRange[1] = Math.min(this.currentXRange[1], this.maxX);

      if (!this._validateXRange()) {
        // Zoom in limit
        this.currentXRange = previousX;
      }
    }

    if (!this.lockedY) {
      const previousY = [...this.currentYRange];
      const t = -event.wheelDelta * this._wheelDampenY;
      const inDataSpace = this._calculateViewportSpot(
        ...getLayerXandYFromEvent(event)
      );

      this.currentYRange[0] =
        t * inDataSpace[1] + (1 - t) * this.currentYRange[0];
      this.currentYRange[1] =
        t * inDataSpace[1] + (1 - t) * this.currentYRange[1];
      this.currentYRange[0] = Math.max(this.currentYRange[0], this.minY);
      this.currentYRange[1] = Math.min(this.currentYRange[1], this.maxY);

      if (!this._validateYRange()) {
        // Zoom in limit
        this.currentYRange = previousY;
      }
    }

    this.handler.sendDrawerState(this.getViewport());
    this._updateSVG();
  }

  /**
   * Method to handle a clicked mouse moving around canvas to pan around canvas.
   *
   * @param {MouseEvent} event from "mousemove" event
   */
  _onPan(event) {
    if (!this.lockedX) {
      const previousX = [...this.currentXRange]; // ... to avoid aliasing
      this.currentXRange[0] -= event.movementX * this._panDampenX;
      this.currentXRange[1] -= event.movementX * this._panDampenX;
      this.currentXRange[0] = Math.max(this.currentXRange[0], this.minX);
      this.currentXRange[1] = Math.min(this.currentXRange[1], this.maxX);

      if (!this._validateXRange()) {
        this.currentXRange = previousX;
      }
    }

    if (!this.lockedY) {
      const previousY = [...this.currentYRange];
      this.currentYRange[0] += event.movementY * this._panDampenY;
      this.currentYRange[1] += event.movementY * this._panDampenY;
      this.currentYRange[0] = Math.max(this.currentYRange[0], this.minY);
      this.currentYRange[1] = Math.min(this.currentYRange[1], this.maxY);

      if (!this._validateYRange()) {
        this.currentYRange = previousY;
      }
    }

    this.handler.sendDrawerState(this.getViewport());
    this._updateSVG();
  }

  /**
   * Checks if this.currentXRange is valid with first element less than second
   * and if viewport zoom is not above webgl max zoom.
   *
   * @return true if range is valid, false otherwise
   */
  _validateXRange() {
    return this.currentXRange[1] >= this.currentXRange[0];
  }

  /**
   * Checks if this.currentYRange is valid with first element less than second
   * and if viewport zoom is not above webgl max zoom.
   *
   * @return true if range is valid, false otherwise
   */
  _validateYRange() {
    return this.currentYRange[1] >= this.currentYRange[0];
  }

  /**
   * Updates the DOM component used to show user selection or axis.
   * Calls methods from SVGInteractor.
   */
  _updateSVG() {
    this.SVGInteractor.updateView(
      this.currentXRange,
      this.currentYRange,
      this.width,
      this.height
    );
    this.SVGInteractor.updateSelectView(this._currentSelectionPoints);
  }

  /**
   * Executes when user has confirmed selection points (typically by releasing mouse)
   */
  _onSelect() {
    this.handler.selectPoints(this._currentSelectionPoints);
  }

  /**
   * Calculate the location on the real coordinate space a point on the canvas corresponds to.
   *
   * @param {Float} canvasX likely from event.layerX or getLayerXandYFromEvent
   * @param {Float} canvasY likely from event.layerY or getLayerXandYFromEvent
   * @returns viewport coordinate as array
   */
  _calculateViewportSpot(canvasX, canvasY) {
    const scaleX = scale([0, this.width], this.currentXRange);
    // Flipped for Y since canvas using typical graphics coordinates but GPU clipspace is typical cartesian coordinates
    const scaleY = scale([this.height, 0], this.currentYRange);
    return [scaleX(canvasX), scaleY(canvasY)];
  }
}

export default MouseReader;
