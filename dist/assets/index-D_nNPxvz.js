var Xy = Object.defineProperty;
var Gy = (e, t, n) =>
  t in e
    ? Xy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Pl = (e, t, n) => Gy(e, typeof t != "symbol" ? t + "" : t, n);
function Zy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function jp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Tp = { exports: {} },
  Ts = {},
  $p = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vo = Symbol.for("react.element"),
  Jy = Symbol.for("react.portal"),
  eg = Symbol.for("react.fragment"),
  tg = Symbol.for("react.strict_mode"),
  ng = Symbol.for("react.profiler"),
  rg = Symbol.for("react.provider"),
  og = Symbol.for("react.context"),
  ig = Symbol.for("react.forward_ref"),
  sg = Symbol.for("react.suspense"),
  lg = Symbol.for("react.memo"),
  ag = Symbol.for("react.lazy"),
  wf = Symbol.iterator;
function ug(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wf && e[wf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Mp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ap = Object.assign,
  zp = {};
function jr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zp),
    (this.updater = n || Mp);
}
jr.prototype.isReactComponent = {};
jr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
jr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ip() {}
Ip.prototype = jr.prototype;
function Au(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zp),
    (this.updater = n || Mp);
}
var zu = (Au.prototype = new Ip());
zu.constructor = Au;
Ap(zu, jr.prototype);
zu.isPureReactComponent = !0;
var Sf = Array.isArray,
  Op = Object.prototype.hasOwnProperty,
  Iu = { current: null },
  Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Op.call(t, r) && !Lp.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Vo,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Iu.current,
  };
}
function cg(e, t) {
  return {
    $$typeof: Vo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ou(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vo;
}
function fg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xf = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fg("" + e.key)
    : t.toString(36);
}
function Fi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vo:
          case Jy:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Nl(s, 0) : r),
      Sf(o)
        ? ((n = ""),
          e != null && (n = e.replace(xf, "$&/") + "/"),
          Fi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ou(o) &&
            (o = cg(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(xf, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Sf(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Nl(i, l);
      s += Fi(i, t, n, a, o);
    }
  else if (((a = ug(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Nl(i, l++)), (s += Fi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Fi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function dg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  Bi = { transition: null },
  pg = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Bi,
    ReactCurrentOwner: Iu,
  };
function Fp() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: ci,
  forEach: function (e, t, n) {
    ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ou(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
U.Component = jr;
U.Fragment = eg;
U.Profiler = ng;
U.PureComponent = Au;
U.StrictMode = tg;
U.Suspense = sg;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pg;
U.act = Fp;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ap({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Iu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Op.call(t, a) &&
        !Lp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Vo, type: e.type, key: o, ref: i, props: r, _owner: s };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: og,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rg, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Dp;
U.createFactory = function (e) {
  var t = Dp.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: ig, render: e };
};
U.isValidElement = Ou;
U.lazy = function (e) {
  return { $$typeof: ag, _payload: { _status: -1, _result: e }, _init: dg };
};
U.memo = function (e, t) {
  return { $$typeof: lg, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Bi.transition;
  Bi.transition = {};
  try {
    e();
  } finally {
    Bi.transition = t;
  }
};
U.unstable_act = Fp;
U.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Te.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
U.useId = function () {
  return Te.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Te.current.useRef(e);
};
U.useState = function (e) {
  return Te.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Te.current.useTransition();
};
U.version = "18.3.1";
$p.exports = U;
var b = $p.exports;
const $s = jp(b),
  Cf = Zy({ __proto__: null, default: $s }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mg = b,
  hg = Symbol.for("react.element"),
  vg = Symbol.for("react.fragment"),
  yg = Object.prototype.hasOwnProperty,
  gg = mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) yg.call(t, r) && !wg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: hg,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: gg.current,
  };
}
Ts.Fragment = vg;
Ts.jsx = Bp;
Ts.jsxs = Bp;
Tp.exports = Ts;
var S = Tp.exports,
  Vp = { exports: {} },
  Qe = {},
  Wp = { exports: {} },
  Hp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var A = T.length;
    T.push(I);
    e: for (; 0 < A; ) {
      var V = (A - 1) >>> 1,
        B = T[V];
      if (0 < o(B, I)) (T[V] = I), (T[A] = B), (A = V);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      A = T.pop();
    if (A !== I) {
      T[0] = A;
      e: for (var V = 0, B = T.length, Y = B >>> 1; V < Y; ) {
        var rt = 2 * (V + 1) - 1,
          wn = T[rt],
          Ye = rt + 1,
          _t = T[Ye];
        if (0 > o(wn, A))
          Ye < B && 0 > o(_t, wn)
            ? ((T[V] = _t), (T[Ye] = A), (V = Ye))
            : ((T[V] = wn), (T[rt] = A), (V = rt));
        else if (Ye < B && 0 > o(_t, A)) (T[V] = _t), (T[Ye] = A), (V = Ye);
        else break e;
      }
    }
    return I;
  }
  function o(T, I) {
    var A = T.sortIndex - I.sortIndex;
    return A !== 0 ? A : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    p = !1,
    v = !1,
    w = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= T)
        r(u), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(u);
    }
  }
  function g(T) {
    if (((w = !1), m(T), !v))
      if (n(a) !== null) (v = !0), W(C);
      else {
        var I = n(u);
        I !== null && J(g, I.startTime - T);
      }
  }
  function C(T, I) {
    (v = !1), w && ((w = !1), y(k), (k = -1)), (p = !0);
    var A = f;
    try {
      for (
        m(I), c = n(a);
        c !== null && (!(c.expirationTime > I) || (T && !j()));

      ) {
        var V = c.callback;
        if (typeof V == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var B = V(c.expirationTime <= I);
          (I = e.unstable_now()),
            typeof B == "function" ? (c.callback = B) : c === n(a) && r(a),
            m(I);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var Y = !0;
      else {
        var rt = n(u);
        rt !== null && J(g, rt.startTime - I), (Y = !1);
      }
      return Y;
    } finally {
      (c = null), (f = A), (p = !1);
    }
  }
  var E = !1,
    _ = null,
    k = -1,
    R = 5,
    P = -1;
  function j() {
    return !(e.unstable_now() - P < R);
  }
  function M() {
    if (_ !== null) {
      var T = e.unstable_now();
      P = T;
      var I = !0;
      try {
        I = _(!0, T);
      } finally {
        I ? O() : ((E = !1), (_ = null));
      }
    } else E = !1;
  }
  var O;
  if (typeof h == "function")
    O = function () {
      h(M);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      H = L.port2;
    (L.port1.onmessage = M),
      (O = function () {
        H.postMessage(null);
      });
  } else
    O = function () {
      x(M, 0);
    };
  function W(T) {
    (_ = T), E || ((E = !0), O());
  }
  function J(T, I) {
    k = x(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), W(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = f;
      }
      var A = f;
      f = I;
      try {
        return T();
      } finally {
        f = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var A = f;
      f = T;
      try {
        return I();
      } finally {
        f = A;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, A) {
      var V = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? V + A : V))
          : (A = V),
        T)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = A + B),
        (T = {
          id: d++,
          callback: I,
          priorityLevel: T,
          startTime: A,
          expirationTime: B,
          sortIndex: -1,
        }),
        A > V
          ? ((T.sortIndex = A),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (w ? (y(k), (k = -1)) : (w = !0), J(g, A - V)))
          : ((T.sortIndex = B), t(a, T), v || p || ((v = !0), W(C))),
        T
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (T) {
      var I = f;
      return function () {
        var A = f;
        f = I;
        try {
          return T.apply(this, arguments);
        } finally {
          f = A;
        }
      };
    });
})(Hp);
Wp.exports = Hp;
var Sg = Wp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xg = b,
  He = Sg;
function $(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Up = new Set(),
  yo = {};
function Dn(e, t) {
  wr(e, t), wr(e + "Capture", t);
}
function wr(e, t) {
  for (yo[e] = t, e = 0; e < t.length; e++) Up.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ka = Object.prototype.hasOwnProperty,
  Cg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bf = {},
  kf = {};
function bg(e) {
  return ka.call(kf, e)
    ? !0
    : ka.call(bf, e)
      ? !1
      : Cg.test(e)
        ? (kf[e] = !0)
        : ((bf[e] = !0), !1);
}
function kg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Eg(e, t, n, r) {
  if (t === null || typeof t > "u" || kg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function $e(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Lu = /[\-:]([a-z])/g;
function Du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Lu, Du);
    Se[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Lu, Du);
    Se[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Lu, Du);
  Se[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fu(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Eg(t, n, o, r) && (n = null),
    r || o === null
      ? bg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fi = Symbol.for("react.element"),
  Gn = Symbol.for("react.portal"),
  Zn = Symbol.for("react.fragment"),
  Bu = Symbol.for("react.strict_mode"),
  Ea = Symbol.for("react.profiler"),
  Qp = Symbol.for("react.provider"),
  qp = Symbol.for("react.context"),
  Vu = Symbol.for("react.forward_ref"),
  _a = Symbol.for("react.suspense"),
  Ra = Symbol.for("react.suspense_list"),
  Wu = Symbol.for("react.memo"),
  Qt = Symbol.for("react.lazy"),
  Yp = Symbol.for("react.offscreen"),
  Ef = Symbol.iterator;
function Dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ef && e[Ef]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  jl;
function Jr(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jl = (t && t[1]) || "";
    }
  return (
    `
` +
    jl +
    e
  );
}
var Tl = !1;
function $l(e, t) {
  if (!e || Tl) return "";
  Tl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Tl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function _g(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e;
    case 11:
      return (e = $l(e.type.render, !1)), e;
    case 1:
      return (e = $l(e.type, !0)), e;
    default:
      return "";
  }
}
function Pa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zn:
      return "Fragment";
    case Gn:
      return "Portal";
    case Ea:
      return "Profiler";
    case Bu:
      return "StrictMode";
    case _a:
      return "Suspense";
    case Ra:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qp:
        return (e.displayName || "Context") + ".Consumer";
      case Qp:
        return (e._context.displayName || "Context") + ".Provider";
      case Vu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Wu:
        return (
          (t = e.displayName || null), t !== null ? t : Pa(e.type) || "Memo"
        );
      case Qt:
        (t = e._payload), (e = e._init);
        try {
          return Pa(e(t));
        } catch {}
    }
  return null;
}
function Rg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(t);
    case 8:
      return t === Bu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function an(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Kp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Pg(e) {
  var t = Kp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function di(e) {
  e._valueTracker || (e._valueTracker = Pg(e));
}
function Xp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Kp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Na(e, t) {
  var n = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _f(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = an(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gp(e, t) {
  (t = t.checked), t != null && Fu(e, "checked", t, !1);
}
function ja(e, t) {
  Gp(e, t);
  var n = an(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ta(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ta(e, t.type, an(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Rf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ta(e, t, n) {
  (t !== "number" || es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var eo = Array.isArray;
function cr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function $a(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error($(92));
      if (eo(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: an(n) };
}
function Zp(e, t) {
  var n = an(t.value),
    r = an(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Nf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ma(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var pi,
  em = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        pi = pi || document.createElement("div"),
          pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = pi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function go(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ng = ["Webkit", "ms", "Moz", "O"];
Object.keys(oo).forEach(function (e) {
  Ng.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oo[t] = oo[e]);
  });
});
function tm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (oo.hasOwnProperty(e) && oo[e])
      ? ("" + t).trim()
      : t + "px";
}
function nm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = tm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var jg = ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Aa(e, t) {
  if (t) {
    if (jg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function za(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Ia = null;
function Hu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Oa = null,
  fr = null,
  dr = null;
function jf(e) {
  if ((e = Uo(e))) {
    if (typeof Oa != "function") throw Error($(280));
    var t = e.stateNode;
    t && ((t = Os(t)), Oa(e.stateNode, e.type, t));
  }
}
function rm(e) {
  fr ? (dr ? dr.push(e) : (dr = [e])) : (fr = e);
}
function om() {
  if (fr) {
    var e = fr,
      t = dr;
    if (((dr = fr = null), jf(e), t)) for (e = 0; e < t.length; e++) jf(t[e]);
  }
}
function im(e, t) {
  return e(t);
}
function sm() {}
var Ml = !1;
function lm(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return im(e, t, n);
  } finally {
    (Ml = !1), (fr !== null || dr !== null) && (sm(), om());
  }
}
function wo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Os(n);
  if (r === null) return null;
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var La = !1;
if (Mt)
  try {
    var Fr = {};
    Object.defineProperty(Fr, "passive", {
      get: function () {
        La = !0;
      },
    }),
      window.addEventListener("test", Fr, Fr),
      window.removeEventListener("test", Fr, Fr);
  } catch {
    La = !1;
  }
function Tg(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var io = !1,
  ts = null,
  ns = !1,
  Da = null,
  $g = {
    onError: function (e) {
      (io = !0), (ts = e);
    },
  };
function Mg(e, t, n, r, o, i, s, l, a) {
  (io = !1), (ts = null), Tg.apply($g, arguments);
}
function Ag(e, t, n, r, o, i, s, l, a) {
  if ((Mg.apply(this, arguments), io)) {
    if (io) {
      var u = ts;
      (io = !1), (ts = null);
    } else throw Error($(198));
    ns || ((ns = !0), (Da = u));
  }
}
function Fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function am(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Tf(e) {
  if (Fn(e) !== e) throw Error($(188));
}
function zg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fn(e)), t === null)) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Tf(o), e;
        if (i === r) return Tf(o), t;
        i = i.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function um(e) {
  return (e = zg(e)), e !== null ? cm(e) : null;
}
function cm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fm = He.unstable_scheduleCallback,
  $f = He.unstable_cancelCallback,
  Ig = He.unstable_shouldYield,
  Og = He.unstable_requestPaint,
  le = He.unstable_now,
  Lg = He.unstable_getCurrentPriorityLevel,
  Uu = He.unstable_ImmediatePriority,
  dm = He.unstable_UserBlockingPriority,
  rs = He.unstable_NormalPriority,
  Dg = He.unstable_LowPriority,
  pm = He.unstable_IdlePriority,
  Ms = null,
  xt = null;
function Fg(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function")
    try {
      xt.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Wg,
  Bg = Math.log,
  Vg = Math.LN2;
function Wg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bg(e) / Vg) | 0)) | 0;
}
var mi = 64,
  hi = 4194304;
function to(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function os(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = to(l)) : ((i &= s), i !== 0 && (r = to(i)));
  } else (s = n & ~o), s !== 0 ? (r = to(s)) : i !== 0 && (r = to(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ut(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Hg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ug(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - ut(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = Hg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Fa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function mm() {
  var e = mi;
  return (mi <<= 1), !(mi & 4194240) && (mi = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Qg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ut(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Qu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var K = 0;
function hm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var vm,
  qu,
  ym,
  gm,
  wm,
  Ba = !1,
  vi = [],
  Jt = null,
  en = null,
  tn = null,
  So = new Map(),
  xo = new Map(),
  Yt = [],
  qg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Mf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      So.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xo.delete(t.pointerId);
  }
}
function Br(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Uo(t)), t !== null && qu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Yg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Jt = Br(Jt, e, t, n, r, o)), !0;
    case "dragenter":
      return (en = Br(en, e, t, n, r, o)), !0;
    case "mouseover":
      return (tn = Br(tn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return So.set(i, Br(So.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), xo.set(i, Br(xo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Sm(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = am(n)), t !== null)) {
          (e.blockedOn = t),
            wm(e.priority, function () {
              ym(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ia = r), n.target.dispatchEvent(r), (Ia = null);
    } else return (t = Uo(n)), t !== null && qu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Af(e, t, n) {
  Vi(e) && n.delete(t);
}
function Kg() {
  (Ba = !1),
    Jt !== null && Vi(Jt) && (Jt = null),
    en !== null && Vi(en) && (en = null),
    tn !== null && Vi(tn) && (tn = null),
    So.forEach(Af),
    xo.forEach(Af);
}
function Vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ba ||
      ((Ba = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, Kg)));
}
function Co(e) {
  function t(o) {
    return Vr(o, e);
  }
  if (0 < vi.length) {
    Vr(vi[0], e);
    for (var n = 1; n < vi.length; n++) {
      var r = vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jt !== null && Vr(Jt, e),
      en !== null && Vr(en, e),
      tn !== null && Vr(tn, e),
      So.forEach(t),
      xo.forEach(t),
      n = 0;
    n < Yt.length;
    n++
  )
    (r = Yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
    Sm(n), n.blockedOn === null && Yt.shift();
}
var pr = Dt.ReactCurrentBatchConfig,
  is = !0;
function Xg(e, t, n, r) {
  var o = K,
    i = pr.transition;
  pr.transition = null;
  try {
    (K = 1), Yu(e, t, n, r);
  } finally {
    (K = o), (pr.transition = i);
  }
}
function Gg(e, t, n, r) {
  var o = K,
    i = pr.transition;
  pr.transition = null;
  try {
    (K = 4), Yu(e, t, n, r);
  } finally {
    (K = o), (pr.transition = i);
  }
}
function Yu(e, t, n, r) {
  if (is) {
    var o = Va(e, t, n, r);
    if (o === null) Hl(e, t, r, ss, n), Mf(e, r);
    else if (Yg(o, e, t, n, r)) r.stopPropagation();
    else if ((Mf(e, r), t & 4 && -1 < qg.indexOf(e))) {
      for (; o !== null; ) {
        var i = Uo(o);
        if (
          (i !== null && vm(i),
          (i = Va(e, t, n, r)),
          i === null && Hl(e, t, r, ss, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var ss = null;
function Va(e, t, n, r) {
  if (((ss = null), (e = Hu(r)), (e = kn(e)), e !== null))
    if (((t = Fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = am(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ss = e), null;
}
function xm(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Lg()) {
        case Uu:
          return 1;
        case dm:
          return 4;
        case rs:
        case Dg:
          return 16;
        case pm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  Ku = null,
  Wi = null;
function Cm() {
  if (Wi) return Wi;
  var e,
    t = Ku,
    n = t.length,
    r,
    o = "value" in Xt ? Xt.value : Xt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Wi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Hi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yi() {
  return !0;
}
function zf() {
  return !1;
}
function qe(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yi
        : zf),
      (this.isPropagationStopped = zf),
      this
    );
  }
  return (
    ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yi));
      },
      persist: function () {},
      isPersistent: yi,
    }),
    t
  );
}
var Tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xu = qe(Tr),
  Ho = ie({}, Tr, { view: 0, detail: 0 }),
  Zg = qe(Ho),
  zl,
  Il,
  Wr,
  As = ie({}, Ho, {
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
    getModifierState: Gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Wr &&
            (Wr && e.type === "mousemove"
              ? ((zl = e.screenX - Wr.screenX), (Il = e.screenY - Wr.screenY))
              : (Il = zl = 0),
            (Wr = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Il;
    },
  }),
  If = qe(As),
  Jg = ie({}, As, { dataTransfer: 0 }),
  e0 = qe(Jg),
  t0 = ie({}, Ho, { relatedTarget: 0 }),
  Ol = qe(t0),
  n0 = ie({}, Tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  r0 = qe(n0),
  o0 = ie({}, Tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  i0 = qe(o0),
  s0 = ie({}, Tr, { data: 0 }),
  Of = qe(s0),
  l0 = {
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
  a0 = {
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
  u0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function c0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = u0[e]) ? !!t[e] : !1;
}
function Gu() {
  return c0;
}
var f0 = ie({}, Ho, {
    key: function (e) {
      if (e.key) {
        var t = l0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? a0[e.keyCode] || "Unidentified"
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
    getModifierState: Gu,
    charCode: function (e) {
      return e.type === "keypress" ? Hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  d0 = qe(f0),
  p0 = ie({}, As, {
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
  }),
  Lf = qe(p0),
  m0 = ie({}, Ho, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gu,
  }),
  h0 = qe(m0),
  v0 = ie({}, Tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  y0 = qe(v0),
  g0 = ie({}, As, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  }),
  w0 = qe(g0),
  S0 = [9, 13, 27, 32],
  Zu = Mt && "CompositionEvent" in window,
  so = null;
Mt && "documentMode" in document && (so = document.documentMode);
var x0 = Mt && "TextEvent" in window && !so,
  bm = Mt && (!Zu || (so && 8 < so && 11 >= so)),
  Df = " ",
  Ff = !1;
function km(e, t) {
  switch (e) {
    case "keyup":
      return S0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Em(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Jn = !1;
function C0(e, t) {
  switch (e) {
    case "compositionend":
      return Em(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ff = !0), Df);
    case "textInput":
      return (e = t.data), e === Df && Ff ? null : e;
    default:
      return null;
  }
}
function b0(e, t) {
  if (Jn)
    return e === "compositionend" || (!Zu && km(e, t))
      ? ((e = Cm()), (Wi = Ku = Xt = null), (Jn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var k0 = {
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
function Bf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!k0[e.type] : t === "textarea";
}
function _m(e, t, n, r) {
  rm(r),
    (t = ls(t, "onChange")),
    0 < t.length &&
      ((n = new Xu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var lo = null,
  bo = null;
function E0(e) {
  Om(e, 0);
}
function zs(e) {
  var t = nr(e);
  if (Xp(t)) return e;
}
function _0(e, t) {
  if (e === "change") return t;
}
var Rm = !1;
if (Mt) {
  var Ll;
  if (Mt) {
    var Dl = "oninput" in document;
    if (!Dl) {
      var Vf = document.createElement("div");
      Vf.setAttribute("oninput", "return;"),
        (Dl = typeof Vf.oninput == "function");
    }
    Ll = Dl;
  } else Ll = !1;
  Rm = Ll && (!document.documentMode || 9 < document.documentMode);
}
function Wf() {
  lo && (lo.detachEvent("onpropertychange", Pm), (bo = lo = null));
}
function Pm(e) {
  if (e.propertyName === "value" && zs(bo)) {
    var t = [];
    _m(t, bo, e, Hu(e)), lm(E0, t);
  }
}
function R0(e, t, n) {
  e === "focusin"
    ? (Wf(), (lo = t), (bo = n), lo.attachEvent("onpropertychange", Pm))
    : e === "focusout" && Wf();
}
function P0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zs(bo);
}
function N0(e, t) {
  if (e === "click") return zs(t);
}
function j0(e, t) {
  if (e === "input" || e === "change") return zs(t);
}
function T0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : T0;
function ko(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ka.call(t, o) || !dt(e[o], t[o])) return !1;
  }
  return !0;
}
function Hf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uf(e, t) {
  var n = Hf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hf(n);
  }
}
function Nm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Nm(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function jm() {
  for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = es(e.document);
  }
  return t;
}
function Ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $0(e) {
  var t = jm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ju(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Uf(n, i));
        var s = Uf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var M0 = Mt && "documentMode" in document && 11 >= document.documentMode,
  er = null,
  Wa = null,
  ao = null,
  Ha = !1;
function Qf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ha ||
    er == null ||
    er !== es(r) ||
    ((r = er),
    "selectionStart" in r && Ju(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ao && ko(ao, r)) ||
      ((ao = r),
      (r = ls(Wa, "onSelect")),
      0 < r.length &&
        ((t = new Xu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = er))));
}
function gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var tr = {
    animationend: gi("Animation", "AnimationEnd"),
    animationiteration: gi("Animation", "AnimationIteration"),
    animationstart: gi("Animation", "AnimationStart"),
    transitionend: gi("Transition", "TransitionEnd"),
  },
  Fl = {},
  Tm = {};
Mt &&
  ((Tm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete tr.animationend.animation,
    delete tr.animationiteration.animation,
    delete tr.animationstart.animation),
  "TransitionEvent" in window || delete tr.transitionend.transition);
function Is(e) {
  if (Fl[e]) return Fl[e];
  if (!tr[e]) return e;
  var t = tr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tm) return (Fl[e] = t[n]);
  return e;
}
var $m = Is("animationend"),
  Mm = Is("animationiteration"),
  Am = Is("animationstart"),
  zm = Is("transitionend"),
  Im = new Map(),
  qf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function pn(e, t) {
  Im.set(e, t), Dn(t, [e]);
}
for (var Bl = 0; Bl < qf.length; Bl++) {
  var Vl = qf[Bl],
    A0 = Vl.toLowerCase(),
    z0 = Vl[0].toUpperCase() + Vl.slice(1);
  pn(A0, "on" + z0);
}
pn($m, "onAnimationEnd");
pn(Mm, "onAnimationIteration");
pn(Am, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(zm, "onTransitionEnd");
wr("onMouseEnter", ["mouseout", "mouseover"]);
wr("onMouseLeave", ["mouseout", "mouseover"]);
wr("onPointerEnter", ["pointerout", "pointerover"]);
wr("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var no =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  I0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(no));
function Yf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ag(r, t, void 0, e), (e.currentTarget = null);
}
function Om(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Yf(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Yf(o, l, u), (i = a);
        }
    }
  }
  if (ns) throw ((e = Da), (ns = !1), (Da = null), e);
}
function ee(e, t) {
  var n = t[Ka];
  n === void 0 && (n = t[Ka] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Lm(t, e, 2, !1), n.add(r));
}
function Wl(e, t, n) {
  var r = 0;
  t && (r |= 4), Lm(n, e, r, t);
}
var wi = "_reactListening" + Math.random().toString(36).slice(2);
function Eo(e) {
  if (!e[wi]) {
    (e[wi] = !0),
      Up.forEach(function (n) {
        n !== "selectionchange" && (I0.has(n) || Wl(n, !1, e), Wl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wi] || ((t[wi] = !0), Wl("selectionchange", !1, t));
  }
}
function Lm(e, t, n, r) {
  switch (xm(t)) {
    case 1:
      var o = Xg;
      break;
    case 4:
      o = Gg;
      break;
    default:
      o = Yu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !La ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = kn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  lm(function () {
    var u = i,
      d = Hu(n),
      c = [];
    e: {
      var f = Im.get(e);
      if (f !== void 0) {
        var p = Xu,
          v = e;
        switch (e) {
          case "keypress":
            if (Hi(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = d0;
            break;
          case "focusin":
            (v = "focus"), (p = Ol);
            break;
          case "focusout":
            (v = "blur"), (p = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            p = Ol;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = If;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = e0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = h0;
            break;
          case $m:
          case Mm:
          case Am:
            p = r0;
            break;
          case zm:
            p = y0;
            break;
          case "scroll":
            p = Zg;
            break;
          case "wheel":
            p = w0;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = i0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Lf;
        }
        var w = (t & 4) !== 0,
          x = !w && e === "scroll",
          y = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var g = m.stateNode;
          if (
            (m.tag === 5 &&
              g !== null &&
              ((m = g),
              y !== null && ((g = wo(h, y)), g != null && w.push(_o(h, g, m)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((f = new p(f, v, null, n, d)), c.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Ia &&
            (v = n.relatedTarget || n.fromElement) &&
            (kn(v) || v[At]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = u),
              (v = v ? kn(v) : null),
              v !== null &&
                ((x = Fn(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = u)),
          p !== v)
        ) {
          if (
            ((w = If),
            (g = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Lf),
              (g = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (x = p == null ? f : nr(p)),
            (m = v == null ? f : nr(v)),
            (f = new w(g, h + "leave", p, n, d)),
            (f.target = x),
            (f.relatedTarget = m),
            (g = null),
            kn(d) === u &&
              ((w = new w(y, h + "enter", v, n, d)),
              (w.target = m),
              (w.relatedTarget = x),
              (g = w)),
            (x = g),
            p && v)
          )
            t: {
              for (w = p, y = v, h = 0, m = w; m; m = Bn(m)) h++;
              for (m = 0, g = y; g; g = Bn(g)) m++;
              for (; 0 < h - m; ) (w = Bn(w)), h--;
              for (; 0 < m - h; ) (y = Bn(y)), m--;
              for (; h--; ) {
                if (w === y || (y !== null && w === y.alternate)) break t;
                (w = Bn(w)), (y = Bn(y));
              }
              w = null;
            }
          else w = null;
          p !== null && Kf(c, f, p, w, !1),
            v !== null && x !== null && Kf(c, x, v, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? nr(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var C = _0;
        else if (Bf(f))
          if (Rm) C = j0;
          else {
            C = P0;
            var E = R0;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = N0);
        if (C && (C = C(e, u))) {
          _m(c, C, n, d);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Ta(f, "number", f.value);
      }
      switch (((E = u ? nr(u) : window), e)) {
        case "focusin":
          (Bf(E) || E.contentEditable === "true") &&
            ((er = E), (Wa = u), (ao = null));
          break;
        case "focusout":
          ao = Wa = er = null;
          break;
        case "mousedown":
          Ha = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ha = !1), Qf(c, n, d);
          break;
        case "selectionchange":
          if (M0) break;
        case "keydown":
        case "keyup":
          Qf(c, n, d);
      }
      var _;
      if (Zu)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Jn
          ? km(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (bm &&
          n.locale !== "ko" &&
          (Jn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Jn && (_ = Cm())
            : ((Xt = d),
              (Ku = "value" in Xt ? Xt.value : Xt.textContent),
              (Jn = !0))),
        (E = ls(u, k)),
        0 < E.length &&
          ((k = new Of(k, e, null, n, d)),
          c.push({ event: k, listeners: E }),
          _ ? (k.data = _) : ((_ = Em(n)), _ !== null && (k.data = _)))),
        (_ = x0 ? C0(e, n) : b0(e, n)) &&
          ((u = ls(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Of("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = _)));
    }
    Om(c, t);
  });
}
function _o(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ls(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = wo(e, n)),
      i != null && r.unshift(_o(e, i, o)),
      (i = wo(e, t)),
      i != null && r.push(_o(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Kf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = wo(n, i)), a != null && s.unshift(_o(n, a, l)))
        : o || ((a = wo(n, i)), a != null && s.push(_o(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var O0 = /\r\n?/g,
  L0 = /\u0000|\uFFFD/g;
function Xf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      O0,
      `
`,
    )
    .replace(L0, "");
}
function Si(e, t, n) {
  if (((t = Xf(t)), Xf(e) !== t && n)) throw Error($(425));
}
function as() {}
var Ua = null,
  Qa = null;
function qa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ya = typeof setTimeout == "function" ? setTimeout : void 0,
  D0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gf = typeof Promise == "function" ? Promise : void 0,
  F0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gf < "u"
        ? function (e) {
            return Gf.resolve(null).then(e).catch(B0);
          }
        : Ya;
function B0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Co(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Co(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Zf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2),
  wt = "__reactFiber$" + $r,
  Ro = "__reactProps$" + $r,
  At = "__reactContainer$" + $r,
  Ka = "__reactEvents$" + $r,
  V0 = "__reactListeners$" + $r,
  W0 = "__reactHandles$" + $r;
function kn(e) {
  var t = e[wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Zf(e); e !== null; ) {
          if ((n = e[wt])) return n;
          e = Zf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Uo(e) {
  return (
    (e = e[wt] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Os(e) {
  return e[Ro] || null;
}
var Xa = [],
  rr = -1;
function mn(e) {
  return { current: e };
}
function te(e) {
  0 > rr || ((e.current = Xa[rr]), (Xa[rr] = null), rr--);
}
function Z(e, t) {
  rr++, (Xa[rr] = e.current), (e.current = t);
}
var un = {},
  ke = mn(un),
  Ie = mn(!1),
  Tn = un;
function Sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function us() {
  te(Ie), te(ke);
}
function Jf(e, t, n) {
  if (ke.current !== un) throw Error($(168));
  Z(ke, t), Z(Ie, n);
}
function Dm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error($(108, Rg(e) || "Unknown", o));
  return ie({}, n, r);
}
function cs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (Tn = ke.current),
    Z(ke, e),
    Z(Ie, Ie.current),
    !0
  );
}
function ed(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n
    ? ((e = Dm(e, t, Tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ie),
      te(ke),
      Z(ke, e))
    : te(Ie),
    Z(Ie, n);
}
var Nt = null,
  Ls = !1,
  Ql = !1;
function Fm(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function H0(e) {
  (Ls = !0), Fm(e);
}
function hn() {
  if (!Ql && Nt !== null) {
    Ql = !0;
    var e = 0,
      t = K;
    try {
      var n = Nt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Ls = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), fm(Uu, hn), o);
    } finally {
      (K = t), (Ql = !1);
    }
  }
  return null;
}
var or = [],
  ir = 0,
  fs = null,
  ds = 0,
  Ke = [],
  Xe = 0,
  $n = null,
  jt = 1,
  Tt = "";
function Sn(e, t) {
  (or[ir++] = ds), (or[ir++] = fs), (fs = e), (ds = t);
}
function Bm(e, t, n) {
  (Ke[Xe++] = jt), (Ke[Xe++] = Tt), (Ke[Xe++] = $n), ($n = e);
  var r = jt;
  e = Tt;
  var o = 32 - ut(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ut(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (jt = (1 << (32 - ut(t) + o)) | (n << o) | r),
      (Tt = i + e);
  } else (jt = (1 << i) | (n << o) | r), (Tt = e);
}
function ec(e) {
  e.return !== null && (Sn(e, 1), Bm(e, 1, 0));
}
function tc(e) {
  for (; e === fs; )
    (fs = or[--ir]), (or[ir] = null), (ds = or[--ir]), (or[ir] = null);
  for (; e === $n; )
    ($n = Ke[--Xe]),
      (Ke[Xe] = null),
      (Tt = Ke[--Xe]),
      (Ke[Xe] = null),
      (jt = Ke[--Xe]),
      (Ke[Xe] = null);
}
var We = null,
  Be = null,
  ne = !1,
  lt = null;
function Vm(e, t) {
  var n = Ge(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function td(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (Be = nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $n !== null ? { id: jt, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ge(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ga(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Za(e) {
  if (ne) {
    var t = Be;
    if (t) {
      var n = t;
      if (!td(e, t)) {
        if (Ga(e)) throw Error($(418));
        t = nn(n.nextSibling);
        var r = We;
        t && td(e, t)
          ? Vm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (We = e));
      }
    } else {
      if (Ga(e)) throw Error($(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (We = e);
    }
  }
}
function nd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function xi(e) {
  if (e !== We) return !1;
  if (!ne) return nd(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qa(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Ga(e)) throw (Wm(), Error($(418)));
    for (; t; ) Vm(e, t), (t = nn(t.nextSibling));
  }
  if ((nd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = We ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Wm() {
  for (var e = Be; e; ) e = nn(e.nextSibling);
}
function xr() {
  (Be = We = null), (ne = !1);
}
function nc(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var U0 = Dt.ReactCurrentBatchConfig;
function Hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function Ci(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function rd(e) {
  var t = e._init;
  return t(e._payload);
}
function Hm(e) {
  function t(y, h) {
    if (e) {
      var m = y.deletions;
      m === null ? ((y.deletions = [h]), (y.flags |= 16)) : m.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function o(y, h) {
    return (y = ln(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, h, m) {
    return (
      (y.index = m),
      e
        ? ((m = y.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((y.flags |= 2), h) : m)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, h, m, g) {
    return h === null || h.tag !== 6
      ? ((h = Jl(m, y.mode, g)), (h.return = y), h)
      : ((h = o(h, m)), (h.return = y), h);
  }
  function a(y, h, m, g) {
    var C = m.type;
    return C === Zn
      ? d(y, h, m.props.children, g, m.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Qt &&
              rd(C) === h.type))
        ? ((g = o(h, m.props)), (g.ref = Hr(y, h, m)), (g.return = y), g)
        : ((g = Gi(m.type, m.key, m.props, null, y.mode, g)),
          (g.ref = Hr(y, h, m)),
          (g.return = y),
          g);
  }
  function u(y, h, m, g) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = ea(m, y.mode, g)), (h.return = y), h)
      : ((h = o(h, m.children || [])), (h.return = y), h);
  }
  function d(y, h, m, g, C) {
    return h === null || h.tag !== 7
      ? ((h = Nn(m, y.mode, g, C)), (h.return = y), h)
      : ((h = o(h, m)), (h.return = y), h);
  }
  function c(y, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Jl("" + h, y.mode, m)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case fi:
          return (
            (m = Gi(h.type, h.key, h.props, null, y.mode, m)),
            (m.ref = Hr(y, null, h)),
            (m.return = y),
            m
          );
        case Gn:
          return (h = ea(h, y.mode, m)), (h.return = y), h;
        case Qt:
          var g = h._init;
          return c(y, g(h._payload), m);
      }
      if (eo(h) || Dr(h))
        return (h = Nn(h, y.mode, m, null)), (h.return = y), h;
      Ci(y, h);
    }
    return null;
  }
  function f(y, h, m, g) {
    var C = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : l(y, h, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case fi:
          return m.key === C ? a(y, h, m, g) : null;
        case Gn:
          return m.key === C ? u(y, h, m, g) : null;
        case Qt:
          return (C = m._init), f(y, h, C(m._payload), g);
      }
      if (eo(m) || Dr(m)) return C !== null ? null : d(y, h, m, g, null);
      Ci(y, m);
    }
    return null;
  }
  function p(y, h, m, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (y = y.get(m) || null), l(h, y, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case fi:
          return (y = y.get(g.key === null ? m : g.key) || null), a(h, y, g, C);
        case Gn:
          return (y = y.get(g.key === null ? m : g.key) || null), u(h, y, g, C);
        case Qt:
          var E = g._init;
          return p(y, h, m, E(g._payload), C);
      }
      if (eo(g) || Dr(g)) return (y = y.get(m) || null), d(h, y, g, C, null);
      Ci(h, g);
    }
    return null;
  }
  function v(y, h, m, g) {
    for (
      var C = null, E = null, _ = h, k = (h = 0), R = null;
      _ !== null && k < m.length;
      k++
    ) {
      _.index > k ? ((R = _), (_ = null)) : (R = _.sibling);
      var P = f(y, _, m[k], g);
      if (P === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && P.alternate === null && t(y, _),
        (h = i(P, h, k)),
        E === null ? (C = P) : (E.sibling = P),
        (E = P),
        (_ = R);
    }
    if (k === m.length) return n(y, _), ne && Sn(y, k), C;
    if (_ === null) {
      for (; k < m.length; k++)
        (_ = c(y, m[k], g)),
          _ !== null &&
            ((h = i(_, h, k)), E === null ? (C = _) : (E.sibling = _), (E = _));
      return ne && Sn(y, k), C;
    }
    for (_ = r(y, _); k < m.length; k++)
      (R = p(_, y, k, m[k], g)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? k : R.key),
          (h = i(R, h, k)),
          E === null ? (C = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        _.forEach(function (j) {
          return t(y, j);
        }),
      ne && Sn(y, k),
      C
    );
  }
  function w(y, h, m, g) {
    var C = Dr(m);
    if (typeof C != "function") throw Error($(150));
    if (((m = C.call(m)), m == null)) throw Error($(151));
    for (
      var E = (C = null), _ = h, k = (h = 0), R = null, P = m.next();
      _ !== null && !P.done;
      k++, P = m.next()
    ) {
      _.index > k ? ((R = _), (_ = null)) : (R = _.sibling);
      var j = f(y, _, P.value, g);
      if (j === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && j.alternate === null && t(y, _),
        (h = i(j, h, k)),
        E === null ? (C = j) : (E.sibling = j),
        (E = j),
        (_ = R);
    }
    if (P.done) return n(y, _), ne && Sn(y, k), C;
    if (_ === null) {
      for (; !P.done; k++, P = m.next())
        (P = c(y, P.value, g)),
          P !== null &&
            ((h = i(P, h, k)), E === null ? (C = P) : (E.sibling = P), (E = P));
      return ne && Sn(y, k), C;
    }
    for (_ = r(y, _); !P.done; k++, P = m.next())
      (P = p(_, y, k, P.value, g)),
        P !== null &&
          (e && P.alternate !== null && _.delete(P.key === null ? k : P.key),
          (h = i(P, h, k)),
          E === null ? (C = P) : (E.sibling = P),
          (E = P));
    return (
      e &&
        _.forEach(function (M) {
          return t(y, M);
        }),
      ne && Sn(y, k),
      C
    );
  }
  function x(y, h, m, g) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Zn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case fi:
          e: {
            for (var C = m.key, E = h; E !== null; ) {
              if (E.key === C) {
                if (((C = m.type), C === Zn)) {
                  if (E.tag === 7) {
                    n(y, E.sibling),
                      (h = o(E, m.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Qt &&
                    rd(C) === E.type)
                ) {
                  n(y, E.sibling),
                    (h = o(E, m.props)),
                    (h.ref = Hr(y, E, m)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, E);
                break;
              } else t(y, E);
              E = E.sibling;
            }
            m.type === Zn
              ? ((h = Nn(m.props.children, y.mode, g, m.key)),
                (h.return = y),
                (y = h))
              : ((g = Gi(m.type, m.key, m.props, null, y.mode, g)),
                (g.ref = Hr(y, h, m)),
                (g.return = y),
                (y = g));
          }
          return s(y);
        case Gn:
          e: {
            for (E = m.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(y, h.sibling),
                    (h = o(h, m.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = ea(m, y.mode, g)), (h.return = y), (y = h);
          }
          return s(y);
        case Qt:
          return (E = m._init), x(y, h, E(m._payload), g);
      }
      if (eo(m)) return v(y, h, m, g);
      if (Dr(m)) return w(y, h, m, g);
      Ci(y, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = o(h, m)), (h.return = y), (y = h))
          : (n(y, h), (h = Jl(m, y.mode, g)), (h.return = y), (y = h)),
        s(y))
      : n(y, h);
  }
  return x;
}
var Cr = Hm(!0),
  Um = Hm(!1),
  ps = mn(null),
  ms = null,
  sr = null,
  rc = null;
function oc() {
  rc = sr = ms = null;
}
function ic(e) {
  var t = ps.current;
  te(ps), (e._currentValue = t);
}
function Ja(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mr(e, t) {
  (ms = e),
    (rc = sr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (rc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
      if (ms === null) throw Error($(308));
      (sr = e), (ms.dependencies = { lanes: 0, firstContext: e });
    } else sr = sr.next = e;
  return t;
}
var En = null;
function sc(e) {
  En === null ? (En = [e]) : En.push(e);
}
function Qm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), sc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function lc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), sc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function Ui(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qu(e, n);
  }
}
function od(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hs(e, t, n, r) {
  var o = e.updateQueue;
  qt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var c = o.baseState;
    (s = 0), (d = u = a = null), (l = i);
    do {
      var f = l.lane,
        p = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            w = l;
          switch (((f = t), (p = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                c = v.call(p, c, f);
                break e;
              }
              c = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (f = typeof v == "function" ? v.call(p, c, f) : v),
                f == null)
              )
                break e;
              c = ie({}, c, f);
              break e;
            case 2:
              qt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = p), (a = c)) : (d = d.next = p),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = c),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (An |= s), (e.lanes = s), (e.memoizedState = c);
  }
}
function id(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error($(191, o));
        o.call(r);
      }
    }
}
var Qo = {},
  Ct = mn(Qo),
  Po = mn(Qo),
  No = mn(Qo);
function _n(e) {
  if (e === Qo) throw Error($(174));
  return e;
}
function ac(e, t) {
  switch ((Z(No, t), Z(Po, e), Z(Ct, Qo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ma(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ma(t, e));
  }
  te(Ct), Z(Ct, t);
}
function br() {
  te(Ct), te(Po), te(No);
}
function Ym(e) {
  _n(No.current);
  var t = _n(Ct.current),
    n = Ma(t, e.type);
  t !== n && (Z(Po, e), Z(Ct, n));
}
function uc(e) {
  Po.current === e && (te(Ct), te(Po));
}
var re = mn(0);
function vs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function cc() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Qi = Dt.ReactCurrentDispatcher,
  Yl = Dt.ReactCurrentBatchConfig,
  Mn = 0,
  oe = null,
  fe = null,
  pe = null,
  ys = !1,
  uo = !1,
  jo = 0,
  Q0 = 0;
function xe() {
  throw Error($(321));
}
function fc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function dc(e, t, n, r, o, i) {
  if (
    ((Mn = i),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qi.current = e === null || e.memoizedState === null ? X0 : G0),
    (e = n(r, o)),
    uo)
  ) {
    i = 0;
    do {
      if (((uo = !1), (jo = 0), 25 <= i)) throw Error($(301));
      (i += 1),
        (pe = fe = null),
        (t.updateQueue = null),
        (Qi.current = Z0),
        (e = n(r, o));
    } while (uo);
  }
  if (
    ((Qi.current = gs),
    (t = fe !== null && fe.next !== null),
    (Mn = 0),
    (pe = fe = oe = null),
    (ys = !1),
    t)
  )
    throw Error($(300));
  return e;
}
function pc() {
  var e = jo !== 0;
  return (jo = 0), e;
}
function yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (oe.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function et() {
  if (fe === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = pe === null ? oe.memoizedState : pe.next;
  if (t !== null) (pe = t), (fe = e);
  else {
    if (e === null) throw Error($(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      pe === null ? (oe.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function To(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Kl(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = fe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((Mn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = c), (s = r)) : (a = a.next = c),
          (oe.lanes |= d),
          (An |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      dt(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (oe.lanes |= i), (An |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    dt(i, t.memoizedState) || (ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Km() {}
function Xm(e, t) {
  var n = oe,
    r = et(),
    o = t(),
    i = !dt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ze = !0)),
    (r = r.queue),
    mc(Jm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $o(9, Zm.bind(null, n, r, o, t), void 0, null),
      me === null)
    )
      throw Error($(349));
    Mn & 30 || Gm(n, t, o);
  }
  return o;
}
function Gm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), eh(t) && th(e);
}
function Jm(e, t, n) {
  return n(function () {
    eh(t) && th(e);
  });
}
function eh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function th(e) {
  var t = zt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function sd(e) {
  var t = yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: To,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = K0.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function $o(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nh() {
  return et().memoizedState;
}
function qi(e, t, n, r) {
  var o = yt();
  (oe.flags |= e),
    (o.memoizedState = $o(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ds(e, t, n, r) {
  var o = et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (fe !== null) {
    var s = fe.memoizedState;
    if (((i = s.destroy), r !== null && fc(r, s.deps))) {
      o.memoizedState = $o(t, n, i, r);
      return;
    }
  }
  (oe.flags |= e), (o.memoizedState = $o(1 | t, n, i, r));
}
function ld(e, t) {
  return qi(8390656, 8, e, t);
}
function mc(e, t) {
  return Ds(2048, 8, e, t);
}
function rh(e, t) {
  return Ds(4, 2, e, t);
}
function oh(e, t) {
  return Ds(4, 4, e, t);
}
function ih(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ds(4, 4, ih.bind(null, t, e), n)
  );
}
function hc() {}
function lh(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ah(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uh(e, t, n) {
  return Mn & 21
    ? (dt(n, t) || ((n = mm()), (oe.lanes |= n), (An |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function q0(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Yl.transition = r);
  }
}
function ch() {
  return et().memoizedState;
}
function Y0(e, t, n) {
  var r = sn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fh(e))
  )
    dh(t, n);
  else if (((n = Qm(e, t, n, r)), n !== null)) {
    var o = Pe();
    ct(n, e, r, o), ph(n, t, r);
  }
}
function K0(e, t, n) {
  var r = sn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fh(e)) dh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), dt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), sc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qm(e, t, o, r)),
      n !== null && ((o = Pe()), ct(n, e, r, o), ph(n, t, r));
  }
}
function fh(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function dh(e, t) {
  uo = ys = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ph(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qu(e, n);
  }
}
var gs = {
    readContext: Je,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  X0 = {
    readContext: Je,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: ld,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qi(4194308, 4, ih.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Y0.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sd,
    useDebugValue: hc,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = sd(!1),
        t = e[0];
      return (e = q0.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        o = yt();
      if (ne) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error($(349));
        Mn & 30 || Gm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ld(Jm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        $o(9, Zm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = me.identifierPrefix;
      if (ne) {
        var n = Tt,
          r = jt;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = jo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Q0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  G0 = {
    readContext: Je,
    useCallback: lh,
    useContext: Je,
    useEffect: mc,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: ah,
    useReducer: Kl,
    useRef: nh,
    useState: function () {
      return Kl(To);
    },
    useDebugValue: hc,
    useDeferredValue: function (e) {
      var t = et();
      return uh(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Kl(To)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Km,
    useSyncExternalStore: Xm,
    useId: ch,
    unstable_isNewReconciler: !1,
  },
  Z0 = {
    readContext: Je,
    useCallback: lh,
    useContext: Je,
    useEffect: mc,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: ah,
    useReducer: Xl,
    useRef: nh,
    useState: function () {
      return Xl(To);
    },
    useDebugValue: hc,
    useDeferredValue: function (e) {
      var t = et();
      return fe === null ? (t.memoizedState = e) : uh(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(To)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Km,
    useSyncExternalStore: Xm,
    useId: ch,
    unstable_isNewReconciler: !1,
  };
function it(e, t) {
  if (e && e.defaultProps) {
    (t = ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Fs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = sn(e),
      i = $t(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = rn(e, i, o)),
      t !== null && (ct(t, e, o, r), Ui(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = sn(e),
      i = $t(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = rn(e, i, o)),
      t !== null && (ct(t, e, o, r), Ui(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = sn(e),
      o = $t(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = rn(e, o, r)),
      t !== null && (ct(t, e, r, n), Ui(t, e, r));
  },
};
function ad(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ko(n, r) || !ko(o, i)
        : !0
  );
}
function mh(e, t, n) {
  var r = !1,
    o = un,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Je(i))
      : ((o = Oe(t) ? Tn : ke.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Sr(e, o) : un)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ud(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fs.enqueueReplaceState(t, t.state, null);
}
function tu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), lc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Je(i))
    : ((i = Oe(t) ? Tn : ke.current), (o.context = Sr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (eu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Fs.enqueueReplaceState(o, o.state, null),
      hs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _g(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function nu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var J0 = typeof WeakMap == "function" ? WeakMap : Map;
function hh(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ss || ((Ss = !0), (du = r)), nu(e, t);
    }),
    n
  );
}
function vh(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        nu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        nu(e, t),
          typeof r != "function" &&
            (on === null ? (on = new Set([this])) : on.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function cd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new J0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = p1.bind(null, e, t, n)), t.then(e, e));
}
function fd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $t(-1, 1)), (t.tag = 2), rn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var e1 = Dt.ReactCurrentOwner,
  ze = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Um(t, null, n, r) : Cr(t, e.child, n, r);
}
function pd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    mr(t, o),
    (r = dc(e, t, n, r, i, o)),
    (n = pc()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        It(e, t, o))
      : (ne && n && ec(t), (t.flags |= 1), Ee(e, t, r, o), t.child)
  );
}
function md(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !bc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), yh(e, t, i, r, o))
      : ((e = Gi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ko), n(s, r) && e.ref === t.ref)
    )
      return It(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ln(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ko(i, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), It(e, t, o);
  }
  return ru(e, t, n, r, o);
}
function gh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(ar, Fe),
        (Fe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(ar, Fe),
          (Fe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Z(ar, Fe),
        (Fe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(ar, Fe),
      (Fe |= r);
  return Ee(e, t, o, n), t.child;
}
function wh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ru(e, t, n, r, o) {
  var i = Oe(n) ? Tn : ke.current;
  return (
    (i = Sr(t, i)),
    mr(t, o),
    (n = dc(e, t, n, r, i, o)),
    (r = pc()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        It(e, t, o))
      : (ne && r && ec(t), (t.flags |= 1), Ee(e, t, n, o), t.child)
  );
}
function hd(e, t, n, r, o) {
  if (Oe(n)) {
    var i = !0;
    cs(t);
  } else i = !1;
  if ((mr(t, o), t.stateNode === null))
    Yi(e, t), mh(t, n, r), tu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Je(u))
      : ((u = Oe(n) ? Tn : ke.current), (u = Sr(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && ud(t, s, r, u)),
      (qt = !1);
    var f = t.memoizedState;
    (s.state = f),
      hs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || Ie.current || qt
        ? (typeof d == "function" && (eu(t, n, d, r), (a = t.memoizedState)),
          (l = qt || ad(t, n, l, r, f, a, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      qm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : it(t.type, l)),
      (s.props = u),
      (c = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Je(a))
        : ((a = Oe(n) ? Tn : ke.current), (a = Sr(t, a)));
    var p = n.getDerivedStateFromProps;
    (d =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== c || f !== a) && ud(t, s, r, a)),
      (qt = !1),
      (f = t.memoizedState),
      (s.state = f),
      hs(t, r, s, o);
    var v = t.memoizedState;
    l !== c || f !== v || Ie.current || qt
      ? (typeof p == "function" && (eu(t, n, p, r), (v = t.memoizedState)),
        (u = qt || ad(t, n, u, r, f, v, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ou(e, t, n, r, i, o);
}
function ou(e, t, n, r, o, i) {
  wh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && ed(t, n, !1), It(e, t, i);
  (r = t.stateNode), (e1.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Cr(t, e.child, null, i)), (t.child = Cr(t, null, l, i)))
      : Ee(e, t, l, i),
    (t.memoizedState = r.state),
    o && ed(t, n, !0),
    t.child
  );
}
function Sh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Jf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jf(e, t.context, !1),
    ac(e, t.containerInfo);
}
function vd(e, t, n, r, o) {
  return xr(), nc(o), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
function su(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xh(e, t, n) {
  var r = t.pendingProps,
    o = re.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Z(re, o & 1),
    e === null)
  )
    return (
      Za(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ws(s, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = su(n)),
              (t.memoizedState = iu),
              e)
            : vc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return t1(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = ln(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = ln(l, i)) : ((i = Nn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? su(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = iu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ln(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vc(e, t) {
  return (
    (t = Ws({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function bi(e, t, n, r) {
  return (
    r !== null && nc(r),
    Cr(t, e.child, null, n),
    (e = vc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function t1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gl(Error($(422)))), bi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ws({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Nn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Cr(t, e.child, null, s),
          (t.child.memoizedState = su(s)),
          (t.memoizedState = iu),
          i);
  if (!(t.mode & 1)) return bi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error($(419))), (r = Gl(i, r, void 0)), bi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), ze || l)) {
    if (((r = me), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), zt(e, o), ct(r, e, o, -1));
    }
    return Cc(), (r = Gl(Error($(421)))), bi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = m1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Be = nn(o.nextSibling)),
      (We = t),
      (ne = !0),
      (lt = null),
      e !== null &&
        ((Ke[Xe++] = jt),
        (Ke[Xe++] = Tt),
        (Ke[Xe++] = $n),
        (jt = e.id),
        (Tt = e.overflow),
        ($n = t)),
      (t = vc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ja(e.return, t, n);
}
function Zl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Ch(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ee(e, t, r.children, n), (r = re.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yd(e, n, t);
        else if (e.tag === 19) yd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Z(re, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && vs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Zl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && vs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Zl(t, !0, n, null, i);
        break;
      case "together":
        Zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function It(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (An |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function n1(e, t, n) {
  switch (t.tag) {
    case 3:
      Sh(t), xr();
      break;
    case 5:
      Ym(t);
      break;
    case 1:
      Oe(t.type) && cs(t);
      break;
    case 4:
      ac(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Z(ps, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(re, re.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? xh(e, t, n)
            : (Z(re, re.current & 1),
              (e = It(e, t, n)),
              e !== null ? e.sibling : null);
      Z(re, re.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ch(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Z(re, re.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gh(e, t, n);
  }
  return It(e, t, n);
}
var bh, lu, kh, Eh;
bh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
lu = function () {};
kh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), _n(Ct.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Na(e, o)), (r = Na(e, r)), (i = []);
        break;
      case "select":
        (o = ie({}, o, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = $a(e, o)), (r = $a(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = as);
    }
    Aa(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (yo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (yo.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && ee("scroll", e),
                    i || l === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Eh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ur(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function r1(e, t, n) {
  var r = t.pendingProps;
  switch ((tc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ce(t), null;
    case 1:
      return Oe(t.type) && us(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        br(),
        te(Ie),
        te(ke),
        cc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (hu(lt), (lt = null)))),
        lu(e, t),
        Ce(t),
        null
      );
    case 5:
      uc(t);
      var o = _n(No.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Ce(t), null;
        }
        if (((e = _n(Ct.current)), xi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[wt] = t), (r[Ro] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < no.length; o++) ee(no[o], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              _f(r, i), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Pf(r, i), ee("invalid", r);
          }
          Aa(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Si(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Si(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : yo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              di(r), Rf(r, i, !0);
              break;
            case "textarea":
              di(r), Nf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = as);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[wt] = t),
            (e[Ro] = r),
            bh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = za(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < no.length; o++) ee(no[o], e);
                o = r;
                break;
              case "source":
                ee("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (o = r);
                break;
              case "details":
                ee("toggle", e), (o = r);
                break;
              case "input":
                _f(e, r), (o = Na(e, r)), ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ie({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Pf(e, r), (o = $a(e, r)), ee("invalid", e);
                break;
              default:
                o = r;
            }
            Aa(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? nm(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && em(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && go(e, a)
                        : typeof a == "number" && go(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (yo.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && ee("scroll", e)
                          : a != null && Fu(e, i, a, s));
              }
            switch (n) {
              case "input":
                di(e), Rf(e, r, !1);
                break;
              case "textarea":
                di(e), Nf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? cr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      cr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = as);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Eh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (((n = _n(No.current)), _n(Ct.current), xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wt] = t),
            (i = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                Si(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Si(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wt] = t),
            (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if (
        (te(re),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Be !== null && t.mode & 1 && !(t.flags & 128))
          Wm(), xr(), (t.flags |= 98560), (i = !1);
        else if (((i = xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error($(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error($(317));
            i[wt] = t;
          } else
            xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (i = !1);
        } else lt !== null && (hu(lt), (lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || re.current & 1 ? de === 0 && (de = 3) : Cc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return (
        br(), lu(e, t), e === null && Eo(t.stateNode.containerInfo), Ce(t), null
      );
    case 10:
      return ic(t.type._context), Ce(t), null;
    case 17:
      return Oe(t.type) && us(), Ce(t), null;
    case 19:
      if ((te(re), (i = t.memoizedState), i === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Ur(i, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = vs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ur(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(re, (re.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            le() > Er &&
            ((t.flags |= 128), (r = !0), Ur(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ur(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ne)
            )
              return Ce(t), null;
          } else
            2 * le() - i.renderingStartTime > Er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ur(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = le()),
          (t.sibling = null),
          (n = re.current),
          Z(re, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        xc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function o1(e, t) {
  switch ((tc(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && us(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        br(),
        te(Ie),
        te(ke),
        cc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return uc(t), null;
    case 13:
      if (
        (te(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error($(340));
        xr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(re), null;
    case 4:
      return br(), null;
    case 10:
      return ic(t.type._context), null;
    case 22:
    case 23:
      return xc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ki = !1,
  be = !1,
  i1 = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function au(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var gd = !1;
function s1(e, t) {
  if (((Ua = is), (e = jm()), Ju(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              c !== n || (o !== 0 && c.nodeType !== 3) || (l = s + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (a = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (p = c.firstChild) !== null;

            )
              (f = c), (c = p);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === o && (l = s),
                f === i && ++d === r && (a = s),
                (p = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = p;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qa = { focusedElem: e, selectionRange: n }, is = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    x = v.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : it(t.type, w),
                      x,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (g) {
          se(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (v = gd), (gd = !1), v;
}
function co(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && au(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Bs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _h(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _h(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wt], delete t[Ro], delete t[Ka], delete t[V0], delete t[W0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = as));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
}
function fu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fu(e, t, n), e = e.sibling; e !== null; ) fu(e, t, n), (e = e.sibling);
}
var ve = null,
  st = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) Ph(e, t, n), (n = n.sibling);
}
function Ph(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function")
    try {
      xt.onCommitFiberUnmount(Ms, n);
    } catch {}
  switch (n.tag) {
    case 5:
      be || lr(n, t);
    case 6:
      var r = ve,
        o = st;
      (ve = null),
        Wt(e, t, n),
        (ve = r),
        (st = o),
        ve !== null &&
          (st
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null &&
        (st
          ? ((e = ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, n)
              : e.nodeType === 1 && Ul(e, n),
            Co(e))
          : Ul(ve, n.stateNode));
      break;
    case 4:
      (r = ve),
        (o = st),
        (ve = n.stateNode.containerInfo),
        (st = !0),
        Wt(e, t, n),
        (ve = r),
        (st = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && au(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (
        !be &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          se(n, t, l);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((be = (r = be) || n.memoizedState !== null), Wt(e, t, n), (be = r))
        : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function Sd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new i1()),
      t.forEach(function (r) {
        var o = h1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ve = l.stateNode), (st = !1);
              break e;
            case 3:
              (ve = l.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (ve = l.stateNode.containerInfo), (st = !0);
              break e;
          }
          l = l.return;
        }
        if (ve === null) throw Error($(160));
        Ph(i, s, o), (ve = null), (st = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nh(t, e), (t = t.sibling);
}
function Nh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), vt(e), r & 4)) {
        try {
          co(3, e, e.return), Bs(3, e);
        } catch (w) {
          se(e, e.return, w);
        }
        try {
          co(5, e, e.return);
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 1:
      ot(t, e), vt(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        vt(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          go(o, "");
        } catch (w) {
          se(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Gp(o, i),
              za(l, s);
            var u = za(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                c = a[s + 1];
              d === "style"
                ? nm(o, c)
                : d === "dangerouslySetInnerHTML"
                  ? em(o, c)
                  : d === "children"
                    ? go(o, c)
                    : Fu(o, d, c, u);
            }
            switch (l) {
              case "input":
                ja(o, i);
                break;
              case "textarea":
                Zp(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? cr(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? cr(o, !!i.multiple, i.defaultValue, !0)
                      : cr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ro] = i;
          } catch (w) {
            se(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ot(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error($(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Co(t.containerInfo);
        } catch (w) {
          se(e, e.return, w);
        }
      break;
    case 4:
      ot(t, e), vt(e);
      break;
    case 13:
      ot(t, e),
        vt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (wc = le())),
        r & 4 && Sd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((be = (u = be) || d), ot(t, e), (be = u)) : ot(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (z = e, d = e.child; d !== null; ) {
            for (c = z = d; z !== null; ) {
              switch (((f = z), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  co(4, f, f.return);
                  break;
                case 1:
                  lr(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      se(r, n, w);
                    }
                  }
                  break;
                case 5:
                  lr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Cd(c);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (z = p)) : Cd(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = c.stateNode),
                      (a = c.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = tm("display", s)));
              } catch (w) {
                se(e, e.return, w);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (w) {
                se(e, e.return, w);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), vt(e), r & 4 && Sd(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (go(o, ""), (r.flags &= -33));
          var i = wd(e);
          fu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = wd(e);
          cu(e, l, s);
          break;
        default:
          throw Error($(161));
      }
    } catch (a) {
      se(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function l1(e, t, n) {
  (z = e), jh(e);
}
function jh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ki;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || be;
        l = ki;
        var u = be;
        if (((ki = s), (be = a) && !u))
          for (z = o; z !== null; )
            (s = z),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? bd(o)
                : a !== null
                  ? ((a.return = s), (z = a))
                  : bd(o);
        for (; i !== null; ) (z = i), jh(i), (i = i.sibling);
        (z = o), (ki = l), (be = u);
      }
      xd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : xd(e);
  }
}
function xd(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              be || Bs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !be)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && id(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                id(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && Co(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error($(163));
          }
        be || (t.flags & 512 && uu(t));
      } catch (f) {
        se(t, t.return, f);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Cd(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function bd(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bs(4, t);
          } catch (a) {
            se(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              se(t, o, a);
            }
          }
          var i = t.return;
          try {
            uu(t);
          } catch (a) {
            se(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            uu(t);
          } catch (a) {
            se(t, s, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
    }
    if (t === e) {
      z = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (z = l);
      break;
    }
    z = t.return;
  }
}
var a1 = Math.ceil,
  ws = Dt.ReactCurrentDispatcher,
  yc = Dt.ReactCurrentOwner,
  Ze = Dt.ReactCurrentBatchConfig,
  q = 0,
  me = null,
  ue = null,
  ge = 0,
  Fe = 0,
  ar = mn(0),
  de = 0,
  Mo = null,
  An = 0,
  Vs = 0,
  gc = 0,
  fo = null,
  Ae = null,
  wc = 0,
  Er = 1 / 0,
  Rt = null,
  Ss = !1,
  du = null,
  on = null,
  Ei = !1,
  Gt = null,
  xs = 0,
  po = 0,
  pu = null,
  Ki = -1,
  Xi = 0;
function Pe() {
  return q & 6 ? le() : Ki !== -1 ? Ki : (Ki = le());
}
function sn(e) {
  return e.mode & 1
    ? q & 2 && ge !== 0
      ? ge & -ge
      : U0.transition !== null
        ? (Xi === 0 && (Xi = mm()), Xi)
        : ((e = K),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xm(e.type))),
          e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < po) throw ((po = 0), (pu = null), Error($(185)));
  Wo(e, n, r),
    (!(q & 2) || e !== me) &&
      (e === me && (!(q & 2) && (Vs |= n), de === 4 && Kt(e, ge)),
      Le(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((Er = le() + 500), Ls && hn()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Ug(e, t);
  var r = os(e, e === me ? ge : 0);
  if (r === 0)
    n !== null && $f(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $f(n), t === 1))
      e.tag === 0 ? H0(kd.bind(null, e)) : Fm(kd.bind(null, e)),
        F0(function () {
          !(q & 6) && hn();
        }),
        (n = null);
    else {
      switch (hm(r)) {
        case 1:
          n = Uu;
          break;
        case 4:
          n = dm;
          break;
        case 16:
          n = rs;
          break;
        case 536870912:
          n = pm;
          break;
        default:
          n = rs;
      }
      n = Lh(n, Th.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Th(e, t) {
  if (((Ki = -1), (Xi = 0), q & 6)) throw Error($(327));
  var n = e.callbackNode;
  if (hr() && e.callbackNode !== n) return null;
  var r = os(e, e === me ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var i = Mh();
    (me !== e || ge !== t) && ((Rt = null), (Er = le() + 500), Pn(e, t));
    do
      try {
        f1();
        break;
      } catch (l) {
        $h(e, l);
      }
    while (!0);
    oc(),
      (ws.current = i),
      (q = o),
      ue !== null ? (t = 0) : ((me = null), (ge = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Fa(e)), o !== 0 && ((r = o), (t = mu(e, o)))), t === 1)
    )
      throw ((n = Mo), Pn(e, 0), Kt(e, r), Le(e, le()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !u1(o) &&
          ((t = Cs(e, r)),
          t === 2 && ((i = Fa(e)), i !== 0 && ((r = i), (t = mu(e, i)))),
          t === 1))
      )
        throw ((n = Mo), Pn(e, 0), Kt(e, r), Le(e, le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          xn(e, Ae, Rt);
          break;
        case 3:
          if (
            (Kt(e, r), (r & 130023424) === r && ((t = wc + 500 - le()), 10 < t))
          ) {
            if (os(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ya(xn.bind(null, e, Ae, Rt), t);
            break;
          }
          xn(e, Ae, Rt);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - ut(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * a1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ya(xn.bind(null, e, Ae, Rt), r);
            break;
          }
          xn(e, Ae, Rt);
          break;
        case 5:
          xn(e, Ae, Rt);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return Le(e, le()), e.callbackNode === n ? Th.bind(null, e) : null;
}
function mu(e, t) {
  var n = fo;
  return (
    e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && hu(t)),
    e
  );
}
function hu(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function u1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!dt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Kt(e, t) {
  for (
    t &= ~gc,
      t &= ~Vs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function kd(e) {
  if (q & 6) throw Error($(327));
  hr();
  var t = os(e, 0);
  if (!(t & 1)) return Le(e, le()), null;
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fa(e);
    r !== 0 && ((t = r), (n = mu(e, r)));
  }
  if (n === 1) throw ((n = Mo), Pn(e, 0), Kt(e, t), Le(e, le()), n);
  if (n === 6) throw Error($(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, Ae, Rt),
    Le(e, le()),
    null
  );
}
function Sc(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((Er = le() + 500), Ls && hn());
  }
}
function zn(e) {
  Gt !== null && Gt.tag === 0 && !(q & 6) && hr();
  var t = q;
  q |= 1;
  var n = Ze.transition,
    r = K;
  try {
    if (((Ze.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (Ze.transition = n), (q = t), !(q & 6) && hn();
  }
}
function xc() {
  (Fe = ar.current), te(ar);
}
function Pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), D0(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((tc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && us();
          break;
        case 3:
          br(), te(Ie), te(ke), cc();
          break;
        case 5:
          uc(r);
          break;
        case 4:
          br();
          break;
        case 13:
          te(re);
          break;
        case 19:
          te(re);
          break;
        case 10:
          ic(r.type._context);
          break;
        case 22:
        case 23:
          xc();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (ue = e = ln(e.current, null)),
    (ge = Fe = t),
    (de = 0),
    (Mo = null),
    (gc = Vs = An = 0),
    (Ae = fo = null),
    En !== null)
  ) {
    for (t = 0; t < En.length; t++)
      if (((n = En[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    En = null;
  }
  return e;
}
function $h(e, t) {
  do {
    var n = ue;
    try {
      if ((oc(), (Qi.current = gs), ys)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ys = !1;
      }
      if (
        ((Mn = 0),
        (pe = fe = oe = null),
        (uo = !1),
        (jo = 0),
        (yc.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (Mo = t), (ue = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ge),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = fd(s);
          if (p !== null) {
            (p.flags &= -257),
              dd(p, s, l, i, t),
              p.mode & 1 && cd(i, u, t),
              (t = p),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              cd(i, u, t), Cc();
              break e;
            }
            a = Error($(426));
          }
        } else if (ne && l.mode & 1) {
          var x = fd(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              dd(x, s, l, i, t),
              nc(kr(a, l));
            break e;
          }
        }
        (i = a = kr(a, l)),
          de !== 4 && (de = 2),
          fo === null ? (fo = [i]) : fo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = hh(i, a, t);
              od(i, y);
              break e;
            case 1:
              l = a;
              var h = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (on === null || !on.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = vh(i, l, t);
                od(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zh(n);
    } catch (C) {
      (t = C), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mh() {
  var e = ws.current;
  return (ws.current = gs), e === null ? gs : e;
}
function Cc() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    me === null || (!(An & 268435455) && !(Vs & 268435455)) || Kt(me, ge);
}
function Cs(e, t) {
  var n = q;
  q |= 2;
  var r = Mh();
  (me !== e || ge !== t) && ((Rt = null), Pn(e, t));
  do
    try {
      c1();
      break;
    } catch (o) {
      $h(e, o);
    }
  while (!0);
  if ((oc(), (q = n), (ws.current = r), ue !== null)) throw Error($(261));
  return (me = null), (ge = 0), de;
}
function c1() {
  for (; ue !== null; ) Ah(ue);
}
function f1() {
  for (; ue !== null && !Ig(); ) Ah(ue);
}
function Ah(e) {
  var t = Oh(e.alternate, e, Fe);
  (e.memoizedProps = e.pendingProps),
    t === null ? zh(e) : (ue = t),
    (yc.current = null);
}
function zh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = o1(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (ue = null);
        return;
      }
    } else if (((n = r1(n, t, Fe)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function xn(e, t, n) {
  var r = K,
    o = Ze.transition;
  try {
    (Ze.transition = null), (K = 1), d1(e, t, n, r);
  } finally {
    (Ze.transition = o), (K = r);
  }
  return null;
}
function d1(e, t, n, r) {
  do hr();
  while (Gt !== null);
  if (q & 6) throw Error($(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error($(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Qg(e, i),
    e === me && ((ue = me = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ei ||
      ((Ei = !0),
      Lh(rs, function () {
        return hr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ze.transition), (Ze.transition = null);
    var s = K;
    K = 1;
    var l = q;
    (q |= 4),
      (yc.current = null),
      s1(e, n),
      Nh(n, e),
      $0(Qa),
      (is = !!Ua),
      (Qa = Ua = null),
      (e.current = n),
      l1(n),
      Og(),
      (q = l),
      (K = s),
      (Ze.transition = i);
  } else e.current = n;
  if (
    (Ei && ((Ei = !1), (Gt = e), (xs = o)),
    (i = e.pendingLanes),
    i === 0 && (on = null),
    Fg(n.stateNode),
    Le(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ss) throw ((Ss = !1), (e = du), (du = null), e);
  return (
    xs & 1 && e.tag !== 0 && hr(),
    (i = e.pendingLanes),
    i & 1 ? (e === pu ? po++ : ((po = 0), (pu = e))) : (po = 0),
    hn(),
    null
  );
}
function hr() {
  if (Gt !== null) {
    var e = hm(xs),
      t = Ze.transition,
      n = K;
    try {
      if (((Ze.transition = null), (K = 16 > e ? 16 : e), Gt === null))
        var r = !1;
      else {
        if (((e = Gt), (Gt = null), (xs = 0), q & 6)) throw Error($(331));
        var o = q;
        for (q |= 4, z = e.current; z !== null; ) {
          var i = z,
            s = i.child;
          if (z.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (z = u; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      co(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (z = c);
                  else
                    for (; z !== null; ) {
                      d = z;
                      var f = d.sibling,
                        p = d.return;
                      if ((_h(d), d === u)) {
                        z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (z = f);
                        break;
                      }
                      z = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (z = s);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    co(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (z = y);
                break e;
              }
              z = i.return;
            }
        }
        var h = e.current;
        for (z = h; z !== null; ) {
          s = z;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (z = m);
          else
            e: for (s = h; z !== null; ) {
              if (((l = z), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bs(9, l);
                  }
                } catch (C) {
                  se(l, l.return, C);
                }
              if (l === s) {
                z = null;
                break e;
              }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (z = g);
                break e;
              }
              z = l.return;
            }
        }
        if (
          ((q = o), hn(), xt && typeof xt.onPostCommitFiberRoot == "function")
        )
          try {
            xt.onPostCommitFiberRoot(Ms, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (Ze.transition = t);
    }
  }
  return !1;
}
function Ed(e, t, n) {
  (t = kr(n, t)),
    (t = hh(e, t, 1)),
    (e = rn(e, t, 1)),
    (t = Pe()),
    e !== null && (Wo(e, 1, t), Le(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Ed(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (on === null || !on.has(r)))
        ) {
          (e = kr(n, e)),
            (e = vh(t, e, 1)),
            (t = rn(t, e, 1)),
            (e = Pe()),
            t !== null && (Wo(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function p1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (ge & n) === n &&
      (de === 4 || (de === 3 && (ge & 130023424) === ge && 500 > le() - wc)
        ? Pn(e, 0)
        : (gc |= n)),
    Le(e, t);
}
function Ih(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hi), (hi <<= 1), !(hi & 130023424) && (hi = 4194304))
      : (t = 1));
  var n = Pe();
  (e = zt(e, t)), e !== null && (Wo(e, t, n), Le(e, n));
}
function m1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ih(e, n);
}
function h1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), Ih(e, n);
}
var Oh;
Oh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), n1(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), ne && t.flags & 1048576 && Bm(t, ds, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yi(e, t), (e = t.pendingProps);
      var o = Sr(t, ke.current);
      mr(t, n), (o = dc(null, t, r, e, o, n));
      var i = pc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((i = !0), cs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            lc(t),
            (o.updater = Fs),
            (t.stateNode = o),
            (o._reactInternals = t),
            tu(t, r, e, n),
            (t = ou(null, t, r, !0, i, n)))
          : ((t.tag = 0), ne && i && ec(t), Ee(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = y1(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = ru(null, t, r, e, n);
            break e;
          case 1:
            t = hd(null, t, r, e, n);
            break e;
          case 11:
            t = pd(null, t, r, e, n);
            break e;
          case 14:
            t = md(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        ru(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        hd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Sh(t), e === null)) throw Error($(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          qm(e, t),
          hs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = kr(Error($(423)), t)), (t = vd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = kr(Error($(424)), t)), (t = vd(e, t, r, n, o));
            break e;
          } else
            for (
              Be = nn(t.stateNode.containerInfo.firstChild),
                We = t,
                ne = !0,
                lt = null,
                n = Um(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((xr(), r === o)) {
            t = It(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ym(t),
        e === null && Za(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        qa(r, o) ? (s = null) : i !== null && qa(r, i) && (t.flags |= 32),
        wh(e, t),
        Ee(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Za(t), null;
    case 13:
      return xh(e, t, n);
    case 4:
      return (
        ac(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cr(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        pd(e, t, r, o, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Z(ps, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (dt(i.value, s)) {
            if (i.children === o.children && !Ie.current) {
              t = It(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = $t(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ja(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error($(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Ja(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ee(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        mr(t, n),
        (o = Je(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        md(e, t, r, o, n)
      );
    case 15:
      return yh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Yi(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), cs(t)) : (e = !1),
        mr(t, n),
        mh(t, r, o),
        tu(t, r, o, n),
        ou(null, t, r, !0, e, n)
      );
    case 19:
      return Ch(e, t, n);
    case 22:
      return gh(e, t, n);
  }
  throw Error($(156, t.tag));
};
function Lh(e, t) {
  return fm(e, t);
}
function v1(e, t, n, r) {
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
    (this.ref = null),
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
function Ge(e, t, n, r) {
  return new v1(e, t, n, r);
}
function bc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function y1(e) {
  if (typeof e == "function") return bc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vu)) return 11;
    if (e === Wu) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ge(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) bc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Zn:
        return Nn(n.children, o, i, t);
      case Bu:
        (s = 8), (o |= 8);
        break;
      case Ea:
        return (
          (e = Ge(12, n, t, o | 2)), (e.elementType = Ea), (e.lanes = i), e
        );
      case _a:
        return (e = Ge(13, n, t, o)), (e.elementType = _a), (e.lanes = i), e;
      case Ra:
        return (e = Ge(19, n, t, o)), (e.elementType = Ra), (e.lanes = i), e;
      case Yp:
        return Ws(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qp:
              s = 10;
              break e;
            case qp:
              s = 9;
              break e;
            case Vu:
              s = 11;
              break e;
            case Wu:
              s = 14;
              break e;
            case Qt:
              (s = 16), (r = null);
              break e;
          }
        throw Error($(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ge(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Nn(e, t, n, r) {
  return (e = Ge(7, e, r, t)), (e.lanes = n), e;
}
function Ws(e, t, n, r) {
  return (
    (e = Ge(22, e, r, t)),
    (e.elementType = Yp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Jl(e, t, n) {
  return (e = Ge(6, e, null, t)), (e.lanes = n), e;
}
function ea(e, t, n) {
  return (
    (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function g1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function kc(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new g1(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ge(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    lc(i),
    e
  );
}
function w1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dh(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return Dm(e, n, t);
  }
  return t;
}
function Fh(e, t, n, r, o, i, s, l, a) {
  return (
    (e = kc(n, r, !0, e, o, i, s, l, a)),
    (e.context = Dh(null)),
    (n = e.current),
    (r = Pe()),
    (o = sn(n)),
    (i = $t(r, o)),
    (i.callback = t ?? null),
    rn(n, i, o),
    (e.current.lanes = o),
    Wo(e, o, r),
    Le(e, r),
    e
  );
}
function Hs(e, t, n, r) {
  var o = t.current,
    i = Pe(),
    s = sn(o);
  return (
    (n = Dh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = rn(o, t, s)),
    e !== null && (ct(e, o, s, i), Ui(e, o, s)),
    s
  );
}
function bs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _d(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ec(e, t) {
  _d(e, t), (e = e.alternate) && _d(e, t);
}
function S1() {
  return null;
}
var Bh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _c(e) {
  this._internalRoot = e;
}
Us.prototype.render = _c.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Hs(e, t, null, null);
};
Us.prototype.unmount = _c.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function () {
      Hs(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function Us(e) {
  this._internalRoot = e;
}
Us.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
    Yt.splice(n, 0, e), n === 0 && Sm(e);
  }
};
function Rc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Rd() {}
function x1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = bs(s);
        i.call(u);
      };
    }
    var s = Fh(t, r, e, 0, null, !1, !1, "", Rd);
    return (
      (e._reactRootContainer = s),
      (e[At] = s.current),
      Eo(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = bs(a);
      l.call(u);
    };
  }
  var a = kc(e, 0, !1, null, null, !1, !1, "", Rd);
  return (
    (e._reactRootContainer = a),
    (e[At] = a.current),
    Eo(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      Hs(t, a, n, r);
    }),
    a
  );
}
function qs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = bs(s);
        l.call(a);
      };
    }
    Hs(t, s, e, o);
  } else s = x1(n, t, e, o, r);
  return bs(s);
}
vm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = to(t.pendingLanes);
        n !== 0 &&
          (Qu(t, n | 1), Le(t, le()), !(q & 6) && ((Er = le() + 500), hn()));
      }
      break;
    case 13:
      zn(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var o = Pe();
          ct(r, e, 1, o);
        }
      }),
        Ec(e, 1);
  }
};
qu = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      ct(t, e, 134217728, n);
    }
    Ec(e, 134217728);
  }
};
ym = function (e) {
  if (e.tag === 13) {
    var t = sn(e),
      n = zt(e, t);
    if (n !== null) {
      var r = Pe();
      ct(n, e, t, r);
    }
    Ec(e, t);
  }
};
gm = function () {
  return K;
};
wm = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Oa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ja(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Os(r);
            if (!o) throw Error($(90));
            Xp(r), ja(r, o);
          }
        }
      }
      break;
    case "textarea":
      Zp(e, n);
      break;
    case "select":
      (t = n.value), t != null && cr(e, !!n.multiple, t, !1);
  }
};
im = Sc;
sm = zn;
var C1 = { usingClientEntryPoint: !1, Events: [Uo, nr, Os, rm, om, Sc] },
  Qr = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  b1 = {
    bundleType: Qr.bundleType,
    version: Qr.version,
    rendererPackageName: Qr.rendererPackageName,
    rendererConfig: Qr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = um(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qr.findFiberByHostInstance || S1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_i.isDisabled && _i.supportsFiber)
    try {
      (Ms = _i.inject(b1)), (xt = _i);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C1;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rc(t)) throw Error($(200));
  return w1(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!Rc(e)) throw Error($(299));
  var n = !1,
    r = "",
    o = Bh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = kc(e, 1, !1, null, null, n, !1, r, o)),
    (e[At] = t.current),
    Eo(e.nodeType === 8 ? e.parentNode : e),
    new _c(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error($(188))
      : ((e = Object.keys(e).join(",")), Error($(268, e)));
  return (e = um(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return zn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Qs(t)) throw Error($(200));
  return qs(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!Rc(e)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Bh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Fh(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[At] = t.current),
    Eo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Us(t);
};
Qe.render = function (e, t, n) {
  if (!Qs(t)) throw Error($(200));
  return qs(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Qs(e)) throw Error($(40));
  return e._reactRootContainer
    ? (zn(function () {
        qs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = Sc;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qs(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return qs(e, t, n, !1, r);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function Vh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vh);
    } catch (e) {
      console.error(e);
    }
}
Vh(), (Vp.exports = Qe);
var Ys = Vp.exports;
const k1 = jp(Ys);
var Wh,
  Pd = Ys;
(Wh = Pd.createRoot), Pd.hydrateRoot;
var Hh = { exports: {} },
  Uh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qo = b;
function E1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _1 = typeof Object.is == "function" ? Object.is : E1,
  R1 = qo.useSyncExternalStore,
  P1 = qo.useRef,
  N1 = qo.useEffect,
  j1 = qo.useMemo,
  T1 = qo.useDebugValue;
Uh.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = P1(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = j1(
    function () {
      function a(p) {
        if (!u) {
          if (((u = !0), (d = p), (p = r(p)), o !== void 0 && s.hasValue)) {
            var v = s.value;
            if (o(v, p)) return (c = v);
          }
          return (c = p);
        }
        if (((v = c), _1(d, p))) return v;
        var w = r(p);
        return o !== void 0 && o(v, w) ? v : ((d = p), (c = w));
      }
      var u = !1,
        d,
        c,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, o],
  );
  var l = R1(e, i[0], i[1]);
  return (
    N1(
      function () {
        (s.hasValue = !0), (s.value = l);
      },
      [l],
    ),
    T1(l),
    l
  );
};
Hh.exports = Uh;
var $1 = Hh.exports,
  Ve = "default" in Cf ? $s : Cf,
  Nd = Symbol.for("react-redux-context"),
  jd = typeof globalThis < "u" ? globalThis : {};
function M1() {
  if (!Ve.createContext) return {};
  const e = jd[Nd] ?? (jd[Nd] = new Map());
  let t = e.get(Ve.createContext);
  return t || ((t = Ve.createContext(null)), e.set(Ve.createContext, t)), t;
}
var cn = M1(),
  A1 = () => {
    throw new Error("uSES not initialized!");
  };
function Pc(e = cn) {
  return function () {
    return Ve.useContext(e);
  };
}
var Qh = Pc(),
  qh = A1,
  z1 = (e) => {
    qh = e;
  },
  I1 = (e, t) => e === t;
function O1(e = cn) {
  const t = e === cn ? Qh : Pc(e),
    n = (r, o = {}) => {
      const { equalityFn: i = I1, devModeChecks: s = {} } =
          typeof o == "function" ? { equalityFn: o } : o,
        {
          store: l,
          subscription: a,
          getServerState: u,
          stabilityCheck: d,
          identityFunctionCheck: c,
        } = t();
      Ve.useRef(!0);
      const f = Ve.useCallback(
          {
            [r.name](v) {
              return r(v);
            },
          }[r.name],
          [r, d, s.stabilityCheck],
        ),
        p = qh(a.addNestedSub, l.getState, u || l.getState, f, i);
      return Ve.useDebugValue(p), p;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var L1 = O1();
function Yh(e) {
  e();
}
function D1() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Yh(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var Td = { notify() {}, get: () => [] };
function F1(e, t) {
  let n,
    r = Td,
    o = 0,
    i = !1;
  function s(w) {
    d();
    const x = r.subscribe(w);
    let y = !1;
    return () => {
      y || ((y = !0), x(), c());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return i;
  }
  function d() {
    o++, n || ((n = e.subscribe(a)), (r = D1()));
  }
  function c() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = Td));
  }
  function f() {
    i || ((i = !0), d());
  }
  function p() {
    i && ((i = !1), c());
  }
  const v = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return v;
}
var B1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  V1 = typeof navigator < "u" && navigator.product === "ReactNative",
  W1 = B1 || V1 ? Ve.useLayoutEffect : Ve.useEffect;
function $d(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function mo(e, t) {
  if ($d(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !$d(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
function H1({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once",
}) {
  const s = Ve.useMemo(() => {
      const u = F1(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i,
      };
    }, [e, r, o, i]),
    l = Ve.useMemo(() => e.getState(), [e]);
  W1(() => {
    const { subscription: u } = s;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      l !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [s, l]);
  const a = t || cn;
  return Ve.createElement(a.Provider, { value: s }, n);
}
var U1 = H1;
function Kh(e = cn) {
  const t = e === cn ? Qh : Pc(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Xh = Kh();
function Q1(e = cn) {
  const t = e === cn ? Xh : Kh(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var q1 = Q1(),
  Y1 = Yh;
z1($1.useSyncExternalStoreWithSelector);
var St = function () {
  return (
    (St =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    St.apply(this, arguments)
  );
};
function Gh(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function K1(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Zi = "right-scroll-bar-position",
  Ji = "width-before-scroll-bar",
  X1 = "with-scroll-bars-hidden",
  G1 = "--removed-body-scroll-bar-size";
function ta(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Z1(e, t) {
  var n = b.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var J1 = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
  Md = new WeakMap();
function ew(e, t) {
  var n = Z1(null, function (r) {
    return e.forEach(function (o) {
      return ta(o, r);
    });
  });
  return (
    J1(
      function () {
        var r = Md.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (l) {
            i.has(l) || ta(l, null);
          }),
            i.forEach(function (l) {
              o.has(l) || ta(l, s);
            });
        }
        Md.set(n, e);
      },
      [e],
    ),
    n
  );
}
function tw(e) {
  return e;
}
function nw(e, t) {
  t === void 0 && (t = tw);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (l) {
              return l !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (l) {
            return i(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(i), (s = n);
        }
        var a = function () {
            var d = s;
            (s = []), d.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (d) {
              s.push(d), u();
            },
            filter: function (d) {
              return (s = s.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function rw(e) {
  e === void 0 && (e = {});
  var t = nw(null);
  return (t.options = St({ async: !0, ssr: !1 }, e)), t;
}
var Zh = function (e) {
  var t = e.sideCar,
    n = Gh(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return b.createElement(r, St({}, n));
};
Zh.isSideCarExport = !0;
function ow(e, t) {
  return e.useMedium(t), Zh;
}
var Jh = rw(),
  na = function () {},
  Ks = b.forwardRef(function (e, t) {
    var n = b.useRef(null),
      r = b.useState({
        onScrollCapture: na,
        onWheelCapture: na,
        onTouchMoveCapture: na,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      l = e.children,
      a = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      c = e.shards,
      f = e.sideCar,
      p = e.noIsolation,
      v = e.inert,
      w = e.allowPinchZoom,
      x = e.as,
      y = x === void 0 ? "div" : x,
      h = e.gapMode,
      m = Gh(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      g = f,
      C = ew([n, t]),
      E = St(St({}, m), o);
    return b.createElement(
      b.Fragment,
      null,
      d &&
        b.createElement(g, {
          sideCar: Jh,
          removeScrollBar: u,
          shards: c,
          noIsolation: p,
          inert: v,
          setCallbacks: i,
          allowPinchZoom: !!w,
          lockRef: n,
          gapMode: h,
        }),
      s
        ? b.cloneElement(b.Children.only(l), St(St({}, E), { ref: C }))
        : b.createElement(y, St({}, E, { className: a, ref: C }), l),
    );
  });
Ks.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ks.classNames = { fullWidth: Ji, zeroRight: Zi };
var iw = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function sw() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = iw();
  return t && e.setAttribute("nonce", t), e;
}
function lw(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function aw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var uw = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = sw()) && (lw(t, n), aw(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  cw = function () {
    var e = uw();
    return function (t, n) {
      b.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  ev = function () {
    var e = cw(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  fw = { left: 0, top: 0, right: 0, gap: 0 },
  ra = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  dw = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ra(n), ra(r), ra(o)];
  },
  pw = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return fw;
    var t = dw(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  mw = ev(),
  vr = "data-scroll-locked",
  hw = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          X1,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          vr,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Zi,
          ` {
    right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          Ji,
          ` {
    margin-right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Zi, " .")
        .concat(
          Zi,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Ji, " .")
        .concat(
          Ji,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          vr,
          `] {
    `,
        )
        .concat(G1, ": ")
        .concat(
          l,
          `px;
  }
`,
        )
    );
  },
  Ad = function () {
    var e = parseInt(document.body.getAttribute(vr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  vw = function () {
    b.useEffect(function () {
      return (
        document.body.setAttribute(vr, (Ad() + 1).toString()),
        function () {
          var e = Ad() - 1;
          e <= 0
            ? document.body.removeAttribute(vr)
            : document.body.setAttribute(vr, e.toString());
        }
      );
    }, []);
  },
  yw = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    vw();
    var i = b.useMemo(
      function () {
        return pw(o);
      },
      [o],
    );
    return b.createElement(mw, { styles: hw(i, !t, o, n ? "" : "!important") });
  },
  vu = !1;
if (typeof window < "u")
  try {
    var Ri = Object.defineProperty({}, "passive", {
      get: function () {
        return (vu = !0), !0;
      },
    });
    window.addEventListener("test", Ri, Ri),
      window.removeEventListener("test", Ri, Ri);
  } catch {
    vu = !1;
  }
var Vn = vu ? { passive: !1 } : !1,
  gw = function (e) {
    return e.tagName === "TEXTAREA";
  },
  tv = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !gw(e) && n[t] === "visible")
    );
  },
  ww = function (e) {
    return tv(e, "overflowY");
  },
  Sw = function (e) {
    return tv(e, "overflowX");
  },
  zd = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = nv(e, r);
      if (o) {
        var i = rv(e, r),
          s = i[1],
          l = i[2];
        if (s > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  xw = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Cw = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  nv = function (e, t) {
    return e === "v" ? ww(t) : Sw(t);
  },
  rv = function (e, t) {
    return e === "v" ? xw(t) : Cw(t);
  },
  bw = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  kw = function (e, t, n, r, o) {
    var i = bw(e, window.getComputedStyle(t).direction),
      s = i * r,
      l = n.target,
      a = t.contains(l),
      u = !1,
      d = s > 0,
      c = 0,
      f = 0;
    do {
      var p = rv(e, l),
        v = p[0],
        w = p[1],
        x = p[2],
        y = w - x - i * v;
      (v || y) && nv(e, l) && ((c += y), (f += v)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((d && (Math.abs(c) < 1 || !o)) || (!d && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  Pi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Id = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Od = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Ew = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  _w = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Rw = 0,
  Wn = [];
function Pw(e) {
  var t = b.useRef([]),
    n = b.useRef([0, 0]),
    r = b.useRef(),
    o = b.useState(Rw++)[0],
    i = b.useState(ev)[0],
    s = b.useRef(e);
  b.useEffect(
    function () {
      s.current = e;
    },
    [e],
  ),
    b.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var w = K1([e.lockRef.current], (e.shards || []).map(Od), !0).filter(
            Boolean,
          );
          return (
            w.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                w.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var l = b.useCallback(function (w, x) {
      if (
        ("touches" in w && w.touches.length === 2) ||
        (w.type === "wheel" && w.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var y = Pi(w),
        h = n.current,
        m = "deltaX" in w ? w.deltaX : h[0] - y[0],
        g = "deltaY" in w ? w.deltaY : h[1] - y[1],
        C,
        E = w.target,
        _ = Math.abs(m) > Math.abs(g) ? "h" : "v";
      if ("touches" in w && _ === "h" && E.type === "range") return !1;
      var k = zd(_, E);
      if (!k) return !0;
      if ((k ? (C = _) : ((C = _ === "v" ? "h" : "v"), (k = zd(_, E))), !k))
        return !1;
      if (
        (!r.current && "changedTouches" in w && (m || g) && (r.current = C), !C)
      )
        return !0;
      var R = r.current || C;
      return kw(R, x, w, R === "h" ? m : g, !0);
    }, []),
    a = b.useCallback(function (w) {
      var x = w;
      if (!(!Wn.length || Wn[Wn.length - 1] !== i)) {
        var y = "deltaY" in x ? Id(x) : Pi(x),
          h = t.current.filter(function (C) {
            return (
              C.name === x.type &&
              (C.target === x.target || x.target === C.shadowParent) &&
              Ew(C.delta, y)
            );
          })[0];
        if (h && h.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!h) {
          var m = (s.current.shards || [])
              .map(Od)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(x.target);
              }),
            g = m.length > 0 ? l(x, m[0]) : !s.current.noIsolation;
          g && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = b.useCallback(function (w, x, y, h) {
      var m = { name: w, delta: x, target: y, should: h, shadowParent: Nw(y) };
      t.current.push(m),
        setTimeout(function () {
          t.current = t.current.filter(function (g) {
            return g !== m;
          });
        }, 1);
    }, []),
    d = b.useCallback(function (w) {
      (n.current = Pi(w)), (r.current = void 0);
    }, []),
    c = b.useCallback(function (w) {
      u(w.type, Id(w), w.target, l(w, e.lockRef.current));
    }, []),
    f = b.useCallback(function (w) {
      u(w.type, Pi(w), w.target, l(w, e.lockRef.current));
    }, []);
  b.useEffect(function () {
    return (
      Wn.push(i),
      e.setCallbacks({
        onScrollCapture: c,
        onWheelCapture: c,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", a, Vn),
      document.addEventListener("touchmove", a, Vn),
      document.addEventListener("touchstart", d, Vn),
      function () {
        (Wn = Wn.filter(function (w) {
          return w !== i;
        })),
          document.removeEventListener("wheel", a, Vn),
          document.removeEventListener("touchmove", a, Vn),
          document.removeEventListener("touchstart", d, Vn);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    v = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    v ? b.createElement(i, { styles: _w(o) }) : null,
    p ? b.createElement(yw, { gapMode: e.gapMode }) : null,
  );
}
function Nw(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const jw = ow(Jh, Pw);
var Xs = b.forwardRef(function (e, t) {
  return b.createElement(Ks, St({}, e, { ref: t, sideCar: jw }));
});
Xs.classNames = Ks.classNames;
function we(e) {
  return Object.keys(e);
}
function oa(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Nc(e, t) {
  const n = { ...e },
    r = t;
  return (
    oa(e) &&
      oa(t) &&
      Object.keys(t).forEach((o) => {
        oa(r[o]) && o in e ? (n[o] = Nc(n[o], r[o])) : (n[o] = r[o]);
      }),
    n
  );
}
function Tw(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function $w(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)")
    ? e
    : (t = e.match(/^calc\((.*?)\)$/)) == null
      ? void 0
      : t[1].split("*")[0].trim();
}
function yu(e) {
  const t = $w(e);
  return typeof t == "number"
    ? t
    : typeof t == "string"
      ? t.includes("calc") || t.includes("var")
        ? t
        : t.includes("px")
          ? Number(t.replace("px", ""))
          : t.includes("rem")
            ? Number(t.replace("rem", "")) * 16
            : t.includes("em")
              ? Number(t.replace("em", "")) * 16
              : Number(t)
      : NaN;
}
function ia(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function ov(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0") return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? ia(o) : o;
    }
    if (typeof r == "string") {
      if (
        r === "" ||
        r.startsWith("calc(") ||
        r.startsWith("clamp(") ||
        r.includes("rgba(")
      )
        return r;
      if (r.includes(","))
        return r
          .split(",")
          .map((i) => n(i))
          .join(",");
      if (r.includes(" "))
        return r
          .split(" ")
          .map((i) => n(i))
          .join(" ");
      if (r.includes(e)) return t ? ia(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${e}`;
        return t ? ia(i) : i;
      }
    }
    return r;
  }
  return n;
}
const N = ov("rem", { shouldScale: !0 }),
  ks = ov("em");
function jc(e) {
  return Object.keys(e).reduce(
    (t, n) => (e[n] !== void 0 && (t[n] = e[n]), t),
    {},
  );
}
function iv(e) {
  return typeof e == "number"
    ? !0
    : typeof e == "string"
      ? e.startsWith("calc(") ||
        e.startsWith("var(") ||
        (e.includes(" ") && e.trim() !== "")
        ? !0
        : /[0-9]/.test(e.trim().replace("-", "")[0])
      : !1;
}
function Mw(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
      ? e.type !== b.Fragment
      : !1;
}
function Mr(e) {
  const t = b.createContext(null);
  return [
    ({ children: o, value: i }) => S.jsx(t.Provider, { value: i, children: o }),
    () => {
      const o = b.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
const Aw = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function Yo(e) {
  return Aw[e];
}
function ce(e, t = "size", n = !0) {
  if (e !== void 0) return iv(e) ? (n ? N(e) : e) : `var(--${t}-${e})`;
}
function Ar(e) {
  return ce(e, "mantine-spacing");
}
function Et(e) {
  return e === void 0
    ? "var(--mantine-radius-default)"
    : ce(e, "mantine-radius");
}
function Ao(e) {
  return ce(e, "mantine-font-size");
}
function zw(e) {
  return ce(e, "mantine-line-height", !1);
}
function sv(e) {
  if (e) return ce(e, "mantine-shadow", !1);
}
function Ni(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function Tc(e, t) {
  return e in t.breakpoints ? yu(t.breakpoints[e]) : yu(e);
}
function Ld(e, t) {
  const n = e.map((r) => ({ value: r, px: Tc(r, t) }));
  return n.sort((r, o) => r.px - o.px), n;
}
function lv() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function bn(e) {
  const t = b.useRef(e);
  return (
    b.useEffect(() => {
      t.current = e;
    }),
    b.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function Gs(e, t) {
  const n = bn(e),
    r = b.useRef(0);
  return (
    b.useEffect(() => () => window.clearTimeout(r.current), []),
    b.useCallback(
      (...o) => {
        window.clearTimeout(r.current),
          (r.current = window.setTimeout(() => n(...o), t));
      },
      [n, t],
    )
  );
}
function Iw(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function Ow(e, t) {
  return typeof window < "u" && "matchMedia" in window
    ? window.matchMedia(e).matches
    : !1;
}
function av(
  e,
  t,
  { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 },
) {
  const [r, o] = b.useState(n ? t : Ow(e)),
    i = b.useRef();
  return (
    b.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (i.current = window.matchMedia(e)),
          o(i.current.matches),
          Iw(i.current, (s) => o(s.matches))
        );
    }, [e]),
    r
  );
}
function uv(e, t) {
  return av("(prefers-color-scheme: dark)", e === "dark", t) ? "dark" : "light";
}
const zr = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
function $c(e, t) {
  const n = b.useRef(!1);
  b.useEffect(
    () => () => {
      n.current = !1;
    },
    [],
  ),
    b.useEffect(() => {
      if (n.current) return e();
      n.current = !0;
    }, t);
}
function Lw({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = b.useRef(),
    r = () => {
      var o;
      n.current &&
        "focus" in n.current &&
        typeof n.current.focus == "function" &&
        ((o = n.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    $c(() => {
      let o = -1;
      const i = (s) => {
        s.key === "Tab" && window.clearTimeout(o);
      };
      return (
        document.addEventListener("keydown", i),
        e
          ? (n.current = document.activeElement)
          : t && (o = window.setTimeout(r, 10)),
        () => {
          window.clearTimeout(o), document.removeEventListener("keydown", i);
        }
      );
    }, [e, t]),
    r
  );
}
function Dw(e, t = "body > :not(script)") {
  const n = lv(),
    r = Array.from(document.querySelectorAll(t)).map((o) => {
      var a;
      if (
        ((a = o == null ? void 0 : o.shadowRoot) != null && a.contains(e)) ||
        o.contains(e)
      )
        return;
      const i = o.getAttribute("aria-hidden"),
        s = o.getAttribute("data-hidden"),
        l = o.getAttribute("data-focus-id");
      return (
        o.setAttribute("data-focus-id", n),
        i === null || i === "false"
          ? o.setAttribute("aria-hidden", "true")
          : !s && !l && o.setAttribute("data-hidden", i),
        { node: o, ariaHidden: s || null }
      );
    });
  return () => {
    r.forEach((o) => {
      !o ||
        n !== o.node.getAttribute("data-focus-id") ||
        (o.ariaHidden === null
          ? o.node.removeAttribute("aria-hidden")
          : o.node.setAttribute("aria-hidden", o.ariaHidden),
        o.node.removeAttribute("data-focus-id"),
        o.node.removeAttribute("data-hidden"));
    });
  };
}
const Fw = /input|select|textarea|button|object/,
  cv = "a, input, select, textarea, button, object, [tabindex]";
function Bw(e) {
  return e.style.display === "none";
}
function Vw(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (Bw(n)) return !1;
    n = n.parentNode;
  }
  return !0;
}
function fv(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function gu(e) {
  const t = e.nodeName.toLowerCase(),
    n = !Number.isNaN(fv(e));
  return (
    ((Fw.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      n) &&
    Vw(e)
  );
}
function dv(e) {
  const t = fv(e);
  return (Number.isNaN(t) || t >= 0) && gu(e);
}
function Ww(e) {
  return Array.from(e.querySelectorAll(cv)).filter(dv);
}
function Hw(e, t) {
  const n = Ww(e);
  if (!n.length) {
    t.preventDefault();
    return;
  }
  const r = n[t.shiftKey ? 0 : n.length - 1],
    o = e.getRootNode();
  let i = r === o.activeElement || e === o.activeElement;
  const s = o.activeElement;
  if (
    (s.tagName === "INPUT" &&
      s.getAttribute("type") === "radio" &&
      (i = n
        .filter(
          (d) =>
            d.getAttribute("type") === "radio" &&
            d.getAttribute("name") === s.getAttribute("name"),
        )
        .includes(r)),
    !i)
  )
    return;
  t.preventDefault();
  const a = n[t.shiftKey ? n.length - 1 : 0];
  a && a.focus();
}
function Uw(e = !0) {
  const t = b.useRef(),
    n = b.useRef(null),
    r = (i) => {
      let s = i.querySelector("[data-autofocus]");
      if (!s) {
        const l = Array.from(i.querySelectorAll(cv));
        (s = l.find(dv) || l.find(gu) || null), !s && gu(i) && (s = i);
      }
      s && s.focus({ preventScroll: !0 });
    },
    o = b.useCallback(
      (i) => {
        if (e) {
          if (i === null) {
            n.current && (n.current(), (n.current = null));
            return;
          }
          (n.current = Dw(i)),
            t.current !== i &&
              (i
                ? (setTimeout(() => {
                    i.getRootNode() && r(i);
                  }),
                  (t.current = i))
                : (t.current = null));
        }
      },
      [e],
    );
  return (
    b.useEffect(() => {
      if (!e) return;
      t.current && setTimeout(() => r(t.current));
      const i = (s) => {
        s.key === "Tab" && t.current && Hw(t.current, s);
      };
      return (
        document.addEventListener("keydown", i),
        () => {
          document.removeEventListener("keydown", i), n.current && n.current();
        }
      );
    }, [e]),
    o
  );
}
const Qw = $s.useId || (() => {});
function qw() {
  const e = Qw();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function pv(e) {
  const t = qw(),
    [n, r] = b.useState(t);
  return (
    zr(() => {
      r(lv());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : n
  );
}
function Yw(e, t, { autoInvoke: n = !1 } = {}) {
  const [r, o] = b.useState(!1),
    i = b.useRef(),
    s = b.useRef(),
    l = () => {
      o(
        (d) => (
          !d && !i.current && (i.current = window.setInterval(s.current, t)), !0
        ),
      );
    },
    a = () => {
      o(!1), window.clearInterval(i.current), (i.current = void 0);
    },
    u = () => {
      r ? a() : l();
    };
  return (
    b.useEffect(() => ((s.current = e), r && l(), a), [e, r, t]),
    b.useEffect(() => {
      n && l();
    }, []),
    { start: l, stop: a, toggle: u, active: r }
  );
}
function mv(e, t, n) {
  b.useEffect(
    () => (
      window.addEventListener(e, t, n),
      () => window.removeEventListener(e, t, n)
    ),
    [e, t],
  );
}
function hv(e, t) {
  typeof e == "function"
    ? e(t)
    : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function vv(...e) {
  return (t) => {
    e.forEach((n) => hv(n, t));
  };
}
function Ft(...e) {
  return b.useCallback(vv(...e), e);
}
function Mc({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {},
}) {
  const [o, i] = b.useState(t !== void 0 ? t : n),
    s = (l, ...a) => {
      i(l), r == null || r(l, ...a);
    };
  return e !== void 0 ? [e, r, !0] : [o, s, !1];
}
function Ht(e, t) {
  const n = t - e + 1;
  return Array.from({ length: n }, (r, o) => o + e);
}
const ji = "dots";
function Kw({
  total: e,
  siblings: t = 1,
  boundaries: n = 1,
  page: r,
  initialPage: o = 1,
  onChange: i,
}) {
  const s = Math.max(Math.trunc(e), 0),
    [l, a] = Mc({ value: r, onChange: i, defaultValue: o, finalValue: o }),
    u = (w) => {
      w <= 0 ? a(1) : w > s ? a(s) : a(w);
    },
    d = () => u(l + 1),
    c = () => u(l - 1),
    f = () => u(1),
    p = () => u(s);
  return {
    range: b.useMemo(() => {
      if (t * 2 + 3 + n * 2 >= s) return Ht(1, s);
      const x = Math.max(l - t, n),
        y = Math.min(l + t, s - n),
        h = x > n + 2,
        m = y < s - (n + 1);
      if (!h && m) {
        const g = t * 2 + n + 2;
        return [...Ht(1, g), ji, ...Ht(s - (n - 1), s)];
      }
      if (h && !m) {
        const g = n + 1 + 2 * t;
        return [...Ht(1, n), ji, ...Ht(s - g, s)];
      }
      return [...Ht(1, n), ji, ...Ht(x, y), ji, ...Ht(s - n + 1, s)];
    }, [s, t, l]),
    active: l,
    setPage: u,
    next: d,
    previous: c,
    first: f,
    last: p,
  };
}
function Ac(e, t) {
  return av("(prefers-reduced-motion: reduce)", e, t);
}
function Ti(e = !1, t) {
  const { onOpen: n, onClose: r } = {},
    [o, i] = b.useState(e),
    s = b.useCallback(() => {
      i((u) => u || (n == null || n(), !0));
    }, [n]),
    l = b.useCallback(() => {
      i((u) => u && (r == null || r(), !1));
    }, [r]),
    a = b.useCallback(() => {
      o ? l() : s();
    }, [l, s, o]);
  return [o, { open: s, close: l, toggle: a }];
}
function Xw(e, t, n = { autoInvoke: !1 }) {
  const r = b.useRef(null),
    o = b.useCallback(
      (...s) => {
        r.current ||
          (r.current = window.setTimeout(() => {
            e(s), (r.current = null);
          }, t));
      },
      [t],
    ),
    i = b.useCallback(() => {
      r.current && (window.clearTimeout(r.current), (r.current = null));
    }, []);
  return (
    b.useEffect(() => (n.autoInvoke && o(), i), [i, o]), { start: o, clear: i }
  );
}
function Gw(e, t, n) {
  const r = b.useRef(),
    o = b.useRef(null);
  return (
    b.useEffect(() => {
      const i = typeof n == "function" ? n() : n;
      return (
        (i || o.current) &&
          ((r.current = new MutationObserver(e)),
          r.current.observe(i || o.current, t)),
        () => {
          var s;
          (s = r.current) == null || s.disconnect();
        }
      );
    }, [e, t]),
    o
  );
}
function Zw() {
  const [e, t] = b.useState(!1);
  return b.useEffect(() => t(!0), []), e;
}
var Jw = {};
function eS() {
  return typeof process < "u" && Jw ? "production" : "development";
}
function yv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = yv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function je() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = yv(e)) && (r && (r += " "), (r += t));
  return r;
}
const tS = {};
function nS(e) {
  const t = {};
  return (
    e.forEach((n) => {
      Object.entries(n).forEach(([r, o]) => {
        t[r] ? (t[r] = je(t[r], o)) : (t[r] = o);
      });
    }),
    t
  );
}
function zc({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map((s) =>
    typeof s == "function" ? s(e, n, r) : s || tS,
  );
  return nS(i);
}
function wu({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce(
    (i, s) =>
      typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s },
    {},
  );
}
const Ic = b.createContext(null);
function vn() {
  const e = b.useContext(Ic);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function rS() {
  return vn().cssVariablesResolver;
}
function oS() {
  return vn().classNamesPrefix;
}
function Zs() {
  return vn().getStyleNonce;
}
function iS() {
  return vn().withStaticClasses;
}
function sS() {
  return vn().headless;
}
function lS() {
  var e;
  return (e = vn().stylesTransform) == null ? void 0 : e.sx;
}
function aS() {
  var e;
  return (e = vn().stylesTransform) == null ? void 0 : e.styles;
}
function uS(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function cS(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const s = t.split("");
    t = [s[0], s[0], s[1], s[1], s[2], s[2]].join("");
  }
  if (t.length === 8) {
    const s = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: s,
    };
  }
  const n = parseInt(t, 16),
    r = (n >> 16) & 255,
    o = (n >> 8) & 255,
    i = n & 255;
  return { r, g: o, b: i, a: 1 };
}
function fS(e) {
  const [t, n, r, o] = e
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function dS(e) {
  const t =
      /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
    n = e.match(t);
  if (!n) return { r: 0, g: 0, b: 0, a: 1 };
  const r = parseInt(n[1], 10),
    o = parseInt(n[2], 10) / 100,
    i = parseInt(n[3], 10) / 100,
    s = n[5] ? parseFloat(n[5]) : void 0,
    l = (1 - Math.abs(2 * i - 1)) * o,
    a = r / 60,
    u = l * (1 - Math.abs((a % 2) - 1)),
    d = i - l / 2;
  let c, f, p;
  return (
    a >= 0 && a < 1
      ? ((c = l), (f = u), (p = 0))
      : a >= 1 && a < 2
        ? ((c = u), (f = l), (p = 0))
        : a >= 2 && a < 3
          ? ((c = 0), (f = l), (p = u))
          : a >= 3 && a < 4
            ? ((c = 0), (f = u), (p = l))
            : a >= 4 && a < 5
              ? ((c = u), (f = 0), (p = l))
              : ((c = l), (f = 0), (p = u)),
    {
      r: Math.round((c + d) * 255),
      g: Math.round((f + d) * 255),
      b: Math.round((p + d) * 255),
      a: s || 1,
    }
  );
}
function Oc(e) {
  return uS(e)
    ? cS(e)
    : e.startsWith("rgb")
      ? fS(e)
      : e.startsWith("hsl")
        ? dS(e)
        : { r: 0, g: 0, b: 0, a: 1 };
}
function $i(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: i } = Oc(e),
    s = 1 - t,
    l = (a) => Math.round(a * s);
  return `rgba(${l(n)}, ${l(r)}, ${l(o)}, ${i})`;
}
function zo(e, t) {
  return typeof e.primaryShade == "number"
    ? e.primaryShade
    : t === "dark"
      ? e.primaryShade.dark
      : e.primaryShade.light;
}
function sa(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function pS(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function mS(e) {
  if (e.startsWith("oklch(")) return (pS(e) || 0) / 100;
  const { r: t, g: n, b: r } = Oc(e),
    o = t / 255,
    i = n / 255,
    s = r / 255,
    l = sa(o),
    a = sa(i),
    u = sa(s);
  return 0.2126 * l + 0.7152 * a + 0.0722 * u;
}
function qr(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : mS(e) > t;
}
function Ko({ color: e, theme: t, colorScheme: n }) {
  if (typeof e != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`,
    );
  if (e === "bright")
    return {
      color: e,
      value: n === "dark" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: qr(n === "dark" ? t.white : t.black, t.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (e === "dimmed")
    return {
      color: e,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: qr(
        n === "dark" ? t.colors.dark[2] : t.colors.gray[6],
        t.luminanceThreshold,
      ),
      variable: "--mantine-color-dimmed",
    };
  if (e === "white" || e === "black")
    return {
      color: e,
      value: e === "white" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: qr(e === "white" ? t.white : t.black, t.luminanceThreshold),
      variable: `--mantine-color-${e}`,
    };
  const [r, o] = e.split("."),
    i = o ? Number(o) : void 0,
    s = r in t.colors;
  if (s) {
    const l = i !== void 0 ? t.colors[r][i] : t.colors[r][zo(t, n || "light")];
    return {
      color: r,
      value: l,
      shade: i,
      isThemeColor: s,
      isLight: qr(l, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: s,
    isLight: qr(e, t.luminanceThreshold),
    shade: i,
    variable: void 0,
  };
}
function Ot(e, t) {
  const n = Ko({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Su(e, t) {
  const n = {
      from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
      to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
      deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0,
    },
    r = Ot(n.from, t),
    o = Ot(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function gt(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const i = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${i}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/")
      ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`)
      : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = Oc(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const Hn = gt,
  hS = ({ color: e, theme: t, variant: n, gradient: r, autoContrast: o }) => {
    const i = Ko({ color: e, theme: t }),
      s = typeof o == "boolean" ? o : t.autoContrast;
    if (n === "filled") {
      const l =
        s && i.isLight
          ? "var(--mantine-color-black)"
          : "var(--mantine-color-white)";
      return i.isThemeColor
        ? i.shade === void 0
          ? {
              background: `var(--mantine-color-${e}-filled)`,
              hover: `var(--mantine-color-${e}-filled-hover)`,
              color: l,
              border: `${N(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${i.color}-${i.shade})`,
              hover: `var(--mantine-color-${i.color}-${i.shade === 9 ? 8 : i.shade + 1})`,
              color: l,
              border: `${N(1)} solid transparent`,
            }
        : {
            background: e,
            hover: $i(e, 0.1),
            color: l,
            border: `${N(1)} solid transparent`,
          };
    }
    if (n === "light") {
      if (i.isThemeColor) {
        if (i.shade === void 0)
          return {
            background: `var(--mantine-color-${e}-light)`,
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${N(1)} solid transparent`,
          };
        const l = t.colors[i.color][i.shade];
        return {
          background: gt(l, 0.1),
          hover: gt(l, 0.12),
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
          border: `${N(1)} solid transparent`,
        };
      }
      return {
        background: gt(e, 0.1),
        hover: gt(e, 0.12),
        color: e,
        border: `${N(1)} solid transparent`,
      };
    }
    if (n === "outline")
      return i.isThemeColor
        ? i.shade === void 0
          ? {
              background: "transparent",
              hover: `var(--mantine-color-${e}-outline-hover)`,
              color: `var(--mantine-color-${e}-outline)`,
              border: `${N(1)} solid var(--mantine-color-${e}-outline)`,
            }
          : {
              background: "transparent",
              hover: gt(t.colors[i.color][i.shade], 0.05),
              color: `var(--mantine-color-${i.color}-${i.shade})`,
              border: `${N(1)} solid var(--mantine-color-${i.color}-${i.shade})`,
            }
        : {
            background: "transparent",
            hover: gt(e, 0.05),
            color: e,
            border: `${N(1)} solid ${e}`,
          };
    if (n === "subtle") {
      if (i.isThemeColor) {
        if (i.shade === void 0)
          return {
            background: "transparent",
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${N(1)} solid transparent`,
          };
        const l = t.colors[i.color][i.shade];
        return {
          background: "transparent",
          hover: gt(l, 0.12),
          color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
          border: `${N(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: gt(e, 0.12),
        color: e,
        border: `${N(1)} solid transparent`,
      };
    }
    return n === "transparent"
      ? i.isThemeColor
        ? i.shade === void 0
          ? {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${e}-light-color)`,
              border: `${N(1)} solid transparent`,
            }
          : {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
              border: `${N(1)} solid transparent`,
            }
        : {
            background: "transparent",
            hover: "transparent",
            color: e,
            border: `${N(1)} solid transparent`,
          }
      : n === "white"
        ? i.isThemeColor
          ? i.shade === void 0
            ? {
                background: "var(--mantine-color-white)",
                hover: $i(t.white, 0.01),
                color: `var(--mantine-color-${e}-filled)`,
                border: `${N(1)} solid transparent`,
              }
            : {
                background: "var(--mantine-color-white)",
                hover: $i(t.white, 0.01),
                color: `var(--mantine-color-${i.color}-${i.shade})`,
                border: `${N(1)} solid transparent`,
              }
          : {
              background: "var(--mantine-color-white)",
              hover: $i(t.white, 0.01),
              color: e,
              border: `${N(1)} solid transparent`,
            }
        : n === "gradient"
          ? {
              background: Su(r, t),
              hover: Su(r, t),
              color: "var(--mantine-color-white)",
              border: "none",
            }
          : n === "default"
            ? {
                background: "var(--mantine-color-default)",
                hover: "var(--mantine-color-default-hover)",
                color: "var(--mantine-color-default-color)",
                border: `${N(1)} solid var(--mantine-color-default-border)`,
              }
            : {};
  },
  vS = {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d",
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c",
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4",
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e",
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d",
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700",
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f",
    ],
  },
  Dd =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  Lc = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: vS,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: hS,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: Dd,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: Dd,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: N(34), lineHeight: "1.3" },
        h2: { fontSize: N(26), lineHeight: "1.35" },
        h3: { fontSize: N(22), lineHeight: "1.4" },
        h4: { fontSize: N(18), lineHeight: "1.45" },
        h5: { fontSize: N(16), lineHeight: "1.5" },
        h6: { fontSize: N(14), lineHeight: "1.5" },
      },
    },
    fontSizes: { xs: N(12), sm: N(14), md: N(16), lg: N(18), xl: N(20) },
    lineHeights: { xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65" },
    radius: { xs: N(2), sm: N(4), md: N(8), lg: N(16), xl: N(32) },
    spacing: { xs: N(10), sm: N(12), md: N(16), lg: N(20), xl: N(32) },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    shadows: {
      xs: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), 0 ${N(1)} ${N(2)} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${N(10)} ${N(15)} ${N(-5)}, rgba(0, 0, 0, 0.04) 0 ${N(7)} ${N(7)} ${N(-5)}`,
      md: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${N(20)} ${N(25)} ${N(-5)}, rgba(0, 0, 0, 0.04) 0 ${N(10)} ${N(10)} ${N(-5)}`,
      lg: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${N(28)} ${N(23)} ${N(-7)}, rgba(0, 0, 0, 0.04) 0 ${N(12)} ${N(12)} ${N(-7)}`,
      xl: `0 ${N(1)} ${N(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${N(36)} ${N(28)} ${N(-7)}, rgba(0, 0, 0, 0.04) 0 ${N(17)} ${N(17)} ${N(-7)}`,
    },
    other: {},
    components: {},
  };
function Fd(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function yS({ key: e = "mantine-color-scheme-value" } = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u") return n;
      try {
        const r = window.localStorage.getItem(e);
        return Fd(r) ? r : n;
      } catch {
        return n;
      }
    },
    set: (n) => {
      try {
        window.localStorage.setItem(e, n);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r,
        );
      }
    },
    subscribe: (n) => {
      (t = (r) => {
        r.storageArea === window.localStorage &&
          r.key === e &&
          Fd(r.newValue) &&
          n(r.newValue);
      }),
        window.addEventListener("storage", t);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", t);
    },
    clear: () => {
      window.localStorage.removeItem(e);
    },
  };
}
const gS =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  Bd =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function la(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Vd(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(gS);
  if (
    typeof e.primaryShade == "object" &&
    (!la(e.primaryShade.dark) || !la(e.primaryShade.light))
  )
    throw new Error(Bd);
  if (typeof e.primaryShade == "number" && !la(e.primaryShade))
    throw new Error(Bd);
}
function wS(e, t) {
  var r;
  if (!t) return Vd(e), e;
  const n = Nc(e, t);
  return (
    t.fontFamily &&
      !((r = t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    Vd(n),
    n
  );
}
const Dc = b.createContext(null),
  SS = () => b.useContext(Dc) || Lc;
function tt() {
  const e = b.useContext(Dc);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app",
    );
  return e;
}
function gv({ theme: e, children: t, inherit: n = !0 }) {
  const r = SS(),
    o = b.useMemo(() => wS(n ? r : Lc, e), [e, r, n]);
  return S.jsx(Dc.Provider, { value: o, children: t });
}
gv.displayName = "@mantine/core/MantineThemeProvider";
function xS() {
  const e = tt(),
    t = Zs(),
    n = we(e.breakpoints).reduce((r, o) => {
      const i = e.breakpoints[o].includes("px"),
        s = yu(e.breakpoints[o]),
        l = i ? `${s - 0.1}px` : ks(s - 0.1),
        a = i ? `${s}px` : ks(s);
      return `${r}@media (max-width: ${l}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${a}) {.mantine-hidden-from-${o} {display: none !important;}}`;
    }, "");
  return S.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: n },
  });
}
function aa(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n};`)
    .join("");
}
function Yr(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function CS(e, t) {
  const n = aa(e.variables),
    r = n ? Yr(t, n) : "",
    o = aa(e.dark),
    i = aa(e.light),
    s = o
      ? Yr(
          t === ":host"
            ? `${t}([data-mantine-color-scheme="dark"])`
            : `${t}[data-mantine-color-scheme="dark"]`,
          o,
        )
      : "",
    l = i
      ? Yr(
          t === ":host"
            ? `${t}([data-mantine-color-scheme="light"])`
            : `${t}[data-mantine-color-scheme="light"]`,
          i,
        )
      : "";
  return `${r}${s}${l}`;
}
function Fc({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) &&
    Ko({ color: e || t.primaryColor, theme: t }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function Wd(e, t) {
  return Fc({
    color: e.colors[e.primaryColor][zo(e, t)],
    theme: e,
    autoContrast: null,
  });
}
function Mi({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0,
}) {
  if (!e.colors[t]) return {};
  if (n === "light") {
    const l = zo(e, "light"),
      a = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${l === 9 ? 8 : l + 1})`,
        [`--mantine-color-${r}-light`]: Hn(e.colors[t][l], 0.1),
        [`--mantine-color-${r}-light-hover`]: Hn(e.colors[t][l], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${l})`,
        [`--mantine-color-${r}-outline-hover`]: Hn(e.colors[t][l], 0.05),
      };
    return o
      ? {
          [`--mantine-color-${r}-0`]: e.colors[t][0],
          [`--mantine-color-${r}-1`]: e.colors[t][1],
          [`--mantine-color-${r}-2`]: e.colors[t][2],
          [`--mantine-color-${r}-3`]: e.colors[t][3],
          [`--mantine-color-${r}-4`]: e.colors[t][4],
          [`--mantine-color-${r}-5`]: e.colors[t][5],
          [`--mantine-color-${r}-6`]: e.colors[t][6],
          [`--mantine-color-${r}-7`]: e.colors[t][7],
          [`--mantine-color-${r}-8`]: e.colors[t][8],
          [`--mantine-color-${r}-9`]: e.colors[t][9],
          ...a,
        }
      : a;
  }
  const i = zo(e, "dark"),
    s = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${i})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${i === 9 ? 8 : i + 1})`,
      [`--mantine-color-${r}-light`]: Hn(e.colors[t][Math.max(0, i - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: Hn(
        e.colors[t][Math.max(0, i - 2)],
        0.2,
      ),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(i - 5, 0)})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(i - 4, 0)})`,
      [`--mantine-color-${r}-outline-hover`]: Hn(
        e.colors[t][Math.max(i - 4, 0)],
        0.05,
      ),
    };
  return o
    ? {
        [`--mantine-color-${r}-0`]: e.colors[t][0],
        [`--mantine-color-${r}-1`]: e.colors[t][1],
        [`--mantine-color-${r}-2`]: e.colors[t][2],
        [`--mantine-color-${r}-3`]: e.colors[t][3],
        [`--mantine-color-${r}-4`]: e.colors[t][4],
        [`--mantine-color-${r}-5`]: e.colors[t][5],
        [`--mantine-color-${r}-6`]: e.colors[t][6],
        [`--mantine-color-${r}-7`]: e.colors[t][7],
        [`--mantine-color-${r}-8`]: e.colors[t][8],
        [`--mantine-color-${r}-9`]: e.colors[t][9],
        ...s,
      }
    : s;
}
function bS(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function Un(e, t, n) {
  we(t).forEach((r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] }));
}
const wv = (e) => {
  const t = zo(e, "light"),
    n =
      e.defaultRadius in e.radius
        ? e.radius[e.defaultRadius]
        : N(e.defaultRadius),
    r = {
      variables: {
        "--mantine-scale": e.scale.toString(),
        "--mantine-cursor-type": e.cursorType,
        "--mantine-color-scheme": "light dark",
        "--mantine-webkit-font-smoothing": e.fontSmoothing
          ? "antialiased"
          : "unset",
        "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": e.white,
        "--mantine-color-black": e.black,
        "--mantine-line-height": e.lineHeights.md,
        "--mantine-font-family": e.fontFamily,
        "--mantine-font-family-monospace": e.fontFamilyMonospace,
        "--mantine-font-family-headings": e.headings.fontFamily,
        "--mantine-heading-font-weight": e.headings.fontWeight,
        "--mantine-heading-text-wrap": e.headings.textWrap,
        "--mantine-radius-default": n,
        "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`,
      },
      light: {
        "--mantine-primary-color-contrast": Wd(e, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": e.black,
        "--mantine-color-body": e.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
      },
      dark: {
        "--mantine-primary-color-contrast": Wd(e, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
      },
    };
  Un(r.variables, e.breakpoints, "breakpoint"),
    Un(r.variables, e.spacing, "spacing"),
    Un(r.variables, e.fontSizes, "font-size"),
    Un(r.variables, e.lineHeights, "line-height"),
    Un(r.variables, e.shadows, "shadow"),
    Un(r.variables, e.radius, "radius"),
    e.colors[e.primaryColor].forEach((i, s) => {
      r.variables[`--mantine-primary-color-${s}`] =
        `var(--mantine-color-${e.primaryColor}-${s})`;
    }),
    we(e.colors).forEach((i) => {
      const s = e.colors[i];
      if (bS(s)) {
        Object.assign(
          r.light,
          Mi({
            theme: e,
            name: s.name,
            color: s.light,
            colorScheme: "light",
            withColorValues: !0,
          }),
        ),
          Object.assign(
            r.dark,
            Mi({
              theme: e,
              name: s.name,
              color: s.dark,
              colorScheme: "dark",
              withColorValues: !0,
            }),
          );
        return;
      }
      s.forEach((l, a) => {
        r.variables[`--mantine-color-${i}-${a}`] = l;
      }),
        Object.assign(
          r.light,
          Mi({ theme: e, color: i, colorScheme: "light", withColorValues: !1 }),
        ),
        Object.assign(
          r.dark,
          Mi({ theme: e, color: i, colorScheme: "dark", withColorValues: !1 }),
        );
    });
  const o = e.headings.sizes;
  return (
    we(o).forEach((i) => {
      (r.variables[`--mantine-${i}-font-size`] = o[i].fontSize),
        (r.variables[`--mantine-${i}-line-height`] = o[i].lineHeight),
        (r.variables[`--mantine-${i}-font-weight`] =
          o[i].fontWeight || e.headings.fontWeight);
    }),
    r
  );
};
function kS({ theme: e, generator: t }) {
  const n = wv(e),
    r = t == null ? void 0 : t(e);
  return r ? Nc(n, r) : n;
}
const ua = wv(Lc);
function ES(e) {
  const t = { variables: {}, light: {}, dark: {} };
  return (
    we(e.variables).forEach((n) => {
      ua.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
    }),
    we(e.light).forEach((n) => {
      ua.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
    }),
    we(e.dark).forEach((n) => {
      ua.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
    }),
    t
  );
}
function _S(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Sv({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
  const n = tt(),
    r = Zs(),
    o = rS(),
    i = kS({ theme: n, generator: o }),
    s = e === ":root" && t,
    l = s ? ES(i) : i,
    a = CS(l, e);
  return a
    ? S.jsx("style", {
        "data-mantine-styles": !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${a}${s ? "" : _S(e)}` },
      })
    : null;
}
Sv.displayName = "@mantine/CssVariables";
function RS() {
  const e = console.error;
  console.error = (...t) => {
    (t.length > 1 &&
      typeof t[0] == "string" &&
      t[0].toLowerCase().includes("extra attributes from the server") &&
      typeof t[1] == "string" &&
      t[1].toLowerCase().includes("data-mantine-color-scheme")) ||
      e(...t);
  };
}
function Qn(e, t) {
  var r;
  const n =
    e !== "auto"
      ? e
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function PS({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r,
}) {
  const o = b.useRef(),
    [i, s] = b.useState(() => e.get(t)),
    l = r || i,
    a = b.useCallback(
      (d) => {
        r || (Qn(d, n), s(d), e.set(d));
      },
      [e.set, l, r],
    ),
    u = b.useCallback(() => {
      s(t), Qn(t, n), e.clear();
    }, [e.clear, t]);
  return (
    b.useEffect(
      () => (e.subscribe(a), e.unsubscribe),
      [e.subscribe, e.unsubscribe],
    ),
    zr(() => {
      Qn(e.get(t), n);
    }, []),
    b.useEffect(() => {
      var c;
      if (r) return Qn(r, n), () => {};
      r === void 0 && Qn(i, n),
        (o.current = window.matchMedia("(prefers-color-scheme: dark)"));
      const d = (f) => {
        i === "auto" && Qn(f.matches ? "dark" : "light", n);
      };
      return (
        (c = o.current) == null || c.addEventListener("change", d),
        () => {
          var f;
          return (f = o.current) == null
            ? void 0
            : f.removeEventListener("change", d);
        }
      );
    }, [i, r]),
    { colorScheme: l, setColorScheme: a, clearColorScheme: u }
  );
}
function NS({ respectReducedMotion: e, getRootElement: t }) {
  zr(() => {
    var n;
    e &&
      ((n = t()) == null ||
        n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
RS();
function xv({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: s = !0,
  cssVariablesSelector: l = ":root",
  classNamesPrefix: a = "mantine",
  colorSchemeManager: u = yS(),
  defaultColorScheme: d = "light",
  getRootElement: c = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: p,
  stylesTransform: v,
}) {
  const {
    colorScheme: w,
    setColorScheme: x,
    clearColorScheme: y,
  } = PS({
    defaultColorScheme: d,
    forceColorScheme: p,
    manager: u,
    getRootElement: c,
  });
  return (
    NS({
      respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
      getRootElement: c,
    }),
    S.jsx(Ic.Provider, {
      value: {
        colorScheme: w,
        setColorScheme: x,
        clearColorScheme: y,
        getRootElement: c,
        classNamesPrefix: a,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: l,
        withStaticClasses: r,
        stylesTransform: v,
      },
      children: S.jsxs(gv, {
        theme: e,
        children: [
          s &&
            S.jsx(Sv, { cssVariablesSelector: l, deduplicateCssVariables: i }),
          o && S.jsx(xS, {}),
          t,
        ],
      }),
    })
  );
}
xv.displayName = "@mantine/core/MantineProvider";
const jS = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function TS({ theme: e, options: t, unstyled: n }) {
  return je(
    (t == null ? void 0 : t.focusable) &&
      !n &&
      (e.focusClassName || jS[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName,
  );
}
function $S({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
  return zc({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t,
  })[e];
}
function Hd({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
  return zc({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function MS({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function AS({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function zS({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r,
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function IS({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
  return e.map((i) => {
    var s, l;
    return (l = zc({
      theme: t,
      classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
      props: r,
      stylesCtx: o,
    })) == null
      ? void 0
      : l[n];
  });
}
function OS({ options: e, classes: t, selector: n, unstyled: r }) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function LS({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: i,
  classes: s,
  unstyled: l,
  className: a,
  rootSelector: u,
  props: d,
  stylesCtx: c,
  withStaticClasses: f,
  headless: p,
  transformedStyles: v,
}) {
  return je(
    TS({ theme: e, options: t, unstyled: l || p }),
    IS({ theme: e, themeName: n, selector: r, props: d, stylesCtx: c }),
    OS({ options: t, classes: s, selector: r, unstyled: l }),
    Hd({ selector: r, stylesCtx: c, theme: e, classNames: i, props: d }),
    Hd({ selector: r, stylesCtx: c, theme: e, classNames: v, props: d }),
    $S({ selector: r, stylesCtx: c, options: t, props: d, theme: e }),
    MS({ rootSelector: u, selector: r, className: a }),
    AS({ selector: r, classes: s, unstyled: l || p }),
    f &&
      !p &&
      zS({
        themeName: n,
        classNamesPrefix: o,
        selector: r,
        withStaticClass: t == null ? void 0 : t.withStaticClass,
      }),
    t == null ? void 0 : t.className,
  );
}
function DS({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
  return t
    .map((i) => {
      var s;
      return wu({
        theme: e,
        styles: (s = e.components[i]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: r,
      })[o];
    })
    .reduce((i, s) => ({ ...i, ...s }), {});
}
function xu({ style: e, theme: t }) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...xu({ style: r, theme: t }) }), {})
    : typeof e == "function"
      ? e(t)
      : (e ?? {});
}
function FS(e) {
  return e.reduce(
    (t, n) => (
      n &&
        Object.keys(n).forEach((r) => {
          t[r] = { ...t[r], ...jc(n[r]) };
        }),
      t
    ),
    {},
  );
}
function BS({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s,
  headless: l,
}) {
  var a;
  return (a = FS([
    l ? {} : t == null ? void 0 : t(n, r, o),
    ...s.map((u) => {
      var d, c, f;
      return (f =
        (c = (d = n.components) == null ? void 0 : d[u]) == null
          ? void 0
          : c.vars) == null
        ? void 0
        : f.call(c, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o),
  ])) == null
    ? void 0
    : a[i];
}
function VS({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: i,
  rootSelector: s,
  styles: l,
  style: a,
  vars: u,
  varsResolver: d,
  headless: c,
  withStylesTransform: f,
}) {
  return {
    ...(!f &&
      DS({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n })),
    ...(!f && wu({ theme: e, styles: l, props: o, stylesCtx: i })[n]),
    ...(!f &&
      wu({
        theme: e,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || o,
        stylesCtx: i,
      })[n]),
    ...BS({
      theme: e,
      props: o,
      stylesCtx: i,
      vars: u,
      varsResolver: d,
      selector: n,
      themeName: t,
      headless: c,
    }),
    ...(s === n ? xu({ style: a, theme: e }) : null),
    ...xu({ style: r == null ? void 0 : r.style, theme: e }),
  };
}
function WS({ props: e, stylesCtx: t, themeName: n }) {
  var s;
  const r = tt(),
    o = (s = aS()) == null ? void 0 : s();
  return {
    getTransformedStyles: (l) =>
      o
        ? [
            ...l.map((u) => o(u, { props: e, theme: r, ctx: t })),
            ...n.map((u) => {
              var d;
              return o((d = r.components[u]) == null ? void 0 : d.styles, {
                props: e,
                theme: r,
                ctx: t,
              });
            }),
          ].filter(Boolean)
        : [],
    withStylesTransform: !!o,
  };
}
function G({
  name: e,
  classes: t,
  props: n,
  stylesCtx: r,
  className: o,
  style: i,
  rootSelector: s = "root",
  unstyled: l,
  classNames: a,
  styles: u,
  vars: d,
  varsResolver: c,
}) {
  const f = tt(),
    p = oS(),
    v = iS(),
    w = sS(),
    x = (Array.isArray(e) ? e : [e]).filter((m) => m),
    { withStylesTransform: y, getTransformedStyles: h } = WS({
      props: n,
      stylesCtx: r,
      themeName: x,
    });
  return (m, g) => ({
    className: LS({
      theme: f,
      options: g,
      themeName: x,
      selector: m,
      classNamesPrefix: p,
      classNames: a,
      classes: t,
      unstyled: l,
      className: o,
      rootSelector: s,
      props: n,
      stylesCtx: r,
      withStaticClasses: v,
      headless: w,
      transformedStyles: h([g == null ? void 0 : g.styles, u]),
    }),
    style: VS({
      theme: f,
      themeName: x,
      selector: m,
      options: g,
      props: n,
      stylesCtx: r,
      rootSelector: s,
      styles: u,
      style: i,
      vars: d,
      varsResolver: c,
      headless: w,
      withStylesTransform: y,
    }),
  });
}
function HS(e, t) {
  return typeof e == "boolean" ? e : t.autoContrast;
}
function Ud(e) {
  const t = document.createElement("style");
  return (
    t.setAttribute("data-mantine-styles", "inline"),
    (t.innerHTML = "*, *::before, *::after {transition: none !important;}"),
    t.setAttribute("data-mantine-disable-transition", "true"),
    e && t.setAttribute("nonce", e),
    document.head.appendChild(t),
    () =>
      document
        .querySelectorAll("[data-mantine-disable-transition]")
        .forEach((r) => r.remove())
  );
}
function Cv({ keepTransitions: e } = {}) {
  const t = b.useRef(),
    n = b.useRef(),
    r = b.useContext(Ic),
    o = Zs(),
    i = b.useRef(o == null ? void 0 : o());
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  const s = (c) => {
      r.setColorScheme(c),
        (t.current = e ? () => {} : Ud(i.current)),
        window.clearTimeout(n.current),
        (n.current = window.setTimeout(() => {
          var f;
          (f = t.current) == null || f.call(t);
        }, 10));
    },
    l = () => {
      r.clearColorScheme(),
        (t.current = e ? () => {} : Ud(i.current)),
        window.clearTimeout(n.current),
        (n.current = window.setTimeout(() => {
          var c;
          (c = t.current) == null || c.call(t);
        }, 10));
    },
    a = uv("light", { getInitialValueInEffect: !1 }),
    u = r.colorScheme === "auto" ? a : r.colorScheme,
    d = b.useCallback(() => s(u === "light" ? "dark" : "light"), [s, u]);
  return (
    b.useEffect(
      () => () => {
        var c;
        (c = t.current) == null || c.call(t), window.clearTimeout(n.current);
      },
      [],
    ),
    {
      colorScheme: r.colorScheme,
      setColorScheme: s,
      clearColorScheme: l,
      toggleColorScheme: d,
    }
  );
}
function US(e, t = { getInitialValueInEffect: !0 }) {
  const n = uv(e, t),
    { colorScheme: r } = Cv();
  return r === "auto" ? n : r;
}
function F(e, t, n) {
  var s;
  const r = tt(),
    o = (s = r.components[e]) == null ? void 0 : s.defaultProps,
    i = typeof o == "function" ? o(r) : o;
  return { ...t, ...i, ...jc(n) };
}
function ca(e) {
  return we(e)
    .reduce((t, n) => (e[n] !== void 0 ? `${t}${Tw(n)}:${e[n]};` : t), "")
    .trim();
}
function QS({ selector: e, styles: t, media: n, container: r }) {
  const o = t ? ca(t) : "",
    i = Array.isArray(n)
      ? n.map((l) => `@media${l.query}{${e}{${ca(l.styles)}}}`)
      : [],
    s = Array.isArray(r)
      ? r.map((l) => `@container ${l.query}{${e}{${ca(l.styles)}}}`)
      : [];
  return `${o ? `${e}{${o}}` : ""}${i.join("")}${s.join("")}`.trim();
}
function bv(e) {
  const t = Zs();
  return S.jsx("style", {
    "data-mantine-styles": "inline",
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: QS(e) },
  });
}
function qS(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: s,
    mr: l,
    me: a,
    ms: u,
    p: d,
    px: c,
    py: f,
    pt: p,
    pb: v,
    pl: w,
    pr: x,
    pe: y,
    ps: h,
    bd: m,
    bg: g,
    c: C,
    opacity: E,
    ff: _,
    fz: k,
    fw: R,
    lts: P,
    ta: j,
    lh: M,
    fs: O,
    tt: L,
    td: H,
    w: W,
    miw: J,
    maw: T,
    h: I,
    mih: A,
    mah: V,
    bgsz: B,
    bgp: Y,
    bgr: rt,
    bga: wn,
    pos: Ye,
    top: _t,
    left: X,
    bottom: Lr,
    right: Fy,
    inset: By,
    display: Vy,
    flex: Wy,
    hiddenFrom: Hy,
    visibleFrom: Uy,
    lightHidden: Qy,
    darkHidden: qy,
    sx: Yy,
    ...Ky
  } = e;
  return {
    styleProps: jc({
      m: t,
      mx: n,
      my: r,
      mt: o,
      mb: i,
      ml: s,
      mr: l,
      me: a,
      ms: u,
      p: d,
      px: c,
      py: f,
      pt: p,
      pb: v,
      pl: w,
      pr: x,
      pe: y,
      ps: h,
      bd: m,
      bg: g,
      c: C,
      opacity: E,
      ff: _,
      fz: k,
      fw: R,
      lts: P,
      ta: j,
      lh: M,
      fs: O,
      tt: L,
      td: H,
      w: W,
      miw: J,
      maw: T,
      h: I,
      mih: A,
      mah: V,
      bgsz: B,
      bgp: Y,
      bgr: rt,
      bga: wn,
      pos: Ye,
      top: _t,
      left: X,
      bottom: Lr,
      right: Fy,
      inset: By,
      display: Vy,
      flex: Wy,
      hiddenFrom: Hy,
      visibleFrom: Uy,
      lightHidden: Qy,
      darkHidden: qy,
      sx: Yy,
    }),
    rest: Ky,
  };
}
const YS = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" },
};
function Bc(e, t) {
  const n = Ko({ color: e, theme: t });
  return n.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : n.color === "bright"
      ? "var(--mantine-color-bright)"
      : n.variable
        ? `var(${n.variable})`
        : n.color;
}
function KS(e, t) {
  const n = Ko({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0
    ? `var(--mantine-color-${n.color}-text)`
    : Bc(e, t);
}
function XS(e, t) {
  if (typeof e == "number") return N(e);
  if (typeof e == "string") {
    const [n, r, ...o] = e.split(" ").filter((s) => s.trim() !== "");
    let i = `${N(n)}`;
    return (
      r && (i += ` ${r}`),
      o.length > 0 && (i += ` ${Bc(o.join(" "), t)}`),
      i.trim()
    );
  }
  return e;
}
const Qd = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function GS(e) {
  return typeof e == "string" && e in Qd ? Qd[e] : e;
}
const ZS = ["h1", "h2", "h3", "h4", "h5", "h6"];
function JS(e, t) {
  return typeof e == "string" && e in t.fontSizes
    ? `var(--mantine-font-size-${e})`
    : typeof e == "string" && ZS.includes(e)
      ? `var(--mantine-${e}-font-size)`
      : typeof e == "number" || typeof e == "string"
        ? N(e)
        : e;
}
function ex(e) {
  return e;
}
const tx = ["h1", "h2", "h3", "h4", "h5", "h6"];
function nx(e, t) {
  return typeof e == "string" && e in t.lineHeights
    ? `var(--mantine-line-height-${e})`
    : typeof e == "string" && tx.includes(e)
      ? `var(--mantine-${e}-line-height)`
      : e;
}
function rx(e) {
  return typeof e == "number" ? N(e) : e;
}
function ox(e, t) {
  if (typeof e == "number") return N(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing)) return N(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const fa = {
  color: Bc,
  textColor: KS,
  fontSize: JS,
  spacing: ox,
  identity: ex,
  size: rx,
  lineHeight: nx,
  fontFamily: GS,
  border: XS,
};
function qd(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function ix({ media: e, ...t }) {
  const r = Object.keys(e)
    .sort((o, i) => Number(qd(o)) - Number(qd(i)))
    .map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function sx(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function lx(e) {
  return typeof e == "object" && e !== null
    ? "base" in e
      ? e.base
      : void 0
    : e;
}
function ax(e) {
  return typeof e == "object" && e !== null
    ? we(e).filter((t) => t !== "base")
    : [];
}
function ux(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function cx({ styleProps: e, data: t, theme: n }) {
  return ix(
    we(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx") return r;
        const i = t[o],
          s = Array.isArray(i.property) ? i.property : [i.property],
          l = lx(e[o]);
        if (!sx(e[o]))
          return (
            s.forEach((u) => {
              r.inlineStyles[u] = fa[i.type](l, n);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const a = ax(e[o]);
        return (
          s.forEach((u) => {
            l && (r.styles[u] = fa[i.type](l, n)),
              a.forEach((d) => {
                const c = `(min-width: ${n.breakpoints[d]})`;
                r.media[c] = { ...r.media[c], [u]: fa[i.type](ux(e[o], d), n) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} },
    ),
  );
}
function fx() {
  return `__m__-${b.useId().replace(/:/g, "")}`;
}
function kv(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...kv(r, t) }), {})
    : typeof e == "function"
      ? e(t)
      : (e ?? {});
}
function Ev(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function dx(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return (
      r === void 0 || r === "" || r === !1 || r === null || (t[Ev(n)] = e[n]), t
    );
  }, {});
}
function _v(e) {
  return e
    ? typeof e == "string"
      ? { [Ev(e)]: !0 }
      : Array.isArray(e)
        ? [...e].reduce((t, n) => ({ ...t, ..._v(n) }), {})
        : dx(e)
    : null;
}
function Cu(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...Cu(r, t) }), {})
    : typeof e == "function"
      ? e(t)
      : (e ?? {});
}
function px({ theme: e, style: t, vars: n, styleProps: r }) {
  const o = Cu(t, e),
    i = Cu(n, e);
  return { ...o, ...i, ...r };
}
const Rv = b.forwardRef(
  (
    {
      component: e,
      style: t,
      __vars: n,
      className: r,
      variant: o,
      mod: i,
      size: s,
      hiddenFrom: l,
      visibleFrom: a,
      lightHidden: u,
      darkHidden: d,
      renderRoot: c,
      __size: f,
      ...p
    },
    v,
  ) => {
    var k;
    const w = tt(),
      x = e || "div",
      { styleProps: y, rest: h } = qS(p),
      m = lS(),
      g = (k = m == null ? void 0 : m()) == null ? void 0 : k(y.sx),
      C = fx(),
      E = cx({ styleProps: y, theme: w, data: YS }),
      _ = {
        ref: v,
        style: px({ theme: w, style: t, vars: n, styleProps: E.inlineStyles }),
        className: je(r, g, {
          [C]: E.hasResponsiveStyles,
          "mantine-light-hidden": u,
          "mantine-dark-hidden": d,
          [`mantine-hidden-from-${l}`]: l,
          [`mantine-visible-from-${a}`]: a,
        }),
        "data-variant": o,
        "data-size": iv(s) ? void 0 : s || void 0,
        size: f,
        ..._v(i),
        ...h,
      };
    return S.jsxs(S.Fragment, {
      children: [
        E.hasResponsiveStyles &&
          S.jsx(bv, { selector: `.${C}`, styles: E.styles, media: E.media }),
        typeof c == "function" ? c(_) : S.jsx(x, { ..._ }),
      ],
    });
  },
);
Rv.displayName = "@mantine/core/Box";
const D = Rv;
function Pv(e) {
  return e;
}
function Q(e) {
  const t = b.forwardRef(e);
  return (
    (t.extend = Pv),
    (t.withProps = (n) => {
      const r = b.forwardRef((o, i) => S.jsx(t, { ...n, ...o, ref: i }));
      return (
        (r.extend = t.extend),
        (r.displayName = `WithProps(${t.displayName})`),
        r
      );
    }),
    t
  );
}
function mt(e) {
  const t = b.forwardRef(e);
  return (
    (t.withProps = (n) => {
      const r = b.forwardRef((o, i) => S.jsx(t, { ...n, ...o, ref: i }));
      return (
        (r.extend = t.extend),
        (r.displayName = `WithProps(${t.displayName})`),
        r
      );
    }),
    (t.extend = Pv),
    t
  );
}
const mx = b.createContext({
  dir: "ltr",
  toggleDirection: () => {},
  setDirection: () => {},
});
function Nv() {
  return b.useContext(mx);
}
function hx(e) {
  if (!e || typeof e == "string") return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function da(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const Kr = typeof window < "u" && window.requestAnimationFrame;
function vx({
  transitionDuration: e,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: n = () => {},
  opened: r,
}) {
  const o = b.useRef(null),
    i = 0,
    s = { display: "none", height: 0, overflow: "hidden" },
    [l, a] = b.useState(r ? {} : s),
    u = (v) => {
      Ys.flushSync(() => a(v));
    },
    d = (v) => {
      u((w) => ({ ...w, ...v }));
    };
  function c(v) {
    const w = e || hx(v);
    return { transition: `height ${w}ms ${t}, opacity ${w}ms ${t}` };
  }
  $c(() => {
    typeof Kr == "function" &&
      Kr(
        r
          ? () => {
              d({ willChange: "height", display: "block", overflow: "hidden" }),
                Kr(() => {
                  const v = da(o);
                  d({ ...c(v), height: v });
                });
            }
          : () => {
              const v = da(o);
              d({ ...c(v), willChange: "height", height: v }),
                Kr(() => d({ height: i, overflow: "hidden" }));
            },
      );
  }, [r]);
  const f = (v) => {
    if (!(v.target !== o.current || v.propertyName !== "height"))
      if (r) {
        const w = da(o);
        w === l.height ? u({}) : d({ height: w }), n();
      } else l.height === i && (u(s), n());
  };
  function p({ style: v = {}, refKey: w = "ref", ...x } = {}) {
    const y = x[w];
    return {
      "aria-hidden": !r,
      ...x,
      [w]: vv(o, y),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...v, ...l },
    };
  }
  return p;
}
const yx = {
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    animateOpacity: !0,
  },
  jv = Q((e, t) => {
    const {
        children: n,
        in: r,
        transitionDuration: o,
        transitionTimingFunction: i,
        style: s,
        onTransitionEnd: l,
        animateOpacity: a,
        ...u
      } = F("Collapse", yx, e),
      d = tt(),
      c = Ac(),
      p = (d.respectReducedMotion ? c : !1) ? 0 : o,
      v = vx({
        opened: r,
        transitionDuration: p,
        transitionTimingFunction: i,
        onTransitionEnd: l,
      });
    return p === 0
      ? r
        ? S.jsx(D, { ...u, children: n })
        : null
      : S.jsx(D, {
          ...v({
            style: {
              opacity: r || !a ? 1 : 0,
              transition: a ? `opacity ${p}ms ${i}` : "none",
              ...kv(s, d),
            },
            ref: t,
            ...u,
          }),
          children: n,
        });
  });
jv.displayName = "@mantine/core/Collapse";
const [gx, nt] = Mr("ScrollArea.Root component was not found in tree");
function _r(e, t) {
  const n = bn(t);
  zr(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
const wx = b.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = nt(),
      [i, s] = b.useState(0),
      [l, a] = b.useState(0),
      u = !!(i && l);
    return (
      _r(o.scrollbarX, () => {
        var c;
        const d = ((c = o.scrollbarX) == null ? void 0 : c.offsetHeight) || 0;
        o.onCornerHeightChange(d), a(d);
      }),
      _r(o.scrollbarY, () => {
        var c;
        const d = ((c = o.scrollbarY) == null ? void 0 : c.offsetWidth) || 0;
        o.onCornerWidthChange(d), s(d);
      }),
      u
        ? S.jsx("div", { ...r, ref: t, style: { ...n, width: i, height: l } })
        : null
    );
  }),
  Sx = b.forwardRef((e, t) => {
    const n = nt(),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? S.jsx(wx, { ...e, ref: t }) : null;
  }),
  xx = { scrollHideDelay: 1e3, type: "hover" },
  Tv = b.forwardRef((e, t) => {
    const n = F("ScrollAreaRoot", xx, e),
      { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n,
      [l, a] = b.useState(null),
      [u, d] = b.useState(null),
      [c, f] = b.useState(null),
      [p, v] = b.useState(null),
      [w, x] = b.useState(null),
      [y, h] = b.useState(0),
      [m, g] = b.useState(0),
      [C, E] = b.useState(!1),
      [_, k] = b.useState(!1),
      R = Ft(t, (P) => a(P));
    return S.jsx(gx, {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: l,
        viewport: u,
        onViewportChange: d,
        content: c,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: v,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: E,
        scrollbarY: w,
        onScrollbarYChange: x,
        scrollbarYEnabled: _,
        onScrollbarYEnabledChange: k,
        onCornerWidthChange: h,
        onCornerHeightChange: g,
      },
      children: S.jsx(D, {
        ...s,
        ref: R,
        __vars: {
          "--sa-corner-width": i !== "xy" ? "0px" : `${y}px`,
          "--sa-corner-height": i !== "xy" ? "0px" : `${m}px`,
        },
      }),
    });
  });
Tv.displayName = "@mantine/core/ScrollAreaRoot";
function $v(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Js(e) {
  const t = $v(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Mv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Cx(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Yd(e, t, n = "ltr") {
  const r = Js(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    i = t.scrollbar.size - o,
    s = t.content - t.viewport,
    l = i - r,
    a = n === "ltr" ? [0, s] : [s * -1, 0],
    u = Cx(e, a);
  return Mv([0, s], [0, l])(u);
}
function bx(e, t, n, r = "ltr") {
  const o = Js(n),
    i = o / 2,
    s = t || i,
    l = o - s,
    a = n.scrollbar.paddingStart + s,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - l,
    d = n.content - n.viewport,
    c = r === "ltr" ? [0, d] : [d * -1, 0];
  return Mv([a, u], c)(e);
}
function Av(e, t) {
  return e > 0 && e < t;
}
function Es(e) {
  return e ? parseInt(e, 10) : 0;
}
function jn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [kx, zv] = Mr("ScrollAreaScrollbar was not found in tree"),
  Iv = b.forwardRef((e, t) => {
    const {
        sizes: n,
        hasThumb: r,
        onThumbChange: o,
        onThumbPointerUp: i,
        onThumbPointerDown: s,
        onThumbPositionChange: l,
        onDragScroll: a,
        onWheelScroll: u,
        onResize: d,
        ...c
      } = e,
      f = nt(),
      [p, v] = b.useState(null),
      w = Ft(t, (k) => v(k)),
      x = b.useRef(null),
      y = b.useRef(""),
      { viewport: h } = f,
      m = n.content - n.viewport,
      g = bn(u),
      C = bn(l),
      E = Gs(d, 10),
      _ = (k) => {
        if (x.current) {
          const R = k.clientX - x.current.left,
            P = k.clientY - x.current.top;
          a({ x: R, y: P });
        }
      };
    return (
      b.useEffect(() => {
        const k = (R) => {
          const P = R.target;
          (p == null ? void 0 : p.contains(P)) && g(R, m);
        };
        return (
          document.addEventListener("wheel", k, { passive: !1 }),
          () => document.removeEventListener("wheel", k, { passive: !1 })
        );
      }, [h, p, m, g]),
      b.useEffect(C, [n, C]),
      _r(p, E),
      _r(f.content, E),
      S.jsx(kx, {
        value: {
          scrollbar: p,
          hasThumb: r,
          onThumbChange: bn(o),
          onThumbPointerUp: bn(i),
          onThumbPositionChange: C,
          onThumbPointerDown: bn(s),
        },
        children: S.jsx("div", {
          ...c,
          ref: w,
          "data-mantine-scrollbar": !0,
          style: { position: "absolute", ...c.style },
          onPointerDown: jn(e.onPointerDown, (k) => {
            k.preventDefault(),
              k.button === 0 &&
                (k.target.setPointerCapture(k.pointerId),
                (x.current = p.getBoundingClientRect()),
                (y.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = "none"),
                _(k));
          }),
          onPointerMove: jn(e.onPointerMove, _),
          onPointerUp: jn(e.onPointerUp, (k) => {
            k.preventDefault();
            const R = k.target;
            R.hasPointerCapture(k.pointerId) &&
              R.releasePointerCapture(k.pointerId),
              (document.body.style.webkitUserSelect = y.current),
              (x.current = null);
          }),
        }),
      })
    );
  }),
  Ex = b.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e,
      s = nt(),
      [l, a] = b.useState(),
      u = b.useRef(null),
      d = Ft(t, u, s.onScrollbarXChange);
    return (
      b.useEffect(() => {
        u.current && a(getComputedStyle(u.current));
      }, [u]),
      S.jsx(Iv, {
        "data-orientation": "horizontal",
        ...i,
        ref: d,
        sizes: n,
        style: { ...o, "--sa-thumb-width": `${Js(n)}px` },
        onThumbPointerDown: (c) => e.onThumbPointerDown(c.x),
        onDragScroll: (c) => e.onDragScroll(c.x),
        onWheelScroll: (c, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollLeft + c.deltaX;
            e.onWheelScroll(p), Av(p, f) && c.preventDefault();
          }
        },
        onResize: () => {
          u.current &&
            s.viewport &&
            l &&
            r({
              content: s.viewport.scrollWidth,
              viewport: s.viewport.offsetWidth,
              scrollbar: {
                size: u.current.clientWidth,
                paddingStart: Es(l.paddingLeft),
                paddingEnd: Es(l.paddingRight),
              },
            });
        },
      })
    );
  }),
  _x = b.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e,
      s = nt(),
      [l, a] = b.useState(),
      u = b.useRef(null),
      d = Ft(t, u, s.onScrollbarYChange);
    return (
      b.useEffect(() => {
        u.current && a(window.getComputedStyle(u.current));
      }, []),
      S.jsx(Iv, {
        ...i,
        "data-orientation": "vertical",
        ref: d,
        sizes: n,
        style: { "--sa-thumb-height": `${Js(n)}px`, ...o },
        onThumbPointerDown: (c) => e.onThumbPointerDown(c.y),
        onDragScroll: (c) => e.onDragScroll(c.y),
        onWheelScroll: (c, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollTop + c.deltaY;
            e.onWheelScroll(p), Av(p, f) && c.preventDefault();
          }
        },
        onResize: () => {
          u.current &&
            s.viewport &&
            l &&
            r({
              content: s.viewport.scrollHeight,
              viewport: s.viewport.offsetHeight,
              scrollbar: {
                size: u.current.clientHeight,
                paddingStart: Es(l.paddingTop),
                paddingEnd: Es(l.paddingBottom),
              },
            });
        },
      })
    );
  }),
  Vc = b.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      { dir: o } = Nv(),
      i = nt(),
      s = b.useRef(null),
      l = b.useRef(0),
      [a, u] = b.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      d = $v(a.viewport, a.content),
      c = {
        ...r,
        sizes: a,
        onSizesChange: u,
        hasThumb: d > 0 && d < 1,
        onThumbChange: (p) => {
          s.current = p;
        },
        onThumbPointerUp: () => {
          l.current = 0;
        },
        onThumbPointerDown: (p) => {
          l.current = p;
        },
      },
      f = (p, v) => bx(p, l.current, a, v);
    return n === "horizontal"
      ? S.jsx(Ex, {
          ...c,
          ref: t,
          onThumbPositionChange: () => {
            if (i.viewport && s.current) {
              const p = i.viewport.scrollLeft,
                v = Yd(p, a, o);
              s.current.style.transform = `translate3d(${v}px, 0, 0)`;
            }
          },
          onWheelScroll: (p) => {
            i.viewport && (i.viewport.scrollLeft = p);
          },
          onDragScroll: (p) => {
            i.viewport && (i.viewport.scrollLeft = f(p, o));
          },
        })
      : n === "vertical"
        ? S.jsx(_x, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (i.viewport && s.current) {
                const p = i.viewport.scrollTop,
                  v = Yd(p, a);
                a.scrollbar.size === 0
                  ? (s.current.style.opacity = "0")
                  : (s.current.style.opacity = "1"),
                  (s.current.style.transform = `translate3d(0, ${v}px, 0)`);
              }
            },
            onWheelScroll: (p) => {
              i.viewport && (i.viewport.scrollTop = p);
            },
            onDragScroll: (p) => {
              i.viewport && (i.viewport.scrollTop = f(p));
            },
          })
        : null;
  }),
  Ov = b.forwardRef((e, t) => {
    const n = nt(),
      { forceMount: r, ...o } = e,
      [i, s] = b.useState(!1),
      l = e.orientation === "horizontal",
      a = Gs(() => {
        if (n.viewport) {
          const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
            d = n.viewport.offsetHeight < n.viewport.scrollHeight;
          s(l ? u : d);
        }
      }, 10);
    return (
      _r(n.viewport, a),
      _r(n.content, a),
      r || i
        ? S.jsx(Vc, { "data-state": i ? "visible" : "hidden", ...o, ref: t })
        : null
    );
  }),
  Rx = b.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = nt(),
      [i, s] = b.useState(!1);
    return (
      b.useEffect(() => {
        const { scrollArea: l } = o;
        let a = 0;
        if (l) {
          const u = () => {
              window.clearTimeout(a), s(!0);
            },
            d = () => {
              a = window.setTimeout(() => s(!1), o.scrollHideDelay);
            };
          return (
            l.addEventListener("pointerenter", u),
            l.addEventListener("pointerleave", d),
            () => {
              window.clearTimeout(a),
                l.removeEventListener("pointerenter", u),
                l.removeEventListener("pointerleave", d);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      n || i
        ? S.jsx(Ov, { "data-state": i ? "visible" : "hidden", ...r, ref: t })
        : null
    );
  }),
  Px = b.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = nt(),
      i = e.orientation === "horizontal",
      [s, l] = b.useState("hidden"),
      a = Gs(() => l("idle"), 100);
    return (
      b.useEffect(() => {
        if (s === "idle") {
          const u = window.setTimeout(() => l("hidden"), o.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [s, o.scrollHideDelay]),
      b.useEffect(() => {
        const { viewport: u } = o,
          d = i ? "scrollLeft" : "scrollTop";
        if (u) {
          let c = u[d];
          const f = () => {
            const p = u[d];
            c !== p && (l("scrolling"), a()), (c = p);
          };
          return (
            u.addEventListener("scroll", f),
            () => u.removeEventListener("scroll", f)
          );
        }
      }, [o.viewport, i, a]),
      n || s !== "hidden"
        ? S.jsx(Vc, {
            "data-state": s === "hidden" ? "hidden" : "visible",
            ...r,
            ref: t,
            onPointerEnter: jn(e.onPointerEnter, () => l("interacting")),
            onPointerLeave: jn(e.onPointerLeave, () => l("idle")),
          })
        : null
    );
  }),
  Kd = b.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = nt(),
      { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o,
      l = e.orientation === "horizontal";
    return (
      b.useEffect(
        () => (
          l ? i(!0) : s(!0),
          () => {
            l ? i(!1) : s(!1);
          }
        ),
        [l, i, s],
      ),
      o.type === "hover"
        ? S.jsx(Rx, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
          ? S.jsx(Px, { ...r, ref: t, forceMount: n })
          : o.type === "auto"
            ? S.jsx(Ov, { ...r, ref: t, forceMount: n })
            : o.type === "always"
              ? S.jsx(Vc, { ...r, ref: t })
              : null
    );
  });
function Nx(e, t = () => {}) {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const i = { left: e.scrollLeft, top: e.scrollTop },
        s = n.left !== i.left,
        l = n.top !== i.top;
      (s || l) && t(), (n = i), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
}
const jx = b.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = nt(),
      i = zv(),
      { onThumbPositionChange: s } = i,
      l = Ft(t, (d) => i.onThumbChange(d)),
      a = b.useRef(),
      u = Gs(() => {
        a.current && (a.current(), (a.current = void 0));
      }, 100);
    return (
      b.useEffect(() => {
        const { viewport: d } = o;
        if (d) {
          const c = () => {
            if ((u(), !a.current)) {
              const f = Nx(d, s);
              (a.current = f), s();
            }
          };
          return (
            s(),
            d.addEventListener("scroll", c),
            () => d.removeEventListener("scroll", c)
          );
        }
      }, [o.viewport, u, s]),
      S.jsx("div", {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--sa-thumb-width)",
          height: "var(--sa-thumb-height)",
          ...n,
        },
        onPointerDownCapture: jn(e.onPointerDownCapture, (d) => {
          const f = d.target.getBoundingClientRect(),
            p = d.clientX - f.left,
            v = d.clientY - f.top;
          i.onThumbPointerDown({ x: p, y: v });
        }),
        onPointerUp: jn(e.onPointerUp, i.onThumbPointerUp),
      })
    );
  }),
  Xd = b.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = zv();
    return n || o.hasThumb ? S.jsx(jx, { ref: t, ...r }) : null;
  }),
  Lv = b.forwardRef(({ children: e, style: t, ...n }, r) => {
    const o = nt(),
      i = Ft(r, o.onViewportChange);
    return S.jsx(D, {
      ...n,
      ref: i,
      style: {
        overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
        ...t,
      },
      children: S.jsx("div", {
        style: { minWidth: "100%", display: "table" },
        ref: o.onContentChange,
        children: e,
      }),
    });
  });
Lv.displayName = "@mantine/core/ScrollAreaViewport";
var Wc = {
  root: "m_d57069b5",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268",
};
const Dv = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
  Tx = (e, { scrollbarSize: t }) => ({
    root: { "--scrollarea-scrollbar-size": N(t) },
  }),
  Xo = Q((e, t) => {
    const n = F("ScrollArea", Dv, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        scrollbarSize: a,
        vars: u,
        type: d,
        scrollHideDelay: c,
        viewportProps: f,
        viewportRef: p,
        onScrollPositionChange: v,
        children: w,
        offsetScrollbars: x,
        scrollbars: y,
        onBottomReached: h,
        onTopReached: m,
        ...g
      } = n,
      [C, E] = b.useState(!1),
      _ = G({
        name: "ScrollArea",
        props: n,
        classes: Wc,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: u,
        varsResolver: Tx,
      });
    return S.jsxs(Tv, {
      type: d === "never" ? "always" : d,
      scrollHideDelay: c,
      ref: t,
      scrollbars: y,
      ..._("root"),
      ...g,
      children: [
        S.jsx(Lv, {
          ...f,
          ..._("viewport", { style: f == null ? void 0 : f.style }),
          ref: p,
          "data-offset-scrollbars": x === !0 ? "xy" : x || void 0,
          "data-scrollbars": y || void 0,
          onScroll: (k) => {
            var M;
            (M = f == null ? void 0 : f.onScroll) == null || M.call(f, k),
              v == null ||
                v({
                  x: k.currentTarget.scrollLeft,
                  y: k.currentTarget.scrollTop,
                });
            const {
              scrollTop: R,
              scrollHeight: P,
              clientHeight: j,
            } = k.currentTarget;
            R - (P - j) === 0 && (h == null || h()),
              R === 0 && (m == null || m());
          },
          children: w,
        }),
        (y === "xy" || y === "x") &&
          S.jsx(Kd, {
            ..._("scrollbar"),
            orientation: "horizontal",
            "data-hidden": d === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => E(!0),
            onMouseLeave: () => E(!1),
            children: S.jsx(Xd, { ..._("thumb") }),
          }),
        (y === "xy" || y === "y") &&
          S.jsx(Kd, {
            ..._("scrollbar"),
            orientation: "vertical",
            "data-hidden": d === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => E(!0),
            onMouseLeave: () => E(!1),
            children: S.jsx(Xd, { ..._("thumb") }),
          }),
        S.jsx(Sx, {
          ..._("corner"),
          "data-hovered": C || void 0,
          "data-hidden": d === "never" || void 0,
        }),
      ],
    });
  });
Xo.displayName = "@mantine/core/ScrollArea";
const Hc = Q((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: i,
    scrollHideDelay: s,
    type: l,
    dir: a,
    offsetScrollbars: u,
    viewportRef: d,
    onScrollPositionChange: c,
    unstyled: f,
    variant: p,
    viewportProps: v,
    scrollbars: w,
    style: x,
    vars: y,
    onBottomReached: h,
    ...m
  } = F("ScrollAreaAutosize", Dv, e);
  return S.jsx(D, {
    ...m,
    ref: t,
    style: [{ display: "flex", overflow: "auto" }, x],
    children: S.jsx(D, {
      style: { display: "flex", flexDirection: "column", flex: 1 },
      children: S.jsx(Xo, {
        classNames: r,
        styles: o,
        scrollHideDelay: s,
        scrollbarSize: i,
        type: l,
        dir: a,
        offsetScrollbars: u,
        viewportRef: d,
        onScrollPositionChange: c,
        unstyled: f,
        variant: p,
        viewportProps: v,
        vars: y,
        scrollbars: w,
        onBottomReached: h,
        children: n,
      }),
    }),
  });
});
Xo.classes = Wc;
Hc.displayName = "@mantine/core/ScrollAreaAutosize";
Hc.classes = Wc;
Xo.Autosize = Hc;
var Fv = { root: "m_87cf2631" };
const $x = { __staticSelector: "UnstyledButton" },
  yn = mt((e, t) => {
    const n = F("UnstyledButton", $x, e),
      {
        className: r,
        component: o = "button",
        __staticSelector: i,
        unstyled: s,
        classNames: l,
        styles: a,
        style: u,
        ...d
      } = n,
      c = G({
        name: i,
        props: n,
        classes: Fv,
        className: r,
        style: u,
        classNames: l,
        styles: a,
        unstyled: s,
      });
    return S.jsx(D, {
      ...c("root", { focusable: !0 }),
      component: o,
      ref: t,
      type: o === "button" ? "button" : void 0,
      ...d,
    });
  });
yn.classes = Fv;
yn.displayName = "@mantine/core/UnstyledButton";
var Bv = { root: "m_515a97f8" };
const Mx = {},
  yr = Q((e, t) => {
    const n = F("VisuallyHidden", Mx, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        ...u
      } = n,
      d = G({
        name: "VisuallyHidden",
        classes: Bv,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
      });
    return S.jsx(D, { component: "span", ref: t, ...d("root"), ...u });
  });
yr.classes = Bv;
yr.displayName = "@mantine/core/VisuallyHidden";
var Vv = { root: "m_1b7284a3" };
const Ax = {},
  zx = (e, { radius: t, shadow: n }) => ({
    root: {
      "--paper-radius": t === void 0 ? void 0 : Et(t),
      "--paper-shadow": sv(n),
    },
  }),
  Uc = mt((e, t) => {
    const n = F("Paper", Ax, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        withBorder: a,
        vars: u,
        radius: d,
        shadow: c,
        variant: f,
        mod: p,
        ...v
      } = n,
      w = G({
        name: "Paper",
        props: n,
        classes: Vv,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: u,
        varsResolver: zx,
      });
    return S.jsx(D, {
      ref: t,
      mod: [{ "data-with-border": a }, p],
      ...w("root"),
      variant: f,
      ...v,
    });
  });
Uc.classes = Vv;
Uc.displayName = "@mantine/core/Paper";
function Qc({ children: e, active: t = !0, refProp: n = "ref", innerRef: r }) {
  const o = Uw(t),
    i = Ft(o, r);
  return Mw(e) ? b.cloneElement(e, { [n]: i }) : e;
}
function Wv(e) {
  return S.jsx(yr, { tabIndex: -1, "data-autofocus": !0, ...e });
}
Qc.displayName = "@mantine/core/FocusTrap";
Wv.displayName = "@mantine/core/FocusTrapInitialFocus";
Qc.InitialFocus = Wv;
function Ix(e) {
  const t = document.createElement("div");
  return (
    t.setAttribute("data-portal", "true"),
    typeof e.className == "string" &&
      t.classList.add(...e.className.split(" ").filter(Boolean)),
    typeof e.style == "object" && Object.assign(t.style, e.style),
    typeof e.id == "string" && t.setAttribute("id", e.id),
    t
  );
}
const Ox = {},
  Hv = b.forwardRef((e, t) => {
    const { children: n, target: r, ...o } = F("Portal", Ox, e),
      [i, s] = b.useState(!1),
      l = b.useRef(null);
    return (
      zr(
        () => (
          s(!0),
          (l.current = r
            ? typeof r == "string"
              ? document.querySelector(r)
              : r
            : Ix(o)),
          hv(t, l.current),
          !r && l.current && document.body.appendChild(l.current),
          () => {
            !r && l.current && document.body.removeChild(l.current);
          }
        ),
        [r],
      ),
      !i || !l.current
        ? null
        : Ys.createPortal(S.jsx(S.Fragment, { children: n }), l.current)
    );
  });
Hv.displayName = "@mantine/core/Portal";
function Uv({ withinPortal: e = !0, children: t, ...n }) {
  return e
    ? S.jsx(Hv, { ...n, children: t })
    : S.jsx(S.Fragment, { children: t });
}
Uv.displayName = "@mantine/core/OptionalPortal";
const Xr = (e) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${N(e === "bottom" ? 10 : -10)})`,
    },
    transitionProperty: "transform, opacity",
  }),
  Ai = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: `translateY(${N(30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: `translateY(${N(-30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: `translateX(${N(30)}` },
      transitionProperty: "opacity, transform",
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: `translateX(${N(-30)}` },
      transitionProperty: "opacity, transform",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${N(-20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${N(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${N(20)}) rotate(-5deg)` },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${N(20)}) rotate(5deg)` },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: { ...Xr("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": {
      ...Xr("bottom"),
      common: { transformOrigin: "bottom left" },
    },
    "pop-bottom-right": {
      ...Xr("bottom"),
      common: { transformOrigin: "bottom right" },
    },
    "pop-top-left": { ...Xr("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...Xr("top"), common: { transformOrigin: "top right" } },
  },
  Gd = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function Lx({ transition: e, state: t, duration: n, timingFunction: r }) {
  const o = { transitionDuration: `${n}ms`, transitionTimingFunction: r };
  return typeof e == "string"
    ? e in Ai
      ? {
          transitionProperty: Ai[e].transitionProperty,
          ...o,
          ...Ai[e].common,
          ...Ai[e][Gd[t]],
        }
      : {}
    : {
        transitionProperty: e.transitionProperty,
        ...o,
        ...e.common,
        ...e[Gd[t]],
      };
}
function Dx({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: l,
  enterDelay: a,
  exitDelay: u,
}) {
  const d = tt(),
    c = Ac(),
    f = d.respectReducedMotion ? c : !1,
    [p, v] = b.useState(f ? 0 : e),
    [w, x] = b.useState(r ? "entered" : "exited"),
    y = b.useRef(-1),
    h = b.useRef(-1),
    m = b.useRef(-1),
    g = (E) => {
      const _ = E ? o : i,
        k = E ? s : l;
      window.clearTimeout(y.current);
      const R = f ? 0 : E ? e : t;
      v(R),
        R === 0
          ? (typeof _ == "function" && _(),
            typeof k == "function" && k(),
            x(E ? "entered" : "exited"))
          : (m.current = requestAnimationFrame(() => {
              k1.flushSync(() => {
                x(E ? "pre-entering" : "pre-exiting");
              }),
                (m.current = requestAnimationFrame(() => {
                  typeof _ == "function" && _(),
                    x(E ? "entering" : "exiting"),
                    (y.current = window.setTimeout(() => {
                      typeof k == "function" && k(),
                        x(E ? "entered" : "exited");
                    }, R));
                }));
            }));
    },
    C = (E) => {
      if ((window.clearTimeout(h.current), typeof (E ? a : u) != "number")) {
        g(E);
        return;
      }
      h.current = window.setTimeout(
        () => {
          g(E);
        },
        E ? a : u,
      );
    };
  return (
    $c(() => {
      C(r);
    }, [r]),
    b.useEffect(
      () => () => {
        window.clearTimeout(y.current), cancelAnimationFrame(m.current);
      },
      [],
    ),
    {
      transitionDuration: p,
      transitionStatus: w,
      transitionTimingFunction: n || "ease",
    }
  );
}
function Go({
  keepMounted: e,
  transition: t = "fade",
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: i,
  timingFunction: s = "ease",
  onExit: l,
  onEntered: a,
  onEnter: u,
  onExited: d,
  enterDelay: c,
  exitDelay: f,
}) {
  const {
    transitionDuration: p,
    transitionStatus: v,
    transitionTimingFunction: w,
  } = Dx({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: s,
    onExit: l,
    onEntered: a,
    onEnter: u,
    onExited: d,
    enterDelay: c,
    exitDelay: f,
  });
  return p === 0
    ? o
      ? S.jsx(S.Fragment, { children: i({}) })
      : e
        ? i({ display: "none" })
        : null
    : v === "exited"
      ? e
        ? i({ display: "none" })
        : null
      : S.jsx(S.Fragment, {
          children: i(
            Lx({ transition: t, duration: p, state: v, timingFunction: w }),
          ),
        });
}
Go.displayName = "@mantine/core/Transition";
var at = {
  root: "m_5ae2e3c",
  barsLoader: "m_7a2bd4cd",
  bar: "m_870bb79",
  "bars-loader-animation": "m_5d2b3b9d",
  dotsLoader: "m_4e3f22d7",
  dot: "m_870c4af",
  "loader-dots-animation": "m_aac34a1",
  ovalLoader: "m_b34414df",
  "oval-loader-animation": "m_f8e89c4b",
};
const Fx = b.forwardRef(({ className: e, ...t }, n) =>
    S.jsxs(D, {
      component: "span",
      className: je(at.barsLoader, e),
      ...t,
      ref: n,
      children: [
        S.jsx("span", { className: at.bar }),
        S.jsx("span", { className: at.bar }),
        S.jsx("span", { className: at.bar }),
      ],
    }),
  ),
  Bx = b.forwardRef(({ className: e, ...t }, n) =>
    S.jsxs(D, {
      component: "span",
      className: je(at.dotsLoader, e),
      ...t,
      ref: n,
      children: [
        S.jsx("span", { className: at.dot }),
        S.jsx("span", { className: at.dot }),
        S.jsx("span", { className: at.dot }),
      ],
    }),
  ),
  Vx = b.forwardRef(({ className: e, ...t }, n) =>
    S.jsx(D, {
      component: "span",
      className: je(at.ovalLoader, e),
      ...t,
      ref: n,
    }),
  ),
  Qv = { bars: Fx, oval: Vx, dots: Bx },
  Wx = { loaders: Qv, type: "oval" },
  Hx = (e, { size: t, color: n }) => ({
    root: {
      "--loader-size": ce(t, "loader-size"),
      "--loader-color": n ? Ot(n, e) : void 0,
    },
  }),
  Zo = Q((e, t) => {
    const n = F("Loader", Wx, e),
      {
        size: r,
        color: o,
        type: i,
        vars: s,
        className: l,
        style: a,
        classNames: u,
        styles: d,
        unstyled: c,
        loaders: f,
        variant: p,
        children: v,
        ...w
      } = n,
      x = G({
        name: "Loader",
        props: n,
        classes: at,
        className: l,
        style: a,
        classNames: u,
        styles: d,
        unstyled: c,
        vars: s,
        varsResolver: Hx,
      });
    return v
      ? S.jsx(D, { ...x("root"), ref: t, ...w, children: v })
      : S.jsx(D, {
          ...x("root"),
          ref: t,
          component: f[i],
          variant: p,
          size: r,
          ...w,
        });
  });
Zo.defaultLoaders = Qv;
Zo.classes = at;
Zo.displayName = "@mantine/core/Loader";
var el = {
  root: "m_8d3f4000",
  icon: "m_8d3afb97",
  loader: "m_302b9fb1",
  group: "m_1a0f1b21",
};
const Zd = { orientation: "horizontal" },
  Ux = (e, { borderWidth: t }) => ({ group: { "--ai-border-width": N(t) } }),
  qc = Q((e, t) => {
    const n = F("ActionIconGroup", Zd, e),
      {
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: l,
        orientation: a,
        vars: u,
        borderWidth: d,
        variant: c,
        mod: f,
        ...p
      } = F("ActionIconGroup", Zd, e),
      v = G({
        name: "ActionIconGroup",
        props: n,
        classes: el,
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: l,
        vars: u,
        varsResolver: Ux,
        rootSelector: "group",
      });
    return S.jsx(D, {
      ...v("group"),
      ref: t,
      variant: c,
      mod: [{ "data-orientation": a }, f],
      role: "group",
      ...p,
    });
  });
qc.classes = el;
qc.displayName = "@mantine/core/ActionIconGroup";
const Qx = {},
  qx = (
    e,
    { size: t, radius: n, variant: r, gradient: o, color: i, autoContrast: s },
  ) => {
    const l = e.variantColorResolver({
      color: i || e.primaryColor,
      theme: e,
      gradient: o,
      variant: r || "filled",
      autoContrast: s,
    });
    return {
      root: {
        "--ai-size": ce(t, "ai-size"),
        "--ai-radius": n === void 0 ? void 0 : Et(n),
        "--ai-bg": i || r ? l.background : void 0,
        "--ai-hover": i || r ? l.hover : void 0,
        "--ai-hover-color": i || r ? l.hoverColor : void 0,
        "--ai-color": l.color,
        "--ai-bd": i || r ? l.border : void 0,
      },
    };
  },
  tl = mt((e, t) => {
    const n = F("ActionIcon", Qx, e),
      {
        className: r,
        unstyled: o,
        variant: i,
        classNames: s,
        styles: l,
        style: a,
        loading: u,
        loaderProps: d,
        size: c,
        color: f,
        radius: p,
        __staticSelector: v,
        gradient: w,
        vars: x,
        children: y,
        disabled: h,
        "data-disabled": m,
        autoContrast: g,
        mod: C,
        ...E
      } = n,
      _ = G({
        name: ["ActionIcon", v],
        props: n,
        className: r,
        style: a,
        classes: el,
        classNames: s,
        styles: l,
        unstyled: o,
        vars: x,
        varsResolver: qx,
      });
    return S.jsxs(yn, {
      ..._("root", { active: !h && !u && !m }),
      ...E,
      unstyled: o,
      variant: i,
      size: c,
      disabled: h || u,
      ref: t,
      mod: [{ loading: u, disabled: h || m }, C],
      children: [
        S.jsx(Go, {
          mounted: !!u,
          transition: "slide-down",
          duration: 150,
          children: (k) =>
            S.jsx(D, {
              component: "span",
              ..._("loader", { style: k }),
              "aria-hidden": !0,
              children: S.jsx(Zo, {
                color: "var(--ai-color)",
                size: "calc(var(--ai-size) * 0.55)",
                ...d,
              }),
            }),
        }),
        S.jsx(D, {
          component: "span",
          mod: { loading: u },
          ..._("icon"),
          children: y,
        }),
      ],
    });
  });
tl.classes = el;
tl.displayName = "@mantine/core/ActionIcon";
tl.Group = qc;
const qv = b.forwardRef(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) =>
    S.jsx("svg", {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: S.jsx("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    }),
);
qv.displayName = "@mantine/core/CloseIcon";
var Yv = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const Yx = { variant: "subtle" },
  Kx = (e, { size: t, radius: n, iconSize: r }) => ({
    root: {
      "--cb-size": ce(t, "cb-size"),
      "--cb-radius": n === void 0 ? void 0 : Et(n),
      "--cb-icon-size": N(r),
    },
  }),
  nl = mt((e, t) => {
    const n = F("CloseButton", Yx, e),
      {
        iconSize: r,
        children: o,
        vars: i,
        radius: s,
        className: l,
        classNames: a,
        style: u,
        styles: d,
        unstyled: c,
        "data-disabled": f,
        disabled: p,
        variant: v,
        icon: w,
        mod: x,
        ...y
      } = n,
      h = G({
        name: "CloseButton",
        props: n,
        className: l,
        style: u,
        classes: Yv,
        classNames: a,
        styles: d,
        unstyled: c,
        vars: i,
        varsResolver: Kx,
      });
    return S.jsxs(yn, {
      ref: t,
      ...y,
      unstyled: c,
      variant: v,
      disabled: p,
      mod: [{ disabled: p || f }, x],
      ...h("root", { variant: v, active: !p && !f }),
      children: [w || S.jsx(qv, {}), o],
    });
  });
nl.classes = Yv;
nl.displayName = "@mantine/core/CloseButton";
function Xx(e) {
  return b.Children.toArray(e).filter(Boolean);
}
var Kv = { root: "m_4081bf90" };
const Gx = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  Zx = (
    e,
    { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s },
    { childWidth: l },
  ) => ({
    root: {
      "--group-child-width": t && n ? l : void 0,
      "--group-gap": Ar(r),
      "--group-align": o,
      "--group-justify": i,
      "--group-wrap": s,
    },
  }),
  _e = Q((e, t) => {
    const n = F("Group", Gx, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        children: a,
        gap: u,
        align: d,
        justify: c,
        wrap: f,
        grow: p,
        preventGrowOverflow: v,
        vars: w,
        variant: x,
        __size: y,
        mod: h,
        ...m
      } = n,
      g = Xx(a),
      C = g.length,
      E = Ar(u ?? "md"),
      k = { childWidth: `calc(${100 / C}% - (${E} - ${E} / ${C}))` },
      R = G({
        name: "Group",
        props: n,
        stylesCtx: k,
        className: o,
        style: i,
        classes: Kv,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: w,
        varsResolver: Zx,
      });
    return S.jsx(D, {
      ...R("root"),
      ref: t,
      variant: x,
      mod: [{ grow: p }, h],
      size: y,
      ...m,
      children: g,
    });
  });
_e.classes = Kv;
_e.displayName = "@mantine/core/Group";
var Xv = { root: "m_9814e45f" };
const Jx = { zIndex: Yo("modal") },
  e2 = (
    e,
    {
      gradient: t,
      color: n,
      backgroundOpacity: r,
      blur: o,
      radius: i,
      zIndex: s,
    },
  ) => ({
    root: {
      "--overlay-bg":
        t ||
        ((n !== void 0 || r !== void 0) && gt(n || "#000", r ?? 0.6)) ||
        void 0,
      "--overlay-filter": o ? `blur(${N(o)})` : void 0,
      "--overlay-radius": i === void 0 ? void 0 : Et(i),
      "--overlay-z-index": s == null ? void 0 : s.toString(),
    },
  }),
  Yc = mt((e, t) => {
    const n = F("Overlay", Jx, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        fixed: u,
        center: d,
        children: c,
        radius: f,
        zIndex: p,
        gradient: v,
        blur: w,
        color: x,
        backgroundOpacity: y,
        mod: h,
        ...m
      } = n,
      g = G({
        name: "Overlay",
        props: n,
        classes: Xv,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: e2,
      });
    return S.jsx(D, {
      ref: t,
      ...g("root"),
      mod: [{ center: d, fixed: u }, h],
      ...m,
      children: c,
    });
  });
Yc.classes = Xv;
Yc.displayName = "@mantine/core/Overlay";
const [t2, Bt] = Mr("ModalBase component was not found in tree");
function n2({ opened: e, transitionDuration: t }) {
  const [n, r] = b.useState(e),
    o = b.useRef(),
    s = Ac() ? 0 : t;
  return (
    b.useEffect(
      () => (
        e
          ? (r(!0), window.clearTimeout(o.current))
          : s === 0
            ? r(!1)
            : (o.current = window.setTimeout(() => r(!1), s)),
        () => window.clearTimeout(o.current)
      ),
      [e, s],
    ),
    n
  );
}
function r2({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: i,
  returnFocus: s,
}) {
  const l = pv(e),
    [a, u] = b.useState(!1),
    [d, c] = b.useState(!1),
    f =
      typeof (t == null ? void 0 : t.duration) == "number"
        ? t == null
          ? void 0
          : t.duration
        : 200,
    p = n2({ opened: n, transitionDuration: f });
  return (
    mv(
      "keydown",
      (v) => {
        var w;
        v.key === "Escape" &&
          o &&
          n &&
          ((w = v.target) == null
            ? void 0
            : w.getAttribute("data-mantine-stop-propagation")) !== "true" &&
          i();
      },
      { capture: !0 },
    ),
    Lw({ opened: n, shouldReturnFocus: r && s }),
    {
      _id: l,
      titleMounted: a,
      bodyMounted: d,
      shouldLockScroll: p,
      setTitleMounted: u,
      setBodyMounted: c,
    }
  );
}
const o2 = b.forwardRef(
  (
    {
      keepMounted: e,
      opened: t,
      onClose: n,
      id: r,
      transitionProps: o,
      trapFocus: i,
      closeOnEscape: s,
      returnFocus: l,
      closeOnClickOutside: a,
      withinPortal: u,
      portalProps: d,
      lockScroll: c,
      children: f,
      zIndex: p,
      shadow: v,
      padding: w,
      __vars: x,
      unstyled: y,
      removeScrollProps: h,
      ...m
    },
    g,
  ) => {
    const {
        _id: C,
        titleMounted: E,
        bodyMounted: _,
        shouldLockScroll: k,
        setTitleMounted: R,
        setBodyMounted: P,
      } = r2({
        id: r,
        transitionProps: o,
        opened: t,
        trapFocus: i,
        closeOnEscape: s,
        onClose: n,
        returnFocus: l,
      }),
      { key: j, ...M } = h || {};
    return S.jsx(Uv, {
      ...d,
      withinPortal: u,
      children: S.jsx(t2, {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: a,
          transitionProps: { ...o, keepMounted: e },
          getTitleId: () => `${C}-title`,
          getBodyId: () => `${C}-body`,
          titleMounted: E,
          bodyMounted: _,
          setTitleMounted: R,
          setBodyMounted: P,
          trapFocus: i,
          closeOnEscape: s,
          zIndex: p,
          unstyled: y,
        },
        children: S.jsx(
          Xs,
          {
            enabled: k && c,
            ...M,
            children: S.jsx(D, {
              ref: g,
              ...m,
              __vars: {
                ...x,
                "--mb-z-index": (p || Yo("modal")).toString(),
                "--mb-shadow": sv(v),
                "--mb-padding": Ar(w),
              },
              children: f,
            }),
          },
          j,
        ),
      }),
    });
  },
);
function i2() {
  const e = Bt();
  return (
    b.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []),
    e.getBodyId()
  );
}
var Rr = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311",
};
const Gv = b.forwardRef(({ className: e, ...t }, n) => {
  const r = i2(),
    o = Bt();
  return S.jsx(D, {
    ref: n,
    ...t,
    id: r,
    className: je({ [Rr.body]: !o.unstyled }, e),
  });
});
Gv.displayName = "@mantine/core/ModalBaseBody";
const Zv = b.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const o = Bt();
  return S.jsx(nl, {
    ref: r,
    ...n,
    onClick: (i) => {
      o.onClose(), t == null || t(i);
    },
    className: je({ [Rr.close]: !o.unstyled }, e),
    unstyled: o.unstyled,
  });
});
Zv.displayName = "@mantine/core/ModalBaseCloseButton";
const s2 = b.forwardRef(
    (
      {
        transitionProps: e,
        className: t,
        innerProps: n,
        onKeyDown: r,
        style: o,
        ...i
      },
      s,
    ) => {
      const l = Bt();
      return S.jsx(Go, {
        mounted: l.opened,
        transition: "pop",
        ...l.transitionProps,
        ...e,
        children: (a) =>
          S.jsx("div", {
            ...n,
            className: je({ [Rr.inner]: !l.unstyled }, n.className),
            children: S.jsx(Qc, {
              active: l.opened && l.trapFocus,
              innerRef: s,
              children: S.jsx(Uc, {
                ...i,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": !0,
                "aria-describedby": l.bodyMounted ? l.getBodyId() : void 0,
                "aria-labelledby": l.titleMounted ? l.getTitleId() : void 0,
                style: [o, a],
                className: je({ [Rr.content]: !l.unstyled }, t),
                unstyled: l.unstyled,
                children: i.children,
              }),
            }),
          }),
      });
    },
  ),
  Jv = b.forwardRef(({ className: e, ...t }, n) => {
    const r = Bt();
    return S.jsx(D, {
      component: "header",
      ref: n,
      className: je({ [Rr.header]: !r.unstyled }, e),
      ...t,
    });
  });
Jv.displayName = "@mantine/core/ModalBaseHeader";
const l2 = { duration: 200, timingFunction: "ease", transition: "fade" };
function a2(e) {
  const t = Bt();
  return { ...l2, ...t.transitionProps, ...e };
}
const ey = b.forwardRef(
  ({ onClick: e, transitionProps: t, style: n, ...r }, o) => {
    const i = Bt(),
      s = a2(t);
    return S.jsx(Go, {
      mounted: i.opened,
      ...s,
      transition: "fade",
      children: (l) =>
        S.jsx(Yc, {
          ref: o,
          fixed: !0,
          style: [n, l],
          zIndex: i.zIndex,
          unstyled: i.unstyled,
          onClick: (a) => {
            e == null || e(a), i.closeOnClickOutside && i.onClose();
          },
          ...r,
        }),
    });
  },
);
ey.displayName = "@mantine/core/ModalBaseOverlay";
function u2() {
  const e = Bt();
  return (
    b.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []),
    e.getTitleId()
  );
}
const ty = b.forwardRef(({ className: e, ...t }, n) => {
  const r = u2(),
    o = Bt();
  return S.jsx(D, {
    component: "h2",
    ref: n,
    className: je({ [Rr.title]: !o.unstyled }, e),
    ...t,
    id: r,
  });
});
ty.displayName = "@mantine/core/ModalBaseTitle";
function c2({ children: e }) {
  return S.jsx(S.Fragment, { children: e });
}
function f2(e, t) {
  if (!t || !e) return !1;
  let n = t.parentNode;
  for (; n != null; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
function d2({ target: e, parent: t, ref: n, displayAfterTransitionEnd: r }) {
  const o = b.useRef(),
    [i, s] = b.useState(!1),
    [l, a] = b.useState(typeof r == "boolean" ? r : !1),
    u = () => {
      if (!e || !t) return;
      const p = e.getBoundingClientRect(),
        v = t.getBoundingClientRect(),
        w = {
          top: p.top - v.top,
          left: p.left - v.left,
          width: p.width,
          height: p.height,
        };
      n.current &&
        ((n.current.style.transform = `translateY(${w.top}px) translateX(${w.left}px)`),
        (n.current.style.width = `${w.width}px`),
        (n.current.style.height = `${w.height}px`));
    },
    d = () => {
      window.clearTimeout(o.current),
        n.current && (n.current.style.transitionDuration = "0ms"),
        u(),
        (o.current = window.setTimeout(() => {
          n.current && (n.current.style.transitionDuration = "");
        }, 30));
    },
    c = b.useRef(),
    f = b.useRef();
  return (
    b.useEffect(() => {
      if ((u(), e))
        return (
          (c.current = new ResizeObserver(d)),
          c.current.observe(e),
          t && ((f.current = new ResizeObserver(d)), f.current.observe(t)),
          () => {
            var p, v;
            (p = c.current) == null || p.disconnect(),
              (v = f.current) == null || v.disconnect();
          }
        );
    }, [t, e]),
    b.useEffect(() => {
      if (t) {
        const p = (v) => {
          f2(v.target, t) && (d(), a(!1));
        };
        return (
          t.addEventListener("transitionend", p),
          () => {
            t.removeEventListener("transitionend", p);
          }
        );
      }
    }, [t]),
    Xw(
      () => {
        eS() !== "test" && s(!0);
      },
      20,
      { autoInvoke: !0 },
    ),
    Gw(
      (p) => {
        p.forEach((v) => {
          v.type === "attributes" && v.attributeName === "dir" && d();
        });
      },
      { attributes: !0, attributeFilter: ["dir"] },
      () => document.documentElement,
    ),
    { initialized: i, hidden: l }
  );
}
var ny = { root: "m_96b553a6" };
const p2 = {},
  m2 = (e, { transitionDuration: t }) => ({
    root: { "--transition-duration": typeof t == "number" ? `${t}ms` : t },
  }),
  Kc = Q((e, t) => {
    const n = F("FloatingIndicator", p2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        target: u,
        parent: d,
        transitionDuration: c,
        mod: f,
        displayAfterTransitionEnd: p,
        ...v
      } = n,
      w = G({
        name: "FloatingIndicator",
        classes: ny,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: m2,
      }),
      x = b.useRef(null),
      { initialized: y, hidden: h } = d2({
        target: u,
        parent: d,
        ref: x,
        displayAfterTransitionEnd: p,
      }),
      m = Ft(t, x);
    return !u || !d
      ? null
      : S.jsx(D, {
          ref: m,
          mod: [{ initialized: y, hidden: h }, f],
          ...w("root"),
          ...v,
        });
  });
Kc.displayName = "@mantine/core/FloatingIndicator";
Kc.classes = ny;
function ry({ style: e, size: t = 16, ...n }) {
  return S.jsx("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { ...e, width: N(t), height: N(t), display: "block" },
    ...n,
    children: S.jsx("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
ry.displayName = "@mantine/core/AccordionChevron";
var oy = { root: "m_b6d8b162" };
function h2(e) {
  if (e === "start") return "start";
  if (e === "end" || e) return "end";
}
const v2 = { inherit: !1 },
  y2 = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
    root: {
      "--text-fz": Ao(o),
      "--text-lh": zw(o),
      "--text-gradient": t === "gradient" ? Su(r, e) : void 0,
      "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--text-color": i ? Ot(i, e) : void 0,
    },
  }),
  Xc = mt((e, t) => {
    const n = F("Text", v2, e),
      {
        lineClamp: r,
        truncate: o,
        inline: i,
        inherit: s,
        gradient: l,
        span: a,
        __staticSelector: u,
        vars: d,
        className: c,
        style: f,
        classNames: p,
        styles: v,
        unstyled: w,
        variant: x,
        mod: y,
        size: h,
        ...m
      } = n,
      g = G({
        name: ["Text", u],
        props: n,
        classes: oy,
        className: c,
        style: f,
        classNames: p,
        styles: v,
        unstyled: w,
        vars: d,
        varsResolver: y2,
      });
    return S.jsx(D, {
      ...g("root", { focusable: !0 }),
      ref: t,
      component: a ? "span" : "p",
      variant: x,
      mod: [
        {
          "data-truncate": h2(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": i,
          "data-inherit": s,
        },
        y,
      ],
      size: h,
      ...m,
    });
  });
Xc.classes = oy;
Xc.displayName = "@mantine/core/Text";
const [g2, Ir] = Mr("AppShell was not found in tree");
var gn = {
  root: "m_89ab340",
  navbar: "m_45252eee",
  aside: "m_9cdde9a",
  header: "m_3b16f56b",
  main: "m_8983817",
  footer: "m_3840c879",
  section: "m_6dcfc7c7",
};
const w2 = {},
  rl = Q((e, t) => {
    const n = F("AppShellAside", w2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        withBorder: u,
        zIndex: d,
        mod: c,
        ...f
      } = n,
      p = Ir();
    return p.disabled
      ? null
      : S.jsx(D, {
          component: "aside",
          ref: t,
          mod: [{ "with-border": u ?? p.withBorder }, c],
          ...p.getStyles("aside", {
            className: o,
            classNames: r,
            styles: s,
            style: i,
          }),
          ...f,
          __vars: { "--app-shell-aside-z-index": `calc(${d ?? p.zIndex} + 1)` },
        });
  });
rl.classes = gn;
rl.displayName = "@mantine/core/AppShellAside";
const S2 = {},
  ol = Q((e, t) => {
    var v;
    const n = F("AppShellFooter", S2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        withBorder: u,
        zIndex: d,
        mod: c,
        ...f
      } = n,
      p = Ir();
    return p.disabled
      ? null
      : S.jsx(D, {
          component: "footer",
          ref: t,
          mod: [{ "with-border": u ?? p.withBorder }, c],
          ...p.getStyles("footer", {
            className: je({ [Xs.classNames.zeroRight]: p.offsetScrollbars }, o),
            classNames: r,
            styles: s,
            style: i,
          }),
          ...f,
          __vars: {
            "--app-shell-footer-z-index":
              (v = d ?? p.zIndex) == null ? void 0 : v.toString(),
          },
        });
  });
ol.classes = gn;
ol.displayName = "@mantine/core/AppShellFooter";
const x2 = {},
  il = Q((e, t) => {
    var v;
    const n = F("AppShellHeader", x2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        withBorder: u,
        zIndex: d,
        mod: c,
        ...f
      } = n,
      p = Ir();
    return p.disabled
      ? null
      : S.jsx(D, {
          component: "header",
          ref: t,
          mod: [{ "with-border": u ?? p.withBorder }, c],
          ...p.getStyles("header", {
            className: je({ [Xs.classNames.zeroRight]: p.offsetScrollbars }, o),
            classNames: r,
            styles: s,
            style: i,
          }),
          ...f,
          __vars: {
            "--app-shell-header-z-index":
              (v = d ?? p.zIndex) == null ? void 0 : v.toString(),
          },
        });
  });
il.classes = gn;
il.displayName = "@mantine/core/AppShellHeader";
const C2 = {},
  sl = Q((e, t) => {
    const n = F("AppShellMain", C2, e),
      { classNames: r, className: o, style: i, styles: s, vars: l, ...a } = n,
      u = Ir();
    return S.jsx(D, {
      component: "main",
      ref: t,
      ...u.getStyles("main", {
        className: o,
        style: i,
        classNames: r,
        styles: s,
      }),
      ...a,
    });
  });
sl.classes = gn;
sl.displayName = "@mantine/core/AppShellMain";
function Jo(e) {
  return typeof e == "object" ? e.base : e;
}
function ei(e) {
  const t =
    typeof e == "object" &&
    e !== null &&
    typeof e.base < "u" &&
    Object.keys(e).length === 1;
  return typeof e == "number" || typeof e == "string" || t;
}
function ti(e) {
  return !(
    typeof e != "object" ||
    e === null ||
    (Object.keys(e).length === 1 && "base" in e)
  );
}
function b2({
  baseStyles: e,
  minMediaStyles: t,
  maxMediaStyles: n,
  aside: r,
  theme: o,
}) {
  var a, u, d;
  const i = r == null ? void 0 : r.width,
    s = "translateX(var(--app-shell-aside-width))",
    l = "translateX(calc(var(--app-shell-aside-width) * -1))";
  if (
    (r != null &&
      r.breakpoint &&
      !((a = r == null ? void 0 : r.collapsed) != null && a.mobile) &&
      ((n[r == null ? void 0 : r.breakpoint] =
        n[r == null ? void 0 : r.breakpoint] || {}),
      (n[r == null ? void 0 : r.breakpoint]["--app-shell-aside-width"] =
        "100%"),
      (n[r == null ? void 0 : r.breakpoint]["--app-shell-aside-offset"] =
        "0px")),
    ei(i))
  ) {
    const c = N(Jo(i));
    (e["--app-shell-aside-width"] = c), (e["--app-shell-aside-offset"] = c);
  }
  if (
    (ti(i) &&
      (typeof i.base < "u" &&
        ((e["--app-shell-aside-width"] = N(i.base)),
        (e["--app-shell-aside-offset"] = N(i.base))),
      we(i).forEach((c) => {
        c !== "base" &&
          ((t[c] = t[c] || {}),
          (t[c]["--app-shell-aside-width"] = N(i[c])),
          (t[c]["--app-shell-aside-offset"] = N(i[c])));
      })),
    (u = r == null ? void 0 : r.collapsed) != null && u.desktop)
  ) {
    const c = r.breakpoint;
    (t[c] = t[c] || {}),
      (t[c]["--app-shell-aside-transform"] = s),
      (t[c]["--app-shell-aside-transform-rtl"] = l),
      (t[c]["--app-shell-aside-offset"] = "0px !important");
  }
  if ((d = r == null ? void 0 : r.collapsed) != null && d.mobile) {
    const c = Tc(r.breakpoint, o) - 0.1;
    (n[c] = n[c] || {}),
      (n[c]["--app-shell-aside-width"] = "100%"),
      (n[c]["--app-shell-aside-offset"] = "0px"),
      (n[c]["--app-shell-aside-transform"] = s),
      (n[c]["--app-shell-aside-transform-rtl"] = l);
  }
}
function k2({ baseStyles: e, minMediaStyles: t, footer: n }) {
  const r = n == null ? void 0 : n.height,
    o = "translateY(var(--app-shell-footer-height))",
    i = (n == null ? void 0 : n.offset) ?? !0;
  if (ei(r)) {
    const s = N(Jo(r));
    (e["--app-shell-footer-height"] = s),
      i && (e["--app-shell-footer-offset"] = s);
  }
  ti(r) &&
    (typeof r.base < "u" &&
      ((e["--app-shell-footer-height"] = N(r.base)),
      i && (e["--app-shell-footer-offset"] = N(r.base))),
    we(r).forEach((s) => {
      s !== "base" &&
        ((t[s] = t[s] || {}),
        (t[s]["--app-shell-footer-height"] = N(r[s])),
        i && (t[s]["--app-shell-footer-offset"] = N(r[s])));
    })),
    n != null &&
      n.collapsed &&
      ((e["--app-shell-footer-transform"] = o),
      (e["--app-shell-footer-offset"] = "0px !important"));
}
function E2({ baseStyles: e, minMediaStyles: t, header: n }) {
  const r = n == null ? void 0 : n.height,
    o = "translateY(calc(var(--app-shell-header-height) * -1))",
    i = (n == null ? void 0 : n.offset) ?? !0;
  if (ei(r)) {
    const s = N(Jo(r));
    (e["--app-shell-header-height"] = s),
      i && (e["--app-shell-header-offset"] = s);
  }
  ti(r) &&
    (typeof r.base < "u" &&
      ((e["--app-shell-header-height"] = N(r.base)),
      i && (e["--app-shell-header-offset"] = N(r.base))),
    we(r).forEach((s) => {
      s !== "base" &&
        ((t[s] = t[s] || {}),
        (t[s]["--app-shell-header-height"] = N(r[s])),
        i && (t[s]["--app-shell-header-offset"] = N(r[s])));
    })),
    n != null &&
      n.collapsed &&
      ((e["--app-shell-header-transform"] = o),
      (e["--app-shell-header-offset"] = "0px !important"));
}
function _2({
  baseStyles: e,
  minMediaStyles: t,
  maxMediaStyles: n,
  navbar: r,
  theme: o,
}) {
  var a, u, d;
  const i = r == null ? void 0 : r.width,
    s = "translateX(calc(var(--app-shell-navbar-width) * -1))",
    l = "translateX(var(--app-shell-navbar-width))";
  if (
    (r != null &&
      r.breakpoint &&
      !((a = r == null ? void 0 : r.collapsed) != null && a.mobile) &&
      ((n[r == null ? void 0 : r.breakpoint] =
        n[r == null ? void 0 : r.breakpoint] || {}),
      (n[r == null ? void 0 : r.breakpoint]["--app-shell-navbar-width"] =
        "100%"),
      (n[r == null ? void 0 : r.breakpoint]["--app-shell-navbar-offset"] =
        "0px")),
    ei(i))
  ) {
    const c = N(Jo(i));
    (e["--app-shell-navbar-width"] = c), (e["--app-shell-navbar-offset"] = c);
  }
  if (
    (ti(i) &&
      (typeof i.base < "u" &&
        ((e["--app-shell-navbar-width"] = N(i.base)),
        (e["--app-shell-navbar-offset"] = N(i.base))),
      we(i).forEach((c) => {
        c !== "base" &&
          ((t[c] = t[c] || {}),
          (t[c]["--app-shell-navbar-width"] = N(i[c])),
          (t[c]["--app-shell-navbar-offset"] = N(i[c])));
      })),
    (u = r == null ? void 0 : r.collapsed) != null && u.desktop)
  ) {
    const c = r.breakpoint;
    (t[c] = t[c] || {}),
      (t[c]["--app-shell-navbar-transform"] = s),
      (t[c]["--app-shell-navbar-transform-rtl"] = l),
      (t[c]["--app-shell-navbar-offset"] = "0px !important");
  }
  if ((d = r == null ? void 0 : r.collapsed) != null && d.mobile) {
    const c = Tc(r.breakpoint, o) - 0.1;
    (n[c] = n[c] || {}),
      (n[c]["--app-shell-navbar-width"] = "100%"),
      (n[c]["--app-shell-navbar-offset"] = "0px"),
      (n[c]["--app-shell-navbar-transform"] = s),
      (n[c]["--app-shell-navbar-transform-rtl"] = l);
  }
}
function pa(e) {
  return Number(e) === 0 ? "0px" : Ar(e);
}
function R2({ padding: e, baseStyles: t, minMediaStyles: n }) {
  ei(e) && (t["--app-shell-padding"] = pa(Jo(e))),
    ti(e) &&
      (e.base && (t["--app-shell-padding"] = pa(e.base)),
      we(e).forEach((r) => {
        r !== "base" &&
          ((n[r] = n[r] || {}), (n[r]["--app-shell-padding"] = pa(e[r])));
      }));
}
function P2({
  navbar: e,
  header: t,
  footer: n,
  aside: r,
  padding: o,
  theme: i,
}) {
  const s = {},
    l = {},
    a = {};
  _2({
    baseStyles: a,
    minMediaStyles: s,
    maxMediaStyles: l,
    navbar: e,
    theme: i,
  }),
    b2({
      baseStyles: a,
      minMediaStyles: s,
      maxMediaStyles: l,
      aside: r,
      theme: i,
    }),
    E2({ baseStyles: a, minMediaStyles: s, header: t }),
    k2({ baseStyles: a, minMediaStyles: s, footer: n }),
    R2({ baseStyles: a, minMediaStyles: s, padding: o });
  const u = Ld(we(s), i).map((f) => ({
      query: `(min-width: ${ks(f.px)})`,
      styles: s[f.value],
    })),
    d = Ld(we(l), i).map((f) => ({
      query: `(max-width: ${ks(f.px)})`,
      styles: l[f.value],
    })),
    c = [...u, ...d];
  return { baseStyles: a, media: c };
}
function N2({ navbar: e, header: t, aside: n, footer: r, padding: o }) {
  const i = tt(),
    s = vn(),
    { media: l, baseStyles: a } = P2({
      navbar: e,
      header: t,
      footer: r,
      aside: n,
      padding: o,
      theme: i,
    });
  return S.jsx(bv, { media: l, styles: a, selector: s.cssVariablesSelector });
}
const j2 = {},
  ll = Q((e, t) => {
    const n = F("AppShellNavbar", j2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        withBorder: u,
        zIndex: d,
        mod: c,
        ...f
      } = n,
      p = Ir();
    return p.disabled
      ? null
      : S.jsx(D, {
          component: "nav",
          ref: t,
          mod: [{ "with-border": u ?? p.withBorder }, c],
          ...p.getStyles("navbar", {
            className: o,
            classNames: r,
            styles: s,
            style: i,
          }),
          ...f,
          __vars: {
            "--app-shell-navbar-z-index": `calc(${d ?? p.zIndex} + 1)`,
          },
        });
  });
ll.classes = gn;
ll.displayName = "@mantine/core/AppShellNavbar";
const T2 = {},
  Gc = mt((e, t) => {
    const n = F("AppShellSection", T2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: l,
        grow: a,
        mod: u,
        ...d
      } = n,
      c = Ir();
    return S.jsx(D, {
      ref: t,
      mod: [{ grow: a }, u],
      ...c.getStyles("section", {
        className: o,
        style: i,
        classNames: r,
        styles: s,
      }),
      ...d,
    });
  });
Gc.classes = gn;
Gc.displayName = "@mantine/core/AppShellSection";
function $2({ transitionDuration: e, disabled: t }) {
  const [n, r] = b.useState(!0),
    o = b.useRef(),
    i = b.useRef();
  return (
    mv("resize", () => {
      r(!0),
        clearTimeout(o.current),
        (o.current = window.setTimeout(() => r(!1), 200));
    }),
    zr(() => {
      b.startTransition(() => {
        r(!0),
          clearTimeout(i.current),
          (i.current = window.setTimeout(() => r(!1), e || 0));
      });
    }, [t, e]),
    n
  );
}
const M2 = {
    withBorder: !0,
    offsetScrollbars: !0,
    padding: 0,
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    zIndex: Yo("app"),
  },
  A2 = (e, { transitionDuration: t, transitionTimingFunction: n }) => ({
    root: {
      "--app-shell-transition-duration": `${t}ms`,
      "--app-shell-transition-timing-function": n,
    },
  }),
  Re = Q((e, t) => {
    const n = F("AppShell", M2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        navbar: u,
        withBorder: d,
        padding: c,
        transitionDuration: f,
        transitionTimingFunction: p,
        header: v,
        zIndex: w,
        layout: x,
        disabled: y,
        aside: h,
        footer: m,
        offsetScrollbars: g,
        mod: C,
        ...E
      } = n,
      _ = G({
        name: "AppShell",
        classes: gn,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: A2,
      }),
      k = $2({ disabled: y, transitionDuration: f });
    return S.jsxs(g2, {
      value: {
        getStyles: _,
        withBorder: d,
        zIndex: w,
        disabled: y,
        offsetScrollbars: g,
      },
      children: [
        S.jsx(N2, { navbar: u, header: v, aside: h, footer: m, padding: c }),
        S.jsx(D, {
          ref: t,
          ..._("root"),
          mod: [{ resizing: k, layout: x, disabled: y }, C],
          ...E,
        }),
      ],
    });
  });
Re.classes = gn;
Re.displayName = "@mantine/core/AppShell";
Re.Navbar = ll;
Re.Header = il;
Re.Main = sl;
Re.Aside = rl;
Re.Footer = ol;
Re.Section = Gc;
const iy = b.createContext(null),
  z2 = iy.Provider;
function I2() {
  return { withinGroup: !!b.useContext(iy) };
}
var al = {
  group: "m_11def92b",
  root: "m_f85678b6",
  image: "m_11f8ac07",
  placeholder: "m_104cd71f",
};
const O2 = {},
  L2 = (e, { spacing: t }) => ({ group: { "--ag-spacing": Ar(t) } }),
  Zc = Q((e, t) => {
    const n = F("AvatarGroup", O2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        spacing: u,
        ...d
      } = n,
      c = G({
        name: "AvatarGroup",
        classes: al,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: L2,
        rootSelector: "group",
      });
    return S.jsx(z2, {
      value: !0,
      children: S.jsx(D, { ref: t, ...c("group"), ...d }),
    });
  });
Zc.classes = al;
Zc.displayName = "@mantine/core/AvatarGroup";
function D2(e) {
  return S.jsx("svg", {
    ...e,
    "data-avatar-placeholder-icon": !0,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: S.jsx("path", {
      d: "M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
function sy(e, t = 2) {
  const n = e.split(" ");
  return n.length === 1
    ? e.slice(0, t).toUpperCase()
    : n
        .map((r) => r[0])
        .slice(0, t)
        .join("")
        .toUpperCase();
}
function F2(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1) {
    const r = e.charCodeAt(n);
    (t = (t << 5) - t + r), (t |= 0);
  }
  return t;
}
const B2 = [
  "blue",
  "cyan",
  "grape",
  "green",
  "indigo",
  "lime",
  "orange",
  "pink",
  "red",
  "teal",
  "violet",
];
function V2(e, t = B2) {
  const n = F2(sy(e)),
    r = Math.abs(n) % t.length;
  return t[r];
}
const W2 = {},
  H2 = (
    e,
    {
      size: t,
      radius: n,
      variant: r,
      gradient: o,
      color: i,
      autoContrast: s,
      name: l,
      allowedInitialsColors: a,
    },
  ) => {
    const u = i === "initials" && typeof l == "string" ? V2(l, a) : i,
      d = e.variantColorResolver({
        color: u || "gray",
        theme: e,
        gradient: o,
        variant: r || "light",
        autoContrast: s,
      });
    return {
      root: {
        "--avatar-size": ce(t, "avatar-size"),
        "--avatar-radius": n === void 0 ? void 0 : Et(n),
        "--avatar-bg": u || r ? d.background : void 0,
        "--avatar-color": u || r ? d.color : void 0,
        "--avatar-bd": u || r ? d.border : void 0,
      },
    };
  },
  Pr = mt((e, t) => {
    const n = F("Avatar", W2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        src: u,
        alt: d,
        radius: c,
        color: f,
        gradient: p,
        imageProps: v,
        children: w,
        autoContrast: x,
        mod: y,
        name: h,
        allowedInitialsColors: m,
        ...g
      } = n,
      C = I2(),
      [E, _] = b.useState(!u),
      k = G({
        name: "Avatar",
        props: n,
        classes: al,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: H2,
      });
    return (
      b.useEffect(() => _(!u), [u]),
      S.jsx(D, {
        ...k("root"),
        mod: [{ "within-group": C.withinGroup }, y],
        ref: t,
        ...g,
        children: E
          ? S.jsx("span", {
              ...k("placeholder"),
              title: d,
              children: w || (typeof h == "string" && sy(h)) || S.jsx(D2, {}),
            })
          : S.jsx("img", {
              ...v,
              ...k("image"),
              src: u,
              alt: d,
              onError: (R) => {
                var P;
                _(!0),
                  (P = v == null ? void 0 : v.onError) == null || P.call(v, R);
              },
            }),
      })
    );
  });
Pr.classes = al;
Pr.displayName = "@mantine/core/Avatar";
Pr.Group = Zc;
var ly = {
  root: "m_347db0ec",
  "root--dot": "m_fbd81e3d",
  label: "m_5add502a",
  section: "m_91fdda9b",
};
const U2 = {},
  Q2 = (
    e,
    { radius: t, color: n, gradient: r, variant: o, size: i, autoContrast: s },
  ) => {
    const l = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || "filled",
      autoContrast: s,
    });
    return {
      root: {
        "--badge-height": ce(i, "badge-height"),
        "--badge-padding-x": ce(i, "badge-padding-x"),
        "--badge-fz": ce(i, "badge-fz"),
        "--badge-radius": t === void 0 ? void 0 : Et(t),
        "--badge-bg": n || o ? l.background : void 0,
        "--badge-color": n || o ? l.color : void 0,
        "--badge-bd": n || o ? l.border : void 0,
        "--badge-dot-color": o === "dot" ? Ot(n, e) : void 0,
      },
    };
  },
  ni = mt((e, t) => {
    const n = F("Badge", U2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        radius: u,
        color: d,
        gradient: c,
        leftSection: f,
        rightSection: p,
        children: v,
        variant: w,
        fullWidth: x,
        autoContrast: y,
        circle: h,
        mod: m,
        ...g
      } = n,
      C = G({
        name: "Badge",
        props: n,
        classes: ly,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: Q2,
      });
    return S.jsxs(D, {
      variant: w,
      mod: [
        {
          block: x,
          circle: h,
          "with-right-section": !!p,
          "with-left-section": !!f,
        },
        m,
      ],
      ...C("root", { variant: w }),
      ref: t,
      ...g,
      children: [
        f &&
          S.jsx("span", {
            ...C("section"),
            "data-position": "left",
            children: f,
          }),
        S.jsx("span", { ...C("label"), children: v }),
        p &&
          S.jsx("span", {
            ...C("section"),
            "data-position": "right",
            children: p,
          }),
      ],
    });
  });
ni.classes = ly;
ni.displayName = "@mantine/core/Badge";
var ay = { root: "m_fea6bf1a", burger: "m_d4fb9cad" };
const q2 = {},
  Y2 = (
    e,
    {
      color: t,
      size: n,
      lineSize: r,
      transitionDuration: o,
      transitionTimingFunction: i,
    },
  ) => ({
    root: {
      "--burger-color": t ? Ot(t, e) : void 0,
      "--burger-size": ce(n, "burger-size"),
      "--burger-line-size": r ? N(r) : void 0,
      "--burger-transition-duration": o === void 0 ? void 0 : `${o}ms`,
      "--burger-transition-timing-function": i,
    },
  }),
  Jc = Q((e, t) => {
    const n = F("Burger", q2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        opened: u,
        children: d,
        transitionDuration: c,
        transitionTimingFunction: f,
        lineSize: p,
        ...v
      } = n,
      w = G({
        name: "Burger",
        classes: ay,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: Y2,
      });
    return S.jsxs(yn, {
      ...w("root"),
      ref: t,
      ...v,
      children: [
        S.jsx(D, { mod: ["reduce-motion", { opened: u }], ...w("burger") }),
        d,
      ],
    });
  });
Jc.classes = ay;
Jc.displayName = "@mantine/core/Burger";
var ul = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
};
const Jd = { orientation: "horizontal" },
  K2 = (e, { borderWidth: t }) => ({
    group: { "--button-border-width": N(t) },
  }),
  ef = Q((e, t) => {
    const n = F("ButtonGroup", Jd, e),
      {
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: l,
        orientation: a,
        vars: u,
        borderWidth: d,
        variant: c,
        mod: f,
        ...p
      } = F("ButtonGroup", Jd, e),
      v = G({
        name: "ButtonGroup",
        props: n,
        classes: ul,
        className: r,
        style: o,
        classNames: i,
        styles: s,
        unstyled: l,
        vars: u,
        varsResolver: K2,
        rootSelector: "group",
      });
    return S.jsx(D, {
      ...v("group"),
      ref: t,
      variant: c,
      mod: [{ "data-orientation": a }, f],
      role: "group",
      ...p,
    });
  });
ef.classes = ul;
ef.displayName = "@mantine/core/ButtonGroup";
const X2 = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${N(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  G2 = {},
  Z2 = (
    e,
    {
      radius: t,
      color: n,
      gradient: r,
      variant: o,
      size: i,
      justify: s,
      autoContrast: l,
    },
  ) => {
    const a = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || "filled",
      autoContrast: l,
    });
    return {
      root: {
        "--button-justify": s,
        "--button-height": ce(i, "button-height"),
        "--button-padding-x": ce(i, "button-padding-x"),
        "--button-fz":
          i != null && i.includes("compact")
            ? Ao(i.replace("compact-", ""))
            : Ao(i),
        "--button-radius": t === void 0 ? void 0 : Et(t),
        "--button-bg": n || o ? a.background : void 0,
        "--button-hover": n || o ? a.hover : void 0,
        "--button-color": a.color,
        "--button-bd": n || o ? a.border : void 0,
        "--button-hover-color": n || o ? a.hoverColor : void 0,
      },
    };
  },
  Zt = mt((e, t) => {
    const n = F("Button", G2, e),
      {
        style: r,
        vars: o,
        className: i,
        color: s,
        disabled: l,
        children: a,
        leftSection: u,
        rightSection: d,
        fullWidth: c,
        variant: f,
        radius: p,
        loading: v,
        loaderProps: w,
        gradient: x,
        classNames: y,
        styles: h,
        unstyled: m,
        "data-disabled": g,
        autoContrast: C,
        mod: E,
        ..._
      } = n,
      k = G({
        name: "Button",
        props: n,
        classes: ul,
        className: i,
        style: r,
        classNames: y,
        styles: h,
        unstyled: m,
        vars: o,
        varsResolver: Z2,
      }),
      R = !!u,
      P = !!d;
    return S.jsxs(yn, {
      ref: t,
      ...k("root", { active: !l && !v && !g }),
      unstyled: m,
      variant: f,
      disabled: l || v,
      mod: [
        {
          disabled: l || g,
          loading: v,
          block: c,
          "with-left-section": R,
          "with-right-section": P,
        },
        E,
      ],
      ..._,
      children: [
        S.jsx(Go, {
          mounted: !!v,
          transition: X2,
          duration: 150,
          children: (j) =>
            S.jsx(D, {
              component: "span",
              ...k("loader", { style: j }),
              "aria-hidden": !0,
              children: S.jsx(Zo, {
                color: "var(--button-color)",
                size: "calc(var(--button-height) / 1.8)",
                ...w,
              }),
            }),
        }),
        S.jsxs("span", {
          ...k("inner"),
          children: [
            u &&
              S.jsx(D, {
                component: "span",
                ...k("section"),
                mod: { position: "left" },
                children: u,
              }),
            S.jsx(D, {
              component: "span",
              mod: { loading: v },
              ...k("label"),
              children: a,
            }),
            d &&
              S.jsx(D, {
                component: "span",
                ...k("section"),
                mod: { position: "right" },
                children: d,
              }),
          ],
        }),
      ],
    });
  });
Zt.classes = ul;
Zt.displayName = "@mantine/core/Button";
Zt.Group = ef;
var uy = { root: "m_7485cace" };
const J2 = {},
  eC = (e, { size: t, fluid: n }) => ({
    root: { "--container-size": n ? void 0 : ce(t, "container-size") },
  }),
  tf = Q((e, t) => {
    const n = F("Container", J2, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        fluid: u,
        mod: d,
        ...c
      } = n,
      f = G({
        name: "Container",
        classes: uy,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: eC,
      });
    return S.jsx(D, { ref: t, mod: [{ fluid: u }, d], ...f("root"), ...c });
  });
tf.classes = uy;
tf.displayName = "@mantine/core/Container";
var cy = { root: "m_3eebeb36", label: "m_9e365f20" };
const tC = { orientation: "horizontal" },
  nC = (e, { color: t, variant: n, size: r }) => ({
    root: {
      "--divider-color": t ? Ot(t, e) : void 0,
      "--divider-border-style": n,
      "--divider-size": ce(r, "divider-size"),
    },
  }),
  fn = Q((e, t) => {
    const n = F("Divider", tC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        color: u,
        orientation: d,
        label: c,
        labelPosition: f,
        mod: p,
        ...v
      } = n,
      w = G({
        name: "Divider",
        classes: cy,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: nC,
      });
    return S.jsx(D, {
      ref: t,
      mod: [{ orientation: d, "with-label": !!c }, p],
      ...w("root"),
      ...v,
      role: "separator",
      children:
        c &&
        S.jsx(D, {
          component: "span",
          mod: { position: f },
          ...w("label"),
          children: c,
        }),
    });
  });
fn.classes = cy;
fn.displayName = "@mantine/core/Divider";
const [rC, Or] = Mr("Drawer component was not found in tree");
var Vt = {
  root: "m_f11b401e",
  header: "m_5a7c2c9",
  content: "m_b8a05bbd",
  inner: "m_31cd769a",
};
const oC = {},
  cl = Q((e, t) => {
    const n = F("DrawerBody", oC, e),
      { classNames: r, className: o, style: i, styles: s, vars: l, ...a } = n,
      u = Or();
    return S.jsx(Gv, {
      ref: t,
      ...u.getStyles("body", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...a,
    });
  });
cl.classes = Vt;
cl.displayName = "@mantine/core/DrawerBody";
const iC = {},
  fl = Q((e, t) => {
    const n = F("DrawerCloseButton", iC, e),
      { classNames: r, className: o, style: i, styles: s, vars: l, ...a } = n,
      u = Or();
    return S.jsx(Zv, {
      ref: t,
      ...u.getStyles("close", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...a,
    });
  });
fl.classes = Vt;
fl.displayName = "@mantine/core/DrawerCloseButton";
const sC = {},
  dl = Q((e, t) => {
    const n = F("DrawerContent", sC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: l,
        children: a,
        radius: u,
        ...d
      } = n,
      c = Or(),
      f = c.scrollAreaComponent || c2;
    return S.jsx(s2, {
      ...c.getStyles("content", {
        className: o,
        style: i,
        styles: s,
        classNames: r,
      }),
      innerProps: c.getStyles("inner", {
        className: o,
        style: i,
        styles: s,
        classNames: r,
      }),
      ref: t,
      ...d,
      radius: u || c.radius || 0,
      children: S.jsx(f, {
        style: { height: "calc(100vh - var(--drawer-offset) * 2)" },
        children: a,
      }),
    });
  });
dl.classes = Vt;
dl.displayName = "@mantine/core/DrawerContent";
const lC = {},
  pl = Q((e, t) => {
    const n = F("DrawerHeader", lC, e),
      { classNames: r, className: o, style: i, styles: s, vars: l, ...a } = n,
      u = Or();
    return S.jsx(Jv, {
      ref: t,
      ...u.getStyles("header", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...a,
    });
  });
pl.classes = Vt;
pl.displayName = "@mantine/core/DrawerHeader";
const aC = {},
  ml = Q((e, t) => {
    const n = F("DrawerOverlay", aC, e),
      { classNames: r, className: o, style: i, styles: s, vars: l, ...a } = n,
      u = Or();
    return S.jsx(ey, {
      ref: t,
      ...u.getStyles("overlay", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...a,
    });
  });
ml.classes = Vt;
ml.displayName = "@mantine/core/DrawerOverlay";
function uC(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    default:
      return;
  }
}
function cC(e) {
  if (e === "top" || e === "bottom")
    return "0 0 calc(100% - var(--drawer-offset, 0rem) * 2)";
}
const fC = {
    top: "slide-down",
    bottom: "slide-up",
    left: "slide-right",
    right: "slide-left",
  },
  dC = {
    top: "slide-down",
    bottom: "slide-up",
    right: "slide-right",
    left: "slide-left",
  },
  pC = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: Yo("modal"),
    position: "left",
  },
  mC = (e, { position: t, size: n, offset: r }) => ({
    root: {
      "--drawer-size": ce(n, "drawer-size"),
      "--drawer-flex": cC(t),
      "--drawer-height":
        t === "left" || t === "right" ? void 0 : "var(--drawer-size)",
      "--drawer-align": uC(t),
      "--drawer-justify": t === "right" ? "flex-end" : void 0,
      "--drawer-offset": N(r),
    },
  }),
  hl = Q((e, t) => {
    const n = F("DrawerRoot", pC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        scrollAreaComponent: u,
        position: d,
        transitionProps: c,
        radius: f,
        ...p
      } = n,
      { dir: v } = Nv(),
      w = G({
        name: "Drawer",
        classes: Vt,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: mC,
      }),
      x = (v === "rtl" ? dC : fC)[d];
    return S.jsx(rC, {
      value: { scrollAreaComponent: u, getStyles: w, radius: f },
      children: S.jsx(o2, {
        ref: t,
        ...w("root"),
        transitionProps: { transition: x, ...c },
        unstyled: l,
        ...p,
      }),
    });
  });
hl.classes = Vt;
hl.displayName = "@mantine/core/DrawerRoot";
const hC = {},
  vl = Q((e, t) => {
    const n = F("DrawerTitle", hC, e),
      { classNames: r, className: o, style: i, styles: s, vars: l, ...a } = n,
      u = Or();
    return S.jsx(ty, {
      ref: t,
      ...u.getStyles("title", {
        classNames: r,
        style: i,
        styles: s,
        className: o,
      }),
      ...a,
    });
  });
vl.classes = Vt;
vl.displayName = "@mantine/core/DrawerTitle";
const vC = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: Yo("modal"),
    withOverlay: !0,
    withCloseButton: !0,
  },
  ht = Q((e, t) => {
    const {
        title: n,
        withOverlay: r,
        overlayProps: o,
        withCloseButton: i,
        closeButtonProps: s,
        children: l,
        ...a
      } = F("Drawer", vC, e),
      u = !!n || i;
    return S.jsxs(hl, {
      ref: t,
      ...a,
      children: [
        r && S.jsx(ml, { ...o }),
        S.jsxs(dl, {
          children: [
            u &&
              S.jsxs(pl, {
                children: [
                  n && S.jsx(vl, { children: n }),
                  i && S.jsx(fl, { ...s }),
                ],
              }),
            S.jsx(cl, { children: l }),
          ],
        }),
      ],
    });
  });
ht.classes = Vt;
ht.displayName = "@mantine/core/Drawer";
ht.Root = hl;
ht.Overlay = ml;
ht.Content = dl;
ht.Body = cl;
ht.Header = pl;
ht.Title = vl;
ht.CloseButton = fl;
var fy = {
  root: "m_f0824112",
  description: "m_57492dcc",
  section: "m_690090b5",
  label: "m_1f6ac4c4",
  body: "m_f07af9d2",
  children: "m_e17b862f",
  chevron: "m_1fd8a00b",
};
const yC = {},
  gC = (e, { variant: t, color: n, childrenOffset: r, autoContrast: o }) => {
    const i = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      variant: t || "light",
      autoContrast: o,
    });
    return {
      root: {
        "--nl-bg": n || t ? i.background : void 0,
        "--nl-hover": n || t ? i.hover : void 0,
        "--nl-color": n || t ? i.color : void 0,
      },
      children: { "--nl-offset": Ar(r) },
    };
  },
  Pt = mt((e, t) => {
    const n = F("NavLink", yC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        opened: u,
        defaultOpened: d,
        onChange: c,
        children: f,
        onClick: p,
        active: v,
        disabled: w,
        leftSection: x,
        rightSection: y,
        label: h,
        description: m,
        disableRightSectionRotation: g,
        noWrap: C,
        childrenOffset: E,
        onKeyDown: _,
        autoContrast: k,
        mod: R,
        ...P
      } = n,
      j = G({
        name: "NavLink",
        props: n,
        classes: fy,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: gC,
      }),
      [M, O] = Mc({ value: u, defaultValue: d, finalValue: !1, onChange: c }),
      L = !!f,
      H = (W) => {
        p == null || p(W), L && (W.preventDefault(), O(!M));
      };
    return S.jsxs(S.Fragment, {
      children: [
        S.jsxs(yn, {
          ...j("root"),
          component: "a",
          ref: t,
          onClick: H,
          onKeyDown: (W) => {
            _ == null || _(W),
              W.nativeEvent.code === "Space" &&
                L &&
                (W.preventDefault(), O(!M));
          },
          unstyled: l,
          mod: [{ disabled: w, active: v, expanded: M }, R],
          ...P,
          children: [
            x &&
              S.jsx(D, {
                component: "span",
                ...j("section"),
                mod: { position: "left" },
                children: x,
              }),
            S.jsxs(D, {
              ...j("body"),
              mod: { "no-wrap": C },
              children: [
                S.jsx(D, { component: "span", ...j("label"), children: h }),
                S.jsx(D, {
                  component: "span",
                  mod: { active: v },
                  ...j("description"),
                  children: m,
                }),
              ],
            }),
            (L || y) &&
              S.jsx(D, {
                ...j("section"),
                component: "span",
                mod: { rotate: M && !g, position: "right" },
                children: L ? y || S.jsx(ry, { ...j("chevron") }) : y,
              }),
          ],
        }),
        S.jsx(jv, {
          in: M,
          ...j("collapse"),
          children: S.jsx("div", { ...j("children"), children: f }),
        }),
      ],
    });
  });
Pt.classes = fy;
Pt.displayName = "@mantine/core/NavLink";
const [wC, yl] = Mr("Pagination.Root component was not found in tree");
var ri = { root: "m_4addd315", control: "m_326d024a", dots: "m_4ad7767d" };
const SC = { withPadding: !0 },
  oi = Q((e, t) => {
    const n = F("PaginationControl", SC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: l,
        active: a,
        disabled: u,
        withPadding: d,
        mod: c,
        ...f
      } = n,
      p = yl(),
      v = u || p.disabled;
    return S.jsx(yn, {
      ref: t,
      disabled: v,
      mod: [{ active: a, disabled: v, "with-padding": d }, c],
      ...p.getStyles("control", {
        className: o,
        style: i,
        classNames: r,
        styles: s,
        active: !v,
      }),
      ...f,
    });
  });
oi.classes = ri;
oi.displayName = "@mantine/core/PaginationControl";
function ii({ style: e, children: t, path: n, ...r }) {
  return S.jsx("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: "calc(var(--pagination-control-size) / 1.8)",
      height: "calc(var(--pagination-control-size) / 1.8)",
      ...e,
    },
    ...r,
    children: S.jsx("path", { d: n, fill: "currentColor" }),
  });
}
const xC = (e) =>
    S.jsx(ii, {
      ...e,
      path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z",
    }),
  CC = (e) =>
    S.jsx(ii, {
      ...e,
      path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z",
    }),
  bC = (e) =>
    S.jsx(ii, {
      ...e,
      path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",
    }),
  kC = (e) =>
    S.jsx(ii, {
      ...e,
      path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",
    }),
  EC = (e) =>
    S.jsx(ii, {
      ...e,
      path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z",
    }),
  _C = { icon: EC },
  gl = Q((e, t) => {
    const n = F("PaginationDots", _C, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        vars: l,
        icon: a,
        ...u
      } = n,
      d = yl(),
      c = a;
    return S.jsx(D, {
      ref: t,
      ...d.getStyles("dots", {
        className: o,
        style: i,
        styles: s,
        classNames: r,
      }),
      ...u,
      children: S.jsx(c, {
        style: {
          width: "calc(var(--pagination-control-size) / 1.8)",
          height: "calc(var(--pagination-control-size) / 1.8)",
        },
      }),
    });
  });
gl.classes = ri;
gl.displayName = "@mantine/core/PaginationDots";
function wl({ icon: e, name: t, action: n, type: r }) {
  const o = { icon: e },
    i = b.forwardRef((s, l) => {
      const { icon: a, ...u } = F(t, o, s),
        d = a,
        c = yl(),
        f = r === "next" ? c.active === c.total : c.active === 1;
      return S.jsx(oi, {
        disabled: c.disabled || f,
        ref: l,
        onClick: c[n],
        withPadding: !1,
        ...u,
        children: S.jsx(d, {
          className: "mantine-rotate-rtl",
          style: {
            width: "calc(var(--pagination-control-size) / 1.8)",
            height: "calc(var(--pagination-control-size) / 1.8)",
          },
        }),
      });
    });
  return (i.displayName = `@mantine/core/${t}`), i;
}
const dy = wl({
    icon: xC,
    name: "PaginationNext",
    action: "onNext",
    type: "next",
  }),
  py = wl({
    icon: CC,
    name: "PaginationPrevious",
    action: "onPrevious",
    type: "previous",
  }),
  my = wl({
    icon: bC,
    name: "PaginationFirst",
    action: "onFirst",
    type: "previous",
  }),
  hy = wl({ icon: kC, name: "PaginationLast", action: "onLast", type: "next" });
function nf({ dotsIcon: e }) {
  const t = yl(),
    n = t.range.map((r, o) => {
      var i;
      return r === "dots"
        ? S.jsx(gl, { icon: e }, o)
        : S.jsx(
            oi,
            {
              active: r === t.active,
              "aria-current": r === t.active ? "page" : void 0,
              onClick: () => t.onChange(r),
              disabled: t.disabled,
              ...((i = t.getItemProps) == null ? void 0 : i.call(t, r)),
              children: r,
            },
            o,
          );
    });
  return S.jsx(S.Fragment, { children: n });
}
nf.displayName = "@mantine/core/PaginationItems";
const RC = { siblings: 1, boundaries: 1 },
  PC = (e, { size: t, radius: n, color: r, autoContrast: o }) => ({
    root: {
      "--pagination-control-radius": n === void 0 ? void 0 : Et(n),
      "--pagination-control-size": ce(t, "pagination-control-size"),
      "--pagination-control-fz": Ao(t),
      "--pagination-active-bg": r ? Ot(r, e) : void 0,
      "--pagination-active-color": HS(o, e)
        ? Fc({ color: r, theme: e, autoContrast: o })
        : void 0,
    },
  }),
  Sl = Q((e, t) => {
    const n = F("PaginationRoot", RC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        total: u,
        value: d,
        defaultValue: c,
        onChange: f,
        disabled: p,
        siblings: v,
        boundaries: w,
        color: x,
        radius: y,
        onNextPage: h,
        onPreviousPage: m,
        onFirstPage: g,
        onLastPage: C,
        getItemProps: E,
        autoContrast: _,
        ...k
      } = n,
      R = G({
        name: "Pagination",
        classes: ri,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: PC,
      }),
      {
        range: P,
        setPage: j,
        next: M,
        previous: O,
        active: L,
        first: H,
        last: W,
      } = Kw({
        page: d,
        initialPage: c,
        onChange: f,
        total: u,
        siblings: v,
        boundaries: w,
      }),
      J = Ni(h, M),
      T = Ni(m, O),
      I = Ni(g, H),
      A = Ni(C, W);
    return S.jsx(wC, {
      value: {
        total: u,
        range: P,
        active: L,
        disabled: p,
        getItemProps: E,
        onChange: j,
        onNext: J,
        onPrevious: T,
        onFirst: I,
        onLast: A,
        getStyles: R,
      },
      children: S.jsx(D, { ref: t, ...R("root"), ...k }),
    });
  });
Sl.classes = ri;
Sl.displayName = "@mantine/core/PaginationRoot";
const NC = { withControls: !0, siblings: 1, boundaries: 1, gap: 8 },
  ae = Q((e, t) => {
    const n = F("Pagination", NC, e),
      {
        withEdges: r,
        withControls: o,
        getControlProps: i,
        nextIcon: s,
        previousIcon: l,
        lastIcon: a,
        firstIcon: u,
        dotsIcon: d,
        total: c,
        gap: f,
        hideWithOnePage: p,
        ...v
      } = n;
    return c <= 0 || (p && c === 1)
      ? null
      : S.jsx(Sl, {
          ref: t,
          total: c,
          ...v,
          children: S.jsxs(_e, {
            gap: f,
            children: [
              r && S.jsx(my, { icon: u, ...(i == null ? void 0 : i("first")) }),
              o &&
                S.jsx(py, { icon: l, ...(i == null ? void 0 : i("previous")) }),
              S.jsx(nf, { dotsIcon: d }),
              o && S.jsx(dy, { icon: s, ...(i == null ? void 0 : i("next")) }),
              r && S.jsx(hy, { icon: a, ...(i == null ? void 0 : i("last")) }),
            ],
          }),
        });
  });
ae.classes = ri;
ae.displayName = "@mantine/core/Pagination";
ae.Root = Sl;
ae.Control = oi;
ae.Dots = gl;
ae.First = my;
ae.Last = hy;
ae.Next = dy;
ae.Previous = py;
ae.Items = nf;
var vy = {
  root: "m_cf365364",
  indicator: "m_9e182ccd",
  label: "m_1738fcb2",
  input: "m_1714d588",
  control: "m_69686b9b",
  innerLabel: "m_78882f40",
};
const jC = { withItemsBorders: !0 },
  TC = (
    e,
    {
      radius: t,
      color: n,
      transitionDuration: r,
      size: o,
      transitionTimingFunction: i,
    },
  ) => ({
    root: {
      "--sc-radius": t === void 0 ? void 0 : Et(t),
      "--sc-color": n ? Ot(n, e) : void 0,
      "--sc-shadow": n ? void 0 : "var(--mantine-shadow-xs)",
      "--sc-transition-duration": r === void 0 ? void 0 : `${r}ms`,
      "--sc-transition-timing-function": i,
      "--sc-padding": ce(o, "sc-padding"),
      "--sc-font-size": Ao(o),
    },
  }),
  rf = Q((e, t) => {
    var Ye, _t;
    const n = F("SegmentedControl", jC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        data: u,
        value: d,
        defaultValue: c,
        onChange: f,
        size: p,
        name: v,
        disabled: w,
        readOnly: x,
        fullWidth: y,
        orientation: h,
        radius: m,
        color: g,
        transitionDuration: C,
        transitionTimingFunction: E,
        variant: _,
        autoContrast: k,
        withItemsBorders: R,
        mod: P,
        ...j
      } = n,
      M = G({
        name: "SegmentedControl",
        props: n,
        classes: vy,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: TC,
      }),
      O = tt(),
      L = u.map((X) => (typeof X == "string" ? { label: X, value: X } : X)),
      H = Zw(),
      [W, J] = b.useState(null),
      [T, I] = b.useState({}),
      A = (X, Lr) => {
        (T[Lr] = X), I(T);
      },
      [V, B] = Mc({
        value: d,
        defaultValue: c,
        finalValue: Array.isArray(u)
          ? (((Ye = L.find((X) => !X.disabled)) == null ? void 0 : Ye.value) ??
            ((_t = u[0]) == null ? void 0 : _t.value) ??
            null)
          : null,
        onChange: f,
      }),
      Y = pv(v),
      rt = L.map((X) =>
        b.createElement(
          D,
          {
            ...M("control"),
            mod: { active: V === X.value, orientation: h },
            key: X.value,
          },
          b.createElement("input", {
            ...M("input"),
            disabled: w || X.disabled,
            type: "radio",
            name: Y,
            value: X.value,
            id: `${Y}-${X.value}`,
            checked: V === X.value,
            onChange: () => !x && B(X.value),
            "data-focus-ring": O.focusRing,
            key: `${X.value}-input`,
          }),
          b.createElement(
            D,
            {
              component: "label",
              ...M("label"),
              mod: {
                active: V === X.value && !(w || X.disabled),
                disabled: w || X.disabled,
                "read-only": x,
              },
              htmlFor: `${Y}-${X.value}`,
              ref: (Lr) => A(Lr, X.value),
              __vars: {
                "--sc-label-color":
                  g !== void 0
                    ? Fc({ color: g, theme: O, autoContrast: k })
                    : void 0,
              },
              key: `${X.value}-label`,
            },
            S.jsx("span", { ...M("innerLabel"), children: X.label }),
          ),
        ),
      ),
      wn = Ft(t, (X) => J(X));
    return u.length === 0
      ? null
      : S.jsxs(D, {
          ...M("root"),
          variant: _,
          size: p,
          ref: wn,
          mod: [
            {
              "full-width": y,
              orientation: h,
              initialized: H,
              "with-items-borders": R,
            },
            P,
          ],
          ...j,
          role: "radiogroup",
          "data-disabled": w,
          children: [
            typeof V == "string" &&
              S.jsx(Kc, {
                target: T[V],
                parent: W,
                component: "span",
                transitionDuration: "var(--sc-transition-duration)",
                ...M("indicator"),
              }),
            rt,
          ],
        });
  });
rf.classes = vy;
rf.displayName = "@mantine/core/SegmentedControl";
var yy = { root: "m_18320242", "skeleton-fade": "m_299c329c" };
const $C = { visible: !0, animate: !0 },
  MC = (e, { width: t, height: n, radius: r, circle: o }) => ({
    root: {
      "--skeleton-height": N(n),
      "--skeleton-width": N(o ? n : t),
      "--skeleton-radius": o ? "1000px" : r === void 0 ? void 0 : Et(r),
    },
  }),
  of = Q((e, t) => {
    const n = F("Skeleton", $C, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        vars: a,
        width: u,
        height: d,
        circle: c,
        visible: f,
        radius: p,
        animate: v,
        mod: w,
        ...x
      } = n,
      y = G({
        name: "Skeleton",
        classes: yy,
        props: n,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: a,
        varsResolver: MC,
      });
    return S.jsx(D, {
      ref: t,
      ...y("root"),
      mod: [{ visible: f, animate: v }, w],
      ...x,
    });
  });
of.classes = yy;
of.displayName = "@mantine/core/Skeleton";
const AC = ["h1", "h2", "h3", "h4", "h5", "h6"];
function zC(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return AC.includes(n)
    ? {
        fontSize: `var(--mantine-${n}-font-size)`,
        fontWeight: `var(--mantine-${n}-font-weight)`,
        lineHeight: `var(--mantine-${n}-line-height)`,
      }
    : {
        fontSize: N(n),
        fontWeight: `var(--mantine-h${e}-font-weight)`,
        lineHeight: `var(--mantine-h${e}-line-height)`,
      };
}
var gy = { root: "m_8a5d1357" };
const IC = { order: 1 },
  OC = (e, { order: t, size: n, lineClamp: r, textWrap: o }) => {
    const i = zC(t, n);
    return {
      root: {
        "--title-fw": i.fontWeight,
        "--title-lh": i.lineHeight,
        "--title-fz": i.fontSize,
        "--title-line-clamp": typeof r == "number" ? r.toString() : void 0,
        "--title-text-wrap": o,
      },
    };
  },
  xl = Q((e, t) => {
    const n = F("Title", IC, e),
      {
        classNames: r,
        className: o,
        style: i,
        styles: s,
        unstyled: l,
        order: a,
        vars: u,
        size: d,
        variant: c,
        lineClamp: f,
        textWrap: p,
        mod: v,
        ...w
      } = n,
      x = G({
        name: "Title",
        props: n,
        classes: gy,
        className: o,
        style: i,
        classNames: r,
        styles: s,
        unstyled: l,
        vars: u,
        varsResolver: OC,
      });
    return [1, 2, 3, 4, 5, 6].includes(a)
      ? S.jsx(D, {
          ...x("root"),
          component: `h${a}`,
          variant: c,
          ref: t,
          mod: [{ order: a, "data-line-clamp": typeof f == "number" }, v],
          size: d,
          ...w,
        })
      : null;
  });
xl.classes = gy;
xl.displayName = "@mantine/core/Title";
const LC = "_avatar_m3myb_1",
  DC = { avatar: LC },
  Cl = ({ count: e = 10, size: t = 48 }) =>
    Array(e)
      .fill(0)
      .map((n, r) =>
        S.jsx(of, { h: t, mt: "md", animate: !1, opacity: 0.4 }, r),
      );
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var FC = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none",
  },
};
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Me = (e, t, n, r) => {
  const o = b.forwardRef(
    (
      {
        color: i = "currentColor",
        size: s = 24,
        stroke: l = 2,
        title: a,
        className: u,
        children: d,
        ...c
      },
      f,
    ) =>
      b.createElement(
        "svg",
        {
          ref: f,
          ...FC[e],
          width: s,
          height: s,
          className: ["tabler-icon", `tabler-icon-${t}`, u].join(" "),
          ...(e === "filled" ? { fill: i } : { strokeWidth: l, stroke: i }),
          ...c,
        },
        [
          a && b.createElement("title", { key: "svg-title" }, a),
          ...r.map(([p, v]) => b.createElement(p, v)),
          ...(Array.isArray(d) ? d : [d]),
        ],
      ),
  );
  return (o.displayName = `${n}`), o;
};
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ma = Me("outline", "activity", "IconActivity", [
  ["path", { d: "M3 12h4l3 8l4 -16l3 8h4", key: "svg-0" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zi = Me("outline", "chevron-right", "IconChevronRight", [
  ["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var BC = Me("outline", "circle-off", "IconCircleOff", [
  [
    "path",
    {
      d: "M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73",
      key: "svg-0",
    },
  ],
  ["path", { d: "M3 3l18 18", key: "svg-1" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var VC = Me("outline", "contrast", "IconContrast", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 17a5 5 0 0 0 0 -10v10", key: "svg-1" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var WC = Me("outline", "device-desktop", "IconDeviceDesktop", [
  [
    "path",
    {
      d: "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z",
      key: "svg-0",
    },
  ],
  ["path", { d: "M7 20h10", key: "svg-1" }],
  ["path", { d: "M9 16v4", key: "svg-2" }],
  ["path", { d: "M15 16v4", key: "svg-3" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var HC = Me("outline", "device-mobile", "IconDeviceMobile", [
  [
    "path",
    {
      d: "M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z",
      key: "svg-0",
    },
  ],
  ["path", { d: "M11 4h2", key: "svg-1" }],
  ["path", { d: "M12 17v.01", key: "svg-2" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var UC = Me("outline", "gauge", "IconGauge", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M13.41 10.59l2.59 -2.59", key: "svg-2" }],
  ["path", { d: "M7 12a5 5 0 0 1 5 -5", key: "svg-3" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var QC = Me("outline", "home-2", "IconHome2", [
  ["path", { d: "M5 12l-2 0l9 -9l9 9l-2 0", key: "svg-0" }],
  ["path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7", key: "svg-1" }],
  ["path", { d: "M10 12h4v4h-4z", key: "svg-2" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ep = Me("outline", "layout-sidebar-right", "IconLayoutSidebarRight", [
  [
    "path",
    {
      d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
      key: "svg-0",
    },
  ],
  ["path", { d: "M15 4l0 16", key: "svg-1" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var tp = Me("outline", "layout-sidebar", "IconLayoutSidebar", [
  [
    "path",
    {
      d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
      key: "svg-0",
    },
  ],
  ["path", { d: "M9 4l0 16", key: "svg-1" }],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var np = Me("outline", "moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0",
    },
  ],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var rp = Me("outline", "sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1",
    },
  ],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var qC = Me("outline", "user-circle", "IconUserCircle", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }],
  [
    "path",
    {
      d: "M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855",
      key: "svg-2",
    },
  ],
]);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var YC = Me(
  "filled",
  "layout-sidebar-right-filled",
  "IconLayoutSidebarRightFilled",
  [
    [
      "path",
      {
        d: "M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm8 -16h-8a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8z",
        key: "svg-0",
      },
    ],
  ],
);
/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var op = Me("filled", "layout-sidebar-filled", "IconLayoutSidebarFilled", [
  [
    "path",
    {
      d: "M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm12 -16h-8v14h8a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1",
      key: "svg-0",
    },
  ],
]);
const sf = ({ title: e }) =>
    S.jsxs(D, {
      children: [
        S.jsx(xl, { order: 4, p: "sm", children: e }),
        S.jsx(fn, { m: "sm", size: "xs" }),
        S.jsx(Pt, {
          href: "#required-for-focus",
          label: "With icon",
          leftSection: S.jsx(QC, { size: "1rem", stroke: 1.5 }),
        }),
        S.jsx(Pt, {
          href: "#required-for-focus",
          label: "With right section",
          leftSection: S.jsx(UC, { size: "1rem", stroke: 1.5 }),
          rightSection: S.jsx(zi, {
            size: "0.8rem",
            stroke: 1.5,
            className: "mantine-rotate-rtl",
          }),
        }),
        S.jsx(Pt, {
          href: "#required-for-focus",
          label: "Disabled",
          leftSection: S.jsx(BC, { size: "1rem", stroke: 1.5 }),
          disabled: !0,
        }),
        S.jsx(Pt, {
          href: "#required-for-focus",
          label: "With description",
          description: "Additional information",
          leftSection: S.jsx(ni, {
            size: "xs",
            color: "red",
            circle: !0,
            children: "3",
          }),
        }),
        S.jsx(Pt, {
          href: "#required-for-focus",
          label: "Active subtle",
          leftSection: S.jsx(ma, { size: "1rem", stroke: 1.5 }),
          rightSection: S.jsx(zi, {
            size: "0.8rem",
            stroke: 1.5,
            className: "mantine-rotate-rtl",
          }),
          variant: "subtle",
          active: !0,
        }),
        S.jsx(Pt, {
          href: "#required-for-focus",
          label: "Active light",
          leftSection: S.jsx(ma, { size: "1rem", stroke: 1.5 }),
          rightSection: S.jsx(zi, {
            size: "0.8rem",
            stroke: 1.5,
            className: "mantine-rotate-rtl",
          }),
          active: !0,
        }),
        S.jsx(Pt, {
          href: "#required-for-focus",
          label: "Active filled",
          leftSection: S.jsx(ma, { size: "1rem", stroke: 1.5 }),
          rightSection: S.jsx(zi, {
            size: "0.8rem",
            stroke: 1.5,
            className: "mantine-rotate-rtl",
          }),
          variant: "filled",
          active: !0,
        }),
      ],
    }),
  KC = ({ status: e, toggler: t }) =>
    S.jsxs(S.Fragment, {
      children: [
        S.jsxs(ht, {
          opened: e,
          onClose: t,
          title: S.jsxs(_e, {
            children: [
              S.jsx(Pr, {
                size: "xl",
                src: "https://www.metalgearinformer.com/wp-content/uploads/2016/01/MGSV-PS4-Avatar-Venom-Snake.jpg",
              }),
              "Big Boss is watching you",
            ],
          }),
          children: [S.jsx(sf, { title: "Config" }), S.jsx(Cl, {})],
        }),
        S.jsx(Pr, {
          onClick: t,
          className: DC.avatar,
          src: "https://www.metalgearinformer.com/wp-content/uploads/2016/01/MGSV-PS4-Avatar-Venom-Snake.jpg",
        }),
      ],
    }),
  XC = "_clock_1ci6k_1",
  GC = { clock: XC },
  ZC = () => {
    const [e, t] = b.useState(0),
      n = Yw(() => t((o) => o + 1), 500),
      r = tt();
    return (
      b.useEffect(() => (n.start(), n.stop), []),
      S.jsx(Xc, {
        className: GC.clock,
        color: r.primaryColor,
        children: `${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}:${String(new Date().getSeconds()).padStart(2, "0")}`,
      })
    );
  },
  JC = ({ status: e, togglers: t }) => {
    const { colorScheme: n, setColorScheme: r } = Cv(),
      o = US("light"),
      i = tt(),
      s = () => {
        r(n === "dark" ? "light" : "dark");
      },
      l = { togglerIcon: 32, btnIcon: 20 },
      a = () =>
        e == null
          ? void 0
          : e.map((u, d) =>
              S.jsx(ni, {
                visibleFrom: "lg",
                leftSection: [
                  S.jsx(WC, { size: 14 }),
                  S.jsx(HC, { size: 14 }),
                  S.jsx(ep, { size: 14 }),
                  S.jsx(qC, { size: 14 }),
                ][d],
                size: "lg",
                miw: 50,
                fw: 100,
                px: "xs",
                children: u ? "1" : "0",
              }),
            );
    return S.jsxs(S.Fragment, {
      children: [
        S.jsxs(_e, {
          w: "20%",
          miw: "60",
          wrap: "nowrap",
          children: [
            S.jsxs(Zt, {
              visibleFrom: "sm",
              onClick: t[0],
              children: [
                !e[0] && S.jsx(tp, { size: l.togglerIcon }),
                e[0] && S.jsx(op, { size: l.togglerIcon }),
              ],
            }),
            S.jsxs(Zt, {
              hiddenFrom: "sm",
              onClick: t[1],
              children: [
                !e[1] && S.jsx(tp, { size: l.togglerIcon }),
                e[1] && S.jsx(op, { size: l.togglerIcon }),
              ],
            }),
            S.jsx(D, {
              visibleFrom: "xs",
              children: S.jsx(xl, { order: 3, children: "Header" }),
            }),
          ],
        }),
        S.jsxs(_e, {
          w: "80%",
          justify: "flex-end",
          wrap: "nowrap",
          children: [
            S.jsx(a, {}),
            S.jsx(fn, { orientation: "vertical", visibleFrom: "lg" }),
            S.jsx(ZC, {}),
            S.jsx(fn, { orientation: "vertical", visibleFrom: "xl" }),
            S.jsx(rf, {
              visibleFrom: "xl",
              withItemsBorders: !1,
              color: i.primaryColor,
              data: [
                {
                  value: "light",
                  label: S.jsxs(_e, {
                    wrap: "nowrap",
                    children: [S.jsx(rp, {}), S.jsx(yr, { children: "Light" })],
                  }),
                },
                {
                  value: "dark",
                  label: S.jsxs(_e, {
                    wrap: "nowrap",
                    children: [S.jsx(np, {}), S.jsx(yr, { children: "Dark" })],
                  }),
                },
                {
                  value: "auto",
                  label: S.jsxs(_e, {
                    wrap: "nowrap",
                    children: [S.jsx(VC, {}), S.jsx(yr, { children: "Auto" })],
                  }),
                },
              ],
            }),
            S.jsxs(_e, {
              visibleFrom: "xl",
              children: [
                S.jsxs(Zt, {
                  onClick: s,
                  children: [
                    o !== "light" && S.jsx(rp, { size: l.btnIcon }),
                    o !== "dark" && S.jsx(np, { size: l.btnIcon }),
                  ],
                }),
                S.jsxs(Zt, {
                  onClick: t[2],
                  visibleFrom: "lg",
                  children: [
                    !e[2] && S.jsx(ep, { size: l.btnIcon }),
                    e[2] && S.jsx(YC, { size: l.btnIcon }),
                  ],
                }),
              ],
            }),
            S.jsx(KC, { status: e[3], toggler: t[3] }),
          ],
        }),
      ],
    });
  },
  eb = () =>
    S.jsxs(S.Fragment, {
      children: [S.jsx(sf, { title: "Navigation" }), S.jsx(Cl, { count: 5 })],
    }),
  tb = () =>
    S.jsxs(S.Fragment, {
      children: [
        S.jsx(_e, {
          miw: 200,
          wrap: "nowrap",
          visibleFrom: "md",
          children: "Left Area",
        }),
        S.jsx(fn, { orientation: "vertical", visibleFrom: "md" }),
        S.jsxs(_e, {
          justify: "center",
          w: "100%",
          wrap: "nowrap",
          radioGroup: "xs",
          children: [
            S.jsx(ae.Root, {
              total: 100,
              hiddenFrom: "xs",
              siblings: 0,
              children: S.jsxs(_e, {
                gap: 1,
                justify: "center",
                wrap: "nowrap",
                children: [
                  S.jsx(ae.Previous, {}),
                  S.jsx(ae.Items, {}),
                  S.jsx(ae.Next, {}),
                ],
              }),
            }),
            S.jsx(ae.Root, {
              total: 100,
              visibleFrom: "xs",
              children: S.jsxs(_e, {
                gap: 2,
                justify: "center",
                wrap: "nowrap",
                children: [
                  S.jsx(ae.First, { visibleFrom: "md" }),
                  S.jsx(ae.Previous, {}),
                  S.jsx(ae.Items, {}),
                  S.jsx(ae.Next, {}),
                  S.jsx(ae.Last, { visibleFrom: "md" }),
                ],
              }),
            }),
          ],
        }),
        S.jsx(fn, { orientation: "vertical", visibleFrom: "md" }),
        S.jsx(_e, {
          miw: 200,
          justify: "flex-end",
          wrap: "nowrap",
          visibleFrom: "md",
          children: "Right Area",
        }),
      ],
    }),
  nb = () =>
    S.jsxs(S.Fragment, {
      children: [S.jsx(sf, { title: "Aside" }), S.jsx(Cl, { count: 5 })],
    }),
  rb = () => {
    const [e, { toggle: t }] = Ti(!0),
      [n, { toggle: r }] = Ti(!1),
      [o, { toggle: i }] = Ti(!0),
      [s, { toggle: l }] = Ti(!1);
    return S.jsxs(Re, {
      header: { height: 60 },
      footer: { height: 60 },
      navbar: {
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: !e, mobile: !n },
      },
      aside: {
        width: 300,
        breakpoint: "lg",
        collapsed: { desktop: !o, mobile: !o },
      },
      children: [
        S.jsx(Re.Header, {
          children: S.jsx(JC, { status: [e, n, o, s], togglers: [t, r, i, l] }),
        }),
        S.jsx(Re.Navbar, { children: S.jsx(eb, {}) }),
        S.jsx(Re.Main, {
          children: S.jsx(Xo, {
            h: "100%",
            children: S.jsx(tf, {
              fluid: !0,
              pb: 40,
              children: S.jsx(Cl, { count: 40 }),
            }),
          }),
        }),
        S.jsx(Re.Aside, { visibleFrom: "lg", children: S.jsx(nb, {}) }),
        S.jsx(Re.Footer, { children: S.jsx(tb, {}) }),
      ],
    });
  };
function he(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ob = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  ip = ob,
  ha = () => Math.random().toString(36).substring(7).split("").join("."),
  ib = {
    INIT: `@@redux/INIT${ha()}`,
    REPLACE: `@@redux/REPLACE${ha()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ha()}`,
  },
  _s = ib;
function bt(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function wy(e, t, n) {
  if (typeof e != "function") throw new Error(he(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(he(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(he(1));
    return n(wy)(e, t);
  }
  let r = e,
    o = t,
    i = new Map(),
    s = i,
    l = 0,
    a = !1;
  function u() {
    s === i &&
      ((s = new Map()),
      i.forEach((x, y) => {
        s.set(y, x);
      }));
  }
  function d() {
    if (a) throw new Error(he(3));
    return o;
  }
  function c(x) {
    if (typeof x != "function") throw new Error(he(4));
    if (a) throw new Error(he(5));
    let y = !0;
    u();
    const h = l++;
    return (
      s.set(h, x),
      function () {
        if (y) {
          if (a) throw new Error(he(6));
          (y = !1), u(), s.delete(h), (i = null);
        }
      }
    );
  }
  function f(x) {
    if (!bt(x)) throw new Error(he(7));
    if (typeof x.type > "u") throw new Error(he(8));
    if (typeof x.type != "string") throw new Error(he(17));
    if (a) throw new Error(he(9));
    try {
      (a = !0), (o = r(o, x));
    } finally {
      a = !1;
    }
    return (
      (i = s).forEach((h) => {
        h();
      }),
      x
    );
  }
  function p(x) {
    if (typeof x != "function") throw new Error(he(10));
    (r = x), f({ type: _s.REPLACE });
  }
  function v() {
    const x = c;
    return {
      subscribe(y) {
        if (typeof y != "object" || y === null) throw new Error(he(11));
        function h() {
          const g = y;
          g.next && g.next(d());
        }
        return h(), { unsubscribe: x(h) };
      },
      [ip]() {
        return this;
      },
    };
  }
  return (
    f({ type: _s.INIT }),
    { dispatch: f, subscribe: c, getState: d, replaceReducer: p, [ip]: v }
  );
}
function sb(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: _s.INIT }) > "u") throw new Error(he(12));
    if (typeof n(void 0, { type: _s.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(he(13));
  });
}
function lf(e) {
  const t = Object.keys(e),
    n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    sb(n);
  } catch (i) {
    o = i;
  }
  return function (s = {}, l) {
    if (o) throw o;
    let a = !1;
    const u = {};
    for (let d = 0; d < r.length; d++) {
      const c = r[d],
        f = n[c],
        p = s[c],
        v = f(p, l);
      if (typeof v > "u") throw (l && l.type, new Error(he(14)));
      (u[c] = v), (a = a || v !== p);
    }
    return (a = a || r.length !== Object.keys(s).length), a ? u : s;
  };
}
function Rs(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, n) =>
            (...r) =>
              t(n(...r)),
        );
}
function lb(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(he(15));
    };
    const s = { getState: o.getState, dispatch: (a, ...u) => i(a, ...u) },
      l = e.map((a) => a(s));
    return (i = Rs(...l)(o.dispatch)), { ...o, dispatch: i };
  };
}
function Sy(e) {
  return bt(e) && "type" in e && typeof e.type == "string";
}
var af = Symbol.for("immer-nothing"),
  ho = Symbol.for("immer-draftable"),
  De = Symbol.for("immer-state");
function ye(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var In = Object.getPrototypeOf;
function kt(e) {
  return !!e && !!e[De];
}
function pt(e) {
  var t;
  return e
    ? xy(e) ||
        Array.isArray(e) ||
        !!e[ho] ||
        !!((t = e.constructor) != null && t[ho]) ||
        si(e) ||
        li(e)
    : !1;
}
var ab = Object.prototype.constructor.toString();
function xy(e) {
  if (!e || typeof e != "object") return !1;
  const t = In(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === ab;
}
function ub(e) {
  return kt(e) || ye(15, e), e[De].base_;
}
function Io(e, t) {
  On(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function On(e) {
  const t = e[De];
  return t ? t.type_ : Array.isArray(e) ? 1 : si(e) ? 2 : li(e) ? 3 : 0;
}
function Oo(e, t) {
  return On(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function va(e, t) {
  return On(e) === 2 ? e.get(t) : e[t];
}
function Cy(e, t, n) {
  const r = On(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function cb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function si(e) {
  return e instanceof Map;
}
function li(e) {
  return e instanceof Set;
}
function Cn(e) {
  return e.copy_ || e.base_;
}
function bu(e, t) {
  if (si(e)) return new Map(e);
  if (li(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = xy(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[De];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i],
        l = r[s];
      l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
        (l.get || l.set) &&
          (r[s] = {
            configurable: !0,
            writable: !0,
            enumerable: l.enumerable,
            value: e[s],
          });
    }
    return Object.create(In(e), r);
  } else {
    const r = In(e);
    if (r !== null && n) return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function uf(e, t = !1) {
  return (
    bl(e) ||
      kt(e) ||
      !pt(e) ||
      (On(e) > 1 && (e.set = e.add = e.clear = e.delete = fb),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => uf(r, !0))),
    e
  );
}
function fb() {
  ye(2);
}
function bl(e) {
  return Object.isFrozen(e);
}
var ku = {};
function Ln(e) {
  const t = ku[e];
  return t || ye(0, e), t;
}
function db(e, t) {
  ku[e] || (ku[e] = t);
}
var Lo;
function by() {
  return Lo;
}
function pb(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function sp(e, t) {
  t &&
    (Ln("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Eu(e) {
  _u(e), e.drafts_.forEach(mb), (e.drafts_ = null);
}
function _u(e) {
  e === Lo && (Lo = e.parent_);
}
function lp(e) {
  return (Lo = pb(Lo, e));
}
function mb(e) {
  const t = e[De];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ap(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[De].modified_ && (Eu(t), ye(4)),
        pt(e) && ((e = Ps(t, e)), t.parent_ || Ns(t, e)),
        t.patches_ &&
          Ln("Patches").generateReplacementPatches_(
            n[De].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = Ps(t, n, [])),
    Eu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== af ? e : void 0
  );
}
function Ps(e, t, n) {
  if (bl(t)) return t;
  const r = t[De];
  if (!r) return Io(t, (o, i) => up(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Ns(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      s = !1;
    r.type_ === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      Io(i, (l, a) => up(e, r, o, l, a, n, s)),
      Ns(e, o, !1),
      n &&
        e.patches_ &&
        Ln("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function up(e, t, n, r, o, i, s) {
  if (kt(o)) {
    const l =
        i && t && t.type_ !== 3 && !Oo(t.assigned_, r) ? i.concat(r) : void 0,
      a = Ps(e, o, l);
    if ((Cy(n, r, a), kt(a))) e.canAutoFreeze_ = !1;
    else return;
  } else s && n.add(o);
  if (pt(o) && !bl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ps(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Ns(e, o);
  }
}
function Ns(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && uf(t, n);
}
function hb(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : by(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    i = cf;
  n && ((o = [r]), (i = Do));
  const { revoke: s, proxy: l } = Proxy.revocable(o, i);
  return (r.draft_ = l), (r.revoke_ = s), l;
}
var cf = {
    get(e, t) {
      if (t === De) return e;
      const n = Cn(e);
      if (!Oo(n, t)) return vb(e, n, t);
      const r = n[t];
      return e.finalized_ || !pt(r)
        ? r
        : r === ya(e.base_, t)
          ? (ga(e), (e.copy_[t] = Pu(r, e)))
          : r;
    },
    has(e, t) {
      return t in Cn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Cn(e));
    },
    set(e, t, n) {
      const r = ky(Cn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = ya(Cn(e), t),
          i = o == null ? void 0 : o[De];
        if (i && i.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (cb(n, o) && (n !== void 0 || Oo(e.base_, t))) return !0;
        ga(e), Ru(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        ya(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), ga(e), Ru(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Cn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      ye(11);
    },
    getPrototypeOf(e) {
      return In(e.base_);
    },
    setPrototypeOf() {
      ye(12);
    },
  },
  Do = {};
Io(cf, (e, t) => {
  Do[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Do.deleteProperty = function (e, t) {
  return Do.set.call(this, e, t, void 0);
};
Do.set = function (e, t, n) {
  return cf.set.call(this, e[0], t, n, e[0]);
};
function ya(e, t) {
  const n = e[De];
  return (n ? Cn(n) : e)[t];
}
function vb(e, t, n) {
  var o;
  const r = ky(t, n);
  return r
    ? "value" in r
      ? r.value
      : (o = r.get) == null
        ? void 0
        : o.call(e.draft_)
    : void 0;
}
function ky(e, t) {
  if (!(t in e)) return;
  let n = In(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = In(n);
  }
}
function Ru(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Ru(e.parent_));
}
function ga(e) {
  e.copy_ || (e.copy_ = bu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var yb = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const i = n;
          n = t;
          const s = this;
          return function (a = i, ...u) {
            return s.produce(a, (d) => n.call(this, d, ...u));
          };
        }
        typeof n != "function" && ye(6),
          r !== void 0 && typeof r != "function" && ye(7);
        let o;
        if (pt(t)) {
          const i = lp(this),
            s = Pu(t, void 0);
          let l = !0;
          try {
            (o = n(s)), (l = !1);
          } finally {
            l ? Eu(i) : _u(i);
          }
          return sp(i, r), ap(o, i);
        } else if (!t || typeof t != "object") {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === af && (o = void 0),
            this.autoFreeze_ && uf(o, !0),
            r)
          ) {
            const i = [],
              s = [];
            Ln("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
          }
          return o;
        } else ye(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (s, ...l) => this.produceWithPatches(s, (a) => t(a, ...l));
        let r, o;
        return [
          this.produce(t, n, (s, l) => {
            (r = s), (o = l);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    pt(e) || ye(8), kt(e) && (e = gb(e));
    const t = lp(this),
      n = Pu(e, void 0);
    return (n[De].isManual_ = !0), _u(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[De];
    (!n || !n.isManual_) && ye(9);
    const { scope_: r } = n;
    return sp(r, t), ap(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Ln("Patches").applyPatches_;
    return kt(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function Pu(e, t) {
  const n = si(e)
    ? Ln("MapSet").proxyMap_(e, t)
    : li(e)
      ? Ln("MapSet").proxySet_(e, t)
      : hb(e, t);
  return (t ? t.scope_ : by()).drafts_.push(n), n;
}
function gb(e) {
  return kt(e) || ye(10, e), Ey(e);
}
function Ey(e) {
  if (!pt(e) || bl(e)) return e;
  const t = e[De];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = bu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = bu(e, !0);
  return (
    Io(n, (r, o) => {
      Cy(n, r, Ey(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
function wb() {
  const t = "replace",
    n = "add",
    r = "remove";
  function o(f, p, v, w) {
    switch (f.type_) {
      case 0:
      case 2:
        return s(f, p, v, w);
      case 1:
        return i(f, p, v, w);
      case 3:
        return l(f, p, v, w);
    }
  }
  function i(f, p, v, w) {
    let { base_: x, assigned_: y } = f,
      h = f.copy_;
    h.length < x.length && (([x, h] = [h, x]), ([v, w] = [w, v]));
    for (let m = 0; m < x.length; m++)
      if (y[m] && h[m] !== x[m]) {
        const g = p.concat([m]);
        v.push({ op: t, path: g, value: c(h[m]) }),
          w.push({ op: t, path: g, value: c(x[m]) });
      }
    for (let m = x.length; m < h.length; m++) {
      const g = p.concat([m]);
      v.push({ op: n, path: g, value: c(h[m]) });
    }
    for (let m = h.length - 1; x.length <= m; --m) {
      const g = p.concat([m]);
      w.push({ op: r, path: g });
    }
  }
  function s(f, p, v, w) {
    const { base_: x, copy_: y } = f;
    Io(f.assigned_, (h, m) => {
      const g = va(x, h),
        C = va(y, h),
        E = m ? (Oo(x, h) ? t : n) : r;
      if (g === C && E === t) return;
      const _ = p.concat(h);
      v.push(E === r ? { op: E, path: _ } : { op: E, path: _, value: C }),
        w.push(
          E === n
            ? { op: r, path: _ }
            : E === r
              ? { op: n, path: _, value: c(g) }
              : { op: t, path: _, value: c(g) },
        );
    });
  }
  function l(f, p, v, w) {
    let { base_: x, copy_: y } = f,
      h = 0;
    x.forEach((m) => {
      if (!y.has(m)) {
        const g = p.concat([h]);
        v.push({ op: r, path: g, value: m }),
          w.unshift({ op: n, path: g, value: m });
      }
      h++;
    }),
      (h = 0),
      y.forEach((m) => {
        if (!x.has(m)) {
          const g = p.concat([h]);
          v.push({ op: n, path: g, value: m }),
            w.unshift({ op: r, path: g, value: m });
        }
        h++;
      });
  }
  function a(f, p, v, w) {
    v.push({ op: t, path: [], value: p === af ? void 0 : p }),
      w.push({ op: t, path: [], value: f });
  }
  function u(f, p) {
    return (
      p.forEach((v) => {
        const { path: w, op: x } = v;
        let y = f;
        for (let C = 0; C < w.length - 1; C++) {
          const E = On(y);
          let _ = w[C];
          typeof _ != "string" && typeof _ != "number" && (_ = "" + _),
            (E === 0 || E === 1) &&
              (_ === "__proto__" || _ === "constructor") &&
              ye(19),
            typeof y == "function" && _ === "prototype" && ye(19),
            (y = va(y, _)),
            typeof y != "object" && ye(18, w.join("/"));
        }
        const h = On(y),
          m = d(v.value),
          g = w[w.length - 1];
        switch (x) {
          case t:
            switch (h) {
              case 2:
                return y.set(g, m);
              case 3:
                ye(16);
              default:
                return (y[g] = m);
            }
          case n:
            switch (h) {
              case 1:
                return g === "-" ? y.push(m) : y.splice(g, 0, m);
              case 2:
                return y.set(g, m);
              case 3:
                return y.add(m);
              default:
                return (y[g] = m);
            }
          case r:
            switch (h) {
              case 1:
                return y.splice(g, 1);
              case 2:
                return y.delete(g);
              case 3:
                return y.delete(v.value);
              default:
                return delete y[g];
            }
          default:
            ye(17, x);
        }
      }),
      f
    );
  }
  function d(f) {
    if (!pt(f)) return f;
    if (Array.isArray(f)) return f.map(d);
    if (si(f))
      return new Map(Array.from(f.entries()).map(([v, w]) => [v, d(w)]));
    if (li(f)) return new Set(Array.from(f).map(d));
    const p = Object.create(In(f));
    for (const v in f) p[v] = d(f[v]);
    return Oo(f, ho) && (p[ho] = f[ho]), p;
  }
  function c(f) {
    return kt(f) ? d(f) : f;
  }
  db("Patches", {
    applyPatches_: u,
    generatePatches_: o,
    generateReplacementPatches_: a,
  });
}
var Ue = new yb(),
  ai = Ue.produce,
  _y = Ue.produceWithPatches.bind(Ue);
Ue.setAutoFreeze.bind(Ue);
Ue.setUseStrictShallowCopy.bind(Ue);
var cp = Ue.applyPatches.bind(Ue);
Ue.createDraft.bind(Ue);
Ue.finishDraft.bind(Ue);
function Sb(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function xb(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function Cb(
  e,
  t = "expected all items to be functions, instead received the following types: ",
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r,
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var fp = (e) => (Array.isArray(e) ? e : [e]);
function bb(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Cb(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    t
  );
}
function kb(e, t) {
  const n = [],
    { length: r } = e;
  for (let o = 0; o < r; o++) n.push(e[o].apply(null, t));
  return n;
}
var Eb = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  _b = typeof WeakRef < "u" ? WeakRef : Eb,
  Rb = 0,
  dp = 1;
function Ii() {
  return { s: Rb, v: void 0, o: null, p: null };
}
function js(e, t = {}) {
  let n = Ii();
  const { resultEqualityCheck: r } = t;
  let o,
    i = 0;
  function s() {
    var c;
    let l = n;
    const { length: a } = arguments;
    for (let f = 0, p = a; f < p; f++) {
      const v = arguments[f];
      if (typeof v == "function" || (typeof v == "object" && v !== null)) {
        let w = l.o;
        w === null && (l.o = w = new WeakMap());
        const x = w.get(v);
        x === void 0 ? ((l = Ii()), w.set(v, l)) : (l = x);
      } else {
        let w = l.p;
        w === null && (l.p = w = new Map());
        const x = w.get(v);
        x === void 0 ? ((l = Ii()), w.set(v, l)) : (l = x);
      }
    }
    const u = l;
    let d;
    if (l.s === dp) d = l.v;
    else if (((d = e.apply(null, arguments)), i++, r)) {
      const f =
        ((c = o == null ? void 0 : o.deref) == null ? void 0 : c.call(o)) ?? o;
      f != null && r(f, d) && ((d = f), i !== 0 && i--),
        (o =
          (typeof d == "object" && d !== null) || typeof d == "function"
            ? new _b(d)
            : d);
    }
    return (u.s = dp), (u.v = d), d;
  }
  return (
    (s.clearCache = () => {
      (n = Ii()), s.resetResultsCount();
    }),
    (s.resultsCount = () => i),
    (s.resetResultsCount = () => {
      i = 0;
    }),
    s
  );
}
function Pb(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...o) => {
      let i = 0,
        s = 0,
        l,
        a = {},
        u = o.pop();
      typeof u == "object" && ((a = u), (u = o.pop())),
        Sb(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`,
        );
      const d = { ...n, ...a },
        {
          memoize: c,
          memoizeOptions: f = [],
          argsMemoize: p = js,
          argsMemoizeOptions: v = [],
          devModeChecks: w = {},
        } = d,
        x = fp(f),
        y = fp(v),
        h = bb(o),
        m = c(
          function () {
            return i++, u.apply(null, arguments);
          },
          ...x,
        ),
        g = p(
          function () {
            s++;
            const E = kb(h, arguments);
            return (l = m.apply(null, E)), l;
          },
          ...y,
        );
      return Object.assign(g, {
        resultFunc: u,
        memoizedResultFunc: m,
        dependencies: h,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => l,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: c,
        argsMemoize: p,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var ff = Pb(js),
  Nb = Object.assign(
    (e, t = ff) => {
      xb(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const n = Object.keys(e),
        r = n.map((i) => e[i]);
      return t(r, (...i) => i.reduce((s, l, a) => ((s[n[a]] = l), s), {}));
    },
    { withTypes: () => Nb },
  );
function Ry(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (i) =>
      typeof i == "function" ? i(n, r, e) : o(i);
}
var jb = Ry(),
  Tb = Ry,
  $b =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Rs
              : Rs.apply(null, arguments);
        },
  Mb = (e) => e && typeof e.match == "function";
function ft(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(Ne(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Sy(r) && r.type === e),
    n
  );
}
var Py = class ro extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ro.prototype);
  }
  static get [Symbol.species]() {
    return ro;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new ro(...t[0].concat(this))
      : new ro(...t.concat(this));
  }
};
function pp(e) {
  return pt(e) ? ai(e, () => {}) : e;
}
function Nu(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(Ne(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Ab(e) {
  return typeof e == "boolean";
}
var zb = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let s = new Py();
      return n && (Ab(n) ? s.push(jb) : s.push(Tb(n.extraArgument))), s;
    },
  ur = "RTK_autoBatch",
  Gr = () => (e) => ({ payload: e, meta: { [ur]: !0 } }),
  Ny = (e) => (t) => {
    setTimeout(t, e);
  },
  Ib =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Ny(10),
  Ob =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        i = !1,
        s = !1;
      const l = new Set(),
        a =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? Ib
              : e.type === "callback"
                ? e.queueNotification
                : Ny(e.timeout),
        u = () => {
          (s = !1), i && ((i = !1), l.forEach((d) => d()));
        };
      return Object.assign({}, r, {
        subscribe(d) {
          const c = () => o && d(),
            f = r.subscribe(c);
          return (
            l.add(d),
            () => {
              f(), l.delete(d);
            }
          );
        },
        dispatch(d) {
          var c;
          try {
            return (
              (o = !((c = d == null ? void 0 : d.meta) != null && c[ur])),
              (i = !o),
              i && (s || ((s = !0), a(u))),
              r.dispatch(d)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  Lb = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new Py(e);
      return r && o.push(Ob(typeof r == "object" ? r : void 0)), o;
    };
function Db(e) {
  const t = zb(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: s = void 0,
    } = e || {};
  let l;
  if (typeof n == "function") l = n;
  else if (bt(n)) l = lf(n);
  else throw new Error(Ne(1));
  let a;
  typeof r == "function" ? (a = r(t)) : (a = t());
  let u = Rs;
  o && (u = $b({ trace: !1, ...(typeof o == "object" && o) }));
  const d = lb(...a),
    c = Lb(d);
  let f = typeof s == "function" ? s(c) : c();
  const p = u(...f);
  return wy(l, i, p);
}
function jy(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(i, s) {
      const l = typeof i == "string" ? i : i.type;
      if (!l) throw new Error(Ne(28));
      if (l in t) throw new Error(Ne(29));
      return (t[l] = s), o;
    },
    addMatcher(i, s) {
      return n.push({ matcher: i, reducer: s }), o;
    },
    addDefaultCase(i) {
      return (r = i), o;
    },
  };
  return e(o), [t, n, r];
}
function Fb(e) {
  return typeof e == "function";
}
function Bb(e, t) {
  let [n, r, o] = jy(t),
    i;
  if (Fb(e)) i = () => pp(e());
  else {
    const l = pp(e);
    i = () => l;
  }
  function s(l = i(), a) {
    let u = [
      n[a.type],
      ...r.filter(({ matcher: d }) => d(a)).map(({ reducer: d }) => d),
    ];
    return (
      u.filter((d) => !!d).length === 0 && (u = [o]),
      u.reduce((d, c) => {
        if (c)
          if (kt(d)) {
            const p = c(d, a);
            return p === void 0 ? d : p;
          } else {
            if (pt(d)) return ai(d, (f) => c(f, a));
            {
              const f = c(d, a);
              if (f === void 0) {
                if (d === null) return d;
                throw new Error(Ne(9));
              }
              return f;
            }
          }
        return d;
      }, l)
    );
  }
  return (s.getInitialState = i), s;
}
var Ty = (e, t) => (Mb(e) ? e.match(t) : e(t));
function Lt(...e) {
  return (t) => e.some((n) => Ty(n, t));
}
function vo(...e) {
  return (t) => e.every((n) => Ty(n, t));
}
function kl(e, t) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function ui(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function df(...e) {
  return e.length === 0
    ? (t) => kl(t, ["pending"])
    : ui(e)
      ? Lt(...e.map((t) => t.pending))
      : df()(e[0]);
}
function Nr(...e) {
  return e.length === 0
    ? (t) => kl(t, ["rejected"])
    : ui(e)
      ? Lt(...e.map((t) => t.rejected))
      : Nr()(e[0]);
}
function El(...e) {
  const t = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0
    ? vo(Nr(...e), t)
    : ui(e)
      ? vo(Nr(...e), t)
      : El()(e[0]);
}
function dn(...e) {
  return e.length === 0
    ? (t) => kl(t, ["fulfilled"])
    : ui(e)
      ? Lt(...e.map((t) => t.fulfilled))
      : dn()(e[0]);
}
function ju(...e) {
  return e.length === 0
    ? (t) => kl(t, ["pending", "fulfilled", "rejected"])
    : ui(e)
      ? Lt(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
      : ju()(e[0]);
}
var Vb = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  pf = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += Vb[(Math.random() * 64) | 0];
    return t;
  },
  Wb = ["name", "message", "stack", "code"],
  wa = class {
    constructor(e, t) {
      Pl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  mp = class {
    constructor(e, t) {
      Pl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Hb = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of Wb) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Tu = (() => {
    function e(t, n, r) {
      const o = ft(t + "/fulfilled", (a, u, d, c) => ({
          payload: a,
          meta: {
            ...(c || {}),
            arg: d,
            requestId: u,
            requestStatus: "fulfilled",
          },
        })),
        i = ft(t + "/pending", (a, u, d) => ({
          payload: void 0,
          meta: {
            ...(d || {}),
            arg: u,
            requestId: a,
            requestStatus: "pending",
          },
        })),
        s = ft(t + "/rejected", (a, u, d, c, f) => ({
          payload: c,
          error: ((r && r.serializeError) || Hb)(a || "Rejected"),
          meta: {
            ...(f || {}),
            arg: d,
            requestId: u,
            rejectedWithValue: !!c,
            requestStatus: "rejected",
            aborted: (a == null ? void 0 : a.name) === "AbortError",
            condition: (a == null ? void 0 : a.name) === "ConditionError",
          },
        }));
      function l(a) {
        return (u, d, c) => {
          const f = r != null && r.idGenerator ? r.idGenerator(a) : pf(),
            p = new AbortController();
          let v, w;
          function x(h) {
            (w = h), p.abort();
          }
          const y = (async function () {
            var g, C;
            let h;
            try {
              let E =
                (g = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : g.call(r, a, { getState: d, extra: c });
              if ((Qb(E) && (E = await E), E === !1 || p.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const _ = new Promise((k, R) => {
                (v = () => {
                  R({ name: "AbortError", message: w || "Aborted" });
                }),
                  p.signal.addEventListener("abort", v);
              });
              u(
                i(
                  f,
                  a,
                  (C = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : C.call(
                        r,
                        { requestId: f, arg: a },
                        { getState: d, extra: c },
                      ),
                ),
              ),
                (h = await Promise.race([
                  _,
                  Promise.resolve(
                    n(a, {
                      dispatch: u,
                      getState: d,
                      extra: c,
                      requestId: f,
                      signal: p.signal,
                      abort: x,
                      rejectWithValue: (k, R) => new wa(k, R),
                      fulfillWithValue: (k, R) => new mp(k, R),
                    }),
                  ).then((k) => {
                    if (k instanceof wa) throw k;
                    return k instanceof mp
                      ? o(k.payload, f, a, k.meta)
                      : o(k, f, a);
                  }),
                ]));
            } catch (E) {
              h =
                E instanceof wa ? s(null, f, a, E.payload, E.meta) : s(E, f, a);
            } finally {
              v && p.signal.removeEventListener("abort", v);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                s.match(h) &&
                h.meta.condition) ||
                u(h),
              h
            );
          })();
          return Object.assign(y, {
            abort: x,
            requestId: f,
            arg: a,
            unwrap() {
              return y.then(Ub);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: i,
        rejected: s,
        fulfilled: o,
        settled: Lt(s, o),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function Ub(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Qb(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var $y = Symbol.for("rtk-slice-createasyncthunk"),
  qb = { [$y]: Tu };
function Yb(e, t) {
  return `${e}/${t}`;
}
function My({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[$y];
  return function (o) {
    const { name: i, reducerPath: s = i } = o;
    if (!i) throw new Error(Ne(11));
    typeof process < "u";
    const l =
        (typeof o.reducers == "function" ? o.reducers(Xb()) : o.reducers) || {},
      a = Object.keys(l),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(m, g) {
          const C = typeof m == "string" ? m : m.type;
          if (!C) throw new Error(Ne(12));
          if (C in u.sliceCaseReducersByType) throw new Error(Ne(13));
          return (u.sliceCaseReducersByType[C] = g), d;
        },
        addMatcher(m, g) {
          return u.sliceMatchers.push({ matcher: m, reducer: g }), d;
        },
        exposeAction(m, g) {
          return (u.actionCreators[m] = g), d;
        },
        exposeCaseReducer(m, g) {
          return (u.sliceCaseReducersByName[m] = g), d;
        },
      };
    a.forEach((m) => {
      const g = l[m],
        C = {
          reducerName: m,
          type: Yb(i, m),
          createNotation: typeof o.reducers == "function",
        };
      Zb(g) ? ek(C, g, d, t) : Gb(C, g, d);
    });
    function c() {
      const [m = {}, g = [], C = void 0] =
          typeof o.extraReducers == "function"
            ? jy(o.extraReducers)
            : [o.extraReducers],
        E = { ...m, ...u.sliceCaseReducersByType };
      return Bb(o.initialState, (_) => {
        for (let k in E) _.addCase(k, E[k]);
        for (let k of u.sliceMatchers) _.addMatcher(k.matcher, k.reducer);
        for (let k of g) _.addMatcher(k.matcher, k.reducer);
        C && _.addDefaultCase(C);
      });
    }
    const f = (m) => m,
      p = new Map();
    let v;
    function w(m, g) {
      return v || (v = c()), v(m, g);
    }
    function x() {
      return v || (v = c()), v.getInitialState();
    }
    function y(m, g = !1) {
      function C(_) {
        let k = _[m];
        return typeof k > "u" && g && (k = x()), k;
      }
      function E(_ = f) {
        const k = Nu(p, g, { insert: () => new WeakMap() });
        return Nu(k, _, {
          insert: () => {
            const R = {};
            for (const [P, j] of Object.entries(o.selectors ?? {}))
              R[P] = Kb(j, _, x, g);
            return R;
          },
        });
      }
      return {
        reducerPath: m,
        getSelectors: E,
        get selectors() {
          return E(C);
        },
        selectSlice: C,
      };
    }
    const h = {
      name: i,
      reducer: w,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: x,
      ...y(s),
      injectInto(m, { reducerPath: g, ...C } = {}) {
        const E = g ?? s;
        return (
          m.inject({ reducerPath: E, reducer: w }, C), { ...h, ...y(E, !0) }
        );
      },
    };
    return h;
  };
}
function Kb(e, t, n, r) {
  function o(i, ...s) {
    let l = t(i);
    return typeof l > "u" && r && (l = n()), e(l, ...s);
  }
  return (o.unwrapped = e), o;
}
var qn = My();
function Xb() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function Gb({ type: e, reducerName: t, createNotation: n }, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !Jb(r)) throw new Error(Ne(17));
    (i = r.reducer), (s = r.prepare);
  } else i = r;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, s ? ft(e, s) : ft(e));
}
function Zb(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Jb(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function ek({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(Ne(18));
  const {
      payloadCreator: i,
      fulfilled: s,
      pending: l,
      rejected: a,
      settled: u,
      options: d,
    } = n,
    c = o(e, i, d);
  r.exposeAction(t, c),
    s && r.addCase(c.fulfilled, s),
    l && r.addCase(c.pending, l),
    a && r.addCase(c.rejected, a),
    u && r.addMatcher(c.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: s || Oi,
      pending: l || Oi,
      rejected: a || Oi,
      settled: u || Oi,
    });
}
function Oi() {}
var tk = (e) => "reducerPath" in e && typeof e.reducerPath == "string",
  nk = (e) =>
    e.flatMap((t) =>
      tk(t) ? [[t.reducerPath, t.reducer]] : Object.entries(t),
    ),
  mf = Symbol.for("rtk-state-proxy-original"),
  rk = (e) => !!e && !!e[mf],
  ok = new WeakMap(),
  ik = (e, t) =>
    Nu(ok, e, {
      insert: () =>
        new Proxy(e, {
          get: (n, r, o) => {
            if (r === mf) return n;
            const i = Reflect.get(n, r, o);
            if (typeof i > "u") {
              const s = t[r.toString()];
              if (s) {
                const l = s(void 0, { type: pf() });
                if (typeof l > "u") throw new Error(Ne(24));
                return l;
              }
            }
            return i;
          },
        }),
    }),
  sk = (e) => {
    if (!rk(e)) throw new Error(Ne(25));
    return e[mf];
  },
  lk = (e = {}) => e;
function ak(...e) {
  const t = Object.fromEntries(nk(e)),
    n = () => (Object.keys(t).length ? lf(t) : lk);
  let r = n();
  function o(l, a) {
    return r(l, a);
  }
  o.withLazyLoadedSlices = () => o;
  const i = (l, a = {}) => {
      const { reducerPath: u, reducer: d } = l,
        c = t[u];
      return !a.overrideExisting && c && c !== d
        ? (typeof process < "u", o)
        : ((t[u] = d), (r = n()), o);
    },
    s = Object.assign(
      function (a, u) {
        return function (c, ...f) {
          return a(ik(u ? u(c, ...f) : c, t), ...f);
        };
      },
      { original: sk },
    );
  return Object.assign(o, { inject: i, selector: s });
}
function Ne(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ay = ((e) => (
  (e.uninitialized = "uninitialized"),
  (e.pending = "pending"),
  (e.fulfilled = "fulfilled"),
  (e.rejected = "rejected"),
  e
))(Ay || {});
function uk(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected",
  };
}
var hp = bt;
function zy(e, t) {
  if (e === t || !((hp(e) && hp(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  const n = Object.keys(t),
    r = Object.keys(e);
  let o = n.length === r.length;
  const i = Array.isArray(t) ? [] : {};
  for (const s of n) (i[s] = zy(e[s], t[s])), o && (o = e[s] === i[s]);
  return o ? e : i;
}
function gr(e) {
  let t = 0;
  for (const n in e) t++;
  return t;
}
var vp = (e) => [].concat(...e);
function ck(e) {
  return new RegExp("(^|:)//").test(e);
}
function fk() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function yp(e) {
  return e != null;
}
function dk() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
var pk = (e) => e.replace(/\/$/, ""),
  mk = (e) => e.replace(/^\//, "");
function hk(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (ck(t)) return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = pk(e)), (t = mk(t)), `${e}${n}${t}`;
}
var gp = (...e) => fetch(...e),
  vk = (e) => e.status >= 200 && e.status <= 299,
  yk = (e) => /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
function wp(e) {
  if (!bt(e)) return e;
  const t = { ...e };
  for (const [n, r] of Object.entries(t)) r === void 0 && delete t[n];
  return t;
}
function gk({
  baseUrl: e,
  prepareHeaders: t = (c) => c,
  fetchFn: n = gp,
  paramsSerializer: r,
  isJsonContentType: o = yk,
  jsonContentType: i = "application/json",
  jsonReplacer: s,
  timeout: l,
  responseHandler: a,
  validateStatus: u,
  ...d
} = {}) {
  return (
    typeof fetch > "u" &&
      n === gp &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
      ),
    async (f, p) => {
      const {
        signal: v,
        getState: w,
        extra: x,
        endpoint: y,
        forced: h,
        type: m,
      } = p;
      let g,
        {
          url: C,
          headers: E = new Headers(d.headers),
          params: _ = void 0,
          responseHandler: k = a ?? "json",
          validateStatus: R = u ?? vk,
          timeout: P = l,
          ...j
        } = typeof f == "string" ? { url: f } : f,
        M = { ...d, signal: v, ...j };
      (E = new Headers(wp(E))),
        (M.headers =
          (await t(E, {
            getState: w,
            extra: x,
            endpoint: y,
            forced: h,
            type: m,
          })) || E);
      const O = (B) =>
        typeof B == "object" &&
        (bt(B) || Array.isArray(B) || typeof B.toJSON == "function");
      if (
        (!M.headers.has("content-type") &&
          O(M.body) &&
          M.headers.set("content-type", i),
        O(M.body) && o(M.headers) && (M.body = JSON.stringify(M.body, s)),
        _)
      ) {
        const B = ~C.indexOf("?") ? "&" : "?",
          Y = r ? r(_) : new URLSearchParams(wp(_));
        C += B + Y;
      }
      C = hk(e, C);
      const L = new Request(C, M);
      g = { request: new Request(C, M) };
      let W,
        J = !1,
        T =
          P &&
          setTimeout(() => {
            (J = !0), p.abort();
          }, P);
      try {
        W = await n(L);
      } catch (B) {
        return {
          error: {
            status: J ? "TIMEOUT_ERROR" : "FETCH_ERROR",
            error: String(B),
          },
          meta: g,
        };
      } finally {
        T && clearTimeout(T);
      }
      const I = W.clone();
      g.response = I;
      let A,
        V = "";
      try {
        let B;
        if (
          (await Promise.all([
            c(W, k).then(
              (Y) => (A = Y),
              (Y) => (B = Y),
            ),
            I.text().then(
              (Y) => (V = Y),
              () => {},
            ),
          ]),
          B)
        )
          throw B;
      } catch (B) {
        return {
          error: {
            status: "PARSING_ERROR",
            originalStatus: W.status,
            data: V,
            error: String(B),
          },
          meta: g,
        };
      }
      return R(W, A)
        ? { data: A, meta: g }
        : { error: { status: W.status, data: A }, meta: g };
    }
  );
  async function c(f, p) {
    if (typeof p == "function") return p(f);
    if (
      (p === "content-type" && (p = o(f.headers) ? "json" : "text"),
      p === "json")
    ) {
      const v = await f.text();
      return v.length ? JSON.parse(v) : null;
    }
    return f.text();
  }
}
var Sp = class {
    constructor(e, t = void 0) {
      (this.value = e), (this.meta = t);
    }
  },
  _l = ft("__rtkq/focused"),
  hf = ft("__rtkq/unfocused"),
  Rl = ft("__rtkq/online"),
  vf = ft("__rtkq/offline"),
  Sa = !1;
function wk(e, t) {
  function n() {
    const r = () => e(_l()),
      o = () => e(hf()),
      i = () => e(Rl()),
      s = () => e(vf()),
      l = () => {
        window.document.visibilityState === "visible" ? r() : o();
      };
    return (
      Sa ||
        (typeof window < "u" &&
          window.addEventListener &&
          (window.addEventListener("visibilitychange", l, !1),
          window.addEventListener("focus", r, !1),
          window.addEventListener("online", i, !1),
          window.addEventListener("offline", s, !1),
          (Sa = !0))),
      () => {
        window.removeEventListener("focus", r),
          window.removeEventListener("visibilitychange", l),
          window.removeEventListener("online", i),
          window.removeEventListener("offline", s),
          (Sa = !1);
      }
    );
  }
  return n();
}
function Iy(e) {
  return e.type === "query";
}
function Sk(e) {
  return e.type === "mutation";
}
function yf(e, t, n, r, o, i) {
  return xk(e)
    ? e(t, n, r, o).map($u).map(i)
    : Array.isArray(e)
      ? e.map($u).map(i)
      : [];
}
function xk(e) {
  return typeof e == "function";
}
function $u(e) {
  return typeof e == "string" ? { type: e } : e;
}
function Ck(e, t) {
  return e.catch(t);
}
var Fo = Symbol("forceQueryFn"),
  Mu = (e) => typeof e[Fo] == "function";
function bk({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: n,
  api: r,
  context: o,
}) {
  const i = new Map(),
    s = new Map(),
    {
      unsubscribeQueryResult: l,
      removeMutationResult: a,
      updateSubscriptionOptions: u,
    } = r.internalActions;
  return {
    buildInitiateQuery: v,
    buildInitiateMutation: w,
    getRunningQueryThunk: d,
    getRunningMutationThunk: c,
    getRunningQueriesThunk: f,
    getRunningMutationsThunk: p,
  };
  function d(x, y) {
    return (h) => {
      var C;
      const m = o.endpointDefinitions[x],
        g = e({ queryArgs: y, endpointDefinition: m, endpointName: x });
      return (C = i.get(h)) == null ? void 0 : C[g];
    };
  }
  function c(x, y) {
    return (h) => {
      var m;
      return (m = s.get(h)) == null ? void 0 : m[y];
    };
  }
  function f() {
    return (x) => Object.values(i.get(x) || {}).filter(yp);
  }
  function p() {
    return (x) => Object.values(s.get(x) || {}).filter(yp);
  }
  function v(x, y) {
    const h =
      (
        m,
        {
          subscribe: g = !0,
          forceRefetch: C,
          subscriptionOptions: E,
          [Fo]: _,
          ...k
        } = {},
      ) =>
      (R, P) => {
        var B;
        const j = e({ queryArgs: m, endpointDefinition: y, endpointName: x }),
          M = t({
            ...k,
            type: "query",
            subscribe: g,
            forceRefetch: C,
            subscriptionOptions: E,
            endpointName: x,
            originalArgs: m,
            queryCacheKey: j,
            [Fo]: _,
          }),
          O = r.endpoints[x].select(m),
          L = R(M),
          H = O(P()),
          { requestId: W, abort: J } = L,
          T = H.requestId !== W,
          I = (B = i.get(R)) == null ? void 0 : B[j],
          A = () => O(P()),
          V = Object.assign(
            _
              ? L.then(A)
              : T && !I
                ? Promise.resolve(H)
                : Promise.all([I, L]).then(A),
            {
              arg: m,
              requestId: W,
              subscriptionOptions: E,
              queryCacheKey: j,
              abort: J,
              async unwrap() {
                const Y = await V;
                if (Y.isError) throw Y.error;
                return Y.data;
              },
              refetch: () => R(h(m, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                g && R(l({ queryCacheKey: j, requestId: W }));
              },
              updateSubscriptionOptions(Y) {
                (V.subscriptionOptions = Y),
                  R(
                    u({
                      endpointName: x,
                      requestId: W,
                      queryCacheKey: j,
                      options: Y,
                    }),
                  );
              },
            },
          );
        if (!I && !T && !_) {
          const Y = i.get(R) || {};
          (Y[j] = V),
            i.set(R, Y),
            V.then(() => {
              delete Y[j], gr(Y) || i.delete(R);
            });
        }
        return V;
      };
    return h;
  }
  function w(x) {
    return (y, { track: h = !0, fixedCacheKey: m } = {}) =>
      (g, C) => {
        const E = n({
            type: "mutation",
            endpointName: x,
            originalArgs: y,
            track: h,
            fixedCacheKey: m,
          }),
          _ = g(E),
          { requestId: k, abort: R, unwrap: P } = _,
          j = Ck(
            _.unwrap().then((H) => ({ data: H })),
            (H) => ({ error: H }),
          ),
          M = () => {
            g(a({ requestId: k, fixedCacheKey: m }));
          },
          O = Object.assign(j, {
            arg: _.arg,
            requestId: k,
            abort: R,
            unwrap: P,
            reset: M,
          }),
          L = s.get(g) || {};
        return (
          s.set(g, L),
          (L[k] = O),
          O.then(() => {
            delete L[k], gr(L) || s.delete(g);
          }),
          m &&
            ((L[m] = O),
            O.then(() => {
              L[m] === O && (delete L[m], gr(L) || s.delete(g));
            })),
          O
        );
      };
  }
}
function xp(e) {
  return e;
}
function kk({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: n },
  serializeQueryArgs: r,
  api: o,
  assertTagType: i,
}) {
  const s = (h, m, g, C) => (E, _) => {
      const k = n[h],
        R = r({ queryArgs: m, endpointDefinition: k, endpointName: h });
      if (
        (E(
          o.internalActions.queryResultPatched({
            queryCacheKey: R,
            patches: g,
          }),
        ),
        !C)
      )
        return;
      const P = o.endpoints[h].select(m)(_()),
        j = yf(k.providesTags, P.data, void 0, m, {}, i);
      E(
        o.internalActions.updateProvidedBy({
          queryCacheKey: R,
          providedTags: j,
        }),
      );
    },
    l =
      (h, m, g, C = !0) =>
      (E, _) => {
        const R = o.endpoints[h].select(m)(_()),
          P = {
            patches: [],
            inversePatches: [],
            undo: () => E(o.util.patchQueryData(h, m, P.inversePatches, C)),
          };
        if (R.status === "uninitialized") return P;
        let j;
        if ("data" in R)
          if (pt(R.data)) {
            const [M, O, L] = _y(R.data, g);
            P.patches.push(...O), P.inversePatches.push(...L), (j = M);
          } else
            (j = g(R.data)),
              P.patches.push({ op: "replace", path: [], value: j }),
              P.inversePatches.push({ op: "replace", path: [], value: R.data });
        return (
          P.patches.length === 0 ||
            E(o.util.patchQueryData(h, m, P.patches, C)),
          P
        );
      },
    a = (h, m, g) => (C) =>
      C(
        o.endpoints[h].initiate(m, {
          subscribe: !1,
          forceRefetch: !0,
          [Fo]: () => ({ data: g }),
        }),
      ),
    u = async (
      h,
      {
        signal: m,
        abort: g,
        rejectWithValue: C,
        fulfillWithValue: E,
        dispatch: _,
        getState: k,
        extra: R,
      },
    ) => {
      const P = n[h.endpointName];
      try {
        let j = xp,
          M;
        const O = {
            signal: m,
            abort: g,
            dispatch: _,
            getState: k,
            extra: R,
            endpoint: h.endpointName,
            type: h.type,
            forced: h.type === "query" ? d(h, k()) : void 0,
          },
          L = h.type === "query" ? h[Fo] : void 0;
        if (
          (L
            ? (M = L())
            : P.query
              ? ((M = await t(P.query(h.originalArgs), O, P.extraOptions)),
                P.transformResponse && (j = P.transformResponse))
              : (M = await P.queryFn(h.originalArgs, O, P.extraOptions, (H) =>
                  t(H, O, P.extraOptions),
                )),
          typeof process < "u",
          M.error)
        )
          throw new Sp(M.error, M.meta);
        return E(await j(M.data, M.meta, h.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: M.meta,
          [ur]: !0,
        });
      } catch (j) {
        let M = j;
        if (M instanceof Sp) {
          let O = xp;
          P.query && P.transformErrorResponse && (O = P.transformErrorResponse);
          try {
            return C(await O(M.value, M.meta, h.originalArgs), {
              baseQueryMeta: M.meta,
              [ur]: !0,
            });
          } catch (L) {
            M = L;
          }
        }
        throw (typeof process < "u", console.error(M), M);
      }
    };
  function d(h, m) {
    var k, R, P;
    const g =
        (R = (k = m[e]) == null ? void 0 : k.queries) == null
          ? void 0
          : R[h.queryCacheKey],
      C = (P = m[e]) == null ? void 0 : P.config.refetchOnMountOrArgChange,
      E = g == null ? void 0 : g.fulfilledTimeStamp,
      _ = h.forceRefetch ?? (h.subscribe && C);
    return _ ? _ === !0 || (Number(new Date()) - Number(E)) / 1e3 >= _ : !1;
  }
  const c = Tu(`${e}/executeQuery`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [ur]: !0 };
      },
      condition(h, { getState: m }) {
        var P, j, M;
        const g = m(),
          C =
            (j = (P = g[e]) == null ? void 0 : P.queries) == null
              ? void 0
              : j[h.queryCacheKey],
          E = C == null ? void 0 : C.fulfilledTimeStamp,
          _ = h.originalArgs,
          k = C == null ? void 0 : C.originalArgs,
          R = n[h.endpointName];
        return Mu(h)
          ? !0
          : (C == null ? void 0 : C.status) === "pending"
            ? !1
            : d(h, g) ||
                (Iy(R) &&
                  (M = R == null ? void 0 : R.forceRefetch) != null &&
                  M.call(R, {
                    currentArg: _,
                    previousArg: k,
                    endpointState: C,
                    state: g,
                  }))
              ? !0
              : !E;
      },
      dispatchConditionRejection: !0,
    }),
    f = Tu(`${e}/executeMutation`, u, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [ur]: !0 };
      },
    }),
    p = (h) => "force" in h,
    v = (h) => "ifOlderThan" in h,
    w = (h, m, g) => (C, E) => {
      const _ = p(g) && g.force,
        k = v(g) && g.ifOlderThan,
        R = (j = !0) => {
          const M = { forceRefetch: j, isPrefetch: !0 };
          return o.endpoints[h].initiate(m, M);
        },
        P = o.endpoints[h].select(m)(E());
      if (_) C(R());
      else if (k) {
        const j = P == null ? void 0 : P.fulfilledTimeStamp;
        if (!j) {
          C(R());
          return;
        }
        (Number(new Date()) - Number(new Date(j))) / 1e3 >= k && C(R());
      } else C(R(!1));
    };
  function x(h) {
    return (m) => {
      var g, C;
      return (
        ((C = (g = m == null ? void 0 : m.meta) == null ? void 0 : g.arg) ==
        null
          ? void 0
          : C.endpointName) === h
      );
    };
  }
  function y(h, m) {
    return {
      matchPending: vo(df(h), x(m)),
      matchFulfilled: vo(dn(h), x(m)),
      matchRejected: vo(Nr(h), x(m)),
    };
  }
  return {
    queryThunk: c,
    mutationThunk: f,
    prefetch: w,
    updateQueryData: l,
    upsertQueryData: a,
    patchQueryData: s,
    buildMatchThunkActions: y,
  };
}
function Oy(e, t, n, r) {
  return yf(
    n[e.meta.arg.endpointName][t],
    dn(e) ? e.payload : void 0,
    El(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    r,
  );
}
function Li(e, t, n) {
  const r = e[t];
  r && n(r);
}
function Bo(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Cp(e, t, n) {
  const r = e[Bo(t)];
  r && n(r);
}
var Zr = {};
function Ek({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  context: {
    endpointDefinitions: r,
    apiUid: o,
    extractRehydrationInfo: i,
    hasRehydrationInfo: s,
  },
  assertTagType: l,
  config: a,
}) {
  const u = ft(`${e}/resetApiState`),
    d = qn({
      name: `${e}/queries`,
      initialState: Zr,
      reducers: {
        removeQueryResult: {
          reducer(m, { payload: { queryCacheKey: g } }) {
            delete m[g];
          },
          prepare: Gr(),
        },
        queryResultPatched: {
          reducer(m, { payload: { queryCacheKey: g, patches: C } }) {
            Li(m, g, (E) => {
              E.data = cp(E.data, C.concat());
            });
          },
          prepare: Gr(),
        },
      },
      extraReducers(m) {
        m.addCase(t.pending, (g, { meta: C, meta: { arg: E } }) => {
          var k;
          const _ = Mu(E);
          g[(k = E.queryCacheKey)] ??
            (g[k] = { status: "uninitialized", endpointName: E.endpointName }),
            Li(g, E.queryCacheKey, (R) => {
              (R.status = "pending"),
                (R.requestId = _ && R.requestId ? R.requestId : C.requestId),
                E.originalArgs !== void 0 && (R.originalArgs = E.originalArgs),
                (R.startedTimeStamp = C.startedTimeStamp);
            });
        })
          .addCase(t.fulfilled, (g, { meta: C, payload: E }) => {
            Li(g, C.arg.queryCacheKey, (_) => {
              if (_.requestId !== C.requestId && !Mu(C.arg)) return;
              const { merge: k } = r[C.arg.endpointName];
              if (((_.status = "fulfilled"), k))
                if (_.data !== void 0) {
                  const {
                    fulfilledTimeStamp: R,
                    arg: P,
                    baseQueryMeta: j,
                    requestId: M,
                  } = C;
                  let O = ai(_.data, (L) =>
                    k(L, E, {
                      arg: P.originalArgs,
                      baseQueryMeta: j,
                      fulfilledTimeStamp: R,
                      requestId: M,
                    }),
                  );
                  _.data = O;
                } else _.data = E;
              else
                _.data =
                  (r[C.arg.endpointName].structuralSharing ?? !0)
                    ? zy(kt(_.data) ? ub(_.data) : _.data, E)
                    : E;
              delete _.error, (_.fulfilledTimeStamp = C.fulfilledTimeStamp);
            });
          })
          .addCase(
            t.rejected,
            (
              g,
              {
                meta: { condition: C, arg: E, requestId: _ },
                error: k,
                payload: R,
              },
            ) => {
              Li(g, E.queryCacheKey, (P) => {
                if (!C) {
                  if (P.requestId !== _) return;
                  (P.status = "rejected"), (P.error = R ?? k);
                }
              });
            },
          )
          .addMatcher(s, (g, C) => {
            const { queries: E } = i(C);
            for (const [_, k] of Object.entries(E))
              ((k == null ? void 0 : k.status) === "fulfilled" ||
                (k == null ? void 0 : k.status) === "rejected") &&
                (g[_] = k);
          });
      },
    }),
    c = qn({
      name: `${e}/mutations`,
      initialState: Zr,
      reducers: {
        removeMutationResult: {
          reducer(m, { payload: g }) {
            const C = Bo(g);
            C in m && delete m[C];
          },
          prepare: Gr(),
        },
      },
      extraReducers(m) {
        m.addCase(
          n.pending,
          (
            g,
            { meta: C, meta: { requestId: E, arg: _, startedTimeStamp: k } },
          ) => {
            _.track &&
              (g[Bo(C)] = {
                requestId: E,
                status: "pending",
                endpointName: _.endpointName,
                startedTimeStamp: k,
              });
          },
        )
          .addCase(n.fulfilled, (g, { payload: C, meta: E }) => {
            E.arg.track &&
              Cp(g, E, (_) => {
                _.requestId === E.requestId &&
                  ((_.status = "fulfilled"),
                  (_.data = C),
                  (_.fulfilledTimeStamp = E.fulfilledTimeStamp));
              });
          })
          .addCase(n.rejected, (g, { payload: C, error: E, meta: _ }) => {
            _.arg.track &&
              Cp(g, _, (k) => {
                k.requestId === _.requestId &&
                  ((k.status = "rejected"), (k.error = C ?? E));
              });
          })
          .addMatcher(s, (g, C) => {
            const { mutations: E } = i(C);
            for (const [_, k] of Object.entries(E))
              ((k == null ? void 0 : k.status) === "fulfilled" ||
                (k == null ? void 0 : k.status) === "rejected") &&
                _ !== (k == null ? void 0 : k.requestId) &&
                (g[_] = k);
          });
      },
    }),
    f = qn({
      name: `${e}/invalidation`,
      initialState: Zr,
      reducers: {
        updateProvidedBy: {
          reducer(m, g) {
            var _, k;
            const { queryCacheKey: C, providedTags: E } = g.payload;
            for (const R of Object.values(m))
              for (const P of Object.values(R)) {
                const j = P.indexOf(C);
                j !== -1 && P.splice(j, 1);
              }
            for (const { type: R, id: P } of E) {
              const j =
                (_ = m[R] ?? (m[R] = {}))[(k = P || "__internal_without_id")] ??
                (_[k] = []);
              j.includes(C) || j.push(C);
            }
          },
          prepare: Gr(),
        },
      },
      extraReducers(m) {
        m.addCase(
          d.actions.removeQueryResult,
          (g, { payload: { queryCacheKey: C } }) => {
            for (const E of Object.values(g))
              for (const _ of Object.values(E)) {
                const k = _.indexOf(C);
                k !== -1 && _.splice(k, 1);
              }
          },
        )
          .addMatcher(s, (g, C) => {
            var _, k;
            const { provided: E } = i(C);
            for (const [R, P] of Object.entries(E))
              for (const [j, M] of Object.entries(P)) {
                const O =
                  (_ = g[R] ?? (g[R] = {}))[
                    (k = j || "__internal_without_id")
                  ] ?? (_[k] = []);
                for (const L of M) O.includes(L) || O.push(L);
              }
          })
          .addMatcher(Lt(dn(t), El(t)), (g, C) => {
            const E = Oy(C, "providesTags", r, l),
              { queryCacheKey: _ } = C.meta.arg;
            f.caseReducers.updateProvidedBy(
              g,
              f.actions.updateProvidedBy({ queryCacheKey: _, providedTags: E }),
            );
          });
      },
    }),
    p = qn({
      name: `${e}/subscriptions`,
      initialState: Zr,
      reducers: {
        updateSubscriptionOptions(m, g) {},
        unsubscribeQueryResult(m, g) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    v = qn({
      name: `${e}/internalSubscriptions`,
      initialState: Zr,
      reducers: {
        subscriptionsUpdated: {
          reducer(m, g) {
            return cp(m, g.payload);
          },
          prepare: Gr(),
        },
      },
    }),
    w = qn({
      name: `${e}/config`,
      initialState: {
        online: dk(),
        focused: fk(),
        middlewareRegistered: !1,
        ...a,
      },
      reducers: {
        middlewareRegistered(m, { payload: g }) {
          m.middlewareRegistered =
            m.middlewareRegistered === "conflict" || o !== g ? "conflict" : !0;
        },
      },
      extraReducers: (m) => {
        m.addCase(Rl, (g) => {
          g.online = !0;
        })
          .addCase(vf, (g) => {
            g.online = !1;
          })
          .addCase(_l, (g) => {
            g.focused = !0;
          })
          .addCase(hf, (g) => {
            g.focused = !1;
          })
          .addMatcher(s, (g) => ({ ...g }));
      },
    }),
    x = lf({
      queries: d.reducer,
      mutations: c.reducer,
      provided: f.reducer,
      subscriptions: v.reducer,
      config: w.reducer,
    }),
    y = (m, g) => x(u.match(g) ? void 0 : m, g),
    h = {
      ...w.actions,
      ...d.actions,
      ...p.actions,
      ...v.actions,
      ...c.actions,
      ...f.actions,
      resetApiState: u,
    };
  return { reducer: y, actions: h };
}
var Rn = Symbol.for("RTKQ/skipToken"),
  Ly = { status: "uninitialized" },
  bp = ai(Ly, () => {}),
  kp = ai(Ly, () => {});
function _k({ serializeQueryArgs: e, reducerPath: t, createSelector: n }) {
  const r = (c) => bp,
    o = (c) => kp;
  return {
    buildQuerySelector: l,
    buildMutationSelector: a,
    selectInvalidatedBy: u,
    selectCachedArgsForQuery: d,
  };
  function i(c) {
    return { ...c, ...uk(c.status) };
  }
  function s(c) {
    return c[t];
  }
  function l(c, f) {
    return (p) => {
      const v = e({ queryArgs: p, endpointDefinition: f, endpointName: c });
      return n(
        p === Rn
          ? r
          : (y) => {
              var h, m;
              return (
                ((m = (h = s(y)) == null ? void 0 : h.queries) == null
                  ? void 0
                  : m[v]) ?? bp
              );
            },
        i,
      );
    };
  }
  function a() {
    return (c) => {
      let f;
      return (
        typeof c == "object" ? (f = Bo(c) ?? Rn) : (f = c),
        n(
          f === Rn
            ? o
            : (w) => {
                var x, y;
                return (
                  ((y = (x = s(w)) == null ? void 0 : x.mutations) == null
                    ? void 0
                    : y[f]) ?? kp
                );
              },
          i,
        )
      );
    };
  }
  function u(c, f) {
    const p = c[t],
      v = new Set();
    for (const w of f.map($u)) {
      const x = p.provided[w.type];
      if (!x) continue;
      let y = (w.id !== void 0 ? x[w.id] : vp(Object.values(x))) ?? [];
      for (const h of y) v.add(h);
    }
    return vp(
      Array.from(v.values()).map((w) => {
        const x = p.queries[w];
        return x
          ? [
              {
                queryCacheKey: w,
                endpointName: x.endpointName,
                originalArgs: x.originalArgs,
              },
            ]
          : [];
      }),
    );
  }
  function d(c, f) {
    return Object.values(c[t].queries)
      .filter(
        (p) =>
          (p == null ? void 0 : p.endpointName) === f &&
          p.status !== "uninitialized",
      )
      .map((p) => p.originalArgs);
  }
}
var Yn = WeakMap ? new WeakMap() : void 0,
  Ep = ({ endpointName: e, queryArgs: t }) => {
    let n = "";
    const r = Yn == null ? void 0 : Yn.get(t);
    if (typeof r == "string") n = r;
    else {
      const o = JSON.stringify(
        t,
        (i, s) => (
          (s = typeof s == "bigint" ? { $bigint: s.toString() } : s),
          (s = bt(s)
            ? Object.keys(s)
                .sort()
                .reduce((l, a) => ((l[a] = s[a]), l), {})
            : s),
          s
        ),
      );
      bt(t) && (Yn == null || Yn.set(t, o)), (n = o);
    }
    return `${e}(${n})`;
  };
function Rk(...e) {
  return function (n) {
    const r = js((u) => {
        var d;
        return (d = n.extractRehydrationInfo) == null
          ? void 0
          : d.call(n, u, { reducerPath: n.reducerPath ?? "api" });
      }),
      o = {
        reducerPath: "api",
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: "delayed",
        ...n,
        extractRehydrationInfo: r,
        serializeQueryArgs(u) {
          let d = Ep;
          if ("serializeQueryArgs" in u.endpointDefinition) {
            const c = u.endpointDefinition.serializeQueryArgs;
            d = (f) => {
              const p = c(f);
              return typeof p == "string" ? p : Ep({ ...f, queryArgs: p });
            };
          } else n.serializeQueryArgs && (d = n.serializeQueryArgs);
          return d(u);
        },
        tagTypes: [...(n.tagTypes || [])],
      },
      i = {
        endpointDefinitions: {},
        batch(u) {
          u();
        },
        apiUid: pf(),
        extractRehydrationInfo: r,
        hasRehydrationInfo: js((u) => r(u) != null),
      },
      s = {
        injectEndpoints: a,
        enhanceEndpoints({ addTagTypes: u, endpoints: d }) {
          if (u)
            for (const c of u) o.tagTypes.includes(c) || o.tagTypes.push(c);
          if (d)
            for (const [c, f] of Object.entries(d))
              typeof f == "function"
                ? f(i.endpointDefinitions[c])
                : Object.assign(i.endpointDefinitions[c] || {}, f);
          return s;
        },
      },
      l = e.map((u) => u.init(s, o, i));
    function a(u) {
      const d = u.endpoints({
        query: (c) => ({ ...c, type: "query" }),
        mutation: (c) => ({ ...c, type: "mutation" }),
      });
      for (const [c, f] of Object.entries(d)) {
        if (u.overrideExisting !== !0 && c in i.endpointDefinitions) {
          if (u.overrideExisting === "throw") throw new Error(Ne(39));
          typeof process < "u";
          continue;
        }
        i.endpointDefinitions[c] = f;
        for (const p of l) p.injectEndpoint(c, f);
      }
      return s;
    }
    return s.injectEndpoints({ endpoints: n.endpoints });
  };
}
function Ut(e, ...t) {
  return Object.assign(e, ...t);
}
var Pk = ({ api: e, queryThunk: t, internalState: n }) => {
  const r = `${e.reducerPath}/subscriptions`;
  let o = null,
    i = null;
  const { updateSubscriptionOptions: s, unsubscribeQueryResult: l } =
      e.internalActions,
    a = (p, v) => {
      var x, y, h;
      if (s.match(v)) {
        const { queryCacheKey: m, requestId: g, options: C } = v.payload;
        return (
          (x = p == null ? void 0 : p[m]) != null && x[g] && (p[m][g] = C), !0
        );
      }
      if (l.match(v)) {
        const { queryCacheKey: m, requestId: g } = v.payload;
        return p[m] && delete p[m][g], !0;
      }
      if (e.internalActions.removeQueryResult.match(v))
        return delete p[v.payload.queryCacheKey], !0;
      if (t.pending.match(v)) {
        const {
            meta: { arg: m, requestId: g },
          } = v,
          C = p[(y = m.queryCacheKey)] ?? (p[y] = {});
        return (
          (C[`${g}_running`] = {}),
          m.subscribe && (C[g] = m.subscriptionOptions ?? C[g] ?? {}),
          !0
        );
      }
      let w = !1;
      if (t.fulfilled.match(v) || t.rejected.match(v)) {
        const m = p[v.meta.arg.queryCacheKey] || {},
          g = `${v.meta.requestId}_running`;
        w || (w = !!m[g]), delete m[g];
      }
      if (t.rejected.match(v)) {
        const {
          meta: { condition: m, arg: g, requestId: C },
        } = v;
        if (m && g.subscribe) {
          const E = p[(h = g.queryCacheKey)] ?? (p[h] = {});
          (E[C] = g.subscriptionOptions ?? E[C] ?? {}), (w = !0);
        }
      }
      return w;
    },
    u = () => n.currentSubscriptions,
    f = {
      getSubscriptions: u,
      getSubscriptionCount: (p) => {
        const w = u()[p] ?? {};
        return gr(w);
      },
      isRequestSubscribed: (p, v) => {
        var x;
        const w = u();
        return !!((x = w == null ? void 0 : w[p]) != null && x[v]);
      },
    };
  return (p, v) => {
    if (
      (o || (o = JSON.parse(JSON.stringify(n.currentSubscriptions))),
      e.util.resetApiState.match(p))
    )
      return (o = n.currentSubscriptions = {}), (i = null), [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(p))
      return [!1, f];
    const w = a(n.currentSubscriptions, p);
    let x = !0;
    if (w) {
      i ||
        (i = setTimeout(() => {
          const m = JSON.parse(JSON.stringify(n.currentSubscriptions)),
            [, g] = _y(o, () => m);
          v.next(e.internalActions.subscriptionsUpdated(g)),
            (o = m),
            (i = null);
        }, 500));
      const y = typeof p.type == "string" && !!p.type.startsWith(r),
        h = t.rejected.match(p) && p.meta.condition && !!p.meta.arg.subscribe;
      x = !y && !h;
    }
    return [x, !1];
  };
};
function Nk(e) {
  for (const t in e) return !1;
  return !0;
}
var jk = 2147483647 / 1e3 - 1,
  Tk = ({
    reducerPath: e,
    api: t,
    queryThunk: n,
    context: r,
    internalState: o,
  }) => {
    const { removeQueryResult: i, unsubscribeQueryResult: s } =
        t.internalActions,
      l = Lt(s.match, n.fulfilled, n.rejected);
    function a(f) {
      const p = o.currentSubscriptions[f];
      return !!p && !Nk(p);
    }
    const u = {},
      d = (f, p, v) => {
        var w;
        if (l(f)) {
          const x = p.getState()[e],
            { queryCacheKey: y } = s.match(f) ? f.payload : f.meta.arg;
          c(
            y,
            (w = x.queries[y]) == null ? void 0 : w.endpointName,
            p,
            x.config,
          );
        }
        if (t.util.resetApiState.match(f))
          for (const [x, y] of Object.entries(u))
            y && clearTimeout(y), delete u[x];
        if (r.hasRehydrationInfo(f)) {
          const x = p.getState()[e],
            { queries: y } = r.extractRehydrationInfo(f);
          for (const [h, m] of Object.entries(y))
            c(h, m == null ? void 0 : m.endpointName, p, x.config);
        }
      };
    function c(f, p, v, w) {
      const x = r.endpointDefinitions[p],
        y = (x == null ? void 0 : x.keepUnusedDataFor) ?? w.keepUnusedDataFor;
      if (y === 1 / 0) return;
      const h = Math.max(0, Math.min(y, jk));
      if (!a(f)) {
        const m = u[f];
        m && clearTimeout(m),
          (u[f] = setTimeout(() => {
            a(f) || v.dispatch(i({ queryCacheKey: f })), delete u[f];
          }, h * 1e3));
      }
    }
    return d;
  },
  _p = new Error("Promise never resolved before cacheEntryRemoved."),
  $k = ({
    api: e,
    reducerPath: t,
    context: n,
    queryThunk: r,
    mutationThunk: o,
    internalState: i,
  }) => {
    const s = ju(r),
      l = ju(o),
      a = dn(r, o),
      u = {},
      d = (p, v, w) => {
        const x = c(p);
        if (r.pending.match(p)) {
          const y = w[t].queries[x],
            h = v.getState()[t].queries[x];
          !y &&
            h &&
            f(
              p.meta.arg.endpointName,
              p.meta.arg.originalArgs,
              x,
              v,
              p.meta.requestId,
            );
        } else if (o.pending.match(p))
          v.getState()[t].mutations[x] &&
            f(
              p.meta.arg.endpointName,
              p.meta.arg.originalArgs,
              x,
              v,
              p.meta.requestId,
            );
        else if (a(p)) {
          const y = u[x];
          y != null &&
            y.valueResolved &&
            (y.valueResolved({ data: p.payload, meta: p.meta.baseQueryMeta }),
            delete y.valueResolved);
        } else if (
          e.internalActions.removeQueryResult.match(p) ||
          e.internalActions.removeMutationResult.match(p)
        ) {
          const y = u[x];
          y && (delete u[x], y.cacheEntryRemoved());
        } else if (e.util.resetApiState.match(p))
          for (const [y, h] of Object.entries(u))
            delete u[y], h.cacheEntryRemoved();
      };
    function c(p) {
      return s(p)
        ? p.meta.arg.queryCacheKey
        : l(p)
          ? (p.meta.arg.fixedCacheKey ?? p.meta.requestId)
          : e.internalActions.removeQueryResult.match(p)
            ? p.payload.queryCacheKey
            : e.internalActions.removeMutationResult.match(p)
              ? Bo(p.payload)
              : "";
    }
    function f(p, v, w, x, y) {
      const h = n.endpointDefinitions[p],
        m = h == null ? void 0 : h.onCacheEntryAdded;
      if (!m) return;
      const g = {},
        C = new Promise((j) => {
          g.cacheEntryRemoved = j;
        }),
        E = Promise.race([
          new Promise((j) => {
            g.valueResolved = j;
          }),
          C.then(() => {
            throw _p;
          }),
        ]);
      E.catch(() => {}), (u[w] = g);
      const _ = e.endpoints[p].select(h.type === "query" ? v : w),
        k = x.dispatch((j, M, O) => O),
        R = {
          ...x,
          getCacheEntry: () => _(x.getState()),
          requestId: y,
          extra: k,
          updateCachedData:
            h.type === "query"
              ? (j) => x.dispatch(e.util.updateQueryData(p, v, j))
              : void 0,
          cacheDataLoaded: E,
          cacheEntryRemoved: C,
        },
        P = m(v, R);
      Promise.resolve(P).catch((j) => {
        if (j !== _p) throw j;
      });
    }
    return d;
  },
  Mk =
    ({ api: e, context: { apiUid: t }, reducerPath: n }) =>
    (r, o) => {
      e.util.resetApiState.match(r) &&
        o.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < "u";
    },
  Ak = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: n },
    mutationThunk: r,
    queryThunk: o,
    api: i,
    assertTagType: s,
    refetchQuery: l,
    internalState: a,
  }) => {
    const { removeQueryResult: u } = i.internalActions,
      d = Lt(dn(r), El(r)),
      c = Lt(dn(r, o), Nr(r, o));
    let f = [];
    const p = (x, y) => {
      d(x)
        ? w(Oy(x, "invalidatesTags", n, s), y)
        : c(x)
          ? w([], y)
          : i.util.invalidateTags.match(x) &&
            w(yf(x.payload, void 0, void 0, void 0, void 0, s), y);
    };
    function v(x) {
      var y, h;
      for (const m in x.queries)
        if (((y = x.queries[m]) == null ? void 0 : y.status) === "pending")
          return !0;
      for (const m in x.mutations)
        if (((h = x.mutations[m]) == null ? void 0 : h.status) === "pending")
          return !0;
      return !1;
    }
    function w(x, y) {
      const h = y.getState(),
        m = h[e];
      if ((f.push(...x), m.config.invalidationBehavior === "delayed" && v(m)))
        return;
      const g = f;
      if (((f = []), g.length === 0)) return;
      const C = i.util.selectInvalidatedBy(h, g);
      t.batch(() => {
        const E = Array.from(C.values());
        for (const { queryCacheKey: _ } of E) {
          const k = m.queries[_],
            R = a.currentSubscriptions[_] ?? {};
          k &&
            (gr(R) === 0
              ? y.dispatch(u({ queryCacheKey: _ }))
              : k.status !== "uninitialized" && y.dispatch(l(k, _)));
        }
      });
    }
    return p;
  },
  zk = ({
    reducerPath: e,
    queryThunk: t,
    api: n,
    refetchQuery: r,
    internalState: o,
  }) => {
    const i = {},
      s = (f, p) => {
        (n.internalActions.updateSubscriptionOptions.match(f) ||
          n.internalActions.unsubscribeQueryResult.match(f)) &&
          a(f.payload, p),
          (t.pending.match(f) || (t.rejected.match(f) && f.meta.condition)) &&
            a(f.meta.arg, p),
          (t.fulfilled.match(f) ||
            (t.rejected.match(f) && !f.meta.condition)) &&
            l(f.meta.arg, p),
          n.util.resetApiState.match(f) && d();
      };
    function l({ queryCacheKey: f }, p) {
      const v = p.getState()[e],
        w = v.queries[f],
        x = o.currentSubscriptions[f];
      if (!w || w.status === "uninitialized") return;
      const { lowestPollingInterval: y, skipPollingIfUnfocused: h } = c(x);
      if (!Number.isFinite(y)) return;
      const m = i[f];
      m != null && m.timeout && (clearTimeout(m.timeout), (m.timeout = void 0));
      const g = Date.now() + y;
      i[f] = {
        nextPollTimestamp: g,
        pollingInterval: y,
        timeout: setTimeout(() => {
          (v.config.focused || !h) && p.dispatch(r(w, f)),
            l({ queryCacheKey: f }, p);
        }, y),
      };
    }
    function a({ queryCacheKey: f }, p) {
      const w = p.getState()[e].queries[f],
        x = o.currentSubscriptions[f];
      if (!w || w.status === "uninitialized") return;
      const { lowestPollingInterval: y } = c(x);
      if (!Number.isFinite(y)) {
        u(f);
        return;
      }
      const h = i[f],
        m = Date.now() + y;
      (!h || m < h.nextPollTimestamp) && l({ queryCacheKey: f }, p);
    }
    function u(f) {
      const p = i[f];
      p != null && p.timeout && clearTimeout(p.timeout), delete i[f];
    }
    function d() {
      for (const f of Object.keys(i)) u(f);
    }
    function c(f = {}) {
      let p = !1,
        v = Number.POSITIVE_INFINITY;
      for (let w in f)
        f[w].pollingInterval &&
          ((v = Math.min(f[w].pollingInterval, v)),
          (p = f[w].skipPollingIfUnfocused || p));
      return { lowestPollingInterval: v, skipPollingIfUnfocused: p };
    }
    return s;
  },
  Ik = ({ api: e, context: t, queryThunk: n, mutationThunk: r }) => {
    const o = df(n, r),
      i = Nr(n, r),
      s = dn(n, r),
      l = {};
    return (u, d) => {
      var c, f;
      if (o(u)) {
        const {
            requestId: p,
            arg: { endpointName: v, originalArgs: w },
          } = u.meta,
          x = t.endpointDefinitions[v],
          y = x == null ? void 0 : x.onQueryStarted;
        if (y) {
          const h = {},
            m = new Promise((_, k) => {
              (h.resolve = _), (h.reject = k);
            });
          m.catch(() => {}), (l[p] = h);
          const g = e.endpoints[v].select(x.type === "query" ? w : p),
            C = d.dispatch((_, k, R) => R),
            E = {
              ...d,
              getCacheEntry: () => g(d.getState()),
              requestId: p,
              extra: C,
              updateCachedData:
                x.type === "query"
                  ? (_) => d.dispatch(e.util.updateQueryData(v, w, _))
                  : void 0,
              queryFulfilled: m,
            };
          y(w, E);
        }
      } else if (s(u)) {
        const { requestId: p, baseQueryMeta: v } = u.meta;
        (c = l[p]) == null || c.resolve({ data: u.payload, meta: v }),
          delete l[p];
      } else if (i(u)) {
        const { requestId: p, rejectedWithValue: v, baseQueryMeta: w } = u.meta;
        (f = l[p]) == null ||
          f.reject({
            error: u.payload ?? u.error,
            isUnhandledError: !v,
            meta: w,
          }),
          delete l[p];
      }
    };
  },
  Ok = ({
    reducerPath: e,
    context: t,
    api: n,
    refetchQuery: r,
    internalState: o,
  }) => {
    const { removeQueryResult: i } = n.internalActions,
      s = (a, u) => {
        _l.match(a) && l(u, "refetchOnFocus"),
          Rl.match(a) && l(u, "refetchOnReconnect");
      };
    function l(a, u) {
      const d = a.getState()[e],
        c = d.queries,
        f = o.currentSubscriptions;
      t.batch(() => {
        for (const p of Object.keys(f)) {
          const v = c[p],
            w = f[p];
          if (!w || !v) continue;
          (Object.values(w).some((y) => y[u] === !0) ||
            (Object.values(w).every((y) => y[u] === void 0) && d.config[u])) &&
            (gr(w) === 0
              ? a.dispatch(i({ queryCacheKey: p }))
              : v.status !== "uninitialized" && a.dispatch(r(v, p)));
        }
      });
    }
    return s;
  };
function Lk(e) {
  const { reducerPath: t, queryThunk: n, api: r, context: o } = e,
    { apiUid: i } = o,
    s = { invalidateTags: ft(`${t}/invalidateTags`) },
    l = (c) => c.type.startsWith(`${t}/`),
    a = [Mk, Tk, Ak, zk, $k, Ik];
  return {
    middleware: (c) => {
      let f = !1;
      const v = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: d,
          isThisApiSliceAction: l,
        },
        w = a.map((h) => h(v)),
        x = Pk(v),
        y = Ok(v);
      return (h) => (m) => {
        if (!Sy(m)) return h(m);
        f || ((f = !0), c.dispatch(r.internalActions.middlewareRegistered(i)));
        const g = { ...c, next: h },
          C = c.getState(),
          [E, _] = x(m, g, C);
        let k;
        if (
          (E ? (k = h(m)) : (k = _),
          c.getState()[t] && (y(m, g, C), l(m) || o.hasRehydrationInfo(m)))
        )
          for (const R of w) R(m, g, C);
        return k;
      };
    },
    actions: s,
  };
  function d(c, f, p = {}) {
    return n({
      type: "query",
      endpointName: c.endpointName,
      originalArgs: c.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: f,
      ...p,
    });
  }
}
var Rp = Symbol(),
  Dk = ({ createSelector: e = ff } = {}) => ({
    name: Rp,
    init(
      t,
      {
        baseQuery: n,
        tagTypes: r,
        reducerPath: o,
        serializeQueryArgs: i,
        keepUnusedDataFor: s,
        refetchOnMountOrArgChange: l,
        refetchOnFocus: a,
        refetchOnReconnect: u,
        invalidationBehavior: d,
      },
      c,
    ) {
      wb();
      const f = (T) => (typeof process < "u", T);
      Object.assign(t, {
        reducerPath: o,
        endpoints: {},
        internalActions: {
          onOnline: Rl,
          onOffline: vf,
          onFocus: _l,
          onFocusLost: hf,
        },
        util: {},
      });
      const {
          queryThunk: p,
          mutationThunk: v,
          patchQueryData: w,
          updateQueryData: x,
          upsertQueryData: y,
          prefetch: h,
          buildMatchThunkActions: m,
        } = kk({
          baseQuery: n,
          reducerPath: o,
          context: c,
          api: t,
          serializeQueryArgs: i,
          assertTagType: f,
        }),
        { reducer: g, actions: C } = Ek({
          context: c,
          queryThunk: p,
          mutationThunk: v,
          reducerPath: o,
          assertTagType: f,
          config: {
            refetchOnFocus: a,
            refetchOnReconnect: u,
            refetchOnMountOrArgChange: l,
            keepUnusedDataFor: s,
            reducerPath: o,
            invalidationBehavior: d,
          },
        });
      Ut(t.util, {
        patchQueryData: w,
        updateQueryData: x,
        upsertQueryData: y,
        prefetch: h,
        resetApiState: C.resetApiState,
      }),
        Ut(t.internalActions, C);
      const { middleware: E, actions: _ } = Lk({
        reducerPath: o,
        context: c,
        queryThunk: p,
        mutationThunk: v,
        api: t,
        assertTagType: f,
      });
      Ut(t.util, _), Ut(t, { reducer: g, middleware: E });
      const {
        buildQuerySelector: k,
        buildMutationSelector: R,
        selectInvalidatedBy: P,
        selectCachedArgsForQuery: j,
      } = _k({ serializeQueryArgs: i, reducerPath: o, createSelector: e });
      Ut(t.util, { selectInvalidatedBy: P, selectCachedArgsForQuery: j });
      const {
        buildInitiateQuery: M,
        buildInitiateMutation: O,
        getRunningMutationThunk: L,
        getRunningMutationsThunk: H,
        getRunningQueriesThunk: W,
        getRunningQueryThunk: J,
      } = bk({
        queryThunk: p,
        mutationThunk: v,
        api: t,
        serializeQueryArgs: i,
        context: c,
      });
      return (
        Ut(t.util, {
          getRunningMutationThunk: L,
          getRunningMutationsThunk: H,
          getRunningQueryThunk: J,
          getRunningQueriesThunk: W,
        }),
        {
          name: Rp,
          injectEndpoint(T, I) {
            var V;
            const A = t;
            (V = A.endpoints)[T] ?? (V[T] = {}),
              Iy(I)
                ? Ut(
                    A.endpoints[T],
                    { name: T, select: k(T, I), initiate: M(T, I) },
                    m(p, T),
                  )
                : Sk(I) &&
                  Ut(
                    A.endpoints[T],
                    { name: T, select: R(), initiate: O(T) },
                    m(v, T),
                  );
          },
        }
      );
    },
  });
const Fk = My({ creators: { asyncThunk: qb } }),
  Bk = (e = 1) => new Promise((t) => setTimeout(() => t({ data: e }), 500)),
  Vk = { value: 0, status: "idle" },
  gf = Fk({
    name: "counter",
    initialState: Vk,
    reducers: (e) => ({
      increment: e.reducer((t) => {
        t.value += 1;
      }),
      decrement: e.reducer((t) => {
        t.value -= 1;
      }),
      incrementByAmount: e.reducer((t, n) => {
        t.value += n.payload;
      }),
      incrementAsync: e.asyncThunk(async (t) => (await Bk(t)).data, {
        pending: (t) => {
          t.status = "loading";
        },
        fulfilled: (t, n) => {
          (t.status = "idle"), (t.value += n.payload);
        },
        rejected: (t) => {
          t.status = "failed";
        },
      }),
    }),
    selectors: { selectCount: (e) => e.value, selectStatus: (e) => e.status },
  });
gf.actions;
gf.selectors;
function Wk(e) {
  return e.type === "query";
}
function Hk(e) {
  return e.type === "mutation";
}
function Di(e, ...t) {
  return Object.assign(e, ...t);
}
function xa(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var Kn = WeakMap ? new WeakMap() : void 0,
  Uk = ({ endpointName: e, queryArgs: t }) => {
    let n = "";
    const r = Kn == null ? void 0 : Kn.get(t);
    if (typeof r == "string") n = r;
    else {
      const o = JSON.stringify(
        t,
        (i, s) => (
          (s = typeof s == "bigint" ? { $bigint: s.toString() } : s),
          (s = bt(s)
            ? Object.keys(s)
                .sort()
                .reduce((l, a) => ((l[a] = s[a]), l), {})
            : s),
          s
        ),
      );
      bt(t) && (Kn == null || Kn.set(t, o)), (n = o);
    }
    return `${e}(${n})`;
  },
  Ca = Symbol();
function Pp(e, t, n, r) {
  const o = b.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == "object"
            ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
            : e,
      }),
      [e, t, n, r],
    ),
    i = b.useRef(o);
  return (
    b.useEffect(() => {
      i.current.serialized !== o.serialized && (i.current = o);
    }, [o]),
    i.current.serialized === o.serialized ? i.current.queryArgs : e
  );
}
function ba(e) {
  const t = b.useRef(e);
  return (
    b.useEffect(() => {
      mo(t.current, e) || (t.current = e);
    }, [e]),
    mo(t.current, e) ? t.current : e
  );
}
var Qk = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  qk = Qk(),
  Yk = () => typeof navigator < "u" && navigator.product === "ReactNative",
  Kk = Yk(),
  Xk = () => (qk || Kk ? b.useLayoutEffect : b.useEffect),
  Gk = Xk(),
  Zk = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: Ay.pending,
        }
      : e;
function Jk({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: n, useSelector: r, useStore: o },
    unstable__sideEffectsInRender: i,
    createSelector: s,
  },
  serializeQueryArgs: l,
  context: a,
}) {
  const u = i ? (v) => v() : b.useEffect;
  return { buildQueryHooks: f, buildMutationHook: p, usePrefetch: c };
  function d(v, w, x) {
    if (w != null && w.endpointName && v.isUninitialized) {
      const { endpointName: E } = w,
        _ = a.endpointDefinitions[E];
      l({
        queryArgs: w.originalArgs,
        endpointDefinition: _,
        endpointName: E,
      }) === l({ queryArgs: x, endpointDefinition: _, endpointName: E }) &&
        (w = void 0);
    }
    let y = v.isSuccess ? v.data : w == null ? void 0 : w.data;
    y === void 0 && (y = v.data);
    const h = y !== void 0,
      m = v.isLoading,
      g = (!w || w.isLoading || w.isUninitialized) && !h && m,
      C = v.isSuccess || (m && h);
    return {
      ...v,
      data: y,
      currentData: v.data,
      isFetching: m,
      isLoading: g,
      isSuccess: C,
    };
  }
  function c(v, w) {
    const x = n(),
      y = ba(w);
    return b.useCallback(
      (h, m) => x(e.util.prefetch(v, h, { ...y, ...m })),
      [v, x, y],
    );
  }
  function f(v) {
    const w = (
        h,
        {
          refetchOnReconnect: m,
          refetchOnFocus: g,
          refetchOnMountOrArgChange: C,
          skip: E = !1,
          pollingInterval: _ = 0,
          skipPollingIfUnfocused: k = !1,
        } = {},
      ) => {
        const { initiate: R } = e.endpoints[v],
          P = n(),
          j = b.useRef(void 0);
        if (!j.current) {
          const A = P(e.internalActions.internal_getRTKQSubscriptions());
          j.current = A;
        }
        const M = Pp(E ? Rn : h, Uk, a.endpointDefinitions[v], v),
          O = ba({
            refetchOnReconnect: m,
            refetchOnFocus: g,
            pollingInterval: _,
            skipPollingIfUnfocused: k,
          }),
          L = b.useRef(!1),
          H = b.useRef(void 0);
        let { queryCacheKey: W, requestId: J } = H.current || {},
          T = !1;
        W && J && (T = j.current.isRequestSubscribed(W, J));
        const I = !T && L.current;
        return (
          u(() => {
            L.current = T;
          }),
          u(() => {
            I && (H.current = void 0);
          }, [I]),
          u(() => {
            var B;
            const A = H.current;
            if ((typeof process < "u", M === Rn)) {
              A == null || A.unsubscribe(), (H.current = void 0);
              return;
            }
            const V = (B = H.current) == null ? void 0 : B.subscriptionOptions;
            if (!A || A.arg !== M) {
              A == null || A.unsubscribe();
              const Y = P(R(M, { subscriptionOptions: O, forceRefetch: C }));
              H.current = Y;
            } else O !== V && A.updateSubscriptionOptions(O);
          }, [P, R, C, M, O, I]),
          b.useEffect(
            () => () => {
              var A;
              (A = H.current) == null || A.unsubscribe(), (H.current = void 0);
            },
            [],
          ),
          b.useMemo(
            () => ({
              refetch: () => {
                var A;
                if (!H.current) throw new Error(Ne(38));
                return (A = H.current) == null ? void 0 : A.refetch();
              },
            }),
            [],
          )
        );
      },
      x = ({
        refetchOnReconnect: h,
        refetchOnFocus: m,
        pollingInterval: g = 0,
        skipPollingIfUnfocused: C = !1,
      } = {}) => {
        const { initiate: E } = e.endpoints[v],
          _ = n(),
          [k, R] = b.useState(Ca),
          P = b.useRef(void 0),
          j = ba({
            refetchOnReconnect: h,
            refetchOnFocus: m,
            pollingInterval: g,
            skipPollingIfUnfocused: C,
          });
        u(() => {
          var H, W;
          const L = (H = P.current) == null ? void 0 : H.subscriptionOptions;
          j !== L &&
            ((W = P.current) == null || W.updateSubscriptionOptions(j));
        }, [j]);
        const M = b.useRef(j);
        u(() => {
          M.current = j;
        }, [j]);
        const O = b.useCallback(
          function (L, H = !1) {
            let W;
            return (
              t(() => {
                var J;
                (J = P.current) == null || J.unsubscribe(),
                  (P.current = W =
                    _(
                      E(L, {
                        subscriptionOptions: M.current,
                        forceRefetch: !H,
                      }),
                    )),
                  R(L);
              }),
              W
            );
          },
          [_, E],
        );
        return (
          b.useEffect(
            () => () => {
              var L;
              (L = P == null ? void 0 : P.current) == null || L.unsubscribe();
            },
            [],
          ),
          b.useEffect(() => {
            k !== Ca && !P.current && O(k, !0);
          }, [k, O]),
          b.useMemo(() => [O, k], [O, k])
        );
      },
      y = (h, { skip: m = !1, selectFromResult: g } = {}) => {
        const { select: C } = e.endpoints[v],
          E = Pp(m ? Rn : h, l, a.endpointDefinitions[v], v),
          _ = b.useRef(void 0),
          k = b.useMemo(
            () =>
              s([C(E), (O, L) => L, (O) => E], d, {
                memoizeOptions: { resultEqualityCheck: mo },
              }),
            [C, E],
          ),
          R = b.useMemo(
            () =>
              g
                ? s([k], g, {
                    devModeChecks: { identityFunctionCheck: "never" },
                  })
                : k,
            [k, g],
          ),
          P = r((O) => R(O, _.current), mo),
          j = o(),
          M = k(j.getState(), _.current);
        return (
          Gk(() => {
            _.current = M;
          }, [M]),
          P
        );
      };
    return {
      useQueryState: y,
      useQuerySubscription: w,
      useLazyQuerySubscription: x,
      useLazyQuery(h) {
        const [m, g] = x(h),
          C = y(g, { ...h, skip: g === Ca }),
          E = b.useMemo(() => ({ lastArg: g }), [g]);
        return b.useMemo(() => [m, C, E], [m, C, E]);
      },
      useQuery(h, m) {
        const g = w(h, m),
          C = y(h, {
            selectFromResult: h === Rn || (m != null && m.skip) ? void 0 : Zk,
            ...m,
          }),
          {
            data: E,
            status: _,
            isLoading: k,
            isSuccess: R,
            isError: P,
            error: j,
          } = C;
        return (
          b.useDebugValue({
            data: E,
            status: _,
            isLoading: k,
            isSuccess: R,
            isError: P,
            error: j,
          }),
          b.useMemo(() => ({ ...C, ...g }), [C, g])
        );
      },
    };
  }
  function p(v) {
    return ({ selectFromResult: w, fixedCacheKey: x } = {}) => {
      const { select: y, initiate: h } = e.endpoints[v],
        m = n(),
        [g, C] = b.useState();
      b.useEffect(
        () => () => {
          (g != null && g.arg.fixedCacheKey) || g == null || g.reset();
        },
        [g],
      );
      const E = b.useCallback(
          function (V) {
            const B = m(h(V, { fixedCacheKey: x }));
            return C(B), B;
          },
          [m, h, x],
        ),
        { requestId: _ } = g || {},
        k = b.useMemo(
          () =>
            y({
              fixedCacheKey: x,
              requestId: g == null ? void 0 : g.requestId,
            }),
          [x, g, y],
        ),
        R = b.useMemo(() => (w ? s([k], w) : k), [w, k]),
        P = r(R, mo),
        j = x == null ? (g == null ? void 0 : g.arg.originalArgs) : void 0,
        M = b.useCallback(() => {
          t(() => {
            g && C(void 0),
              x &&
                m(
                  e.internalActions.removeMutationResult({
                    requestId: _,
                    fixedCacheKey: x,
                  }),
                );
          });
        }, [m, x, g, _]),
        {
          endpointName: O,
          data: L,
          status: H,
          isLoading: W,
          isSuccess: J,
          isError: T,
          error: I,
        } = P;
      b.useDebugValue({
        endpointName: O,
        data: L,
        status: H,
        isLoading: W,
        isSuccess: J,
        isError: T,
        error: I,
      });
      const A = b.useMemo(
        () => ({ ...P, originalArgs: j, reset: M }),
        [P, j, M],
      );
      return b.useMemo(() => [E, A], [E, A]);
    };
  }
}
var e3 = Symbol(),
  t3 = ({
    batch: e = Y1,
    hooks: t = { useDispatch: q1, useSelector: L1, useStore: Xh },
    createSelector: n = ff,
    unstable__sideEffectsInRender: r = !1,
    ...o
  } = {}) => ({
    name: e3,
    init(i, { serializeQueryArgs: s }, l) {
      const a = i,
        {
          buildQueryHooks: u,
          buildMutationHook: d,
          usePrefetch: c,
        } = Jk({
          api: i,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: r,
            createSelector: n,
          },
          serializeQueryArgs: s,
          context: l,
        });
      return (
        Di(a, { usePrefetch: c }),
        Di(l, { batch: e }),
        {
          injectEndpoint(f, p) {
            if (Wk(p)) {
              const {
                useQuery: v,
                useLazyQuery: w,
                useLazyQuerySubscription: x,
                useQueryState: y,
                useQuerySubscription: h,
              } = u(f);
              Di(a.endpoints[f], {
                useQuery: v,
                useLazyQuery: w,
                useLazyQuerySubscription: x,
                useQueryState: y,
                useQuerySubscription: h,
              }),
                (i[`use${xa(f)}Query`] = v),
                (i[`useLazy${xa(f)}Query`] = w);
            } else if (Hk(p)) {
              const v = d(f);
              Di(a.endpoints[f], { useMutation: v }),
                (i[`use${xa(f)}Mutation`] = v);
            }
          },
        }
      );
    },
  }),
  n3 = Rk(Dk(), t3());
const Dy = n3({
    baseQuery: gk({ baseUrl: "https://dummyjson.com/quotes" }),
    reducerPath: "quotesApi",
    tagTypes: ["Quotes"],
    endpoints: (e) => ({
      getQuotes: e.query({
        query: (t = 10) => `?limit=${t}`,
        providesTags: (t, n, r) => [{ type: "Quotes", id: r }],
      }),
    }),
  }),
  r3 = ak(gf, Dy),
  o3 = (e) => {
    const t = Db({
      reducer: r3,
      middleware: (n) => n().concat(Dy.middleware),
      preloadedState: e,
    });
    return wk(t.dispatch), t;
  },
  i3 = o3(),
  s3 = "_active_14d97_59",
  l3 = "_btn_14d97_75",
  a3 = "_focus_14d97_89",
  u3 = "_header_14d97_97",
  c3 = "_footer_14d97_113",
  f3 = "_navbar_14d97_131",
  d3 = "_aside_14d97_139",
  Xn = {
    active: s3,
    btn: l3,
    focus: a3,
    header: u3,
    footer: c3,
    navbar: f3,
    aside: d3,
  },
  p3 = {
    colors: {
      "bright-pink": [
        "#F0BBDD",
        "#ED9BCF",
        "#EC7CC3",
        "#ED5DB8",
        "#F13EAF",
        "#F71FA7",
        "#FF00A1",
        "#E00890",
        "#C50E82",
        "#AD1374",
      ],
    },
    fontFamily: "Lato, Montserrat, Open Sans, sans-serif",
    fontFamilyMonospace: "Roboto Mono",
    primaryColor: "green",
    activeClassName: Xn.active,
    focusRing: "auto",
    fontSmoothing: !0,
    cursorType: "pointer",
    defaultRadius: 3,
    components: {
      AppShell: Re.extend({ defaultProps: { withBorder: !0 } }),
      AppShellHeader: il.extend({
        defaultProps: { className: Xn.header, px: "xs" },
      }),
      AppShellFooter: ol.extend({
        defaultProps: { className: Xn.footer, px: "xl" },
      }),
      AppShellNavbar: ll.extend({
        defaultProps: { className: Xn.navbar, p: "sm" },
      }),
      AppShellAside: rl.extend({
        defaultProps: { className: Xn.aside, p: "sm" },
      }),
      AppShellMain: sl.extend({ defaultProps: { m: "md" } }),
      Drawer: ht.extend({
        defaultProps: {
          padding: "sm",
          lockScroll: !1,
          position: "right",
          overlayProps: { backgroundOpacity: 0.6, blur: 4 },
        },
      }),
      CloseButton: nl.extend({ defaultProps: { size: "xl" } }),
      Burger: Jc.extend({ defaultProps: { lineSize: 4, color: "red", p: 0 } }),
      Badge: ni.extend({ defaultProps: { size: "xs", color: "blue" } }),
      Button: Zt.extend({
        defaultProps: {
          className: Xn.btn,
          miw: 50,
          p: 0,
          mih: 48,
          variant: "subtle",
        },
      }),
      Avatar: Pr.extend({ defaultProps: { size: "md", mx: "lg" } }),
      ActionIcon: tl.extend({ defaultProps: { color: "black", opacity: 1 } }),
      Divider: fn.extend({ defaultProps: { m: "md", opacity: 0.6 } }),
    },
  },
  Np = document.getElementById("root");
if (Np)
  Wh(Np).render(
    S.jsx($s.StrictMode, {
      children: S.jsx(U1, {
        store: i3,
        children: S.jsx(xv, {
          theme: p3,
          defaultColorScheme: "dark",
          children: S.jsx(rb, {}),
        }),
      }),
    }),
  );
else
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
