/*! For license information please see main.14ee9fc4.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      4: (e, t, n) => {
        var r = n(853),
          i = n(43),
          a = n(950);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function l(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function s(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function c(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function u(e) {
          if (s(e) !== e) throw Error(o(188));
        }
        function d(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = d(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var f = Object.assign,
          p = Symbol.for("react.element"),
          h = Symbol.for("react.transitional.element"),
          m = Symbol.for("react.portal"),
          g = Symbol.for("react.fragment"),
          y = Symbol.for("react.strict_mode"),
          b = Symbol.for("react.profiler"),
          v = Symbol.for("react.provider"),
          w = Symbol.for("react.consumer"),
          x = Symbol.for("react.context"),
          S = Symbol.for("react.forward_ref"),
          k = Symbol.for("react.suspense"),
          C = Symbol.for("react.suspense_list"),
          E = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        var T = Symbol.for("react.activity");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var j = Symbol.for("react.memo_cache_sentinel");
        Symbol.for("react.view_transition");
        var O = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (O && e[O]) || e["@@iterator"])
            ? e
            : null;
        }
        var R = Symbol.for("react.client.reference");
        function P(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === R ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case g:
              return "Fragment";
            case b:
              return "Profiler";
            case y:
              return "StrictMode";
            case k:
              return "Suspense";
            case C:
              return "SuspenseList";
            case T:
              return "Activity";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case m:
                return "Portal";
              case x:
                return (e.displayName || "Context") + ".Provider";
              case w:
                return (e._context.displayName || "Context") + ".Consumer";
              case S:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case E:
                return null !== (t = e.displayName || null)
                  ? t
                  : P(e.type) || "Memo";
              case _:
                (t = e._payload), (e = e._init);
                try {
                  return P(e(t));
                } catch (n) {}
            }
          return null;
        }
        var A = Array.isArray,
          M = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          L = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          N = { pending: !1, data: null, method: null, action: null },
          D = [],
          I = -1;
        function B(e) {
          return { current: e };
        }
        function F(e) {
          0 > I || ((e.current = D[I]), (D[I] = null), I--);
        }
        function $(e, t) {
          I++, (D[I] = e.current), (e.current = t);
        }
        var H = B(null),
          U = B(null),
          V = B(null),
          W = B(null);
        function q(e, t) {
          switch (($(V, t), $(U, e), $(H, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? id(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI)))
                e = ad((t = id(t)), e);
              else
                switch (e) {
                  case "svg":
                    e = 1;
                    break;
                  case "math":
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          F(H), $(H, e);
        }
        function X() {
          F(H), F(U), F(V);
        }
        function G(e) {
          null !== e.memoizedState && $(W, e);
          var t = H.current,
            n = ad(t, e.type);
          t !== n && ($(U, e), $(H, n));
        }
        function Y(e) {
          U.current === e && (F(H), F(U)),
            W.current === e && (F(W), (Gd._currentValue = N));
        }
        var K = Object.prototype.hasOwnProperty,
          Q = r.unstable_scheduleCallback,
          J = r.unstable_cancelCallback,
          Z = r.unstable_shouldYield,
          ee = r.unstable_requestPaint,
          te = r.unstable_now,
          ne = r.unstable_getCurrentPriorityLevel,
          re = r.unstable_ImmediatePriority,
          ie = r.unstable_UserBlockingPriority,
          ae = r.unstable_NormalPriority,
          oe = r.unstable_LowPriority,
          le = r.unstable_IdlePriority,
          se = r.log,
          ce = r.unstable_setDisableYieldValue,
          ue = null,
          de = null;
        function fe(e) {
          if (
            ("function" === typeof se && ce(e),
            de && "function" === typeof de.setStrictMode)
          )
            try {
              de.setStrictMode(ue, e);
            } catch (t) {}
        }
        var pe = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((he(e) / me) | 0)) | 0;
              },
          he = Math.log,
          me = Math.LN2;
        var ge = 256,
          ye = 4194304;
        function be(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194048 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function ve(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var i = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes;
          e = e.warmLanes;
          var l = 134217727 & r;
          return (
            0 !== l
              ? 0 !== (r = l & ~a)
                ? (i = be(r))
                : 0 !== (o &= l)
                ? (i = be(o))
                : n || (0 !== (n = l & ~e) && (i = be(n)))
              : 0 !== (l = r & ~a)
              ? (i = be(l))
              : 0 !== o
              ? (i = be(o))
              : n || (0 !== (n = r & ~e) && (i = be(n))),
            0 === i
              ? 0
              : 0 !== t &&
                t !== i &&
                0 === (t & a) &&
                ((a = i & -i) >= (n = t & -t) ||
                  (32 === a && 0 !== (4194048 & n)))
              ? t
              : i
          );
        }
        function we(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function xe(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Se() {
          var e = ge;
          return 0 === (4194048 & (ge <<= 1)) && (ge = 256), e;
        }
        function ke() {
          var e = ye;
          return 0 === (62914560 & (ye <<= 1)) && (ye = 4194304), e;
        }
        function Ce(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ee(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function _e(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - pe(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194090 & n));
        }
        function Te(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - pe(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        function je(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function Oe(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function ze() {
          var e = L.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : uf(e.type);
        }
        var Re = Math.random().toString(36).slice(2),
          Pe = "__reactFiber$" + Re,
          Ae = "__reactProps$" + Re,
          Me = "__reactContainer$" + Re,
          Le = "__reactEvents$" + Re,
          Ne = "__reactListeners$" + Re,
          De = "__reactHandles$" + Re,
          Ie = "__reactResources$" + Re,
          Be = "__reactMarker$" + Re;
        function Fe(e) {
          delete e[Pe], delete e[Ae], delete e[Le], delete e[Ne], delete e[De];
        }
        function $e(e) {
          var t = e[Pe];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Me] || n[Pe])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = vd(e); null !== e; ) {
                  if ((n = e[Pe])) return n;
                  e = vd(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function He(e) {
          if ((e = e[Pe] || e[Me])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Ue(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(o(33));
        }
        function Ve(e) {
          var t = e[Ie];
          return (
            t ||
              (t = e[Ie] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function We(e) {
          e[Be] = !0;
        }
        var qe = new Set(),
          Xe = {};
        function Ge(e, t) {
          Ye(e, t), Ye(e + "Capture", t);
        }
        function Ye(e, t) {
          for (Xe[e] = t, e = 0; e < t.length; e++) qe.add(t[e]);
        }
        var Ke,
          Qe,
          Je = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          Ze = {},
          et = {};
        function tt(e, t, n) {
          if (
            ((i = t),
            K.call(et, i) ||
              (!K.call(Ze, i) &&
                (Je.test(i) ? (et[i] = !0) : ((Ze[i] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var i;
        }
        function nt(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function rt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function it(e) {
          if (void 0 === Ke)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (Ke = (t && t[1]) || ""),
                (Qe =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + Ke + e + Qe;
        }
        var at = !1;
        function ot(e, t) {
          if (!e || at) return "";
          at = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (i) {
                        var r = i;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (a) {
                        r = a;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (o) {
                      r = o;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (l) {
                  if (l && r && "string" === typeof l.stack)
                    return [l.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            i &&
              i.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var a = r.DetermineComponentFrameRoot(),
              o = a[0],
              l = a[1];
            if (o && l) {
              var s = o.split("\n"),
                c = l.split("\n");
              for (
                i = r = 0;
                r < s.length && !s[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                i < c.length && !c[i].includes("DetermineComponentFrameRoot");

              )
                i++;
              if (r === s.length || i === c.length)
                for (
                  r = s.length - 1, i = c.length - 1;
                  1 <= r && 0 <= i && s[r] !== c[i];

                )
                  i--;
              for (; 1 <= r && 0 <= i; r--, i--)
                if (s[r] !== c[i]) {
                  if (1 !== r || 1 !== i)
                    do {
                      if ((r--, 0 > --i || s[r] !== c[i])) {
                        var u = "\n" + s[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= r && 0 <= i);
                  break;
                }
            }
          } finally {
            (at = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? it(n) : "";
        }
        function lt(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return it(e.type);
            case 16:
              return it("Lazy");
            case 13:
              return it("Suspense");
            case 19:
              return it("SuspenseList");
            case 0:
            case 15:
              return ot(e.type, !1);
            case 11:
              return ot(e.type.render, !1);
            case 1:
              return ot(e.type, !0);
            case 31:
              return it("Activity");
            default:
              return "";
          }
        }
        function st(e) {
          try {
            var t = "";
            do {
              (t += lt(e)), (e = e.return);
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function ct(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ut(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function dt(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ut(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function ft(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ut(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function pt(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var ht = /[\n"\\]/g;
        function mt(e) {
          return e.replace(ht, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, i, a, o, l) {
          (e.name = ""),
            null != o &&
            "function" !== typeof o &&
            "symbol" !== typeof o &&
            "boolean" !== typeof o
              ? (e.type = o)
              : e.removeAttribute("type"),
            null != t
              ? "number" === o
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + ct(t))
                : e.value !== "" + ct(t) && (e.value = "" + ct(t))
              : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
            null != t
              ? bt(e, o, ct(t))
              : null != n
              ? bt(e, o, ct(n))
              : null != r && e.removeAttribute("value"),
            null == i && null != a && (e.defaultChecked = !!a),
            null != i &&
              (e.checked =
                i && "function" !== typeof i && "symbol" !== typeof i),
            null != l &&
            "function" !== typeof l &&
            "symbol" !== typeof l &&
            "boolean" !== typeof l
              ? (e.name = "" + ct(l))
              : e.removeAttribute("name");
        }
        function yt(e, t, n, r, i, a, o, l) {
          if (
            (null != a &&
              "function" !== typeof a &&
              "symbol" !== typeof a &&
              "boolean" !== typeof a &&
              (e.type = a),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== a && "reset" !== a) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            (n = null != n ? "" + ct(n) : ""),
              (t = null != t ? "" + ct(t) : n),
              l || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : i) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = l ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.name = o);
        }
        function bt(e, t, n) {
          ("number" === t && pt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function vt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + ct(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function wt(e, t, n) {
          null == t ||
          ((t = "" + ct(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + ct(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function xt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(o(92));
              if (A(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = ct(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var kt = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function Ct(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || kt.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function Et(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(o(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var i in t)
              (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && Ct(e, i, r);
          } else for (var a in t) t.hasOwnProperty(a) && Ct(e, a, t[a]);
        }
        function _t(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Tt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          jt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Ot(e) {
          return jt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var zt = null;
        function Rt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Pt = null,
          At = null;
        function Mt(e) {
          var t = He(e);
          if (t && (e = t.stateNode)) {
            var n = e[Ae] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + mt("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = r[Ae] || null;
                      if (!i) throw Error(o(90));
                      gt(
                        r,
                        i.value,
                        i.defaultValue,
                        i.defaultValue,
                        i.checked,
                        i.defaultChecked,
                        i.type,
                        i.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && ft(r);
                }
                break e;
              case "textarea":
                wt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && vt(e, !!n.multiple, t, !1);
            }
          }
        }
        var Lt = !1;
        function Nt(e, t, n) {
          if (Lt) return e(t, n);
          Lt = !0;
          try {
            return e(t);
          } finally {
            if (
              ((Lt = !1),
              (null !== Pt || null !== At) &&
                ($c(), Pt && ((t = Pt), (e = At), (At = Pt = null), Mt(t), e)))
            )
              for (t = 0; t < e.length; t++) Mt(e[t]);
          }
        }
        function Dt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Ae] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var It = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          Bt = !1;
        if (It)
          try {
            var Ft = {};
            Object.defineProperty(Ft, "passive", {
              get: function () {
                Bt = !0;
              },
            }),
              window.addEventListener("test", Ft, Ft),
              window.removeEventListener("test", Ft, Ft);
          } catch (Mf) {
            Bt = !1;
          }
        var $t = null,
          Ht = null,
          Ut = null;
        function Vt() {
          if (Ut) return Ut;
          var e,
            t,
            n = Ht,
            r = n.length,
            i = "value" in $t ? $t.value : $t.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (Ut = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Wt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function qt() {
          return !0;
        }
        function Xt() {
          return !1;
        }
        function Gt(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? qt
                : Xt),
              (this.isPropagationStopped = Xt),
              this
            );
          }
          return (
            f(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = qt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = qt));
              },
              persist: function () {},
              isPersistent: qt,
            }),
            t
          );
        }
        var Yt,
          Kt,
          Qt,
          Jt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Zt = Gt(Jt),
          en = f({}, Jt, { view: 0, detail: 0 }),
          tn = Gt(en),
          nn = f({}, en, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: hn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Qt &&
                    (Qt && "mousemove" === e.type
                      ? ((Yt = e.screenX - Qt.screenX),
                        (Kt = e.screenY - Qt.screenY))
                      : (Kt = Yt = 0),
                    (Qt = e)),
                  Yt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Kt;
            },
          }),
          rn = Gt(nn),
          an = Gt(f({}, nn, { dataTransfer: 0 })),
          on = Gt(f({}, en, { relatedTarget: 0 })),
          ln = Gt(
            f({}, Jt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          sn = Gt(
            f({}, Jt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          cn = Gt(f({}, Jt, { data: 0 })),
          un = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          dn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          fn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = fn[e]) && !!t[e];
        }
        function hn() {
          return pn;
        }
        var mn = Gt(
            f({}, en, {
              key: function (e) {
                if (e.key) {
                  var t = un[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Wt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? dn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: hn,
              charCode: function (e) {
                return "keypress" === e.type ? Wt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Wt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          gn = Gt(
            f({}, nn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          yn = Gt(
            f({}, en, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: hn,
            })
          ),
          bn = Gt(
            f({}, Jt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = Gt(
            f({}, nn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          wn = Gt(f({}, Jt, { newState: 0, oldState: 0 })),
          xn = [9, 13, 27, 32],
          Sn = It && "CompositionEvent" in window,
          kn = null;
        It && "documentMode" in document && (kn = document.documentMode);
        var Cn = It && "TextEvent" in window && !kn,
          En = It && (!Sn || (kn && 8 < kn && 11 >= kn)),
          _n = String.fromCharCode(32),
          Tn = !1;
        function jn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== xn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function On(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var zn = !1;
        var Rn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Pn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Rn[e.type] : "textarea" === t;
        }
        function An(e, t, n, r) {
          Pt ? (At ? At.push(r) : (At = [r])) : (Pt = r),
            0 < (t = Vu(t, "onChange")).length &&
              ((n = new Zt("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Mn = null,
          Ln = null;
        function Nn(e) {
          Nu(e, 0);
        }
        function Dn(e) {
          if (ft(Ue(e))) return e;
        }
        function In(e, t) {
          if ("change" === e) return t;
        }
        var Bn = !1;
        if (It) {
          var Fn;
          if (It) {
            var $n = "oninput" in document;
            if (!$n) {
              var Hn = document.createElement("div");
              Hn.setAttribute("oninput", "return;"),
                ($n = "function" === typeof Hn.oninput);
            }
            Fn = $n;
          } else Fn = !1;
          Bn = Fn && (!document.documentMode || 9 < document.documentMode);
        }
        function Un() {
          Mn && (Mn.detachEvent("onpropertychange", Vn), (Ln = Mn = null));
        }
        function Vn(e) {
          if ("value" === e.propertyName && Dn(Ln)) {
            var t = [];
            An(t, Ln, e, Rt(e)), Nt(Nn, t);
          }
        }
        function Wn(e, t, n) {
          "focusin" === e
            ? (Un(), (Ln = n), (Mn = t).attachEvent("onpropertychange", Vn))
            : "focusout" === e && Un();
        }
        function qn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Dn(Ln);
        }
        function Xn(e, t) {
          if ("click" === e) return Dn(t);
        }
        function Gn(e, t) {
          if ("input" === e || "change" === e) return Dn(t);
        }
        var Yn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Kn(e, t) {
          if (Yn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!K.call(t, i) || !Yn(e[i], t[i])) return !1;
          }
          return !0;
        }
        function Qn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Jn(e, t) {
          var n,
            r = Qn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Qn(r);
          }
        }
        function Zn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Zn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function er(e) {
          for (
            var t = pt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = pt((e = t.contentWindow).document);
          }
          return t;
        }
        function tr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var nr =
            It && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          ir = null,
          ar = null,
          or = !1;
        function lr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          or ||
            null == rr ||
            rr !== pt(r) ||
            ("selectionStart" in (r = rr) && tr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (ar && Kn(ar, r)) ||
              ((ar = r),
              0 < (r = Vu(ir, "onSelect")).length &&
                ((t = new Zt("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = rr))));
        }
        function sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var cr = {
            animationend: sr("Animation", "AnimationEnd"),
            animationiteration: sr("Animation", "AnimationIteration"),
            animationstart: sr("Animation", "AnimationStart"),
            transitionrun: sr("Transition", "TransitionRun"),
            transitionstart: sr("Transition", "TransitionStart"),
            transitioncancel: sr("Transition", "TransitionCancel"),
            transitionend: sr("Transition", "TransitionEnd"),
          },
          ur = {},
          dr = {};
        function fr(e) {
          if (ur[e]) return ur[e];
          if (!cr[e]) return e;
          var t,
            n = cr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in dr) return (ur[e] = n[t]);
          return e;
        }
        It &&
          ((dr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete cr.animationend.animation,
            delete cr.animationiteration.animation,
            delete cr.animationstart.animation),
          "TransitionEvent" in window || delete cr.transitionend.transition);
        var pr = fr("animationend"),
          hr = fr("animationiteration"),
          mr = fr("animationstart"),
          gr = fr("transitionrun"),
          yr = fr("transitionstart"),
          br = fr("transitioncancel"),
          vr = fr("transitionend"),
          wr = new Map(),
          xr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Sr(e, t) {
          wr.set(e, t), Ge(t, [e]);
        }
        xr.push("scrollEnd");
        var kr = new WeakMap();
        function Cr(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = kr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: st(t) }), kr.set(e, t), t);
          }
          return { value: e, source: t, stack: st(t) };
        }
        var Er = [],
          _r = 0,
          Tr = 0;
        function jr() {
          for (var e = _r, t = (Tr = _r = 0); t < e; ) {
            var n = Er[t];
            Er[t++] = null;
            var r = Er[t];
            Er[t++] = null;
            var i = Er[t];
            Er[t++] = null;
            var a = Er[t];
            if (((Er[t++] = null), null !== r && null !== i)) {
              var o = r.pending;
              null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
                (r.pending = i);
            }
            0 !== a && Pr(n, i, a);
          }
        }
        function Or(e, t, n, r) {
          (Er[_r++] = e),
            (Er[_r++] = t),
            (Er[_r++] = n),
            (Er[_r++] = r),
            (Tr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function zr(e, t, n, r) {
          return Or(e, t, n, r), Ar(e);
        }
        function Rr(e, t) {
          return Or(e, null, null, t), Ar(e);
        }
        function Pr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var i = !1, a = e.return; null !== a; )
            (a.childLanes |= n),
              null !== (r = a.alternate) && (r.childLanes |= n),
              22 === a.tag &&
                (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)),
              (e = a),
              (a = a.return);
          return 3 === e.tag
            ? ((a = e.stateNode),
              i &&
                null !== t &&
                ((i = 31 - pe(n)),
                null === (r = (e = a.hiddenUpdates)[i])
                  ? (e[i] = [t])
                  : r.push(t),
                (t.lane = 536870912 | n)),
              a)
            : null;
        }
        function Ar(e) {
          if (50 < Pc) throw ((Pc = 0), (Ac = null), Error(o(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Mr = {};
        function Lr(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Nr(e, t, n, r) {
          return new Lr(e, t, n, r);
        }
        function Dr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ir(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Nr(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Br(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Fr(e, t, n, r, i, a) {
          var l = 0;
          if (((r = e), "function" === typeof e)) Dr(e) && (l = 1);
          else if ("string" === typeof e)
            l = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, H.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case T:
                return (
                  ((e = Nr(31, n, t, i)).elementType = T), (e.lanes = a), e
                );
              case g:
                return $r(n.children, i, a, t);
              case y:
                (l = 8), (i |= 24);
                break;
              case b:
                return (
                  ((e = Nr(12, n, t, 2 | i)).elementType = b), (e.lanes = a), e
                );
              case k:
                return (
                  ((e = Nr(13, n, t, i)).elementType = k), (e.lanes = a), e
                );
              case C:
                return (
                  ((e = Nr(19, n, t, i)).elementType = C), (e.lanes = a), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case v:
                    case x:
                      l = 10;
                      break e;
                    case w:
                      l = 9;
                      break e;
                    case S:
                      l = 11;
                      break e;
                    case E:
                      l = 14;
                      break e;
                    case _:
                      (l = 16), (r = null);
                      break e;
                  }
                (l = 29),
                  (n = Error(o(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = Nr(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function $r(e, t, n, r) {
          return ((e = Nr(7, e, r, t)).lanes = n), e;
        }
        function Hr(e, t, n) {
          return ((e = Nr(6, e, null, t)).lanes = n), e;
        }
        function Ur(e, t, n) {
          return (
            ((t = Nr(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var Vr = [],
          Wr = 0,
          qr = null,
          Xr = 0,
          Gr = [],
          Yr = 0,
          Kr = null,
          Qr = 1,
          Jr = "";
        function Zr(e, t) {
          (Vr[Wr++] = Xr), (Vr[Wr++] = qr), (qr = e), (Xr = t);
        }
        function ei(e, t, n) {
          (Gr[Yr++] = Qr), (Gr[Yr++] = Jr), (Gr[Yr++] = Kr), (Kr = e);
          var r = Qr;
          e = Jr;
          var i = 32 - pe(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - pe(t) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (Qr = (1 << (32 - pe(t) + i)) | (n << i) | r),
              (Jr = a + e);
          } else (Qr = (1 << a) | (n << i) | r), (Jr = e);
        }
        function ti(e) {
          null !== e.return && (Zr(e, 1), ei(e, 1, 0));
        }
        function ni(e) {
          for (; e === qr; )
            (qr = Vr[--Wr]), (Vr[Wr] = null), (Xr = Vr[--Wr]), (Vr[Wr] = null);
          for (; e === Kr; )
            (Kr = Gr[--Yr]),
              (Gr[Yr] = null),
              (Jr = Gr[--Yr]),
              (Gr[Yr] = null),
              (Qr = Gr[--Yr]),
              (Gr[Yr] = null);
        }
        var ri = null,
          ii = null,
          ai = !1,
          oi = null,
          li = !1,
          si = Error(o(519));
        function ci(e) {
          throw (mi(Cr(Error(o(418, "")), e)), si);
        }
        function ui(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Pe] = e), (t[Ae] = r), n)) {
            case "dialog":
              Du("cancel", t), Du("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Du("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Mu.length; n++) Du(Mu[n], t);
              break;
            case "source":
              Du("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Du("error", t), Du("load", t);
              break;
            case "details":
              Du("toggle", t);
              break;
            case "input":
              Du("invalid", t),
                yt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                dt(t);
              break;
            case "select":
              Du("invalid", t);
              break;
            case "textarea":
              Du("invalid", t),
                xt(t, r.value, r.defaultValue, r.children),
                dt(t);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          Ku(t.textContent, n)
            ? (null != r.popover && (Du("beforetoggle", t), Du("toggle", t)),
              null != r.onScroll && Du("scroll", t),
              null != r.onScrollEnd && Du("scrollend", t),
              null != r.onClick && (t.onclick = Qu),
              (t = !0))
            : (t = !1),
            t || ci(e);
        }
        function di(e) {
          for (ri = e.return; ri; )
            switch (ri.tag) {
              case 5:
              case 13:
                return void (li = !1);
              case 27:
              case 3:
                return void (li = !0);
              default:
                ri = ri.return;
            }
        }
        function fi(e) {
          if (e !== ri) return !1;
          if (!ai) return di(e), (ai = !0), !1;
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  od(e.type, e.memoizedProps)),
              (t = !t)),
            t && ii && ci(e),
            di(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      ii = yd(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              ii = null;
            }
          } else
            27 === n
              ? ((n = ii),
                pd(e.type) ? ((e = bd), (bd = null), (ii = e)) : (ii = n))
              : (ii = ri ? yd(e.stateNode.nextSibling) : null);
          return !0;
        }
        function pi() {
          (ii = ri = null), (ai = !1);
        }
        function hi() {
          var e = oi;
          return (
            null !== e &&
              (null === vc ? (vc = e) : vc.push.apply(vc, e), (oi = null)),
            e
          );
        }
        function mi(e) {
          null === oi ? (oi = [e]) : oi.push(e);
        }
        var gi = B(null),
          yi = null,
          bi = null;
        function vi(e, t, n) {
          $(gi, t._currentValue), (t._currentValue = n);
        }
        function wi(e) {
          (e._currentValue = gi.current), F(gi);
        }
        function xi(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Si(e, t, n, r) {
          var i = e.child;
          for (null !== i && (i.return = e); null !== i; ) {
            var a = i.dependencies;
            if (null !== a) {
              var l = i.child;
              a = a.firstContext;
              e: for (; null !== a; ) {
                var s = a;
                a = i;
                for (var c = 0; c < t.length; c++)
                  if (s.context === t[c]) {
                    (a.lanes |= n),
                      null !== (s = a.alternate) && (s.lanes |= n),
                      xi(a.return, n, e),
                      r || (l = null);
                    break e;
                  }
                a = s.next;
              }
            } else if (18 === i.tag) {
              if (null === (l = i.return)) throw Error(o(341));
              (l.lanes |= n),
                null !== (a = l.alternate) && (a.lanes |= n),
                xi(l, n, e),
                (l = null);
            } else l = i.child;
            if (null !== l) l.return = i;
            else
              for (l = i; null !== l; ) {
                if (l === e) {
                  l = null;
                  break;
                }
                if (null !== (i = l.sibling)) {
                  (i.return = l.return), (l = i);
                  break;
                }
                l = l.return;
              }
            i = l;
          }
        }
        function ki(e, t, n, r) {
          e = null;
          for (var i = t, a = !1; null !== i; ) {
            if (!a)
              if (0 !== (524288 & i.flags)) a = !0;
              else if (0 !== (262144 & i.flags)) break;
            if (10 === i.tag) {
              var l = i.alternate;
              if (null === l) throw Error(o(387));
              if (null !== (l = l.memoizedProps)) {
                var s = i.type;
                Yn(i.pendingProps.value, l.value) ||
                  (null !== e ? e.push(s) : (e = [s]));
              }
            } else if (i === W.current) {
              if (null === (l = i.alternate)) throw Error(o(387));
              l.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
                (null !== e ? e.push(Gd) : (e = [Gd]));
            }
            i = i.return;
          }
          null !== e && Si(t, e, n, r), (t.flags |= 262144);
        }
        function Ci(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Yn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Ei(e) {
          (yi = e),
            (bi = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function _i(e) {
          return ji(yi, e);
        }
        function Ti(e, t) {
          return null === yi && Ei(e), ji(e, t);
        }
        function ji(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === bi)
          ) {
            if (null === e) throw Error(o(308));
            (bi = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288);
          } else bi = bi.next = t;
          return n;
        }
        var Oi =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          zi = r.unstable_scheduleCallback,
          Ri = r.unstable_NormalPriority,
          Pi = {
            $$typeof: x,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Ai() {
          return { controller: new Oi(), data: new Map(), refCount: 0 };
        }
        function Mi(e) {
          e.refCount--,
            0 === e.refCount &&
              zi(Ri, function () {
                e.controller.abort();
              });
        }
        var Li = null,
          Ni = 0,
          Di = 0,
          Ii = null;
        function Bi() {
          if (0 === --Ni && null !== Li) {
            null !== Ii && (Ii.status = "fulfilled");
            var e = Li;
            (Li = null), (Di = 0), (Ii = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Fi = M.S;
        M.S = function (e, t) {
          "object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === Li) {
                var n = (Li = []);
                (Ni = 0),
                  (Di = Ou()),
                  (Ii = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              Ni++, t.then(Bi, Bi);
            })(0, t),
            null !== Fi && Fi(e, t);
        };
        var $i = B(null);
        function Hi() {
          var e = $i.current;
          return null !== e ? e : rc.pooledCache;
        }
        function Ui(e, t) {
          $($i, null === t ? $i.current : t.pool);
        }
        function Vi() {
          var e = Hi();
          return null === e ? null : { parent: Pi._currentValue, pool: e };
        }
        var Wi = Error(o(460)),
          qi = Error(o(474)),
          Xi = Error(o(542)),
          Gi = { then: function () {} };
        function Yi(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function Ki() {}
        function Qi(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(Ki, Ki), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (ea((e = t.reason)), e);
            default:
              if ("string" === typeof t.status) t.then(Ki, Ki);
              else {
                if (null !== (e = rc) && 100 < e.shellSuspendCounter)
                  throw Error(o(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  throw (ea((e = t.reason)), e);
              }
              throw ((Ji = t), Wi);
          }
        }
        var Ji = null;
        function Zi() {
          if (null === Ji) throw Error(o(459));
          var e = Ji;
          return (Ji = null), e;
        }
        function ea(e) {
          if (e === Wi || e === Xi) throw Error(o(483));
        }
        var ta = !1;
        function na(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function ra(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function ia(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function aa(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & nc))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              (t = Ar(e)),
              Pr(e, null, n),
              t
            );
          }
          return Or(e, r, t, n), Ar(e);
        }
        function oa(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194048 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Te(e, n);
          }
        }
        function la(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var sa = !1;
        function ca() {
          if (sa) {
            if (null !== Ii) throw Ii;
          }
        }
        function ua(e, t, n, r) {
          sa = !1;
          var i = e.updateQueue;
          ta = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            l = i.shared.pending;
          if (null !== l) {
            i.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === o ? (a = c) : (o.next = c), (o = s);
            var u = e.alternate;
            null !== u &&
              (l = (u = u.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (u.firstBaseUpdate = c) : (l.next = c),
              (u.lastBaseUpdate = s));
          }
          if (null !== a) {
            var d = i.baseState;
            for (o = 0, u = c = s = null, l = a; ; ) {
              var p = -536870913 & l.lane,
                h = p !== l.lane;
              if (h ? (ac & p) === p : (r & p) === p) {
                0 !== p && p === Di && (sa = !0),
                  null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var m = e,
                    g = l;
                  p = t;
                  var y = n;
                  switch (g.tag) {
                    case 1:
                      if ("function" === typeof (m = g.payload)) {
                        d = m.call(y, d, p);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (p =
                            "function" === typeof (m = g.payload)
                              ? m.call(y, d, p)
                              : m) ||
                        void 0 === p
                      )
                        break e;
                      d = f({}, d, p);
                      break e;
                    case 2:
                      ta = !0;
                  }
                }
                null !== (p = l.callback) &&
                  ((e.flags |= 64),
                  h && (e.flags |= 8192),
                  null === (h = i.callbacks) ? (i.callbacks = [p]) : h.push(p));
              } else
                (h = {
                  lane: p,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === u ? ((c = u = h), (s = d)) : (u = u.next = h),
                  (o |= p);
              if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                (l = (h = l).next),
                  (h.next = null),
                  (i.lastBaseUpdate = h),
                  (i.shared.pending = null);
              }
            }
            null === u && (s = d),
              (i.baseState = s),
              (i.firstBaseUpdate = c),
              (i.lastBaseUpdate = u),
              null === a && (i.shared.lanes = 0),
              (pc |= o),
              (e.lanes = o),
              (e.memoizedState = d);
          }
        }
        function da(e, t) {
          if ("function" !== typeof e) throw Error(o(191, e));
          e.call(t);
        }
        function fa(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) da(n[e], t);
        }
        var pa = B(null),
          ha = B(0);
        function ma(e, t) {
          $(ha, (e = dc)), $(pa, t), (dc = e | t.baseLanes);
        }
        function ga() {
          $(ha, dc), $(pa, pa.current);
        }
        function ya() {
          (dc = ha.current), F(pa), F(ha);
        }
        var ba = 0,
          va = null,
          wa = null,
          xa = null,
          Sa = !1,
          ka = !1,
          Ca = !1,
          Ea = 0,
          _a = 0,
          Ta = null,
          ja = 0;
        function Oa() {
          throw Error(o(321));
        }
        function za(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Yn(e[n], t[n])) return !1;
          return !0;
        }
        function Ra(e, t, n, r, i, a) {
          return (
            (ba = a),
            (va = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (M.H = null === e || null === e.memoizedState ? qo : Xo),
            (Ca = !1),
            (a = n(r, i)),
            (Ca = !1),
            ka && (a = Aa(t, n, r, i)),
            Pa(e),
            a
          );
        }
        function Pa(e) {
          M.H = Wo;
          var t = null !== wa && null !== wa.next;
          if (
            ((ba = 0),
            (xa = wa = va = null),
            (Sa = !1),
            (_a = 0),
            (Ta = null),
            t)
          )
            throw Error(o(300));
          null === e ||
            Tl ||
            (null !== (e = e.dependencies) && Ci(e) && (Tl = !0));
        }
        function Aa(e, t, n, r) {
          va = e;
          var i = 0;
          do {
            if ((ka && (Ta = null), (_a = 0), (ka = !1), 25 <= i))
              throw Error(o(301));
            if (((i += 1), (xa = wa = null), null != e.updateQueue)) {
              var a = e.updateQueue;
              (a.lastEffect = null),
                (a.events = null),
                (a.stores = null),
                null != a.memoCache && (a.memoCache.index = 0);
            }
            (M.H = Go), (a = t(n, r));
          } while (ka);
          return a;
        }
        function Ma() {
          var e = M.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? Fa(t) : t),
            (e = e.useState()[0]),
            (null !== wa ? wa.memoizedState : null) !== e && (va.flags |= 1024),
            t
          );
        }
        function La() {
          var e = 0 !== Ea;
          return (Ea = 0), e;
        }
        function Na(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function Da(e) {
          if (Sa) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            Sa = !1;
          }
          (ba = 0),
            (xa = wa = va = null),
            (ka = !1),
            (_a = Ea = 0),
            (Ta = null);
        }
        function Ia() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === xa ? (va.memoizedState = xa = e) : (xa = xa.next = e), xa
          );
        }
        function Ba() {
          if (null === wa) {
            var e = va.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = wa.next;
          var t = null === xa ? va.memoizedState : xa.next;
          if (null !== t) (xa = t), (wa = e);
          else {
            if (null === e) {
              if (null === va.alternate) throw Error(o(467));
              throw Error(o(310));
            }
            (e = {
              memoizedState: (wa = e).memoizedState,
              baseState: wa.baseState,
              baseQueue: wa.baseQueue,
              queue: wa.queue,
              next: null,
            }),
              null === xa ? (va.memoizedState = xa = e) : (xa = xa.next = e);
          }
          return xa;
        }
        function Fa(e) {
          var t = _a;
          return (
            (_a += 1),
            null === Ta && (Ta = []),
            (e = Qi(Ta, e, t)),
            (t = va),
            null === (null === xa ? t.memoizedState : xa.next) &&
              ((t = t.alternate),
              (M.H = null === t || null === t.memoizedState ? qo : Xo)),
            e
          );
        }
        function $a(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return Fa(e);
            if (e.$$typeof === x) return _i(e);
          }
          throw Error(o(438, String(e)));
        }
        function Ha(e) {
          var t = null,
            n = va.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = va.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (va.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = j;
          return t.index++, n;
        }
        function Ua(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Va(e) {
          return Wa(Ba(), wa, e);
        }
        function Wa(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = n;
          var i = e.baseQueue,
            a = r.pending;
          if (null !== a) {
            if (null !== i) {
              var l = i.next;
              (i.next = a.next), (a.next = l);
            }
            (t.baseQueue = i = a), (r.pending = null);
          }
          if (((a = e.baseState), null === i)) e.memoizedState = a;
          else {
            var s = (l = null),
              c = null,
              u = (t = i.next),
              d = !1;
            do {
              var f = -536870913 & u.lane;
              if (f !== u.lane ? (ac & f) === f : (ba & f) === f) {
                var p = u.revertLane;
                if (0 === p)
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null,
                      }),
                    f === Di && (d = !0);
                else {
                  if ((ba & p) === p) {
                    (u = u.next), p === Di && (d = !0);
                    continue;
                  }
                  (f = {
                    lane: 0,
                    revertLane: u.revertLane,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                    null === c ? ((s = c = f), (l = a)) : (c = c.next = f),
                    (va.lanes |= p),
                    (pc |= p);
                }
                (f = u.action),
                  Ca && n(a, f),
                  (a = u.hasEagerState ? u.eagerState : n(a, f));
              } else
                (p = {
                  lane: f,
                  revertLane: u.revertLane,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
                  null === c ? ((s = c = p), (l = a)) : (c = c.next = p),
                  (va.lanes |= f),
                  (pc |= f);
              u = u.next;
            } while (null !== u && u !== t);
            if (
              (null === c ? (l = a) : (c.next = s),
              !Yn(a, e.memoizedState) && ((Tl = !0), d && null !== (n = Ii)))
            )
              throw n;
            (e.memoizedState = a),
              (e.baseState = l),
              (e.baseQueue = c),
              (r.lastRenderedState = a);
          }
          return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function qa(e) {
          var t = Ba(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== i);
            Yn(a, t.memoizedState) || (Tl = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Xa(e, t, n) {
          var r = va,
            i = Ba(),
            a = ai;
          if (a) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else n = t();
          var l = !Yn((wa || i).memoizedState, n);
          if (
            (l && ((i.memoizedState = n), (Tl = !0)),
            (i = i.queue),
            yo(2048, 8, Ka.bind(null, r, i, e), [e]),
            i.getSnapshot !== t ||
              l ||
              (null !== xa && 1 & xa.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              ho(
                9,
                { destroy: void 0, resource: void 0 },
                Ya.bind(null, r, i, n, t),
                null
              ),
              null === rc)
            )
              throw Error(o(349));
            a || 0 !== (124 & ba) || Ga(r, t, n);
          }
          return n;
        }
        function Ga(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = va.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (va.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ya(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Qa(t) && Ja(e);
        }
        function Ka(e, t, n) {
          return n(function () {
            Qa(t) && Ja(e);
          });
        }
        function Qa(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Yn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ja(e) {
          var t = Rr(e, 2);
          null !== t && Nc(t, e, 2);
        }
        function Za(e) {
          var t = Ia();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), Ca)) {
              fe(!0);
              try {
                n();
              } finally {
                fe(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ua,
              lastRenderedState: e,
            }),
            t
          );
        }
        function eo(e, t, n, r) {
          return (e.baseState = n), Wa(e, wa, "function" === typeof r ? r : Ua);
        }
        function to(e, t, n, r, i) {
          if (Ho(e)) throw Error(o(485));
          if (null !== (e = t.action)) {
            var a = {
              payload: i,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                a.listeners.push(e);
              },
            };
            null !== M.T ? n(!0) : (a.isTransition = !1),
              r(a),
              null === (n = t.pending)
                ? ((a.next = t.pending = a), no(t, a))
                : ((a.next = n.next), (t.pending = n.next = a));
          }
        }
        function no(e, t) {
          var n = t.action,
            r = t.payload,
            i = e.state;
          if (t.isTransition) {
            var a = M.T,
              o = {};
            M.T = o;
            try {
              var l = n(i, r),
                s = M.S;
              null !== s && s(o, l), ro(e, t, l);
            } catch (c) {
              ao(e, t, c);
            } finally {
              M.T = a;
            }
          } else
            try {
              ro(e, t, (a = n(i, r)));
            } catch (u) {
              ao(e, t, u);
            }
        }
        function ro(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  io(e, t, n);
                },
                function (n) {
                  return ao(e, t, n);
                }
              )
            : io(e, t, n);
        }
        function io(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            oo(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), no(e, n)));
        }
        function ao(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), oo(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function oo(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function lo(e, t) {
          return t;
        }
        function so(e, t) {
          if (ai) {
            var n = rc.formState;
            if (null !== n) {
              e: {
                var r = va;
                if (ai) {
                  if (ii) {
                    t: {
                      for (var i = ii, a = li; 8 !== i.nodeType; ) {
                        if (!a) {
                          i = null;
                          break t;
                        }
                        if (null === (i = yd(i.nextSibling))) {
                          i = null;
                          break t;
                        }
                      }
                      i = "F!" === (a = i.data) || "F" === a ? i : null;
                    }
                    if (i) {
                      (ii = yd(i.nextSibling)), (r = "F!" === i.data);
                      break e;
                    }
                  }
                  ci(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = Ia()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: lo,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = Bo.bind(null, va, r)),
            (r.dispatch = n),
            (r = Za(!1)),
            (a = $o.bind(null, va, !1, r.queue)),
            (i = { state: t, dispatch: null, action: e, pending: null }),
            ((r = Ia()).queue = i),
            (n = to.bind(null, va, i, a, n)),
            (i.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function co(e) {
          return uo(Ba(), wa, e);
        }
        function uo(e, t, n) {
          if (
            ((t = Wa(e, t, lo)[0]),
            (e = Va(Ua)[0]),
            "object" === typeof t && null !== t && "function" === typeof t.then)
          )
            try {
              var r = Fa(t);
            } catch (o) {
              if (o === Wi) throw Xi;
              throw o;
            }
          else r = t;
          var i = (t = Ba()).queue,
            a = i.dispatch;
          return (
            n !== t.memoizedState &&
              ((va.flags |= 2048),
              ho(
                9,
                { destroy: void 0, resource: void 0 },
                fo.bind(null, i, n),
                null
              )),
            [r, a, e]
          );
        }
        function fo(e, t) {
          e.action = t;
        }
        function po(e) {
          var t = Ba(),
            n = wa;
          if (null !== n) return uo(t, n, e);
          Ba(), (t = t.memoizedState);
          var r = (n = Ba()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function ho(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = va.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (va.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function mo() {
          return Ba().memoizedState;
        }
        function go(e, t, n, r) {
          var i = Ia();
          (r = void 0 === r ? null : r),
            (va.flags |= e),
            (i.memoizedState = ho(
              1 | t,
              { destroy: void 0, resource: void 0 },
              n,
              r
            ));
        }
        function yo(e, t, n, r) {
          var i = Ba();
          r = void 0 === r ? null : r;
          var a = i.memoizedState.inst;
          null !== wa && null !== r && za(r, wa.memoizedState.deps)
            ? (i.memoizedState = ho(t, a, n, r))
            : ((va.flags |= e), (i.memoizedState = ho(1 | t, a, n, r)));
        }
        function bo(e, t) {
          go(8390656, 8, e, t);
        }
        function vo(e, t) {
          yo(2048, 8, e, t);
        }
        function wo(e, t) {
          return yo(4, 2, e, t);
        }
        function xo(e, t) {
          return yo(4, 4, e, t);
        }
        function So(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function ko(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            yo(4, 4, So.bind(null, t, e), n);
        }
        function Co() {}
        function Eo(e, t) {
          var n = Ba();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && za(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function _o(e, t) {
          var n = Ba();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && za(t, r[1])) return r[0];
          if (((r = e()), Ca)) {
            fe(!0);
            try {
              e();
            } finally {
              fe(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function To(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & ba)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = Lc()),
              (va.lanes |= e),
              (pc |= e),
              n);
        }
        function jo(e, t, n, r) {
          return Yn(n, t)
            ? n
            : null !== pa.current
            ? ((e = To(e, n, r)), Yn(e, t) || (Tl = !0), e)
            : 0 === (42 & ba)
            ? ((Tl = !0), (e.memoizedState = n))
            : ((e = Lc()), (va.lanes |= e), (pc |= e), t);
        }
        function Oo(e, t, n, r, i) {
          var a = L.p;
          L.p = 0 !== a && 8 > a ? a : 8;
          var o = M.T,
            l = {};
          (M.T = l), $o(e, !1, t, n);
          try {
            var s = i(),
              c = M.S;
            if (
              (null !== c && c(l, s),
              null !== s &&
                "object" === typeof s &&
                "function" === typeof s.then)
            ) {
              var u = (function (e, t) {
                var n = [],
                  r = {
                    status: "pending",
                    value: null,
                    reason: null,
                    then: function (e) {
                      n.push(e);
                    },
                  };
                return (
                  e.then(
                    function () {
                      (r.status = "fulfilled"), (r.value = t);
                      for (var e = 0; e < n.length; e++) (0, n[e])(t);
                    },
                    function (e) {
                      for (
                        r.status = "rejected", r.reason = e, e = 0;
                        e < n.length;
                        e++
                      )
                        (0, n[e])(void 0);
                    }
                  ),
                  r
                );
              })(s, r);
              Fo(e, t, u, Mc());
            } else Fo(e, t, r, Mc());
          } catch (d) {
            Fo(
              e,
              t,
              { then: function () {}, status: "rejected", reason: d },
              Mc()
            );
          } finally {
            (L.p = a), (M.T = o);
          }
        }
        function zo() {}
        function Ro(e, t, n, r) {
          if (5 !== e.tag) throw Error(o(476));
          var i = Po(e).queue;
          Oo(
            e,
            i,
            t,
            N,
            null === n
              ? zo
              : function () {
                  return Ao(e), n(r);
                }
          );
        }
        function Po(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: N,
              baseState: N,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ua,
                lastRenderedState: N,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ua,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function Ao(e) {
          Fo(e, Po(e).next.queue, {}, Mc());
        }
        function Mo() {
          return _i(Gd);
        }
        function Lo() {
          return Ba().memoizedState;
        }
        function No() {
          return Ba().memoizedState;
        }
        function Do(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Mc(),
                  r = aa(t, (e = ia(n)), n);
                return (
                  null !== r && (Nc(r, t, n), oa(r, t, n)),
                  (t = { cache: Ai() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function Io(e, t, n) {
          var r = Mc();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Ho(e)
              ? Uo(t, n)
              : null !== (n = zr(e, t, n, r)) && (Nc(n, e, r), Vo(n, t, r));
        }
        function Bo(e, t, n) {
          Fo(e, t, n, Mc());
        }
        function Fo(e, t, n, r) {
          var i = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (Ho(e)) Uo(t, i);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), Yn(l, o)))
                  return Or(e, t, i, 0), null === rc && jr(), !1;
              } catch (s) {}
            if (null !== (n = zr(e, t, i, r)))
              return Nc(n, e, r), Vo(n, t, r), !0;
          }
          return !1;
        }
        function $o(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: Ou(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ho(e))
          ) {
            if (t) throw Error(o(479));
          } else null !== (t = zr(e, n, r, 2)) && Nc(t, e, 2);
        }
        function Ho(e) {
          var t = e.alternate;
          return e === va || (null !== t && t === va);
        }
        function Uo(e, t) {
          ka = Sa = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Vo(e, t, n) {
          if (0 !== (4194048 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Te(e, n);
          }
        }
        var Wo = {
            readContext: _i,
            use: $a,
            useCallback: Oa,
            useContext: Oa,
            useEffect: Oa,
            useImperativeHandle: Oa,
            useLayoutEffect: Oa,
            useInsertionEffect: Oa,
            useMemo: Oa,
            useReducer: Oa,
            useRef: Oa,
            useState: Oa,
            useDebugValue: Oa,
            useDeferredValue: Oa,
            useTransition: Oa,
            useSyncExternalStore: Oa,
            useId: Oa,
            useHostTransitionStatus: Oa,
            useFormState: Oa,
            useActionState: Oa,
            useOptimistic: Oa,
            useMemoCache: Oa,
            useCacheRefresh: Oa,
          },
          qo = {
            readContext: _i,
            use: $a,
            useCallback: function (e, t) {
              return (Ia().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: _i,
            useEffect: bo,
            useImperativeHandle: function (e, t, n) {
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                go(4194308, 4, So.bind(null, t, e), n);
            },
            useLayoutEffect: function (e, t) {
              return go(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              go(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ia();
              t = void 0 === t ? null : t;
              var r = e();
              if (Ca) {
                fe(!0);
                try {
                  e();
                } finally {
                  fe(!1);
                }
              }
              return (n.memoizedState = [r, t]), r;
            },
            useReducer: function (e, t, n) {
              var r = Ia();
              if (void 0 !== n) {
                var i = n(t);
                if (Ca) {
                  fe(!0);
                  try {
                    n(t);
                  } finally {
                    fe(!1);
                  }
                }
              } else i = t;
              return (
                (r.memoizedState = r.baseState = i),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: i,
                }),
                (r.queue = e),
                (e = e.dispatch = Io.bind(null, va, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ia().memoizedState = e);
            },
            useState: function (e) {
              var t = (e = Za(e)).queue,
                n = Bo.bind(null, va, t);
              return (t.dispatch = n), [e.memoizedState, n];
            },
            useDebugValue: Co,
            useDeferredValue: function (e, t) {
              return To(Ia(), e, t);
            },
            useTransition: function () {
              var e = Za(!1);
              return (
                (e = Oo.bind(null, va, e.queue, !0, !1)),
                (Ia().memoizedState = e),
                [!1, e]
              );
            },
            useSyncExternalStore: function (e, t, n) {
              var r = va,
                i = Ia();
              if (ai) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === rc)) throw Error(o(349));
                0 !== (124 & ac) || Ga(r, t, n);
              }
              i.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (i.queue = a),
                bo(Ka.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                ho(
                  9,
                  { destroy: void 0, resource: void 0 },
                  Ya.bind(null, r, a, n, t),
                  null
                ),
                n
              );
            },
            useId: function () {
              var e = Ia(),
                t = rc.identifierPrefix;
              if (ai) {
                var n = Jr;
                (t =
                  "\xab" +
                  t +
                  "R" +
                  (n = (Qr & ~(1 << (32 - pe(Qr) - 1))).toString(32) + n)),
                  0 < (n = Ea++) && (t += "H" + n.toString(32)),
                  (t += "\xbb");
              } else t = "\xab" + t + "r" + (n = ja++).toString(32) + "\xbb";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: Mo,
            useFormState: so,
            useActionState: so,
            useOptimistic: function (e) {
              var t = Ia();
              t.memoizedState = t.baseState = e;
              var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (t.queue = n),
                (t = $o.bind(null, va, !0, n)),
                (n.dispatch = t),
                [e, t]
              );
            },
            useMemoCache: Ha,
            useCacheRefresh: function () {
              return (Ia().memoizedState = Do.bind(null, va));
            },
          },
          Xo = {
            readContext: _i,
            use: $a,
            useCallback: Eo,
            useContext: _i,
            useEffect: vo,
            useImperativeHandle: ko,
            useInsertionEffect: wo,
            useLayoutEffect: xo,
            useMemo: _o,
            useReducer: Va,
            useRef: mo,
            useState: function () {
              return Va(Ua);
            },
            useDebugValue: Co,
            useDeferredValue: function (e, t) {
              return jo(Ba(), wa.memoizedState, e, t);
            },
            useTransition: function () {
              var e = Va(Ua)[0],
                t = Ba().memoizedState;
              return ["boolean" === typeof e ? e : Fa(e), t];
            },
            useSyncExternalStore: Xa,
            useId: Lo,
            useHostTransitionStatus: Mo,
            useFormState: co,
            useActionState: co,
            useOptimistic: function (e, t) {
              return eo(Ba(), 0, e, t);
            },
            useMemoCache: Ha,
            useCacheRefresh: No,
          },
          Go = {
            readContext: _i,
            use: $a,
            useCallback: Eo,
            useContext: _i,
            useEffect: vo,
            useImperativeHandle: ko,
            useInsertionEffect: wo,
            useLayoutEffect: xo,
            useMemo: _o,
            useReducer: qa,
            useRef: mo,
            useState: function () {
              return qa(Ua);
            },
            useDebugValue: Co,
            useDeferredValue: function (e, t) {
              var n = Ba();
              return null === wa ? To(n, e, t) : jo(n, wa.memoizedState, e, t);
            },
            useTransition: function () {
              var e = qa(Ua)[0],
                t = Ba().memoizedState;
              return ["boolean" === typeof e ? e : Fa(e), t];
            },
            useSyncExternalStore: Xa,
            useId: Lo,
            useHostTransitionStatus: Mo,
            useFormState: po,
            useActionState: po,
            useOptimistic: function (e, t) {
              var n = Ba();
              return null !== wa
                ? eo(n, 0, e, t)
                : ((n.baseState = e), [e, n.queue.dispatch]);
            },
            useMemoCache: Ha,
            useCacheRefresh: No,
          },
          Yo = null,
          Ko = 0;
        function Qo(e) {
          var t = Ko;
          return (Ko += 1), null === Yo && (Yo = []), Qi(Yo, e, t);
        }
        function Jo(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function Zo(e, t) {
          if (t.$$typeof === p) throw Error(o(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function el(e) {
          return (0, e._init)(e._payload);
        }
        function tl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function i(e, t) {
            return ((e = Ir(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                  : ((t.flags |= 67108866), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 67108866), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Hr(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var a = n.type;
            return a === g
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === _ &&
                    el(a) === t.type))
              ? (Jo((t = i(t, n.props)), n), (t.return = e), t)
              : (Jo((t = Fr(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ur(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = $r(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = Hr("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case h:
                  return (
                    Jo((n = Fr(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case m:
                  return ((t = Ur(t, e.mode, n)).return = e), t;
                case _:
                  return f(e, (t = (0, t._init)(t._payload)), n);
              }
              if (A(t) || z(t))
                return ((t = $r(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return f(e, Qo(t), n);
              if (t.$$typeof === x) return f(e, Ti(e, t), n);
              Zo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== i ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case h:
                  return n.key === i ? c(e, t, n, r) : null;
                case m:
                  return n.key === i ? u(e, t, n, r) : null;
                case _:
                  return p(e, t, (n = (i = n._init)(n._payload)), r);
              }
              if (A(n) || z(n)) return null !== i ? null : d(e, t, n, r, null);
              if ("function" === typeof n.then) return p(e, t, Qo(n), r);
              if (n.$$typeof === x) return p(e, t, Ti(e, n), r);
              Zo(e, n);
            }
            return null;
          }
          function y(e, t, n, r, i) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return s(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case h:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case m:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case _:
                  return y(e, t, n, (r = (0, r._init)(r._payload)), i);
              }
              if (A(r) || z(r)) return d(t, (e = e.get(n) || null), r, i, null);
              if ("function" === typeof r.then) return y(e, t, n, Qo(r), i);
              if (r.$$typeof === x) return y(e, t, n, Ti(t, r), i);
              Zo(t, r);
            }
            return null;
          }
          function b(s, c, u, d) {
            if (
              ("object" === typeof u &&
                null !== u &&
                u.type === g &&
                null === u.key &&
                (u = u.props.children),
              "object" === typeof u && null !== u)
            ) {
              switch (u.$$typeof) {
                case h:
                  e: {
                    for (var v = u.key; null !== c; ) {
                      if (c.key === v) {
                        if ((v = u.type) === g) {
                          if (7 === c.tag) {
                            n(s, c.sibling),
                              ((d = i(c, u.props.children)).return = s),
                              (s = d);
                            break e;
                          }
                        } else if (
                          c.elementType === v ||
                          ("object" === typeof v &&
                            null !== v &&
                            v.$$typeof === _ &&
                            el(v) === c.type)
                        ) {
                          n(s, c.sibling),
                            Jo((d = i(c, u.props)), u),
                            (d.return = s),
                            (s = d);
                          break e;
                        }
                        n(s, c);
                        break;
                      }
                      t(s, c), (c = c.sibling);
                    }
                    u.type === g
                      ? (((d = $r(u.props.children, s.mode, d, u.key)).return =
                          s),
                        (s = d))
                      : (Jo(
                          (d = Fr(u.type, u.key, u.props, null, s.mode, d)),
                          u
                        ),
                        (d.return = s),
                        (s = d));
                  }
                  return l(s);
                case m:
                  e: {
                    for (v = u.key; null !== c; ) {
                      if (c.key === v) {
                        if (
                          4 === c.tag &&
                          c.stateNode.containerInfo === u.containerInfo &&
                          c.stateNode.implementation === u.implementation
                        ) {
                          n(s, c.sibling),
                            ((d = i(c, u.children || [])).return = s),
                            (s = d);
                          break e;
                        }
                        n(s, c);
                        break;
                      }
                      t(s, c), (c = c.sibling);
                    }
                    ((d = Ur(u, s.mode, d)).return = s), (s = d);
                  }
                  return l(s);
                case _:
                  return b(s, c, (u = (v = u._init)(u._payload)), d);
              }
              if (A(u))
                return (function (i, o, l, s) {
                  for (
                    var c = null, u = null, d = o, h = (o = 0), m = null;
                    null !== d && h < l.length;
                    h++
                  ) {
                    d.index > h ? ((m = d), (d = null)) : (m = d.sibling);
                    var g = p(i, d, l[h], s);
                    if (null === g) {
                      null === d && (d = m);
                      break;
                    }
                    e && d && null === g.alternate && t(i, d),
                      (o = a(g, o, h)),
                      null === u ? (c = g) : (u.sibling = g),
                      (u = g),
                      (d = m);
                  }
                  if (h === l.length) return n(i, d), ai && Zr(i, h), c;
                  if (null === d) {
                    for (; h < l.length; h++)
                      null !== (d = f(i, l[h], s)) &&
                        ((o = a(d, o, h)),
                        null === u ? (c = d) : (u.sibling = d),
                        (u = d));
                    return ai && Zr(i, h), c;
                  }
                  for (d = r(d); h < l.length; h++)
                    null !== (m = y(d, i, h, l[h], s)) &&
                      (e &&
                        null !== m.alternate &&
                        d.delete(null === m.key ? h : m.key),
                      (o = a(m, o, h)),
                      null === u ? (c = m) : (u.sibling = m),
                      (u = m));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(i, e);
                      }),
                    ai && Zr(i, h),
                    c
                  );
                })(s, c, u, d);
              if (z(u)) {
                if ("function" !== typeof (v = z(u))) throw Error(o(150));
                return (function (i, l, s, c) {
                  if (null == s) throw Error(o(151));
                  for (
                    var u = null,
                      d = null,
                      h = l,
                      m = (l = 0),
                      g = null,
                      b = s.next();
                    null !== h && !b.done;
                    m++, b = s.next()
                  ) {
                    h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                    var v = p(i, h, b.value, c);
                    if (null === v) {
                      null === h && (h = g);
                      break;
                    }
                    e && h && null === v.alternate && t(i, h),
                      (l = a(v, l, m)),
                      null === d ? (u = v) : (d.sibling = v),
                      (d = v),
                      (h = g);
                  }
                  if (b.done) return n(i, h), ai && Zr(i, m), u;
                  if (null === h) {
                    for (; !b.done; m++, b = s.next())
                      null !== (b = f(i, b.value, c)) &&
                        ((l = a(b, l, m)),
                        null === d ? (u = b) : (d.sibling = b),
                        (d = b));
                    return ai && Zr(i, m), u;
                  }
                  for (h = r(h); !b.done; m++, b = s.next())
                    null !== (b = y(h, i, m, b.value, c)) &&
                      (e &&
                        null !== b.alternate &&
                        h.delete(null === b.key ? m : b.key),
                      (l = a(b, l, m)),
                      null === d ? (u = b) : (d.sibling = b),
                      (d = b));
                  return (
                    e &&
                      h.forEach(function (e) {
                        return t(i, e);
                      }),
                    ai && Zr(i, m),
                    u
                  );
                })(s, c, (u = v.call(u)), d);
              }
              if ("function" === typeof u.then) return b(s, c, Qo(u), d);
              if (u.$$typeof === x) return b(s, c, Ti(s, u), d);
              Zo(s, u);
            }
            return ("string" === typeof u && "" !== u) ||
              "number" === typeof u ||
              "bigint" === typeof u
              ? ((u = "" + u),
                null !== c && 6 === c.tag
                  ? (n(s, c.sibling), ((d = i(c, u)).return = s), (s = d))
                  : (n(s, c), ((d = Hr(u, s.mode, d)).return = s), (s = d)),
                l(s))
              : n(s, c);
          }
          return function (e, t, n, r) {
            try {
              Ko = 0;
              var i = b(e, t, n, r);
              return (Yo = null), i;
            } catch (o) {
              if (o === Wi || o === Xi) throw o;
              var a = Nr(29, o, null, e.mode);
              return (a.lanes = r), (a.return = e), a;
            }
          };
        }
        var nl = tl(!0),
          rl = tl(!1),
          il = B(null),
          al = null;
        function ol(e) {
          var t = e.alternate;
          $(ul, 1 & ul.current),
            $(il, e),
            null === al &&
              (null === t || null !== pa.current || null !== t.memoizedState) &&
              (al = e);
        }
        function ll(e) {
          if (22 === e.tag) {
            if (($(ul, ul.current), $(il, e), null === al)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (al = e);
            }
          } else sl();
        }
        function sl() {
          $(ul, ul.current), $(il, il.current);
        }
        function cl(e) {
          F(il), al === e && (al = null), F(ul);
        }
        var ul = B(0);
        function dl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) || "$?" === n.data || gd(n))
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        function fl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : f({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var pl = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Mc(),
              i = ia(r);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = aa(e, i, r)) && (Nc(t, e, r), oa(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Mc(),
              i = ia(r);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = aa(e, i, r)) && (Nc(t, e, r), oa(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Mc(),
              r = ia(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = aa(e, r, n)) && (Nc(t, e, n), oa(t, e, n));
          },
        };
        function hl(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Kn(n, r) ||
                !Kn(i, a);
        }
        function ml(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && pl.enqueueReplaceState(t, t.state, null);
        }
        function gl(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var i in (n === t && (n = f({}, n)), e))
              void 0 === n[i] && (n[i] = e[i]);
          return n;
        }
        var yl =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function bl(e) {
          yl(e);
        }
        function vl(e) {
          console.error(e);
        }
        function wl(e) {
          yl(e);
        }
        function xl(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function Sl(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function kl(e, t, n) {
          return (
            ((n = ia(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              xl(e, t);
            }),
            n
          );
        }
        function Cl(e) {
          return ((e = ia(e)).tag = 3), e;
        }
        function El(e, t, n, r) {
          var i = n.type.getDerivedStateFromError;
          if ("function" === typeof i) {
            var a = r.value;
            (e.payload = function () {
              return i(a);
            }),
              (e.callback = function () {
                Sl(t, n, r);
              });
          }
          var o = n.stateNode;
          null !== o &&
            "function" === typeof o.componentDidCatch &&
            (e.callback = function () {
              Sl(t, n, r),
                "function" !== typeof i &&
                  (null === Cc ? (Cc = new Set([this])) : Cc.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var _l = Error(o(461)),
          Tl = !1;
        function jl(e, t, n, r) {
          t.child = null === e ? rl(t, null, n, r) : nl(t, e.child, n, r);
        }
        function Ol(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          if ("ref" in r) {
            var o = {};
            for (var l in r) "ref" !== l && (o[l] = r[l]);
          } else o = r;
          return (
            Ei(t),
            (r = Ra(e, t, n, o, a, i)),
            (l = La()),
            null === e || Tl
              ? (ai && l && ti(t), (t.flags |= 1), jl(e, t, r, i), t.child)
              : (Na(e, t, i), Yl(e, t, i))
          );
        }
        function zl(e, t, n, r, i) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              Dr(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare
              ? (((e = Fr(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Rl(e, t, a, r, i));
          }
          if (((a = e.child), !Kl(e, i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Kn)(o, r) &&
              e.ref === t.ref
            )
              return Yl(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Ir(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Rl(e, t, n, r, i) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (Kn(a, r) && e.ref === t.ref) {
              if (((Tl = !1), (t.pendingProps = r = a), !Kl(e, i)))
                return (t.lanes = e.lanes), Yl(e, t, i);
              0 !== (131072 & e.flags) && (Tl = !0);
            }
          }
          return Ll(e, t, n, r, i);
        }
        function Pl(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (i = t.child = e.child, a = 0; null !== i; )
                  (a = a | i.lanes | i.childLanes), (i = i.sibling);
                t.childLanes = a & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Al(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Al(e, t, null !== a ? a.baseLanes | n : n, n)
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Ui(0, null !== a ? a.cachePool : null),
              null !== a ? ma(t, a) : ga(),
              ll(t);
          } else
            null !== a
              ? (Ui(0, a.cachePool), ma(t, a), sl(), (t.memoizedState = null))
              : (null !== e && Ui(0, null), ga(), sl());
          return jl(e, t, i, n), t.child;
        }
        function Al(e, t, n, r) {
          var i = Hi();
          return (
            (i = null === i ? null : { parent: Pi._currentValue, pool: i }),
            (t.memoizedState = { baseLanes: n, cachePool: i }),
            null !== e && Ui(0, null),
            ga(),
            ll(t),
            null !== e && ki(e, t, r, !0),
            null
          );
        }
        function Ml(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(o(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Ll(e, t, n, r, i) {
          return (
            Ei(t),
            (n = Ra(e, t, n, r, void 0, i)),
            (r = La()),
            null === e || Tl
              ? (ai && r && ti(t), (t.flags |= 1), jl(e, t, n, i), t.child)
              : (Na(e, t, i), Yl(e, t, i))
          );
        }
        function Nl(e, t, n, r, i, a) {
          return (
            Ei(t),
            (t.updateQueue = null),
            (n = Aa(t, r, n, i)),
            Pa(e),
            (r = La()),
            null === e || Tl
              ? (ai && r && ti(t), (t.flags |= 1), jl(e, t, n, a), t.child)
              : (Na(e, t, a), Yl(e, t, a))
          );
        }
        function Dl(e, t, n, r, i) {
          if ((Ei(t), null === t.stateNode)) {
            var a = Mr,
              o = n.contextType;
            "object" === typeof o && null !== o && (a = _i(o)),
              (a = new n(r, a)),
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
              (a.updater = pl),
              (t.stateNode = a),
              (a._reactInternals = t),
              ((a = t.stateNode).props = r),
              (a.state = t.memoizedState),
              (a.refs = {}),
              na(t),
              (o = n.contextType),
              (a.context = "object" === typeof o && null !== o ? _i(o) : Mr),
              (a.state = t.memoizedState),
              "function" === typeof (o = n.getDerivedStateFromProps) &&
                (fl(t, n, o, r), (a.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof a.getSnapshotBeforeUpdate ||
                ("function" !== typeof a.UNSAFE_componentWillMount &&
                  "function" !== typeof a.componentWillMount) ||
                ((o = a.state),
                "function" === typeof a.componentWillMount &&
                  a.componentWillMount(),
                "function" === typeof a.UNSAFE_componentWillMount &&
                  a.UNSAFE_componentWillMount(),
                o !== a.state && pl.enqueueReplaceState(a, a.state, null),
                ua(t, r, a, i),
                ca(),
                (a.state = t.memoizedState)),
              "function" === typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            a = t.stateNode;
            var l = t.memoizedProps,
              s = gl(n, l);
            a.props = s;
            var c = a.context,
              u = n.contextType;
            (o = Mr), "object" === typeof u && null !== u && (o = _i(u));
            var d = n.getDerivedStateFromProps;
            (u =
              "function" === typeof d ||
              "function" === typeof a.getSnapshotBeforeUpdate),
              (l = t.pendingProps !== l),
              u ||
                ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof a.componentWillReceiveProps) ||
                ((l || c !== o) && ml(t, a, r, o)),
              (ta = !1);
            var f = t.memoizedState;
            (a.state = f),
              ua(t, r, a, i),
              ca(),
              (c = t.memoizedState),
              l || f !== c || ta
                ? ("function" === typeof d &&
                    (fl(t, n, d, r), (c = t.memoizedState)),
                  (s = ta || hl(t, n, s, r, f, c, o))
                    ? (u ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = c)),
                  (a.props = r),
                  (a.state = c),
                  (a.context = o),
                  (r = s))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              ra(e, t),
              (u = gl(n, (o = t.memoizedProps))),
              (a.props = u),
              (d = t.pendingProps),
              (f = a.context),
              (c = n.contextType),
              (s = Mr),
              "object" === typeof c && null !== c && (s = _i(c)),
              (c =
                "function" === typeof (l = n.getDerivedStateFromProps) ||
                "function" === typeof a.getSnapshotBeforeUpdate) ||
                ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof a.componentWillReceiveProps) ||
                ((o !== d || f !== s) && ml(t, a, r, s)),
              (ta = !1),
              (f = t.memoizedState),
              (a.state = f),
              ua(t, r, a, i),
              ca();
            var p = t.memoizedState;
            o !== d ||
            f !== p ||
            ta ||
            (null !== e && null !== e.dependencies && Ci(e.dependencies))
              ? ("function" === typeof l &&
                  (fl(t, n, l, r), (p = t.memoizedState)),
                (u =
                  ta ||
                  hl(t, n, u, r, f, p, s) ||
                  (null !== e && null !== e.dependencies && Ci(e.dependencies)))
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, p, s),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = s),
                (r = u))
              : ("function" !== typeof a.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (a = r),
            Ml(e, t),
            (r = 0 !== (128 & t.flags)),
            a || r
              ? ((a = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : a.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = nl(t, e.child, null, i)),
                    (t.child = nl(t, null, n, i)))
                  : jl(e, t, n, i),
                (t.memoizedState = a.state),
                (e = t.child))
              : (e = Yl(e, t, i)),
            e
          );
        }
        function Il(e, t, n, r) {
          return pi(), (t.flags |= 256), jl(e, t, n, r), t.child;
        }
        var Bl = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function Fl(e) {
          return { baseLanes: e, cachePool: Vi() };
        }
        function $l(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= gc), e;
        }
        function Hl(e, t, n) {
          var r,
            i = t.pendingProps,
            a = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & ul.current)),
            r && ((a = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (ai) {
              if ((a ? ol(t) : sl(), ai)) {
                var s,
                  c = ii;
                if ((s = c)) {
                  e: {
                    for (s = c, c = li; 8 !== s.nodeType; ) {
                      if (!c) {
                        c = null;
                        break e;
                      }
                      if (null === (s = yd(s.nextSibling))) {
                        c = null;
                        break e;
                      }
                    }
                    c = s;
                  }
                  null !== c
                    ? ((t.memoizedState = {
                        dehydrated: c,
                        treeContext:
                          null !== Kr ? { id: Qr, overflow: Jr } : null,
                        retryLane: 536870912,
                        hydrationErrors: null,
                      }),
                      ((s = Nr(18, null, null, 0)).stateNode = c),
                      (s.return = t),
                      (t.child = s),
                      (ri = t),
                      (ii = null),
                      (s = !0))
                    : (s = !1);
                }
                s || ci(t);
              }
              if (null !== (c = t.memoizedState) && null !== (c = c.dehydrated))
                return gd(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
              cl(t);
            }
            return (
              (c = i.children),
              (i = i.fallback),
              a
                ? (sl(),
                  (c = Vl({ mode: "hidden", children: c }, (a = t.mode))),
                  (i = $r(i, a, n, null)),
                  (c.return = t),
                  (i.return = t),
                  (c.sibling = i),
                  (t.child = c),
                  ((a = t.child).memoizedState = Fl(n)),
                  (a.childLanes = $l(e, r, n)),
                  (t.memoizedState = Bl),
                  i)
                : (ol(t), Ul(t, c))
            );
          }
          if (null !== (s = e.memoizedState) && null !== (c = s.dehydrated)) {
            if (l)
              256 & t.flags
                ? (ol(t), (t.flags &= -257), (t = Wl(e, t, n)))
                : null !== t.memoizedState
                ? (sl(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (sl(),
                  (a = i.fallback),
                  (c = t.mode),
                  (i = Vl({ mode: "visible", children: i.children }, c)),
                  ((a = $r(a, c, n, null)).flags |= 2),
                  (i.return = t),
                  (a.return = t),
                  (i.sibling = a),
                  (t.child = i),
                  nl(t, e.child, null, n),
                  ((i = t.child).memoizedState = Fl(n)),
                  (i.childLanes = $l(e, r, n)),
                  (t.memoizedState = Bl),
                  (t = a));
            else if ((ol(t), gd(c))) {
              if ((r = c.nextSibling && c.nextSibling.dataset)) var u = r.dgst;
              (r = u),
                ((i = Error(o(419))).stack = ""),
                (i.digest = r),
                mi({ value: i, source: null, stack: null }),
                (t = Wl(e, t, n));
            } else if (
              (Tl || ki(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Tl || r)
            ) {
              if (
                null !== (r = rc) &&
                0 !==
                  (i =
                    0 !==
                    ((i = 0 !== (42 & (i = n & -n)) ? 1 : je(i)) &
                      (r.suspendedLanes | n))
                      ? 0
                      : i) &&
                i !== s.retryLane
              )
                throw ((s.retryLane = i), Rr(e, i), Nc(r, e, i), _l);
              "$?" === c.data || Xc(), (t = Wl(e, t, n));
            } else
              "$?" === c.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = s.treeContext),
                  (ii = yd(c.nextSibling)),
                  (ri = t),
                  (ai = !0),
                  (oi = null),
                  (li = !1),
                  null !== e &&
                    ((Gr[Yr++] = Qr),
                    (Gr[Yr++] = Jr),
                    (Gr[Yr++] = Kr),
                    (Qr = e.id),
                    (Jr = e.overflow),
                    (Kr = t)),
                  ((t = Ul(t, i.children)).flags |= 4096));
            return t;
          }
          return a
            ? (sl(),
              (a = i.fallback),
              (c = t.mode),
              (u = (s = e.child).sibling),
              ((i = Ir(s, {
                mode: "hidden",
                children: i.children,
              })).subtreeFlags = 65011712 & s.subtreeFlags),
              null !== u
                ? (a = Ir(u, a))
                : ((a = $r(a, c, n, null)).flags |= 2),
              (a.return = t),
              (i.return = t),
              (i.sibling = a),
              (t.child = i),
              (i = a),
              (a = t.child),
              null === (c = e.child.memoizedState)
                ? (c = Fl(n))
                : (null !== (s = c.cachePool)
                    ? ((u = Pi._currentValue),
                      (s = s.parent !== u ? { parent: u, pool: u } : s))
                    : (s = Vi()),
                  (c = { baseLanes: c.baseLanes | n, cachePool: s })),
              (a.memoizedState = c),
              (a.childLanes = $l(e, r, n)),
              (t.memoizedState = Bl),
              i)
            : (ol(t),
              (e = (n = e.child).sibling),
              ((n = Ir(n, { mode: "visible", children: i.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function Ul(e, t) {
          return (
            ((t = Vl({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function Vl(e, t) {
          return (
            ((e = Nr(22, e, null, t)).lanes = 0),
            (e.stateNode = {
              _visibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
            }),
            e
          );
        }
        function Wl(e, t, n) {
          return (
            nl(t, e.child, null, n),
            ((e = Ul(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function ql(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xi(e.return, t, n);
        }
        function Xl(e, t, n, r, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Gl(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((jl(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ql(e, n, t);
                else if (19 === e.tag) ql(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch (($(ul, r), i)) {
            case "forwards":
              for (n = t.child, i = null; null !== n; )
                null !== (e = n.alternate) && null === dl(e) && (i = n),
                  (n = n.sibling);
              null === (n = i)
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
                Xl(t, !1, i, n, a);
              break;
            case "backwards":
              for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === dl(e)) {
                  t.child = i;
                  break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
              }
              Xl(t, !0, n, null, a);
              break;
            case "together":
              Xl(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function Yl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (pc |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((ki(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ir((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ir(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ci(e))
          );
        }
        function Ql(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Tl = !0;
            else {
              if (!Kl(e, n) && 0 === (128 & t.flags))
                return (
                  (Tl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        q(t, t.stateNode.containerInfo),
                          vi(0, Pi, e.memoizedState.cache),
                          pi();
                        break;
                      case 27:
                      case 5:
                        G(t);
                        break;
                      case 4:
                        q(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        vi(0, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (ol(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Hl(e, t, n)
                            : (ol(t),
                              null !== (e = Yl(e, t, n)) ? e.sibling : null);
                        ol(t);
                        break;
                      case 19:
                        var i = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (ki(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          i)
                        ) {
                          if (r) return Gl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          $(ul, ul.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Pl(e, t, n);
                      case 24:
                        vi(0, Pi, e.memoizedState.cache);
                    }
                    return Yl(e, t, n);
                  })(e, t, n)
                );
              Tl = 0 !== (131072 & e.flags);
            }
          else (Tl = !1), ai && 0 !== (1048576 & t.flags) && ei(t, Xr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  i = r._init;
                if (
                  ((r = i(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((i = r.$$typeof) === S) {
                      (t.tag = 11), (t = Ol(null, t, r, e, n));
                      break e;
                    }
                    if (i === E) {
                      (t.tag = 14), (t = zl(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = P(r) || r), Error(o(306, t, "")));
                }
                Dr(r)
                  ? ((e = gl(r, e)), (t.tag = 1), (t = Dl(null, t, r, e, n)))
                  : ((t.tag = 0), (t = Ll(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Ll(e, t, t.type, t.pendingProps, n);
            case 1:
              return Dl(e, t, (r = t.type), (i = gl(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((q(t, t.stateNode.containerInfo), null === e))
                  throw Error(o(387));
                r = t.pendingProps;
                var a = t.memoizedState;
                (i = a.element), ra(e, t), ua(t, r, null, n);
                var l = t.memoizedState;
                if (
                  ((r = l.cache),
                  vi(0, Pi, r),
                  r !== a.cache && Si(t, [Pi], n, !0),
                  ca(),
                  (r = l.element),
                  a.isDehydrated)
                ) {
                  if (
                    ((a = { element: r, isDehydrated: !1, cache: l.cache }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Il(e, t, r, n);
                    break e;
                  }
                  if (r !== i) {
                    mi((i = Cr(Error(o(424)), t))), (t = Il(e, t, r, n));
                    break e;
                  }
                  if (9 === (e = t.stateNode.containerInfo).nodeType)
                    e = e.body;
                  else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                  for (
                    ii = yd(e.firstChild),
                      ri = t,
                      ai = !0,
                      oi = null,
                      li = !0,
                      n = rl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === i)) {
                    t = Yl(e, t, n);
                    break e;
                  }
                  jl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Ml(e, t),
                null === e
                  ? (n = jd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : ai ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = rd(V.current).createElement(n))[Pe] = t),
                      (r[Ae] = e),
                      ed(r, n, e),
                      We(r),
                      (t.stateNode = r))
                  : (t.memoizedState = jd(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                G(t),
                null === e &&
                  ai &&
                  ((r = t.stateNode = wd(t.type, t.pendingProps, V.current)),
                  (ri = t),
                  (li = !0),
                  (i = ii),
                  pd(t.type) ? ((bd = i), (ii = yd(r.firstChild))) : (ii = i)),
                jl(e, t, t.pendingProps.children, n),
                Ml(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  ai &&
                  ((i = r = ii) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var i = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Be])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (a = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  a !== i.rel ||
                                  e.getAttribute("href") !==
                                    (null == i.href || "" === i.href
                                      ? null
                                      : i.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == i.crossOrigin
                                      ? null
                                      : i.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == i.title ? null : i.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((a = e.getAttribute("src")) !==
                                    (null == i.src ? null : i.src) ||
                                    e.getAttribute("type") !==
                                      (null == i.type ? null : i.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == i.crossOrigin
                                        ? null
                                        : i.crossOrigin)) &&
                                  a &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var a = null == i.name ? null : "" + i.name;
                          if (
                            "hidden" === i.type &&
                            e.getAttribute("name") === a
                          )
                            return e;
                        }
                        if (null === (e = yd(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, li))
                      ? ((t.stateNode = r),
                        (ri = t),
                        (ii = yd(r.firstChild)),
                        (li = !1),
                        (i = !0))
                      : (i = !1)),
                  i || ci(t)),
                G(t),
                (i = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (r = a.children),
                od(i, a)
                  ? (r = null)
                  : null !== l && od(i, l) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((i = Ra(e, t, Ma, null, null, n)), (Gd._currentValue = i)),
                Ml(e, t),
                jl(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  ai &&
                  ((e = n = ii) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = yd(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, li))
                      ? ((t.stateNode = n), (ri = t), (ii = null), (e = !0))
                      : (e = !1)),
                  e || ci(t)),
                null
              );
            case 13:
              return Hl(e, t, n);
            case 4:
              return (
                q(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = nl(t, null, r, n)) : jl(e, t, r, n),
                t.child
              );
            case 11:
              return Ol(e, t, t.type, t.pendingProps, n);
            case 7:
              return jl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return jl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                vi(0, t.type, r.value),
                jl(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (i = t.type._context),
                (r = t.pendingProps.children),
                Ei(t),
                (r = r((i = _i(i)))),
                (t.flags |= 1),
                jl(e, t, r, n),
                t.child
              );
            case 14:
              return zl(e, t, t.type, t.pendingProps, n);
            case 15:
              return Rl(e, t, t.type, t.pendingProps, n);
            case 19:
              return Gl(e, t, n);
            case 31:
              return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = { mode: r.mode, children: r.children }),
                null === e
                  ? (((n = Vl(r, n)).ref = t.ref),
                    (t.child = n),
                    (n.return = t),
                    (t = n))
                  : (((n = Ir(e.child, r)).ref = t.ref),
                    (t.child = n),
                    (n.return = t),
                    (t = n)),
                t
              );
            case 22:
              return Pl(e, t, n);
            case 24:
              return (
                Ei(t),
                (r = _i(Pi)),
                null === e
                  ? (null === (i = Hi()) &&
                      ((i = rc),
                      (a = Ai()),
                      (i.pooledCache = a),
                      a.refCount++,
                      null !== a && (i.pooledCacheLanes |= n),
                      (i = a)),
                    (t.memoizedState = { parent: r, cache: i }),
                    na(t),
                    vi(0, Pi, i))
                  : (0 !== (e.lanes & n) &&
                      (ra(e, t), ua(t, null, null, n), ca()),
                    (i = e.memoizedState),
                    (a = t.memoizedState),
                    i.parent !== r
                      ? ((i = { parent: r, cache: r }),
                        (t.memoizedState = i),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = i),
                        vi(0, Pi, r))
                      : ((r = a.cache),
                        vi(0, Pi, r),
                        r !== i.cache && Si(t, [Pi], n, !0))),
                jl(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(o(156, t.tag));
        }
        function Jl(e) {
          e.flags |= 4;
        }
        function Zl(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !$d(t))) {
            if (
              null !== (t = il.current) &&
              ((4194048 & ac) === ac
                ? null !== al
                : ((62914560 & ac) !== ac && 0 === (536870912 & ac)) ||
                  t !== al)
            )
              throw ((Ji = Gi), qi);
            e.flags |= 8192;
          }
        }
        function es(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? ke() : 536870912),
              (e.lanes |= t),
              (yc |= t));
        }
        function ts(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ns(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 65011712 & i.subtreeFlags),
                (r |= 65011712 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function rs(e, t, n) {
          var r = t.pendingProps;
          switch ((ni(t), t.tag)) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return ns(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                wi(Pi),
                X(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fi(t)
                    ? Jl(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), hi())),
                ns(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Jl(t),
                    null !== n
                      ? (ns(t), Zl(t, n))
                      : (ns(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Jl(t), ns(t), Zl(t, n))
                    : (ns(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Jl(t),
                    ns(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              Y(t), (n = V.current);
              var i = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Jl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ns(t), null;
                }
                (e = H.current),
                  fi(t) ? ui(t) : ((e = wd(i, r, n)), (t.stateNode = e), Jl(t));
              }
              return ns(t), null;
            case 5:
              if ((Y(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Jl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ns(t), null;
                }
                if (((e = H.current), fi(t))) ui(t);
                else {
                  switch (((i = rd(V.current)), e)) {
                    case 1:
                      e = i.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = i.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = i.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = i.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = i.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" === typeof r.is
                              ? i.createElement("select", { is: r.is })
                              : i.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? i.createElement(n, { is: r.is })
                              : i.createElement(n);
                      }
                  }
                  (e[Pe] = t), (e[Ae] = r);
                  e: for (i = t.child; null !== i; ) {
                    if (5 === i.tag || 6 === i.tag) e.appendChild(i.stateNode);
                    else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                      (i.child.return = i), (i = i.child);
                      continue;
                    }
                    if (i === t) break e;
                    for (; null === i.sibling; ) {
                      if (null === i.return || i.return === t) break e;
                      i = i.return;
                    }
                    (i.sibling.return = i.return), (i = i.sibling);
                  }
                  t.stateNode = e;
                  e: switch ((ed(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Jl(t);
                }
              }
              return ns(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Jl(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((e = V.current), fi(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (i = ri))
                  )
                    switch (i.tag) {
                      case 27:
                      case 5:
                        r = i.memoizedProps;
                    }
                  (e[Pe] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      Ku(e.nodeValue, n)
                    )) || ci(t);
                } else
                  ((e = rd(e).createTextNode(r))[Pe] = t), (t.stateNode = e);
              }
              return ns(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((i = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[Pe] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ns(t), (i = !1);
                } else
                  (i = hi()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = i),
                    (i = !0);
                if (!i) return 256 & t.flags ? (cl(t), t) : (cl(t), null);
              }
              if ((cl(t), 0 !== (128 & t.flags))) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (i = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (i = r.alternate.memoizedState.cachePool.pool);
                var a = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (a = r.memoizedState.cachePool.pool),
                  a !== i && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                es(t, t.updateQueue),
                ns(t),
                null
              );
            case 4:
              return (
                X(), null === e && Fu(t.stateNode.containerInfo), ns(t), null
              );
            case 10:
              return wi(t.type), ns(t), null;
            case 19:
              if ((F(ul), null === (i = t.memoizedState))) return ns(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (a = i.rendering)))
                if (r) ts(i, !1);
                else {
                  if (0 !== fc || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (a = dl(e))) {
                        for (
                          t.flags |= 128,
                            ts(i, !1),
                            e = a.updateQueue,
                            t.updateQueue = e,
                            es(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Br(n, e), (n = n.sibling);
                        return $(ul, (1 & ul.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    te() > Sc &&
                    ((t.flags |= 128),
                    (r = !0),
                    ts(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = dl(a))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      es(t, e),
                      ts(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !a.alternate &&
                        !ai)
                    )
                      return ns(t), null;
                  } else
                    2 * te() - i.renderingStartTime > Sc &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      ts(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((a.sibling = t.child), (t.child = a))
                  : (null !== (e = i.last) ? (e.sibling = a) : (t.child = a),
                    (i.last = a));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = te()),
                  (t.sibling = null),
                  (e = ul.current),
                  $(ul, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (ns(t), null);
            case 22:
            case 23:
              return (
                cl(t),
                ya(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (ns(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ns(t),
                null !== (n = t.updateQueue) && es(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && F($i),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                wi(Pi),
                ns(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function is(e, t) {
          switch ((ni(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                wi(Pi),
                X(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return Y(t), null;
            case 13:
              if (
                (cl(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return F(ul), null;
            case 4:
              return X(), null;
            case 10:
              return wi(t.type), null;
            case 22:
            case 23:
              return (
                cl(t),
                ya(),
                null !== e && F($i),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return wi(Pi), null;
            default:
              return null;
          }
        }
        function as(e, t) {
          switch ((ni(t), t.tag)) {
            case 3:
              wi(Pi), X();
              break;
            case 26:
            case 27:
            case 5:
              Y(t);
              break;
            case 4:
              X();
              break;
            case 13:
              cl(t);
              break;
            case 19:
              F(ul);
              break;
            case 10:
              wi(t.type);
              break;
            case 22:
            case 23:
              cl(t), ya(), null !== e && F($i);
              break;
            case 24:
              wi(Pi);
          }
        }
        function os(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var i = r.next;
              n = i;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var a = n.create,
                    o = n.inst;
                  (r = a()), (o.destroy = r);
                }
                n = n.next;
              } while (n !== i);
            }
          } catch (l) {
            uu(t, t.return, l);
          }
        }
        function ls(e, t, n) {
          try {
            var r = t.updateQueue,
              i = null !== r ? r.lastEffect : null;
            if (null !== i) {
              var a = i.next;
              r = a;
              do {
                if ((r.tag & e) === e) {
                  var o = r.inst,
                    l = o.destroy;
                  if (void 0 !== l) {
                    (o.destroy = void 0), (i = t);
                    var s = n,
                      c = l;
                    try {
                      c();
                    } catch (u) {
                      uu(i, s, u);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (u) {
            uu(t, t.return, u);
          }
        }
        function ss(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              fa(t, n);
            } catch (r) {
              uu(e, e.return, r);
            }
          }
        }
        function cs(e, t, n) {
          (n.props = gl(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            uu(e, t, r);
          }
        }
        function us(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              "function" === typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (i) {
            uu(e, t, i);
          }
        }
        function ds(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (i) {
                uu(e, t, i);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (a) {
                uu(e, t, a);
              }
            else n.current = null;
        }
        function fs(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (i) {
            uu(e, e.return, i);
          }
        }
        function ps(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var i = null,
                    a = null,
                    l = null,
                    s = null,
                    c = null,
                    u = null,
                    d = null;
                  for (h in n) {
                    var f = n[h];
                    if (n.hasOwnProperty(h) && null != f)
                      switch (h) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          c = f;
                        default:
                          r.hasOwnProperty(h) || Ju(e, t, h, null, r, f);
                      }
                  }
                  for (var p in r) {
                    var h = r[p];
                    if (
                      ((f = n[p]),
                      r.hasOwnProperty(p) && (null != h || null != f))
                    )
                      switch (p) {
                        case "type":
                          a = h;
                          break;
                        case "name":
                          i = h;
                          break;
                        case "checked":
                          u = h;
                          break;
                        case "defaultChecked":
                          d = h;
                          break;
                        case "value":
                          l = h;
                          break;
                        case "defaultValue":
                          s = h;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(o(137, t));
                          break;
                        default:
                          h !== f && Ju(e, t, p, h, r, f);
                      }
                  }
                  return void gt(e, l, s, c, u, d, a, i);
                case "select":
                  for (a in ((h = l = s = p = null), n))
                    if (((c = n[a]), n.hasOwnProperty(a) && null != c))
                      switch (a) {
                        case "value":
                          break;
                        case "multiple":
                          h = c;
                        default:
                          r.hasOwnProperty(a) || Ju(e, t, a, null, r, c);
                      }
                  for (i in r)
                    if (
                      ((a = r[i]),
                      (c = n[i]),
                      r.hasOwnProperty(i) && (null != a || null != c))
                    )
                      switch (i) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          s = a;
                          break;
                        case "multiple":
                          l = a;
                        default:
                          a !== c && Ju(e, t, i, a, r, c);
                      }
                  return (
                    (t = s),
                    (n = l),
                    (r = h),
                    void (null != p
                      ? vt(e, !!n, p, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? vt(e, !!n, t, !0)
                          : vt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (s in ((h = p = null), n))
                    if (
                      ((i = n[s]),
                      n.hasOwnProperty(s) && null != i && !r.hasOwnProperty(s))
                    )
                      switch (s) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Ju(e, t, s, null, r, i);
                      }
                  for (l in r)
                    if (
                      ((i = r[l]),
                      (a = n[l]),
                      r.hasOwnProperty(l) && (null != i || null != a))
                    )
                      switch (l) {
                        case "value":
                          p = i;
                          break;
                        case "defaultValue":
                          h = i;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != i) throw Error(o(91));
                          break;
                        default:
                          i !== a && Ju(e, t, l, i, r, a);
                      }
                  return void wt(e, p, h);
                case "option":
                  for (var m in n)
                    if (
                      ((p = n[m]),
                      n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m))
                    )
                      if ("selected" === m) e.selected = !1;
                      else Ju(e, t, m, null, r, p);
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (h = n[c]),
                      r.hasOwnProperty(c) &&
                        p !== h &&
                        (null != p || null != h))
                    )
                      if ("selected" === c)
                        e.selected =
                          p && "function" !== typeof p && "symbol" !== typeof p;
                      else Ju(e, t, c, p, r, h);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        Ju(e, t, g, null, r, p);
                  for (u in r)
                    if (
                      ((p = r[u]),
                      (h = n[u]),
                      r.hasOwnProperty(u) &&
                        p !== h &&
                        (null != p || null != h))
                    )
                      switch (u) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(o(137, t));
                          break;
                        default:
                          Ju(e, t, u, p, r, h);
                      }
                  return;
                default:
                  if (_t(t)) {
                    for (var y in n)
                      (p = n[y]),
                        n.hasOwnProperty(y) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(y) &&
                          Zu(e, t, y, void 0, r, p);
                    for (d in r)
                      (p = r[d]),
                        (h = n[d]),
                        !r.hasOwnProperty(d) ||
                          p === h ||
                          (void 0 === p && void 0 === h) ||
                          Zu(e, t, d, p, r, h);
                    return;
                  }
              }
              for (var b in n)
                (p = n[b]),
                  n.hasOwnProperty(b) &&
                    null != p &&
                    !r.hasOwnProperty(b) &&
                    Ju(e, t, b, null, r, p);
              for (f in r)
                (p = r[f]),
                  (h = n[f]),
                  !r.hasOwnProperty(f) ||
                    p === h ||
                    (null == p && null == h) ||
                    Ju(e, t, f, p, r, h);
            })(r, e.type, n, t),
              (r[Ae] = t);
          } catch (i) {
            uu(e, e.return, i);
          }
        }
        function hs(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            (27 === e.tag && pd(e.type)) ||
            4 === e.tag
          );
        }
        function ms(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || hs(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (27 === e.tag && pd(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function gs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? (9 === n.nodeType
                    ? n.body
                    : "HTML" === n.nodeName
                    ? n.ownerDocument.body
                    : n
                  ).insertBefore(e, t)
                : ((t =
                    9 === n.nodeType
                      ? n.body
                      : "HTML" === n.nodeName
                      ? n.ownerDocument.body
                      : n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Qu));
          else if (
            4 !== r &&
            (27 === r && pd(e.type) && ((n = e.stateNode), (t = null)),
            null !== (e = e.child))
          )
            for (gs(e, t, n), e = e.sibling; null !== e; )
              gs(e, t, n), (e = e.sibling);
        }
        function ys(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (
            4 !== r &&
            (27 === r && pd(e.type) && (n = e.stateNode),
            null !== (e = e.child))
          )
            for (ys(e, t, n), e = e.sibling; null !== e; )
              ys(e, t, n), (e = e.sibling);
        }
        function bs(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, i = t.attributes; i.length; )
              t.removeAttributeNode(i[0]);
            ed(t, r, n), (t[Pe] = e), (t[Ae] = n);
          } catch (a) {
            uu(e, e.return, a);
          }
        }
        var vs = !1,
          ws = !1,
          xs = !1,
          Ss = "function" === typeof WeakSet ? WeakSet : Set,
          ks = null;
        function Cs(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Ds(e, n), 4 & r && os(5, n);
              break;
            case 1:
              if ((Ds(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (o) {
                    uu(n, n.return, o);
                  }
                else {
                  var i = gl(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      i,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (l) {
                    uu(n, n.return, l);
                  }
                }
              64 & r && ss(n), 512 & r && us(n, n.return);
              break;
            case 3:
              if ((Ds(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  fa(e, t);
                } catch (o) {
                  uu(n, n.return, o);
                }
              }
              break;
            case 27:
              null === t && 4 & r && bs(n);
            case 26:
            case 5:
              Ds(e, n),
                null === t && 4 & r && fs(n),
                512 & r && us(n, n.return);
              break;
            case 12:
              Ds(e, n);
              break;
            case 13:
              Ds(e, n),
                4 & r && zs(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ("$?" !== e.data || "complete" === n.readyState) t();
                    else {
                      var r = function () {
                        t(), n.removeEventListener("DOMContentLoaded", r);
                      };
                      n.addEventListener("DOMContentLoaded", r),
                        (e._reactRetry = r);
                    }
                  })(e, (n = hu.bind(null, n)));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || vs)) {
                (t = (null !== t && null !== t.memoizedState) || ws), (i = vs);
                var a = ws;
                (vs = r),
                  (ws = t) && !a
                    ? Bs(e, n, 0 !== (8772 & n.subtreeFlags))
                    : Ds(e, n),
                  (vs = i),
                  (ws = a);
              }
              break;
            case 30:
              break;
            default:
              Ds(e, n);
          }
        }
        function Es(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), Es(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Fe(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var _s = null,
          Ts = !1;
        function js(e, t, n) {
          for (n = n.child; null !== n; ) Os(e, t, n), (n = n.sibling);
        }
        function Os(e, t, n) {
          if (de && "function" === typeof de.onCommitFiberUnmount)
            try {
              de.onCommitFiberUnmount(ue, n);
            } catch (a) {}
          switch (n.tag) {
            case 26:
              ws || ds(n, t),
                js(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              ws || ds(n, t);
              var r = _s,
                i = Ts;
              pd(n.type) && ((_s = n.stateNode), (Ts = !1)),
                js(e, t, n),
                xd(n.stateNode),
                (_s = r),
                (Ts = i);
              break;
            case 5:
              ws || ds(n, t);
            case 6:
              if (
                ((r = _s),
                (i = Ts),
                (_s = null),
                js(e, t, n),
                (Ts = i),
                null !== (_s = r))
              )
                if (Ts)
                  try {
                    (9 === _s.nodeType
                      ? _s.body
                      : "HTML" === _s.nodeName
                      ? _s.ownerDocument.body
                      : _s
                    ).removeChild(n.stateNode);
                  } catch (o) {
                    uu(n, t, o);
                  }
                else
                  try {
                    _s.removeChild(n.stateNode);
                  } catch (o) {
                    uu(n, t, o);
                  }
              break;
            case 18:
              null !== _s &&
                (Ts
                  ? (hd(
                      9 === (e = _s).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                        ? e.ownerDocument.body
                        : e,
                      n.stateNode
                    ),
                    jf(e))
                  : hd(_s, n.stateNode));
              break;
            case 4:
              (r = _s),
                (i = Ts),
                (_s = n.stateNode.containerInfo),
                (Ts = !0),
                js(e, t, n),
                (_s = r),
                (Ts = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              ws || ls(2, n, t), ws || ls(4, n, t), js(e, t, n);
              break;
            case 1:
              ws ||
                (ds(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  cs(n, t, r)),
                js(e, t, n);
              break;
            case 21:
              js(e, t, n);
              break;
            case 22:
              (ws = (r = ws) || null !== n.memoizedState),
                js(e, t, n),
                (ws = r);
              break;
            default:
              js(e, t, n);
          }
        }
        function zs(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              jf(e);
            } catch (n) {
              uu(t, t.return, n);
            }
        }
        function Rs(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new Ss()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new Ss()),
                  t
                );
              default:
                throw Error(o(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = mu.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function Ps(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = e,
                l = t,
                s = l;
              e: for (; null !== s; ) {
                switch (s.tag) {
                  case 27:
                    if (pd(s.type)) {
                      (_s = s.stateNode), (Ts = !1);
                      break e;
                    }
                    break;
                  case 5:
                    (_s = s.stateNode), (Ts = !1);
                    break e;
                  case 3:
                  case 4:
                    (_s = s.stateNode.containerInfo), (Ts = !0);
                    break e;
                }
                s = s.return;
              }
              if (null === _s) throw Error(o(160));
              Os(a, l, i),
                (_s = null),
                (Ts = !1),
                null !== (a = i.alternate) && (a.return = null),
                (i.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) Ms(t, e), (t = t.sibling);
        }
        var As = null;
        function Ms(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Ps(t, e),
                Ls(e),
                4 & r && (ls(3, e, e.return), os(3, e), ls(5, e, e.return));
              break;
            case 1:
              Ps(t, e),
                Ls(e),
                512 & r && (ws || null === n || ds(n, n.return)),
                64 & r &&
                  vs &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var i = As;
              if (
                (Ps(t, e),
                Ls(e),
                512 & r && (ws || null === n || ds(n, n.return)),
                4 & r)
              ) {
                var a = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (i = i.ownerDocument || i);
                        t: switch (r) {
                          case "title":
                            (!(a = i.getElementsByTagName("title")[0]) ||
                              a[Be] ||
                              a[Pe] ||
                              "http://www.w3.org/2000/svg" === a.namespaceURI ||
                              a.hasAttribute("itemprop")) &&
                              ((a = i.createElement(r)),
                              i.head.insertBefore(
                                a,
                                i.querySelector("head > title")
                              )),
                              ed(a, r, n),
                              (a[Pe] = e),
                              We(a),
                              (r = a);
                            break e;
                          case "link":
                            var l = Bd("link", "href", i).get(
                              r + (n.href || "")
                            );
                            if (l)
                              for (var s = 0; s < l.length; s++)
                                if (
                                  (a = l[s]).getAttribute("href") ===
                                    (null == n.href || "" === n.href
                                      ? null
                                      : n.href) &&
                                  a.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  a.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  a.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  l.splice(s, 1);
                                  break t;
                                }
                            ed((a = i.createElement(r)), r, n),
                              i.head.appendChild(a);
                            break;
                          case "meta":
                            if (
                              (l = Bd("meta", "content", i).get(
                                r + (n.content || "")
                              ))
                            )
                              for (s = 0; s < l.length; s++)
                                if (
                                  (a = l[s]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  a.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  a.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  a.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  a.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  l.splice(s, 1);
                                  break t;
                                }
                            ed((a = i.createElement(r)), r, n),
                              i.head.appendChild(a);
                            break;
                          default:
                            throw Error(o(468, r));
                        }
                        (a[Pe] = e), We(a), (r = a);
                      }
                      e.stateNode = r;
                    } else Fd(i, e.type, e.stateNode);
                  else e.stateNode = Md(i, r, e.memoizedProps);
                else
                  a !== r
                    ? (null === a
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : a.count--,
                      null === r
                        ? Fd(i, e.type, e.stateNode)
                        : Md(i, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      ps(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              Ps(t, e),
                Ls(e),
                512 & r && (ws || null === n || ds(n, n.return)),
                null !== n && 4 & r && ps(e, e.memoizedProps, n.memoizedProps);
              break;
            case 5:
              if (
                (Ps(t, e),
                Ls(e),
                512 & r && (ws || null === n || ds(n, n.return)),
                32 & e.flags)
              ) {
                i = e.stateNode;
                try {
                  St(i, "");
                } catch (h) {
                  uu(e, e.return, h);
                }
              }
              4 & r &&
                null != e.stateNode &&
                ps(e, (i = e.memoizedProps), null !== n ? n.memoizedProps : i),
                1024 & r && (xs = !0);
              break;
            case 6:
              if ((Ps(t, e), Ls(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (h) {
                  uu(e, e.return, h);
                }
              }
              break;
            case 3:
              if (
                ((Id = null),
                (i = As),
                (As = Cd(t.containerInfo)),
                Ps(t, e),
                (As = i),
                Ls(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  jf(t.containerInfo);
                } catch (h) {
                  uu(e, e.return, h);
                }
              xs && ((xs = !1), Ns(e));
              break;
            case 4:
              (r = As),
                (As = Cd(e.stateNode.containerInfo)),
                Ps(t, e),
                Ls(e),
                (As = r);
              break;
            case 12:
            default:
              Ps(t, e), Ls(e);
              break;
            case 13:
              Ps(t, e),
                Ls(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (xc = te()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Rs(e, r));
              break;
            case 22:
              i = null !== e.memoizedState;
              var c = null !== n && null !== n.memoizedState,
                u = vs,
                d = ws;
              if (
                ((vs = u || i),
                (ws = d || c),
                Ps(t, e),
                (ws = d),
                (vs = u),
                Ls(e),
                8192 & r)
              )
                e: for (
                  t = e.stateNode,
                    t._visibility = i ? -2 & t._visibility : 1 | t._visibility,
                    i && (null === n || c || vs || ws || Is(e)),
                    n = null,
                    t = e;
                  ;

                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((a = c.stateNode), i))
                          "function" === typeof (l = a.style).setProperty
                            ? l.setProperty("display", "none", "important")
                            : (l.display = "none");
                        else {
                          s = c.stateNode;
                          var f = c.memoizedProps.style,
                            p =
                              void 0 !== f &&
                              null !== f &&
                              f.hasOwnProperty("display")
                                ? f.display
                                : null;
                          s.style.display =
                            null == p || "boolean" === typeof p
                              ? ""
                              : ("" + p).trim();
                        }
                      } catch (h) {
                        uu(c, c.return, h);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = i ? "" : c.memoizedProps;
                      } catch (h) {
                        uu(c, c.return, h);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), Rs(e, n));
              break;
            case 19:
              Ps(t, e),
                Ls(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), Rs(e, r));
            case 30:
            case 21:
          }
        }
        function Ls(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, r = e.return; null !== r; ) {
                if (hs(r)) {
                  n = r;
                  break;
                }
                r = r.return;
              }
              if (null == n) throw Error(o(160));
              switch (n.tag) {
                case 27:
                  var i = n.stateNode;
                  ys(e, ms(e), i);
                  break;
                case 5:
                  var a = n.stateNode;
                  32 & n.flags && (St(a, ""), (n.flags &= -33)),
                    ys(e, ms(e), a);
                  break;
                case 3:
                case 4:
                  var l = n.stateNode.containerInfo;
                  gs(e, ms(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (s) {
              uu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function Ns(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              Ns(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function Ds(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              Cs(e, t.alternate, t), (t = t.sibling);
        }
        function Is(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ls(4, t, t.return), Is(t);
                break;
              case 1:
                ds(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  cs(t, t.return, n),
                  Is(t);
                break;
              case 27:
                xd(t.stateNode);
              case 26:
              case 5:
                ds(t, t.return), Is(t);
                break;
              case 22:
                null === t.memoizedState && Is(t);
                break;
              default:
                Is(t);
            }
            e = e.sibling;
          }
        }
        function Bs(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              i = e,
              a = t,
              o = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                Bs(i, a, n), os(4, a);
                break;
              case 1:
                if (
                  (Bs(i, a, n),
                  "function" ===
                    typeof (i = (r = a).stateNode).componentDidMount)
                )
                  try {
                    i.componentDidMount();
                  } catch (c) {
                    uu(r, r.return, c);
                  }
                if (null !== (i = (r = a).updateQueue)) {
                  var l = r.stateNode;
                  try {
                    var s = i.shared.hiddenCallbacks;
                    if (null !== s)
                      for (
                        i.shared.hiddenCallbacks = null, i = 0;
                        i < s.length;
                        i++
                      )
                        da(s[i], l);
                  } catch (c) {
                    uu(r, r.return, c);
                  }
                }
                n && 64 & o && ss(a), us(a, a.return);
                break;
              case 27:
                bs(a);
              case 26:
              case 5:
                Bs(i, a, n), n && null === r && 4 & o && fs(a), us(a, a.return);
                break;
              case 12:
                Bs(i, a, n);
                break;
              case 13:
                Bs(i, a, n), n && 4 & o && zs(i, a);
                break;
              case 22:
                null === a.memoizedState && Bs(i, a, n), us(a, a.return);
                break;
              case 30:
                break;
              default:
                Bs(i, a, n);
            }
            t = t.sibling;
          }
        }
        function Fs(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Mi(n));
        }
        function $s(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Mi(e));
        }
        function Hs(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) Us(e, t, n, r), (t = t.sibling);
        }
        function Us(e, t, n, r) {
          var i = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Hs(e, t, n, r), 2048 & i && os(9, t);
              break;
            case 1:
            case 13:
            default:
              Hs(e, t, n, r);
              break;
            case 3:
              Hs(e, t, n, r),
                2048 & i &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Mi(e)));
              break;
            case 12:
              if (2048 & i) {
                Hs(e, t, n, r), (e = t.stateNode);
                try {
                  var a = t.memoizedProps,
                    o = a.id,
                    l = a.onPostCommit;
                  "function" === typeof l &&
                    l(
                      o,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (s) {
                  uu(t, t.return, s);
                }
              } else Hs(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (a = t.stateNode),
                (o = t.alternate),
                null !== t.memoizedState
                  ? 2 & a._visibility
                    ? Hs(e, t, n, r)
                    : Ws(e, t)
                  : 2 & a._visibility
                  ? Hs(e, t, n, r)
                  : ((a._visibility |= 2),
                    Vs(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & i && Fs(o, t);
              break;
            case 24:
              Hs(e, t, n, r), 2048 & i && $s(t.alternate, t);
          }
        }
        function Vs(e, t, n, r, i) {
          for (
            i = i && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var a = e,
              o = t,
              l = n,
              s = r,
              c = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Vs(a, o, l, s, i), os(8, o);
                break;
              case 23:
                break;
              case 22:
                var u = o.stateNode;
                null !== o.memoizedState
                  ? 2 & u._visibility
                    ? Vs(a, o, l, s, i)
                    : Ws(a, o)
                  : ((u._visibility |= 2), Vs(a, o, l, s, i)),
                  i && 2048 & c && Fs(o.alternate, o);
                break;
              case 24:
                Vs(a, o, l, s, i), i && 2048 & c && $s(o.alternate, o);
                break;
              default:
                Vs(a, o, l, s, i);
            }
            t = t.sibling;
          }
        }
        function Ws(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                i = r.flags;
              switch (r.tag) {
                case 22:
                  Ws(n, r), 2048 & i && Fs(r.alternate, r);
                  break;
                case 24:
                  Ws(n, r), 2048 & i && $s(r.alternate, r);
                  break;
                default:
                  Ws(n, r);
              }
              t = t.sibling;
            }
        }
        var qs = 8192;
        function Xs(e) {
          if (e.subtreeFlags & qs)
            for (e = e.child; null !== e; ) Gs(e), (e = e.sibling);
        }
        function Gs(e) {
          switch (e.tag) {
            case 26:
              Xs(e),
                e.flags & qs &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Hd) throw Error(o(475));
                    var r = Hd;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var i = Od(n.href),
                          a = e.querySelector(zd(i));
                        if (a)
                          return (
                            null !== (e = a._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = Vd.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = a),
                            void We(a)
                          );
                        (a = e.ownerDocument || e),
                          (n = Rd(n)),
                          (i = Sd.get(i)) && Nd(n, i),
                          We((a = a.createElement("link")));
                        var l = a;
                        (l._p = new Promise(function (e, t) {
                          (l.onload = e), (l.onerror = t);
                        })),
                          ed(a, "link", n),
                          (t.instance = a);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = Vd.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(As, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              Xs(e);
              break;
            case 3:
            case 4:
              var t = As;
              (As = Cd(e.stateNode.containerInfo)), Xs(e), (As = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = qs), (qs = 16777216), Xs(e), (qs = t))
                  : Xs(e));
          }
        }
        function Ys(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Ks(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (ks = r), Zs(r, e);
              }
            Ys(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) Qs(e), (e = e.sibling);
        }
        function Qs(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ks(e), 2048 & e.flags && ls(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Ks(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              2 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), Js(e))
                : Ks(e);
          }
        }
        function Js(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (ks = r), Zs(r, e);
              }
            Ys(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                ls(8, t, t.return), Js(t);
                break;
              case 22:
                2 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -3), Js(t));
                break;
              default:
                Js(t);
            }
            e = e.sibling;
          }
        }
        function Zs(e, t) {
          for (; null !== ks; ) {
            var n = ks;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ls(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Mi(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (ks = r);
            else
              e: for (n = e; null !== ks; ) {
                var i = (r = ks).sibling,
                  a = r.return;
                if ((Es(r), r === n)) {
                  ks = null;
                  break e;
                }
                if (null !== i) {
                  (i.return = a), (ks = i);
                  break e;
                }
                ks = a;
              }
          }
        }
        var ec = {
            getCacheForType: function (e) {
              var t = _i(Pi),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          tc = "function" === typeof WeakMap ? WeakMap : Map,
          nc = 0,
          rc = null,
          ic = null,
          ac = 0,
          oc = 0,
          lc = null,
          sc = !1,
          cc = !1,
          uc = !1,
          dc = 0,
          fc = 0,
          pc = 0,
          hc = 0,
          mc = 0,
          gc = 0,
          yc = 0,
          bc = null,
          vc = null,
          wc = !1,
          xc = 0,
          Sc = 1 / 0,
          kc = null,
          Cc = null,
          Ec = 0,
          _c = null,
          Tc = null,
          jc = 0,
          Oc = 0,
          zc = null,
          Rc = null,
          Pc = 0,
          Ac = null;
        function Mc() {
          if (0 !== (2 & nc) && 0 !== ac) return ac & -ac;
          if (null !== M.T) {
            return 0 !== Di ? Di : Ou();
          }
          return ze();
        }
        function Lc() {
          0 === gc && (gc = 0 === (536870912 & ac) || ai ? Se() : 536870912);
          var e = il.current;
          return null !== e && (e.flags |= 32), gc;
        }
        function Nc(e, t, n) {
          ((e !== rc || (2 !== oc && 9 !== oc)) &&
            null === e.cancelPendingCommit) ||
            (Uc(e, 0), Fc(e, ac, gc, !1)),
            Ee(e, n),
            (0 !== (2 & nc) && e === rc) ||
              (e === rc &&
                (0 === (2 & nc) && (hc |= n), 4 === fc && Fc(e, ac, gc, !1)),
              Su(e));
        }
        function Dc(e, t, n) {
          if (0 !== (6 & nc)) throw Error(o(327));
          for (
            var r =
                (!n && 0 === (124 & t) && 0 === (t & e.expiredLanes)) ||
                we(e, t),
              i = r
                ? (function (e, t) {
                    var n = nc;
                    nc |= 2;
                    var r = Wc(),
                      i = qc();
                    rc !== e || ac !== t
                      ? ((kc = null), (Sc = te() + 500), Uc(e, t))
                      : (cc = we(e, t));
                    e: for (;;)
                      try {
                        if (0 !== oc && null !== ic) {
                          t = ic;
                          var a = lc;
                          t: switch (oc) {
                            case 1:
                              (oc = 0), (lc = null), Zc(e, t, a, 1);
                              break;
                            case 2:
                            case 9:
                              if (Yi(a)) {
                                (oc = 0), (lc = null), Jc(t);
                                break;
                              }
                              (t = function () {
                                (2 !== oc && 9 !== oc) || rc !== e || (oc = 7),
                                  Su(e);
                              }),
                                a.then(t, t);
                              break e;
                            case 3:
                              oc = 7;
                              break e;
                            case 4:
                              oc = 5;
                              break e;
                            case 7:
                              Yi(a)
                                ? ((oc = 0), (lc = null), Jc(t))
                                : ((oc = 0), (lc = null), Zc(e, t, a, 7));
                              break;
                            case 5:
                              var l = null;
                              switch (ic.tag) {
                                case 26:
                                  l = ic.memoizedState;
                                case 5:
                                case 27:
                                  var s = ic;
                                  if (!l || $d(l)) {
                                    (oc = 0), (lc = null);
                                    var c = s.sibling;
                                    if (null !== c) ic = c;
                                    else {
                                      var u = s.return;
                                      null !== u
                                        ? ((ic = u), eu(u))
                                        : (ic = null);
                                    }
                                    break t;
                                  }
                              }
                              (oc = 0), (lc = null), Zc(e, t, a, 5);
                              break;
                            case 6:
                              (oc = 0), (lc = null), Zc(e, t, a, 6);
                              break;
                            case 8:
                              Hc(), (fc = 6);
                              break e;
                            default:
                              throw Error(o(462));
                          }
                        }
                        Kc();
                        break;
                      } catch (d) {
                        Vc(e, d);
                      }
                    return (
                      (bi = yi = null),
                      (M.H = r),
                      (M.A = i),
                      (nc = n),
                      null !== ic ? 0 : ((rc = null), (ac = 0), jr(), fc)
                    );
                  })(e, t)
                : Gc(e, t, !0),
              a = r;
            ;

          ) {
            if (0 === i) {
              cc && !r && Fc(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !a || Bc(n))) {
              if (2 === i) {
                if (((a = t), e.errorRecoveryDisabledLanes & a)) var l = 0;
                else
                  l =
                    0 !== (l = -536870913 & e.pendingLanes)
                      ? l
                      : 536870912 & l
                      ? 536870912
                      : 0;
                if (0 !== l) {
                  t = l;
                  e: {
                    var s = e;
                    i = bc;
                    var c = s.current.memoizedState.isDehydrated;
                    if (
                      (c && (Uc(s, l).flags |= 256), 2 !== (l = Gc(s, l, !1)))
                    ) {
                      if (uc && !c) {
                        (s.errorRecoveryDisabledLanes |= a), (hc |= a), (i = 4);
                        break e;
                      }
                      (a = vc),
                        (vc = i),
                        null !== a &&
                          (null === vc ? (vc = a) : vc.push.apply(vc, a));
                    }
                    i = l;
                  }
                  if (((a = !1), 2 !== i)) continue;
                }
              }
              if (1 === i) {
                Uc(e, 0), Fc(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), (a = i))) {
                  case 0:
                  case 1:
                    throw Error(o(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    Fc(r, t, gc, !sc);
                    break e;
                  case 2:
                    vc = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if ((62914560 & t) === t && 10 < (i = xc + 300 - te())) {
                  if ((Fc(r, t, gc, !sc), 0 !== ve(r, 0, !0))) break e;
                  r.timeoutHandle = sd(
                    Ic.bind(
                      null,
                      r,
                      n,
                      vc,
                      kc,
                      wc,
                      t,
                      gc,
                      hc,
                      yc,
                      sc,
                      a,
                      2,
                      -0,
                      0
                    ),
                    i
                  );
                } else Ic(r, n, vc, kc, wc, t, gc, hc, yc, sc, a, 0, -0, 0);
              }
              break;
            }
            (i = Gc(e, t, !1)), (a = !1);
          }
          Su(e);
        }
        function Ic(e, t, n, r, i, a, l, s, c, u, d, f, p, h) {
          if (
            ((e.timeoutHandle = -1),
            (8192 & (f = t.subtreeFlags) || 16785408 === (16785408 & f)) &&
              ((Hd = { stylesheets: null, count: 0, unsuspend: Ud }),
              Gs(t),
              null !==
                (f = (function () {
                  if (null === Hd) throw Error(o(475));
                  var e = Hd;
                  return (
                    e.stylesheets && 0 === e.count && qd(e, e.stylesheets),
                    0 < e.count
                      ? function (t) {
                          var n = setTimeout(function () {
                            if (
                              (e.stylesheets && qd(e, e.stylesheets),
                              e.unsuspend)
                            ) {
                              var t = e.unsuspend;
                              (e.unsuspend = null), t();
                            }
                          }, 6e4);
                          return (
                            (e.unsuspend = t),
                            function () {
                              (e.unsuspend = null), clearTimeout(n);
                            }
                          );
                        }
                      : null
                  );
                })())))
          )
            return (
              (e.cancelPendingCommit = f(
                nu.bind(null, e, t, a, n, r, i, l, s, c, d, 1, p, h)
              )),
              void Fc(e, a, l, !u)
            );
          nu(e, t, a, n, r, i, l, s, c);
        }
        function Bc(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var i = n[r],
                  a = i.getSnapshot;
                i = i.value;
                try {
                  if (!Yn(a(), i)) return !1;
                } catch (o) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function Fc(e, t, n, r) {
          (t &= ~mc),
            (t &= ~hc),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var i = t; 0 < i; ) {
            var a = 31 - pe(i),
              o = 1 << a;
            (r[a] = -1), (i &= ~o);
          }
          0 !== n && _e(e, n, t);
        }
        function $c() {
          return 0 !== (6 & nc) || (ku(0, !1), !1);
        }
        function Hc() {
          if (null !== ic) {
            if (0 === oc) var e = ic.return;
            else
              (bi = yi = null), Da((e = ic)), (Yo = null), (Ko = 0), (e = ic);
            for (; null !== e; ) as(e.alternate, e), (e = e.return);
            ic = null;
          }
        }
        function Uc(e, t) {
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), cd(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Hc(),
            (rc = e),
            (ic = n = Ir(e.current, null)),
            (ac = t),
            (oc = 0),
            (lc = null),
            (sc = !1),
            (cc = we(e, t)),
            (uc = !1),
            (yc = gc = mc = hc = pc = fc = 0),
            (vc = bc = null),
            (wc = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var i = 31 - pe(r),
                a = 1 << i;
              (t |= e[i]), (r &= ~a);
            }
          return (dc = t), jr(), n;
        }
        function Vc(e, t) {
          (va = null),
            (M.H = Wo),
            t === Wi || t === Xi
              ? ((t = Zi()), (oc = 3))
              : t === qi
              ? ((t = Zi()), (oc = 4))
              : (oc =
                  t === _l
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (lc = t),
            null === ic && ((fc = 1), xl(e, Cr(t, e.current)));
        }
        function Wc() {
          var e = M.H;
          return (M.H = Wo), null === e ? Wo : e;
        }
        function qc() {
          var e = M.A;
          return (M.A = ec), e;
        }
        function Xc() {
          (fc = 4),
            sc || ((4194048 & ac) !== ac && null !== il.current) || (cc = !0),
            (0 === (134217727 & pc) && 0 === (134217727 & hc)) ||
              null === rc ||
              Fc(rc, ac, gc, !1);
        }
        function Gc(e, t, n) {
          var r = nc;
          nc |= 2;
          var i = Wc(),
            a = qc();
          (rc === e && ac === t) || ((kc = null), Uc(e, t)), (t = !1);
          var o = fc;
          e: for (;;)
            try {
              if (0 !== oc && null !== ic) {
                var l = ic,
                  s = lc;
                switch (oc) {
                  case 8:
                    Hc(), (o = 6);
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === il.current && (t = !0);
                    var c = oc;
                    if (((oc = 0), (lc = null), Zc(e, l, s, c), n && cc)) {
                      o = 0;
                      break e;
                    }
                    break;
                  default:
                    (c = oc), (oc = 0), (lc = null), Zc(e, l, s, c);
                }
              }
              Yc(), (o = fc);
              break;
            } catch (u) {
              Vc(e, u);
            }
          return (
            t && e.shellSuspendCounter++,
            (bi = yi = null),
            (nc = r),
            (M.H = i),
            (M.A = a),
            null === ic && ((rc = null), (ac = 0), jr()),
            o
          );
        }
        function Yc() {
          for (; null !== ic; ) Qc(ic);
        }
        function Kc() {
          for (; null !== ic && !Z(); ) Qc(ic);
        }
        function Qc(e) {
          var t = Ql(e.alternate, e, dc);
          (e.memoizedProps = e.pendingProps), null === t ? eu(e) : (ic = t);
        }
        function Jc(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Nl(n, t, t.pendingProps, t.type, void 0, ac);
              break;
            case 11:
              t = Nl(n, t, t.pendingProps, t.type.render, t.ref, ac);
              break;
            case 5:
              Da(t);
            default:
              as(n, t), (t = Ql(n, (t = ic = Br(t, dc)), dc));
          }
          (e.memoizedProps = e.pendingProps), null === t ? eu(e) : (ic = t);
        }
        function Zc(e, t, n, r) {
          (bi = yi = null), Da(t), (Yo = null), (Ko = 0);
          var i = t.return;
          try {
            if (
              (function (e, t, n, r, i) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && ki(t, n, i, !0),
                    null !== (n = il.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === al
                            ? Xc()
                            : null === n.alternate && 0 === fc && (fc = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = i),
                          r === Gi
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              du(e, r, i)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === Gi
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              du(e, r, i)),
                          !1
                        );
                    }
                    throw Error(o(435, n.tag));
                  }
                  return du(e, r, i), Xc(), !1;
                }
                if (ai)
                  return (
                    null !== (t = il.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = i),
                        r !== si &&
                          mi(Cr((e = Error(o(422), { cause: r })), n)))
                      : (r !== si &&
                          mi(Cr((t = Error(o(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (i &= -i),
                        (e.lanes |= i),
                        (r = Cr(r, n)),
                        la(e, (i = kl(e.stateNode, r, i))),
                        4 !== fc && (fc = 2)),
                    !1
                  );
                var a = Error(o(520), { cause: r });
                if (
                  ((a = Cr(a, n)),
                  null === bc ? (bc = [a]) : bc.push(a),
                  4 !== fc && (fc = 2),
                  null === t)
                )
                  return !0;
                (r = Cr(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = i & -i),
                        (n.lanes |= e),
                        la(n, (e = kl(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (a = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== a &&
                              "function" === typeof a.componentDidCatch &&
                              (null === Cc || !Cc.has(a)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (i &= -i),
                          (n.lanes |= i),
                          El((i = Cl(i)), e, n, r),
                          la(n, i),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, i, t, n, ac)
            )
              return (fc = 1), xl(e, Cr(n, e.current)), void (ic = null);
          } catch (a) {
            if (null !== i) throw ((ic = i), a);
            return (fc = 1), xl(e, Cr(n, e.current)), void (ic = null);
          }
          32768 & t.flags
            ? (ai || 1 === r
                ? (e = !0)
                : cc || 0 !== (536870912 & ac)
                ? (e = !1)
                : ((sc = e = !0),
                  (2 === r || 9 === r || 3 === r || 6 === r) &&
                    null !== (r = il.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              tu(t, e))
            : eu(t);
        }
        function eu(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void tu(t, sc);
            e = t.return;
            var n = rs(t.alternate, t, dc);
            if (null !== n) return void (ic = n);
            if (null !== (t = t.sibling)) return void (ic = t);
            ic = t = e;
          } while (null !== t);
          0 === fc && (fc = 5);
        }
        function tu(e, t) {
          do {
            var n = is(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (ic = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (ic = e);
            ic = e = n;
          } while (null !== e);
          (fc = 6), (ic = null);
        }
        function nu(e, t, n, r, i, a, l, s, c) {
          e.cancelPendingCommit = null;
          do {
            lu();
          } while (0 !== Ec);
          if (0 !== (6 & nc)) throw Error(o(327));
          if (null !== t) {
            if (t === e.current) throw Error(o(177));
            if (
              ((a = t.lanes | t.childLanes),
              (function (e, t, n, r, i, a) {
                var o = e.pendingLanes;
                (e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0);
                var l = e.entanglements,
                  s = e.expirationTimes,
                  c = e.hiddenUpdates;
                for (n = o & ~n; 0 < n; ) {
                  var u = 31 - pe(n),
                    d = 1 << u;
                  (l[u] = 0), (s[u] = -1);
                  var f = c[u];
                  if (null !== f)
                    for (c[u] = null, u = 0; u < f.length; u++) {
                      var p = f[u];
                      null !== p && (p.lane &= -536870913);
                    }
                  n &= ~d;
                }
                0 !== r && _e(e, r, 0),
                  0 !== a &&
                    0 === i &&
                    0 !== e.tag &&
                    (e.suspendedLanes |= a & ~(o & ~t));
              })(e, n, (a |= Tr), l, s, c),
              e === rc && ((ic = rc = null), (ac = 0)),
              (Tc = t),
              (_c = e),
              (jc = n),
              (Oc = a),
              (zc = i),
              (Rc = r),
              0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  Q(ae, function () {
                    return su(), null;
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = 0 !== (13878 & t.flags)),
              0 !== (13878 & t.subtreeFlags) || r)
            ) {
              (r = M.T),
                (M.T = null),
                (i = L.p),
                (L.p = 2),
                (l = nc),
                (nc |= 4);
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (td = nf), tr((e = er(e))))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (n =
                            ((n = e.ownerDocument) && n.defaultView) || window)
                            .getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var i = r.anchorOffset,
                            a = r.focusNode;
                          r = r.focusOffset;
                          try {
                            n.nodeType, a.nodeType;
                          } catch (g) {
                            n = null;
                            break e;
                          }
                          var l = 0,
                            s = -1,
                            c = -1,
                            u = 0,
                            d = 0,
                            f = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var h;
                              f !== n ||
                                (0 !== i && 3 !== f.nodeType) ||
                                (s = l + i),
                                f !== a ||
                                  (0 !== r && 3 !== f.nodeType) ||
                                  (c = l + r),
                                3 === f.nodeType && (l += f.nodeValue.length),
                                null !== (h = f.firstChild);

                            )
                              (p = f), (f = h);
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (p === n && ++u === i && (s = l),
                                p === a && ++d === r && (c = l),
                                null !== (h = f.nextSibling))
                              )
                                break;
                              p = (f = p).parentNode;
                            }
                            f = h;
                          }
                          n =
                            -1 === s || -1 === c ? null : { start: s, end: c };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (
                    nd = { focusedElem: e, selectionRange: n }, nf = !1, ks = t;
                    null !== ks;

                  )
                    if (
                      ((e = (t = ks).child),
                      0 !== (1024 & t.subtreeFlags) && null !== e)
                    )
                      (e.return = t), (ks = e);
                    else
                      for (; null !== ks; ) {
                        switch (
                          ((a = (t = ks).alternate), (e = t.flags), t.tag)
                        ) {
                          case 0:
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (0 !== (1024 & e) && null !== a) {
                              (e = void 0),
                                (n = t),
                                (i = a.memoizedProps),
                                (a = a.memoizedState),
                                (r = n.stateNode);
                              try {
                                var m = gl(n.type, i, (n.elementType, n.type));
                                (e = r.getSnapshotBeforeUpdate(m, a)),
                                  (r.__reactInternalSnapshotBeforeUpdate = e);
                              } catch (y) {
                                uu(n, n.return, y);
                              }
                            }
                            break;
                          case 3:
                            if (0 !== (1024 & e))
                              if (
                                9 ===
                                (n = (e = t.stateNode.containerInfo).nodeType)
                              )
                                md(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    md(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (0 !== (1024 & e)) throw Error(o(163));
                        }
                        if (null !== (e = t.sibling)) {
                          (e.return = t.return), (ks = e);
                          break;
                        }
                        ks = t.return;
                      }
                })(e, t);
              } finally {
                (nc = l), (L.p = i), (M.T = r);
              }
            }
            (Ec = 1), ru(), iu(), au();
          }
        }
        function ru() {
          if (1 === Ec) {
            Ec = 0;
            var e = _c,
              t = Tc,
              n = 0 !== (13878 & t.flags);
            if (0 !== (13878 & t.subtreeFlags) || n) {
              (n = M.T), (M.T = null);
              var r = L.p;
              L.p = 2;
              var i = nc;
              nc |= 4;
              try {
                Ms(t, e);
                var a = nd,
                  o = er(e.containerInfo),
                  l = a.focusedElem,
                  s = a.selectionRange;
                if (
                  o !== l &&
                  l &&
                  l.ownerDocument &&
                  Zn(l.ownerDocument.documentElement, l)
                ) {
                  if (null !== s && tr(l)) {
                    var c = s.start,
                      u = s.end;
                    if ((void 0 === u && (u = c), "selectionStart" in l))
                      (l.selectionStart = c),
                        (l.selectionEnd = Math.min(u, l.value.length));
                    else {
                      var d = l.ownerDocument || document,
                        f = (d && d.defaultView) || window;
                      if (f.getSelection) {
                        var p = f.getSelection(),
                          h = l.textContent.length,
                          m = Math.min(s.start, h),
                          g = void 0 === s.end ? m : Math.min(s.end, h);
                        !p.extend && m > g && ((o = g), (g = m), (m = o));
                        var y = Jn(l, m),
                          b = Jn(l, g);
                        if (
                          y &&
                          b &&
                          (1 !== p.rangeCount ||
                            p.anchorNode !== y.node ||
                            p.anchorOffset !== y.offset ||
                            p.focusNode !== b.node ||
                            p.focusOffset !== b.offset)
                        ) {
                          var v = d.createRange();
                          v.setStart(y.node, y.offset),
                            p.removeAllRanges(),
                            m > g
                              ? (p.addRange(v), p.extend(b.node, b.offset))
                              : (v.setEnd(b.node, b.offset), p.addRange(v));
                        }
                      }
                    }
                  }
                  for (d = [], p = l; (p = p.parentNode); )
                    1 === p.nodeType &&
                      d.push({
                        element: p,
                        left: p.scrollLeft,
                        top: p.scrollTop,
                      });
                  for (
                    "function" === typeof l.focus && l.focus(), l = 0;
                    l < d.length;
                    l++
                  ) {
                    var w = d[l];
                    (w.element.scrollLeft = w.left),
                      (w.element.scrollTop = w.top);
                  }
                }
                (nf = !!td), (nd = td = null);
              } finally {
                (nc = i), (L.p = r), (M.T = n);
              }
            }
            (e.current = t), (Ec = 2);
          }
        }
        function iu() {
          if (2 === Ec) {
            Ec = 0;
            var e = _c,
              t = Tc,
              n = 0 !== (8772 & t.flags);
            if (0 !== (8772 & t.subtreeFlags) || n) {
              (n = M.T), (M.T = null);
              var r = L.p;
              L.p = 2;
              var i = nc;
              nc |= 4;
              try {
                Cs(e, t.alternate, t);
              } finally {
                (nc = i), (L.p = r), (M.T = n);
              }
            }
            Ec = 3;
          }
        }
        function au() {
          if (4 === Ec || 3 === Ec) {
            (Ec = 0), ee();
            var e = _c,
              t = Tc,
              n = jc,
              r = Rc;
            0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
              ? (Ec = 5)
              : ((Ec = 0), (Tc = _c = null), ou(e, e.pendingLanes));
            var i = e.pendingLanes;
            if (
              (0 === i && (Cc = null),
              Oe(n),
              (t = t.stateNode),
              de && "function" === typeof de.onCommitFiberRoot)
            )
              try {
                de.onCommitFiberRoot(
                  ue,
                  t,
                  void 0,
                  128 === (128 & t.current.flags)
                );
              } catch (s) {}
            if (null !== r) {
              (t = M.T), (i = L.p), (L.p = 2), (M.T = null);
              try {
                for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                  var l = r[o];
                  a(l.value, { componentStack: l.stack });
                }
              } finally {
                (M.T = t), (L.p = i);
              }
            }
            0 !== (3 & jc) && lu(),
              Su(e),
              (i = e.pendingLanes),
              0 !== (4194090 & n) && 0 !== (42 & i)
                ? e === Ac
                  ? Pc++
                  : ((Pc = 0), (Ac = e))
                : (Pc = 0),
              ku(0, !1);
          }
        }
        function ou(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Mi(t));
        }
        function lu(e) {
          return ru(), iu(), au(), su();
        }
        function su() {
          if (5 !== Ec) return !1;
          var e = _c,
            t = Oc;
          Oc = 0;
          var n = Oe(jc),
            r = M.T,
            i = L.p;
          try {
            (L.p = 32 > n ? 32 : n), (M.T = null), (n = zc), (zc = null);
            var a = _c,
              l = jc;
            if (((Ec = 0), (Tc = _c = null), (jc = 0), 0 !== (6 & nc)))
              throw Error(o(331));
            var s = nc;
            if (
              ((nc |= 4),
              Qs(a.current),
              Us(a, a.current, l, n),
              (nc = s),
              ku(0, !1),
              de && "function" === typeof de.onPostCommitFiberRoot)
            )
              try {
                de.onPostCommitFiberRoot(ue, a);
              } catch (c) {}
            return !0;
          } finally {
            (L.p = i), (M.T = r), ou(e, t);
          }
        }
        function cu(e, t, n) {
          (t = Cr(n, t)),
            null !== (e = aa(e, (t = kl(e.stateNode, t, 2)), 2)) &&
              (Ee(e, 2), Su(e));
        }
        function uu(e, t, n) {
          if (3 === e.tag) cu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                cu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Cc || !Cc.has(r)))
                ) {
                  (e = Cr(n, e)),
                    null !== (r = aa(t, (n = Cl(2)), 2)) &&
                      (El(n, r, t, e), Ee(r, 2), Su(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function du(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new tc();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) ||
            ((uc = !0), i.add(n), (e = fu.bind(null, e, t, n)), t.then(e, e));
        }
        function fu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            rc === e &&
              (ac & n) === n &&
              (4 === fc ||
              (3 === fc && (62914560 & ac) === ac && 300 > te() - xc)
                ? 0 === (2 & nc) && Uc(e, 0)
                : (mc |= n),
              yc === ac && (yc = 0)),
            Su(e);
        }
        function pu(e, t) {
          0 === t && (t = ke()), null !== (e = Rr(e, t)) && (Ee(e, t), Su(e));
        }
        function hu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), pu(e, n);
        }
        function mu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), pu(e, n);
        }
        var gu = null,
          yu = null,
          bu = !1,
          vu = !1,
          wu = !1,
          xu = 0;
        function Su(e) {
          e !== yu &&
            null === e.next &&
            (null === yu ? (gu = yu = e) : (yu = yu.next = e)),
            (vu = !0),
            bu ||
              ((bu = !0),
              dd(function () {
                0 !== (6 & nc) ? Q(re, Cu) : Eu();
              }));
        }
        function ku(e, t) {
          if (!wu && vu) {
            wu = !0;
            do {
              for (var n = !1, r = gu; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var i = r.pendingLanes;
                    if (0 === i) var a = 0;
                    else {
                      var o = r.suspendedLanes,
                        l = r.pingedLanes;
                      (a = (1 << (31 - pe(42 | e) + 1)) - 1),
                        (a =
                          201326741 & (a &= i & ~(o & ~l))
                            ? (201326741 & a) | 1
                            : a
                            ? 2 | a
                            : 0);
                    }
                    0 !== a && ((n = !0), ju(r, a));
                  } else
                    (a = ac),
                      0 ===
                        (3 &
                          (a = ve(
                            r,
                            r === rc ? a : 0,
                            null !== r.cancelPendingCommit ||
                              -1 !== r.timeoutHandle
                          ))) ||
                        we(r, a) ||
                        ((n = !0), ju(r, a));
                r = r.next;
              }
            } while (n);
            wu = !1;
          }
        }
        function Cu() {
          Eu();
        }
        function Eu() {
          vu = bu = !1;
          var e = 0;
          0 !== xu &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== ld && ((ld = e), !0);
              return (ld = null), !1;
            })() && (e = xu),
            (xu = 0));
          for (var t = te(), n = null, r = gu; null !== r; ) {
            var i = r.next,
              a = _u(r, t);
            0 === a
              ? ((r.next = null),
                null === n ? (gu = i) : (n.next = i),
                null === i && (yu = n))
              : ((n = r), (0 !== e || 0 !== (3 & a)) && (vu = !0)),
              (r = i);
          }
          ku(e, !1);
        }
        function _u(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              i = e.expirationTimes,
              a = -62914561 & e.pendingLanes;
            0 < a;

          ) {
            var o = 31 - pe(a),
              l = 1 << o,
              s = i[o];
            -1 === s
              ? (0 !== (l & n) && 0 === (l & r)) || (i[o] = xe(l, t))
              : s <= t && (e.expiredLanes |= l),
              (a &= ~l);
          }
          if (
            ((n = ac),
            (n = ve(
              e,
              e === (t = rc) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle
            )),
            (r = e.callbackNode),
            0 === n ||
              (e === t && (2 === oc || 9 === oc)) ||
              null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && J(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || we(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && J(r), Oe(n))) {
              case 2:
              case 8:
                n = ie;
                break;
              case 32:
              default:
                n = ae;
                break;
              case 268435456:
                n = le;
            }
            return (
              (r = Tu.bind(null, e)),
              (n = Q(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && J(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function Tu(e, t) {
          if (0 !== Ec && 5 !== Ec)
            return (e.callbackNode = null), (e.callbackPriority = 0), null;
          var n = e.callbackNode;
          if (lu() && e.callbackNode !== n) return null;
          var r = ac;
          return 0 ===
            (r = ve(
              e,
              e === rc ? r : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle
            ))
            ? null
            : (Dc(e, r, t),
              _u(e, te()),
              null != e.callbackNode && e.callbackNode === n
                ? Tu.bind(null, e)
                : null);
        }
        function ju(e, t) {
          if (lu()) return null;
          Dc(e, t, !0);
        }
        function Ou() {
          return 0 === xu && (xu = Se()), xu;
        }
        function zu(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : Ot("" + e);
        }
        function Ru(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Pu = 0; Pu < xr.length; Pu++) {
          var Au = xr[Pu];
          Sr(Au.toLowerCase(), "on" + (Au[0].toUpperCase() + Au.slice(1)));
        }
        Sr(pr, "onAnimationEnd"),
          Sr(hr, "onAnimationIteration"),
          Sr(mr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(gr, "onTransitionRun"),
          Sr(yr, "onTransitionStart"),
          Sr(br, "onTransitionCancel"),
          Sr(vr, "onTransitionEnd"),
          Ye("onMouseEnter", ["mouseout", "mouseover"]),
          Ye("onMouseLeave", ["mouseout", "mouseover"]),
          Ye("onPointerEnter", ["pointerout", "pointerover"]),
          Ye("onPointerLeave", ["pointerout", "pointerover"]),
          Ge(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          Ge(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          Ge("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          Ge(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          Ge(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          Ge(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Mu =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Lu = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Mu)
          );
        function Nu(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), s !== a && i.isPropagationStopped()))
                    break e;
                  (a = l), (i.currentTarget = c);
                  try {
                    a(i);
                  } catch (u) {
                    yl(u);
                  }
                  (i.currentTarget = null), (a = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    s !== a && i.isPropagationStopped())
                  )
                    break e;
                  (a = l), (i.currentTarget = c);
                  try {
                    a(i);
                  } catch (u) {
                    yl(u);
                  }
                  (i.currentTarget = null), (a = s);
                }
            }
          }
        }
        function Du(e, t) {
          var n = t[Le];
          void 0 === n && (n = t[Le] = new Set());
          var r = e + "__bubble";
          n.has(r) || ($u(t, e, 2, !1), n.add(r));
        }
        function Iu(e, t, n) {
          var r = 0;
          t && (r |= 4), $u(n, e, r, t);
        }
        var Bu = "_reactListening" + Math.random().toString(36).slice(2);
        function Fu(e) {
          if (!e[Bu]) {
            (e[Bu] = !0),
              qe.forEach(function (t) {
                "selectionchange" !== t &&
                  (Lu.has(t) || Iu(t, !1, e), Iu(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Bu] || ((t[Bu] = !0), Iu("selectionchange", !1, t));
          }
        }
        function $u(e, t, n, r) {
          switch (uf(t)) {
            case 2:
              var i = rf;
              break;
            case 8:
              i = af;
              break;
            default:
              i = of;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Bt ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Hu(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var c = o.tag;
                    if ((3 === c || 4 === c) && o.stateNode.containerInfo === i)
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = $e(l))) return;
                  if (5 === (c = o.tag) || 6 === c || 26 === c || 27 === c) {
                    r = a = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Nt(function () {
            var r = a,
              i = Rt(n),
              o = [];
            e: {
              var l = wr.get(e);
              if (void 0 !== l) {
                var c = Zt,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === Wt(n)) break e;
                  case "keydown":
                  case "keyup":
                    c = mn;
                    break;
                  case "focusin":
                    (u = "focus"), (c = on);
                    break;
                  case "focusout":
                    (u = "blur"), (c = on);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    c = on;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    c = rn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    c = an;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    c = yn;
                    break;
                  case pr:
                  case hr:
                  case mr:
                    c = ln;
                    break;
                  case vr:
                    c = bn;
                    break;
                  case "scroll":
                  case "scrollend":
                    c = tn;
                    break;
                  case "wheel":
                    c = vn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    c = sn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    c = gn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    c = wn;
                }
                var d = 0 !== (4 & t),
                  f = !d && ("scroll" === e || "scrollend" === e),
                  p = d ? (null !== l ? l + "Capture" : null) : l;
                d = [];
                for (var h, m = r; null !== m; ) {
                  var g = m;
                  if (
                    ((h = g.stateNode),
                    (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                      null === h ||
                      null === p ||
                      (null != (g = Dt(m, p)) && d.push(Uu(m, g, h))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < d.length &&
                  ((l = new c(l, u, null, n, i)),
                  o.push({ event: l, listeners: d }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((c = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === zt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!$e(u) && !u[Me])) &&
                  (c || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  c
                    ? ((c = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? $e(u)
                          : null) &&
                        ((f = s(u)),
                        (d = u.tag),
                        u !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (u = null))
                    : ((c = null), (u = r)),
                  c !== u))
              ) {
                if (
                  ((d = rn),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((d = gn),
                    (g = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == c ? l : Ue(c)),
                  (h = null == u ? l : Ue(u)),
                  ((l = new d(g, m + "leave", c, n, i)).target = f),
                  (l.relatedTarget = h),
                  (g = null),
                  $e(i) === r &&
                    (((d = new d(p, m + "enter", u, n, i)).target = h),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  c && u)
                )
                  e: {
                    for (p = u, m = 0, h = d = c; h; h = Wu(h)) m++;
                    for (h = 0, g = p; g; g = Wu(g)) h++;
                    for (; 0 < m - h; ) (d = Wu(d)), m--;
                    for (; 0 < h - m; ) (p = Wu(p)), h--;
                    for (; m--; ) {
                      if (d === p || (null !== p && d === p.alternate)) break e;
                      (d = Wu(d)), (p = Wu(p));
                    }
                    d = null;
                  }
                else d = null;
                null !== c && qu(o, l, c, d, !1),
                  null !== u && null !== f && qu(o, f, u, d, !0);
              }
              if (
                "select" ===
                  (c =
                    (l = r ? Ue(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === c && "file" === l.type)
              )
                var y = In;
              else if (Pn(l))
                if (Bn) y = Gn;
                else {
                  y = qn;
                  var b = Wn;
                }
              else
                !(c = l.nodeName) ||
                "input" !== c.toLowerCase() ||
                ("checkbox" !== l.type && "radio" !== l.type)
                  ? r && _t(r.elementType) && (y = In)
                  : (y = Xn);
              switch (
                (y && (y = y(e, r))
                  ? An(o, y, n, i)
                  : (b && b(e, l, r),
                    "focusout" === e &&
                      r &&
                      "number" === l.type &&
                      null != r.memoizedProps.value &&
                      bt(l, "number", l.value)),
                (b = r ? Ue(r) : window),
                e)
              ) {
                case "focusin":
                  (Pn(b) || "true" === b.contentEditable) &&
                    ((rr = b), (ir = r), (ar = null));
                  break;
                case "focusout":
                  ar = ir = rr = null;
                  break;
                case "mousedown":
                  or = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (or = !1), lr(o, n, i);
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  lr(o, n, i);
              }
              var v;
              if (Sn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var w = "onCompositionStart";
                      break e;
                    case "compositionend":
                      w = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      w = "onCompositionUpdate";
                      break e;
                  }
                  w = void 0;
                }
              else
                zn
                  ? jn(e, n) && (w = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (w = "onCompositionStart");
              w &&
                (En &&
                  "ko" !== n.locale &&
                  (zn || "onCompositionStart" !== w
                    ? "onCompositionEnd" === w && zn && (v = Vt())
                    : ((Ht = "value" in ($t = i) ? $t.value : $t.textContent),
                      (zn = !0))),
                0 < (b = Vu(r, w)).length &&
                  ((w = new cn(w, e, null, n, i)),
                  o.push({ event: w, listeners: b }),
                  v ? (w.data = v) : null !== (v = On(n)) && (w.data = v))),
                (v = Cn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return On(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Tn = !0), _n);
                        case "textInput":
                          return (e = t.data) === _n && Tn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (zn)
                        return "compositionend" === e || (!Sn && jn(e, t))
                          ? ((e = Vt()), (Ut = Ht = $t = null), (zn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return En && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (w = Vu(r, "onBeforeInput")).length &&
                  ((b = new cn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: b, listeners: w }),
                  (b.data = v)),
                (function (e, t, n, r, i) {
                  if ("submit" === t && n && n.stateNode === i) {
                    var a = zu((i[Ae] || null).action),
                      o = r.submitter;
                    o &&
                      null !==
                        (t = (t = o[Ae] || null)
                          ? zu(t.formAction)
                          : o.getAttribute("formAction")) &&
                      ((a = t), (o = null));
                    var l = new Zt("action", "action", null, r, i);
                    e.push({
                      event: l,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== xu) {
                                var e = o ? Ru(i, o) : new FormData(i);
                                Ro(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: a,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof a &&
                                (l.preventDefault(),
                                (e = o ? Ru(i, o) : new FormData(i)),
                                Ro(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: a,
                                  },
                                  a,
                                  e
                                ));
                          },
                          currentTarget: i,
                        },
                      ],
                    });
                  }
                })(o, e, r, n, i);
            }
            Nu(o, t);
          });
        }
        function Uu(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vu(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            if (
              ((5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
                null === a ||
                (null != (i = Dt(e, n)) && r.unshift(Uu(e, i, a)),
                null != (i = Dt(e, t)) && r.push(Uu(e, i, a))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function Wu(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function qu(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              c = l.stateNode;
            if (((l = l.tag), null !== s && s === r)) break;
            (5 !== l && 26 !== l && 27 !== l) ||
              null === c ||
              ((s = c),
              i
                ? null != (c = Dt(n, a)) && o.unshift(Uu(n, c, s))
                : i || (null != (c = Dt(n, a)) && o.push(Uu(n, c, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Xu = /\r\n?/g,
          Gu = /\u0000|\uFFFD/g;
        function Yu(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xu, "\n")
            .replace(Gu, "");
        }
        function Ku(e, t) {
          return (t = Yu(t)), Yu(e) === t;
        }
        function Qu() {}
        function Ju(e, t, n, r, i, a) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  St(e, "" + r);
              break;
            case "className":
              nt(e, "class", r);
              break;
            case "tabIndex":
              nt(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              nt(e, n, r);
              break;
            case "style":
              Et(e, r, a);
              break;
            case "data":
              if ("object" !== t) {
                nt(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Ot("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof a &&
                  ("formAction" === n
                    ? ("input" !== t && Ju(e, t, "name", i.name, i, null),
                      Ju(e, t, "formEncType", i.formEncType, i, null),
                      Ju(e, t, "formMethod", i.formMethod, i, null),
                      Ju(e, t, "formTarget", i.formTarget, i, null))
                    : (Ju(e, t, "encType", i.encType, i, null),
                      Ju(e, t, "method", i.method, i, null),
                      Ju(e, t, "target", i.target, i, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Ot("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = Qu);
              break;
            case "onScroll":
              null != r && Du("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Du("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != i.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = Ot("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              Du("beforetoggle", e), Du("toggle", e), tt(e, "popover", r);
              break;
            case "xlinkActuate":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              rt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              rt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              tt(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                tt(e, (n = Tt.get(n) || n), r);
          }
        }
        function Zu(e, t, n, r, i, a) {
          switch (n) {
            case "style":
              Et(e, r, a);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != i.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  St(e, "" + r);
              break;
            case "onScroll":
              null != r && Du("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Du("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Qu);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              Xe.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((i = n.endsWith("Capture")),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                "function" ===
                  typeof (a = null != (a = e[Ae] || null) ? a[n] : null) &&
                  e.removeEventListener(t, a, i),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : tt(e, n, r)
                  : ("function" !== typeof a &&
                      null !== a &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, i)));
          }
        }
        function ed(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              Du("error", e), Du("load", e);
              var r,
                i = !1,
                a = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var l = n[r];
                  if (null != l)
                    switch (r) {
                      case "src":
                        i = !0;
                        break;
                      case "srcSet":
                        a = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                      default:
                        Ju(e, t, r, l, n, null);
                    }
                }
              return (
                a && Ju(e, t, "srcSet", n.srcSet, n, null),
                void (i && Ju(e, t, "src", n.src, n, null))
              );
            case "input":
              Du("invalid", e);
              var s = (r = l = a = null),
                c = null,
                u = null;
              for (i in n)
                if (n.hasOwnProperty(i)) {
                  var d = n[i];
                  if (null != d)
                    switch (i) {
                      case "name":
                        a = d;
                        break;
                      case "type":
                        l = d;
                        break;
                      case "checked":
                        c = d;
                        break;
                      case "defaultChecked":
                        u = d;
                        break;
                      case "value":
                        r = d;
                        break;
                      case "defaultValue":
                        s = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(o(137, t));
                        break;
                      default:
                        Ju(e, t, i, d, n, null);
                    }
                }
              return yt(e, r, s, c, u, l, a, !1), void dt(e);
            case "select":
              for (a in (Du("invalid", e), (i = l = r = null), n))
                if (n.hasOwnProperty(a) && null != (s = n[a]))
                  switch (a) {
                    case "value":
                      r = s;
                      break;
                    case "defaultValue":
                      l = s;
                      break;
                    case "multiple":
                      i = s;
                    default:
                      Ju(e, t, a, s, n, null);
                  }
              return (
                (t = r),
                (n = l),
                (e.multiple = !!i),
                void (null != t
                  ? vt(e, !!i, t, !1)
                  : null != n && vt(e, !!i, n, !0))
              );
            case "textarea":
              for (l in (Du("invalid", e), (r = a = i = null), n))
                if (n.hasOwnProperty(l) && null != (s = n[l]))
                  switch (l) {
                    case "value":
                      i = s;
                      break;
                    case "defaultValue":
                      a = s;
                      break;
                    case "children":
                      r = s;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != s) throw Error(o(91));
                      break;
                    default:
                      Ju(e, t, l, s, n, null);
                  }
              return xt(e, i, a, r), void dt(e);
            case "option":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (i = n[c]))
                  if ("selected" === c)
                    e.selected =
                      i && "function" !== typeof i && "symbol" !== typeof i;
                  else Ju(e, t, c, i, n, null);
              return;
            case "dialog":
              Du("beforetoggle", e),
                Du("toggle", e),
                Du("cancel", e),
                Du("close", e);
              break;
            case "iframe":
            case "object":
              Du("load", e);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Mu.length; i++) Du(Mu[i], e);
              break;
            case "image":
              Du("error", e), Du("load", e);
              break;
            case "details":
              Du("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Du("error", e), Du("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (u in n)
                if (n.hasOwnProperty(u) && null != (i = n[u]))
                  switch (u) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, t));
                    default:
                      Ju(e, t, u, i, n, null);
                  }
              return;
            default:
              if (_t(t)) {
                for (d in n)
                  n.hasOwnProperty(d) &&
                    void 0 !== (i = n[d]) &&
                    Zu(e, t, d, i, n, void 0);
                return;
              }
          }
          for (s in n)
            n.hasOwnProperty(s) &&
              null != (i = n[s]) &&
              Ju(e, t, s, i, n, null);
        }
        var td = null,
          nd = null;
        function rd(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function id(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function ad(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function od(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ld = null;
        var sd = "function" === typeof setTimeout ? setTimeout : void 0,
          cd = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ud = "function" === typeof Promise ? Promise : void 0,
          dd =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ud
              ? function (e) {
                  return ud.resolve(null).then(e).catch(fd);
                }
              : sd;
        function fd(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function pd(e) {
          return "head" === e;
        }
        function hd(e, t) {
          var n = t,
            r = 0,
            i = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 < r && 8 > r) {
                  n = r;
                  var o = e.ownerDocument;
                  if (
                    (1 & n && xd(o.documentElement), 2 & n && xd(o.body), 4 & n)
                  )
                    for (xd((n = o.head)), o = n.firstChild; o; ) {
                      var l = o.nextSibling,
                        s = o.nodeName;
                      o[Be] ||
                        "SCRIPT" === s ||
                        "STYLE" === s ||
                        ("LINK" === s &&
                          "stylesheet" === o.rel.toLowerCase()) ||
                        n.removeChild(o),
                        (o = l);
                    }
                }
                if (0 === i) return e.removeChild(a), void jf(t);
                i--;
              } else
                "$" === n || "$?" === n || "$!" === n
                  ? i++
                  : (r = n.charCodeAt(0) - 48);
            else r = 0;
            n = a;
          } while (n);
          jf(t);
        }
        function md(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                md(n), Fe(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function gd(e) {
          return (
            "$!" === e.data ||
            ("$?" === e.data && "complete" === e.ownerDocument.readyState)
          );
        }
        function yd(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        var bd = null;
        function vd(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function wd(e, t, n) {
          switch (((t = rd(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(o(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(o(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(o(454));
              return e;
            default:
              throw Error(o(451));
          }
        }
        function xd(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Fe(e);
        }
        var Sd = new Map(),
          kd = new Set();
        function Cd(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
            ? e
            : e.ownerDocument;
        }
        var Ed = L.d;
        L.d = {
          f: function () {
            var e = Ed.f(),
              t = $c();
            return e || t;
          },
          r: function (e) {
            var t = He(e);
            null !== t && 5 === t.tag && "form" === t.type ? Ao(t) : Ed.r(e);
          },
          D: function (e) {
            Ed.D(e), Td("dns-prefetch", e, null);
          },
          C: function (e, t) {
            Ed.C(e, t), Td("preconnect", e, t);
          },
          L: function (e, t, n) {
            Ed.L(e, t, n);
            var r = _d;
            if (r && e && t) {
              var i = 'link[rel="preload"][as="' + mt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((i += '[imagesrcset="' + mt(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (i += '[imagesizes="' + mt(n.imageSizes) + '"]'))
                : (i += '[href="' + mt(e) + '"]');
              var a = i;
              switch (t) {
                case "style":
                  a = Od(e);
                  break;
                case "script":
                  a = Pd(e);
              }
              Sd.has(a) ||
                ((e = f(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                Sd.set(a, e),
                null !== r.querySelector(i) ||
                  ("style" === t && r.querySelector(zd(a))) ||
                  ("script" === t && r.querySelector(Ad(a))) ||
                  (ed((t = r.createElement("link")), "link", e),
                  We(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Ed.m(e, t);
            var n = _d;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                i =
                  'link[rel="modulepreload"][as="' +
                  mt(r) +
                  '"][href="' +
                  mt(e) +
                  '"]',
                a = i;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  a = Pd(e);
              }
              if (
                !Sd.has(a) &&
                ((e = f({ rel: "modulepreload", href: e }, t)),
                Sd.set(a, e),
                null === n.querySelector(i))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Ad(a))) return;
                }
                ed((r = n.createElement("link")), "link", e),
                  We(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            Ed.X(e, t);
            var n = _d;
            if (n && e) {
              var r = Ve(n).hoistableScripts,
                i = Pd(e),
                a = r.get(i);
              a ||
                ((a = n.querySelector(Ad(i))) ||
                  ((e = f({ src: e, async: !0 }, t)),
                  (t = Sd.get(i)) && Dd(e, t),
                  We((a = n.createElement("script"))),
                  ed(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(i, a));
            }
          },
          S: function (e, t, n) {
            Ed.S(e, t, n);
            var r = _d;
            if (r && e) {
              var i = Ve(r).hoistableStyles,
                a = Od(e);
              t = t || "default";
              var o = i.get(a);
              if (!o) {
                var l = { loading: 0, preload: null };
                if ((o = r.querySelector(zd(a)))) l.loading = 5;
                else {
                  (e = f(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n
                  )),
                    (n = Sd.get(a)) && Nd(e, n);
                  var s = (o = r.createElement("link"));
                  We(s),
                    ed(s, "link", e),
                    (s._p = new Promise(function (e, t) {
                      (s.onload = e), (s.onerror = t);
                    })),
                    s.addEventListener("load", function () {
                      l.loading |= 1;
                    }),
                    s.addEventListener("error", function () {
                      l.loading |= 2;
                    }),
                    (l.loading |= 4),
                    Ld(o, t, r);
                }
                (o = { type: "stylesheet", instance: o, count: 1, state: l }),
                  i.set(a, o);
              }
            }
          },
          M: function (e, t) {
            Ed.M(e, t);
            var n = _d;
            if (n && e) {
              var r = Ve(n).hoistableScripts,
                i = Pd(e),
                a = r.get(i);
              a ||
                ((a = n.querySelector(Ad(i))) ||
                  ((e = f({ src: e, async: !0, type: "module" }, t)),
                  (t = Sd.get(i)) && Dd(e, t),
                  We((a = n.createElement("script"))),
                  ed(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(i, a));
            }
          },
        };
        var _d = "undefined" === typeof document ? null : document;
        function Td(e, t, n) {
          var r = _d;
          if (r && "string" === typeof t && t) {
            var i = mt(t);
            (i = 'link[rel="' + e + '"][href="' + i + '"]'),
              "string" === typeof n && (i += '[crossorigin="' + n + '"]'),
              kd.has(i) ||
                (kd.add(i),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(i) &&
                  (ed((t = r.createElement("link")), "link", e),
                  We(t),
                  r.head.appendChild(t)));
          }
        }
        function jd(e, t, n, r) {
          var i = (i = V.current) ? Cd(i) : null;
          if (!i) throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = Od(n.href)),
                  (r = (n = Ve(i).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = Od(n.href);
                var a = Ve(i).hoistableStyles,
                  l = a.get(e);
                if (
                  (l ||
                    ((i = i.ownerDocument || i),
                    (l = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    a.set(e, l),
                    (a = i.querySelector(zd(e))) &&
                      !a._p &&
                      ((l.instance = a), (l.state.loading = 5)),
                    Sd.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      Sd.set(e, n),
                      a ||
                        (function (e, t, n, r) {
                          e.querySelector(
                            'link[rel="preload"][as="style"][' + t + "]"
                          )
                            ? (r.loading = 1)
                            : ((t = e.createElement("link")),
                              (r.preload = t),
                              t.addEventListener("load", function () {
                                return (r.loading |= 1);
                              }),
                              t.addEventListener("error", function () {
                                return (r.loading |= 2);
                              }),
                              ed(t, "link", n),
                              We(t),
                              e.head.appendChild(t));
                        })(i, e, n, l.state))),
                  t && null === r)
                )
                  throw Error(o(528, ""));
                return l;
              }
              if (t && null !== r) throw Error(o(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = Pd(n)),
                    (r = (n = Ve(i).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(o(444, e));
          }
        }
        function Od(e) {
          return 'href="' + mt(e) + '"';
        }
        function zd(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function Rd(e) {
          return f({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function Pd(e) {
          return '[src="' + mt(e) + '"]';
        }
        function Ad(e) {
          return "script[async]" + e;
        }
        function Md(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + mt(n.href) + '"]'
                );
                if (r) return (t.instance = r), We(r), r;
                var i = f({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  We((r = (e.ownerDocument || e).createElement("style"))),
                  ed(r, "style", i),
                  Ld(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                i = Od(n.href);
                var a = e.querySelector(zd(i));
                if (a)
                  return (t.state.loading |= 4), (t.instance = a), We(a), a;
                (r = Rd(n)),
                  (i = Sd.get(i)) && Nd(r, i),
                  We((a = (e.ownerDocument || e).createElement("link")));
                var l = a;
                return (
                  (l._p = new Promise(function (e, t) {
                    (l.onload = e), (l.onerror = t);
                  })),
                  ed(a, "link", r),
                  (t.state.loading |= 4),
                  Ld(a, n.precedence, e),
                  (t.instance = a)
                );
              case "script":
                return (
                  (a = Pd(n.src)),
                  (i = e.querySelector(Ad(a)))
                    ? ((t.instance = i), We(i), i)
                    : ((r = n),
                      (i = Sd.get(a)) && Dd((r = f({}, n)), i),
                      We(
                        (i = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      ed(i, "link", r),
                      e.head.appendChild(i),
                      (t.instance = i))
                );
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              Ld(r, n.precedence, e));
          return t.instance;
        }
        function Ld(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              i = r.length ? r[r.length - 1] : null,
              a = i,
              o = 0;
            o < r.length;
            o++
          ) {
            var l = r[o];
            if (l.dataset.precedence === t) a = l;
            else if (a !== i) break;
          }
          a
            ? a.parentNode.insertBefore(e, a.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Nd(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function Dd(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Id = null;
        function Bd(e, t, n) {
          if (null === Id) {
            var r = new Map(),
              i = (Id = new Map());
            i.set(n, r);
          } else (r = (i = Id).get(n)) || ((r = new Map()), i.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), i = 0;
            i < n.length;
            i++
          ) {
            var a = n[i];
            if (
              !(
                a[Be] ||
                a[Pe] ||
                ("link" === e && "stylesheet" === a.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== a.namespaceURI
            ) {
              var o = a.getAttribute(t) || "";
              o = e + o;
              var l = r.get(o);
              l ? l.push(a) : r.set(o, [a]);
            }
          }
          return r;
        }
        function Fd(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function $d(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var Hd = null;
        function Ud() {}
        function Vd() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) qd(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var Wd = null;
        function qd(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Wd = new Map()),
              t.forEach(Xd, e),
              (Wd = null),
              Vd.call(e));
        }
        function Xd(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Wd.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), Wd.set(e, n);
              for (
                var i = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  a = 0;
                a < i.length;
                a++
              ) {
                var o = i[a];
                ("LINK" !== o.nodeName &&
                  "not all" === o.getAttribute("media")) ||
                  (n.set(o.dataset.precedence, o), (r = o));
              }
              r && n.set(null, r);
            }
            (o = (i = t.instance).getAttribute("data-precedence")),
              (a = n.get(o) || r) === r && n.set(null, i),
              n.set(o, i),
              this.count++,
              (r = Vd.bind(this)),
              i.addEventListener("load", r),
              i.addEventListener("error", r),
              a
                ? a.parentNode.insertBefore(i, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    i,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Gd = {
          $$typeof: x,
          Provider: null,
          Consumer: null,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
        };
        function Yd(e, t, n, r, i, a, o, l) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Ce(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ce(0)),
            (this.hiddenUpdates = Ce(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = i),
            (this.onCaughtError = a),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = l),
            (this.incompleteTransitions = new Map());
        }
        function Kd(e, t, n, r, i, a, o, l, s, c, u, d) {
          return (
            (e = new Yd(e, t, n, o, l, s, c, d)),
            (t = 1),
            !0 === a && (t |= 24),
            (a = Nr(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (t = Ai()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
            na(a),
            e
          );
        }
        function Qd(e) {
          return e ? (e = Mr) : Mr;
        }
        function Jd(e, t, n, r, i, a) {
          (i = Qd(i)),
            null === r.context ? (r.context = i) : (r.pendingContext = i),
            ((r = ia(t)).payload = { element: n }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = aa(e, r, t)) && (Nc(n, 0, t), oa(n, e, t));
        }
        function Zd(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function ef(e, t) {
          Zd(e, t), (e = e.alternate) && Zd(e, t);
        }
        function tf(e) {
          if (13 === e.tag) {
            var t = Rr(e, 67108864);
            null !== t && Nc(t, 0, 67108864), ef(e, 67108864);
          }
        }
        var nf = !0;
        function rf(e, t, n, r) {
          var i = M.T;
          M.T = null;
          var a = L.p;
          try {
            (L.p = 2), of(e, t, n, r);
          } finally {
            (L.p = a), (M.T = i);
          }
        }
        function af(e, t, n, r) {
          var i = M.T;
          M.T = null;
          var a = L.p;
          try {
            (L.p = 8), of(e, t, n, r);
          } finally {
            (L.p = a), (M.T = i);
          }
        }
        function of(e, t, n, r) {
          if (nf) {
            var i = lf(r);
            if (null === i) Hu(e, t, r, sf, n), vf(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (ff = wf(ff, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (pf = wf(pf, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (hf = wf(hf, e, t, n, r, i)), !0;
                  case "pointerover":
                    var a = i.pointerId;
                    return mf.set(a, wf(mf.get(a) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (a = i.pointerId),
                      gf.set(a, wf(gf.get(a) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((vf(e, r), 4 & t && -1 < bf.indexOf(e))) {
              for (; null !== i; ) {
                var a = He(i);
                if (null !== a)
                  switch (a.tag) {
                    case 3:
                      if (
                        (a = a.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var o = be(a.pendingLanes);
                        if (0 !== o) {
                          var l = a;
                          for (
                            l.pendingLanes |= 2, l.entangledLanes |= 2;
                            o;

                          ) {
                            var s = 1 << (31 - pe(o));
                            (l.entanglements[1] |= s), (o &= ~s);
                          }
                          Su(a),
                            0 === (6 & nc) && ((Sc = te() + 500), ku(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (l = Rr(a, 2)) && Nc(l, 0, 2), $c(), ef(a, 2);
                  }
                if ((null === (a = lf(r)) && Hu(e, t, r, sf, n), a === i))
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Hu(e, t, r, null, n);
          }
        }
        function lf(e) {
          return cf((e = Rt(e)));
        }
        var sf = null;
        function cf(e) {
          if (((sf = null), null !== (e = $e(e)))) {
            var t = s(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = c(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (sf = e), null;
        }
        function uf(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ne()) {
                case re:
                  return 2;
                case ie:
                  return 8;
                case ae:
                case oe:
                  return 32;
                case le:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var df = !1,
          ff = null,
          pf = null,
          hf = null,
          mf = new Map(),
          gf = new Map(),
          yf = [],
          bf =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function vf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              ff = null;
              break;
            case "dragenter":
            case "dragleave":
              pf = null;
              break;
            case "mouseover":
            case "mouseout":
              hf = null;
              break;
            case "pointerover":
            case "pointerout":
              mf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              gf.delete(t.pointerId);
          }
        }
        function wf(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== t && null !== (t = He(t)) && tf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function xf(e) {
          var t = $e(e.target);
          if (null !== t) {
            var n = s(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = c(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = L.p;
                      try {
                        return (L.p = e), t();
                      } finally {
                        L.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Mc();
                        e = je(e);
                        var t = Rr(n, e);
                        null !== t && Nc(t, 0, e), ef(n, e);
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Sf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = lf(e.nativeEvent);
            if (null !== n)
              return null !== (t = He(n)) && tf(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (zt = r), n.target.dispatchEvent(r), (zt = null), t.shift();
          }
          return !0;
        }
        function kf(e, t, n) {
          Sf(e) && n.delete(t);
        }
        function Cf() {
          (df = !1),
            null !== ff && Sf(ff) && (ff = null),
            null !== pf && Sf(pf) && (pf = null),
            null !== hf && Sf(hf) && (hf = null),
            mf.forEach(kf),
            gf.forEach(kf);
        }
        function Ef(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            df ||
              ((df = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, Cf)));
        }
        var _f = null;
        function Tf(e) {
          _f !== e &&
            ((_f = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              _f === e && (_f = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  i = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === cf(r || n)) continue;
                  break;
                }
                var a = He(n);
                null !== a &&
                  (e.splice(t, 3),
                  (t -= 3),
                  Ro(
                    a,
                    { pending: !0, data: i, method: n.method, action: r },
                    r,
                    i
                  ));
              }
            }));
        }
        function jf(e) {
          function t(t) {
            return Ef(t, e);
          }
          null !== ff && Ef(ff, e),
            null !== pf && Ef(pf, e),
            null !== hf && Ef(hf, e),
            mf.forEach(t),
            gf.forEach(t);
          for (var n = 0; n < yf.length; n++) {
            var r = yf[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < yf.length && null === (n = yf[0]).blockedOn; )
            xf(n), null === n.blockedOn && yf.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var i = n[r],
                a = n[r + 1],
                o = i[Ae] || null;
              if ("function" === typeof a) o || Tf(n);
              else if (o) {
                var l = null;
                if (a && a.hasAttribute("formAction")) {
                  if (((i = a), (o = a[Ae] || null))) l = o.formAction;
                  else if (null !== cf(i)) continue;
                } else l = o.action;
                "function" === typeof l
                  ? (n[r + 1] = l)
                  : (n.splice(r, 3), (r -= 3)),
                  Tf(n);
              }
            }
        }
        function Of(e) {
          this._internalRoot = e;
        }
        function zf(e) {
          this._internalRoot = e;
        }
        (zf.prototype.render = Of.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Jd(t.current, Mc(), e, t, null, null);
          }),
          (zf.prototype.unmount = Of.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Jd(e.current, 2, null, e, null, null), $c(), (t[Me] = null);
              }
            }),
          (zf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = ze();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < yf.length && 0 !== t && t < yf[n].priority;
                n++
              );
              yf.splice(n, 0, e), 0 === n && xf(e);
            }
          });
        var Rf = i.version;
        if ("19.1.0" !== Rf) throw Error(o(527, Rf, "19.1.0"));
        L.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = s(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return u(i), e;
                    if (a === r) return u(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var l = !1, c = i.child; c; ) {
                    if (c === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (c === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!l) {
                    for (c = a.child; c; ) {
                      if (c === n) {
                        (l = !0), (n = a), (r = i);
                        break;
                      }
                      if (c === r) {
                        (l = !0), (r = a), (n = i);
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? d(e) : null) ? null : e.stateNode)
          );
        };
        var Pf = {
          bundleType: 0,
          version: "19.1.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: M,
          reconcilerVersion: "19.1.0",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Af.isDisabled && Af.supportsFiber)
            try {
              (ue = Af.inject(Pf)), (de = Af);
            } catch (Lf) {}
        }
        (t.createRoot = function (e, t) {
          if (!l(e)) throw Error(o(299));
          var n = !1,
            r = "",
            i = bl,
            a = vl,
            s = wl;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
              void 0 !== t.onCaughtError && (a = t.onCaughtError),
              void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = Kd(e, 1, !1, null, 0, n, r, i, a, s, 0, null)),
            (e[Me] = t.current),
            Fu(e),
            new Of(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!l(e)) throw Error(o(299));
            var r = !1,
              i = "",
              a = bl,
              s = vl,
              c = wl,
              u = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (a = n.onUncaughtError),
                void 0 !== n.onCaughtError && (s = n.onCaughtError),
                void 0 !== n.onRecoverableError && (c = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks &&
                  n.unstable_transitionCallbacks,
                void 0 !== n.formState && (u = n.formState)),
              ((t = Kd(e, 1, !0, t, 0, r, i, a, s, c, 0, u)).context =
                Qd(null)),
              (n = t.current),
              ((i = ia((r = je((r = Mc()))))).callback = null),
              aa(n, i, r),
              (n = r),
              (t.current.lanes = n),
              Ee(t, n),
              Su(t),
              (e[Me] = t.current),
              Fu(e),
              new zf(t)
            );
          }),
          (t.version = "19.1.0");
      },
      43: (e, t, n) => {
        e.exports = n(288);
      },
      191: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var l = Symbol.for("react.consumer"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.suspense_list"),
          f = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          h = Symbol.for("react.view_transition"),
          m = Symbol.for("react.client.reference");
        function g(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case i:
                  case o:
                  case a:
                  case u:
                  case d:
                  case h:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case c:
                      case p:
                      case f:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
        t.Hy = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === i ||
            e === o ||
            e === a ||
            e === u ||
            e === d ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === p ||
                e.$$typeof === f ||
                e.$$typeof === s ||
                e.$$typeof === l ||
                e.$$typeof === c ||
                e.$$typeof === m ||
                void 0 !== e.getModuleId))
          );
        };
      },
      288: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.consumer"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function b() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = y.prototype);
        var w = (v.prototype = new b());
        (w.constructor = v), m(w, y.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          S = { H: null, A: null, T: null, S: null, V: null },
          k = Object.prototype.hasOwnProperty;
        function C(e, t, r, i, a, o) {
          return (
            (r = o.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: o,
            }
          );
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j() {}
        function O(e, t, i, a, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s,
            c,
            u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "bigint":
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                    break;
                  case f:
                    return O((u = e._init)(e._payload), t, i, a, o);
                }
            }
          if (u)
            return (
              (o = o(e)),
              (u = "" === a ? "." + T(e, 0) : a),
              x(o)
                ? ((i = ""),
                  null != u && (i = u.replace(_, "$&/") + "/"),
                  O(o, t, i, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    ((s = o),
                    (c =
                      i +
                      (null == o.key || (e && e.key === o.key)
                        ? ""
                        : ("" + o.key).replace(_, "$&/") + "/") +
                      u),
                    (o = C(s.type, c, void 0, 0, 0, s.props))),
                  t.push(o)),
              1
            );
          u = 0;
          var d,
            h = "" === a ? "." : a + ":";
          if (x(e))
            for (var m = 0; m < e.length; m++)
              u += O((a = e[m]), t, i, (l = h + T(a, m)), o);
          else if (
            "function" ===
            typeof (m =
              null === (d = e) || "object" !== typeof d
                ? null
                : "function" === typeof (d = (p && d[p]) || d["@@iterator"])
                ? d
                : null)
          )
            for (e = m.call(e), m = 0; !(a = e.next()).done; )
              u += O((a = a.value), t, i, (l = h + T(a, m++)), o);
          else if ("object" === l) {
            if ("function" === typeof e.then)
              return O(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(j, j)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                i,
                a,
                o
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return u;
        }
        function z(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function A() {}
        (t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = i),
          (t.Profiler = o),
          (t.PureComponent = v),
          (t.StrictMode = a),
          (t.Suspense = u),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (t.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return S.H.useMemoCache(e);
            },
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = m({}, e.props),
              i = e.key;
            if (null != t)
              for (a in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (i = "" + t.key),
              t))
                !k.call(t, a) ||
                  "key" === a ||
                  "__self" === a ||
                  "__source" === a ||
                  ("ref" === a && void 0 === t.ref) ||
                  (r[a] = t[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (1 < a) {
              for (var o = Array(a), l = 0; l < a; l++) o[l] = arguments[l + 2];
              r.children = o;
            }
            return C(e.type, i, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: l, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              i = {},
              a = null;
            if (null != t)
              for (r in (void 0 !== t.key && (a = "" + t.key), t))
                k.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (i[r] = t[r]);
            var o = arguments.length - 2;
            if (1 === o) i.children = n;
            else if (1 < o) {
              for (var l = Array(o), s = 0; s < o; s++) l[s] = arguments[s + 2];
              i.children = l;
            }
            if (e && e.defaultProps)
              for (r in (o = e.defaultProps)) void 0 === i[r] && (i[r] = o[r]);
            return C(e, a, void 0, 0, 0, i);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = S.T,
              n = {};
            S.T = n;
            try {
              var r = e(),
                i = S.S;
              null !== i && i(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(A, P);
            } catch (a) {
              P(a);
            } finally {
              S.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return S.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t, n) {
            var r = S.H;
            if ("function" === typeof n)
              throw Error(
                "useEffect CRUD overload is not enabled in this build of React."
              );
            return r.useEffect(e, t);
          }),
          (t.useId = function () {
            return S.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (t.useState = function (e) {
            return S.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return S.H.useTransition();
          }),
          (t.version = "19.1.0");
      },
      391: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4));
      },
      579: (e, t, n) => {
        e.exports = n(799);
      },
      672: (e, t, n) => {
        var r = n(43);
        function i(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function a() {}
        var o = {
            d: {
              f: a,
              r: function () {
                throw Error(i(522));
              },
              D: a,
              C: a,
              L: a,
              m: a,
              X: a,
              S: a,
              M: a,
            },
            p: 0,
            findDOMNode: null,
          },
          l = Symbol.for("react.portal");
        var s =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function c(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(i(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: l,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = s.T,
              n = o.p;
            try {
              if (((s.T = null), (o.p = 2), e)) return e();
            } finally {
              (s.T = t), (o.p = n), o.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              o.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && o.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = c(n, t.crossOrigin),
                i = "string" === typeof t.integrity ? t.integrity : void 0,
                a =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? o.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: i, fetchPriority: a }
                  )
                : "script" === n &&
                  o.d.X(e, {
                    crossOrigin: r,
                    integrity: i,
                    fetchPriority: a,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = c(t.as, t.crossOrigin);
                  o.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && o.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = c(n, t.crossOrigin);
              o.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = c(t.as, t.crossOrigin);
                o.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else o.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            o.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return s.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return s.H.useHostTransitionStatus();
          }),
          (t.version = "19.1.0");
      },
      799: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.fragment");
        function i(e, t, r) {
          var i = null;
          if (
            (void 0 !== r && (i = "" + r),
            void 0 !== t.key && (i = "" + t.key),
            "key" in t)
          )
            for (var a in ((r = {}), t)) "key" !== a && (r[a] = t[a]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: i,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        (t.Fragment = r), (t.jsx = i), (t.jsxs = i);
      },
      853: (e, t, n) => {
        e.exports = n(896);
      },
      896: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < a(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                c = l + 1,
                u = e[c];
              if (0 > a(s, n))
                c < i && 0 > a(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(c < i && 0 > a(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = !1,
          b = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          w = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) i(u);
            else {
              if (!(t.startTime <= e)) break;
              i(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function S(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(c)) (m = !0), C || ((C = !0), k());
            else {
              var t = r(u);
              null !== t && P(S, t.startTime - e);
            }
        }
        var k,
          C = !1,
          E = -1,
          _ = 5,
          T = -1;
        function j() {
          return !!y || !(t.unstable_now() - T < _);
        }
        function O() {
          if (((y = !1), C)) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              e: {
                (m = !1), g && ((g = !1), v(E), (E = -1)), (h = !0);
                var a = p;
                try {
                  t: {
                    for (
                      x(e), f = r(c);
                      null !== f && !(f.expirationTime > e && j());

                    ) {
                      var o = f.callback;
                      if ("function" === typeof o) {
                        (f.callback = null), (p = f.priorityLevel);
                        var l = o(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof l)) {
                          (f.callback = l), x(e), (n = !0);
                          break t;
                        }
                        f === r(c) && i(c), x(e);
                      } else i(c);
                      f = r(c);
                    }
                    if (null !== f) n = !0;
                    else {
                      var s = r(u);
                      null !== s && P(S, s.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (f = null), (p = a), (h = !1);
                }
                n = void 0;
              }
            } finally {
              n ? k() : (C = !1);
            }
          }
        }
        if ("function" === typeof w)
          k = function () {
            w(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel(),
            R = z.port2;
          (z.port1.onmessage = O),
            (k = function () {
              R.postMessage(null);
            });
        } else
          k = function () {
            b(O, 0);
          };
        function P(e, n) {
          E = b(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_requestPaint = function () {
            y = !0;
          }),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, a) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > o
                ? ((e.sortIndex = a),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (g ? (v(E), (E = -1)) : (g = !0), P(S, a - o)))
                : ((e.sortIndex = l),
                  n(c, e),
                  m || h || ((m = !0), C || ((C = !0), k()))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672));
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, i) {
        if ((1 & i && (r = this(r)), 8 & i)) return r;
        if ("object" === typeof r && r) {
          if (4 & i && r.__esModule) return r;
          if (16 & i && "function" === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & i && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (o[e] = () => r[e]));
        return (o.default = () => r), n.d(a, o), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".3e51356a.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "library:";
      n.l = (r, i, a, o) => {
        if (e[r]) e[r].push(i);
        else {
          var l, s;
          if (void 0 !== a)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var d = c[u];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + a
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + a),
            (l.src = r)),
            (e[r] = [i]);
          var f = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                i && i.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise((n, r) => (i = e[t] = [n, r]));
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              l = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = a),
                    (l.request = o),
                    i[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var i,
            a,
            o = r[0],
            l = r[1],
            s = r[2],
            c = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (i in l) n.o(l, i) && (n.m[i] = l[i]);
            if (s) s(n);
          }
          for (t && t(r); c < o.length; c++)
            (a = o[c]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunklibrary = self.webpackChunklibrary || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = {};
  n.r(r),
    n.d(r, {
      hasBrowserEnv: () => pe,
      hasStandardBrowserEnv: () => me,
      hasStandardBrowserWebWorkerEnv: () => ge,
      navigator: () => he,
      origin: () => ye,
    });
  var i = n(43),
    a = n.t(i, 2),
    o = n(391);
  function l(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: s } = Object.prototype,
    { getPrototypeOf: c } = Object,
    { iterator: u, toStringTag: d } = Symbol,
    f =
      ((p = Object.create(null)),
      (e) => {
        const t = s.call(e);
        return p[t] || (p[t] = t.slice(8, -1).toLowerCase());
      });
  var p;
  const h = (e) => ((e = e.toLowerCase()), (t) => f(t) === e),
    m = (e) => (t) => typeof t === e,
    { isArray: g } = Array,
    y = m("undefined");
  const b = h("ArrayBuffer");
  const v = m("string"),
    w = m("function"),
    x = m("number"),
    S = (e) => null !== e && "object" === typeof e,
    k = (e) => {
      if ("object" !== f(e)) return !1;
      const t = c(e);
      return (
        (null === t ||
          t === Object.prototype ||
          null === Object.getPrototypeOf(t)) &&
        !(d in e) &&
        !(u in e)
      );
    },
    C = h("Date"),
    E = h("File"),
    _ = h("Blob"),
    T = h("FileList"),
    j = h("URLSearchParams"),
    [O, z, R, P] = ["ReadableStream", "Request", "Response", "Headers"].map(h);
  function A(e, t) {
    let n,
      r,
      { allOwnKeys: i = !1 } =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (null !== e && "undefined" !== typeof e)
      if (("object" !== typeof e && (e = [e]), g(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else {
        const r = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
          a = r.length;
        let o;
        for (n = 0; n < a; n++) (o = r[n]), t.call(null, e[o], o, e);
      }
  }
  function M(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      i = n.length;
    for (; i-- > 0; ) if (((r = n[i]), t === r.toLowerCase())) return r;
    return null;
  }
  const L =
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self
        ? self
        : "undefined" !== typeof window
        ? window
        : global,
    N = (e) => !y(e) && e !== L;
  const D =
    ((I = "undefined" !== typeof Uint8Array && c(Uint8Array)),
    (e) => I && e instanceof I);
  var I;
  const B = h("HTMLFormElement"),
    F = ((e) => {
      let { hasOwnProperty: t } = e;
      return (e, n) => t.call(e, n);
    })(Object.prototype),
    $ = h("RegExp"),
    H = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      A(n, (n, i) => {
        let a;
        !1 !== (a = t(n, i, e)) && (r[i] = a || n);
      }),
        Object.defineProperties(e, r);
    };
  const U = h("AsyncFunction"),
    V =
      ((W = "function" === typeof setImmediate),
      (q = w(L.postMessage)),
      W
        ? setImmediate
        : q
        ? ((e, t) => (
            L.addEventListener(
              "message",
              (n) => {
                let { source: r, data: i } = n;
                r === L && i === e && t.length && t.shift()();
              },
              !1
            ),
            (n) => {
              t.push(n), L.postMessage(e, "*");
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e));
  var W, q;
  const X =
      "undefined" !== typeof queueMicrotask
        ? queueMicrotask.bind(L)
        : ("undefined" !== typeof process && process.nextTick) || V,
    G = {
      isArray: g,
      isArrayBuffer: b,
      isBuffer: function (e) {
        return (
          null !== e &&
          !y(e) &&
          null !== e.constructor &&
          !y(e.constructor) &&
          w(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" === typeof FormData && e instanceof FormData) ||
            (w(e.append) &&
              ("formdata" === (t = f(e)) ||
                ("object" === t &&
                  w(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && b(e.buffer)),
          t
        );
      },
      isString: v,
      isNumber: x,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: S,
      isPlainObject: k,
      isReadableStream: O,
      isRequest: z,
      isResponse: R,
      isHeaders: P,
      isUndefined: y,
      isDate: C,
      isFile: E,
      isBlob: _,
      isRegExp: $,
      isFunction: w,
      isStream: (e) => S(e) && w(e.pipe),
      isURLSearchParams: j,
      isTypedArray: D,
      isFileList: T,
      forEach: A,
      merge: function e() {
        const { caseless: t } = (N(this) && this) || {},
          n = {},
          r = (r, i) => {
            const a = (t && M(n, i)) || i;
            k(n[a]) && k(r)
              ? (n[a] = e(n[a], r))
              : k(r)
              ? (n[a] = e({}, r))
              : g(r)
              ? (n[a] = r.slice())
              : (n[a] = r);
          };
        for (let i = 0, a = arguments.length; i < a; i++)
          arguments[i] && A(arguments[i], r);
        return n;
      },
      extend: function (e, t, n) {
        let { allOwnKeys: r } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          A(
            t,
            (t, r) => {
              n && w(t) ? (e[r] = l(t, n)) : (e[r] = t);
            },
            { allOwnKeys: r }
          ),
          e
        );
      },
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let i, a, o;
        const l = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
            (o = i[a]),
              (r && !r(o, e, t)) || l[o] || ((t[o] = e[o]), (l[o] = !0));
          e = !1 !== n && c(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: f,
      kindOfTest: h,
      endsWith: (e, t, n) => {
        (e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (g(e)) return e;
        let t = e.length;
        if (!x(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[u]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: B,
      hasOwnProperty: F,
      hasOwnProp: F,
      reduceDescriptors: H,
      freezeMethods: (e) => {
        H(e, (t, n) => {
          if (w(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          w(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return g(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: M,
      global: L,
      isContextDefined: N,
      isSpecCompliantForm: function (e) {
        return !!(e && w(e.append) && "FormData" === e[d] && e[u]);
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (S(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const i = g(e) ? [] : {};
                return (
                  A(e, (e, t) => {
                    const a = n(e, r + 1);
                    !y(a) && (i[t] = a);
                  }),
                  (t[r] = void 0),
                  i
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: U,
      isThenable: (e) => e && (S(e) || w(e)) && w(e.then) && w(e.catch),
      setImmediate: V,
      asap: X,
      isIterable: (e) => null != e && w(e[u]),
    };
  function Y(e, t, n, r, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && ((this.response = i), (this.status = i.status ? i.status : null));
  }
  G.inherits(Y, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: G.toJSONObject(this.config),
        code: this.code,
        status: this.status,
      };
    },
  });
  const K = Y.prototype,
    Q = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    Q[e] = { value: e };
  }),
    Object.defineProperties(Y, Q),
    Object.defineProperty(K, "isAxiosError", { value: !0 }),
    (Y.from = (e, t, n, r, i, a) => {
      const o = Object.create(K);
      return (
        G.toFlatObject(
          e,
          o,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        Y.call(o, e.message, t, n, r, i),
        (o.cause = e),
        (o.name = e.name),
        a && Object.assign(o, a),
        o
      );
    });
  const J = Y;
  function Z(e) {
    return G.isPlainObject(e) || G.isArray(e);
  }
  function ee(e) {
    return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function te(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = ee(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
  const ne = G.toFlatObject(G, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  const re = function (e, t, n) {
    if (!G.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = G.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !G.isUndefined(t[e]);
        }
      )).metaTokens,
      i = n.visitor || c,
      a = n.dots,
      o = n.indexes,
      l =
        (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
        G.isSpecCompliantForm(t);
    if (!G.isFunction(i)) throw new TypeError("visitor must be a function");
    function s(e) {
      if (null === e) return "";
      if (G.isDate(e)) return e.toISOString();
      if (!l && G.isBlob(e))
        throw new J("Blob is not supported. Use a Buffer instead.");
      return G.isArrayBuffer(e) || G.isTypedArray(e)
        ? l && "function" === typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function c(e, n, i) {
      let l = e;
      if (e && !i && "object" === typeof e)
        if (G.endsWith(n, "{}"))
          (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (G.isArray(e) &&
            (function (e) {
              return G.isArray(e) && !e.some(Z);
            })(e)) ||
          ((G.isFileList(e) || G.endsWith(n, "[]")) && (l = G.toArray(e)))
        )
          return (
            (n = ee(n)),
            l.forEach(function (e, r) {
              !G.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === o ? te([n], r, a) : null === o ? n : n + "[]",
                  s(e)
                );
            }),
            !1
          );
      return !!Z(e) || (t.append(te(i, n, a), s(e)), !1);
    }
    const u = [],
      d = Object.assign(ne, {
        defaultVisitor: c,
        convertValue: s,
        isVisitable: Z,
      });
    if (!G.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!G.isUndefined(n)) {
          if (-1 !== u.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          u.push(n),
            G.forEach(n, function (n, a) {
              !0 ===
                (!(G.isUndefined(n) || null === n) &&
                  i.call(t, n, G.isString(a) ? a.trim() : a, r, d)) &&
                e(n, r ? r.concat(a) : [a]);
            }),
            u.pop();
        }
      })(e),
      t
    );
  };
  function ie(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function ae(e, t) {
    (this._pairs = []), e && re(e, this, t);
  }
  const oe = ae.prototype;
  (oe.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (oe.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, ie);
          }
        : ie;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  const le = ae;
  function se(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function ce(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || se;
    G.isFunction(n) && (n = { serialize: n });
    const i = n && n.serialize;
    let a;
    if (
      ((a = i
        ? i(t, n)
        : G.isURLSearchParams(t)
        ? t.toString()
        : new le(t, n).toString(r)),
      a)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
    }
    return e;
  }
  const ue = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, n) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(e) {
        G.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }
    },
    de = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    fe = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" !== typeof URLSearchParams ? URLSearchParams : le,
        FormData: "undefined" !== typeof FormData ? FormData : null,
        Blob: "undefined" !== typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    pe = "undefined" !== typeof window && "undefined" !== typeof document,
    he = ("object" === typeof navigator && navigator) || void 0,
    me =
      pe &&
      (!he || ["ReactNative", "NativeScript", "NS"].indexOf(he.product) < 0),
    ge =
      "undefined" !== typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" === typeof self.importScripts,
    ye = (pe && window.location.href) || "http://localhost",
    be = { ...r, ...fe };
  const ve = function (e) {
    function t(e, n, r, i) {
      let a = e[i++];
      if ("__proto__" === a) return !0;
      const o = Number.isFinite(+a),
        l = i >= e.length;
      if (((a = !a && G.isArray(r) ? r.length : a), l))
        return G.hasOwnProp(r, a) ? (r[a] = [r[a], n]) : (r[a] = n), !o;
      (r[a] && G.isObject(r[a])) || (r[a] = []);
      return (
        t(e, n, r[a], i) &&
          G.isArray(r[a]) &&
          (r[a] = (function (e) {
            const t = {},
              n = Object.keys(e);
            let r;
            const i = n.length;
            let a;
            for (r = 0; r < i; r++) (a = n[r]), (t[a] = e[a]);
            return t;
          })(r[a])),
        !o
      );
    }
    if (G.isFormData(e) && G.isFunction(e.entries)) {
      const n = {};
      return (
        G.forEachEntry(e, (e, r) => {
          t(
            (function (e) {
              return G.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                "[]" === e[0] ? "" : e[1] || e[0]
              );
            })(e),
            r,
            n,
            0
          );
        }),
        n
      );
    }
    return null;
  };
  const we = {
    transitional: de,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          i = G.isObject(e);
        i && G.isHTMLForm(e) && (e = new FormData(e));
        if (G.isFormData(e)) return r ? JSON.stringify(ve(e)) : e;
        if (
          G.isArrayBuffer(e) ||
          G.isBuffer(e) ||
          G.isStream(e) ||
          G.isFile(e) ||
          G.isBlob(e) ||
          G.isReadableStream(e)
        )
          return e;
        if (G.isArrayBufferView(e)) return e.buffer;
        if (G.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        let a;
        if (i) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return re(
                e,
                new be.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, n, r) {
                      return be.isNode && G.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : r.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((a = G.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return re(
              a ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer
            );
          }
        }
        return i || r
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (G.isString(e))
                try {
                  return (t || JSON.parse)(e), G.trim(e);
                } catch (r) {
                  if ("SyntaxError" !== r.name) throw r;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || we.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (G.isResponse(e) || G.isReadableStream(e)) return e;
        if (e && G.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (i) {
            if (n) {
              if ("SyntaxError" === i.name)
                throw J.from(i, J.ERR_BAD_RESPONSE, this, null, this.response);
              throw i;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: be.classes.FormData, Blob: be.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  G.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    we.headers[e] = {};
  });
  const xe = we,
    Se = G.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    ke = Symbol("internals");
  function Ce(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Ee(e) {
    return !1 === e || null == e ? e : G.isArray(e) ? e.map(Ee) : String(e);
  }
  function _e(e, t, n, r, i) {
    return G.isFunction(r)
      ? r.call(this, t, n)
      : (i && (t = n),
        G.isString(t)
          ? G.isString(r)
            ? -1 !== t.indexOf(r)
            : G.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0);
  }
  class Te {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function i(e, t, n) {
        const i = Ce(t);
        if (!i) throw new Error("header name must be a non-empty string");
        const a = G.findKey(r, i);
        (!a || void 0 === r[a] || !0 === n || (void 0 === n && !1 !== r[a])) &&
          (r[a || t] = Ee(e));
      }
      const a = (e, t) => G.forEach(e, (e, n) => i(e, n, t));
      if (G.isPlainObject(e) || e instanceof this.constructor) a(e, t);
      else if (
        G.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        a(
          ((e) => {
            const t = {};
            let n, r, i;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  (i = e.indexOf(":")),
                    (n = e.substring(0, i).trim().toLowerCase()),
                    (r = e.substring(i + 1).trim()),
                    !n ||
                      (t[n] && Se[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r));
                }),
              t
            );
          })(e),
          t
        );
      else if (G.isObject(e) && G.isIterable(e)) {
        let n,
          r,
          i = {};
        for (const t of e) {
          if (!G.isArray(t))
            throw TypeError("Object iterator must return a key-value pair");
          i[(r = t[0])] = (n = i[r])
            ? G.isArray(n)
              ? [...n, t[1]]
              : [n, t[1]]
            : t[1];
        }
        a(i, t);
      } else null != e && i(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = Ce(e))) {
        const n = G.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (G.isFunction(t)) return t.call(this, e, n);
          if (G.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = Ce(e))) {
        const n = G.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !_e(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function i(e) {
        if ((e = Ce(e))) {
          const i = G.findKey(n, e);
          !i || (t && !_e(0, n[i], i, t)) || (delete n[i], (r = !0));
        }
      }
      return G.isArray(e) ? e.forEach(i) : i(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const i = t[n];
        (e && !_e(0, this[i], i, e, !0)) || (delete this[i], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        G.forEach(this, (r, i) => {
          const a = G.findKey(n, i);
          if (a) return (t[a] = Ee(r)), void delete t[i];
          const o = e
            ? (function (e) {
                return e
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
              })(i)
            : String(i).trim();
          o !== i && delete t[i], (t[o] = Ee(r)), (n[o] = !0);
        }),
        this
      );
    }
    concat() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.constructor.concat(this, ...t);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        G.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && G.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map((e) => {
          let [t, n] = e;
          return t + ": " + n;
        })
        .join("\n");
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e) {
      const t = new this(e);
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
        i < n;
        i++
      )
        r[i - 1] = arguments[i];
      return r.forEach((e) => t.set(e)), t;
    }
    static accessor(e) {
      const t = (this[ke] = this[ke] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = Ce(e);
        t[r] ||
          (!(function (e, t) {
            const n = G.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, i) {
                  return this[r].call(this, t, e, n, i);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return G.isArray(e) ? e.forEach(r) : r(e), this;
    }
  }
  Te.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    G.reduceDescriptors(Te.prototype, (e, t) => {
      let { value: n } = e,
        r = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => n,
        set(e) {
          this[r] = e;
        },
      };
    }),
    G.freezeMethods(Te);
  const je = Te;
  function Oe(e, t) {
    const n = this || xe,
      r = t || n,
      i = je.from(r.headers);
    let a = r.data;
    return (
      G.forEach(e, function (e) {
        a = e.call(n, a, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      a
    );
  }
  function ze(e) {
    return !(!e || !e.__CANCEL__);
  }
  function Re(e, t, n) {
    J.call(this, null == e ? "canceled" : e, J.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  G.inherits(Re, J, { __CANCEL__: !0 });
  const Pe = Re;
  function Ae(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new J(
            "Request failed with status code " + n.status,
            [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        )
      : e(n);
  }
  const Me = function (e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let i,
      a = 0,
      o = 0;
    return (
      (t = void 0 !== t ? t : 1e3),
      function (l) {
        const s = Date.now(),
          c = r[o];
        i || (i = s), (n[a] = l), (r[a] = s);
        let u = o,
          d = 0;
        for (; u !== a; ) (d += n[u++]), (u %= e);
        if (((a = (a + 1) % e), a === o && (o = (o + 1) % e), s - i < t))
          return;
        const f = c && s - c;
        return f ? Math.round((1e3 * d) / f) : void 0;
      }
    );
  };
  const Le = function (e, t) {
      let n,
        r,
        i = 0,
        a = 1e3 / t;
      const o = function (t) {
        let a =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now();
        (i = a),
          (n = null),
          r && (clearTimeout(r), (r = null)),
          e.apply(null, t);
      };
      return [
        function () {
          const e = Date.now(),
            t = e - i;
          for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
            s[c] = arguments[c];
          t >= a
            ? o(s, e)
            : ((n = s),
              r ||
                (r = setTimeout(() => {
                  (r = null), o(n);
                }, a - t)));
        },
        () => n && o(n),
      ];
    },
    Ne = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        r = 0;
      const i = Me(50, 250);
      return Le((n) => {
        const a = n.loaded,
          o = n.lengthComputable ? n.total : void 0,
          l = a - r,
          s = i(l);
        r = a;
        e({
          loaded: a,
          total: o,
          progress: o ? a / o : void 0,
          bytes: l,
          rate: s || void 0,
          estimated: s && o && a <= o ? (o - a) / s : void 0,
          event: n,
          lengthComputable: null != o,
          [t ? "download" : "upload"]: !0,
        });
      }, n);
    },
    De = (e, t) => {
      const n = null != e;
      return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
    },
    Ie = (e) =>
      function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return G.asap(() => e(...n));
      },
    Be = be.hasStandardBrowserEnv
      ? ((e, t) => (n) => (
          (n = new URL(n, be.origin)),
          e.protocol === n.protocol &&
            e.host === n.host &&
            (t || e.port === n.port)
        ))(
          new URL(be.origin),
          be.navigator && /(msie|trident)/i.test(be.navigator.userAgent)
        )
      : () => !0,
    Fe = be.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, i, a) {
            const o = [e + "=" + encodeURIComponent(t)];
            G.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
              G.isString(r) && o.push("path=" + r),
              G.isString(i) && o.push("domain=" + i),
              !0 === a && o.push("secure"),
              (document.cookie = o.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function $e(e, t, n) {
    let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
    return e && (r || 0 == n)
      ? (function (e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  const He = (e) => (e instanceof je ? { ...e } : e);
  function Ue(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n, r) {
      return G.isPlainObject(e) && G.isPlainObject(t)
        ? G.merge.call({ caseless: r }, e, t)
        : G.isPlainObject(t)
        ? G.merge({}, t)
        : G.isArray(t)
        ? t.slice()
        : t;
    }
    function i(e, t, n, i) {
      return G.isUndefined(t)
        ? G.isUndefined(e)
          ? void 0
          : r(void 0, e, 0, i)
        : r(e, t, 0, i);
    }
    function a(e, t) {
      if (!G.isUndefined(t)) return r(void 0, t);
    }
    function o(e, t) {
      return G.isUndefined(t)
        ? G.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function l(n, i, a) {
      return a in t ? r(n, i) : a in e ? r(void 0, n) : void 0;
    }
    const s = {
      url: a,
      method: a,
      data: a,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: l,
      headers: (e, t, n) => i(He(e), He(t), 0, !0),
    };
    return (
      G.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const a = s[r] || i,
          o = a(e[r], t[r], r);
        (G.isUndefined(o) && a !== l) || (n[r] = o);
      }),
      n
    );
  }
  const Ve = (e) => {
      const t = Ue({}, e);
      let n,
        {
          data: r,
          withXSRFToken: i,
          xsrfHeaderName: a,
          xsrfCookieName: o,
          headers: l,
          auth: s,
        } = t;
      if (
        ((t.headers = l = je.from(l)),
        (t.url = ce(
          $e(t.baseURL, t.url, t.allowAbsoluteUrls),
          e.params,
          e.paramsSerializer
        )),
        s &&
          l.set(
            "Authorization",
            "Basic " +
              btoa(
                (s.username || "") +
                  ":" +
                  (s.password ? unescape(encodeURIComponent(s.password)) : "")
              )
          ),
        G.isFormData(r))
      )
        if (be.hasStandardBrowserEnv || be.hasStandardBrowserWebWorkerEnv)
          l.setContentType(void 0);
        else if (!1 !== (n = l.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(";")
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          l.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
      if (
        be.hasStandardBrowserEnv &&
        (i && G.isFunction(i) && (i = i(t)), i || (!1 !== i && Be(t.url)))
      ) {
        const e = a && o && Fe.read(o);
        e && l.set(a, e);
      }
      return t;
    },
    We =
      "undefined" !== typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = Ve(e);
          let i = r.data;
          const a = je.from(r.headers).normalize();
          let o,
            l,
            s,
            c,
            u,
            { responseType: d, onUploadProgress: f, onDownloadProgress: p } = r;
          function h() {
            c && c(),
              u && u(),
              r.cancelToken && r.cancelToken.unsubscribe(o),
              r.signal && r.signal.removeEventListener("abort", o);
          }
          let m = new XMLHttpRequest();
          function g() {
            if (!m) return;
            const r = je.from(
              "getAllResponseHeaders" in m && m.getAllResponseHeaders()
            );
            Ae(
              function (e) {
                t(e), h();
              },
              function (e) {
                n(e), h();
              },
              {
                data:
                  d && "text" !== d && "json" !== d
                    ? m.response
                    : m.responseText,
                status: m.status,
                statusText: m.statusText,
                headers: r,
                config: e,
                request: m,
              }
            ),
              (m = null);
          }
          m.open(r.method.toUpperCase(), r.url, !0),
            (m.timeout = r.timeout),
            "onloadend" in m
              ? (m.onloadend = g)
              : (m.onreadystatechange = function () {
                  m &&
                    4 === m.readyState &&
                    (0 !== m.status ||
                      (m.responseURL &&
                        0 === m.responseURL.indexOf("file:"))) &&
                    setTimeout(g);
                }),
            (m.onabort = function () {
              m &&
                (n(new J("Request aborted", J.ECONNABORTED, e, m)), (m = null));
            }),
            (m.onerror = function () {
              n(new J("Network Error", J.ERR_NETWORK, e, m)), (m = null);
            }),
            (m.ontimeout = function () {
              let t = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const i = r.transitional || de;
              r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                n(
                  new J(
                    t,
                    i.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                    e,
                    m
                  )
                ),
                (m = null);
            }),
            void 0 === i && a.setContentType(null),
            "setRequestHeader" in m &&
              G.forEach(a.toJSON(), function (e, t) {
                m.setRequestHeader(t, e);
              }),
            G.isUndefined(r.withCredentials) ||
              (m.withCredentials = !!r.withCredentials),
            d && "json" !== d && (m.responseType = r.responseType),
            p && (([s, u] = Ne(p, !0)), m.addEventListener("progress", s)),
            f &&
              m.upload &&
              (([l, c] = Ne(f)),
              m.upload.addEventListener("progress", l),
              m.upload.addEventListener("loadend", c)),
            (r.cancelToken || r.signal) &&
              ((o = (t) => {
                m &&
                  (n(!t || t.type ? new Pe(null, e, m) : t),
                  m.abort(),
                  (m = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(o),
              r.signal &&
                (r.signal.aborted
                  ? o()
                  : r.signal.addEventListener("abort", o)));
          const y = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          y && -1 === be.protocols.indexOf(y)
            ? n(new J("Unsupported protocol " + y + ":", J.ERR_BAD_REQUEST, e))
            : m.send(i || null);
        });
      },
    qe = (e, t) => {
      const { length: n } = (e = e ? e.filter(Boolean) : []);
      if (t || n) {
        let n,
          r = new AbortController();
        const i = function (e) {
          if (!n) {
            (n = !0), o();
            const t = e instanceof Error ? e : this.reason;
            r.abort(
              t instanceof J ? t : new Pe(t instanceof Error ? t.message : t)
            );
          }
        };
        let a =
          t &&
          setTimeout(() => {
            (a = null), i(new J(`timeout ${t} of ms exceeded`, J.ETIMEDOUT));
          }, t);
        const o = () => {
          e &&
            (a && clearTimeout(a),
            (a = null),
            e.forEach((e) => {
              e.unsubscribe
                ? e.unsubscribe(i)
                : e.removeEventListener("abort", i);
            }),
            (e = null));
        };
        e.forEach((e) => e.addEventListener("abort", i));
        const { signal: l } = r;
        return (l.unsubscribe = () => G.asap(o)), l;
      }
    },
    Xe = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        i = 0;
      for (; i < n; ) (r = i + t), yield e.slice(i, r), (i = r);
    },
    Ge = async function* (e) {
      if (e[Symbol.asyncIterator]) return void (yield* e);
      const t = e.getReader();
      try {
        for (;;) {
          const { done: e, value: n } = await t.read();
          if (e) break;
          yield n;
        }
      } finally {
        await t.cancel();
      }
    },
    Ye = (e, t, n, r) => {
      const i = (async function* (e, t) {
        for await (const n of Ge(e)) yield* Xe(n, t);
      })(e, t);
      let a,
        o = 0,
        l = (e) => {
          a || ((a = !0), r && r(e));
        };
      return new ReadableStream(
        {
          async pull(e) {
            try {
              const { done: t, value: r } = await i.next();
              if (t) return l(), void e.close();
              let a = r.byteLength;
              if (n) {
                let e = (o += a);
                n(e);
              }
              e.enqueue(new Uint8Array(r));
            } catch (t) {
              throw (l(t), t);
            }
          },
          cancel: (e) => (l(e), i.return()),
        },
        { highWaterMark: 2 }
      );
    },
    Ke =
      "function" === typeof fetch &&
      "function" === typeof Request &&
      "function" === typeof Response,
    Qe = Ke && "function" === typeof ReadableStream,
    Je =
      Ke &&
      ("function" === typeof TextEncoder
        ? ((Ze = new TextEncoder()), (e) => Ze.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
  var Ze;
  const et = function (e) {
      try {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return !!e(...n);
      } catch (i) {
        return !1;
      }
    },
    tt =
      Qe &&
      et(() => {
        let e = !1;
        const t = new Request(be.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      }),
    nt = Qe && et(() => G.isReadableStream(new Response("").body)),
    rt = { stream: nt && ((e) => e.body) };
  var it;
  Ke &&
    ((it = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !rt[e] &&
        (rt[e] = G.isFunction(it[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new J(
                `Response type '${e}' is not supported`,
                J.ERR_NOT_SUPPORT,
                n
              );
            });
    }));
  const at = async (e, t) => {
      const n = G.toFiniteNumber(e.getContentLength());
      return null == n
        ? (async (e) => {
            if (null == e) return 0;
            if (G.isBlob(e)) return e.size;
            if (G.isSpecCompliantForm(e)) {
              const t = new Request(be.origin, { method: "POST", body: e });
              return (await t.arrayBuffer()).byteLength;
            }
            return G.isArrayBufferView(e) || G.isArrayBuffer(e)
              ? e.byteLength
              : (G.isURLSearchParams(e) && (e += ""),
                G.isString(e) ? (await Je(e)).byteLength : void 0);
          })(t)
        : n;
    },
    ot =
      Ke &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: i,
          cancelToken: a,
          timeout: o,
          onDownloadProgress: l,
          onUploadProgress: s,
          responseType: c,
          headers: u,
          withCredentials: d = "same-origin",
          fetchOptions: f,
        } = Ve(e);
        c = c ? (c + "").toLowerCase() : "text";
        let p,
          h = qe([i, a && a.toAbortSignal()], o);
        const m =
          h &&
          h.unsubscribe &&
          (() => {
            h.unsubscribe();
          });
        let g;
        try {
          if (
            s &&
            tt &&
            "get" !== n &&
            "head" !== n &&
            0 !== (g = await at(u, r))
          ) {
            let e,
              n = new Request(t, { method: "POST", body: r, duplex: "half" });
            if (
              (G.isFormData(r) &&
                (e = n.headers.get("content-type")) &&
                u.setContentType(e),
              n.body)
            ) {
              const [e, t] = De(g, Ne(Ie(s)));
              r = Ye(n.body, 65536, e, t);
            }
          }
          G.isString(d) || (d = d ? "include" : "omit");
          const i = "credentials" in Request.prototype;
          p = new Request(t, {
            ...f,
            signal: h,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: i ? d : void 0,
          });
          let a = await fetch(p);
          const o = nt && ("stream" === c || "response" === c);
          if (nt && (l || (o && m))) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t) => {
              e[t] = a[t];
            });
            const t = G.toFiniteNumber(a.headers.get("content-length")),
              [n, r] = (l && De(t, Ne(Ie(l), !0))) || [];
            a = new Response(
              Ye(a.body, 65536, n, () => {
                r && r(), m && m();
              }),
              e
            );
          }
          c = c || "text";
          let y = await rt[G.findKey(rt, c) || "text"](a, e);
          return (
            !o && m && m(),
            await new Promise((t, n) => {
              Ae(t, n, {
                data: y,
                headers: je.from(a.headers),
                status: a.status,
                statusText: a.statusText,
                config: e,
                request: p,
              });
            })
          );
        } catch (y) {
          if (
            (m && m(),
            y && "TypeError" === y.name && /Load failed|fetch/i.test(y.message))
          )
            throw Object.assign(new J("Network Error", J.ERR_NETWORK, e, p), {
              cause: y.cause || y,
            });
          throw J.from(y, y && y.code, e, p);
        }
      }),
    lt = { http: null, xhr: We, fetch: ot };
  G.forEach(lt, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (n) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const st = (e) => `- ${e}`,
    ct = (e) => G.isFunction(e) || null === e || !1 === e,
    ut = (e) => {
      e = G.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let a = 0; a < t; a++) {
        let t;
        if (
          ((n = e[a]),
          (r = n),
          !ct(n) && ((r = lt[(t = String(n)).toLowerCase()]), void 0 === r))
        )
          throw new J(`Unknown adapter '${t}'`);
        if (r) break;
        i[t || "#" + a] = r;
      }
      if (!r) {
        const e = Object.entries(i).map((e) => {
          let [t, n] = e;
          return (
            `adapter ${t} ` +
            (!1 === n
              ? "is not supported by the environment"
              : "is not available in the build")
          );
        });
        let n = t
          ? e.length > 1
            ? "since :\n" + e.map(st).join("\n")
            : " " + st(e[0])
          : "as no adapter specified";
        throw new J(
          "There is no suitable adapter to dispatch the request " + n,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function dt(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Pe(null, e);
  }
  function ft(e) {
    dt(e),
      (e.headers = je.from(e.headers)),
      (e.data = Oe.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return ut(e.adapter || xe.adapter)(e).then(
      function (t) {
        return (
          dt(e),
          (t.data = Oe.call(e, e.transformResponse, t)),
          (t.headers = je.from(t.headers)),
          t
        );
      },
      function (t) {
        return (
          ze(t) ||
            (dt(e),
            t &&
              t.response &&
              ((t.response.data = Oe.call(e, e.transformResponse, t.response)),
              (t.response.headers = je.from(t.response.headers)))),
          Promise.reject(t)
        );
      }
    );
  }
  const pt = "1.9.0",
    ht = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      ht[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const mt = {};
  (ht.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.9.0] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, i, a) => {
      if (!1 === e)
        throw new J(
          r(i, " has been removed" + (t ? " in " + t : "")),
          J.ERR_DEPRECATED
        );
      return (
        t &&
          !mt[i] &&
          ((mt[i] = !0),
          console.warn(
            r(
              i,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, i, a)
      );
    };
  }),
    (ht.spelling = function (e) {
      return (t, n) => (
        console.warn(`${n} is likely a misspelling of ${e}`), !0
      );
    });
  const gt = {
      assertOptions: function (e, t, n) {
        if ("object" !== typeof e)
          throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let i = r.length;
        for (; i-- > 0; ) {
          const a = r[i],
            o = t[a];
          if (o) {
            const t = e[a],
              n = void 0 === t || o(t, a, e);
            if (!0 !== n)
              throw new J(
                "option " + a + " must be " + n,
                J.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new J("Unknown option " + a, J.ERR_BAD_OPTION);
        }
      },
      validators: ht,
    },
    yt = gt.validators;
  class bt {
    constructor(e) {
      (this.defaults = e || {}),
        (this.interceptors = { request: new ue(), response: new ue() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error) {
          let e = {};
          Error.captureStackTrace
            ? Error.captureStackTrace(e)
            : (e = new Error());
          const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? t &&
                !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                (n.stack += "\n" + t)
              : (n.stack = t);
          } catch (r) {}
        }
        throw n;
      }
    }
    _request(e, t) {
      "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = Ue(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: i } = t;
      void 0 !== n &&
        gt.assertOptions(
          n,
          {
            silentJSONParsing: yt.transitional(yt.boolean),
            forcedJSONParsing: yt.transitional(yt.boolean),
            clarifyTimeoutError: yt.transitional(yt.boolean),
          },
          !1
        ),
        null != r &&
          (G.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : gt.assertOptions(
                r,
                { encode: yt.function, serialize: yt.function },
                !0
              )),
        void 0 !== t.allowAbsoluteUrls ||
          (void 0 !== this.defaults.allowAbsoluteUrls
            ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
            : (t.allowAbsoluteUrls = !0)),
        gt.assertOptions(
          t,
          {
            baseUrl: yt.spelling("baseURL"),
            withXsrfToken: yt.spelling("withXSRFToken"),
          },
          !0
        ),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase());
      let a = i && G.merge(i.common, i[t.method]);
      i &&
        G.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete i[e];
          }
        ),
        (t.headers = je.concat(a, i));
      const o = [];
      let l = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((l = l && e.synchronous), o.unshift(e.fulfilled, e.rejected));
      });
      const s = [];
      let c;
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      let u,
        d = 0;
      if (!l) {
        const e = [ft.bind(this), void 0];
        for (
          e.unshift.apply(e, o),
            e.push.apply(e, s),
            u = e.length,
            c = Promise.resolve(t);
          d < u;

        )
          c = c.then(e[d++], e[d++]);
        return c;
      }
      u = o.length;
      let f = t;
      for (d = 0; d < u; ) {
        const e = o[d++],
          t = o[d++];
        try {
          f = e(f);
        } catch (p) {
          t.call(this, p);
          break;
        }
      }
      try {
        c = ft.call(this, f);
      } catch (p) {
        return Promise.reject(p);
      }
      for (d = 0, u = s.length; d < u; ) c = c.then(s[d++], s[d++]);
      return c;
    }
    getUri(e) {
      return ce(
        $e((e = Ue(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer
      );
    }
  }
  G.forEach(["delete", "get", "head", "options"], function (e) {
    bt.prototype[e] = function (t, n) {
      return this.request(
        Ue(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
    G.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, i) {
          return this.request(
            Ue(i || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      (bt.prototype[e] = t()), (bt.prototype[e + "Form"] = t(!0));
    });
  const vt = bt;
  class wt {
    constructor(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      let t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      const n = this;
      this.promise.then((e) => {
        if (!n._listeners) return;
        let t = n._listeners.length;
        for (; t-- > 0; ) n._listeners[t](e);
        n._listeners = null;
      }),
        (this.promise.then = (e) => {
          let t;
          const r = new Promise((e) => {
            n.subscribe(e), (t = e);
          }).then(e);
          return (
            (r.cancel = function () {
              n.unsubscribe(t);
            }),
            r
          );
        }),
        e(function (e, r, i) {
          n.reason || ((n.reason = new Pe(e, r, i)), t(n.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(e) {
      this.reason
        ? e(this.reason)
        : this._listeners
        ? this._listeners.push(e)
        : (this._listeners = [e]);
    }
    unsubscribe(e) {
      if (!this._listeners) return;
      const t = this._listeners.indexOf(e);
      -1 !== t && this._listeners.splice(t, 1);
    }
    toAbortSignal() {
      const e = new AbortController(),
        t = (t) => {
          e.abort(t);
        };
      return (
        this.subscribe(t),
        (e.signal.unsubscribe = () => this.unsubscribe(t)),
        e.signal
      );
    }
    static source() {
      let e;
      return {
        token: new wt(function (t) {
          e = t;
        }),
        cancel: e,
      };
    }
  }
  const xt = wt;
  const St = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(St).forEach((e) => {
    let [t, n] = e;
    St[n] = t;
  });
  const kt = St;
  const Ct = (function e(t) {
    const n = new vt(t),
      r = l(vt.prototype.request, n);
    return (
      G.extend(r, vt.prototype, n, { allOwnKeys: !0 }),
      G.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(Ue(t, n));
      }),
      r
    );
  })(xe);
  (Ct.Axios = vt),
    (Ct.CanceledError = Pe),
    (Ct.CancelToken = xt),
    (Ct.isCancel = ze),
    (Ct.VERSION = pt),
    (Ct.toFormData = re),
    (Ct.AxiosError = J),
    (Ct.Cancel = Ct.CanceledError),
    (Ct.all = function (e) {
      return Promise.all(e);
    }),
    (Ct.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Ct.isAxiosError = function (e) {
      return G.isObject(e) && !0 === e.isAxiosError;
    }),
    (Ct.mergeConfig = Ue),
    (Ct.AxiosHeaders = je),
    (Ct.formToJSON = (e) => ve(G.isHTMLForm(e) ? new FormData(e) : e)),
    (Ct.getAdapter = ut),
    (Ct.HttpStatusCode = kt),
    (Ct.default = Ct);
  const Et = Ct;
  class _t {
    constructor() {
      this.instances = [];
    }
    addInstance(e) {
      let {
        id: t,
        x: n,
        y: r,
        w: i,
        h: a,
        label: o = "",
        color: l = "#00f",
      } = e;
      const s = { id: t, x: n, y: r, w: i, h: a, label: o, color: l };
      this.instances.push(s);
    }
    getAll() {
      return this.instances;
    }
    clearAll() {
      this.instances = [];
    }
    removeById(e) {
      this.instances = this.instances.filter((t) => t.id !== e);
    }
  }
  const Tt = new (class {
      constructor() {
        (this.selectedObjects = []), (this.listeners = []);
      }
      setSelection(e) {
        (this.selectedObjects = Array.isArray(e) ? e : [e]),
          this.notifyListeners();
      }
      getSelection() {
        return this.selectedObjects;
      }
      clearSelection() {
        (this.selectedObjects = []), this.notifyListeners();
      }
      onChange(e) {
        this.listeners.push(e);
      }
      notifyListeners() {
        this.listeners.forEach((e) => e(this.selectedObjects));
      }
    })(),
    jt = (() => {
      let e = [],
        t = [];
      const n = (t) => e.find((e) => e.name === t),
        r = (t) => e.find((e) => e.name === t);
      function i(e, t) {
        if (e === t) return !0;
        const n = r(t);
        if (!n) return !1;
        for (let r of n.instances || []) if (i(e, r.ref)) return !0;
        return !1;
      }
      return {
        getCells: () => e,
        reset: () => {
          (e = []), (t = []);
        },
        addCell: (t) =>
          !n(t) && (e.push({ name: t, elements: [], instances: [] }), !0),
        addRectangle: function (e, t, r, i, a) {
          let o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
          const l = n(e);
          l &&
            l.elements.push({
              id: crypto.randomUUID(),
              type: "rectangle",
              x1: t,
              y1: r,
              x2: i,
              y2: a,
              layer: o,
            });
        },
        addText: function (e, t, r, i) {
          let a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
          const o = n(e);
          o &&
            o.elements.push({
              id: crypto.randomUUID(),
              type: "text",
              text: t,
              x: r,
              y: i,
              layer: a,
            });
        },
        addInstance: function (e, t, r, a) {
          let o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const l = n(e);
          if (
            (console.log("\ud83d\udca5 Adding instance to cell:", l), i(e, t))
          )
            console.warn(
              `\u274c Cannot insert ${t} into ${e} \u2014 would cause circular hierarchy`
            );
          else if (l) {
            const e = {
              id: crypto.randomUUID(),
              ref: t,
              x: r,
              y: a,
              rotation: o,
              scale: 1,
            };
            l.instances.push(e), console.log("\u2705 Added instance:", e);
          } else console.error("\u274c Cell not found:", e);
        },
        deleteElement: (e, t) => {
          const r = n(e);
          r && (r.elements = r.elements.filter((e) => e.id !== t));
        },
        deleteInstance: (e, t) => {
          const r = n(e);
          r && (r.instances = r.instances.filter((e) => e.id !== t));
        },
        editElement: (e, t, r) => {
          const i = n(e);
          if (i) {
            const e = i.elements.find((e) => e.id === t);
            e && Object.assign(e, r);
          }
        },
        editInstance: (e, t, r) => {
          const i = n(e);
          if (i) {
            const e = i.instances.find((e) => e.id === t);
            e && Object.assign(e, r);
          }
        },
        getCellByName: r,
        getActiveCellName: () => (t.length > 0 ? t[t.length - 1] : null),
        showAsTop: (r) => {
          n(r) ||
            (e.push({ name: r, elements: [], instances: [] }),
            console.warn(`\ud83d\udce6 Dynamically added cell for: ${r}`)),
            t.push(r),
            console.log("\ud83d\udd01 Switched to cell:", r);
        },
        exitShowAsTop: () => {
          if (t.length > 1) {
            const e = t.pop();
            console.log(
              "\ud83d\udd19 Exited cell:",
              e,
              "\u27a1\ufe0f Now in:",
              t.at(-1)
            );
          } else
            console.warn("\u26a0\ufe0f Already at TOP, can't go back further.");
        },
        getAllCellNames: function () {
          return Object.values(e).map((e) => e.name);
        },
      };
    })();
  "undefined" !== typeof window && (window.layoutEngine = jt);
  const Ot = jt;
  const zt = new (class {
    constructor() {
      this.instances = [];
    }
    setInstances(e) {
      this.instances = e;
    }
    getAll() {
      return this.instances;
    }
    buildTree() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "TOP";
      const t = new Set(),
        n = (e) => {
          var r;
          if (t.has(e)) return null;
          t.add(e);
          const i =
            null === (r = window.layoutEngine) || void 0 === r
              ? void 0
              : r.getCellByName(e);
          return i
            ? {
                name: i.name,
                children: (i.instances || [])
                  .map((e) => n(e.ref))
                  .filter(Boolean),
              }
            : null;
        },
        r = n(e);
      var i;
      r &&
        (null === (i = window.ProjectManager) ||
          void 0 === i ||
          i.setTopCellName(e));
      return r ? [r] : [];
    }
    getByName(e) {
      return this.instances.find((t) => t.name === e);
    }
  })();
  class Rt {
    constructor(e) {
      let {
        id: t,
        text: n = "",
        x: r = 0,
        y: i = 0,
        layerId: a = null,
        color: o = "#ffffff",
        selected: l = !1,
        fontSize: s = 12,
        fontType: c = "monospace",
        rotation: u = 0,
        justification: d = "centerleft",
      } = e;
      (this.id = t),
        (this.type = "label"),
        (this.text = n),
        (this.x = r),
        (this.y = i),
        (this.layerId = a),
        (this.color = o),
        (this.selected = l),
        (this.fontSize = s),
        (this.fontType = c),
        (this.rotation = u),
        (this.justification = d);
    }
  }
  const Pt = new (class {
      constructor() {
        this.labels = {};
      }
      addLabel(e, t, n, r) {
        let i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          a =
            arguments.length > 5 && void 0 !== arguments[5]
              ? arguments[5]
              : "#ffffff",
          o =
            arguments.length > 6 && void 0 !== arguments[6]
              ? arguments[6]
              : "monospace",
          l =
            arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          s =
            arguments.length > 8 && void 0 !== arguments[8]
              ? arguments[8]
              : "centerleft";
        const c = Date.now() + Math.random(),
          u = new Rt({
            id: c,
            text: i,
            x: n,
            y: r,
            layerId: t,
            color: a,
            fontType: o,
            rotation: l,
            justification: s,
          });
        this.labels[e] || (this.labels[e] = {}),
          this.labels[e][t] || (this.labels[e][t] = []),
          this.labels[e][t].push(u);
        const d = window.layoutEngine.getCellByName(e);
        return d && ((d.elements = d.elements || []), d.elements.push(u)), u;
      }
      getAllLabels() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t = [];
        if (!e) return t;
        const n = this.labels[e] || {};
        for (const r in n) {
          const e = n[r];
          for (const n of e)
            n &&
              "string" === typeof n.text &&
              "" !== n.text.trim() &&
              t.push(n);
        }
        return t;
      }
      getAllLabelsRaw() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return e ? Object.values(this.labels[e]).flat() : [];
      }
      deleteLabel(e, t, n) {
        this.labels[e] &&
          this.labels[e][t] &&
          (this.labels[e][t] = this.labels[e][t].filter((e) => e.id !== n));
      }
      setAllLabels(e) {
        this.labels = {};
        for (let t of e)
          this.labels[t.layerId] || (this.labels[t.layerId] = []),
            this.labels[t.layerId].push(new Rt({ ...t }));
      }
      getLabelById(e) {
        for (const t in this.labels) {
          const n = this.labels[t].find((t) => t.id === e);
          if (n) return n;
        }
        return null;
      }
      toggleLabelVisibility(e) {
        for (const t in this.labels) {
          const n = this.labels[t].find((t) => t.id === e);
          if (n) return void (n.visible = !n.visible);
        }
      }
      updateLabelText(e, t) {
        for (const n in this.labels) {
          const r = this.labels[n].find((t) => t.id === e);
          if (r) return void (r.text = t);
        }
      }
      toggleLabelLock(e) {
        for (const t in this.labels) {
          const n = this.labels[t].find((t) => t.id === e);
          if (n) return void (n.locked = !n.locked);
        }
      }
      toggleAllVisibility(e) {
        for (const t in this.labels)
          this.labels[t].forEach((t) => (t.visible = e));
      }
      toggleAllLock(e) {
        for (const t in this.labels)
          this.labels[t].forEach((t) => (t.locked = e));
      }
      deleteAllLabels() {
        this.labels = {};
      }
      updateColorByLayer(e, t) {
        this.labels[e] &&
          this.labels[e].forEach((e) => {
            e.color = t;
          });
      }
      updateLabelRotation(e, t) {
        for (const n in this.labels) {
          const r = this.labels[n].find((t) => t.id === e);
          if (r)
            return (
              (r.rotation = t),
              void console.log(`Rotation set to ${t} for label ${e}`)
            );
        }
      }
      updateLabelFontType(e, t) {
        for (const n in this.labels) {
          const r = this.labels[n].find((t) => t.id === e);
          if (r) return void (r.fontType = t);
        }
      }
      updateLabelJustification(e, t) {
        const n = [
          "upperleft",
          "upperright",
          "lowerleft",
          "lowerright",
          "center",
          "centerleft",
          "centerright",
        ];
        if (n.includes(t))
          for (const r in this.labels)
            for (const n in this.labels[r]) {
              const i = this.labels[r][n].find((t) => t.id === e);
              if (i)
                return (
                  (i.justification = t),
                  void console.log(`Justification set to ${t} for label ${e}`)
                );
            }
        else
          console.warn(
            `Invalid justification: ${t}. Valid options are: ${n.join(", ")}`
          );
      }
      drawSingle(e, t) {
        e.save(),
          (e.fillStyle = t.color),
          (e.font = `${t.fontSize}px monospace`),
          e.fillText(t.text, t.x, t.y);
        (e.strokeStyle = "#00ff00"),
          (e.lineWidth = 1),
          e.beginPath(),
          e.moveTo(t.x - 5, t.y),
          e.lineTo(t.x + 5, t.y),
          e.moveTo(t.x, t.y - 5),
          e.lineTo(t.x, t.y + 5),
          e.stroke(),
          e.restore();
      }
      drawAllLabels(e, t, n, r) {
        let i =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        e.save(), e.translate(t, n), e.scale(r, r);
        const a = this.getAllLabels(i);
        for (let o of a)
          if (!1 !== o.visible) {
            if (
              (e.save(),
              (e.fillStyle = o.color),
              (e.font = `${o.fontSize}px ${o.fontType}`),
              "upperleft" === o.justification
                ? ((e.textAlign = "left"), (e.textBaseline = "top"))
                : "upperright" === o.justification
                ? ((e.textAlign = "right"), (e.textBaseline = "top"))
                : "lowerleft" === o.justification
                ? ((e.textAlign = "left"), (e.textBaseline = "bottom"))
                : "lowerright" === o.justification
                ? ((e.textAlign = "right"), (e.textBaseline = "bottom"))
                : "center" === o.justification
                ? ((e.textAlign = "center"), (e.textBaseline = "middle"))
                : "centerleft" === o.justification
                ? ((e.textAlign = "left"), (e.textBaseline = "middle"))
                : "centerright" === o.justification
                ? ((e.textAlign = "right"), (e.textBaseline = "middle"))
                : ((e.textAlign = "left"), (e.textBaseline = "alphabetic")),
              e.fillText(o.text, o.x, o.y),
              o.text.length >= 1)
            ) {
              e.restore(), e.save(), e.translate(o.x, o.y);
              const t = 5;
              (e.strokeStyle = "#00ff00"),
                (e.lineWidth = 1),
                e.beginPath(),
                e.moveTo(-t, 0),
                e.lineTo(t, 0),
                e.moveTo(0, -t),
                e.lineTo(0, t),
                e.stroke(),
                e.restore(),
                e.save();
            }
            if ((e.translate(t, n), e.scale(r, r), o.selected)) {
              const t = o.text,
                n = o.fontSize,
                i = e.measureText(t).width,
                a = n;
              let l = o.x,
                s = o.y;
              switch (o.justification) {
                case "upperleft":
                default:
                  break;
                case "upperright":
                  l -= i;
                  break;
                case "lowerleft":
                  s -= a;
                  break;
                case "lowerright":
                  (l -= i), (s -= a);
                  break;
                case "center":
                  (l -= i / 2), (s -= a / 2);
                  break;
                case "centerleft":
                  s -= a / 2;
                  break;
                case "centerright":
                  (l -= i), (s -= a / 2);
              }
              (e.strokeStyle = "#ffffff"),
                (e.lineWidth = 2 / r),
                e.setLineDash([4, 2]),
                e.strokeRect(l - 4, s - 2, i + 8, a + 8),
                e.setLineDash([]);
            }
            e.restore();
          }
        e.restore();
      }
      clearAll() {
        this.labels = {};
      }
      getDragBoundingBox(e, t) {
        const n = t.measureText(e.text).width,
          r = e.fontSize;
        let i = e.x,
          a = e.y;
        switch (e.justification) {
          case "upperleft":
            break;
          case "upperright":
            i -= n;
            break;
          case "lowerleft":
            a -= r;
            break;
          case "lowerright":
            (i -= n), (a -= r);
            break;
          case "center":
            (i -= n / 2), (a -= r / 2);
            break;
          case "centerleft":
            a -= r / 2;
            break;
          case "centerright":
            (i -= n), (a -= r / 2);
        }
        const o = i - 4,
          l = a - 2,
          s = i + n + 4,
          c = a + r + 6,
          u = e.x - 5,
          d = e.y - 5,
          f = e.x + 5,
          p = e.y + 5;
        return {
          left: Math.min(o, u),
          top: Math.min(l, d),
          right: Math.max(s, f),
          bottom: Math.max(c, p),
        };
      }
    })(),
    At = Pt;
  let Mt = {};
  function Lt(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    if (!e) return "rgba(0,0,0,0.4)";
    if (!e.startsWith("#")) {
      const t = document.createElement("canvas").getContext("2d");
      (t.fillStyle = e), (e = t.fillStyle);
    }
    const n = parseInt(e.replace("#", ""), 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${255 & n}, ${t})`;
  }
  const Nt = {
      addRectangle: function (e, t, n, r, i, a) {
        var o, l;
        let s =
          arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
        const c = {
          id: s.id || Date.now(),
          type: "rectangle",
          x: n,
          y: r,
          width: i,
          height: a,
          selected: !1,
          layerId: t,
          rotation: s.rotation || 0,
          layerNumber: null !== (o = s.layerNumber) && void 0 !== o ? o : 1,
          datatypeNumber:
            null !== (l = s.datatypeNumber) && void 0 !== l ? l : 0,
          ...s,
        };
        Mt[e] || (Mt[e] = {}), Mt[e][t] || (Mt[e][t] = []);
        const u = Mt[e][t].some((e) => e.id === c.id);
        u || Mt[e][t].push(c);
        const d = Ot.getCellByName(e);
        d &&
          !s.skipElement &&
          ((d.elements = d.elements || []),
          d.elements.push({ ...c, type: "rectangle" }));
      },
      getAllInstances: () => Mt,
      updateColorByLayer(e, t) {
        for (const n in Mt)
          Mt[n][e] &&
            Mt[n][e].forEach((e) => {
              e.fill = t;
            });
      },
      setAllInstances: (e) => {
        Mt = JSON.parse(JSON.stringify(e));
      },
      getInstancesByLayer: (e) => Mt[e] || [],
      getInstancesByCellAndLayer: (e, t) => {
        var n;
        return (null === (n = Mt[e]) || void 0 === n ? void 0 : n[t]) || [];
      },
      drawSingle(e, t) {
        let n,
          r,
          i,
          a,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        void 0 !== t.x1 && void 0 !== t.y1
          ? ((n = t.x1), (r = t.y1), (i = t.x2 - t.x1), (a = t.y2 - t.y1))
          : ((n = t.x), (r = t.y), (i = t.width), (a = t.height)),
          e.beginPath(),
          (e.fillStyle = t.fill || "rgba(0,255,0,0.3)"),
          (e.strokeStyle = t.stroke || "green"),
          (e.lineWidth = 1 / o);
        const l = n + i / 2,
          s = r + a / 2;
        e.save(),
          e.translate(l, s),
          e.rotate(((t.rotation || 0) * Math.PI) / 180),
          e.translate(-l, -s),
          e.rect(n, r, i, a),
          e.fill(),
          e.stroke(),
          e.restore();
      },
      drawAll: (e, t, n, r, i, a) => {
        e.save(), e.translate(t, n), e.scale(r, r);
        const o = Mt[i] || {};
        for (const l in o) {
          const t = o[l];
          for (const n of t) {
            e.beginPath(),
              (e.fillStyle = n.fill),
              (e.strokeStyle = n.stroke),
              (e.lineWidth = 1 / r);
            const t = n.x + n.width / 2,
              i = n.y + n.height / 2;
            e.save(),
              e.translate(t, i),
              e.rotate(((n.rotation || 0) * Math.PI) / 180),
              e.translate(-t, -i),
              e.rect(n.x, n.y, n.width, n.height),
              e.fill(),
              e.stroke(),
              e.restore();
          }
        }
        a &&
          (e.beginPath(),
          e.setLineDash([4, 2]),
          (e.strokeStyle = "#fff"),
          (e.lineWidth = 1 / r),
          e.rect(a.x, a.y, a.width, a.height),
          e.stroke(),
          e.setLineDash([])),
          e.restore();
      },
      deleteRectangle: function (e, t, n) {
        Mt[e] && Mt[e][t] && (Mt[e][t] = Mt[e][t].filter((e) => e.id !== n));
      },
    },
    Dt = Nt,
    It = JSON.parse(
      '{"Z":[{"color":"#F96109","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"NW","layer_number":"1","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"horizontal_lines"}},{"color":"#DCC275","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"PW","layer_number":"2","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"diagonal_lines"}},{"color":"#54D32A","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"NP","layer_number":"3","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"vertical_lines"}},{"color":"#99BBBB","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"PP","layer_number":"4","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.93,"type":"dotted"}},{"color":"#D12DBF","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"Diff","layer_number":"5","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.33,"type":"cross"}},{"color":"#1E0A9B","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"Poly","layer_number":"6","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"empty_fill"}},{"color":"#CEEA41","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"CA","layer_number":"7","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"empty_fill"}},{"color":"#6F7814","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"CA","layer_number":"7","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"horizontal_lines"}},{"color":"#92E98A","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"CB","layer_number":"8","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"dotted"}},{"color":"#2188A7","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"CB","layer_number":"8","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"diagonal_lines"}},{"color":"#5648A7","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"M0","layer_number":"9","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"dotted"}},{"color":"#96B19E","datatype_name":"drawingA","datatype_number":"1","editable":true,"layer_name":"M0","layer_number":"9","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"empty_fill"}},{"color":"#130F70","datatype_name":"drawingB","datatype_number":"2","editable":true,"layer_name":"M0","layer_number":"9","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"diagonal_lines"}},{"color":"#D770FC","datatype_name":"pin","datatype_number":"3","editable":true,"layer_name":"M0","layer_number":"9","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"empty_fill"}},{"color":"#3CC396","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"M0","layer_number":"9","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"empty_fill"}},{"color":"#884048","datatype_name":"fill","datatype_number":"5","editable":true,"layer_name":"M0","layer_number":"9","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"cross"}},{"color":"#63EA88","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"M1","layer_number":"11","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"vertical_lines"}},{"color":"#573BD0","datatype_name":"drawingA","datatype_number":"1","editable":true,"layer_name":"M1","layer_number":"11","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"horizontal_lines"}},{"color":"#5B7AE3","datatype_name":"drawingB","datatype_number":"2","editable":true,"layer_name":"M1","layer_number":"11","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"dotted"}},{"color":"#530A87","datatype_name":"pin","datatype_number":"3","editable":true,"layer_name":"M1","layer_number":"11","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"diagonal_lines"}},{"color":"#42A5F0","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"M1","layer_number":"11","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"diagonal_lines"}},{"color":"#FFEBE9","datatype_name":"fill","datatype_number":"5","editable":true,"layer_name":"M1","layer_number":"11","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"dotted"}},{"color":"#8762F5","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"M2","layer_number":"13","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"empty_fill"}},{"color":"#FE529F","datatype_name":"drawingA","datatype_number":"1","editable":true,"layer_name":"M2","layer_number":"13","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"empty_fill"}},{"color":"#6F2ED7","datatype_name":"drawingB","datatype_number":"2","editable":true,"layer_name":"M2","layer_number":"13","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"vertical_lines"}},{"color":"#C1B750","datatype_name":"pin","datatype_number":"3","editable":true,"layer_name":"M2","layer_number":"13","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"cross"}},{"color":"#4C08D0","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"M2","layer_number":"13","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"rev_diagonal_lines"}},{"color":"#9BF427","datatype_name":"fill","datatype_number":"5","editable":true,"layer_name":"M2","layer_number":"13","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"empty_fill"}},{"color":"#C718EB","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"M3","layer_number":"15","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.87,"type":"diagonal_lines"}},{"color":"#763AD2","datatype_name":"pin","datatype_number":"3","editable":true,"layer_name":"M3","layer_number":"15","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"horizontal_lines"}},{"color":"#F83A8F","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"M3","layer_number":"15","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.74,"type":"rev_diagonal_lines"}},{"color":"#BB55F3","datatype_name":"fill","datatype_number":"5","editable":true,"layer_name":"M3","layer_number":"15","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"vertical_lines"}},{"color":"#41B2D3","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"M4","layer_number":"17","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"horizontal_lines"}},{"color":"#FBA6B0","datatype_name":"pin","datatype_number":"3","editable":true,"layer_name":"M4","layer_number":"17","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"vertical_lines"}},{"color":"#C18A57","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"M4","layer_number":"17","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"rev_diagonal_lines"}},{"color":"#EEBC41","datatype_name":"fill","datatype_number":"5","editable":true,"layer_name":"M4","layer_number":"17","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"diagonal_lines"}},{"color":"#736C82","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"M5","layer_number":"19","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"rev_diagonal_lines"}},{"color":"#382A9E","datatype_name":"pin","datatype_number":"3","editable":true,"layer_name":"M5","layer_number":"19","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"vertical_lines"}},{"color":"#E9E1A8","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"M5","layer_number":"19","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"rev_diagonal_lines"}},{"color":"#090967","datatype_name":"fill","datatype_number":"5","editable":true,"layer_name":"M5","layer_number":"19","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"rev_diagonal_lines"}},{"color":"#6DF36F","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"V1","layer_number":"10","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"empty_fill"}},{"color":"#DA4EC3","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"V1","layer_number":"10","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.9,"type":"dotted"}},{"color":"#B1CF9B","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"V2","layer_number":"12","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"cross"}},{"color":"#23081B","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"V2","layer_number":"12","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"cross"}},{"color":"#8A8BB3","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"V3","layer_number":"14","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"horizontal_lines"}},{"color":"#BC37C5","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"V3","layer_number":"14","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.74,"type":"horizontal_lines"}},{"color":"#AC534B","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"V4","layer_number":"16","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"vertical_lines"}},{"color":"#3F88CB","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"V4","layer_number":"16","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"cross"}},{"color":"#4EAA1C","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"V5","layer_number":"18","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"empty_fill"}},{"color":"#29ED9A","datatype_name":"obstruction","datatype_number":"4","editable":true,"layer_name":"V5","layer_number":"18","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"cross"}},{"color":"#AE3240","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"Fin","layer_number":"31","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"dotted"}},{"color":"#1C8ADD","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"OutL","layer_number":"32","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"horizontal_lines"}},{"color":"#E633C3","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"BBox","layer_number":"33","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.83,"type":"horizontal_lines"}},{"color":"#8DB00F","datatype_name":"drawing","datatype_number":"0","editable":true,"layer_name":"Text","layer_number":"34","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"vertical_lines"}},{"color":"#C36CBE","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker1","layer_number":"101","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0,"type":"dotted"}},{"color":"#B81570","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker2","layer_number":"102","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"empty_fill"}},{"color":"#36F809","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker3","layer_number":"103","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"diagonal_lines"}},{"color":"#5A6AA8","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker4","layer_number":"104","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"rev_diagonal_lines"}},{"color":"#5BD5CF","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker5","layer_number":"105","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":1,"type":"horizontal_lines"}},{"color":"#5D3875","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker6","layer_number":"106","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"vertical_lines"}},{"color":"#5965A4","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker7","layer_number":"107","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"rev_diagonal_lines"}},{"color":"#6B13F1","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker8","layer_number":"108","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"dotted"}},{"color":"#B8561F","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"Marker9","layer_number":"109","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"rev_diagonal_lines"}},{"color":"#5C7AFD","datatype_name":"drawing","datatype_number":"0","editable":false,"layer_name":"DRC","layer_number":"110","outline":{"type":"solid","width":"2px"},"pattern":{"opacity":0.5,"type":"horizontal_lines"}},{"boundaryColor":"#000000","color":"#5aaba2","contrast":0,"datatype_name":"NewDatatype1","datatype_number":1,"layer_name":"NewLayer7","layer_number":7,"pattern":{"opacity":1,"type":"solid"},"pixelate":0},{"boundaryColor":"#000000","color":"#399468","contrast":0,"datatype_name":"NewDatatype0","datatype_number":0,"layer_name":"NewLayer63","layer_number":63,"pattern":{"opacity":1,"type":"solid"},"pixelate":0},{"boundaryColor":"#000000","color":"#4ab860","contrast":0,"datatype_name":"NewDatatype3","datatype_number":3,"layer_name":"NewLayer7","layer_number":7,"pattern":{"opacity":1,"type":"solid"},"pixelate":0},{"boundaryColor":"#000000","color":"#6bd6a5","contrast":0,"datatype_name":"NewDatatype0","datatype_number":0,"layer_name":"NewLayer85","layer_number":85,"pattern":{"opacity":1,"type":"solid"},"pixelate":0},{"boundaryColor":"#000000","color":"#142576","contrast":0,"datatype_name":"NewDatatype0","datatype_number":0,"layer_name":"NewLayer100","layer_number":100,"pattern":{"opacity":1,"type":"solid"},"pixelate":0},{"boundaryColor":"#000000","color":"#319c78","contrast":0,"datatype_name":"NewDatatype1","datatype_number":1,"layer_name":"NewLayer1","layer_number":1,"pattern":{"opacity":1,"type":"solid"},"pixelate":0},{"boundaryColor":"#000000","color":"#7a3410","contrast":0,"datatype_name":"NewDatatype1","datatype_number":1,"layer_name":"NewLayer2","layer_number":2,"pattern":{"opacity":1,"type":"solid"},"pixelate":0},{"boundaryColor":"#000000","color":"#c48a88","contrast":0,"datatype_name":"NewDatatype1","datatype_number":1,"layer_name":"NewLayer3","layer_number":3,"pattern":{"opacity":1,"type":"solid"},"pixelate":0}]}'
    );
  const Bt = new (class {
      constructor() {
        (this.layers = It.Z || []),
          (this.visibilityMap = {}),
          (this.lockMap = {}),
          (this.editingMap = {}),
          (this.sortMode = "none"),
          (this.selectedLayers = []),
          this.layers.forEach((e) => {
            const t = this._getKey(e.layer_number, e.datatype_number);
            (this.visibilityMap[t] = !0),
              (this.lockMap[t] = !1),
              (this.editingMap[t] = !1);
          }),
          this.layers.length > 0 && (this.selectedLayers = [this.layers[0]]);
      }
      _getKey(e, t) {
        return `${e}:${t}`;
      }
      setSortMode(e) {
        this.sortMode = e;
      }
      getSortMode() {
        return this.sortMode;
      }
      _sortLayers(e) {
        return "name" === this.sortMode
          ? [...e].sort((e, t) =>
              (e.layer_name + e.datatype_name).localeCompare(
                t.layer_name + t.datatype_name
              )
            )
          : "number" === this.sortMode
          ? [...e].sort(
              (e, t) =>
                e.layer_number - t.layer_number ||
                e.datatype_number - t.datatype_number
            )
          : e;
      }
      getAllLayers() {
        return this._sortLayers(this.layers);
      }
      getGroupedLayers() {
        const e = {};
        return (
          this.getAllLayers().forEach((t) => {
            const n = `${t.layer_name} (L${t.layer_number})`;
            e[n] || (e[n] = []), e[n].push(t);
          }),
          e
        );
      }
      getLayerByNumber(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.layers.find(
          (n) =>
            parseInt(n.layer_number) === parseInt(e) &&
            parseInt(n.datatype_number) === parseInt(t)
        );
      }
      getLayerByNumbers(e, t) {
        return this.layers.find((n) => n.layer === e && n.datatype === t);
      }
      toggleVisibility(e) {
        const t = this._getKey(e.layer_number, e.datatype_number);
        this.visibilityMap[t] = !this.visibilityMap[t];
      }
      isLayerVisible(e, t) {
        var n;
        const r = this._getKey(e, t);
        return null === (n = this.visibilityMap[r]) || void 0 === n || n;
      }
      toggleLock(e) {
        const t = this._getKey(e.layer_number, e.datatype_number);
        this.lockMap[t] = !this.lockMap[t];
      }
      isLayerLocked(e, t) {
        var n;
        const r = this._getKey(e, t);
        return null !== (n = this.lockMap[r]) && void 0 !== n && n;
      }
      toggleEdit(e) {
        const t = this._getKey(e.layer_number, e.datatype_number);
        this.editingMap[t] = !this.editingMap[t];
      }
      isEditing(e) {
        var t;
        const n = this._getKey(e.layer_number, e.datatype_number);
        return null !== (t = this.editingMap[n]) && void 0 !== t && t;
      }
      updateLayer(e, t) {
        Object.assign(e, t);
      }
      moveLayerUp(e) {
        const t = this.layers.indexOf(e);
        t > 0 &&
          ([this.layers[t - 1], this.layers[t]] = [
            this.layers[t],
            this.layers[t - 1],
          ]);
      }
      moveLayerDown(e) {
        const t = this.layers.indexOf(e);
        t < this.layers.length - 1 &&
          ([this.layers[t], this.layers[t + 1]] = [
            this.layers[t + 1],
            this.layers[t],
          ]);
      }
      selectLayer(e) {
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
          this.selectedLayers.includes(e)
            ? (this.selectedLayers = this.selectedLayers.filter((t) => t !== e))
            : this.selectedLayers.push(e);
        } else this.selectedLayers = [e];
      }
      getSelectedLayers() {
        return this.selectedLayers;
      }
      clearSelection() {
        this.selectedLayers = [];
      }
      isLayerSelected(e) {
        return this.selectedLayers.includes(e);
      }
      updateColor(e, t) {
        e.color = t;
        const n = `${e.layer_number}:${e.datatype_number}`;
        Dt.updateColorByLayer(n, t),
          At.updateColorByLayer(n, t),
          window.canvasEngine && window.canvasEngine.draw();
      }
      updateOpacity(e, t) {
        e.opacity = t;
      }
      getSelectedLayerId() {
        const e = this.getSelectedLayers();
        if (0 === e.length) return null;
        const t = e[0];
        return `${t.layer_number}:${t.datatype_number}`;
      }
      getLayerById(e) {
        const [t, n] = e.split(":").map(Number);
        return this.layers.find(
          (e) => Number(e.layer_number) === t && Number(e.datatype_number) === n
        );
      }
      getLabelById(e) {
        for (const t in this.labels) {
          const n = this.labels[t].find((t) => t.id === e);
          if (n) return n;
        }
        return null;
      }
      reorder(e, t) {
        if (
          e < 0 ||
          t < 0 ||
          e >= this.layers.length ||
          t >= this.layers.length ||
          e === t
        )
          return;
        const n = this.layers.splice(e, 1)[0];
        this.layers.splice(t, 0, n);
      }
    })(),
    Ft = Bt;
  let $t = "Untitled_Design",
    Ht = null,
    Ut = "select",
    Vt = "top",
    Wt = null;
  const qt = {
    getDesignName: () => $t,
    setDesignName: (e) => {
      ($t = e), console.log("Design name set to:", $t);
    },
    getSelectedInstanceCell: () => Ht,
    getSelectedCell: () => Wt,
    setSelectedCell: (e) => {
      (Wt = e),
        (window.canvasEngine.selectedObjects = []),
        window.canvasEngine.draw();
    },
    getTopCellName: () => Vt,
    setTopCellName: (e) => {
      Vt = e;
    },
    setSelectedInstanceCell: (e) => {
      (Ht = e), console.log("Selected cell for instance:", Ht);
    },
    getTool: () => Ut,
    setTool: (e) => {
      (Ut = e), console.log("\ud83d\udee0\ufe0f Tool set to:", Ut);
    },
  };
  class Xt {
    constructor(e) {
      (this.engine = e),
        (this.moveMode = !1),
        (this.moveStart = null),
        (this.originalPositions = []),
        (this.isMultiMoveMode = !1);
    }
    snapToGrid(e) {
      const t = this.engine.gridSpacing || 20;
      return Math.round(e / t) * t;
    }
    handleMouseDown(e) {
      const t = (e.offsetX - this.engine.offsetX) / this.engine.scale,
        n = (e.offsetY - this.engine.offsetY) / this.engine.scale;
      (this.engine.isDrawing = !0),
        (this.engine.drawStart = { x: t, y: n }),
        (this.engine.isPanning = !1);
    }
    handleMouseMove(e) {
      const t = (e.offsetX - this.engine.offsetX) / this.engine.scale,
        n = (e.offsetY - this.engine.offsetY) / this.engine.scale,
        r = Math.min(this.engine.drawStart.x, t),
        i = Math.min(this.engine.drawStart.y, n),
        a = Math.abs(t - this.engine.drawStart.x),
        o = Math.abs(n - this.engine.drawStart.y);
      (this.engine.previewRect = {
        x: this.snapToGrid(r),
        y: this.snapToGrid(i),
        width: this.snapToGrid(a),
        height: this.snapToGrid(o),
      }),
        this.engine.draw();
    }
    handleMouseUp() {
      if (this.engine.pastingInProgress) return;
      if (!this.engine.previewRect) return;
      const { x: e, y: t, width: n, height: r } = this.engine.previewRect;
      if (Math.abs(n) < 1 || Math.abs(r) < 1)
        return (
          console.log("\u274c Ignored invalid rectangle (line or too small)"),
          (this.engine.previewRect = null),
          (this.engine.isDrawing = !1),
          (this.engine.drawStart = null),
          void this.engine.draw()
        );
      const i = this.snapToGrid(e),
        a = this.snapToGrid(t),
        o = this.snapToGrid(n),
        l = this.snapToGrid(r),
        s = Ft.getSelectedLayerId(),
        c = Ft.getLayerById(s);
      if (!c)
        return alert(
          "\u26a0\ufe0f Please select a valid layer before drawing."
        );
      const u = qt.getSelectedCell();
      Dt.addRectangle(u, s, i, a, o, l, {
        color: c.color,
        fill: Lt(c.color, 0.4),
        stroke: c.color,
        layerNumber: c.layer_number,
        datatypeNumber: c.datatype_number,
        layerName: c.layer_name,
      }),
        (this.engine.previewRect = null),
        (this.engine.isDrawing = !1),
        (this.engine.drawStart = null),
        this.engine.draw();
    }
    handleMoveMouse(e) {
      if (!this.moveMode || !this.originalPositions.length) return;
      const t = (e.offsetX - this.engine.offsetX) / this.engine.scale,
        n = (e.offsetY - this.engine.offsetY) / this.engine.scale;
      if (!this.moveStart) return void (this.moveStart = { x: t, y: n });
      const r = this.snapToGrid(t - this.moveStart.x),
        i = this.snapToGrid(n - this.moveStart.y);
      this.engine.selectedRects.forEach((e, t) => {
        (e.x = this.originalPositions[t].x + r),
          (e.y = this.originalPositions[t].y + i);
      }),
        this.engine.draw();
    }
    checkResizeCursor(e) {
      const t = (e.offsetX - this.engine.offsetX) / this.engine.scale,
        n = (e.offsetY - this.engine.offsetY) / this.engine.scale;
      (this.resizeTarget = null), (this.resizeEdge = null);
      for (let r of this.engine.selectedRects) {
        const e = 5 / this.engine.scale,
          i = r.x,
          a = r.x + r.width,
          o = r.y,
          l = r.y + r.height;
        if (this.isNear(t, i, e) && this.isNear(n, o, e))
          return (
            (this.engine.canvas.style.cursor = "nwse-resize"),
            (this.resizeTarget = r),
            void (this.resizeEdge = "top-left")
          );
        if (this.isNear(t, a, e) && this.isNear(n, o, e))
          return (
            (this.engine.canvas.style.cursor = "nesw-resize"),
            (this.resizeTarget = r),
            void (this.resizeEdge = "top-right")
          );
        if (this.isNear(t, i, e) && this.isNear(n, l, e))
          return (
            (this.engine.canvas.style.cursor = "nesw-resize"),
            (this.resizeTarget = r),
            void (this.resizeEdge = "bottom-left")
          );
        if (this.isNear(t, a, e) && this.isNear(n, l, e))
          return (
            (this.engine.canvas.style.cursor = "nwse-resize"),
            (this.resizeTarget = r),
            void (this.resizeEdge = "bottom-right")
          );
        if (this.isNear(t, i, e) && n >= o && n <= l)
          return (
            (this.engine.canvas.style.cursor = "ew-resize"),
            (this.resizeTarget = r),
            void (this.resizeEdge = "left")
          );
        if (this.isNear(t, a, e) && n >= o && n <= l)
          return (
            (this.engine.canvas.style.cursor = "ew-resize"),
            (this.resizeTarget = r),
            void (this.resizeEdge = "right")
          );
        if (this.isNear(n, o, e) && t >= i && t <= a)
          return (
            (this.engine.canvas.style.cursor = "ns-resize"),
            (this.resizeTarget = r),
            void (this.resizeEdge = "top")
          );
        if (this.isNear(n, l, e) && t >= i && t <= a)
          return (
            (this.engine.canvas.style.cursor = "ns-resize"),
            (this.resizeTarget = r),
            void (this.resizeEdge = "bottom")
          );
      }
      this.engine.canvas.style.cursor = "default";
    }
    isNear(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
      return Math.abs(e - t) <= n;
    }
    startResize(e) {
      if (!this.resizeTarget || !this.resizeEdge) return !1;
      const t = (e.offsetX - this.engine.offsetX) / this.engine.scale,
        n = (e.offsetY - this.engine.offsetY) / this.engine.scale;
      return (
        (this.startResizePos = { x: t, y: n }),
        (this.startResizeRect = { ...this.resizeTarget }),
        (this.isResizing = !0),
        !0
      );
    }
    performResize(e) {
      if (!this.isResizing || !this.resizeTarget) return;
      const t = (e.offsetX - this.engine.offsetX) / this.engine.scale,
        n = (e.offsetY - this.engine.offsetY) / this.engine.scale,
        r = this.snapToGrid(t - this.startResizePos.x),
        i = this.snapToGrid(n - this.startResizePos.y);
      "left" === this.resizeEdge
        ? ((this.resizeTarget.x = this.startResizeRect.x + r),
          (this.resizeTarget.width = this.startResizeRect.width - r))
        : "right" === this.resizeEdge
        ? (this.resizeTarget.width = this.startResizeRect.width + r)
        : "top" === this.resizeEdge
        ? ((this.resizeTarget.y = this.startResizeRect.y + i),
          (this.resizeTarget.height = this.startResizeRect.height - i))
        : "bottom" === this.resizeEdge
        ? (this.resizeTarget.height = this.startResizeRect.height + i)
        : "top-left" === this.resizeEdge
        ? ((this.resizeTarget.x = this.startResizeRect.x + r),
          (this.resizeTarget.width = this.startResizeRect.width - r),
          (this.resizeTarget.y = this.startResizeRect.y + i),
          (this.resizeTarget.height = this.startResizeRect.height - i))
        : "top-right" === this.resizeEdge
        ? ((this.resizeTarget.width = this.startResizeRect.width + r),
          (this.resizeTarget.y = this.startResizeRect.y + i),
          (this.resizeTarget.height = this.startResizeRect.height - i))
        : "bottom-left" === this.resizeEdge
        ? ((this.resizeTarget.x = this.startResizeRect.x + r),
          (this.resizeTarget.width = this.startResizeRect.width - r),
          (this.resizeTarget.height = this.startResizeRect.height + i))
        : "bottom-right" === this.resizeEdge &&
          ((this.resizeTarget.width = this.startResizeRect.width + r),
          (this.resizeTarget.height = this.startResizeRect.height + i)),
        this.engine.draw();
    }
    endResize() {
      (this.isResizing = !1),
        (this.resizeTarget = null),
        (this.resizeEdge = null);
    }
    isInsideRect(e, t, n) {
      return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height;
    }
    drawCursorRect(e, t, n, r, i) {
      if (!i) return;
      const a = 8 / r;
      e.save(),
        e.translate(t, n),
        e.scale(r, r),
        (e.strokeStyle = "red"),
        (e.lineWidth = 1 / r),
        e.strokeRect(i.x - a / 2, i.y - a / 2, a, a),
        e.restore();
    }
  }
  window.ToolManager = new (class {
    constructor() {
      this.currentTool = "select";
    }
    setTool(e) {
      if (((this.currentTool = e), window.canvasEngine)) {
        (window.canvasEngine.currentTool = e),
          (window.canvasEngine.isPanning = !1),
          (window.canvasEngine.isDrawing = !1),
          (window.canvasEngine.drawStart = null);
        const t = window.canvasEngine;
        t.previewRect && (t.previewRect = null),
          t.previewInstance && (t.previewInstance = null),
          t.draw(),
          setTimeout(() => {
            "function" === typeof window.canvasEngine.handleToolChange &&
              window.canvasEngine.handleToolChange(e);
          }, 0);
      }
      console.log(`\ud83d\udee0\ufe0f Tool switched to: ${e}`);
    }
    getCurrentTool() {
      return this.currentTool;
    }
  })();
  const Gt = window.ToolManager;
  class Yt {
    constructor(e) {
      (this.engine = e),
        (this.isTyping = !1),
        (this.typingLabel = null),
        (this.dragOffset = null);
    }
    snapToGrid(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
      return Math.round(e / t) * t;
    }
    handleMouseDown(e) {
      var t;
      const n = this.engine.canvas.getBoundingClientRect(),
        r = e.clientX - n.left,
        i = e.clientY - n.top,
        a = (r - this.engine.offsetX) / this.engine.scale,
        o = (i - this.engine.offsetY) / this.engine.scale,
        l = this.snapToGrid(a, this.engine.gridSpacing),
        s = this.snapToGrid(o, this.engine.gridSpacing),
        c = Ft.getSelectedLayerId(),
        u = Ft.getLayerById(c);
      if (!u)
        return void alert(
          "\u26a0\ufe0f Please select a valid layer to place label."
        );
      const d =
          null === (t = qt.getSelectedCell) || void 0 === t
            ? void 0
            : t.call(qt),
        f = At.addLabel(d, c, l, s, "", u.color);
      (this.isTyping = !0), (this.typingLabel = f), this.engine.draw();
    }
    handleKeyPress(e) {
      this.isTyping &&
        this.typingLabel &&
        (1 === e.key.length
          ? (this.typingLabel.text += e.key)
          : "Backspace" === e.key
          ? (this.typingLabel.text = this.typingLabel.text.slice(0, -1))
          : "Enter" === e.key &&
            ((this.isTyping = !1), (this.typingLabel = null)),
        this.engine.draw());
    }
    rotateSelectedLabels(e) {
      var t;
      if (
        null !== (t = this.engine.selectedLabels) &&
        void 0 !== t &&
        t.length
      ) {
        for (let t of this.engine.selectedLabels)
          t.rotation = ((t.rotation || 0) + e) % 360;
        this.engine.draw();
      }
    }
    drawBlinkingCursor(e, t, n, r, i) {
      if (!i) return;
      e.save(), e.translate(t, n), e.scale(r, r);
      Math.floor(Date.now() / 500) % 2 === 0 &&
        ((e.strokeStyle = "#00ffff"),
        (e.lineWidth = 1 / r),
        e.beginPath(),
        e.moveTo(i.x, i.y - 7),
        e.lineTo(i.x, i.y + 7),
        e.stroke()),
        e.restore();
    }
  }
  class Kt {
    constructor(e) {
      this.engine = e;
    }
    updatePreview(e) {
      const t = qt.getSelectedInstanceCell();
      if (!t) return;
      if (!Ot.getCellByName(t))
        return void console.warn("\u274c Cannot find cell for ref:", t);
      const { offsetX: n, offsetY: r, scale: i } = this.engine,
        a = this.engine.snapToGrid((e.offsetX - n) / i),
        o = this.engine.snapToGrid((e.offsetY - r) / i);
      (this.engine.previewInstance = { ref: t, x: a, y: o }),
        this.engine.draw();
    }
    finalizePlacement() {
      var e;
      if (!this.engine.previewInstance) return;
      const { ref: t, x: n, y: r } = this.engine.previewInstance,
        i = qt.getSelectedCell(),
        a = Ot.getCellByName(i),
        o = Ot.getCellByName(t),
        { offsetX: l, offsetY: s } =
          this.engine.getChildBoundingBoxCenterOffset(o),
        c = this.engine.snapToGrid(n + l),
        u = this.engine.snapToGrid(r + s),
        d = c - l,
        f = u - s;
      if (
        null !== a &&
        void 0 !== a &&
        null !== (e = a.instances) &&
        void 0 !== e &&
        e.some((e) => e.ref === t && e.x === d && e.y === f)
      )
        return (
          console.warn("\ud83d\uded1 Skipping duplicate instance placement"),
          (this.engine.previewInstance = null),
          void this.engine.draw()
        );
      Ot.addInstance(i, t, d, f),
        (this.engine.previewInstance = null),
        this.engine.draw();
    }
  }
  let Qt = null;
  function Jt(e) {
    Qt && Qt.handleGlobalKeyDown(e);
  }
  class Zt {
    constructor(e) {
      (this.canvas = e),
        (this.ctx = e.getContext("2d")),
        (this.dpr = window.devicePixelRatio || 1),
        (this.showGrid = !0),
        (this.offsetX = 0),
        (this.offsetY = 0),
        (this.scale = 1),
        (this.isPanning = !1),
        (this.isDragging = !1),
        (this.dragOffset = { x: 0, y: 0 }),
        (this.dragTarget = null),
        (this.gridSpacing = 20),
        (this.gridType = "line"),
        (this.labelHandler = new Yt(this)),
        (this.selectedObjects = []),
        (this.previewRect = null),
        (this.previewInstance = null),
        (this.gridColor = "#444"),
        (this.startPan = { x: 0, y: 0 }),
        this.setupCanvas(),
        (this.instanceManager = new _t()),
        (this.previewRect = null),
        (this.previewInstance = null),
        (this.selectedRects = []),
        (this.currentTool = "select"),
        (this.isDrawing = !1),
        (window.canvasEngine = this),
        (Qt = this),
        window.removeEventListener("keydown", Jt),
        window.addEventListener("keydown", Jt),
        (this.history = []),
        (this.future = []),
        (this.isPlacingInstance = !1),
        (this.instancePlacementHandler = new Kt(this)),
        (this.instanceHandler = new Kt(this)),
        (this.isDrawingRuler = !1),
        (this.rulerStart = null),
        (this.allRulers = []),
        (this.rulerLineColor = "white"),
        (this.rulerUnit = 20),
        (this.gridSize = 20),
        (this.unitScaleFactor = 1),
        (this.rulerValues = 10),
        (this.rulerUnitSymbol = "px"),
        (this.selectionBox = null),
        (this.isSelecting = !1),
        (this.selectionDragStart = null),
        (this.leftClickMarquee = !1),
        (this.doubleClickOnly = !1),
        (this.lastClickTime = 0),
        (this.drawStart = null),
        (this.pasteCooldown = !1),
        (this.lastPasteTime = 0),
        (this.handleGlobalKeyDownBound = this.handleGlobalKeyDown.bind(this)),
        (this._lastHoverPoint = { x: 0, y: 0 }),
        (this.dashOffset = 0),
        (this.animate = this.animate.bind(this)),
        requestAnimationFrame(this.animate),
        window.addEventListener("rotate-left", () => {
          this.rotateSelectedObjects(-90);
        }),
        window.addEventListener("rotate-right", () => {
          this.rotateSelectedObjects(90);
        }),
        (this.rectangleHandler = new Xt(this)),
        (this.currentTool = qt.getTool()),
        console.log("\ud83c\udfaf CanvasEngine currentTool:", this.currentTool),
        this.bindEvents(),
        this.draw();
    }
    setRulerValues(e) {
      (this.rulerValues = e), this.draw();
    }
    setRulerUnit(e, t) {
      (this.rulerUnit = e), (this.rulerUnitSymbol = t), this.draw();
    }
    setRulerLineColor(e) {
      (this.rulerLineColor = e), this.draw();
    }
    handleRulerMouseDown(e) {
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale;
      if (this.isDrawingRuler) {
        let e = t,
          r = n;
        if (this.rulerOnGrid) {
          const i = this.gridSize || 20;
          (e = Math.round(t / i) * i), (r = Math.round(n / i) * i);
        }
        if ("diagonal" === this.rulerLineMode && this.rulerOnGrid) {
          const t = e - this.rulerStart.x,
            n = r - this.rulerStart.y,
            i = Math.atan2(n, t),
            a = Math.hypot(t, n),
            o = this.gridSize || 20,
            l = a / o,
            s = Math.round(i / (Math.PI / 4)) * (Math.PI / 4),
            c = this.rulerStart.x + l * o * Math.cos(s),
            u = this.rulerStart.y + l * o * Math.sin(s);
          this.allRulers.push({
            points: [this.rulerStart, { x: c, y: u }],
            offset: { x: 0, y: 0 },
            id: this.allRulers.length,
          });
        } else if ("orthogonal" === this.rulerLineMode && this.rulerOnGrid) {
          const t = e - this.rulerStart.x,
            n = r - this.rulerStart.y,
            i = Math.atan2(n, t),
            a = Math.hypot(t, n),
            o = this.gridSize || 20,
            l = a / o,
            s = Math.round(i / (Math.PI / 2)) * (Math.PI / 2),
            c = this.rulerStart.x + l * o * Math.cos(s),
            u = this.rulerStart.y + l * o * Math.sin(s);
          this.allRulers.push({
            points: [this.rulerStart, { x: c, y: u }],
            offset: { x: 0, y: 0 },
            id: this.allRulers.length,
          });
        } else
          this.allRulers.push({
            points: [this.rulerStart, { x: e, y: r }],
            offset: { x: 0, y: 0 },
            id: this.allRulers.length,
          });
        (this.isDrawingRuler = !1), (this.rulerStart = null);
      } else {
        let e = t,
          r = n;
        if (this.rulerOnGrid) {
          const i = this.gridSize || 20;
          (e = Math.round(t / i) * i), (r = Math.round(n / i) * i);
        }
        (this.rulerStart = { x: e, y: r }), (this.isDrawingRuler = !0);
      }
      this.draw();
    }
    handleRulerMouseMove(e) {
      if ("ruler" === this.currentTool && this.isDrawingRuler) {
        const t = (e.offsetX - this.offsetX) / this.scale,
          n = (e.offsetY - this.offsetY) / this.scale;
        let r = t,
          i = n;
        if ("diagonal" === this.rulerLineMode) {
          const e = t - this.rulerStart.x,
            a = n - this.rulerStart.y,
            o = Math.atan2(a, e),
            l = Math.hypot(e, a),
            s = Math.round(o / (Math.PI / 4)) * (Math.PI / 4);
          (r = this.rulerStart.x + l * Math.cos(s)),
            (i = this.rulerStart.y + l * Math.sin(s));
        } else if ("orthogonal" === this.rulerLineMode) {
          const e = t - this.rulerStart.x,
            a = n - this.rulerStart.y,
            o = Math.atan2(a, e),
            l = Math.hypot(e, a),
            s = Math.round(o / (Math.PI / 2)) * (Math.PI / 2);
          (r = this.rulerStart.x + l * Math.cos(s)),
            (i = this.rulerStart.y + l * Math.sin(s));
        } else if (["5", "10", "15"].includes(this.rulerLineMode)) {
          const e = parseInt(this.rulerLineMode),
            a = t - this.rulerStart.x,
            o = n - this.rulerStart.y,
            l = Math.atan2(o, a),
            s = Math.hypot(a, o),
            c = Math.round(l / ((e * Math.PI) / 180)) * ((e * Math.PI) / 180);
          (r = this.rulerStart.x + s * Math.cos(c)),
            (i = this.rulerStart.y + s * Math.sin(c));
        }
        this.draw(), this.drawPreviewLine(this.rulerStart, { x: r, y: i });
      }
    }
    handleRulerMouseUp(e) {}
    drawPreviewLine(e, t) {
      if (!e || !t) return;
      const n = this.ctx;
      n.save(),
        n.translate(this.offsetX, this.offsetY),
        n.scale(this.scale, this.scale),
        (n.strokeStyle = "rgba(0, 255, 0, 0.7)"),
        (n.lineWidth = 1),
        n.setLineDash([5, 5]),
        n.beginPath(),
        n.moveTo(e.x, e.y),
        n.lineTo(t.x, t.y),
        n.stroke();
      const r = t.x - e.x,
        i = t.y - e.y,
        a = Math.hypot(r, i),
        o = (e.x + t.x) / 2,
        l = (e.y + t.y) / 2,
        s = (a * this.unitScaleFactor).toFixed(2),
        c = this.rulerUnitSymbol || "px";
      (n.fillStyle = "yellow"),
        (n.font = "12px Arial"),
        n.fillText(`${s} ${c}`, o + 8, l - 10),
        n.restore();
    }
    drawRulers() {
      const e = this.ctx;
      e.save(),
        e.translate(this.offsetX, this.offsetY),
        e.scale(this.scale, this.scale);
      for (let t of this.allRulers) {
        const e = t.points.map((e) => ({
          x: e.x + t.offset.x,
          y: e.y + t.offset.y,
        }));
        e.length > 0 && this.drawPlusIcon(e[0].x, e[0].y),
          e.length > 1 && this.drawPlusIcon(e[1].x, e[1].y),
          2 === e.length &&
            (this.drawLine(e[0], e[1]), this.drawTicks(e[0], e[1]));
      }
      e.restore();
    }
    drawPlusIcon(e, t) {
      const n = this.ctx;
      n.save(),
        (n.strokeStyle = "lime"),
        (n.lineWidth = 2),
        n.beginPath(),
        n.moveTo(e - 6, t),
        n.lineTo(e + 6, t),
        n.moveTo(e, t - 6),
        n.lineTo(e, t + 6),
        n.stroke(),
        n.restore();
    }
    drawLine(e, t) {
      const n = this.ctx;
      (n.strokeStyle = this.rulerLineColor || "white"),
        (n.lineWidth = 1),
        n.beginPath(),
        n.moveTo(e.x, e.y),
        n.lineTo(t.x, t.y),
        n.stroke();
    }
    drawTicks(e, t) {
      const n = this.ctx,
        r = this.rulerValues || 10,
        i = this.rulerUnitSymbol || "px",
        a = Math.atan2(t.y - e.y, t.x - e.x),
        o = Math.hypot(t.x - e.x, t.y - e.y),
        l = o / (r - 1);
      (n.strokeStyle = "yellow"),
        (n.fillStyle = "yellow"),
        (n.font = "12px Arial");
      for (let s = 0; s < r; s++) {
        const t = l * s,
          c = e.x + Math.cos(a) * t,
          u = e.y + Math.sin(a) * t,
          d = c + 5 * Math.cos(a + Math.PI / 2),
          f = u + 5 * Math.sin(a + Math.PI / 2),
          p = c + 5 * Math.cos(a - Math.PI / 2),
          h = u + 5 * Math.sin(a - Math.PI / 2);
        n.beginPath(), n.moveTo(d, f), n.lineTo(p, h), n.stroke();
        const m = (o / (r - 1)) * s * this.unitScaleFactor;
        n.fillText(`${m.toFixed(2)} ${i}`, c + 8, u);
      }
    }
    setupCanvas() {
      const e = this.canvas.getBoundingClientRect();
      (this.canvas.width = e.width * this.dpr),
        (this.canvas.height = e.height * this.dpr),
        this.ctx.scale(this.dpr, this.dpr),
        (this.offsetX = this.canvas.width / (2 * this.dpr)),
        (this.offsetY = this.canvas.height / (2 * this.dpr)),
        (this.canvas.style.cursor = "default");
    }
    bindEvents() {
      this.canvas.addEventListener("wheel", this.handleZoom.bind(this)),
        this.canvas.addEventListener(
          "mousedown",
          this.handleMouseDown.bind(this)
        ),
        this.canvas.addEventListener(
          "mousemove",
          this.handleMouseMove.bind(this)
        ),
        this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this)),
        window.addEventListener(
          "tool-changed",
          this.handleToolChange.bind(this)
        );
    }
    handleCopy() {
      this.selectedRects.length > 0 &&
        ((this.copiedRects = this.selectedRects.map((e) => ({
          ...JSON.parse(JSON.stringify(e)),
        }))),
        console.log("\ud83d\udccb Copied via icon:", this.copiedRects));
    }
    handlePaste() {
      var e;
      if (
        !this.lastClickForPaste ||
        null === (e = this.copiedRects) ||
        void 0 === e ||
        !e.length
      )
        return;
      const t = this.copiedRects[0],
        n = this.lastClickForPaste.x - t.x,
        r = this.lastClickForPaste.y - t.y,
        i = this.copiedRects.map((e) => {
          const t = {
            ...JSON.parse(JSON.stringify(e)),
            x: this.rectangleHandler.snapToGrid(e.x + n),
            y: this.rectangleHandler.snapToGrid(e.y + r),
            id: Date.now() + Math.random(),
            selected: !1,
          };
          return Dt.addRectangle(t.layerId, t.x, t.y, t.width, t.height, t), t;
        });
      (this.selectedRects = [...i]),
        this.draw(),
        console.log(
          "\ud83d\udce5 Pasted at last click:",
          this.lastClickForPaste
        );
    }
    handleZoom(e) {
      e.preventDefault();
      const t = this.canvas.getBoundingClientRect(),
        n = e.clientX - t.left,
        r = e.clientY - t.top,
        i = (n - this.offsetX) / this.scale,
        a = (r - this.offsetY) / this.scale,
        o = e.deltaY < 0 ? 1.1 : 1 / 1.1,
        l = Math.max(0.001, Math.min(100, this.scale * o));
      (this.offsetX = n - i * l),
        (this.offsetY = r - a * l),
        (this.scale = l),
        this.draw();
    }
    handleMouseDown(e) {
      this.lastClickForPaste = {
        x: (e.offsetX - this.offsetX) / this.scale,
        y: (e.offsetY - this.offsetY) / this.scale,
      };
      const t = window.ToolManager.getCurrentTool();
      if ("rectangle" === t)
        return (
          console.log("\ud83d\udd90\ufe0f Rectangle tool mouseDown"),
          (this.isDrawing = !0),
          (this.isDragging = !1),
          void this.rectangleHandler.handleMouseDown(e)
        );
      if ("label" === this.currentTool)
        return (
          (this.isDragging = !1), void this.labelHandler.handleMouseDown(e)
        );
      if ("instance" !== t)
        if ("ruler" !== t) {
          if ("select" === t) {
            if (
              (console.log("\ud83d\udd90\ufe0f Select tool mouseDown"),
              (this.isDrawing = !1),
              this.startResize(e))
            )
              return;
            this.handleSelectObject(e), this.startDrag(e), this.currentTool;
          }
        } else this.handleRulerMouseDown(e);
      else this.instanceHandler.finalizePlacement();
    }
    handleMouseMove(e) {
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale;
      (this.lastPointer = { x: t, y: n }),
        this.isMultiMoveMode
          ? this.updateMultiMoveFollow(e)
          : ("ruler" === this.currentTool &&
              this.isDrawingRuler &&
              this.handleRulerMouseMove(e),
            "rectangle" === this.currentTool && this.isDrawing
              ? this.rectangleHandler.handleMouseMove(e)
              : "instance" === this.currentTool
              ? this.instancePlacementHandler.updatePreview(e)
              : "select" === this.currentTool &&
                (this.isResizing
                  ? this.performResize(e)
                  : (this.checkResizeCursor(e), this.performDrag(e))));
    }
    handleMouseUp(e) {
      Gt.getCurrentTool();
      if (this.isMultiMoveMode) this.startMultiMoveFromClick(e);
      else {
        if (!this.rectangleHandler.moveMode)
          return "rectangle" === this.currentTool && this.isDrawing
            ? (this.rectangleHandler.handleMouseUp(),
              (this.isDrawing = !1),
              void (this.drawStart = null))
            : void ("instance" !== this.activeTool
                ? "select" === this.currentTool &&
                  ((this.isPanning = !1), this.stopDrag(), this.endResize())
                : this.instanceHandler.finalizePlacement(e));
        this.rectangleHandler.exitMultiMoveMode();
      }
    }
    handleToolChange(e) {
      (this.currentTool = e),
        (this.selectedRects = []),
        (this.selectedObjects = []),
        Tt.clearSelection(),
        this.draw();
    }
    animate() {
      (this.dashOffset += 1),
        this.dashOffset > 1e3 && (this.dashOffset = 0),
        this.draw(),
        requestAnimationFrame(this.animate);
    }
    handleGlobalKeyDown(e) {
      "INPUT" !== document.activeElement.tagName &&
        ("label" === this.currentTool && this.labelHandler.handleKeyPress(e),
        "Escape" === e.key &&
          (this.exitMultiMoveMode(),
          (this.currentTool = "select"),
          Gt.setTool("select"),
          window.dispatchEvent(
            new CustomEvent("tool-changed", { detail: "select" })
          ),
          (this.isDrawing = !1),
          (this.isDragging = !1),
          (this.drawStart = null),
          (this.selectedRects = []),
          (this.selectedLabels = []),
          this.draw()),
        "m" === e.key.toLowerCase() && this.enterMultiMoveMode(),
        "Delete" === e.key &&
          (window.canvasEngine.deleteSelectedObjects(), e.preventDefault()),
        (e.ctrlKey || e.metaKey) &&
          "c" === e.key.toLowerCase() &&
          (window.canvasEngine.copySelectedObjects(), e.preventDefault()),
        (e.ctrlKey || e.metaKey) &&
          "v" === e.key.toLowerCase() &&
          (window.canvasEngine.pasteCopiedObjects(), e.preventDefault()),
        (e.ctrlKey || e.metaKey) &&
          "z" === e.key.toLowerCase() &&
          (this.undo(), e.preventDefault()),
        (e.ctrlKey || e.metaKey) &&
          "y" === e.key.toLowerCase() &&
          (this.redo(), e.preventDefault()));
    }
    drawGrid() {
      const e = this.ctx,
        t = this.gridSpacing,
        n = this.canvas.width / this.dpr,
        r = this.canvas.height / this.dpr;
      e.save(),
        e.clearRect(0, 0, n, r),
        e.translate(this.offsetX, this.offsetY),
        e.scale(this.scale, this.scale);
      const i = -this.offsetX / this.scale,
        a = -this.offsetY / this.scale,
        o = i + n / this.scale,
        l = a + r / this.scale,
        s = Math.floor(i / t) * t,
        c = Math.floor(a / t) * t;
      if (
        (e.beginPath(),
        (e.lineWidth = 1 / this.scale),
        (e.strokeStyle = this.gridColor),
        "line" === this.gridType)
      ) {
        for (let n = s; n <= o; n += t) e.moveTo(n, a), e.lineTo(n, l);
        for (let n = c; n <= l; n += t) e.moveTo(i, n), e.lineTo(o, n);
        e.stroke();
      } else if ("dots" === this.gridType) {
        e.fillStyle = this.gridColor;
        const n = 1 / this.scale;
        for (let r = s; r <= o; r += t)
          for (let i = c; i <= l; i += t)
            e.beginPath(), e.arc(r, i, n, 0, 2 * Math.PI), e.fill();
      }
      e.restore();
    }
    setGridSpacing(e) {
      (this.gridSpacing = e), this.draw();
    }
    drawLabels() {
      const e = this.ctx;
      e.save(),
        e.translate(this.offsetX, this.offsetY),
        e.scale(this.scale, this.scale);
      const t = At.getAll();
      for (let n of t)
        At.isVisible(n) &&
          ((e.fillStyle = "yellow"),
          (e.font = "12px monospace"),
          e.fillText(n.text, n.x, n.y));
      e.restore();
    }
    startMarquee(e) {
      const t = Date.now(),
        n = t - this.lastClickTime < 300;
      this.lastClickTime = t;
      const r = (e.offsetX - this.offsetX) / this.scale,
        i = (e.offsetY - this.offsetY) / this.scale;
      (this.selectionDragStart = { x: r, y: i }),
        (this.selectionBox = null),
        (this.isSelecting = !1),
        (this.leftClickMarquee = 0 === e.button),
        (this.doubleClickOnly = n);
    }
    updateMarquee(e) {
      if (
        (this.leftClickMarquee || this.doubleClickOnly) &&
        "select" === Gt.getCurrentTool() &&
        !this.isDragging
      ) {
        const t = (e.offsetX - this.offsetX) / this.scale,
          n = (e.offsetY - this.offsetY) / this.scale,
          r = Math.abs(t - this.selectionDragStart.x),
          i = Math.abs(n - this.selectionDragStart.y);
        !this.isSelecting &&
          (r > 4 || i > 4) &&
          ((this.selectionBox = {
            x: this.selectionDragStart.x,
            y: this.selectionDragStart.y,
            width: 0,
            height: 0,
          }),
          (this.isSelecting = !0)),
          this.isSelecting &&
            this.selectionBox &&
            ((this.selectionBox.width = t - this.selectionBox.x),
            (this.selectionBox.height = n - this.selectionBox.y),
            this.draw());
      }
    }
    finishMarquee(e) {
      if (
        this.isSelecting &&
        this.selectionBox &&
        "select" === Gt.getCurrentTool()
      ) {
        const { x: e, y: t, width: n, height: r } = this.selectionBox,
          i = Math.min(e, e + n),
          a = Math.min(t, t + n),
          o = Math.max(e, e + n),
          l = Math.max(t, t + r),
          s = Object.values(Dt.getAllInstances()).flat(),
          c = At.getAllLabels(),
          u = s.filter(
            (e) =>
              e.x >= i && e.x + e.width <= o && e.y >= a && e.y + e.height <= l
          ),
          d = c.filter((e) => e.x >= i && e.x <= o && e.y >= a && e.y <= l),
          f = [
            ...u.map((e) => ({ id: e.id, type: "rectangle", ref: e })),
            ...d.map((e) => ({ id: e.id, type: "label", ref: e })),
          ];
        (this.selectedRects = u),
          (this.selectedObjects = f),
          Tt.setSelection(f),
          this.draw();
      }
      (this.selectionBox = null),
        (this.isSelecting = !1),
        (this.selectionDragStart = null),
        (this.leftClickMarquee = !1),
        (this.doubleClickOnly = !1);
    }
    drawSelectionMarquee() {
      if (!this.selectionBox || !this.isSelecting) return;
      const { x: e, y: t, width: n, height: r } = this.selectionBox,
        i = this.ctx;
      i.save(),
        i.translate(this.offsetX, this.offsetY),
        i.scale(this.scale, this.scale),
        (i.strokeStyle = "#0077ff"),
        i.setLineDash([6]),
        i.strokeRect(e, t, n, r),
        i.setLineDash([]),
        i.restore();
    }
    resetToolStates() {
      var e, t;
      (this.isDrawing = !1),
        (this.isDragging = !1),
        (this.previewInstance = null),
        null !== (e = this.rectangleHandler) &&
          void 0 !== e &&
          e.cancelDrawing &&
          this.rectangleHandler.cancelDrawing(),
        null !== (t = this.labelHandler) &&
          void 0 !== t &&
          t.cancelLabeling &&
          this.labelHandler.cancelLabeling();
    }
    snapToGrid(e) {
      const t = this.gridSpacing || 20;
      return Math.round(e / t) * t;
    }
    handleSelectObject(e) {
      if (this.isMultiMoveMode) return;
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale,
        r = e.ctrlKey || e.metaKey,
        i = qt.getSelectedCell(),
        a = Dt.getAllInstances()[i] || {},
        o = Object.values(a).flat(),
        l = At.getAllLabels(i);
      let s = null;
      for (let c = l.length - 1; c >= 0; c--) {
        const e = l[c];
        this.ctx.font = `${e.fontSize}px monospace`;
        const r = Math.max(this.ctx.measureText(e.text).width, 20),
          i = e.fontSize;
        let a = e.x,
          o = e.y;
        switch (e.justification) {
          case "upperleft":
            break;
          case "upperright":
            a -= r;
            break;
          case "lowerleft":
            o -= i;
            break;
          case "lowerright":
            (a -= r), (o -= i);
            break;
          case "center":
            (a -= r / 2), (o -= i / 2);
            break;
          case "centerleft":
            o -= i / 2;
            break;
          case "centerright":
            (a -= r), (o -= i / 2);
        }
        if (
          t >= a - 4 &&
          t <= a + r + 4 &&
          n >= o - 2 &&
          n <= o + i + 6 &&
          !e.locked
        ) {
          s = { id: e.id, type: "label", ref: e };
          break;
        }
      }
      if (!s)
        for (let c = o.length - 1; c >= 0; c--) {
          const e = o[c],
            r = Math.min(e.x, e.x + e.width),
            i = Math.max(e.x, e.x + e.width),
            a = Math.min(e.y, e.y + e.height),
            l = Math.max(e.y, e.y + e.height);
          if (t >= r && t <= i && n >= a && n <= l) {
            s = { id: e.id, type: "rectangle", ref: e };
            break;
          }
        }
      if (!s) {
        const e = qt.getSelectedCell(),
          r = Ot.getCellByName(e),
          i = (null === r || void 0 === r ? void 0 : r.instances) || [];
        for (let a = i.length - 1; a >= 0; a--) {
          const e = i[a],
            r = Ot.getCellByName(e.ref);
          if (!r) continue;
          const { offsetX: o, offsetY: l } =
            this.getChildBoundingBoxCenterOffset(r);
          for (let i of r.elements) {
            if ("rectangle" !== i.type) continue;
            const r = e.x + o + i.x,
              a = e.y + l + i.y,
              c = i.width,
              u = i.height;
            if (t >= r && t <= r + c && n >= a && n <= a + u) {
              s = { id: e.id, type: "instance", ref: e };
              break;
            }
          }
          if (s) break;
        }
      }
      if (s) {
        const e = this.selectedObjects.find(
          (e) => e.type === s.type && e.id === s.id
        );
        r
          ? e
            ? (this.selectedObjects = this.selectedObjects.filter(
                (e) => !(e.type === s.type && e.id === s.id)
              ))
            : this.selectedObjects.push(s)
          : (this.selectedObjects = [s]),
          Tt.setSelection(this.selectedObjects);
      } else r || ((this.selectedObjects = []), Tt.clearSelection());
      this.draw();
    }
    copySelectedObjects() {
      var e;
      null !== (e = this.selectedObjects) &&
        void 0 !== e &&
        e.length &&
        ((this.copiedObjects = this.selectedObjects.map((e) => ({
          id: e.id,
          type: e.type,
          ref: JSON.parse(JSON.stringify(e.ref)),
        }))),
        console.log("\ud83d\udccb Copied selected objects"));
    }
    pasteCopiedObjects() {
      var e;
      if (
        (this.recordState(),
        null === (e = this.copiedObjects) ||
          void 0 === e ||
          !e.length ||
          !this.lastClickForPaste)
      )
        return;
      const t = this.copiedObjects[0],
        n = this.lastClickForPaste.x - t.ref.x,
        r = this.lastClickForPaste.y - t.ref.y,
        i = [],
        a = qt.getSelectedCell();
      for (let o of this.copiedObjects)
        if ("rectangle" === o.type) {
          const e = Date.now() + Math.random(),
            t = this.snapToGrid(o.ref.x + n),
            l = this.snapToGrid(o.ref.y + r),
            s = { ...o.ref, id: e, x: t, y: l, selected: !1 };
          Dt.addRectangle(a, s.layerId, t, l, s.width, s.height, s);
          const c = (Dt.getAllInstances()[s.layerId] || []).find(
            (t) => t.id === e
          );
          c && i.push({ id: e, type: "rectangle", ref: c });
        } else if ("label" === o.type) {
          const e = this.snapToGrid(o.ref.x + n),
            t = this.snapToGrid(o.ref.y + r),
            l = At.addLabel(a, o.ref.layerId, e, t, o.ref.text, o.ref.color);
          i.push({ id: l.id, type: "label", ref: l });
        } else if ("instance" === o.type) {
          const e = {
            ...o.ref,
            id: Date.now() + Math.random(),
            x: this.snapToGrid(o.ref.x + n),
            y: this.snapToGrid(o.ref.y + r),
          };
          Ot.addInstance(a, e.ref, e.x, e.y),
            i.push({ id: e.id, type: "instance", ref: e });
        }
      (this.selectedObjects = i),
        Tt.setSelection(i),
        this.draw(),
        console.log(
          "\ud83d\udce5 Pasted copied objects and fixed live references"
        );
    }
    deleteSelectedObjects() {
      var e;
      if (
        (this.recordState(),
        null === (e = this.selectedObjects) || void 0 === e || !e.length)
      )
        return;
      const t = qt.getSelectedCell();
      for (let n of this.selectedObjects)
        if ("rectangle" === n.type)
          Dt.deleteRectangle(t, n.ref.layerId, n.ref.id);
        else if ("label" === n.type) At.deleteLabel(t, n.ref.layerId, n.ref.id);
        else if ("instance" === n.type) {
          const e = Ot.getCellByName(t);
          if (!e) continue;
          e.instances = e.instances.filter((e) => e.id !== n.ref.id);
        }
      (this.selectedObjects = []),
        Tt.clearSelection(),
        this.draw(),
        console.log("\ud83d\uddd1\ufe0f Deleted selected objects");
    }
    rotateSelectedObjects(e) {
      var t;
      if (
        (this.recordState(),
        null !== (t = this.selectedObjects) && void 0 !== t && t.length)
      ) {
        for (let t of this.selectedObjects)
          if ("rectangle" === t.type) {
            const n = t.ref,
              r = n.x + n.width / 2,
              i = n.y + n.height / 2;
            let a = (n.rotation || 0) + e;
            if (
              ((a = ((a % 360) + 360) % 360),
              (n.rotation = a),
              90 === a || 270 === a)
            ) {
              const e = n.width;
              (n.width = n.height), (n.height = e);
            }
            (n.x = r - n.width / 2), (n.y = i - n.height / 2);
          } else if ("label" === t.type) {
            const n = t.ref;
            n.rotation = ((n.rotation || 0) + e) % 360;
          } else if ("instance" === t.type) {
            const n = t.ref;
            let r = (n.rotation || 0) + e;
            (r = ((r % 360) + 360) % 360), (n.rotation = r);
          }
        this.draw(),
          console.log(`\ud83d\udd04 Rotated selected objects by ${e}\xb0`);
      }
    }
    startDrag(e) {
      var t;
      if (
        (this.recordState(),
        null === (t = this.selectedObjects) || void 0 === t || !t.length)
      )
        return;
      const n = (e.offsetX - this.offsetX) / this.scale,
        r = (e.offsetY - this.offsetY) / this.scale;
      for (let i of this.selectedObjects) {
        const e = i.ref;
        if ("rectangle" === i.type) {
          if (n >= e.x && n <= e.x + e.width && r >= e.y && r <= e.y + e.height)
            return (
              (this.dragStart = { x: n, y: r }),
              (this.initialPositions = this.selectedObjects.map((e) => ({
                id: e.id,
                type: e.type,
                startX: e.ref.x,
                startY: e.ref.y,
              }))),
              void (this.isDragging = !0)
            );
        } else if ("label" === i.type) {
          if (e.locked)
            return void console.log("\ud83d\udd12 Cannot drag locked label");
          const t = At.getDragBoundingBox(e, this.ctx);
          if (n >= t.left && n <= t.right && r >= t.top && r <= t.bottom)
            return (
              (this.dragStart = { x: n, y: r }),
              (this.initialPositions = this.selectedObjects.map((e) => ({
                id: e.id,
                type: e.type,
                startX: e.ref.x,
                startY: e.ref.y,
              }))),
              void (this.isDragging = !0)
            );
        } else if ("instance" === i.type) {
          const e = i.ref,
            t = Ot.getCellByName(e.ref);
          if (!t) return;
          const { offsetX: a, offsetY: o } =
            this.getChildBoundingBoxCenterOffset(t);
          for (let i of t.elements) {
            if ("rectangle" !== i.type) continue;
            const t = e.x + a + i.x,
              l = e.y + o + i.y,
              s = i.width,
              c = i.height;
            if (n >= t && n <= t + s && r >= l && r <= l + c)
              return (
                (this.dragStart = { x: n, y: r }),
                (this.initialPositions = this.selectedObjects.map((e) => ({
                  id: e.id,
                  type: e.type,
                  startX: e.ref.x,
                  startY: e.ref.y,
                }))),
                void (this.isDragging = !0)
              );
          }
        }
      }
    }
    performDrag(e) {
      if (!this.isDragging || !this.dragStart || !this.initialPositions) return;
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale,
        r = this.snapToGrid(t - this.dragStart.x),
        i = this.snapToGrid(n - this.dragStart.y);
      for (let a of this.selectedObjects) {
        if ("label" === a.type && a.ref.locked) {
          console.log("\ud83d\udd12 Skip dragging locked label");
          continue;
        }
        const e = this.initialPositions.find(
          (e) => e.id === a.id && e.type === a.type
        );
        e && ((a.ref.x = e.startX + r), (a.ref.y = e.startY + i));
      }
      this.draw();
    }
    stopDrag() {
      (this.isDragging = !1),
        (this.dragStart = null),
        (this.initialPositions = null);
    }
    enterMultiMoveMode() {
      this.selectedObjects.length &&
        ((this.isMultiMoveMode = !0),
        (this.isDragging = !1),
        console.log("\ud83d\ude80 Multi-Move Mode READY (waiting for click)"));
    }
    startMultiMoveFromClick(e) {
      if ((this.recordState(), !this.isMultiMoveMode)) return;
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale;
      (this.dragStart = { x: t, y: n }),
        (this.initialPositions = this.selectedObjects.map((e) => ({
          id: e.id,
          type: e.type,
          startX: e.ref.x,
          startY: e.ref.y,
        }))),
        (this.isDragging = !0),
        (this.isMultiMoveMode = !1),
        console.log(
          "\ud83c\udfaf Multi-Move STARTED from click:",
          this.dragStart
        );
    }
    updateMultiMoveFollow(e) {
      if (!this.isDragging || !this.initialPositions) return;
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale,
        r = this.snapToGrid(t - this.dragStart.x),
        i = this.snapToGrid(n - this.dragStart.y);
      for (let a of this.selectedObjects) {
        const e = this.initialPositions.find(
          (e) => e.id === a.id && e.type === a.type
        );
        e && ((a.ref.x = e.startX + r), (a.ref.y = e.startY + i));
      }
      this.draw();
    }
    exitMultiMoveMode() {
      (this.isMultiMoveMode = !1),
        (this.isDragging = !1),
        (this.dragStart = null),
        (this.initialPositions = null),
        console.log("\ud83d\uded1 Multi-Move Mode OFF");
    }
    recordState() {
      const e = {
        rectangles: JSON.parse(JSON.stringify(Dt.getAllInstances())),
        labels: JSON.parse(JSON.stringify(At.getAllLabels())),
        selectedIds: this.selectedObjects.map((e) => e.id),
      };
      this.history.push(e), (this.future = []);
    }
    restoreState(e) {
      Dt.setAllInstances(e.rectangles), At.setAllLabels(e.labels), this.draw();
    }
    undo() {
      if (0 === this.history.length) return;
      const e = {
        rectangles: JSON.parse(JSON.stringify(Dt.getAllInstances())),
        labels: JSON.parse(JSON.stringify(At.getAllLabels())),
        selectedIds: this.selectedObjects.map((e) => e.id),
      };
      this.future.push(e);
      const t = this.history.pop();
      this.restoreState(t);
      const n = t.selectedIds || [],
        r = Object.values(Dt.getAllInstances()).flat(),
        i = At.getAllLabels(),
        a = r.filter((e) => n.includes(e.id)),
        o = i.filter((e) => n.includes(e.id));
      (this.selectedObjects = [
        ...a.map((e) => ({ id: e.id, type: "rectangle", ref: e })),
        ...o.map((e) => ({ id: e.id, type: "label", ref: e })),
      ]),
        Tt.setSelection(this.selectedObjects),
        this.draw(),
        console.log("\u21a9\ufe0f Undo");
    }
    redo() {
      if (0 === this.future.length) return;
      const e = {
        rectangles: JSON.parse(JSON.stringify(Dt.getAllInstances())),
        labels: JSON.parse(JSON.stringify(At.getAllLabels())),
        selectedIds: this.selectedObjects.map((e) => e.id),
      };
      this.history.push(e);
      const t = this.future.pop();
      this.restoreState(t);
      const n = t.selectedIds || [],
        r = Object.values(Dt.getAllInstances()).flat(),
        i = At.getAllLabels(),
        a = r.filter((e) => n.includes(e.id)),
        o = i.filter((e) => n.includes(e.id));
      (this.selectedObjects = [
        ...a.map((e) => ({ id: e.id, type: "rectangle", ref: e })),
        ...o.map((e) => ({ id: e.id, type: "label", ref: e })),
      ]),
        Tt.setSelection(this.selectedObjects),
        this.draw(),
        console.log("\u21aa\ufe0f Redo");
    }
    checkResizeCursor(e) {
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale;
      (this.resizeTarget = null), (this.resizeEdge = null);
      const r = this.selectedObjects
          .filter((e) => "rectangle" === e.type)
          .map((e) => e.ref),
        i = 5 / this.scale;
      for (let a of r) {
        const e = a.x,
          r = a.x + a.width,
          o = a.y,
          l = a.y + a.height;
        if (this.isNear(t, e, i) && this.isNear(n, o, i))
          return (
            (this.canvas.style.cursor = "nwse-resize"),
            (this.resizeTarget = a),
            void (this.resizeEdge = "top-left")
          );
        if (this.isNear(t, r, i) && this.isNear(n, o, i))
          return (
            (this.canvas.style.cursor = "nesw-resize"),
            (this.resizeTarget = a),
            void (this.resizeEdge = "top-right")
          );
        if (this.isNear(t, e, i) && this.isNear(n, l, i))
          return (
            (this.canvas.style.cursor = "nesw-resize"),
            (this.resizeTarget = a),
            void (this.resizeEdge = "bottom-left")
          );
        if (this.isNear(t, r, i) && this.isNear(n, l, i))
          return (
            (this.canvas.style.cursor = "nwse-resize"),
            (this.resizeTarget = a),
            void (this.resizeEdge = "bottom-right")
          );
        if (this.isNear(t, e, i) && n >= o && n <= l)
          return (
            (this.canvas.style.cursor = "ew-resize"),
            (this.resizeTarget = a),
            void (this.resizeEdge = "left")
          );
        if (this.isNear(t, r, i) && n >= o && n <= l)
          return (
            (this.canvas.style.cursor = "ew-resize"),
            (this.resizeTarget = a),
            void (this.resizeEdge = "right")
          );
        if (this.isNear(n, o, i) && t >= e && t <= r)
          return (
            (this.canvas.style.cursor = "ns-resize"),
            (this.resizeTarget = a),
            void (this.resizeEdge = "top")
          );
        if (this.isNear(n, l, i) && t >= e && t <= r)
          return (
            (this.canvas.style.cursor = "ns-resize"),
            (this.resizeTarget = a),
            void (this.resizeEdge = "bottom")
          );
      }
      for (let a of this.selectedObjects) {
        if ("instance" !== a.type) continue;
        const e = a.ref,
          r = Ot.getCellByName(e.ref);
        if (!r) continue;
        const { offsetX: o, offsetY: l } =
          this.getChildBoundingBoxCenterOffset(r);
        let s = 1 / 0,
          c = 1 / 0,
          u = -1 / 0,
          d = -1 / 0;
        for (let t of r.elements) {
          if ("rectangle" !== t.type) continue;
          const n = e.x + o + t.x,
            r = e.y + l + t.y,
            i = t.width,
            a = t.height;
          (s = Math.min(s, n)),
            (c = Math.min(c, r)),
            (u = Math.max(u, n + i)),
            (d = Math.max(d, r + a));
        }
        if (this.isNear(t, s, i) && this.isNear(n, c, i))
          return (
            (this.canvas.style.cursor = "nwse-resize"),
            (this.resizeTarget = e),
            void (this.resizeEdge = "top-left")
          );
        if (this.isNear(t, u, i) && this.isNear(n, c, i))
          return (
            (this.canvas.style.cursor = "nesw-resize"),
            (this.resizeTarget = e),
            void (this.resizeEdge = "top-right")
          );
        if (this.isNear(t, s, i) && this.isNear(n, d, i))
          return (
            (this.canvas.style.cursor = "nesw-resize"),
            (this.resizeTarget = e),
            void (this.resizeEdge = "bottom-left")
          );
        if (this.isNear(t, u, i) && this.isNear(n, d, i))
          return (
            (this.canvas.style.cursor = "nwse-resize"),
            (this.resizeTarget = e),
            void (this.resizeEdge = "bottom-right")
          );
        if (this.isNear(t, s, i) && n >= c && n <= d)
          return (
            (this.canvas.style.cursor = "ew-resize"),
            (this.resizeTarget = e),
            void (this.resizeEdge = "left")
          );
        if (this.isNear(t, u, i) && n >= c && n <= d)
          return (
            (this.canvas.style.cursor = "ew-resize"),
            (this.resizeTarget = e),
            void (this.resizeEdge = "right")
          );
        if (this.isNear(n, c, i) && t >= s && t <= u)
          return (
            (this.canvas.style.cursor = "ns-resize"),
            (this.resizeTarget = e),
            void (this.resizeEdge = "top")
          );
        if (this.isNear(n, d, i) && t >= s && t <= u)
          return (
            (this.canvas.style.cursor = "ns-resize"),
            (this.resizeTarget = e),
            void (this.resizeEdge = "bottom")
          );
      }
      this.canvas.style.cursor = "default";
    }
    isNear(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
      return Math.abs(e - t) <= n;
    }
    startResize(e) {
      if (!this.resizeTarget || !this.resizeEdge) return !1;
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale;
      return (
        (this.startResizePos = { x: t, y: n }),
        (this.startResizeRect = { ...this.resizeTarget }),
        (this.isResizing = !0),
        (this.startResizeRects = this.selectedObjects
          .filter((e) => "rectangle" === e.type)
          .map((e) => ({
            id: e.id,
            x: e.ref.x,
            y: e.ref.y,
            width: e.ref.width,
            height: e.ref.height,
          }))),
        !0
      );
    }
    performResize(e) {
      if (!this.isResizing || !this.startResizeRects) return;
      const t = (e.offsetX - this.offsetX) / this.scale,
        n = (e.offsetY - this.offsetY) / this.scale,
        r = this.snapToGrid(t - this.startResizePos.x),
        i = this.snapToGrid(n - this.startResizePos.y);
      for (let a of this.startResizeRects) {
        const e = this.selectedObjects.find((e) => e.id === a.id);
        if (e)
          if ("rectangle" === e.type) {
            const t = e.ref;
            (t.x = a.x),
              (t.y = a.y),
              (t.width = a.width),
              (t.height = a.height),
              this.applyResize(t, r, i, this.resizeEdge, a);
          } else if ("instance" === e.type && e.ref) {
            const r = e,
              i = Ot.getCellByName(r.ref);
            if (!i) continue;
            const { offsetX: a, offsetY: o } =
              this.getChildBoundingBoxCenterOffset(i);
            let l = 1 / 0,
              s = 1 / 0,
              c = -1 / 0,
              u = -1 / 0;
            for (let e of i.elements) {
              if ("rectangle" !== e.type) continue;
              const t = a + e.x,
                n = o + e.y;
              (l = Math.min(l, t)),
                (s = Math.min(s, n)),
                (c = Math.max(c, t + e.width)),
                (u = Math.max(u, n + e.height));
            }
            const d = c - l,
              f = u - s,
              p = (t - r.x) / d,
              h = (n - r.y) / f,
              m = this.snapToGrid(p * d) / d,
              g = this.snapToGrid(h * f) / f,
              y = Math.max(0.05, Math.min(m, g));
            r.scale = y;
          }
      }
      this.draw();
    }
    applyResize(e, t, n, r, i) {
      switch (r) {
        case "left":
          (e.x = i.x + t), (e.width = i.width - t);
          break;
        case "right":
          e.width = i.width + t;
          break;
        case "top":
          (e.y = i.y + n), (e.height = i.height - n);
          break;
        case "bottom":
          e.height = i.height + n;
          break;
        case "top-left":
          (e.x = i.x + t),
            (e.width = i.width - t),
            (e.y = i.y + n),
            (e.height = i.height - n);
          break;
        case "top-right":
          (e.width = i.width + t), (e.y = i.y + n), (e.height = i.height - n);
          break;
        case "bottom-left":
          (e.x = i.x + t), (e.width = i.width - t), (e.height = i.height + n);
          break;
        case "bottom-right":
          (e.width = i.width + t), (e.height = i.height + n);
      }
    }
    endResize() {
      this.resizeTarget &&
        (this.resizeTarget.width < 0 &&
          ((this.resizeTarget.x += this.resizeTarget.width),
          (this.resizeTarget.width = Math.abs(this.resizeTarget.width))),
        this.resizeTarget.height < 0 &&
          ((this.resizeTarget.y += this.resizeTarget.height),
          (this.resizeTarget.height = Math.abs(this.resizeTarget.height))),
        (this.isResizing = !1),
        (this.resizeTarget = null),
        (this.resizeEdge = null),
        (this.startResizeRect = null));
    }
    updateSelectedProperty(e, t) {
      if (this.selectedObjects.length) {
        for (let n of this.selectedObjects)
          "layerId" === e
            ? "rectangle" === n.type
              ? (Dt.deleteRectangle(n.ref.layerId, n.ref.id),
                (n.ref.layerId = t),
                Dt.addRectangle(
                  n.ref.layerId,
                  n.ref.x,
                  n.ref.y,
                  n.ref.width,
                  n.ref.height,
                  n.ref
                ))
              : "label" === n.type &&
                (At.deleteLabel(n.ref.layerId, n.ref.id),
                (n.ref.layerId = t),
                At.addLabel(
                  n.ref.layerId,
                  n.ref.x,
                  n.ref.y,
                  n.ref.text,
                  n.ref.color
                ))
            : n.ref.hasOwnProperty(e) && (n.ref[e] = t);
        this.draw(), console.log(`\u2705 Updated ${e} to ${t}`);
      }
    }
    updateSelectedPropertyById(e, t, n, r) {
      const i = this.selectedObjects.find((n) => n.id === e && n.type === t);
      i &&
        i.ref &&
        ((i.ref[n] = r),
        this.draw(),
        console.log(`\u2705 Updated ${n} for ${t} ID ${e} to ${r}`));
    }
    getSelectedProperties() {
      return this.selectedObjects && this.selectedObjects.length
        ? this.selectedObjects.map((e) => ({
            id: e.id,
            type: e.type,
            properties: { ...e.ref },
          }))
        : [];
    }
    focusOnLabel(e) {
      const t = At.getLabelById(e);
      if (t) {
        const e = t.x,
          n = t.y;
        (this.scale = 2),
          (this.offsetX = -e * this.scale + this.canvas.width / 2),
          (this.offsetY = -n * this.scale + this.canvas.height / 2),
          this.draw();
      }
    }
    getChildBoundingBoxCenterOffset(e) {
      if (!e || !e.elements) return { offsetX: 0, offsetY: 0 };
      let t = 1 / 0,
        n = 1 / 0,
        r = -1 / 0,
        i = -1 / 0;
      for (let d of e.elements) {
        var a, o, l, s, c, u;
        if ("rectangle" !== d.type) continue;
        const e =
            null !== (a = null !== (o = d.x) && void 0 !== o ? o : d.x1) &&
            void 0 !== a
              ? a
              : 0,
          f =
            null !== (l = null !== (s = d.y) && void 0 !== s ? s : d.y1) &&
            void 0 !== l
              ? l
              : 0,
          p = null !== (c = d.width) && void 0 !== c ? c : d.x2 - d.x1,
          h = null !== (u = d.height) && void 0 !== u ? u : d.y2 - d.y1;
        (t = Math.min(t, e)),
          (n = Math.min(n, f)),
          (r = Math.max(r, e + p)),
          (i = Math.max(i, f + h));
      }
      return { offsetX: -((t + r) / 2), offsetY: -((n + i) / 2) };
    }
    drawRecursiveInstances(e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { x: 0, y: 0, scale: 1, rotation: 0 },
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
      if (!e || r.includes(e.name)) return;
      const i = [...r, e.name],
        a = e.instances || [];
      for (const o of a) {
        const e = Ot.getCellByName(o.ref);
        if (!e) continue;
        const r = n.x + o.x,
          a = n.y + o.y,
          l = n.scale * (o.scale || 1),
          s = n.rotation + (o.rotation || 0),
          c = (s * Math.PI) / 180,
          { offsetX: u, offsetY: d } = this.getChildBoundingBoxCenterOffset(e);
        t.save(),
          t.translate(r, a),
          t.rotate(c),
          t.scale(o.scale || 1, o.scale || 1),
          t.translate(u, d);
        for (let n of e.elements || [])
          "rectangle" === n.type
            ? Dt.drawSingle(t, n, 1)
            : "label" === n.type && At.drawSingle(t, n);
        t.beginPath(),
          t.moveTo(-5, 0),
          t.lineTo(5, 0),
          t.moveTo(0, -5),
          t.lineTo(0, 5),
          (t.strokeStyle = "red"),
          (t.lineWidth = 1 / this.scale),
          t.stroke(),
          t.restore(),
          this.drawRecursiveInstances(
            e,
            t,
            { x: r, y: a, scale: l, rotation: s },
            i
          );
      }
    }
    drawTransformedLabel(e, t, n, r, i, a) {
      const o = t.x + n,
        l = t.y + r;
      e.save(),
        e.translate(this.offsetX, this.offsetY),
        e.scale(this.scale, this.scale),
        e.translate(o, l),
        e.rotate(((a || 0) * Math.PI) / 180),
        (e.font = `${t.fontSize || 12}px sans-serif`),
        (e.fillStyle = t.color || "#fff"),
        e.fillText(t.text, 0, 0),
        e.restore();
    }
    draw() {
      var e;
      const t = this.ctx;
      this.showGrid
        ? this.drawGrid()
        : (t.save(),
          t.clearRect(
            0,
            0,
            this.canvas.width / this.dpr,
            this.canvas.height / this.dpr
          ),
          t.restore());
      const n = Ft.getSelectedLayerId(),
        r = qt.getSelectedCell();
      Dt.drawAll(
        t,
        this.offsetX,
        this.offsetY,
        this.scale,
        r,
        this.previewRect
      ),
        At.drawAllLabels(
          t,
          this.offsetX,
          this.offsetY,
          this.scale,
          n,
          r,
          this.previewLabel
        );
      const i = Ot.getCellByName(r);
      if (
        (i &&
          (t.save(),
          t.translate(this.offsetX, this.offsetY),
          t.scale(this.scale, this.scale),
          this.drawRecursiveInstances(i, t),
          t.restore()),
        "instance" === this.currentTool && this.previewInstance)
      ) {
        var a;
        const { ref: e, x: n, y: r } = this.previewInstance,
          i = Ot.getCellByName(e);
        if (i && null !== (a = i.elements) && void 0 !== a && a.length) {
          const { offsetX: e, offsetY: a } =
            this.getChildBoundingBoxCenterOffset(i);
          t.save(),
            t.translate(
              this.offsetX + n * this.scale,
              this.offsetY + r * this.scale
            ),
            t.scale(this.scale, this.scale),
            t.translate(e, a);
          for (let n of i.elements)
            "rectangle" === n.type
              ? Dt.drawSingle(t, n, 1)
              : "label" === n.type && At.drawSingle(t, n, 1);
          t.restore();
        }
      }
      if (
        (this.previewLabel &&
          (t.save(),
          t.translate(this.offsetX, this.offsetY),
          t.scale(this.scale, this.scale),
          At.drawSingle(t, this.previewLabel),
          t.restore()),
        null !== (e = this.selectedObjects) && void 0 !== e && e.length)
      ) {
        t.save(),
          t.translate(this.offsetX, this.offsetY),
          t.scale(this.scale, this.scale),
          (t.strokeStyle = "#ffffff"),
          (t.lineWidth = 2 / this.scale),
          t.setLineDash([6, 4]),
          (t.lineDashOffset = -this.dashOffset);
        for (let e of this.selectedObjects)
          if ("rectangle" === e.type) {
            const n = e.ref,
              r = ((n.rotation || 0) * Math.PI) / 180,
              i = n.x + n.width / 2,
              a = n.y + n.height / 2;
            t.save(),
              t.translate(i, a),
              t.rotate(r),
              t.translate(-i, -a),
              t.strokeRect(n.x, n.y, n.width, n.height),
              t.restore();
          } else if ("label" === e.type) {
            const n = e.ref;
            t.font = `${n.fontSize}px ${n.fontType || "monospace"}`;
            const r = t.measureText(n.text).width,
              i = n.fontSize;
            let a = n.x,
              o = n.y;
            switch (n.justification) {
              case "upperleft":
                break;
              case "upperright":
                a -= r;
                break;
              case "lowerleft":
                o -= i;
                break;
              case "lowerright":
                (a -= r), (o -= i);
                break;
              case "center":
                (a -= r / 2), (o -= i / 2);
                break;
              case "centerleft":
                o -= i / 2;
                break;
              case "centerright":
                (a -= r), (o -= i / 2);
            }
            t.strokeRect(a - 4, o - 2, r + 8, i + 8);
          } else if ("instance" === e.type) {
            const n = e.ref,
              r = Ot.getCellByName(n.ref);
            if (!r) continue;
            const { offsetX: i, offsetY: a } =
              this.getChildBoundingBoxCenterOffset(r);
            let o = 1 / 0,
              l = 1 / 0,
              s = -1 / 0,
              c = -1 / 0;
            for (let e of r.elements) {
              if ("rectangle" !== e.type) continue;
              const t = n.x + i + e.x,
                r = n.y + a + e.y;
              (o = Math.min(o, t)),
                (l = Math.min(l, r)),
                (s = Math.max(s, t + e.width)),
                (c = Math.max(c, r + e.height));
            }
            t.strokeRect(o, l, s - o, c - l);
          }
        t.setLineDash([]), t.restore();
      }
      var o, l;
      "rectangle" === this.currentTool &&
        (null === (o = (l = this.rectangleHandler).drawCursorRect) ||
          void 0 === o ||
          o.call(
            l,
            t,
            this.offsetX,
            this.offsetY,
            this.scale,
            this.lastPointer
          ));
      "ruler" === this.currentTool && this.drawRulers(),
        "label" === this.currentTool &&
          this.lastPointer &&
          this.labelHandler.drawBlinkingCursor(
            this.ctx,
            this.offsetX,
            this.offsetY,
            this.scale,
            this.lastPointer
          ),
        t.save(),
        t.translate(this.offsetX, this.offsetY),
        t.scale(this.scale, this.scale),
        t.beginPath(),
        t.moveTo(-1e5, 0),
        t.lineTo(1e5, 0),
        t.moveTo(0, -1e5),
        t.lineTo(0, 1e5),
        (t.lineWidth = 1 / this.scale),
        (t.strokeStyle = "#ff0000"),
        t.stroke(),
        t.restore();
    }
    loadFromJSON(e) {
      const t = e.instances || [];
      this.instanceManager.clearAll(),
        t.forEach((e) => this.instanceManager.addInstance(e)),
        zt.setInstances(t),
        this.draw();
    }
  }
  var en = n(579);
  const tn = () => {
    const e = (0, i.useRef)(null),
      t = (0, i.useRef)(null);
    return (
      (0, i.useEffect)(() => {
        const n = e.current;
        n && ((t.current = new Zt(n)), (window.canvasEngine = t.current));
      }, []),
      (0, en.jsx)("div", {
        style: { width: "100%", height: "94vh", background: "black" },
        children: (0, en.jsx)("canvas", {
          ref: e,
          style: {
            backgroundColor: "#111",
            width: "100%",
            height: "100%",
            display: "block",
            cursor: "grab",
          },
        }),
      })
    );
  };
  function nn(e) {
    var t,
      n,
      r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var i = e.length;
        for (t = 0; t < i; t++)
          e[t] && (n = nn(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  const rn = function () {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
      (e = arguments[n]) && (t = nn(e)) && (r && (r += " "), (r += t));
    return r;
  };
  function an(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    const r = {};
    for (const i in e) {
      const a = e[i];
      let o = "",
        l = !0;
      for (let e = 0; e < a.length; e += 1) {
        const r = a[e];
        r &&
          ((o += (!0 === l ? "" : " ") + t(r)),
          (l = !1),
          n && n[r] && (o += " " + n[r]));
      }
      r[i] = o;
    }
    return r;
  }
  function on(e) {
    const t = new URL(`https://mui.com/production-error/?code=${e}`);
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    return (
      r.forEach((e) => t.searchParams.append("args[]", e)),
      `Minified MUI error #${e}; visit ${t} for the full message.`
    );
  }
  function ln(e) {
    if ("string" !== typeof e) throw new Error(on(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  const sn = ln;
  function cn() {
    return (
      (cn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      cn.apply(null, arguments)
    );
  }
  var un = (function () {
      function e(e) {
        var t = this;
        (this._insertTag = function (e) {
          var n;
          (n =
            0 === t.tags.length
              ? t.insertionPoint
                ? t.insertionPoint.nextSibling
                : t.prepend
                ? t.container.firstChild
                : t.before
              : t.tags[t.tags.length - 1].nextSibling),
            t.container.insertBefore(e, n),
            t.tags.push(e);
        }),
          (this.isSpeedy = void 0 === e.speedy || e.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = e.nonce),
          (this.key = e.key),
          (this.container = e.container),
          (this.prepend = e.prepend),
          (this.insertionPoint = e.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (e) {
          e.forEach(this._insertTag);
        }),
        (t.insert = function (e) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(
              (function (e) {
                var t = document.createElement("style");
                return (
                  t.setAttribute("data-emotion", e.key),
                  void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t
                );
              })(this)
            );
          var t = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var n = (function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            })(t);
            try {
              n.insertRule(e, n.cssRules.length);
            } catch (r) {}
          } else t.appendChild(document.createTextNode(e));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (e) {
            var t;
            return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    dn = Math.abs,
    fn = String.fromCharCode,
    pn = Object.assign;
  function hn(e) {
    return e.trim();
  }
  function mn(e, t, n) {
    return e.replace(t, n);
  }
  function gn(e, t) {
    return e.indexOf(t);
  }
  function yn(e, t) {
    return 0 | e.charCodeAt(t);
  }
  function bn(e, t, n) {
    return e.slice(t, n);
  }
  function vn(e) {
    return e.length;
  }
  function wn(e) {
    return e.length;
  }
  function xn(e, t) {
    return t.push(e), e;
  }
  var Sn = 1,
    kn = 1,
    Cn = 0,
    En = 0,
    _n = 0,
    Tn = "";
  function jn(e, t, n, r, i, a, o) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: i,
      children: a,
      line: Sn,
      column: kn,
      length: o,
      return: "",
    };
  }
  function On(e, t) {
    return pn(
      jn("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function zn() {
    return (
      (_n = En > 0 ? yn(Tn, --En) : 0), kn--, 10 === _n && ((kn = 1), Sn--), _n
    );
  }
  function Rn() {
    return (
      (_n = En < Cn ? yn(Tn, En++) : 0), kn++, 10 === _n && ((kn = 1), Sn++), _n
    );
  }
  function Pn() {
    return yn(Tn, En);
  }
  function An() {
    return En;
  }
  function Mn(e, t) {
    return bn(Tn, e, t);
  }
  function Ln(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function Nn(e) {
    return (Sn = kn = 1), (Cn = vn((Tn = e))), (En = 0), [];
  }
  function Dn(e) {
    return (Tn = ""), e;
  }
  function In(e) {
    return hn(Mn(En - 1, $n(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }
  function Bn(e) {
    for (; (_n = Pn()) && _n < 33; ) Rn();
    return Ln(e) > 2 || Ln(_n) > 3 ? "" : " ";
  }
  function Fn(e, t) {
    for (
      ;
      --t &&
      Rn() &&
      !(_n < 48 || _n > 102 || (_n > 57 && _n < 65) || (_n > 70 && _n < 97));

    );
    return Mn(e, An() + (t < 6 && 32 == Pn() && 32 == Rn()));
  }
  function $n(e) {
    for (; Rn(); )
      switch (_n) {
        case e:
          return En;
        case 34:
        case 39:
          34 !== e && 39 !== e && $n(_n);
          break;
        case 40:
          41 === e && $n(e);
          break;
        case 92:
          Rn();
      }
    return En;
  }
  function Hn(e, t) {
    for (; Rn() && e + _n !== 57 && (e + _n !== 84 || 47 !== Pn()); );
    return "/*" + Mn(t, En - 1) + "*" + fn(47 === e ? e : Rn());
  }
  function Un(e) {
    for (; !Ln(Pn()); ) Rn();
    return Mn(e, En);
  }
  var Vn = "-ms-",
    Wn = "-moz-",
    qn = "-webkit-",
    Xn = "comm",
    Gn = "rule",
    Yn = "decl",
    Kn = "@keyframes";
  function Qn(e, t) {
    for (var n = "", r = wn(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
    return n;
  }
  function Jn(e, t, n, r) {
    switch (e.type) {
      case "@layer":
        if (e.children.length) break;
      case "@import":
      case Yn:
        return (e.return = e.return || e.value);
      case Xn:
        return "";
      case Kn:
        return (e.return = e.value + "{" + Qn(e.children, r) + "}");
      case Gn:
        e.value = e.props.join(",");
    }
    return vn((n = Qn(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function Zn(e) {
    return Dn(er("", null, null, null, [""], (e = Nn(e)), 0, [0], e));
  }
  function er(e, t, n, r, i, a, o, l, s) {
    for (
      var c = 0,
        u = 0,
        d = o,
        f = 0,
        p = 0,
        h = 0,
        m = 1,
        g = 1,
        y = 1,
        b = 0,
        v = "",
        w = i,
        x = a,
        S = r,
        k = v;
      g;

    )
      switch (((h = b), (b = Rn()))) {
        case 40:
          if (108 != h && 58 == yn(k, d - 1)) {
            -1 != gn((k += mn(In(b), "&", "&\f")), "&\f") && (y = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          k += In(b);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          k += Bn(h);
          break;
        case 92:
          k += Fn(An() - 1, 7);
          continue;
        case 47:
          switch (Pn()) {
            case 42:
            case 47:
              xn(nr(Hn(Rn(), An()), t, n), s);
              break;
            default:
              k += "/";
          }
          break;
        case 123 * m:
          l[c++] = vn(k) * y;
        case 125 * m:
        case 59:
        case 0:
          switch (b) {
            case 0:
            case 125:
              g = 0;
            case 59 + u:
              -1 == y && (k = mn(k, /\f/g, "")),
                p > 0 &&
                  vn(k) - d &&
                  xn(
                    p > 32
                      ? rr(k + ";", r, n, d - 1)
                      : rr(mn(k, " ", "") + ";", r, n, d - 2),
                    s
                  );
              break;
            case 59:
              k += ";";
            default:
              if (
                (xn((S = tr(k, t, n, c, u, i, l, v, (w = []), (x = []), d)), a),
                123 === b)
              )
                if (0 === u) er(k, t, S, S, w, a, d, l, x);
                else
                  switch (99 === f && 110 === yn(k, 3) ? 100 : f) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      er(
                        e,
                        S,
                        S,
                        r && xn(tr(e, S, S, 0, 0, i, l, v, i, (w = []), d), x),
                        i,
                        x,
                        d,
                        l,
                        r ? w : x
                      );
                      break;
                    default:
                      er(k, S, S, S, [""], x, 0, l, x);
                  }
          }
          (c = u = p = 0), (m = y = 1), (v = k = ""), (d = o);
          break;
        case 58:
          (d = 1 + vn(k)), (p = h);
        default:
          if (m < 1)
            if (123 == b) --m;
            else if (125 == b && 0 == m++ && 125 == zn()) continue;
          switch (((k += fn(b)), b * m)) {
            case 38:
              y = u > 0 ? 1 : ((k += "\f"), -1);
              break;
            case 44:
              (l[c++] = (vn(k) - 1) * y), (y = 1);
              break;
            case 64:
              45 === Pn() && (k += In(Rn())),
                (f = Pn()),
                (u = d = vn((v = k += Un(An())))),
                b++;
              break;
            case 45:
              45 === h && 2 == vn(k) && (m = 0);
          }
      }
    return a;
  }
  function tr(e, t, n, r, i, a, o, l, s, c, u) {
    for (
      var d = i - 1, f = 0 === i ? a : [""], p = wn(f), h = 0, m = 0, g = 0;
      h < r;
      ++h
    )
      for (var y = 0, b = bn(e, d + 1, (d = dn((m = o[h])))), v = e; y < p; ++y)
        (v = hn(m > 0 ? f[y] + " " + b : mn(b, /&\f/g, f[y]))) && (s[g++] = v);
    return jn(e, t, n, 0 === i ? Gn : l, s, c, u);
  }
  function nr(e, t, n) {
    return jn(e, t, n, Xn, fn(_n), bn(e, 2, -2), 0);
  }
  function rr(e, t, n, r) {
    return jn(e, t, n, Yn, bn(e, 0, r), bn(e, r + 1, -1), r);
  }
  var ir = function (e, t, n) {
      for (
        var r = 0, i = 0;
        (r = i), (i = Pn()), 38 === r && 12 === i && (t[n] = 1), !Ln(i);

      )
        Rn();
      return Mn(e, En);
    },
    ar = function (e, t) {
      return Dn(
        (function (e, t) {
          var n = -1,
            r = 44;
          do {
            switch (Ln(r)) {
              case 0:
                38 === r && 12 === Pn() && (t[n] = 1),
                  (e[n] += ir(En - 1, t, n));
                break;
              case 2:
                e[n] += In(r);
                break;
              case 4:
                if (44 === r) {
                  (e[++n] = 58 === Pn() ? "&\f" : ""), (t[n] = e[n].length);
                  break;
                }
              default:
                e[n] += fn(r);
            }
          } while ((r = Rn()));
          return e;
        })(Nn(e), t)
      );
    },
    or = new WeakMap(),
    lr = function (e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            r = e.column === n.column && e.line === n.line;
          "rule" !== n.type;

        )
          if (!(n = n.parent)) return;
        if (
          (1 !== e.props.length || 58 === t.charCodeAt(0) || or.get(n)) &&
          !r
        ) {
          or.set(e, !0);
          for (
            var i = [], a = ar(t, i), o = n.props, l = 0, s = 0;
            l < a.length;
            l++
          )
            for (var c = 0; c < o.length; c++, s++)
              e.props[s] = i[l]
                ? a[l].replace(/&\f/g, o[c])
                : o[c] + " " + a[l];
        }
      }
    },
    sr = function (e) {
      if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) &&
          98 === t.charCodeAt(2) &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function cr(e, t) {
    switch (
      (function (e, t) {
        return 45 ^ yn(e, 0)
          ? (((((((t << 2) ^ yn(e, 0)) << 2) ^ yn(e, 1)) << 2) ^ yn(e, 2)) <<
              2) ^
              yn(e, 3)
          : 0;
      })(e, t)
    ) {
      case 5103:
        return qn + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return qn + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return qn + e + Wn + e + Vn + e + e;
      case 6828:
      case 4268:
        return qn + e + Vn + e + e;
      case 6165:
        return qn + e + Vn + "flex-" + e + e;
      case 5187:
        return (
          qn +
          e +
          mn(e, /(\w+).+(:[^]+)/, qn + "box-$1$2" + Vn + "flex-$1$2") +
          e
        );
      case 5443:
        return qn + e + Vn + "flex-item-" + mn(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          qn +
          e +
          Vn +
          "flex-line-pack" +
          mn(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return qn + e + Vn + mn(e, "shrink", "negative") + e;
      case 5292:
        return qn + e + Vn + mn(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          qn +
          "box-" +
          mn(e, "-grow", "") +
          qn +
          e +
          Vn +
          mn(e, "grow", "positive") +
          e
        );
      case 4554:
        return qn + mn(e, /([^-])(transform)/g, "$1" + qn + "$2") + e;
      case 6187:
        return (
          mn(
            mn(mn(e, /(zoom-|grab)/, qn + "$1"), /(image-set)/, qn + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return mn(e, /(image-set\([^]*)/, qn + "$1$`$1");
      case 4968:
        return (
          mn(
            mn(
              e,
              /(.+:)(flex-)?(.*)/,
              qn + "box-pack:$3" + Vn + "flex-pack:$3"
            ),
            /s.+-b[^;]+/,
            "justify"
          ) +
          qn +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return mn(e, /(.+)-inline(.+)/, qn + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (vn(e) - 1 - t > 6)
          switch (yn(e, t + 1)) {
            case 109:
              if (45 !== yn(e, t + 4)) break;
            case 102:
              return (
                mn(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    qn +
                    "$2-$3$1" +
                    Wn +
                    (108 == yn(e, t + 3) ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~gn(e, "stretch")
                ? cr(mn(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (115 !== yn(e, t + 1)) break;
      case 6444:
        switch (yn(e, vn(e) - 3 - (~gn(e, "!important") && 10))) {
          case 107:
            return mn(e, ":", ":" + qn) + e;
          case 101:
            return (
              mn(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  qn +
                  (45 === yn(e, 14) ? "inline-" : "") +
                  "box$3$1" +
                  qn +
                  "$2$3$1" +
                  Vn +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (yn(e, t + 11)) {
          case 114:
            return qn + e + Vn + mn(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return qn + e + Vn + mn(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return qn + e + Vn + mn(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return qn + e + Vn + e + e;
    }
    return e;
  }
  var ur = [
      function (e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case Yn:
              e.return = cr(e.value, e.length);
              break;
            case Kn:
              return Qn([On(e, { value: mn(e.value, "@", "@" + qn) })], r);
            case Gn:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })(e.props, function (t) {
                  switch (
                    (function (e, t) {
                      return (e = t.exec(e)) ? e[0] : e;
                    })(t, /(::plac\w+|:read-\w+)/)
                  ) {
                    case ":read-only":
                    case ":read-write":
                      return Qn(
                        [On(e, { props: [mn(t, /:(read-\w+)/, ":-moz-$1")] })],
                        r
                      );
                    case "::placeholder":
                      return Qn(
                        [
                          On(e, {
                            props: [mn(t, /:(plac\w+)/, ":" + qn + "input-$1")],
                          }),
                          On(e, { props: [mn(t, /:(plac\w+)/, ":-moz-$1")] }),
                          On(e, {
                            props: [mn(t, /:(plac\w+)/, Vn + "input-$1")],
                          }),
                        ],
                        r
                      );
                  }
                  return "";
                });
          }
      },
    ],
    dr = function (e) {
      var t = e.key;
      if ("css" === t) {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (e) {
          -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
            (document.head.appendChild(e), e.setAttribute("data-s", ""));
        });
      }
      var r,
        i,
        a = e.stylisPlugins || ur,
        o = {},
        l = [];
      (r = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (e) {
            for (
              var t = e.getAttribute("data-emotion").split(" "), n = 1;
              n < t.length;
              n++
            )
              o[t[n]] = !0;
            l.push(e);
          }
        );
      var s,
        c,
        u = [
          Jn,
          ((c = function (e) {
            s.insert(e);
          }),
          function (e) {
            e.root || ((e = e.return) && c(e));
          }),
        ],
        d = (function (e) {
          var t = wn(e);
          return function (n, r, i, a) {
            for (var o = "", l = 0; l < t; l++) o += e[l](n, r, i, a) || "";
            return o;
          };
        })([lr, sr].concat(a, u));
      i = function (e, t, n, r) {
        (s = n),
          (function (e) {
            Qn(Zn(e), d);
          })(e ? e + "{" + t.styles + "}" : t.styles),
          r && (f.inserted[t.name] = !0);
      };
      var f = {
        key: t,
        sheet: new un({
          key: t,
          container: r,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: o,
        registered: {},
        insert: i,
      };
      return f.sheet.hydrate(l), f;
    };
  var fr = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  };
  function pr(e) {
    var t = Object.create(null);
    return function (n) {
      return void 0 === t[n] && (t[n] = e(n)), t[n];
    };
  }
  var hr = /[A-Z]|^ms/g,
    mr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    gr = function (e) {
      return 45 === e.charCodeAt(1);
    },
    yr = function (e) {
      return null != e && "boolean" !== typeof e;
    },
    br = pr(function (e) {
      return gr(e) ? e : e.replace(hr, "-$&").toLowerCase();
    }),
    vr = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if ("string" === typeof t)
            return t.replace(mr, function (e, t, n) {
              return (xr = { name: t, styles: n, next: xr }), t;
            });
      }
      return 1 === fr[e] || gr(e) || "number" !== typeof t || 0 === t
        ? t
        : t + "px";
    };
  function wr(e, t, n) {
    if (null == n) return "";
    var r = n;
    if (void 0 !== r.__emotion_styles) return r;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object":
        var i = n;
        if (1 === i.anim)
          return (xr = { name: i.name, styles: i.styles, next: xr }), i.name;
        var a = n;
        if (void 0 !== a.styles) {
          var o = a.next;
          if (void 0 !== o)
            for (; void 0 !== o; )
              (xr = { name: o.name, styles: o.styles, next: xr }), (o = o.next);
          return a.styles + ";";
        }
        return (function (e, t, n) {
          var r = "";
          if (Array.isArray(n))
            for (var i = 0; i < n.length; i++) r += wr(e, t, n[i]) + ";";
          else
            for (var a in n) {
              var o = n[a];
              if ("object" !== typeof o) {
                var l = o;
                null != t && void 0 !== t[l]
                  ? (r += a + "{" + t[l] + "}")
                  : yr(l) && (r += br(a) + ":" + vr(a, l) + ";");
              } else if (
                !Array.isArray(o) ||
                "string" !== typeof o[0] ||
                (null != t && void 0 !== t[o[0]])
              ) {
                var s = wr(e, t, o);
                switch (a) {
                  case "animation":
                  case "animationName":
                    r += br(a) + ":" + s + ";";
                    break;
                  default:
                    r += a + "{" + s + "}";
                }
              } else
                for (var c = 0; c < o.length; c++)
                  yr(o[c]) && (r += br(a) + ":" + vr(a, o[c]) + ";");
            }
          return r;
        })(e, t, n);
      case "function":
        if (void 0 !== e) {
          var l = xr,
            s = n(e);
          return (xr = l), wr(e, t, s);
        }
    }
    var c = n;
    if (null == t) return c;
    var u = t[c];
    return void 0 !== u ? u : c;
  }
  var xr,
    Sr = /label:\s*([^\s;{]+)\s*(;|$)/g;
  function kr(e, t, n) {
    if (
      1 === e.length &&
      "object" === typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0];
    var r = !0,
      i = "";
    xr = void 0;
    var a = e[0];
    null == a || void 0 === a.raw
      ? ((r = !1), (i += wr(n, t, a)))
      : (i += a[0]);
    for (var o = 1; o < e.length; o++) {
      if (((i += wr(n, t, e[o])), r)) i += a[o];
    }
    Sr.lastIndex = 0;
    for (var l, s = ""; null !== (l = Sr.exec(i)); ) s += "-" + l[1];
    var c =
      (function (e) {
        for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(r)) |
                  ((255 & e.charCodeAt(++r)) << 8) |
                  ((255 & e.charCodeAt(++r)) << 16) |
                  ((255 & e.charCodeAt(++r)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (n =
              (1540483477 * (65535 & (t ^= t >>> 24)) +
                ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
        switch (i) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n =
              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
              ((59797 * (n >>> 16)) << 16);
        }
        return (
          ((n =
            1540483477 * (65535 & (n ^= n >>> 13)) +
            ((59797 * (n >>> 16)) << 16)) ^
            (n >>> 15)) >>>
          0
        ).toString(36);
      })(i) + s;
    return { name: c, styles: i, next: xr };
  }
  var Cr = !!a.useInsertionEffect && a.useInsertionEffect,
    Er =
      Cr ||
      function (e) {
        return e();
      },
    _r =
      (Cr || i.useLayoutEffect,
      i.createContext(
        "undefined" !== typeof HTMLElement ? dr({ key: "css" }) : null
      )),
    Tr =
      (_r.Provider,
      function (e) {
        return (0, i.forwardRef)(function (t, n) {
          var r = (0, i.useContext)(_r);
          return e(t, r, n);
        });
      }),
    jr = i.createContext({});
  var Or = function (e, t, n) {
      var r = e.key + "-" + t.name;
      !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
    },
    zr =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Rr = pr(function (e) {
      return (
        zr.test(e) ||
        (111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) < 91)
      );
    }),
    Pr = function (e) {
      return "theme" !== e;
    },
    Ar = function (e) {
      return "string" === typeof e && e.charCodeAt(0) > 96 ? Rr : Pr;
    },
    Mr = function (e, t, n) {
      var r;
      if (t) {
        var i = t.shouldForwardProp;
        r =
          e.__emotion_forwardProp && i
            ? function (t) {
                return e.__emotion_forwardProp(t) && i(t);
              }
            : i;
      }
      return "function" !== typeof r && n && (r = e.__emotion_forwardProp), r;
    },
    Lr = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      return (
        Or(t, n, r),
        Er(function () {
          return (function (e, t, n) {
            Or(e, t, n);
            var r = e.key + "-" + t.name;
            if (void 0 === e.inserted[t.name]) {
              var i = t;
              do {
                e.insert(t === i ? "." + r : "", i, e.sheet, !0), (i = i.next);
              } while (void 0 !== i);
            }
          })(t, n, r);
        }),
        null
      );
    },
    Nr = function e(t, n) {
      var r,
        a,
        o = t.__emotion_real === t,
        l = (o && t.__emotion_base) || t;
      void 0 !== n && ((r = n.label), (a = n.target));
      var s = Mr(t, n, o),
        c = s || Ar(l),
        u = !c("as");
      return function () {
        var d = arguments,
          f =
            o && void 0 !== t.__emotion_styles
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (void 0 !== r && f.push("label:" + r + ";"),
          null == d[0] || void 0 === d[0].raw)
        )
          f.push.apply(f, d);
        else {
          var p = d[0];
          f.push(p[0]);
          for (var h = d.length, m = 1; m < h; m++) f.push(d[m], p[m]);
        }
        var g = Tr(function (e, t, n) {
          var r = (u && e.as) || l,
            o = "",
            d = [],
            p = e;
          if (null == e.theme) {
            for (var h in ((p = {}), e)) p[h] = e[h];
            p.theme = i.useContext(jr);
          }
          "string" === typeof e.className
            ? (o = (function (e, t, n) {
                var r = "";
                return (
                  n.split(" ").forEach(function (n) {
                    void 0 !== e[n] ? t.push(e[n] + ";") : n && (r += n + " ");
                  }),
                  r
                );
              })(t.registered, d, e.className))
            : null != e.className && (o = e.className + " ");
          var m = kr(f.concat(d), t.registered, p);
          (o += t.key + "-" + m.name), void 0 !== a && (o += " " + a);
          var g = u && void 0 === s ? Ar(r) : c,
            y = {};
          for (var b in e) (u && "as" === b) || (g(b) && (y[b] = e[b]));
          return (
            (y.className = o),
            n && (y.ref = n),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(Lr, {
                cache: t,
                serialized: m,
                isStringTag: "string" === typeof r,
              }),
              i.createElement(r, y)
            )
          );
        });
        return (
          (g.displayName =
            void 0 !== r
              ? r
              : "Styled(" +
                ("string" === typeof l
                  ? l
                  : l.displayName || l.name || "Component") +
                ")"),
          (g.defaultProps = t.defaultProps),
          (g.__emotion_real = g),
          (g.__emotion_base = l),
          (g.__emotion_styles = f),
          (g.__emotion_forwardProp = s),
          Object.defineProperty(g, "toString", {
            value: function () {
              return "." + a;
            },
          }),
          (g.withComponent = function (t, r) {
            return e(
              t,
              cn({}, n, r, { shouldForwardProp: Mr(g, r, !0) })
            ).apply(void 0, f);
          }),
          g
        );
      };
    }.bind(null);
  [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ].forEach(function (e) {
    Nr[e] = Nr(e);
  });
  const Dr = [];
  function Ir(e) {
    return (Dr[0] = e), kr(Dr);
  }
  var Br = n(191);
  function Fr(e) {
    if ("object" !== typeof e || null === e) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (null === t ||
        t === Object.prototype ||
        null === Object.getPrototypeOf(t)) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  }
  function $r(e) {
    if (i.isValidElement(e) || (0, Br.Hy)(e) || !Fr(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = $r(e[n]);
      }),
      t
    );
  }
  function Hr(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : { clone: !0 };
    const r = n.clone ? { ...e } : e;
    return (
      Fr(e) &&
        Fr(t) &&
        Object.keys(t).forEach((a) => {
          i.isValidElement(t[a]) || (0, Br.Hy)(t[a])
            ? (r[a] = t[a])
            : Fr(t[a]) && Object.prototype.hasOwnProperty.call(e, a) && Fr(e[a])
            ? (r[a] = Hr(e[a], t[a], n))
            : n.clone
            ? (r[a] = Fr(t[a]) ? $r(t[a]) : t[a])
            : (r[a] = t[a]);
        }),
      r
    );
  }
  function Ur(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
        ...i
      } = e,
      a = ((e) => {
        const t = Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
        return (
          t.sort((e, t) => e.val - t.val),
          t.reduce((e, t) => ({ ...e, [t.key]: t.val }), {})
        );
      })(t),
      o = Object.keys(a);
    function l(e) {
      return `@media (min-width:${"number" === typeof t[e] ? t[e] : e}${n})`;
    }
    function s(e) {
      return `@media (max-width:${
        ("number" === typeof t[e] ? t[e] : e) - r / 100
      }${n})`;
    }
    function c(e, i) {
      const a = o.indexOf(i);
      return `@media (min-width:${
        "number" === typeof t[e] ? t[e] : e
      }${n}) and (max-width:${
        (-1 !== a && "number" === typeof t[o[a]] ? t[o[a]] : i) - r / 100
      }${n})`;
    }
    return {
      keys: o,
      values: a,
      up: l,
      down: s,
      between: c,
      only: function (e) {
        return o.indexOf(e) + 1 < o.length ? c(e, o[o.indexOf(e) + 1]) : l(e);
      },
      not: function (e) {
        const t = o.indexOf(e);
        return 0 === t
          ? l(o[1])
          : t === o.length - 1
          ? s(o[t])
          : c(e, o[o.indexOf(e) + 1]).replace("@media", "@media not all and");
      },
      unit: n,
      ...i,
    };
  }
  const Vr = { borderRadius: 4 },
    Wr = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    qr = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${Wr[e]}px)`,
    },
    Xr = {
      containerQueries: (e) => ({
        up: (t) => {
          let n = "number" === typeof t ? t : Wr[t] || t;
          return (
            "number" === typeof n && (n = `${n}px`),
            e
              ? `@container ${e} (min-width:${n})`
              : `@container (min-width:${n})`
          );
        },
      }),
    };
  function Gr(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const e = r.breakpoints || qr;
      return t.reduce((r, i, a) => ((r[e.up(e.keys[a])] = n(t[a])), r), {});
    }
    if ("object" === typeof t) {
      const e = r.breakpoints || qr;
      return Object.keys(t).reduce((i, a) => {
        if (
          (function (e, t) {
            return (
              "@" === t ||
              (t.startsWith("@") &&
                (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/)))
            );
          })(e.keys, a)
        ) {
          const e = (function (e, t) {
            const n = t.match(/^@([^/]+)?\/?(.+)?$/);
            if (!n) return null;
            const [, r, i] = n,
              a = Number.isNaN(+r) ? r || 0 : +r;
            return e.containerQueries(i).up(a);
          })(r.containerQueries ? r : Xr, a);
          e && (i[e] = n(t[a], a));
        } else if (Object.keys(e.values || Wr).includes(a)) {
          i[e.up(a)] = n(t[a], a);
        } else {
          const e = a;
          i[e] = t[e];
        }
        return i;
      }, {});
    }
    return n(t);
  }
  function Yr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const t = e.keys?.reduce((t, n) => ((t[e.up(n)] = {}), t), {});
    return t || {};
  }
  function Kr(e, t) {
    return e.reduce((e, t) => {
      const n = e[t];
      return (!n || 0 === Object.keys(n).length) && delete e[t], e;
    }, t);
  }
  function Qr(e, t) {
    let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!t || "string" !== typeof t) return null;
    if (e && e.vars && n) {
      const n = `vars.${t}`
        .split(".")
        .reduce((e, t) => (e && e[t] ? e[t] : null), e);
      if (null != n) return n;
    }
    return t.split(".").reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
  }
  function Jr(e, t, n) {
    let r,
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
    return (
      (r =
        "function" === typeof e
          ? e(n)
          : Array.isArray(e)
          ? e[n] || i
          : Qr(e, n) || i),
      t && (r = t(r, i, e)),
      r
    );
  }
  const Zr = function (e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
      a = (e) => {
        if (null == e[t]) return null;
        const a = e[t],
          o = Qr(e.theme, r) || {};
        return Gr(e, a, (e) => {
          let r = Jr(o, i, e);
          return (
            e === r &&
              "string" === typeof e &&
              (r = Jr(o, i, `${t}${"default" === e ? "" : ln(e)}`, e)),
            !1 === n ? r : { [n]: r }
          );
        });
      };
    return (a.propTypes = {}), (a.filterProps = [t]), a;
  };
  const ei = function (e, t) {
    return t ? Hr(e, t, { clone: !1 }) : e;
  };
  const ti = { m: "margin", p: "padding" },
    ni = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    ri = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    ii = (function (e) {
      const t = {};
      return (n) => (void 0 === t[n] && (t[n] = e(n)), t[n]);
    })((e) => {
      if (e.length > 2) {
        if (!ri[e]) return [e];
        e = ri[e];
      }
      const [t, n] = e.split(""),
        r = ti[t],
        i = ni[n] || "";
      return Array.isArray(i) ? i.map((e) => r + e) : [r + i];
    }),
    ai = [
      "m",
      "mt",
      "mr",
      "mb",
      "ml",
      "mx",
      "my",
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginX",
      "marginY",
      "marginInline",
      "marginInlineStart",
      "marginInlineEnd",
      "marginBlock",
      "marginBlockStart",
      "marginBlockEnd",
    ],
    oi = [
      "p",
      "pt",
      "pr",
      "pb",
      "pl",
      "px",
      "py",
      "padding",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingX",
      "paddingY",
      "paddingInline",
      "paddingInlineStart",
      "paddingInlineEnd",
      "paddingBlock",
      "paddingBlockStart",
      "paddingBlockEnd",
    ],
    li = [...ai, ...oi];
  function si(e, t, n, r) {
    const i = Qr(e, t, !0) ?? n;
    return "number" === typeof i || "string" === typeof i
      ? (e) =>
          "string" === typeof e
            ? e
            : "string" === typeof i
            ? i.startsWith("var(") && 0 === e
              ? 0
              : i.startsWith("var(") && 1 === e
              ? i
              : `calc(${e} * ${i})`
            : i * e
      : Array.isArray(i)
      ? (e) => {
          if ("string" === typeof e) return e;
          const t = Math.abs(e);
          const n = i[t];
          return e >= 0
            ? n
            : "number" === typeof n
            ? -n
            : "string" === typeof n && n.startsWith("var(")
            ? `calc(-1 * ${n})`
            : `-${n}`;
        }
      : "function" === typeof i
      ? i
      : () => {};
  }
  function ci(e) {
    return si(e, "spacing", 8);
  }
  function ui(e, t) {
    return "string" === typeof t || null == t ? t : e(t);
  }
  function di(e, t, n, r) {
    if (!t.includes(n)) return null;
    const i = (function (e, t) {
      return (n) => e.reduce((e, r) => ((e[r] = ui(t, n)), e), {});
    })(ii(n), r);
    return Gr(e, e[n], i);
  }
  function fi(e, t) {
    const n = ci(e.theme);
    return Object.keys(e)
      .map((r) => di(e, t, r, n))
      .reduce(ei, {});
  }
  function pi(e) {
    return fi(e, ai);
  }
  function hi(e) {
    return fi(e, oi);
  }
  function mi(e) {
    return fi(e, li);
  }
  (pi.propTypes = {}),
    (pi.filterProps = ai),
    (hi.propTypes = {}),
    (hi.filterProps = oi),
    (mi.propTypes = {}),
    (mi.filterProps = li);
  function gi() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : ci({ spacing: e });
    if (e.mui) return e;
    const n = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      return (0 === n.length ? [1] : n)
        .map((e) => {
          const n = t(e);
          return "number" === typeof n ? `${n}px` : n;
        })
        .join(" ");
    };
    return (n.mui = !0), n;
  }
  const yi = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    const r = t.reduce(
        (e, t) => (
          t.filterProps.forEach((n) => {
            e[n] = t;
          }),
          e
        ),
        {}
      ),
      i = (e) =>
        Object.keys(e).reduce((t, n) => (r[n] ? ei(t, r[n](e)) : t), {});
    return (
      (i.propTypes = {}),
      (i.filterProps = t.reduce((e, t) => e.concat(t.filterProps), [])),
      i
    );
  };
  function bi(e) {
    return "number" !== typeof e ? e : `${e}px solid`;
  }
  function vi(e, t) {
    return Zr({ prop: e, themeKey: "borders", transform: t });
  }
  const wi = vi("border", bi),
    xi = vi("borderTop", bi),
    Si = vi("borderRight", bi),
    ki = vi("borderBottom", bi),
    Ci = vi("borderLeft", bi),
    Ei = vi("borderColor"),
    _i = vi("borderTopColor"),
    Ti = vi("borderRightColor"),
    ji = vi("borderBottomColor"),
    Oi = vi("borderLeftColor"),
    zi = vi("outline", bi),
    Ri = vi("outlineColor"),
    Pi = (e) => {
      if (void 0 !== e.borderRadius && null !== e.borderRadius) {
        const t = si(e.theme, "shape.borderRadius", 4),
          n = (e) => ({ borderRadius: ui(t, e) });
        return Gr(e, e.borderRadius, n);
      }
      return null;
    };
  (Pi.propTypes = {}), (Pi.filterProps = ["borderRadius"]);
  yi(wi, xi, Si, ki, Ci, Ei, _i, Ti, ji, Oi, Pi, zi, Ri);
  const Ai = (e) => {
    if (void 0 !== e.gap && null !== e.gap) {
      const t = si(e.theme, "spacing", 8),
        n = (e) => ({ gap: ui(t, e) });
      return Gr(e, e.gap, n);
    }
    return null;
  };
  (Ai.propTypes = {}), (Ai.filterProps = ["gap"]);
  const Mi = (e) => {
    if (void 0 !== e.columnGap && null !== e.columnGap) {
      const t = si(e.theme, "spacing", 8),
        n = (e) => ({ columnGap: ui(t, e) });
      return Gr(e, e.columnGap, n);
    }
    return null;
  };
  (Mi.propTypes = {}), (Mi.filterProps = ["columnGap"]);
  const Li = (e) => {
    if (void 0 !== e.rowGap && null !== e.rowGap) {
      const t = si(e.theme, "spacing", 8),
        n = (e) => ({ rowGap: ui(t, e) });
      return Gr(e, e.rowGap, n);
    }
    return null;
  };
  (Li.propTypes = {}), (Li.filterProps = ["rowGap"]);
  yi(
    Ai,
    Mi,
    Li,
    Zr({ prop: "gridColumn" }),
    Zr({ prop: "gridRow" }),
    Zr({ prop: "gridAutoFlow" }),
    Zr({ prop: "gridAutoColumns" }),
    Zr({ prop: "gridAutoRows" }),
    Zr({ prop: "gridTemplateColumns" }),
    Zr({ prop: "gridTemplateRows" }),
    Zr({ prop: "gridTemplateAreas" }),
    Zr({ prop: "gridArea" })
  );
  function Ni(e, t) {
    return "grey" === t ? t : e;
  }
  yi(
    Zr({ prop: "color", themeKey: "palette", transform: Ni }),
    Zr({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: Ni,
    }),
    Zr({ prop: "backgroundColor", themeKey: "palette", transform: Ni })
  );
  function Di(e) {
    return e <= 1 && 0 !== e ? 100 * e + "%" : e;
  }
  const Ii = Zr({ prop: "width", transform: Di }),
    Bi = (e) => {
      if (void 0 !== e.maxWidth && null !== e.maxWidth) {
        const t = (t) => {
          const n = e.theme?.breakpoints?.values?.[t] || Wr[t];
          return n
            ? "px" !== e.theme?.breakpoints?.unit
              ? { maxWidth: `${n}${e.theme.breakpoints.unit}` }
              : { maxWidth: n }
            : { maxWidth: Di(t) };
        };
        return Gr(e, e.maxWidth, t);
      }
      return null;
    };
  Bi.filterProps = ["maxWidth"];
  const Fi = Zr({ prop: "minWidth", transform: Di }),
    $i = Zr({ prop: "height", transform: Di }),
    Hi = Zr({ prop: "maxHeight", transform: Di }),
    Ui = Zr({ prop: "minHeight", transform: Di }),
    Vi =
      (Zr({ prop: "size", cssProperty: "width", transform: Di }),
      Zr({ prop: "size", cssProperty: "height", transform: Di }),
      yi(Ii, Bi, Fi, $i, Hi, Ui, Zr({ prop: "boxSizing" })),
      {
        border: { themeKey: "borders", transform: bi },
        borderTop: { themeKey: "borders", transform: bi },
        borderRight: { themeKey: "borders", transform: bi },
        borderBottom: { themeKey: "borders", transform: bi },
        borderLeft: { themeKey: "borders", transform: bi },
        borderColor: { themeKey: "palette" },
        borderTopColor: { themeKey: "palette" },
        borderRightColor: { themeKey: "palette" },
        borderBottomColor: { themeKey: "palette" },
        borderLeftColor: { themeKey: "palette" },
        outline: { themeKey: "borders", transform: bi },
        outlineColor: { themeKey: "palette" },
        borderRadius: { themeKey: "shape.borderRadius", style: Pi },
        color: { themeKey: "palette", transform: Ni },
        bgcolor: {
          themeKey: "palette",
          cssProperty: "backgroundColor",
          transform: Ni,
        },
        backgroundColor: { themeKey: "palette", transform: Ni },
        p: { style: hi },
        pt: { style: hi },
        pr: { style: hi },
        pb: { style: hi },
        pl: { style: hi },
        px: { style: hi },
        py: { style: hi },
        padding: { style: hi },
        paddingTop: { style: hi },
        paddingRight: { style: hi },
        paddingBottom: { style: hi },
        paddingLeft: { style: hi },
        paddingX: { style: hi },
        paddingY: { style: hi },
        paddingInline: { style: hi },
        paddingInlineStart: { style: hi },
        paddingInlineEnd: { style: hi },
        paddingBlock: { style: hi },
        paddingBlockStart: { style: hi },
        paddingBlockEnd: { style: hi },
        m: { style: pi },
        mt: { style: pi },
        mr: { style: pi },
        mb: { style: pi },
        ml: { style: pi },
        mx: { style: pi },
        my: { style: pi },
        margin: { style: pi },
        marginTop: { style: pi },
        marginRight: { style: pi },
        marginBottom: { style: pi },
        marginLeft: { style: pi },
        marginX: { style: pi },
        marginY: { style: pi },
        marginInline: { style: pi },
        marginInlineStart: { style: pi },
        marginInlineEnd: { style: pi },
        marginBlock: { style: pi },
        marginBlockStart: { style: pi },
        marginBlockEnd: { style: pi },
        displayPrint: {
          cssProperty: !1,
          transform: (e) => ({ "@media print": { display: e } }),
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: { style: Ai },
        rowGap: { style: Li },
        columnGap: { style: Mi },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: { themeKey: "zIndex" },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: { themeKey: "shadows" },
        width: { transform: Di },
        maxWidth: { style: Bi },
        minWidth: { transform: Di },
        height: { transform: Di },
        maxHeight: { transform: Di },
        minHeight: { transform: Di },
        boxSizing: {},
        font: { themeKey: "font" },
        fontFamily: { themeKey: "typography" },
        fontSize: { themeKey: "typography" },
        fontStyle: { themeKey: "typography" },
        fontWeight: { themeKey: "typography" },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: { cssProperty: !1, themeKey: "typography" },
      });
  const Wi = (function () {
    function e(e, t, n, r) {
      const i = { [e]: t, theme: n },
        a = r[e];
      if (!a) return { [e]: t };
      const { cssProperty: o = e, themeKey: l, transform: s, style: c } = a;
      if (null == t) return null;
      if ("typography" === l && "inherit" === t) return { [e]: t };
      const u = Qr(n, l) || {};
      if (c) return c(i);
      return Gr(i, t, (t) => {
        let n = Jr(u, s, t);
        return (
          t === n &&
            "string" === typeof t &&
            (n = Jr(u, s, `${e}${"default" === t ? "" : ln(t)}`, t)),
          !1 === o ? n : { [o]: n }
        );
      });
    }
    return function t(n) {
      const { sx: r, theme: i = {} } = n || {};
      if (!r) return null;
      const a = i.unstable_sxConfig ?? Vi;
      function o(n) {
        let r = n;
        if ("function" === typeof n) r = n(i);
        else if ("object" !== typeof n) return n;
        if (!r) return null;
        const o = Yr(i.breakpoints),
          l = Object.keys(o);
        let s = o;
        return (
          Object.keys(r).forEach((n) => {
            const o = (function (e, t) {
              return "function" === typeof e ? e(t) : e;
            })(r[n], i);
            if (null !== o && void 0 !== o)
              if ("object" === typeof o)
                if (a[n]) s = ei(s, e(n, o, i, a));
                else {
                  const e = Gr({ theme: i }, o, (e) => ({ [n]: e }));
                  !(function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    const r = t.reduce((e, t) => e.concat(Object.keys(t)), []),
                      i = new Set(r);
                    return t.every((e) => i.size === Object.keys(e).length);
                  })(e, o)
                    ? (s = ei(s, e))
                    : (s[n] = t({ sx: o, theme: i }));
                }
              else s = ei(s, e(n, o, i, a));
          }),
          (function (e, t) {
            if (!e.containerQueries) return t;
            const n = Object.keys(t)
              .filter((e) => e.startsWith("@container"))
              .sort((e, t) => {
                const n = /min-width:\s*([0-9.]+)/;
                return +(e.match(n)?.[1] || 0) - +(t.match(n)?.[1] || 0);
              });
            return n.length
              ? n.reduce(
                  (e, n) => {
                    const r = t[n];
                    return delete e[n], (e[n] = r), e;
                  },
                  { ...t }
                )
              : t;
          })(i, Kr(l, s))
        );
      }
      return Array.isArray(r) ? r.map(o) : o(r);
    };
  })();
  Wi.filterProps = ["sx"];
  const qi = Wi;
  function Xi(e, t) {
    const n = this;
    if (n.vars) {
      if (
        !n.colorSchemes?.[e] ||
        "function" !== typeof n.getColorSchemeSelector
      )
        return {};
      let r = n.getColorSchemeSelector(e);
      return "&" === r
        ? t
        : ((r.includes("data-") || r.includes(".")) &&
            (r = `*:where(${r.replace(/\s*&$/, "")}) &`),
          { [r]: t });
    }
    return n.palette.mode === e ? t : {};
  }
  const Gi = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      breakpoints: t = {},
      palette: n = {},
      spacing: r,
      shape: i = {},
      ...a
    } = e;
    let o = Hr(
      {
        breakpoints: Ur(t),
        direction: "ltr",
        components: {},
        palette: { mode: "light", ...n },
        spacing: gi(r),
        shape: { ...Vr, ...i },
      },
      a
    );
    (o = (function (e) {
      const t = (e, t) =>
        e.replace("@media", t ? `@container ${t}` : "@container");
      function n(n, r) {
        (n.up = function () {
          return t(e.breakpoints.up(...arguments), r);
        }),
          (n.down = function () {
            return t(e.breakpoints.down(...arguments), r);
          }),
          (n.between = function () {
            return t(e.breakpoints.between(...arguments), r);
          }),
          (n.only = function () {
            return t(e.breakpoints.only(...arguments), r);
          }),
          (n.not = function () {
            const n = t(e.breakpoints.not(...arguments), r);
            return n.includes("not all and")
              ? n
                  .replace("not all and ", "")
                  .replace("min-width:", "width<")
                  .replace("max-width:", "width>")
                  .replace("and", "or")
              : n;
          });
      }
      const r = {},
        i = (e) => (n(r, e), r);
      return n(i), { ...e, containerQueries: i };
    })(o)),
      (o.applyStyles = Xi);
    for (
      var l = arguments.length, s = new Array(l > 1 ? l - 1 : 0), c = 1;
      c < l;
      c++
    )
      s[c - 1] = arguments[c];
    return (
      (o = s.reduce((e, t) => Hr(e, t), o)),
      (o.unstable_sxConfig = { ...Vi, ...a?.unstable_sxConfig }),
      (o.unstable_sx = function (e) {
        return qi({ sx: e, theme: this });
      }),
      o
    );
  };
  function Yi(e) {
    const { variants: t, ...n } = e,
      r = { variants: t, style: Ir(n), isProcessed: !0 };
    return (
      r.style === n ||
        (t &&
          t.forEach((e) => {
            "function" !== typeof e.style && (e.style = Ir(e.style));
          })),
      r
    );
  }
  const Ki = Gi();
  function Qi(e) {
    return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
  }
  function Ji(e) {
    return e ? (t, n) => n[e] : null;
  }
  function Zi(e, t) {
    const n = "function" === typeof t ? t(e) : t;
    if (Array.isArray(n)) return n.flatMap((t) => Zi(e, t));
    if (Array.isArray(n?.variants)) {
      let t;
      if (n.isProcessed) t = n.style;
      else {
        const { variants: e, ...r } = n;
        t = r;
      }
      return ea(e, n.variants, [t]);
    }
    return n?.isProcessed ? n.style : n;
  }
  function ea(e, t) {
    let n,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    e: for (let i = 0; i < t.length; i += 1) {
      const a = t[i];
      if ("function" === typeof a.props) {
        if (
          ((n ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
          !a.props(n))
        )
          continue;
      } else
        for (const t in a.props)
          if (e[t] !== a.props[t] && e.ownerState?.[t] !== a.props[t])
            continue e;
      "function" === typeof a.style
        ? ((n ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
          r.push(a.style(n)))
        : r.push(a.style);
    }
    return r;
  }
  function ta(e, t) {}
  function na(e) {
    return e ? e.charAt(0).toLowerCase() + e.slice(1) : e;
  }
  const ra = function (e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Number.MIN_SAFE_INTEGER,
      n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : Number.MAX_SAFE_INTEGER;
    return Math.max(t, Math.min(e, n));
  };
  function ia(e) {
    return ra(
      e,
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
    );
  }
  function aa(e) {
    if (e.type) return e;
    if ("#" === e.charAt(0))
      return aa(
        (function (e) {
          e = e.slice(1);
          const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
          let n = e.match(t);
          return (
            n && 1 === n[0].length && (n = n.map((e) => e + e)),
            n
              ? `rgb${4 === n.length ? "a" : ""}(${n
                  .map((e, t) =>
                    t < 3
                      ? parseInt(e, 16)
                      : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
                  )
                  .join(", ")})`
              : ""
          );
        })(e)
      );
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
      throw new Error(on(9, e));
    let r,
      i = e.substring(t + 1, e.length - 1);
    if ("color" === n) {
      if (
        ((i = i.split(" ")),
        (r = i.shift()),
        4 === i.length && "/" === i[3].charAt(0) && (i[3] = i[3].slice(1)),
        !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
          r
        ))
      )
        throw new Error(on(10, r));
    } else i = i.split(",");
    return (
      (i = i.map((e) => parseFloat(e))), { type: n, values: i, colorSpace: r }
    );
  }
  const oa = (e, t) => {
    try {
      return ((e) => {
        const t = aa(e);
        return t.values
          .slice(0, 3)
          .map((e, n) => (t.type.includes("hsl") && 0 !== n ? `${e}%` : e))
          .join(" ");
      })(e);
    } catch (n) {
      return e;
    }
  };
  function la(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
      t.includes("rgb")
        ? (r = r.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
        : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
      (r = t.includes("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`),
      `${t}(${r})`
    );
  }
  function sa(e) {
    e = aa(e);
    const { values: t } = e,
      n = t[0],
      r = t[1] / 100,
      i = t[2] / 100,
      a = r * Math.min(i, 1 - i),
      o = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (e + n / 30) % 12;
        return i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1);
      };
    let l = "rgb";
    const s = [
      Math.round(255 * o(0)),
      Math.round(255 * o(8)),
      Math.round(255 * o(4)),
    ];
    return (
      "hsla" === e.type && ((l += "a"), s.push(t[3])),
      la({ type: l, values: s })
    );
  }
  function ca(e) {
    let t =
      "hsl" === (e = aa(e)).type || "hsla" === e.type
        ? aa(sa(e)).values
        : e.values;
    return (
      (t = t.map(
        (t) => (
          "color" !== e.type && (t /= 255),
          t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
        )
      )),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function ua(e, t) {
    return (
      (e = aa(e)),
      (t = ia(t)),
      ("rgb" !== e.type && "hsl" !== e.type) || (e.type += "a"),
      "color" === e.type ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      la(e)
    );
  }
  function da(e, t, n) {
    try {
      return ua(e, t);
    } catch (r) {
      return e;
    }
  }
  function fa(e, t) {
    if (((e = aa(e)), (t = ia(t)), e.type.includes("hsl")))
      e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return la(e);
  }
  function pa(e, t, n) {
    try {
      return fa(e, t);
    } catch (r) {
      return e;
    }
  }
  function ha(e, t) {
    if (((e = aa(e)), (t = ia(t)), e.type.includes("hsl")))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.includes("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return la(e);
  }
  function ma(e, t, n) {
    try {
      return ha(e, t);
    } catch (r) {
      return e;
    }
  }
  function ga(e, t, n) {
    try {
      return (function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.15;
        return ca(e) > 0.5 ? fa(e, t) : ha(e, t);
      })(e, t);
    } catch (r) {
      return e;
    }
  }
  const ya = { black: "#000", white: "#fff" },
    ba = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    va = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff",
    },
    wa = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
    },
    xa = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
    },
    Sa = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
    },
    ka = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea",
    },
    Ca = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
    };
  function Ea() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: ya.white, default: ya.white },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    };
  }
  const _a = Ea();
  function Ta() {
    return {
      text: {
        primary: ya.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: ya.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    };
  }
  const ja = Ta();
  function Oa(e, t, n, r) {
    const i = r.light || r,
      a = r.dark || 1.5 * r;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : "light" === t
        ? (e.light = ha(e.main, i))
        : "dark" === t && (e.dark = fa(e.main, a)));
  }
  function za(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
        ...i
      } = e,
      a =
        e.primary ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: Sa[200], light: Sa[50], dark: Sa[400] }
            : { main: Sa[700], light: Sa[400], dark: Sa[800] };
        })(t),
      o =
        e.secondary ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: va[200], light: va[50], dark: va[400] }
            : { main: va[500], light: va[300], dark: va[700] };
        })(t),
      l =
        e.error ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: wa[500], light: wa[300], dark: wa[700] }
            : { main: wa[700], light: wa[400], dark: wa[800] };
        })(t),
      s =
        e.info ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: ka[400], light: ka[300], dark: ka[700] }
            : { main: ka[700], light: ka[500], dark: ka[900] };
        })(t),
      c =
        e.success ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: Ca[400], light: Ca[300], dark: Ca[700] }
            : { main: Ca[800], light: Ca[500], dark: Ca[900] };
        })(t),
      u =
        e.warning ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: xa[400], light: xa[300], dark: xa[700] }
            : { main: "#ed6c02", light: xa[500], dark: xa[900] };
        })(t);
    function d(e) {
      const t =
        (function (e, t) {
          const n = ca(e),
            r = ca(t);
          return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
        })(e, ja.text.primary) >= n
          ? ja.text.primary
          : _a.text.primary;
      return t;
    }
    const f = (e) => {
      let {
        color: t,
        name: n,
        mainShade: i = 500,
        lightShade: a = 300,
        darkShade: o = 700,
      } = e;
      if (
        ((t = { ...t }),
        !t.main && t[i] && (t.main = t[i]),
        !t.hasOwnProperty("main"))
      )
        throw new Error(on(11, n ? ` (${n})` : "", i));
      if ("string" !== typeof t.main)
        throw new Error(on(12, n ? ` (${n})` : "", JSON.stringify(t.main)));
      return (
        Oa(t, "light", a, r),
        Oa(t, "dark", o, r),
        t.contrastText || (t.contrastText = d(t.main)),
        t
      );
    };
    let p;
    "light" === t ? (p = Ea()) : "dark" === t && (p = Ta());
    return Hr(
      {
        common: { ...ya },
        mode: t,
        primary: f({ color: a, name: "primary" }),
        secondary: f({
          color: o,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: l, name: "error" }),
        warning: f({ color: u, name: "warning" }),
        info: f({ color: s, name: "info" }),
        success: f({ color: c, name: "success" }),
        grey: ba,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
        ...p,
      },
      i
    );
  }
  function Ra() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    function t() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      if (!r.length) return "";
      const a = r[0];
      return "string" !== typeof a ||
        a.match(
          /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
        )
        ? `, ${a}`
        : `, var(--${e ? `${e}-` : ""}${a}${t(...r.slice(1))})`;
    }
    return function (n) {
      for (
        var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1;
        a < r;
        a++
      )
        i[a - 1] = arguments[a];
      return `var(--${e ? `${e}-` : ""}${n}${t(...i)})`;
    };
  }
  function Pa(e) {
    const t = {};
    return (
      Object.entries(e).forEach((e) => {
        const [n, r] = e;
        "object" === typeof r &&
          (t[n] = `${r.fontStyle ? `${r.fontStyle} ` : ""}${
            r.fontVariant ? `${r.fontVariant} ` : ""
          }${r.fontWeight ? `${r.fontWeight} ` : ""}${
            r.fontStretch ? `${r.fontStretch} ` : ""
          }${r.fontSize || ""}${r.lineHeight ? `/${r.lineHeight} ` : ""}${
            r.fontFamily || ""
          }`);
      }),
      t
    );
  }
  const Aa = function (e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
      i = e;
    t.forEach((e, a) => {
      a === t.length - 1
        ? Array.isArray(i)
          ? (i[Number(e)] = n)
          : i && "object" === typeof i && (i[e] = n)
        : i &&
          "object" === typeof i &&
          (i[e] || (i[e] = r.includes(e) ? [] : {}), (i = i[e]));
    });
  };
  function Ma(e, t) {
    const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
      i = {},
      a = {},
      o = {};
    var l, s;
    return (
      (l = (e, t, l) => {
        if (
          ("string" === typeof t || "number" === typeof t) &&
          (!r || !r(e, t))
        ) {
          const r = `--${n ? `${n}-` : ""}${e.join("-")}`,
            s = ((e, t) =>
              "number" === typeof t
                ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((t) =>
                    e.includes(t)
                  ) || e[e.length - 1].toLowerCase().includes("opacity")
                  ? t
                  : `${t}px`
                : t)(e, t);
          Object.assign(i, { [r]: s }),
            Aa(a, e, `var(${r})`, l),
            Aa(o, e, `var(${r}, ${s})`, l);
        }
      }),
      (s = (e) => "vars" === e[0]),
      (function e(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        Object.entries(t).forEach((t) => {
          let [i, a] = t;
          (!s || (s && !s([...n, i]))) &&
            void 0 !== a &&
            null !== a &&
            ("object" === typeof a && Object.keys(a).length > 0
              ? e(a, [...n, i], Array.isArray(a) ? [...r, i] : r)
              : l([...n, i], a, r));
        });
      })(e),
      { css: i, vars: a, varsWithDefaults: o }
    );
  }
  const La = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const {
        getSelector: n = g,
        disableCssColorScheme: r,
        colorSchemeSelector: i,
      } = t,
      {
        colorSchemes: a = {},
        components: o,
        defaultColorScheme: l = "light",
        ...s
      } = e,
      { vars: c, css: u, varsWithDefaults: d } = Ma(s, t);
    let f = d;
    const p = {},
      { [l]: h, ...m } = a;
    if (
      (Object.entries(m || {}).forEach((e) => {
        let [n, r] = e;
        const { vars: i, css: a, varsWithDefaults: o } = Ma(r, t);
        (f = Hr(f, o)), (p[n] = { css: a, vars: i });
      }),
      h)
    ) {
      const { css: e, vars: n, varsWithDefaults: r } = Ma(h, t);
      (f = Hr(f, r)), (p[l] = { css: e, vars: n });
    }
    function g(t, n) {
      let r = i;
      if (
        ("class" === i && (r = ".%s"),
        "data" === i && (r = "[data-%s]"),
        i?.startsWith("data-") && !i.includes("%s") && (r = `[${i}="%s"]`),
        t)
      ) {
        if ("media" === r) {
          if (e.defaultColorScheme === t) return ":root";
          const r = a[t]?.palette?.mode || t;
          return { [`@media (prefers-color-scheme: ${r})`]: { ":root": n } };
        }
        if (r)
          return e.defaultColorScheme === t
            ? `:root, ${r.replace("%s", String(t))}`
            : r.replace("%s", String(t));
      }
      return ":root";
    }
    return {
      vars: f,
      generateThemeVars: () => {
        let e = { ...c };
        return (
          Object.entries(p).forEach((t) => {
            let [, { vars: n }] = t;
            e = Hr(e, n);
          }),
          e
        );
      },
      generateStyleSheets: () => {
        const t = [],
          i = e.defaultColorScheme || "light";
        function o(e, n) {
          Object.keys(n).length &&
            t.push("string" === typeof e ? { [e]: { ...n } } : e);
        }
        o(n(void 0, { ...u }), u);
        const { [i]: l, ...s } = p;
        if (l) {
          const { css: e } = l,
            t = a[i]?.palette?.mode,
            s = !r && t ? { colorScheme: t, ...e } : { ...e };
          o(n(i, { ...s }), s);
        }
        return (
          Object.entries(s).forEach((e) => {
            let [t, { css: i }] = e;
            const l = a[t]?.palette?.mode,
              s = !r && l ? { colorScheme: l, ...i } : { ...i };
            o(n(t, { ...s }), s);
          }),
          t
        );
      },
    };
  };
  function Na(e, t) {
    return {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
      ...t,
    };
  }
  const Da = { textTransform: "uppercase" },
    Ia = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Ba(e, t) {
    const {
      fontFamily: n = Ia,
      fontSize: r = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: o = 500,
      fontWeightBold: l = 700,
      htmlFontSize: s = 16,
      allVariants: c,
      pxToRem: u,
      ...d
    } = "function" === typeof t ? t(e) : t;
    const f = r / 14,
      p = u || ((e) => (e / s) * f + "rem"),
      h = (e, t, r, i, a) => {
        return {
          fontFamily: n,
          fontWeight: e,
          fontSize: p(t),
          lineHeight: r,
          ...(n === Ia
            ? { letterSpacing: ((o = i / t), Math.round(1e5 * o) / 1e5) + "em" }
            : {}),
          ...a,
          ...c,
        };
        var o;
      },
      m = {
        h1: h(i, 96, 1.167, -1.5),
        h2: h(i, 60, 1.2, -0.5),
        h3: h(a, 48, 1.167, 0),
        h4: h(a, 34, 1.235, 0.25),
        h5: h(a, 24, 1.334, 0),
        h6: h(o, 20, 1.6, 0.15),
        subtitle1: h(a, 16, 1.75, 0.15),
        subtitle2: h(o, 14, 1.57, 0.1),
        body1: h(a, 16, 1.5, 0.15),
        body2: h(a, 14, 1.43, 0.15),
        button: h(o, 14, 1.75, 0.4, Da),
        caption: h(a, 12, 1.66, 0.4),
        overline: h(a, 12, 2.66, 1, Da),
        inherit: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit",
        },
      };
    return Hr(
      {
        htmlFontSize: s,
        pxToRem: p,
        fontFamily: n,
        fontSize: r,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: o,
        fontWeightBold: l,
        ...m,
      },
      d,
      { clone: !1 }
    );
  }
  function Fa() {
    return [
      `${arguments.length <= 0 ? void 0 : arguments[0]}px ${
        arguments.length <= 1 ? void 0 : arguments[1]
      }px ${arguments.length <= 2 ? void 0 : arguments[2]}px ${
        arguments.length <= 3 ? void 0 : arguments[3]
      }px rgba(0,0,0,0.2)`,
      `${arguments.length <= 4 ? void 0 : arguments[4]}px ${
        arguments.length <= 5 ? void 0 : arguments[5]
      }px ${arguments.length <= 6 ? void 0 : arguments[6]}px ${
        arguments.length <= 7 ? void 0 : arguments[7]
      }px rgba(0,0,0,0.14)`,
      `${arguments.length <= 8 ? void 0 : arguments[8]}px ${
        arguments.length <= 9 ? void 0 : arguments[9]
      }px ${arguments.length <= 10 ? void 0 : arguments[10]}px ${
        arguments.length <= 11 ? void 0 : arguments[11]
      }px rgba(0,0,0,0.12)`,
    ].join(",");
  }
  const $a = [
      "none",
      Fa(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      Fa(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      Fa(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      Fa(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      Fa(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      Fa(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      Fa(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      Fa(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      Fa(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      Fa(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      Fa(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      Fa(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      Fa(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      Fa(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      Fa(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      Fa(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      Fa(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      Fa(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      Fa(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      Fa(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      Fa(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      Fa(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      Fa(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      Fa(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    Ha = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    Ua = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function Va(e) {
    return `${Math.round(e)}ms`;
  }
  function Wa(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.min(Math.round(10 * (4 + 15 * t ** 0.25 + t / 5)), 3e3);
  }
  function qa(e) {
    const t = { ...Ha, ...e.easing },
      n = { ...Ua, ...e.duration };
    return {
      getAutoHeightDuration: Wa,
      create: function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ["all"],
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          duration: i = n.standard,
          easing: a = t.easeInOut,
          delay: o = 0,
          ...l
        } = r;
        return (Array.isArray(e) ? e : [e])
          .map(
            (e) =>
              `${e} ${"string" === typeof i ? i : Va(i)} ${a} ${
                "string" === typeof o ? o : Va(o)
              }`
          )
          .join(",");
      },
      ...e,
      easing: t,
      duration: n,
    };
  }
  const Xa = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  };
  function Ga() {
    const e = {
      ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
    };
    return (
      (function e(t) {
        const n = Object.entries(t);
        for (let i = 0; i < n.length; i++) {
          const [a, o] = n[i];
          (!Fr((r = o)) &&
            "undefined" !== typeof r &&
            "string" !== typeof r &&
            "boolean" !== typeof r &&
            "number" !== typeof r &&
            !Array.isArray(r)) ||
          a.startsWith("unstable_")
            ? delete t[a]
            : Fr(o) && ((t[a] = { ...o }), e(t[a]));
        }
        var r;
      })(e),
      `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';\n\nconst theme = ${JSON.stringify(
        e,
        null,
        2
      )};\n\ntheme.breakpoints = createBreakpoints(theme.breakpoints || {});\ntheme.transitions = createTransitions(theme.transitions || {});\n\nexport default theme;`
    );
  }
  const Ya = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      breakpoints: t,
      mixins: n = {},
      spacing: r,
      palette: i = {},
      transitions: a = {},
      typography: o = {},
      shape: l,
      ...s
    } = e;
    if (e.vars && void 0 === e.generateThemeVars) throw new Error(on(20));
    const c = za(i),
      u = Gi(e);
    let d = Hr(u, {
      mixins: Na(u.breakpoints, n),
      palette: c,
      shadows: $a.slice(),
      typography: Ba(c, o),
      transitions: qa(a),
      zIndex: { ...Xa },
    });
    d = Hr(d, s);
    for (
      var f = arguments.length, p = new Array(f > 1 ? f - 1 : 0), h = 1;
      h < f;
      h++
    )
      p[h - 1] = arguments[h];
    return (
      (d = p.reduce((e, t) => Hr(e, t), d)),
      (d.unstable_sxConfig = { ...Vi, ...s?.unstable_sxConfig }),
      (d.unstable_sx = function (e) {
        return qi({ sx: e, theme: this });
      }),
      (d.toRuntimeSource = Ga),
      d
    );
  };
  const Ka = [...Array(25)].map((e, t) => {
    if (0 === t) return "none";
    const n = (function (e) {
      let t;
      return (
        (t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2),
        Math.round(10 * t) / 1e3
      );
    })(t);
    return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
  });
  function Qa(e) {
    return {
      inputPlaceholder: "dark" === e ? 0.5 : 0.42,
      inputUnderline: "dark" === e ? 0.7 : 0.42,
      switchTrackDisabled: "dark" === e ? 0.2 : 0.12,
      switchTrack: "dark" === e ? 0.3 : 0.38,
    };
  }
  function Ja(e) {
    return "dark" === e ? Ka : [];
  }
  function Za(e) {
    return (
      !!e[0].match(
        /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
      ) ||
      !!e[0].match(/sxConfig$/) ||
      ("palette" === e[0] &&
        !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
    );
  }
  const eo = (e) => [
      ...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
      `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
      `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
    ],
    to = (e) => (t, n) => {
      const r = e.rootSelector || ":root",
        i = e.colorSchemeSelector;
      let a = i;
      if (
        ("class" === i && (a = ".%s"),
        "data" === i && (a = "[data-%s]"),
        i?.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`),
        e.defaultColorScheme === t)
      ) {
        if ("dark" === t) {
          const i = {};
          return (
            eo(e.cssVarPrefix).forEach((e) => {
              (i[e] = n[e]), delete n[e];
            }),
            "media" === a
              ? { [r]: n, "@media (prefers-color-scheme: dark)": { [r]: i } }
              : a
              ? { [a.replace("%s", t)]: i, [`${r}, ${a.replace("%s", t)}`]: n }
              : { [r]: { ...n, ...i } }
          );
        }
        if (a && "media" !== a) return `${r}, ${a.replace("%s", String(t))}`;
      } else if (t) {
        if ("media" === a)
          return {
            [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n },
          };
        if (a) return a.replace("%s", String(t));
      }
      return r;
    };
  function no(e, t, n) {
    !e[t] && n && (e[t] = n);
  }
  function ro(e) {
    return "string" === typeof e && e.startsWith("hsl") ? sa(e) : e;
  }
  function io(e, t) {
    `${t}Channel` in e || (e[`${t}Channel`] = oa(ro(e[t])));
  }
  const ao = (e) => {
    try {
      return e();
    } catch (t) {}
  };
  function oo(e, t, n, r) {
    if (!t) return;
    t = !0 === t ? {} : t;
    const i = "dark" === r ? "dark" : "light";
    if (!n)
      return void (e[r] = (function (e) {
        const {
            palette: t = { mode: "light" },
            opacity: n,
            overlays: r,
            ...i
          } = e,
          a = za(t);
        return {
          palette: a,
          opacity: { ...Qa(a.mode), ...n },
          overlays: r || Ja(a.mode),
          ...i,
        };
      })({ ...t, palette: { mode: i, ...t?.palette } }));
    const { palette: a, ...o } = Ya({
      ...n,
      palette: { mode: i, ...t?.palette },
    });
    return (
      (e[r] = {
        ...t,
        palette: a,
        opacity: { ...Qa(i), ...t?.opacity },
        overlays: t?.overlays || Ja(i),
      }),
      o
    );
  }
  function lo() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
        colorSchemes: t = { light: !0 },
        defaultColorScheme: n,
        disableCssColorScheme: r = !1,
        cssVarPrefix: i = "mui",
        shouldSkipGeneratingVar: a = Za,
        colorSchemeSelector: o = t.light && t.dark ? "media" : void 0,
        rootSelector: l = ":root",
        ...s
      } = e,
      c = Object.keys(t)[0],
      u = n || (t.light && "light" !== c ? "light" : c),
      d = (function () {
        return Ra(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mui"
        );
      })(i),
      { [u]: f, light: p, dark: h, ...m } = t,
      g = { ...m };
    let y = f;
    if (
      ((("dark" === u && !("dark" in t)) ||
        ("light" === u && !("light" in t))) &&
        (y = !0),
      !y)
    )
      throw new Error(on(21, u));
    const b = oo(g, y, s, u);
    p && !g.light && oo(g, p, void 0, "light"),
      h && !g.dark && oo(g, h, void 0, "dark");
    let v = {
      defaultColorScheme: u,
      ...b,
      cssVarPrefix: i,
      colorSchemeSelector: o,
      rootSelector: l,
      getCssVar: d,
      colorSchemes: g,
      font: { ...Pa(b.typography), ...b.font },
      spacing:
        ((w = s.spacing),
        "number" === typeof w
          ? `${w}px`
          : "string" === typeof w || "function" === typeof w || Array.isArray(w)
          ? w
          : "8px"),
    };
    var w;
    Object.keys(v.colorSchemes).forEach((e) => {
      const t = v.colorSchemes[e].palette,
        n = (e) => {
          const n = e.split("-"),
            r = n[1],
            i = n[2];
          return d(e, t[r][i]);
        };
      var r;
      if (
        ("light" === t.mode &&
          (no(t.common, "background", "#fff"),
          no(t.common, "onBackground", "#000")),
        "dark" === t.mode &&
          (no(t.common, "background", "#000"),
          no(t.common, "onBackground", "#fff")),
        (r = t),
        [
          "Alert",
          "AppBar",
          "Avatar",
          "Button",
          "Chip",
          "FilledInput",
          "LinearProgress",
          "Skeleton",
          "Slider",
          "SnackbarContent",
          "SpeedDialAction",
          "StepConnector",
          "StepContent",
          "Switch",
          "TableCell",
          "Tooltip",
        ].forEach((e) => {
          r[e] || (r[e] = {});
        }),
        "light" === t.mode)
      ) {
        no(t.Alert, "errorColor", pa(t.error.light, 0.6)),
          no(t.Alert, "infoColor", pa(t.info.light, 0.6)),
          no(t.Alert, "successColor", pa(t.success.light, 0.6)),
          no(t.Alert, "warningColor", pa(t.warning.light, 0.6)),
          no(t.Alert, "errorFilledBg", n("palette-error-main")),
          no(t.Alert, "infoFilledBg", n("palette-info-main")),
          no(t.Alert, "successFilledBg", n("palette-success-main")),
          no(t.Alert, "warningFilledBg", n("palette-warning-main")),
          no(
            t.Alert,
            "errorFilledColor",
            ao(() => t.getContrastText(t.error.main))
          ),
          no(
            t.Alert,
            "infoFilledColor",
            ao(() => t.getContrastText(t.info.main))
          ),
          no(
            t.Alert,
            "successFilledColor",
            ao(() => t.getContrastText(t.success.main))
          ),
          no(
            t.Alert,
            "warningFilledColor",
            ao(() => t.getContrastText(t.warning.main))
          ),
          no(t.Alert, "errorStandardBg", ma(t.error.light, 0.9)),
          no(t.Alert, "infoStandardBg", ma(t.info.light, 0.9)),
          no(t.Alert, "successStandardBg", ma(t.success.light, 0.9)),
          no(t.Alert, "warningStandardBg", ma(t.warning.light, 0.9)),
          no(t.Alert, "errorIconColor", n("palette-error-main")),
          no(t.Alert, "infoIconColor", n("palette-info-main")),
          no(t.Alert, "successIconColor", n("palette-success-main")),
          no(t.Alert, "warningIconColor", n("palette-warning-main")),
          no(t.AppBar, "defaultBg", n("palette-grey-100")),
          no(t.Avatar, "defaultBg", n("palette-grey-400")),
          no(t.Button, "inheritContainedBg", n("palette-grey-300")),
          no(t.Button, "inheritContainedHoverBg", n("palette-grey-A100")),
          no(t.Chip, "defaultBorder", n("palette-grey-400")),
          no(t.Chip, "defaultAvatarColor", n("palette-grey-700")),
          no(t.Chip, "defaultIconColor", n("palette-grey-700")),
          no(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
          no(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
          no(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
          no(t.LinearProgress, "primaryBg", ma(t.primary.main, 0.62)),
          no(t.LinearProgress, "secondaryBg", ma(t.secondary.main, 0.62)),
          no(t.LinearProgress, "errorBg", ma(t.error.main, 0.62)),
          no(t.LinearProgress, "infoBg", ma(t.info.main, 0.62)),
          no(t.LinearProgress, "successBg", ma(t.success.main, 0.62)),
          no(t.LinearProgress, "warningBg", ma(t.warning.main, 0.62)),
          no(
            t.Skeleton,
            "bg",
            `rgba(${n("palette-text-primaryChannel")} / 0.11)`
          ),
          no(t.Slider, "primaryTrack", ma(t.primary.main, 0.62)),
          no(t.Slider, "secondaryTrack", ma(t.secondary.main, 0.62)),
          no(t.Slider, "errorTrack", ma(t.error.main, 0.62)),
          no(t.Slider, "infoTrack", ma(t.info.main, 0.62)),
          no(t.Slider, "successTrack", ma(t.success.main, 0.62)),
          no(t.Slider, "warningTrack", ma(t.warning.main, 0.62));
        const e = ga(t.background.default, 0.8);
        no(t.SnackbarContent, "bg", e),
          no(
            t.SnackbarContent,
            "color",
            ao(() => t.getContrastText(e))
          ),
          no(t.SpeedDialAction, "fabHoverBg", ga(t.background.paper, 0.15)),
          no(t.StepConnector, "border", n("palette-grey-400")),
          no(t.StepContent, "border", n("palette-grey-400")),
          no(t.Switch, "defaultColor", n("palette-common-white")),
          no(t.Switch, "defaultDisabledColor", n("palette-grey-100")),
          no(t.Switch, "primaryDisabledColor", ma(t.primary.main, 0.62)),
          no(t.Switch, "secondaryDisabledColor", ma(t.secondary.main, 0.62)),
          no(t.Switch, "errorDisabledColor", ma(t.error.main, 0.62)),
          no(t.Switch, "infoDisabledColor", ma(t.info.main, 0.62)),
          no(t.Switch, "successDisabledColor", ma(t.success.main, 0.62)),
          no(t.Switch, "warningDisabledColor", ma(t.warning.main, 0.62)),
          no(t.TableCell, "border", ma(da(t.divider, 1), 0.88)),
          no(t.Tooltip, "bg", da(t.grey[700], 0.92));
      }
      if ("dark" === t.mode) {
        no(t.Alert, "errorColor", ma(t.error.light, 0.6)),
          no(t.Alert, "infoColor", ma(t.info.light, 0.6)),
          no(t.Alert, "successColor", ma(t.success.light, 0.6)),
          no(t.Alert, "warningColor", ma(t.warning.light, 0.6)),
          no(t.Alert, "errorFilledBg", n("palette-error-dark")),
          no(t.Alert, "infoFilledBg", n("palette-info-dark")),
          no(t.Alert, "successFilledBg", n("palette-success-dark")),
          no(t.Alert, "warningFilledBg", n("palette-warning-dark")),
          no(
            t.Alert,
            "errorFilledColor",
            ao(() => t.getContrastText(t.error.dark))
          ),
          no(
            t.Alert,
            "infoFilledColor",
            ao(() => t.getContrastText(t.info.dark))
          ),
          no(
            t.Alert,
            "successFilledColor",
            ao(() => t.getContrastText(t.success.dark))
          ),
          no(
            t.Alert,
            "warningFilledColor",
            ao(() => t.getContrastText(t.warning.dark))
          ),
          no(t.Alert, "errorStandardBg", pa(t.error.light, 0.9)),
          no(t.Alert, "infoStandardBg", pa(t.info.light, 0.9)),
          no(t.Alert, "successStandardBg", pa(t.success.light, 0.9)),
          no(t.Alert, "warningStandardBg", pa(t.warning.light, 0.9)),
          no(t.Alert, "errorIconColor", n("palette-error-main")),
          no(t.Alert, "infoIconColor", n("palette-info-main")),
          no(t.Alert, "successIconColor", n("palette-success-main")),
          no(t.Alert, "warningIconColor", n("palette-warning-main")),
          no(t.AppBar, "defaultBg", n("palette-grey-900")),
          no(t.AppBar, "darkBg", n("palette-background-paper")),
          no(t.AppBar, "darkColor", n("palette-text-primary")),
          no(t.Avatar, "defaultBg", n("palette-grey-600")),
          no(t.Button, "inheritContainedBg", n("palette-grey-800")),
          no(t.Button, "inheritContainedHoverBg", n("palette-grey-700")),
          no(t.Chip, "defaultBorder", n("palette-grey-700")),
          no(t.Chip, "defaultAvatarColor", n("palette-grey-300")),
          no(t.Chip, "defaultIconColor", n("palette-grey-300")),
          no(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
          no(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
          no(t.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
          no(t.LinearProgress, "primaryBg", pa(t.primary.main, 0.5)),
          no(t.LinearProgress, "secondaryBg", pa(t.secondary.main, 0.5)),
          no(t.LinearProgress, "errorBg", pa(t.error.main, 0.5)),
          no(t.LinearProgress, "infoBg", pa(t.info.main, 0.5)),
          no(t.LinearProgress, "successBg", pa(t.success.main, 0.5)),
          no(t.LinearProgress, "warningBg", pa(t.warning.main, 0.5)),
          no(
            t.Skeleton,
            "bg",
            `rgba(${n("palette-text-primaryChannel")} / 0.13)`
          ),
          no(t.Slider, "primaryTrack", pa(t.primary.main, 0.5)),
          no(t.Slider, "secondaryTrack", pa(t.secondary.main, 0.5)),
          no(t.Slider, "errorTrack", pa(t.error.main, 0.5)),
          no(t.Slider, "infoTrack", pa(t.info.main, 0.5)),
          no(t.Slider, "successTrack", pa(t.success.main, 0.5)),
          no(t.Slider, "warningTrack", pa(t.warning.main, 0.5));
        const e = ga(t.background.default, 0.98);
        no(t.SnackbarContent, "bg", e),
          no(
            t.SnackbarContent,
            "color",
            ao(() => t.getContrastText(e))
          ),
          no(t.SpeedDialAction, "fabHoverBg", ga(t.background.paper, 0.15)),
          no(t.StepConnector, "border", n("palette-grey-600")),
          no(t.StepContent, "border", n("palette-grey-600")),
          no(t.Switch, "defaultColor", n("palette-grey-300")),
          no(t.Switch, "defaultDisabledColor", n("palette-grey-600")),
          no(t.Switch, "primaryDisabledColor", pa(t.primary.main, 0.55)),
          no(t.Switch, "secondaryDisabledColor", pa(t.secondary.main, 0.55)),
          no(t.Switch, "errorDisabledColor", pa(t.error.main, 0.55)),
          no(t.Switch, "infoDisabledColor", pa(t.info.main, 0.55)),
          no(t.Switch, "successDisabledColor", pa(t.success.main, 0.55)),
          no(t.Switch, "warningDisabledColor", pa(t.warning.main, 0.55)),
          no(t.TableCell, "border", pa(da(t.divider, 1), 0.68)),
          no(t.Tooltip, "bg", da(t.grey[700], 0.92));
      }
      io(t.background, "default"),
        io(t.background, "paper"),
        io(t.common, "background"),
        io(t.common, "onBackground"),
        io(t, "divider"),
        Object.keys(t).forEach((e) => {
          const n = t[e];
          "tonalOffset" !== e &&
            n &&
            "object" === typeof n &&
            (n.main && no(t[e], "mainChannel", oa(ro(n.main))),
            n.light && no(t[e], "lightChannel", oa(ro(n.light))),
            n.dark && no(t[e], "darkChannel", oa(ro(n.dark))),
            n.contrastText &&
              no(t[e], "contrastTextChannel", oa(ro(n.contrastText))),
            "text" === e && (io(t[e], "primary"), io(t[e], "secondary")),
            "action" === e &&
              (n.active && io(t[e], "active"),
              n.selected && io(t[e], "selected")));
        });
    });
    for (
      var x = arguments.length, S = new Array(x > 1 ? x - 1 : 0), k = 1;
      k < x;
      k++
    )
      S[k - 1] = arguments[k];
    v = S.reduce((e, t) => Hr(e, t), v);
    const C = {
        prefix: i,
        disableCssColorScheme: r,
        shouldSkipGeneratingVar: a,
        getSelector: to(v),
      },
      { vars: E, generateThemeVars: _, generateStyleSheets: T } = La(v, C);
    return (
      (v.vars = E),
      Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach((e) => {
        let [t, n] = e;
        v[t] = n;
      }),
      (v.generateThemeVars = _),
      (v.generateStyleSheets = T),
      (v.generateSpacing = function () {
        return gi(s.spacing, ci(this));
      }),
      (v.getColorSchemeSelector = (function (e) {
        return function (t) {
          return "media" === e
            ? `@media (prefers-color-scheme: ${t})`
            : e
            ? e.startsWith("data-") && !e.includes("%s")
              ? `[${e}="${t}"] &`
              : "class" === e
              ? `.${t} &`
              : "data" === e
              ? `[data-${t}] &`
              : `${e.replace("%s", t)} &`
            : "&";
        };
      })(o)),
      (v.spacing = v.generateSpacing()),
      (v.shouldSkipGeneratingVar = a),
      (v.unstable_sxConfig = { ...Vi, ...s?.unstable_sxConfig }),
      (v.unstable_sx = function (e) {
        return qi({ sx: e, theme: this });
      }),
      (v.toRuntimeSource = Ga),
      v
    );
  }
  function so(e, t, n) {
    e.colorSchemes &&
      n &&
      (e.colorSchemes[t] = {
        ...(!0 !== n && n),
        palette: za({ ...(!0 === n ? {} : n.palette), mode: t }),
      });
  }
  const co = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
          palette: t,
          cssVariables: n = !1,
          colorSchemes: r = t ? void 0 : { light: !0 },
          defaultColorScheme: i = t?.mode,
          ...a
        } = e,
        o = i || "light",
        l = r?.[o],
        s = {
          ...r,
          ...(t
            ? { [o]: { ...("boolean" !== typeof l && l), palette: t } }
            : void 0),
        };
      for (
        var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), d = 1;
        d < c;
        d++
      )
        u[d - 1] = arguments[d];
      if (!1 === n) {
        if (!("colorSchemes" in e)) return Ya(e, ...u);
        let n = t;
        "palette" in e ||
          (s[o] &&
            (!0 !== s[o]
              ? (n = s[o].palette)
              : "dark" === o && (n = { mode: "dark" })));
        const r = Ya({ ...e, palette: n }, ...u);
        return (
          (r.defaultColorScheme = o),
          (r.colorSchemes = s),
          "light" === r.palette.mode &&
            ((r.colorSchemes.light = {
              ...(!0 !== s.light && s.light),
              palette: r.palette,
            }),
            so(r, "dark", s.dark)),
          "dark" === r.palette.mode &&
            ((r.colorSchemes.dark = {
              ...(!0 !== s.dark && s.dark),
              palette: r.palette,
            }),
            so(r, "light", s.light)),
          r
        );
      }
      return (
        t || "light" in s || "light" !== o || (s.light = !0),
        lo(
          {
            ...a,
            colorSchemes: s,
            defaultColorScheme: o,
            ...("boolean" !== typeof n && n),
          },
          ...u
        )
      );
    })(),
    uo = co,
    fo = "$$material";
  const po = function (e) {
      return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
    },
    ho = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        themeId: t,
        defaultTheme: n = Ki,
        rootShouldForwardProp: r = Qi,
        slotShouldForwardProp: i = Qi,
      } = e;
      function a(e) {
        !(function (e, t, n) {
          e.theme = (function (e) {
            for (const t in e) return !1;
            return !0;
          })(e.theme)
            ? n
            : e.theme[t] || e.theme;
        })(e, t, n);
      }
      return function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        !(function (e, t) {
          Array.isArray(e.__emotion_styles) &&
            (e.__emotion_styles = t(e.__emotion_styles));
        })(e, (e) => e.filter((e) => e !== qi));
        const {
            name: n,
            slot: o,
            skipVariantsResolver: l,
            skipSx: s,
            overridesResolver: c = Ji(na(o)),
            ...u
          } = t,
          d = void 0 !== l ? l : (o && "Root" !== o && "root" !== o) || !1,
          f = s || !1;
        let p = Qi;
        "Root" === o || "root" === o
          ? (p = r)
          : o
          ? (p = i)
          : (function (e) {
              return "string" === typeof e && e.charCodeAt(0) > 96;
            })(e) && (p = void 0);
        const h = (function (e, t) {
            return Nr(e, t);
          })(e, { shouldForwardProp: p, label: ta(n, o), ...u }),
          m = (e) => {
            if ("function" === typeof e && e.__emotion_real !== e)
              return function (t) {
                return Zi(t, e);
              };
            if (Fr(e)) {
              const t = Yi(e);
              return t.variants
                ? function (e) {
                    return Zi(e, t);
                  }
                : t.style;
            }
            return e;
          },
          g = function () {
            const t = [];
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            const l = i.map(m),
              s = [];
            if (
              (t.push(a),
              n &&
                c &&
                s.push(function (e) {
                  const t = e.theme,
                    r = t.components?.[n]?.styleOverrides;
                  if (!r) return null;
                  const i = {};
                  for (const n in r) i[n] = Zi(e, r[n]);
                  return c(e, i);
                }),
              n &&
                !d &&
                s.push(function (e) {
                  const t = e.theme,
                    r = t?.components?.[n]?.variants;
                  return r ? ea(e, r) : null;
                }),
              f || s.push(qi),
              Array.isArray(l[0]))
            ) {
              const e = l.shift(),
                n = new Array(t.length).fill(""),
                r = new Array(s.length).fill("");
              let i;
              (i = [...n, ...e, ...r]),
                (i.raw = [...n, ...e.raw, ...r]),
                t.unshift(i);
            }
            const u = [...t, ...l, ...s],
              p = h(...u);
            return e.muiName && (p.muiName = e.muiName), p;
          };
        return h.withConfig && (g.withConfig = h.withConfig), g;
      };
    })({
      themeId: fo,
      defaultTheme: uo,
      rootShouldForwardProp: (e) => po(e) && "classes" !== e,
    }),
    mo = ho,
    go = { theme: void 0 };
  const yo = function (e) {
    let t, n;
    return function (r) {
      let i = t;
      return (
        (void 0 !== i && r.theme === n) ||
          ((go.theme = r.theme), (i = Yi(e(go))), (t = i), (n = r.theme)),
        i
      );
    };
  };
  function bo(e, t) {
    const n = { ...t };
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        const i = r;
        if ("components" === i || "slots" === i) n[i] = { ...e[i], ...n[i] };
        else if ("componentsProps" === i || "slotProps" === i) {
          const r = e[i],
            a = t[i];
          if (a)
            if (r) {
              n[i] = { ...a };
              for (const e in r)
                if (Object.prototype.hasOwnProperty.call(r, e)) {
                  const t = e;
                  n[i][t] = bo(r[t], a[t]);
                }
            } else n[i] = a;
          else n[i] = r || {};
        } else void 0 === n[i] && (n[i] = e[i]);
      }
    return n;
  }
  const vo = i.createContext(void 0);
  function wo(e) {
    let { props: t, name: n } = e;
    return (function (e) {
      const { theme: t, name: n, props: r } = e;
      if (!t || !t.components || !t.components[n]) return r;
      const i = t.components[n];
      return i.defaultProps
        ? bo(i.defaultProps, r)
        : i.styleOverrides || i.variants
        ? r
        : bo(i, r);
    })({ props: t, name: n, theme: { components: i.useContext(vo) } });
  }
  function xo(e) {
    return wo(e);
  }
  const So = (e) => e,
    ko = (() => {
      let e = So;
      return {
        configure(t) {
          e = t;
        },
        generate: (t) => e(t),
        reset() {
          e = So;
        },
      };
    })(),
    Co = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      open: "open",
      readOnly: "readOnly",
      required: "required",
      selected: "selected",
    };
  function Eo(e, t) {
    const n = Co[t];
    return n
      ? `${
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Mui"
        }-${n}`
      : `${ko.generate(e)}-${t}`;
  }
  function _o(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Mui";
    const r = {};
    return (
      t.forEach((t) => {
        r[t] = Eo(e, t, n);
      }),
      r
    );
  }
  function To(e) {
    return Eo("MuiSvgIcon", e);
  }
  _o("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge",
  ]);
  const jo = mo("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          "inherit" !== n.color && t[`color${sn(n.color)}`],
          t[`fontSize${sn(n.fontSize)}`],
        ];
      },
    })(
      yo((e) => {
        let { theme: t } = e;
        return {
          userSelect: "none",
          width: "1em",
          height: "1em",
          display: "inline-block",
          flexShrink: 0,
          transition: t.transitions?.create?.("fill", {
            duration: (t.vars ?? t).transitions?.duration?.shorter,
          }),
          variants: [
            { props: (e) => !e.hasSvgAsChild, style: { fill: "currentColor" } },
            { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
            {
              props: { fontSize: "small" },
              style: { fontSize: t.typography?.pxToRem?.(20) || "1.25rem" },
            },
            {
              props: { fontSize: "medium" },
              style: { fontSize: t.typography?.pxToRem?.(24) || "1.5rem" },
            },
            {
              props: { fontSize: "large" },
              style: { fontSize: t.typography?.pxToRem?.(35) || "2.1875rem" },
            },
            ...Object.entries((t.vars ?? t).palette)
              .filter((e) => {
                let [, t] = e;
                return t && t.main;
              })
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: { color: (t.vars ?? t).palette?.[n]?.main },
                };
              }),
            {
              props: { color: "action" },
              style: { color: (t.vars ?? t).palette?.action?.active },
            },
            {
              props: { color: "disabled" },
              style: { color: (t.vars ?? t).palette?.action?.disabled },
            },
            { props: { color: "inherit" }, style: { color: void 0 } },
          ],
        };
      })
    ),
    Oo = i.forwardRef(function (e, t) {
      const n = xo({ props: e, name: "MuiSvgIcon" }),
        {
          children: r,
          className: a,
          color: o = "inherit",
          component: l = "svg",
          fontSize: s = "medium",
          htmlColor: c,
          inheritViewBox: u = !1,
          titleAccess: d,
          viewBox: f = "0 0 24 24",
          ...p
        } = n,
        h = i.isValidElement(r) && "svg" === r.type,
        m = {
          ...n,
          color: o,
          component: l,
          fontSize: s,
          instanceFontSize: e.fontSize,
          inheritViewBox: u,
          viewBox: f,
          hasSvgAsChild: h,
        },
        g = {};
      u || (g.viewBox = f);
      const y = ((e) => {
        const { color: t, fontSize: n, classes: r } = e;
        return an(
          {
            root: [
              "root",
              "inherit" !== t && `color${sn(t)}`,
              `fontSize${sn(n)}`,
            ],
          },
          To,
          r
        );
      })(m);
      return (0,
      en.jsxs)(jo, { as: l, className: rn(y.root, a), focusable: "false", color: c, "aria-hidden": !d || void 0, role: d ? "img" : void 0, ref: t, ...g, ...p, ...(h && r.props), ownerState: m, children: [h ? r.props.children : r, d ? (0, en.jsx)("title", { children: d }) : null] });
    });
  Oo.muiName = "SvgIcon";
  const zo = Oo;
  function Ro(e, t) {
    function n(t, n) {
      return (0, en.jsx)(zo, {
        "data-testid": void 0,
        ref: n,
        ...t,
        children: e,
      });
    }
    return (n.muiName = zo.muiName), i.memo(i.forwardRef(n));
  }
  const Po = Ro(
      (0, en.jsx)("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" })
    ),
    Ao = Ro((0, en.jsx)("path", { d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" })),
    Mo = Ro((0, en.jsx)("path", { d: "M5 20h14v-2H5zm0-10h4v6h6v-6h4l-7-7z" })),
    Lo = Ro(
      (0, en.jsx)("path", {
        d: "M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27zm-1.13 7.37 1.94-5.18 1.94 5.18zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26z",
      })
    ),
    No = Ro(
      (0, en.jsx)("path", {
        d: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2zm1-9h1V4H2v1h1zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2zm5-6v2h14V5zm0 14h14v-2H7zm0-6h14v-2H7z",
      })
    ),
    Do = Ro(
      (0, en.jsx)("path", {
        d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3",
      })
    ),
    Io = Ro(
      (0, en.jsx)("path", {
        d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z",
      })
    ),
    Bo = Ro(
      (0, en.jsx)("path", {
        d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z",
      })
    ),
    Fo = Ro(
      (0, en.jsx)("path", {
        d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z",
      })
    ),
    $o = Ro(
      (0, en.jsx)("path", {
        d: "M15 21h2v-2h-2zm4-12h2V7h-2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2m16-2v2h2c0-1.1-.9-2-2-2m-8 20h2V1h-2zm8-6h2v-2h-2zM15 5h2V3h-2zm4 8h2v-2h-2zm0 8c1.1 0 2-.9 2-2h-2z",
      })
    ),
    Ho = Ro(
      (0, en.jsx)("path", {
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5M9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8m6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5",
      })
    ),
    Uo = Ro(
      (0, en.jsx)("path", {
        d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z",
      })
    ),
    Vo = Ro(
      (0, en.jsx)("path", {
        d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z",
      })
    ),
    Wo = {
      display: "flex",
      flexWrap: "wrap",
      gap: "1px",
      marginBottom: "0px",
      overflowX: "auto",
      paddingBottom: "2px",
    },
    qo = {
      padding: "3px",
      borderRadius: "4px",
      border: "1px solid #555",
      backgroundColor: "#222",
      color: "#fff",
      width: "94%",
      marginBottom: "4px",
      margintop: "0px",
    },
    Xo = {
      display: "flex",
      alignItems: "flex-start",
      backgroundColor: "#2b2b2b",
      padding: "0px 0px",
      margin: "0px 0",
      borderBottom: "1px solid #444",
    },
    Go = {
      padding: "0 2px",
      fontSize: "11px",
      height: "20px",
      lineHeight: "20px",
      borderRadius: "4px",
      border: "1px solid #555",
      backgroundColor: "#1f1f1f",
      color: "#fff",
      width: "100%",
      boxSizing: "border-box",
    },
    Yo = (e, t) => (e.length > t ? e.substring(0, t) + "..." : e),
    Ko = () => {
      const [e, t] = (0, i.useState)({}),
        [n, r] = (0, i.useState)(0),
        [a, o] = (0, i.useState)(""),
        [l, s] = (0, i.useState)(!1),
        [c, u] = (0, i.useState)(null),
        d = Ft.getAllLayers(),
        f = Ft.getGroupedLayers(),
        p = (e, t, n) => {
          (e[t] = n), r((e) => e + 1);
        },
        h = (e) => {
          let { icon: t, title: n, onClick: r } = e;
          return (0, en.jsx)("button", {
            title: n,
            onClick: r,
            style: {
              backgroundColor: "#2b2b2b",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: "5px",
              paddingLeft: "2px",
              paddingRight: "2px",
              marginBottom: "2px",
              fontSize: "10px",
              marginRight: "2px",
              cursor: "pointer",
            },
            children: (0, en.jsx)(t, { style: { fontSize: "16px" } }),
          });
        },
        m = (e, t) => {
          const n = Ft.isLayerVisible(e.layer_number, e.datatype_number),
            i = Ft.isLayerLocked(e.layer_number, e.datatype_number),
            a = Ft.isEditing(e),
            o = Ft.isLayerSelected(e);
          return (0, en.jsxs)(
            "div",
            {
              style: {
                ...Xo,
                opacity: o ? 0.5 : 1,
                border: o ? "1px solid #00d8ff" : "1px solid #444",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor: a ? "#333" : "#2b2b2b",
                width: "99%",
                alignSelf: a ? "center" : "flex-start",
              },
              onClick: (t) => {
                Ft.selectLayer(e, t.ctrlKey), r((e) => e + 1);
              },
              draggable: !0,
              onDragStart: () => u(t),
              onDragOver: (e) => e.preventDefault(),
              onDrop: () => {
                null !== c && c !== t && (Ft.reorder(c, t), r((e) => e + 1));
              },
              children: [
                (0, en.jsx)("div", {
                  style: {
                    width: "14px",
                    height: "14px",
                    backgroundColor: e.color,
                    borderRadius: "4px",
                    border: "1px solid #444",
                    marginRight: "4px",
                    marginTop: "2px",
                    flexShrink: 0,
                  },
                  title:
                    `Layer Name: ${e.layer_name}\nDatatype Name: ${e.datatype_name}\nLayer Number: ${e.layer_number}\nDatatype Number: ${e.datatype_number}`.trim(),
                }),
                (0, en.jsx)("div", {
                  style: { flexGrow: 1, display: "flex", alignItems: "center" },
                  children: a
                    ? (0, en.jsxs)("div", {
                        style: {
                          display: "grid",
                          gridTemplateColumns: "50px 50px 30px 30px",
                          gap: "1px",
                          width: "100%",
                        },
                        children: [
                          (0, en.jsx)("input", {
                            type: "text",
                            value: e.edit_name,
                            onChange: (t) => p(e, "edit_name", t.target.value),
                            style: Go,
                            placeholder: "Name",
                          }),
                          (0, en.jsx)("input", {
                            type: "text",
                            value: e.edit_dtype,
                            onChange: (t) => p(e, "edit_dtype", t.target.value),
                            style: Go,
                            placeholder: "DType",
                          }),
                          (0, en.jsx)("input", {
                            type: "number",
                            value: e.edit_number,
                            onChange: (t) =>
                              p(e, "edit_number", t.target.value),
                            style: Go,
                            placeholder: "L#",
                          }),
                          (0, en.jsx)("input", {
                            type: "number",
                            value: e.edit_dtypenum,
                            onChange: (t) =>
                              p(e, "edit_dtypenum", t.target.value),
                            style: Go,
                            placeholder: "DT#",
                          }),
                        ],
                      })
                    : (0, en.jsxs)("div", {
                        style: {
                          display: "grid",
                          gridTemplateColumns: "45px 55px 29px 22.5px",
                          gap: "2px",
                          fontSize: "12px",
                          fontWeight: "bold",
                          width: "100%",
                        },
                        children: [
                          (0, en.jsx)("div", {
                            title: e.layer_name,
                            children: Yo(e.layer_name, 3),
                          }),
                          (0, en.jsx)("div", {
                            title: e.datatype_name,
                            children: Yo(e.datatype_name, 2),
                          }),
                          (0, en.jsx)("div", {
                            title: e.layer_number.toString(),
                            children: Yo(e.layer_number.toString(), 2),
                          }),
                          (0, en.jsx)("div", {
                            title: e.datatype_number.toString(),
                            children: Yo(e.datatype_number.toString(), 2),
                          }),
                        ],
                      }),
                }),
                (0, en.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: "0px",
                    alignItems: "center",
                    gap: "2px",
                  },
                  children: [
                    (0, en.jsx)("button", {
                      onClick: () =>
                        ((e) => {
                          Ft.toggleVisibility(e), r((e) => e + 1);
                        })(e),
                      style: {
                        backgroundColor: "#2b2b2b",
                        border: "none",
                        borderRadius: "4px",
                        width: "16px",
                        height: "16px",
                        padding: "2px 1px",
                        cursor: "pointer",
                        fontSize: "10px",
                        color: "#fff",
                      },
                      title: "Toggle visibility",
                      children: n
                        ? (0, en.jsx)(Do, {
                            style: { color: "white", fontSize: "15px" },
                          })
                        : (0, en.jsx)(Io, {
                            style: { color: "white", fontSize: "15px" },
                          }),
                    }),
                    (0, en.jsx)("button", {
                      onClick: () =>
                        ((e) => {
                          Ft.toggleLock(e), r((e) => e + 1);
                        })(e),
                      style: {
                        backgroundColor: "#2b2b2b",
                        border: "none",
                        borderRadius: "4px",
                        width: "16px",
                        height: "16px",
                        padding: "1px 1px",
                        cursor: "pointer",
                        fontSize: "10px",
                        color: "#fff",
                      },
                      title: "Toggle lock",
                      children: i
                        ? (0, en.jsx)(Bo, {
                            style: { color: "green", fontSize: "16px" },
                          })
                        : (0, en.jsx)(Fo, {
                            style: { color: "white", fontSize: "16px" },
                          }),
                    }),
                    (0, en.jsx)("button", {
                      onClick: () =>
                        ((e) => {
                          if (Ft.isEditing(e)) {
                            const t = {
                              layer_name: e.edit_name,
                              layer_number: parseInt(e.edit_number),
                              datatype_name: e.edit_dtype,
                              datatype_number: parseInt(e.edit_dtypenum),
                            };
                            Ft.updateLayer(e, t);
                          } else
                            (e.edit_name = e.layer_name),
                              (e.edit_number = e.layer_number),
                              (e.edit_dtype = e.datatype_name),
                              (e.edit_dtypenum = e.datatype_number);
                          Ft.toggleEdit(e), r((e) => e + 1);
                        })(e),
                      style: {
                        backgroundColor: "#2b2b2b",
                        border: "none",
                        borderRadius: "4px",
                        width: "16px",
                        height: "16px",
                        padding: "2px 2px",
                        cursor: "pointer",
                        fontSize: "10px",
                        color: "#fff",
                      },
                      title: "Edit layer",
                      children: a
                        ? (0, en.jsx)(Vo, {
                            style: { fontSize: "14px", color: "white" },
                          })
                        : (0, en.jsx)(Uo, {
                            style: { fontSize: "14px", color: "white" },
                          }),
                    }),
                  ],
                }),
              ],
            },
            t
          );
        };
      return (0, en.jsxs)("div", {
        style: { height: "100%", display: "flex", flexDirection: "column" },
        children: [
          (0, en.jsxs)("div", {
            style: Wo,
            children: [
              (0, en.jsx)(h, {
                icon: Po,
                title: "Add Layer",
                onClick: () => {},
              }),
              (0, en.jsx)(h, {
                icon: Ao,
                title: "Export Layers",
                onClick: () => {},
              }),
              (0, en.jsx)(h, {
                icon: Mo,
                title: "Import Layers",
                onClick: () => {},
              }),
              (0, en.jsx)(h, {
                icon: Lo,
                title: "Sort by Name",
                onClick: () => {
                  Ft.setSortMode("name"), r((e) => e + 1);
                },
              }),
              (0, en.jsx)(h, {
                icon: No,
                title: "Sort by Number",
                onClick: () => {
                  Ft.setSortMode("number"), r((e) => e + 1);
                },
              }),
              (0, en.jsx)(h, {
                icon: Do,
                title: "Show All",
                onClick: () => {},
              }),
              (0, en.jsx)(h, {
                icon: Io,
                title: "Hide All",
                onClick: () => {},
              }),
              (0, en.jsx)(h, {
                icon: Bo,
                title: "Lock All",
                onClick: () => {},
              }),
              (0, en.jsx)(h, {
                icon: Fo,
                title: "Unlock All",
                onClick: () => {},
              }),
              (0, en.jsx)("input", {
                type: "color",
                onChange: (e) => {
                  Ft.getSelectedLayers().forEach((t) =>
                    Ft.updateColor(t, e.target.value)
                  ),
                    r((e) => e + 1);
                },
                style: {
                  marginLeft: "2px",
                  marginTop: "0px",
                  marginRight: "4px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "1px",
                  cursor: "pointer",
                  border: "none",
                  WebkitAppearance: "none",
                },
                title: "color picker",
              }),
              (0, en.jsx)("input", {
                type: "range",
                min: "0.1",
                max: "1",
                step: "0.1",
                defaultValue: "1",
                onChange: (e) => {
                  Ft.getSelectedLayers().forEach((t) =>
                    Ft.updateOpacity(t, parseFloat(e.target.value))
                  ),
                    r((e) => e + 1);
                },
                style: {
                  width: "90px",
                  marginLeft: "2px",
                  marginTop: "0px",
                  marginRight: "4px",
                  cursor: "pointer",
                  backgroundColor: "#444",
                  borderRadius: "2px",
                  border: "none",
                },
                title: "Opacity",
              }),
              (0, en.jsx)(h, {
                icon: $o,
                title: "Invert Visibility",
                onClick: () => {},
              }),
              (0, en.jsx)(h, {
                icon: Ho,
                title: "Toggle Grouping",
                onClick: () => s((e) => !e),
              }),
            ],
          }),
          (0, en.jsx)("input", {
            type: "text",
            placeholder: "Search...",
            style: qo,
            value: a,
            onChange: (e) => o(e.target.value),
          }),
          (0, en.jsx)("div", {
            style: {
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              width: "109%",
            },
            children: l
              ? Object.entries(f).map((n, r) => {
                  let [i, o] = n;
                  return (0, en.jsxs)(
                    "div",
                    {
                      style: { marginBottom: "10px" },
                      children: [
                        (0, en.jsxs)("div", {
                          onClick: () =>
                            ((e) => {
                              t((t) => ({ ...t, [e]: !t[e] }));
                            })(i),
                          style: {
                            backgroundColor: "#333",
                            padding: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            borderRadius: "6px 6px 0 0",
                            userSelect: "none",
                          },
                          children: [e[i] ? "\u25bc" : "\u25b6", " ", i],
                        }),
                        e[i] &&
                          o
                            .filter((e) =>
                              e.layer_name
                                .toLowerCase()
                                .includes(a.toLowerCase())
                            )
                            .map(m),
                      ],
                    },
                    r
                  );
                })
              : d
                  .filter((e) =>
                    e.layer_name.toLowerCase().includes(a.toLowerCase())
                  )
                  .map(m),
          }),
        ],
      });
    },
    Qo = Ro(
      (0, en.jsx)("path", {
        d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
      })
    ),
    Jo = Ro(
      (0, en.jsx)("path", {
        d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z",
      })
    ),
    Zo = {
      marginBottom: "8px",
      fontSize: "14px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    el = {
      height: "15px",
      width: "137px",
      padding: "5px",
      border: "1px solid #555",
      borderRadius: "4px",
      backgroundColor: "#333",
      color: "#ddd",
    },
    tl = {
      display: "flex",
      overflowX: "auto",
      gap: "0px",
      paddingBottom: "0px",
      marginBottom: "15px",
      whiteSpace: "nowrap",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    nl = {
      padding: "6px 10px",
      backgroundColor: "#333",
      color: "#ddd",
      border: "1px solid #555",
      borderRadius: "0px",
      whiteSpace: "nowrap",
      cursor: "pointer",
      flexShrink: 0,
    },
    rl = { backgroundColor: "#555", color: "#fff", border: "1px solid #aaa" },
    il = {
      fontSize: "16px",
      marginBottom: "10px",
      borderBottom: "1px solid #444",
      paddingBottom: "5px",
    },
    al = () => {
      var e, t, n, r, a, o, l, s, c, u, d, f, p, h, m, g, y, b, v, w;
      const [x, S] = (0, i.useState)([]),
        [k, C] = (0, i.useState)(null),
        [E, _] = (0, i.useState)(0),
        [T, j] = (0, i.useState)(!1),
        O = (0, i.useRef)(null);
      (0, i.useEffect)(() => {
        Tt.onChange((e) => {
          S(e), _(0), e.length > 0 && C(e[0].type);
        });
        const e = Tt.getSelection();
        S(e), e.length > 0 && C(e[0].type);
      }, []),
        (0, i.useEffect)(() => {
          var e;
          const t =
            null === (e = O.current) || void 0 === e
              ? void 0
              : e.querySelector(".active-tab");
          if (t && O.current) {
            const e = t.offsetLeft,
              n = O.current.offsetWidth;
            O.current.scrollTo({
              left: e - n / 2 + t.offsetWidth / 2,
              behavior: "smooth",
            });
          }
        }, [k]);
      if (!x || 0 === x.length)
        return (0, en.jsx)("div", {
          style: { color: "#888" },
          children: "No object selected",
        });
      const z = x.reduce(
          (e, t) => (e[t.type] || (e[t.type] = []), e[t.type].push(t), e),
          {}
        ),
        R = Object.keys(z),
        P = z[k] || [],
        A = P[E],
        M = x.findIndex((e) => e.id === A.id),
        L = Ft.getAllLayers(),
        N = Object.values(L);
      let D = N.find((e) => {
        var t;
        return (
          e.id === (null === (t = A.ref) || void 0 === t ? void 0 : t.layerId)
        );
      });
      !D &&
        null !== (e = A.ref) &&
        void 0 !== e &&
        e.layerId &&
        (D = Ft.getLayerById(A.ref.layerId));
      const I = (e, t, n) => {
        if (window.canvasEngine) {
          window.canvasEngine.updateSelectedPropertyById(A.id, A.type, t, n);
          const r = [...x];
          (r[e] = { ...A, ref: { ...A.ref, [t]: n } }), S(r);
        }
      };
      return (0, en.jsxs)("div", {
        style: { padding: "6px", color: "#ddd", fontSize: "14px" },
        children: [
          (0, en.jsx)("div", {
            style: tl,
            ref: O,
            children: R.map((e) =>
              (0, en.jsx)(
                "button",
                {
                  onClick: () => {
                    C(e), _(0);
                  },
                  className: k === e ? "active-tab" : "",
                  style: { ...nl, ...(k === e ? rl : {}) },
                  children: e,
                },
                e
              )
            ),
          }),
          (0, en.jsxs)("h3", {
            style: {
              ...il,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
            children: [
              (0, en.jsxs)("span", {
                children: [
                  k ? k.charAt(0).toUpperCase() + k.slice(1) : "",
                  " (",
                  E + 1,
                  "/",
                  P.length,
                  ")",
                ],
              }),
              (0, en.jsxs)("div", {
                style: { display: "flex", gap: "2px" },
                children: [
                  (0, en.jsx)("button", {
                    disabled: 0 === E,
                    onClick: () => _(E - 1),
                    style: {
                      color: "black",
                      height: "25px",
                      width: "25px",
                      border: "1px solid #555",
                      borderRadius: "4px",
                      padding: "0px",
                      cursor: 0 === E ? "hidden" : "pointer",
                    },
                    children: (0, en.jsx)(Jo, {}),
                  }),
                  (0, en.jsx)("button", {
                    disabled: E === P.length - 1,
                    onClick: () => _(E + 1),
                    style: {
                      color: "black",
                      border: "1px solid #555",
                      height: "25px",
                      width: "25px",
                      borderRadius: "4px",
                      padding: "0px",
                      cursor: E === P.length - 1 ? "hidden" : "pointer",
                    },
                    children: (0, en.jsx)(Qo, {}),
                  }),
                ],
              }),
            ],
          }),
          (0, en.jsxs)("div", {
            style: Zo,
            children: [
              (0, en.jsx)("label", { children: "Common property for all:" }),
              (0, en.jsxs)("label", {
                style: {
                  position: "relative",
                  display: "inline-block",
                  width: "50px",
                  height: "24px",
                },
                children: [
                  (0, en.jsx)("input", {
                    type: "checkbox",
                    checked:
                      null === (t = A.ref) || void 0 === t
                        ? void 0
                        : t.isEnabled,
                    onChange: () => {
                      var e;
                      return I(
                        M,
                        "isEnabled",
                        !(null !== (e = A.ref) && void 0 !== e && e.isEnabled)
                      );
                    },
                    style: { opacity: 0, width: 0, height: 0 },
                  }),
                  (0, en.jsx)("span", {
                    style: {
                      position: "absolute",
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor:
                        null !== (n = A.ref) && void 0 !== n && n.isEnabled
                          ? "#4CAF50"
                          : "#ccc",
                      borderRadius: "24px",
                      transition: "0.4s",
                    },
                  }),
                  (0, en.jsx)("span", {
                    style: {
                      position: "absolute",
                      content: '""',
                      height: "18px",
                      width: "18px",
                      left:
                        null !== (r = A.ref) && void 0 !== r && r.isEnabled
                          ? "26px"
                          : "4px",
                      bottom: "3px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      transition: "0.4s",
                    },
                  }),
                ],
              }),
            ],
          }),
          (0, en.jsxs)("div", {
            style: Zo,
            children: [
              (0, en.jsx)("label", {
                style: { width: "80px" },
                children: "Layer:",
              }),
              (0, en.jsxs)("div", {
                style: {
                  position: "relative",
                  flex: 1,
                  height: "20px",
                  width: "150px",
                  padding: "5px",
                  border: "1px solid #555",
                  borderRadius: "4px",
                  backgroundColor: "#333",
                  color: "#ddd",
                },
                children: [
                  (0, en.jsxs)("div", {
                    onClick: () => j(!T),
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: "100%",
                      cursor: "pointer",
                      padding: "0 8px",
                    },
                    children: [
                      (0, en.jsx)("div", {
                        style: {
                          width: "12px",
                          height: "12px",
                          backgroundColor:
                            (null === (a = D) || void 0 === a
                              ? void 0
                              : a.color) || "#000",
                          marginRight: "8px",
                          border: "1px solid #555",
                        },
                      }),
                      (0, en.jsx)("span", {
                        title:
                          (null === (o = D) || void 0 === o ? void 0 : o.id) ||
                          A.layerId ||
                          "Unknown",
                        children: D
                          ? `${D.layer_name} (L${D.layer_number}/DT${D.datatype_number})`
                          : `Unknown Layer (${A.layerId})`,
                      }),
                    ],
                  }),
                  T &&
                    (0, en.jsx)("div", {
                      style: {
                        position: "absolute",
                        top: "100%",
                        left: "0px",
                        right: 0,
                        width: "120%",
                        backgroundColor: "#222",
                        border: "1px solid #555",
                        zIndex: 10,
                        maxHeight: "300px",
                        overflowY: "auto",
                      },
                      children: N.map((e) => {
                        var t;
                        return (0, en.jsxs)(
                          "div",
                          {
                            onClick: () =>
                              ((e) => {
                                var t, n, r;
                                if (!e) return;
                                const i = { ...A, layerId: e.id };
                                null !== (t = window.canvasEngine) &&
                                  void 0 !== t &&
                                  t.updateSelectedPropertyById &&
                                  window.canvasEngine.updateSelectedPropertyById(
                                    i.id,
                                    i.type,
                                    "layerId",
                                    e.id
                                  );
                                const a = [...x];
                                (a[M] = i),
                                  Tt.setSelection(a),
                                  S(a),
                                  null === (n = window.canvasEngine) ||
                                    void 0 === n ||
                                    null === (r = n.draw) ||
                                    void 0 === r ||
                                    r.call(n),
                                  j(!1);
                              })(e),
                            style: {
                              display: "flex",
                              alignItems: "center",
                              padding: "6px 10px",
                              width: "130%",
                              cursor: "pointer",
                              backgroundColor:
                                (null === (t = D) || void 0 === t
                                  ? void 0
                                  : t.id) === e.id
                                  ? "#444"
                                  : "transparent",
                              color: "#ddd",
                            },
                            children: [
                              (0, en.jsx)("div", {
                                style: {
                                  width: "12px",
                                  height: "12px",
                                  backgroundColor: e.color,
                                  marginRight: "8px",
                                  border: "1px solid #555",
                                },
                              }),
                              e.layer_name,
                              " (",
                              e.layer_number,
                              "/",
                              e.datatype_number,
                              ")",
                            ],
                          },
                          e.id
                        );
                      }),
                    }),
                ],
              }),
            ],
          }),
          "rectangle" === k &&
            (0, en.jsxs)(en.Fragment, {
              children: [
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "X:" }),
                    (0, en.jsx)("input", {
                      type: "number",
                      style: el,
                      value:
                        null === (l = A.ref) || void 0 === l ? void 0 : l.x,
                      onChange: (e) => I(M, "x", parseFloat(e.target.value)),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Y:" }),
                    (0, en.jsx)("input", {
                      type: "number",
                      style: el,
                      value:
                        null === (s = A.ref) || void 0 === s ? void 0 : s.y,
                      onChange: (e) => I(M, "y", parseFloat(e.target.value)),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Width:" }),
                    (0, en.jsx)("input", {
                      type: "number",
                      style: el,
                      value:
                        null === (c = A.ref) || void 0 === c ? void 0 : c.width,
                      onChange: (e) =>
                        I(M, "width", parseFloat(e.target.value)),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Height:" }),
                    (0, en.jsx)("input", {
                      type: "number",
                      style: el,
                      value:
                        null === (u = A.ref) || void 0 === u
                          ? void 0
                          : u.height,
                      onChange: (e) =>
                        I(M, "height", parseFloat(e.target.value)),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Rotation:" }),
                    (0, en.jsxs)("select", {
                      style: {
                        background: "transparent",
                        color: "white",
                        width: "148px",
                        height: "25px",
                        borderRadius: "4px",
                      },
                      value:
                        (null === (d = A.ref) || void 0 === d
                          ? void 0
                          : d.rotation) || 0,
                      onChange: (e) =>
                        I(M, "rotation", parseInt(e.target.value)),
                      children: [
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: 0,
                          children: "R0",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: 90,
                          children: "R90",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: 180,
                          children: "R180",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: 270,
                          children: "R270",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          "label" === k &&
            (0, en.jsxs)(en.Fragment, {
              children: [
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "X:" }),
                    (0, en.jsx)("input", {
                      type: "number",
                      style: el,
                      value:
                        null === (f = A.ref) || void 0 === f ? void 0 : f.x,
                      onChange: (e) => I(M, "x", parseFloat(e.target.value)),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Y:" }),
                    (0, en.jsx)("input", {
                      type: "number",
                      style: el,
                      value:
                        null === (p = A.ref) || void 0 === p ? void 0 : p.y,
                      onChange: (e) => I(M, "y", parseFloat(e.target.value)),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Font Size:" }),
                    (0, en.jsx)("input", {
                      style: el,
                      type: "number",
                      value:
                        (null === (h = A.ref) || void 0 === h
                          ? void 0
                          : h.fontSize) || "",
                      onChange: (e) =>
                        I(M, "fontSize", parseFloat(e.target.value)),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Text:" }),
                    (0, en.jsx)("input", {
                      style: el,
                      type: "text",
                      value:
                        (null === (m = A.ref) || void 0 === m
                          ? void 0
                          : m.text) || "",
                      onChange: (e) => I(M, "text", e.target.value),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "FontType:" }),
                    (0, en.jsxs)("select", {
                      style: {
                        background: "transparent",
                        color: "white",
                        width: "148px",
                        height: "25px",
                        borderRadius: "4px",
                      },
                      value:
                        (null === (g = A.ref) || void 0 === g
                          ? void 0
                          : g.fontType) || "monospace",
                      onChange: (e) => I(M, "fontType", e.target.value),
                      children: [
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "monospace",
                          children: "Monospace",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "Arial",
                          children: "Arial",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "Verdana",
                          children: "Verdana",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "Times New Roman",
                          children: "Times New Roman",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "Courier New",
                          children: "Courier New",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Rotation:" }),
                    (0, en.jsx)("input", {
                      style: el,
                      type: "number",
                      value:
                        (null === (y = A.ref) || void 0 === y
                          ? void 0
                          : y.rotation) || "",
                      onChange: (e) =>
                        I(M, "rotation", parseFloat(e.target.value)),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Justification:" }),
                    (0, en.jsxs)("select", {
                      style: {
                        background: "transparent",
                        color: "white",
                        width: "148px",
                        height: "25px",
                        borderRadius: "4px",
                      },
                      value:
                        (null === (b = A.ref) || void 0 === b
                          ? void 0
                          : b.justification) || "left",
                      onChange: (e) => I(M, "justification", e.target.value),
                      children: [
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "centerleft",
                          children: "Center Left",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "centerright",
                          children: "Center Right",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "center",
                          children: "Center",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "upperleft",
                          children: "upper Left",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "upperright",
                          children: "upper Right",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "lowerleft",
                          children: "lower Left",
                        }),
                        (0, en.jsx)("option", {
                          style: { background: "black" },
                          value: "lowerright",
                          children: "lower Right",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Fill:" }),
                    (0, en.jsx)("input", {
                      type: "color",
                      value:
                        (null === (v = A.ref) || void 0 === v
                          ? void 0
                          : v.fill) ||
                        A.color ||
                        "#000000",
                      onChange: (e) => I(M, "fill", e.target.value),
                    }),
                  ],
                }),
                (0, en.jsxs)("div", {
                  style: Zo,
                  children: [
                    (0, en.jsx)("label", { children: "Stroke:" }),
                    (0, en.jsx)("input", {
                      type: "color",
                      value:
                        (null === (w = A.ref) || void 0 === w
                          ? void 0
                          : w.stroke) || "#000000",
                      onChange: (e) => I(M, "stroke", e.target.value),
                    }),
                  ],
                }),
              ],
            }),
          "instance" === k &&
            (0, en.jsx)(en.Fragment, {
              children: (0, en.jsxs)("div", {
                style: Zo,
                children: [
                  (0, en.jsx)("label", { children: "Instance Name:" }),
                  (0, en.jsx)("input", {
                    type: "text",
                    value: A.instanceName || "",
                    onChange: (e) => I(M, "instanceName", e.target.value),
                  }),
                ],
              }),
            }),
        ],
      });
    },
    ol = () => {
      const e = Ot.getCells(),
        t = new Map();
      e.forEach((e) => t.set(e.name, { name: e.name, children: [] }));
      const n = (function () {
          const e = Ot.getCells(),
            t = {};
          for (let n of e)
            for (let e of n.instances || []) {
              const r = `${n.name}\u2192${e.ref}`;
              t[r] = (t[r] || 0) + 1;
            }
          return t;
        })(),
        r = new Set(),
        i = function (n) {
          let a =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new Set();
          const o = e.find((e) => e.name === n.name);
          if (o && !a.has(n.name)) {
            a.add(n.name);
            for (const e of o.instances || []) {
              const o = t.get(e.ref);
              o && (r.add(e.ref), n.children.push(o), i(o, a));
            }
          }
        },
        a = [];
      for (const o of e)
        if (!e.some((e) => (e.instances || []).some((e) => e.ref === o.name))) {
          const e = t.get(o.name);
          i(e), a.push(e);
        }
      return { roots: a, counts: n };
    },
    ll = (e) => {
      let { node: t, activeCell: n, onSelect: r, counts: a } = e;
      const [o, l] = (0, i.useState)(!0),
        s = t.children.map((e) => e.name);
      0 === s.length || s.length;
      return (0, en.jsxs)("div", {
        style: { marginLeft: 15 },
        children: [
          (0, en.jsxs)("div", {
            style: {
              backgroundColor: t.name === n ? "#444" : "transparent",
              borderRadius: "6px",
              padding: "4px 6px",
              cursor: "pointer",
              color: "#fff",
            },
            onClick: () => r(t.name),
            children: [
              t.children.length > 0 &&
                (0, en.jsx)("span", {
                  onClick: (e) => {
                    e.stopPropagation(), l(!o);
                  },
                  children: o ? "\ud83d\udcc2" : "\ud83d\udcc1",
                }),
              " ",
              "\ud83d\udcc4 ",
              t.name,
              a[t.name] ? ` (x${a[t.name]})` : "",
            ],
          }),
          o &&
            t.children.map((e) => {
              const i = `${t.name}->${e.name}`;
              a[i];
              return (0, en.jsx)(
                ll,
                { node: e, activeCell: n, onSelect: r, counts: a },
                `${t.name}-${e.name}`
              );
            }),
        ],
      });
    },
    sl = () => {
      const [e, t] = (0, i.useState)([]),
        [n, r] = (0, i.useState)(qt.getSelectedCell()),
        [a, o] = (0, i.useState)({});
      (0, i.useEffect)(() => {
        const { roots: e, counts: n } = ol();
        if ((t(e), o(n), !qt.getSelectedCell() && e.length > 0)) {
          const t = e[0].name;
          qt.setSelectedCell(t), r(t), window.canvasEngine.draw();
        }
      }, []);
      const l = (e) => {
        r(e), qt.setSelectedCell(e), window.canvasEngine.draw();
      };
      return (0, en.jsxs)("div", {
        style: {
          padding: "10px",
          color: "#fff",
          maxHeight: "100%",
          overflowY: "auto",
        },
        children: [
          (0, en.jsx)("h3", { children: "\ud83d\udcc1 Hierarchy" }),
          e.map((e) =>
            (0, en.jsx)(
              ll,
              { node: e, activeCell: n, onSelect: l, counts: a },
              e.name
            )
          ),
        ],
      });
    },
    cl = Ro(
      (0, en.jsx)("path", {
        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z",
      })
    ),
    ul = Ro(
      (0, en.jsx)("path", {
        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
      })
    ),
    dl = Ro(
      (0, en.jsx)("path", {
        d: "M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3zM14 5h-3l-1-1H6L5 5H2v2h12z",
      })
    ),
    fl = () => {
      const [e, t] = (0, i.useState)(At.getAllLabels()),
        n = () => t(At.getAllLabels()),
        [r, a] = (0, i.useState)(!1),
        [o, l] = (0, i.useState)(null),
        [s, c] = (0, i.useState)(""),
        [u, d] = (0, i.useState)(!0),
        [f, p] = (0, i.useState)(!1);
      (0, i.useEffect)(() => {
        if (r) return;
        const e = setInterval(() => {
          t(At.getAllLabels());
        }, 500);
        return () => clearInterval(e);
      }, [r]);
      const h = (e) => {
          At.toggleLabelVisibility(e), n();
        },
        m = (e) => {
          At.toggleLabelLock(e), n();
        },
        g = (t) => {
          const n = e.find((e) => e.id === t);
          n && (At.updateLabelText(t, n.text), l(null), a(!1));
        },
        y = e.filter((e) => e.text.toLowerCase().includes(s.toLowerCase()));
      return (0, en.jsxs)("div", {
        style: {
          padding: "12px",
          overflowY: "auto",
          maxHeight: "100%",
          background: "#1c1c1c",
          color: "#fff",
        },
        children: [
          (0, en.jsx)("h3", {
            style: { marginBottom: "12px", fontWeight: "600" },
            children: "Labels",
          }),
          (0, en.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              background: "#2a2a2a",
              borderRadius: "4px",
              padding: "4px 8px",
            },
            children: [
              (0, en.jsx)(ul, {
                style: { marginRight: "6px", fontSize: "20px", color: "#aaa" },
              }),
              (0, en.jsx)("input", {
                type: "text",
                placeholder: "Search label...",
                value: s,
                onChange: (e) => c(e.target.value),
                style: {
                  flexGrow: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: "14px",
                },
              }),
            ],
          }),
          (0, en.jsxs)("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
            },
            children: [
              (0, en.jsx)(Do, {
                onClick: () => {
                  At.toggleAllVisibility(!u), d(!u), n();
                },
                style: { cursor: "pointer", fontSize: "20px", color: "#ccc" },
                titleAccess: "Toggle All Visibility",
              }),
              (0, en.jsx)(Bo, {
                onClick: () => {
                  At.toggleAllLock(!f), p(!f), n();
                },
                style: { cursor: "pointer", fontSize: "20px", color: "#ccc" },
                titleAccess: "Toggle All Lock",
              }),
              (0, en.jsx)(dl, {
                onClick: () => {
                  At.deleteAllLabels(), n();
                },
                style: { cursor: "pointer", fontSize: "20px", color: "#ccc" },
                titleAccess: "Delete All Labels",
              }),
            ],
          }),
          0 === y.length &&
            (0, en.jsx)("p", {
              style: { color: "#888", fontSize: "13px" },
              children: "No labels found",
            }),
          y.map((r) =>
            (0, en.jsxs)(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  background: "#2a2a2a",
                  borderRadius: "4px",
                  padding: "6px 8px",
                  transition: "background 0.2s",
                },
                onClick: () =>
                  window.canvasEngine &&
                  window.canvasEngine.focusOnLabel &&
                  window.canvasEngine.focusOnLabel(r.id),
                onMouseEnter: (e) => {
                  e.currentTarget
                    .querySelectorAll("svg")
                    .forEach((e) => (e.style.fontSize = "16px")),
                    (e.currentTarget.style.background = "#333");
                },
                onMouseLeave: (e) => {
                  e.currentTarget
                    .querySelectorAll("svg")
                    .forEach((e) => (e.style.fontSize = "18px")),
                    (e.currentTarget.style.background = "#2a2a2a");
                },
                children: [
                  o === r.id
                    ? (0, en.jsx)("input", {
                        type: "text",
                        value: r.text,
                        onChange: (n) =>
                          ((n, r) => {
                            const i = n.target.value,
                              a = e.map((e) =>
                                e.id === r ? { ...e, text: i } : e
                              );
                            t(a);
                          })(n, r.id),
                        onKeyDown: (e) =>
                          ((e, t) => {
                            "Enter" === e.key && g(t);
                          })(e, r.id),
                        onBlur: () => g(r.id),
                        autoFocus: !0,
                        style: {
                          flexGrow: 1,
                          background: "#444",
                          border: "none",
                          outline: "none",
                          color: "#fff",
                          fontSize: "13px",
                          padding: "2px 4px",
                          borderRadius: "4px",
                        },
                      })
                    : (0, en.jsx)("span", {
                        style: {
                          flexGrow: 1,
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        },
                        children: r.text,
                      }),
                  (0, en.jsx)(Uo, {
                    onClick: () => {
                      return (e = r.id), l(e), void a(!0);
                      var e;
                    },
                    style: {
                      cursor: "pointer",
                      marginRight: "6px",
                      fontSize: "18px",
                    },
                  }),
                  (0, en.jsx)(cl, {
                    onClick: () =>
                      ((t) => {
                        const r = e.find((e) => e.id === t);
                        r && (At.deleteLabel(r.layerId, r.id), n());
                      })(r.id),
                    style: {
                      cursor: "pointer",
                      marginRight: "6px",
                      fontSize: "18px",
                    },
                  }),
                  !1 !== r.visible
                    ? (0, en.jsx)(Do, {
                        onClick: () => h(r.id),
                        style: {
                          cursor: "pointer",
                          marginRight: "6px",
                          fontSize: "18px",
                        },
                      })
                    : (0, en.jsx)(Io, {
                        onClick: () => h(r.id),
                        style: {
                          cursor: "pointer",
                          marginRight: "6px",
                          fontSize: "18px",
                        },
                      }),
                  r.locked
                    ? (0, en.jsx)(Bo, {
                        onClick: () => m(r.id),
                        style: { cursor: "pointer", fontSize: "18px" },
                      })
                    : (0, en.jsx)(Fo, {
                        onClick: () => m(r.id),
                        style: { cursor: "pointer", fontSize: "18px" },
                      }),
                ],
              },
              r.id
            )
          ),
        ],
      });
    },
    pl = (e) => {
      let { label: t, tab: n, activeTab: r, setActiveTab: i } = e;
      const a = r === n;
      return (0, en.jsx)("button", {
        onClick: () => i(n),
        style: {
          flex: 1,
          padding: "4px 2px",
          backgroundColor: a ? "#2d2d2d" : "#1e1e1e",
          color: a ? "#00d8ff" : "#aaa",
          borderBottom: a ? "2px solid #00d8ff" : "2px solid transparent",
          fontWeight: a ? "600" : "normal",
          fontSize: "12px",
          cursor: "pointer",
          transition: "all 0.2s ease",
          borderRight: "4px solid #333",
        },
        onMouseEnter: (e) => {
          a || (e.target.style.backgroundColor = "#2a2a2a");
        },
        onMouseLeave: (e) => {
          a || (e.target.style.backgroundColor = "#1e1e1e");
        },
        children: t,
      });
    },
    hl = () => {
      const [e, t] = (0, i.useState)("layer");
      return (0, en.jsxs)("div", {
        style: {
          width: "252px",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          height: "93.5%",
          borderLeft: "2px solid #333",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: "36px",
          right: "0px",
        },
        children: [
          (0, en.jsxs)("div", {
            style: { display: "flex", borderBottom: "1px solid #333" },
            children: [
              (0, en.jsx)(pl, {
                label: "Layer",
                tab: "layer",
                activeTab: e,
                setActiveTab: t,
              }),
              (0, en.jsx)(pl, {
                label: "Property",
                tab: "property",
                activeTab: e,
                setActiveTab: t,
              }),
              (0, en.jsx)(pl, {
                label: "Hierarchy",
                tab: "hierarchy",
                activeTab: e,
                setActiveTab: t,
              }),
              (0, en.jsx)(pl, {
                label: "Label",
                tab: "label",
                activeTab: e,
                setActiveTab: t,
              }),
            ],
          }),
          (0, en.jsx)("div", {
            style: {
              flex: 1,
              overflow: "hidden",
              padding: "4px 10px 0px 2px",
              width: "100%",
              minWidth: "250px",
              maxWidth: "250px",
              boxSizing: "border-box",
            },
            children: (() => {
              switch (e) {
                case "layer":
                  return (0, en.jsx)(Ko, {});
                case "property":
                  return (0, en.jsx)(al, {});
                case "hierarchy":
                  return (0, en.jsx)(sl, {});
                case "label":
                  return (0, en.jsx)(fl, {});
                default:
                  return null;
              }
            })(),
          }),
        ],
      });
    },
    ml = {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    },
    gl = {
      backgroundColor: "#1e1e1e",
      padding: "40px",
      borderRadius: "10px",
      textAlign: "center",
      color: "#fff",
      minWidth: "300px",
    },
    yl = {
      padding: "14px 28px",
      backgroundColor: "#2196f3",
      border: "none",
      borderRadius: "8px",
      marginBottom: "20px",
      color: "#fff",
      fontSize: "16px",
      display: "block",
      width: "100%",
    },
    bl = (e) => {
      let { onStartNew: t, onLoadJSON: n } = e;
      return (0, en.jsx)("div", {
        style: ml,
        children: (0, en.jsxs)("div", {
          style: gl,
          children: [
            (0, en.jsx)("h2", {
              style: { marginBottom: "20px" },
              children: "\ud83d\udcd0 Start VLSI Layout",
            }),
            (0, en.jsx)("button", {
              style: yl,
              onClick: t,
              children: "\u2795 Start New Layout",
            }),
            (0, en.jsxs)("label", {
              style: { ...yl, cursor: "pointer", width: "auto" },
              children: [
                "\ud83d\udcc2 Load Layout (JSON)",
                (0, en.jsx)("input", {
                  type: "file",
                  accept: ".json",
                  onChange: n,
                  style: { display: "none" },
                }),
              ],
            }),
          ],
        }),
      });
    },
    vl = Ro(
      (0, en.jsx)("path", {
        d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91",
      })
    ),
    wl = (e) => {
      let {
        unit: t,
        setUnit: n,
        drawMode: r,
        setDrawMode: i,
        lineMode: a,
        setLineMode: o,
        tickCount: l,
        setTickCount: s,
        onReset: c,
        rulerColor: u,
        setRulerColor: d,
        onGrid: f,
        setOnGrid: p,
      } = e;
      return (0, en.jsxs)("div", {
        className: "ruler-controls",
        children: [
          (0, en.jsxs)("select", {
            value: t,
            onChange: (e) => n(e.target.value),
            children: [
              (0, en.jsx)("option", { value: "1", children: "Px" }),
              (0, en.jsx)("option", {
                value: "264.583",
                children: "Micrometers",
              }),
              (0, en.jsx)("option", {
                value: "264583",
                children: "Nanometers",
              }),
            ],
          }),
          (0, en.jsxs)("select", {
            value: r,
            onChange: (e) => i(e.target.value),
            children: [
              (0, en.jsx)("option", { value: "two", children: "Two Points" }),
              (0, en.jsx)("option", {
                value: "multi",
                children: "Multiple Points",
              }),
            ],
          }),
          (0, en.jsxs)("select", {
            value: a,
            onChange: (e) => o(e.target.value),
            children: [
              (0, en.jsx)("option", { value: "free", children: "Free" }),
              (0, en.jsx)("option", {
                value: "diagonal",
                children: "Diagonal",
              }),
              (0, en.jsx)("option", {
                value: "orthogonal",
                children: "Orthogonal",
              }),
              (0, en.jsx)("option", { value: "5", children: "5 Degrees" }),
              (0, en.jsx)("option", { value: "10", children: "10 Degrees" }),
              (0, en.jsx)("option", { value: "15", children: "15 Degrees" }),
            ],
          }),
          (0, en.jsx)("select", {
            value: l,
            onChange: (e) => s(parseInt(e.target.value)),
            children: [...Array(10).keys()].map((e) =>
              (0, en.jsxs)(
                "option",
                { value: e + 1, children: [e + 1, " Values"] },
                e + 1
              )
            ),
          }),
          (0, en.jsx)("label", {
            children: (0, en.jsxs)("select", {
              value: f,
              onChange: (e) => p("yes" === e.target.value),
              children: [
                (0, en.jsx)("option", { value: "yes", children: "Yes" }),
                (0, en.jsx)("option", { value: "no", children: "No" }),
              ],
            }),
          }),
          (0, en.jsx)("label", {
            children: (0, en.jsx)("input", {
              type: "color",
              value: u,
              onChange: (e) => d(e.target.value),
              style: { marginLeft: "2px" },
            }),
          }),
          (0, en.jsx)(vl, {
            className: "reset-icon",
            onClick: c,
            style: { cursor: "pointer", color: "#fff" },
            titleAccess: "Reset Ruler",
          }),
        ],
      });
    },
    xl = Ro(
      (0, en.jsx)("path", {
        d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8",
      })
    ),
    Sl = Ro(
      (0, en.jsx)("path", {
        d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7z",
      })
    ),
    kl = Ro(
      (0, en.jsx)("path", {
        d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z",
      })
    ),
    Cl = Ro(
      (0, en.jsx)("path", {
        d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M9.1 17H7v-2.14l5.96-5.96 2.12 2.12zm7.75-7.73-1.06 1.06-2.12-2.12 1.06-1.06c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71",
      })
    ),
    El = Ro(
      (0, en.jsx)("path", {
        d: "M7 3H4v3H2V1h5zm15 3V1h-5v2h3v3zM7 21H4v-3H2v5h5zm13-3v3h-3v2h5v-5zm-1 0c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zM15 8H9v2h6zm0 3H9v2h6zm0 3H9v2h6z",
      })
    ),
    _l = Ro((0, en.jsx)("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" })),
    Tl = Ro(
      (0, en.jsx)("path", {
        d: "M10 9h4V6h3l-5-5-5 5h3zm-1 1H6V7l-5 5 5 5v-3h3zm14 2-5-5v3h-3v4h3v3zm-9 3h-4v3H7l5 5 5-5h-3z",
      })
    ),
    jl = {};
  const Ol = [];
  class zl {
    static create() {
      return new zl();
    }
    currentId = null;
    start(e, t) {
      this.clear(),
        (this.currentId = setTimeout(() => {
          (this.currentId = null), t();
        }, e));
    }
    clear = () => {
      null !== this.currentId &&
        (clearTimeout(this.currentId), (this.currentId = null));
    };
    disposeEffect = () => this.clear;
  }
  function Rl() {
    const e = (function (e, t) {
      const n = i.useRef(jl);
      return n.current === jl && (n.current = e(t)), n;
    })(zl.create).current;
    var t;
    return (t = e.disposeEffect), i.useEffect(t, Ol), e;
  }
  const Pl = i.createContext();
  const Al = () => i.useContext(Pl) ?? !1;
  function Ml(e) {
    try {
      return e.matches(":focus-visible");
    } catch (t) {
      0;
    }
    return !1;
  }
  function Ll(e) {
    return parseInt(i.version, 10) >= 19
      ? e?.props?.ref || null
      : e?.ref || null;
  }
  const Nl = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const t = i.useContext(jr);
      return t && ((n = t), 0 !== Object.keys(n).length) ? t : e;
      var n;
    },
    Dl = Gi();
  const Il = function () {
    return Nl(
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dl
    );
  };
  function Bl() {
    const e = Il(uo);
    return e[fo] || e;
  }
  function Fl(e, t) {
    return (
      (Fl = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      Fl(e, t)
    );
  }
  var $l = n(950);
  const Hl = !1,
    Ul = i.createContext(null);
  var Vl = "unmounted",
    Wl = "exited",
    ql = "entering",
    Xl = "entered",
    Gl = "exiting",
    Yl = (function (e) {
      var t, n;
      function r(t, n) {
        var r;
        r = e.call(this, t, n) || this;
        var i,
          a = n && !n.isMounting ? t.enter : t.appear;
        return (
          (r.appearStatus = null),
          t.in
            ? a
              ? ((i = Wl), (r.appearStatus = ql))
              : (i = Xl)
            : (i = t.unmountOnExit || t.mountOnEnter ? Vl : Wl),
          (r.state = { status: i }),
          (r.nextCallback = null),
          r
        );
      }
      (n = e),
        ((t = r).prototype = Object.create(n.prototype)),
        (t.prototype.constructor = t),
        Fl(t, n),
        (r.getDerivedStateFromProps = function (e, t) {
          return e.in && t.status === Vl ? { status: Wl } : null;
        });
      var a = r.prototype;
      return (
        (a.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
        }),
        (a.componentDidUpdate = function (e) {
          var t = null;
          if (e !== this.props) {
            var n = this.state.status;
            this.props.in
              ? n !== ql && n !== Xl && (t = ql)
              : (n !== ql && n !== Xl) || (t = Gl);
          }
          this.updateStatus(!1, t);
        }),
        (a.componentWillUnmount = function () {
          this.cancelNextCallback();
        }),
        (a.getTimeouts = function () {
          var e,
            t,
            n,
            r = this.props.timeout;
          return (
            (e = t = n = r),
            null != r &&
              "number" !== typeof r &&
              ((e = r.exit),
              (t = r.enter),
              (n = void 0 !== r.appear ? r.appear : t)),
            { exit: e, enter: t, appear: n }
          );
        }),
        (a.updateStatus = function (e, t) {
          if ((void 0 === e && (e = !1), null !== t))
            if ((this.cancelNextCallback(), t === ql)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : $l.findDOMNode(this);
                n &&
                  (function (e) {
                    e.scrollTop;
                  })(n);
              }
              this.performEnter(e);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === Wl &&
              this.setState({ status: Vl });
        }),
        (a.performEnter = function (e) {
          var t = this,
            n = this.props.enter,
            r = this.context ? this.context.isMounting : e,
            i = this.props.nodeRef ? [r] : [$l.findDOMNode(this), r],
            a = i[0],
            o = i[1],
            l = this.getTimeouts(),
            s = r ? l.appear : l.enter;
          (!e && !n) || Hl
            ? this.safeSetState({ status: Xl }, function () {
                t.props.onEntered(a);
              })
            : (this.props.onEnter(a, o),
              this.safeSetState({ status: ql }, function () {
                t.props.onEntering(a, o),
                  t.onTransitionEnd(s, function () {
                    t.safeSetState({ status: Xl }, function () {
                      t.props.onEntered(a, o);
                    });
                  });
              }));
        }),
        (a.performExit = function () {
          var e = this,
            t = this.props.exit,
            n = this.getTimeouts(),
            r = this.props.nodeRef ? void 0 : $l.findDOMNode(this);
          t && !Hl
            ? (this.props.onExit(r),
              this.safeSetState({ status: Gl }, function () {
                e.props.onExiting(r),
                  e.onTransitionEnd(n.exit, function () {
                    e.safeSetState({ status: Wl }, function () {
                      e.props.onExited(r);
                    });
                  });
              }))
            : this.safeSetState({ status: Wl }, function () {
                e.props.onExited(r);
              });
        }),
        (a.cancelNextCallback = function () {
          null !== this.nextCallback &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (a.safeSetState = function (e, t) {
          (t = this.setNextCallback(t)), this.setState(e, t);
        }),
        (a.setNextCallback = function (e) {
          var t = this,
            n = !0;
          return (
            (this.nextCallback = function (r) {
              n && ((n = !1), (t.nextCallback = null), e(r));
            }),
            (this.nextCallback.cancel = function () {
              n = !1;
            }),
            this.nextCallback
          );
        }),
        (a.onTransitionEnd = function (e, t) {
          this.setNextCallback(t);
          var n = this.props.nodeRef
              ? this.props.nodeRef.current
              : $l.findDOMNode(this),
            r = null == e && !this.props.addEndListener;
          if (n && !r) {
            if (this.props.addEndListener) {
              var i = this.props.nodeRef
                  ? [this.nextCallback]
                  : [n, this.nextCallback],
                a = i[0],
                o = i[1];
              this.props.addEndListener(a, o);
            }
            null != e && setTimeout(this.nextCallback, e);
          } else setTimeout(this.nextCallback, 0);
        }),
        (a.render = function () {
          var e = this.state.status;
          if (e === Vl) return null;
          var t = this.props,
            n = t.children,
            r =
              (t.in,
              t.mountOnEnter,
              t.unmountOnExit,
              t.appear,
              t.enter,
              t.exit,
              t.timeout,
              t.addEndListener,
              t.onEnter,
              t.onEntering,
              t.onEntered,
              t.onExit,
              t.onExiting,
              t.onExited,
              t.nodeRef,
              (function (e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                  if ({}.hasOwnProperty.call(e, r)) {
                    if (-1 !== t.indexOf(r)) continue;
                    n[r] = e[r];
                  }
                return n;
              })(t, [
                "children",
                "in",
                "mountOnEnter",
                "unmountOnExit",
                "appear",
                "enter",
                "exit",
                "timeout",
                "addEndListener",
                "onEnter",
                "onEntering",
                "onEntered",
                "onExit",
                "onExiting",
                "onExited",
                "nodeRef",
              ]));
          return i.createElement(
            Ul.Provider,
            { value: null },
            "function" === typeof n
              ? n(e, r)
              : i.cloneElement(i.Children.only(n), r)
          );
        }),
        r
      );
    })(i.Component);
  function Kl() {}
  (Yl.contextType = Ul),
    (Yl.propTypes = {}),
    (Yl.defaultProps = {
      in: !1,
      mountOnEnter: !1,
      unmountOnExit: !1,
      appear: !1,
      enter: !0,
      exit: !0,
      onEnter: Kl,
      onEntering: Kl,
      onEntered: Kl,
      onExit: Kl,
      onExiting: Kl,
      onExited: Kl,
    }),
    (Yl.UNMOUNTED = Vl),
    (Yl.EXITED = Wl),
    (Yl.ENTERING = ql),
    (Yl.ENTERED = Xl),
    (Yl.EXITING = Gl);
  const Ql = Yl;
  function Jl(e, t) {
    const { timeout: n, easing: r, style: i = {} } = e;
    return {
      duration:
        i.transitionDuration ?? ("number" === typeof n ? n : n[t.mode] || 0),
      easing:
        i.transitionTimingFunction ?? ("object" === typeof r ? r[t.mode] : r),
      delay: i.transitionDelay,
    };
  }
  function Zl() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    const r = i.useRef(void 0),
      a = i.useCallback((e) => {
        const n = t.map((t) => {
          if (null == t) return null;
          if ("function" === typeof t) {
            const n = t,
              r = n(e);
            return "function" === typeof r
              ? r
              : () => {
                  n(null);
                };
          }
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        });
        return () => {
          n.forEach((e) => e?.());
        };
      }, t);
    return i.useMemo(
      () =>
        t.every((e) => null == e)
          ? null
          : (e) => {
              r.current && (r.current(), (r.current = void 0)),
                null != e && (r.current = a(e));
            },
      t
    );
  }
  const es = Zl;
  function ts(e) {
    return `scale(${e}, ${e ** 2})`;
  }
  const ns = {
      entering: { opacity: 1, transform: ts(1) },
      entered: { opacity: 1, transform: "none" },
    },
    rs =
      "undefined" !== typeof navigator &&
      /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
      /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    is = i.forwardRef(function (e, t) {
      const {
          addEndListener: n,
          appear: r = !0,
          children: a,
          easing: o,
          in: l,
          onEnter: s,
          onEntered: c,
          onEntering: u,
          onExit: d,
          onExited: f,
          onExiting: p,
          style: h,
          timeout: m = "auto",
          TransitionComponent: g = Ql,
          ...y
        } = e,
        b = Rl(),
        v = i.useRef(),
        w = Bl(),
        x = i.useRef(null),
        S = es(x, Ll(a), t),
        k = (e) => (t) => {
          if (e) {
            const n = x.current;
            void 0 === t ? e(n) : e(n, t);
          }
        },
        C = k(u),
        E = k((e, t) => {
          ((e) => {
            e.scrollTop;
          })(e);
          const {
            duration: n,
            delay: r,
            easing: i,
          } = Jl({ style: h, timeout: m, easing: o }, { mode: "enter" });
          let a;
          "auto" === m
            ? ((a = w.transitions.getAutoHeightDuration(e.clientHeight)),
              (v.current = a))
            : (a = n),
            (e.style.transition = [
              w.transitions.create("opacity", { duration: a, delay: r }),
              w.transitions.create("transform", {
                duration: rs ? a : 0.666 * a,
                delay: r,
                easing: i,
              }),
            ].join(",")),
            s && s(e, t);
        }),
        _ = k(c),
        T = k(p),
        j = k((e) => {
          const {
            duration: t,
            delay: n,
            easing: r,
          } = Jl({ style: h, timeout: m, easing: o }, { mode: "exit" });
          let i;
          "auto" === m
            ? ((i = w.transitions.getAutoHeightDuration(e.clientHeight)),
              (v.current = i))
            : (i = t),
            (e.style.transition = [
              w.transitions.create("opacity", { duration: i, delay: n }),
              w.transitions.create("transform", {
                duration: rs ? i : 0.666 * i,
                delay: rs ? n : n || 0.333 * i,
                easing: r,
              }),
            ].join(",")),
            (e.style.opacity = 0),
            (e.style.transform = ts(0.75)),
            d && d(e);
        }),
        O = k(f);
      return (0, en.jsx)(g, {
        appear: r,
        in: l,
        nodeRef: x,
        onEnter: E,
        onEntered: _,
        onEntering: C,
        onExit: j,
        onExited: O,
        onExiting: T,
        addEndListener: (e) => {
          "auto" === m && b.start(v.current || 0, e), n && n(x.current, e);
        },
        timeout: "auto" === m ? null : m,
        ...y,
        children: (e, t) => {
          let { ownerState: n, ...r } = t;
          return i.cloneElement(a, {
            style: {
              opacity: 0,
              transform: ts(0.75),
              visibility: "exited" !== e || l ? void 0 : "hidden",
              ...ns[e],
              ...h,
              ...a.props.style,
            },
            ref: S,
            ...r,
          });
        },
      });
    });
  is && (is.muiSupportAuto = !0);
  const as = is,
    os = "undefined" !== typeof window ? i.useLayoutEffect : i.useEffect;
  function ls(e) {
    return (e && e.ownerDocument) || document;
  }
  function ss(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function cs(e) {
    return e instanceof ss(e).Element || e instanceof Element;
  }
  function us(e) {
    return e instanceof ss(e).HTMLElement || e instanceof HTMLElement;
  }
  function ds(e) {
    return (
      "undefined" !== typeof ShadowRoot &&
      (e instanceof ss(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var fs = Math.max,
    ps = Math.min,
    hs = Math.round;
  function ms() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function gs() {
    return !/^((?!chrome|android).)*safari/i.test(ms());
  }
  function ys(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var r = e.getBoundingClientRect(),
      i = 1,
      a = 1;
    t &&
      us(e) &&
      ((i = (e.offsetWidth > 0 && hs(r.width) / e.offsetWidth) || 1),
      (a = (e.offsetHeight > 0 && hs(r.height) / e.offsetHeight) || 1));
    var o = (cs(e) ? ss(e) : window).visualViewport,
      l = !gs() && n,
      s = (r.left + (l && o ? o.offsetLeft : 0)) / i,
      c = (r.top + (l && o ? o.offsetTop : 0)) / a,
      u = r.width / i,
      d = r.height / a;
    return {
      width: u,
      height: d,
      top: c,
      right: s + u,
      bottom: c + d,
      left: s,
      x: s,
      y: c,
    };
  }
  function bs(e) {
    var t = ss(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function vs(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function ws(e) {
    return ((cs(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function xs(e) {
    return ys(ws(e)).left + bs(e).scrollLeft;
  }
  function Ss(e) {
    return ss(e).getComputedStyle(e);
  }
  function ks(e) {
    var t = Ss(e),
      n = t.overflow,
      r = t.overflowX,
      i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + i + r);
  }
  function Cs(e, t, n) {
    void 0 === n && (n = !1);
    var r = us(t),
      i =
        us(t) &&
        (function (e) {
          var t = e.getBoundingClientRect(),
            n = hs(t.width) / e.offsetWidth || 1,
            r = hs(t.height) / e.offsetHeight || 1;
          return 1 !== n || 1 !== r;
        })(t),
      a = ws(t),
      o = ys(e, i, n),
      l = { scrollLeft: 0, scrollTop: 0 },
      s = { x: 0, y: 0 };
    return (
      (r || (!r && !n)) &&
        (("body" !== vs(t) || ks(a)) &&
          (l = (function (e) {
            return e !== ss(e) && us(e)
              ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
              : bs(e);
            var t;
          })(t)),
        us(t)
          ? (((s = ys(t, !0)).x += t.clientLeft), (s.y += t.clientTop))
          : a && (s.x = xs(a))),
      {
        x: o.left + l.scrollLeft - s.x,
        y: o.top + l.scrollTop - s.y,
        width: o.width,
        height: o.height,
      }
    );
  }
  function Es(e) {
    var t = ys(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return (
      Math.abs(t.width - n) <= 1 && (n = t.width),
      Math.abs(t.height - r) <= 1 && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
  }
  function _s(e) {
    return "html" === vs(e)
      ? e
      : e.assignedSlot || e.parentNode || (ds(e) ? e.host : null) || ws(e);
  }
  function Ts(e) {
    return ["html", "body", "#document"].indexOf(vs(e)) >= 0
      ? e.ownerDocument.body
      : us(e) && ks(e)
      ? e
      : Ts(_s(e));
  }
  function js(e, t) {
    var n;
    void 0 === t && (t = []);
    var r = Ts(e),
      i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
      a = ss(r),
      o = i ? [a].concat(a.visualViewport || [], ks(r) ? r : []) : r,
      l = t.concat(o);
    return i ? l : l.concat(js(_s(o)));
  }
  function Os(e) {
    return ["table", "td", "th"].indexOf(vs(e)) >= 0;
  }
  function zs(e) {
    return us(e) && "fixed" !== Ss(e).position ? e.offsetParent : null;
  }
  function Rs(e) {
    for (var t = ss(e), n = zs(e); n && Os(n) && "static" === Ss(n).position; )
      n = zs(n);
    return n &&
      ("html" === vs(n) || ("body" === vs(n) && "static" === Ss(n).position))
      ? t
      : n ||
          (function (e) {
            var t = /firefox/i.test(ms());
            if (/Trident/i.test(ms()) && us(e) && "fixed" === Ss(e).position)
              return null;
            var n = _s(e);
            for (
              ds(n) && (n = n.host);
              us(n) && ["html", "body"].indexOf(vs(n)) < 0;

            ) {
              var r = Ss(n);
              if (
                "none" !== r.transform ||
                "none" !== r.perspective ||
                "paint" === r.contain ||
                -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                (t && "filter" === r.willChange) ||
                (t && r.filter && "none" !== r.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  var Ps = "top",
    As = "bottom",
    Ms = "right",
    Ls = "left",
    Ns = "auto",
    Ds = [Ps, As, Ms, Ls],
    Is = "start",
    Bs = "end",
    Fs = "viewport",
    $s = "popper",
    Hs = Ds.reduce(function (e, t) {
      return e.concat([t + "-" + Is, t + "-" + Bs]);
    }, []),
    Us = [].concat(Ds, [Ns]).reduce(function (e, t) {
      return e.concat([t, t + "-" + Is, t + "-" + Bs]);
    }, []),
    Vs = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function Ws(e) {
    var t = new Map(),
      n = new Set(),
      r = [];
    function i(e) {
      n.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            if (!n.has(e)) {
              var r = t.get(e);
              r && i(r);
            }
          }),
        r.push(e);
    }
    return (
      e.forEach(function (e) {
        t.set(e.name, e);
      }),
      e.forEach(function (e) {
        n.has(e.name) || i(e);
      }),
      r
    );
  }
  function qs(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (n) {
            Promise.resolve().then(function () {
              (t = void 0), n(e());
            });
          })),
        t
      );
    };
  }
  var Xs = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Gs() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" === typeof e.getBoundingClientRect);
    });
  }
  function Ys(e) {
    void 0 === e && (e = {});
    var t = e,
      n = t.defaultModifiers,
      r = void 0 === n ? [] : n,
      i = t.defaultOptions,
      a = void 0 === i ? Xs : i;
    return function (e, t, n) {
      void 0 === n && (n = a);
      var i = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Xs, a),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        o = [],
        l = !1,
        s = {
          state: i,
          setOptions: function (n) {
            var l = "function" === typeof n ? n(i.options) : n;
            c(),
              (i.options = Object.assign({}, a, i.options, l)),
              (i.scrollParents = {
                reference: cs(e)
                  ? js(e)
                  : e.contextElement
                  ? js(e.contextElement)
                  : [],
                popper: js(t),
              });
            var u = (function (e) {
              var t = Ws(e);
              return Vs.reduce(function (e, n) {
                return e.concat(
                  t.filter(function (e) {
                    return e.phase === n;
                  })
                );
              }, []);
            })(
              (function (e) {
                var t = e.reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {});
                return Object.keys(t).map(function (e) {
                  return t[e];
                });
              })([].concat(r, i.options.modifiers))
            );
            return (
              (i.orderedModifiers = u.filter(function (e) {
                return e.enabled;
              })),
              i.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = void 0 === n ? {} : n,
                  a = e.effect;
                if ("function" === typeof a) {
                  var l = a({ state: i, name: t, instance: s, options: r }),
                    c = function () {};
                  o.push(l || c);
                }
              }),
              s.update()
            );
          },
          forceUpdate: function () {
            if (!l) {
              var e = i.elements,
                t = e.reference,
                n = e.popper;
              if (Gs(t, n)) {
                (i.rects = {
                  reference: Cs(t, Rs(n), "fixed" === i.options.strategy),
                  popper: Es(n),
                }),
                  (i.reset = !1),
                  (i.placement = i.options.placement),
                  i.orderedModifiers.forEach(function (e) {
                    return (i.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var r = 0; r < i.orderedModifiers.length; r++)
                  if (!0 !== i.reset) {
                    var a = i.orderedModifiers[r],
                      o = a.fn,
                      c = a.options,
                      u = void 0 === c ? {} : c,
                      d = a.name;
                    "function" === typeof o &&
                      (i =
                        o({ state: i, options: u, name: d, instance: s }) || i);
                  } else (i.reset = !1), (r = -1);
              }
            }
          },
          update: qs(function () {
            return new Promise(function (e) {
              s.forceUpdate(), e(i);
            });
          }),
          destroy: function () {
            c(), (l = !0);
          },
        };
      if (!Gs(e, t)) return s;
      function c() {
        o.forEach(function (e) {
          return e();
        }),
          (o = []);
      }
      return (
        s.setOptions(n).then(function (e) {
          !l && n.onFirstUpdate && n.onFirstUpdate(e);
        }),
        s
      );
    };
  }
  var Ks = { passive: !0 };
  function Qs(e) {
    return e.split("-")[0];
  }
  function Js(e) {
    return e.split("-")[1];
  }
  function Zs(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function ec(e) {
    var t,
      n = e.reference,
      r = e.element,
      i = e.placement,
      a = i ? Qs(i) : null,
      o = i ? Js(i) : null,
      l = n.x + n.width / 2 - r.width / 2,
      s = n.y + n.height / 2 - r.height / 2;
    switch (a) {
      case Ps:
        t = { x: l, y: n.y - r.height };
        break;
      case As:
        t = { x: l, y: n.y + n.height };
        break;
      case Ms:
        t = { x: n.x + n.width, y: s };
        break;
      case Ls:
        t = { x: n.x - r.width, y: s };
        break;
      default:
        t = { x: n.x, y: n.y };
    }
    var c = a ? Zs(a) : null;
    if (null != c) {
      var u = "y" === c ? "height" : "width";
      switch (o) {
        case Is:
          t[c] = t[c] - (n[u] / 2 - r[u] / 2);
          break;
        case Bs:
          t[c] = t[c] + (n[u] / 2 - r[u] / 2);
      }
    }
    return t;
  }
  var tc = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function nc(e) {
    var t,
      n = e.popper,
      r = e.popperRect,
      i = e.placement,
      a = e.variation,
      o = e.offsets,
      l = e.position,
      s = e.gpuAcceleration,
      c = e.adaptive,
      u = e.roundOffsets,
      d = e.isFixed,
      f = o.x,
      p = void 0 === f ? 0 : f,
      h = o.y,
      m = void 0 === h ? 0 : h,
      g = "function" === typeof u ? u({ x: p, y: m }) : { x: p, y: m };
    (p = g.x), (m = g.y);
    var y = o.hasOwnProperty("x"),
      b = o.hasOwnProperty("y"),
      v = Ls,
      w = Ps,
      x = window;
    if (c) {
      var S = Rs(n),
        k = "clientHeight",
        C = "clientWidth";
      if (
        (S === ss(n) &&
          "static" !== Ss((S = ws(n))).position &&
          "absolute" === l &&
          ((k = "scrollHeight"), (C = "scrollWidth")),
        i === Ps || ((i === Ls || i === Ms) && a === Bs))
      )
        (w = As),
          (m -=
            (d && S === x && x.visualViewport
              ? x.visualViewport.height
              : S[k]) - r.height),
          (m *= s ? 1 : -1);
      if (i === Ls || ((i === Ps || i === As) && a === Bs))
        (v = Ms),
          (p -=
            (d && S === x && x.visualViewport ? x.visualViewport.width : S[C]) -
            r.width),
          (p *= s ? 1 : -1);
    }
    var E,
      _ = Object.assign({ position: l }, c && tc),
      T =
        !0 === u
          ? (function (e, t) {
              var n = e.x,
                r = e.y,
                i = t.devicePixelRatio || 1;
              return { x: hs(n * i) / i || 0, y: hs(r * i) / i || 0 };
            })({ x: p, y: m }, ss(n))
          : { x: p, y: m };
    return (
      (p = T.x),
      (m = T.y),
      s
        ? Object.assign(
            {},
            _,
            (((E = {})[w] = b ? "0" : ""),
            (E[v] = y ? "0" : ""),
            (E.transform =
              (x.devicePixelRatio || 1) <= 1
                ? "translate(" + p + "px, " + m + "px)"
                : "translate3d(" + p + "px, " + m + "px, 0)"),
            E)
          )
        : Object.assign(
            {},
            _,
            (((t = {})[w] = b ? m + "px" : ""),
            (t[v] = y ? p + "px" : ""),
            (t.transform = ""),
            t)
          )
    );
  }
  const rc = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var n = t.styles[e] || {},
          r = t.attributes[e] || {},
          i = t.elements[e];
        us(i) &&
          vs(i) &&
          (Object.assign(i.style, n),
          Object.keys(r).forEach(function (e) {
            var t = r[e];
            !1 === t
              ? i.removeAttribute(e)
              : i.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(t.elements.popper.style, n.popper),
        (t.styles = n),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var r = t.elements[e],
              i = t.attributes[e] || {},
              a = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            us(r) &&
              vs(r) &&
              (Object.assign(r.style, a),
              Object.keys(i).forEach(function (e) {
                r.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  const ic = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name,
        i = n.offset,
        a = void 0 === i ? [0, 0] : i,
        o = Us.reduce(function (e, n) {
          return (
            (e[n] = (function (e, t, n) {
              var r = Qs(e),
                i = [Ls, Ps].indexOf(r) >= 0 ? -1 : 1,
                a =
                  "function" === typeof n
                    ? n(Object.assign({}, t, { placement: e }))
                    : n,
                o = a[0],
                l = a[1];
              return (
                (o = o || 0),
                (l = (l || 0) * i),
                [Ls, Ms].indexOf(r) >= 0 ? { x: l, y: o } : { x: o, y: l }
              );
            })(n, t.rects, a)),
            e
          );
        }, {}),
        l = o[t.placement],
        s = l.x,
        c = l.y;
      null != t.modifiersData.popperOffsets &&
        ((t.modifiersData.popperOffsets.x += s),
        (t.modifiersData.popperOffsets.y += c)),
        (t.modifiersData[r] = o);
    },
  };
  var ac = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function oc(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return ac[e];
    });
  }
  var lc = { start: "end", end: "start" };
  function sc(e) {
    return e.replace(/start|end/g, function (e) {
      return lc[e];
    });
  }
  function cc(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && ds(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function uc(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function dc(e, t, n) {
    return t === Fs
      ? uc(
          (function (e, t) {
            var n = ss(e),
              r = ws(e),
              i = n.visualViewport,
              a = r.clientWidth,
              o = r.clientHeight,
              l = 0,
              s = 0;
            if (i) {
              (a = i.width), (o = i.height);
              var c = gs();
              (c || (!c && "fixed" === t)) &&
                ((l = i.offsetLeft), (s = i.offsetTop));
            }
            return { width: a, height: o, x: l + xs(e), y: s };
          })(e, n)
        )
      : cs(t)
      ? (function (e, t) {
          var n = ys(e, !1, "fixed" === t);
          return (
            (n.top = n.top + e.clientTop),
            (n.left = n.left + e.clientLeft),
            (n.bottom = n.top + e.clientHeight),
            (n.right = n.left + e.clientWidth),
            (n.width = e.clientWidth),
            (n.height = e.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n
          );
        })(t, n)
      : uc(
          (function (e) {
            var t,
              n = ws(e),
              r = bs(e),
              i = null == (t = e.ownerDocument) ? void 0 : t.body,
              a = fs(
                n.scrollWidth,
                n.clientWidth,
                i ? i.scrollWidth : 0,
                i ? i.clientWidth : 0
              ),
              o = fs(
                n.scrollHeight,
                n.clientHeight,
                i ? i.scrollHeight : 0,
                i ? i.clientHeight : 0
              ),
              l = -r.scrollLeft + xs(e),
              s = -r.scrollTop;
            return (
              "rtl" === Ss(i || n).direction &&
                (l += fs(n.clientWidth, i ? i.clientWidth : 0) - a),
              { width: a, height: o, x: l, y: s }
            );
          })(ws(e))
        );
  }
  function fc(e, t, n, r) {
    var i =
        "clippingParents" === t
          ? (function (e) {
              var t = js(_s(e)),
                n =
                  ["absolute", "fixed"].indexOf(Ss(e).position) >= 0 && us(e)
                    ? Rs(e)
                    : e;
              return cs(n)
                ? t.filter(function (e) {
                    return cs(e) && cc(e, n) && "body" !== vs(e);
                  })
                : [];
            })(e)
          : [].concat(t),
      a = [].concat(i, [n]),
      o = a[0],
      l = a.reduce(function (t, n) {
        var i = dc(e, n, r);
        return (
          (t.top = fs(i.top, t.top)),
          (t.right = ps(i.right, t.right)),
          (t.bottom = ps(i.bottom, t.bottom)),
          (t.left = fs(i.left, t.left)),
          t
        );
      }, dc(e, o, r));
    return (
      (l.width = l.right - l.left),
      (l.height = l.bottom - l.top),
      (l.x = l.left),
      (l.y = l.top),
      l
    );
  }
  function pc(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function hc(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function mc(e, t) {
    void 0 === t && (t = {});
    var n = t,
      r = n.placement,
      i = void 0 === r ? e.placement : r,
      a = n.strategy,
      o = void 0 === a ? e.strategy : a,
      l = n.boundary,
      s = void 0 === l ? "clippingParents" : l,
      c = n.rootBoundary,
      u = void 0 === c ? Fs : c,
      d = n.elementContext,
      f = void 0 === d ? $s : d,
      p = n.altBoundary,
      h = void 0 !== p && p,
      m = n.padding,
      g = void 0 === m ? 0 : m,
      y = pc("number" !== typeof g ? g : hc(g, Ds)),
      b = f === $s ? "reference" : $s,
      v = e.rects.popper,
      w = e.elements[h ? b : f],
      x = fc(cs(w) ? w : w.contextElement || ws(e.elements.popper), s, u, o),
      S = ys(e.elements.reference),
      k = ec({ reference: S, element: v, strategy: "absolute", placement: i }),
      C = uc(Object.assign({}, v, k)),
      E = f === $s ? C : S,
      _ = {
        top: x.top - E.top + y.top,
        bottom: E.bottom - x.bottom + y.bottom,
        left: x.left - E.left + y.left,
        right: E.right - x.right + y.right,
      },
      T = e.modifiersData.offset;
    if (f === $s && T) {
      var j = T[i];
      Object.keys(_).forEach(function (e) {
        var t = [Ms, As].indexOf(e) >= 0 ? 1 : -1,
          n = [Ps, As].indexOf(e) >= 0 ? "y" : "x";
        _[e] += j[n] * t;
      });
    }
    return _;
  }
  const gc = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name;
      if (!t.modifiersData[r]._skip) {
        for (
          var i = n.mainAxis,
            a = void 0 === i || i,
            o = n.altAxis,
            l = void 0 === o || o,
            s = n.fallbackPlacements,
            c = n.padding,
            u = n.boundary,
            d = n.rootBoundary,
            f = n.altBoundary,
            p = n.flipVariations,
            h = void 0 === p || p,
            m = n.allowedAutoPlacements,
            g = t.options.placement,
            y = Qs(g),
            b =
              s ||
              (y === g || !h
                ? [oc(g)]
                : (function (e) {
                    if (Qs(e) === Ns) return [];
                    var t = oc(e);
                    return [sc(e), t, sc(t)];
                  })(g)),
            v = [g].concat(b).reduce(function (e, n) {
              return e.concat(
                Qs(n) === Ns
                  ? (function (e, t) {
                      void 0 === t && (t = {});
                      var n = t,
                        r = n.placement,
                        i = n.boundary,
                        a = n.rootBoundary,
                        o = n.padding,
                        l = n.flipVariations,
                        s = n.allowedAutoPlacements,
                        c = void 0 === s ? Us : s,
                        u = Js(r),
                        d = u
                          ? l
                            ? Hs
                            : Hs.filter(function (e) {
                                return Js(e) === u;
                              })
                          : Ds,
                        f = d.filter(function (e) {
                          return c.indexOf(e) >= 0;
                        });
                      0 === f.length && (f = d);
                      var p = f.reduce(function (t, n) {
                        return (
                          (t[n] = mc(e, {
                            placement: n,
                            boundary: i,
                            rootBoundary: a,
                            padding: o,
                          })[Qs(n)]),
                          t
                        );
                      }, {});
                      return Object.keys(p).sort(function (e, t) {
                        return p[e] - p[t];
                      });
                    })(t, {
                      placement: n,
                      boundary: u,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: h,
                      allowedAutoPlacements: m,
                    })
                  : n
              );
            }, []),
            w = t.rects.reference,
            x = t.rects.popper,
            S = new Map(),
            k = !0,
            C = v[0],
            E = 0;
          E < v.length;
          E++
        ) {
          var _ = v[E],
            T = Qs(_),
            j = Js(_) === Is,
            O = [Ps, As].indexOf(T) >= 0,
            z = O ? "width" : "height",
            R = mc(t, {
              placement: _,
              boundary: u,
              rootBoundary: d,
              altBoundary: f,
              padding: c,
            }),
            P = O ? (j ? Ms : Ls) : j ? As : Ps;
          w[z] > x[z] && (P = oc(P));
          var A = oc(P),
            M = [];
          if (
            (a && M.push(R[T] <= 0),
            l && M.push(R[P] <= 0, R[A] <= 0),
            M.every(function (e) {
              return e;
            }))
          ) {
            (C = _), (k = !1);
            break;
          }
          S.set(_, M);
        }
        if (k)
          for (
            var L = function (e) {
                var t = v.find(function (t) {
                  var n = S.get(t);
                  if (n)
                    return n.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (C = t), "break";
              },
              N = h ? 3 : 1;
            N > 0;
            N--
          ) {
            if ("break" === L(N)) break;
          }
        t.placement !== C &&
          ((t.modifiersData[r]._skip = !0), (t.placement = C), (t.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function yc(e, t, n) {
    return fs(e, ps(t, n));
  }
  const bc = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        n = e.options,
        r = e.name,
        i = n.mainAxis,
        a = void 0 === i || i,
        o = n.altAxis,
        l = void 0 !== o && o,
        s = n.boundary,
        c = n.rootBoundary,
        u = n.altBoundary,
        d = n.padding,
        f = n.tether,
        p = void 0 === f || f,
        h = n.tetherOffset,
        m = void 0 === h ? 0 : h,
        g = mc(t, { boundary: s, rootBoundary: c, padding: d, altBoundary: u }),
        y = Qs(t.placement),
        b = Js(t.placement),
        v = !b,
        w = Zs(y),
        x = "x" === w ? "y" : "x",
        S = t.modifiersData.popperOffsets,
        k = t.rects.reference,
        C = t.rects.popper,
        E =
          "function" === typeof m
            ? m(Object.assign({}, t.rects, { placement: t.placement }))
            : m,
        _ =
          "number" === typeof E
            ? { mainAxis: E, altAxis: E }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, E),
        T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        j = { x: 0, y: 0 };
      if (S) {
        if (a) {
          var O,
            z = "y" === w ? Ps : Ls,
            R = "y" === w ? As : Ms,
            P = "y" === w ? "height" : "width",
            A = S[w],
            M = A + g[z],
            L = A - g[R],
            N = p ? -C[P] / 2 : 0,
            D = b === Is ? k[P] : C[P],
            I = b === Is ? -C[P] : -k[P],
            B = t.elements.arrow,
            F = p && B ? Es(B) : { width: 0, height: 0 },
            $ = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 },
            H = $[z],
            U = $[R],
            V = yc(0, k[P], F[P]),
            W = v ? k[P] / 2 - N - V - H - _.mainAxis : D - V - H - _.mainAxis,
            q = v ? -k[P] / 2 + N + V + U + _.mainAxis : I + V + U + _.mainAxis,
            X = t.elements.arrow && Rs(t.elements.arrow),
            G = X ? ("y" === w ? X.clientTop || 0 : X.clientLeft || 0) : 0,
            Y = null != (O = null == T ? void 0 : T[w]) ? O : 0,
            K = A + q - Y,
            Q = yc(p ? ps(M, A + W - Y - G) : M, A, p ? fs(L, K) : L);
          (S[w] = Q), (j[w] = Q - A);
        }
        if (l) {
          var J,
            Z = "x" === w ? Ps : Ls,
            ee = "x" === w ? As : Ms,
            te = S[x],
            ne = "y" === x ? "height" : "width",
            re = te + g[Z],
            ie = te - g[ee],
            ae = -1 !== [Ps, Ls].indexOf(y),
            oe = null != (J = null == T ? void 0 : T[x]) ? J : 0,
            le = ae ? re : te - k[ne] - C[ne] - oe + _.altAxis,
            se = ae ? te + k[ne] + C[ne] - oe - _.altAxis : ie,
            ce =
              p && ae
                ? (function (e, t, n) {
                    var r = yc(e, t, n);
                    return r > n ? n : r;
                  })(le, te, se)
                : yc(p ? le : re, te, p ? se : ie);
          (S[x] = ce), (j[x] = ce - te);
        }
        t.modifiersData[r] = j;
      }
    },
    requiresIfExists: ["offset"],
  };
  const vc = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        n = e.state,
        r = e.name,
        i = e.options,
        a = n.elements.arrow,
        o = n.modifiersData.popperOffsets,
        l = Qs(n.placement),
        s = Zs(l),
        c = [Ls, Ms].indexOf(l) >= 0 ? "height" : "width";
      if (a && o) {
        var u = (function (e, t) {
            return pc(
              "number" !==
                typeof (e =
                  "function" === typeof e
                    ? e(Object.assign({}, t.rects, { placement: t.placement }))
                    : e)
                ? e
                : hc(e, Ds)
            );
          })(i.padding, n),
          d = Es(a),
          f = "y" === s ? Ps : Ls,
          p = "y" === s ? As : Ms,
          h =
            n.rects.reference[c] +
            n.rects.reference[s] -
            o[s] -
            n.rects.popper[c],
          m = o[s] - n.rects.reference[s],
          g = Rs(a),
          y = g ? ("y" === s ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = h / 2 - m / 2,
          v = u[f],
          w = y - d[c] - u[p],
          x = y / 2 - d[c] / 2 + b,
          S = yc(v, x, w),
          k = s;
        n.modifiersData[r] = (((t = {})[k] = S), (t.centerOffset = S - x), t);
      }
    },
    effect: function (e) {
      var t = e.state,
        n = e.options.element,
        r = void 0 === n ? "[data-popper-arrow]" : n;
      null != r &&
        ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) &&
        cc(t.elements.popper, r) &&
        (t.elements.arrow = r);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function wc(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function xc(e) {
    return [Ps, Ms, As, Ls].some(function (t) {
      return e[t] >= 0;
    });
  }
  var Sc = Ys({
    defaultModifiers: [
      {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            r = e.options,
            i = r.scroll,
            a = void 0 === i || i,
            o = r.resize,
            l = void 0 === o || o,
            s = ss(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            a &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, Ks);
              }),
            l && s.addEventListener("resize", n.update, Ks),
            function () {
              a &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Ks);
                }),
                l && s.removeEventListener("resize", n.update, Ks);
            }
          );
        },
        data: {},
      },
      {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            n = e.name;
          t.modifiersData[n] = ec({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      },
      {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            r = n.gpuAcceleration,
            i = void 0 === r || r,
            a = n.adaptive,
            o = void 0 === a || a,
            l = n.roundOffsets,
            s = void 0 === l || l,
            c = {
              placement: Qs(t.placement),
              variation: Js(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: i,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              nc(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: o,
                  roundOffsets: s,
                })
              )
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                nc(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: s,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      },
      rc,
      ic,
      gc,
      bc,
      vc,
      {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state,
            n = e.name,
            r = t.rects.reference,
            i = t.rects.popper,
            a = t.modifiersData.preventOverflow,
            o = mc(t, { elementContext: "reference" }),
            l = mc(t, { altBoundary: !0 }),
            s = wc(o, r),
            c = wc(l, i, a),
            u = xc(s),
            d = xc(c);
          (t.modifiersData[n] = {
            referenceClippingOffsets: s,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: d,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": u,
              "data-popper-escaped": d,
            }));
        },
      },
    ],
  });
  const kc = function (e) {
    return "string" === typeof e;
  };
  const Cc = function (e, t, n) {
    return void 0 === e || kc(e)
      ? t
      : { ...t, ownerState: { ...t.ownerState, ...n } };
  };
  const Ec = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (void 0 === e) return {};
    const n = {};
    return (
      Object.keys(e)
        .filter(
          (n) =>
            n.match(/^on[A-Z]/) && "function" === typeof e[n] && !t.includes(n)
        )
        .forEach((t) => {
          n[t] = e[t];
        }),
      n
    );
  };
  const _c = function (e) {
    if (void 0 === e) return {};
    const t = {};
    return (
      Object.keys(e)
        .filter((t) => !(t.match(/^on[A-Z]/) && "function" === typeof e[t]))
        .forEach((n) => {
          t[n] = e[n];
        }),
      t
    );
  };
  const Tc = function (e) {
    const {
      getSlotProps: t,
      additionalProps: n,
      externalSlotProps: r,
      externalForwardedProps: i,
      className: a,
    } = e;
    if (!t) {
      const e = rn(n?.className, a, i?.className, r?.className),
        t = { ...n?.style, ...i?.style, ...r?.style },
        o = { ...n, ...i, ...r };
      return (
        e.length > 0 && (o.className = e),
        Object.keys(t).length > 0 && (o.style = t),
        { props: o, internalRef: void 0 }
      );
    }
    const o = Ec({ ...i, ...r }),
      l = _c(r),
      s = _c(i),
      c = t(o),
      u = rn(c?.className, n?.className, a, i?.className, r?.className),
      d = { ...c?.style, ...n?.style, ...i?.style, ...r?.style },
      f = { ...c, ...n, ...s, ...l };
    return (
      u.length > 0 && (f.className = u),
      Object.keys(d).length > 0 && (f.style = d),
      { props: f, internalRef: c.ref }
    );
  };
  const jc = function (e, t, n) {
    return "function" === typeof e ? e(t, n) : e;
  };
  const Oc = function (e) {
    const {
        elementType: t,
        externalSlotProps: n,
        ownerState: r,
        skipResolvingSlotProps: i = !1,
        ...a
      } = e,
      o = i ? {} : jc(n, r),
      { props: l, internalRef: s } = Tc({ ...a, externalSlotProps: o }),
      c = Zl(s, o?.ref, e.additionalProps?.ref);
    return Cc(t, { ...l, ref: c }, r);
  };
  function zc(e, t) {
    "function" === typeof e ? e(t) : e && (e.current = t);
  }
  const Rc = i.forwardRef(function (e, t) {
    const { children: n, container: r, disablePortal: a = !1 } = e,
      [o, l] = i.useState(null),
      s = Zl(i.isValidElement(n) ? Ll(n) : null, t);
    if (
      (os(() => {
        a ||
          l(
            (function (e) {
              return "function" === typeof e ? e() : e;
            })(r) || document.body
          );
      }, [r, a]),
      os(() => {
        if (o && !a)
          return (
            zc(t, o),
            () => {
              zc(t, null);
            }
          );
      }, [t, o, a]),
      a)
    ) {
      if (i.isValidElement(n)) {
        const e = { ref: s };
        return i.cloneElement(n, e);
      }
      return n;
    }
    return o ? $l.createPortal(n, o) : o;
  });
  function Pc(e) {
    return Eo("MuiPopper", e);
  }
  _o("MuiPopper", ["root"]);
  function Ac(e) {
    return "function" === typeof e ? e() : e;
  }
  function Mc(e) {
    return void 0 !== e.nodeType;
  }
  const Lc = {},
    Nc = i.forwardRef(function (e, t) {
      const {
          anchorEl: n,
          children: r,
          direction: a,
          disablePortal: o,
          modifiers: l,
          open: s,
          placement: c,
          popperOptions: u,
          popperRef: d,
          slotProps: f = {},
          slots: p = {},
          TransitionProps: h,
          ownerState: m,
          ...g
        } = e,
        y = i.useRef(null),
        b = Zl(y, t),
        v = i.useRef(null),
        w = Zl(v, d),
        x = i.useRef(w);
      os(() => {
        x.current = w;
      }, [w]),
        i.useImperativeHandle(d, () => v.current, []);
      const S = (function (e, t) {
          if ("ltr" === t) return e;
          switch (e) {
            case "bottom-end":
              return "bottom-start";
            case "bottom-start":
              return "bottom-end";
            case "top-end":
              return "top-start";
            case "top-start":
              return "top-end";
            default:
              return e;
          }
        })(c, a),
        [k, C] = i.useState(S),
        [E, _] = i.useState(Ac(n));
      i.useEffect(() => {
        v.current && v.current.forceUpdate();
      }),
        i.useEffect(() => {
          n && _(Ac(n));
        }, [n]),
        os(() => {
          if (!E || !s) return;
          let e = [
            { name: "preventOverflow", options: { altBoundary: o } },
            { name: "flip", options: { altBoundary: o } },
            {
              name: "onUpdate",
              enabled: !0,
              phase: "afterWrite",
              fn: (e) => {
                let { state: t } = e;
                C(t.placement);
              },
            },
          ];
          null != l && (e = e.concat(l)),
            u && null != u.modifiers && (e = e.concat(u.modifiers));
          const t = Sc(E, y.current, { placement: S, ...u, modifiers: e });
          return (
            x.current(t),
            () => {
              t.destroy(), x.current(null);
            }
          );
        }, [E, o, l, s, u, S]);
      const T = { placement: k };
      null !== h && (T.TransitionProps = h);
      const j = ((e) => {
          const { classes: t } = e;
          return an({ root: ["root"] }, Pc, t);
        })(e),
        O = p.root ?? "div",
        z = Oc({
          elementType: O,
          externalSlotProps: f.root,
          externalForwardedProps: g,
          additionalProps: { role: "tooltip", ref: b },
          ownerState: e,
          className: j.root,
        });
      return (0,
      en.jsx)(O, { ...z, children: "function" === typeof r ? r(T) : r });
    }),
    Dc = i.forwardRef(function (e, t) {
      const {
          anchorEl: n,
          children: r,
          container: a,
          direction: o = "ltr",
          disablePortal: l = !1,
          keepMounted: s = !1,
          modifiers: c,
          open: u,
          placement: d = "bottom",
          popperOptions: f = Lc,
          popperRef: p,
          style: h,
          transition: m = !1,
          slotProps: g = {},
          slots: y = {},
          ...b
        } = e,
        [v, w] = i.useState(!0);
      if (!s && !u && (!m || v)) return null;
      let x;
      if (a) x = a;
      else if (n) {
        const e = Ac(n);
        x = e && Mc(e) ? ls(e).body : ls(null).body;
      }
      const S = u || !s || (m && !v) ? void 0 : "none",
        k = m
          ? {
              in: u,
              onEnter: () => {
                w(!1);
              },
              onExited: () => {
                w(!0);
              },
            }
          : void 0;
      return (0,
      en.jsx)(Rc, { disablePortal: l, container: x, children: (0, en.jsx)(Nc, { anchorEl: n, direction: o, disablePortal: l, modifiers: c, ref: t, open: m ? !v : u, placement: d, popperOptions: f, popperRef: p, slotProps: g, slots: y, ...b, style: { position: "fixed", top: 0, left: 0, display: S, ...h }, TransitionProps: k, children: r }) });
    }),
    Ic = mo(Dc, {
      name: "MuiPopper",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({}),
    Bc = i.forwardRef(function (e, t) {
      const n = Al(),
        r = xo({ props: e, name: "MuiPopper" }),
        {
          anchorEl: i,
          component: a,
          components: o,
          componentsProps: l,
          container: s,
          disablePortal: c,
          keepMounted: u,
          modifiers: d,
          open: f,
          placement: p,
          popperOptions: h,
          popperRef: m,
          transition: g,
          slots: y,
          slotProps: b,
          ...v
        } = r,
        w = y?.root ?? o?.Root,
        x = {
          anchorEl: i,
          container: s,
          disablePortal: c,
          keepMounted: u,
          modifiers: d,
          open: f,
          placement: p,
          popperOptions: h,
          popperRef: m,
          transition: g,
          ...v,
        };
      return (0,
      en.jsx)(Ic, { as: a, direction: n ? "rtl" : "ltr", slots: { root: w }, slotProps: b ?? l, ...x, ref: t });
    });
  const Fc = function (e) {
    const t = i.useRef(e);
    return (
      os(() => {
        t.current = e;
      }),
      i.useRef(function () {
        return (0, t.current)(...arguments);
      }).current
    );
  };
  let $c = 0;
  const Hc = { ...a }.useId;
  const Uc = function (e) {
    if (void 0 !== Hc) {
      const t = Hc();
      return e ?? t;
    }
    return (function (e) {
      const [t, n] = i.useState(e),
        r = e || t;
      return (
        i.useEffect(() => {
          null == t && (($c += 1), n(`mui-${$c}`));
        }, [t]),
        r
      );
    })(e);
  };
  const Vc = function (e) {
    let { controlled: t, default: n, name: r, state: a = "value" } = e;
    const { current: o } = i.useRef(void 0 !== t),
      [l, s] = i.useState(n);
    return [
      o ? t : l,
      i.useCallback((e) => {
        o || s(e);
      }, []),
    ];
  };
  function Wc(e, t) {
    const {
        className: n,
        elementType: r,
        ownerState: i,
        externalForwardedProps: a,
        internalForwardedProps: o,
        shouldForwardComponentProp: l = !1,
        ...s
      } = t,
      {
        component: c,
        slots: u = { [e]: void 0 },
        slotProps: d = { [e]: void 0 },
        ...f
      } = a,
      p = u[e] || r,
      h = jc(d[e], i),
      {
        props: { component: m, ...g },
        internalRef: y,
      } = Tc({
        className: n,
        ...s,
        externalForwardedProps: "root" === e ? f : void 0,
        externalSlotProps: h,
      }),
      b = Zl(y, h?.ref, t.ref),
      v = "root" === e ? m || c : m;
    return [
      p,
      Cc(
        p,
        {
          ...("root" === e && !c && !u[e] && o),
          ...("root" !== e && !u[e] && o),
          ...g,
          ...(v && !l && { as: v }),
          ...(v && l && { component: v }),
          ref: b,
        },
        i
      ),
    ];
  }
  function qc(e) {
    return Eo("MuiTooltip", e);
  }
  const Xc = _o("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow",
  ]);
  const Gc = mo(Bc, {
      name: "MuiTooltip",
      slot: "Popper",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.popper,
          !n.disableInteractive && t.popperInteractive,
          n.arrow && t.popperArrow,
          !n.open && t.popperClose,
        ];
      },
    })(
      yo((e) => {
        let { theme: t } = e;
        return {
          zIndex: (t.vars || t).zIndex.tooltip,
          pointerEvents: "none",
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disableInteractive;
              },
              style: { pointerEvents: "auto" },
            },
            {
              props: (e) => {
                let { open: t } = e;
                return !t;
              },
              style: { pointerEvents: "none" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.arrow;
              },
              style: {
                [`&[data-popper-placement*="bottom"] .${Xc.arrow}`]: {
                  top: 0,
                  marginTop: "-0.71em",
                  "&::before": { transformOrigin: "0 100%" },
                },
                [`&[data-popper-placement*="top"] .${Xc.arrow}`]: {
                  bottom: 0,
                  marginBottom: "-0.71em",
                  "&::before": { transformOrigin: "100% 0" },
                },
                [`&[data-popper-placement*="right"] .${Xc.arrow}`]: {
                  height: "1em",
                  width: "0.71em",
                  "&::before": { transformOrigin: "100% 100%" },
                },
                [`&[data-popper-placement*="left"] .${Xc.arrow}`]: {
                  height: "1em",
                  width: "0.71em",
                  "&::before": { transformOrigin: "0 0" },
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.arrow && !t.isRtl;
              },
              style: {
                [`&[data-popper-placement*="right"] .${Xc.arrow}`]: {
                  left: 0,
                  marginLeft: "-0.71em",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.arrow && !!t.isRtl;
              },
              style: {
                [`&[data-popper-placement*="right"] .${Xc.arrow}`]: {
                  right: 0,
                  marginRight: "-0.71em",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.arrow && !t.isRtl;
              },
              style: {
                [`&[data-popper-placement*="left"] .${Xc.arrow}`]: {
                  right: 0,
                  marginRight: "-0.71em",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.arrow && !!t.isRtl;
              },
              style: {
                [`&[data-popper-placement*="left"] .${Xc.arrow}`]: {
                  left: 0,
                  marginLeft: "-0.71em",
                },
              },
            },
          ],
        };
      })
    ),
    Yc = mo("div", {
      name: "MuiTooltip",
      slot: "Tooltip",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.tooltip,
          n.touch && t.touch,
          n.arrow && t.tooltipArrow,
          t[`tooltipPlacement${sn(n.placement.split("-")[0])}`],
        ];
      },
    })(
      yo((e) => {
        let { theme: t } = e;
        return {
          backgroundColor: t.vars
            ? t.vars.palette.Tooltip.bg
            : ua(t.palette.grey[700], 0.92),
          borderRadius: (t.vars || t).shape.borderRadius,
          color: (t.vars || t).palette.common.white,
          fontFamily: t.typography.fontFamily,
          padding: "4px 8px",
          fontSize: t.typography.pxToRem(11),
          maxWidth: 300,
          margin: 2,
          wordWrap: "break-word",
          fontWeight: t.typography.fontWeightMedium,
          [`.${Xc.popper}[data-popper-placement*="left"] &`]: {
            transformOrigin: "right center",
          },
          [`.${Xc.popper}[data-popper-placement*="right"] &`]: {
            transformOrigin: "left center",
          },
          [`.${Xc.popper}[data-popper-placement*="top"] &`]: {
            transformOrigin: "center bottom",
            marginBottom: "14px",
          },
          [`.${Xc.popper}[data-popper-placement*="bottom"] &`]: {
            transformOrigin: "center top",
            marginTop: "14px",
          },
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.arrow;
              },
              style: { position: "relative", margin: 0 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.touch;
              },
              style: {
                padding: "8px 16px",
                fontSize: t.typography.pxToRem(14),
                lineHeight: ((n = 16 / 14), Math.round(1e5 * n) / 1e5) + "em",
                fontWeight: t.typography.fontWeightRegular,
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.isRtl;
              },
              style: {
                [`.${Xc.popper}[data-popper-placement*="left"] &`]: {
                  marginRight: "14px",
                },
                [`.${Xc.popper}[data-popper-placement*="right"] &`]: {
                  marginLeft: "14px",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.isRtl && t.touch;
              },
              style: {
                [`.${Xc.popper}[data-popper-placement*="left"] &`]: {
                  marginRight: "24px",
                },
                [`.${Xc.popper}[data-popper-placement*="right"] &`]: {
                  marginLeft: "24px",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !!t.isRtl;
              },
              style: {
                [`.${Xc.popper}[data-popper-placement*="left"] &`]: {
                  marginLeft: "14px",
                },
                [`.${Xc.popper}[data-popper-placement*="right"] &`]: {
                  marginRight: "14px",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !!t.isRtl && t.touch;
              },
              style: {
                [`.${Xc.popper}[data-popper-placement*="left"] &`]: {
                  marginLeft: "24px",
                },
                [`.${Xc.popper}[data-popper-placement*="right"] &`]: {
                  marginRight: "24px",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.touch;
              },
              style: {
                [`.${Xc.popper}[data-popper-placement*="top"] &`]: {
                  marginBottom: "24px",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.touch;
              },
              style: {
                [`.${Xc.popper}[data-popper-placement*="bottom"] &`]: {
                  marginTop: "24px",
                },
              },
            },
          ],
        };
        var n;
      })
    ),
    Kc = mo("span", {
      name: "MuiTooltip",
      slot: "Arrow",
      overridesResolver: (e, t) => t.arrow,
    })(
      yo((e) => {
        let { theme: t } = e;
        return {
          overflow: "hidden",
          position: "absolute",
          width: "1em",
          height: "0.71em",
          boxSizing: "border-box",
          color: t.vars
            ? t.vars.palette.Tooltip.bg
            : ua(t.palette.grey[700], 0.9),
          "&::before": {
            content: '""',
            margin: "auto",
            display: "block",
            width: "100%",
            height: "100%",
            backgroundColor: "currentColor",
            transform: "rotate(45deg)",
          },
        };
      })
    );
  let Qc = !1;
  const Jc = new zl();
  let Zc = { x: 0, y: 0 };
  function eu(e, t) {
    return function (n) {
      for (
        var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1;
        a < r;
        a++
      )
        i[a - 1] = arguments[a];
      t && t(n, ...i), e(n, ...i);
    };
  }
  const tu = i.forwardRef(function (e, t) {
      const n = xo({ props: e, name: "MuiTooltip" }),
        {
          arrow: r = !1,
          children: a,
          classes: o,
          components: l = {},
          componentsProps: s = {},
          describeChild: c = !1,
          disableFocusListener: u = !1,
          disableHoverListener: d = !1,
          disableInteractive: f = !1,
          disableTouchListener: p = !1,
          enterDelay: h = 100,
          enterNextDelay: m = 0,
          enterTouchDelay: g = 700,
          followCursor: y = !1,
          id: b,
          leaveDelay: v = 0,
          leaveTouchDelay: w = 1500,
          onClose: x,
          onOpen: S,
          open: k,
          placement: C = "bottom",
          PopperComponent: E,
          PopperProps: _ = {},
          slotProps: T = {},
          slots: j = {},
          title: O,
          TransitionComponent: z,
          TransitionProps: R,
          ...P
        } = n,
        A = i.isValidElement(a) ? a : (0, en.jsx)("span", { children: a }),
        M = Bl(),
        L = Al(),
        [N, D] = i.useState(),
        [I, B] = i.useState(null),
        F = i.useRef(!1),
        $ = f || y,
        H = Rl(),
        U = Rl(),
        V = Rl(),
        W = Rl(),
        [q, X] = Vc({
          controlled: k,
          default: !1,
          name: "Tooltip",
          state: "open",
        });
      let G = q;
      const Y = Uc(b),
        K = i.useRef(),
        Q = Fc(() => {
          void 0 !== K.current &&
            ((document.body.style.WebkitUserSelect = K.current),
            (K.current = void 0)),
            W.clear();
        });
      i.useEffect(() => Q, [Q]);
      const J = (e) => {
          Jc.clear(), (Qc = !0), X(!0), S && !G && S(e);
        },
        Z = Fc((e) => {
          Jc.start(800 + v, () => {
            Qc = !1;
          }),
            X(!1),
            x && G && x(e),
            H.start(M.transitions.duration.shortest, () => {
              F.current = !1;
            });
        }),
        ee = (e) => {
          (F.current && "touchstart" !== e.type) ||
            (N && N.removeAttribute("title"),
            U.clear(),
            V.clear(),
            h || (Qc && m)
              ? U.start(Qc ? m : h, () => {
                  J(e);
                })
              : J(e));
        },
        te = (e) => {
          U.clear(),
            V.start(v, () => {
              Z(e);
            });
        },
        [, ne] = i.useState(!1),
        re = (e) => {
          Ml(e.target) || (ne(!1), te(e));
        },
        ie = (e) => {
          N || D(e.currentTarget), Ml(e.target) && (ne(!0), ee(e));
        },
        ae = (e) => {
          F.current = !0;
          const t = A.props;
          t.onTouchStart && t.onTouchStart(e);
        },
        oe = (e) => {
          ae(e),
            V.clear(),
            H.clear(),
            Q(),
            (K.current = document.body.style.WebkitUserSelect),
            (document.body.style.WebkitUserSelect = "none"),
            W.start(g, () => {
              (document.body.style.WebkitUserSelect = K.current), ee(e);
            });
        },
        le = (e) => {
          A.props.onTouchEnd && A.props.onTouchEnd(e),
            Q(),
            V.start(w, () => {
              Z(e);
            });
        };
      i.useEffect(() => {
        if (G)
          return (
            document.addEventListener("keydown", e),
            () => {
              document.removeEventListener("keydown", e);
            }
          );
        function e(e) {
          "Escape" === e.key && Z(e);
        }
      }, [Z, G]);
      const se = es(Ll(A), D, t);
      O || 0 === O || (G = !1);
      const ce = i.useRef(),
        ue = {},
        de = "string" === typeof O;
      c
        ? ((ue.title = G || !de || d ? null : O),
          (ue["aria-describedby"] = G ? Y : null))
        : ((ue["aria-label"] = de ? O : null),
          (ue["aria-labelledby"] = G && !de ? Y : null));
      const fe = {
        ...ue,
        ...P,
        ...A.props,
        className: rn(P.className, A.props.className),
        onTouchStart: ae,
        ref: se,
        ...(y
          ? {
              onMouseMove: (e) => {
                const t = A.props;
                t.onMouseMove && t.onMouseMove(e),
                  (Zc = { x: e.clientX, y: e.clientY }),
                  ce.current && ce.current.update();
              },
            }
          : {}),
      };
      const pe = {};
      p || ((fe.onTouchStart = oe), (fe.onTouchEnd = le)),
        d ||
          ((fe.onMouseOver = eu(ee, fe.onMouseOver)),
          (fe.onMouseLeave = eu(te, fe.onMouseLeave)),
          $ || ((pe.onMouseOver = ee), (pe.onMouseLeave = te))),
        u ||
          ((fe.onFocus = eu(ie, fe.onFocus)),
          (fe.onBlur = eu(re, fe.onBlur)),
          $ || ((pe.onFocus = ie), (pe.onBlur = re)));
      const he = {
          ...n,
          isRtl: L,
          arrow: r,
          disableInteractive: $,
          placement: C,
          PopperComponentProp: E,
          touch: F.current,
        },
        me = "function" === typeof T.popper ? T.popper(he) : T.popper,
        ge = i.useMemo(() => {
          let e = [
            {
              name: "arrow",
              enabled: Boolean(I),
              options: { element: I, padding: 4 },
            },
          ];
          return (
            _.popperOptions?.modifiers &&
              (e = e.concat(_.popperOptions.modifiers)),
            me?.popperOptions?.modifiers &&
              (e = e.concat(me.popperOptions.modifiers)),
            { ..._.popperOptions, ...me?.popperOptions, modifiers: e }
          );
        }, [I, _.popperOptions, me?.popperOptions]),
        ye = ((e) => {
          const {
            classes: t,
            disableInteractive: n,
            arrow: r,
            touch: i,
            placement: a,
          } = e;
          return an(
            {
              popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
              tooltip: [
                "tooltip",
                r && "tooltipArrow",
                i && "touch",
                `tooltipPlacement${sn(a.split("-")[0])}`,
              ],
              arrow: ["arrow"],
            },
            qc,
            t
          );
        })(he),
        be =
          "function" === typeof T.transition ? T.transition(he) : T.transition,
        ve = {
          slots: {
            popper: l.Popper,
            transition: l.Transition ?? z,
            tooltip: l.Tooltip,
            arrow: l.Arrow,
            ...j,
          },
          slotProps: {
            arrow: T.arrow ?? s.arrow,
            popper: { ..._, ...(me ?? s.popper) },
            tooltip: T.tooltip ?? s.tooltip,
            transition: { ...R, ...(be ?? s.transition) },
          },
        },
        [we, xe] = Wc("popper", {
          elementType: Gc,
          externalForwardedProps: ve,
          ownerState: he,
          className: rn(ye.popper, _?.className),
        }),
        [Se, ke] = Wc("transition", {
          elementType: as,
          externalForwardedProps: ve,
          ownerState: he,
        }),
        [Ce, Ee] = Wc("tooltip", {
          elementType: Yc,
          className: ye.tooltip,
          externalForwardedProps: ve,
          ownerState: he,
        }),
        [_e, Te] = Wc("arrow", {
          elementType: Kc,
          className: ye.arrow,
          externalForwardedProps: ve,
          ownerState: he,
          ref: B,
        });
      return (0, en.jsxs)(i.Fragment, {
        children: [
          i.cloneElement(A, fe),
          (0, en.jsx)(we, {
            as: E ?? Bc,
            placement: C,
            anchorEl: y
              ? {
                  getBoundingClientRect: () => ({
                    top: Zc.y,
                    left: Zc.x,
                    right: Zc.x,
                    bottom: Zc.y,
                    width: 0,
                    height: 0,
                  }),
                }
              : N,
            popperRef: ce,
            open: !!N && G,
            id: Y,
            transition: !0,
            ...pe,
            ...xe,
            popperOptions: ge,
            children: (e) => {
              let { TransitionProps: t } = e;
              return (0, en.jsx)(Se, {
                timeout: M.transitions.duration.shorter,
                ...t,
                ...ke,
                children: (0, en.jsxs)(Ce, {
                  ...Ee,
                  children: [O, r ? (0, en.jsx)(_e, { ...Te }) : null],
                }),
              });
            },
          }),
        ],
      });
    }),
    nu = tu,
    ru = Ro(
      (0, en.jsx)("path", {
        d: "M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03m3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48",
      })
    ),
    iu = Ro(
      (0, en.jsx)("path", {
        d: "M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47M6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47m1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93",
      })
    ),
    au = Ro([
      (0, en.jsx)(
        "path",
        { d: "M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3" },
        "0"
      ),
      (0, en.jsx)(
        "path",
        {
          d: "M8 10V8H5.09C6.47 5.61 9.05 4 12 4c3.72 0 6.85 2.56 7.74 6h2.06c-.93-4.56-4.96-8-9.8-8-3.27 0-6.18 1.58-8 4.01V4H2v6zm8 4v2h2.91c-1.38 2.39-3.96 4-6.91 4-3.72 0-6.85-2.56-7.74-6H2.2c.93 4.56 4.96 8 9.8 8 3.27 0 6.18-1.58 8-4.01V20h2v-6z",
        },
        "1"
      ),
    ]),
    ou = Ro(
      (0, en.jsx)("path", {
        d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5",
      })
    ),
    lu = (e) => {
      let { onClose: t } = e;
      const [n, r] = (0, i.useState)([]),
        [a, o] = (0, i.useState)(""),
        [l, s] = (0, i.useState)(""),
        [c, u] = (0, i.useState)(""),
        [d, f] = (0, i.useState)(0);
      (0, i.useEffect)(() => {
        const e = Ot.getAllCellNames();
        console.log("Available cell names:", e),
          r(e.filter((e) => e !== qt.getSelectedCell()));
      }, []);
      return (0, en.jsxs)("div", {
        style: {
          background: "#222",
          padding: 10,
          color: "white",
          borderRadius: 6,
        },
        children: [
          (0, en.jsx)("label", { children: "Select cell to insert:" }),
          (0, en.jsxs)("select", {
            value: a,
            onChange: (e) => o(e.target.value),
            style: { marginLeft: 10 },
            children: [
              (0, en.jsx)("option", { value: "", children: "-- Select --" }),
              n.map((e) => (0, en.jsx)("option", { value: e, children: e }, e)),
            ],
          }),
          (0, en.jsxs)("div", {
            style: { marginTop: 10 },
            children: [
              (0, en.jsx)("label", { children: "X:" }),
              (0, en.jsx)("input", {
                type: "number",
                value: l,
                onChange: (e) => s(e.target.value),
                style: { width: 60, marginRight: 10 },
              }),
              (0, en.jsx)("label", { children: "Y:" }),
              (0, en.jsx)("input", {
                type: "number",
                value: c,
                onChange: (e) => u(e.target.value),
                style: { width: 60, marginRight: 10 },
              }),
              (0, en.jsx)("label", { children: "Rotation:" }),
              (0, en.jsx)("input", {
                type: "number",
                value: d,
                onChange: (e) => f(e.target.value),
                style: { width: 60 },
              }),
            ],
          }),
          (0, en.jsx)("button", {
            onClick: () => {
              if (!a) return;
              qt.setSelectedInstanceCell(a);
              const e = window.canvasEngine;
              if (!e) return;
              Gt.setTool("instance"),
                window.dispatchEvent(
                  new CustomEvent("tool-changed", { detail: "instance" })
                );
              const n = e.lastPointer || { x: 0, y: 0 },
                r = e.snapToGrid(n.x),
                i = e.snapToGrid(n.y);
              (e.previewInstance = { ref: a, x: r, y: i }), e.draw(), t();
            },
            style: { marginTop: 10, padding: "4px 12px" },
            children: "\u2795 Insert",
          }),
        ],
      });
    },
    su = () => {
      const [e, t] = i.useState(qt.getDesignName());
      console.log(JSON.stringify(Ot.getCells(), null, 2));
      const [n, r] = (0, i.useState)(!1),
        [a, o] = i.useState(qt.getTool()),
        [l, s] = (0, i.useState)("1"),
        [c, u] = (0, i.useState)("two"),
        [d, f] = (0, i.useState)("free"),
        [p, h] = (0, i.useState)(10),
        [m, g] = (0, i.useState)("#ffffff"),
        [y, b] = (0, i.useState)(!0),
        [v, w] = (0, i.useState)(!1),
        [x, S] = (0, i.useState)(0),
        [k, C] = (0, i.useState)(0),
        [E, _] = (0, i.useState)(null),
        [T, j] = (0, i.useState)(!1),
        [O, z] = (0, i.useState)(""),
        [R, P] = (0, i.useState)(null),
        [A, M] = (0, i.useState)(!1);
      (0, i.useEffect)(() => {
        const e = (e) => {
          o(e.detail);
        };
        return (
          window.addEventListener("tool-changed", e),
          o(qt.getTool()),
          () => {
            window.removeEventListener("tool-changed", e);
          }
        );
      }, []),
        (0, i.useEffect)(() => {
          window.canvasEngine &&
            ((window.canvasEngine.unitScaleFactor = parseFloat(l)),
            (window.canvasEngine.rulerLineMode = d),
            (window.canvasEngine.rulerUnitSymbol =
              "1" === l ? "px" : "264.583" === l ? "\xb5m" : "nm"),
            window.canvasEngine.setRulerLineColor(m),
            window.canvasEngine.setRulerValues(p),
            (window.canvasEngine.rulerOnGrid = y));
        }, [l, d, m, p, y]);
      return (0, en.jsxs)("header", {
        className: "top-bar",
        children: [
          (0, en.jsxs)("div", {
            className: "logo-and-icons",
            children: [
              (0, en.jsxs)("div", {
                className: "logo",
                children: [
                  "LOG",
                  (0, en.jsx)("b", {
                    style: { color: "green" },
                    children: "IC",
                  }),
                  "KNOTS",
                ],
              }),
              (0, en.jsxs)("div", {
                className: "icon-bar",
                children: [
                  (0, en.jsx)(nu, {
                    title: "Upload",
                    children: (0, en.jsx)(Mo, { fontSize: "small" }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Download",
                    children: (0, en.jsx)(Ao, {
                      fontSize: "small",
                      onClick: async () => {
                        const e = { cells: Ot.getCells() },
                          t = await fetch(
                            "http://localhost:5000/generate-gds",
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(e),
                            }
                          ),
                          n = await t.blob(),
                          r = window.URL.createObjectURL(n),
                          i = document.createElement("a");
                        (i.href = r), (i.download = "layout.gds"), i.click();
                      },
                    }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Add new cell",
                    children: (0, en.jsx)(Po, {
                      fontSize: "small",
                      onClick: () => j(!0),
                    }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Undo",
                    children: (0, en.jsx)(xl, {
                      fontSize: "small",
                      onClick: () => window.canvasEngine.undo(),
                    }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Redo",
                    children: (0, en.jsx)(Sl, {
                      fontSize: "small",
                      onClick: () => window.canvasEngine.redo(),
                    }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Copy",
                    children: (0, en.jsx)(kl, {
                      fontSize: "small",
                      onClick: () => window.canvasEngine.copySelectedObjects(),
                    }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Paste",
                    children: (0, en.jsx)(Cl, {
                      fontSize: "small",
                      onClick: () => window.canvasEngine.pasteCopiedObjects(),
                    }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Scan Document",
                    children: (0, en.jsx)(El, { fontSize: "small" }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Home",
                    children: (0, en.jsx)(_l, { fontSize: "small" }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Move",
                    children: (0, en.jsx)(Tl, {
                      fontSize: "small",
                      onClick: () => window.canvasEngine.enterMultiMoveMode(),
                    }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Delete",
                    children: (0, en.jsx)(cl, {
                      fontSize: "small",
                      onClick: () =>
                        window.canvasEngine.deleteSelectedObjects(),
                    }),
                  }),
                  (0, en.jsx)(nu, {
                    title: "Add Instance",
                    children: (0, en.jsx)(ou, {
                      fontSize: "small",
                      onClick: () => M(!0),
                    }),
                  }),
                ],
              }),
              "select" === a &&
                (0, en.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginLeft: "20px",
                    padding: "5px",
                    border: "1px solid #444",
                    borderRadius: "8px",
                    backgroundColor: "#2b2b2b",
                  },
                  children: [
                    (0, en.jsx)(nu, {
                      title: "Right rotate",
                      children: (0, en.jsx)(ru, {
                        fontSize: "small",
                        style: { cursor: "pointer" },
                        onClick: () =>
                          window.dispatchEvent(new CustomEvent("rotate-right")),
                      }),
                    }),
                    (0, en.jsx)(nu, {
                      title: "Left rotate",
                      children: (0, en.jsx)(iu, {
                        fontSize: "small",
                        style: { cursor: "pointer" },
                        onClick: () =>
                          window.dispatchEvent(new CustomEvent("rotate-left")),
                      }),
                    }),
                    (0, en.jsx)(nu, {
                      title: "Mirror X",
                      children: (0, en.jsx)($o, {
                        fontSize: "small",
                        style: { cursor: "pointer" },
                      }),
                    }),
                    (0, en.jsx)(nu, {
                      title: "Mirror Y",
                      children: (0, en.jsx)(au, {
                        fontSize: "small",
                        style: { cursor: "pointer" },
                      }),
                    }),
                  ],
                }),
              "ruler" === a &&
                (0, en.jsx)(wl, {
                  unit: l,
                  setUnit: s,
                  drawMode: c,
                  setDrawMode: u,
                  lineMode: d,
                  setLineMode: f,
                  tickCount: p,
                  setTickCount: h,
                  onReset: () => {
                    s("1"),
                      u("two"),
                      f("free"),
                      h(10),
                      g("#ffffff"),
                      b(!0),
                      window.canvasEngine &&
                        ((window.canvasEngine.allRulers = []),
                        window.canvasEngine.draw());
                  },
                  rulerColor: m,
                  setRulerColor: g,
                  onGrid: y,
                  setOnGrid: b,
                }),
            ],
          }),
          (0, en.jsx)("div", {
            style: {
              marginLeft: "auto",
              marginRight: "7px",
              display: "flex",
              alignItems: "center",
            },
            children: (0, en.jsx)("input", {
              type: "text",
              value: e,
              onChange: (e) => {
                qt.setDesignName(e.target.value), t(e.target.value);
              },
              style: {
                padding: "10px",
                height: "10px",
                right: "0px",
                fontSize: "14px",
                borderRadius: "4px",
                border: "1px solid #888",
                backgroundColor: "#222",
                color: "#fff",
                outline: "none",
                minWidth: "200px",
              },
              placeholder: "Enter Design Name",
            }),
          }),
          T &&
            (0, en.jsxs)("div", {
              className: "modal",
              style: {
                background: "#222",
                padding: "20px",
                borderRadius: "8px",
                position: "fixed",
                top: "30%",
                left: "35%",
                zIndex: 1e3,
                color: "white",
              },
              children: [
                (0, en.jsx)("h3", { children: "Create New Cell" }),
                (0, en.jsx)("input", {
                  type: "text",
                  placeholder: "Enter cell name",
                  value: O,
                  onChange: (e) => z(e.target.value),
                  style: {
                    padding: "8px",
                    marginBottom: "10px",
                    width: "100%",
                  },
                }),
                (0, en.jsxs)("div", {
                  style: { display: "flex", gap: "10px", marginTop: "10px" },
                  children: [
                    (0, en.jsx)("button", {
                      onClick: () => {
                        O.trim() &&
                          (Ot.addCell(O.trim()),
                          qt.setSelectedCell(O.trim()),
                          alert(`\u2705 Cell '${O}' created`),
                          z(""),
                          j(!1),
                          window.canvasEngine.draw());
                      },
                      children: "Create",
                    }),
                    (0, en.jsx)("button", {
                      onClick: () => j(!1),
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
          A &&
            (0, en.jsx)("div", {
              className: "modal",
              style: {
                background: "#222",
                padding: "20px",
                borderRadius: "8px",
                position: "fixed",
                top: "30%",
                left: "35%",
                zIndex: 1e3,
                color: "white",
              },
              children: (0, en.jsx)(lu, { onClose: () => M(!1) }),
            }),
        ],
      });
    },
    cu = Ro(
      (0, en.jsx)("path", {
        d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2",
      })
    ),
    uu = Ro((0, en.jsx)("path", { d: "M3 3h18v18H3z" })),
    du = Ro(
      (0, en.jsx)("path", { d: "M12 7.77 18.39 18H5.61zM12 4 2 20h20z" })
    ),
    fu = Ro(
      (0, en.jsx)("path", {
        d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6",
      })
    ),
    pu = Ro(
      (0, en.jsx)("path", {
        d: "M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9z",
      })
    ),
    hu = Ro(
      (0, en.jsx)("path", {
        d: "m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7",
      })
    ),
    mu = Ro(
      (0, en.jsx)("path", {
        d: "M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2m-5 12H9v-2h6zm5-7H4V4h16z",
      })
    ),
    gu = Ro(
      (0, en.jsx)("path", {
        d: "M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2z",
      })
    ),
    yu = (e) => {
      let { onClose: t, isOpen: n } = e;
      const [r, a] = (0, i.useState)("grid"),
        [o, l] = (0, i.useState)(10),
        [s, c] = (0, i.useState)("nm"),
        [u, d] = (0, i.useState)("#444444"),
        [f, p] = (0, i.useState)(!0),
        [h, m] = (0, i.useState)("line");
      (0, i.useEffect)(() => {
        var e;
        window.canvasEngine &&
          (l(window.canvasEngine.gridSpacing || 10),
          d(window.canvasEngine.gridColor || "#444444"),
          p(null === (e = window.canvasEngine.showGrid) || void 0 === e || e));
      }, [n]);
      const g = (e) => {
        const t = e.target.value;
        m(t),
          window.canvasEngine &&
            ((window.canvasEngine.gridType = t), window.canvasEngine.draw());
      };
      if (!n) return null;
      const y =
        "nm" === s
          ? { min: 10, max: 2e3, step: 10 }
          : "um" === s
          ? { min: 1e4, max: 2e5, step: 1e3 }
          : "px" === s
          ? { min: 1, max: 200, step: 1 }
          : void 0;
      return (0, en.jsxs)("div", {
        className: "settings-popup",
        children: [
          (0, en.jsxs)("div", {
            className: "settings-header",
            children: [
              (0, en.jsx)("h3", { children: "Drawing Grid Settings" }),
              " ",
              (0, en.jsx)("button", {
                className: "close-btn",
                onClick: t,
                children: "\xd7",
              }),
            ],
          }),
          (0, en.jsxs)("div", {
            className: "settings-tabs",
            children: [
              (0, en.jsx)("button", {
                className: "grid" === r ? "active" : "",
                onClick: () => a("grid"),
                children: "Drawing Grid",
              }),
              (0, en.jsx)("button", {
                disabled: !0,
                children: "Technology Grid",
              }),
              " ",
            ],
          }),
          (0, en.jsx)("div", {
            className: "settings-content",
            children:
              "grid" === r &&
              (0, en.jsxs)("div", {
                className: "grid-settings",
                children: [
                  (0, en.jsxs)("div", {
                    className: "setting-row",
                    children: [
                      (0, en.jsx)("label", { children: "Show Grid" }),
                      (0, en.jsxs)("div", {
                        className: "toggle-gridtype",
                        children: [
                          (0, en.jsxs)("div", {
                            className: "radio-group",
                            children: [
                              (0, en.jsxs)("label", {
                                children: [
                                  (0, en.jsx)("input", {
                                    type: "radio",
                                    name: "gridType",
                                    value: "line",
                                    checked: "line" === h,
                                    onChange: g,
                                  }),
                                  "Line",
                                ],
                              }),
                              (0, en.jsxs)("label", {
                                children: [
                                  (0, en.jsx)("input", {
                                    type: "radio",
                                    name: "gridType",
                                    value: "dots",
                                    checked: "dots" === h,
                                    onChange: g,
                                  }),
                                  "Dots",
                                ],
                              }),
                            ],
                          }),
                          (0, en.jsxs)("label", {
                            className: "switch",
                            children: [
                              (0, en.jsx)("input", {
                                type: "checkbox",
                                checked: f,
                                onChange: (e) => {
                                  const t = e.target.checked;
                                  p(t),
                                    window.canvasEngine &&
                                      ((window.canvasEngine.showGrid = t),
                                      window.canvasEngine.draw());
                                },
                              }),
                              (0, en.jsx)("span", {
                                className: "slider round",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, en.jsxs)("div", {
                    className: "setting-row",
                    children: [
                      (0, en.jsx)("label", { children: "Grid Spacing" }),
                      (0, en.jsxs)("div", {
                        className: "slider-row",
                        children: [
                          (0, en.jsx)("input", {
                            type: "range",
                            id: "gridSize",
                            value: o,
                            onChange: (e) => {
                              var t;
                              const n = parseInt(e.target.value);
                              l(n),
                                null === (t = window.canvasEngine) ||
                                  void 0 === t ||
                                  t.setGridSpacing(n);
                            },
                            ...y,
                          }),
                          (0, en.jsx)("span", {
                            className: "slider-value",
                            children:
                              "nm" === s
                                ? `${(o / 10).toFixed(1)} nm`
                                : "um" === s
                                ? `${(o / 1e4).toFixed(2)} \xb5m`
                                : "px" === s
                                ? `${o}px`
                                : void 0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, en.jsxs)("div", {
                    className: "setting-row",
                    children: [
                      (0, en.jsx)("label", { children: "Units" }),
                      (0, en.jsxs)("select", {
                        id: "unit-select",
                        value: s,
                        onChange: (e) => {
                          const t = e.target.value;
                          c(t);
                        },
                        children: [
                          (0, en.jsx)("option", {
                            value: "px",
                            children: "Pixels",
                          }),
                          (0, en.jsx)("option", {
                            value: "nm",
                            children: "Nanometers",
                          }),
                          (0, en.jsx)("option", {
                            value: "um",
                            children: "Micrometers",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, en.jsxs)("div", {
                    className: "setting-row",
                    children: [
                      (0, en.jsx)("label", { children: "Grid Color" }),
                      (0, en.jsx)("input", {
                        type: "color",
                        id: "gridColor",
                        value: u,
                        onChange: (e) => {
                          const t = e.target.value;
                          d(t),
                            window.canvasEngine &&
                              ((window.canvasEngine.gridColor = t),
                              window.canvasEngine.draw());
                        },
                      }),
                    ],
                  }),
                ],
              }),
          }),
        ],
      });
    },
    bu = (e) => {
      var t;
      let { onIconClick: n } = e;
      const [r, a] = (0, i.useState)(!1),
        [o, l] = (0, i.useState)(!1),
        [s, c] = (0, i.useState)("rectangle"),
        u = [
          {
            id: "rectangle",
            icon: (0, en.jsx)(uu, { fontSize: "small" }),
            label: "Rectangle",
          },
          {
            id: "circle",
            icon: (0, en.jsx)(cu, { fontSize: "small" }),
            label: "Circle",
          },
          {
            id: "triangle",
            icon: (0, en.jsx)(du, { fontSize: "small" }),
            label: "Triangle",
          },
        ],
        d = (e) => {
          Gt.setTool(e),
            window.dispatchEvent(
              new CustomEvent("tool-changed", { detail: e })
            );
        };
      return (0, en.jsxs)(en.Fragment, {
        children: [
          (0, en.jsxs)("div", {
            className: "left-bar",
            children: [
              (0, en.jsxs)("div", {
                className: "icon-container",
                children: [
                  (0, en.jsxs)("div", {
                    className: "dropdown-container",
                    children: [
                      (0, en.jsxs)("div", {
                        className: "dropdown-trigger",
                        onClick: () => l(!o),
                        children: [
                          null === (t = u.find((e) => e.id === s)) ||
                          void 0 === t
                            ? void 0
                            : t.icon,
                          " ",
                        ],
                      }),
                      o &&
                        (0, en.jsx)("div", {
                          className: "dropdown-menu",
                          children: u.map((e) =>
                            (0, en.jsxs)(
                              "div",
                              {
                                className:
                                  "dropdown-item " +
                                  (s === e.id ? "selected" : ""),
                                onClick: () => {
                                  return (
                                    (t = e.id),
                                    Gt.setTool(t),
                                    c(t),
                                    l(!1),
                                    void window.dispatchEvent(
                                      new CustomEvent("tool-changed", {
                                        detail: t,
                                      })
                                    )
                                  );
                                  var t;
                                },
                                children: [e.icon, " ", e.label],
                              },
                              e.id
                            )
                          ),
                        }),
                    ],
                  }),
                  (0, en.jsx)(hu, {
                    fontSize: "small",
                    className: "icon",
                    titleAccess: "Label Tool",
                    onClick: () => d("label"),
                  }),
                  (0, en.jsx)(gu, {
                    fontSize: "small",
                    className: "icon",
                    titleAccess: "Ruler",
                    onClick: () => d("ruler"),
                  }),
                  (0, en.jsx)(mu, { fontSize: "small", className: "icon" }),
                  (0, en.jsx)(pu, { fontSize: "small", className: "icon" }),
                  (0, en.jsx)(cl, { fontSize: "small", className: "icon" }),
                ],
              }),
              (0, en.jsx)("div", {
                className: "bottom-icon",
                children: (0, en.jsx)(fu, {
                  fontSize: "small",
                  titleAccess: "Settings",
                  className: "icon",
                  onClick: () => a(!0),
                }),
              }),
            ],
          }),
          (0, en.jsx)(yu, { isOpen: r, onClose: () => a(!1) }),
        ],
      });
    };
  const vu = function () {
      const [e, t] = (0, i.useState)(!1),
        [n, r] = (0, i.useState)(!1),
        [a, o] = (0, i.useState)(null),
        [l, s] = (0, i.useState)(null),
        c = (0, i.useRef)(null);
      return (
        (0, i.useEffect)(() => {
          if ("true" === localStorage.getItem("verified")) return void o(!0);
          const e = new URLSearchParams(window.location.search).get("token");
          if (!e) return s("No token provided in URL"), void o(!1);
          Et.post("http://54.81.42.110:8000/auth/verify-token", { token: e })
            .then((e) => {
              localStorage.setItem("access_token", e.data.access_token),
                localStorage.setItem("refresh_token", e.data.refresh_token),
                localStorage.setItem("verified", "true"),
                o(!0);
            })
            .catch((e) => {
              var t, n;
              s(
                (null === (t = e.response) ||
                void 0 === t ||
                null === (n = t.data) ||
                void 0 === n
                  ? void 0
                  : n.msg) || "Token verification failed"
              ),
                o(!1);
            });
        }, []),
        null === a
          ? (0, en.jsx)("div", {
              style: { padding: 20 },
              children: "Verifying token, please wait...",
            })
          : a
          ? (0, en.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                height: "100vh",
              },
              children: [
                (0, en.jsx)(su, {}),
                (0, en.jsxs)("div", {
                  style: { display: "flex", flex: 1 },
                  children: [
                    (0, en.jsx)(bu, {}),
                    (0, en.jsxs)("div", {
                      style: { flex: 1, position: "relative", display: "flex" },
                      children: [
                        (0, en.jsx)(tn, { ref: c }),
                        n && (0, en.jsx)(hl, {}),
                        (0, en.jsx)("button", {
                          onClick: () => r(!n),
                          style: {
                            position: "absolute",
                            top: "0px",
                            right: n ? "253px" : "3px",
                            zIndex: 1e3,
                            padding: "0px 0px",
                            backgroundColor: "#2b2b2b",
                            color: "#fff",
                            border: "1px solid #444",
                            borderRadius: "4px",
                            cursor: "pointer",
                            transition: "right 0.2s ease",
                          },
                          children: n
                            ? (0, en.jsx)(Qo, { fontSize: "small" })
                            : (0, en.jsx)(Jo, { fontSize: "small" }),
                        }),
                      ],
                    }),
                  ],
                }),
                !e &&
                  (0, en.jsx)(bl, {
                    onStartNew: () => {
                      t(!0);
                    },
                    onLoadJSON: (e) => {
                      const n = e.target.files[0];
                      if (!n) return;
                      const r = new FileReader();
                      (r.onload = (e) => {
                        try {
                          const n = JSON.parse(e.target.result);
                          t(!0),
                            setTimeout(() => {
                              window.canvasEngine &&
                                window.canvasEngine.loadFromJSON(n);
                            }, 100);
                        } catch (n) {
                          alert("Invalid JSON file");
                        }
                      }),
                        r.readAsText(n);
                    },
                  }),
              ],
            })
          : (0, en.jsxs)("div", {
              style: { color: "red", padding: 20 },
              children: ["Error: ", l],
            })
      );
    },
    wu = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(453)
          .then(n.bind(n, 453))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: i, getLCP: a, getTTFB: o } = t;
            n(e), r(e), i(e), a(e), o(e);
          });
    };
  o
    .createRoot(document.getElementById("root"))
    .render((0, en.jsx)(i.StrictMode, { children: (0, en.jsx)(vu, {}) })),
    wu();
})();
//# sourceMappingURL=main.14ee9fc4.js.map
