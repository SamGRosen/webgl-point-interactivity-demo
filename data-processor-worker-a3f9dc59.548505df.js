// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ixyRv":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "a8fb9c35fdafe466";
module.bundle.HMR_BUNDLE_ID = "1e0dde57548505df";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8Ionc":[function(require,module,exports) {
var _specificationProcessorD89A6709Js = require("./specification-processor-d89a6709.js");
var _rgb6A05388EJs = require("./rgb-6a05388e.js");
class FlatQueue {
    clear() {
        this.length = 0;
    }
    push(id, value) {
        let pos = this.length++;
        this.ids[pos] = id;
        this.values[pos] = value;
        while(pos > 0){
            const parent = pos - 1 >> 1;
            const parentValue = this.values[parent];
            if (value >= parentValue) break;
            this.ids[pos] = this.ids[parent];
            this.values[pos] = parentValue;
            pos = parent;
        }
        this.ids[pos] = id;
        this.values[pos] = value;
    }
    pop() {
        if (this.length === 0) return undefined;
        const top = this.ids[0];
        this.length--;
        if (this.length > 0) {
            const id = this.ids[0] = this.ids[this.length];
            const value = this.values[0] = this.values[this.length];
            const halfLength = this.length >> 1;
            let pos = 0;
            while(pos < halfLength){
                let left = (pos << 1) + 1;
                const right = left + 1;
                let bestIndex = this.ids[left];
                let bestValue = this.values[left];
                const rightValue = this.values[right];
                if (right < this.length && rightValue < bestValue) {
                    left = right;
                    bestIndex = this.ids[right];
                    bestValue = rightValue;
                }
                if (bestValue >= value) break;
                this.ids[pos] = bestIndex;
                this.values[pos] = bestValue;
                pos = left;
            }
            this.ids[pos] = id;
            this.values[pos] = value;
        }
        return top;
    }
    peek() {
        if (this.length === 0) return undefined;
        return this.ids[0];
    }
    peekValue() {
        if (this.length === 0) return undefined;
        return this.values[0];
    }
    constructor(){
        this.ids = [];
        this.values = [];
        this.length = 0;
    }
}
const ARRAY_TYPES = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
];
const VERSION = 3; // serialized format version
class Flatbush {
    static from(data) {
        if (!(data instanceof ArrayBuffer)) throw new Error('Data must be an instance of ArrayBuffer.');
        const [magic, versionAndType] = new Uint8Array(data, 0, 2);
        if (magic !== 251) throw new Error('Data does not appear to be in a Flatbush format.');
        if (versionAndType >> 4 !== VERSION) throw new Error(`Got v${versionAndType >> 4} data when expected v${VERSION}.`);
        const [nodeSize] = new Uint16Array(data, 2, 1);
        const [numItems] = new Uint32Array(data, 4, 1);
        return new Flatbush(numItems, nodeSize, ARRAY_TYPES[versionAndType & 15], data);
    }
    add(minX, minY, maxX, maxY) {
        const index = this._pos >> 2;
        this._indices[index] = index;
        this._boxes[this._pos++] = minX;
        this._boxes[this._pos++] = minY;
        this._boxes[this._pos++] = maxX;
        this._boxes[this._pos++] = maxY;
        if (minX < this.minX) this.minX = minX;
        if (minY < this.minY) this.minY = minY;
        if (maxX > this.maxX) this.maxX = maxX;
        if (maxY > this.maxY) this.maxY = maxY;
        return index;
    }
    finish() {
        if (this._pos >> 2 !== this.numItems) throw new Error(`Added ${this._pos >> 2} items when expected ${this.numItems}.`);
        if (this.numItems <= this.nodeSize) {
            // only one node, skip sorting and just fill the root box
            this._boxes[this._pos++] = this.minX;
            this._boxes[this._pos++] = this.minY;
            this._boxes[this._pos++] = this.maxX;
            this._boxes[this._pos++] = this.maxY;
            return;
        }
        const width = this.maxX - this.minX;
        const height = this.maxY - this.minY;
        const hilbertValues = new Uint32Array(this.numItems);
        const hilbertMax = 65535;
        // map item centers into Hilbert coordinate space and calculate Hilbert values
        for(let i = 0; i < this.numItems; i++){
            let pos = 4 * i;
            const minX = this._boxes[pos++];
            const minY = this._boxes[pos++];
            const maxX = this._boxes[pos++];
            const maxY = this._boxes[pos++];
            const x = Math.floor(hilbertMax * ((minX + maxX) / 2 - this.minX) / width);
            const y = Math.floor(hilbertMax * ((minY + maxY) / 2 - this.minY) / height);
            hilbertValues[i] = hilbert(x, y);
        }
        // sort items by their Hilbert value (for packing later)
        sort(hilbertValues, this._boxes, this._indices, 0, this.numItems - 1, this.nodeSize);
        // generate nodes at each tree level, bottom-up
        for(let i1 = 0, pos = 0; i1 < this._levelBounds.length - 1; i1++){
            const end = this._levelBounds[i1];
            // generate a parent node for each block of consecutive <nodeSize> nodes
            while(pos < end){
                const nodeIndex = pos;
                // calculate bbox for the new node
                let nodeMinX = Infinity;
                let nodeMinY = Infinity;
                let nodeMaxX = -Infinity;
                let nodeMaxY = -Infinity;
                for(let i = 0; i < this.nodeSize && pos < end; i++){
                    nodeMinX = Math.min(nodeMinX, this._boxes[pos++]);
                    nodeMinY = Math.min(nodeMinY, this._boxes[pos++]);
                    nodeMaxX = Math.max(nodeMaxX, this._boxes[pos++]);
                    nodeMaxY = Math.max(nodeMaxY, this._boxes[pos++]);
                }
                // add the new node to the tree data
                this._indices[this._pos >> 2] = nodeIndex;
                this._boxes[this._pos++] = nodeMinX;
                this._boxes[this._pos++] = nodeMinY;
                this._boxes[this._pos++] = nodeMaxX;
                this._boxes[this._pos++] = nodeMaxY;
            }
        }
    }
    search(minX, minY, maxX, maxY, filterFn) {
        if (this._pos !== this._boxes.length) throw new Error('Data not yet indexed - call index.finish().');
        let nodeIndex = this._boxes.length - 4;
        const queue = [];
        const results = [];
        while(nodeIndex !== undefined){
            // find the end index of the node
            const end = Math.min(nodeIndex + this.nodeSize * 4, upperBound(nodeIndex, this._levelBounds));
            // search through child nodes
            for(let pos = nodeIndex; pos < end; pos += 4){
                const index = this._indices[pos >> 2] | 0;
                // check if node bbox intersects with query bbox
                if (maxX < this._boxes[pos]) continue; // maxX < nodeMinX
                if (maxY < this._boxes[pos + 1]) continue; // maxY < nodeMinY
                if (minX > this._boxes[pos + 2]) continue; // minX > nodeMaxX
                if (minY > this._boxes[pos + 3]) continue; // minY > nodeMaxY
                if (nodeIndex < this.numItems * 4) {
                    if (filterFn === undefined || filterFn(index)) results.push(index); // leaf item
                } else queue.push(index); // node; add it to the search queue
            }
            nodeIndex = queue.pop();
        }
        return results;
    }
    neighbors(x, y, maxResults = Infinity, maxDistance = Infinity, filterFn) {
        if (this._pos !== this._boxes.length) throw new Error('Data not yet indexed - call index.finish().');
        let nodeIndex = this._boxes.length - 4;
        const q = this._queue;
        const results = [];
        const maxDistSquared = maxDistance * maxDistance;
        while(nodeIndex !== undefined){
            // find the end index of the node
            const end = Math.min(nodeIndex + this.nodeSize * 4, upperBound(nodeIndex, this._levelBounds));
            // add child nodes to the queue
            for(let pos = nodeIndex; pos < end; pos += 4){
                const index = this._indices[pos >> 2] | 0;
                const dx = axisDist(x, this._boxes[pos], this._boxes[pos + 2]);
                const dy = axisDist(y, this._boxes[pos + 1], this._boxes[pos + 3]);
                const dist = dx * dx + dy * dy;
                if (nodeIndex < this.numItems * 4) {
                    if (filterFn === undefined || filterFn(index)) // put a negative index if it's an item rather than a node, to recognize later
                    q.push(-index - 1, dist);
                } else q.push(index, dist);
            }
            // pop items from the queue
            while(q.length && q.peek() < 0){
                const dist = q.peekValue();
                if (dist > maxDistSquared) {
                    q.clear();
                    return results;
                }
                results.push(-q.pop() - 1);
                if (results.length === maxResults) {
                    q.clear();
                    return results;
                }
            }
            nodeIndex = q.pop();
        }
        q.clear();
        return results;
    }
    constructor(numItems, nodeSize = 16, ArrayType = Float64Array, data){
        if (numItems === undefined) throw new Error('Missing required argument: numItems.');
        if (isNaN(numItems) || numItems <= 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);
        this.numItems = +numItems;
        this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
        // calculate the total number of nodes in the R-tree to allocate space for
        // and the index of each tree level (used in search later)
        let n = numItems;
        let numNodes = n;
        this._levelBounds = [
            n * 4
        ];
        do {
            n = Math.ceil(n / this.nodeSize);
            numNodes += n;
            this._levelBounds.push(numNodes * 4);
        }while (n !== 1)
        this.ArrayType = ArrayType || Float64Array;
        this.IndexArrayType = numNodes < 16384 ? Uint16Array : Uint32Array;
        const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
        const nodesByteSize = numNodes * 4 * this.ArrayType.BYTES_PER_ELEMENT;
        if (arrayTypeIndex < 0) throw new Error(`Unexpected typed array class: ${ArrayType}.`);
        if (data && data instanceof ArrayBuffer) {
            this.data = data;
            this._boxes = new this.ArrayType(this.data, 8, numNodes * 4);
            this._indices = new this.IndexArrayType(this.data, 8 + nodesByteSize, numNodes);
            this._pos = numNodes * 4;
            this.minX = this._boxes[this._pos - 4];
            this.minY = this._boxes[this._pos - 3];
            this.maxX = this._boxes[this._pos - 2];
            this.maxY = this._boxes[this._pos - 1];
        } else {
            this.data = new ArrayBuffer(8 + nodesByteSize + numNodes * this.IndexArrayType.BYTES_PER_ELEMENT);
            this._boxes = new this.ArrayType(this.data, 8, numNodes * 4);
            this._indices = new this.IndexArrayType(this.data, 8 + nodesByteSize, numNodes);
            this._pos = 0;
            this.minX = Infinity;
            this.minY = Infinity;
            this.maxX = -Infinity;
            this.maxY = -Infinity;
            new Uint8Array(this.data, 0, 2).set([
                251,
                (VERSION << 4) + arrayTypeIndex
            ]);
            new Uint16Array(this.data, 2, 1)[0] = nodeSize;
            new Uint32Array(this.data, 4, 1)[0] = numItems;
        }
        // a priority queue for k-nearest-neighbors queries
        this._queue = new FlatQueue();
    }
}
function axisDist(k, min, max) {
    return k < min ? min - k : k <= max ? 0 : k - max;
}
// binary search for the first value in the array bigger than the given
function upperBound(value, arr) {
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        const m = i + j >> 1;
        if (arr[m] > value) j = m;
        else i = m + 1;
    }
    return arr[i];
}
// custom quicksort that partially sorts bbox data alongside the hilbert values
function sort(values, boxes, indices, left, right, nodeSize) {
    if (Math.floor(left / nodeSize) >= Math.floor(right / nodeSize)) return;
    const pivot = values[left + right >> 1];
    let i = left - 1;
    let j = right + 1;
    while(true){
        do i++;
        while (values[i] < pivot)
        do j--;
        while (values[j] > pivot)
        if (i >= j) break;
        swap(values, boxes, indices, i, j);
    }
    sort(values, boxes, indices, left, j, nodeSize);
    sort(values, boxes, indices, j + 1, right, nodeSize);
}
// swap two values and two corresponding boxes
function swap(values, boxes, indices, i, j) {
    const temp = values[i];
    values[i] = values[j];
    values[j] = temp;
    const k = 4 * i;
    const m = 4 * j;
    const a = boxes[k];
    const b = boxes[k + 1];
    const c = boxes[k + 2];
    const d = boxes[k + 3];
    boxes[k] = boxes[m];
    boxes[k + 1] = boxes[m + 1];
    boxes[k + 2] = boxes[m + 2];
    boxes[k + 3] = boxes[m + 3];
    boxes[m] = a;
    boxes[m + 1] = b;
    boxes[m + 2] = c;
    boxes[m + 3] = d;
    const e = indices[i];
    indices[i] = indices[j];
    indices[j] = e;
}
// Fast Hilbert curve algorithm by http://threadlocalmutex.com/
// Ported from C++ https://github.com/rawrunprotected/hilbert_curves (public domain)
function hilbert(x, y) {
    let a = x ^ y;
    let b = 65535 ^ a;
    let c = 65535 ^ (x | y);
    let d = x & (y ^ 65535);
    let A = a | b >> 1;
    let B = a >> 1 ^ a;
    let C = c >> 1 ^ b & d >> 1 ^ c;
    let D = a & c >> 1 ^ d >> 1 ^ d;
    a = A;
    b = B;
    c = C;
    d = D;
    A = a & a >> 2 ^ b & b >> 2;
    B = a & b >> 2 ^ b & (a ^ b) >> 2;
    C ^= a & c >> 2 ^ b & d >> 2;
    D ^= b & c >> 2 ^ (a ^ b) & d >> 2;
    a = A;
    b = B;
    c = C;
    d = D;
    A = a & a >> 4 ^ b & b >> 4;
    B = a & b >> 4 ^ b & (a ^ b) >> 4;
    C ^= a & c >> 4 ^ b & d >> 4;
    D ^= b & c >> 4 ^ (a ^ b) & d >> 4;
    a = A;
    b = B;
    c = C;
    d = D;
    C ^= a & c >> 8 ^ b & d >> 8;
    D ^= b & c >> 8 ^ (a ^ b) & d >> 8;
    a = C ^ C >> 1;
    b = D ^ D >> 1;
    let i0 = x ^ y;
    let i1 = b | 65535 ^ (i0 | a);
    i0 = (i0 | i0 << 8) & 16711935;
    i0 = (i0 | i0 << 4) & 252645135;
    i0 = (i0 | i0 << 2) & 858993459;
    i0 = (i0 | i0 << 1) & 1431655765;
    i1 = (i1 | i1 << 8) & 16711935;
    i1 = (i1 | i1 << 4) & 252645135;
    i1 = (i1 | i1 << 2) & 858993459;
    i1 = (i1 | i1 << 1) & 1431655765;
    return (i1 << 1 | i0) >>> 0;
}
/**
 * @module helpers
 */ /**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */ function feature(geom, properties, options) {
    if (options === void 0) options = {
    };
    var feat = {
        type: "Feature"
    };
    if (options.id === 0 || options.id) feat.id = options.id;
    if (options.bbox) feat.bbox = options.bbox;
    feat.properties = properties || {
    };
    feat.geometry = geom;
    return feat;
}
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */ function polygon(coordinates, properties, options) {
    if (options === void 0) options = {
    };
    for(var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++){
        var ring = coordinates_1[_i];
        if (ring.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        for(var j = 0; j < ring[ring.length - 1].length; j++){
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) throw new Error("First and last Position are not equivalent.");
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates
    };
    return feature(geom, properties, options);
}
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */ function isObject(input) {
    return !!input && input.constructor === Object;
}
/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */ function getCoord(coord) {
    if (!coord) throw new Error("coord is required");
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") return coord.geometry.coordinates;
        if (coord.type === "Point") return coord.coordinates;
    }
    if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) return coord;
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
/**
 * Unwrap coordinates from a Feature, Geometry Object or an Array
 *
 * @name getCoords
 * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
 * @returns {Array<any>} coordinates
 * @example
 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
 *
 * var coords = turf.getCoords(poly);
 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
 */ function getCoords(coords) {
    if (Array.isArray(coords)) return coords;
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) return coords.geometry.coordinates;
    } else {
        // Geometry
        if (coords.coordinates) return coords.coordinates;
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
/**
 * Get Geometry from Feature or Geometry Object
 *
 * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
 * @returns {Geometry|null} GeoJSON Geometry Object
 * @throws {Error} if geojson is not a Feature or Geometry Object
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getGeom(point)
 * //={"type": "Point", "coordinates": [110, 40]}
 */ function getGeom(geojson) {
    if (geojson.type === "Feature") return geojson.geometry;
    return geojson;
}
/**
 * Get GeoJSON object's type, Geometry type is prioritize.
 *
 * @param {GeoJSON} geojson GeoJSON object
 * @param {string} [name="geojson"] name of the variable to display in error message (unused)
 * @returns {string} GeoJSON type
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getType(point)
 * //="Point"
 */ function getType(geojson, _name) {
    if (geojson.type === "FeatureCollection") return "FeatureCollection";
    if (geojson.type === "GeometryCollection") return "GeometryCollection";
    if (geojson.type === "Feature" && geojson.geometry !== null) return geojson.geometry.type;
    return geojson.type;
}
// http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
// modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
// which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
/**
 * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point
 * resides inside the polygon. The polygon can be convex or concave. The function accounts for holes.
 *
 * @name booleanPointInPolygon
 * @param {Coord} point input point
 * @param {Feature<Polygon|MultiPolygon>} polygon input polygon or multipolygon
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.ignoreBoundary=false] True if polygon boundary should be ignored when determining if
 * the point is inside the polygon otherwise false.
 * @returns {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
 * @example
 * var pt = turf.point([-77, 44]);
 * var poly = turf.polygon([[
 *   [-81, 41],
 *   [-81, 47],
 *   [-72, 47],
 *   [-72, 41],
 *   [-81, 41]
 * ]]);
 *
 * turf.booleanPointInPolygon(pt, poly);
 * //= true
 */ function booleanPointInPolygon(point, polygon1, options) {
    if (options === void 0) options = {
    };
    // validation
    if (!point) throw new Error("point is required");
    if (!polygon1) throw new Error("polygon is required");
    var pt = getCoord(point);
    var geom = getGeom(polygon1);
    var type = geom.type;
    var bbox = polygon1.bbox;
    var polys = geom.coordinates;
    // Quick elimination if point is not inside bbox
    if (bbox && inBBox(pt, bbox) === false) return false;
    // normalize to multipolygon
    if (type === "Polygon") polys = [
        polys
    ];
    var insidePoly = false;
    for(var i = 0; i < polys.length && !insidePoly; i++)// check if it is in the outer ring first
    if (inRing(pt, polys[i][0], options.ignoreBoundary)) {
        var inHole = false;
        var k = 1;
        // check for the point in any of the holes
        while(k < polys[i].length && !inHole){
            if (inRing(pt, polys[i][k], !options.ignoreBoundary)) inHole = true;
            k++;
        }
        if (!inHole) insidePoly = true;
    }
    return insidePoly;
}
/**
 * inRing
 *
 * @private
 * @param {Array<number>} pt [x,y]
 * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
 * @param {boolean} ignoreBoundary ignoreBoundary
 * @returns {boolean} inRing
 */ function inRing(pt, ring, ignoreBoundary) {
    var isInside = false;
    if (ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]) ring = ring.slice(0, ring.length - 1);
    for(var i = 0, j = ring.length - 1; i < ring.length; j = i++){
        var xi = ring[i][0];
        var yi = ring[i][1];
        var xj = ring[j][0];
        var yj = ring[j][1];
        var onBoundary = pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0 && (xi - pt[0]) * (xj - pt[0]) <= 0 && (yi - pt[1]) * (yj - pt[1]) <= 0;
        if (onBoundary) return !ignoreBoundary;
        var intersect = yi > pt[1] !== yj > pt[1] && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi;
        if (intersect) isInside = !isInside;
    }
    return isInside;
}
/**
 * inBBox
 *
 * @private
 * @param {Position} pt point [x,y]
 * @param {BBox} bbox BBox [west, south, east, north]
 * @returns {boolean} true/false if point is inside BBox
 */ function inBBox(pt, bbox) {
    return bbox[0] <= pt[0] && bbox[1] <= pt[1] && bbox[2] >= pt[0] && bbox[3] >= pt[1];
}
// To-Do => Improve Typescript GeoJSON handling
/**
 * Removes redundant coordinates from any GeoJSON Geometry.
 *
 * @name cleanCoords
 * @param {Geometry|Feature} geojson Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.mutate=false] allows GeoJSON input to be mutated
 * @returns {Geometry|Feature} the cleaned input Feature/Geometry
 * @example
 * var line = turf.lineString([[0, 0], [0, 2], [0, 5], [0, 8], [0, 8], [0, 10]]);
 * var multiPoint = turf.multiPoint([[0, 0], [0, 0], [2, 2]]);
 *
 * turf.cleanCoords(line).geometry.coordinates;
 * //= [[0, 0], [0, 10]]
 *
 * turf.cleanCoords(multiPoint).geometry.coordinates;
 * //= [[0, 0], [2, 2]]
 */ function cleanCoords(geojson, options) {
    if (options === void 0) options = {
    };
    // Backwards compatible with v4.0
    var mutate = typeof options === "object" ? options.mutate : options;
    if (!geojson) throw new Error("geojson is required");
    var type = getType(geojson);
    // Store new "clean" points in this Array
    var newCoords = [];
    switch(type){
        case "LineString":
            newCoords = cleanLine(geojson);
            break;
        case "MultiLineString":
        case "Polygon":
            getCoords(geojson).forEach(function(line) {
                newCoords.push(cleanLine(line));
            });
            break;
        case "MultiPolygon":
            getCoords(geojson).forEach(function(polygons) {
                var polyPoints = [];
                polygons.forEach(function(ring) {
                    polyPoints.push(cleanLine(ring));
                });
                newCoords.push(polyPoints);
            });
            break;
        case "Point":
            return geojson;
        case "MultiPoint":
            var existing = {
            };
            getCoords(geojson).forEach(function(coord) {
                var key = coord.join("-");
                if (!Object.prototype.hasOwnProperty.call(existing, key)) {
                    newCoords.push(coord);
                    existing[key] = true;
                }
            });
            break;
        default:
            throw new Error(type + " geometry not supported");
    }
    // Support input mutation
    if (geojson.coordinates) {
        if (mutate === true) {
            geojson.coordinates = newCoords;
            return geojson;
        }
        return {
            type: type,
            coordinates: newCoords
        };
    } else {
        if (mutate === true) {
            geojson.geometry.coordinates = newCoords;
            return geojson;
        }
        return feature({
            type: type,
            coordinates: newCoords
        }, geojson.properties, {
            bbox: geojson.bbox,
            id: geojson.id
        });
    }
}
/**
 * Clean Coords
 *
 * @private
 * @param {Array<number>|LineString} line Line
 * @returns {Array<number>} Cleaned coordinates
 */ function cleanLine(line) {
    var points = getCoords(line);
    // handle "clean" segment
    if (points.length === 2 && !equals(points[0], points[1])) return points;
    var newPoints = [];
    var secondToLast = points.length - 1;
    var newPointsLength = newPoints.length;
    newPoints.push(points[0]);
    for(var i = 1; i < secondToLast; i++){
        var prevAddedPoint = newPoints[newPoints.length - 1];
        if (points[i][0] === prevAddedPoint[0] && points[i][1] === prevAddedPoint[1]) continue;
        else {
            newPoints.push(points[i]);
            newPointsLength = newPoints.length;
            if (newPointsLength > 2) {
                if (isPointOnLineSegment(newPoints[newPointsLength - 3], newPoints[newPointsLength - 1], newPoints[newPointsLength - 2])) newPoints.splice(newPoints.length - 2, 1);
            }
        }
    }
    newPoints.push(points[points.length - 1]);
    newPointsLength = newPoints.length;
    if (equals(points[0], points[points.length - 1]) && newPointsLength < 4) throw new Error("invalid polygon");
    if (isPointOnLineSegment(newPoints[newPointsLength - 3], newPoints[newPointsLength - 1], newPoints[newPointsLength - 2])) newPoints.splice(newPoints.length - 2, 1);
    return newPoints;
}
/**
 * Compares two points and returns if they are equals
 *
 * @private
 * @param {Position} pt1 point
 * @param {Position} pt2 point
 * @returns {boolean} true if they are equals
 */ function equals(pt1, pt2) {
    return pt1[0] === pt2[0] && pt1[1] === pt2[1];
}
/**
 * Returns if `point` is on the segment between `start` and `end`.
 * Borrowed from `@turf/boolean-point-on-line` to speed up the evaluation (instead of using the module as dependency)
 *
 * @private
 * @param {Position} start coord pair of start of line
 * @param {Position} end coord pair of end of line
 * @param {Position} point coord pair of point to check
 * @returns {boolean} true/false
 */ function isPointOnLineSegment(start, end, point) {
    var x = point[0], y = point[1];
    var startX = start[0], startY = start[1];
    var endX = end[0], endY = end[1];
    var dxc = x - startX;
    var dyc = y - startY;
    var dxl = endX - startX;
    var dyl = endY - startY;
    var cross = dxc * dyl - dyc * dxl;
    if (cross !== 0) return false;
    else if (Math.abs(dxl) >= Math.abs(dyl)) return dxl > 0 ? startX <= x && x <= endX : endX <= x && x <= startX;
    else return dyl > 0 ? startY <= y && y <= endY : endY <= y && y <= startY;
}
/**
 * Returns a cloned copy of the passed GeoJSON Object, including possible 'Foreign Members'.
 * ~3-5x faster than the common JSON.parse + JSON.stringify combo method.
 *
 * @name clone
 * @param {GeoJSON} geojson GeoJSON Object
 * @returns {GeoJSON} cloned GeoJSON Object
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]], {color: 'red'});
 *
 * var lineCloned = turf.clone(line);
 */ function clone(geojson) {
    if (!geojson) throw new Error("geojson is required");
    switch(geojson.type){
        case "Feature":
            return cloneFeature(geojson);
        case "FeatureCollection":
            return cloneFeatureCollection(geojson);
        case "Point":
        case "LineString":
        case "Polygon":
        case "MultiPoint":
        case "MultiLineString":
        case "MultiPolygon":
        case "GeometryCollection":
            return cloneGeometry(geojson);
        default:
            throw new Error("unknown GeoJSON type");
    }
}
/**
 * Clone Feature
 *
 * @private
 * @param {Feature<any>} geojson GeoJSON Feature
 * @returns {Feature<any>} cloned Feature
 */ function cloneFeature(geojson) {
    var cloned = {
        type: "Feature"
    };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function(key) {
        switch(key){
            case "type":
            case "properties":
            case "geometry":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add properties & geometry last
    cloned.properties = cloneProperties(geojson.properties);
    cloned.geometry = cloneGeometry(geojson.geometry);
    return cloned;
}
/**
 * Clone Properties
 *
 * @private
 * @param {Object} properties GeoJSON Properties
 * @returns {Object} cloned Properties
 */ function cloneProperties(properties) {
    var cloned = {
    };
    if (!properties) return cloned;
    Object.keys(properties).forEach(function(key) {
        var value = properties[key];
        if (typeof value === "object") {
            if (value === null) // handle null
            cloned[key] = null;
            else if (Array.isArray(value)) // handle Array
            cloned[key] = value.map(function(item) {
                return item;
            });
            else // handle generic Object
            cloned[key] = cloneProperties(value);
        } else cloned[key] = value;
    });
    return cloned;
}
/**
 * Clone Feature Collection
 *
 * @private
 * @param {FeatureCollection<any>} geojson GeoJSON Feature Collection
 * @returns {FeatureCollection<any>} cloned Feature Collection
 */ function cloneFeatureCollection(geojson) {
    var cloned = {
        type: "FeatureCollection"
    };
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function(key) {
        switch(key){
            case "type":
            case "features":
                return;
            default:
                cloned[key] = geojson[key];
        }
    });
    // Add features
    cloned.features = geojson.features.map(function(feature1) {
        return cloneFeature(feature1);
    });
    return cloned;
}
/**
 * Clone Geometry
 *
 * @private
 * @param {Geometry<any>} geometry GeoJSON Geometry
 * @returns {Geometry<any>} cloned Geometry
 */ function cloneGeometry(geometry) {
    var geom = {
        type: geometry.type
    };
    if (geometry.bbox) geom.bbox = geometry.bbox;
    if (geometry.type === "GeometryCollection") {
        geom.geometries = geometry.geometries.map(function(g) {
            return cloneGeometry(g);
        });
        return geom;
    }
    geom.coordinates = deepSlice(geometry.coordinates);
    return geom;
}
/**
 * Deep Slice coordinates
 *
 * @private
 * @param {Coordinates} coords Coordinates
 * @returns {Coordinates} all coordinates sliced
 */ function deepSlice(coords) {
    var cloned = coords;
    if (typeof cloned[0] !== "object") return cloned.slice();
    return cloned.map(function(coord) {
        return deepSlice(coord);
    });
}
/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */ /**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */ function geomEach(geojson, callback) {
    var i, j, g, geometry, stopG, geometryMaybeCollection, isGeometryCollection, featureProperties, featureBBox, featureId, featureIndex = 0, isFeatureCollection = geojson.type === "FeatureCollection", isFeature = geojson.type === "Feature", stop = isFeatureCollection ? geojson.features.length : 1;
    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for(i = 0; i < stop; i++){
        geometryMaybeCollection = isFeatureCollection ? geojson.features[i].geometry : isFeature ? geojson.geometry : geojson;
        featureProperties = isFeatureCollection ? geojson.features[i].properties : isFeature ? geojson.properties : {
        };
        featureBBox = isFeatureCollection ? geojson.features[i].bbox : isFeature ? geojson.bbox : undefined;
        featureId = isFeatureCollection ? geojson.features[i].id : isFeature ? geojson.id : undefined;
        isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
        for(g = 0; g < stopG; g++){
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
            // Handle null Geometry
            if (geometry === null) {
                if (callback(null, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                continue;
            }
            switch(geometry.type){
                case "Point":
                case "LineString":
                case "MultiPoint":
                case "Polygon":
                case "MultiLineString":
                case "MultiPolygon":
                    if (callback(geometry, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                    break;
                case "GeometryCollection":
                    for(j = 0; j < geometry.geometries.length; j++){
                        if (callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                    }
                    break;
                default:
                    throw new Error("Unknown Geometry Type");
            }
        }
        // Only increase `featureIndex` per each feature
        featureIndex++;
    }
}
/*
 (c) 2013, Vladimir Agafonkin
 Simplify.js, a high-performance JS polyline simplification library
 mourner.github.io/simplify-js
*/ // to suit your point format, run search/replace for '.x' and '.y';
// for 3D version, see 3d branch (configurability would draw significant performance overhead)
// square distance between 2 points
function getSqDist(p1, p2) {
    var dx = p1.x - p2.x, dy = p1.y - p2.y;
    return dx * dx + dy * dy;
}
// square distance from a point to a segment
function getSqSegDist(p, p1, p2) {
    var x = p1.x, y = p1.y, dx = p2.x - x, dy = p2.y - y;
    if (dx !== 0 || dy !== 0) {
        var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x = p2.x;
            y = p2.y;
        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }
    dx = p.x - x;
    dy = p.y - y;
    return dx * dx + dy * dy;
}
// rest of the code doesn't care about point format
// basic distance-based simplification
function simplifyRadialDist(points, sqTolerance) {
    var prevPoint = points[0], newPoints = [
        prevPoint
    ], point;
    for(var i = 1, len = points.length; i < len; i++){
        point = points[i];
        if (getSqDist(point, prevPoint) > sqTolerance) {
            newPoints.push(point);
            prevPoint = point;
        }
    }
    if (prevPoint !== point) newPoints.push(point);
    return newPoints;
}
function simplifyDPStep(points, first, last, sqTolerance, simplified) {
    var maxSqDist = sqTolerance, index;
    for(var i = first + 1; i < last; i++){
        var sqDist = getSqSegDist(points[i], points[first], points[last]);
        if (sqDist > maxSqDist) {
            index = i;
            maxSqDist = sqDist;
        }
    }
    if (maxSqDist > sqTolerance) {
        if (index - first > 1) simplifyDPStep(points, first, index, sqTolerance, simplified);
        simplified.push(points[index]);
        if (last - index > 1) simplifyDPStep(points, index, last, sqTolerance, simplified);
    }
}
// simplification using Ramer-Douglas-Peucker algorithm
function simplifyDouglasPeucker(points, sqTolerance) {
    var last = points.length - 1;
    var simplified = [
        points[0]
    ];
    simplifyDPStep(points, 0, last, sqTolerance, simplified);
    simplified.push(points[last]);
    return simplified;
}
// both algorithms combined for awesome performance
function simplify(points, tolerance, highestQuality) {
    if (points.length <= 2) return points;
    var sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;
    points = highestQuality ? points : simplifyRadialDist(points, sqTolerance);
    points = simplifyDouglasPeucker(points, sqTolerance);
    return points;
}
/**
 * Takes a {@link GeoJSON} object and returns a simplified version. Internally uses
 * [simplify-js](http://mourner.github.io/simplify-js/) to perform simplification using the Ramer-Douglas-Peucker algorithm.
 *
 * @name simplify
 * @param {GeoJSON} geojson object to be simplified
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.tolerance=1] simplification tolerance
 * @param {boolean} [options.highQuality=false] whether or not to spend more time to create a higher-quality simplification with a different algorithm
 * @param {boolean} [options.mutate=false] allows GeoJSON input to be mutated (significant performance increase if true)
 * @returns {GeoJSON} a simplified GeoJSON
 * @example
 * var geojson = turf.polygon([[
 *   [-70.603637, -33.399918],
 *   [-70.614624, -33.395332],
 *   [-70.639343, -33.392466],
 *   [-70.659942, -33.394759],
 *   [-70.683975, -33.404504],
 *   [-70.697021, -33.419406],
 *   [-70.701141, -33.434306],
 *   [-70.700454, -33.446339],
 *   [-70.694274, -33.458369],
 *   [-70.682601, -33.465816],
 *   [-70.668869, -33.472117],
 *   [-70.646209, -33.473835],
 *   [-70.624923, -33.472117],
 *   [-70.609817, -33.468107],
 *   [-70.595397, -33.458369],
 *   [-70.587158, -33.442901],
 *   [-70.587158, -33.426283],
 *   [-70.590591, -33.414248],
 *   [-70.594711, -33.406224],
 *   [-70.603637, -33.399918]
 * ]]);
 * var options = {tolerance: 0.01, highQuality: false};
 * var simplified = turf.simplify(geojson, options);
 *
 * //addToMap
 * var addToMap = [geojson, simplified]
 */ function simplify$1(geojson, options) {
    // Optional parameters
    options = options || {
    };
    if (!isObject(options)) throw new Error("options is invalid");
    var tolerance = options.tolerance !== undefined ? options.tolerance : 1;
    var highQuality = options.highQuality || false;
    var mutate = options.mutate || false;
    if (!geojson) throw new Error("geojson is required");
    if (tolerance && tolerance < 0) throw new Error("invalid tolerance");
    // Clone geojson to avoid side effects
    if (mutate !== true) geojson = clone(geojson);
    geomEach(geojson, function(geom) {
        simplifyGeom(geom, tolerance, highQuality);
    });
    return geojson;
}
/**
 * Simplifies a feature's coordinates
 *
 * @private
 * @param {Geometry} geometry to be simplified
 * @param {number} [tolerance=1] simplification tolerance
 * @param {boolean} [highQuality=false] whether or not to spend more time to create a higher-quality simplification with a different algorithm
 * @returns {Geometry} output
 */ function simplifyGeom(geometry, tolerance, highQuality) {
    var type = geometry.type;
    // "unsimplyfiable" geometry types
    if (type === "Point" || type === "MultiPoint") return geometry;
    // Remove any extra coordinates
    cleanCoords(geometry, true);
    var coordinates = geometry.coordinates;
    switch(type){
        case "LineString":
            geometry["coordinates"] = simplifyLine(coordinates, tolerance, highQuality);
            break;
        case "MultiLineString":
            geometry["coordinates"] = coordinates.map(function(lines) {
                return simplifyLine(lines, tolerance, highQuality);
            });
            break;
        case "Polygon":
            geometry["coordinates"] = simplifyPolygon(coordinates, tolerance, highQuality);
            break;
        case "MultiPolygon":
            geometry["coordinates"] = coordinates.map(function(rings) {
                return simplifyPolygon(rings, tolerance, highQuality);
            });
    }
    return geometry;
}
/**
 * Simplifies the coordinates of a LineString with simplify-js
 *
 * @private
 * @param {Array<number>} coordinates to be processed
 * @param {number} tolerance simplification tolerance
 * @param {boolean} highQuality whether or not to spend more time to create a higher-quality
 * @returns {Array<Array<number>>} simplified coords
 */ function simplifyLine(coordinates, tolerance, highQuality) {
    return simplify(coordinates.map(function(coord) {
        return {
            x: coord[0],
            y: coord[1],
            z: coord[2]
        };
    }), tolerance, highQuality).map(function(coords) {
        return coords.z ? [
            coords.x,
            coords.y,
            coords.z
        ] : [
            coords.x,
            coords.y
        ];
    });
}
/**
 * Simplifies the coordinates of a Polygon with simplify-js
 *
 * @private
 * @param {Array<number>} coordinates to be processed
 * @param {number} tolerance simplification tolerance
 * @param {boolean} highQuality whether or not to spend more time to create a higher-quality
 * @returns {Array<Array<Array<number>>>} simplified coords
 */ function simplifyPolygon(coordinates, tolerance, highQuality) {
    return coordinates.map(function(ring) {
        var pts = ring.map(function(coord) {
            return {
                x: coord[0],
                y: coord[1]
            };
        });
        if (pts.length < 4) throw new Error("invalid polygon");
        var simpleRing = simplify(pts, tolerance, highQuality).map(function(coords) {
            return [
                coords.x,
                coords.y
            ];
        });
        //remove 1 percent of tolerance until enough points to make a triangle
        while(!checkValidity(simpleRing)){
            tolerance -= tolerance * 0.01;
            simpleRing = simplify(pts, tolerance, highQuality).map(function(coords) {
                return [
                    coords.x,
                    coords.y
                ];
            });
        }
        if (simpleRing[simpleRing.length - 1][0] !== simpleRing[0][0] || simpleRing[simpleRing.length - 1][1] !== simpleRing[0][1]) simpleRing.push(simpleRing[0]);
        return simpleRing;
    });
}
/**
 * Returns true if ring has at least 3 coordinates and its first coordinate is the same as its last
 *
 * @private
 * @param {Array<number>} ring coordinates to be checked
 * @returns {boolean} true if valid
 */ function checkValidity(ring) {
    if (ring.length < 3) return false;
    //if the last point is the same as the first, it's not a triangle
    return !(ring.length === 3 && ring[2][0] === ring[0][0] && ring[2][1] === ring[0][1]);
}
class GeometryMapper {
    /**
   * Modifies a geometry object in place based on the specification.
   *
   * @param {Object} geometry an object of the form {dimensions: Array(2), coordinates: Array(2)}
   */ modifyGeometry(geometry) {
        if (this.xScale.isGenomeScale) {
            // transforms x part into a standard format
            if (this.trackObject.track.x.type === "genomicRange") this._modifyGenomicRangeX(geometry);
            geometry.coordinates[0] = this.xScale(geometry.coordinates[0]);
        }
        this._modifyStandardX(geometry);
        if (this.yScale.isGenomeScale) {
            // transforms y part into a standard format
            if (this.trackObject.track.y.type === "genomicRange") this._modifyGenomicRangeY(geometry);
            geometry.coordinates[1] = this.yScale(geometry.coordinates[1]);
        }
        this._modifyStandardY(geometry);
    }
    _modifyStandardX(geometry) {
        if (geometry.dimensions[0]) // Transform width from the data point into visible width on the canvas
        geometry.dimensions[0] *= this.xDomainWidth * _specificationProcessorD89A6709Js.a;
        // If there is no width, give very small width for flatbush indexing
        geometry.dimensions[0] = geometry.dimensions[0] || 0.0000000001;
    }
    _modifyStandardY(geometry) {
        if (geometry.dimensions[1]) // Transform height from the data point into visible height on the canvas
        geometry.dimensions[1] *= this.yDomainHeight * _specificationProcessorD89A6709Js.a;
        // If there is no height, give very small height for flatbush indexing
        geometry.dimensions[1] = geometry.dimensions[1] || 0.0000000001;
    }
    _modifyGenomicRangeX(geometry) {
        if (this.trackObject.track.mark === "arc") {
            /**
       * Geometry is in the form
       * {
       *   coordinates: [[[chr1,gene1], [chr2,gene2]], <y-coord handled in _modifyGenomicRangeY>]
       *   dimensions: [[[chr3,gene3], [chr3,gene3]], <height handled in _modifyGenomicRangeY>]
       * }
       *
       * and is transformed to
       * {
       *   coordinates: [x-coord between -1 and 1, <y handled elsewhere>]
       *   dimensions: [width, <height handled elsewhere>]
       * }
       */ const standardized = _specificationProcessorD89A6709Js.t({
                x: geometry.coordinates[0],
                y: 0,
                width: geometry.dimensions[0],
                height: 0
            }, this.specificationObject.xScale, this.specificationObject.yScale);
            geometry.coordinates[0] = standardized.x;
            geometry.dimensions[0] = standardized.width;
        } else {
            /**
       * Geometry is in the form
       * {
       *   coordinates: [[[chr1,gene1], [chr2,gene2]], <y-coord handled in _modifyGenomicRangeY>]
       *   dimensions: [<ignored value>, <height handled elsewhere>]
       * }
       *
       * and is transformed to
       * {
       *   coordinates: [x-coord between -1 and 1, <y handled elsewhere>]
       *   dimensions: [width, <height handled elsewhere>]
       * }
       */ const standardized = _specificationProcessorD89A6709Js.b({
                x: geometry.coordinates[0],
                y: 0
            }, this.specificationObject.xScale, this.specificationObject.yScale);
            geometry.coordinates[0] = standardized.x;
            geometry.dimensions[0] = standardized.width;
        }
    }
    _modifyGenomicRangeY(geometry) {
        // See comments in _modifyGenomicRangeX
        if (this.trackObject.track.mark === "arc") {
            const standardized = _specificationProcessorD89A6709Js.t({
                x: 0,
                y: geometry.coordinates[1],
                width: 0,
                height: geometry.coordinates[1]
            }, this.specificationObject.xScale, this.specificationObject.yScale);
            geometry.coordinates[1] = standardized.y;
            geometry.dimensions[1] = standardized.height;
        } else {
            const standardized = _specificationProcessorD89A6709Js.b({
                x: 0,
                y: geometry.coordinates[1]
            }, this.specificationObject.xScale, this.specificationObject.yScale);
            geometry.coordinates[1] = standardized.y;
            geometry.dimensions[1] = standardized.height;
        }
    }
    /**
   * A class meant to modify data points from the getNextDataPoint method of the {@link Track} object
   * to geometries that coincide with their visibility on the canvas i.e. with a proper width, height,
   * x and y. This class is NOT meant to be used by the WebGLDrawer for rendering. It is solely used
   * by the DataProcessor to properly index the data.
   *
   * @param {SpecificationProcessor} specificationObject of the visualization for these geometries
   * @param {Track} trackObject containing track info for track that these geometries are a part of
   */ constructor(specificationObject, trackObject){
        this.specificationObject = specificationObject;
        this.trackObject = trackObject;
        this.track = trackObject.track;
        this.xScale = this.specificationObject.xScale;
        this.yScale = this.specificationObject.yScale;
        const viewportForSpecification = _rgb6A05388EJs.i(specificationObject.specification);
        if (specificationObject.xScale.isGenomeScale) this.xDomainWidth = 1;
        else this.xDomainWidth = (viewportForSpecification[1] - viewportForSpecification[0]) / 2;
        if (specificationObject.yScale.isGenomeScale) this.yDomainHeight = 1;
        else this.yDomainHeight = (viewportForSpecification[3] - viewportForSpecification[2]) / 2;
    }
}
class DataProcessor {
    /**
   * Callback function that occurs after the specification processor has loaded the appropriate data
   *
   * @param {SpecificationProcessor} specificationHelper that is built in the constructor
   */ indexData(specificationHelper) {
        let totalPoints = 0;
        for (const track1 of specificationHelper.tracks)if (!track1.hasOwnData) {
            // index at 1 means a header needs to be skipped
            totalPoints += track1.index === 1 ? track1.data.length - 1 : track1.data.length;
            break;
        }
        specificationHelper.tracks.filter((track)=>track.hasOwnData
        ).forEach((track)=>totalPoints += track.index === 1 ? track.data.length - 1 : track.data.length
        );
        this.index = new Flatbush(totalPoints);
        this.data = [];
        console.log("Reading data...");
        // Process the global data in the specification processor
        if (specificationHelper.data) {
            for (let track of specificationHelper.tracks)if (!track.hasOwnData) {
                const geometryMapper = new GeometryMapper(specificationHelper, track);
                let currentPoint = track.getNextDataPoint();
                while(currentPoint){
                    geometryMapper.modifyGeometry(currentPoint.geometry);
                    this.data[this.index.add(currentPoint.geometry.coordinates[0], currentPoint.geometry.coordinates[1], currentPoint.geometry.coordinates[0] + currentPoint.geometry.dimensions[0], currentPoint.geometry.coordinates[1] + currentPoint.geometry.dimensions[1])] = currentPoint;
                    currentPoint = track.getNextDataPoint();
                }
                break;
            }
        }
        // Process the data that is local to each track
        specificationHelper.tracks.filter((track)=>track.hasOwnData
        ).forEach((track)=>{
            const geometryMapper = new GeometryMapper(specificationHelper, track);
            let currentPoint = track.getNextDataPoint();
            while(currentPoint){
                geometryMapper.modifyGeometry(currentPoint.geometry);
                this.data[this.index.add(currentPoint.geometry.coordinates[0], currentPoint.geometry.coordinates[1], currentPoint.geometry.coordinates[0] + currentPoint.geometry.dimensions[0], currentPoint.geometry.coordinates[1] + currentPoint.geometry.dimensions[1])] = currentPoint;
                currentPoint = track.getNextDataPoint();
            }
        });
        console.log("Indexing data...");
        this.index.finish();
        console.log("Data processing complete.");
    }
    /**
   * Find the closest point in the data to a given point.
   *
   * @param {Array} point of two floats to find closest point to
   * @returns closest point or undefined
   */ getClosestPoint(point) {
        let indices = this.index.neighbors(point[0], point[1], 1, 0);
        let pointToReturn = this.data[indices];
        let distance = 0;
        let isInside = true;
        if (pointToReturn === undefined) {
            indices = this.index.neighbors(point[0], point[1], 1, 5);
            if (indices.length === 0) indices = this.index.neighbors(point[0], point[1], 1);
            pointToReturn = this.data[indices];
            distance = Math.sqrt((pointToReturn.geometry.coordinates[0] - point[0]) ** 2 + (pointToReturn.geometry.coordinates[1] - point[1]) ** 2);
            isInside = false;
        }
        return {
            closestPoint: pointToReturn,
            distance,
            isInside,
            indices
        };
    }
    /**
   * Get points within a bounding box.
   *
   * @param {Array} points Bounding rectangle in the format of [x1, y1, x2, y2]
   * @returns points in bounding box
   */ selectBox(points) {
        const smallerX = Math.min(points[0], points[2]);
        const smallerY = Math.min(points[1], points[3]);
        const largerX = Math.max(points[0], points[2]);
        const largerY = Math.max(points[1], points[3]);
        let indices = this.index.search(smallerX, smallerY, largerX, largerY);
        let tpoints = indices.map((i)=>this.data[i]
        );
        return {
            indices,
            "points": tpoints
        };
    }
    /**
   * Select points inside a given polygon. Simplify polygon with {@link @turf/simplify}
   * which may cause precision issues with very complex polygons. Uses {@link turf}
   * to determine what points are in polygon.
   *
   * @param {Array} points of a polygon to select points format: [x1,y1,x2,y2,x3,y3,...]
   * @returns points inside lasso
   */ selectLasso(points) {
        let smallestX = Number.POSITIVE_INFINITY;
        let largestX = Number.NEGATIVE_INFINITY;
        let smallestY = Number.POSITIVE_INFINITY;
        let largestY = Number.NEGATIVE_INFINITY;
        const polygonPoints = [];
        for(let i = 0; i < points.length; i += 2){
            if (points[i] < smallestX) smallestX = points[i];
            if (points[i] > largestX) largestX = points[i];
            if (points[i + 1] < smallestY) smallestY = points[i + 1];
            if (points[i + 1] > largestY) largestY = points[i + 1];
            polygonPoints.push([
                points[i],
                points[i + 1]
            ]);
        }
        polygonPoints.push([
            ...polygonPoints[0]
        ]); // First and last must be same position
        const candidatePoints = this.selectBox([
            smallestX,
            smallestY,
            largestX,
            largestY, 
        ]);
        const boundingPolygon = polygon([
            polygonPoints
        ]);
        const simplifiedBoundingPolygon = simplify$1(boundingPolygon, {
            tolerance: 0.01,
            highQuality: false
        });
        let findices = [];
        let fpoints = candidatePoints.points.filter((point, i)=>{
            let tbool = booleanPointInPolygon(point.geometry.coordinates, simplifiedBoundingPolygon);
            if (tbool) findices.push(candidatePoints.indices[i]);
            return tbool;
        });
        return {
            "indices": findices,
            "points": fpoints
        };
    }
    /**
   * A class meant to handle processing of data used in the scatterplot.
   *
   * @param {Array} data the processor is meant to handle and index
   */ constructor(specification){
        this.specification = specification;
        console.log("Loading data...");
        new _specificationProcessorD89A6709Js.S(specification, this.indexData.bind(this));
    }
}
/**
 * The data processor worker is meant to be an interface between the main thread
 * containing the {@link WebGLVis} a {@link DataProcessor}. It's main purpose
 * is to receive messages from the WebGLVis, call the appropriate method of
 * the DataProcessor, then post a message of the results of the method back to
 * the WebGLVis.
 */ self.onmessage = (message)=>{
    switch(message.data.type){
        case "init":
            self.processor = new DataProcessor(message.data.specification);
            break;
        case "selectBox":
            postMessage({
                type: message.data.type,
                selection: self.processor.selectBox(message.data.points),
                bounds: message.data.points
            });
            break;
        case "selectLasso":
            postMessage({
                type: message.data.type,
                selection: self.processor.selectLasso(message.data.points),
                bounds: message.data.points
            });
            break;
        case "getClosestPoint":
        case "getClickPoint":
            const result = self.processor.getClosestPoint(message.data.point);
            postMessage({
                type: message.data.type,
                ...result
            });
            break;
        default:
            console.error(`Received unknown message type: ${message.type}`);
    }
};

},{"./specification-processor-d89a6709.js":"8MdG4","./rgb-6a05388e.js":"7VzxU"}],"8MdG4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "D", ()=>DEFAULT_CHANNELS
);
parcelHelpers.export(exports, "S", ()=>SpecificationProcessor
);
parcelHelpers.export(exports, "V", ()=>VertexCalculator
);
parcelHelpers.export(exports, "a", ()=>SIZE_UNITS
);
parcelHelpers.export(exports, "b", ()=>transformGenomicRangeToStandard
);
parcelHelpers.export(exports, "g", ()=>getDrawModeForTrack
);
parcelHelpers.export(exports, "t", ()=>transformGenomicRangeArcToStandard
);
var _helpers = require("@swc/helpers");
var _rgb6A05388EJs = require("./rgb-6a05388e.js");
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;
var A = -0.14861, B = 1.78277, C = -0.29227, D = -0.90649, E = 1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
function cubehelixConvert(o) {
    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof _rgb6A05388EJs.R)) o = _rgb6A05388EJs.l(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), h = s ? Math.atan2(k, bl) * degrees - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix$2(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
_rgb6A05388EJs.m(Cubehelix, cubehelix$2, _rgb6A05388EJs.n(_rgb6A05388EJs.C, {
    brighter: function(k) {
        k = k == null ? _rgb6A05388EJs.o : Math.pow(_rgb6A05388EJs.o, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? _rgb6A05388EJs.q : Math.pow(_rgb6A05388EJs.q, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * radians, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new _rgb6A05388EJs.R(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
    }
}));
function cubehelix$1(hue) {
    return (function cubehelixGamma(y) {
        y = +y;
        function cubehelix1(start, end) {
            var h = hue((start = cubehelix$2(start)).h, (end = cubehelix$2(end)).h), s = _rgb6A05388EJs.t(start.s, end.s), l = _rgb6A05388EJs.t(start.l, end.l), opacity = _rgb6A05388EJs.t(start.opacity, end.opacity);
            return function(t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
            };
        }
        cubehelix1.gamma = cubehelixGamma;
        return cubehelix1;
    })(1);
}
cubehelix$1(_rgb6A05388EJs.u);
var cubehelixLong = cubehelix$1(_rgb6A05388EJs.t);
// Each size unit refers to 1/200 of the clip space
// e.g. if the canvas is 1000x1000 pixels, and the size value for a mark
// is 10, then that mark takes up 10/200 = 1/20 of the clip space which
// is equal to 50 pixels
const SIZE_UNITS = 0.01;
const NUMBER_OF_VERTICES_PER_ARC = 20;
const ARC_HEIGHT_MODIFIER = 10;
/**
 * Get a curve representing the arc with given start and end points
 *
 * https://math.stackexchange.com/a/1484684
 *
 * @param {Array} P0 start of arc
 * @param {Array} P2 end of arc
 * @returns function mapping 0 to beginning of arc, and 1 to end of arc
 */ const getCurveForArc = (P0, P2)=>{
    const midpoint = [
        P0[0] / 2 + P2[0] / 2,
        P0[1] / 2 + P2[1] / 2
    ];
    const slope = (P2[1] - P0[1]) / (P2[0] - P0[0]);
    const distance = Math.sqrt((P2[1] - P0[1]) ** 2 + (P2[0] - P0[0]) ** 2);
    if (!isFinite(slope)) // vertical slope
    return _rgb6A05388EJs.v(P0, [
        P0[0] - distance,
        midpoint[1]
    ], P2);
    const parameterized = (t)=>[
            midpoint[0] + t / distance * (P0[1] - P2[1]),
            midpoint[1] + t / distance * (P2[0] - P0[0]), 
        ]
    ;
    return _rgb6A05388EJs.v(P0, parameterized(distance * ARC_HEIGHT_MODIFIER), P2);
};
/**
 * Transform a mark with a range for coordinates into a simpler mark to draw.
 *
 * @param {Object} mark that contains ranges for x or y
 * @returns mark with fixed x and y but with appropriate width and height for drawing
 */ const transformGenomicRangeToStandard = (mark, xScale, yScale)=>{
    let x, y, width, height;
    if (Array.isArray(mark.x)) {
        let x1 = xScale(mark.x[0]);
        x = mark.x[0];
        width = (xScale(mark.x[1]) - x1) / SIZE_UNITS;
    } else {
        x = mark.x;
        width = mark.width;
    }
    if (Array.isArray(mark.y)) {
        let y1 = yScale(mark.y[0]);
        y = mark.y[0];
        height = (yScale(mark.y[1]) - y1) / SIZE_UNITS;
    } else {
        y = mark.y;
        height = mark.height;
    }
    return {
        x,
        y,
        width,
        height
    };
};
/**
 * Transform a mark with a range for coordinates and a range for width or height into a simpler mark to draw.
 *
 * @param {Object} mark that contains ranges for x and y, and potentially ranges for width and height
 * @returns mark with fixed x, y, width, and height for drawing
 */ const transformGenomicRangeArcToStandard = (mark, xScale, yScale)=>{
    let x, y, width, height;
    if (Array.isArray(mark.x)) {
        x = xScale.getMidpoint(mark.x[0][0], mark.x[0][1], mark.x[1][0], mark.x[1][1]);
        let x2 = xScale.getMidpoint(mark.width[0][0], mark.width[0][1], mark.width[1][0], mark.width[1][1]);
        let x1ClipSpace = xScale(x);
        let x2ClipSpace = xScale(x2);
        x = x1ClipSpace < x2ClipSpace ? x : x2;
        width = Math.abs(xScale(x2) - x1ClipSpace) / SIZE_UNITS;
    } else {
        x = mark.x;
        width = mark.width;
    }
    if (Array.isArray(mark.y)) {
        y = yScale.getMidpoint(mark.y[0][0], mark.y[0][1], mark.y[1][0], mark.y[1][1]);
        let y2 = yScale.getMidpoint(mark.height[0][0], mark.height[0][1], mark.height[1][0], mark.height[1][1]);
        let y1ClipSpace = xScale(y);
        let y2ClipSpace = xScale(y2);
        y = y1ClipSpace < y2ClipSpace ? y : y2;
        height = Math.abs(yScale(y2) - y1ClipSpace) / SIZE_UNITS;
    } else {
        y = mark.y;
        height = mark.height;
    }
    return {
        x,
        y,
        width,
        height
    };
};
class VertexCalculator {
    /**
   * Construct the vertices of a mark.
   *
   * @param {Object} mark to draw
   * @returns vertices of mark
   */ calculateForMark(mark) {
        if (this.track.x.type === "genomicRange" || this.track.y.type === "genomicRange") {
            if (this.track.mark === "arc") return this._calculateForMark(transformGenomicRangeArcToStandard(mark, this.xScale, this.yScale));
            return this._calculateForMark(transformGenomicRangeToStandard(mark, this.xScale, this.yScale));
        }
        return this._calculateForMark(mark);
    }
    _calculateForMark(mark) {
        if (this.track.mark === "area") {
            const toReturn = this._getVerticesForAreaSection(mark);
            this.lastMark = mark;
            return toReturn;
        }
        if (this.track.mark === "tick") return this._getVerticesForTick(mark);
        if (this.track.mark === "line") return this._getVertexForDot(mark);
        if (this.track.mark === "rect") return this._getVerticesForRect(mark);
        if (this.track.mark === "arc") return this._getVerticesForArc(mark);
        switch(mark.shape){
            case "dot":
                if (this.drawMode === "POINTS") return this._getVertexForDot(mark);
                else return this._getVerticesForSquare(mark);
            case "triangle":
                return this._getVerticesForTriangle(mark);
            case "diamond":
                return this._getVerticesForPolygon(mark, 4);
            case "pentagon":
                return this._getVerticesForPolygon(mark, 5);
            case "hexagon":
                return this._getVerticesForPolygon(mark, 6);
            case "circle":
                return this._getVerticesForPolygon(mark, 16);
            case "cross":
                return this._getVerticesForCross(mark);
            default:
                console.error(`${mark.shape} is not a valid shape!`);
        }
    }
    _mapToGPUSpace(vertices) {
        let isX = false;
        return vertices.map((coord)=>{
            isX = !isX;
            return isX ? this.xScale(coord) : this.yScale(coord);
        });
    }
    _getVerticesForArc(mark) {
        const startPoint = this._mapToGPUSpace([
            mark.x,
            mark.y
        ]);
        const quadraticCurve = getCurveForArc(startPoint, [
            startPoint[0] + mark.width * SIZE_UNITS,
            startPoint[1] + mark.height * SIZE_UNITS, 
        ]);
        const vertices = [
            ...quadraticCurve(0),
            ...quadraticCurve(1 / NUMBER_OF_VERTICES_PER_ARC), 
        ];
        for(let i = 2; i < NUMBER_OF_VERTICES_PER_ARC + 1; i++){
            const nextPoint = quadraticCurve(i / NUMBER_OF_VERTICES_PER_ARC);
            vertices.push(vertices[vertices.length - 2], vertices[vertices.length - 1], nextPoint[0], nextPoint[1]);
        }
        return vertices;
    }
    _getVerticesForAreaSection(mark) {
        if (!this.lastMark) return [];
        return this._mapToGPUSpace([
            mark.x,
            mark.y,
            this.lastMark.x,
            this.lastMark.y,
            mark.x,
            0,
            this.lastMark.x,
            this.lastMark.y,
            this.lastMark.x,
            0,
            mark.x,
            0, 
        ]);
    }
    _getVerticesForPolygon(mark, sides) {
        const center = this._mapToGPUSpace([
            mark.x,
            mark.y
        ]);
        const vertices = [];
        for(let theta = 0; theta < 2 * Math.PI; theta += 2 * Math.PI / sides)vertices.push(center[0], center[1], center[0] + mark.size / 2 * Math.cos(theta) * SIZE_UNITS, center[1] + mark.size / 2 * Math.sin(theta) * SIZE_UNITS, center[0] + mark.size / 2 * Math.cos(theta + 2 * Math.PI / sides) * SIZE_UNITS, center[1] + mark.size / 2 * Math.sin(theta + 2 * Math.PI / sides) * SIZE_UNITS);
        return vertices;
    }
    _getVerticesForTriangle(mark) {
        //     1
        //    / \
        //   2---3
        const center = this._mapToGPUSpace([
            mark.x,
            mark.y
        ]);
        return [
            center[0],
            center[1] + mark.size / 2 * SIZE_UNITS,
            center[0] - mark.size / 2 * SIZE_UNITS,
            center[1] - mark.size / 2 * SIZE_UNITS,
            center[0] + mark.size / 2 * SIZE_UNITS,
            center[1] - mark.size / 2 * SIZE_UNITS, 
        ];
    }
    _getVerticesForSquare(mark) {
        const center = this._mapToGPUSpace([
            mark.x,
            mark.y
        ]);
        return [
            center[0] + mark.size / 2 * SIZE_UNITS,
            center[1] + mark.size / 2 * SIZE_UNITS,
            center[0] - mark.size / 2 * SIZE_UNITS,
            center[1] + mark.size / 2 * SIZE_UNITS,
            center[0] - mark.size / 2 * SIZE_UNITS,
            center[1] - mark.size / 2 * SIZE_UNITS,
            center[0] + mark.size / 2 * SIZE_UNITS,
            center[1] + mark.size / 2 * SIZE_UNITS,
            center[0] - mark.size / 2 * SIZE_UNITS,
            center[1] - mark.size / 2 * SIZE_UNITS,
            center[0] + mark.size / 2 * SIZE_UNITS,
            center[1] - mark.size / 2 * SIZE_UNITS, 
        ];
    }
    _getVerticesForRect(mark) {
        //  1-----------3,6
        //  |       /    |
        //  |     /      |
        // 2,5-----------4
        const center = this._mapToGPUSpace([
            mark.x,
            mark.y
        ]);
        return [
            center[0],
            center[1] + mark.height * SIZE_UNITS,
            center[0],
            center[1],
            center[0] + mark.width * SIZE_UNITS,
            center[1] + mark.height * SIZE_UNITS,
            center[0] + mark.width * SIZE_UNITS,
            center[1],
            center[0],
            center[1],
            center[0] + mark.width * SIZE_UNITS,
            center[1] + mark.height * SIZE_UNITS, 
        ];
    }
    _getVerticesForTick(mark) {
        const center = this._mapToGPUSpace([
            mark.x,
            mark.y
        ]);
        // 1----2
        if (this.track.width) return [
            center[0],
            center[1],
            center[0] + mark.width * SIZE_UNITS,
            center[1], 
        ];
        // 1
        // |
        // 2
        if (mark.height) // default to mark value which has default if height never specified in track
        return [
            center[0],
            center[1],
            center[0],
            center[1] + mark.height * SIZE_UNITS, 
        ];
    }
    /**
   * A class used to construct the vertices of marks that are given to the drawer to draw.
   *
   * @param {Function or GenomeScale} xScale maps the x values of the data to clip space [-1, 1]
   * @param {Function or GenomeScale} yScale maps the y values of the data to clip space [-1, 1]
   * @param {Object} track from specification
   */ constructor(xScale, yScale, track){
        _helpers.defineProperty(this, "_getVertexForDot", (mark)=>this._mapToGPUSpace([
                mark.x,
                mark.y
            ])
        );
        this.xScale = xScale;
        this.yScale = yScale;
        this.track = track;
        this.drawMode = getDrawModeForTrack(track);
    }
}
function colors(specifier) {
    var n = specifier.length / 6 | 0, colors1 = new Array(n), i = 0;
    while(i < n)colors1[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors1;
}
var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
var Accent = colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
var Dark2 = colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
var Paired = colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
var Pastel1 = colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
var Pastel2 = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
var Set1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
var Set2 = colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
var Set3 = colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
var Tableau10 = colors("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
var ramp$1 = (scheme1)=>_rgb6A05388EJs.w(scheme1[scheme1.length - 1])
;
var scheme$q = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors);
var BrBG = ramp$1(scheme$q);
var scheme$p = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors);
var PRGn = ramp$1(scheme$p);
var scheme$o = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors);
var PiYG = ramp$1(scheme$o);
var scheme$n = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors);
var PuOr = ramp$1(scheme$n);
var scheme$m = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors);
var RdBu = ramp$1(scheme$m);
var scheme$l = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors);
var RdGy = ramp$1(scheme$l);
var scheme$k = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors);
var RdYlBu = ramp$1(scheme$k);
var scheme$j = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors);
var RdYlGn = ramp$1(scheme$j);
var scheme$i = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors);
var Spectral = ramp$1(scheme$i);
var scheme$h = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors);
var BuGn = ramp$1(scheme$h);
var scheme$g = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors);
var BuPu = ramp$1(scheme$g);
var scheme$f = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors);
var GnBu = ramp$1(scheme$f);
var scheme$e = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors);
var OrRd = ramp$1(scheme$e);
var scheme$d = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors);
var PuBuGn = ramp$1(scheme$d);
var scheme$c = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors);
var PuBu = ramp$1(scheme$c);
var scheme$b = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors);
var PuRd = ramp$1(scheme$b);
var scheme$a = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors);
var RdPu = ramp$1(scheme$a);
var scheme$9 = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors);
var YlGnBu = ramp$1(scheme$9);
var scheme$8 = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors);
var YlGn = ramp$1(scheme$8);
var scheme$7 = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors);
var YlOrBr = ramp$1(scheme$7);
var scheme$6 = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors);
var YlOrRd = ramp$1(scheme$6);
var scheme$5 = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors);
var Blues = ramp$1(scheme$5);
var scheme$4 = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors);
var Greens = ramp$1(scheme$4);
var scheme$3 = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors);
var Greys = ramp$1(scheme$3);
var scheme$2 = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors);
var Purples = ramp$1(scheme$2);
var scheme$1 = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors);
var Reds = ramp$1(scheme$1);
var scheme = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors);
var Oranges = ramp$1(scheme);
function cividis(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}
var cubehelix = cubehelixLong(cubehelix$2(300, 0.5, 0), cubehelix$2(-240, 0.5, 1));
var warm = cubehelixLong(cubehelix$2(-100, 0.75, 0.35), cubehelix$2(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix$2(260, 0.75, 0.35), cubehelix$2(80, 1.5, 0.8));
var c$1 = cubehelix$2();
function rainbow(t) {
    if (t < 0 || t > 1) t -= Math.floor(t);
    var ts = Math.abs(t - 0.5);
    c$1.h = 360 * t - 100;
    c$1.s = 1.5 - 1.5 * ts;
    c$1.l = 0.8 - 0.9 * ts;
    return c$1 + "";
}
var c = _rgb6A05388EJs.x(), pi_1_3 = Math.PI / 3, pi_2_3 = Math.PI * 2 / 3;
function sinebow(t) {
    var x;
    t = (0.5 - t) * Math.PI;
    c.r = 255 * (x = Math.sin(t)) * x;
    c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
    c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
    return c + "";
}
function turbo(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}
function ramp(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}
var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
var d3 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    schemeCategory10: category10,
    schemeAccent: Accent,
    schemeDark2: Dark2,
    schemePaired: Paired,
    schemePastel1: Pastel1,
    schemePastel2: Pastel2,
    schemeSet1: Set1,
    schemeSet2: Set2,
    schemeSet3: Set3,
    schemeTableau10: Tableau10,
    interpolateBrBG: BrBG,
    schemeBrBG: scheme$q,
    interpolatePRGn: PRGn,
    schemePRGn: scheme$p,
    interpolatePiYG: PiYG,
    schemePiYG: scheme$o,
    interpolatePuOr: PuOr,
    schemePuOr: scheme$n,
    interpolateRdBu: RdBu,
    schemeRdBu: scheme$m,
    interpolateRdGy: RdGy,
    schemeRdGy: scheme$l,
    interpolateRdYlBu: RdYlBu,
    schemeRdYlBu: scheme$k,
    interpolateRdYlGn: RdYlGn,
    schemeRdYlGn: scheme$j,
    interpolateSpectral: Spectral,
    schemeSpectral: scheme$i,
    interpolateBuGn: BuGn,
    schemeBuGn: scheme$h,
    interpolateBuPu: BuPu,
    schemeBuPu: scheme$g,
    interpolateGnBu: GnBu,
    schemeGnBu: scheme$f,
    interpolateOrRd: OrRd,
    schemeOrRd: scheme$e,
    interpolatePuBuGn: PuBuGn,
    schemePuBuGn: scheme$d,
    interpolatePuBu: PuBu,
    schemePuBu: scheme$c,
    interpolatePuRd: PuRd,
    schemePuRd: scheme$b,
    interpolateRdPu: RdPu,
    schemeRdPu: scheme$a,
    interpolateYlGnBu: YlGnBu,
    schemeYlGnBu: scheme$9,
    interpolateYlGn: YlGn,
    schemeYlGn: scheme$8,
    interpolateYlOrBr: YlOrBr,
    schemeYlOrBr: scheme$7,
    interpolateYlOrRd: YlOrRd,
    schemeYlOrRd: scheme$6,
    interpolateBlues: Blues,
    schemeBlues: scheme$5,
    interpolateGreens: Greens,
    schemeGreens: scheme$4,
    interpolateGreys: Greys,
    schemeGreys: scheme$3,
    interpolatePurples: Purples,
    schemePurples: scheme$2,
    interpolateReds: Reds,
    schemeReds: scheme$1,
    interpolateOranges: Oranges,
    schemeOranges: scheme,
    interpolateCividis: cividis,
    interpolateCubehelixDefault: cubehelix,
    interpolateRainbow: rainbow,
    interpolateWarm: warm,
    interpolateCool: cool,
    interpolateSinebow: sinebow,
    interpolateTurbo: turbo,
    interpolateViridis: viridis,
    interpolateMagma: magma,
    interpolateInferno: inferno,
    interpolatePlasma: plasma
});
// Default channel values of specification which is passed to webgl drawer
const DEFAULT_CHANNELS = Object.freeze({
    size: {
        value: 1,
        numComponents: 1,
        type: "float"
    },
    color: {
        value: 16581375,
        numComponents: 1,
        type: "float"
    },
    x: {
        value: 0,
        numComponents: null,
        type: null
    },
    y: {
        value: 0,
        numComponents: null,
        type: null
    },
    opacity: {
        value: 1,
        numComponents: 1,
        type: "float"
    },
    shape: {
        value: "dot",
        numComponents: null,
        type: null
    },
    width: {
        // Default values for width and height add complications
        // to mapping geometry and creating tick vertices
        value: undefined,
        numComponents: 1,
        type: "float"
    },
    height: {
        value: undefined,
        numComponents: 1,
        type: "float"
    }
});
const DEFAULT_MAX_SIZE = 100;
const DEFAULT_MIN_SIZE = 0;
const DEFAULT_MIN_OPACITY = 0;
const DEFAULT_MIN_WIDTH = 0;
const DEFAULT_MIN_HEIGHT = 0;
const DEFAULT_MAX_WIDTH = 1 / SIZE_UNITS;
const DEFAULT_MAX_HEIGHT = 1 / SIZE_UNITS;
const DEFAULT_COLOR_SCHEME = "interpolateBrBG";
// first value is undefined as categories are 1-indexed
const SHAPES = [
    undefined,
    "dot",
    "triangle",
    "circle",
    "diamond"
];
/**
 * Given a track, determine the WebGL draw mode for it
 *
 * @param {Object} track from specification
 * @returns WebGLDrawMode as a string
 */ const getDrawModeForTrack = (track)=>{
    switch(track.mark){
        case "line":
            return "LINE_STRIP";
        case "tick":
        case "arc":
            return "LINES";
        case "point":
            if (track.shape && track.shape.value !== "dot") return "TRIANGLES";
            else return "POINTS";
        case "rect":
        case "area":
            return "TRIANGLES";
    }
};
class SpecificationProcessor {
    /**
   * Get the next track to process
   * @returns {@link Track}
   */ getNextTrack() {
        if (this.index >= this.tracks.length) return null;
        return this.tracks[this.index++];
    }
    /**
   * Process a specification by reading in the data, the channel information, and producing an
   * iterator like interface with getNextTrack to feed to a drawer.
   *
   * @param {Object} specification user defined specification
   * @param {Function} callback function to call after all the data has been loaded
   */ constructor(specification, callback){
        this.index = 0;
        this.specification = specification;
        if (typeof specification.defaultData === "string") // data is a url to get
        this.dataPromise = fetch(specification.defaultData).then((response)=>response.text()
        ).then((text)=>this.data = text.split("\n")
        );
        else if (specification.defaultData) {
            // default data is defined, assumed to be an object
            this.data = specification.defaultData;
            this.isInlineData = true;
        }
        this.tracks = specification.tracks.map((track)=>new Track(this, track)
        );
        const allPromises = this.tracks.map((track)=>track.dataPromise
        ).filter((p)=>p
        ); // Removes undefined
        if (this.dataPromise) allPromises.push(this.dataPromise);
        this.xScale = _rgb6A05388EJs.h("x", specification);
        this.yScale = _rgb6A05388EJs.h("y", specification);
        // When all tracks have acquired their data, call the callback
        // TODO: Allow tracks to be processed while waiting for others, need to keep in mind order
        Promise.all(allPromises).then(()=>callback(this)
        );
    }
}
class Track {
    /**
   * Read the headers from the first row of data and then build functions to map a data row
   * to a channel value for drawing. Ultimately a method due to clunky constructor.
   */ processHeadersAndMappers() {
        // Processing headers
        if (this.isInlineData) {
            this.headers = Object.keys(this.data);
            this.data.length = this.data[this.headers[0]].length; // assign length to data object for iteration
            this.index = 0;
        } else {
            this.headers = this.data[0].split(",");
            this.index = 1; // 1 to skip header
        }
        // Creating channel mappers
        this.channelMaps = new Map();
        Object.keys(DEFAULT_CHANNELS).forEach((channel)=>{
            this.channelMaps.set(channel, this.buildMapperForChannel(channel));
        });
    }
    /**
   * Get the next data point from the track. Returns null when all points have been returned.
   * @returns A data point with the x and y coordinates and other attributes from the header
   */ getNextDataPoint() {
        if (this.index >= this.data.length) return null;
        const toReturn = {
            geometry: {
                coordinates: [],
                dimensions: []
            }
        };
        let splitted;
        if (this.isInlineData) splitted = this.headers.map((header)=>this.data[header][this.index]
        );
        else {
            const currRow = this.data[this.index];
            splitted = currRow.split(",");
        }
        this.index++;
        this.headers.forEach((header, index)=>{
            toReturn[header] = splitted[index];
        });
        const rawHeight = this.channelMaps.get("height")(splitted);
        const rawWidth = this.channelMaps.get("width")(splitted);
        const x = this.channelMaps.get("x")(splitted);
        const y = this.channelMaps.get("y")(splitted);
        toReturn.geometry.coordinates.push(x, y);
        toReturn.geometry.dimensions.push(rawWidth, rawHeight);
        return toReturn;
    }
    /**
   * Get the next mark from the track for the drawer to process. Returns null when all
   * marks have been returned.
   * @returns An object containing information used to draw a mark for a row of data.
   */ getNextMark() {
        // Getting the next mark cannot modify the data objects as other tracks may refer to
        // the same data
        if (this.index >= this.data.length) return null;
        const toReturn = {
        };
        let splitted;
        if (this.isInlineData) splitted = this.headers.map((header)=>this.data[header][this.index]
        );
        else {
            const currRow = this.data[this.index];
            splitted = currRow.split(",");
        }
        this.index++;
        this.channelMaps.forEach((mapper, channel)=>{
            toReturn[channel] = mapper(splitted);
        });
        return toReturn;
    }
    /**
   * Process a track from a specification by loading data and producing an iterator
   * like interface with getNextDataPoint or getNextMark.
   *
   * @param {Object} specification user defined visualization
   * @param {Object} track user defined track
   */ constructor(specification, track){
        _helpers.defineProperty(this, /**
   * Builds a function which maps an attribute value to a channel value for use by the drawer.
   * The function will return a default if not present in the track, or a constant if
   * value is defined.
   *
   * @param {String} channel one of the channels listed in default channels
   * @returns the function
   */ "buildMapperForChannel", (channel)=>{
            if (channel in this.track) {
                const channelInfo = this.track[channel];
                if ("value" in channelInfo) {
                    if (channel === "color") channelInfo.value = _rgb6A05388EJs.k(channelInfo.value);
                    return ()=>channelInfo.value
                    ;
                } else {
                    const attributeIndex = this.headers.indexOf(channelInfo.attribute);
                    let attrMapper;
                    switch(channelInfo.type){
                        case "inline":
                            attrMapper = buildMapperForInlineChannel(channel);
                            break;
                        case "quantitative":
                            attrMapper = buildMapperForQuantitiveChannel(channel, channelInfo);
                            break;
                        case "categorical":
                            attrMapper = buildMapperForCategoricalChannel(channel, channelInfo);
                            break;
                        case "genomic":
                            const chrAttributeIndex = this.headers.indexOf(channelInfo.chrAttribute);
                            const geneAttributeIndex = this.headers.indexOf(channelInfo.geneAttribute);
                            attrMapper = buildMapperForGenomicChannel(channel);
                            return (row)=>attrMapper(row[chrAttributeIndex], row[geneAttributeIndex])
                            ;
                        case "genomicRange":
                            const genomicAttributeIndices = [
                                this.headers.indexOf(channelInfo.chrAttribute),
                                this.headers.indexOf(channelInfo.startAttribute),
                                this.headers.indexOf(channelInfo.endAttribute), 
                            ];
                            attrMapper = buildMapperForGenomicRangeChannel(channel);
                            return (row // Pass in values for the genomic attributes to mapper
                            )=>attrMapper(...genomicAttributeIndices.map((index)=>row[index]
                                ))
                            ;
                    }
                    return (row)=>attrMapper(row[attributeIndex])
                    ;
                }
            } else return ()=>DEFAULT_CHANNELS[channel].value
            ;
        });
        this.track = track;
        if (typeof track.data === "string") // Track has its own data to GET
        this.dataPromise = fetch(track.data).then((response)=>response.text()
        ).then((text)=>{
            this.data = text.split(/[\n\r]+/);
            this.processHeadersAndMappers();
            this.hasOwnData = true;
        });
        else if (track.data) {
            // Track has its own inline data
            this.data = track.data;
            this.isInlineData = true;
            this.processHeadersAndMappers();
            this.hasOwnData = true;
        } else if (specification.data) {
            // Track does not have its own data, but the specification has default data
            this.data = specification.data;
            this.isInlineData = specification.isInlineData;
            this.processHeadersAndMappers();
        } else if (specification.dataPromise) // Track does not have its own data, but the specification is GETting default data
        specification.dataPromise.then(()=>{
            this.data = specification.data;
            this.processHeadersAndMappers();
        });
        else console.error(`Could not find data (no defaultData in specification and no data specified for this track) for track ${track}.`);
    }
}
/**
 * Build a function which maps an attribute that is a channel value to a compatible value.
 *
 * @param {String} channel the name of the channel to build an inline mapper for
 * @param {Object} channelInfo the info of the channel from a track
 * @returns a function that maps attribute values to appropriate channel values.
 */ const buildMapperForInlineChannel = (channel, channelInfo)=>{
    switch(channel){
        case "width":
        case "height":
        case "size":
            return (dimension)=>parseFloat(dimension)
            ;
        case "color":
            return (color)=>_rgb6A05388EJs.k(color)
            ;
        default:
            console.info(`No special behavior for ${channel} as an inline attribute.`);
            return (inlineValue)=>inlineValue
            ;
    }
};
/**
 * Build a function which maps a numerical value for an attribute to a property of a mark
 * @param {*} channel the name of the quantitative channel to map
 * @param {*} channelInfo the object containing info for this channel from the specification
 * @returns a function that maps a data attribute value to a channel value
 */ const buildMapperForQuantitiveChannel = (channel, channelInfo)=>{
    switch(channel){
        case "x":
        case "y":
            // Map x and y to itself, but we need a function to do it
            return (coord)=>parseFloat(coord)
            ;
        case "opacity":
            return _rgb6A05388EJs.s(channelInfo.domain, [
                channelInfo.minOpacity || DEFAULT_MIN_OPACITY,
                1, 
            ]);
        case "size":
            return _rgb6A05388EJs.s(channelInfo.domain, [
                channelInfo.minSize || DEFAULT_MIN_SIZE,
                channelInfo.maxSize || DEFAULT_MAX_SIZE, 
            ]);
        case "color":
            const d3colorScale = !channelInfo.colorScheme || !(channelInfo.colorScheme in d3) ? d3[DEFAULT_COLOR_SCHEME] : d3[channelInfo.colorScheme];
            const zeroToOneScale = _rgb6A05388EJs.s(channelInfo.domain, [
                0,
                1
            ]);
            return (attrValue)=>_rgb6A05388EJs.y(d3colorScale(zeroToOneScale(attrValue)))
            ;
        case "width":
            return _rgb6A05388EJs.s(channelInfo.domain, [
                channelInfo.minWidth || DEFAULT_MIN_WIDTH,
                channelInfo.maxWidth || DEFAULT_MAX_WIDTH, 
            ]);
        case "height":
            return _rgb6A05388EJs.s(channelInfo.domain, [
                channelInfo.minHeight || DEFAULT_MIN_HEIGHT,
                channelInfo.maxHeight || DEFAULT_MAX_WIDTH, 
            ]);
        default:
            console.error(`${channel} is not a supported channel for quantitative attributes!`);
    }
};
/**
 * Build a function which maps a discrete (integers are possible) value for an attribute
 * to a property of a mark
 * @param {*} channel the name of the categorical channel to map
 * @param {*} channelInfo the object containing info for this channel from the specification
 * @returns a function that maps a data attribute value to a channel value
 */ const buildMapperForCategoricalChannel = (channel, channelInfo)=>{
    const categoryTracker = new Map();
    let channelScale;
    switch(channel){
        case "x":
        case "y":
            // +1 here to avoid setting x or y at a boundary that makes it not visible
            channelScale = _rgb6A05388EJs.s([
                1,
                channelInfo.cardinality + 1
            ], [
                -1,
                1
            ]);
            break;
        case "opacity":
            channelScale = _rgb6A05388EJs.s([
                1,
                channelInfo.cardinality
            ], [
                channelInfo.minOpacity || DEFAULT_MIN_OPACITY,
                1
            ]);
            break;
        case "size":
            channelScale = _rgb6A05388EJs.s([
                1,
                channelInfo.cardinality
            ], [
                channelInfo.minSize || DEFAULT_MIN_SIZE,
                channelInfo.maxSize || DEFAULT_MAX_SIZE, 
            ]);
            break;
        case "shape":
            channelScale = (categoryId)=>SHAPES[categoryId % SHAPES.length]
            ;
            break;
        case "color":
            let d3colorScale = !channelInfo.colorScheme || !(channelInfo.colorScheme in d3) ? d3[DEFAULT_COLOR_SCHEME] : d3[channelInfo.colorScheme];
            if (Array.isArray(d3colorScale)) {
                console.error("Currenty only interpolating color schemes are supported, using default");
                d3colorScale = d3[DEFAULT_COLOR_SCHEME];
            }
            const zeroToOneScale = _rgb6A05388EJs.s([
                1,
                channelInfo.cardinality
            ], [
                0,
                1
            ]);
            channelScale = (categoryId)=>_rgb6A05388EJs.y(d3colorScale(zeroToOneScale(categoryId)))
            ;
            break;
        case "width":
            channelScale = _rgb6A05388EJs.s([
                1,
                channelInfo.cardinality
            ], [
                channelInfo.minWidth || DEFAULT_MIN_WIDTH,
                channelInfo.maxWidth || DEFAULT_MAX_WIDTH, 
            ]);
            break;
        case "height":
            channelScale = _rgb6A05388EJs.s([
                1,
                channelInfo.cardinality
            ], [
                channelInfo.minHeight || DEFAULT_MIN_HEIGHT,
                channelInfo.maxHeight || DEFAULT_MAX_HEIGHT, 
            ]);
            break;
        default:
            console.error(`${channel} is not a supported channel for categorical attributes!`);
    }
    return (attrValue)=>{
        if (!categoryTracker.has(attrValue)) categoryTracker.set(attrValue, categoryTracker.size + 1);
        return channelScale(categoryTracker.get(attrValue));
    };
};
/**
 * Build a function which maps a genome chr, gene, to an object consumable by a GenomeScale
 * @param {*} channel either x or y
 * @param {*} channelInfo the object containing info for this channel from the specification
 * @returns a function that maps (genomeChr, geneLoc) -> [chrId, geneLocation]
 *  ex: ["X", 200]
 */ const buildMapperForGenomicChannel = (channel, channelInfo)=>{
    switch(channel){
        case "x":
        case "y":
            return (chr, gene)=>{
                let chrId = chr.startsWith("chr") ? chr.substring(3) : chr.toString();
                return [
                    chrId,
                    parseInt(gene)
                ];
            };
        default:
            console.error(`${channel} is not a supported channel for genomic attributes!`);
    }
};
/**
 * Build a function which maps a genome chr, start, and end to an object consumable by a scale
 * @param {*} channel either x or y, width or height may be included if doing arc marks
 * @param {*} channelInfo the object containing info for this channel from the specification
 * @returns a function that maps (genomeChr, genomeStart, genomeEnd) -> an object containing mark metadata for position
 *  format: [chrId, geneLocation, chrId2, geneLocation2]
 *  ex: ["1", 1000, "X", 2000]
 */ const buildMapperForGenomicRangeChannel = (channel, channelInfo)=>{
    switch(channel){
        case "width":
        case "height":
        case "x":
        case "y":
            return (chr, genomeStart, genomeEnd)=>{
                let chrId = chr.startsWith("chr") ? chr.substring(3) : chr.toString();
                return [
                    [
                        chrId,
                        parseInt(genomeStart)
                    ],
                    [
                        chrId,
                        parseInt(genomeEnd)
                    ], 
                ];
            };
        default:
            console.error(`${channel} is not a supported channel for genomic attributes!`);
    }
};

},{"@swc/helpers":"2rQfr","./rgb-6a05388e.js":"7VzxU","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"2rQfr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);

},{"./_apply_decorated_descriptor":"3AWUt","./_array_with_holes":"cN59m","./_array_without_holes":"6rjQB","./_assert_this_initialized":"kg74q","./_async_generator":"60d4r","./_async_generator_delegate":"jrezh","./_async_iterator":"hGTnD","./_async_to_generator":"dF4Td","./_await_async_generator":"49wHB","./_await_value":"b0y3p","./_class_call_check":"kJQrX","./_class_name_tdz_error":"9VF3J","./_class_private_field_get":"j3QxZ","./_class_private_field_loose_base":"kkRy4","./_class_private_field_set":"ksglD","./_class_private_method_get":"feMug","./_class_private_method_set":"gJULX","./_class_static_private_field_spec_get":"2E92f","./_class_static_private_field_spec_set":"hGQFz","./_construct":"17Pls","./_create_class":"7urX5","./_decorate":"cNGiz","./_defaults":"bjie6","./_define_enumerable_properties":"5Hq91","./_define_property":"5xMdT","./_extends":"hqL4I","./_get":"1jFYg","./_get_prototype_of":"b9XXx","./_inherits":"9uJI3","./_inherits_loose":"iFB08","./_initializer_define_property":"8QIAs","./_initializer_warning_helper":"4wXp9","./_instanceof":"ddB2S","./_interop_require_default":"2daGi","./_interop_require_wildcard":"gdy0W","./_is_native_function":"i9pFs","./_iterable_to_array":"ioXeR","./_iterable_to_array_limit":"iOmBC","./_iterable_to_array_limit_loose":"7iDCs","./_jsx":"lt2Kg","./_new_arrow_check":"k6rxx","./_non_iterable_rest":"7Us0e","./_non_iterable_spread":"9Mspd","./_object_spread":"7QFud","./_object_without_properties":"4iNBY","./_object_without_properties_loose":"6eloX","./_possible_constructor_return":"2F8GF","./_read_only_error":"7mv8w","./_set":"4U2qv","./_set_prototype_of":"dGE0i","./_skip_first_generator_next":"hn4d9","./_sliced_to_array":"d2ztR","./_sliced_to_array_loose":"kaaMv","./_super_prop_base":"hUklN","./_tagged_template_literal":"byrTP","./_tagged_template_literal_loose":"kmb5f","./_throw":"tbdUu","./_to_array":"i1PMX","./_to_consumable_array":"9UyZH","./_to_primitive":"2vZw6","./_to_property_key":"6KRkA","./_type_of":"g37VN","./_wrap_async_generator":"hs7ny","./_wrap_native_super":"a0Fbb","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"3AWUt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc1 = {
    };
    Object["keys"](descriptor).forEach(function(key) {
        desc1[key] = descriptor[key];
    });
    desc1.enumerable = !!desc1.enumerable;
    desc1.configurable = !!desc1.configurable;
    if ('value' in desc1 || desc1.initializer) desc1.writable = true;
    desc1 = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc1);
    if (context && desc1.initializer !== void 0) {
        desc1.value = desc1.initializer ? desc1.initializer.call(context) : void 0;
        desc1.initializer = undefined;
    }
    if (desc1.initializer === void 0) {
        Object["defineProperty"](target, property, desc1);
        desc1 = null;
    }
    return desc1;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"fn8Fk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cN59m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"6rjQB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
exports.default = _arrayWithoutHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"kg74q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"60d4r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg1) {
        try {
            var result = gen[key](arg1);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"b0y3p","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"b0y3p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"jrezh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {
    }, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"hGTnD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"dF4Td":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"49wHB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"b0y3p","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"kJQrX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"9VF3J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"j3QxZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver).value;
}
exports.default = _classPrivateFieldGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"kkRy4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"ksglD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classPrivateFieldSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"feMug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"gJULX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"2E92f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    return descriptor.value;
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"hGQFz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"17Pls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent1, args1, Class1) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"7urX5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"cNGiz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other1;
        if (element.kind === "method" && (other1 = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other1.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other1)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other1.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other1)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other1.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other1);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError("An element descriptor's .kind property must be either \"method\" or \"field\", but a decorator created an element descriptor with .kind \"" + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError("An element descriptor's .placement property must be one of \"static\", \"prototype\" or \"own\", but a decorator created an element descriptor with .placement \"" + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({
        }, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator created a class descriptor with .kind \"" + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"i1PMX","./_to_property_key":"6KRkA","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"i1PMX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"cN59m","./_iterable_to_array":"ioXeR","./_non_iterable_rest":"7Us0e","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"ioXeR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"7Us0e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"6KRkA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"g37VN","./_to_primitive":"2vZw6","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"g37VN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"2vZw6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"g37VN","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"bjie6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"5Hq91":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"5xMdT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"hqL4I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"1jFYg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get(target, property, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return get(target1, property1, receiver1);
}
function _get(target, property, reciever) {
    return get(target, property, reciever);
}
exports.default = _get;

},{"./_super_prop_base":"hUklN","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"hUklN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"b9XXx","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"b9XXx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o1) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o1);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"9uJI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"dGE0i","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"dGE0i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o1, p1) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return setPrototypeOf(o1, p1);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"iFB08":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"8QIAs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4wXp9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"ddB2S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"2daGi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"gdy0W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                };
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"i9pFs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"iOmBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"7iDCs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];
    for(var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"lt2Kg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {
    };
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"k6rxx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"9Mspd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"7QFud":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"5xMdT","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4iNBY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"6eloX","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"6eloX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"2F8GF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"kg74q","./_type_of":"g37VN","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"7mv8w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"4U2qv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _definePropertyDefault.default(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"5xMdT","./_super_prop_base":"hUklN","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"hn4d9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"d2ztR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"cN59m","./_iterable_to_array":"ioXeR","./_non_iterable_rest":"7Us0e","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"kaaMv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"cN59m","./_iterable_to_array_limit_loose":"7iDCs","./_non_iterable_rest":"7Us0e","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"byrTP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"kmb5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"tbdUu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"9UyZH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"6rjQB","./_iterable_to_array":"ioXeR","./_non_iterable_spread":"9Mspd","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"hs7ny":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"60d4r","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"a0Fbb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunctionDefault.default(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class);
    };
    return wrapNativeSuper(Class1);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"17Pls","./_is_native_function":"i9pFs","./_get_prototype_of":"b9XXx","./_set_prototype_of":"dGE0i","@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}],"7VzxU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "C", ()=>Color
);
parcelHelpers.export(exports, "D", ()=>DEFAULT_WIDTH
);
parcelHelpers.export(exports, "R", ()=>Rgb
);
parcelHelpers.export(exports, "a", ()=>color
);
parcelHelpers.export(exports, "b", ()=>formatPrefix
);
parcelHelpers.export(exports, "c", ()=>constant
);
parcelHelpers.export(exports, "d", ()=>format
);
parcelHelpers.export(exports, "e", ()=>exponent
);
parcelHelpers.export(exports, "f", ()=>formatSpecifier
);
parcelHelpers.export(exports, "g", ()=>getDimAndMarginStyleForSpecification
);
parcelHelpers.export(exports, "h", ()=>getScaleForSpecification
);
parcelHelpers.export(exports, "i", ()=>getViewportForSpecification
);
parcelHelpers.export(exports, "j", ()=>DEFAULT_HEIGHT
);
parcelHelpers.export(exports, "k", ()=>colorSpecifierToHex
);
parcelHelpers.export(exports, "l", ()=>rgbConvert
);
parcelHelpers.export(exports, "m", ()=>define
);
parcelHelpers.export(exports, "n", ()=>extend
);
parcelHelpers.export(exports, "o", ()=>brighter
);
parcelHelpers.export(exports, "p", ()=>precisionRound
);
parcelHelpers.export(exports, "q", ()=>darker
);
parcelHelpers.export(exports, "r", ()=>rgb
);
parcelHelpers.export(exports, "s", ()=>scale
);
parcelHelpers.export(exports, "t", ()=>nogamma
);
parcelHelpers.export(exports, "u", ()=>hue
);
parcelHelpers.export(exports, "v", ()=>getQuadraticBezierCurveForPoints
);
parcelHelpers.export(exports, "w", ()=>rgbBasis
);
parcelHelpers.export(exports, "x", ()=>rgb$1
);
parcelHelpers.export(exports, "y", ()=>rgbStringToHex
);
function formatDecimal(x) {
    return Math.abs(x = Math.round(x)) >= 1000000000000000000000 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}
function exponent(x) {
    return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
}
function formatNumerals(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
}
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent1 = d[1], i = exponent1 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent1 / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}
function formatRounded(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent2 = d[1];
    return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
var formatTypes = {
    "%": (x, p)=>(x * 100).toFixed(p)
    ,
    "b": (x)=>Math.round(x).toString(2)
    ,
    "c": (x)=>x + ""
    ,
    "d": formatDecimal,
    "e": (x, p)=>x.toExponential(p)
    ,
    "f": (x, p)=>x.toFixed(p)
    ,
    "g": (x, p)=>x.toPrecision(p)
    ,
    "o": (x)=>Math.round(x).toString(8)
    ,
    "p": (x, p)=>formatRounded(x * 100, p)
    ,
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": (x)=>Math.round(x).toString(16).toUpperCase()
    ,
    "x": (x)=>Math.round(x).toString(16)
};
function identity(x) {
    return x;
}
var map = Array.prototype.map, prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function formatLocale(locale1) {
    var group = locale1.grouping === undefined || locale1.thousands === undefined ? identity : formatGroup(map.call(locale1.grouping, Number), locale1.thousands + ""), currencyPrefix = locale1.currency === undefined ? "" : locale1.currency[0] + "", currencySuffix = locale1.currency === undefined ? "" : locale1.currency[1] + "", decimal = locale1.decimal === undefined ? "." : locale1.decimal + "", numerals = locale1.numerals === undefined ? identity : formatNumerals(map.call(locale1.numerals, String)), percent = locale1.percent === undefined ? "%" : locale1.percent + "", minus = locale1.minus === undefined ? "−" : locale1.minus + "", nan = locale1.nan === undefined ? "NaN" : locale1.nan + "";
    function newFormat(specifier) {
        specifier = formatSpecifier(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format1(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = formatTrim(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format1.toString = function() {
            return specifier + "";
        };
        return format1;
    }
    function formatPrefix1(specifier, value1) {
        var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value1) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix1
    };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}
function precisionRound(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, exponent(max) - exponent(step)) + 1;
}
/**
 * Create a function which maps a genome pair to a location in the entire genome
 *
 * @param {String} genomeId key from genomeSizes object
 * @returns a function which maps a (chrId, pairNum) => to
 *  a number between 1 and total number of genes in the genome
 */ const createPairMapperToGenome = (genomeId)=>{
    let chrSizes = genomeSizes[genomeId];
    let chrStarts = new Map();
    let cumulativeTotal = 0;
    chrSizes.forEach((value, key)=>{
        chrStarts.set(key, cumulativeTotal);
        cumulativeTotal += value;
    });
    return (chr, pairNum)=>{
        return chrStarts.get(chr) + pairNum;
    };
};
class GenomeScale {
    /**
   * Map a genome pair to [-1, 1] with the parts.
   *
   * @param {String} chr id of chromosome in genome
   * @param {Number} pair location in chromosome
   * @returns value in [-1, 1] corresponding to genome range location
   */ toClipSpaceFromParts(chr, pair) {
        return this.mapGenomeIndexToClipSpace(this.mapPairToGenomeIndex(chr, pair));
    }
    /**
   * Utility method for calling this.toClipSpaceFromParts.
   *
   * @param {String} pairStr in form "chrID:geneNumber" ex: "chr1:1000"
   * @returns value in [-1, 1] corresponding to genome range location
   */ toClipSpaceFromString(pairStr) {
        let [chr, pair] = pairStr.substring(3).split(":");
        pair = parseInt(pair);
        return this.toClipSpaceFromParts(chr, pair);
    }
    /**
   * Get the gene id from a value between [-1, 1]
   *
   * @param {Number} num number between [-1, 1]
   * @param {String} formatting used for formatting gene number with d3-format
   * @returns `chr${chrId}:${chrLoc}`
   */ inverse(num, formatting = false) {
        let genomeSpot = Math.floor(this.mapGenomeIndexToClipSpaceInverse(num));
        let chrId;
        let chrLoc;
        let cumulativeTotal = 0;
        for (const [chrKey, pairCount] of genomeSizes[this.genomeId].entries()){
            if (cumulativeTotal + pairCount >= genomeSpot) {
                chrLoc = genomeSpot - cumulativeTotal;
                chrId = chrKey;
                break;
            }
            cumulativeTotal += pairCount;
        }
        return formatting ? `chr${chrId}:${format(formatting)(chrLoc)}` : `chr${chrId}:${chrLoc}`;
    }
    getMidpoint(chr1, gene1, chr2, gene2) {
        const x1 = this.toClipSpaceFromParts(chr1, gene1);
        const x2 = this.toClipSpaceFromParts(chr2, gene2);
        const middleGene = this.inverse((x1 + x2) / 2);
        const [chrId, gene] = middleGene.substring(3).split(":");
        return [
            chrId,
            parseInt(gene)
        ];
    }
    /**
   * Get a sequence of ticks for a range in the genome.
   *
   * @param {Number} start number between [-1, 1]
   * @param {Number} end number between [-1, 1] > start
   * @returns object with tickCoords and corresponding tickLabels property
   */ getTickCoordsAndLabels(start, end) {
        let [startChr, startPair] = this.inverse(start).substring(3).split(":");
        let [endChr, endPair] = this.inverse(end).substring(3).split(":");
        const toReturn = [];
        let suggestedFormat;
        if (startChr === endChr) {
            let difference = endPair - startPair;
            let magnitude = Math.floor(Math.log10(difference));
            let startingValue = startPair - startPair % 10 ** magnitude;
            suggestedFormat = precisionRound(10 ** magnitude, startingValue);
            for(let currValue = startingValue; currValue < endPair; currValue += 10 ** magnitude)toReturn.push(this.toClipSpaceFromParts(startChr, currValue));
        } else {
            suggestedFormat = "1";
            for (const chrId of genomeSizes[this.genomeId].keys())toReturn.push(this.toClipSpaceFromParts(chrId, 1));
        }
        return {
            tickCoords: toReturn,
            tickLabels: toReturn.map((coord)=>this.inverse(coord, format(`.${suggestedFormat}s`))
            )
        };
    }
    toCallable() {
        // TODO investigate if using this method in the vertex calculator leads to slow downs
        const func = (args)=>{
            return this.toClipSpaceFromParts(args[0], args[1]);
        };
        func.isGenomeScale = true;
        func.mapGenomeIndexToClipSpaceInverse = this.mapGenomeIndexToClipSpaceInverse.bind(this);
        func.getMidpoint = this.getMidpoint.bind(this);
        func.getTickCoordsAndLabels = this.getTickCoordsAndLabels.bind(this);
        return func;
    }
    /**
   * Utility method for getting a GenomeScale across an entire genome.
   *
   * @param {String} genomeId from genomeSizes
   * @returns a GenomeScale across an entire genome
   */ static completeScale(genomeId) {
        const chrSizes = genomeSizes[genomeId];
        const finalEntry = [
            ...chrSizes.entries()
        ][chrSizes.size - 1];
        return new GenomeScale(genomeId, [
            "chr1:1",
            `chr${finalEntry[0]}:${finalEntry[1]}`, 
        ]);
    }
    /**
   * A scale used to map a genome pair to a location between -1 and 1 for data visualization.
   * Also contains inverse and utility functions for getting labels for axis.
   *
   * @param {String} genomeId key from genomeSizes object
   * @param {Array} domain array of length 2 containing the start and end of the genome
   *   for the scale. ex: ["chr2:1000", "chr3:2000"]
   */ constructor(genomeId, domain){
        if (genomeSizes[genomeId] === undefined) console.error(`${genomeId} is not a recognized genome!`);
        this.genomeId = genomeId;
        this.domain = domain;
        let [startChr, startPair] = domain[0].substring(3) // Remove chr
        .split(":"); // split chromesome and pair number
        startPair = parseInt(startPair);
        let [endChr, endPair] = domain[1].substring(3).split(":");
        endPair = parseInt(endPair);
        this.mapPairToGenomeIndex = createPairMapperToGenome(genomeId);
        const firstPairInDomain = this.mapPairToGenomeIndex(startChr, startPair);
        const lastPairInDomain = this.mapPairToGenomeIndex(endChr, endPair);
        this.mapGenomeIndexToClipSpace = scale([
            firstPairInDomain,
            lastPairInDomain
        ], [
            -1,
            1
        ]);
        this.mapGenomeIndexToClipSpaceInverse = scale([
            -1,
            1
        ], [
            firstPairInDomain,
            lastPairInDomain
        ]);
    }
}
/**
 * Available genomes to visualize. Each genome is a map from chromosome id to number of genes in chromosome.
 * Order matters as maps remember insertion order.
 */ const genomeSizes = {
    hg38: new Map([
        [
            "1",
            248956422
        ],
        [
            "2",
            242193529
        ],
        [
            "3",
            198295559
        ],
        [
            "4",
            190214555
        ],
        [
            "5",
            181538259
        ],
        [
            "6",
            170805979
        ],
        [
            "7",
            159345973
        ],
        [
            "8",
            145138636
        ],
        [
            "9",
            138394717
        ],
        [
            "10",
            135086622
        ],
        [
            "11",
            133797422
        ],
        [
            "12",
            133275309
        ],
        [
            "13",
            114364328
        ],
        [
            "14",
            107043718
        ],
        [
            "15",
            101991189
        ],
        [
            "16",
            90338345
        ],
        [
            "17",
            83257441
        ],
        [
            "18",
            80373285
        ],
        [
            "19",
            58617616
        ],
        [
            "20",
            64444167
        ],
        [
            "21",
            46709983
        ],
        [
            "22",
            50818468
        ],
        [
            "X",
            156040895
        ],
        [
            "Y",
            57227415
        ]
    ]),
    hg19: new Map([
        [
            "1",
            249250621
        ],
        [
            "2",
            243199373
        ],
        [
            "3",
            198022430
        ],
        [
            "4",
            191154276
        ],
        [
            "5",
            180915260
        ],
        [
            "6",
            171115067
        ],
        [
            "7",
            159138663
        ],
        [
            "8",
            146364022
        ],
        [
            "9",
            141213431
        ],
        [
            "10",
            135534747
        ],
        [
            "11",
            135006516
        ],
        [
            "12",
            133851895
        ],
        [
            "13",
            115169878
        ],
        [
            "14",
            107349540
        ],
        [
            "15",
            102531392
        ],
        [
            "16",
            90354753
        ],
        [
            "17",
            81195210
        ],
        [
            "18",
            78077248
        ],
        [
            "19",
            59128983
        ],
        [
            "20",
            63025520
        ],
        [
            "21",
            48129895
        ],
        [
            "22",
            51304566
        ],
        [
            "X",
            155270560
        ],
        [
            "Y",
            59373566
        ]
    ]),
    mm9: new Map([
        [
            "1",
            197195432
        ],
        [
            "2",
            181748087
        ],
        [
            "3",
            159599783
        ],
        [
            "4",
            155630120
        ],
        [
            "5",
            152537259
        ],
        [
            "6",
            149517037
        ],
        [
            "7",
            152524553
        ],
        [
            "8",
            131738871
        ],
        [
            "9",
            124076172
        ],
        [
            "10",
            129993255
        ],
        [
            "11",
            121843856
        ],
        [
            "12",
            121257530
        ],
        [
            "13",
            120284312
        ],
        [
            "14",
            125194864
        ],
        [
            "15",
            103494974
        ],
        [
            "16",
            98319150
        ],
        [
            "17",
            95272651
        ],
        [
            "18",
            90772031
        ],
        [
            "19",
            61342430
        ],
        [
            "X",
            166650296
        ],
        [
            "Y",
            15902555
        ], 
    ]),
    mm10: new Map([
        [
            "1",
            195471971
        ],
        [
            "2",
            182113224
        ],
        [
            "3",
            160039680
        ],
        [
            "4",
            156508116
        ],
        [
            "5",
            151834684
        ],
        [
            "6",
            149736546
        ],
        [
            "7",
            145441459
        ],
        [
            "8",
            129401213
        ],
        [
            "9",
            124595110
        ],
        [
            "10",
            130694993
        ],
        [
            "11",
            122082543
        ],
        [
            "12",
            120129022
        ],
        [
            "13",
            120421639
        ],
        [
            "14",
            124902244
        ],
        [
            "15",
            104043685
        ],
        [
            "16",
            98207768
        ],
        [
            "17",
            94987271
        ],
        [
            "18",
            90702639
        ],
        [
            "19",
            61431566
        ],
        [
            "X",
            171031299
        ],
        [
            "Y",
            91744698
        ], 
    ]),
    mm39: new Map([
        [
            "1",
            195154279
        ],
        [
            "2",
            181755017
        ],
        [
            "3",
            159745316
        ],
        [
            "4",
            156860686
        ],
        [
            "5",
            151758149
        ],
        [
            "6",
            149588044
        ],
        [
            "7",
            144995196
        ],
        [
            "8",
            130127694
        ],
        [
            "9",
            124359700
        ],
        [
            "10",
            130530862
        ],
        [
            "11",
            121973369
        ],
        [
            "12",
            120092757
        ],
        [
            "13",
            120883175
        ],
        [
            "14",
            125139656
        ],
        [
            "15",
            104073951
        ],
        [
            "16",
            98008968
        ],
        [
            "17",
            95294699
        ],
        [
            "18",
            90720763
        ],
        [
            "19",
            61420004
        ],
        [
            "X",
            169476592
        ],
        [
            "Y",
            91455967
        ]
    ])
};
function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [
    reI,
    reI,
    reI
] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [
    reP,
    reP,
    reP
] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [
    reI,
    reI,
    reI,
    reN
] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [
    reP,
    reP,
    reP,
    reN
] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [
    reN,
    reP,
    reP
] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [
    reN,
    reP,
    reP,
    reN
] + "\\)$");
var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
define(Color, color, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format2) {
    var m, l;
    format2 = (format2 + "").trim().toLowerCase();
    return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) // #ff000000
     : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) // #f000
     : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format2) ? rgbn(named[format2]) // eslint-disable-line no-prototype-builtins
     : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
define(Rgb, rgb$1, extend(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
/**
 * Returns a linear scale to map elements in domain to elements in range.
 * @param {Array} domain array of length two containing minimum and maximum values
 * @param {Array} range array of length two containing minimum and maximum values
 * @returns linear scale mapping domain to range
 */ function scale(domain, range) {
    const domainLength = domain[1] - domain[0];
    const rangeLength = range[1] - range[0];
    const slope = rangeLength / domainLength;
    const intercept = range[1] - slope * domain[1];
    return (x)=>slope * x + intercept
    ;
}
/**
 * Maps RGB values to integer for webgl buffer.
 *
 * @param {Integer} red value from 0 to 255
 * @param {Integer} green value from 0 to 255
 * @param {Integer} blue value from 0 to 255
 * @returns RGB hex value as integer
 */ function rgbToHex(red, green, blue) {
    return red << 16 | green << 8 | blue << 0;
}
function rgbStringToHex(rgb1) {
    const colorVals = rgb1.substring(4, rgb1.length - 1).split(",");
    return rgbToHex(...colorVals.map((asStr)=>parseInt(asStr)
    ));
}
function colorSpecifierToHex(specifier) {
    if (!isNaN(specifier)) // Specifier is already a hex value
    return Math.floor(specifier);
    const asColor = color(specifier);
    return rgbToHex(asColor.r, asColor.g, asColor.b);
}
/**
 * Get the VIEWPORT of the specification to be used by the mouseReader.
 * If all types for a dimension across tracks are categorical or genomic,
 * will default to [-1, 1] for that dimension for the mouseReader. If X or Y
 * has a fixed value, it will consider the width or height channel domains.
 *
 * @param {Object} specification of visualization
 * @returns [smallestX, largestX, smallestY, largestY] of viewport
 */ function getViewportForSpecification(specification) {
    let smallestX = Number.POSITIVE_INFINITY;
    let largestX = Number.NEGATIVE_INFINITY;
    let smallestY = Number.POSITIVE_INFINITY;
    let largestY = Number.NEGATIVE_INFINITY;
    specification.tracks.forEach((track)=>{
        let xDomain = track.x.domain;
        if (!xDomain && track.x.value !== undefined && track.width.domain !== undefined) xDomain = track.width.domain;
        let yDomain = track.y.domain;
        if (!yDomain && track.y.value !== undefined && track.height && track.height.domain !== undefined) yDomain = track.height.domain;
        if (xDomain) {
            smallestX = xDomain[0] < smallestX ? xDomain[0] : smallestX;
            largestX = xDomain[1] > largestX ? xDomain[1] : largestX;
        }
        if (yDomain) {
            smallestY = yDomain[0] < smallestY ? yDomain[0] : smallestY;
            largestY = yDomain[1] > largestY ? yDomain[1] : largestY;
        }
    });
    smallestX = smallestX === Number.POSITIVE_INFINITY ? -1 : smallestX;
    largestX = largestX === Number.NEGATIVE_INFINITY ? 1 : largestX;
    smallestY = smallestY === Number.POSITIVE_INFINITY ? -1 : smallestY;
    largestY = largestY === Number.NEGATIVE_INFINITY ? 1 : largestY;
    return [
        smallestX,
        largestX,
        smallestY,
        largestY
    ];
}
/**
 * Given a specification, return a SCALE to be used for mapping data points to clip space
 * for the drawer.
 *
 * @param {String} dimension either x or y
 * @param {Object} specification for the visualization
 * @returns function which can be used to map to an "x" or "y" value
 */ const getScaleForSpecification = (dimension, specification)=>{
    if (dimension !== "x" && dimension !== "y") console.error(`${dimension} is not x or y!`);
    let genomic = false;
    let genome;
    for (const track of specification.tracks)if (track[dimension].type && track[dimension].type.includes("genomic")) {
        genome = track[dimension].genome;
        genomic = true;
        break;
    }
    if (!genomic) {
        const viewport = getViewportForSpecification(specification);
        if (dimension === "x") return scale([
            viewport[0],
            viewport[1]
        ], [
            -1,
            1
        ]);
        return scale([
            viewport[2],
            viewport[3]
        ], [
            -1,
            1
        ]);
    }
    const geneScale = GenomeScale.completeScale(genome);
    let smallestGene = undefined;
    let smallestGeneValue = Number.POSITIVE_INFINITY;
    let largestGene = undefined;
    let largestGeneValue = Number.NEGATIVE_INFINITY;
    for (const track1 of specification.tracks){
        let xDomain = track1[dimension].domain;
        if (xDomain) {
            if (geneScale.toClipSpaceFromString(xDomain[0]) < smallestGeneValue) {
                smallestGeneValue = geneScale.toClipSpaceFromString(xDomain[0]);
                smallestGene = xDomain[0];
            }
            if (geneScale.toClipSpaceFromString(xDomain[1]) > largestGeneValue) {
                largestGeneValue = geneScale.toClipSpaceFromString(xDomain[1]);
                largestGene = xDomain[1];
            }
        }
    }
    const asScale = new GenomeScale(genome, [
        smallestGene,
        largestGene
    ]);
    return asScale.toCallable();
};
const RELATIVE_LENGTH_UNITS = [
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "%", 
];
const getPixelMeasurement = (cssMeasurement)=>{
    if (RELATIVE_LENGTH_UNITS.some((unit)=>cssMeasurement.includes(unit)
    )) return false;
    const asFloat = parseFloat(cssMeasurement);
    return isNaN(asFloat) ? false : asFloat;
};
const DEFAULT_MARGIN = "50px";
const DEFAULT_WIDTH = "100%";
const DEFAULT_HEIGHT = DEFAULT_WIDTH;
const getDimAndMarginStyleForSpecification = (specification)=>{
    let toReturn = {
    };
    const calculatedMargins = {
    };
    if (specification.margins === undefined) {
        toReturn.margin = DEFAULT_MARGIN;
        calculatedMargins.top = DEFAULT_MARGIN;
        calculatedMargins.right = DEFAULT_MARGIN;
        calculatedMargins.bottom = DEFAULT_MARGIN;
        calculatedMargins.left = DEFAULT_MARGIN;
    } else {
        calculatedMargins.top = specification.margins.top === undefined ? DEFAULT_MARGIN : specification.margins.top;
        calculatedMargins.right = specification.margins.right === undefined ? DEFAULT_MARGIN : specification.margins.right;
        calculatedMargins.bottom = specification.margins.bottom === undefined ? DEFAULT_MARGIN : specification.margins.bottom;
        calculatedMargins.left = specification.margins.left === undefined ? DEFAULT_MARGIN : specification.margins.left;
        // Shorthand for top right bottom left
        toReturn.margin = `${calculatedMargins.top}
                       ${calculatedMargins.right}
                       ${calculatedMargins.bottom}
                       ${calculatedMargins.left}`;
    }
    const calculatedWidth = specification.width || DEFAULT_WIDTH;
    const calculatedHeight = specification.height || DEFAULT_HEIGHT;
    const allMeasurements = [
        calculatedMargins.top,
        calculatedMargins.right,
        calculatedMargins.bottom,
        calculatedMargins.left,
        calculatedWidth,
        calculatedHeight, 
    ];
    if (allMeasurements.every(getPixelMeasurement)) {
        // Let's encode as a number to allow users using typescript or doing weird DOM things able to define
        // the width and height explicitly
        toReturn.width = getPixelMeasurement(calculatedWidth) - getPixelMeasurement(calculatedMargins.left) - getPixelMeasurement(calculatedMargins.right);
        toReturn.height = getPixelMeasurement(calculatedHeight) - getPixelMeasurement(calculatedMargins.bottom) - getPixelMeasurement(calculatedMargins.top);
    } else {
        // If user is using css units in their margins and dimensions, then use css calc
        toReturn.width = `calc(
      ${calculatedWidth} - 
      ${calculatedMargins.left} - 
      ${calculatedMargins.right}
    )`;
        toReturn.height = `calc(
      ${calculatedHeight} - 
      ${calculatedMargins.top} - 
      ${calculatedMargins.bottom}
    )`;
    }
    return toReturn;
};
/**
 * We need to calculate points on the arc for that mark type, but it needs to be quick.
 * In addition, it shouldn't be a perfect circle, and also should look somewhat arc like.
 * This utility funciton returns function that takes a value between 0 and 1 where 0 maps
 * to the first control point, and 1 maps to the third control point.
 *
 * https://math.stackexchange.com/a/1361717
 *
 * @param {Array} P0 first control point
 * @param {Array} P1 second control point
 * @param {Array} P2 third control point
 * @returns a function [0, 1] -> point on curve
 */ const getQuadraticBezierCurveForPoints = (P0, P1, P2)=>{
    const x = (t)=>(1 - t) ** 2 * P0[0] + 2 * t * (1 - t) * P1[0] + t ** 2 * P2[0]
    ;
    const y = (t)=>(1 - t) ** 2 * P0[1] + 2 * t * (1 - t) * P1[1] + t ** 2 * P2[1]
    ;
    return (t)=>[
            x(t),
            y(t)
        ]
    ;
};
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis$1(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
}
var constant = (x)=>()=>x
;
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}
var rgb = function rgbGamma(y) {
    var color1 = gamma(y);
    function rgb2(start, end) {
        var r = color1((start = rgb$1(start)).r, (end = rgb$1(end)).r), g = color1(start.g, end.g), b = color1(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
        for(i = 0; i < n; ++i){
            color2 = rgb$1(colors[i]);
            r[i] = color2.r || 0;
            g[i] = color2.g || 0;
            b[i] = color2.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color2.opacity = 1;
        return function(t) {
            color2.r = r(t);
            color2.g = g(t);
            color2.b = b(t);
            return color2 + "";
        };
    };
}
var rgbBasis = rgbSpline(basis$1);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fn8Fk"}]},["ixyRv","8Ionc"], "8Ionc", "parcelRequire9975")

//# sourceMappingURL=data-processor-worker-a3f9dc59.548505df.js.map
