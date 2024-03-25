(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap";#tarka-chat{position:fixed;bottom:2rem;right:3rem;display:flex;flex-direction:column;align-items:flex-end;max-height:700px;z-index:1000}#tarka-chat .t-container{font-family:Inter;width:400px;border:1.5px solid var(--primary-primary-alt-subtle);border-radius:32px 32px 8px;box-shadow:-28px 48px 42px #00000008;flex-direction:column;overflow:hidden;display:none;position:relative;background:#ffffff}#tarka-chat .t-container .scroll-fade{position:absolute;width:100%;height:140px;background:var(--gradient-gradient-fade)}#tarka-chat .t-container .header{display:flex;padding:24px;justify-content:space-between;align-items:center}#tarka-chat .t-container .header .title{overflow:hidden;color:var(--primary-primary-alt);text-overflow:ellipsis;opacity:.6;font-size:18px;font-style:normal;font-weight:600;line-height:24px;letter-spacing:-.18px}#tarka-chat .t-container .header .logo{width:32px;height:32px}#tarka-chat .t-container .body{background:var(--gradient-background);padding:0 24px;min-height:200px;overflow-y:auto}#tarka-chat .t-container .body .message-container{min-height:100%;display:flex;flex-direction:column;justify-content:flex-end}#tarka-chat .t-container .body .message-container .message:first-of-type{margin-top:32px}#tarka-chat .t-container .body .message-container .message{max-width:90%}#tarka-chat .t-container .body .message-container .message .wrapper{display:flex;flex-direction:column;flex-grow:1;padding:8px;border-radius:8px}#tarka-chat .t-container .body .message-container .message .message-content{font-size:16px;font-weight:500;line-height:24px;letter-spacing:-.18px;overflow-wrap:break-word;margin:4px 0}#tarka-chat .t-container .body .message-container .message .attachment{display:flex;align-items:center;margin:4px 0}#tarka-chat .t-container .body .message-container .message .attachment .attachment-info{display:flex;border:1px solid var(--primary-primary-subtle, #f0dafb);padding:8px;border-radius:8px}#tarka-chat .t-container .body .message-container .message .attachment .attachment-info .attachment-file-name{font-size:14px;font-weight:700;padding:0 15px 0 5px;align-self:center;color:#333}#tarka-chat .t-container .body .message-container .message .attachment .attachment-info .attachment-download-btn{border:1px solid var(--primary-primary-subtle, #f0dafb);border-radius:4px;padding:8px 12px;background:var(--primary-primary-subtle, #f0dafb);cursor:pointer}#tarka-chat .t-container .body .message-container .message .attachment .attachment-info .attachment-download-btn img{width:16px;height:16px}#tarka-chat .t-container .body .message-container .message .high-chart-container{width:110%;height:300px;position:relative;border:1px solid var(--primary-primary-subtle, #f0dafb);border-radius:15px;margin:4px 0}#tarka-chat .t-container .body .message-container .message .high-chart-container .highcharts-button-box{fill:var(--primary-primary-subtle, #f0dafb)!important}#tarka-chat .t-container .body .message-container .message .table-container{width:110%;position:relative;border:1px solid var(--primary-primary-subtle, #f0dafb);border-radius:15px;overflow-x:auto}#tarka-chat .t-container .body .message-container .message .table-container table{border-collapse:collapse;border-radius:5px;min-width:100%}#tarka-chat .t-container .body .message-container .message .table-container th,#tarka-chat .t-container .body .message-container .message .table-container td{white-space:nowrap;padding:5px;border-right:1px solid var(--primary-primary-subtle, #f0dafb);border-bottom:1px solid var(--primary-primary-subtle, #f0dafb)}#tarka-chat .t-container .body .message-container .message .table-container th:last-child,#tarka-chat .t-container .body .message-container .message .table-container td:last-child{border-right:0px solid var(--primary-primary-subtle, #f0dafb)}#tarka-chat .t-container .body .message-container .message .image-container{position:relative;border:1px solid var(--primary-primary-subtle, #f0dafb);border-radius:15px;margin:4px 0}#tarka-chat .t-container .body .message-container .message .image-container img{width:100%;border-radius:inherit;height:auto;display:block}#tarka-chat .t-container .body .message-container .message .overlay{position:absolute;top:0;right:0;display:flex;align-items:center;margin:8px;border:1px solid var(--primary-primary-subtle, #f0dafb);border-radius:4px;padding:10px 12px;background:var(--primary-primary-subtle, #f0dafb);cursor:pointer;opacity:.6}#tarka-chat .t-container .body .message-container .message .overlay img{width:16px;height:16px}#tarka-chat .t-container .body .message-container .message .overlay:hover{opacity:1}#tarka-chat .t-container .body .message-container .message .message-meta{margin:4px 0;color:var(--primary-primary-alt);font-size:12px;font-weight:400;line-height:14px;letter-spacing:.12px}#tarka-chat .t-container .body .message-container .incoming{color:var(--primary-primary-alt)}#tarka-chat .t-container .body .message-container .outgoing{margin-left:auto;color:var(--primary-primary)}#tarka-chat .t-container .footer{display:flex;justify-content:center}#tarka-chat .t-container .footer .input-container{display:flex;padding:8px 8px 8px 24px;align-items:center;width:100%}#tarka-chat .t-container .footer .input-container .chat-input{color:var(--primary-primary-alt);opacity:.7;font-size:16px;font-weight:500;line-height:20px;flex:1;border:none}#tarka-chat .t-container .footer .input-container .chat-input:focus{outline:none}#tarka-chat .t-container .footer .input-container .upload-btn{width:48px;height:48px;border:none;background:transparent;display:flex;align-items:center;justify-content:center}#tarka-chat .t-container .footer .input-container .upload-btn path{fill:var(--primary-primary, #9500b3)}#tarka-chat .t-container .footer .input-container .send-btn{width:48px;height:48px;border:none;background:transparent;display:flex;align-items:center;justify-content:center}#tarka-chat .t-container .footer .input-container .send-btn path{fill:var(--primary-primary, #9500b3)}#tarka-chat .t-container .footer .chat-loader{display:none;padding:8px}#tarka-chat .t-container .footer .chat-loader:after{content:" ";display:block;width:24px;height:24px;margin:8px;border-radius:50%;border:4px solid #9500b3;border-color:#9500b3 transparent #9500b3 transparent;animation:chat-loader 1.2s linear infinite}@keyframes chat-loader{0%{transform:rotate(0)}to{transform:rotate(360deg)}}#tarka-chat .t-container .upload-preview-container{display:none;flex:0 0 auto;overflow-x:auto;white-space:nowrap;gap:10px;padding:15px 10px 25px}#tarka-chat .launcher{flex:none;display:flex;width:48px;height:48px;align-items:center;justify-content:center;border:none;border-radius:20px 10px 20px 20px;background:var(--primary-primary-subtle, #f0dafb);margin-top:8px}#tarka-chat .launcher .opened{display:none}#tarka-chat .tc-logo-face path{fill:var(--primary-primary-subtle, #f0dafb)}#tarka-chat .upload-preview-item{flex:0 0 auto;width:60px;height:80px;position:relative;border:1px solid #444444;border-radius:5px;overflow:hidden}#tarka-chat .upload-preview-item img{display:block;height:100%;width:100%;object-fit:cover}@media only screen and (max-width: 700px){#tarka-chat{bottom:10px;right:10px}#tarka-chat .t-container{width:calc(100vw - 20px)}}')),document.head.appendChild(a)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Ce = Object.defineProperty;
var Se = (e, t, r) => t in e ? Ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var X = (e, t, r) => (Se(e, typeof t != "symbol" ? t + "" : t, r), r), Pe = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var be = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
};
var ye = (e, t, r) => (Pe(e, t, "access private method"), r);
const style = "", layout = `<div id="tarka-chat">
  <div class="t-container">
    <div class="scroll-fade"></div>
    <div class="header">
      <span class="title"></span>
      <span class="logo"></span>
    </div>
    <div class="body">
      <div class="message-container"></div>
    </div>
    <div class="footer">
      <div class="input-container">
        <input type="file" class="upload-input" style="display: none" multiple>
        <button class="upload-btn" disabled="true" style="display: none">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16,13h-3v3c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3H8	c-0.6,0-1-0.4-1-1s0.4-1,1-1h3V8c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3c0.6,0,1,0.4,1,1S16.6,13,16,13z"/>
          </svg>
        </button>
        
        <input
          type="text"
          name="message"
          placeholder="Write a message..."
          class="chat-input"
        />
        <button class="send-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.3059 9.26075C21.5647 10.3894 21.5647 13.6106 19.3059 14.7392L7.44461 20.6659C4.92862 21.9231 2.18886 19.4122 3.22484 16.7987L4.67997 13.1279C4.96718 12.4034 4.96718 11.5966 4.67997 10.8721L3.22484 7.20124C2.18885 4.58776 4.92863 2.07693 7.44461 3.33408L19.3059 9.26075Z"
              fill="#9500B3"
            />
          </svg>
        </button>
      </div>
      <div class="chat-loader"></div>
    </div>
    <div class="upload-preview-container"></div>
  </div>
  <button class="launcher">
    <div class="closed"></div>
    <svg
      class="opened"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M9.68834 13.3416C8.9027 14.5787 7.09737 14.5787 6.31174 13.3416L0.424876 4.07222C-0.420758 2.74069 0.535813 1.00001 2.11317 1.00001L13.8869 1.00001C15.4643 1.00001 16.4208 2.74069 15.5752 4.07222L9.68834 13.3416Z"
        fill="#43214A"
      />
    </svg>
  </button>
</div>
`;
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lottie$1 = { exports: {} };
(function(module, exports) {
  typeof navigator < "u" && function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(t) {
      _useWebWorker = !!t;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(t) {
      locationHref = t;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(e) {
      return document.createElement(e);
    }
    function extendPrototype(e, t) {
      var r, i = e.length, s;
      for (r = 0; r < i; r += 1) {
        s = e[r].prototype;
        for (var n in s)
          Object.prototype.hasOwnProperty.call(s, n) && (t.prototype[n] = s[n]);
      }
    }
    function getDescriptor(e, t) {
      return Object.getOwnPropertyDescriptor(e, t);
    }
    function createProxyFunction(e) {
      function t() {
      }
      return t.prototype = e, t;
    }
    var audioControllerFactory = function() {
      function e(t) {
        this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1;
      }
      return e.prototype = {
        addAudio: function(r) {
          this.audios.push(r);
        },
        pause: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].pause();
        },
        resume: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].resume();
        },
        setRate: function(r) {
          var i, s = this.audios.length;
          for (i = 0; i < s; i += 1)
            this.audios[i].setRate(r);
        },
        createAudio: function(r) {
          return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
            src: [r]
          }) : {
            isPlaying: !1,
            play: function() {
              this.isPlaying = !0;
            },
            seek: function() {
              this.isPlaying = !1;
            },
            playing: function() {
            },
            rate: function() {
            },
            setVolume: function() {
            }
          };
        },
        setAudioFactory: function(r) {
          this.audioFactory = r;
        },
        setVolume: function(r) {
          this._volume = r, this._updateVolume();
        },
        mute: function() {
          this._isMuted = !0, this._updateVolume();
        },
        unmute: function() {
          this._isMuted = !1, this._updateVolume();
        },
        getVolume: function() {
          return this._volume;
        },
        _updateVolume: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1));
        }
      }, function() {
        return new e();
      };
    }(), createTypedArray = function() {
      function e(r, i) {
        var s = 0, n = [], a;
        switch (r) {
          case "int16":
          case "uint8c":
            a = 1;
            break;
          default:
            a = 1.1;
            break;
        }
        for (s = 0; s < i; s += 1)
          n.push(a);
        return n;
      }
      function t(r, i) {
        return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : e(r, i);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? t : e;
    }();
    function createSizedArray(e) {
      return Array.apply(null, {
        length: e
      });
    }
    function _typeof$6(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
        return typeof r;
      } : _typeof$6 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$6(e);
    }
    var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    (function() {
      var e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], t, r = e.length;
      for (t = 0; t < r; t += 1)
        BMMath[e[t]] = Math[e[t]];
    })(), BMMath.random = Math.random, BMMath.abs = function(e) {
      var t = _typeof$6(e);
      if (t === "object" && e.length) {
        var r = createSizedArray(e.length), i, s = e.length;
        for (i = 0; i < s; i += 1)
          r[i] = Math.abs(e[i]);
        return r;
      }
      return Math.abs(e);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function styleDiv(e) {
      e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(e, t, r, i) {
      this.type = e, this.currentTime = t, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
    }
    function BMCompleteEvent(e, t) {
      this.type = e, this.direction = t < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(e, t, r, i) {
      this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = i < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(e, t, r) {
      this.type = e, this.firstFrame = t, this.totalFrames = r;
    }
    function BMDestroyEvent(e, t) {
      this.type = e, this.target = t;
    }
    function BMRenderFrameErrorEvent(e, t) {
      this.type = "renderFrameError", this.nativeError = e, this.currentTime = t;
    }
    function BMConfigErrorEvent(e) {
      this.type = "configError", this.nativeError = e;
    }
    var createElementID = function() {
      var e = 0;
      return function() {
        return e += 1, idPrefix$1 + "__lottie_element_" + e;
      };
    }();
    function HSVtoRGB(e, t, r) {
      var i, s, n, a, l, o, p, c;
      switch (a = Math.floor(e * 6), l = e * 6 - a, o = r * (1 - t), p = r * (1 - l * t), c = r * (1 - (1 - l) * t), a % 6) {
        case 0:
          i = r, s = c, n = o;
          break;
        case 1:
          i = p, s = r, n = o;
          break;
        case 2:
          i = o, s = r, n = c;
          break;
        case 3:
          i = o, s = p, n = r;
          break;
        case 4:
          i = c, s = o, n = r;
          break;
        case 5:
          i = r, s = o, n = p;
          break;
      }
      return [i, s, n];
    }
    function RGBtoHSV(e, t, r) {
      var i = Math.max(e, t, r), s = Math.min(e, t, r), n = i - s, a, l = i === 0 ? 0 : n / i, o = i / 255;
      switch (i) {
        case s:
          a = 0;
          break;
        case e:
          a = t - r + n * (t < r ? 6 : 0), a /= 6 * n;
          break;
        case t:
          a = r - e + n * 2, a /= 6 * n;
          break;
        case r:
          a = e - t + n * 4, a /= 6 * n;
          break;
      }
      return [a, l, o];
    }
    function addSaturationToRGB(e, t) {
      var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addBrightnessToRGB(e, t) {
      var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addHueToRGB(e, t) {
      var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
    }
    var rgbToHex = function() {
      var e = [], t, r;
      for (t = 0; t < 256; t += 1)
        r = t.toString(16), e[t] = r.length === 1 ? "0" + r : r;
      return function(i, s, n) {
        return i < 0 && (i = 0), s < 0 && (s = 0), n < 0 && (n = 0), "#" + e[i] + e[s] + e[n];
      };
    }(), setSubframeEnabled = function(t) {
      subframeEnabled = !!t;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(t) {
      expressionsPlugin = t;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(t) {
      expressionsInterfaces = t;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(t) {
      defaultCurveSegments = t;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(t) {
      idPrefix$1 = t;
    };
    function createNS(e) {
      return document.createElementNS(svgNS, e);
    }
    function _typeof$5(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
        return typeof r;
      } : _typeof$5 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$5(e);
    }
    var dataManager = function() {
      var e = 1, t = [], r, i, s = {
        onmessage: function() {
        },
        postMessage: function(x) {
          r({
            data: x
          });
        }
      }, n = {
        postMessage: function(x) {
          s.onmessage({
            data: x
          });
        }
      };
      function a(f) {
        if (window.Worker && window.Blob && getWebWorker()) {
          var x = new Blob(["var _workerSelf = self; self.onmessage = ", f.toString()], {
            type: "text/javascript"
          }), A = URL.createObjectURL(x);
          return new Worker(A);
        }
        return r = f, s;
      }
      function l() {
        i || (i = a(function(x) {
          function A() {
            function E(L, P) {
              var _, b, C = L.length, B, F, z, q;
              for (b = 0; b < C; b += 1)
                if (_ = L[b], "ks" in _ && !_.completed) {
                  if (_.completed = !0, _.hasMask) {
                    var j = _.masksProperties;
                    for (F = j.length, B = 0; B < F; B += 1)
                      if (j[B].pt.k.i)
                        S(j[B].pt.k);
                      else
                        for (q = j[B].pt.k.length, z = 0; z < q; z += 1)
                          j[B].pt.k[z].s && S(j[B].pt.k[z].s[0]), j[B].pt.k[z].e && S(j[B].pt.k[z].e[0]);
                  }
                  _.ty === 0 ? (_.layers = u(_.refId, P), E(_.layers, P)) : _.ty === 4 ? y(_.shapes) : _.ty === 5 && O(_);
                }
            }
            function d(L, P) {
              if (L) {
                var _ = 0, b = L.length;
                for (_ = 0; _ < b; _ += 1)
                  L[_].t === 1 && (L[_].data.layers = u(L[_].data.refId, P), E(L[_].data.layers, P));
              }
            }
            function g(L, P) {
              for (var _ = 0, b = P.length; _ < b; ) {
                if (P[_].id === L)
                  return P[_];
                _ += 1;
              }
              return null;
            }
            function u(L, P) {
              var _ = g(L, P);
              return _ ? _.layers.__used ? JSON.parse(JSON.stringify(_.layers)) : (_.layers.__used = !0, _.layers) : null;
            }
            function y(L) {
              var P, _ = L.length, b, C;
              for (P = _ - 1; P >= 0; P -= 1)
                if (L[P].ty === "sh")
                  if (L[P].ks.k.i)
                    S(L[P].ks.k);
                  else
                    for (C = L[P].ks.k.length, b = 0; b < C; b += 1)
                      L[P].ks.k[b].s && S(L[P].ks.k[b].s[0]), L[P].ks.k[b].e && S(L[P].ks.k[b].e[0]);
                else
                  L[P].ty === "gr" && y(L[P].it);
            }
            function S(L) {
              var P, _ = L.i.length;
              for (P = 0; P < _; P += 1)
                L.i[P][0] += L.v[P][0], L.i[P][1] += L.v[P][1], L.o[P][0] += L.v[P][0], L.o[P][1] += L.v[P][1];
            }
            function T(L, P) {
              var _ = P ? P.split(".") : [100, 100, 100];
              return L[0] > _[0] ? !0 : _[0] > L[0] ? !1 : L[1] > _[1] ? !0 : _[1] > L[1] ? !1 : L[2] > _[2] ? !0 : _[2] > L[2] ? !1 : null;
            }
            var M = function() {
              var L = [4, 4, 14];
              function P(b) {
                var C = b.t.d;
                b.t.d = {
                  k: [{
                    s: C,
                    t: 0
                  }]
                };
              }
              function _(b) {
                var C, B = b.length;
                for (C = 0; C < B; C += 1)
                  b[C].ty === 5 && P(b[C]);
              }
              return function(b) {
                if (T(L, b.v) && (_(b.layers), b.assets)) {
                  var C, B = b.assets.length;
                  for (C = 0; C < B; C += 1)
                    b.assets[C].layers && _(b.assets[C].layers);
                }
              };
            }(), I = function() {
              var L = [4, 7, 99];
              return function(P) {
                if (P.chars && !T(L, P.v)) {
                  var _, b = P.chars.length;
                  for (_ = 0; _ < b; _ += 1) {
                    var C = P.chars[_];
                    C.data && C.data.shapes && (y(C.data.shapes), C.data.ip = 0, C.data.op = 99999, C.data.st = 0, C.data.sr = 1, C.data.ks = {
                      p: {
                        k: [0, 0],
                        a: 0
                      },
                      s: {
                        k: [100, 100],
                        a: 0
                      },
                      a: {
                        k: [0, 0],
                        a: 0
                      },
                      r: {
                        k: 0,
                        a: 0
                      },
                      o: {
                        k: 100,
                        a: 0
                      }
                    }, P.chars[_].t || (C.data.shapes.push({
                      ty: "no"
                    }), C.data.shapes[0].it.push({
                      p: {
                        k: [0, 0],
                        a: 0
                      },
                      s: {
                        k: [100, 100],
                        a: 0
                      },
                      a: {
                        k: [0, 0],
                        a: 0
                      },
                      r: {
                        k: 0,
                        a: 0
                      },
                      o: {
                        k: 100,
                        a: 0
                      },
                      sk: {
                        k: 0,
                        a: 0
                      },
                      sa: {
                        k: 0,
                        a: 0
                      },
                      ty: "tr"
                    })));
                  }
                }
              };
            }(), R = function() {
              var L = [5, 7, 15];
              function P(b) {
                var C = b.t.p;
                typeof C.a == "number" && (C.a = {
                  a: 0,
                  k: C.a
                }), typeof C.p == "number" && (C.p = {
                  a: 0,
                  k: C.p
                }), typeof C.r == "number" && (C.r = {
                  a: 0,
                  k: C.r
                });
              }
              function _(b) {
                var C, B = b.length;
                for (C = 0; C < B; C += 1)
                  b[C].ty === 5 && P(b[C]);
              }
              return function(b) {
                if (T(L, b.v) && (_(b.layers), b.assets)) {
                  var C, B = b.assets.length;
                  for (C = 0; C < B; C += 1)
                    b.assets[C].layers && _(b.assets[C].layers);
                }
              };
            }(), H = function() {
              var L = [4, 1, 9];
              function P(b) {
                var C, B = b.length, F, z;
                for (C = 0; C < B; C += 1)
                  if (b[C].ty === "gr")
                    P(b[C].it);
                  else if (b[C].ty === "fl" || b[C].ty === "st")
                    if (b[C].c.k && b[C].c.k[0].i)
                      for (z = b[C].c.k.length, F = 0; F < z; F += 1)
                        b[C].c.k[F].s && (b[C].c.k[F].s[0] /= 255, b[C].c.k[F].s[1] /= 255, b[C].c.k[F].s[2] /= 255, b[C].c.k[F].s[3] /= 255), b[C].c.k[F].e && (b[C].c.k[F].e[0] /= 255, b[C].c.k[F].e[1] /= 255, b[C].c.k[F].e[2] /= 255, b[C].c.k[F].e[3] /= 255);
                    else
                      b[C].c.k[0] /= 255, b[C].c.k[1] /= 255, b[C].c.k[2] /= 255, b[C].c.k[3] /= 255;
              }
              function _(b) {
                var C, B = b.length;
                for (C = 0; C < B; C += 1)
                  b[C].ty === 4 && P(b[C].shapes);
              }
              return function(b) {
                if (T(L, b.v) && (_(b.layers), b.assets)) {
                  var C, B = b.assets.length;
                  for (C = 0; C < B; C += 1)
                    b.assets[C].layers && _(b.assets[C].layers);
                }
              };
            }(), D = function() {
              var L = [4, 4, 18];
              function P(b) {
                var C, B = b.length, F, z;
                for (C = B - 1; C >= 0; C -= 1)
                  if (b[C].ty === "sh")
                    if (b[C].ks.k.i)
                      b[C].ks.k.c = b[C].closed;
                    else
                      for (z = b[C].ks.k.length, F = 0; F < z; F += 1)
                        b[C].ks.k[F].s && (b[C].ks.k[F].s[0].c = b[C].closed), b[C].ks.k[F].e && (b[C].ks.k[F].e[0].c = b[C].closed);
                  else
                    b[C].ty === "gr" && P(b[C].it);
              }
              function _(b) {
                var C, B, F = b.length, z, q, j, $;
                for (B = 0; B < F; B += 1) {
                  if (C = b[B], C.hasMask) {
                    var W = C.masksProperties;
                    for (q = W.length, z = 0; z < q; z += 1)
                      if (W[z].pt.k.i)
                        W[z].pt.k.c = W[z].cl;
                      else
                        for ($ = W[z].pt.k.length, j = 0; j < $; j += 1)
                          W[z].pt.k[j].s && (W[z].pt.k[j].s[0].c = W[z].cl), W[z].pt.k[j].e && (W[z].pt.k[j].e[0].c = W[z].cl);
                  }
                  C.ty === 4 && P(C.shapes);
                }
              }
              return function(b) {
                if (T(L, b.v) && (_(b.layers), b.assets)) {
                  var C, B = b.assets.length;
                  for (C = 0; C < B; C += 1)
                    b.assets[C].layers && _(b.assets[C].layers);
                }
              };
            }();
            function V(L) {
              L.__complete || (H(L), M(L), I(L), R(L), D(L), E(L.layers, L.assets), d(L.chars, L.assets), L.__complete = !0);
            }
            function O(L) {
              L.t.a.length === 0 && "m" in L.t.p;
            }
            var G = {};
            return G.completeData = V, G.checkColors = H, G.checkChars = I, G.checkPathProperties = R, G.checkShapes = D, G.completeLayers = E, G;
          }
          if (n.dataManager || (n.dataManager = A()), n.assetLoader || (n.assetLoader = function() {
            function E(g) {
              var u = g.getResponseHeader("content-type");
              return u && g.responseType === "json" && u.indexOf("json") !== -1 || g.response && _typeof$5(g.response) === "object" ? g.response : g.response && typeof g.response == "string" ? JSON.parse(g.response) : g.responseText ? JSON.parse(g.responseText) : null;
            }
            function d(g, u, y, S) {
              var T, M = new XMLHttpRequest();
              try {
                M.responseType = "json";
              } catch {
              }
              M.onreadystatechange = function() {
                if (M.readyState === 4)
                  if (M.status === 200)
                    T = E(M), y(T);
                  else
                    try {
                      T = E(M), y(T);
                    } catch (I) {
                      S && S(I);
                    }
              };
              try {
                M.open(["G", "E", "T"].join(""), g, !0);
              } catch {
                M.open(["G", "E", "T"].join(""), u + "/" + g, !0);
              }
              M.send();
            }
            return {
              load: d
            };
          }()), x.data.type === "loadAnimation")
            n.assetLoader.load(x.data.path, x.data.fullPath, function(E) {
              n.dataManager.completeData(E), n.postMessage({
                id: x.data.id,
                payload: E,
                status: "success"
              });
            }, function() {
              n.postMessage({
                id: x.data.id,
                status: "error"
              });
            });
          else if (x.data.type === "complete") {
            var m = x.data.animation;
            n.dataManager.completeData(m), n.postMessage({
              id: x.data.id,
              payload: m,
              status: "success"
            });
          } else
            x.data.type === "loadData" && n.assetLoader.load(x.data.path, x.data.fullPath, function(E) {
              n.postMessage({
                id: x.data.id,
                payload: E,
                status: "success"
              });
            }, function() {
              n.postMessage({
                id: x.data.id,
                status: "error"
              });
            });
        }), i.onmessage = function(f) {
          var x = f.data, A = x.id, m = t[A];
          t[A] = null, x.status === "success" ? m.onComplete(x.payload) : m.onError && m.onError();
        });
      }
      function o(f, x) {
        e += 1;
        var A = "processId_" + e;
        return t[A] = {
          onComplete: f,
          onError: x
        }, A;
      }
      function p(f, x, A) {
        l();
        var m = o(x, A);
        i.postMessage({
          type: "loadAnimation",
          path: f,
          fullPath: window.location.origin + window.location.pathname,
          id: m
        });
      }
      function c(f, x, A) {
        l();
        var m = o(x, A);
        i.postMessage({
          type: "loadData",
          path: f,
          fullPath: window.location.origin + window.location.pathname,
          id: m
        });
      }
      function k(f, x, A) {
        l();
        var m = o(x, A);
        i.postMessage({
          type: "complete",
          animation: f,
          id: m
        });
      }
      return {
        loadAnimation: p,
        loadData: c,
        completeAnimation: k
      };
    }(), ImagePreloader = function() {
      var e = function() {
        var d = createTag("canvas");
        d.width = 1, d.height = 1;
        var g = d.getContext("2d");
        return g.fillStyle = "rgba(0,0,0,0)", g.fillRect(0, 0, 1, 1), d;
      }();
      function t() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i(d, g, u) {
        var y = "";
        if (d.e)
          y = d.p;
        else if (g) {
          var S = d.p;
          S.indexOf("images/") !== -1 && (S = S.split("/")[1]), y = g + S;
        } else
          y = u, y += d.u ? d.u : "", y += d.p;
        return y;
      }
      function s(d) {
        var g = 0, u = setInterval((function() {
          var y = d.getBBox();
          (y.width || g > 500) && (this._imageLoaded(), clearInterval(u)), g += 1;
        }).bind(this), 50);
      }
      function n(d) {
        var g = i(d, this.assetsPath, this.path), u = createNS("image");
        isSafari ? this.testImageLoaded(u) : u.addEventListener("load", this._imageLoaded, !1), u.addEventListener("error", (function() {
          y.img = e, this._imageLoaded();
        }).bind(this), !1), u.setAttributeNS("http://www.w3.org/1999/xlink", "href", g), this._elementHelper.append ? this._elementHelper.append(u) : this._elementHelper.appendChild(u);
        var y = {
          img: u,
          assetData: d
        };
        return y;
      }
      function a(d) {
        var g = i(d, this.assetsPath, this.path), u = createTag("img");
        u.crossOrigin = "anonymous", u.addEventListener("load", this._imageLoaded, !1), u.addEventListener("error", (function() {
          y.img = e, this._imageLoaded();
        }).bind(this), !1), u.src = g;
        var y = {
          img: u,
          assetData: d
        };
        return y;
      }
      function l(d) {
        var g = {
          assetData: d
        }, u = i(d, this.assetsPath, this.path);
        return dataManager.loadData(u, (function(y) {
          g.img = y, this._footageLoaded();
        }).bind(this), (function() {
          g.img = {}, this._footageLoaded();
        }).bind(this)), g;
      }
      function o(d, g) {
        this.imagesLoadedCb = g;
        var u, y = d.length;
        for (u = 0; u < y; u += 1)
          d[u].layers || (!d[u].t || d[u].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(d[u]))) : d[u].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(d[u]))));
      }
      function p(d) {
        this.path = d || "";
      }
      function c(d) {
        this.assetsPath = d || "";
      }
      function k(d) {
        for (var g = 0, u = this.images.length; g < u; ) {
          if (this.images[g].assetData === d)
            return this.images[g].img;
          g += 1;
        }
        return null;
      }
      function f() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function x() {
        return this.totalImages === this.loadedAssets;
      }
      function A() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function m(d, g) {
        d === "svg" ? (this._elementHelper = g, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function E() {
        this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return E.prototype = {
        loadAssets: o,
        setAssetsPath: c,
        setPath: p,
        loadedImages: x,
        loadedFootages: A,
        destroy: f,
        getAsset: k,
        createImgData: a,
        createImageData: n,
        imageLoaded: t,
        footageLoaded: r,
        setCacheType: m
      }, E;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = {
      triggerEvent: function(t, r) {
        if (this._cbs[t])
          for (var i = this._cbs[t], s = 0; s < i.length; s += 1)
            i[s](r);
      },
      addEventListener: function(t, r) {
        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(r), (function() {
          this.removeEventListener(t, r);
        }).bind(this);
      },
      removeEventListener: function(t, r) {
        if (!r)
          this._cbs[t] = null;
        else if (this._cbs[t]) {
          for (var i = 0, s = this._cbs[t].length; i < s; )
            this._cbs[t][i] === r && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1;
          this._cbs[t].length || (this._cbs[t] = null);
        }
      }
    };
    var markerParser = function() {
      function e(t) {
        for (var r = t.split(`\r
`), i = {}, s, n = 0, a = 0; a < r.length; a += 1)
          s = r[a].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), n += 1);
        if (n === 0)
          throw new Error();
        return i;
      }
      return function(t) {
        for (var r = [], i = 0; i < t.length; i += 1) {
          var s = t[i], n = {
            time: s.tm,
            duration: s.dr
          };
          try {
            n.payload = JSON.parse(t[i].cm);
          } catch {
            try {
              n.payload = e(t[i].cm);
            } catch {
              n.payload = {
                name: t[i].cm
              };
            }
          }
          r.push(n);
        }
        return r;
      };
    }(), ProjectInterface = function() {
      function e(t) {
        this.compositions.push(t);
      }
      return function() {
        function t(r) {
          for (var i = 0, s = this.compositions.length; i < s; ) {
            if (this.compositions[i].data && this.compositions[i].data.nm === r)
              return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
            i += 1;
          }
          return null;
        }
        return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t;
      };
    }(), renderers = {}, registerRenderer = function(t, r) {
      renderers[t] = r;
    };
    function getRenderer(e) {
      return renderers[e];
    }
    function getRegisteredRenderer() {
      if (renderers.canvas)
        return "canvas";
      for (var e in renderers)
        if (renderers[e])
          return e;
      return "";
    }
    function _typeof$4(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
        return typeof r;
      } : _typeof$4 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$4(e);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
      (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
      var t = "svg";
      e.animType ? t = e.animType : e.renderer && (t = e.renderer);
      var r = getRenderer(t);
      this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = "autoplay" in e ? e.autoplay : !0, this.name = e.name ? e.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(e, "autoloadSegments") ? e.autoloadSegments : !0, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(e) {
      dataManager.completeAnimation(e, this.configAnimation);
    }, AnimationItem.prototype.setData = function(e, t) {
      t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
      var r = {
        wrapper: e,
        animationData: t
      }, i = e.attributes;
      r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
      s === "false" ? r.loop = !1 : s === "true" ? r.loop = !0 : s !== "" && (r.loop = parseInt(s, 10));
      var n = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
      r.autoplay = n !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
      var a = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
      a === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy");
    }, AnimationItem.prototype.includeLayers = function(e) {
      e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
      var t = this.animationData.layers, r, i = t.length, s = e.layers, n, a = s.length;
      for (n = 0; n < a; n += 1)
        for (r = 0; r < i; ) {
          if (t[r].id === s[n].id) {
            t[r] = s[n];
            break;
          }
          r += 1;
        }
      if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
        for (i = e.assets.length, r = 0; r < i; r += 1)
          this.animationData.assets.push(e.assets[r]);
      this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(e) {
      this.animationData = e;
      var t = getExpressionsPlugin();
      t && t.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var e = this.animationData.segments;
      if (!e || e.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var t = e.shift();
      this.timeCompleted = t.time * this.frameRate;
      var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      var e = this.animationData.segments;
      e || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(e) {
      if (this.renderer)
        try {
          this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
        } catch (t) {
          this.triggerConfigError(t);
        }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var e = getExpressionsPlugin();
        e && e.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(e, t) {
      var r = typeof e == "number" ? e : void 0, i = typeof t == "number" ? t : void 0;
      this.renderer.updateContainerSize(r, i);
    }, AnimationItem.prototype.setSubframe = function(e) {
      this.isSubframeEnabled = !!e;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (!(this.isLoaded === !1 || !this.renderer))
        try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (e) {
          this.triggerRenderFrameError(e);
        }
    }, AnimationItem.prototype.play = function(e) {
      e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(e) {
      e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(e) {
      e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(e) {
      e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(e) {
      for (var t, r = 0; r < this.markers.length; r += 1)
        if (t = this.markers[r], t.payload && t.payload.name === e)
          return t;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
      if (!(r && this.name !== r)) {
        var i = Number(e);
        if (isNaN(i)) {
          var s = this.getMarkerData(e);
          s && this.goToAndStop(s.time, !0);
        } else
          t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
      if (!(r && this.name !== r)) {
        var i = Number(e);
        if (isNaN(i)) {
          var s = this.getMarkerData(e);
          s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0));
        } else
          this.goToAndStop(i, t, r);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(e) {
      if (!(this.isPaused === !0 || this.isLoaded === !1)) {
        var t = this.currentRawFrame + e * this.frameModifier, r = !1;
        t >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : t < 0 ? this.checkSegments(t % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, t = 0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(e, t) {
      this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(1e-3 + t)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(e, t) {
      var r = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0);
    }, AnimationItem.prototype.playSegments = function(e, t) {
      if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
        var r, i = e.length;
        for (r = 0; r < i; r += 1)
          this.segments.push(e[r]);
      } else
        this.segments.push(e);
      this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(e) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(e) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), e), !0) : !1;
    }, AnimationItem.prototype.destroy = function(e) {
      e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
      this.currentRawFrame = e, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(e) {
      this.playSpeed = e, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(e) {
      this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(e) {
      this.loop = e;
    }, AnimationItem.prototype.setVolume = function(e, t) {
      t && this.name !== t || this.audioController.setVolume(e);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(e) {
      e && this.name !== e || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(e) {
      e && this.name !== e || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(e) {
      var t = "";
      if (e.e)
        t = e.p;
      else if (this.assetsPath) {
        var r = e.p;
        r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r;
      } else
        t = this.path, t += e.u ? e.u : "", t += e.p;
      return t;
    }, AnimationItem.prototype.getAssetData = function(e) {
      for (var t = 0, r = this.assets.length; t < r; ) {
        if (e === this.assets[t].id)
          return this.assets[t];
        t += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(e) {
      return e ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
      try {
        var i = this.renderer.getElementByPath(e);
        i.updateDocumentData(t, r);
      } catch {
      }
    }, AnimationItem.prototype.trigger = function(e) {
      if (this._cbs && this._cbs[e])
        switch (e) {
          case "enterFrame":
            this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(e, new BMDestroyEvent(e, this));
            break;
          default:
            this.triggerEvent(e);
        }
      e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
      var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
      this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
    }, AnimationItem.prototype.triggerConfigError = function(e) {
      var t = new BMConfigErrorEvent(e, this.currentFrame);
      this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
    };
    var animationManager = function() {
      var e = {}, t = [], r = 0, i = 0, s = 0, n = !0, a = !1;
      function l(P) {
        for (var _ = 0, b = P.target; _ < i; )
          t[_].animation === b && (t.splice(_, 1), _ -= 1, i -= 1, b.isPaused || k()), _ += 1;
      }
      function o(P, _) {
        if (!P)
          return null;
        for (var b = 0; b < i; ) {
          if (t[b].elem === P && t[b].elem !== null)
            return t[b].animation;
          b += 1;
        }
        var C = new AnimationItem();
        return f(C, P), C.setData(P, _), C;
      }
      function p() {
        var P, _ = t.length, b = [];
        for (P = 0; P < _; P += 1)
          b.push(t[P].animation);
        return b;
      }
      function c() {
        s += 1, H();
      }
      function k() {
        s -= 1;
      }
      function f(P, _) {
        P.addEventListener("destroy", l), P.addEventListener("_active", c), P.addEventListener("_idle", k), t.push({
          elem: _,
          animation: P
        }), i += 1;
      }
      function x(P) {
        var _ = new AnimationItem();
        return f(_, null), _.setParams(P), _;
      }
      function A(P, _) {
        var b;
        for (b = 0; b < i; b += 1)
          t[b].animation.setSpeed(P, _);
      }
      function m(P, _) {
        var b;
        for (b = 0; b < i; b += 1)
          t[b].animation.setDirection(P, _);
      }
      function E(P) {
        var _;
        for (_ = 0; _ < i; _ += 1)
          t[_].animation.play(P);
      }
      function d(P) {
        var _ = P - r, b;
        for (b = 0; b < i; b += 1)
          t[b].animation.advanceTime(_);
        r = P, s && !a ? window.requestAnimationFrame(d) : n = !0;
      }
      function g(P) {
        r = P, window.requestAnimationFrame(d);
      }
      function u(P) {
        var _;
        for (_ = 0; _ < i; _ += 1)
          t[_].animation.pause(P);
      }
      function y(P, _, b) {
        var C;
        for (C = 0; C < i; C += 1)
          t[C].animation.goToAndStop(P, _, b);
      }
      function S(P) {
        var _;
        for (_ = 0; _ < i; _ += 1)
          t[_].animation.stop(P);
      }
      function T(P) {
        var _;
        for (_ = 0; _ < i; _ += 1)
          t[_].animation.togglePause(P);
      }
      function M(P) {
        var _;
        for (_ = i - 1; _ >= 0; _ -= 1)
          t[_].animation.destroy(P);
      }
      function I(P, _, b) {
        var C = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), B, F = C.length;
        for (B = 0; B < F; B += 1)
          b && C[B].setAttribute("data-bm-type", b), o(C[B], P);
        if (_ && F === 0) {
          b || (b = "svg");
          var z = document.getElementsByTagName("body")[0];
          z.innerText = "";
          var q = createTag("div");
          q.style.width = "100%", q.style.height = "100%", q.setAttribute("data-bm-type", b), z.appendChild(q), o(q, P);
        }
      }
      function R() {
        var P;
        for (P = 0; P < i; P += 1)
          t[P].animation.resize();
      }
      function H() {
        !a && s && n && (window.requestAnimationFrame(g), n = !1);
      }
      function D() {
        a = !0;
      }
      function V() {
        a = !1, H();
      }
      function O(P, _) {
        var b;
        for (b = 0; b < i; b += 1)
          t[b].animation.setVolume(P, _);
      }
      function G(P) {
        var _;
        for (_ = 0; _ < i; _ += 1)
          t[_].animation.mute(P);
      }
      function L(P) {
        var _;
        for (_ = 0; _ < i; _ += 1)
          t[_].animation.unmute(P);
      }
      return e.registerAnimation = o, e.loadAnimation = x, e.setSpeed = A, e.setDirection = m, e.play = E, e.pause = u, e.stop = S, e.togglePause = T, e.searchAnimations = I, e.resize = R, e.goToAndStop = y, e.destroy = M, e.freeze = D, e.unfreeze = V, e.setVolume = O, e.mute = G, e.unmute = L, e.getRegisteredAnimations = p, e;
    }(), BezierFactory = function() {
      var e = {};
      e.getBezierEasing = r;
      var t = {};
      function r(g, u, y, S, T) {
        var M = T || ("bez_" + g + "_" + u + "_" + y + "_" + S).replace(/\./g, "p");
        if (t[M])
          return t[M];
        var I = new d([g, u, y, S]);
        return t[M] = I, I;
      }
      var i = 4, s = 1e-3, n = 1e-7, a = 10, l = 11, o = 1 / (l - 1), p = typeof Float32Array == "function";
      function c(g, u) {
        return 1 - 3 * u + 3 * g;
      }
      function k(g, u) {
        return 3 * u - 6 * g;
      }
      function f(g) {
        return 3 * g;
      }
      function x(g, u, y) {
        return ((c(u, y) * g + k(u, y)) * g + f(u)) * g;
      }
      function A(g, u, y) {
        return 3 * c(u, y) * g * g + 2 * k(u, y) * g + f(u);
      }
      function m(g, u, y, S, T) {
        var M, I, R = 0;
        do
          I = u + (y - u) / 2, M = x(I, S, T) - g, M > 0 ? y = I : u = I;
        while (Math.abs(M) > n && ++R < a);
        return I;
      }
      function E(g, u, y, S) {
        for (var T = 0; T < i; ++T) {
          var M = A(u, y, S);
          if (M === 0)
            return u;
          var I = x(u, y, S) - g;
          u -= I / M;
        }
        return u;
      }
      function d(g) {
        this._p = g, this._mSampleValues = p ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this);
      }
      return d.prototype = {
        get: function(u) {
          var y = this._p[0], S = this._p[1], T = this._p[2], M = this._p[3];
          return this._precomputed || this._precompute(), y === S && T === M ? u : u === 0 ? 0 : u === 1 ? 1 : x(this._getTForX(u), S, M);
        },
        // Private part
        _precompute: function() {
          var u = this._p[0], y = this._p[1], S = this._p[2], T = this._p[3];
          this._precomputed = !0, (u !== y || S !== T) && this._calcSampleValues();
        },
        _calcSampleValues: function() {
          for (var u = this._p[0], y = this._p[2], S = 0; S < l; ++S)
            this._mSampleValues[S] = x(S * o, u, y);
        },
        /**
             * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
             */
        _getTForX: function(u) {
          for (var y = this._p[0], S = this._p[2], T = this._mSampleValues, M = 0, I = 1, R = l - 1; I !== R && T[I] <= u; ++I)
            M += o;
          --I;
          var H = (u - T[I]) / (T[I + 1] - T[I]), D = M + H * o, V = A(D, y, S);
          return V >= s ? E(u, D, y, S) : V === 0 ? D : m(u, M, M + o, y, S);
        }
      }, e;
    }(), pooling = function() {
      function e(t) {
        return t.concat(createSizedArray(t.length));
      }
      return {
        double: e
      };
    }(), poolFactory = function() {
      return function(e, t, r) {
        var i = 0, s = e, n = createSizedArray(s), a = {
          newElement: l,
          release: o
        };
        function l() {
          var p;
          return i ? (i -= 1, p = n[i]) : p = t(), p;
        }
        function o(p) {
          i === s && (n = pooling.double(n), s *= 2), r && r(p), n[i] = p, i += 1;
        }
        return a;
      };
    }(), bezierLengthPool = function() {
      function e() {
        return {
          addedLength: 0,
          percents: createTypedArray("float32", getDefaultCurveSegments()),
          lengths: createTypedArray("float32", getDefaultCurveSegments())
        };
      }
      return poolFactory(8, e);
    }(), segmentsLengthPool = function() {
      function e() {
        return {
          lengths: [],
          totalLength: 0
        };
      }
      function t(r) {
        var i, s = r.lengths.length;
        for (i = 0; i < s; i += 1)
          bezierLengthPool.release(r.lengths[i]);
        r.lengths.length = 0;
      }
      return poolFactory(8, e, t);
    }();
    function bezFunction() {
      var e = Math;
      function t(f, x, A, m, E, d) {
        var g = f * m + x * E + A * d - E * m - d * f - A * x;
        return g > -1e-3 && g < 1e-3;
      }
      function r(f, x, A, m, E, d, g, u, y) {
        if (A === 0 && d === 0 && y === 0)
          return t(f, x, m, E, g, u);
        var S = e.sqrt(e.pow(m - f, 2) + e.pow(E - x, 2) + e.pow(d - A, 2)), T = e.sqrt(e.pow(g - f, 2) + e.pow(u - x, 2) + e.pow(y - A, 2)), M = e.sqrt(e.pow(g - m, 2) + e.pow(u - E, 2) + e.pow(y - d, 2)), I;
        return S > T ? S > M ? I = S - T - M : I = M - T - S : M > T ? I = M - T - S : I = T - S - M, I > -1e-4 && I < 1e-4;
      }
      var i = function() {
        return function(f, x, A, m) {
          var E = getDefaultCurveSegments(), d, g, u, y, S, T = 0, M, I = [], R = [], H = bezierLengthPool.newElement();
          for (u = A.length, d = 0; d < E; d += 1) {
            for (S = d / (E - 1), M = 0, g = 0; g < u; g += 1)
              y = bmPow(1 - S, 3) * f[g] + 3 * bmPow(1 - S, 2) * S * A[g] + 3 * (1 - S) * bmPow(S, 2) * m[g] + bmPow(S, 3) * x[g], I[g] = y, R[g] !== null && (M += bmPow(I[g] - R[g], 2)), R[g] = I[g];
            M && (M = bmSqrt(M), T += M), H.percents[d] = S, H.lengths[d] = T;
          }
          return H.addedLength = T, H;
        };
      }();
      function s(f) {
        var x = segmentsLengthPool.newElement(), A = f.c, m = f.v, E = f.o, d = f.i, g, u = f._length, y = x.lengths, S = 0;
        for (g = 0; g < u - 1; g += 1)
          y[g] = i(m[g], m[g + 1], E[g], d[g + 1]), S += y[g].addedLength;
        return A && u && (y[g] = i(m[g], m[0], E[g], d[0]), S += y[g].addedLength), x.totalLength = S, x;
      }
      function n(f) {
        this.segmentLength = 0, this.points = new Array(f);
      }
      function a(f, x) {
        this.partialLength = f, this.point = x;
      }
      var l = function() {
        var f = {};
        return function(x, A, m, E) {
          var d = (x[0] + "_" + x[1] + "_" + A[0] + "_" + A[1] + "_" + m[0] + "_" + m[1] + "_" + E[0] + "_" + E[1]).replace(/\./g, "p");
          if (!f[d]) {
            var g = getDefaultCurveSegments(), u, y, S, T, M, I = 0, R, H, D = null;
            x.length === 2 && (x[0] !== A[0] || x[1] !== A[1]) && t(x[0], x[1], A[0], A[1], x[0] + m[0], x[1] + m[1]) && t(x[0], x[1], A[0], A[1], A[0] + E[0], A[1] + E[1]) && (g = 2);
            var V = new n(g);
            for (S = m.length, u = 0; u < g; u += 1) {
              for (H = createSizedArray(S), M = u / (g - 1), R = 0, y = 0; y < S; y += 1)
                T = bmPow(1 - M, 3) * x[y] + 3 * bmPow(1 - M, 2) * M * (x[y] + m[y]) + 3 * (1 - M) * bmPow(M, 2) * (A[y] + E[y]) + bmPow(M, 3) * A[y], H[y] = T, D !== null && (R += bmPow(H[y] - D[y], 2));
              R = bmSqrt(R), I += R, V.points[u] = new a(R, H), D = H;
            }
            V.segmentLength = I, f[d] = V;
          }
          return f[d];
        };
      }();
      function o(f, x) {
        var A = x.percents, m = x.lengths, E = A.length, d = bmFloor((E - 1) * f), g = f * x.addedLength, u = 0;
        if (d === E - 1 || d === 0 || g === m[d])
          return A[d];
        for (var y = m[d] > g ? -1 : 1, S = !0; S; )
          if (m[d] <= g && m[d + 1] > g ? (u = (g - m[d]) / (m[d + 1] - m[d]), S = !1) : d += y, d < 0 || d >= E - 1) {
            if (d === E - 1)
              return A[d];
            S = !1;
          }
        return A[d] + (A[d + 1] - A[d]) * u;
      }
      function p(f, x, A, m, E, d) {
        var g = o(E, d), u = 1 - g, y = e.round((u * u * u * f[0] + (g * u * u + u * g * u + u * u * g) * A[0] + (g * g * u + u * g * g + g * u * g) * m[0] + g * g * g * x[0]) * 1e3) / 1e3, S = e.round((u * u * u * f[1] + (g * u * u + u * g * u + u * u * g) * A[1] + (g * g * u + u * g * g + g * u * g) * m[1] + g * g * g * x[1]) * 1e3) / 1e3;
        return [y, S];
      }
      var c = createTypedArray("float32", 8);
      function k(f, x, A, m, E, d, g) {
        E < 0 ? E = 0 : E > 1 && (E = 1);
        var u = o(E, g);
        d = d > 1 ? 1 : d;
        var y = o(d, g), S, T = f.length, M = 1 - u, I = 1 - y, R = M * M * M, H = u * M * M * 3, D = u * u * M * 3, V = u * u * u, O = M * M * I, G = u * M * I + M * u * I + M * M * y, L = u * u * I + M * u * y + u * M * y, P = u * u * y, _ = M * I * I, b = u * I * I + M * y * I + M * I * y, C = u * y * I + M * y * y + u * I * y, B = u * y * y, F = I * I * I, z = y * I * I + I * y * I + I * I * y, q = y * y * I + I * y * y + y * I * y, j = y * y * y;
        for (S = 0; S < T; S += 1)
          c[S * 4] = e.round((R * f[S] + H * A[S] + D * m[S] + V * x[S]) * 1e3) / 1e3, c[S * 4 + 1] = e.round((O * f[S] + G * A[S] + L * m[S] + P * x[S]) * 1e3) / 1e3, c[S * 4 + 2] = e.round((_ * f[S] + b * A[S] + C * m[S] + B * x[S]) * 1e3) / 1e3, c[S * 4 + 3] = e.round((F * f[S] + z * A[S] + q * m[S] + j * x[S]) * 1e3) / 1e3;
        return c;
      }
      return {
        getSegmentsLength: s,
        getNewSegment: k,
        getPointInSegment: p,
        buildBezierData: l,
        pointOnLine2D: t,
        pointOnLine3D: r
      };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(e, t) {
      var r = this.offsetTime, i;
      this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
      for (var s = t.lastIndex, n = s, a = this.keyframes.length - 1, l = !0, o, p, c; l; ) {
        if (o = this.keyframes[n], p = this.keyframes[n + 1], n === a - 1 && e >= p.t - r) {
          o.h && (o = p), s = 0;
          break;
        }
        if (p.t - r > e) {
          s = n;
          break;
        }
        n < a - 1 ? n += 1 : (s = 0, l = !1);
      }
      c = this.keyframesMetadata[n] || {};
      var k, f, x, A, m, E, d = p.t - r, g = o.t - r, u;
      if (o.to) {
        c.bezierData || (c.bezierData = bez.buildBezierData(o.s, p.s || o.e, o.to, o.ti));
        var y = c.bezierData;
        if (e >= d || e < g) {
          var S = e >= d ? y.points.length - 1 : 0;
          for (f = y.points[S].point.length, k = 0; k < f; k += 1)
            i[k] = y.points[S].point[k];
        } else {
          c.__fnct ? E = c.__fnct : (E = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, c.__fnct = E), x = E((e - g) / (d - g));
          var T = y.segmentLength * x, M, I = t.lastFrame < e && t._lastKeyframeIndex === n ? t._lastAddedLength : 0;
          for (m = t.lastFrame < e && t._lastKeyframeIndex === n ? t._lastPoint : 0, l = !0, A = y.points.length; l; ) {
            if (I += y.points[m].partialLength, T === 0 || x === 0 || m === y.points.length - 1) {
              for (f = y.points[m].point.length, k = 0; k < f; k += 1)
                i[k] = y.points[m].point[k];
              break;
            } else if (T >= I && T < I + y.points[m + 1].partialLength) {
              for (M = (T - I) / y.points[m + 1].partialLength, f = y.points[m].point.length, k = 0; k < f; k += 1)
                i[k] = y.points[m].point[k] + (y.points[m + 1].point[k] - y.points[m].point[k]) * M;
              break;
            }
            m < A - 1 ? m += 1 : l = !1;
          }
          t._lastPoint = m, t._lastAddedLength = I - y.points[m].partialLength, t._lastKeyframeIndex = n;
        }
      } else {
        var R, H, D, V, O;
        if (a = o.s.length, u = p.s || o.e, this.sh && o.h !== 1)
          if (e >= d)
            i[0] = u[0], i[1] = u[1], i[2] = u[2];
          else if (e <= g)
            i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
          else {
            var G = createQuaternion(o.s), L = createQuaternion(u), P = (e - g) / (d - g);
            quaternionToEuler(i, slerp(G, L, P));
          }
        else
          for (n = 0; n < a; n += 1)
            o.h !== 1 && (e >= d ? x = 1 : e < g ? x = 0 : (o.o.x.constructor === Array ? (c.__fnct || (c.__fnct = []), c.__fnct[n] ? E = c.__fnct[n] : (R = o.o.x[n] === void 0 ? o.o.x[0] : o.o.x[n], H = o.o.y[n] === void 0 ? o.o.y[0] : o.o.y[n], D = o.i.x[n] === void 0 ? o.i.x[0] : o.i.x[n], V = o.i.y[n] === void 0 ? o.i.y[0] : o.i.y[n], E = BezierFactory.getBezierEasing(R, H, D, V).get, c.__fnct[n] = E)) : c.__fnct ? E = c.__fnct : (R = o.o.x, H = o.o.y, D = o.i.x, V = o.i.y, E = BezierFactory.getBezierEasing(R, H, D, V).get, o.keyframeMetadata = E), x = E((e - g) / (d - g)))), u = p.s || o.e, O = o.h === 1 ? o.s[n] : o.s[n] + (u[n] - o.s[n]) * x, this.propType === "multidimensional" ? i[n] = O : i = O;
      }
      return t.lastIndex = s, i;
    }
    function slerp(e, t, r) {
      var i = [], s = e[0], n = e[1], a = e[2], l = e[3], o = t[0], p = t[1], c = t[2], k = t[3], f, x, A, m, E;
      return x = s * o + n * p + a * c + l * k, x < 0 && (x = -x, o = -o, p = -p, c = -c, k = -k), 1 - x > 1e-6 ? (f = Math.acos(x), A = Math.sin(f), m = Math.sin((1 - r) * f) / A, E = Math.sin(r * f) / A) : (m = 1 - r, E = r), i[0] = m * s + E * o, i[1] = m * n + E * p, i[2] = m * a + E * c, i[3] = m * l + E * k, i;
    }
    function quaternionToEuler(e, t) {
      var r = t[0], i = t[1], s = t[2], n = t[3], a = Math.atan2(2 * i * n - 2 * r * s, 1 - 2 * i * i - 2 * s * s), l = Math.asin(2 * r * i + 2 * s * n), o = Math.atan2(2 * r * n - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
      e[0] = a / degToRads, e[1] = l / degToRads, e[2] = o / degToRads;
    }
    function createQuaternion(e) {
      var t = e[0] * degToRads, r = e[1] * degToRads, i = e[2] * degToRads, s = Math.cos(t / 2), n = Math.cos(r / 2), a = Math.cos(i / 2), l = Math.sin(t / 2), o = Math.sin(r / 2), p = Math.sin(i / 2), c = s * n * a - l * o * p, k = l * o * a + s * n * p, f = l * n * a + s * o * p, x = s * o * a - l * n * p;
      return [k, f, x, c];
    }
    function getValueAtCurrentTime() {
      var e = this.comp.renderedFrame - this.offsetTime, t = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var i = this.interpolateValue(e, this._caching);
        this.pv = i;
      }
      return this._caching.lastFrame = e, this.pv;
    }
    function setVValue(e) {
      var t;
      if (this.propType === "unidimensional")
        t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
      else
        for (var r = 0, i = this.v.length; r < i; )
          t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1;
    }
    function processEffectsSequence() {
      if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
        if (this.lock) {
          this.setVValue(this.pv);
          return;
        }
        this.lock = !0, this._mdf = this._isFirstFrame;
        var e, t = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
        for (e = 0; e < t; e += 1)
          r = this.effectsSequence[e](r);
        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }
    function addEffect(e) {
      this.effectsSequence.push(e), this.container.addDynamicProperty(this);
    }
    function ValueProperty(e, t, r, i) {
      this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(e, t, r, i) {
      this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var s, n = t.k.length;
      for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), s = 0; s < n; s += 1)
        this.v[s] = t.k[s] * this.mult, this.pv[s] = t.k[s];
      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function KeyframedValueProperty(e, t, r, i) {
      this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
        lastFrame: initFrame,
        lastIndex: 0,
        value: 0,
        _lastKeyframeIndex: -1
      }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(e, t, r, i) {
      this.propType = "multidimensional";
      var s, n = t.k.length, a, l, o, p;
      for (s = 0; s < n - 1; s += 1)
        t.k[s].to && t.k[s].s && t.k[s + 1] && t.k[s + 1].s && (a = t.k[s].s, l = t.k[s + 1].s, o = t.k[s].to, p = t.k[s].ti, (a.length === 2 && !(a[0] === l[0] && a[1] === l[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], l[0] + p[0], l[1] + p[1]) || a.length === 3 && !(a[0] === l[0] && a[1] === l[1] && a[2] === l[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], l[0] + p[0], l[1] + p[1], l[2] + p[2])) && (t.k[s].to = null, t.k[s].ti = null), a[0] === l[0] && a[1] === l[1] && o[0] === 0 && o[1] === 0 && p[0] === 0 && p[1] === 0 && (a.length === 2 || a[2] === l[2] && o[2] === 0 && p[2] === 0) && (t.k[s].to = null, t.k[s].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var c = t.k[0].s.length;
      for (this.v = createTypedArray("float32", c), this.pv = createTypedArray("float32", c), s = 0; s < c; s += 1)
        this.v[s] = initFrame, this.pv[s] = initFrame;
      this._caching = {
        lastFrame: initFrame,
        lastIndex: 0,
        value: createTypedArray("float32", c)
      }, this.addEffect = addEffect;
    }
    var PropertyFactory = function() {
      function e(r, i, s, n, a) {
        i.sid && (i = r.globalData.slotManager.getProp(i));
        var l;
        if (!i.k.length)
          l = new ValueProperty(r, i, n, a);
        else if (typeof i.k[0] == "number")
          l = new MultiDimensionalProperty(r, i, n, a);
        else
          switch (s) {
            case 0:
              l = new KeyframedValueProperty(r, i, n, a);
              break;
            case 1:
              l = new KeyframedMultidimensionalProperty(r, i, n, a);
              break;
          }
        return l.effectsSequence.length && a.addDynamicProperty(l), l;
      }
      var t = {
        getProp: e
      };
      return t;
    }();
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = {
      addDynamicProperty: function(t) {
        this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
      },
      iterateDynamicProperties: function() {
        this._mdf = !1;
        var t, r = this.dynamicProperties.length;
        for (t = 0; t < r; t += 1)
          this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
      },
      initDynamicPropertyContainer: function(t) {
        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
      }
    };
    var pointPool = function() {
      function e() {
        return createTypedArray("float32", 2);
      }
      return poolFactory(8, e);
    }();
    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(e, t) {
      this.c = e, this.setLength(t);
      for (var r = 0; r < t; )
        this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
    }, ShapePath.prototype.setLength = function(e) {
      for (; this._maxLength < e; )
        this.doubleArrayLength();
      this._length = e;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(e, t, r, i, s) {
      var n;
      switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
        case "v":
          n = this.v;
          break;
        case "i":
          n = this.i;
          break;
        case "o":
          n = this.o;
          break;
        default:
          n = [];
          break;
      }
      (!n[i] || n[i] && !s) && (n[i] = pointPool.newElement()), n[i][0] = e, n[i][1] = t;
    }, ShapePath.prototype.setTripleAt = function(e, t, r, i, s, n, a, l) {
      this.setXYAt(e, t, "v", a, l), this.setXYAt(r, i, "o", a, l), this.setXYAt(s, n, "i", a, l);
    }, ShapePath.prototype.reverse = function() {
      var e = new ShapePath();
      e.setPathData(this.c, this._length);
      var t = this.v, r = this.o, i = this.i, s = 0;
      this.c && (e.setTripleAt(t[0][0], t[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
      var n = this._length - 1, a = this._length, l;
      for (l = s; l < a; l += 1)
        e.setTripleAt(t[n][0], t[n][1], i[n][0], i[n][1], r[n][0], r[n][1], l, !1), n -= 1;
      return e;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = function() {
      function e() {
        return new ShapePath();
      }
      function t(s) {
        var n = s._length, a;
        for (a = 0; a < n; a += 1)
          pointPool.release(s.v[a]), pointPool.release(s.i[a]), pointPool.release(s.o[a]), s.v[a] = null, s.i[a] = null, s.o[a] = null;
        s._length = 0, s.c = !1;
      }
      function r(s) {
        var n = i.newElement(), a, l = s._length === void 0 ? s.v.length : s._length;
        for (n.setLength(l), n.c = s.c, a = 0; a < l; a += 1)
          n.setTripleAt(s.v[a][0], s.v[a][1], s.o[a][0], s.o[a][1], s.i[a][0], s.i[a][1], a);
        return n;
      }
      var i = poolFactory(4, e, t);
      return i.clone = r, i;
    }();
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(e) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var e;
      for (e = 0; e < this._length; e += 1)
        shapePool.release(this.shapes[e]);
      this._length = 0;
    };
    var shapeCollectionPool = function() {
      var e = {
        newShapeCollection: s,
        release: n
      }, t = 0, r = 4, i = createSizedArray(r);
      function s() {
        var a;
        return t ? (t -= 1, a = i[t]) : a = new ShapeCollection(), a;
      }
      function n(a) {
        var l, o = a._length;
        for (l = 0; l < o; l += 1)
          shapePool.release(a.shapes[l]);
        a._length = 0, t === r && (i = pooling.double(i), r *= 2), i[t] = a, t += 1;
      }
      return e;
    }(), ShapePropertyFactory = function() {
      var e = -999999;
      function t(d, g, u) {
        var y = u.lastIndex, S, T, M, I, R, H, D, V, O, G = this.keyframes;
        if (d < G[0].t - this.offsetTime)
          S = G[0].s[0], M = !0, y = 0;
        else if (d >= G[G.length - 1].t - this.offsetTime)
          S = G[G.length - 1].s ? G[G.length - 1].s[0] : G[G.length - 2].e[0], M = !0;
        else {
          for (var L = y, P = G.length - 1, _ = !0, b, C, B; _ && (b = G[L], C = G[L + 1], !(C.t - this.offsetTime > d)); )
            L < P - 1 ? L += 1 : _ = !1;
          if (B = this.keyframesMetadata[L] || {}, M = b.h === 1, y = L, !M) {
            if (d >= C.t - this.offsetTime)
              V = 1;
            else if (d < b.t - this.offsetTime)
              V = 0;
            else {
              var F;
              B.__fnct ? F = B.__fnct : (F = BezierFactory.getBezierEasing(b.o.x, b.o.y, b.i.x, b.i.y).get, B.__fnct = F), V = F((d - (b.t - this.offsetTime)) / (C.t - this.offsetTime - (b.t - this.offsetTime)));
            }
            T = C.s ? C.s[0] : b.e[0];
          }
          S = b.s[0];
        }
        for (H = g._length, D = S.i[0].length, u.lastIndex = y, I = 0; I < H; I += 1)
          for (R = 0; R < D; R += 1)
            O = M ? S.i[I][R] : S.i[I][R] + (T.i[I][R] - S.i[I][R]) * V, g.i[I][R] = O, O = M ? S.o[I][R] : S.o[I][R] + (T.o[I][R] - S.o[I][R]) * V, g.o[I][R] = O, O = M ? S.v[I][R] : S.v[I][R] + (T.v[I][R] - S.v[I][R]) * V, g.v[I][R] = O;
      }
      function r() {
        var d = this.comp.renderedFrame - this.offsetTime, g = this.keyframes[0].t - this.offsetTime, u = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, y = this._caching.lastFrame;
        return y !== e && (y < g && d < g || y > u && d > u) || (this._caching.lastIndex = y < d ? this._caching.lastIndex : 0, this.interpolateShape(d, this.pv, this._caching)), this._caching.lastFrame = d, this.pv;
      }
      function i() {
        this.paths = this.localShapeCollection;
      }
      function s(d, g) {
        if (d._length !== g._length || d.c !== g.c)
          return !1;
        var u, y = d._length;
        for (u = 0; u < y; u += 1)
          if (d.v[u][0] !== g.v[u][0] || d.v[u][1] !== g.v[u][1] || d.o[u][0] !== g.o[u][0] || d.o[u][1] !== g.o[u][1] || d.i[u][0] !== g.i[u][0] || d.i[u][1] !== g.i[u][1])
            return !1;
        return !0;
      }
      function n(d) {
        s(this.v, d) || (this.v = shapePool.clone(d), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
      }
      function a() {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (!this.effectsSequence.length) {
            this._mdf = !1;
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = !0, this._mdf = !1;
          var d;
          this.kf ? d = this.pv : this.data.ks ? d = this.data.ks.k : d = this.data.pt.k;
          var g, u = this.effectsSequence.length;
          for (g = 0; g < u; g += 1)
            d = this.effectsSequence[g](d);
          this.setVValue(d), this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
      function l(d, g, u) {
        this.propType = "shape", this.comp = d.comp, this.container = d, this.elem = d, this.data = g, this.k = !1, this.kf = !1, this._mdf = !1;
        var y = u === 3 ? g.pt.k : g.ks.k;
        this.v = shapePool.clone(y), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
      }
      function o(d) {
        this.effectsSequence.push(d), this.container.addDynamicProperty(this);
      }
      l.prototype.interpolateShape = t, l.prototype.getValue = a, l.prototype.setVValue = n, l.prototype.addEffect = o;
      function p(d, g, u) {
        this.propType = "shape", this.comp = d.comp, this.elem = d, this.container = d, this.offsetTime = d.data.st, this.keyframes = u === 3 ? g.pt.k : g.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
        var y = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, y), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = i, this._caching = {
          lastFrame: e,
          lastIndex: 0
        }, this.effectsSequence = [r.bind(this)];
      }
      p.prototype.getValue = a, p.prototype.interpolateShape = t, p.prototype.setVValue = n, p.prototype.addEffect = o;
      var c = function() {
        var d = roundCorner;
        function g(u, y) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = y.d, this.elem = u, this.comp = u.comp, this.frameId = -1, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, y.p, 1, 0, this), this.s = PropertyFactory.getProp(u, y.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
        }
        return g.prototype = {
          reset: i,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
          },
          convertEllToPath: function() {
            var y = this.p.v[0], S = this.p.v[1], T = this.s.v[0] / 2, M = this.s.v[1] / 2, I = this.d !== 3, R = this.v;
            R.v[0][0] = y, R.v[0][1] = S - M, R.v[1][0] = I ? y + T : y - T, R.v[1][1] = S, R.v[2][0] = y, R.v[2][1] = S + M, R.v[3][0] = I ? y - T : y + T, R.v[3][1] = S, R.i[0][0] = I ? y - T * d : y + T * d, R.i[0][1] = S - M, R.i[1][0] = I ? y + T : y - T, R.i[1][1] = S - M * d, R.i[2][0] = I ? y + T * d : y - T * d, R.i[2][1] = S + M, R.i[3][0] = I ? y - T : y + T, R.i[3][1] = S + M * d, R.o[0][0] = I ? y + T * d : y - T * d, R.o[0][1] = S - M, R.o[1][0] = I ? y + T : y - T, R.o[1][1] = S + M * d, R.o[2][0] = I ? y - T * d : y + T * d, R.o[2][1] = S + M, R.o[3][0] = I ? y - T : y + T, R.o[3][1] = S - M * d;
          }
        }, extendPrototype([DynamicPropertyContainer], g), g;
      }(), k = function() {
        function d(g, u) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = g, this.comp = g.comp, this.data = u, this.frameId = -1, this.d = u.d, this.initDynamicPropertyContainer(g), u.sy === 1 ? (this.ir = PropertyFactory.getProp(g, u.ir, 0, 0, this), this.is = PropertyFactory.getProp(g, u.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(g, u.pt, 0, 0, this), this.p = PropertyFactory.getProp(g, u.p, 1, 0, this), this.r = PropertyFactory.getProp(g, u.r, 0, degToRads, this), this.or = PropertyFactory.getProp(g, u.or, 0, 0, this), this.os = PropertyFactory.getProp(g, u.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
        }
        return d.prototype = {
          reset: i,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
          },
          convertStarToPath: function() {
            var u = Math.floor(this.pt.v) * 2, y = Math.PI * 2 / u, S = !0, T = this.or.v, M = this.ir.v, I = this.os.v, R = this.is.v, H = 2 * Math.PI * T / (u * 2), D = 2 * Math.PI * M / (u * 2), V, O, G, L, P = -Math.PI / 2;
            P += this.r.v;
            var _ = this.data.d === 3 ? -1 : 1;
            for (this.v._length = 0, V = 0; V < u; V += 1) {
              O = S ? T : M, G = S ? I : R, L = S ? H : D;
              var b = O * Math.cos(P), C = O * Math.sin(P), B = b === 0 && C === 0 ? 0 : C / Math.sqrt(b * b + C * C), F = b === 0 && C === 0 ? 0 : -b / Math.sqrt(b * b + C * C);
              b += +this.p.v[0], C += +this.p.v[1], this.v.setTripleAt(b, C, b - B * L * G * _, C - F * L * G * _, b + B * L * G * _, C + F * L * G * _, V, !0), S = !S, P += y * _;
            }
          },
          convertPolygonToPath: function() {
            var u = Math.floor(this.pt.v), y = Math.PI * 2 / u, S = this.or.v, T = this.os.v, M = 2 * Math.PI * S / (u * 4), I, R = -Math.PI * 0.5, H = this.data.d === 3 ? -1 : 1;
            for (R += this.r.v, this.v._length = 0, I = 0; I < u; I += 1) {
              var D = S * Math.cos(R), V = S * Math.sin(R), O = D === 0 && V === 0 ? 0 : V / Math.sqrt(D * D + V * V), G = D === 0 && V === 0 ? 0 : -D / Math.sqrt(D * D + V * V);
              D += +this.p.v[0], V += +this.p.v[1], this.v.setTripleAt(D, V, D - O * M * T * H, V - G * M * T * H, D + O * M * T * H, V + G * M * T * H, I, !0), R += y * H;
            }
            this.paths.length = 0, this.paths[0] = this.v;
          }
        }, extendPrototype([DynamicPropertyContainer], d), d;
      }(), f = function() {
        function d(g, u) {
          this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = g, this.comp = g.comp, this.frameId = -1, this.d = u.d, this.initDynamicPropertyContainer(g), this.p = PropertyFactory.getProp(g, u.p, 1, 0, this), this.s = PropertyFactory.getProp(g, u.s, 1, 0, this), this.r = PropertyFactory.getProp(g, u.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
        }
        return d.prototype = {
          convertRectToPath: function() {
            var u = this.p.v[0], y = this.p.v[1], S = this.s.v[0] / 2, T = this.s.v[1] / 2, M = bmMin(S, T, this.r.v), I = M * (1 - roundCorner);
            this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(u + S, y - T + M, u + S, y - T + M, u + S, y - T + I, 0, !0), this.v.setTripleAt(u + S, y + T - M, u + S, y + T - I, u + S, y + T - M, 1, !0), M !== 0 ? (this.v.setTripleAt(u + S - M, y + T, u + S - M, y + T, u + S - I, y + T, 2, !0), this.v.setTripleAt(u - S + M, y + T, u - S + I, y + T, u - S + M, y + T, 3, !0), this.v.setTripleAt(u - S, y + T - M, u - S, y + T - M, u - S, y + T - I, 4, !0), this.v.setTripleAt(u - S, y - T + M, u - S, y - T + I, u - S, y - T + M, 5, !0), this.v.setTripleAt(u - S + M, y - T, u - S + M, y - T, u - S + I, y - T, 6, !0), this.v.setTripleAt(u + S - M, y - T, u + S - I, y - T, u + S - M, y - T, 7, !0)) : (this.v.setTripleAt(u - S, y + T, u - S + I, y + T, u - S, y + T, 2), this.v.setTripleAt(u - S, y - T, u - S, y - T + I, u - S, y - T, 3))) : (this.v.setTripleAt(u + S, y - T + M, u + S, y - T + I, u + S, y - T + M, 0, !0), M !== 0 ? (this.v.setTripleAt(u + S - M, y - T, u + S - M, y - T, u + S - I, y - T, 1, !0), this.v.setTripleAt(u - S + M, y - T, u - S + I, y - T, u - S + M, y - T, 2, !0), this.v.setTripleAt(u - S, y - T + M, u - S, y - T + M, u - S, y - T + I, 3, !0), this.v.setTripleAt(u - S, y + T - M, u - S, y + T - I, u - S, y + T - M, 4, !0), this.v.setTripleAt(u - S + M, y + T, u - S + M, y + T, u - S + I, y + T, 5, !0), this.v.setTripleAt(u + S - M, y + T, u + S - I, y + T, u + S - M, y + T, 6, !0), this.v.setTripleAt(u + S, y + T - M, u + S, y + T - M, u + S, y + T - I, 7, !0)) : (this.v.setTripleAt(u - S, y - T, u - S + I, y - T, u - S, y - T, 1, !0), this.v.setTripleAt(u - S, y + T, u - S, y + T - I, u - S, y + T, 2, !0), this.v.setTripleAt(u + S, y + T, u + S - I, y + T, u + S, y + T, 3, !0)));
          },
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
          },
          reset: i
        }, extendPrototype([DynamicPropertyContainer], d), d;
      }();
      function x(d, g, u) {
        var y;
        if (u === 3 || u === 4) {
          var S = u === 3 ? g.pt : g.ks, T = S.k;
          T.length ? y = new p(d, g, u) : y = new l(d, g, u);
        } else
          u === 5 ? y = new f(d, g) : u === 6 ? y = new c(d, g) : u === 7 && (y = new k(d, g));
        return y.k && d.addDynamicProperty(y), y;
      }
      function A() {
        return l;
      }
      function m() {
        return p;
      }
      var E = {};
      return E.getShapeProp = x, E.getConstructorFunction = A, E.getKeyframedConstructorFunction = m, E;
    }();
    /*!
     Transformation Matrix v2.0
     (c) Epistemex 2014-2015
     www.epistemex.com
     By Ken Fyrstenberg
     Contributions by leeoniya.
     License: MIT, header required.
     */
    var Matrix = function() {
      var e = Math.cos, t = Math.sin, r = Math.tan, i = Math.round;
      function s() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function n(b) {
        if (b === 0)
          return this;
        var C = e(b), B = t(b);
        return this._t(C, -B, 0, 0, B, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function a(b) {
        if (b === 0)
          return this;
        var C = e(b), B = t(b);
        return this._t(1, 0, 0, 0, 0, C, -B, 0, 0, B, C, 0, 0, 0, 0, 1);
      }
      function l(b) {
        if (b === 0)
          return this;
        var C = e(b), B = t(b);
        return this._t(C, 0, B, 0, 0, 1, 0, 0, -B, 0, C, 0, 0, 0, 0, 1);
      }
      function o(b) {
        if (b === 0)
          return this;
        var C = e(b), B = t(b);
        return this._t(C, -B, 0, 0, B, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function p(b, C) {
        return this._t(1, C, b, 1, 0, 0);
      }
      function c(b, C) {
        return this.shear(r(b), r(C));
      }
      function k(b, C) {
        var B = e(C), F = t(C);
        return this._t(B, F, 0, 0, -F, B, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(b), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(B, -F, 0, 0, F, B, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function f(b, C, B) {
        return !B && B !== 0 && (B = 1), b === 1 && C === 1 && B === 1 ? this : this._t(b, 0, 0, 0, 0, C, 0, 0, 0, 0, B, 0, 0, 0, 0, 1);
      }
      function x(b, C, B, F, z, q, j, $, W, Y, Z, ie, U, J, ee, Q) {
        return this.props[0] = b, this.props[1] = C, this.props[2] = B, this.props[3] = F, this.props[4] = z, this.props[5] = q, this.props[6] = j, this.props[7] = $, this.props[8] = W, this.props[9] = Y, this.props[10] = Z, this.props[11] = ie, this.props[12] = U, this.props[13] = J, this.props[14] = ee, this.props[15] = Q, this;
      }
      function A(b, C, B) {
        return B = B || 0, b !== 0 || C !== 0 || B !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, C, B, 1) : this;
      }
      function m(b, C, B, F, z, q, j, $, W, Y, Z, ie, U, J, ee, Q) {
        var N = this.props;
        if (b === 1 && C === 0 && B === 0 && F === 0 && z === 0 && q === 1 && j === 0 && $ === 0 && W === 0 && Y === 0 && Z === 1 && ie === 0)
          return N[12] = N[12] * b + N[15] * U, N[13] = N[13] * q + N[15] * J, N[14] = N[14] * Z + N[15] * ee, N[15] *= Q, this._identityCalculated = !1, this;
        var ne = N[0], he = N[1], ae = N[2], se = N[3], oe = N[4], le = N[5], K = N[6], fe = N[7], pe = N[8], te = N[9], ce = N[10], re = N[11], ue = N[12], me = N[13], ge = N[14], ve = N[15];
        return N[0] = ne * b + he * z + ae * W + se * U, N[1] = ne * C + he * q + ae * Y + se * J, N[2] = ne * B + he * j + ae * Z + se * ee, N[3] = ne * F + he * $ + ae * ie + se * Q, N[4] = oe * b + le * z + K * W + fe * U, N[5] = oe * C + le * q + K * Y + fe * J, N[6] = oe * B + le * j + K * Z + fe * ee, N[7] = oe * F + le * $ + K * ie + fe * Q, N[8] = pe * b + te * z + ce * W + re * U, N[9] = pe * C + te * q + ce * Y + re * J, N[10] = pe * B + te * j + ce * Z + re * ee, N[11] = pe * F + te * $ + ce * ie + re * Q, N[12] = ue * b + me * z + ge * W + ve * U, N[13] = ue * C + me * q + ge * Y + ve * J, N[14] = ue * B + me * j + ge * Z + ve * ee, N[15] = ue * F + me * $ + ge * ie + ve * Q, this._identityCalculated = !1, this;
      }
      function E(b) {
        var C = b.props;
        return this.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]);
      }
      function d() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
      }
      function g(b) {
        for (var C = 0; C < 16; ) {
          if (b.props[C] !== this.props[C])
            return !1;
          C += 1;
        }
        return !0;
      }
      function u(b) {
        var C;
        for (C = 0; C < 16; C += 1)
          b.props[C] = this.props[C];
        return b;
      }
      function y(b) {
        var C;
        for (C = 0; C < 16; C += 1)
          this.props[C] = b[C];
      }
      function S(b, C, B) {
        return {
          x: b * this.props[0] + C * this.props[4] + B * this.props[8] + this.props[12],
          y: b * this.props[1] + C * this.props[5] + B * this.props[9] + this.props[13],
          z: b * this.props[2] + C * this.props[6] + B * this.props[10] + this.props[14]
        };
      }
      function T(b, C, B) {
        return b * this.props[0] + C * this.props[4] + B * this.props[8] + this.props[12];
      }
      function M(b, C, B) {
        return b * this.props[1] + C * this.props[5] + B * this.props[9] + this.props[13];
      }
      function I(b, C, B) {
        return b * this.props[2] + C * this.props[6] + B * this.props[10] + this.props[14];
      }
      function R() {
        var b = this.props[0] * this.props[5] - this.props[1] * this.props[4], C = this.props[5] / b, B = -this.props[1] / b, F = -this.props[4] / b, z = this.props[0] / b, q = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / b, j = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / b, $ = new Matrix();
        return $.props[0] = C, $.props[1] = B, $.props[4] = F, $.props[5] = z, $.props[12] = q, $.props[13] = j, $;
      }
      function H(b) {
        var C = this.getInverseMatrix();
        return C.applyToPointArray(b[0], b[1], b[2] || 0);
      }
      function D(b) {
        var C, B = b.length, F = [];
        for (C = 0; C < B; C += 1)
          F[C] = H(b[C]);
        return F;
      }
      function V(b, C, B) {
        var F = createTypedArray("float32", 6);
        if (this.isIdentity())
          F[0] = b[0], F[1] = b[1], F[2] = C[0], F[3] = C[1], F[4] = B[0], F[5] = B[1];
        else {
          var z = this.props[0], q = this.props[1], j = this.props[4], $ = this.props[5], W = this.props[12], Y = this.props[13];
          F[0] = b[0] * z + b[1] * j + W, F[1] = b[0] * q + b[1] * $ + Y, F[2] = C[0] * z + C[1] * j + W, F[3] = C[0] * q + C[1] * $ + Y, F[4] = B[0] * z + B[1] * j + W, F[5] = B[0] * q + B[1] * $ + Y;
        }
        return F;
      }
      function O(b, C, B) {
        var F;
        return this.isIdentity() ? F = [b, C, B] : F = [b * this.props[0] + C * this.props[4] + B * this.props[8] + this.props[12], b * this.props[1] + C * this.props[5] + B * this.props[9] + this.props[13], b * this.props[2] + C * this.props[6] + B * this.props[10] + this.props[14]], F;
      }
      function G(b, C) {
        if (this.isIdentity())
          return b + "," + C;
        var B = this.props;
        return Math.round((b * B[0] + C * B[4] + B[12]) * 100) / 100 + "," + Math.round((b * B[1] + C * B[5] + B[13]) * 100) / 100;
      }
      function L() {
        for (var b = 0, C = this.props, B = "matrix3d(", F = 1e4; b < 16; )
          B += i(C[b] * F) / F, B += b === 15 ? ")" : ",", b += 1;
        return B;
      }
      function P(b) {
        var C = 1e4;
        return b < 1e-6 && b > 0 || b > -1e-6 && b < 0 ? i(b * C) / C : b;
      }
      function _() {
        var b = this.props, C = P(b[0]), B = P(b[1]), F = P(b[4]), z = P(b[5]), q = P(b[12]), j = P(b[13]);
        return "matrix(" + C + "," + B + "," + F + "," + z + "," + q + "," + j + ")";
      }
      return function() {
        this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = l, this.rotateZ = o, this.skew = c, this.skewFromAxis = k, this.shear = p, this.scale = f, this.setTransform = x, this.translate = A, this.transform = m, this.multiply = E, this.applyToPoint = S, this.applyToX = T, this.applyToY = M, this.applyToZ = I, this.applyToPointArray = O, this.applyToTriplePoints = V, this.applyToPointStringified = G, this.toCSS = L, this.to2dCSS = _, this.clone = u, this.cloneFromProps = y, this.equals = g, this.inversePoints = D, this.inversePoint = H, this.getInverseMatrix = R, this._t = this.transform, this.isIdentity = d, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
        return typeof r;
      } : _typeof$3 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$3(e);
    }
    var lottie = {};
    function setLocation(e) {
      setLocationHref(e);
    }
    function searchAnimations() {
      animationManager.searchAnimations();
    }
    function setSubframeRendering(e) {
      setSubframeEnabled(e);
    }
    function setPrefix(e) {
      setIdPrefix(e);
    }
    function loadAnimation(e) {
      return animationManager.loadAnimation(e);
    }
    function setQuality(e) {
      if (typeof e == "string")
        switch (e) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10);
            break;
        }
      else
        !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
    }
    function inBrowser() {
      return typeof navigator < "u";
    }
    function installPlugin(e, t) {
      e === "expressions" && setExpressionsPlugin(t);
    }
    function getFactory(e) {
      switch (e) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(e) {
      for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
        var i = t[r].split("=");
        if (decodeURIComponent(i[0]) == e)
          return decodeURIComponent(i[1]);
      }
      return null;
    }
    var queryString = "";
    {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
        src: ""
      };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      _typeof$3(exports) !== "object" && (window.bodymovin = lottie);
    } catch (e) {
    }
    var ShapeModifiers = function() {
      var e = {}, t = {};
      e.registerModifier = r, e.getModifier = i;
      function r(s, n) {
        t[s] || (t[s] = n);
      }
      function i(s, n, a) {
        return new t[s](n, a);
      }
      return e;
    }();
    function ShapeModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(e) {
      if (!this.closed) {
        e.sh.container.addDynamicProperty(e.sh);
        var t = {
          shape: e.sh,
          data: e,
          localShapeCollection: shapeCollectionPool.newShapeCollection()
        };
        this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(e, t) {
      this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier);
    function TrimModifier() {
    }
    extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
      this.s = PropertyFactory.getProp(e, t.s, 0, 0.01, this), this.e = PropertyFactory.getProp(e, t.e, 0, 0.01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(e) {
      e.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, i, s) {
      var n = [];
      t <= 1 ? n.push({
        s: e,
        e: t
      }) : e >= 1 ? n.push({
        s: e - 1,
        e: t - 1
      }) : (n.push({
        s: e,
        e: 1
      }), n.push({
        s: 0,
        e: t - 1
      }));
      var a = [], l, o = n.length, p;
      for (l = 0; l < o; l += 1)
        if (p = n[l], !(p.e * s < i || p.s * s > i + r)) {
          var c, k;
          p.s * s <= i ? c = 0 : c = (p.s * s - i) / r, p.e * s >= i + r ? k = 1 : k = (p.e * s - i) / r, a.push([c, k]);
        }
      return a.length || a.push([0, 0]), a;
    }, TrimModifier.prototype.releasePathsData = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1)
        segmentsLengthPool.release(e[t]);
      return e.length = 0, e;
    }, TrimModifier.prototype.processShapes = function(e) {
      var t, r;
      if (this._mdf || e) {
        var i = this.o.v % 360 / 360;
        if (i < 0 && (i += 1), this.s.v > 1 ? t = 1 + i : this.s.v < 0 ? t = 0 + i : t = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, t > r) {
          var s = t;
          t = r, r = s;
        }
        t = Math.round(t * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = t, this.eValue = r;
      } else
        t = this.sValue, r = this.eValue;
      var n, a, l = this.shapes.length, o, p, c, k, f, x = 0;
      if (r === t)
        for (a = 0; a < l; a += 1)
          this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (r === 1 && t === 0 || r === 0 && t === 1) {
        if (this._mdf)
          for (a = 0; a < l; a += 1)
            this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0;
      } else {
        var A = [], m, E;
        for (a = 0; a < l; a += 1)
          if (m = this.shapes[a], !m.shape._mdf && !this._mdf && !e && this.m !== 2)
            m.shape.paths = m.localShapeCollection;
          else {
            if (n = m.shape.paths, p = n._length, f = 0, !m.shape._mdf && m.pathsData.length)
              f = m.totalShapeLength;
            else {
              for (c = this.releasePathsData(m.pathsData), o = 0; o < p; o += 1)
                k = bez.getSegmentsLength(n.shapes[o]), c.push(k), f += k.totalLength;
              m.totalShapeLength = f, m.pathsData = c;
            }
            x += f, m.shape._mdf = !0;
          }
        var d = t, g = r, u = 0, y;
        for (a = l - 1; a >= 0; a -= 1)
          if (m = this.shapes[a], m.shape._mdf) {
            for (E = m.localShapeCollection, E.releaseShapes(), this.m === 2 && l > 1 ? (y = this.calculateShapeEdges(t, r, m.totalShapeLength, u, x), u += m.totalShapeLength) : y = [[d, g]], p = y.length, o = 0; o < p; o += 1) {
              d = y[o][0], g = y[o][1], A.length = 0, g <= 1 ? A.push({
                s: m.totalShapeLength * d,
                e: m.totalShapeLength * g
              }) : d >= 1 ? A.push({
                s: m.totalShapeLength * (d - 1),
                e: m.totalShapeLength * (g - 1)
              }) : (A.push({
                s: m.totalShapeLength * d,
                e: m.totalShapeLength
              }), A.push({
                s: 0,
                e: m.totalShapeLength * (g - 1)
              }));
              var S = this.addShapes(m, A[0]);
              if (A[0].s !== A[0].e) {
                if (A.length > 1) {
                  var T = m.shape.paths.shapes[m.shape.paths._length - 1];
                  if (T.c) {
                    var M = S.pop();
                    this.addPaths(S, E), S = this.addShapes(m, A[1], M);
                  } else
                    this.addPaths(S, E), S = this.addShapes(m, A[1]);
                }
                this.addPaths(S, E);
              }
            }
            m.shape.paths = E;
          }
      }
    }, TrimModifier.prototype.addPaths = function(e, t) {
      var r, i = e.length;
      for (r = 0; r < i; r += 1)
        t.addShape(e[r]);
    }, TrimModifier.prototype.addSegment = function(e, t, r, i, s, n, a) {
      s.setXYAt(t[0], t[1], "o", n), s.setXYAt(r[0], r[1], "i", n + 1), a && s.setXYAt(e[0], e[1], "v", n), s.setXYAt(i[0], i[1], "v", n + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, i) {
      t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), i && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1);
    }, TrimModifier.prototype.addShapes = function(e, t, r) {
      var i = e.pathsData, s = e.shape.paths.shapes, n, a = e.shape.paths._length, l, o, p = 0, c, k, f, x, A = [], m, E = !0;
      for (r ? (k = r._length, m = r._length) : (r = shapePool.newElement(), k = 0, m = 0), A.push(r), n = 0; n < a; n += 1) {
        for (f = i[n].lengths, r.c = s[n].c, o = s[n].c ? f.length : f.length + 1, l = 1; l < o; l += 1)
          if (c = f[l - 1], p + c.addedLength < t.s)
            p += c.addedLength, r.c = !1;
          else if (p > t.e) {
            r.c = !1;
            break;
          } else
            t.s <= p && t.e >= p + c.addedLength ? (this.addSegment(s[n].v[l - 1], s[n].o[l - 1], s[n].i[l], s[n].v[l], r, k, E), E = !1) : (x = bez.getNewSegment(s[n].v[l - 1], s[n].v[l], s[n].o[l - 1], s[n].i[l], (t.s - p) / c.addedLength, (t.e - p) / c.addedLength, f[l - 1]), this.addSegmentFromArray(x, r, k, E), E = !1, r.c = !1), p += c.addedLength, k += 1;
        if (s[n].c && f.length) {
          if (c = f[l - 1], p <= t.e) {
            var d = f[l - 1].addedLength;
            t.s <= p && t.e >= p + d ? (this.addSegment(s[n].v[l - 1], s[n].o[l - 1], s[n].i[0], s[n].v[0], r, k, E), E = !1) : (x = bez.getNewSegment(s[n].v[l - 1], s[n].v[0], s[n].o[l - 1], s[n].i[0], (t.s - p) / d, (t.e - p) / d, f[l - 1]), this.addSegmentFromArray(x, r, k, E), E = !1, r.c = !1);
          } else
            r.c = !1;
          p += c.addedLength, k += 1;
        }
        if (r._length && (r.setXYAt(r.v[m][0], r.v[m][1], "i", m), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > t.e)
          break;
        n < a - 1 && (r = shapePool.newElement(), E = !0, A.push(r), k = 0);
      }
      return A;
    };
    function PuckerAndBloatModifier() {
    }
    extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
      var r = t / 100, i = [0, 0], s = e._length, n = 0;
      for (n = 0; n < s; n += 1)
        i[0] += e.v[n][0], i[1] += e.v[n][1];
      i[0] /= s, i[1] /= s;
      var a = shapePool.newElement();
      a.c = e.c;
      var l, o, p, c, k, f;
      for (n = 0; n < s; n += 1)
        l = e.v[n][0] + (i[0] - e.v[n][0]) * r, o = e.v[n][1] + (i[1] - e.v[n][1]) * r, p = e.o[n][0] + (i[0] - e.o[n][0]) * -r, c = e.o[n][1] + (i[1] - e.o[n][1]) * -r, k = e.i[n][0] + (i[0] - e.i[n][0]) * -r, f = e.i[n][1] + (i[1] - e.i[n][1]) * -r, a.setTripleAt(l, o, p, c, k, f, n);
      return a;
    }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
      var t, r, i = this.shapes.length, s, n, a = this.amount.v;
      if (a !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e))
            for (o.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1)
              o.addShape(this.processPath(t[s], a));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var TransformPropertyFactory = function() {
      var e = [0, 0];
      function t(o) {
        var p = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || p, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function r(o) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
            var p;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var c, k;
              if (p = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (c = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / p, 0), k = this.p.getValueAtTime(this.p.keyframes[0].t / p, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (c = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / p, 0), k = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / p, 0)) : (c = this.p.pv, k = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / p, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                c = [], k = [];
                var f = this.px, x = this.py;
                f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t ? (c[0] = f.getValueAtTime((f.keyframes[0].t + 0.01) / p, 0), c[1] = x.getValueAtTime((x.keyframes[0].t + 0.01) / p, 0), k[0] = f.getValueAtTime(f.keyframes[0].t / p, 0), k[1] = x.getValueAtTime(x.keyframes[0].t / p, 0)) : f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t ? (c[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / p, 0), c[1] = x.getValueAtTime(x.keyframes[x.keyframes.length - 1].t / p, 0), k[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - 0.01) / p, 0), k[1] = x.getValueAtTime((x.keyframes[x.keyframes.length - 1].t - 0.01) / p, 0)) : (c = [f.pv, x.pv], k[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - 0.01) / p, f.offsetTime), k[1] = x.getValueAtTime((x._caching.lastFrame + x.offsetTime - 0.01) / p, x.offsetTime));
              } else
                k = e, c = k;
              this.v.rotate(-Math.atan2(c[1] - k[1], c[0] - k[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function i() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length)
          this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else
          return;
        if (!this.s.effectsSequence.length)
          this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else
          return;
        if (this.sk)
          if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length)
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          else
            return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
      }
      function s() {
      }
      function n(o) {
        this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0;
      }
      function a(o, p, c) {
        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = p, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(c || o), p.p && p.p.s ? (this.px = PropertyFactory.getProp(o, p.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, p.p.y, 0, 0, this), p.p.z && (this.pz = PropertyFactory.getProp(o, p.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, p.p || {
          k: [0, 0, 0]
        }, 1, 0, this), p.rx) {
          if (this.rx = PropertyFactory.getProp(o, p.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, p.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, p.rz, 0, degToRads, this), p.or.k[0].ti) {
            var k, f = p.or.k.length;
            for (k = 0; k < f; k += 1)
              p.or.k[k].to = null, p.or.k[k].ti = null;
          }
          this.or = PropertyFactory.getProp(o, p.or, 1, degToRads, this), this.or.sh = !0;
        } else
          this.r = PropertyFactory.getProp(o, p.r || {
            k: 0
          }, 0, degToRads, this);
        p.sk && (this.sk = PropertyFactory.getProp(o, p.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, p.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, p.a || {
          k: [0, 0, 0]
        }, 1, 0, this), this.s = PropertyFactory.getProp(o, p.s || {
          k: [100, 100, 100]
        }, 1, 0.01, this), p.o ? this.o = PropertyFactory.getProp(o, p.o, 0, 0.01, o) : this.o = {
          _mdf: !1,
          v: 1
        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      a.prototype = {
        applyToMatrix: t,
        getValue: r,
        precalculateMatrix: i,
        autoOrient: s
      }, extendPrototype([DynamicPropertyContainer], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
      function l(o, p, c) {
        return new a(o, p, c);
      }
      return {
        getTransformProperty: l
      };
    }();
    function RepeaterModifier() {
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, 0.01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, i, s, n) {
      var a = n ? -1 : 1, l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
      e.translate(i.p.v[0] * a * s, i.p.v[1] * a * s, i.p.v[2]), t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), t.rotate(-i.r.v * a * s), t.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(n ? 1 / l : l, n ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
    }, RepeaterModifier.prototype.init = function(e, t, r, i) {
      for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0; )
        r -= 1, this._elements.unshift(t[r]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, RepeaterModifier.prototype.resetElements = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1)
        e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it);
    }, RepeaterModifier.prototype.cloneElements = function(e) {
      var t = JSON.parse(JSON.stringify(e));
      return this.resetElements(t), t;
    }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
      var r, i = e.length;
      for (r = 0; r < i; r += 1)
        e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t);
    }, RepeaterModifier.prototype.processShapes = function(e) {
      var t, r, i, s, n, a = !1;
      if (this._mdf || e) {
        var l = Math.ceil(this.c.v);
        if (this._groups.length < l) {
          for (; this._groups.length < l; ) {
            var o = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            o.it.push({
              a: {
                a: 0,
                ix: 1,
                k: [0, 0]
              },
              nm: "Transform",
              o: {
                a: 0,
                ix: 7,
                k: 100
              },
              p: {
                a: 0,
                ix: 2,
                k: [0, 0]
              },
              r: {
                a: 1,
                ix: 6,
                k: [{
                  s: 0,
                  e: 0,
                  t: 0
                }, {
                  s: 0,
                  e: 0,
                  t: 1
                }]
              },
              s: {
                a: 0,
                ix: 3,
                k: [100, 100]
              },
              sa: {
                a: 0,
                ix: 5,
                k: 0
              },
              sk: {
                a: 0,
                ix: 4,
                k: 0
              },
              ty: "tr"
            }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), a = !0;
        }
        n = 0;
        var p;
        for (i = 0; i <= this._groups.length - 1; i += 1) {
          if (p = n < l, this._groups[i]._render = p, this.changeGroupRender(this._groups[i].it, p), !p) {
            var c = this.elemsData[i].it, k = c[c.length - 1];
            k.transform.op.v !== 0 ? (k.transform.op._mdf = !0, k.transform.op.v = 0) : k.transform.op._mdf = !1;
          }
          n += 1;
        }
        this._currentCopies = l;
        var f = this.o.v, x = f % 1, A = f > 0 ? Math.floor(f) : Math.ceil(f), m = this.pMatrix.props, E = this.rMatrix.props, d = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var g = 0;
        if (f > 0) {
          for (; g < A; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), g += 1;
          x && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, x, !1), g += x);
        } else if (f < 0) {
          for (; g > A; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), g -= 1;
          x && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -x, !0), g -= x);
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, n = this._currentCopies;
        for (var u, y; n; ) {
          if (t = this.elemsData[i].it, r = t[t.length - 1].transform.mProps.v.props, y = r.length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), g !== 0) {
            for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12], E[13], E[14], E[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), u = 0; u < y; u += 1)
              r[u] = this.matrix.props[u];
            this.matrix.reset();
          } else
            for (this.matrix.reset(), u = 0; u < y; u += 1)
              r[u] = this.matrix.props[u];
          g += 1, n -= 1, i += s;
        }
      } else
        for (n = this._currentCopies, i = 0, s = 1; n; )
          t = this.elemsData[i].it, r = t[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, n -= 1, i += s;
      return a;
    }, RepeaterModifier.prototype.addShape = function() {
    };
    function RoundCornersModifier() {
    }
    extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(e, t) {
      var r = shapePool.newElement();
      r.c = e.c;
      var i, s = e._length, n, a, l, o, p, c, k = 0, f, x, A, m, E, d;
      for (i = 0; i < s; i += 1)
        n = e.v[i], l = e.o[i], a = e.i[i], n[0] === l[0] && n[1] === l[1] && n[0] === a[0] && n[1] === a[1] ? (i === 0 || i === s - 1) && !e.c ? (r.setTripleAt(n[0], n[1], l[0], l[1], a[0], a[1], k), k += 1) : (i === 0 ? o = e.v[s - 1] : o = e.v[i - 1], p = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), c = p ? Math.min(p / 2, t) / p : 0, E = n[0] + (o[0] - n[0]) * c, f = E, d = n[1] - (n[1] - o[1]) * c, x = d, A = f - (f - n[0]) * roundCorner, m = x - (x - n[1]) * roundCorner, r.setTripleAt(f, x, A, m, E, d, k), k += 1, i === s - 1 ? o = e.v[0] : o = e.v[i + 1], p = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), c = p ? Math.min(p / 2, t) / p : 0, A = n[0] + (o[0] - n[0]) * c, f = A, m = n[1] + (o[1] - n[1]) * c, x = m, E = f - (f - n[0]) * roundCorner, d = x - (x - n[1]) * roundCorner, r.setTripleAt(f, x, A, m, E, d, k), k += 1) : (r.setTripleAt(e.v[i][0], e.v[i][1], e.o[i][0], e.o[i][1], e.i[i][0], e.i[i][1], k), k += 1);
      return r;
    }, RoundCornersModifier.prototype.processShapes = function(e) {
      var t, r, i = this.shapes.length, s, n, a = this.rd.v;
      if (a !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e))
            for (o.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1)
              o.addShape(this.processPath(t[s], a));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function floatEqual(e, t) {
      return Math.abs(e - t) * 1e5 <= Math.min(Math.abs(e), Math.abs(t));
    }
    function floatZero(e) {
      return Math.abs(e) <= 1e-5;
    }
    function lerp(e, t, r) {
      return e * (1 - r) + t * r;
    }
    function lerpPoint(e, t, r) {
      return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)];
    }
    function quadRoots(e, t, r) {
      if (e === 0)
        return [];
      var i = t * t - 4 * e * r;
      if (i < 0)
        return [];
      var s = -t / (2 * e);
      if (i === 0)
        return [s];
      var n = Math.sqrt(i) / (2 * e);
      return [s - n, s + n];
    }
    function polynomialCoefficients(e, t, r, i) {
      return [-e + 3 * t - 3 * r + i, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e];
    }
    function singlePoint(e) {
      return new PolynomialBezier(e, e, e, e, !1);
    }
    function PolynomialBezier(e, t, r, i, s) {
      s && pointEqual(e, t) && (t = lerpPoint(e, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(e, i, 2 / 3));
      var n = polynomialCoefficients(e[0], t[0], r[0], i[0]), a = polynomialCoefficients(e[1], t[1], r[1], i[1]);
      this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [e, t, r, i];
    }
    PolynomialBezier.prototype.point = function(e) {
      return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(e) {
      return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(e) {
      var t = this.derivative(e);
      return Math.atan2(t[1], t[0]);
    }, PolynomialBezier.prototype.normalAngle = function(e) {
      var t = this.derivative(e);
      return Math.atan2(t[0], t[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(e))
        return [];
      var t = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e, r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
      if (r < 0)
        return [];
      var i = Math.sqrt(r);
      return floatZero(i) ? i > 0 && i < 1 ? [t] : [] : [t - i, t + i].filter(function(s) {
        return s > 0 && s < 1;
      });
    }, PolynomialBezier.prototype.split = function(e) {
      if (e <= 0)
        return [singlePoint(this.points[0]), this];
      if (e >= 1)
        return [this, singlePoint(this.points[this.points.length - 1])];
      var t = lerpPoint(this.points[0], this.points[1], e), r = lerpPoint(this.points[1], this.points[2], e), i = lerpPoint(this.points[2], this.points[3], e), s = lerpPoint(t, r, e), n = lerpPoint(r, i, e), a = lerpPoint(s, n, e);
      return [new PolynomialBezier(this.points[0], t, s, a, !0), new PolynomialBezier(a, n, i, this.points[3], !0)];
    };
    function extrema(e, t) {
      var r = e.points[0][t], i = e.points[e.points.length - 1][t];
      if (r > i) {
        var s = i;
        i = r, r = s;
      }
      for (var n = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), a = 0; a < n.length; a += 1)
        if (n[a] > 0 && n[a] < 1) {
          var l = e.point(n[a])[t];
          l < r ? r = l : l > i && (i = l);
        }
      return {
        min: r,
        max: i
      };
    }
    PolynomialBezier.prototype.bounds = function() {
      return {
        x: extrema(this, 0),
        y: extrema(this, 1)
      };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var e = this.bounds();
      return {
        left: e.x.min,
        right: e.x.max,
        top: e.y.min,
        bottom: e.y.max,
        width: e.x.max - e.x.min,
        height: e.y.max - e.y.min,
        cx: (e.x.max + e.x.min) / 2,
        cy: (e.y.max + e.y.min) / 2
      };
    };
    function intersectData(e, t, r) {
      var i = e.boundingBox();
      return {
        cx: i.cx,
        cy: i.cy,
        width: i.width,
        height: i.height,
        bez: e,
        t: (t + r) / 2,
        t1: t,
        t2: r
      };
    }
    function splitData(e) {
      var t = e.bez.split(0.5);
      return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)];
    }
    function boxIntersect(e, t) {
      return Math.abs(e.cx - t.cx) * 2 < e.width + t.width && Math.abs(e.cy - t.cy) * 2 < e.height + t.height;
    }
    function intersectsImpl(e, t, r, i, s, n) {
      if (boxIntersect(e, t)) {
        if (r >= n || e.width <= i && e.height <= i && t.width <= i && t.height <= i) {
          s.push([e.t, t.t]);
          return;
        }
        var a = splitData(e), l = splitData(t);
        intersectsImpl(a[0], l[0], r + 1, i, s, n), intersectsImpl(a[0], l[1], r + 1, i, s, n), intersectsImpl(a[1], l[0], r + 1, i, s, n), intersectsImpl(a[1], l[1], r + 1, i, s, n);
      }
    }
    PolynomialBezier.prototype.intersections = function(e, t, r) {
      t === void 0 && (t = 2), r === void 0 && (r = 7);
      var i = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, i, r), i;
    }, PolynomialBezier.shapeSegment = function(e, t) {
      var r = (t + 1) % e.length();
      return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0);
    }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
      var r = (t + 1) % e.length();
      return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0);
    };
    function crossProduct(e, t) {
      return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
    }
    function lineIntersection(e, t, r, i) {
      var s = [e[0], e[1], 1], n = [t[0], t[1], 1], a = [r[0], r[1], 1], l = [i[0], i[1], 1], o = crossProduct(crossProduct(s, n), crossProduct(a, l));
      return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]];
    }
    function polarOffset(e, t, r) {
      return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r];
    }
    function pointDistance(e, t) {
      return Math.hypot(e[0] - t[0], e[1] - t[1]);
    }
    function pointEqual(e, t) {
      return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1]);
    }
    function ZigZagModifier() {
    }
    extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function setPoint(e, t, r, i, s, n, a) {
      var l = r - Math.PI / 2, o = r + Math.PI / 2, p = t[0] + Math.cos(r) * i * s, c = t[1] - Math.sin(r) * i * s;
      e.setTripleAt(p, c, p + Math.cos(l) * n, c - Math.sin(l) * n, p + Math.cos(o) * a, c - Math.sin(o) * a, e.length());
    }
    function getPerpendicularVector(e, t) {
      var r = [t[0] - e[0], t[1] - e[1]], i = -Math.PI * 0.5, s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
      return s;
    }
    function getProjectingAngle(e, t) {
      var r = t === 0 ? e.length() - 1 : t - 1, i = (t + 1) % e.length(), s = e.v[r], n = e.v[i], a = getPerpendicularVector(s, n);
      return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
    }
    function zigZagCorner(e, t, r, i, s, n, a) {
      var l = getProjectingAngle(t, r), o = t.v[r % t._length], p = t.v[r === 0 ? t._length - 1 : r - 1], c = t.v[(r + 1) % t._length], k = n === 2 ? Math.sqrt(Math.pow(o[0] - p[0], 2) + Math.pow(o[1] - p[1], 2)) : 0, f = n === 2 ? Math.sqrt(Math.pow(o[0] - c[0], 2) + Math.pow(o[1] - c[1], 2)) : 0;
      setPoint(e, t.v[r % t._length], l, a, i, f / ((s + 1) * 2), k / ((s + 1) * 2));
    }
    function zigZagSegment(e, t, r, i, s, n) {
      for (var a = 0; a < i; a += 1) {
        var l = (a + 1) / (i + 1), o = s === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0, p = t.normalAngle(l), c = t.point(l);
        setPoint(e, c, p, n, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), n = -n;
      }
      return n;
    }
    ZigZagModifier.prototype.processPath = function(e, t, r, i) {
      var s = e._length, n = shapePool.newElement();
      if (n.c = e.c, e.c || (s -= 1), s === 0)
        return n;
      var a = -1, l = PolynomialBezier.shapeSegment(e, 0);
      zigZagCorner(n, e, 0, t, r, i, a);
      for (var o = 0; o < s; o += 1)
        a = zigZagSegment(n, l, t, r, i, -a), o === s - 1 && !e.c ? l = null : l = PolynomialBezier.shapeSegment(e, (o + 1) % s), zigZagCorner(n, e, o + 1, t, r, i, a);
      return n;
    }, ZigZagModifier.prototype.processShapes = function(e) {
      var t, r, i = this.shapes.length, s, n, a = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
      if (a !== 0) {
        var p, c;
        for (r = 0; r < i; r += 1) {
          if (p = this.shapes[r], c = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !e))
            for (c.releaseShapes(), p.shape._mdf = !0, t = p.shape.paths.shapes, n = p.shape.paths._length, s = 0; s < n; s += 1)
              c.addShape(this.processPath(t[s], a, l, o));
          p.shape.paths = p.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function linearOffset(e, t, r) {
      var i = Math.atan2(t[0] - e[0], t[1] - e[1]);
      return [polarOffset(e, i, r), polarOffset(t, i, r)];
    }
    function offsetSegment(e, t) {
      var r, i, s, n, a, l, o;
      o = linearOffset(e.points[0], e.points[1], t), r = o[0], i = o[1], o = linearOffset(e.points[1], e.points[2], t), s = o[0], n = o[1], o = linearOffset(e.points[2], e.points[3], t), a = o[0], l = o[1];
      var p = lineIntersection(r, i, s, n);
      p === null && (p = i);
      var c = lineIntersection(a, l, s, n);
      return c === null && (c = a), new PolynomialBezier(r, p, c, l);
    }
    function joinLines(e, t, r, i, s) {
      var n = t.points[3], a = r.points[0];
      if (i === 3 || pointEqual(n, a))
        return n;
      if (i === 2) {
        var l = -t.tangentAngle(1), o = -r.tangentAngle(0) + Math.PI, p = lineIntersection(n, polarOffset(n, l + Math.PI / 2, 100), a, polarOffset(a, l + Math.PI / 2, 100)), c = p ? pointDistance(p, n) : pointDistance(n, a) / 2, k = polarOffset(n, l, 2 * c * roundCorner);
        return e.setXYAt(k[0], k[1], "o", e.length() - 1), k = polarOffset(a, o, 2 * c * roundCorner), e.setTripleAt(a[0], a[1], a[0], a[1], k[0], k[1], e.length()), a;
      }
      var f = pointEqual(n, t.points[2]) ? t.points[0] : t.points[2], x = pointEqual(a, r.points[1]) ? r.points[3] : r.points[1], A = lineIntersection(f, n, a, x);
      return A && pointDistance(A, n) < s ? (e.setTripleAt(A[0], A[1], A[0], A[1], A[0], A[1], e.length()), A) : n;
    }
    function getIntersection(e, t) {
      var r = e.intersections(t);
      return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
    }
    function pruneSegmentIntersection(e, t) {
      var r = e.slice(), i = t.slice(), s = getIntersection(e[e.length - 1], t[0]);
      return s && (r[e.length - 1] = e[e.length - 1].split(s[0])[0], i[0] = t[0].split(s[1])[1]), e.length > 1 && t.length > 1 && (s = getIntersection(e[0], t[t.length - 1]), s) ? [[e[0].split(s[0])[0]], [t[t.length - 1].split(s[1])[1]]] : [r, i];
    }
    function pruneIntersections(e) {
      for (var t, r = 1; r < e.length; r += 1)
        t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
      return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e;
    }
    function offsetSegmentSplit(e, t) {
      var r = e.inflectionPoints(), i, s, n, a;
      if (r.length === 0)
        return [offsetSegment(e, t)];
      if (r.length === 1 || floatEqual(r[1], 1))
        return n = e.split(r[0]), i = n[0], s = n[1], [offsetSegment(i, t), offsetSegment(s, t)];
      n = e.split(r[0]), i = n[0];
      var l = (r[1] - r[0]) / (1 - r[0]);
      return n = n[1].split(l), a = n[0], s = n[1], [offsetSegment(i, t), offsetSegment(a, t), offsetSegment(s, t)];
    }
    function OffsetPathModifier() {
    }
    extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, OffsetPathModifier.prototype.processPath = function(e, t, r, i) {
      var s = shapePool.newElement();
      s.c = e.c;
      var n = e.length();
      e.c || (n -= 1);
      var a, l, o, p = [];
      for (a = 0; a < n; a += 1)
        o = PolynomialBezier.shapeSegment(e, a), p.push(offsetSegmentSplit(o, t));
      if (!e.c)
        for (a = n - 1; a >= 0; a -= 1)
          o = PolynomialBezier.shapeSegmentInverted(e, a), p.push(offsetSegmentSplit(o, t));
      p = pruneIntersections(p);
      var c = null, k = null;
      for (a = 0; a < p.length; a += 1) {
        var f = p[a];
        for (k && (c = joinLines(s, k, f[0], r, i)), k = f[f.length - 1], l = 0; l < f.length; l += 1)
          o = f[l], c && pointEqual(o.points[0], c) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), c = o.points[3];
      }
      return p.length && joinLines(s, k, p[0][0], r, i), s;
    }, OffsetPathModifier.prototype.processShapes = function(e) {
      var t, r, i = this.shapes.length, s, n, a = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
      if (a !== 0) {
        var p, c;
        for (r = 0; r < i; r += 1) {
          if (p = this.shapes[r], c = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !e))
            for (c.releaseShapes(), p.shape._mdf = !0, t = p.shape.paths.shapes, n = p.shape.paths._length, s = 0; s < n; s += 1)
              c.addShape(this.processPath(t[s], a, o, l));
          p.shape.paths = p.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function getFontProperties(e) {
      for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", i = "normal", s = t.length, n, a = 0; a < s; a += 1)
        switch (n = t[a].toLowerCase(), n) {
          case "italic":
            i = "italic";
            break;
          case "bold":
            r = "700";
            break;
          case "black":
            r = "900";
            break;
          case "medium":
            r = "500";
            break;
          case "regular":
          case "normal":
            r = "400";
            break;
          case "light":
          case "thin":
            r = "200";
            break;
        }
      return {
        style: i,
        weight: e.fWeight || r
      };
    }
    var FontManager = function() {
      var e = 5e3, t = {
        w: 0,
        size: 0,
        shapes: [],
        data: {
          shapes: []
        }
      }, r = [];
      r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var i = 127988, s = 917631, n = 917601, a = 917626, l = 65039, o = 8205, p = 127462, c = 127487, k = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function f(P) {
        var _ = P.split(","), b, C = _.length, B = [];
        for (b = 0; b < C; b += 1)
          _[b] !== "sans-serif" && _[b] !== "monospace" && B.push(_[b]);
        return B.join(",");
      }
      function x(P, _) {
        var b = createTag("span");
        b.setAttribute("aria-hidden", !0), b.style.fontFamily = _;
        var C = createTag("span");
        C.innerText = "giItT1WQy@!-/#", b.style.position = "absolute", b.style.left = "-10000px", b.style.top = "-10000px", b.style.fontSize = "300px", b.style.fontVariant = "normal", b.style.fontStyle = "normal", b.style.fontWeight = "normal", b.style.letterSpacing = "0", b.appendChild(C), document.body.appendChild(b);
        var B = C.offsetWidth;
        return C.style.fontFamily = f(P) + ", " + _, {
          node: C,
          w: B,
          parent: b
        };
      }
      function A() {
        var P, _ = this.fonts.length, b, C, B = _;
        for (P = 0; P < _; P += 1)
          this.fonts[P].loaded ? B -= 1 : this.fonts[P].fOrigin === "n" || this.fonts[P].origin === 0 ? this.fonts[P].loaded = !0 : (b = this.fonts[P].monoCase.node, C = this.fonts[P].monoCase.w, b.offsetWidth !== C ? (B -= 1, this.fonts[P].loaded = !0) : (b = this.fonts[P].sansCase.node, C = this.fonts[P].sansCase.w, b.offsetWidth !== C && (B -= 1, this.fonts[P].loaded = !0)), this.fonts[P].loaded && (this.fonts[P].sansCase.parent.parentNode.removeChild(this.fonts[P].sansCase.parent), this.fonts[P].monoCase.parent.parentNode.removeChild(this.fonts[P].monoCase.parent)));
        B !== 0 && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function m(P, _) {
        var b = document.body && _ ? "svg" : "canvas", C, B = getFontProperties(P);
        if (b === "svg") {
          var F = createNS("text");
          F.style.fontSize = "100px", F.setAttribute("font-family", P.fFamily), F.setAttribute("font-style", B.style), F.setAttribute("font-weight", B.weight), F.textContent = "1", P.fClass ? (F.style.fontFamily = "inherit", F.setAttribute("class", P.fClass)) : F.style.fontFamily = P.fFamily, _.appendChild(F), C = F;
        } else {
          var z = new OffscreenCanvas(500, 500).getContext("2d");
          z.font = B.style + " " + B.weight + " 100px " + P.fFamily, C = z;
        }
        function q(j) {
          return b === "svg" ? (C.textContent = j, C.getComputedTextLength()) : C.measureText(j).width;
        }
        return {
          measureText: q
        };
      }
      function E(P, _) {
        if (!P) {
          this.isLoaded = !0;
          return;
        }
        if (this.chars) {
          this.isLoaded = !0, this.fonts = P.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = !0, P.list.forEach(function(Z) {
            Z.helper = m(Z), Z.cache = {};
          }), this.fonts = P.list;
          return;
        }
        var b = P.list, C, B = b.length, F = B;
        for (C = 0; C < B; C += 1) {
          var z = !0, q, j;
          if (b[C].loaded = !1, b[C].monoCase = x(b[C].fFamily, "monospace"), b[C].sansCase = x(b[C].fFamily, "sans-serif"), !b[C].fPath)
            b[C].loaded = !0, F -= 1;
          else if (b[C].fOrigin === "p" || b[C].origin === 3) {
            if (q = document.querySelectorAll('style[f-forigin="p"][f-family="' + b[C].fFamily + '"], style[f-origin="3"][f-family="' + b[C].fFamily + '"]'), q.length > 0 && (z = !1), z) {
              var $ = createTag("style");
              $.setAttribute("f-forigin", b[C].fOrigin), $.setAttribute("f-origin", b[C].origin), $.setAttribute("f-family", b[C].fFamily), $.type = "text/css", $.innerText = "@font-face {font-family: " + b[C].fFamily + "; font-style: normal; src: url('" + b[C].fPath + "');}", _.appendChild($);
            }
          } else if (b[C].fOrigin === "g" || b[C].origin === 1) {
            for (q = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), j = 0; j < q.length; j += 1)
              q[j].href.indexOf(b[C].fPath) !== -1 && (z = !1);
            if (z) {
              var W = createTag("link");
              W.setAttribute("f-forigin", b[C].fOrigin), W.setAttribute("f-origin", b[C].origin), W.type = "text/css", W.rel = "stylesheet", W.href = b[C].fPath, document.body.appendChild(W);
            }
          } else if (b[C].fOrigin === "t" || b[C].origin === 2) {
            for (q = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), j = 0; j < q.length; j += 1)
              b[C].fPath === q[j].src && (z = !1);
            if (z) {
              var Y = createTag("link");
              Y.setAttribute("f-forigin", b[C].fOrigin), Y.setAttribute("f-origin", b[C].origin), Y.setAttribute("rel", "stylesheet"), Y.setAttribute("href", b[C].fPath), _.appendChild(Y);
            }
          }
          b[C].helper = m(b[C], _), b[C].cache = {}, this.fonts.push(b[C]);
        }
        F === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function d(P) {
        if (P) {
          this.chars || (this.chars = []);
          var _, b = P.length, C, B = this.chars.length, F;
          for (_ = 0; _ < b; _ += 1) {
            for (C = 0, F = !1; C < B; )
              this.chars[C].style === P[_].style && this.chars[C].fFamily === P[_].fFamily && this.chars[C].ch === P[_].ch && (F = !0), C += 1;
            F || (this.chars.push(P[_]), B += 1);
          }
        }
      }
      function g(P, _, b) {
        for (var C = 0, B = this.chars.length; C < B; ) {
          if (this.chars[C].ch === P && this.chars[C].style === _ && this.chars[C].fFamily === b)
            return this.chars[C];
          C += 1;
        }
        return (typeof P == "string" && P.charCodeAt(0) !== 13 || !P) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", P, _, b)), t;
      }
      function u(P, _, b) {
        var C = this.getFontByName(_), B = P;
        if (!C.cache[B]) {
          var F = C.helper;
          if (P === " ") {
            var z = F.measureText("|" + P + "|"), q = F.measureText("||");
            C.cache[B] = (z - q) / 100;
          } else
            C.cache[B] = F.measureText(P) / 100;
        }
        return C.cache[B] * b;
      }
      function y(P) {
        for (var _ = 0, b = this.fonts.length; _ < b; ) {
          if (this.fonts[_].fName === P)
            return this.fonts[_];
          _ += 1;
        }
        return this.fonts[0];
      }
      function S(P) {
        var _ = 0, b = P.charCodeAt(0);
        if (b >= 55296 && b <= 56319) {
          var C = P.charCodeAt(1);
          C >= 56320 && C <= 57343 && (_ = (b - 55296) * 1024 + C - 56320 + 65536);
        }
        return _;
      }
      function T(P, _) {
        var b = P.toString(16) + _.toString(16);
        return k.indexOf(b) !== -1;
      }
      function M(P) {
        return P === o;
      }
      function I(P) {
        return P === l;
      }
      function R(P) {
        var _ = S(P);
        return _ >= p && _ <= c;
      }
      function H(P) {
        return R(P.substr(0, 2)) && R(P.substr(2, 2));
      }
      function D(P) {
        return r.indexOf(P) !== -1;
      }
      function V(P, _) {
        var b = S(P.substr(_, 2));
        if (b !== i)
          return !1;
        var C = 0;
        for (_ += 2; C < 5; ) {
          if (b = S(P.substr(_, 2)), b < n || b > a)
            return !1;
          C += 1, _ += 2;
        }
        return S(P.substr(_, 2)) === s;
      }
      function O() {
        this.isLoaded = !0;
      }
      var G = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      G.isModifier = T, G.isZeroWidthJoiner = M, G.isFlagEmoji = H, G.isRegionalCode = R, G.isCombinedCharacter = D, G.isRegionalFlag = V, G.isVariationSelector = I, G.BLACK_FLAG_CODE_POINT = i;
      var L = {
        addChars: d,
        addFonts: E,
        getCharData: g,
        getFontByName: y,
        measureText: u,
        checkLoadedFonts: A,
        setIsLoaded: O
      };
      return G.prototype = L, G;
    }();
    function SlotManager(e) {
      this.animationData = e;
    }
    SlotManager.prototype.getProp = function(e) {
      return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e;
    };
    function slotFactory(e) {
      return new SlotManager(e);
    }
    function RenderableElement() {
    }
    RenderableElement.prototype = {
      initRenderable: function() {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
      },
      addRenderableComponent: function(t) {
        this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t);
      },
      removeRenderableComponent: function(t) {
        this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
      },
      prepareRenderableFrame: function(t) {
        this.checkLayerLimits(t);
      },
      checkTransparency: function() {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
      },
      /**
         * @function
         * Initializes frame related properties.
         *
         * @param {number} num
         * current frame number in Layer's time
         *
         */
      checkLayerLimits: function(t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
      },
      renderRenderable: function() {
        var t, r = this.renderableComponents.length;
        for (t = 0; t < r; t += 1)
          this.renderableComponents[t].renderFrame(this._isFirstFrame);
      },
      sourceRectAtTime: function() {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        };
      },
      getLayerSize: function() {
        return this.data.ty === 5 ? {
          w: this.data.textData.width,
          h: this.data.textData.height
        } : {
          w: this.data.width,
          h: this.data.height
        };
      }
    };
    var getBlendMode = function() {
      var e = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
      };
      return function(t) {
        return e[t] || "";
      };
    }();
    function SliderEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
    }
    function AngleEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
    }
    function ColorEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 1, 0, r);
    }
    function PointEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 1, 0, r);
    }
    function LayerIndexEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
    }
    function MaskIndexEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
    }
    function CheckboxEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(e, t) {
      var r = e.ef || [];
      this.effectElements = [];
      var i, s = r.length, n;
      for (i = 0; i < s; i += 1)
        n = new GroupEffect(r[i], t), this.effectElements.push(n);
    }
    function GroupEffect(e, t) {
      this.init(e, t);
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
      this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
      var r, i = this.data.ef.length, s, n = this.data.ef;
      for (r = 0; r < i; r += 1) {
        switch (s = null, n[r].ty) {
          case 0:
            s = new SliderEffect(n[r], t, this);
            break;
          case 1:
            s = new AngleEffect(n[r], t, this);
            break;
          case 2:
            s = new ColorEffect(n[r], t, this);
            break;
          case 3:
            s = new PointEffect(n[r], t, this);
            break;
          case 4:
          case 7:
            s = new CheckboxEffect(n[r], t, this);
            break;
          case 10:
            s = new LayerIndexEffect(n[r], t, this);
            break;
          case 11:
            s = new MaskIndexEffect(n[r], t, this);
            break;
          case 5:
            s = new EffectsManager(n[r], t);
            break;
          default:
            s = new NoValueEffect(n[r]);
            break;
        }
        s && this.effectElements.push(s);
      }
    };
    function BaseElement() {
    }
    BaseElement.prototype = {
      checkMasks: function() {
        if (!this.data.hasMask)
          return !1;
        for (var t = 0, r = this.data.masksProperties.length; t < r; ) {
          if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1)
            return !0;
          t += 1;
        }
        return !1;
      },
      initExpressions: function() {
        var t = getExpressionInterfaces();
        if (t) {
          var r = t("layer"), i = t("effects"), s = t("shape"), n = t("text"), a = t("comp");
          this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
          var l = i.createEffectsInterface(this, this.layerInterface);
          this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface);
        }
      },
      setBlendMode: function() {
        var t = getBlendMode(this.data.bm), r = this.baseElement || this.layerElement;
        r.style["mix-blend-mode"] = t;
      },
      initBaseData: function(t, r, i) {
        this.globalData = r, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
      },
      getType: function() {
        return this.type;
      },
      sourceRectAtTime: function() {
      }
    };
    function FrameElement() {
    }
    FrameElement.prototype = {
      /**
         * @function
         * Initializes frame related properties.
         *
         */
      initFrame: function() {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
      },
      /**
         * @function
         * Calculates all dynamic values
         *
         * @param {number} num
         * current frame number in Layer's time
         * @param {boolean} isVisible
         * if layers is currently in range
         *
         */
      prepareProperties: function(t, r) {
        var i, s = this.dynamicProperties.length;
        for (i = 0; i < s; i += 1)
          (r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
      },
      addDynamicProperty: function(t) {
        this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t);
      }
    };
    function FootageElement(e, t, r) {
      this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r);
    }
    FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var e = getExpressionInterfaces();
      if (e) {
        var t = e("footage");
        this.layerInterface = t(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    };
    function AudioElement(e, t, r) {
      this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
      var i = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
        _placeholder: !0
      }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
        k: [100]
      }, 1, 0.01, this);
    }
    AudioElement.prototype.prepareFrame = function(e) {
      if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder)
        this._currentTime = e / this.data.sr;
      else {
        var t = this.tm.v;
        this._currentTime = t;
      }
      this._volume = this.lv.v[0];
      var r = this._volume * this._volumeMultiplier;
      this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = !0;
    }, AudioElement.prototype.setRate = function(e) {
      this.audio.rate(e);
    }, AudioElement.prototype.volume = function(e) {
      this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    };
    function BaseRenderer() {
    }
    BaseRenderer.prototype.checkLayers = function(e) {
      var t, r = this.layers.length, i;
      for (this.completeLayers = !0, t = r - 1; t >= 0; t -= 1)
        this.elements[t] || (i = this.layers[t], i.ip - i.st <= e - this.layers[t].st && i.op - i.st > e - this.layers[t].st && this.buildItem(t)), this.completeLayers = this.elements[t] ? this.completeLayers : !1;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(e) {
      switch (e.ty) {
        case 2:
          return this.createImage(e);
        case 0:
          return this.createComp(e);
        case 1:
          return this.createSolid(e);
        case 3:
          return this.createNull(e);
        case 4:
          return this.createShape(e);
        case 5:
          return this.createText(e);
        case 6:
          return this.createAudio(e);
        case 13:
          return this.createCamera(e);
        case 15:
          return this.createFootage(e);
        default:
          return this.createNull(e);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(e) {
      return new AudioElement(e, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(e) {
      return new FootageElement(e, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var e, t = this.layers.length;
      for (e = 0; e < t; e += 1)
        this.buildItem(e);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(e) {
      this.completeLayers = !1;
      var t, r = e.length, i, s = this.layers.length;
      for (t = 0; t < r; t += 1)
        for (i = 0; i < s; ) {
          if (this.layers[i].id === e[t].id) {
            this.layers[i] = e[t];
            break;
          }
          i += 1;
        }
    }, BaseRenderer.prototype.setProjectInterface = function(e) {
      this.globalData.projectInterface = e;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
      for (var i = this.elements, s = this.layers, n = 0, a = s.length; n < a; )
        s[n].ind == t && (!i[n] || i[n] === !0 ? (this.buildItem(n), this.addPendingElement(e)) : (r.push(i[n]), i[n].setAsParent(), s[n].parent !== void 0 ? this.buildElementParenting(e, s[n].parent, r) : e.setHierarchy(r))), n += 1;
    }, BaseRenderer.prototype.addPendingElement = function(e) {
      this.pendingElements.push(e);
    }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1)
        if (e[t].xt) {
          var i = this.createComp(e[t]);
          i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
        }
    }, BaseRenderer.prototype.getElementById = function(e) {
      var t, r = this.elements.length;
      for (t = 0; t < r; t += 1)
        if (this.elements[t].data.ind === e)
          return this.elements[t];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(e) {
      var t = e.shift(), r;
      if (typeof t == "number")
        r = this.elements[t];
      else {
        var i, s = this.elements.length;
        for (i = 0; i < s; i += 1)
          if (this.elements[i].data.nm === t) {
            r = this.elements[i];
            break;
          }
      }
      return e.length === 0 ? r : r.getElementByPath(e);
    }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
      this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
        w: e.w,
        h: e.h
      };
    };
    var effectTypes = {
      TRANSFORM_EFFECT: "transformEFfect"
    };
    function TransformElement() {
    }
    TransformElement.prototype = {
      initTransform: function() {
        var t = new Matrix();
        this.finalTransform = {
          mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
            o: 0
          },
          _matMdf: !1,
          _localMatMdf: !1,
          _opMdf: !1,
          mat: t,
          localMat: t,
          localOpacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
      },
      renderTransform: function() {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var t, r = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
          if (!this.finalTransform._matMdf)
            for (; i < s; ) {
              if (this.hierarchy[i].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break;
              }
              i += 1;
            }
          if (this.finalTransform._matMdf)
            for (t = this.finalTransform.mProp.v.props, r.cloneFromProps(t), i = 0; i < s; i += 1)
              r.multiply(this.hierarchy[i].finalTransform.mProp.v);
        }
        this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
      },
      renderLocalTransform: function() {
        if (this.localTransforms) {
          var t = 0, r = this.localTransforms.length;
          if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
            for (; t < r; )
              this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
          if (this.finalTransform._localMatMdf) {
            var i = this.finalTransform.localMat;
            for (this.localTransforms[0].matrix.clone(i), t = 1; t < r; t += 1) {
              var s = this.localTransforms[t].matrix;
              i.multiply(s);
            }
            i.multiply(this.finalTransform.mat);
          }
          if (this.finalTransform._opMdf) {
            var n = this.finalTransform.localOpacity;
            for (t = 0; t < r; t += 1)
              n *= this.localTransforms[t].opacity * 0.01;
            this.finalTransform.localOpacity = n;
          }
        }
      },
      searchEffectTransforms: function() {
        if (this.renderableEffectsManager) {
          var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
          if (t.length) {
            this.localTransforms = [], this.finalTransform.localMat = new Matrix();
            var r = 0, i = t.length;
            for (r = 0; r < i; r += 1)
              this.localTransforms.push(t[r]);
          }
        }
      },
      globalToLocal: function(t) {
        var r = [];
        r.push(this.finalTransform);
        for (var i = !0, s = this.comp; i; )
          s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
        var n, a = r.length, l;
        for (n = 0; n < a; n += 1)
          l = r[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - l[0], t[1] - l[1], 0];
        return t;
      },
      mHelper: new Matrix()
    };
    function MaskElement(e, t, r) {
      this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var i = this.globalData.defs, s, n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(n), this.solidPath = "";
      var a, l = this.masksProperties, o = 0, p = [], c, k, f = createElementID(), x, A, m, E, d = "clipPath", g = "clip-path";
      for (s = 0; s < n; s += 1)
        if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (d = "mask", g = "mask"), (l[s].mode === "s" || l[s].mode === "i") && o === 0 ? (x = createNS("rect"), x.setAttribute("fill", "#ffffff"), x.setAttribute("width", this.element.comp.data.w || 0), x.setAttribute("height", this.element.comp.data.h || 0), p.push(x)) : x = null, a = createNS("path"), l[s].mode === "n")
          this.viewData[s] = {
            op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
            elem: a,
            lastPath: ""
          }, i.appendChild(a);
        else {
          o += 1, a.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
          var u;
          if (l[s].x.k !== 0 ? (d = "mask", g = "mask", E = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element), u = createElementID(), A = createNS("filter"), A.setAttribute("id", u), m = createNS("feMorphology"), m.setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), A.appendChild(m), i.appendChild(A), a.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (m = null, E = null), this.storedData[s] = {
            elem: a,
            x: E,
            expan: m,
            lastPath: "",
            lastOperator: "",
            filterId: u,
            lastRadius: 0
          }, l[s].mode === "i") {
            k = p.length;
            var y = createNS("g");
            for (c = 0; c < k; c += 1)
              y.appendChild(p[c]);
            var S = createNS("mask");
            S.setAttribute("mask-type", "alpha"), S.setAttribute("id", f + "_" + o), S.appendChild(a), i.appendChild(S), y.setAttribute("mask", "url(" + getLocationHref() + "#" + f + "_" + o + ")"), p.length = 0, p.push(y);
          } else
            p.push(a);
          l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
            elem: a,
            lastPath: "",
            op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
            invRect: x
          }, this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s]);
        }
      for (this.maskElement = createNS(d), n = p.length, s = 0; s < n; s += 1)
        this.maskElement.appendChild(p[s]);
      o > 0 && (this.maskElement.setAttribute("id", f), this.element.maskedElement.setAttribute(g, "url(" + getLocationHref() + "#" + f + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    MaskElement.prototype.getMaskProperty = function(e) {
      return this.viewData[e].prop;
    }, MaskElement.prototype.renderFrame = function(e) {
      var t = this.element.finalTransform.mat, r, i = this.masksProperties.length;
      for (r = 0; r < i; r += 1)
        if ((this.viewData[r].prop._mdf || e) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || e) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[r].invRect.setAttribute("transform", t.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || e))) {
          var s = this.storedData[r].expan;
          this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2));
        }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var e = "M0,0 ";
      return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " ", e;
    }, MaskElement.prototype.drawPath = function(e, t, r) {
      var i = " M" + t.v[0][0] + "," + t.v[0][1], s, n;
      for (n = t._length, s = 1; s < n; s += 1)
        i += " C" + t.o[s - 1][0] + "," + t.o[s - 1][1] + " " + t.i[s][0] + "," + t.i[s][1] + " " + t.v[s][0] + "," + t.v[s][1];
      if (t.c && n > 1 && (i += " C" + t.o[s - 1][0] + "," + t.o[s - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== i) {
        var a = "";
        r.elem && (t.c && (a = e.inv ? this.solidPath + i : i), r.elem.setAttribute("d", a)), r.lastPath = i;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = function() {
      var e = {};
      e.createFilter = t, e.createAlphaToLuminanceFilter = r;
      function t(i, s) {
        var n = createNS("filter");
        return n.setAttribute("id", i), s !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n;
      }
      function r() {
        var i = createNS("feColorMatrix");
        return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
      }
      return e;
    }(), featureSupport = function() {
      var e = {
        maskType: !0,
        svgLumaHidden: !0,
        offscreenCanvas: typeof OffscreenCanvas < "u"
      };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e;
    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
    function SVGEffects(e) {
      var t, r = "SourceGraphic", i = e.data.ef ? e.data.ef.length : 0, s = createElementID(), n = filtersFactory.createFilter(s, !0), a = 0;
      this.filters = [];
      var l;
      for (t = 0; t < i; t += 1) {
        l = null;
        var o = e.data.ef[t].ty;
        if (registeredEffects$1[o]) {
          var p = registeredEffects$1[o].effect;
          l = new p(n, e.effectsManager.effectElements[t], e, idPrefix + a, r), r = idPrefix + a, registeredEffects$1[o].countsAsEffect && (a += 1);
        }
        l && this.filters.push(l);
      }
      a && (e.globalData.defs.appendChild(n), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && e.addRenderableComponent(this);
    }
    SVGEffects.prototype.renderFrame = function(e) {
      var t, r = this.filters.length;
      for (t = 0; t < r; t += 1)
        this.filters[t].renderFrame(e);
    }, SVGEffects.prototype.getEffects = function(e) {
      var t, r = this.filters.length, i = [];
      for (t = 0; t < r; t += 1)
        this.filters[t].type === e && i.push(this.filters[t]);
      return i;
    };
    function registerEffect$1(e, t, r) {
      registeredEffects$1[e] = {
        effect: t,
        countsAsEffect: r
      };
    }
    function SVGBaseElement() {
    }
    SVGBaseElement.prototype = {
      initRendererElement: function() {
        this.layerElement = createNS("g");
      },
      createContainerElements: function() {
        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var t = null;
        if (this.data.td) {
          this.matteMasks = {};
          var r = createNS("g");
          r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), t = r, this.globalData.defs.appendChild(r);
        } else
          this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
          var i = createNS("clipPath"), s = createNS("path");
          s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var n = createElementID();
          if (i.setAttribute("id", n), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
            var a = createNS("g");
            a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
          } else
            this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")");
        }
        this.data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function() {
        this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
      },
      destroyBaseElement: function() {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
      },
      getBaseElement: function() {
        return this.data.hd ? null : this.baseElement;
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
      },
      getMatte: function(t) {
        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
          var r = this.layerId + "_" + t, i, s, n, a;
          if (t === 1 || t === 3) {
            var l = createNS("mask");
            l.setAttribute("id", r), l.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), this.globalData.defs.appendChild(l), !featureSupport.maskType && t === 1 && (l.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(n), l.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
          } else if (t === 2) {
            var o = createNS("mask");
            o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
            var p = createNS("g");
            o.appendChild(p), i = createElementID(), s = filtersFactory.createFilter(i);
            var c = createNS("feComponentTransfer");
            c.setAttribute("in", "SourceGraphic"), s.appendChild(c);
            var k = createNS("feFuncA");
            k.setAttribute("type", "table"), k.setAttribute("tableValues", "1.0 0.0"), c.appendChild(k), this.globalData.defs.appendChild(s);
            var f = createNS("rect");
            f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), p.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), p.appendChild(f), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), p.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), p.appendChild(f), a.appendChild(this.layerElement), p.appendChild(a)), this.globalData.defs.appendChild(o);
          }
          this.matteMasks[t] = r;
        }
        return this.matteMasks[t];
      },
      setMatte: function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
      }
    };
    function HierarchyElement() {
    }
    HierarchyElement.prototype = {
      /**
         * @function
         * Initializes hierarchy properties
         *
         */
      initHierarchy: function() {
        this.hierarchy = [], this._isParent = !1, this.checkParenting();
      },
      /**
         * @function
         * Sets layer's hierarchy.
         * @param {array} hierarch
         * layer's parent list
         *
         */
      setHierarchy: function(t) {
        this.hierarchy = t;
      },
      /**
         * @function
         * Sets layer as parent.
         *
         */
      setAsParent: function() {
        this._isParent = !0;
      },
      /**
         * @function
         * Searches layer's parenting chain
         *
         */
      checkParenting: function() {
        this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
      }
    };
    function RenderableDOMElement() {
    }
    (function() {
      var e = {
        initElement: function(r, i, s) {
          this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
        },
        hide: function() {
          if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            var r = this.baseElement || this.layerElement;
            r.style.display = "none", this.hidden = !0;
          }
        },
        show: function() {
          if (this.isInRange && !this.isTransparent) {
            if (!this.data.hd) {
              var r = this.baseElement || this.layerElement;
              r.style.display = "block";
            }
            this.hidden = !1, this._isFirstFrame = !0;
          }
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
        },
        renderInnerContent: function() {
        },
        prepareFrame: function(r) {
          this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency();
        },
        destroy: function() {
          this.innerElem = null, this.destroyBaseElement();
        }
      };
      extendPrototype([RenderableElement, createProxyFunction(e)], RenderableDOMElement);
    })();
    function IImageElement(e, t, r) {
      this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      };
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var e = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function ProcessedElement(e, t) {
      this.elem = e, this.pos = t;
    }
    function IShapeElement() {
    }
    IShapeElement.prototype = {
      addShapeToModifiers: function(t) {
        var r, i = this.shapeModifiers.length;
        for (r = 0; r < i; r += 1)
          this.shapeModifiers[r].addShape(t);
      },
      isShapeInAnimatedModifiers: function(t) {
        for (var r = 0, i = this.shapeModifiers.length; r < i; )
          if (this.shapeModifiers[r].isAnimatedWithShape(t))
            return !0;
        return !1;
      },
      renderModifiers: function() {
        if (this.shapeModifiers.length) {
          var t, r = this.shapes.length;
          for (t = 0; t < r; t += 1)
            this.shapes[t].sh.reset();
          r = this.shapeModifiers.length;
          var i;
          for (t = r - 1; t >= 0 && (i = this.shapeModifiers[t].processShapes(this._isFirstFrame), !i); t -= 1)
            ;
        }
      },
      searchProcessedElement: function(t) {
        for (var r = this.processedElements, i = 0, s = r.length; i < s; ) {
          if (r[i].elem === t)
            return r[i].pos;
          i += 1;
        }
        return 0;
      },
      addProcessedElement: function(t, r) {
        for (var i = this.processedElements, s = i.length; s; )
          if (s -= 1, i[s].elem === t) {
            i[s].pos = r;
            return;
          }
        i.push(new ProcessedElement(t, r));
      },
      prepareFrame: function(t) {
        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
      }
    };
    var lineCapEnum = {
      1: "butt",
      2: "round",
      3: "square"
    }, lineJoinEnum = {
      1: "miter",
      2: "round",
      3: "bevel"
    };
    function SVGShapeData(e, t, r) {
      this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
      for (var i = 0, s = e.length; i < s; ) {
        if (e[i].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        i += 1;
      }
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = !0;
    };
    function SVGStyleData(e, t) {
      this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null;
    }
    SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = !1;
    };
    function DashProperty(e, t, r, i) {
      this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
      var s, n = t.length || 0, a;
      for (s = 0; s < n; s += 1)
        a = PropertyFactory.getProp(e, t[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
          n: t[s].n,
          p: a
        };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    DashProperty.prototype.getValue = function(e) {
      if (!(this.elem.globalData.frameId === this.frameId && !e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
        var t = 0, r = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1)
          this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty);
    function SVGStrokeStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
    function SVGFillStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
    function SVGNoStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
    function GradientProperty(e, t, r) {
      this.data = t, this.c = createTypedArray("uint8c", t.p * 4);
      var i = t.k.k[0].s ? t.k.k[0].s.length - t.p * 4 : t.k.k.length - t.p * 4;
      this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    GradientProperty.prototype.comparePoints = function(e, t) {
      for (var r = 0, i = this.o.length / 2, s; r < i; ) {
        if (s = Math.abs(e[r * 4] - e[t * 4 + r * 2]), s > 0.01)
          return !1;
        r += 1;
      }
      return !0;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4)
        return !1;
      if (this.data.k.k[0].s)
        for (var e = 0, t = this.data.k.k.length; e < t; ) {
          if (!this.comparePoints(this.data.k.k[e].s, this.data.p))
            return !1;
          e += 1;
        }
      else if (!this.comparePoints(this.data.k.k, this.data.p))
        return !1;
      return !0;
    }, GradientProperty.prototype.getValue = function(e) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
        var t, r = this.data.p * 4, i, s;
        for (t = 0; t < r; t += 1)
          i = t % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[t] * i), this.c[t] !== s && (this.c[t] = s, this._cmdf = !e);
        if (this.o.length)
          for (r = this.prop.v.length, t = this.data.p * 4; t < r; t += 1)
            i = t % 2 === 0 ? 100 : 1, s = t % 2 === 0 ? Math.round(this.prop.v[t] * 100) : this.prop.v[t], this.o[t - this.data.p * 4] !== s && (this.o[t - this.data.p * 4] = s, this._omdf = !e);
        this._mdf = !e;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    function SVGGradientFillStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r);
    }
    SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
      this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
        k: 0
      }, 0, 0.01, this), this.a = PropertyFactory.getProp(e, t.a || {
        k: 0
      }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
      var r = createElementID(), i = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
      i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
      var s = [], n, a, l;
      for (l = t.g.p * 4, a = 0; a < l; a += 4)
        n = createNS("stop"), i.appendChild(n), s.push(n);
      e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, i, s, n = createNS("mask"), a = createNS("path");
        n.appendChild(a);
        var l = createElementID(), o = createElementID();
        n.setAttribute("id", o);
        var p = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
        p.setAttribute("id", l), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), s = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
        var c = this.stops;
        for (i = e.g.p * 4; i < s; i += 2)
          r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(r), c.push(r);
        a.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), e.ty === "gs" && (a.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && a.setAttribute("stroke-miterlimit", e.ml)), this.of = p, this.ms = n, this.ost = c, this.maskId = o, t.msElem = a;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
    function SVGGradientStrokeStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(e, t, r) {
      this.transform = {
        mProps: e,
        op: t,
        container: r
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var buildShapeString = function(t, r, i, s) {
      if (r === 0)
        return "";
      var n = t.o, a = t.i, l = t.v, o, p = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
      for (o = 1; o < r; o += 1)
        p += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[o][0], a[o][1]) + " " + s.applyToPointStringified(l[o][0], l[o][1]);
      return i && r && (p += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), p += "z"), p;
    }, SVGElementsRenderer = function() {
      var e = new Matrix(), t = new Matrix(), r = {
        createRenderFunction: i
      };
      function i(k) {
        switch (k.ty) {
          case "fl":
            return l;
          case "gf":
            return p;
          case "gs":
            return o;
          case "st":
            return c;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return a;
          case "tr":
            return s;
          case "no":
            return n;
          default:
            return null;
        }
      }
      function s(k, f, x) {
        (x || f.transform.op._mdf) && f.transform.container.setAttribute("opacity", f.transform.op.v), (x || f.transform.mProps._mdf) && f.transform.container.setAttribute("transform", f.transform.mProps.v.to2dCSS());
      }
      function n() {
      }
      function a(k, f, x) {
        var A, m, E, d, g, u, y = f.styles.length, S = f.lvl, T, M, I, R;
        for (u = 0; u < y; u += 1) {
          if (d = f.sh._mdf || x, f.styles[u].lvl < S) {
            for (M = t.reset(), I = S - f.styles[u].lvl, R = f.transformers.length - 1; !d && I > 0; )
              d = f.transformers[R].mProps._mdf || d, I -= 1, R -= 1;
            if (d)
              for (I = S - f.styles[u].lvl, R = f.transformers.length - 1; I > 0; )
                M.multiply(f.transformers[R].mProps.v), I -= 1, R -= 1;
          } else
            M = e;
          if (T = f.sh.paths, m = T._length, d) {
            for (E = "", A = 0; A < m; A += 1)
              g = T.shapes[A], g && g._length && (E += buildShapeString(g, g._length, g.c, M));
            f.caches[u] = E;
          } else
            E = f.caches[u];
          f.styles[u].d += k.hd === !0 ? "" : E, f.styles[u]._mdf = d || f.styles[u]._mdf;
        }
      }
      function l(k, f, x) {
        var A = f.style;
        (f.c._mdf || x) && A.pElem.setAttribute("fill", "rgb(" + bmFloor(f.c.v[0]) + "," + bmFloor(f.c.v[1]) + "," + bmFloor(f.c.v[2]) + ")"), (f.o._mdf || x) && A.pElem.setAttribute("fill-opacity", f.o.v);
      }
      function o(k, f, x) {
        p(k, f, x), c(k, f, x);
      }
      function p(k, f, x) {
        var A = f.gf, m = f.g._hasOpacity, E = f.s.v, d = f.e.v;
        if (f.o._mdf || x) {
          var g = k.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          f.style.pElem.setAttribute(g, f.o.v);
        }
        if (f.s._mdf || x) {
          var u = k.t === 1 ? "x1" : "cx", y = u === "x1" ? "y1" : "cy";
          A.setAttribute(u, E[0]), A.setAttribute(y, E[1]), m && !f.g._collapsable && (f.of.setAttribute(u, E[0]), f.of.setAttribute(y, E[1]));
        }
        var S, T, M, I;
        if (f.g._cmdf || x) {
          S = f.cst;
          var R = f.g.c;
          for (M = S.length, T = 0; T < M; T += 1)
            I = S[T], I.setAttribute("offset", R[T * 4] + "%"), I.setAttribute("stop-color", "rgb(" + R[T * 4 + 1] + "," + R[T * 4 + 2] + "," + R[T * 4 + 3] + ")");
        }
        if (m && (f.g._omdf || x)) {
          var H = f.g.o;
          for (f.g._collapsable ? S = f.cst : S = f.ost, M = S.length, T = 0; T < M; T += 1)
            I = S[T], f.g._collapsable || I.setAttribute("offset", H[T * 2] + "%"), I.setAttribute("stop-opacity", H[T * 2 + 1]);
        }
        if (k.t === 1)
          (f.e._mdf || x) && (A.setAttribute("x2", d[0]), A.setAttribute("y2", d[1]), m && !f.g._collapsable && (f.of.setAttribute("x2", d[0]), f.of.setAttribute("y2", d[1])));
        else {
          var D;
          if ((f.s._mdf || f.e._mdf || x) && (D = Math.sqrt(Math.pow(E[0] - d[0], 2) + Math.pow(E[1] - d[1], 2)), A.setAttribute("r", D), m && !f.g._collapsable && f.of.setAttribute("r", D)), f.e._mdf || f.h._mdf || f.a._mdf || x) {
            D || (D = Math.sqrt(Math.pow(E[0] - d[0], 2) + Math.pow(E[1] - d[1], 2)));
            var V = Math.atan2(d[1] - E[1], d[0] - E[0]), O = f.h.v;
            O >= 1 ? O = 0.99 : O <= -1 && (O = -0.99);
            var G = D * O, L = Math.cos(V + f.a.v) * G + E[0], P = Math.sin(V + f.a.v) * G + E[1];
            A.setAttribute("fx", L), A.setAttribute("fy", P), m && !f.g._collapsable && (f.of.setAttribute("fx", L), f.of.setAttribute("fy", P));
          }
        }
      }
      function c(k, f, x) {
        var A = f.style, m = f.d;
        m && (m._mdf || x) && m.dashStr && (A.pElem.setAttribute("stroke-dasharray", m.dashStr), A.pElem.setAttribute("stroke-dashoffset", m.dashoffset[0])), f.c && (f.c._mdf || x) && A.pElem.setAttribute("stroke", "rgb(" + bmFloor(f.c.v[0]) + "," + bmFloor(f.c.v[1]) + "," + bmFloor(f.c.v[2]) + ")"), (f.o._mdf || x) && A.pElem.setAttribute("stroke-opacity", f.o.v), (f.w._mdf || x) && (A.pElem.setAttribute("stroke-width", f.w.v), A.msElem && A.msElem.setAttribute("stroke-width", f.w.v));
      }
      return r;
    }();
    function SVGShapeElement(e, t, r) {
      this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = [];
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var e, t = this.shapes.length, r, i, s = this.stylesList.length, n, a = [], l = !1;
      for (i = 0; i < s; i += 1) {
        for (n = this.stylesList[i], l = !1, a.length = 0, e = 0; e < t; e += 1)
          r = this.shapes[e], r.styles.indexOf(n) !== -1 && (a.push(r), l = r._isAnimated || l);
        a.length > 1 && l && this.setShapesAsAnimated(a);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1)
        e[t].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
      var r, i = new SVGStyleData(e, t), s = i.pElem;
      if (e.ty === "st")
        r = new SVGStrokeStyleData(this, e, i);
      else if (e.ty === "fl")
        r = new SVGFillStyleData(this, e, i);
      else if (e.ty === "gf" || e.ty === "gs") {
        var n = e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
        r = new n(this, e, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"));
      } else
        e.ty === "no" && (r = new SVGNoStyleData(this, e, i));
      return (e.ty === "st" || e.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), s.setAttribute("fill-opacity", "0"), e.lj === 1 && s.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && s.setAttribute("fill-rule", "evenodd"), e.ln && s.setAttribute("id", e.ln), e.cl && s.setAttribute("class", e.cl), e.bm && (s.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(i), this.addToAnimatedContents(e, r), r;
    }, SVGShapeElement.prototype.createGroupElement = function(e) {
      var t = new ShapeGroupData();
      return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t;
    }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
      var r = TransformPropertyFactory.getTransformProperty(this, e, this), i = new SVGTransformData(r, r.o, t);
      return this.addToAnimatedContents(e, i), i;
    }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
      var i = 4;
      e.ty === "rc" ? i = 5 : e.ty === "el" ? i = 6 : e.ty === "sr" && (i = 7);
      var s = ShapePropertyFactory.getShapeProp(this, e, i, this), n = new SVGShapeData(t, r, s);
      return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(e, n), n;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
      for (var r = 0, i = this.animatedContents.length; r < i; ) {
        if (this.animatedContents[r].element === t)
          return;
        r += 1;
      }
      this.animatedContents.push({
        fn: SVGElementsRenderer.createRenderFunction(e),
        element: t,
        data: e
      });
    }, SVGShapeElement.prototype.setElementStyles = function(e) {
      var t = e.styles, r, i = this.stylesList.length;
      for (r = 0; r < i; r += 1)
        this.stylesList[r].closed || t.push(this.stylesList[r]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var e, t = this.itemsData.length;
      for (e = 0; e < t; e += 1)
        this.prevViewData[e] = this.itemsData[e];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1)
        this.dynamicProperties[e].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(e, t, r, i, s, n, a) {
      var l = [].concat(n), o, p = e.length - 1, c, k, f = [], x = [], A, m, E;
      for (o = p; o >= 0; o -= 1) {
        if (E = this.searchProcessedElement(e[o]), E ? t[o] = r[E - 1] : e[o]._render = a, e[o].ty === "fl" || e[o].ty === "st" || e[o].ty === "gf" || e[o].ty === "gs" || e[o].ty === "no")
          E ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], s), e[o]._render && t[o].style.pElem.parentNode !== i && i.appendChild(t[o].style.pElem), f.push(t[o].style);
        else if (e[o].ty === "gr") {
          if (!E)
            t[o] = this.createGroupElement(e[o]);
          else
            for (k = t[o].it.length, c = 0; c < k; c += 1)
              t[o].prevViewData[c] = t[o].it[c];
          this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, s + 1, l, a), e[o]._render && t[o].gr.parentNode !== i && i.appendChild(t[o].gr);
        } else
          e[o].ty === "tr" ? (E || (t[o] = this.createTransformElement(e[o], i)), A = t[o].transform, l.push(A)) : e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr" ? (E || (t[o] = this.createShapeElement(e[o], l, s)), this.setElementStyles(t[o])) : e[o].ty === "tm" || e[o].ty === "rd" || e[o].ty === "ms" || e[o].ty === "pb" || e[o].ty === "zz" || e[o].ty === "op" ? (E ? (m = t[o], m.closed = !1) : (m = ShapeModifiers.getModifier(e[o].ty), m.init(this, e[o]), t[o] = m, this.shapeModifiers.push(m)), x.push(m)) : e[o].ty === "rp" && (E ? (m = t[o], m.closed = !0) : (m = ShapeModifiers.getModifier(e[o].ty), t[o] = m, m.init(this, e, o, t), this.shapeModifiers.push(m), a = !1), x.push(m));
        this.addProcessedElement(e[o], o + 1);
      }
      for (p = f.length, o = 0; o < p; o += 1)
        f[o].closed = !0;
      for (p = x.length, o = 0; o < p; o += 1)
        x[o].closed = !0;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var e, t = this.stylesList.length;
      for (e = 0; e < t; e += 1)
        this.stylesList[e].reset();
      for (this.renderShape(), e = 0; e < t; e += 1)
        (this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var e, t = this.animatedContents.length, r;
      for (e = 0; e < t; e += 1)
        r = this.animatedContents[e], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function LetterProps(e, t, r, i, s, n) {
      this.o = e, this.sw = t, this.sc = r, this.fc = i, this.m = s, this.p = n, this._mdf = {
        o: !0,
        sw: !!t,
        sc: !!r,
        fc: !!i,
        m: !0,
        p: !0
      };
    }
    LetterProps.prototype.update = function(e, t, r, i, s, n) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var a = !1;
      return this.o !== e && (this.o = e, this._mdf.o = !0, a = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, a = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, a = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, a = !0), this.m !== s && (this.m = s, this._mdf.m = !0, a = !0), n.length && (this.p[0] !== n[0] || this.p[1] !== n[1] || this.p[4] !== n[4] || this.p[5] !== n[5] || this.p[12] !== n[12] || this.p[13] !== n[13]) && (this.p = n, this._mdf.p = !0, a = !0), a;
    };
    function TextProperty(e, t) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
        ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        sz: 0,
        ps: null,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        finalSize: 0,
        finalText: [],
        finalLineHeight: 0,
        __complete: !1
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e;
    }, TextProperty.prototype.setCurrentData = function(e) {
      e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(e) {
      this.effectsSequence.push(e), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(e) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !e)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var t = this.currentData, r = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = !0, this._mdf = !1;
        var i, s = this.effectsSequence.length, n = e || this.data.d.k[this.keysIndex].s;
        for (i = 0; i < s; i += 1)
          r !== this.keysIndex ? n = this.effectsSequence[i](n, n.t) : n = this.effectsSequence[i](this.currentData, n.t);
        t !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, i = e.length; r <= i - 1 && !(r === i - 1 || e[r + 1].t > t); )
        r += 1;
      return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(e) {
      for (var t = [], r = 0, i = e.length, s, n, a = !1, l = !1, o = ""; r < i; )
        a = l, l = !1, s = e.charCodeAt(r), o = e.charAt(r), FontManager.isCombinedCharacter(s) ? a = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(e, r) ? o = e.substr(r, 14) : (n = e.charCodeAt(r + 1), n >= 56320 && n <= 57343 && (FontManager.isModifier(s, n) ? (o = e.substr(r, 2), a = !0) : FontManager.isFlagEmoji(e.substr(r, 4)) ? o = e.substr(r, 4) : o = e.substr(r, 2))) : s > 56319 ? (n = e.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (a = !0)) : FontManager.isZeroWidthJoiner(s) && (a = !0, l = !0), a ? (t[t.length - 1] += o, a = !1) : t.push(o), r += o.length;
      return t;
    }, TextProperty.prototype.completeTextData = function(e) {
      e.__complete = !0;
      var t = this.elem.globalData.fontManager, r = this.data, i = [], s, n, a, l = 0, o, p = r.m.g, c = 0, k = 0, f = 0, x = [], A = 0, m = 0, E, d, g = t.getFontByName(e.f), u, y = 0, S = getFontProperties(g);
      e.fWeight = S.weight, e.fStyle = S.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), n = e.finalText.length, e.finalLineHeight = e.lh;
      var T = e.tr / 1e3 * e.finalSize, M;
      if (e.sz)
        for (var I = !0, R = e.sz[0], H = e.sz[1], D, V; I; ) {
          V = this.buildFinalText(e.t), D = 0, A = 0, n = V.length, T = e.tr / 1e3 * e.finalSize;
          var O = -1;
          for (s = 0; s < n; s += 1)
            M = V[s].charCodeAt(0), a = !1, V[s] === " " ? O = s : (M === 13 || M === 3) && (A = 0, a = !0, D += e.finalLineHeight || e.finalSize * 1.2), t.chars ? (u = t.getCharData(V[s], g.fStyle, g.fFamily), y = a ? 0 : u.w * e.finalSize / 100) : y = t.measureText(V[s], e.f, e.finalSize), A + y > R && V[s] !== " " ? (O === -1 ? n += 1 : s = O, D += e.finalLineHeight || e.finalSize * 1.2, V.splice(s, O === s ? 1 : 0, "\r"), O = -1, A = 0) : (A += y, A += T);
          D += g.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && H < D ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = V, n = e.finalText.length, I = !1);
        }
      A = -T, y = 0;
      var G = 0, L;
      for (s = 0; s < n; s += 1)
        if (a = !1, L = e.finalText[s], M = L.charCodeAt(0), M === 13 || M === 3 ? (G = 0, x.push(A), m = A > m ? A : m, A = -2 * T, o = "", a = !0, f += 1) : o = L, t.chars ? (u = t.getCharData(L, g.fStyle, t.getFontByName(e.f).fFamily), y = a ? 0 : u.w * e.finalSize / 100) : y = t.measureText(o, e.f, e.finalSize), L === " " ? G += y + T : (A += y + T + G, G = 0), i.push({
          l: y,
          an: y,
          add: c,
          n: a,
          anIndexes: [],
          val: o,
          line: f,
          animatorJustifyOffset: 0
        }), p == 2) {
          if (c += y, o === "" || o === " " || s === n - 1) {
            for ((o === "" || o === " ") && (c -= y); k <= s; )
              i[k].an = c, i[k].ind = l, i[k].extra = y, k += 1;
            l += 1, c = 0;
          }
        } else if (p == 3) {
          if (c += y, o === "" || s === n - 1) {
            for (o === "" && (c -= y); k <= s; )
              i[k].an = c, i[k].ind = l, i[k].extra = y, k += 1;
            c = 0, l += 1;
          }
        } else
          i[l].ind = l, i[l].extra = 0, l += 1;
      if (e.l = i, m = A > m ? A : m, x.push(A), e.sz)
        e.boxWidth = e.sz[0], e.justifyOffset = 0;
      else
        switch (e.boxWidth = m, e.j) {
          case 1:
            e.justifyOffset = -e.boxWidth;
            break;
          case 2:
            e.justifyOffset = -e.boxWidth / 2;
            break;
          default:
            e.justifyOffset = 0;
        }
      e.lineWidths = x;
      var P = r.a, _, b;
      d = P.length;
      var C, B, F = [];
      for (E = 0; E < d; E += 1) {
        for (_ = P[E], _.a.sc && (e.strokeColorAnim = !0), _.a.sw && (e.strokeWidthAnim = !0), (_.a.fc || _.a.fh || _.a.fs || _.a.fb) && (e.fillColorAnim = !0), B = 0, C = _.s.b, s = 0; s < n; s += 1)
          b = i[s], b.anIndexes[E] = B, (C == 1 && b.val !== "" || C == 2 && b.val !== "" && b.val !== " " || C == 3 && (b.n || b.val == " " || s == n - 1) || C == 4 && (b.n || s == n - 1)) && (_.s.rn === 1 && F.push(B), B += 1);
        r.a[E].s.totalChars = B;
        var z = -1, q;
        if (_.s.rn === 1)
          for (s = 0; s < n; s += 1)
            b = i[s], z != b.anIndexes[E] && (z = b.anIndexes[E], q = F.splice(Math.floor(Math.random() * F.length), 1)[0]), b.anIndexes[E] = q;
      }
      e.yOffset = e.finalLineHeight || e.finalSize * 1.2, e.ls = e.ls || 0, e.ascent = g.ascent * e.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(e, t) {
      t = t === void 0 ? this.keysIndex : t;
      var r = this.copyData({}, this.data.d.k[t].s);
      r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(e) {
      var t = this.data.d.k[e].s;
      t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t);
    }, TextProperty.prototype.canResizeFont = function(e) {
      this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(e) {
      this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var e = Math.max, t = Math.min, r = Math.floor;
      function i(n, a) {
        this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = n, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(n), this.s = PropertyFactory.getProp(n, a.s || {
          k: 0
        }, 0, 0, this), "e" in a ? this.e = PropertyFactory.getProp(n, a.e, 0, 0, this) : this.e = {
          v: 100
        }, this.o = PropertyFactory.getProp(n, a.o || {
          k: 0
        }, 0, 0, this), this.xe = PropertyFactory.getProp(n, a.xe || {
          k: 0
        }, 0, 0, this), this.ne = PropertyFactory.getProp(n, a.ne || {
          k: 0
        }, 0, 0, this), this.sm = PropertyFactory.getProp(n, a.sm || {
          k: 100
        }, 0, 0, this), this.a = PropertyFactory.getProp(n, a.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      i.prototype = {
        getMult: function(a) {
          this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
          var l = 0, o = 0, p = 1, c = 1;
          this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? p = 1 - this.xe.v / 100 : c = 1 + this.xe.v / 100;
          var k = BezierFactory.getBezierEasing(l, o, p, c).get, f = 0, x = this.finalS, A = this.finalE, m = this.data.sh;
          if (m === 2)
            A === x ? f = a >= A ? 1 : 0 : f = e(0, t(0.5 / (A - x) + (a - x) / (A - x), 1)), f = k(f);
          else if (m === 3)
            A === x ? f = a >= A ? 0 : 1 : f = 1 - e(0, t(0.5 / (A - x) + (a - x) / (A - x), 1)), f = k(f);
          else if (m === 4)
            A === x ? f = 0 : (f = e(0, t(0.5 / (A - x) + (a - x) / (A - x), 1)), f < 0.5 ? f *= 2 : f = 1 - 2 * (f - 0.5)), f = k(f);
          else if (m === 5) {
            if (A === x)
              f = 0;
            else {
              var E = A - x;
              a = t(e(0, a + 0.5 - x), A - x);
              var d = -E / 2 + a, g = E / 2;
              f = Math.sqrt(1 - d * d / (g * g));
            }
            f = k(f);
          } else
            m === 6 ? (A === x ? f = 0 : (a = t(e(0, a + 0.5 - x), A - x), f = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (A - x))) / 2), f = k(f)) : (a >= r(x) && (a - x < 0 ? f = e(0, t(t(A, 1) - (x - a), 1)) : f = e(0, t(A - a, 1))), f = k(f));
          if (this.sm.v !== 100) {
            var u = this.sm.v * 0.01;
            u === 0 && (u = 1e-8);
            var y = 0.5 - u * 0.5;
            f < y ? f = 0 : (f = (f - y) / u, f > 1 && (f = 1));
          }
          return f * this.a.v;
        },
        getValue: function(a) {
          this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
          var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / l, p = this.s.v / l + o, c = this.e.v / l + o;
          if (p > c) {
            var k = p;
            p = c, c = k;
          }
          this.finalS = p, this.finalE = c;
        }
      }, extendPrototype([DynamicPropertyContainer], i);
      function s(n, a, l) {
        return new i(n, a);
      }
      return {
        getTextSelectorProp: s
      };
    }();
    function TextAnimatorDataProperty(e, t, r) {
      var i = {
        propType: !1
      }, s = PropertyFactory.getProp, n = t.a;
      this.a = {
        r: n.r ? s(e, n.r, 0, degToRads, r) : i,
        rx: n.rx ? s(e, n.rx, 0, degToRads, r) : i,
        ry: n.ry ? s(e, n.ry, 0, degToRads, r) : i,
        sk: n.sk ? s(e, n.sk, 0, degToRads, r) : i,
        sa: n.sa ? s(e, n.sa, 0, degToRads, r) : i,
        s: n.s ? s(e, n.s, 1, 0.01, r) : i,
        a: n.a ? s(e, n.a, 1, 0, r) : i,
        o: n.o ? s(e, n.o, 0, 0.01, r) : i,
        p: n.p ? s(e, n.p, 1, 0, r) : i,
        sw: n.sw ? s(e, n.sw, 0, 0, r) : i,
        sc: n.sc ? s(e, n.sc, 1, 0, r) : i,
        fc: n.fc ? s(e, n.fc, 1, 0, r) : i,
        fh: n.fh ? s(e, n.fh, 0, 0, r) : i,
        fs: n.fs ? s(e, n.fs, 0, 0.01, r) : i,
        fb: n.fb ? s(e, n.fb, 0, 0.01, r) : i,
        t: n.t ? s(e, n.t, 0, 0, r) : i
      }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t;
    }
    function TextAnimatorProperty(e, t, r) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r);
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var e, t = this._textData.a.length, r, i = PropertyFactory.getProp;
      for (e = 0; e < t; e += 1)
        r = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, r, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        a: i(this._elem, this._textData.p.a, 0, 0, this),
        f: i(this._elem, this._textData.p.f, 0, 0, this),
        l: i(this._elem, this._textData.p.l, 0, 0, this),
        r: i(this._elem, this._textData.p.r, 0, 0, this),
        p: i(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
      if (this.lettersChangedFlag = t, !(!this._mdf && !this._isFirstFrame && !t && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = !1;
        var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, n = this.mHelper, a = this._renderType, l = this.renderedLetters.length, o, p, c, k, f = e.l, x, A, m, E, d, g, u, y, S, T, M, I, R, H, D;
        if (this._hasMaskedPath) {
          if (D = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var V = D.v;
            this._pathData.r.v && (V = V.reverse()), x = {
              tLength: 0,
              segments: []
            }, k = V._length - 1;
            var O;
            for (I = 0, c = 0; c < k; c += 1)
              O = bez.buildBezierData(V.v[c], V.v[c + 1], [V.o[c][0] - V.v[c][0], V.o[c][1] - V.v[c][1]], [V.i[c + 1][0] - V.v[c + 1][0], V.i[c + 1][1] - V.v[c + 1][1]]), x.tLength += O.segmentLength, x.segments.push(O), I += O.segmentLength;
            c = k, D.v.c && (O = bez.buildBezierData(V.v[c], V.v[0], [V.o[c][0] - V.v[c][0], V.o[c][1] - V.v[c][1]], [V.i[0][0] - V.v[0][0], V.i[0][1] - V.v[0][1]]), x.tLength += O.segmentLength, x.segments.push(O), I += O.segmentLength), this._pathData.pi = x;
          }
          if (x = this._pathData.pi, A = this._pathData.f.v, u = 0, g = 1, E = 0, d = !0, T = x.segments, A < 0 && D.v.c)
            for (x.tLength < Math.abs(A) && (A = -Math.abs(A) % x.tLength), u = T.length - 1, S = T[u].points, g = S.length - 1; A < 0; )
              A += S[g].partialLength, g -= 1, g < 0 && (u -= 1, S = T[u].points, g = S.length - 1);
          S = T[u].points, y = S[g - 1], m = S[g], M = m.partialLength;
        }
        k = f.length, o = 0, p = 0;
        var G = e.finalSize * 1.2 * 0.714, L = !0, P, _, b, C, B;
        C = i.length;
        var F, z = -1, q, j, $, W = A, Y = u, Z = g, ie = -1, U, J, ee, Q, N, ne, he, ae, se = "", oe = this.defaultPropsArray, le;
        if (e.j === 2 || e.j === 1) {
          var K = 0, fe = 0, pe = e.j === 2 ? -0.5 : -1, te = 0, ce = !0;
          for (c = 0; c < k; c += 1)
            if (f[c].n) {
              for (K && (K += fe); te < c; )
                f[te].animatorJustifyOffset = K, te += 1;
              K = 0, ce = !0;
            } else {
              for (b = 0; b < C; b += 1)
                P = i[b].a, P.t.propType && (ce && e.j === 2 && (fe += P.t.v * pe), _ = i[b].s, F = _.getMult(f[c].anIndexes[b], s.a[b].s.totalChars), F.length ? K += P.t.v * F[0] * pe : K += P.t.v * F * pe);
              ce = !1;
            }
          for (K && (K += fe); te < c; )
            f[te].animatorJustifyOffset = K, te += 1;
        }
        for (c = 0; c < k; c += 1) {
          if (n.reset(), U = 1, f[c].n)
            o = 0, p += e.yOffset, p += L ? 1 : 0, A = W, L = !1, this._hasMaskedPath && (u = Y, g = Z, S = T[u].points, y = S[g - 1], m = S[g], M = m.partialLength, E = 0), se = "", ae = "", ne = "", le = "", oe = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (ie !== f[c].line) {
                switch (e.j) {
                  case 1:
                    A += I - e.lineWidths[f[c].line];
                    break;
                  case 2:
                    A += (I - e.lineWidths[f[c].line]) / 2;
                    break;
                }
                ie = f[c].line;
              }
              z !== f[c].ind && (f[z] && (A += f[z].extra), A += f[c].an / 2, z = f[c].ind), A += r[0] * f[c].an * 5e-3;
              var re = 0;
              for (b = 0; b < C; b += 1)
                P = i[b].a, P.p.propType && (_ = i[b].s, F = _.getMult(f[c].anIndexes[b], s.a[b].s.totalChars), F.length ? re += P.p.v[0] * F[0] : re += P.p.v[0] * F), P.a.propType && (_ = i[b].s, F = _.getMult(f[c].anIndexes[b], s.a[b].s.totalChars), F.length ? re += P.a.v[0] * F[0] : re += P.a.v[0] * F);
              for (d = !0, this._pathData.a.v && (A = f[0].an * 0.5 + (I - this._pathData.f.v - f[0].an * 0.5 - f[f.length - 1].an * 0.5) * z / (k - 1), A += this._pathData.f.v); d; )
                E + M >= A + re || !S ? (R = (A + re - E) / m.partialLength, j = y.point[0] + (m.point[0] - y.point[0]) * R, $ = y.point[1] + (m.point[1] - y.point[1]) * R, n.translate(-r[0] * f[c].an * 5e-3, -(r[1] * G) * 0.01), d = !1) : S && (E += m.partialLength, g += 1, g >= S.length && (g = 0, u += 1, T[u] ? S = T[u].points : D.v.c ? (g = 0, u = 0, S = T[u].points) : (E -= m.partialLength, S = null)), S && (y = m, m = S[g], M = m.partialLength));
              q = f[c].an / 2 - f[c].add, n.translate(-q, 0, 0);
            } else
              q = f[c].an / 2 - f[c].add, n.translate(-q, 0, 0), n.translate(-r[0] * f[c].an * 5e-3, -r[1] * G * 0.01, 0);
            for (b = 0; b < C; b += 1)
              P = i[b].a, P.t.propType && (_ = i[b].s, F = _.getMult(f[c].anIndexes[b], s.a[b].s.totalChars), (o !== 0 || e.j !== 0) && (this._hasMaskedPath ? F.length ? A += P.t.v * F[0] : A += P.t.v * F : F.length ? o += P.t.v * F[0] : o += P.t.v * F));
            for (e.strokeWidthAnim && (ee = e.sw || 0), e.strokeColorAnim && (e.sc ? J = [e.sc[0], e.sc[1], e.sc[2]] : J = [0, 0, 0]), e.fillColorAnim && e.fc && (Q = [e.fc[0], e.fc[1], e.fc[2]]), b = 0; b < C; b += 1)
              P = i[b].a, P.a.propType && (_ = i[b].s, F = _.getMult(f[c].anIndexes[b], s.a[b].s.totalChars), F.length ? n.translate(-P.a.v[0] * F[0], -P.a.v[1] * F[1], P.a.v[2] * F[2]) : n.translate(-P.a.v[0] * F, -P.a.v[1] * F, P.a.v[2] * F));
            for (b = 0; b < C; b += 1)
              P = i[b].a, P.s.propType && (_ = i[b].s, F = _.getMult(f[c].anIndexes[b], s.a[b].s.totalChars), F.length ? n.scale(1 + (P.s.v[0] - 1) * F[0], 1 + (P.s.v[1] - 1) * F[1], 1) : n.scale(1 + (P.s.v[0] - 1) * F, 1 + (P.s.v[1] - 1) * F, 1));
            for (b = 0; b < C; b += 1) {
              if (P = i[b].a, _ = i[b].s, F = _.getMult(f[c].anIndexes[b], s.a[b].s.totalChars), P.sk.propType && (F.length ? n.skewFromAxis(-P.sk.v * F[0], P.sa.v * F[1]) : n.skewFromAxis(-P.sk.v * F, P.sa.v * F)), P.r.propType && (F.length ? n.rotateZ(-P.r.v * F[2]) : n.rotateZ(-P.r.v * F)), P.ry.propType && (F.length ? n.rotateY(P.ry.v * F[1]) : n.rotateY(P.ry.v * F)), P.rx.propType && (F.length ? n.rotateX(P.rx.v * F[0]) : n.rotateX(P.rx.v * F)), P.o.propType && (F.length ? U += (P.o.v * F[0] - U) * F[0] : U += (P.o.v * F - U) * F), e.strokeWidthAnim && P.sw.propType && (F.length ? ee += P.sw.v * F[0] : ee += P.sw.v * F), e.strokeColorAnim && P.sc.propType)
                for (N = 0; N < 3; N += 1)
                  F.length ? J[N] += (P.sc.v[N] - J[N]) * F[0] : J[N] += (P.sc.v[N] - J[N]) * F;
              if (e.fillColorAnim && e.fc) {
                if (P.fc.propType)
                  for (N = 0; N < 3; N += 1)
                    F.length ? Q[N] += (P.fc.v[N] - Q[N]) * F[0] : Q[N] += (P.fc.v[N] - Q[N]) * F;
                P.fh.propType && (F.length ? Q = addHueToRGB(Q, P.fh.v * F[0]) : Q = addHueToRGB(Q, P.fh.v * F)), P.fs.propType && (F.length ? Q = addSaturationToRGB(Q, P.fs.v * F[0]) : Q = addSaturationToRGB(Q, P.fs.v * F)), P.fb.propType && (F.length ? Q = addBrightnessToRGB(Q, P.fb.v * F[0]) : Q = addBrightnessToRGB(Q, P.fb.v * F));
              }
            }
            for (b = 0; b < C; b += 1)
              P = i[b].a, P.p.propType && (_ = i[b].s, F = _.getMult(f[c].anIndexes[b], s.a[b].s.totalChars), this._hasMaskedPath ? F.length ? n.translate(0, P.p.v[1] * F[0], -P.p.v[2] * F[1]) : n.translate(0, P.p.v[1] * F, -P.p.v[2] * F) : F.length ? n.translate(P.p.v[0] * F[0], P.p.v[1] * F[1], -P.p.v[2] * F[2]) : n.translate(P.p.v[0] * F, P.p.v[1] * F, -P.p.v[2] * F));
            if (e.strokeWidthAnim && (ne = ee < 0 ? 0 : ee), e.strokeColorAnim && (he = "rgb(" + Math.round(J[0] * 255) + "," + Math.round(J[1] * 255) + "," + Math.round(J[2] * 255) + ")"), e.fillColorAnim && e.fc && (ae = "rgb(" + Math.round(Q[0] * 255) + "," + Math.round(Q[1] * 255) + "," + Math.round(Q[2] * 255) + ")"), this._hasMaskedPath) {
              if (n.translate(0, -e.ls), n.translate(0, r[1] * G * 0.01 + p, 0), this._pathData.p.v) {
                H = (m.point[1] - y.point[1]) / (m.point[0] - y.point[0]);
                var ue = Math.atan(H) * 180 / Math.PI;
                m.point[0] < y.point[0] && (ue += 180), n.rotate(-ue * Math.PI / 180);
              }
              n.translate(j, $, 0), A -= r[0] * f[c].an * 5e-3, f[c + 1] && z !== f[c + 1].ind && (A += f[c].an / 2, A += e.tr * 1e-3 * e.finalSize);
            } else {
              switch (n.translate(o, p, 0), e.ps && n.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                case 1:
                  n.translate(f[c].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[f[c].line]), 0, 0);
                  break;
                case 2:
                  n.translate(f[c].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[f[c].line]) / 2, 0, 0);
                  break;
              }
              n.translate(0, -e.ls), n.translate(q, 0, 0), n.translate(r[0] * f[c].an * 5e-3, r[1] * G * 0.01, 0), o += f[c].l + e.tr * 1e-3 * e.finalSize;
            }
            a === "html" ? se = n.toCSS() : a === "svg" ? se = n.to2dCSS() : oe = [n.props[0], n.props[1], n.props[2], n.props[3], n.props[4], n.props[5], n.props[6], n.props[7], n.props[8], n.props[9], n.props[10], n.props[11], n.props[12], n.props[13], n.props[14], n.props[15]], le = U;
          }
          l <= c ? (B = new LetterProps(le, ne, he, ae, se, oe), this.renderedLetters.push(B), l += 1, this.lettersChangedFlag = !0) : (B = this.renderedLetters[c], this.lettersChangedFlag = B.update(le, ne, he, ae, se, oe) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
    function ITextElement() {
    }
    ITextElement.prototype.initElement = function(e, t, r) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(e) {
      this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
    }, ITextElement.prototype.createPathShape = function(e, t) {
      var r, i = t.length, s, n = "";
      for (r = 0; r < i; r += 1)
        t[r].ty === "sh" && (s = t[r].ks.k, n += buildShapeString(s, s.i.length, !0, e));
      return n;
    }, ITextElement.prototype.updateDocumentData = function(e, t) {
      this.textProperty.updateDocumentData(e, t);
    }, ITextElement.prototype.canResizeFont = function(e) {
      this.textProperty.canResizeFont(e);
    }, ITextElement.prototype.setMinimumFontSize = function(e) {
      this.textProperty.setMinimumFontSize(e);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, i, s) {
      switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
        case 1:
          t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
          break;
        case 2:
          t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0);
          break;
      }
      t.translate(i, s, 0);
    }, ITextElement.prototype.buildColor = function(e) {
      return "rgb(" + Math.round(e[0] * 255) + "," + Math.round(e[1] * 255) + "," + Math.round(e[2] * 255) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    };
    var emptyShapeData = {
      shapes: []
    };
    function SVGTextLottieElement(e, t, r) {
      this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
      for (var t = 0, r = e.length, i = [], s = ""; t < r; )
        e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (i.push(s), s = "") : s += e[t], t += 1;
      return i.push(s), i;
    }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
      if (e.shapes && e.shapes.length) {
        var r = e.shapes[0];
        if (r.it) {
          var i = r.it[r.it.length - 1];
          i.s && (i.s.k[0] = t, i.s.k[1] = t);
        }
      }
      return e;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var e, t, r = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
      var i = this.globalData.fontManager.getFontByName(r.f);
      if (i.fClass)
        this.layerElement.setAttribute("class", i.fClass);
      else {
        this.layerElement.setAttribute("font-family", i.fFamily);
        var s = r.fWeight, n = r.fStyle;
        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s);
      }
      this.layerElement.setAttribute("aria-label", r.t);
      var a = r.l || [], l = !!this.globalData.fontManager.chars;
      t = a.length;
      var o, p = this.mHelper, c = "", k = this.data.singleShape, f = 0, x = 0, A = !0, m = r.tr * 1e-3 * r.finalSize;
      if (k && !l && !r.sz) {
        var E = this.textContainer, d = "start";
        switch (r.j) {
          case 1:
            d = "end";
            break;
          case 2:
            d = "middle";
            break;
          default:
            d = "start";
            break;
        }
        E.setAttribute("text-anchor", d), E.setAttribute("letter-spacing", m);
        var g = this.buildTextContents(r.finalText);
        for (t = g.length, x = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)
          o = this.textSpans[e].span || createNS("tspan"), o.textContent = g[e], o.setAttribute("x", 0), o.setAttribute("y", x), o.style.display = "inherit", E.appendChild(o), this.textSpans[e] || (this.textSpans[e] = {
            span: null,
            glyph: null
          }), this.textSpans[e].span = o, x += r.finalLineHeight;
        this.layerElement.appendChild(E);
      } else {
        var u = this.textSpans.length, y;
        for (e = 0; e < t; e += 1) {
          if (this.textSpans[e] || (this.textSpans[e] = {
            span: null,
            childSpan: null,
            glyph: null
          }), !l || !k || e === 0) {
            if (o = u > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), u <= e) {
              if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = o, l) {
                var S = createNS("g");
                o.appendChild(S), this.textSpans[e].childSpan = S;
              }
              this.textSpans[e].span = o, this.layerElement.appendChild(o);
            }
            o.style.display = "inherit";
          }
          if (p.reset(), k && (a[e].n && (f = -m, x += r.yOffset, x += A ? 1 : 0, A = !1), this.applyTextPropertiesToMatrix(r, p, a[e].line, f, x), f += a[e].l || 0, f += m), l) {
            y = this.globalData.fontManager.getCharData(r.finalText[e], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
            var T;
            if (y.t === 1)
              T = new SVGCompElement(y.data, this.globalData, this);
            else {
              var M = emptyShapeData;
              y.data && y.data.shapes && (M = this.buildShapeData(y.data, r.finalSize)), T = new SVGShapeElement(M, this.globalData, this);
            }
            if (this.textSpans[e].glyph) {
              var I = this.textSpans[e].glyph;
              this.textSpans[e].childSpan.removeChild(I.layerElement), I.destroy();
            }
            this.textSpans[e].glyph = T, T._debug = !0, T.prepareFrame(0), T.renderFrame(), this.textSpans[e].childSpan.appendChild(T.layerElement), y.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
          } else
            k && o.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), o.textContent = a[e].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        k && o && o.setAttribute("d", c);
      }
      for (; e < this.textSpans.length; )
        this.textSpans[e].span.style.display = "none", e += 1;
      this._sizeChanged = !0;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var e = this.layerElement.getBBox();
        this.bbox = {
          top: e.y,
          left: e.x,
          width: e.width,
          height: e.height
        };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var e, t = this.textSpans.length, r;
      for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < t; e += 1)
        r = this.textSpans[e].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var e, t, r = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
        t = i.length;
        var s, n, a;
        for (e = 0; e < t; e += 1)
          i[e].n || (s = r[e], n = this.textSpans[e].span, a = this.textSpans[e].glyph, a && a.renderFrame(), s._mdf.m && n.setAttribute("transform", s.m), s._mdf.o && n.setAttribute("opacity", s.o), s._mdf.sw && n.setAttribute("stroke-width", s.sw), s._mdf.sc && n.setAttribute("stroke", s.sc), s._mdf.fc && n.setAttribute("fill", s.fc));
      }
    };
    function ISolidElement(e, t, r) {
      this.initElement(e, t, r);
    }
    extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var e = createNS("rect");
      e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e);
    };
    function NullElement(e, t, r) {
      this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy();
    }
    NullElement.prototype.prepareFrame = function(e) {
      this.prepareProperties(e, !0);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
    function SVGRendererBase() {
    }
    extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
      return new NullElement(e, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(e) {
      return new SVGShapeElement(e, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(e) {
      return new SVGTextLottieElement(e, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(e) {
      return new IImageElement(e, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(e) {
      return new ISolidElement(e, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(e) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var t = this.globalData.defs;
      this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
      var r = createNS("clipPath"), i = createNS("rect");
      i.setAttribute("width", e.w), i.setAttribute("height", e.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
      var s = createElementID();
      r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var e, t = this.layers ? this.layers.length : 0;
      for (e = 0; e < t; e += 1)
        this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(e) {
      var t = 0, r = this.layers.length;
      for (t = 0; t < r; t += 1)
        if (this.layers[t].ind === e)
          return t;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(e) {
      var t = this.elements;
      if (!(t[e] || this.layers[e].ty === 99)) {
        t[e] = !0;
        var r = this.createItem(this.layers[e]);
        if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
          var i = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
          if (i === -1)
            return;
          if (!this.elements[i] || this.elements[i] === !0)
            this.buildItem(i), this.addPendingElement(r);
          else {
            var s = t[i], n = s.getMatte(this.layers[e].tt);
            r.setMatte(n);
          }
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var e = this.pendingElements.pop();
        if (e.checkParenting(), e.data.tt)
          for (var t = 0, r = this.elements.length; t < r; ) {
            if (this.elements[t] === e) {
              var i = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1, s = this.elements[i], n = s.getMatte(this.layers[t].tt);
              e.setMatte(n);
              break;
            }
            t += 1;
          }
      }
    }, SVGRendererBase.prototype.renderFrame = function(e) {
      if (!(this.renderedFrame === e || this.destroyed)) {
        e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
        var t, r = this.layers.length;
        for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)
          (this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
        if (this.globalData._mdf)
          for (t = 0; t < r; t += 1)
            (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
      var r = e.getBaseElement();
      if (r) {
        for (var i = 0, s; i < t; )
          this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
        s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function ICompElement() {
    }
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
      this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !t.progressiveLoad) && this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(e) {
      if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder)
          this.renderedFrame = e / this.data.sr;
        else {
          var t = this.tm.v;
          t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t;
        }
        var r, i = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)
          (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var e, t = this.layers.length;
      for (e = 0; e < t; e += 1)
        (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
    }, ICompElement.prototype.setElements = function(e) {
      this.elements = e;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var e, t = this.layers.length;
      for (e = 0; e < t; e += 1)
        this.elements[e] && this.elements[e].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function SVGCompElement(e, t, r) {
      this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
      return new SVGCompElement(e, this.globalData, this);
    };
    function SVGRenderer(e, t) {
      this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var r = "";
      if (t && t.title) {
        var i = createNS("title"), s = createElementID();
        i.setAttribute("id", s), i.textContent = t.title, this.svgElement.appendChild(i), r += s;
      }
      if (t && t.description) {
        var n = createNS("desc"), a = createElementID();
        n.setAttribute("id", a), n.textContent = t.description, this.svgElement.appendChild(n), r += " " + a;
      }
      r && this.svgElement.setAttribute("aria-labelledby", r);
      var l = createNS("defs");
      this.svgElement.appendChild(l);
      var o = createNS("g");
      this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
        preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: t && t.contentVisibility || "visible",
        progressiveLoad: t && t.progressiveLoad || !1,
        hideOnTransparent: !(t && t.hideOnTransparent === !1),
        viewBoxOnly: t && t.viewBoxOnly || !1,
        viewBoxSize: t && t.viewBoxSize || !1,
        className: t && t.className || "",
        id: t && t.id || "",
        focusable: t && t.focusable,
        filterSize: {
          width: t && t.filterSize && t.filterSize.width || "100%",
          height: t && t.filterSize && t.filterSize.height || "100%",
          x: t && t.filterSize && t.filterSize.x || "0%",
          y: t && t.filterSize && t.filterSize.y || "0%"
        },
        width: t && t.width,
        height: t && t.height,
        runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: l,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
      return new SVGCompElement(e, this.globalData, this);
    };
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    ShapeTransformManager.prototype = {
      addTransformSequence: function(t) {
        var r, i = t.length, s = "_";
        for (r = 0; r < i; r += 1)
          s += t[r].transform.key + "_";
        var n = this.sequences[s];
        return n || (n = {
          transforms: [].concat(t),
          finalTransform: new Matrix(),
          _mdf: !1
        }, this.sequences[s] = n, this.sequenceList.push(n)), n;
      },
      processSequence: function(t, r) {
        for (var i = 0, s = t.transforms.length, n = r; i < s && !r; ) {
          if (t.transforms[i].transform.mProps._mdf) {
            n = !0;
            break;
          }
          i += 1;
        }
        if (n)
          for (t.finalTransform.reset(), i = s - 1; i >= 0; i -= 1)
            t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
        t._mdf = n;
      },
      processSequences: function(t) {
        var r, i = this.sequenceList.length;
        for (r = 0; r < i; r += 1)
          this.processSequence(this.sequenceList[r], t);
      },
      getNewKey: function() {
        return this.transform_key_count += 1, "_" + this.transform_key_count;
      }
    };
    var lumaLoader = function() {
      var t = "__lottie_element_luma_buffer", r = null, i = null, s = null;
      function n() {
        var o = createNS("svg"), p = createNS("filter"), c = createNS("feColorMatrix");
        return p.setAttribute("id", t), c.setAttribute("type", "matrix"), c.setAttribute("color-interpolation-filters", "sRGB"), c.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), p.appendChild(c), o.appendChild(p), o.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o;
      }
      function a() {
        r || (s = n(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
      }
      function l(o) {
        return r || a(), r.width = o.width, r.height = o.height, i.filter = "url(#" + t + ")", r;
      }
      return {
        load: a,
        get: l
      };
    };
    function createCanvas(e, t) {
      if (featureSupport.offscreenCanvas)
        return new OffscreenCanvas(e, t);
      var r = createTag("canvas");
      return r.width = e, r.height = t, r;
    }
    var assetLoader = function() {
      return {
        loadLumaCanvas: lumaLoader.load,
        getLumaCanvas: lumaLoader.get,
        createCanvas
      };
    }(), registeredEffects = {};
    function CVEffects(e) {
      var t, r = e.data.ef ? e.data.ef.length : 0;
      this.filters = [];
      var i;
      for (t = 0; t < r; t += 1) {
        i = null;
        var s = e.data.ef[t].ty;
        if (registeredEffects[s]) {
          var n = registeredEffects[s].effect;
          i = new n(e.effectsManager.effectElements[t], e);
        }
        i && this.filters.push(i);
      }
      this.filters.length && e.addRenderableComponent(this);
    }
    CVEffects.prototype.renderFrame = function(e) {
      var t, r = this.filters.length;
      for (t = 0; t < r; t += 1)
        this.filters[t].renderFrame(e);
    }, CVEffects.prototype.getEffects = function(e) {
      var t, r = this.filters.length, i = [];
      for (t = 0; t < r; t += 1)
        this.filters[t].type === e && i.push(this.filters[t]);
      return i;
    };
    function registerEffect(e, t) {
      registeredEffects[e] = {
        effect: t
      };
    }
    function CVMaskElement(e, t) {
      this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var r, i = this.masksProperties.length, s = !1;
      for (r = 0; r < i; r += 1)
        this.masksProperties[r].mode !== "n" && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
      this.hasMasks = s, s && this.element.addRenderableComponent(this);
    }
    CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var e = this.element.finalTransform.mat, t = this.element.canvasContext, r, i = this.masksProperties.length, s, n, a;
        for (t.beginPath(), r = 0; r < i; r += 1)
          if (this.masksProperties[r].mode !== "n") {
            this.masksProperties[r].inv && (t.moveTo(0, 0), t.lineTo(this.element.globalData.compSize.w, 0), t.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), t.lineTo(0, this.element.globalData.compSize.h), t.lineTo(0, 0)), a = this.viewData[r].v, s = e.applyToPointArray(a.v[0][0], a.v[0][1], 0), t.moveTo(s[0], s[1]);
            var l, o = a._length;
            for (l = 1; l < o; l += 1)
              n = e.applyToTriplePoints(a.o[l - 1], a.i[l], a.v[l]), t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
            n = e.applyToTriplePoints(a.o[l - 1], a.i[0], a.v[0]), t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
          }
        this.element.globalData.renderer.save(!0), t.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    };
    function CVBaseElement() {
    }
    var operationsMap = {
      1: "source-in",
      2: "source-out",
      3: "source-in",
      4: "source-out"
    };
    CVBaseElement.prototype = {
      createElements: function() {
      },
      initRendererElement: function() {
      },
      createContainerElements: function() {
        if (this.data.tt >= 1) {
          this.buffers = [];
          var t = this.globalData.canvasContext, r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
          this.buffers.push(r);
          var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
          this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
        }
        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
      },
      createContent: function() {
      },
      setBlendMode: function() {
        var t = this.globalData;
        if (t.blendMode !== this.data.bm) {
          t.blendMode = this.data.bm;
          var r = getBlendMode(this.data.bm);
          t.canvasContext.globalCompositeOperation = r;
        }
      },
      createRenderableComponents: function() {
        this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
      },
      hideElement: function() {
        !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
      },
      showElement: function() {
        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
      },
      clearCanvas: function(t) {
        t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
      },
      prepareLayer: function() {
        if (this.data.tt >= 1) {
          var t = this.buffers[0], r = t.getContext("2d");
          this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
        }
      },
      exitLayer: function() {
        if (this.data.tt >= 1) {
          var t = this.buffers[1], r = t.getContext("2d");
          this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
          var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
          if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
            var s = assetLoader.getLumaCanvas(this.canvasContext.canvas), n = s.getContext("2d");
            n.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0);
          }
          this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
        }
      },
      renderFrame: function(t) {
        if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !t)) {
          this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
          var r = this.data.ty === 0;
          this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
        }
      },
      destroy: function() {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
      },
      mHelper: new Matrix()
    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
    function CVShapeData(e, t, r, i) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var s = 4;
      t.ty === "rc" ? s = 5 : t.ty === "el" ? s = 6 : t.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, s, e);
      var n, a = r.length, l;
      for (n = 0; n < a; n += 1)
        r[n].closed || (l = {
          transforms: i.addTransformSequence(r[n].transforms),
          trNodes: []
        }, this.styledShapes.push(l), r[n].elements.push(l));
    }
    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
    function CVShapeElement(e, t, r) {
      this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(e, t, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
      opacity: 1,
      _opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
    }, CVShapeElement.prototype.createStyleElement = function(e, t) {
      var r = {
        data: e,
        type: e.ty,
        preTransforms: this.transformsManager.addTransformSequence(t),
        transforms: [],
        elements: [],
        closed: e.hd === !0
      }, i = {};
      if (e.ty === "fl" || e.ty === "st" ? (i.c = PropertyFactory.getProp(this, e.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (e.ty === "gf" || e.ty === "gs") && (i.s = PropertyFactory.getProp(this, e.s, 1, null, this), i.e = PropertyFactory.getProp(this, e.e, 1, null, this), i.h = PropertyFactory.getProp(this, e.h || {
        k: 0
      }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, e.a || {
        k: 0
      }, 0, degToRads, this), i.g = new GradientProperty(this, e.g, this)), i.o = PropertyFactory.getProp(this, e.o, 0, 0.01, this), e.ty === "st" || e.ty === "gs") {
        if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), i.w = PropertyFactory.getProp(this, e.w, 0, null, this), i.w.k || (r.wi = i.w.v), e.d) {
          var s = new DashProperty(this, e.d, "canvas", this);
          i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
        }
      } else
        r.r = e.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(r), i.style = r, i;
    }, CVShapeElement.prototype.createGroupElement = function() {
      var e = {
        it: [],
        prevViewData: []
      };
      return e;
    }, CVShapeElement.prototype.createTransformElement = function(e) {
      var t = {
        transform: {
          opacity: 1,
          _opMdf: !1,
          key: this.transformsManager.getNewKey(),
          op: PropertyFactory.getProp(this, e.o, 0, 0.01, this),
          mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
        }
      };
      return t;
    }, CVShapeElement.prototype.createShapeElement = function(e) {
      var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
      return this.shapes.push(t), this.addShapeToModifiers(t), t;
    }, CVShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var e, t = this.itemsData.length;
      for (e = 0; e < t; e += 1)
        this.prevViewData[e] = this.itemsData[e];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1)
        this.dynamicProperties[e].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
      var t, r = this.stylesList.length;
      for (t = 0; t < r; t += 1)
        this.stylesList[t].closed || this.stylesList[t].transforms.push(e);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var e, t = this.stylesList.length;
      for (e = 0; e < t; e += 1)
        this.stylesList[e].closed || this.stylesList[e].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1)
        e[t].closed = !0;
    }, CVShapeElement.prototype.searchShapes = function(e, t, r, i, s) {
      var n, a = e.length - 1, l, o, p = [], c = [], k, f, x, A = [].concat(s);
      for (n = a; n >= 0; n -= 1) {
        if (k = this.searchProcessedElement(e[n]), k ? t[n] = r[k - 1] : e[n]._shouldRender = i, e[n].ty === "fl" || e[n].ty === "st" || e[n].ty === "gf" || e[n].ty === "gs")
          k ? t[n].style.closed = !1 : t[n] = this.createStyleElement(e[n], A), p.push(t[n].style);
        else if (e[n].ty === "gr") {
          if (!k)
            t[n] = this.createGroupElement(e[n]);
          else
            for (o = t[n].it.length, l = 0; l < o; l += 1)
              t[n].prevViewData[l] = t[n].it[l];
          this.searchShapes(e[n].it, t[n].it, t[n].prevViewData, i, A);
        } else
          e[n].ty === "tr" ? (k || (x = this.createTransformElement(e[n]), t[n] = x), A.push(t[n]), this.addTransformToStyleList(t[n])) : e[n].ty === "sh" || e[n].ty === "rc" || e[n].ty === "el" || e[n].ty === "sr" ? k || (t[n] = this.createShapeElement(e[n])) : e[n].ty === "tm" || e[n].ty === "rd" || e[n].ty === "pb" || e[n].ty === "zz" || e[n].ty === "op" ? (k ? (f = t[n], f.closed = !1) : (f = ShapeModifiers.getModifier(e[n].ty), f.init(this, e[n]), t[n] = f, this.shapeModifiers.push(f)), c.push(f)) : e[n].ty === "rp" && (k ? (f = t[n], f.closed = !0) : (f = ShapeModifiers.getModifier(e[n].ty), t[n] = f, f.init(this, e, n, t), this.shapeModifiers.push(f), i = !1), c.push(f));
        this.addProcessedElement(e[n], n + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(p), a = c.length, n = 0; n < a; n += 1)
        c[n].closed = !0;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
    }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
      (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0);
    }, CVShapeElement.prototype.drawLayer = function() {
      var e, t = this.stylesList.length, r, i, s, n, a, l, o = this.globalData.renderer, p = this.globalData.canvasContext, c, k;
      for (e = 0; e < t; e += 1)
        if (k = this.stylesList[e], c = k.type, !((c === "st" || c === "gs") && k.wi === 0 || !k.data._shouldRender || k.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
          for (o.save(), a = k.elements, c === "st" || c === "gs" ? (o.ctxStrokeStyle(c === "st" ? k.co : k.grd), o.ctxLineWidth(k.wi), o.ctxLineCap(k.lc), o.ctxLineJoin(k.lj), o.ctxMiterLimit(k.ml || 0)) : o.ctxFillStyle(c === "fl" ? k.co : k.grd), o.ctxOpacity(k.coOp), c !== "st" && c !== "gs" && p.beginPath(), o.ctxTransform(k.preTransforms.finalTransform.props), i = a.length, r = 0; r < i; r += 1) {
            for ((c === "st" || c === "gs") && (p.beginPath(), k.da && (p.setLineDash(k.da), p.lineDashOffset = k.do)), l = a[r].trNodes, n = l.length, s = 0; s < n; s += 1)
              l[s].t === "m" ? p.moveTo(l[s].p[0], l[s].p[1]) : l[s].t === "c" ? p.bezierCurveTo(l[s].pts[0], l[s].pts[1], l[s].pts[2], l[s].pts[3], l[s].pts[4], l[s].pts[5]) : p.closePath();
            (c === "st" || c === "gs") && (o.ctxStroke(), k.da && p.setLineDash(this.dashResetter));
          }
          c !== "st" && c !== "gs" && this.globalData.renderer.ctxFill(k.r), o.restore();
        }
    }, CVShapeElement.prototype.renderShape = function(e, t, r, i) {
      var s, n = t.length - 1, a;
      for (a = e, s = n; s >= 0; s -= 1)
        t[s].ty === "tr" ? (a = r[s].transform, this.renderShapeTransform(e, a)) : t[s].ty === "sh" || t[s].ty === "el" || t[s].ty === "rc" || t[s].ty === "sr" ? this.renderPath(t[s], r[s]) : t[s].ty === "fl" ? this.renderFill(t[s], r[s], a) : t[s].ty === "st" ? this.renderStroke(t[s], r[s], a) : t[s].ty === "gf" || t[s].ty === "gs" ? this.renderGradientFill(t[s], r[s], a) : t[s].ty === "gr" ? this.renderShape(a, t[s].it, r[s].it) : t[s].ty;
      i && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
      if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
        var r = e.trNodes, i = t.paths, s, n, a, l = i._length;
        r.length = 0;
        var o = e.transforms.finalTransform;
        for (a = 0; a < l; a += 1) {
          var p = i.shapes[a];
          if (p && p.v) {
            for (n = p._length, s = 1; s < n; s += 1)
              s === 1 && r.push({
                t: "m",
                p: o.applyToPointArray(p.v[0][0], p.v[0][1], 0)
              }), r.push({
                t: "c",
                pts: o.applyToTriplePoints(p.o[s - 1], p.i[s], p.v[s])
              });
            n === 1 && r.push({
              t: "m",
              p: o.applyToPointArray(p.v[0][0], p.v[0][1], 0)
            }), p.c && n && (r.push({
              t: "c",
              pts: o.applyToTriplePoints(p.o[s - 1], p.i[0], p.v[0])
            }), r.push({
              t: "z"
            }));
          }
        }
        e.trNodes = r;
      }
    }, CVShapeElement.prototype.renderPath = function(e, t) {
      if (e.hd !== !0 && e._shouldRender) {
        var r, i = t.styledShapes.length;
        for (r = 0; r < i; r += 1)
          this.renderStyledShape(t.styledShapes[r], t.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(e, t, r) {
      var i = t.style;
      (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
      var i = t.style, s;
      if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
        var n = this.globalData.canvasContext, a = t.s.v, l = t.e.v;
        if (e.t === 1)
          s = n.createLinearGradient(a[0], a[1], l[0], l[1]);
        else {
          var o = Math.sqrt(Math.pow(a[0] - l[0], 2) + Math.pow(a[1] - l[1], 2)), p = Math.atan2(l[1] - a[1], l[0] - a[0]), c = t.h.v;
          c >= 1 ? c = 0.99 : c <= -1 && (c = -0.99);
          var k = o * c, f = Math.cos(p + t.a.v) * k + a[0], x = Math.sin(p + t.a.v) * k + a[1];
          s = n.createRadialGradient(f, x, 0, a[0], a[1], o);
        }
        var A, m = e.g.p, E = t.g.c, d = 1;
        for (A = 0; A < m; A += 1)
          t.g._hasOpacity && t.g._collapsable && (d = t.g.o[A * 2 + 1]), s.addColorStop(E[A * 4] / 100, "rgba(" + E[A * 4 + 1] + "," + E[A * 4 + 2] + "," + E[A * 4 + 3] + "," + d + ")");
        i.grd = s;
      }
      i.coOp = t.o.v * r.opacity;
    }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
      var i = t.style, s = t.d;
      s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (i.wi = t.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    };
    function CVTextElement(e, t, r) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
        fill: "rgba(0,0,0,0)",
        stroke: "rgba(0,0,0,0)",
        sWidth: 0,
        fValue: ""
      }, this.initElement(e, t, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var e = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
      var t = !1;
      e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
      var r = !1;
      e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
      var i = this.globalData.fontManager.getFontByName(e.f), s, n, a = e.l, l = this.mHelper;
      this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, n = e.finalText.length;
      var o, p, c, k, f, x, A, m, E, d, g = this.data.singleShape, u = e.tr * 1e-3 * e.finalSize, y = 0, S = 0, T = !0, M = 0;
      for (s = 0; s < n; s += 1) {
        o = this.globalData.fontManager.getCharData(e.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily), p = o && o.data || {}, l.reset(), g && a[s].n && (y = -u, S += e.yOffset, S += T ? 1 : 0, T = !1), f = p.shapes ? p.shapes[0].it : [], A = f.length, l.scale(e.finalSize / 100, e.finalSize / 100), g && this.applyTextPropertiesToMatrix(e, l, a[s].line, y, S), E = createSizedArray(A - 1);
        var I = 0;
        for (x = 0; x < A; x += 1)
          if (f[x].ty === "sh") {
            for (k = f[x].ks.k.i.length, m = f[x].ks.k, d = [], c = 1; c < k; c += 1)
              c === 1 && d.push(l.applyToX(m.v[0][0], m.v[0][1], 0), l.applyToY(m.v[0][0], m.v[0][1], 0)), d.push(l.applyToX(m.o[c - 1][0], m.o[c - 1][1], 0), l.applyToY(m.o[c - 1][0], m.o[c - 1][1], 0), l.applyToX(m.i[c][0], m.i[c][1], 0), l.applyToY(m.i[c][0], m.i[c][1], 0), l.applyToX(m.v[c][0], m.v[c][1], 0), l.applyToY(m.v[c][0], m.v[c][1], 0));
            d.push(l.applyToX(m.o[c - 1][0], m.o[c - 1][1], 0), l.applyToY(m.o[c - 1][0], m.o[c - 1][1], 0), l.applyToX(m.i[0][0], m.i[0][1], 0), l.applyToY(m.i[0][0], m.i[0][1], 0), l.applyToX(m.v[0][0], m.v[0][1], 0), l.applyToY(m.v[0][0], m.v[0][1], 0)), E[I] = d, I += 1;
          }
        g && (y += a[s].l, y += u), this.textSpans[M] ? this.textSpans[M].elem = E : this.textSpans[M] = {
          elem: E
        }, M += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var e = this.canvasContext;
      e.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var t, r, i, s, n, a, l = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
      r = o.length;
      var p, c = null, k = null, f = null, x, A, m = this.globalData.renderer;
      for (t = 0; t < r; t += 1)
        if (!o[t].n) {
          if (p = l[t], p && (m.save(), m.ctxTransform(p.p), m.ctxOpacity(p.o)), this.fill) {
            for (p && p.fc ? c !== p.fc && (m.ctxFillStyle(p.fc), c = p.fc) : c !== this.values.fill && (c = this.values.fill, m.ctxFillStyle(this.values.fill)), x = this.textSpans[t].elem, s = x.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
              for (A = x[i], a = A.length, this.globalData.canvasContext.moveTo(A[0], A[1]), n = 2; n < a; n += 6)
                this.globalData.canvasContext.bezierCurveTo(A[n], A[n + 1], A[n + 2], A[n + 3], A[n + 4], A[n + 5]);
            this.globalData.canvasContext.closePath(), m.ctxFill();
          }
          if (this.stroke) {
            for (p && p.sw ? f !== p.sw && (f = p.sw, m.ctxLineWidth(p.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, m.ctxLineWidth(this.values.sWidth)), p && p.sc ? k !== p.sc && (k = p.sc, m.ctxStrokeStyle(p.sc)) : k !== this.values.stroke && (k = this.values.stroke, m.ctxStrokeStyle(this.values.stroke)), x = this.textSpans[t].elem, s = x.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
              for (A = x[i], a = A.length, this.globalData.canvasContext.moveTo(A[0], A[1]), n = 2; n < a; n += 6)
                this.globalData.canvasContext.bezierCurveTo(A[n], A[n + 1], A[n + 2], A[n + 3], A[n + 4], A[n + 5]);
            this.globalData.canvasContext.closePath(), m.ctxStroke();
          }
          p && this.globalData.renderer.restore();
        }
    };
    function CVImageElement(e, t, r) {
      this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var e = createTag("canvas");
        e.width = this.assetData.w, e.height = this.assetData.h;
        var t = e.getContext("2d"), r = this.img.width, i = this.img.height, s = r / i, n = this.assetData.w / this.assetData.h, a, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        s > n && o === "xMidYMid slice" || s < n && o !== "xMidYMid slice" ? (l = i, a = l * n) : (a = r, l = a / n), t.drawImage(this.img, (r - a) / 2, (i - l) / 2, a, l, 0, 0, this.assetData.w, this.assetData.h), this.img = e;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    };
    function CVSolidElement(e, t, r) {
      this.initElement(e, t, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    };
    function CanvasRendererBase() {
    }
    extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
      return new CVShapeElement(e, this.globalData, this);
    }, CanvasRendererBase.prototype.createText = function(e) {
      return new CVTextElement(e, this.globalData, this);
    }, CanvasRendererBase.prototype.createImage = function(e) {
      return new CVImageElement(e, this.globalData, this);
    }, CanvasRendererBase.prototype.createSolid = function(e) {
      return new CVSolidElement(e, this.globalData, this);
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
      e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13]);
    }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
      this.canvasContext.globalAlpha *= e < 0 ? 0 : e;
    }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
      this.canvasContext.fillStyle = e;
    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
      this.canvasContext.strokeStyle = e;
    }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
      this.canvasContext.lineWidth = e;
    }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
      this.canvasContext.lineCap = e;
    }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
      this.canvasContext.lineJoin = e;
    }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
      this.canvasContext.miterLimit = e;
    }, CanvasRendererBase.prototype.ctxFill = function(e) {
      this.canvasContext.fill(e);
    }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, i) {
      this.canvasContext.fillRect(e, t, r, i);
    }, CanvasRendererBase.prototype.ctxStroke = function() {
      this.canvasContext.stroke();
    }, CanvasRendererBase.prototype.reset = function() {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      this.contextData.reset();
    }, CanvasRendererBase.prototype.save = function() {
      this.canvasContext.save();
    }, CanvasRendererBase.prototype.restore = function(e) {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e);
    }, CanvasRendererBase.prototype.configAnimation = function(e) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var t = this.animationItem.container.style;
        t.width = "100%", t.height = "100%";
        var r = "0px 0px 0px";
        t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else
        this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
        w: e.w,
        h: e.h,
        sx: 0,
        sy: 0,
        tx: 0,
        ty: 0
      }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize();
    }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
      this.reset();
      var r, i;
      e ? (r = e, i = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
      var s, n;
      if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var a = this.renderConfig.preserveAspectRatio.split(" "), l = a[1] || "meet", o = a[0] || "xMidYMid", p = o.substr(0, 4), c = o.substr(4);
        s = r / i, n = this.transformCanvas.w / this.transformCanvas.h, n > s && l === "meet" || n < s && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), p === "xMid" && (n < s && l === "meet" || n > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : p === "xMax" && (n < s && l === "meet" || n > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, c === "YMid" && (n > s && l === "meet" || n < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : c === "YMax" && (n > s && l === "meet" || n < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
      } else
        this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
    }, CanvasRendererBase.prototype.destroy = function() {
      this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
      var e, t = this.layers ? this.layers.length : 0;
      for (e = t - 1; e >= 0; e -= 1)
        this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
    }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
      if (!(this.renderedFrame === e && this.renderConfig.clearCanvas === !0 && !t || this.destroyed || e === -1)) {
        this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
        var r, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(e), r = i - 1; r >= 0; r -= 1)
          (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)
            (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
          this.renderConfig.clearCanvas !== !0 && this.restore();
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(e) {
      var t = this.elements;
      if (!(t[e] || this.layers[e].ty === 99)) {
        var r = this.createItem(this.layers[e], this, this.globalData);
        t[e] = r, r.initExpressions();
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var e = this.pendingElements.pop();
        e.checkParenting();
      }
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    };
    function CanvasContext() {
      this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function CVContextData() {
      this.stack = [], this.cArrPos = 0, this.cTr = new Matrix();
      var e, t = 15;
      for (e = 0; e < t; e += 1) {
        var r = new CanvasContext();
        this.stack[e] = r;
      }
      this._length = t, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    CVContextData.prototype.duplicate = function() {
      var e = this._length * 2, t = 0;
      for (t = this._length; t < e; t += 1)
        this.stack[t] = new CanvasContext();
      this._length = e;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, CVContextData.prototype.restore = function(e) {
      this.cArrPos -= 1;
      var t = this.stack[this.cArrPos], r = t.transform, i, s = this.cTr.props;
      for (i = 0; i < 16; i += 1)
        s[i] = r[i];
      if (e) {
        this.nativeContext.restore();
        var n = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit;
      }
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (e || t.opacity !== -1 && this.currentOpacity !== t.opacity) && (this.nativeContext.globalAlpha = t.opacity, this.currentOpacity = t.opacity), this.currentFillStyle = t.fillStyle, this.currentStrokeStyle = t.strokeStyle, this.currentLineWidth = t.lineWidth, this.currentLineCap = t.lineCap, this.currentLineJoin = t.lineJoin, this.currentMiterLimit = t.miterLimit;
    }, CVContextData.prototype.save = function(e) {
      e && this.nativeContext.save();
      var t = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var r = this.stack[this.cArrPos], i;
      for (i = 0; i < 16; i += 1)
        r.transform[i] = t[i];
      this.cArrPos += 1;
      var s = this.stack[this.cArrPos];
      s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit;
    }, CVContextData.prototype.setOpacity = function(e) {
      this.stack[this.cArrPos].opacity = e;
    }, CVContextData.prototype.setContext = function(e) {
      this.nativeContext = e;
    }, CVContextData.prototype.fillStyle = function(e) {
      this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e);
    }, CVContextData.prototype.strokeStyle = function(e) {
      this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e);
    }, CVContextData.prototype.lineWidth = function(e) {
      this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e);
    }, CVContextData.prototype.lineCap = function(e) {
      this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e);
    }, CVContextData.prototype.lineJoin = function(e) {
      this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e);
    }, CVContextData.prototype.miterLimit = function(e) {
      this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e);
    }, CVContextData.prototype.transform = function(e) {
      this.transformMat.cloneFromProps(e);
      var t = this.cTr;
      this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
      var r = t.props;
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
    }, CVContextData.prototype.opacity = function(e) {
      var t = this.stack[this.cArrPos].opacity;
      t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t);
    }, CVContextData.prototype.fill = function(e) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e);
    }, CVContextData.prototype.fillRect = function(e, t, r, i) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, i);
    }, CVContextData.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    };
    function CVCompElement(e, t, r) {
      this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var e = this.canvasContext;
      e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip();
      var t, r = this.layers.length;
      for (t = r - 1; t >= 0; t -= 1)
        (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var e, t = this.layers.length;
      for (e = t - 1; e >= 0; e -= 1)
        this.elements[e] && this.elements[e].destroy();
      this.layers = null, this.elements = null;
    }, CVCompElement.prototype.createComp = function(e) {
      return new CVCompElement(e, this.globalData, this);
    };
    function CanvasRenderer(e, t) {
      this.animationItem = e, this.renderConfig = {
        clearCanvas: t && t.clearCanvas !== void 0 ? t.clearCanvas : !0,
        context: t && t.context || null,
        progressiveLoad: t && t.progressiveLoad || !1,
        preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: t && t.contentVisibility || "visible",
        className: t && t.className || "",
        id: t && t.id || "",
        runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
      }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
        frameNum: -1,
        _mdf: !1,
        renderConfig: this.renderConfig,
        currentGlobalAlpha: -1
      }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
      return new CVCompElement(e, this.globalData, this);
    };
    function HBaseElement() {
    }
    HBaseElement.prototype = {
      checkBlendMode: function() {
      },
      initRendererElement: function() {
        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
      },
      createContainerElements: function() {
        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function() {
        var t = this.transformedElement ? this.transformedElement.style : {};
        if (this.finalTransform._matMdf) {
          var r = this.finalTransform.mat.toCSS();
          t.transform = r, t.webkitTransform = r;
        }
        this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
      },
      renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
      },
      destroy: function() {
        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData);
      },
      addEffects: function() {
      },
      setMatte: function() {
      }
    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
    function HSolidElement(e, t, r) {
      this.initElement(e, t, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var e;
      this.data.hasMask ? (e = createNS("rect"), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (e = createTag("div"), e.style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e);
    };
    function HShapeElement(e, t, r) {
      this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      };
    }
    extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var e;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask)
        this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
      else {
        e = createNS("svg");
        var t = this.comp.data ? this.comp.data : this.globalData.compSize;
        e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e;
    }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
      var r, i = e.length;
      for (r = 0; r < i; r += 1)
        t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
      return t;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
      var r = e.sh.v, i = e.transformers, s, n = r._length, a, l, o, p;
      if (!(n <= 1)) {
        for (s = 0; s < n - 1; s += 1)
          a = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), p = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(a, l, o, p, t);
        r.c && (a = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), p = this.getTransformedPoint(i, r.v[0]), this.checkBounds(a, l, o, p, t));
      }
    }, HShapeElement.prototype.checkBounds = function(e, t, r, i, s) {
      this.getBoundsOfCurve(e, t, r, i);
      var n = this.shapeBoundingBox;
      s.x = bmMin(n.left, s.x), s.xMax = bmMax(n.right, s.xMax), s.y = bmMin(n.top, s.y), s.yMax = bmMax(n.bottom, s.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, HShapeElement.prototype.tempBoundingBox = {
      x: 0,
      xMax: 0,
      y: 0,
      yMax: 0,
      width: 0,
      height: 0
    }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, i) {
      for (var s = [[e[0], i[0]], [e[1], i[1]]], n, a, l, o, p, c, k, f = 0; f < 2; ++f)
        a = 6 * e[f] - 12 * t[f] + 6 * r[f], n = -3 * e[f] + 9 * t[f] - 9 * r[f] + 3 * i[f], l = 3 * t[f] - 3 * e[f], a |= 0, n |= 0, l |= 0, n === 0 && a === 0 || (n === 0 ? (o = -l / a, o > 0 && o < 1 && s[f].push(this.calculateF(o, e, t, r, i, f))) : (p = a * a - 4 * l * n, p >= 0 && (c = (-a + bmSqrt(p)) / (2 * n), c > 0 && c < 1 && s[f].push(this.calculateF(c, e, t, r, i, f)), k = (-a - bmSqrt(p)) / (2 * n), k > 0 && k < 1 && s[f].push(this.calculateF(k, e, t, r, i, f)))));
      this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1]);
    }, HShapeElement.prototype.calculateF = function(e, t, r, i, s, n) {
      return bmPow(1 - e, 3) * t[n] + 3 * bmPow(1 - e, 2) * e * r[n] + 3 * (1 - e) * bmPow(e, 2) * i[n] + bmPow(e, 3) * s[n];
    }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
      var r, i = e.length;
      for (r = 0; r < i; r += 1)
        e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t);
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
      var r = 0;
      if (e.keyframes) {
        for (var i = 0; i < e.keyframes.length; i += 1) {
          var s = e.keyframes[i].s;
          s > r && (r = s);
        }
        r *= e.mult;
      } else
        r = e.v * e.mult;
      t.x -= r, t.xMax += r, t.y -= r, t.yMax += r;
    }, HShapeElement.prototype.currentBoxContains = function(e) {
      return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var e = this.tempBoundingBox, t = 999999;
        if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e))
          return;
        var r = !1;
        if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
          this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var i = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          i.transform = s, i.webkitTransform = s;
        }
      }
    };
    function HTextElement(e, t, r) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var e = createNS("g");
        this.maskedElement.appendChild(e), this.innerElem = e;
      } else
        this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var e = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
      var t = this.innerElem.style, r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
      t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
      var i = this.globalData.fontManager.getFontByName(e.f);
      if (!this.globalData.fontManager.chars)
        if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", i.fClass)
          this.innerElem.className = i.fClass;
        else {
          t.fontFamily = i.fFamily;
          var s = e.fWeight, n = e.fStyle;
          t.fontStyle = n, t.fontWeight = s;
        }
      var a, l, o = e.l;
      l = o.length;
      var p, c, k, f = this.mHelper, x, A = "", m = 0;
      for (a = 0; a < l; a += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[m] ? p = this.textPaths[m] : (p = createNS("path"), p.setAttribute("stroke-linecap", lineCapEnum[1]), p.setAttribute("stroke-linejoin", lineJoinEnum[2]), p.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? (c = this.textSpans[m], k = c.children[0]) : (c = createTag("div"), c.style.lineHeight = 0, k = createNS("svg"), k.appendChild(p), styleDiv(c)))) : this.isMasked ? p = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (c = this.textSpans[m], p = this.textPaths[m]) : (c = createTag("span"), styleDiv(c), p = createTag("span"), styleDiv(p), c.appendChild(p)), this.globalData.fontManager.chars) {
          var E = this.globalData.fontManager.getCharData(e.finalText[a], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily), d;
          if (E ? d = E.data : d = null, f.reset(), d && d.shapes && d.shapes.length && (x = d.shapes[0].it, f.scale(e.finalSize / 100, e.finalSize / 100), A = this.createPathShape(f, x), p.setAttribute("d", A)), this.isMasked)
            this.innerElem.appendChild(p);
          else {
            if (this.innerElem.appendChild(c), d && d.shapes) {
              document.body.appendChild(k);
              var g = k.getBBox();
              k.setAttribute("width", g.width + 2), k.setAttribute("height", g.height + 2), k.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2));
              var u = k.style, y = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)";
              u.transform = y, u.webkitTransform = y, o[a].yOffset = g.y - 1;
            } else
              k.setAttribute("width", 1), k.setAttribute("height", 1);
            c.appendChild(k);
          }
        } else if (p.textContent = o[a].val, p.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
          this.innerElem.appendChild(p);
        else {
          this.innerElem.appendChild(c);
          var S = p.style, T = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
          S.transform = T, S.webkitTransform = T;
        }
        this.isMasked ? this.textSpans[m] = p : this.textSpans[m] = c, this.textSpans[m].style.display = "block", this.textPaths[m] = p, m += 1;
      }
      for (; m < this.textSpans.length; )
        this.textSpans[m].style.display = "none", m += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var e;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag)
          return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
          var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          e.transform = t, e.webkitTransform = t;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
        var r, i, s = 0, n = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
        i = a.length;
        var l, o, p;
        for (r = 0; r < i; r += 1)
          a[r].n ? s += 1 : (o = this.textSpans[r], p = this.textPaths[r], l = n[s], s += 1, l._mdf.m && (this.isMasked ? o.setAttribute("transform", l.m) : (o.style.webkitTransform = l.m, o.style.transform = l.m)), o.style.opacity = l.o, l.sw && l._mdf.sw && p.setAttribute("stroke-width", l.sw), l.sc && l._mdf.sc && p.setAttribute("stroke", l.sc), l.fc && l._mdf.fc && (p.setAttribute("fill", l.fc), p.style.color = l.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var c = this.innerElem.getBBox();
          this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height));
          var k = 1;
          if (this.currentBBox.w !== c.width + k * 2 || this.currentBBox.h !== c.height + k * 2 || this.currentBBox.x !== c.x - k || this.currentBBox.y !== c.y - k) {
            this.currentBBox.w = c.width + k * 2, this.currentBBox.h = c.height + k * 2, this.currentBBox.x = c.x - k, this.currentBBox.y = c.y - k, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
            var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            e.transform = f, e.webkitTransform = f;
          }
        }
      }
    };
    function HCameraElement(e, t, r) {
      this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
      var i = PropertyFactory.getProp;
      if (this.pe = i(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = i(this, e.ks.p.x, 1, 0, this), this.py = i(this, e.ks.p.y, 1, 0, this), this.pz = i(this, e.ks.p.z, 1, 0, this)) : this.p = i(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
        var s, n = e.ks.or.k.length;
        for (s = 0; s < n; s += 1)
          e.ks.or.k[s].to = null, e.ks.or.k[s].ti = null;
      }
      this.or = i(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, e.ks.rx, 0, degToRads, this), this.ry = i(this, e.ks.ry, 0, degToRads, this), this.rz = i(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = {
        mProp: this
      };
    }
    extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var e, t = this.comp.threeDElements.length, r, i, s;
      for (e = 0; e < t; e += 1)
        if (r = this.comp.threeDElements[e], r.type === "3d") {
          i = r.perspectiveElem.style, s = r.container.style;
          var n = this.pe.v + "px", a = "0px 0px 0px", l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          i.perspective = n, i.webkitPerspective = n, s.transformOrigin = a, s.mozTransformOrigin = a, s.webkitTransformOrigin = a, i.transform = l, i.webkitTransform = l;
        }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var e = this._isFirstFrame, t, r;
      if (this.hierarchy)
        for (r = this.hierarchy.length, t = 0; t < r; t += 1)
          e = this.hierarchy[t].finalTransform.mProp._mdf || e;
      if (e || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy)
          for (r = this.hierarchy.length - 1, t = r; t >= 0; t -= 1) {
            var i = this.hierarchy[t].finalTransform.mProp;
            this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
          }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var s;
          this.p ? s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : s = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var n = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), a = [s[0] / n, s[1] / n, s[2] / n], l = Math.sqrt(a[2] * a[2] + a[0] * a[0]), o = Math.atan2(a[1], l), p = Math.atan2(a[0], -a[2]);
          this.mat.rotateY(p).rotateX(-o);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var c = !this._prevMat.equals(this.mat);
        if ((c || this.pe._mdf) && this.comp.threeDElements) {
          r = this.comp.threeDElements.length;
          var k, f, x;
          for (t = 0; t < r; t += 1)
            if (k = this.comp.threeDElements[t], k.type === "3d") {
              if (c) {
                var A = this.mat.toCSS();
                x = k.container.style, x.transform = A, x.webkitTransform = A;
              }
              this.pe._mdf && (f = k.perspectiveElem.style, f.perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px");
            }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = !1;
    }, HCameraElement.prototype.prepareFrame = function(e) {
      this.prepareProperties(e, !0);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    };
    function HImageElement(e, t, r) {
      this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var e = this.globalData.getAssetsPath(this.assetData), t = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    };
    function HybridRendererBase(e, t) {
      this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: t && t.className || "",
        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(t && t.hideOnTransparent === !1),
        filterSize: {
          width: t && t.filterSize && t.filterSize.width || "400%",
          height: t && t.filterSize && t.filterSize.height || "400%",
          x: t && t.filterSize && t.filterSize.x || "-100%",
          y: t && t.filterSize && t.filterSize.y || "-100%"
        }
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var e = this.pendingElements.pop();
        e.checkParenting();
      }
    }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
      var r = e.getBaseElement();
      if (r) {
        var i = this.layers[t];
        if (!i.ddd || !this.supports3d)
          if (this.threeDElements)
            this.addTo3dContainer(r, t);
          else {
            for (var s = 0, n, a, l; s < t; )
              this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (a = this.elements[s], l = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement(), n = l || n), s += 1;
            n ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, n) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r);
          }
        else
          this.addTo3dContainer(r, t);
      }
    }, HybridRendererBase.prototype.createShape = function(e) {
      return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this);
    }, HybridRendererBase.prototype.createText = function(e) {
      return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this);
    }, HybridRendererBase.prototype.createCamera = function(e) {
      return this.camera = new HCameraElement(e, this.globalData, this), this.camera;
    }, HybridRendererBase.prototype.createImage = function(e) {
      return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this);
    }, HybridRendererBase.prototype.createSolid = function(e) {
      return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this);
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
      for (var t = 0, r = this.threeDElements.length; t < r; ) {
        if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e)
          return this.threeDElements[t].perspectiveElem;
        t += 1;
      }
      return null;
    }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
      var r = createTag("div"), i, s;
      styleDiv(r);
      var n = createTag("div");
      if (styleDiv(n), t === "3d") {
        i = r.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
        var a = "50% 50%";
        i.webkitTransformOrigin = a, i.mozTransformOrigin = a, i.transformOrigin = a, s = n.style;
        var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        s.transform = l, s.webkitTransform = l;
      }
      r.appendChild(n);
      var o = {
        container: n,
        perspectiveElem: r,
        startPos: e,
        endPos: e,
        type: t
      };
      return this.threeDElements.push(o), o;
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var e, t = this.layers.length, r, i = "";
      for (e = 0; e < t; e += 1)
        this.layers[e].ddd && this.layers[e].ty !== 3 ? (i !== "3d" && (i = "3d", r = this.createThreeDContainer(e, "3d")), r.endPos = Math.max(r.endPos, e)) : (i !== "2d" && (i = "2d", r = this.createThreeDContainer(e, "2d")), r.endPos = Math.max(r.endPos, e));
      for (t = this.threeDElements.length, e = t - 1; e >= 0; e -= 1)
        this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem);
    }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
      for (var r = 0, i = this.threeDElements.length; r < i; ) {
        if (t <= this.threeDElements[r].endPos) {
          for (var s = this.threeDElements[r].startPos, n; s < t; )
            this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), s += 1;
          n ? this.threeDElements[r].container.insertBefore(e, n) : this.threeDElements[r].container.appendChild(e);
          break;
        }
        r += 1;
      }
    }, HybridRendererBase.prototype.configAnimation = function(e) {
      var t = createTag("div"), r = this.animationItem.wrapper, i = t.style;
      i.width = e.w + "px", i.height = e.h + "px", this.resizerElem = t, styleDiv(t), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), i.overflow = "hidden";
      var s = createNS("svg");
      s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
      var n = createNS("defs");
      s.appendChild(n), this.data = e, this.setupGlobalData(e, s), this.globalData.defs = n, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var e, t = this.layers ? this.layers.length : 0;
      for (e = 0; e < t; e += 1)
        this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var e = this.animationItem.wrapper.offsetWidth, t = this.animationItem.wrapper.offsetHeight, r = e / t, i = this.globalData.compSize.w / this.globalData.compSize.h, s, n, a, l;
      i > r ? (s = e / this.globalData.compSize.w, n = e / this.globalData.compSize.w, a = 0, l = (t - this.globalData.compSize.h * (e / this.globalData.compSize.w)) / 2) : (s = t / this.globalData.compSize.h, n = t / this.globalData.compSize.h, a = (e - this.globalData.compSize.w * (t / this.globalData.compSize.h)) / 2, l = 0);
      var o = this.resizerElem.style;
      o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + n + ",0,0,0,0,1,0," + a + "," + l + ",0,1)", o.transform = o.webkitTransform;
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera)
        this.camera.setup();
      else {
        var e = this.globalData.compSize.w, t = this.globalData.compSize.h, r, i = this.threeDElements.length;
        for (r = 0; r < i; r += 1) {
          var s = this.threeDElements[r].perspectiveElem.style;
          s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) + "px", s.perspective = s.webkitPerspective;
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
      var t, r = e.length, i = createTag("div");
      for (t = 0; t < r; t += 1)
        if (e[t].xt) {
          var s = this.createComp(e[t], i, this.globalData.comp, null);
          s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
        }
    };
    function HCompElement(e, t, r) {
      this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(e, t) {
      for (var r = 0, i; r < t; )
        this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
      i ? this.layerElement.insertBefore(e, i) : this.layerElement.appendChild(e);
    }, HCompElement.prototype.createComp = function(e) {
      return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this);
    };
    function HybridRenderer(e, t) {
      this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: t && t.className || "",
        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(t && t.hideOnTransparent === !1),
        filterSize: {
          width: t && t.filterSize && t.filterSize.width || "400%",
          height: t && t.filterSize && t.filterSize.height || "400%",
          x: t && t.filterSize && t.filterSize.x || "-100%",
          y: t && t.filterSize && t.filterSize.y || "-100%"
        },
        runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
      return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this);
    };
    var CompExpressionInterface = function() {
      return function(e) {
        function t(r) {
          for (var i = 0, s = e.layers.length; i < s; ) {
            if (e.layers[i].nm === r || e.layers[i].ind === r)
              return e.elements[i].layerInterface;
            i += 1;
          }
          return null;
        }
        return Object.defineProperty(t, "_name", {
          value: e.data.nm
        }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t;
      };
    }();
    function _typeof$2(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
        return typeof r;
      } : _typeof$2 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$2(e);
    }
    function seedRandom(e, t) {
      var r = this, i = 256, s = 6, n = 52, a = "random", l = t.pow(i, s), o = t.pow(2, n), p = o * 2, c = i - 1, k;
      function f(u, y, S) {
        var T = [];
        y = y === !0 ? {
          entropy: !0
        } : y || {};
        var M = E(m(y.entropy ? [u, g(e)] : u === null ? d() : u, 3), T), I = new x(T), R = function() {
          for (var D = I.g(s), V = l, O = 0; D < o; )
            D = (D + O) * i, V *= i, O = I.g(1);
          for (; D >= p; )
            D /= 2, V /= 2, O >>>= 1;
          return (D + O) / V;
        };
        return R.int32 = function() {
          return I.g(4) | 0;
        }, R.quick = function() {
          return I.g(4) / 4294967296;
        }, R.double = R, E(g(I.S), e), (y.pass || S || function(H, D, V, O) {
          return O && (O.S && A(O, I), H.state = function() {
            return A(I, {});
          }), V ? (t[a] = H, D) : H;
        })(R, M, "global" in y ? y.global : this == t, y.state);
      }
      t["seed" + a] = f;
      function x(u) {
        var y, S = u.length, T = this, M = 0, I = T.i = T.j = 0, R = T.S = [];
        for (S || (u = [S++]); M < i; )
          R[M] = M++;
        for (M = 0; M < i; M++)
          R[M] = R[I = c & I + u[M % S] + (y = R[M])], R[I] = y;
        T.g = function(H) {
          for (var D, V = 0, O = T.i, G = T.j, L = T.S; H--; )
            D = L[O = c & O + 1], V = V * i + L[c & (L[O] = L[G = c & G + D]) + (L[G] = D)];
          return T.i = O, T.j = G, V;
        };
      }
      function A(u, y) {
        return y.i = u.i, y.j = u.j, y.S = u.S.slice(), y;
      }
      function m(u, y) {
        var S = [], T = _typeof$2(u), M;
        if (y && T == "object")
          for (M in u)
            try {
              S.push(m(u[M], y - 1));
            } catch {
            }
        return S.length ? S : T == "string" ? u : u + "\0";
      }
      function E(u, y) {
        for (var S = u + "", T, M = 0; M < S.length; )
          y[c & M] = c & (T ^= y[c & M] * 19) + S.charCodeAt(M++);
        return g(y);
      }
      function d() {
        try {
          var u = new Uint8Array(i);
          return (r.crypto || r.msCrypto).getRandomValues(u), g(u);
        } catch {
          var y = r.navigator, S = y && y.plugins;
          return [+/* @__PURE__ */ new Date(), r, S, r.screen, g(e)];
        }
      }
      function g(u) {
        return String.fromCharCode.apply(0, u);
      }
      E(t.random(), e);
    }
    function initialize$2(e) {
      seedRandom([], e);
    }
    var propTypes = {
      SHAPE: "shape"
    };
    function _typeof$1(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
        return typeof r;
      } : _typeof$1 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$1(e);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
      initialize$2(BMMath);
      function resetFrame() {
        _lottieGlobal = {};
      }
      function $bm_isInstanceOfArray(e) {
        return e.constructor === Array || e.constructor === Float32Array;
      }
      function isNumerable(e, t) {
        return e === "number" || t instanceof Number || e === "boolean" || e === "string";
      }
      function $bm_neg(e) {
        var t = _typeof$1(e);
        if (t === "number" || e instanceof Number || t === "boolean")
          return -e;
        if ($bm_isInstanceOfArray(e)) {
          var r, i = e.length, s = [];
          for (r = 0; r < i; r += 1)
            s[r] = -e[r];
          return s;
        }
        return e.propType ? e.v : -e;
      }
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(e, t) {
        var r = _typeof$1(e), i = _typeof$1(t);
        if (isNumerable(r, e) && isNumerable(i, t) || r === "string" || i === "string")
          return e + t;
        if ($bm_isInstanceOfArray(e) && isNumerable(i, t))
          return e = e.slice(0), e[0] += t, e;
        if (isNumerable(r, e) && $bm_isInstanceOfArray(t))
          return t = t.slice(0), t[0] = e + t[0], t;
        if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
          for (var s = 0, n = e.length, a = t.length, l = []; s < n || s < a; )
            (typeof e[s] == "number" || e[s] instanceof Number) && (typeof t[s] == "number" || t[s] instanceof Number) ? l[s] = e[s] + t[s] : l[s] = t[s] === void 0 ? e[s] : e[s] || t[s], s += 1;
          return l;
        }
        return 0;
      }
      var add = sum;
      function sub(e, t) {
        var r = _typeof$1(e), i = _typeof$1(t);
        if (isNumerable(r, e) && isNumerable(i, t))
          return r === "string" && (e = parseInt(e, 10)), i === "string" && (t = parseInt(t, 10)), e - t;
        if ($bm_isInstanceOfArray(e) && isNumerable(i, t))
          return e = e.slice(0), e[0] -= t, e;
        if (isNumerable(r, e) && $bm_isInstanceOfArray(t))
          return t = t.slice(0), t[0] = e - t[0], t;
        if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
          for (var s = 0, n = e.length, a = t.length, l = []; s < n || s < a; )
            (typeof e[s] == "number" || e[s] instanceof Number) && (typeof t[s] == "number" || t[s] instanceof Number) ? l[s] = e[s] - t[s] : l[s] = t[s] === void 0 ? e[s] : e[s] || t[s], s += 1;
          return l;
        }
        return 0;
      }
      function mul(e, t) {
        var r = _typeof$1(e), i = _typeof$1(t), s;
        if (isNumerable(r, e) && isNumerable(i, t))
          return e * t;
        var n, a;
        if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) {
          for (a = e.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1)
            s[n] = e[n] * t;
          return s;
        }
        if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
          for (a = t.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1)
            s[n] = e * t[n];
          return s;
        }
        return 0;
      }
      function div(e, t) {
        var r = _typeof$1(e), i = _typeof$1(t), s;
        if (isNumerable(r, e) && isNumerable(i, t))
          return e / t;
        var n, a;
        if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) {
          for (a = e.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1)
            s[n] = e[n] / t;
          return s;
        }
        if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
          for (a = t.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1)
            s[n] = e / t[n];
          return s;
        }
        return 0;
      }
      function mod(e, t) {
        return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(e, t, r) {
        if (t > r) {
          var i = r;
          r = t, t = i;
        }
        return Math.min(Math.max(e, t), r);
      }
      function radiansToDegrees(e) {
        return e / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(e) {
        return e * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(e, t) {
        if (typeof e == "number" || e instanceof Number)
          return t = t || 0, Math.abs(e - t);
        t || (t = helperLengthArray);
        var r, i = Math.min(e.length, t.length), s = 0;
        for (r = 0; r < i; r += 1)
          s += Math.pow(t[r] - e[r], 2);
        return Math.sqrt(s);
      }
      function normalize(e) {
        return div(e, length(e));
      }
      function rgbToHsl(e) {
        var t = e[0], r = e[1], i = e[2], s = Math.max(t, r, i), n = Math.min(t, r, i), a, l, o = (s + n) / 2;
        if (s === n)
          a = 0, l = 0;
        else {
          var p = s - n;
          switch (l = o > 0.5 ? p / (2 - s - n) : p / (s + n), s) {
            case t:
              a = (r - i) / p + (r < i ? 6 : 0);
              break;
            case r:
              a = (i - t) / p + 2;
              break;
            case i:
              a = (t - r) / p + 4;
              break;
          }
          a /= 6;
        }
        return [a, l, o, e[3]];
      }
      function hue2rgb(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
      }
      function hslToRgb(e) {
        var t = e[0], r = e[1], i = e[2], s, n, a;
        if (r === 0)
          s = i, a = i, n = i;
        else {
          var l = i < 0.5 ? i * (1 + r) : i + r - i * r, o = 2 * i - l;
          s = hue2rgb(o, l, t + 1 / 3), n = hue2rgb(o, l, t), a = hue2rgb(o, l, t - 1 / 3);
        }
        return [s, n, a, e[3]];
      }
      function linear(e, t, r, i, s) {
        if ((i === void 0 || s === void 0) && (i = t, s = r, t = 0, r = 1), r < t) {
          var n = r;
          r = t, t = n;
        }
        if (e <= t)
          return i;
        if (e >= r)
          return s;
        var a = r === t ? 0 : (e - t) / (r - t);
        if (!i.length)
          return i + (s - i) * a;
        var l, o = i.length, p = createTypedArray("float32", o);
        for (l = 0; l < o; l += 1)
          p[l] = i[l] + (s[l] - i[l]) * a;
        return p;
      }
      function random(e, t) {
        if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
          var r, i = t.length;
          e || (e = createTypedArray("float32", i));
          var s = createTypedArray("float32", i), n = BMMath.random();
          for (r = 0; r < i; r += 1)
            s[r] = e[r] + n * (t[r] - e[r]);
          return s;
        }
        e === void 0 && (e = 0);
        var a = BMMath.random();
        return e + a * (t - e);
      }
      function createPath(e, t, r, i) {
        var s, n = e.length, a = shapePool.newElement();
        a.setPathData(!!i, n);
        var l = [0, 0], o, p;
        for (s = 0; s < n; s += 1)
          o = t && t[s] ? t[s] : l, p = r && r[s] ? r[s] : l, a.setTripleAt(e[s][0], e[s][1], p[0] + e[s][0], p[1] + e[s][1], o[0] + e[s][0], o[1] + e[s][1], s, !0);
        return a;
      }
      function initiateExpression(elem, data, property) {
        function noOp(e) {
          return e;
        }
        if (!elem.globalData.renderConfig.runExpressions)
          return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
          get: function() {
            return thisProperty.v;
          }
        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function e(t, r) {
          var i, s, n = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", n);
          t = 5;
          var l = Math.floor(time * t);
          for (i = 0, s = 0; i < l; ) {
            for (s = 0; s < n; s += 1)
              a[s] += -r + r * 2 * BMMath.random();
            i += 1;
          }
          var o = time * t, p = o - Math.floor(o), c = createTypedArray("float32", n);
          if (n > 1) {
            for (s = 0; s < n; s += 1)
              c[s] = this.pv[s] + a[s] + (-r + r * 2 * BMMath.random()) * p;
            return c;
          }
          return this.pv + a[0] + (-r + r * 2 * BMMath.random()) * p;
        }).bind(this);
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
        function loopInDuration(e, t) {
          return loopIn(e, t, !0);
        }
        function loopOutDuration(e, t) {
          return loopOut(e, t, !0);
        }
        this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
        function lookAt(e, t) {
          var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads, s = -Math.atan2(r[1], r[2]) / degToRads;
          return [s, i, 0];
        }
        function easeOut(e, t, r, i, s) {
          return applyEase(easeOutBez, e, t, r, i, s);
        }
        function easeIn(e, t, r, i, s) {
          return applyEase(easeInBez, e, t, r, i, s);
        }
        function ease(e, t, r, i, s) {
          return applyEase(easeInOutBez, e, t, r, i, s);
        }
        function applyEase(e, t, r, i, s, n) {
          s === void 0 ? (s = r, n = i) : t = (t - r) / (i - r), t > 1 ? t = 1 : t < 0 && (t = 0);
          var a = e(t);
          if ($bm_isInstanceOfArray(s)) {
            var l, o = s.length, p = createTypedArray("float32", o);
            for (l = 0; l < o; l += 1)
              p[l] = (n[l] - s[l]) * a + s[l];
            return p;
          }
          return (n - s) * a + s;
        }
        function nearestKey(e) {
          var t, r = data.k.length, i, s;
          if (!data.k.length || typeof data.k[0] == "number")
            i = 0, s = 0;
          else if (i = -1, e *= elem.comp.globalData.frameRate, e < data.k[0].t)
            i = 1, s = data.k[0].t;
          else {
            for (t = 0; t < r - 1; t += 1)
              if (e === data.k[t].t) {
                i = t + 1, s = data.k[t].t;
                break;
              } else if (e > data.k[t].t && e < data.k[t + 1].t) {
                e - data.k[t].t > data.k[t + 1].t - e ? (i = t + 2, s = data.k[t + 1].t) : (i = t + 1, s = data.k[t].t);
                break;
              }
            i === -1 && (i = t + 1, s = data.k[t].t);
          }
          var n = {};
          return n.index = i, n.time = s / elem.comp.globalData.frameRate, n;
        }
        function key(e) {
          var t, r, i;
          if (!data.k.length || typeof data.k[0] == "number")
            throw new Error("The property has no keyframe at index " + e);
          e -= 1, t = {
            time: data.k[e].t / elem.comp.globalData.frameRate,
            value: []
          };
          var s = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
          for (i = s.length, r = 0; r < i; r += 1)
            t[r] = s[r], t.value[r] = s[r];
          return t;
        }
        function framesToTime(e, t) {
          return t || (t = elem.comp.globalData.frameRate), e / t;
        }
        function timeToFrames(e, t) {
          return !e && e !== 0 && (e = time), t || (t = elem.comp.globalData.frameRate), e * t;
        }
        function seedRandom(e) {
          BMMath.seedrandom(randSeed + e);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(e, t) {
          return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : "";
        }
        function substr(e, t) {
          return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : "";
        }
        function posterizeTime(e) {
          time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time);
        }
        var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
        function executeExpression(e) {
          return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob;
    }(), Expressions = function() {
      var e = {};
      e.initExpressions = t, e.resetFrame = ExpressionManager.resetFrame;
      function t(r) {
        var i = 0, s = [];
        function n() {
          i += 1;
        }
        function a() {
          i -= 1, i === 0 && o();
        }
        function l(p) {
          s.indexOf(p) === -1 && s.push(p);
        }
        function o() {
          var p, c = s.length;
          for (p = 0; p < c; p += 1)
            s[p].release();
          s.length = 0;
        }
        r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = n, r.renderer.globalData.popExpression = a, r.renderer.globalData.registerExpressionProperty = l;
      }
      return e;
    }(), MaskManagerInterface = function() {
      function e(r, i) {
        this._mask = r, this._data = i;
      }
      Object.defineProperty(e.prototype, "maskPath", {
        get: function() {
          return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
        }
      }), Object.defineProperty(e.prototype, "maskOpacity", {
        get: function() {
          return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
        }
      });
      var t = function(i) {
        var s = createSizedArray(i.viewData.length), n, a = i.viewData.length;
        for (n = 0; n < a; n += 1)
          s[n] = new e(i.viewData[n], i.masksProperties[n]);
        var l = function(p) {
          for (n = 0; n < a; ) {
            if (i.masksProperties[n].nm === p)
              return s[n];
            n += 1;
          }
          return null;
        };
        return l;
      };
      return t;
    }(), ExpressionPropertyInterface = function() {
      var e = {
        pv: 0,
        v: 0,
        mult: 1
      }, t = {
        pv: [0, 0, 0],
        v: [0, 0, 0],
        mult: 1
      };
      function r(a, l, o) {
        Object.defineProperty(a, "velocity", {
          get: function() {
            return l.getVelocityAtTime(l.comp.currentFrame);
          }
        }), a.numKeys = l.keyframes ? l.keyframes.length : 0, a.key = function(p) {
          if (!a.numKeys)
            return 0;
          var c = "";
          "s" in l.keyframes[p - 1] ? c = l.keyframes[p - 1].s : "e" in l.keyframes[p - 2] ? c = l.keyframes[p - 2].e : c = l.keyframes[p - 2].s;
          var k = o === "unidimensional" ? new Number(c) : Object.assign({}, c);
          return k.time = l.keyframes[p - 1].t / l.elem.comp.globalData.frameRate, k.value = o === "unidimensional" ? c[0] : c, k;
        }, a.valueAtTime = l.getValueAtTime, a.speedAtTime = l.getSpeedAtTime, a.velocityAtTime = l.getVelocityAtTime, a.propertyGroup = l.propertyGroup;
      }
      function i(a) {
        (!a || !("pv" in a)) && (a = e);
        var l = 1 / a.mult, o = a.pv * l, p = new Number(o);
        return p.value = o, r(p, a, "unidimensional"), function() {
          return a.k && a.getValue(), o = a.v * l, p.value !== o && (p = new Number(o), p.value = o, r(p, a, "unidimensional")), p;
        };
      }
      function s(a) {
        (!a || !("pv" in a)) && (a = t);
        var l = 1 / a.mult, o = a.data && a.data.l || a.pv.length, p = createTypedArray("float32", o), c = createTypedArray("float32", o);
        return p.value = c, r(p, a, "multidimensional"), function() {
          a.k && a.getValue();
          for (var k = 0; k < o; k += 1)
            c[k] = a.v[k] * l, p[k] = c[k];
          return p;
        };
      }
      function n() {
        return e;
      }
      return function(a) {
        return a ? a.propType === "unidimensional" ? i(a) : s(a) : n;
      };
    }(), TransformExpressionInterface = function() {
      return function(e) {
        function t(a) {
          switch (a) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return t.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return t.rotation;
            case "ADBE Rotate X":
              return t.xRotation;
            case "ADBE Rotate Y":
              return t.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return t.position;
            case "ADBE Position_0":
              return t.xPosition;
            case "ADBE Position_1":
              return t.yPosition;
            case "ADBE Position_2":
              return t.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return t.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return t.opacity;
            default:
              return null;
          }
        }
        Object.defineProperty(t, "rotation", {
          get: ExpressionPropertyInterface(e.r || e.rz)
        }), Object.defineProperty(t, "zRotation", {
          get: ExpressionPropertyInterface(e.rz || e.r)
        }), Object.defineProperty(t, "xRotation", {
          get: ExpressionPropertyInterface(e.rx)
        }), Object.defineProperty(t, "yRotation", {
          get: ExpressionPropertyInterface(e.ry)
        }), Object.defineProperty(t, "scale", {
          get: ExpressionPropertyInterface(e.s)
        });
        var r, i, s, n;
        return e.p ? n = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), i = ExpressionPropertyInterface(e.py), e.pz && (s = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
          get: function() {
            return e.p ? n() : [r(), i(), s ? s() : 0];
          }
        }), Object.defineProperty(t, "xPosition", {
          get: ExpressionPropertyInterface(e.px)
        }), Object.defineProperty(t, "yPosition", {
          get: ExpressionPropertyInterface(e.py)
        }), Object.defineProperty(t, "zPosition", {
          get: ExpressionPropertyInterface(e.pz)
        }), Object.defineProperty(t, "anchorPoint", {
          get: ExpressionPropertyInterface(e.a)
        }), Object.defineProperty(t, "opacity", {
          get: ExpressionPropertyInterface(e.o)
        }), Object.defineProperty(t, "skew", {
          get: ExpressionPropertyInterface(e.sk)
        }), Object.defineProperty(t, "skewAxis", {
          get: ExpressionPropertyInterface(e.sa)
        }), Object.defineProperty(t, "orientation", {
          get: ExpressionPropertyInterface(e.or)
        }), t;
      };
    }(), LayerExpressionInterface = function() {
      function e(p) {
        var c = new Matrix();
        if (p !== void 0) {
          var k = this._elem.finalTransform.mProp.getValueAtTime(p);
          k.clone(c);
        } else {
          var f = this._elem.finalTransform.mProp;
          f.applyToMatrix(c);
        }
        return c;
      }
      function t(p, c) {
        var k = this.getMatrix(c);
        return k.props[12] = 0, k.props[13] = 0, k.props[14] = 0, this.applyPoint(k, p);
      }
      function r(p, c) {
        var k = this.getMatrix(c);
        return this.applyPoint(k, p);
      }
      function i(p, c) {
        var k = this.getMatrix(c);
        return k.props[12] = 0, k.props[13] = 0, k.props[14] = 0, this.invertPoint(k, p);
      }
      function s(p, c) {
        var k = this.getMatrix(c);
        return this.invertPoint(k, p);
      }
      function n(p, c) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var k, f = this._elem.hierarchy.length;
          for (k = 0; k < f; k += 1)
            this._elem.hierarchy[k].finalTransform.mProp.applyToMatrix(p);
        }
        return p.applyToPointArray(c[0], c[1], c[2] || 0);
      }
      function a(p, c) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var k, f = this._elem.hierarchy.length;
          for (k = 0; k < f; k += 1)
            this._elem.hierarchy[k].finalTransform.mProp.applyToMatrix(p);
        }
        return p.inversePoint(c);
      }
      function l(p) {
        var c = new Matrix();
        if (c.reset(), this._elem.finalTransform.mProp.applyToMatrix(c), this._elem.hierarchy && this._elem.hierarchy.length) {
          var k, f = this._elem.hierarchy.length;
          for (k = 0; k < f; k += 1)
            this._elem.hierarchy[k].finalTransform.mProp.applyToMatrix(c);
          return c.inversePoint(p);
        }
        return c.inversePoint(p);
      }
      function o() {
        return [1, 1, 1, 1];
      }
      return function(p) {
        var c;
        function k(m) {
          x.mask = new MaskManagerInterface(m, p);
        }
        function f(m) {
          x.effect = m;
        }
        function x(m) {
          switch (m) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return x.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return c;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return x.effect;
            case "ADBE Text Properties":
              return x.textInterface;
            default:
              return null;
          }
        }
        x.getMatrix = e, x.invertPoint = a, x.applyPoint = n, x.toWorld = r, x.toWorldVec = t, x.fromWorld = s, x.fromWorldVec = i, x.toComp = r, x.fromComp = l, x.sampleImage = o, x.sourceRectAtTime = p.sourceRectAtTime.bind(p), x._elem = p, c = TransformExpressionInterface(p.finalTransform.mProp);
        var A = getDescriptor(c, "anchorPoint");
        return Object.defineProperties(x, {
          hasParent: {
            get: function() {
              return p.hierarchy.length;
            }
          },
          parent: {
            get: function() {
              return p.hierarchy[0].layerInterface;
            }
          },
          rotation: getDescriptor(c, "rotation"),
          scale: getDescriptor(c, "scale"),
          position: getDescriptor(c, "position"),
          opacity: getDescriptor(c, "opacity"),
          anchorPoint: A,
          anchor_point: A,
          transform: {
            get: function() {
              return c;
            }
          },
          active: {
            get: function() {
              return p.isInRange;
            }
          }
        }), x.startTime = p.data.st, x.index = p.data.ind, x.source = p.data.refId, x.height = p.data.ty === 0 ? p.data.h : 100, x.width = p.data.ty === 0 ? p.data.w : 100, x.inPoint = p.data.ip / p.comp.globalData.frameRate, x.outPoint = p.data.op / p.comp.globalData.frameRate, x._name = p.data.nm, x.registerMaskInterface = k, x.registerEffectsInterface = f, x;
      };
    }(), propertyGroupFactory = function() {
      return function(e, t) {
        return function(r) {
          return r = r === void 0 ? 1 : r, r <= 0 ? e : t(r - 1);
        };
      };
    }(), PropertyInterface = function() {
      return function(e, t) {
        var r = {
          _name: e
        };
        function i(s) {
          return s = s === void 0 ? 1 : s, s <= 0 ? r : t(s - 1);
        }
        return i;
      };
    }(), EffectsExpressionInterface = function() {
      var e = {
        createEffectsInterface: t
      };
      function t(s, n) {
        if (s.effectsManager) {
          var a = [], l = s.data.ef, o, p = s.effectsManager.effectElements.length;
          for (o = 0; o < p; o += 1)
            a.push(r(l[o], s.effectsManager.effectElements[o], n, s));
          var c = s.data.ef || [], k = function(x) {
            for (o = 0, p = c.length; o < p; ) {
              if (x === c[o].nm || x === c[o].mn || x === c[o].ix)
                return a[o];
              o += 1;
            }
            return null;
          };
          return Object.defineProperty(k, "numProperties", {
            get: function() {
              return c.length;
            }
          }), k;
        }
        return null;
      }
      function r(s, n, a, l) {
        function o(x) {
          for (var A = s.ef, m = 0, E = A.length; m < E; ) {
            if (x === A[m].nm || x === A[m].mn || x === A[m].ix)
              return A[m].ty === 5 ? c[m] : c[m]();
            m += 1;
          }
          throw new Error();
        }
        var p = propertyGroupFactory(o, a), c = [], k, f = s.ef.length;
        for (k = 0; k < f; k += 1)
          s.ef[k].ty === 5 ? c.push(r(s.ef[k], n.effectElements[k], n.effectElements[k].propertyGroup, l)) : c.push(i(n.effectElements[k], s.ef[k].ty, l, p));
        return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
          get: function() {
            return c[0]();
          }
        }), Object.defineProperties(o, {
          numProperties: {
            get: function() {
              return s.np;
            }
          },
          _name: {
            value: s.nm
          },
          propertyGroup: {
            value: p
          }
        }), o.enabled = s.en !== 0, o.active = o.enabled, o;
      }
      function i(s, n, a, l) {
        var o = ExpressionPropertyInterface(s.p);
        function p() {
          return n === 10 ? a.comp.compInterface(s.p.v) : o();
        }
        return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)), p;
      }
      return e;
    }(), ShapePathInterface = function() {
      return function(t, r, i) {
        var s = r.sh;
        function n(l) {
          return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? n.path : null;
        }
        var a = propertyGroupFactory(n, i);
        return s.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
          path: {
            get: function() {
              return s.k && s.getValue(), s;
            }
          },
          shape: {
            get: function() {
              return s.k && s.getValue(), s;
            }
          },
          _name: {
            value: t.nm
          },
          ix: {
            value: t.ix
          },
          propertyIndex: {
            value: t.ix
          },
          mn: {
            value: t.mn
          },
          propertyGroup: {
            value: i
          }
        }), n;
      };
    }(), ShapeExpressionInterface = function() {
      function e(A, m, E) {
        var d = [], g, u = A ? A.length : 0;
        for (g = 0; g < u; g += 1)
          A[g].ty === "gr" ? d.push(r(A[g], m[g], E)) : A[g].ty === "fl" ? d.push(i(A[g], m[g], E)) : A[g].ty === "st" ? d.push(a(A[g], m[g], E)) : A[g].ty === "tm" ? d.push(l(A[g], m[g], E)) : A[g].ty === "tr" || (A[g].ty === "el" ? d.push(p(A[g], m[g], E)) : A[g].ty === "sr" ? d.push(c(A[g], m[g], E)) : A[g].ty === "sh" ? d.push(ShapePathInterface(A[g], m[g], E)) : A[g].ty === "rc" ? d.push(k(A[g], m[g], E)) : A[g].ty === "rd" ? d.push(f(A[g], m[g], E)) : A[g].ty === "rp" ? d.push(x(A[g], m[g], E)) : A[g].ty === "gf" ? d.push(s(A[g], m[g], E)) : d.push(n(A[g], m[g])));
        return d;
      }
      function t(A, m, E) {
        var d, g = function(S) {
          for (var T = 0, M = d.length; T < M; ) {
            if (d[T]._name === S || d[T].mn === S || d[T].propertyIndex === S || d[T].ix === S || d[T].ind === S)
              return d[T];
            T += 1;
          }
          return typeof S == "number" ? d[S - 1] : null;
        };
        g.propertyGroup = propertyGroupFactory(g, E), d = e(A.it, m.it, g.propertyGroup), g.numProperties = d.length;
        var u = o(A.it[A.it.length - 1], m.it[m.it.length - 1], g.propertyGroup);
        return g.transform = u, g.propertyIndex = A.cix, g._name = A.nm, g;
      }
      function r(A, m, E) {
        var d = function(S) {
          switch (S) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return d.content;
            default:
              return d.transform;
          }
        };
        d.propertyGroup = propertyGroupFactory(d, E);
        var g = t(A, m, d.propertyGroup), u = o(A.it[A.it.length - 1], m.it[m.it.length - 1], d.propertyGroup);
        return d.content = g, d.transform = u, Object.defineProperty(d, "_name", {
          get: function() {
            return A.nm;
          }
        }), d.numProperties = A.np, d.propertyIndex = A.ix, d.nm = A.nm, d.mn = A.mn, d;
      }
      function i(A, m, E) {
        function d(g) {
          return g === "Color" || g === "color" ? d.color : g === "Opacity" || g === "opacity" ? d.opacity : null;
        }
        return Object.defineProperties(d, {
          color: {
            get: ExpressionPropertyInterface(m.c)
          },
          opacity: {
            get: ExpressionPropertyInterface(m.o)
          },
          _name: {
            value: A.nm
          },
          mn: {
            value: A.mn
          }
        }), m.c.setGroupProperty(PropertyInterface("Color", E)), m.o.setGroupProperty(PropertyInterface("Opacity", E)), d;
      }
      function s(A, m, E) {
        function d(g) {
          return g === "Start Point" || g === "start point" ? d.startPoint : g === "End Point" || g === "end point" ? d.endPoint : g === "Opacity" || g === "opacity" ? d.opacity : null;
        }
        return Object.defineProperties(d, {
          startPoint: {
            get: ExpressionPropertyInterface(m.s)
          },
          endPoint: {
            get: ExpressionPropertyInterface(m.e)
          },
          opacity: {
            get: ExpressionPropertyInterface(m.o)
          },
          type: {
            get: function() {
              return "a";
            }
          },
          _name: {
            value: A.nm
          },
          mn: {
            value: A.mn
          }
        }), m.s.setGroupProperty(PropertyInterface("Start Point", E)), m.e.setGroupProperty(PropertyInterface("End Point", E)), m.o.setGroupProperty(PropertyInterface("Opacity", E)), d;
      }
      function n() {
        function A() {
          return null;
        }
        return A;
      }
      function a(A, m, E) {
        var d = propertyGroupFactory(M, E), g = propertyGroupFactory(T, d);
        function u(I) {
          Object.defineProperty(T, A.d[I].nm, {
            get: ExpressionPropertyInterface(m.d.dataProps[I].p)
          });
        }
        var y, S = A.d ? A.d.length : 0, T = {};
        for (y = 0; y < S; y += 1)
          u(y), m.d.dataProps[y].p.setGroupProperty(g);
        function M(I) {
          return I === "Color" || I === "color" ? M.color : I === "Opacity" || I === "opacity" ? M.opacity : I === "Stroke Width" || I === "stroke width" ? M.strokeWidth : null;
        }
        return Object.defineProperties(M, {
          color: {
            get: ExpressionPropertyInterface(m.c)
          },
          opacity: {
            get: ExpressionPropertyInterface(m.o)
          },
          strokeWidth: {
            get: ExpressionPropertyInterface(m.w)
          },
          dash: {
            get: function() {
              return T;
            }
          },
          _name: {
            value: A.nm
          },
          mn: {
            value: A.mn
          }
        }), m.c.setGroupProperty(PropertyInterface("Color", d)), m.o.setGroupProperty(PropertyInterface("Opacity", d)), m.w.setGroupProperty(PropertyInterface("Stroke Width", d)), M;
      }
      function l(A, m, E) {
        function d(u) {
          return u === A.e.ix || u === "End" || u === "end" ? d.end : u === A.s.ix ? d.start : u === A.o.ix ? d.offset : null;
        }
        var g = propertyGroupFactory(d, E);
        return d.propertyIndex = A.ix, m.s.setGroupProperty(PropertyInterface("Start", g)), m.e.setGroupProperty(PropertyInterface("End", g)), m.o.setGroupProperty(PropertyInterface("Offset", g)), d.propertyIndex = A.ix, d.propertyGroup = E, Object.defineProperties(d, {
          start: {
            get: ExpressionPropertyInterface(m.s)
          },
          end: {
            get: ExpressionPropertyInterface(m.e)
          },
          offset: {
            get: ExpressionPropertyInterface(m.o)
          },
          _name: {
            value: A.nm
          }
        }), d.mn = A.mn, d;
      }
      function o(A, m, E) {
        function d(u) {
          return A.a.ix === u || u === "Anchor Point" ? d.anchorPoint : A.o.ix === u || u === "Opacity" ? d.opacity : A.p.ix === u || u === "Position" ? d.position : A.r.ix === u || u === "Rotation" || u === "ADBE Vector Rotation" ? d.rotation : A.s.ix === u || u === "Scale" ? d.scale : A.sk && A.sk.ix === u || u === "Skew" ? d.skew : A.sa && A.sa.ix === u || u === "Skew Axis" ? d.skewAxis : null;
        }
        var g = propertyGroupFactory(d, E);
        return m.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", g)), m.transform.mProps.p.setGroupProperty(PropertyInterface("Position", g)), m.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", g)), m.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", g)), m.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", g)), m.transform.mProps.sk && (m.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", g)), m.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", g))), m.transform.op.setGroupProperty(PropertyInterface("Opacity", g)), Object.defineProperties(d, {
          opacity: {
            get: ExpressionPropertyInterface(m.transform.mProps.o)
          },
          position: {
            get: ExpressionPropertyInterface(m.transform.mProps.p)
          },
          anchorPoint: {
            get: ExpressionPropertyInterface(m.transform.mProps.a)
          },
          scale: {
            get: ExpressionPropertyInterface(m.transform.mProps.s)
          },
          rotation: {
            get: ExpressionPropertyInterface(m.transform.mProps.r)
          },
          skew: {
            get: ExpressionPropertyInterface(m.transform.mProps.sk)
          },
          skewAxis: {
            get: ExpressionPropertyInterface(m.transform.mProps.sa)
          },
          _name: {
            value: A.nm
          }
        }), d.ty = "tr", d.mn = A.mn, d.propertyGroup = E, d;
      }
      function p(A, m, E) {
        function d(y) {
          return A.p.ix === y ? d.position : A.s.ix === y ? d.size : null;
        }
        var g = propertyGroupFactory(d, E);
        d.propertyIndex = A.ix;
        var u = m.sh.ty === "tm" ? m.sh.prop : m.sh;
        return u.s.setGroupProperty(PropertyInterface("Size", g)), u.p.setGroupProperty(PropertyInterface("Position", g)), Object.defineProperties(d, {
          size: {
            get: ExpressionPropertyInterface(u.s)
          },
          position: {
            get: ExpressionPropertyInterface(u.p)
          },
          _name: {
            value: A.nm
          }
        }), d.mn = A.mn, d;
      }
      function c(A, m, E) {
        function d(y) {
          return A.p.ix === y ? d.position : A.r.ix === y ? d.rotation : A.pt.ix === y ? d.points : A.or.ix === y || y === "ADBE Vector Star Outer Radius" ? d.outerRadius : A.os.ix === y ? d.outerRoundness : A.ir && (A.ir.ix === y || y === "ADBE Vector Star Inner Radius") ? d.innerRadius : A.is && A.is.ix === y ? d.innerRoundness : null;
        }
        var g = propertyGroupFactory(d, E), u = m.sh.ty === "tm" ? m.sh.prop : m.sh;
        return d.propertyIndex = A.ix, u.or.setGroupProperty(PropertyInterface("Outer Radius", g)), u.os.setGroupProperty(PropertyInterface("Outer Roundness", g)), u.pt.setGroupProperty(PropertyInterface("Points", g)), u.p.setGroupProperty(PropertyInterface("Position", g)), u.r.setGroupProperty(PropertyInterface("Rotation", g)), A.ir && (u.ir.setGroupProperty(PropertyInterface("Inner Radius", g)), u.is.setGroupProperty(PropertyInterface("Inner Roundness", g))), Object.defineProperties(d, {
          position: {
            get: ExpressionPropertyInterface(u.p)
          },
          rotation: {
            get: ExpressionPropertyInterface(u.r)
          },
          points: {
            get: ExpressionPropertyInterface(u.pt)
          },
          outerRadius: {
            get: ExpressionPropertyInterface(u.or)
          },
          outerRoundness: {
            get: ExpressionPropertyInterface(u.os)
          },
          innerRadius: {
            get: ExpressionPropertyInterface(u.ir)
          },
          innerRoundness: {
            get: ExpressionPropertyInterface(u.is)
          },
          _name: {
            value: A.nm
          }
        }), d.mn = A.mn, d;
      }
      function k(A, m, E) {
        function d(y) {
          return A.p.ix === y ? d.position : A.r.ix === y ? d.roundness : A.s.ix === y || y === "Size" || y === "ADBE Vector Rect Size" ? d.size : null;
        }
        var g = propertyGroupFactory(d, E), u = m.sh.ty === "tm" ? m.sh.prop : m.sh;
        return d.propertyIndex = A.ix, u.p.setGroupProperty(PropertyInterface("Position", g)), u.s.setGroupProperty(PropertyInterface("Size", g)), u.r.setGroupProperty(PropertyInterface("Rotation", g)), Object.defineProperties(d, {
          position: {
            get: ExpressionPropertyInterface(u.p)
          },
          roundness: {
            get: ExpressionPropertyInterface(u.r)
          },
          size: {
            get: ExpressionPropertyInterface(u.s)
          },
          _name: {
            value: A.nm
          }
        }), d.mn = A.mn, d;
      }
      function f(A, m, E) {
        function d(y) {
          return A.r.ix === y || y === "Round Corners 1" ? d.radius : null;
        }
        var g = propertyGroupFactory(d, E), u = m;
        return d.propertyIndex = A.ix, u.rd.setGroupProperty(PropertyInterface("Radius", g)), Object.defineProperties(d, {
          radius: {
            get: ExpressionPropertyInterface(u.rd)
          },
          _name: {
            value: A.nm
          }
        }), d.mn = A.mn, d;
      }
      function x(A, m, E) {
        function d(y) {
          return A.c.ix === y || y === "Copies" ? d.copies : A.o.ix === y || y === "Offset" ? d.offset : null;
        }
        var g = propertyGroupFactory(d, E), u = m;
        return d.propertyIndex = A.ix, u.c.setGroupProperty(PropertyInterface("Copies", g)), u.o.setGroupProperty(PropertyInterface("Offset", g)), Object.defineProperties(d, {
          copies: {
            get: ExpressionPropertyInterface(u.c)
          },
          offset: {
            get: ExpressionPropertyInterface(u.o)
          },
          _name: {
            value: A.nm
          }
        }), d.mn = A.mn, d;
      }
      return function(A, m, E) {
        var d;
        function g(y) {
          if (typeof y == "number")
            return y = y === void 0 ? 1 : y, y === 0 ? E : d[y - 1];
          for (var S = 0, T = d.length; S < T; ) {
            if (d[S]._name === y)
              return d[S];
            S += 1;
          }
          return null;
        }
        function u() {
          return E;
        }
        return g.propertyGroup = propertyGroupFactory(g, u), d = e(A, m, g.propertyGroup), g.numProperties = d.length, g._name = "Contents", g;
      };
    }(), TextExpressionInterface = function() {
      return function(e) {
        var t;
        function r(i) {
          switch (i) {
            case "ADBE Text Document":
              return r.sourceText;
            default:
              return null;
          }
        }
        return Object.defineProperty(r, "sourceText", {
          get: function() {
            e.textProperty.getValue();
            var s = e.textProperty.currentData.t;
            return (!t || s !== t.value) && (t = new String(s), t.value = s || new String(s), Object.defineProperty(t, "style", {
              get: function() {
                return {
                  fillColor: e.textProperty.currentData.fc
                };
              }
            })), t;
          }
        }), r;
      };
    }();
    function _typeof(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
        return typeof r;
      } : _typeof = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof(e);
    }
    var FootageInterface = function() {
      var e = function(i) {
        var s = "", n = i.getFootageData();
        function a() {
          return s = "", n = i.getFootageData(), l;
        }
        function l(o) {
          if (n[o])
            return s = o, n = n[o], _typeof(n) === "object" ? l : n;
          var p = o.indexOf(s);
          if (p !== -1) {
            var c = parseInt(o.substr(p + s.length), 10);
            return n = n[c], _typeof(n) === "object" ? l : n;
          }
          return "";
        }
        return a;
      }, t = function(i) {
        function s(n) {
          return n === "Outline" ? s.outlineInterface() : null;
        }
        return s._name = "Outline", s.outlineInterface = e(i), s;
      };
      return function(r) {
        function i(s) {
          return s === "Data" ? i.dataInterface : null;
        }
        return i._name = "Data", i.dataInterface = t(r), i;
      };
    }(), interfaces = {
      layer: LayerExpressionInterface,
      effects: EffectsExpressionInterface,
      comp: CompExpressionInterface,
      shape: ShapeExpressionInterface,
      text: TextExpressionInterface,
      footage: FootageInterface
    };
    function getInterface(e) {
      return interfaces[e] || null;
    }
    var expressionHelpers = function() {
      function e(a, l, o) {
        l.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(a, l, o).bind(o)));
      }
      function t(a) {
        return a *= this.elem.globalData.frameRate, a -= this.offsetTime, a !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < a ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(a, this._cachingAtTime), this._cachingAtTime.lastFrame = a), this._cachingAtTime.value;
      }
      function r(a) {
        var l = -0.01, o = this.getValueAtTime(a), p = this.getValueAtTime(a + l), c = 0;
        if (o.length) {
          var k;
          for (k = 0; k < o.length; k += 1)
            c += Math.pow(p[k] - o[k], 2);
          c = Math.sqrt(c) * 100;
        } else
          c = 0;
        return c;
      }
      function i(a) {
        if (this.vel !== void 0)
          return this.vel;
        var l = -1e-3, o = this.getValueAtTime(a), p = this.getValueAtTime(a + l), c;
        if (o.length) {
          c = createTypedArray("float32", o.length);
          var k;
          for (k = 0; k < o.length; k += 1)
            c[k] = (p[k] - o[k]) / l;
        } else
          c = (p - o) / l;
        return c;
      }
      function s() {
        return this.pv;
      }
      function n(a) {
        this.propertyGroup = a;
      }
      return {
        searchExpressions: e,
        getSpeedAtTime: r,
        getVelocityAtTime: i,
        getValueAtTime: t,
        getStaticValueAtTime: s,
        setGroupProperty: n
      };
    }();
    function addPropertyDecorator() {
      function e(f, x, A) {
        if (!this.k || !this.keyframes)
          return this.pv;
        f = f ? f.toLowerCase() : "";
        var m = this.comp.renderedFrame, E = this.keyframes, d = E[E.length - 1].t;
        if (m <= d)
          return this.pv;
        var g, u;
        A ? (x ? g = Math.abs(d - this.elem.comp.globalData.frameRate * x) : g = Math.max(0, d - this.elem.data.ip), u = d - g) : ((!x || x > E.length - 1) && (x = E.length - 1), u = E[E.length - 1 - x].t, g = d - u);
        var y, S, T;
        if (f === "pingpong") {
          var M = Math.floor((m - u) / g);
          if (M % 2 !== 0)
            return this.getValueAtTime((g - (m - u) % g + u) / this.comp.globalData.frameRate, 0);
        } else if (f === "offset") {
          var I = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), R = this.getValueAtTime(d / this.comp.globalData.frameRate, 0), H = this.getValueAtTime(((m - u) % g + u) / this.comp.globalData.frameRate, 0), D = Math.floor((m - u) / g);
          if (this.pv.length) {
            for (T = new Array(I.length), S = T.length, y = 0; y < S; y += 1)
              T[y] = (R[y] - I[y]) * D + H[y];
            return T;
          }
          return (R - I) * D + H;
        } else if (f === "continue") {
          var V = this.getValueAtTime(d / this.comp.globalData.frameRate, 0), O = this.getValueAtTime((d - 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (T = new Array(V.length), S = T.length, y = 0; y < S; y += 1)
              T[y] = V[y] + (V[y] - O[y]) * ((m - d) / this.comp.globalData.frameRate) / 5e-4;
            return T;
          }
          return V + (V - O) * ((m - d) / 1e-3);
        }
        return this.getValueAtTime(((m - u) % g + u) / this.comp.globalData.frameRate, 0);
      }
      function t(f, x, A) {
        if (!this.k)
          return this.pv;
        f = f ? f.toLowerCase() : "";
        var m = this.comp.renderedFrame, E = this.keyframes, d = E[0].t;
        if (m >= d)
          return this.pv;
        var g, u;
        A ? (x ? g = Math.abs(this.elem.comp.globalData.frameRate * x) : g = Math.max(0, this.elem.data.op - d), u = d + g) : ((!x || x > E.length - 1) && (x = E.length - 1), u = E[x].t, g = u - d);
        var y, S, T;
        if (f === "pingpong") {
          var M = Math.floor((d - m) / g);
          if (M % 2 === 0)
            return this.getValueAtTime(((d - m) % g + d) / this.comp.globalData.frameRate, 0);
        } else if (f === "offset") {
          var I = this.getValueAtTime(d / this.comp.globalData.frameRate, 0), R = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), H = this.getValueAtTime((g - (d - m) % g + d) / this.comp.globalData.frameRate, 0), D = Math.floor((d - m) / g) + 1;
          if (this.pv.length) {
            for (T = new Array(I.length), S = T.length, y = 0; y < S; y += 1)
              T[y] = H[y] - (R[y] - I[y]) * D;
            return T;
          }
          return H - (R - I) * D;
        } else if (f === "continue") {
          var V = this.getValueAtTime(d / this.comp.globalData.frameRate, 0), O = this.getValueAtTime((d + 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (T = new Array(V.length), S = T.length, y = 0; y < S; y += 1)
              T[y] = V[y] + (V[y] - O[y]) * (d - m) / 1e-3;
            return T;
          }
          return V + (V - O) * (d - m) / 1e-3;
        }
        return this.getValueAtTime((g - ((d - m) % g + d)) / this.comp.globalData.frameRate, 0);
      }
      function r(f, x) {
        if (!this.k)
          return this.pv;
        if (f = (f || 0.4) * 0.5, x = Math.floor(x || 5), x <= 1)
          return this.pv;
        var A = this.comp.renderedFrame / this.comp.globalData.frameRate, m = A - f, E = A + f, d = x > 1 ? (E - m) / (x - 1) : 1, g = 0, u = 0, y;
        this.pv.length ? y = createTypedArray("float32", this.pv.length) : y = 0;
        for (var S; g < x; ) {
          if (S = this.getValueAtTime(m + g * d), this.pv.length)
            for (u = 0; u < this.pv.length; u += 1)
              y[u] += S[u];
          else
            y += S;
          g += 1;
        }
        if (this.pv.length)
          for (u = 0; u < this.pv.length; u += 1)
            y[u] /= x;
        else
          y /= x;
        return y;
      }
      function i(f) {
        this._transformCachingAtTime || (this._transformCachingAtTime = {
          v: new Matrix()
        });
        var x = this._transformCachingAtTime.v;
        if (x.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var A = this.a.getValueAtTime(f);
          x.translate(-A[0] * this.a.mult, -A[1] * this.a.mult, A[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var m = this.s.getValueAtTime(f);
          x.scale(m[0] * this.s.mult, m[1] * this.s.mult, m[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var E = this.sk.getValueAtTime(f), d = this.sa.getValueAtTime(f);
          x.skewFromAxis(-E * this.sk.mult, d * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var g = this.r.getValueAtTime(f);
          x.rotate(-g * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var u = this.rz.getValueAtTime(f), y = this.ry.getValueAtTime(f), S = this.rx.getValueAtTime(f), T = this.or.getValueAtTime(f);
          x.rotateZ(-u * this.rz.mult).rotateY(y * this.ry.mult).rotateX(S * this.rx.mult).rotateZ(-T[2] * this.or.mult).rotateY(T[1] * this.or.mult).rotateX(T[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var M = this.px.getValueAtTime(f), I = this.py.getValueAtTime(f);
          if (this.data.p.z) {
            var R = this.pz.getValueAtTime(f);
            x.translate(M * this.px.mult, I * this.py.mult, -R * this.pz.mult);
          } else
            x.translate(M * this.px.mult, I * this.py.mult, 0);
        } else {
          var H = this.p.getValueAtTime(f);
          x.translate(H[0] * this.p.mult, H[1] * this.p.mult, -H[2] * this.p.mult);
        }
        return x;
      }
      function s() {
        return this.v.clone(new Matrix());
      }
      var n = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(f, x, A) {
        var m = n(f, x, A);
        return m.dynamicProperties.length ? m.getValueAtTime = i.bind(m) : m.getValueAtTime = s.bind(m), m.setGroupProperty = expressionHelpers.setGroupProperty, m;
      };
      var a = PropertyFactory.getProp;
      PropertyFactory.getProp = function(f, x, A, m, E) {
        var d = a(f, x, A, m, E);
        d.kf ? d.getValueAtTime = expressionHelpers.getValueAtTime.bind(d) : d.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(d), d.setGroupProperty = expressionHelpers.setGroupProperty, d.loopOut = e, d.loopIn = t, d.smooth = r, d.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(d), d.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(d), d.numKeys = x.a === 1 ? x.k.length : 0, d.propertyIndex = x.ix;
        var g = 0;
        return A !== 0 && (g = createTypedArray("float32", x.a === 1 ? x.k[0].s.length : x.k.length)), d._cachingAtTime = {
          lastFrame: initialDefaultFrame,
          lastIndex: 0,
          value: g
        }, expressionHelpers.searchExpressions(f, x, d), d.k && E.addDynamicProperty(d), d;
      };
      function l(f) {
        return this._cachingAtTime || (this._cachingAtTime = {
          shapeValue: shapePool.clone(this.pv),
          lastIndex: 0,
          lastTime: initialDefaultFrame
        }), f *= this.elem.globalData.frameRate, f -= this.offsetTime, f !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < f ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = f, this.interpolateShape(f, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }
      var o = ShapePropertyFactory.getConstructorFunction(), p = ShapePropertyFactory.getKeyframedConstructorFunction();
      function c() {
      }
      c.prototype = {
        vertices: function(x, A) {
          this.k && this.getValue();
          var m = this.v;
          A !== void 0 && (m = this.getValueAtTime(A, 0));
          var E, d = m._length, g = m[x], u = m.v, y = createSizedArray(d);
          for (E = 0; E < d; E += 1)
            x === "i" || x === "o" ? y[E] = [g[E][0] - u[E][0], g[E][1] - u[E][1]] : y[E] = [g[E][0], g[E][1]];
          return y;
        },
        points: function(x) {
          return this.vertices("v", x);
        },
        inTangents: function(x) {
          return this.vertices("i", x);
        },
        outTangents: function(x) {
          return this.vertices("o", x);
        },
        isClosed: function() {
          return this.v.c;
        },
        pointOnPath: function(x, A) {
          var m = this.v;
          A !== void 0 && (m = this.getValueAtTime(A, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(m));
          for (var E = this._segmentsLength, d = E.lengths, g = E.totalLength * x, u = 0, y = d.length, S = 0, T; u < y; ) {
            if (S + d[u].addedLength > g) {
              var M = u, I = m.c && u === y - 1 ? 0 : u + 1, R = (g - S) / d[u].addedLength;
              T = bez.getPointInSegment(m.v[M], m.v[I], m.o[M], m.i[I], R, d[u]);
              break;
            } else
              S += d[u].addedLength;
            u += 1;
          }
          return T || (T = m.c ? [m.v[0][0], m.v[0][1]] : [m.v[m._length - 1][0], m.v[m._length - 1][1]]), T;
        },
        vectorOnPath: function(x, A, m) {
          x == 1 ? x = this.v.c : x == 0 && (x = 0.999);
          var E = this.pointOnPath(x, A), d = this.pointOnPath(x + 1e-3, A), g = d[0] - E[0], u = d[1] - E[1], y = Math.sqrt(Math.pow(g, 2) + Math.pow(u, 2));
          if (y === 0)
            return [0, 0];
          var S = m === "tangent" ? [g / y, u / y] : [-u / y, g / y];
          return S;
        },
        tangentOnPath: function(x, A) {
          return this.vectorOnPath(x, A, "tangent");
        },
        normalOnPath: function(x, A) {
          return this.vectorOnPath(x, A, "normal");
        },
        setGroupProperty: expressionHelpers.setGroupProperty,
        getValueAtTime: expressionHelpers.getStaticValueAtTime
      }, extendPrototype([c], o), extendPrototype([c], p), p.prototype.getValueAtTime = l, p.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var k = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(f, x, A, m, E) {
        var d = k(f, x, A, m, E);
        return d.propertyIndex = x.ix, d.lock = !1, A === 3 ? expressionHelpers.searchExpressions(f, x.pt, d) : A === 4 && expressionHelpers.searchExpressions(f, x.ks, d), d.k && f.addDynamicProperty(d), d;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      function e() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
      }
      TextProperty.prototype.getExpressionValue = function(t, r) {
        var i = this.calculateExpression(r);
        if (t.t !== i) {
          var s = {};
          return this.copyData(s, t), s.t = i.toString(), s.__complete = !1, s;
        }
        return t;
      }, TextProperty.prototype.searchProperty = function() {
        var t = this.searchKeyframes(), r = this.searchExpressions();
        return this.kf = t || r, this.kf;
      }, TextProperty.prototype.searchExpressions = e;
    }
    function initialize() {
      addDecorator();
    }
    function SVGComposableEffect() {
    }
    SVGComposableEffect.prototype = {
      createMergeNode: function e(t, r) {
        var i = createNS("feMerge");
        i.setAttribute("result", t);
        var s, n;
        for (n = 0; n < r.length; n += 1)
          s = createNS("feMergeNode"), s.setAttribute("in", r[n]), i.appendChild(s), i.appendChild(s);
        return i;
      }
    };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(e, t, r, i, s) {
      this.filterManager = t;
      var n = createNS("feColorMatrix");
      n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = n, n.setAttribute("result", i + "_tint_1"), e.appendChild(n), n = createNS("feColorMatrix"), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", i + "_tint_2"), e.appendChild(n), this.matrixFilter = n;
      var a = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
      e.appendChild(a);
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0");
      }
    };
    function SVGFillFilter(e, t, r, i) {
      this.filterManager = t;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), e.appendChild(s), this.matrixFilter = s;
    }
    SVGFillFilter.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0");
      }
    };
    function SVGStrokeEffect(e, t, r) {
      this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = [];
    }
    SVGStrokeEffect.prototype.initialize = function() {
      var e = this.elem.layerElement.children || this.elem.layerElement.childNodes, t, r, i, s;
      for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, s = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < s; i += 1)
        t = createNS("path"), r.appendChild(t), this.paths.push({
          p: t,
          m: i
        });
      if (this.filterManager.effectElements[10].p.v === 3) {
        var n = createNS("mask"), a = createElementID();
        n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(r), this.elem.globalData.defs.appendChild(n);
        var l = createNS("g");
        for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); e[0]; )
          l.appendChild(e[0]);
        this.elem.layerElement.appendChild(l), this.masker = n, r.setAttribute("stroke", "#fff");
      } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
        if (this.filterManager.effectElements[10].p.v === 2)
          for (e = this.elem.layerElement.children || this.elem.layerElement.childNodes; e.length; )
            this.elem.layerElement.removeChild(e[0]);
        this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff");
      }
      this.initialized = !0, this.pathMasker = r;
    }, SVGStrokeEffect.prototype.renderFrame = function(e) {
      this.initialized || this.initialize();
      var t, r = this.paths.length, i, s;
      for (t = 0; t < r; t += 1)
        if (this.paths[t].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[t].m], s = this.paths[t].p, (e || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
          var n;
          if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
            var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, o = s.getTotalLength();
            n = "0 0 0 " + o * a + " ";
            var p = o * (l - a), c = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01, k = Math.floor(p / c), f;
            for (f = 0; f < k; f += 1)
              n += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
            n += "0 " + o * 10 + " 0 0";
          } else
            n = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
          s.setAttribute("stroke-dasharray", n);
        }
      if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
        var x = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(x[0] * 255) + "," + bmFloor(x[1] * 255) + "," + bmFloor(x[2] * 255) + ")");
      }
    };
    function SVGTritoneFilter(e, t, r, i) {
      this.filterManager = t;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(s);
      var n = createNS("feComponentTransfer");
      n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", i), this.matrixFilter = n;
      var a = createNS("feFuncR");
      a.setAttribute("type", "table"), n.appendChild(a), this.feFuncR = a;
      var l = createNS("feFuncG");
      l.setAttribute("type", "table"), n.appendChild(l), this.feFuncG = l;
      var o = createNS("feFuncB");
      o.setAttribute("type", "table"), n.appendChild(o), this.feFuncB = o, e.appendChild(n);
    }
    SVGTritoneFilter.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + t[0], n = i[1] + " " + r[1] + " " + t[1], a = i[2] + " " + r[2] + " " + t[2];
        this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a);
      }
    };
    function SVGProLevelsFilter(e, t, r, i) {
      this.filterManager = t;
      var s = this.filterManager.effectElements, n = createNS("feComponentTransfer");
      (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(n)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (n = createNS("feComponentTransfer"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", i), e.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n));
    }
    SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
      var r = createNS(e);
      return r.setAttribute("type", "table"), t.appendChild(r), r;
    }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, i, s) {
      for (var n = 0, a = 256, l, o = Math.min(e, t), p = Math.max(e, t), c = Array.call(null, {
        length: a
      }), k, f = 0, x = s - i, A = t - e; n <= 256; )
        l = n / 256, l <= o ? k = A < 0 ? s : i : l >= p ? k = A < 0 ? i : s : k = i + x * Math.pow((l - e) / A, 1 / r), c[f] = k, f += 1, n += 256 / (a - 1);
      return c.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t, r = this.filterManager.effectElements;
        this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t));
      }
    };
    function SVGDropShadowEffect(e, t, r, i, s) {
      var n = t.container.globalData.renderConfig.filterSize, a = t.data.fs || n;
      e.setAttribute("x", a.x || n.x), e.setAttribute("y", a.y || n.y), e.setAttribute("width", a.width || n.width), e.setAttribute("height", a.height || n.height), this.filterManager = t;
      var l = createNS("feGaussianBlur");
      l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", i + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, e.appendChild(l);
      var o = createNS("feOffset");
      o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, e.appendChild(o);
      var p = createNS("feFlood");
      p.setAttribute("flood-color", "#00ff00"), p.setAttribute("flood-opacity", "1"), p.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = p, e.appendChild(p);
      var c = createNS("feComposite");
      c.setAttribute("in", i + "_drop_shadow_3"), c.setAttribute("in2", i + "_drop_shadow_2"), c.setAttribute("operator", "in"), c.setAttribute("result", i + "_drop_shadow_4"), e.appendChild(c);
      var k = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
      e.appendChild(k);
    }
    extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
          var t = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255)));
        }
        if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i), n = r * Math.sin(i);
          this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", n);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(e, t, r) {
      this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
    }
    SVGMatte3Effect.prototype.findSymbol = function(e) {
      for (var t = 0, r = _svgMatteSymbols.length; t < r; ) {
        if (_svgMatteSymbols[t] === e)
          return _svgMatteSymbols[t];
        t += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
      var r = e.layerElement.parentNode;
      if (r) {
        for (var i = r.children, s = 0, n = i.length; s < n && i[s] !== e.layerElement; )
          s += 1;
        var a;
        s <= n - 2 && (a = i[s + 1]);
        var l = createNS("use");
        l.setAttribute("href", "#" + t), a ? r.insertBefore(l, a) : r.appendChild(l);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
      if (!this.findSymbol(t)) {
        var r = createElementID(), i = createNS("mask");
        i.setAttribute("id", t.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
        var s = e.globalData.defs;
        s.appendChild(i);
        var n = createNS("symbol");
        n.setAttribute("id", r), this.replaceInParent(t, r), n.appendChild(t.layerElement), s.appendChild(n);
        var a = createNS("use");
        a.setAttribute("href", "#" + r), i.appendChild(a), t.data.hd = !1, t.show();
      }
      e.setMatte(t.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, i = t.length; r < i; )
        t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
      this.initialized = !0;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    };
    function SVGGaussianBlurEffect(e, t, r, i) {
      e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
      var s = createNS("feGaussianBlur");
      s.setAttribute("result", i), e.appendChild(s), this.feGaussianBlur = s;
    }
    SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t = 0.3, r = this.filterManager.effectElements[0].p.v * t, i = this.filterManager.effectElements[1].p.v, s = i == 3 ? 0 : r, n = i == 2 ? 0 : r;
        this.feGaussianBlur.setAttribute("stdDeviation", s + " " + n);
        var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", a);
      }
    };
    function TransformEffect() {
    }
    TransformEffect.prototype.init = function(e) {
      this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = !1, this._opMdf = !1;
    }, TransformEffect.prototype.renderFrame = function(e) {
      if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
        var t = this.effectsManager.effectElements, r = t[0].p.v, i = t[1].p.v, s = t[2].p.v === 1, n = t[3].p.v, a = s ? n : t[4].p.v, l = t[5].p.v, o = t[6].p.v, p = t[7].p.v;
        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(a * 0.01, n * 0.01, 1), this.matrix.rotate(-p * degToRads), this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0);
      }
    };
    function SVGTransformEffect(e, t) {
      this.init(t);
    }
    extendPrototype([TransformEffect], SVGTransformEffect);
    function CVTransformEffect(e) {
      this.init(e);
    }
    return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie;
  });
})(lottie$1, lottie$1.exports);
var lottieExports = lottie$1.exports;
const lottie = /* @__PURE__ */ getDefaultExportFromCjs(lottieExports), v = "4.8.0", meta = {
  g: "LottieFiles AE 3.5.1",
  a: "",
  k: "",
  d: "",
  tc: ""
}, fr = 60, ip = 0, op = 504, w = 48, h = 48, nm = "animation", ddd = 0, assets = [], layers = [
  {
    ddd: 0,
    ind: 1,
    ty: 3,
    nm: "Animated face - Null",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 0.061,
            s: [
              12,
              14,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 60.061,
            s: [
              12,
              12,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0.273
            },
            t: 120.061,
            s: [
              12,
              14,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 135.172,
            s: [
              17.054,
              9.957,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 143.057,
            s: [
              17,
              10,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0
            },
            t: 203.057,
            s: [
              17,
              12,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 218.17,
            s: [
              8.914,
              9.979,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 226.055,
            s: [
              9,
              10,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 286.055,
            s: [
              9,
              12,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.5,
              y: 0.21
            },
            t: 346.055,
            s: [
              9,
              10,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 352.596,
            s: [
              10.045,
              11.394,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 359.137,
            s: [
              11.212,
              12.95,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 365.68,
            s: [
              11.782,
              13.709,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 372.221,
            s: [
              11.973,
              13.963,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 376.801,
            s: [
              12,
              14,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.479,
              y: 1
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 426.6,
            s: [
              12,
              12,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 480,
            s: [
              12,
              14,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 2,
    ty: 3,
    nm: "left-eye-controller",
    parent: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 120,
            s: [
              0,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 126,
            s: [
              0,
              5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 132,
            s: [
              0,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 150,
            s: [
              0,
              1,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 210,
            s: [
              0,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 480.6,
            s: [
              0,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.15,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0
            },
            t: 492,
            s: [
              0,
              5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 504,
            s: [
              0,
              0,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: "left-eye",
    cl: "tc-logo-left-eye",
    parent: 2,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 1,
              k: [
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 120,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 126,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          6.5,
                          3
                        ],
                        [
                          1.5,
                          3
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.42,
                    y: 0
                  },
                  t: 132,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 150,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          6.5
                        ],
                        [
                          6.5,
                          8
                        ],
                        [
                          1.5,
                          8
                        ],
                        [
                          0,
                          6.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 210,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 480.6,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.15,
                    y: 1
                  },
                  o: {
                    x: 0.5,
                    y: 0
                  },
                  t: 492,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          6.5,
                          3
                        ],
                        [
                          1.5,
                          3
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  t: 504,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                }
              ],
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.262745112181,
                0.129411771894,
                0.290196090937,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 4,
    ty: 3,
    nm: "right-eye-controller",
    parent: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 120,
            s: [
              16,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 126,
            s: [
              16,
              5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 132,
            s: [
              16,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 150,
            s: [
              16,
              1,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 210,
            s: [
              16,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 480.6,
            s: [
              16,
              0,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.15,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0
            },
            t: 492,
            s: [
              16,
              5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 504,
            s: [
              16,
              0,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 5,
    ty: 4,
    nm: "right-eye",
    cl: "tc-logo-right-eye",
    parent: 4,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 1,
              k: [
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 120,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 126,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          6.5,
                          3
                        ],
                        [
                          1.5,
                          3
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.42,
                    y: 0
                  },
                  t: 132,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 150,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          6.5
                        ],
                        [
                          6.5,
                          8
                        ],
                        [
                          1.5,
                          8
                        ],
                        [
                          0,
                          6.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 210,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 480.6,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.15,
                    y: 1
                  },
                  o: {
                    x: 0.5,
                    y: 0
                  },
                  t: 492,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          6.5,
                          3
                        ],
                        [
                          1.5,
                          3
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  t: 504,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          0,
                          0
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          -0.828
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          1.5,
                          0
                        ],
                        [
                          6.5,
                          0
                        ],
                        [
                          8,
                          1.5
                        ],
                        [
                          8,
                          8.5
                        ],
                        [
                          6.5,
                          10
                        ],
                        [
                          1.5,
                          10
                        ],
                        [
                          0,
                          8.5
                        ],
                        [
                          0,
                          1.5
                        ],
                        [
                          1.5,
                          0
                        ],
                        [
                          1.5,
                          0
                        ]
                      ],
                      c: !0
                    }
                  ]
                }
              ],
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.262745112181,
                0.129411771894,
                0.290196090937,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 6,
    ty: 3,
    nm: "mouth-controller",
    parent: 1,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 120,
            s: [
              5.131,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 126,
            s: [
              3.85,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.42,
              y: 0
            },
            t: 132,
            s: [
              3.848,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 150,
            s: [
              5.131,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 210,
            s: [
              7.172,
              16,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.67,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 383.957,
            s: [
              5.092,
              14.981,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.58,
              y: 1
            },
            o: {
              x: 0.33,
              y: 0
            },
            t: 480.6,
            s: [
              5.131,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.15,
              y: 1
            },
            o: {
              x: 0.5,
              y: 0.35
            },
            t: 492,
            s: [
              3.848,
              15,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 504,
            s: [
              5.13,
              15,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 7,
    ty: 4,
    nm: "mouth",
    cl: "tc-logo-mouth",
    parent: 6,
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 1,
              k: [
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 120,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.683,
                          3.151
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.175,
                          -0.81
                        ],
                        [
                          -3.355,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.355,
                          0
                        ],
                        [
                          0.175,
                          -0.81
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0.683,
                          3.151
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.869,
                          7
                        ],
                        [
                          13.71,
                          1.489
                        ],
                        [
                          12.369,
                          0
                        ],
                        [
                          1.369,
                          0
                        ],
                        [
                          0.027,
                          1.489
                        ],
                        [
                          6.869,
                          7
                        ],
                        [
                          6.869,
                          7
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.15,
                    y: 1
                  },
                  o: {
                    x: 0.5,
                    y: 0
                  },
                  t: 126,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.81,
                          4.051
                        ],
                        [
                          0.983,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.208,
                          -1.041
                        ],
                        [
                          -3.982,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.982,
                          0
                        ],
                        [
                          0.208,
                          -1.041
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.983,
                          0
                        ],
                        [
                          0.81,
                          4.051
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          8.152,
                          9
                        ],
                        [
                          16.271,
                          1.915
                        ],
                        [
                          14.679,
                          0
                        ],
                        [
                          1.624,
                          0
                        ],
                        [
                          0.033,
                          1.915
                        ],
                        [
                          8.152,
                          9
                        ],
                        [
                          8.152,
                          9
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.42,
                    y: 0
                  },
                  t: 132,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.81,
                          4.051
                        ],
                        [
                          0.983,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.208,
                          -1.041
                        ],
                        [
                          -3.982,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.982,
                          0
                        ],
                        [
                          0.208,
                          -1.041
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.983,
                          0
                        ],
                        [
                          0.81,
                          4.051
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          8.152,
                          9
                        ],
                        [
                          16.271,
                          1.915
                        ],
                        [
                          14.679,
                          0
                        ],
                        [
                          1.624,
                          0
                        ],
                        [
                          0.033,
                          1.915
                        ],
                        [
                          8.152,
                          9
                        ],
                        [
                          8.152,
                          9
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.833,
                    y: 0.833
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 150,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.683,
                          3.151
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.175,
                          -0.81
                        ],
                        [
                          -3.355,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.355,
                          0
                        ],
                        [
                          0.175,
                          -0.81
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0.683,
                          3.151
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.869,
                          7
                        ],
                        [
                          13.71,
                          1.489
                        ],
                        [
                          12.369,
                          0
                        ],
                        [
                          1.369,
                          0
                        ],
                        [
                          0.027,
                          1.489
                        ],
                        [
                          6.869,
                          7
                        ],
                        [
                          6.869,
                          7
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.67,
                    y: 1
                  },
                  o: {
                    x: 0.167,
                    y: 0.167
                  },
                  t: 210,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.48,
                          2.251
                        ],
                        [
                          0.582,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.123,
                          -0.578
                        ],
                        [
                          -2.358,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          2.358,
                          0
                        ],
                        [
                          0.123,
                          -0.578
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.582,
                          0
                        ],
                        [
                          0.48,
                          2.25
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          4.828,
                          5
                        ],
                        [
                          9.636,
                          1.064
                        ],
                        [
                          8.693,
                          0
                        ],
                        [
                          0.962,
                          0
                        ],
                        [
                          0.019,
                          1.064
                        ],
                        [
                          4.828,
                          5
                        ],
                        [
                          4.828,
                          5
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.67,
                    y: 1
                  },
                  o: {
                    x: 0.33,
                    y: 0
                  },
                  t: 383.957,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.686,
                          3.168
                        ],
                        [
                          0.833,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.176,
                          -0.814
                        ],
                        [
                          -3.374,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.374,
                          0
                        ],
                        [
                          0.176,
                          -0.814
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.833,
                          0
                        ],
                        [
                          0.686,
                          3.168
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.908,
                          7.039
                        ],
                        [
                          13.789,
                          1.497
                        ],
                        [
                          12.44,
                          0
                        ],
                        [
                          1.377,
                          0
                        ],
                        [
                          0.028,
                          1.497
                        ],
                        [
                          6.908,
                          7.039
                        ],
                        [
                          6.908,
                          7.039
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.58,
                    y: 1
                  },
                  o: {
                    x: 0.33,
                    y: 0
                  },
                  t: 480.6,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.683,
                          3.151
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.175,
                          -0.81
                        ],
                        [
                          -3.355,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.355,
                          0
                        ],
                        [
                          0.175,
                          -0.81
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0.683,
                          3.151
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.869,
                          7
                        ],
                        [
                          13.71,
                          1.489
                        ],
                        [
                          12.369,
                          0
                        ],
                        [
                          1.369,
                          0
                        ],
                        [
                          0.027,
                          1.489
                        ],
                        [
                          6.869,
                          7
                        ],
                        [
                          6.869,
                          7
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  i: {
                    x: 0.15,
                    y: 1
                  },
                  o: {
                    x: 0.5,
                    y: 0
                  },
                  t: 492,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.81,
                          4.051
                        ],
                        [
                          0.983,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.208,
                          -1.041
                        ],
                        [
                          -3.982,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.982,
                          0
                        ],
                        [
                          0.208,
                          -1.041
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.983,
                          0
                        ],
                        [
                          0.81,
                          4.051
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          8.152,
                          9
                        ],
                        [
                          16.271,
                          1.915
                        ],
                        [
                          14.679,
                          0
                        ],
                        [
                          1.624,
                          0
                        ],
                        [
                          0.033,
                          1.915
                        ],
                        [
                          8.152,
                          9
                        ],
                        [
                          8.152,
                          9
                        ]
                      ],
                      c: !0
                    }
                  ]
                },
                {
                  t: 504,
                  s: [
                    {
                      i: [
                        [
                          0,
                          0
                        ],
                        [
                          -0.683,
                          3.151
                        ],
                        [
                          0.828,
                          0
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.175,
                          -0.81
                        ],
                        [
                          -3.355,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      o: [
                        [
                          3.355,
                          0
                        ],
                        [
                          0.175,
                          -0.81
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          -0.828,
                          0
                        ],
                        [
                          0.683,
                          3.151
                        ],
                        [
                          0,
                          0
                        ],
                        [
                          0,
                          0
                        ]
                      ],
                      v: [
                        [
                          6.869,
                          7
                        ],
                        [
                          13.71,
                          1.489
                        ],
                        [
                          12.369,
                          0
                        ],
                        [
                          1.369,
                          0
                        ],
                        [
                          0.027,
                          1.489
                        ],
                        [
                          6.869,
                          7
                        ],
                        [
                          6.869,
                          7
                        ]
                      ],
                      c: !0
                    }
                  ]
                }
              ],
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.262745112181,
                0.129411771894,
                0.290196090937,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 8,
    ty: 4,
    nm: "face",
    cl: "tc-logo-face",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          0,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -5.523
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    11.046,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    11.046
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -11.046,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    5.523,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    11.046
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -11.046,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -11.046
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    20,
                    0
                  ],
                  [
                    38,
                    0
                  ],
                  [
                    48,
                    10
                  ],
                  [
                    48,
                    28
                  ],
                  [
                    28,
                    48
                  ],
                  [
                    20,
                    48
                  ],
                  [
                    0,
                    28
                  ],
                  [
                    0,
                    20
                  ],
                  [
                    20,
                    0
                  ],
                  [
                    20,
                    0
                  ]
                ],
                c: !0
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.941176474094,
                0.854901969433,
                0.984313726425,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill",
            mn: "ADBE Vector Graphic - Fill",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group",
        np: 2,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 504,
    st: 0,
    bm: 0
  }
], markers = [], animationData = {
  v,
  meta,
  fr,
  ip,
  op,
  w,
  h,
  nm,
  ddd,
  assets,
  layers,
  markers
};
function renderPreChat(e) {
  const t = document.querySelector("#tarka-chat > .t-container > .body"), r = document.querySelector(
    "#tarka-chat > .t-container > .scroll-fade"
  ), i = document.querySelector(
    "#tarka-chat > .t-container > .body > .message-container"
  ), s = document.querySelector("#tarka-chat > .t-container > .footer");
  r.style.display = "none", i.style.display = "none", s.style.display = "none";
  const a = e(() => {
    var l;
    (l = t.querySelector(".tc-injected-prechat")) == null || l.remove(), r.style.display = "block", i.style.display = "flex", s.style.display = "flex";
  });
  a.className += " tc-injected-prechat", t.appendChild(a);
}
function bound01(e, t) {
  isOnePointZero(e) && (e = "100%");
  const r = isPercentage(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function clamp01(e) {
  return Math.min(1, Math.max(0, e));
}
function isOnePointZero(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function isPercentage(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function boundAlpha(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function convertToPercentage(e) {
  return Number(e) <= 1 ? `${Number(e) * 100}%` : e;
}
function pad2(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function rgbToRgb(e, t, r) {
  return {
    r: bound01(e, 255) * 255,
    g: bound01(t, 255) * 255,
    b: bound01(r, 255) * 255
  };
}
function rgbToHsl(e, t, r) {
  e = bound01(e, 255), t = bound01(t, 255), r = bound01(r, 255);
  const i = Math.max(e, t, r), s = Math.min(e, t, r);
  let n = 0, a = 0;
  const l = (i + s) / 2;
  if (i === s)
    a = 0, n = 0;
  else {
    const o = i - s;
    switch (a = l > 0.5 ? o / (2 - i - s) : o / (i + s), i) {
      case e:
        n = (t - r) / o + (t < r ? 6 : 0);
        break;
      case t:
        n = (r - e) / o + 2;
        break;
      case r:
        n = (e - t) / o + 4;
        break;
    }
    n /= 6;
  }
  return { h: n, s: a, l };
}
function hue2rgb(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function hslToRgb(e, t, r) {
  let i, s, n;
  if (e = bound01(e, 360), t = bound01(t, 100), r = bound01(r, 100), t === 0)
    s = r, n = r, i = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - a;
    i = hue2rgb(l, a, e + 1 / 3), s = hue2rgb(l, a, e), n = hue2rgb(l, a, e - 1 / 3);
  }
  return { r: i * 255, g: s * 255, b: n * 255 };
}
function rgbToHsv(e, t, r) {
  e = bound01(e, 255), t = bound01(t, 255), r = bound01(r, 255);
  const i = Math.max(e, t, r), s = Math.min(e, t, r);
  let n = 0;
  const a = i, l = i - s, o = i === 0 ? 0 : l / i;
  if (i === s)
    n = 0;
  else {
    switch (i) {
      case e:
        n = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        n = (r - e) / l + 2;
        break;
      case r:
        n = (e - t) / l + 4;
        break;
    }
    n /= 6;
  }
  return { h: n, s: o, v: a };
}
function hsvToRgb(e, t, r) {
  e = bound01(e, 360) * 6, t = bound01(t, 100), r = bound01(r, 100);
  const i = Math.floor(e), s = e - i, n = r * (1 - t), a = r * (1 - s * t), l = r * (1 - (1 - s) * t), o = i % 6, p = [r, a, n, n, l, r][o], c = [l, r, r, a, n, n][o], k = [n, n, l, r, r, a][o];
  return { r: p * 255, g: c * 255, b: k * 255 };
}
function rgbToHex(e, t, r, i) {
  const s = [
    pad2(Math.round(e).toString(16)),
    pad2(Math.round(t).toString(16)),
    pad2(Math.round(r).toString(16))
  ];
  return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function rgbaToHex(e, t, r, i, s) {
  const n = [
    pad2(Math.round(e).toString(16)),
    pad2(Math.round(t).toString(16)),
    pad2(Math.round(r).toString(16)),
    pad2(convertDecimalToHex(i))
  ];
  return s && n[0].startsWith(n[0].charAt(1)) && n[1].startsWith(n[1].charAt(1)) && n[2].startsWith(n[2].charAt(1)) && n[3].startsWith(n[3].charAt(1)) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("");
}
function convertDecimalToHex(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function convertHexToDecimal(e) {
  return parseIntFromHex(e) / 255;
}
function parseIntFromHex(e) {
  return parseInt(e, 16);
}
function numberInputToObject(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
const names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(e) {
  let t = { r: 0, g: 0, b: 0 }, r = 1, i = null, s = null, n = null, a = !1, l = !1;
  return typeof e == "string" && (e = stringInputToObject(e)), typeof e == "object" && (isValidCSSUnit(e.r) && isValidCSSUnit(e.g) && isValidCSSUnit(e.b) ? (t = rgbToRgb(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : isValidCSSUnit(e.h) && isValidCSSUnit(e.s) && isValidCSSUnit(e.v) ? (i = convertToPercentage(e.s), s = convertToPercentage(e.v), t = hsvToRgb(e.h, i, s), a = !0, l = "hsv") : isValidCSSUnit(e.h) && isValidCSSUnit(e.s) && isValidCSSUnit(e.l) && (i = convertToPercentage(e.s), n = convertToPercentage(e.l), t = hslToRgb(e.h, i, n), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = boundAlpha(r), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
const CSS_INTEGER = "[-\\+]?\\d+%?", CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?", CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")", PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?", PERMISSIVE_MATCH4 = (
  // eslint-disable-next-line prettier/prettier
  "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?"
), matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  let t = !1;
  if (names[e])
    e = names[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let r = matchers.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = matchers.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = matchers.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = matchers.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = matchers.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = matchers.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = matchers.hex8.exec(e), r ? {
    r: parseIntFromHex(r[1]),
    g: parseIntFromHex(r[2]),
    b: parseIntFromHex(r[3]),
    a: convertHexToDecimal(r[4]),
    format: t ? "name" : "hex8"
  } : (r = matchers.hex6.exec(e), r ? {
    r: parseIntFromHex(r[1]),
    g: parseIntFromHex(r[2]),
    b: parseIntFromHex(r[3]),
    format: t ? "name" : "hex"
  } : (r = matchers.hex4.exec(e), r ? {
    r: parseIntFromHex(r[1] + r[1]),
    g: parseIntFromHex(r[2] + r[2]),
    b: parseIntFromHex(r[3] + r[3]),
    a: convertHexToDecimal(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = matchers.hex3.exec(e), r ? {
    r: parseIntFromHex(r[1] + r[1]),
    g: parseIntFromHex(r[2] + r[2]),
    b: parseIntFromHex(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function isValidCSSUnit(e) {
  return !!matchers.CSS_UNIT.exec(String(e));
}
class TinyColor {
  constructor(t = "", r = {}) {
    if (t instanceof TinyColor)
      return t;
    typeof t == "number" && (t = numberInputToObject(t)), this.originalInput = t;
    const i = inputToRGB(t);
    this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = r.format ?? i.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  getBrightness() {
    const t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  }
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  getLuminance() {
    const t = this.toRgb();
    let r, i, s;
    const n = t.r / 255, a = t.g / 255, l = t.b / 255;
    return n <= 0.03928 ? r = n / 12.92 : r = Math.pow((n + 0.055) / 1.055, 2.4), a <= 0.03928 ? i = a / 12.92 : i = Math.pow((a + 0.055) / 1.055, 2.4), l <= 0.03928 ? s = l / 12.92 : s = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * i + 0.0722 * s;
  }
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  getAlpha() {
    return this.a;
  }
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(t) {
    return this.a = boundAlpha(t), this.roundA = Math.round(100 * this.a) / 100, this;
  }
  /**
   * Returns whether the color is monochrome.
   */
  isMonochrome() {
    const { s: t } = this.toHsl();
    return t === 0;
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const t = rgbToHsv(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const t = rgbToHsv(this.r, this.g, this.b), r = Math.round(t.h * 360), i = Math.round(t.s * 100), s = Math.round(t.v * 100);
    return this.a === 1 ? `hsv(${r}, ${i}%, ${s}%)` : `hsva(${r}, ${i}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const t = rgbToHsl(this.r, this.g, this.b);
    return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const t = rgbToHsl(this.r, this.g, this.b), r = Math.round(t.h * 360), i = Math.round(t.s * 100), s = Math.round(t.l * 100);
    return this.a === 1 ? `hsl(${r}, ${i}%, ${s}%)` : `hsla(${r}, ${i}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(t = !1) {
    return rgbToHex(this.r, this.g, this.b, t);
  }
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(t = !1) {
    return "#" + this.toHex(t);
  }
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8(t = !1) {
    return rgbaToHex(this.r, this.g, this.b, this.a, t);
  }
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(t = !1) {
    return "#" + this.toHex8(t);
  }
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  toHexShortString(t = !1) {
    return this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
  }
  /**
   * Returns the object as a RGBA object.
   */
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    const t = Math.round(this.r), r = Math.round(this.g), i = Math.round(this.b);
    return this.a === 1 ? `rgb(${t}, ${r}, ${i})` : `rgba(${t}, ${r}, ${i}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const t = (r) => `${Math.round(bound01(r, 255) * 100)}%`;
    return {
      r: t(this.r),
      g: t(this.g),
      b: t(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  toPercentageRgbString() {
    const t = (r) => Math.round(bound01(r, 255) * 100);
    return this.a === 1 ? `rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)` : `rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`;
  }
  /**
   * The 'real' name of the color -if there is one.
   */
  toName() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    const t = "#" + rgbToHex(this.r, this.g, this.b, !1);
    for (const [r, i] of Object.entries(names))
      if (t === i)
        return r;
    return !1;
  }
  toString(t) {
    const r = !!t;
    t = t ?? this.format;
    let i = !1;
    const s = this.a < 1 && this.a >= 0;
    return !r && s && (t.startsWith("hex") || t === "name") ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (i = this.toRgbString()), t === "prgb" && (i = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (i = this.toHexString()), t === "hex3" && (i = this.toHexString(!0)), t === "hex4" && (i = this.toHex8String(!0)), t === "hex8" && (i = this.toHex8String()), t === "name" && (i = this.toName()), t === "hsl" && (i = this.toHslString()), t === "hsv" && (i = this.toHsvString()), i || this.toHexString());
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new TinyColor(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(t = 10) {
    const r = this.toHsl();
    return r.l += t / 100, r.l = clamp01(r.l), new TinyColor(r);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(t = 10) {
    const r = this.toRgb();
    return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new TinyColor(r);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(t = 10) {
    const r = this.toHsl();
    return r.l -= t / 100, r.l = clamp01(r.l), new TinyColor(r);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  tint(t = 10) {
    return this.mix("white", t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  shade(t = 10) {
    return this.mix("black", t);
  }
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  desaturate(t = 10) {
    const r = this.toHsl();
    return r.s -= t / 100, r.s = clamp01(r.s), new TinyColor(r);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(t = 10) {
    const r = this.toHsl();
    return r.s += t / 100, r.s = clamp01(r.s), new TinyColor(r);
  }
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.desaturate(100);
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(t) {
    const r = this.toHsl(), i = (r.h + t) % 360;
    return r.h = i < 0 ? 360 + i : i, new TinyColor(r);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const i = this.toRgb(), s = new TinyColor(t).toRgb(), n = r / 100, a = {
      r: (s.r - i.r) * n + i.r,
      g: (s.g - i.g) * n + i.g,
      b: (s.b - i.b) * n + i.b,
      a: (s.a - i.a) * n + i.a
    };
    return new TinyColor(a);
  }
  analogous(t = 6, r = 30) {
    const i = this.toHsl(), s = 360 / r, n = [this];
    for (i.h = (i.h - (s * t >> 1) + 720) % 360; --t; )
      i.h = (i.h + s) % 360, n.push(new TinyColor(i));
    return n;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const t = this.toHsl();
    return t.h = (t.h + 180) % 360, new TinyColor(t);
  }
  monochromatic(t = 6) {
    const r = this.toHsv(), { h: i } = r, { s } = r;
    let { v: n } = r;
    const a = [], l = 1 / t;
    for (; t--; )
      a.push(new TinyColor({ h: i, s, v: n })), n = (n + l) % 1;
    return a;
  }
  splitcomplement() {
    const t = this.toHsl(), { h: r } = t;
    return [
      this,
      new TinyColor({ h: (r + 72) % 360, s: t.s, l: t.l }),
      new TinyColor({ h: (r + 216) % 360, s: t.s, l: t.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(t) {
    const r = this.toRgb(), i = new TinyColor(t).toRgb(), s = r.a + i.a * (1 - r.a);
    return new TinyColor({
      r: (r.r * r.a + i.r * i.a * (1 - r.a)) / s,
      g: (r.g * r.a + i.g * i.a * (1 - r.a)) / s,
      b: (r.b * r.a + i.b * i.a * (1 - r.a)) / s,
      a: s
    });
  }
  /**
   * Alias for `polyad(3)`
   */
  triad() {
    return this.polyad(3);
  }
  /**
   * Alias for `polyad(4)`
   */
  tetrad() {
    return this.polyad(4);
  }
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  polyad(t) {
    const r = this.toHsl(), { h: i } = r, s = [this], n = 360 / t;
    for (let a = 1; a < t; a++)
      s.push(new TinyColor({ h: (i + a * n) % 360, s: r.s, l: r.l }));
    return s;
  }
  /**
   * compare color vs current color
   */
  equals(t) {
    return this.toRgbString() === new TinyColor(t).toRgbString();
  }
}
const attachmentImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAB0SSURBVHic7d1t7L5nXd/xd/unpRW6tiotwopQFNyUOdFk0KKJBh+wCJUA7YCo0cUs2QBRvIuLEQgEGHdO0AeLmTNz3MldmYMt0QeKheyBMcO5AAJyUwolYEGFctf/fw+uqwJt6f/ud53HdV7H65Wc+fXZ+T3/PY/v8bmO87jO65wY7bzqO6qHVg/Z/v226qLqXtWl27/njyoQDshnqxurm6v/Xb2lemd128iiYIRzRhcwoWPV91Q/VP1g9f1tJnhgjE9U/6H6zerzg2uBxQgAy3l49ePVk6vLBtcC3NlHqmdWbxxdCCxBANiti6qfrn6q+s7BtQAnd6J6fvVr1fHBtcBOCQC78Y3V06tnbP8bWJc3VE+pvji6ENgVAeBofUP1K20m/osG1wKcnbdUT0oI4EAJAEfnsdVvVA8cXAdwdN5WPb76wuhC4KgJAGfviuq3qh8ZXQiwE1YCOEgCwNn5keq/VN80uA5gt6wEcHDOHV3ASt2jenZ1fSZ/mMFjqjdV9xxdCBwVKwCn7xvbLAlePboQYHEeB3AwBIDT8y3V/6z+2ehCgGE8DuAgCACn7juq/1U9YHQhwHBCAKsnAJyaf1L9SfXNowsB9obHAayaAHBy969uqL51dCHA3rESwGr5FsDdu6R6ayZ/4K75dgCrJQB8fedVf5ANf8Dde0z1uur80YXA6RAAvr4X5Kt+wKl5XPXmrASwIvYA3LV/2ebTv38f4HTYE8BqmODu7Irqz/OGP+DM+HYAq+ARwJ39ZiZ/4Mx5HMAqCABf60fb/KwvwNnw7QD2nkcAX/EN1f+tHjS6EOBg2BPA3rIC8BW/kskfOFq+IsjesgKw8Y3VB6uLBtcBHCYrAewdKwAbz8jkD+yOPQHsHSsAda82n/790A+wa1YC2BtWAOrfZPIHlmFPAHvDCkC9q3rY6CKAqVgJYLjZVwC+N5M/sDx7AmCwX69O7Nnx5epPqmdVj6gua/PLhMDG6DF6lMf1eRwAiztW3dz4BnD78bnqRW0mfODrGz1WhQBYue9r/MC//fj9Nj9CBJzc6PEqBMDK/VLjB/3x6tnZjAmnY/S43dXx1uwJgEW8rbGD/bbqX+38KuHwjJ6od3lYCYAdO6/6+8YO9F/Z+VXCYRo9SQsBsGIPa+wA//0s+8OZGj1BCwGwYk9s3MC+NRv+4GyMnpyXOuwJYKdmfRHQQwee+z9WHxl4fmAdvCwIduB3G5Pov5zv+cPZGv3JfOnD4wB2YtYVgCsHnfcd1ScGnRtYp8e12TckBHCkZg0Alww675sHnRdYt8e16R8eB3BkZg0AFw067zsGnRdYP3sCOFKzBoB7Dzrv+wedFzgMj6lel8cBcMa+0JjNPAYtnL3Rm/L24fAVQc7arC+jOTHovLP+e8NRGjV+983bqse3+UADp23WRwAAa2dPAGdFAABYLyGAMyYAAKybEMAZEQAA1k8I4LQJAACHQQjgtAgAAKfmLaMLOAXeEwAnMeq7u8DZGzV+z2vzCXv0OwC8JwDOggAA6zVy/AoBsHICAKzX6PErBMCKjW4gwJnbh/ErBMBK7UMDAc7MvoxfIQBWaF8aCHD69mn8CgGwMvvUQIDTs2/jVwiAFdm3BgKcun0cv0IArMQ+NhDg1Ozr+BUCYAX2tYEAJ7fP41cIgD23zw0EuHv7Pn6FANhj+95AgK9vDeNXCIA9tYYGAty1tYxfIQD20FoaCHBnaxq/QgDsmTU1EOBrrW38CgGwR9bWQICvWOP4FQJgT6yxgQAbax2/QgDsgbU2EGDd41cIgMHW3EBgdmsfv0IADLT2BgIzO4TxKwTAIIfQQGBWhzJ+hQAY4FAaCMzokMavEAALO6QGArM5tPErBMCCDq2BwEwOcfwKAbCQQ2wgMItDHb9CACzgUBsIzOCQx68QADt2yA0EDt2hj18hAHbo0BsIHLIZxq8QADsyQwOBQzXL+BUCYAdmaSBwiGYav0IAHLGZGggcmtnGrxAAR2i2BgKHZMbxKwTAEZmxgcChmHX8CgFwBGZtIHAIZh6/QgCcpZkbCKzd7ONXCICzMHsDgTUzfoUAOGMaCKyX8bshBMAZ0EBgvYzfrxAC4DRpILBexu/XEgLgNGggsF7G750JAXCKNBBYL+P3rgkBcAo0EFgv4/frEwLgJDQQWC/j9+4JAXA3NBBYL+P35IQA+Do0EFgv4/fUCAFwFzQQWC/j99QJAXAHGgisl/F7eoQA+CoaCKyX8Xv6hADY0kBgvYzfMyMEQBoIrJnxe+aEAKangcB6Gb9nRwhgahoIrJfxe/aEAKalgcB6Gb9HQwhgShoIrNcXGjN+z1/i4hYmBDAdAQDW65ONGb+XLXFxA5xfXd/4Cf5Ujus7zCDGggQAWK8PNmb8PmKBaxvFSsCEzh1dAMBp+rtB533UoPMu4UvVtdWbRxdyCh7TJqwIAZwRKwCwXm9vzPh9+xIXN5jHARw8AQDW63cbM36/3OHuA/hqQsAkPAIA1ua9g857rPr5Qede0herJ7aOxwGPa1OnxwGcMisAsF5PbNwYvrV6wO4vcS/YGMhBEgBgvb6rsZPNG6tzdn6V+8HjAA6OAADrdV6bbwKMnGx+dedXuT+EAA6KAADr9rbGTjTHqyfv/Cr3hxDAwRAAYN1+sfETzfHqhc2zmdqeAA6CAADr9r2Nn2RuP97YPBsDrQSwegIArNux6uONn2RuP26tXlxdvsuL3hNCAKsmAMD6vbzxE8wdj9uqP61+obqqTSA4xAlICDgAs3yV5Y5GTcaz/nvDLjy8+rPRRbAKb6se3+anpNmadUISAOAwvKt62OgiWAUh4A5m2b0KHKbfGV0Aq/GY6nV5HPAPZv1EagUADsO9qg9W3zy4DtbDSsCWFQBgzT5bvWJ0EazKY6r/lvlv2k+kVgDgcFxcfWj7F07V85rrlc53Mn0CAlbvM9VvjC6C1fn31Y+OLmKkWT+RWgGAw3Jh9ZfVg0YXwqp8sPqOJt0PYAUAOAS3Vj87ughW54HVvx1dxCizfiK1AgCH6S3VY0cXwap8rPrHbX7caSpWAIBD8u+qT40uglX5lupfjC5iBAEAOCQfqX48v73B6blmdAEjCADAoXlr9ZLRRbAqV48uYIRZn0nbAwCH7bzqj6rvH10Iq/DxNo8CpjLrhCQAwOG7uPrj6rtHF8Le+0J1wegiljbrhCQAwBzuV93Q5utecHem68/2AACH7KY2737/5OhCYN8IAMChe3ebvQAfHl0I7BMBAJjBu6tHVO8aXQjsCwEAmMXHqh+s3j66ENgHAgAwk7+pfqh6ThO++hW+2nS7Hrd8CwB4dPV71eWjC2EvTNefrQAAs/rD6vva/IAQTEcAAGZ2Y5v3wD+2+uvBtcCiplvy2PIIALijC6tfqn62+keDa2F50/Xn6S54SwAAvp6Lqp+qfrm67+BaWM50/Xm6C94SAICTuXf109VPVg8bXAu7N11/nu6CtwQA4HR8Z/Vj1U9kVeBQTdefp7vgLQEAOFNXtvkK4aOrH64uGVsOR2S6/jzdBW8JAMBRuEf10O3xkO3fb2/z+OCiNuHg3tX5owrklE3Xn6e74C0BAGA/6c8L8R4AAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACd1jdAFM71h1dXVNdVV1ZXVpdd7IouCIfam6pfpAdUN1ffWO6raRRTG3c0YXMMiJQeed9d/7rlxY/Uz1c9V9BtcCI3yiemn1iurWwbXsE/15IdNd8JYbbKxrq5dV9x9dCOyBj7QJwq8fXcie0J8XYg8ASzqnenb1mkz+cLsrqtdVL0xPZkHTJZ4tCXN551avbvPpH7hrr62eUh0fXchA+vNCpE2W8vxM/nAy11XPHV0Ec5gu8WxJmMu6ts0nG+DkTlRPqt4wupBB9OeFTHfBW26w5VxYvafNc07g1Hy0ekj1udGFDKA/L8QjAHbtmZn84XTdv3ra6CI4bNMlni0JcxnHqo/le/5wJm5uEwRme1mQ/rwQKwDs0qMy+cOZurx65OgiOFwCALt0zegCYOWMIXZGAGCXrhpdAKycMcTOCADs0pWjC4CVe/DoAjhcAgC7dPHoAmDlLhldAIdLAACACQkA7NJnRhcAK/fp0QVwuAQAdun9owuAlXvf6AI4XAIAu3TD6AJg5YwhdkYAYJeuH10ArJwxxM5M9+rDLa+aXMax6qbqstGFwArdXN2vOj66kIXpzwuxAsAu3Va9dHQRsFIvbr7JnwVNl3i2JMzlXNDm54AfMLoQWJEb2/wc8K2jCxlAf16IFQB27fPVsxo3qGFtTlTPaM7JnwUJACzh9dULRhcBK/G86k2ji+DwTbfksWWJaXnnVq+qrhtdCOyx11RPbe5n//rzQqwAsJTj1ZOr5+RxANzRiepFmfxZ0HSJZ0vCHOsJ1curK0YXAnvgw9Uzs+x/O/15IdNd8JYbbLwLqqe32SB4+eBaYISbq5dUr2yzWZYN/Xkh013wlhtsf5xbXVVds/374OrS6vyRRcER+2J1S5vfx7ihzRv+3pnl/ruiPy9kugvecoMB7Cf9eSE2AQLAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATOgeowtgeseqq6trqquqK6tLq/NGFgVH7EvVLdUHqhuq66t3VLeNLIq5nTO6gEFODDrvrP/ed+XC6meqn6vuM7gWGOET1UurV1S3Dq5ln+jPC5nugrfcYGNdW72suv/oQmAPfKRNEH796EL2hP68EHsAWNI51bOr12Tyh9tdUb2uemF6MguaLvFsSZjLO7d6dZtP/8Bde231lOr46EIG0p8XIm2ylOdn8oeTua567ugimMN0iWdLwlzWtW0+2QAnd6J6UvWG0YUMoj8vZLoL3nKDLefC6j1tnnMCp+aj1UOqz40uZAD9eSEeAbBrz8zkD6fr/tXTRhfBYZsu8WxJmMs4Vn0s3/OHM3FzmyAw28uC9OeFWAFglx6VyR/O1OXVI0cXweESANila0YXACtnDLEzAgC7dNXoAmDljCF2RgBgl64cXQCs3INHF8DhEgDYpYtHFwArd8noAjhcAgAATEgAYJc+M7oAWLlPjy6AwyUAsEvvH10ArNz7RhfA4RIA2KUbRhcAK2cMsTMCALt0/egCYOWMIXZmulcfbnnV5DKOVTdVl40uBFbo5up+1fHRhSxMf16IFQB26bbqpaOLgJV6cfNN/ixousSzJWEu54I2Pwf8gNGFwIrc2ObngG8dXcgA+vNCrACwa5+vntW4QQ1rc6J6RnNO/ixIAGAJr69eMLoIWInnVW8aXQSHb7oljy1LTMs7t3pVdd3oQmCPvaZ6anM/+9efF2IFgKUcr55cPSePA+COTlQvyuTPgqZLPFsS5lhPqF5eXTG6ENgDH66emWX/2+nPC5nugrfcYONdUD29zQbBywfXAiPcXL2kemWbzbJs6M8Lme6Ct9xg++Pc6qrqmu3fB1eXVuePLAqO2BerW9r8PsYNbd7w984s998V/Xkh013wlhsMYD/pzwuxCRAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEL3GF0A0ztWXV1dU11VXVldWp03sig4Yl+qbqk+UN1QXV+9o7ptZFHM7ZzRBQxyYtB5Z/33visXVj9T/Vx1n8G1wAifqF5avaK6dXAt+0R/Xsh0F7zlBhvr2upl1f1HFwJ74CNtgvDrRxeyJ/TnhdgDwJLOqZ5dvSaTP9zuiup11QvTk1nQdIlnS8Jc3rnVq9t8+gfu2murp1THRxcykP68EGmTpTw/kz+czHXVc0cXwRymSzxbEuayrm3zyQY4uRPVk6o3jC5kEP15IdNd8JYbbDkXVu9p85wTODUfrR5SfW50IQPozwvxCIBde2Ymfzhd96+eNroIDtt0iWdLwlzGsepj+Z4/nImb2wSB2V4WpD8vxAoAu/SoTP5wpi6vHjm6CA6XAMAuXTO6AFg5Y4idEQDYpatGFwArZwyxMwIAu3Tl6AJg5R48ugAOlwDALl08ugBYuUtGF8DhEgAAYEICALv0mdEFwMp9enQBHC4BgF16/+gCYOXeN7oADpcAwC7dMLoAWDljiJ0RANil60cXACtnDLEz0736cMurJpdxrLqpumx0IbBCN1f3q46PLmRh+vNCrACwS7dVLx1dBKzUi5tv8mdB0yWeLQlzORe0+TngB4wuBFbkxjY/B3zr6EIG0J8XYgWAXft89azGDWpYmxPVM5pz8mdBAgBLeH31gtFFwEo8r3rT6CI4fNMteWxZYlreudWrqutGFwJ77DXVU5v72b/+vBArACzlePXk6jl5HAB3dKJ6USZ/FjRd4tmSMMd6QvXy6orRhcAe+HD1zCz7305/Xsh0F7zlBhvvgurpbTYIXj64Fhjh5uol1SvbbJZlQ39eyHQXvOUG2x/nVldV12z/Pri6tDp/ZFFwxL5Y3dLm9zFuaPOGv3dmuf+u6M8Lme6Ct9xgAPtJf16ITYAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABO6x+gCmN6x6urqmuqq6srq0uq8kUWxc1+qbqk+UN1QXV+9o7ptZFHA4Tsx6OArLqx+ufpE4/5/OPbruLn6xTb3BvMadf8xCTfYWNdWNzZ+wnHs5/Hh6okxq1H3HZNwg41xTvXs6njjJxnHfh/Hqxdmn9KMRt1z0zlndAGDjPqfPeu/d20a+avbfPqHU/Xa6iltAgFz0J8XIl2zlOdn8uf0XVc9d3QRcIimSzxbEuayrm3zSQ7OxInqSdUbRhfCIvTnhUx3wVtusOVcWL2numJ0IazaR6uHVJ8bXQg7pz8vxCMAdu2Zmfw5e/evnja6CDgk0yWeLQlzGceqj1X3GV0IB+HmNkHAy4IOm/68ECsA7NKjMvlzdC6vHjm6CDgUAgC7dM3oAjg47ik4IgIAu3TV6AI4OO4pOCICALt05egCODgPHl0AHAoBgF26eHQBHJxLRhcAh0IAAIAJCQDs0mdGF8DB+fToAuBQCADs0vtHF8DBed/oAuBQCADs0g2jC+DguKfgiAgA7NL1owvg4Lin4IhM9+rDLa+aXMax6qbqstGFcBBuru5XHR9dCDulPy/ECgC7dFv10tFFcDBenMkfjsx0iWdLwlzOBW1+DvgBowth1W5s83PAt44uhJ3TnxdiBYBd+3z1rMYNatbvRPWMTP5wpAQAlvD66gWji2C1nle9aXQRcGimW/LYssS0vHOrV1XXjS6EVXlN9dQ8+5+J/rwQKwAs5Xj15Oo5eRzAyZ2oXpTJHzhiJwYdbDyh+nDj/j849vv4UPX4mNWo+45JuMHGu6D6herjjZ9wHPtxfLz6+Tb3BvMadf9NZ7pnHluj/mfP+u99d86trqqu2f59cHVpdf7Ioti5L1a3tPm9iBvavOHvnVnuR39ezHQXvOUGA9hP+vNCbAIEgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEZg0AXxx03vMHnRdgDe456LxfGHTeoWYNAH836LyXDDovwBqM6pGj5oShZg0Afz/ovFcOOi/AGnzboPMKABMZ9T/7UYPOC7AGo3rk3w4671CzBoBPDzrvNYPOC7AGjxt03s8MOu9QswaADww67yOrywadG2Cf3bd6xKBzj5oThpo1ALx30HmPVT8/6NwA++wXGjcnvWfQeRngidWJQcet1QN2f4kAq/HA6vON68uP3/kVsje+q3E32onqjdU5O79KgP13TvXmxvbkf7rzq2RvnNfmmwAjb7hf3flVAuy/X2tsL/7bNnMCE3lbY2+649WTd36VAPvrqW164che/D92fpXsnV9s7E13ewh4YfNuxgTmdE71S9Vtje/Dz9rxtbKHvrfxN97txxuzMRCYw7c2/pn/Vx/fs9vLZR8dqz7e+Jvv9uPW6sXV5bu8aIBB7lu9pLG7/e943JQV2Gm9vPE34B2P26o/bfOd2KvaBAK/IgisyT3b9K6r2zxuvaH9WO6/4/HSXf0DrMHsX0V7ePVno4sAYIh/Xv2f0UWMMnsAqHpX9bDRRQCwqL9s806YaXn2Ub8zugAAFvfbowsYzQpA3av6YPXNg+sAYBmfqh7UuJ+G3wtWAOqz1StHFwHAYn69ySf/sgJwu4urD23/AnC4/rbNuwg+PbqQ0awAbHym+o3RRQCwcy/L5F9ZAfhqF7bZFfqg0YUAsBMfavPLf58bXcg+sALwFbdWPzu6CAB25mmZ/P+BAPC1rq/+++giADhyb67+YHQR+8QjgDu7ovrz6ptGFwLAkfhkmx/9uXF0IfvECsCdfaT68TbviQZg3U5U/zqT/50cG13AnvqrNi8Iunp0IQCclRdVvzW6iH3kEcDXd171R9X3jy4EgDPyx9Wjqy+PLmQfCQB37+I2N9B3jy4EgNPyl9UPVH8zupB9JQCc3P3a/Jb1AwfXAcCpubHNI9wPjy5kn9kEeHI3VY9ps4sUgP32yeqHM/mflABwat7dZi+AGwpgf91U/VCbns1JCACn7t3VI6p3jS4EgDv5f2169F+MLmQtBIDT87HqB6u3jy4EgH/wx9Wj2rzHhVPkPQCn79bqv7Z5ucQPZCMlwCgnqldUP1Z9dnAtq2PyOjuPrn6vunx0IQCT+WT1E9VbRxeyVh4BnJ0/rL6vesvoQgAmcn2bd/ub/M+CAHD2bqyuqR5b/fXgWgAO2QeqH6l+NO/2P2v2AByd91b/qc0rJx9e3XNsOQAH4zPVC6unttntzxGwB2A3Lqp+qvrl6r6DawFYq09Vr6z+Y3XL4FoOjgCwW/eufrr6yephg2sBWIu/qP5z9dvV3w+u5WAJAMv5zjZfVfmJrAoA3NGnqje0+Zr1nw6uZQoCwBhXtvkK4aPbvLP6krHlACzus9U723yb6g+rP6+OD61oMgLAePeoHro9HrL9++1tHh9c1CYc3Ls6f1SBAKfpi22W7j9d/d32+Ks2m6XfW71ne3x5VIHU/wefrK9LjekI6QAAAABJRU5ErkJggg==", downloadImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVR4nO2WTQrCQAyFP1T8uZOewsO4c2u9hRs3rgTB1gNVL1EYCYwiQ0szmVFc9MGDWbzJRwKBQL+mwB64Ay5wDRQ+k6yiBeACSyZZbZ24wI8cIKd0sgaQWcPo/mt0a6CJKO463PhanRoBpwygMzDu60oCxwTIFZhpR2iFlcBcC7HCSgskFlalQLSwKgekD3aLgWgXTmCHj/wFWMTUj9ls2bMNsAUmyj8mkEXu56DaP5ZfgKx8bWGozqlU7wQkx5/AXp3l9PvAfAKV7hPWLfRRtQAAAABJRU5ErkJggg==";
function _getDefaults() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let _defaults = _getDefaults();
function changeDefaults(e) {
  _defaults = e;
}
const escapeTest = /[&<>"']/, escapeReplace = new RegExp(escapeTest.source, "g"), escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g"), escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, getEscapeReplacement = (e) => escapeReplacements[e];
function escape$1(e, t) {
  if (t) {
    if (escapeTest.test(e))
      return e.replace(escapeReplace, getEscapeReplacement);
  } else if (escapeTestNoEncode.test(e))
    return e.replace(escapeReplaceNoEncode, getEscapeReplacement);
  return e;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(e) {
  return e.replace(unescapeTest, (t, r) => (r = r.toLowerCase(), r === "colon" ? ":" : r.charAt(0) === "#" ? r.charAt(1) === "x" ? String.fromCharCode(parseInt(r.substring(2), 16)) : String.fromCharCode(+r.substring(1)) : ""));
}
const caret = /(^|[^\[])\^/g;
function edit(e, t) {
  let r = typeof e == "string" ? e : e.source;
  t = t || "";
  const i = {
    replace: (s, n) => {
      let a = typeof n == "string" ? n : n.source;
      return a = a.replace(caret, "$1"), r = r.replace(s, a), i;
    },
    getRegex: () => new RegExp(r, t)
  };
  return i;
}
function cleanUrl(e) {
  try {
    e = encodeURI(e).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return e;
}
const noopTest = { exec: () => null };
function splitCells(e, t) {
  const r = e.replace(/\|/g, (n, a, l) => {
    let o = !1, p = a;
    for (; --p >= 0 && l[p] === "\\"; )
      o = !o;
    return o ? "|" : " |";
  }), i = r.split(/ \|/);
  let s = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), t)
    if (i.length > t)
      i.splice(t);
    else
      for (; i.length < t; )
        i.push("");
  for (; s < i.length; s++)
    i[s] = i[s].trim().replace(/\\\|/g, "|");
  return i;
}
function rtrim(e, t, r) {
  const i = e.length;
  if (i === 0)
    return "";
  let s = 0;
  for (; s < i; ) {
    const n = e.charAt(i - s - 1);
    if (n === t && !r)
      s++;
    else if (n !== t && r)
      s++;
    else
      break;
  }
  return e.slice(0, i - s);
}
function findClosingBracket(e, t) {
  if (e.indexOf(t[1]) === -1)
    return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++)
    if (e[i] === "\\")
      i++;
    else if (e[i] === t[0])
      r++;
    else if (e[i] === t[1] && (r--, r < 0))
      return i;
  return -1;
}
function outputLink(e, t, r, i) {
  const s = t.href, n = t.title ? escape$1(t.title) : null, a = e[1].replace(/\\([\[\]])/g, "$1");
  if (e[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const l = {
      type: "link",
      raw: r,
      href: s,
      title: n,
      text: a,
      tokens: i.inlineTokens(a)
    };
    return i.state.inLink = !1, l;
  }
  return {
    type: "image",
    raw: r,
    href: s,
    title: n,
    text: escape$1(a)
  };
}
function indentCodeCompensation(e, t) {
  const r = e.match(/^(\s+)(?:```)/);
  if (r === null)
    return t;
  const i = r[1];
  return t.split(`
`).map((s) => {
    const n = s.match(/^\s+/);
    if (n === null)
      return s;
    const [a] = n;
    return a.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
class _Tokenizer {
  // set by the lexer
  constructor(t) {
    X(this, "options");
    X(this, "rules");
    // set by the lexer
    X(this, "lexer");
    this.options = t || _defaults;
  }
  space(t) {
    const r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0)
      return {
        type: "space",
        raw: r[0]
      };
  }
  code(t) {
    const r = this.rules.block.code.exec(t);
    if (r) {
      const i = r[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: r[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : rtrim(i, `
`)
      };
    }
  }
  fences(t) {
    const r = this.rules.block.fences.exec(t);
    if (r) {
      const i = r[0], s = indentCodeCompensation(i, r[3] || "");
      return {
        type: "code",
        raw: i,
        lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2],
        text: s
      };
    }
  }
  heading(t) {
    const r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (/#$/.test(i)) {
        const s = rtrim(i, "#");
        (this.options.pedantic || !s || / $/.test(s)) && (i = s.trim());
      }
      return {
        type: "heading",
        raw: r[0],
        depth: r[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(t) {
    const r = this.rules.block.hr.exec(t);
    if (r)
      return {
        type: "hr",
        raw: r[0]
      };
  }
  blockquote(t) {
    const r = this.rules.block.blockquote.exec(t);
    if (r) {
      const i = rtrim(r[0].replace(/^ *>[ \t]?/gm, ""), `
`), s = this.lexer.state.top;
      this.lexer.state.top = !0;
      const n = this.lexer.blockTokens(i);
      return this.lexer.state.top = s, {
        type: "blockquote",
        raw: r[0],
        tokens: n,
        text: i
      };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim();
      const s = i.length > 1, n = {
        type: "list",
        raw: "",
        ordered: s,
        start: s ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
      const a = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let l = "", o = "", p = !1;
      for (; t; ) {
        let c = !1;
        if (!(r = a.exec(t)) || this.rules.block.hr.test(t))
          break;
        l = r[0], t = t.substring(l.length);
        let k = r[2].split(`
`, 1)[0].replace(/^\t+/, (d) => " ".repeat(3 * d.length)), f = t.split(`
`, 1)[0], x = 0;
        this.options.pedantic ? (x = 2, o = k.trimStart()) : (x = r[2].search(/[^ ]/), x = x > 4 ? 1 : x, o = k.slice(x), x += r[1].length);
        let A = !1;
        if (!k && /^ *$/.test(f) && (l += f + `
`, t = t.substring(f.length + 1), c = !0), !c) {
          const d = new RegExp(`^ {0,${Math.min(3, x - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), g = new RegExp(`^ {0,${Math.min(3, x - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), u = new RegExp(`^ {0,${Math.min(3, x - 1)}}(?:\`\`\`|~~~)`), y = new RegExp(`^ {0,${Math.min(3, x - 1)}}#`);
          for (; t; ) {
            const S = t.split(`
`, 1)[0];
            if (f = S, this.options.pedantic && (f = f.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), u.test(f) || y.test(f) || d.test(f) || g.test(t))
              break;
            if (f.search(/[^ ]/) >= x || !f.trim())
              o += `
` + f.slice(x);
            else {
              if (A || k.search(/[^ ]/) >= 4 || u.test(k) || y.test(k) || g.test(k))
                break;
              o += `
` + f;
            }
            !A && !f.trim() && (A = !0), l += S + `
`, t = t.substring(S.length + 1), k = f.slice(x);
          }
        }
        n.loose || (p ? n.loose = !0 : /\n *\n *$/.test(l) && (p = !0));
        let m = null, E;
        this.options.gfm && (m = /^\[[ xX]\] /.exec(o), m && (E = m[0] !== "[ ] ", o = o.replace(/^\[[ xX]\] +/, ""))), n.items.push({
          type: "list_item",
          raw: l,
          task: !!m,
          checked: E,
          loose: !1,
          text: o,
          tokens: []
        }), n.raw += l;
      }
      n.items[n.items.length - 1].raw = l.trimEnd(), n.items[n.items.length - 1].text = o.trimEnd(), n.raw = n.raw.trimEnd();
      for (let c = 0; c < n.items.length; c++)
        if (this.lexer.state.top = !1, n.items[c].tokens = this.lexer.blockTokens(n.items[c].text, []), !n.loose) {
          const k = n.items[c].tokens.filter((x) => x.type === "space"), f = k.length > 0 && k.some((x) => /\n.*\n/.test(x.raw));
          n.loose = f;
        }
      if (n.loose)
        for (let c = 0; c < n.items.length; c++)
          n.items[c].loose = !0;
      return n;
    }
  }
  html(t) {
    const r = this.rules.block.html.exec(t);
    if (r)
      return {
        type: "html",
        block: !0,
        raw: r[0],
        pre: r[1] === "pre" || r[1] === "script" || r[1] === "style",
        text: r[0]
      };
  }
  def(t) {
    const r = this.rules.block.def.exec(t);
    if (r) {
      const i = r[1].toLowerCase().replace(/\s+/g, " "), s = r[2] ? r[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return {
        type: "def",
        tag: i,
        raw: r[0],
        href: s,
        title: n
      };
    }
  }
  table(t) {
    const r = this.rules.block.table.exec(t);
    if (!r || !/[:|]/.test(r[2]))
      return;
    const i = splitCells(r[1]), s = r[2].replace(/^\||\| *$/g, "").split("|"), n = r[3] && r[3].trim() ? r[3].replace(/\n[ \t]*$/, "").split(`
`) : [], a = {
      type: "table",
      raw: r[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === s.length) {
      for (const l of s)
        /^ *-+: *$/.test(l) ? a.align.push("right") : /^ *:-+: *$/.test(l) ? a.align.push("center") : /^ *:-+ *$/.test(l) ? a.align.push("left") : a.align.push(null);
      for (const l of i)
        a.header.push({
          text: l,
          tokens: this.lexer.inline(l)
        });
      for (const l of n)
        a.rows.push(splitCells(l, a.header.length).map((o) => ({
          text: o,
          tokens: this.lexer.inline(o)
        })));
      return a;
    }
  }
  lheading(t) {
    const r = this.rules.block.lheading.exec(t);
    if (r)
      return {
        type: "heading",
        raw: r[0],
        depth: r[2].charAt(0) === "=" ? 1 : 2,
        text: r[1],
        tokens: this.lexer.inline(r[1])
      };
  }
  paragraph(t) {
    const r = this.rules.block.paragraph.exec(t);
    if (r) {
      const i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return {
        type: "paragraph",
        raw: r[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(t) {
    const r = this.rules.block.text.exec(t);
    if (r)
      return {
        type: "text",
        raw: r[0],
        text: r[0],
        tokens: this.lexer.inline(r[0])
      };
  }
  escape(t) {
    const r = this.rules.inline.escape.exec(t);
    if (r)
      return {
        type: "escape",
        raw: r[0],
        text: escape$1(r[1])
      };
  }
  tag(t) {
    const r = this.rules.inline.tag.exec(t);
    if (r)
      return !this.lexer.state.inLink && /^<a /i.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: r[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: r[0]
      };
  }
  link(t) {
    const r = this.rules.inline.link.exec(t);
    if (r) {
      const i = r[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const a = rtrim(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0)
          return;
      } else {
        const a = findClosingBracket(r[2], "()");
        if (a > -1) {
          const o = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + a;
          r[2] = r[2].substring(0, a), r[0] = r[0].substring(0, o).trim(), r[3] = "";
        }
      }
      let s = r[2], n = "";
      if (this.options.pedantic) {
        const a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
        a && (s = a[1], n = a[3]);
      } else
        n = r[3] ? r[3].slice(1, -1) : "";
      return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), outputLink(r, {
        href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
        title: n && n.replace(this.rules.inline.anyPunctuation, "$1")
      }, r[0], this.lexer);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      const s = (i[2] || i[1]).replace(/\s+/g, " "), n = r[s.toLowerCase()];
      if (!n) {
        const a = i[0].charAt(0);
        return {
          type: "text",
          raw: a,
          text: a
        };
      }
      return outputLink(i, n, i[0], this.lexer);
    }
  }
  emStrong(t, r, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(t);
    if (!s || s[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(s[1] || s[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const a = [...s[0]].length - 1;
      let l, o, p = a, c = 0;
      const k = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, r = r.slice(-1 * t.length + a); (s = k.exec(r)) != null; ) {
        if (l = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !l)
          continue;
        if (o = [...l].length, s[3] || s[4]) {
          p += o;
          continue;
        } else if ((s[5] || s[6]) && a % 3 && !((a + o) % 3)) {
          c += o;
          continue;
        }
        if (p -= o, p > 0)
          continue;
        o = Math.min(o, o + p + c);
        const f = [...s[0]][0].length, x = t.slice(0, a + s.index + f + o);
        if (Math.min(a, o) % 2) {
          const m = x.slice(1, -1);
          return {
            type: "em",
            raw: x,
            text: m,
            tokens: this.lexer.inlineTokens(m)
          };
        }
        const A = x.slice(2, -2);
        return {
          type: "strong",
          raw: x,
          text: A,
          tokens: this.lexer.inlineTokens(A)
        };
      }
    }
  }
  codespan(t) {
    const r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(/\n/g, " ");
      const s = /[^ ]/.test(i), n = /^ /.test(i) && / $/.test(i);
      return s && n && (i = i.substring(1, i.length - 1)), i = escape$1(i, !0), {
        type: "codespan",
        raw: r[0],
        text: i
      };
    }
  }
  br(t) {
    const r = this.rules.inline.br.exec(t);
    if (r)
      return {
        type: "br",
        raw: r[0]
      };
  }
  del(t) {
    const r = this.rules.inline.del.exec(t);
    if (r)
      return {
        type: "del",
        raw: r[0],
        text: r[2],
        tokens: this.lexer.inlineTokens(r[2])
      };
  }
  autolink(t) {
    const r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, s;
      return r[2] === "@" ? (i = escape$1(r[1]), s = "mailto:" + i) : (i = escape$1(r[1]), s = i), {
        type: "link",
        raw: r[0],
        text: i,
        href: s,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  url(t) {
    var i;
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let s, n;
      if (r[2] === "@")
        s = escape$1(r[0]), n = "mailto:" + s;
      else {
        let a;
        do
          a = r[0], r[0] = ((i = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : i[0]) ?? "";
        while (a !== r[0]);
        s = escape$1(r[0]), r[1] === "www." ? n = "http://" + r[0] : n = r[0];
      }
      return {
        type: "link",
        raw: r[0],
        text: s,
        href: n,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  inlineText(t) {
    const r = this.rules.inline.text.exec(t);
    if (r) {
      let i;
      return this.lexer.state.inRawBlock ? i = r[0] : i = escape$1(r[0]), {
        type: "text",
        raw: r[0],
        text: i
      };
    }
  }
}
const newline = /^(?: *(?:\n|$))+/, blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, bullet = /(?:[*+-]|\d{1,9}[.)])/, lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, blockText = /^[^\n]+/, _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/, def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex(), _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex(), blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex(), blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
}, gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex(), blockGfm = {
  ...blockNormal,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
}, blockPedantic = {
  ...blockNormal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br = /^( {2,}|\\)\n(?!\s*$)/, inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, _punctuation = "\\p{P}\\p{S}", punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex(), blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex(), emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex(), emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex(), anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex(), autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex(), tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex(), nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex(), reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex(), inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
}, inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
}, inlineGfm = {
  ...inlineNormal,
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
}, inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
class _Lexer {
  constructor(t) {
    X(this, "tokens");
    X(this, "options");
    X(this, "state");
    X(this, "tokenizer");
    X(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || _defaults, this.options.tokenizer = this.options.tokenizer || new _Tokenizer(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const r = {
      block: block.normal,
      inline: inline.normal
    };
    this.options.pedantic ? (r.block = block.pedantic, r.inline = inline.pedantic) : this.options.gfm && (r.block = block.gfm, this.options.breaks ? r.inline = inline.breaks : r.inline = inline.gfm), this.tokenizer.rules = r;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, r) {
    return new _Lexer(r).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, r) {
    return new _Lexer(r).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      const i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = []) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (l, o, p) => o + "    ".repeat(p.length));
    let i, s, n, a;
    for (; t; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((l) => (i = l.call({ lexer: this }, t, r)) ? (t = t.substring(i.raw.length), r.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(t)) {
          t = t.substring(i.raw.length), i.raw.length === 1 && r.length > 0 ? r[r.length - 1].raw += `
` : r.push(i);
          continue;
        }
        if (i = this.tokenizer.code(t)) {
          t = t.substring(i.raw.length), s = r[r.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : r.push(i);
          continue;
        }
        if (i = this.tokenizer.fences(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.heading(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.hr(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.blockquote(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.list(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.html(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.def(t)) {
          t = t.substring(i.raw.length), s = r[r.length - 1], s && (s.type === "paragraph" || s.type === "text") ? (s.raw += `
` + i.raw, s.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          });
          continue;
        }
        if (i = this.tokenizer.table(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.lheading(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (n = t, this.options.extensions && this.options.extensions.startBlock) {
          let l = 1 / 0;
          const o = t.slice(1);
          let p;
          this.options.extensions.startBlock.forEach((c) => {
            p = c.call({ lexer: this }, o), typeof p == "number" && p >= 0 && (l = Math.min(l, p));
          }), l < 1 / 0 && l >= 0 && (n = t.substring(0, l + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(n))) {
          s = r[r.length - 1], a && s.type === "paragraph" ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : r.push(i), a = n.length !== t.length, t = t.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(t)) {
          t = t.substring(i.raw.length), s = r[r.length - 1], s && s.type === "text" ? (s.raw += `
` + i.raw, s.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : r.push(i);
          continue;
        }
        if (t) {
          const l = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(l);
            break;
          } else
            throw new Error(l);
        }
      }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, r = []) {
    let i, s, n, a = t, l, o, p;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (l = this.tokenizer.rules.inline.reflinkSearch.exec(a)) != null; )
          c.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (a = a.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (l = this.tokenizer.rules.inline.blockSkip.exec(a)) != null; )
      a = a.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (l = this.tokenizer.rules.inline.anyPunctuation.exec(a)) != null; )
      a = a.slice(0, l.index) + "++" + a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; )
      if (o || (p = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => (i = c.call({ lexer: this }, t, r)) ? (t = t.substring(i.raw.length), r.push(i), !0) : !1))) {
        if (i = this.tokenizer.escape(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.tag(t)) {
          t = t.substring(i.raw.length), s = r[r.length - 1], s && i.type === "text" && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : r.push(i);
          continue;
        }
        if (i = this.tokenizer.link(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(i.raw.length), s = r[r.length - 1], s && i.type === "text" && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : r.push(i);
          continue;
        }
        if (i = this.tokenizer.emStrong(t, a, p)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.codespan(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.br(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.del(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (i = this.tokenizer.autolink(t)) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(t))) {
          t = t.substring(i.raw.length), r.push(i);
          continue;
        }
        if (n = t, this.options.extensions && this.options.extensions.startInline) {
          let c = 1 / 0;
          const k = t.slice(1);
          let f;
          this.options.extensions.startInline.forEach((x) => {
            f = x.call({ lexer: this }, k), typeof f == "number" && f >= 0 && (c = Math.min(c, f));
          }), c < 1 / 0 && c >= 0 && (n = t.substring(0, c + 1));
        }
        if (i = this.tokenizer.inlineText(n)) {
          t = t.substring(i.raw.length), i.raw.slice(-1) !== "_" && (p = i.raw.slice(-1)), o = !0, s = r[r.length - 1], s && s.type === "text" ? (s.raw += i.raw, s.text += i.text) : r.push(i);
          continue;
        }
        if (t) {
          const c = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else
            throw new Error(c);
        }
      }
    return r;
  }
}
class _Renderer {
  constructor(t) {
    X(this, "options");
    this.options = t || _defaults;
  }
  code(t, r, i) {
    var n;
    const s = (n = (r || "").match(/^\S*/)) == null ? void 0 : n[0];
    return t = t.replace(/\n$/, "") + `
`, s ? '<pre><code class="language-' + escape$1(s) + '">' + (i ? t : escape$1(t, !0)) + `</code></pre>
` : "<pre><code>" + (i ? t : escape$1(t, !0)) + `</code></pre>
`;
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  html(t, r) {
    return t;
  }
  heading(t, r, i) {
    return `<h${r}>${t}</h${r}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(t, r, i) {
    const s = r ? "ol" : "ul", n = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + s + n + `>
` + t + "</" + s + `>
`;
  }
  listitem(t, r, i) {
    return `<li>${t}</li>
`;
  }
  checkbox(t) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  table(t, r) {
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t, r) {
    const i = r.header ? "th" : "td";
    return (r.align ? `<${i} align="${r.align}">` : `<${i}>`) + t + `</${i}>
`;
  }
  /**
   * span level renderer
   */
  strong(t) {
    return `<strong>${t}</strong>`;
  }
  em(t) {
    return `<em>${t}</em>`;
  }
  codespan(t) {
    return `<code>${t}</code>`;
  }
  br() {
    return "<br>";
  }
  del(t) {
    return `<del>${t}</del>`;
  }
  link(t, r, i) {
    const s = cleanUrl(t);
    if (s === null)
      return i;
    t = s;
    let n = '<a href="' + t + '"';
    return r && (n += ' title="' + r + '"'), n += ">" + i + "</a>", n;
  }
  image(t, r, i) {
    const s = cleanUrl(t);
    if (s === null)
      return i;
    t = s;
    let n = `<img src="${t}" alt="${i}"`;
    return r && (n += ` title="${r}"`), n += ">", n;
  }
  text(t) {
    return t;
  }
}
class _TextRenderer {
  // no need for block level renderers
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, r, i) {
    return "" + i;
  }
  image(t, r, i) {
    return "" + i;
  }
  br() {
    return "";
  }
}
class _Parser {
  constructor(t) {
    X(this, "options");
    X(this, "renderer");
    X(this, "textRenderer");
    this.options = t || _defaults, this.options.renderer = this.options.renderer || new _Renderer(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(t, r) {
    return new _Parser(r).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, r) {
    return new _Parser(r).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, r = !0) {
    let i = "";
    for (let s = 0; s < t.length; s++) {
      const n = t[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n.type]) {
        const a = n, l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          i += l || "";
          continue;
        }
      }
      switch (n.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          const a = n;
          i += this.renderer.heading(this.parseInline(a.tokens), a.depth, unescape(this.parseInline(a.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const a = n;
          i += this.renderer.code(a.text, a.lang, !!a.escaped);
          continue;
        }
        case "table": {
          const a = n;
          let l = "", o = "";
          for (let c = 0; c < a.header.length; c++)
            o += this.renderer.tablecell(this.parseInline(a.header[c].tokens), { header: !0, align: a.align[c] });
          l += this.renderer.tablerow(o);
          let p = "";
          for (let c = 0; c < a.rows.length; c++) {
            const k = a.rows[c];
            o = "";
            for (let f = 0; f < k.length; f++)
              o += this.renderer.tablecell(this.parseInline(k[f].tokens), { header: !1, align: a.align[f] });
            p += this.renderer.tablerow(o);
          }
          i += this.renderer.table(l, p);
          continue;
        }
        case "blockquote": {
          const a = n, l = this.parse(a.tokens);
          i += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          const a = n, l = a.ordered, o = a.start, p = a.loose;
          let c = "";
          for (let k = 0; k < a.items.length; k++) {
            const f = a.items[k], x = f.checked, A = f.task;
            let m = "";
            if (f.task) {
              const E = this.renderer.checkbox(!!x);
              p ? f.tokens.length > 0 && f.tokens[0].type === "paragraph" ? (f.tokens[0].text = E + " " + f.tokens[0].text, f.tokens[0].tokens && f.tokens[0].tokens.length > 0 && f.tokens[0].tokens[0].type === "text" && (f.tokens[0].tokens[0].text = E + " " + f.tokens[0].tokens[0].text)) : f.tokens.unshift({
                type: "text",
                text: E + " "
              }) : m += E + " ";
            }
            m += this.parse(f.tokens, p), c += this.renderer.listitem(m, A, !!x);
          }
          i += this.renderer.list(c, l, o);
          continue;
        }
        case "html": {
          const a = n;
          i += this.renderer.html(a.text, a.block);
          continue;
        }
        case "paragraph": {
          const a = n;
          i += this.renderer.paragraph(this.parseInline(a.tokens));
          continue;
        }
        case "text": {
          let a = n, l = a.tokens ? this.parseInline(a.tokens) : a.text;
          for (; s + 1 < t.length && t[s + 1].type === "text"; )
            a = t[++s], l += `
` + (a.tokens ? this.parseInline(a.tokens) : a.text);
          i += r ? this.renderer.paragraph(l) : l;
          continue;
        }
        default: {
          const a = 'Token with "' + n.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, r) {
    r = r || this.renderer;
    let i = "";
    for (let s = 0; s < t.length; s++) {
      const n = t[s];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[n.type]) {
        const a = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(n.type)) {
          i += a || "";
          continue;
        }
      }
      switch (n.type) {
        case "escape": {
          const a = n;
          i += r.text(a.text);
          break;
        }
        case "html": {
          const a = n;
          i += r.html(a.text);
          break;
        }
        case "link": {
          const a = n;
          i += r.link(a.href, a.title, this.parseInline(a.tokens, r));
          break;
        }
        case "image": {
          const a = n;
          i += r.image(a.href, a.title, a.text);
          break;
        }
        case "strong": {
          const a = n;
          i += r.strong(this.parseInline(a.tokens, r));
          break;
        }
        case "em": {
          const a = n;
          i += r.em(this.parseInline(a.tokens, r));
          break;
        }
        case "codespan": {
          const a = n;
          i += r.codespan(a.text);
          break;
        }
        case "br": {
          i += r.br();
          break;
        }
        case "del": {
          const a = n;
          i += r.del(this.parseInline(a.tokens, r));
          break;
        }
        case "text": {
          const a = n;
          i += r.text(a.text);
          break;
        }
        default: {
          const a = 'Token with "' + n.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
}
class _Hooks {
  constructor(t) {
    X(this, "options");
    this.options = t || _defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(t) {
    return t;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(t) {
    return t;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(t) {
    return t;
  }
}
X(_Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var de, xe, Ae, ke;
class Marked {
  constructor(...t) {
    be(this, de);
    be(this, Ae);
    X(this, "defaults", _getDefaults());
    X(this, "options", this.setOptions);
    X(this, "parse", ye(this, de, xe).call(this, _Lexer.lex, _Parser.parse));
    X(this, "parseInline", ye(this, de, xe).call(this, _Lexer.lexInline, _Parser.parseInline));
    X(this, "Parser", _Parser);
    X(this, "Renderer", _Renderer);
    X(this, "TextRenderer", _TextRenderer);
    X(this, "Lexer", _Lexer);
    X(this, "Tokenizer", _Tokenizer);
    X(this, "Hooks", _Hooks);
    this.use(...t);
  }
  /**
   * Run callback for every token
   */
  walkTokens(t, r) {
    var s, n;
    let i = [];
    for (const a of t)
      switch (i = i.concat(r.call(this, a)), a.type) {
        case "table": {
          const l = a;
          for (const o of l.header)
            i = i.concat(this.walkTokens(o.tokens, r));
          for (const o of l.rows)
            for (const p of o)
              i = i.concat(this.walkTokens(p.tokens, r));
          break;
        }
        case "list": {
          const l = a;
          i = i.concat(this.walkTokens(l.items, r));
          break;
        }
        default: {
          const l = a;
          (n = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && n[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((o) => {
            const p = l[o].flat(1 / 0);
            i = i.concat(this.walkTokens(p, r));
          }) : l.tokens && (i = i.concat(this.walkTokens(l.tokens, r)));
        }
      }
    return i;
  }
  use(...t) {
    const r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      const s = { ...i };
      if (s.async = this.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach((n) => {
        if (!n.name)
          throw new Error("extension name required");
        if ("renderer" in n) {
          const a = r.renderers[n.name];
          a ? r.renderers[n.name] = function(...l) {
            let o = n.renderer.apply(this, l);
            return o === !1 && (o = a.apply(this, l)), o;
          } : r.renderers[n.name] = n.renderer;
        }
        if ("tokenizer" in n) {
          if (!n.level || n.level !== "block" && n.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const a = r[n.level];
          a ? a.unshift(n.tokenizer) : r[n.level] = [n.tokenizer], n.start && (n.level === "block" ? r.startBlock ? r.startBlock.push(n.start) : r.startBlock = [n.start] : n.level === "inline" && (r.startInline ? r.startInline.push(n.start) : r.startInline = [n.start]));
        }
        "childTokens" in n && n.childTokens && (r.childTokens[n.name] = n.childTokens);
      }), s.extensions = r), i.renderer) {
        const n = this.defaults.renderer || new _Renderer(this.defaults);
        for (const a in i.renderer) {
          if (!(a in n))
            throw new Error(`renderer '${a}' does not exist`);
          if (a === "options")
            continue;
          const l = a, o = i.renderer[l], p = n[l];
          n[l] = (...c) => {
            let k = o.apply(n, c);
            return k === !1 && (k = p.apply(n, c)), k || "";
          };
        }
        s.renderer = n;
      }
      if (i.tokenizer) {
        const n = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const a in i.tokenizer) {
          if (!(a in n))
            throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a))
            continue;
          const l = a, o = i.tokenizer[l], p = n[l];
          n[l] = (...c) => {
            let k = o.apply(n, c);
            return k === !1 && (k = p.apply(n, c)), k;
          };
        }
        s.tokenizer = n;
      }
      if (i.hooks) {
        const n = this.defaults.hooks || new _Hooks();
        for (const a in i.hooks) {
          if (!(a in n))
            throw new Error(`hook '${a}' does not exist`);
          if (a === "options")
            continue;
          const l = a, o = i.hooks[l], p = n[l];
          _Hooks.passThroughHooks.has(a) ? n[l] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(o.call(n, c)).then((f) => p.call(n, f));
            const k = o.call(n, c);
            return p.call(n, k);
          } : n[l] = (...c) => {
            let k = o.apply(n, c);
            return k === !1 && (k = p.apply(n, c)), k;
          };
        }
        s.hooks = n;
      }
      if (i.walkTokens) {
        const n = this.defaults.walkTokens, a = i.walkTokens;
        s.walkTokens = function(l) {
          let o = [];
          return o.push(a.call(this, l)), n && (o = o.concat(n.call(this, l))), o;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return _Lexer.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return _Parser.parse(t, r ?? this.defaults);
  }
}
de = new WeakSet(), xe = function(t, r) {
  return (i, s) => {
    const n = { ...s }, a = { ...this.defaults, ...n };
    this.defaults.async === !0 && n.async === !1 && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = !0);
    const l = ye(this, Ae, ke).call(this, !!a.silent, !!a.async);
    if (typeof i > "u" || i === null)
      return l(new Error("marked(): input parameter is undefined or null"));
    if (typeof i != "string")
      return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
    if (a.hooks && (a.hooks.options = a), a.async)
      return Promise.resolve(a.hooks ? a.hooks.preprocess(i) : i).then((o) => t(o, a)).then((o) => a.hooks ? a.hooks.processAllTokens(o) : o).then((o) => a.walkTokens ? Promise.all(this.walkTokens(o, a.walkTokens)).then(() => o) : o).then((o) => r(o, a)).then((o) => a.hooks ? a.hooks.postprocess(o) : o).catch(l);
    try {
      a.hooks && (i = a.hooks.preprocess(i));
      let o = t(i, a);
      a.hooks && (o = a.hooks.processAllTokens(o)), a.walkTokens && this.walkTokens(o, a.walkTokens);
      let p = r(o, a);
      return a.hooks && (p = a.hooks.postprocess(p)), p;
    } catch (o) {
      return l(o);
    }
  };
}, Ae = new WeakSet(), ke = function(t, r) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
      const s = "<p>An error occurred:</p><pre>" + escape$1(i.message + "", !0) + "</pre>";
      return r ? Promise.resolve(s) : s;
    }
    if (r)
      return Promise.reject(i);
    throw i;
  };
};
const markedInstance = new Marked();
function marked(e, t) {
  return markedInstance.parse(e, t);
}
marked.options = marked.setOptions = function(e) {
  return markedInstance.setOptions(e), marked.defaults = markedInstance.defaults, changeDefaults(marked.defaults), marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...e) {
  return markedInstance.use(...e), marked.defaults = markedInstance.defaults, changeDefaults(marked.defaults), marked;
};
marked.walkTokens = function(e, t) {
  return markedInstance.walkTokens(e, t);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;
function setThemeColors(e = "#F0DAFB") {
  const t = new TinyColor(e).toHsl(), r = {
    primary: t.h,
    primaryOffset: t.h - 10,
    primaryOffsetHover: t.h + 10
  }, i = document.querySelector(":root");
  i.style.setProperty(
    "--primary-background",
    `hsla(${r.primaryOffset}, 80%, 99%, 1)`
  ), i.style.setProperty(
    "--primary-primary",
    `hsla(${r.primary}, 100%, 35%, 1)`
  ), i.style.setProperty(
    "--primary-primary-subtle",
    `hsla(${r.primaryOffset}, 80%, 92%, 1)`
  ), i.style.setProperty(
    "--primary-primary-subtle-hover",
    `hsla(${r.primaryOffsetHover}, 80%, 89%, 1)`
  ), i.style.setProperty(
    "--primary-primary-alt",
    `hsla(${r.primary}, 38%, 21%, 1)`
  ), i.style.setProperty(
    "--primary-primary-alt-subtle",
    `hsla(${r.primaryOffset}, 23%, 91%, 1)`
  ), i.style.setProperty(
    "--gradient-background",
    `linear-gradient(0deg, hsla(${r.primary}, 100%, 35%, 0.05) 0%, hsla(${r.primary}, 0%, 0%, 0) 100%)`
  ), i.style.setProperty(
    "--gradient-gradient-fade",
    `linear-gradient(-0deg, hsla(${r.primaryOffset}, 80%, 99%, 0) 0%, hsla(${r.primaryOffset}, 80%, 99%, 1) 50%)`
  );
}
function createNode(e, t = null) {
  const r = document.createElement("div");
  return r.className = e, t !== null && (r.innerHTML = t), r;
}
function createTextNode(e) {
  let t = marked.parse(e);
  return createNode("message-content", t);
}
function createFileAttachmentNode(e, t) {
  const r = `
    <div class="attachment-info">
      <img src="${attachmentImg}" alt="File Icon" width="38" height="38">
      <div class="attachment-file-name">
        ${e || "File"}
      </div>
      <a href="${t}" class="attachment-download-btn" target="_blank">
        <img src="${downloadImg}" alt="Download Button" width="24" height="24">
      </a>
    </div>`;
  return createNode("attachment", r);
}
function createImageNode(e, t) {
  const r = `
        <img src="${t}" alt="${e}">
        <a href="${t}" class="overlay">
              <img src="${downloadImg}" alt="Download Button" width="24" height="24">
        </a>
        `;
  return createNode("image-container", r);
}
function createTableNode(e, t) {
  let r = createNode("table-container");
  if (t.length > 1) {
    (!e || !Array.isArray(e) || e.length == 0) && (e = Object.keys(t[0]));
    const i = document.createElement("table"), s = document.createElement("tr");
    e.forEach((n) => {
      const a = document.createElement("th"), l = document.createTextNode(n);
      a.appendChild(l), s.appendChild(a);
    }), i.appendChild(s), t.forEach((n) => {
      const a = document.createElement("tr");
      e.forEach((l) => {
        let o = n[l];
        const p = document.createElement("td"), c = document.createTextNode(o);
        p.appendChild(c), a.appendChild(p);
      }), i.appendChild(a);
    }), r.appendChild(i);
  } else {
    const i = document.createElement("h5");
    i.innerHTML = "Table has no rows", r.appendChild(i);
  }
  return r;
}
function highchartsPresent() {
  return typeof Highcharts < "u";
}
function configHighcharts() {
  highchartsPresent() && Highcharts.setOptions({
    credits: {
      enabled: !1
    },
    title: {
      style: {
        fontSize: "12px",
        fontWeight: "normal"
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          style: {
            fontSize: "10px",
            fontWeight: "normal"
          }
        }
      }
    }
  });
}
function createHighchartsNode(e) {
  if (highchartsPresent()) {
    let t = createNode("high-chart-container");
    return Highcharts.chart(t, e), t;
  } else
    return createTextNode(
      "Highcharts is not loaded to render charts. Please check if its script tag is included in the page."
    );
}
const INITIAL_STATE = !1;
configHighcharts();
function loadLottie(e) {
  return lottie.loadAnimation({
    container: e,
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    animationData
  });
}
const main = {
  selectorId: "",
  title: "",
  botName: "",
  greeting: "",
  init: function(e = {}) {
    return this.selectorId = e.selectorId, this.title = e.title, this.botName = e.botName, this.greeting = e.greeting, this.enableUpload = e.enableUpload ?? !1, this.uploadTypes = e.uploadTypes, this.generateUploadPreview = e.generateUploadPreview, setThemeColors(e.themeColor), this.render(e.submitHandler), e.preChatRenderer && renderPreChat(e.preChatRenderer), this.toggle(e.expand || INITIAL_STATE), { toggle: this.toggle, isOpen: this.isOpen };
  },
  isOpen: function() {
    return document.querySelector("#tarka-chat .t-container").style.display === "flex";
  },
  toggle: function(e = void 0) {
    const t = document.querySelector("#tarka-chat .t-container"), r = document.querySelector("#tarka-chat .closed"), i = document.querySelector("#tarka-chat .opened");
    e === !0 || e === void 0 && !this.isOpen() ? (t.style.display = "flex", i.style.display = "block", r.style.display = "none") : (t.style.display = "none", i.style.display = "none", r.style.display = "block");
  },
  render: function(e) {
    const t = document.getElementById(this.selectorId);
    if (!t) {
      console.error(`Element with ID "${this.selectorId}" not found.`);
      return;
    }
    const r = async (c) => {
      const k = this.createNode("upload-preview-item"), f = await this.generateUploadPreview(c);
      return k.appendChild(f), k;
    }, i = async (c) => {
      const k = document.querySelector(
        "#tarka-chat .t-container > .upload-preview-container"
      );
      k.innerHTML = "";
      const f = c.target.files, x = new DataTransfer();
      for (const A of f) {
        if (this.uploadTypes && !this.uploadTypes.includes(A.type))
          continue;
        const m = await r(A);
        m && (k.appendChild(m), x.items.add(A));
      }
      x.files.length > 0 ? k.style.display = "flex" : k.style.display = "none", c.target.files = x.files;
    }, s = (c) => {
      this.isProcessing = c;
      const k = document.querySelector(
        "#tarka-chat .input-container"
      );
      k.style.display = c ? "none" : "flex";
      const f = document.querySelector(
        "#tarka-chat .t-container > .upload-preview-container"
      );
      c && (f.style.display = "none");
      const x = document.querySelector("#tarka-chat .chat-loader");
      x.style.display = c ? "block" : "none";
    }, n = async () => {
      const c = document.querySelector("#tarka-chat .chat-input"), k = c.value;
      if (this.isProcessing || k.length === 0)
        return;
      s(!0);
      const f = document.querySelector("#tarka-chat .upload-input"), x = [];
      if (this.enableUpload && f.files.length > 0) {
        const E = { type: "thumbnails", nodes: [] };
        for (const d of f.files) {
          x.push(d);
          const g = await this.generateUploadPreview(d);
          E.nodes.push(g);
        }
        this.insertMessage([k, E], !1);
      } else
        this.insertMessage(k, !1);
      const A = await e(k, x);
      this.insertMessage(A, !0), s(!1);
      const m = document.querySelector(
        "#tarka-chat .t-container > .upload-preview-container"
      );
      m && (m.style.display = "none"), c.value = "", f.value = "", c.focus();
    };
    t.innerHTML = layout, this.setupLaucher(), loadLottie(document.querySelector("#tarka-chat .logo")), document.querySelector("#tarka-chat .title").textContent = this.title, this.insertMessage(this.greeting, !0);
    const a = document.querySelector("#tarka-chat .upload-btn"), l = document.querySelector("#tarka-chat .upload-input"), o = document.querySelector("#tarka-chat .send-btn"), p = document.querySelector("#tarka-chat .chat-input");
    this.enableUpload && (a.style.display = "block", a.disabled = !1, a.addEventListener("click", () => l == null ? void 0 : l.click()), l.addEventListener("change", i)), o.addEventListener("click", n), p.addEventListener("keyup", async function(c) {
      c.keyCode === 13 && await n();
    });
  },
  setupLaucher: function() {
    document.querySelector("#tarka-chat .launcher").addEventListener("click", () => this.toggle());
    const t = document.querySelector("#tarka-chat .closed");
    loadLottie(t);
  },
  // TODO Delete this
  createNode(e, t = null) {
    const r = document.createElement("div");
    return r.className = e, t !== null && (r.innerHTML = t), r;
  },
  validateFieldPresent(e, t) {
    if (!(e in t))
      throw new Error(`'${e}' is mandatory in ${JSON.stringify(t)}`);
  },
  createNodeByType(e) {
    switch (typeof e == "string" && (e = { type: "text", message: e }), this.validateFieldPresent("type", e), e.type) {
      case "text":
        return createTextNode(e.message);
      case "file":
        return this.validateFieldPresent("link", e), this.validateFieldPresent("name", e), createFileAttachmentNode(e.name, e.link);
      case "image":
        return this.validateFieldPresent("link", e), createImageNode(e.name, e.link);
      case "table":
        return this.validateFieldPresent("table_data", e), createTableNode(e.table_data.header, e.table_data.rows);
      case "highchart-config":
        return this.validateFieldPresent("high_chart_config", e), createHighchartsNode(e.high_chart_config);
      case "thumbnails":
        this.validateFieldPresent("nodes", e);
        const t = this.createNode("upload-preview-container");
        return t.style.display = "flex", e.nodes.forEach((r) => {
          const i = this.createNode("upload-preview-item");
          i.appendChild(r), t.appendChild(i);
        }), t;
      default:
        throw new Error(`Invalid type: ${type}`);
    }
  },
  insertMessage(e = "", t = !1) {
    const r = document.querySelector(
      "#tarka-chat .message-container"
    ), i = this.createNode("wrapper");
    Array.isArray(e) ? e.forEach((n) => {
      i.appendChild(this.createNodeByType(content));
    }) : (typeof e == "string" || typeof e == "object") && i.appendChild(this.createNodeByType(e)), i.appendChild(
      this.createNode("message-meta", t ? this.botName : "You")
    );
    const s = this.createNode(
      `message ${t ? "incoming" : "outgoing"}`
    );
    s.appendChild(i), r.appendChild(s), r.lastElementChild.scrollIntoView();
  }
};
export {
  main as default
};
