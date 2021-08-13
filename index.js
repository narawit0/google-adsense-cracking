(function(sttc) {

    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var n, aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = da(this),
        ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ia = {};

    function q(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = ha ? fa.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    ja("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ka(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ka(a) {
        a = {
            next: a
        };
        a[q(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function la(a) {
        return a.raw = a
    }

    function t(a) {
        var b = "undefined" != typeof p.Symbol && q(p.Symbol, "iterator") && a[q(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ma(a) {
        if (!(a instanceof Array)) {
            a = t(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        oa;
    if (ha && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var sa = oa;

    function u(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa) sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.zb = b.prototype
    }

    function ta(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ja("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = t(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var g = Object.seal({}),
                    h = Object.seal({}),
                    k = new a([
                        [g, 2],
                        [h, 3]
                    ]);
                if (2 != k.get(g) || 3 != k.get(h)) return !1;
                k.delete(g);
                k.set(h, 4);
                return !k.has(g) && 4 == k.get(h)
            } catch (l) {
                return !1
            }
        }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!ta(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!ta(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ta(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ta(g, e) && ta(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && ta(g, e) && ta(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    ja("Map", function(a) {
        function b() {
            var h = {};
            return h.K = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ka(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.K;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && ta(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var r = m[h];
                    if (k !== k && r.key !== r.key || k === r.key) return {
                        id: l,
                        list: m,
                        index: h,
                        A: r
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                A: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = t(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({
                        x: 4
                    }),
                    k = new a(t([
                        [h, "s"]
                    ]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size) return !1;
                var l = k.entries(),
                    m = l.next();
                if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                m = l.next();
                return m.done || 4 != m.value[0].x ||
                "t" != m.value[1] || !l.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.A ? l.A.value = k : (l.A = {
                next: this.h,
                K: this.h.K,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.A), this.h.K.next = l.A, this.h.K = l.A, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.A && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.A.K.next = h.A.next, h.A.next.K = h.A.K, h.A.head = null, this.size--,
                !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.K = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).A
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).A) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[q(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function ua(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    ja("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    ja("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    ja("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");

    function va(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[q(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    var wa = ha && "function" == typeof q(Object, "assign") ? q(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ta(d, e) && (a[e] = d[e])
        }
        return a
    };
    ja("Object.assign", function(a) {
        return a || wa
    }, "es6");
    ja("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.v = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = fa.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.O),
                reject: g(this.m)
            }
        };
        b.prototype.O = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.R(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.N(g) : this.u(g)
            }
        };
        b.prototype.N = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.da(h, g) : this.u(g)
        };
        b.prototype.m = function(g) {
            this.F(2, g)
        };
        b.prototype.u = function(g) {
            this.F(1, g)
        };
        b.prototype.F = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.P();
            this.L()
        };
        b.prototype.P = function() {
            var g = this;
            e(function() {
                if (g.M()) {
                    var h = fa.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.M =
            function() {
                if (this.v) return !1;
                var g = fa.CustomEvent,
                    h = fa.Event,
                    k = fa.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.L = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.R = function(g) {
            var h = this.l();
            g.fa(h.resolve, h.reject)
        };
        b.prototype.da = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(v, w) {
                return "function" == typeof v ? function(z) {
                    try {
                        l(v(z))
                    } catch (F) {
                        m(F)
                    }
                } : w
            }
            var l, m, r = new b(function(v, w) {
                l = v;
                m = w
            });
            this.fa(k(g, l), k(h, m));
            return r
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.fa = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.v = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = t(g), m = l.next(); !m.done; m = l.next()) d(m.value).fa(h, k)
            })
        };
        b.all = function(g) {
            var h = t(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function r(z) {
                    return function(F) {
                        v[z] = F;
                        w--;
                        0 == w && l(v)
                    }
                }
                var v = [],
                    w = 0;
                do v.push(void 0), w++, d(k.value).fa(r(v.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    ja("Set", function(a) {
        function b(c) {
            this.h = new p.Map;
            if (c) {
                c = t(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({
                        x: 4
                    }),
                    d = new a(t([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size) return !1;
                var e = d.entries(),
                    f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x ||
                f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return q(this.h, "values").call(this.h)
        };
        b.prototype.keys = q(b.prototype,
            "values");
        b.prototype[q(p.Symbol, "iterator")] = q(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    ja("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    ja("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    ja("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var x = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = x, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Aa(a) {
        return Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba] || (a[Ba] = ++Ca)
    }
    var Ba = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ca = 0;

    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ea(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Fa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Fa = Da : Fa = Ea;
        return Fa.apply(null, arguments)
    }

    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ha(a) {
        var b = ["__uspapi"],
            c = x;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function Ia(a) {
        return a
    };
    var Ja = (new Date).getTime();
    var Ka;

    function La(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ma(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Na(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Oa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Pa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            } return d
    }

    function Qa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ra(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Sa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ta(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ua(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        else {
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) {
                    a = c;
                    break a
                } a = -1
        }return 0 <= a
    };

    function Va(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Wa(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Xa(a, b) {
        return null !== a && b in a
    }

    function Ya(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var Za;

    function $a() {
        if (void 0 === Za) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                Za = a
            } else Za = a
        }
        return Za
    };

    function ab(a, b) {
        this.i = a === bb && b || "";
        this.h = cb
    }
    var cb = {},
        bb = {};

    function db(a, b) {
        this.h = b === eb ? a : ""
    }

    function fb(a, b) {
        a = gb.exec(hb(a).toString());
        var c = a[3] || "";
        return ib(a[1] + jb("?", a[2] || "", b) + jb("#", c, void 0))
    }
    db.prototype.toString = function() {
        return this.h + ""
    };

    function hb(a) {
        return a instanceof db && a.constructor === db ? a.h : "type_error:TrustedResourceUrl"
    }
    var gb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        eb = {};

    function ib(a) {
        var b = $a();
        a = b ? b.createScriptURL(a) : a;
        return new db(a, eb)
    }

    function jb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            } return b
    };

    function kb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function lb(a, b) {
        var c = 0;
        a = kb(String(a)).split(".");
        b = kb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = mb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || mb(0 == f[2].length, 0 == g[2].length) || mb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function mb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var nb;
    a: {
        var ob = x.navigator;
        if (ob) {
            var pb = ob.userAgent;
            if (pb) {
                nb = pb;
                break a
            }
        }
        nb = ""
    }

    function y(a) {
        return -1 != nb.indexOf(a)
    }

    function qb(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function rb() {
        function a(e) {
            e = Sa(e, d);
            return c[e] || ""
        }
        var b = nb;
        if (y("Trident") || y("MSIE")) return sb(b);
        b = qb(b);
        var c = {};
        b.forEach(function(e) {
            c[e[0]] = e[1]
        });
        var d = Ga(Xa, c);
        return y("Opera") ? a(["Version", "Opera"]) : y("Edge") ? a(["Edge"]) : y("Edg/") ? a(["Edg"]) : !y("Chrome") && !y("CriOS") || y("Edge") ? (b = b[2]) && b[1] || "" : a(["Chrome", "CriOS", "HeadlessChrome"])
    }

    function sb(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
            else b = c[1];
        return b
    };
    var tb = {};

    function ub(a, b, c) {
        this.h = c === tb ? a : ""
    }
    ub.prototype.toString = function() {
        return this.h.toString()
    };

    function vb(a) {
        return a instanceof ub && a.constructor === ub ? a.h : "type_error:SafeHtml"
    }

    function wb(a) {
        var b = $a();
        a = b ? b.createHTML(a) : a;
        return new ub(a, null, tb)
    }
    var xb = new ub(x.trustedTypes && x.trustedTypes.emptyHTML || "", 0, tb);
    var yb = Ma(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = vb(xb);
        return !b.parentElement
    });

    function zb(a, b) {
        if (yb())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = vb(b)
    };

    function Ab(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Bb(a) {
        Bb[" "](a);
        return a
    }
    Bb[" "] = function() {};


    var Cb = {},
        Db = null;

    function Eb(a) {
        var b;
        void 0 === b && (b = 0);
        if (!Db) {
            Db = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Cb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Db[h] && (Db[h] = g)
                }
            }
        }
        b = Cb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var k = a[f],
                l = a[f + 1];
            h = a[f + 2];
            g = b[k >> 2];
            k = b[(k & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = g + k + l + h
        }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var Fb = "function" === typeof Uint8Array;

    function Gb(a, b, c) {
        return "object" === typeof a ? Fb && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Hb(a, b, c) : b(a)
    }

    function Hb(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = Array(a.length), e = 0; e < a.length; e++) {
                var f = a[e];
                null != f && (d[e] = Gb(f, b, c))
            }
            Array.isArray(a) && a.gb && Ib(d);
            return d
        }
        d = {};
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = Gb(f, b, c)));
        return d
    }

    function Jb(a) {
        return Hb(a, function(b) {
            return "number" === typeof b ? isFinite(b) ? b : String(b) : b
        }, function(b) {
            return Eb(b)
        })
    }
    var Kb = {
        gb: {
            value: !0,
            configurable: !0
        }
    };

    function Ib(a) {
        Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Kb);
        return a
    }
    var Lb;
    var Mb;

    function Nb(a, b) {
        Mb = b;
        a = new a(b);
        Mb = null;
        return a
    };

    function A(a, b, c, d) {
        var e = Mb;
        Mb = null;
        a || (a = e);
        e = this.constructor.messageId;
        a || (a = e ? [e] : []);
        this.l = e ? 0 : -1;
        this.h = null;
        this.i = a;
        a: {
            e = this.i.length;a = e - 1;
            if (e && (e = this.i[a], !(null === e || "object" != typeof e || Array.isArray(e) || Fb && e instanceof Uint8Array))) {
                this.m = a - this.l;
                this.j = e;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.l), this.j = null) : this.m = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++) a = c[b], a < this.m ? (a += this.l, (e = this.i[a]) ? Ib(e) : this.i[a] = Ob) : (Pb(this), (e = this.j[a]) ? Ib(e) : this.j[a] = Ob);
        if (d && d.length)
            for (c = 0; c < d.length; c++) Qb(this, d[c])
    }
    var Ob = Object.freeze(Ib([]));

    function Pb(a) {
        var b = a.m + a.l;
        a.i[b] || (a.j = a.i[b] = {})
    }

    function B(a, b) {
        if (b < a.m) {
            b += a.l;
            var c = a.i[b];
            return c !== Ob ? c : a.i[b] = Ib([])
        }
        if (a.j) return c = a.j[b], c !== Ob ? c : a.j[b] = Ib([])
    }

    function Rb(a, b) {
        a = B(a, b);
        return null == a ? a : !!a
    }

    function D(a, b, c) {
        a = B(a, b);
        return null == a ? c : a
    }

    function Sb(a, b, c) {
        c = void 0 === c ? !1 : c;
        a = Rb(a, b);
        return null == a ? c : a
    }

    function Tb(a, b) {
        var c = void 0 === c ? 0 : c;
        a = B(a, b);
        a = null == a ? a : +a;
        return null == a ? c : a
    }

    function E(a, b, c) {
        b < a.m ? a.i[b + a.l] = c : (Pb(a), a.j[b] = c);
        return a
    }

    function Ub(a, b, c) {
        0 !== c ? E(a, b, c) : b < a.m ? a.i[b + a.l] = null : (Pb(a), delete a.j[b]);
        return a
    }

    function Vb(a, b, c, d) {
        (c = Qb(a, c)) && c !== b && void 0 !== d && (a.h && c in a.h && (a.h[c] = void 0), E(a, c, void 0));
        return E(a, b, d)
    }

    function Qb(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = B(a, f);
            null != g && (c = f, d = g, E(a, f, void 0))
        }
        return c ? (E(a, c, d), c) : 0
    }

    function G(a, b, c) {
        a.h || (a.h = {});
        if (!a.h[c]) {
            var d = B(a, c);
            d && (a.h[c] = new b(d))
        }
        return a.h[c]
    }

    function H(a, b, c) {
        a.h || (a.h = {});
        if (!a.h[c]) {
            for (var d = B(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.h[c] = e
        }
        return a.h[c]
    }

    function Wb(a, b, c) {
        a.h || (a.h = {});
        c = c || [];
        for (var d = Ib([]), e = 0; e < c.length; e++) d[e] = Xb(c[e]);
        a.h[b] = c;
        return E(a, b, d)
    }
    A.prototype.toJSON = function() {
        var a = Xb(this);
        return Lb ? a : Jb(a)
    };

    function Xb(a) {
        if (a.h)
            for (var b in a.h)
                if (Object.prototype.hasOwnProperty.call(a.h, b)) {
                    var c = a.h[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && Xb(c[d]);
                    else c && Xb(c)
                } return a.i
    }

    function Yb(a) {
        Lb = !0;
        try {
            return JSON.stringify(a.toJSON(), Zb)
        } finally {
            Lb = !1
        }
    }

    function Zb(a, b) {
        switch (typeof b) {
            case "number":
                return isFinite(b) ? b : String(b);
            case "object":
                if (Fb && null != b && b instanceof Uint8Array) return Eb(b)
        }
        return b
    }

    function I(a, b) {
        return D(a, b, "")
    };

    function $b(a) {
        A.call(this, a, -1, ac)
    }
    u($b, A);

    function bc(a) {
        A.call(this, a)
    }
    u(bc, A);
    var ac = [2, 3];

    function J(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function cc(a) {
        a = J(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Da: !0,
            pb: b,
            na: a.ablation_viewport_offset
        } : null
    }

    function dc(a) {
        a = J(a);
        a.eids || (a.eids = []);
        return a.eids
    }

    function ec(a, b) {
        a = J(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function fc(a, b) {
        a = J(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function gc(a) {
        J(K).allow_second_reactive_tag = a
    };

    function hc(a) {
        return null !== a && void 0 !== a
    }

    function ic(a) {
        return !!a
    }

    function kc(a, b) {
        if (!(b || ic)(a)) throw Error(String(a));
    };

    function lc(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function mc(a) {
        var b = K.document;
        if (b.currentScript) return lc(b.currentScript, a);
        b = t(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === lc(c.value, a)) return 0;
        return 1
    };
    var L = {},
        nc = (L.google_ad_channel = !0, L.google_ad_client = !0, L.google_ad_host = !0, L.google_ad_host_channel = !0, L.google_adtest = !0, L.google_tag_for_child_directed_treatment = !0, L.google_tag_for_under_age_of_consent = !0, L.google_tag_partner = !0, L.google_restrict_data_processing = !0, L.google_page_url = !0, L.google_debug_params = !0, L.google_adbreak_test = !0, L.google_ad_frequency_hint = !0, L.google_admob_interstitial_slot = !0, L.google_admob_rewarded_slot = !0, L.google_max_ad_content_rating = !0, L);
    var oc = {};

    function pc() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var qc;

    function rc() {
        var a, b;
        void 0 === qc && (qc = null !== (b = null === (a = pc()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
            createHTML: function(c) {
                return c
            },
            createScript: function(c) {
                return c
            },
            createScriptURL: function(c) {
                return c
            }
        })) && void 0 !== b ? b : null);
        return qc
    };

    function sc() {}

    function tc(a, b) {
        if (b !== oc) throw Error("Bad secret");
        this.h = a
    }
    u(tc, sc);
    tc.prototype.toString = function() {
        return this.h.toString()
    };

    function uc(a) {
        var b, c = null === (b = rc()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new tc(null !== c && void 0 !== c ? c : a, oc)
    }

    function vc(a) {
        var b;
        if (null === (b = pc()) || void 0 === b ? 0 : b.isScriptURL(a)) return a;
        if (a instanceof tc) return a.h;
        throw Error("wrong type");
    };

    function wc(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (!Array.isArray(a) || !Array.isArray(a.raw)) throw new TypeError("trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
        if (0 === c.length) return uc(a[0]);
        d = a[0].toLowerCase();
        if (/^data:/.test(d)) throw Error("Data URLs cannot have expressions in the template literal input.");
        if (/^https:\/\//.test(d) || /^\/\//.test(d)) {
            var e = d.indexOf("//") + 2;
            var f = d.indexOf("/",
                e);
            if (f <= e) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
            e = d.substring(e, f);
            if (!/^[0-9a-z.:-]+$/i.test(e)) throw Error("The origin contains unsupported characters.");
            if (!/^[^:]*(:[0-9]+)?$/i.test(e)) throw Error("Invalid port number.");
            if (!/(^|\.)[a-z][^.]*$/i.test(e)) throw Error("The top-level domain must start with a letter.");
            e = !0
        } else e = !1;
        if (e = !e) {
            if (/^\//.test(d))
                if ("/" === d || 1 < d.length && "/" !== d[1] && "\\" !== d[1]) e = !0;
                else throw Error("The path start in the url is invalid.");
            else e = !1;
            e = !e
        }
        if (e) {
            if (/^about:blank/.test(d)) {
                if ("about:blank" !== d && !/^about:blank#/.test(d)) throw Error("The about url is invalid.");
                d = !0
            } else d = !1;
            e = !d
        }
        if (e) throw Error("Trying to interpolate expressions in an unsupported url format.");
        d = [a[0]];
        for (e = 0; e < c.length; e++) d.push(encodeURIComponent(c[e])), d.push(a[e + 1]);
        return uc(d.join(""))
    };
    var xc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        yc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
        zc = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        Ac = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        Bc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
        Cc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
            "/show_ads_impl_with_ama", ".js"
        ]),
        Dc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
        Ec = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]),
        Fc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);
    var Gc = document,
        K = window;
    var Hc = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Ic(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function Jc(a) {
        return a instanceof sc ? vc(a) : hb(a)
    };

    function Kc(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Lc(a) {
        return !!(a.error && a.meta && a.id)
    };

    function Mc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Nc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Oc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Pc(a) {
        this.h = a || x.document || document
    }
    Pc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Qc() {
        return !Rc() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }

    function Rc() {
        return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    };
    var Sc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Tc = /#|$/;

    // parameter = Fd
    function Uc(a) {
        try {
            var b;

            // เช็คว่ามี a และ a.location.href ไม่เท่ากับ null
            if (b = !!a && null != a.location.href) a: {
                try {
                    Bb(a.foo);
                    b = !0;
                    break a
                } catch (c) {
                    console.log(c);
                }
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Vc(a, b) {
        var c = a.createElement("script");
        c.src = Jc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        (d = (b = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Wc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Xc(a, b) {
        if (!Yc() && !Zc()) {
            var c = Math.random();
            if (c < b) return c = $c(x), a[Math.floor(c * a.length)]
        }
        return null
    }

    function $c(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function ad(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function bd(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Zc = Ma(function() {
        return Ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], cd) || 1E-4 > Math.random()
    });

    function dd(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function ed(a, b, c) {
        a = Zc() ? null : Math.floor(1E3 * $c(a));
        var d;
        if (d = null != a && b) a: {
            var e = String(a);
            try {
                if (b) {
                    b.setItem(c, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? a : null
    }
    var Yc = Ma(function() {
        return cd("MSIE")
    });

    function cd(a) {
        return -1 != nb.indexOf(a)
    }
    var fd = /^([0-9.]+)px$/,
        gd = /^(-?[0-9.]{1,30})$/;

    function hd(a) {
        return gd.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function M(a) {
        return (a = fd.exec(a)) ? +a[1] : null
    }

    function id(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var jd = Ma(function() {
        return Qc() ? 2 : Rc() ? 1 : 0
    });

    function kd(a) {
        var b = {
            display: "none"
        };
        a.style.setProperty ? ad(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = ld(md(nd(a.style.cssText), od(b, function(c) {
            return c + " !important"
        })))
    }
    var md = q(Object, "assign") || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function od(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }

    function ld(a) {
        var b = [];
        ad(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    }

    function nd(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            Oa((a || "").split(/\s*;\s*/), function(d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    }
    var pd = [];

    function rd() {
        var a = pd;
        pd = [];
        a = t(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function sd(a, b) {
        b = void 0 === b ? window.document : b;
        0 != a.length && b.head && a.forEach(function(c) {
            if (c) {
                var d = b;
                d = void 0 === d ? window.document : d;
                if (c && d.head) {
                    var e = document.createElement("meta");
                    d.head.appendChild(e);
                    e.httpEquiv = "origin-trial";
                    e.content = c
                }
            }
        })
    }

    function td(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function ud(a) {
        "complete" === Gc.readyState || "interactive" === Gc.readyState ? (pd.push(a), 1 == pd.length && (p.Promise ? p.Promise.resolve().then(rd) : window.setImmediate ? setImmediate(rd) : setTimeout(rd, 0))) : Gc.addEventListener("DOMContentLoaded", a)
    };

    function vd(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function wd(a) {
        return (a = a || vd()) ? Uc(a.master) ? a.master : null : null
    };

    function xd(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        if (c) {
            var e = function(f) {
                c && c(f);
                Nc(d, "load", e);
                Nc(d, "error", e)
            };
            Mc(d, "load", e);
            Mc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function yd(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        ad(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        zd(c)
    }

    function zd(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : xd(b, a, null)
    };

    function Ad(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Bd(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Cd(a) {
        var b = void 0 === b ? 1 : b;
        a = wd(vd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function Dd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    // Check google_async_iframe_id
    var Ed = !!window.google_async_iframe_id;

    // Check if Ed is true Fd = window.parent if not window
    var Fd = Ed && window.parent || window;

    function Gd() {

        // Check if there is google_async_iframe_id &&
        if (Ed && !Uc(Fd)) {
            var a = "." + Gc.domain;
            try {
                for (; 2 < a.split(".").length && !Uc(Fd);) Gc.domain = a = a.substr(a.indexOf(".") + 1), Fd = window.parent
            } catch (b) {}
            Uc(Fd) || (Fd = window)
        }


        // return window
        return Fd
    }
    var Hd = /(^| )adsbygoogle($| )/;

    function Id() {
        var a = void 0 === a ? K : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Jd(a) {
        a = a.top;
        return Uc(a) ? a : null
    };

    function Kd(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Ld(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Ld(a) {
        var b = "";
        Ad(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function Md(a) {
        return "string" === typeof a
    }

    function Nd(a) {
        return void 0 === a
    };

    function Od(a) {
        A.call(this, a, -1, Pd, Qd)
    }
    u(Od, A);
    var Pd = [2, 8],
        Qd = [
            [3, 4, 5],
            [6, 7]
        ];
    var Rd;
    Rd = {
        ub: 0,
        Va: 3,
        Wa: 4,
        Xa: 5
    };
    var Sd = Rd.Va,
        Td = Rd.Wa,
        Ud = Rd.Xa;

    function Vd(a) {
        return null != a ? !a : a
    }

    function Wd(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Xd(a, b) {
        var c = H(a, Od, 2);
        if (!c.length) return Yd(a, b);
        a = D(a, 1, 0);
        if (1 === a) return Vd(Xd(c[0], b));
        c = Qa(c, function(d) {
            return function() {
                return Xd(d, b)
            }
        });
        switch (a) {
            case 2:
                return Wd(c, !1);
            case 3:
                return Wd(c, !0)
        }
    }

    function Yd(a, b) {
        var c = Qb(a, Qd[0]);
        a: {
            switch (c) {
                case Sd:
                    var d = D(a, 3, 0);
                    break a;
                case Td:
                    d = D(a, 4, 0);
                    break a;
                case Ud:
                    d = D(a, 5, 0);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, ma(B(a, 8)))
            } catch (f) {
                return
            }
            b = D(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = I(a, 7);
            else a: {
                switch (c) {
                    case Td:
                        a = Tb(a, 6);
                        break a;
                    case Ud:
                        a = I(a, 7);
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === lb(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e >
                            a;
                    case 12:
                        return Md(a) && Md(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === lb(String(e), a);
                    case 11:
                        return null != e && 1 === lb(String(e), a)
                }
            }
        }
    }

    function Zd(a, b) {
        return !a || !(!b || !Xd(a, b))
    };

    function N(a) {
        A.call(this, a, -1, $d)
    }
    u(N, A);
    N.prototype.getId = function() {
        return B(this, 3)
    };
    var $d = [4];

    function ae(a) {
        A.call(this, a)
    }
    u(ae, A);

    function be(a) {
        A.call(this, a)
    }
    u(be, A);

    function ce(a) {
        A.call(this, a)
    }
    u(ce, A);

    function de(a) {
        A.call(this, a, -1, ee)
    }
    u(de, A);
    var ee = [6, 7, 9, 10, 11];

    function fe(a) {
        A.call(this, a)
    }
    u(fe, A);

    function ge(a) {
        A.call(this, a)
    }
    u(ge, A);

    function he(a) {
        A.call(this, a, -1, ie)
    }
    u(he, A);
    var ie = [4];

    function je(a) {
        A.call(this, a)
    }
    u(je, A);

    function ke(a) {
        A.call(this, a, -1, le, me)
    }
    u(ke, A);
    var le = [5],
        me = [
            [1, 2, 3, 6, 7]
        ];

    function ne(a) {
        A.call(this, a, -1, oe)
    }
    u(ne, A);
    ne.prototype.getId = function() {
        return D(this, 1, 0)
    };
    ne.prototype.aa = function() {
        return D(this, 7, 0)
    };
    var oe = [2];

    function pe(a) {
        A.call(this, a, -1, qe)
    }
    u(pe, A);
    pe.prototype.aa = function() {
        return D(this, 5, 0)
    };
    var qe = [2];

    function re(a) {
        A.call(this, a, -1, se)
    }
    u(re, A);

    function te(a) {
        A.call(this, a, -1, ue)
    }
    u(te, A);
    te.prototype.aa = function() {
        return D(this, 1, 0)
    };

    function ve(a) {
        A.call(this, a)
    }
    u(ve, A);
    var se = [1, 4, 2, 3],
        ue = [2];

    function we(a) {
        A.call(this, a, -1, void 0, xe)
    }
    u(we, A);
    var xe = [
        [13, 14]
    ];
    var ye = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function ze(a, b) {
        this.h = a;
        this.i = b
    }

    function Ae(a, b, c) {
        this.url = a;
        this.Y = b;
        this.Ja = !!c;
        this.depth = null
    };

    function Be() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function Ce(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function De(a, b, c, d, e) {
        var f = [];
        ad(a, function(g, h) {
            (g = Ee(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Ee(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Ee(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(De(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Fe(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Ge(a) - c.length;
        if (0 > d) return "";
        a.h.sort(function(m, r) {
            return m - r
        });
        c = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = De(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.j;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Ge(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function He(a, b, c, d, e, f) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof Be) var g = c;
            else g = new Be, ad(c, function(k, l) {
                var m = g,
                    r = m.l++;
                k = Ce(l, k);
                m.h.push(r);
                m.i[r] = k
            });
            var h = Fe(g, a.i, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? xd(x, h, void 0 === f ? null : f) : xd(x, h, null))
        } catch (k) {}
    };
    var Ie = null;

    function Je() {
        if (null === Ie) {
            Ie = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ie = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Ie
    };

    function Ke() {
        var a = x.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Le() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Me(a, b) {
        var c = Le() || Ke();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Ne = x.performance,
        Oe = !!(Ne && Ne.mark && Ne.measure && Ne.clearMarks),
        Pe = Ma(function() {
            var a;
            if (a = Oe) a = Je(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Qe() {
        var a = Re;
        this.events = [];
        this.i = a || x;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.h = Pe() || (null != b ? b : 1 > Math.random())
    }

    function Se(a) {
        a && Ne && Pe() && (Ne.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Ne.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Qe.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new Me(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Ne && Pe() && Ne.mark(b);
        return a
    };
    Qe.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (Le() || Ke()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Ne && Pe() && Ne.mark(b);
            !this.h || 2048 < this.events.length || this.events.push(a)
        }
    };

    // ค่าของ ตัวแปร P
    function Te() {
        var a = Ue;
        this.m = Ve;
        this.i = null;
        this.l = this.D;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = Te.prototype;
    n.Ra = function(a) {
        this.l = a
        console.log(this.l);
    };
    n.qa = function(a) {
        this.i = a
    };
    n.Sa = function(a) {
        this.j = a
    };
    n.la = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                Se(d), b = this.l(a, new Kc(h, {
                    message: We(h)
                }), void 0, c)
            } catch (k) {
                this.D(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Ma = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.la(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    n.D = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Be;
            f.h.push(1);
            f.i[1] = Ce("context", a);
            Lc(b) || (b = new Kc(b, {
                message: We(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = Ce("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (jc) {}
            if (d) try {
                d(h)
            } catch (jc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if (Uc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new Ae(l || "", k));
                try {
                    d = k.parent
                } catch (jc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = x;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var r = b[m];
                    r.url || (r.url = k.location.ancestorOrigins[m - 1] || "", r.Ja = !0)
                }
            var v = new Ae(x.location.href, x, !1);
            k = null;
            var w = b.length - 1;
            for (r = w; 0 <= r; --r) {
                var z = b[r];
                !k && ye.test(z.url) && (k = z);
                if (z.url && !z.Ja) {
                    v = z;
                    break
                }
            }
            z = null;
            var F = b.length && b[w].url;
            0 != v.depth && F && (z = b[w]);
            var C = new ze(v, z);
            if (C.i) {
                var ea = C.i.url || "";
                f.h.push(4);
                f.i[4] = Ce("top", ea)
            }
            var za = {
                url: C.h.url || ""
            };
            if (C.h.url) {
                var qd = C.h.url.match(Sc),
                    Gf = qd[1],
                    Hf = qd[3],
                    If = qd[4];
                v = "";
                Gf && (v += Gf + ":");
                Hf && (v += "//", v += Hf, If && (v += ":" + If));
                var Jf = v
            } else Jf = "";
            za = [za, {
                url: Jf
            }];
            f.h.push(5);
            f.i[5] = za;
            He(this.m, e, f, this.j, c)
        } catch (jc) {
            try {
                He(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: We(jc),
                    url: C && C.h.url
                }, this.j, c)
            } catch (Xn) {}
        }
        return !0
    };

    function We(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };

    function O(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, O) : this.stack = Error().stack || ""
    }
    u(O, Error);

    function Xe() {
        this.h = null;
        this.j = !1;
        this.l = Math.random();
        this.i = this.D
    }
    n = Xe.prototype;
    n.qa = function(a) {
        this.h = a
    };
    n.Sa = function(a) {
        this.j = a
    };
    n.Ra = function(a) {
        this.i = a
    };
    n.D = function(a, b, c, d, e) {
        if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        Lc(b) || (b = new Kc(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (Vc(x.document, ib(x.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), x.error_rep_loaded = !0);
        return !1
    };
    n.la = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.i(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    n.Ma = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.la(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };

    // ตรงนี้มีค่าแค่ Re
    var Ve, P, Re = Gd(),
        Ue = new Qe;

    function Ye(a) {
        null != a && (Re.google_measure_js_timing = a);
        Re.google_measure_js_timing || (a = Ue, a.h = !1, a.events != a.i.google_js_reporting_queue && (Pe() && Oa(a.events, Se), a.events.length = 0))
    }
    Ve = new function() {
        var a = void 0 === a ? K : a;
        this.i = "http:" === a.location.protocol ? "http:" : "https:";
        this.h = Math.random()
    };
    "number" !== typeof Re.google_srt && (Re.google_srt = Math.random());
    var Ze = Ve,
        $e = Re.google_srt;
    0 <= $e && 1 >= $e && (Ze.h = $e);

    // P เพิ่งมามีค่าตรงนี้
    P = new Te;

    // Set ตัวแปร a ของ Function qa = function () {};
    P.qa(function() {});

    // Set ตัวแปร a ของ Function Sa = true
    P.Sa(!0);

    "complete" == Re.document.readyState ? Ye() : Ue.h && Mc(Re, "load", function() {
        Ye()
    });

    function af(a, b, c) {
        return P.la(a, b, c)
    }

    function bf(a, b) {
        return P.Ma(a, b, void 0, void 0)
    }

    function cf(a, b, c) {
        He(Ve, a, b, !0, c, void 0)
    }

    function df(a, b, c, d) {
        var e;
        Lc(b) ? e = b.msg || We(b.error) : e = We(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Kc ? b.error : b, c.pbr || (c.pbr = !0, P.D(a, b, .1, d, "puberror")), !1) : P.D(a, b, c, d)
    };

    function ef(a) {
        A.call(this, a)
    }
    u(ef, A);

    function ff(a) {
        var b = new ef;
        return E(b, 5, a)
    };

    function gf(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function hf(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Mc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };
    var jf = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function kf() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new lf
    }

    function mf(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new lf) : a.google_reactive_ads_global_state = new kf;
        return a.google_reactive_ads_global_state
    }

    function lf() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function nf(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Q(a) {
        return nf(a).clientWidth
    };

    function R() {
        this.l = this.l;
        this.m = this.m
    }
    R.prototype.l = !1;
    R.prototype.h = function() {
        if (this.m)
            for (; this.m.length;) this.m.shift()()
    };

    function of (a, b) {
        this.h = a;
        this.i = b
    }

    function pf(a) {
        return null != a.h ? a.h.value : null
    }

    function qf(a, b) {
        null != a.h && b(a.h.value);
        return a
    } of .prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof of ? a : rf(a)) : this
    };

    function sf(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function rf(a) {
        return new of ({
            value: a
        }, null)
    }

    function tf(a) {
        return new of (null, a)
    }

    function uf(a) {
        try {
            return rf(a())
        } catch (b) {
            return tf(b)
        }
    };
    var vf = null;

    function wf() {
        this.S = {}
    }

    function xf() {
        if (yf) return yf;
        var a = wd() || Gd(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? yf = b : a.google_persistent_state_async = yf = new wf
    }

    function zf(a) {
        return Af[a] || "google_ps_" + a
    }

    function Bf(a, b, c) {
        b = zf(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var yf = null,
        Cf = {},
        Af = (Cf[8] = "google_prev_ad_formats_by_region", Cf[9] = "google_prev_ad_slotnames_by_region", Cf);

    function Df(a) {
        A.call(this, a)
    }
    u(Df, A);

    function Ef(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? uf(function() {
            return Nb(Df, c ? JSON.parse(c) : null)
        }) : rf(null)
    };

    function Ff(a) {
        this.h = a || {
            cookie: ""
        }
    }
    Ff.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.xb;
            d = c.yb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.vb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    Ff.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = kb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };

    function S(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function Kf(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    var Lf = new S(1084),
        Mf = new S(1082),
        Nf = new Kf(62, .001),
        Of = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Pf = new Kf(1077),
        Qf = new S(316),
        Rf = new S(313),
        Sf = new S(369),
        Tf = new S(1026),
        Uf = new S(1053),
        Vf = new Kf(1046),
        Wf = new S(1049, !0),
        Xf = new S(218),
        Yf = new S(216),
        Zf = new S(217),
        $f = new S(1002),
        ag = new S(233),
        bg = new S(232),
        cg = new S(227),
        dg = new S(208),
        eg = new S(282),
        fg = new Kf(1079, 5),
        gg = new S(251),
        hg = new S(1059),
        ig = new S(1936, !0),
        jg = new S(203),
        kg = new S(241),
        lg = new S(84),
        mg = new Kf(1929, 50),
        ng = new Kf(1905),
        og = new S(240),
        pg = new S(1928),
        qg = new S(1941),
        rg = new S(370946349),
        sg = new S(379841917),
        tg = new Kf(1935),
        ug = new S(385922407);

    function T(a) {
        if (a.pa && a.hasOwnProperty("pa")) return a.pa;
        var b = new a;
        return a.pa = b
    };

    function vg() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function() {}
    }

    function U(a) {
        return T(vg).h(a.h, a.defaultValue)
    }

    function wg(a) {
        return T(vg).i(a.h, a.defaultValue)
    }

    function xg() {
        return T(vg).j(Of.h, Of.defaultValue)
    };

    function yg(a) {
        R.call(this);
        this.j = a;
        this.i = null;
        this.v = {};
        this.u = null
    }
    u(yg, R);
    yg.prototype.h = function() {
        this.v = {};
        this.u && (Nc(this.j, "message", this.u), delete this.u);
        delete this.v;
        delete this.j;
        delete this.i;
        R.prototype.h.call(this)
    };

    function zg(a) {
        var b;
        (b = "function" === typeof a.j.__tcfapi) || (a.i ? a = a.i : (a.i = id(a.j, "__tcfapiLocator"), a = a.i), b = null != a);
        return b
    };

    function Ag(a) {
        var b = a.Y,
            c = a.Ta,
            d = a.$a;
        a = Bg({
            Y: b,
            ja: a.ja,
            ha: void 0 === a.ha ? !1 : a.ha,
            ia: void 0 === a.ia ? !1 : a.ia
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Cg(b, c).then(function(e) {
            return e.map(Dg)
        }).then(function(e) {
            return e.map(function(f) {
                return Eg(b, f)
            })
        }).then(d)
    }

    function Bg(a) {
        var b = a.Y,
            c = a.ja,
            d = void 0 === a.ha ? !1 : a.ha;
        if (!(a = !(void 0 === a.ia ? 0 : a.ia) && zg(new yg(b)))) {
            if (d = !d) {
                if (c) {
                    c = Ef(b);
                    if (null == c.h) P.D(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != B(c, 1)) b: switch (c = B(c, 1), c) {
                        case 1:
                            c = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                    } else c = !1;
                    c = !c
                }
                d = c
            }
            a = d
        }
        if (!a) return Eg(b, ff(!0));
        c = xf();
        return (c = Bf(c, 24, void 0)) ? Eg(b, Dg(c)) : tf(Error("tcunav"))
    }

    function Cg(a, b) {
        return p.Promise.race([Fg(), Gg(a, b)])
    }

    function Fg() {
        return (new p.Promise(function(a) {
            var b = xf();
            a = {
                resolve: a
            };
            var c = Bf(b, 25, []);
            c.push(a);
            b.S[zf(25)] = c
        })).then(Hg)
    }

    function Gg(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, tf(Error("tcto")))
        })
    }

    function Hg(a) {
        return a ? rf(a) : tf(Error("tcnull"))
    }

    function Dg(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0), void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0), a.internalErrorState = void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus &&
        ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && ("DE" === a.publisherCC ||
                    U(ig) && "CH" === a.publisherCC) ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return ff(a)
    }

    function Eg(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Rb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? rf(b) : tf(Error("unav"))
    };
    var Ig = void 0;

    function Jg() {
        kc(Ig, hc);
        return Ig
    }

    function Kg(a) {
        kc(Ig, Nd);
        Ig = a
    };

    function Lg(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? null : d;
        return Mg(a, c, function(e) {
            return Ra(H(e, bc, 2), function(f) {
                return B(f, 1) === b
            })
        }) ? !0 : 1 === b ? Ng(c, d) : !1
    }

    function Ng(a, b) {
        return b ? null != B(b, 13) ? Sb(G(b, fe, 13), 1) : null != B(b, 14) && "" !== a && I(b, 7) === a ? Sb(G(G(b, ge, 14), fe, 2), 1) : !1 : !1
    }

    function Og(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = Jd(a) || a;
        return Pg(d, b) ? !0 : Mg(a, c, function(e) {
            return Ra(B(e, 3), function(f) {
                return f === b
            })
        })
    }

    function Qg(a) {
        return Mg(x, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function Pg(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ua(a.split(","), b.toString())
    }

    function Mg(a, b, c) {
        a = Jd(a) || a;
        var d = Rg(a);
        b && (b = gf(String(b)));
        return Wa(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function Rg(a) {
        a = Sg(a);
        var b = {};
        Ad(a, function(c, d) {
            try {
                var e = new $b(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function Sg(a) {
        return U(Mf) ? (a = Bg({
            Y: a,
            ja: Jg()
        }), null != a.h ? (Tg("ok"), a = Ug(a.h.value)) : (Tg(a.i.message), a = {}), a) : Ug(a.localStorage)
    }

    function Ug(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Va(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function Tg(a) {
        U(Lf) && cf("abg_adsensesettings_lserr", {
            s: a,
            g: U(Mf),
            c: Jg(),
            r: .01
        }, .01)
    };

    function Vg(a, b) {
        var c = {};
        this[Sd] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(d) {
            return Lg(K, parseInt(d, 10))
        }, c[24] = function(d) {
            return Og(K, parseInt(d, 10))
        }, c);
        c = {};
        this[Td] = (c[7] = function(d) {
            try {
                var e = window.localStorage
            } catch (h) {
                e = null
            }
            var f = d;
            d = window;
            f = void 0 === f ? 0 : f;
            f = 0 != f ? "google_experiment_mod" + f : "google_experiment_mod";
            var g = dd(e, f);
            e = null === g ? ed(d, e, f) : g;
            return null != e ? e : void 0
        }, c);
        c = {};
        this[Ud] = (c[6] = function() {
            var d = Bb("");
            d = /^\d+$/.test(d) ? d :
                "";
            var e = I(b, 15);
            cf("flddiff", {
                old: d,
                "new": e,
                eq: d === e,
                bowvr: I(b, 2),
                jsvr: "m202108030101"
            }, d === e ? .001 : .01);
            return d
        }, c)
    };

    function Wg() {
        var a = {};
        this.h = (a[Sd] = {}, a[Td] = {}, a[Ud] = {}, a)
    };
    var Xg = /^true$/.test("false");

    function Yg(a, b) {
        switch (b) {
            case 1:
                return D(a, 1, 0);
            case 2:
                return D(a, 2, 0);
            case 3:
                return D(a, 3, 0);
            case 6:
                return D(a, 6, 0);
            default:
                return null
        }
    }

    function Zg(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Sb(a, 1);
            case 7:
                return I(a, 3);
            case 2:
                return Tb(a, 2);
            case 3:
                return I(a, 3);
            case 6:
                return B(a, 4);
            default:
                return null
        }
    }
    var $g = Ma(function() {
        if (!Xg) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function ah(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        var e = $g();
        if (null != e[b]) return e[b];
        b = bh(d)[b];
        if (!b) return c;
        b = new ke(b);
        b = ch(b);
        a = Zg(b, a);
        return null != a ? a : c
    }

    function ch(a) {
        var b = T(Wg).h;
        if (b) {
            var c = Ta(H(a, je, 5), function(d) {
                return Zd(G(d, Od, 1), b)
            });
            if (c) return G(c, he, 2)
        }
        return G(a, he, 4)
    }

    function dh() {
        this.h = {};
        this.i = []
    }

    function eh(a, b, c) {
        return !!ah(1, a, void 0 === b ? !1 : b, c)
    }

    function fh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(ah(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function gh(a, b, c) {
        return ah(3, a, void 0 === b ? "" : b, c)
    }

    function hh(a, b, c) {
        b = void 0 === b ? [] : b;
        return ah(6, a, b, c)
    }

    function bh(a) {
        return T(dh).h[a] || (T(dh).h[a] = {})
    }

    function ih(a, b) {
        var c = bh(b);
        ad(a, function(d, e) {
            return c[e] = d
        })
    }

    function jh(a, b) {
        var c = bh(b);
        Oa(a, function(d) {
            var e = Qb(d, me[0]);
            (e = Yg(d, e)) && (c[e] = d.toJSON())
        })
    }

    function kh(a, b) {
        var c = bh(b);
        Oa(a, function(d) {
            var e = new ke(d),
                f = Qb(e, me[0]);
            (e = Yg(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function lh() {
        return Qa(q(Object, "keys").call(Object, T(dh).h), function(a) {
            return Number(a)
        })
    }

    function mh(a) {
        Ua(T(dh).i, a) || ih(bh(4), a)
    };

    function V(a) {
        this.methodName = a
    }
    var nh = new V(1),
        oh = new V(15),
        ph = new V(2),
        qh = new V(3),
        rh = new V(4),
        sh = new V(5),
        th = new V(6),
        uh = new V(7),
        vh = new V(8),
        wh = new V(9),
        xh = new V(10),
        yh = new V(11),
        zh = new V(12),
        Ah = new V(13),
        Bh = new V(14);

    function W(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function Ch(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function Dh(a) {
        W(sh, eh, a);
        W(th, fh, a);
        W(uh, gh, a);
        W(vh, hh, a);
        W(Ah, kh, a);
        W(oh, mh, a)
    }

    function Eh(a) {
        W(rh, function(b) {
            T(Wg).h = b
        }, a);
        W(wh, function(b, c) {
            var d = T(Wg);
            d.h[Sd][b] || (d.h[Sd][b] = c)
        }, a);
        W(xh, function(b, c) {
            var d = T(Wg);
            d.h[Td][b] || (d.h[Td][b] = c)
        }, a);
        W(yh, function(b, c) {
            var d = T(Wg);
            d.h[Ud][b] || (d.h[Ud][b] = c)
        }, a);
        W(Bh, function(b) {
            for (var c = T(Wg), d = t([Sd, Td, Ud]), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = void 0;
                var g = c.h[f];
                f = b[f];
                for (e in f) g[e] = f[e]
            }
        }, a)
    }

    function Fh(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Gh(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Hh() {
        this.i = function() {};
        this.h = function() {
            return []
        }
    }

    function Ih(a, b, c) {
        a.i = function(d) {
            Ch(ph, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return Ch(qh, b, function() {
                return []
            })(c)
        }
    };

    function Jh(a, b) {
        try {
            a: {
                var c = a.split(".");a = x;
                for (var d = 0, e; d < c.length; d++)
                    if (e = a, a = a[c[d]], null == a) {
                        var f = null;
                        break a
                    } f = "function" === typeof a ? e[c[d - 1]]() : a
            }
            if (typeof f === b) return f
        }
        catch (g) {}
    }

    function Kh() {
        var a = {};
        this[Sd] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Ua(T(Hh).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = Jh(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a);
        a = {};
        this[Td] = (a[3] = function() {
            return jd()
        }, a[6] = function(b) {
            b = Jh(b, "number");
            return void 0 !==
            b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = x;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Sc)[3] || null) ? decodeURI(c) : c) ? bd(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[Ud] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = Jh(b, "string");
            return void 0 !== b ? b : void 0
        }, a)
    };

    function Lh(a) {
        A.call(this, a, -1, Mh)
    }
    u(Lh, A);

    function Nh(a, b) {
        a.h || (a.h = {});
        var c = b ? Xb(b) : b;
        a.h[1] = b;
        return E(a, 1, c)
    }

    function Oh(a, b) {
        return Wb(a, 2, b)
    }

    function Ph(a, b) {
        return E(a, 4, Ib(b || []))
    }

    function Qh(a, b) {
        return Wb(a, 5, b)
    }

    function Rh(a) {
        A.call(this, a)
    }
    u(Rh, A);
    Rh.prototype.aa = function() {
        return D(this, 1, 0)
    };

    function Sh(a, b) {
        return Ub(a, 1, b)
    }

    function Th(a, b) {
        return Ub(a, 2, b)
    }

    function Uh(a) {
        A.call(this, a, -1, void 0, Vh)
    }
    u(Uh, A);
    var Mh = [2, 4, 5],
        Vh = [
            [1, 2]
        ];

    function Wh(a) {
        return function() {
            return $c(window) <= a
        }
    }

    function Xh(a, b) {
        if (window.fetch) fetch(a, {
            method: "POST",
            body: b,
            keepalive: 64536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    }

    function Yh(a, b, c) {
        c = void 0 === c ? Xh : c;
        this.h = a;
        this.j = void 0 === b ? "https://pagead2.googlesyndication.com/pagead/ping" : b;
        this.i = c
    };

    function Zh() {
        Yh.apply(this, arguments)
    }
    u(Zh, Yh);

    function $h(a, b) {
        try {
            a.h() && a.i(a.j + "?e=1", '[[[{"4":' + Yb(b()) + "}]]]")
        } catch (c) {}
    };

    function ai(a) {
        A.call(this, a, -1, void 0, bi)
    }
    u(ai, A);

    function ci(a) {
        var b = new ai,
            c = bi[0];
        b.h || (b.h = {});
        var d = a ? Xb(a) : a;
        b.h[4] = a;
        return Vb(b, 4, c, d)
    }
    var bi = [
        [4, 5]
    ];

    function di(a) {
        var b = void 0 === b ? new Zh(Ma(Wh(0 < a ? 1 / a : 0))) : b;
        this.i = a;
        this.j = b;
        this.h = []
    }

    function ei(a, b, c, d, e) {
        b = Th(Sh(new Rh, b), c);
        d = Oh(Nh(Qh(Ph(new Lh, d), e), b), a.h);
        var f = ci(d);
        $h(a.j, function() {
            var g = Ub(f, 1, Date.now());
            var h = td(window);
            g = Ub(g, 2, h);
            g = Ub(g, 3, 1 / a.i);
            return Ub(g, 6, a.i)
        });
        a.h.push(b);
        100 < a.h.length && a.h.shift()
    };
    var fi = [12, 13, 20];

    function gi() {}
    gi.prototype.init = function(a, b, c, d) {
        var e = this;
        c = void 0 === c ? {} : c;
        var f = void 0 === c.Ia ? !1 : c.Ia,
            g = void 0 === c.hb ? {} : c.hb;
        c = void 0 === c.kb ? [] : c.kb;
        d = void 0 === d ? null : d;
        this.j = a;
        this.u = {};
        this.v = f;
        this.l = g;
        a = {};
        this.h = (a[b] = [], a[4] = [], a);
        this.i = {};
        (b = Je()) && Oa(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.i[h] = !0)
        });
        Oa(c, function(h) {
            e.i[h] = !0
        });
        this.m = d;
        return this
    };

    function hi(a, b, c) {
        if (a.u[b]) return .001 >= Math.random() && yd({
            b: c,
            dp: b
        }, "tagging_dupdiv"), !0;
        a.u[b] = !0;
        return !1
    }

    function ii(a, b, c) {
        var d = [],
            e = ji(a.j, b);
        if (9 !== b && hi(a, b, c) || !e.length) {
            var f;
            null == (f = a.m) || ei(f, b, c, d, []);
            return d
        }
        var g = Ua(fi, b),
            h = [];
        Oa(e, function(l) {
            var m = new Uh;
            if (l = ki(a, l, c, m)) {
                0 !== Qb(m, Vh[0]) && h.push(m);
                m = l.getId();
                d.push(m);
                li(a, m, g ? 4 : c);
                var r = H(l, ke, 2);
                r && (g ? Oa(lh(), function(v) {
                    return jh(r, v)
                }) : jh(r, c))
            }
        });
        var k;
        null == (k = a.m) || ei(k, b, c, d, h);
        return d
    }

    function li(a, b, c) {
        a.h[c] || (a.h[c] = []);
        a = a.h[c];
        Ua(a, b) ? yd({
            eids: JSON.stringify(a),
            dup: b
        }, "gpt_dupeid") : a.push(b)
    }

    function mi(a, b) {
        a.j.push.apply(a.j, ma(Pa(Qa(b, function(c) {
            return new te(c)
        }), function(c) {
            return !Ua(fi, c.aa())
        })))
    }

    function ki(a, b, c, d) {
        var e = T(Wg).h;
        if (!Zd(G(b, Od, 3), e)) return null;
        var f = H(b, ne, 2),
            g = f.length * D(b, 1, 0),
            h = D(b, 6, 0);
        if (h) {
            Vb(d, 1, Vh[0], h);
            g = e[Td];
            switch (c) {
                case 2:
                    var k = g[8];
                    break;
                case 1:
                    k = g[7]
            }
            c = void 0;
            if (k) try {
                c = k(h), Ub(d, 3, c)
            } catch (l) {}
            return (b = ni(b, c)) ? oi(a, [b], 1) : null
        }
        if (h = D(b, 10, 0)) {
            Vb(d, 2, Vh[0], h);
            g = null;
            switch (c) {
                case 1:
                    g = e[Td][9];
                    break;
                case 2:
                    g = e[Td][10];
                    break;
                default:
                    return null
            }
            c = g ? g(String(h)) : void 0;
            if (void 0 === c && 1 === D(b, 11, 0)) return null;
            void 0 !== c && Ub(d, 3, c);
            return (b = ni(b, c)) ? oi(a, [b],
                1) : null
        }
        d = e ? Pa(f, function(l) {
            return Zd(G(l, Od, 3), e)
        }) : f;
        return d.length ? (b = D(b, 4, 0)) ? pi(a, b, g, d) : oi(a, d, g / 1E3) : null
    }

    function pi(a, b, c, d) {
        var e = null != a.l[b] ? a.l[b] : 1E3;
        if (0 >= e) return null;
        d = oi(a, d, c / e);
        a.l[b] = d ? 0 : e - c;
        return d
    }

    function oi(a, b, c) {
        var d = a.i,
            e = Sa(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.v ? null : Xc(b, c)
    }

    function qi(a, b) {
        W(nh, function(c) {
            a.i[c] = !0
        }, b);
        W(ph, function(c, d) {
            return ii(a, c, d)
        }, b);
        W(qh, function(c) {
            return (a.h[c] || []).concat(a.h[4])
        }, b);
        W(zh, function(c) {
            return mi(a, c)
        }, b)
    }

    function ji(a, b) {
        return (a = Sa(a, function(c) {
            return c.aa() == b
        })) && H(a, pe, 2) || []
    }

    function ni(a, b) {
        var c = H(a, ne, 2),
            d = c.length,
            e = D(a, 1, 0);
        a = D(a, 8, 0);
        b = void 0 !== b ? b : Math.floor(1E3 * $c(window));
        var f = (b - a) % d;
        if (b < a || b - a - f >= d * e - 1) return null;
        c = c[f];
        d = T(Wg).h;
        return !c || d && !Zd(G(c, Od, 3), d) ? null : c
    };

    function ri() {
        this.h = function() {}
    }

    function si(a) {
        T(ri).h(a)
    };
    var ti, ui;

    function vi(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? Gh() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new di(null != (ui = null == (ti = G(a, ve, 5)) ? void 0 : D(ti, 2, 0)) ? ui : 0) : f;
        d.hasOwnProperty("init-done") ? (Ch(zh, d)(Qa(H(a, te, 2), function(g) {
            return g.toJSON()
        })), Ch(Ah, d)(Qa(H(a, ke, 1), function(g) {
            return g.toJSON()
        }), e), b && Ch(Bh, d)(b), wi(d, e)) : (qi(T(gi).init(H(a, te, 2), e, c, f), d), Dh(d), Eh(d), Fh(d), wi(d, e), jh(H(a, ke, 1), e), Xg = Xg || !(!c || !c.eb), si(T(Kh)), b && si(b))
    }

    function wi(a, b) {
        a = void 0 === a ? Gh() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        Ih(T(Hh), c, d);
        xi(a, b);
        T(ri).h = Ch(Bh, a);
        T(vg).l()
    }

    function xi(a, b) {
        var c = T(vg);
        c.h = function(d, e) {
            return Ch(sh, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return Ch(th, a, function() {
                return 0
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Ch(uh, a, function() {
                return ""
            })(d, e, b)
        };
        c.m = function(d, e) {
            return Ch(vh, a, function() {
                return []
            })(d, e, b)
        };
        c.l = function() {
            Ch(oh, a)(b)
        }
    };

    function yi(a, b, c) {
        var d = J(a);
        if (d.plle) wi(Gh(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == dd(d, "goog_pem_mod") && ed(a, d, "goog_pem_mod");
            d = G(b, re, 12);
            e = Sb(b, 9);
            vi(d, new Vg(c, b), {
                Ia: e && !!a.google_disable_experiments,
                eb: e
            }, Gh(a));
            T(Hh).i(12);
            T(Hh).i(10);
            c = dc(a);
            (b = I(b, 10)) && c.push(b);
            a = Jd(a) || a;
            Kd(a.location, "google_mc_lab") && c.push("44738307")
        }
    };

    function zi(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function Ai(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function Bi(a) {
        A.call(this, a, -1, void 0, Ci)
    }
    u(Bi, A);

    function Di(a) {
        A.call(this, a)
    }
    u(Di, A);

    function Ei(a) {
        A.call(this, a)
    }
    u(Ei, A);

    function Fi(a) {
        A.call(this, a)
    }
    u(Fi, A);
    var Ci = [
        [1, 2, 3]
    ];

    function Gi(a) {
        A.call(this, a, -1, Hi)
    }
    u(Gi, A);

    function Ii(a) {
        A.call(this, a, -1, void 0, Ji)
    }
    u(Ii, A);

    function Ki(a) {
        A.call(this, a)
    }
    u(Ki, A);
    var Hi = [1],
        Ji = [
            [1, 2]
        ];

    function Li(a) {
        A.call(this, a, -1, Mi)
    }
    u(Li, A);

    function Ni(a) {
        A.call(this, a)
    }
    u(Ni, A);

    function Oi(a) {
        A.call(this, a, -1, Pi)
    }
    u(Oi, A);

    function Qi(a) {
        A.call(this, a)
    }
    u(Qi, A);

    function Ri(a) {
        A.call(this, a)
    }
    u(Ri, A);

    function Si(a) {
        A.call(this, a)
    }
    u(Si, A);
    var Mi = [1, 2, 5, 7],
        Pi = [2, 5, 6, 11];

    function Ti(a, b) {
        a = Ai(zi(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = bd(a),
            d = Ui(a);
        return q(b, "find").call(b, function(e) {
            var f = null != B(e, 7) ? B(G(e, Qi, 7), 1) : B(e, 1);
            e = null != B(e, 7) ? B(G(e, Qi, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function Ui(a) {
        for (var b = {};;) {
            b[bd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function Vi(a) {
        this.h = a.slice(0)
    }
    Vi.prototype.apply = function(a) {
        return new Vi(a(this.h.slice(0)))
    };
    Vi.prototype.get = function(a) {
        return this.h[a]
    };
    Vi.prototype.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new Vi(b)
    };

    function Wi(a) {
        var b = void 0 === a.Ea ? void 0 : a.Ea,
            c = void 0 === a.cb ? void 0 : a.cb,
            d = void 0 === a.Oa ? void 0 : a.Oa;
        this.h = void 0 === a.Za ? void 0 : a.Za;
        this.l = new Vi(b || []);
        this.j = d;
        this.i = c
    };

    function Xi() {
        this.h = {};
        this.i = {}
    }
    Xi.prototype.set = function(a, b) {
        var c = Yi(a);
        this.h[c] = b;
        this.i[c] = a
    };
    Xi.prototype.get = function(a, b) {
        a = Yi(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };

    function Yi(a) {
        return a instanceof Object ? String(Aa(a)) : a + ""
    };

    function Zi(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            U: "a",
            $: $i(c)
        });
        null != a.h && b.push({
            U: "as",
            $: a.h
        });
        null != a.i && b.push({
            U: "i",
            $: String(a.i)
        });
        null != a.j && b.push({
            U: "rp",
            $: String(a.j)
        });
        b.sort(function(d, e) {
            return d.U.localeCompare(e.U)
        });
        b.unshift({
            U: "t",
            $: "aa"
        });
        return b
    }

    function $i(a) {
        a = a.h.slice(0).map(aj);
        a = JSON.stringify(a);
        return bd(a)
    }

    function aj(a) {
        var b = {};
        null != B(a, 7) && (b.q = B(a, 7));
        null != B(a, 2) && (b.o = B(a, 2));
        null != B(a, 5) && (b.p = B(a, 5));
        return b
    };

    function bj(a, b) {
        this.Ga = a;
        this.Na = b
    }

    function cj(a) {
        var b = [].slice.call(arguments).filter(La(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ga || []);
            d = q(Object, "assign").call(Object, d, e.Na)
        });
        return new bj(c, d)
    }

    function dj(a) {
        switch (a) {
            case 1:
                return new bj(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new bj(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new bj(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new bj(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function ej(a) {
        if (null == a) a = null;
        else {
            var b = Zi(a);
            a = [];
            b = t(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.$);
                a.push(c.U + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new bj(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var fj = {},
        gj = new bj(["google-auto-placed"], (fj.google_reactive_ad_format = 40, fj.google_tag_origin = "qs", fj));
    var hj = {},
        ij = (hj.google_ad_channel = !0, hj.google_ad_host = !0, hj);

    function jj(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        cf("ama", b, .01)
    }

    function kj(a) {
        var b = {};
        ad(ij, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function lj(a) {
        if (U(Qf)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Nb(Li, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function mj(a) {
        a = G(a, Ni, 3);
        return !a || B(a, 1) <= Date.now() ? !1 : !0
    }

    function nj(a) {
        return (a = lj(a)) ? mj(a) ? a : null : null
    }

    function oj(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            jj(a, {
                lserr: 1
            })
        }
    };
    var pj = null;

    function qj(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == pj) {
                pj = !1;
                try {
                    var d = Jd(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (pj = !0);
                    x.localStorage.getItem("google_logging") && (pj = !0)
                } catch (e) {}
            }
            a = pj
        }
        a && (d = x.document, a = new ab(bb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = ib(a instanceof ab && a.constructor === ab && a.h === cb ? a.i : "type_error:Const"), Vc(d, a))
    };

    function rj(a) {
        this.h = new Xi;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    rj.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    rj.prototype.contains = function(a) {
        return void 0 !== this.h.h[Yi(a)]
    };

    function sj(a) {
        A.call(this, a)
    }
    u(sj, A);
    var tj = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function uj(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = M(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function vj(a, b) {
        return !((gd.test(b.google_ad_width) || fd.test(a.style.width)) && (gd.test(b.google_ad_height) || fd.test(a.style.height)))
    }

    function wj(a, b) {
        return (a = xj(a, b)) ? a.y : 0
    }

    function xj(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function yj(a, b) {
        do {
            var c = Wc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function zj(a) {
        var b = 0,
            c;
        for (c in tj) - 1 != a.indexOf(c) && (b |= tj[c]);
        return b
    }

    function Aj(a, b, c, d, e) {
        if (a.top != a) return Jd(a) ? 3 : 16;
        if (!(488 > Q(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Q(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = Q(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Wc(b, a)) && (e = M(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    } c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Bj(a, b, c, d) {
        var e = Aj(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || yj(c, b) ? Cj(b) ? a = !0 : (b = Q(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Dj(a, b, c) {
        a = a.style;
        "rtl" == b ? U(gg) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : U(gg) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
    }

    function Ej(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Wc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Fj(a, b) {
        for (var c = 0; 100 > c && b.parentElement; ++c) {
            for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                var f = d[e];
                if (f != b && Ej(a, f)) return
            }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto"
        }
    }

    function Gj(a, b, c) {
        a = xj(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Hj(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Wc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Dj(b, c, "0px");
            b.style.width = Q(a) + "px";
            if (0 !== Gj(a, b, c)) {
                Dj(b, c, "0px");
                var d = Gj(a, b, c);
                Dj(b, c, -1 * d + "px");
                a = Gj(a, b, c);
                0 !== a && a !== d && Dj(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    }

    function Cj(a) {
        return U(ag) || a.location && "#bffwroe2etoq" == a.location.hash
    };

    function X(a, b) {
        this.l = a;
        this.j = b
    }
    X.prototype.minWidth = function() {
        return this.l
    };
    X.prototype.height = function() {
        return this.j
    };
    X.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    X.prototype.i = function() {};

    function Ij(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Wc(a, b)) && e[c] && d(e[c]) || null
    }

    function Jj(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Kj(a, b, c, d) {
        var e = a && Lj(c, b),
            f = Mj(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Nj(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Lj(a, b) {
        return wj(a, b) < nf(b).clientHeight - 100
    }

    function Oj(a, b) {
        var c = Ij(b, a, "height", M);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Ij(b, a, "height", M);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && M(b.style.height)) && (c = Math.min(c, d)), (d = Ij(b, a, "maxHeight", M)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Mj(a, b) {
        var c = 0 == Dd(a);
        return b && c ? Math.max(250, 2 * nf(a).clientHeight / 3) : 250
    };

    function Pj(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Qj(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                } b = !0
        }
        return b
    };

    function Rj(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Qj(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Sj(a, b, c) {
        function d(f) {
            f = Tj(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Tj(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Uj(a.previousSibling, e), ga: function(f) {
                        return Uj(f.previousSibling, e)
                    }, ka: 0
                };
            case 2:
                return {
                    init: Uj(a.lastChild, e), ga: function(f) {
                        return Uj(f.previousSibling, e)
                    }, ka: 0
                };
            case 3:
                return {
                    init: Uj(a.nextSibling, d), ga: function(f) {
                        return Uj(f.nextSibling, d)
                    }, ka: 3
                };
            case 1:
                return {
                    init: Uj(a.firstChild, d), ga: function(f) {
                        return Uj(f.nextSibling, d)
                    }, ka: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Tj(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Uj(a, b) {
        return a && b(a) ? a : null
    };

    function Vj(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Ab(d.wb);
            a[e] = d.value
        }
    };

    function Wj(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function Xj(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (g) {}
        if (!c.length) return [];
        b = c;
        c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d
        } else b = [];
        b = Yj(a, b);
        "number" === typeof a.i && (c = a.i, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.j) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = Zj(b[d]);
                var f = a.j;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    Wj.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function Yj(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function Zj(a) {
        var b = [];
        Pj(a.getElementsByTagName("p"), function(c) {
            100 <= ak(c) && b.push(c)
        });
        return b
    }

    function ak(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Pj(a.childNodes, function(c) {
            b += ak(c)
        });
        return b
    }

    function bk(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function ck(a) {
        if (!a) return null;
        var b = B(a, 7);
        if (B(a, 1) || a.getId() || 0 < B(a, 4).length) {
            var c = a.getId(),
                d = B(a, 1),
                e = B(a, 4);
            b = B(a, 2);
            var f = B(a, 5);
            a = dk(B(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + bk(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + bk(e[c]);
            b = (e = g) ? new Wj(e, b, f, a) : null
        } else b = b ? new Wj(b, B(a, 2), B(a, 5), dk(B(a, 6))) : null;
        return b
    }
    var ek = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function dk(a) {
        return null == a ? a : ek[a]
    }
    var fk = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function gk(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function hk(a) {
        a = gk(a);
        return a.optimization = a.optimization || {}
    };

    function ik(a) {
        switch (B(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = G(a, N, 1), null == b ? b = null : (a = B(a, 2), b = null == a ? null : new Wi({
                    Ea: [b],
                    Oa: a
                }));
                return null != b ? rf(b) : tf(Error("Missing dimension when creating placement id"));
            case 3:
                return tf(Error("Missing dimension when creating placement id"));
            default:
                return tf(Error("Invalid type: " + B(a, 8)))
        }
    };

    function jk() {
        this.h = new Xi
    }
    jk.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new rj, this.h.set(a, c));
        c.add(b)
    };

    function kk(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function lk(a, b) {
        this.i = a;
        this.h = b
    }

    function mk(a, b) {
        var c = new jk,
            d = new rj;
        b.forEach(function(e) {
            if (G(e, Di, 1)) {
                e = G(e, Di, 1);
                if (G(e, ae, 1) && G(G(e, ae, 1), N, 1) && G(e, ae, 2) && G(G(e, ae, 2), N, 1)) {
                    var f = nk(a, G(G(e, ae, 1), N, 1)),
                        g = nk(a, G(G(e, ae, 2), N, 1));
                    if (f && g)
                        for (f = t(kk({
                            anchor: f,
                            position: B(G(e, ae, 1), 2)
                        }, {
                            anchor: g,
                            position: B(G(e, ae, 2), 2)
                        })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Aa(g.anchor), g.position)
                }
                G(e, ae, 3) && G(G(e, ae, 3), N, 1) && (f = nk(a, G(G(e, ae, 3), N, 1))) && c.set(Aa(f), B(G(e, ae, 3), 2))
            } else G(e, Ei, 2) ? ok(a, G(e, Ei, 2), c) : G(e, Fi, 3) && pk(a, G(e,
                Fi, 3), d)
        });
        return new lk(c, d)
    }

    function ok(a, b, c) {
        G(b, N, 1) && (a = qk(a, G(b, N, 1))) && a.forEach(function(d) {
            d = Aa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function pk(a, b, c) {
        G(b, N, 1) && (a = qk(a, G(b, N, 1))) && a.forEach(function(d) {
            c.add(Aa(d))
        })
    }

    function nk(a, b) {
        return (a = qk(a, b)) && 0 < a.length ? a[0] : null
    }

    function qk(a, b) {
        return (b = ck(b)) ? Xj(b, a) : null
    };

    function rk(a, b) {
        if (!a) return !1;
        a = Wc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function sk(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function tk(a) {
        return !!a.nextSibling || !!a.parentNode && tk(a.parentNode)
    };

    function uk(a, b) {
        return a && null != B(a, 4) && b[B(G(a, ce, 4), 2)] ? !1 : !0
    }

    function vk(a) {
        var b = {};
        a && B(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function wk(a, b, c, d, e) {
        this.h = a;
        this.F = b;
        this.j = c;
        this.m = e || null;
        this.u = (this.v = d) ? mk(a.document, H(d, Bi, 5)) : mk(a.document, []);
        this.i = 0;
        this.l = !1
    }

    function xk(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = H(a.j, de, 1);
        a.i = 0;
        var d = vk(a.v);
        try {
            var e = a.h.localStorage.getItem("google_ama_settings");
            var f = e ? Nb(sj, e ? JSON.parse(e) : null) : null
        } catch (m) {
            f = null
        }
        if (null !== f && Sb(f, 2, !1)) return gk(a.h).eatf = !0, qj(7, [!0, 0, !1]), !0;
        f = new rj([2]);
        for (e = 0; e < c.length; e++) {
            var g = a;
            var h = c[e],
                k = e,
                l = b;
            if (G(h, ce, 4) && f.contains(B(G(h, ce, 4), 1)) && 1 === B(h, 8) && uk(h, d)) {
                g.i++;
                if (h = yk(g, h, l, d)) l = gk(g.h), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++,
                    l.placed.push({
                        index: k,
                        element: h.ea
                    }), qj(7, [!1, g.i, !0]);
                g = h
            } else g = null;
            if (g) return !0
        }
        qj(7, [!1, a.i, !1]);
        return !1
    }

    function yk(a, b, c, d) {
        if (!uk(b, d) || 1 != B(b, 8)) return null;
        d = G(b, N, 1);
        if (!d) return null;
        d = ck(d);
        if (!d) return null;
        d = Xj(d, a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = B(b, 2);
        e = fk[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = rk(sk(d), f);
                        break a;
                    case 3:
                        f = rk(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = rk(g ? 1 == g.nodeType ? g : sk(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !tk(d))) c = 1 == e || 2 == e ? d : d.parentNode,
                c = !(c && !Qj(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.u;
            f = B(b, 2);
            g =
                Aa(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(Aa(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(Aa(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (c) return null;
        c = G(b, be, 3);
        f = {};
        c && (f.Ua = B(c, 1), f.Fa = B(c, 2), f.clearBoth = !!Rb(c, 3));
        c = G(b, ce, 4) && B(G(b, ce, 4), 2) ? B(G(b, ce, 4), 2) : null;
        c = dj(c);
        g = null == B(b, 12) ? null : B(b, 12);
        g = null == g ? null : new bj(null, {
            google_ml_rank: g
        });
        b = zk(a, b);
        b = cj(a.m, c, g, b);
        c = a.h;
        a = a.F;
        var h = c.document,
            k = f.clearBoth ||
                !1;
        g = Oc((new Pc(h)).h, "DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.ib && Vj(k, f.ib);
        h = Oc((new Pc(h)).h, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Ua && (k.marginTop = f.Ua);
        f.Fa && (k.marginBottom = f.Fa);
        f.Ya && Vj(k, f.Ya);
        g.appendChild(h);
        f = {
            oa: g,
            ea: h
        };
        f.ea.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ga) f.oa.className = h.join(" ");
        h = f.ea;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client",
            a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.oa;
                var r = void 0 === r ? 0 : r;
                if (U(Rf)) {
                    r = void 0 === r ? 0 : r;
                    var v = Sj(d, e, r);
                    if (v.init) {
                        var w = v.init;
                        for (d = w; d = v.ga(d);) w = d;
                        var z = {
                            anchor: w,
                            position: v.ka
                        }
                    } else z = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = r;
                    Rj(m, z.anchor, z.position)
                } else Rj(m, d, e);
                b: {
                    var F = f.ea;F.setAttribute("data-adsbygoogle-status", "reserved");F.className += " adsbygoogle-noablate";m = {
                        element: F
                    };
                    var C = b && b.Na;
                    if (F.hasAttribute("data-pub-vars")) {
                        try {
                            C = JSON.parse(F.getAttribute("data-pub-vars"))
                        } catch (ea) {
                            break b
                        }
                        F.removeAttribute("data-pub-vars")
                    }
                    C &&
                    (m.params = C);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (ea) {
                (F = f.oa) && F.parentNode && (C = F.parentNode, C.removeChild(F), Qj(C) && (C.style.display = C.getAttribute("data-init-display") || "none"));
                F = !1;
                break a
            }
            F = !0
        }
        return F ? f : null
    }

    function zk(a, b) {
        return pf(sf(ik(b).map(ej), function(c) {
            gk(a.h).exception = c
        }))
    };

    function Ak() {
        this.i = new Bk(this);
        this.h = 0
    }
    Ak.prototype.resolve = function(a) {
        Ck(this);
        this.h = 1;
        this.l = a;
        Dk(this.i)
    };
    Ak.prototype.reject = function(a) {
        Ck(this);
        this.h = 2;
        this.j = a;
        Dk(this.i)
    };

    function Ck(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function Bk(a) {
        this.h = a
    }
    Bk.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        Dk(this)
    };

    function Dk(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Ek(a) {
        this.exception = a
    }

    function Fk(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    Fk.prototype.start = function() {
        this.l()
    };
    Fk.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    xk(this.h, !0);
                    Gk(this);
                    break;
                default:
                    xk(this.h, !1) ? Gk(this) : this.j.setTimeout(Fa(this.l, this), 100)
            }
        } catch (a) {
            Gk(this, a)
        }
    };

    function Gk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            gk(e.h);
            H(e.j, de, 1);
            d.call(c, new Ek(b))
        } catch (f) {
            a.i.reject(f)
        }
    };

    function Hk(a) {
        jj(a, {
            atf: 1
        })
    }

    function Ik(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        jj(a, {
            atf: 0
        })
    };

    function Jk() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Kk() {
        var a = new Jk;
        this.promise = a.promise;
        this.resolve = a.resolve
    }

    function Lk(a) {
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp;
        b[7] || (b[7] = new Kk, a && a());
        return b[7]
    }

    function Mk(a) {
        return Lk(function() {
            Vc(x.document, a)
        }).promise
    };

    function Nk(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Ok(a) {
        var b = Og(x, 12, a.google_ad_client);
        a = "google_ad_host" in a;
        var c = .5 > Math.random(),
            d = Kd(x.location, "google_ads_preview");
        return b && !a && c || d
    }

    function Pk(a) {
        if (x.google_apltlad || x.top != x || !a.google_ad_client) return null;
        var b = Ok(a);
        x.google_apltlad = !0;
        var c = Nk(a.google_ad_client),
            d = c.enable_page_level_ads;
        ad(a, function(e, f) {
            nc[f] && "google_ad_client" !== f && (d[f] = e)
        });
        if (b) d.google_ad_channel = "AutoInsertAutoAdCode";
        else if (d.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) d.google_ad_section = a.google_ad_section || a.google_ad_region;
        return c
    }

    function Qk(a) {
        return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Rk(a, b) {
        this.h = x;
        this.j = a;
        this.i = b
    }

    function Sk(a) {
        Ag({
            Y: a.h,
            ja: a.i,
            Ta: 50,
            $a: function(b) {
                return Tk(a, b)
            }
        })
    }

    function Tk(a, b) {
        sf(qf(b, function(c) {
            Uk("ok");
            Vk(a.h, a.j, c)
        }), function(c) {
            return Uk(c.message)
        })
    }

    function Uk(a) {
        cf("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function Vk(a, b, c) {
        if (!J(K).ama_ran_on_page) {
            var d = nj(c);
            if (d) {
                if (null != B(d, 24)) {
                    c = hk(a);
                    c.availableAbg = !0;
                    var e, f;
                    c.ablationFromStorage = !!(null == (e = G(d, Gi, 24)) ? 0 : null == (f = G(e, Ii, 3)) ? 0 : G(f, Ki, 2))
                }
                if (Qk(b) && (e = Ti(a, H(d, Oi, 7)), !e || !Rb(e, 8))) return;
                J(K).ama_ran_on_page = !0;
                if ((e = G(d, Ri, 13)) && 1 === B(e, 1)) {
                    var g = 0,
                        h = G(e, Si, 6);
                    h && B(h, 3) && (g = B(h, 3) || 0);
                    fc(a, g)
                } else if (null == (g = G(d, Gi, 24)) ? 0 : null == (h = G(g, Ii, 3)) ? 0 : G(h, Ki, 2)) hk(a).ablatingThisPageview = !0, fc(a, 1);
                qj(3, [d.toJSON()]);
                var k = b.google_ad_client || "";
                b = kj(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
                var l = cj(gj, new bj(null, b));
                af(782, function() {
                    var m = l;
                    try {
                        var r = Ti(a, H(d, Oi, 7)),
                            v;
                        if (v = r) a: {
                            var w;
                            if (w = B(r, 2))
                                for (var z = 0; z < w.length; z++)
                                    if (1 == w[z]) {
                                        v = !0;
                                        break a
                                    } v = !1
                        }
                        if (v) {
                            if (B(r, 4)) {
                                v = {};
                                var F = new bj(null, (v.google_package = B(r, 4), v));
                                m = cj(m, F)
                            }
                            var C = new wk(a, k, d, r, m),
                                ea = new Ak;
                            (new Fk(a, C, ea)).start();
                            ea.i.then(Ga(Hk, a), Ga(Ik, a))
                        }
                    } catch (za) {
                        jj(a, {
                            atf: -1
                        })
                    }
                })
            } else oj(a, c)
        }
    };
    var Wk = null;

    function Xk() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };

    function Yk(a, b) {
        a.qa(function(c) {
            c.shv = String(b);
            c.mjsv = "m202108030101";
            var d = T(Hh).h();
            var e = dc(x);
            (d = d.concat(e).join(",")) && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
        })
    };

    function Y(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        X.call(this, a, b);
        this.ba = c;
        this.fb = d
    }
    u(Y, X);
    Y.prototype.ma = function() {
        return this.ba
    };
    Y.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function Zk(a) {
        return function(b) {
            return !!(b.ba & a)
        }
    };
    var $k = Bb("script");

    function al(a, b, c, d, e, f, g, h, k, l, m, r) {
        this.u = a;
        this.R = b;
        this.ba = void 0 === c ? null : c;
        this.i = void 0 === d ? null : d;
        this.O = void 0 === e ? null : e;
        this.h = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.L = void 0 === h ? null : h;
        this.M = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.N = void 0 === r ? null : r;
        this.P = this.F = this.v = null
    }
    al.prototype.size = function() {
        return this.R
    };

    function bl(a, b, c) {
        null != a.ba && (c.google_responsive_formats = a.ba);
        null != a.O && (c.google_safe_for_responsive_override = a.O);
        null != a.h && (!0 === a.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.h));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.u;
            null != a.i && (c.armr = a.i);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.h && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.L && (c.gfwroml = a.L);
        null != a.M && (c.gfwromr = a.M);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.N && (c.gfwroz = a.N);
        null != a.v && (c.gml = a.v);
        null != a.F && (c.gmr = a.F);
        null != a.P && (c.gzi = a.P);
        b = Gd();
        b = Jd(b) || b;
        Kd(b.location, "google_responsive_slot_debug") &&
        (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.h || !0 !== a.j ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        Kd(b.location, "google_responsive_dummy_ad") && (Ua([1, 2, 3, 4, 5, 6, 7, 8], a.u) || 1 === a.i) && 2 !== a.i && (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = "<" + $k + ">window.top.postMessage('" + a + "', '*');\n          </" + $k + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
            d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    /*

     Copyright 2019 The AMP HTML Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var cl = {},
        dl = (cl.image_stacked = 1 / 1.91, cl.image_sidebyside = 1 / 3.82, cl.mobile_banner_image_sidebyside = 1 / 3.82, cl.pub_control_image_stacked = 1 / 1.91, cl.pub_control_image_sidebyside = 1 / 3.82, cl.pub_control_image_card_stacked = 1 / 1.91, cl.pub_control_image_card_sidebyside = 1 / 3.74, cl.pub_control_text = 0, cl.pub_control_text_card = 0, cl),
        el = {},
        fl = (el.image_stacked = 80, el.image_sidebyside = 0, el.mobile_banner_image_sidebyside = 0, el.pub_control_image_stacked = 80, el.pub_control_image_sidebyside = 0, el.pub_control_image_card_stacked =
            85, el.pub_control_image_card_sidebyside = 0, el.pub_control_text = 80, el.pub_control_text_card = 80, el),
        gl = {},
        hl = (gl.pub_control_image_stacked = 100, gl.pub_control_image_sidebyside = 200, gl.pub_control_image_card_stacked = 150, gl.pub_control_image_card_sidebyside = 250, gl.pub_control_text = 100, gl.pub_control_text_card = 150, gl);

    function il(a) {
        var b = 0;
        a.J && b++;
        a.G && b++;
        a.H && b++;
        if (3 > b) return {
            I: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.J.split(",");
        var c = a.H.split(",");
        a = a.G.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            I: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            I: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (isNaN(g) || 0 === g) return {
                I: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {
                I: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            H: d,
            G: e,
            La: b
        }
    }

    function jl(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var kl = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function ll(a, b) {
        X.call(this, a, b)
    }
    u(ll, X);
    ll.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function ml(a, b) {
        nl(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new al(9, new ll(a, Math.floor(a * b.google_phwr)));
        var c = Qc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * dl.mobile_banner_image_sidebyside + fl.mobile_banner_image_sidebyside) + 96), a = {
            X: a,
            V: c,
            G: 1,
            H: 12,
            J: "mobile_banner_image_sidebyside"
        }) : (a = jl(a), a = {
            X: a.width,
            V: a.height,
            G: 1,
            H: 13,
            J: "image_sidebyside"
        }) : (a = jl(a), a = {
            X: a.width,
            V: a.height,
            G: 4,
            H: 2,
            J: "image_stacked"
        });
        ol(b, a);
        return new al(9, new ll(a.X, a.V))
    }

    function pl(a, b) {
        nl(a, b);
        var c = il({
            H: b.google_content_recommendation_rows_num,
            G: b.google_content_recommendation_columns_num,
            J: b.google_content_recommendation_ui_type
        });
        if (c.I) a = {
            X: 0,
            V: 0,
            G: 0,
            H: 0,
            J: "image_stacked",
            I: c.I
        };
        else {
            var d = 2 === c.La.length && 468 <= a ? 1 : 0;
            var e = c.La[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = hl[e];
            for (var g = c.G[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.H[d];
            d = Math.floor(((a - 8 * f - 8) / f * dl[e] + fl[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    ra: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    ra: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = a.ra ? {
                X: 0,
                V: 0,
                G: 0,
                H: 0,
                J: e,
                I: a.ra
            } : {
                X: a.width,
                V: a.height,
                G: f,
                H: c,
                J: e
            }
        }
        if (a.I) throw new O(a.I);
        ol(b, a);
        return new al(9, new ll(a.X, a.V))
    }

    function nl(a, b) {
        if (0 >= a) throw new O("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function ol(a, b) {
        a.google_content_recommendation_ui_type = b.J;
        a.google_content_recommendation_columns_num = b.G;
        a.google_content_recommendation_rows_num = b.H
    };

    function ql(a, b) {
        X.call(this, a, b)
    }
    u(ql, X);
    ql.prototype.h = function() {
        return this.minWidth()
    };
    ql.prototype.i = function(a, b, c) {
        Hj(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var rl = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function sl(a, b) {
        X.call(this, a, b)
    }
    u(sl, X);
    sl.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function tl(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = Aj(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g;
            else if (g = Q(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (Fj(b, c), Hj(b, c), a = g)
        }
        if (250 > a) throw new O("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new O("Fluid responsive ads must be at least 50px tall: height=" +
                f);
            return new al(11, new X(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new O("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new O("Invalid height: height=" + f);
            if (50 > f) throw new O("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new O("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new al(11, new X(a, f))
        }
        d = rl[f];
        if (!d) throw new O("Invalid data-ad-layout value: " + f);
        c = Lj(c, b);
        b = Q(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new al(11, "in-article" == f ? new sl(a, b) : new X(a, b))
    };

    function ul(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function vl(a, b) {
        for (var c = wl.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        wl = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];

    function xl(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            B: a,
            C: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || yl(b) || e.google_ad_resize ? (488 > Q(c) && (Cj(c) || U($f)) && Fj(c, d), b = Bj(a, c, d, e), c = !0 !== b ? {
            B: a,
            C: b
        } : {
            B: Q(c) || a,
            C: !0
        }) : c = {
            B: a,
            C: 2
        };
        b = c.C;
        return !0 !== b ? {
            B: a,
            C: b
        } : d.parentElement ? {
            B: c.B,
            C: b
        } : {
            B: a,
            C: b
        }
    }

    function zl(a, b, c, d, e) {
        var f = af(247, function() {
                return xl(a, b, c, d, e)
            }),
            g = f.B;
        f = f.C;
        var h = !0 === f,
            k = M(d.style.width),
            l = M(d.style.height),
            m = Al(g, b, c, d, e, h);
        g = m.W;
        h = m.T;
        var r = m.ma;
        m = m.Ka;
        var v = Bl(b, r),
            w, z = (w = Ij(d, c, "marginLeft", M)) ? w + "px" : "",
            F = (w = Ij(d, c, "marginRight", M)) ? w + "px" : "";
        w = Ij(d, c, "zIndex") || "";
        return new al(v, g, r, null, m, f, h, z, F, l, k, w)
    }

    function yl(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Al(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Q(c)) ? 4 : 3 : zj(b);
        var g = !1,
            h = !1;
        if (488 > Q(c)) {
            var k = yj(d, c);
            var l = Lj(d, c);
            g = !l && k;
            h = l && k
        }
        l = 488 > Q(c);
        var m = [Jj(a), Zk(b)];
        Cj(c) || m.push(Kj(l, c, d, h));
        null != e.google_max_responsive_height && m.push(Nj(e.google_max_responsive_height));
        var r = [function(w) {
            return !w.fb
        }];
        !g && !h || Cj(c) || (g = Oj(c, d), r.push(Nj(g)));
        var v = l && !f && 3 === b && Cl(c) ? new Y(a, Math.floor(a / 1.2), 1) : vl(ul(m), ul(r));
        if (!v) throw new O("No slot size for availableWidth=" + a);
        l = af(248, function() {
            var w;
            a: if (f) {
                if (e.gfwrnh && (w = M(e.gfwrnh))) {
                    w = {
                        W: new ql(a, w),
                        T: !0
                    };
                    break a
                }
                w = a / 1.2;
                if (Cj(c)) var z = w;
                else {
                    z = Math;
                    var F = z.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var C = Infinity;
                    else {
                        C = d;
                        var ea = Infinity;
                        do {
                            var za = Ij(C, c, "height", M);
                            za && (ea = Math.min(ea, za));
                            (za = Ij(C, c, "maxHeight", M)) && (ea = Math.min(ea, za))
                        } while ((C = C.parentElement) && "HTML" != C.tagName);
                        C = ea
                    }
                    z = F.call(z, w, C);
                    if (z < .5 * w || 100 > z) z = w
                }
                U(eg) && !Lj(d, c) && (z = Math.max(z, .5 * nf(c).clientHeight));
                w = {
                    W: new ql(a, Math.floor(z)),
                    T: z < w ? 102 : !0
                }
            } else w = {
                W: v,
                T: 100
            };
            return w
        });
        g = l.W;
        l = l.T;
        return "in-article" === e.google_ad_layout && Dl(c) ? {
            W: El(a, c, d, g, e),
            T: !1,
            ma: b,
            Ka: k
        } : {
            W: g,
            T: l,
            ma: b,
            Ka: k
        }
    }

    function Bl(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function El(a, b, c, d, e) {
        var f = e.google_ad_height || Ij(c, b, "height", M);
        b = tl(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new Y(b.minWidth(), b.height(), 1) : d
    }

    function Dl(a) {
        return U(cg) || a.location && "#hffwroe2etoq" == a.location.hash
    }

    function Cl(a) {
        return U(bg) || a.location && "#affwroe2etoq" == a.location.hash
    };

    function Fl(a, b, c, d, e) {
        var f;
        (f = Q(b)) ? 488 > Q(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Hj(b, c), f = {
            B: f,
            C: !0
        }) : f = {
            B: a,
            C: 5
        } : f = {
            B: a,
            C: 4
        }: f = {
            B: a,
            C: 10
        };
        var g = f;
        f = g.B;
        g = g.C;
        if (!0 !== g || a == f) return new al(12, new X(a, d), null, null, !0, g, 100);
        a = Al(f, "auto", b, c, e, !0);
        return new al(1, a.W, a.ma, 2, !0, g, a.T)
    };

    function Gl(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = t(kl), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        } b = !1
            }
            return b ? 9 : 5
        }
        if (yl(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = U(dg) || U(cg) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (Hl(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return Hl(b), 1
    }

    function Il(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Ij(b, d, "width", M) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = Jl(a, e, b, c, d)) ? f : zl(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        bl(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function Jl(a, b, c, d, e) {
        var f = d.google_ad_height || Ij(c, e, "height", M);
        switch (a) {
            case 5:
                return f = af(247, function() {
                    return xl(b, d.google_ad_format, e, c, d)
                }), a = f.B, f = f.C, !0 === f && b != a && Hj(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), ml(a, d);
            case 9:
                return pl(b, d);
            case 8:
                return tl(b, e, c, f, d);
            case 10:
                return Fl(b, e, c, f, d)
        }
    }

    function Hl(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function Kl(a) {
        this.l = [];
        this.i = a || window;
        this.h = 0;
        this.j = null;
        this.m = 0
    }
    var Ll;
    n = Kl.prototype;
    n.ab = function(a, b) {
        0 != this.h || 0 != this.l.length || b && b != window ? this.Ha(a, b) : (this.h = 2, this.Qa(new Ml(a, window)))
    };
    n.Ha = function(a, b) {
        this.l.push(new Ml(a, b || this.i));
        Nl(this)
    };
    n.jb = function(a) {
        this.h = 1;
        if (a) {
            var b = bf(188, Fa(this.Pa, this, !0));
            this.j = this.i.setTimeout(b, a)
        }
    };
    n.Pa = function(a) {
        a && ++this.m;
        1 == this.h && (null != this.j && (this.i.clearTimeout(this.j), this.j = null), this.h = 0);
        Nl(this)
    };
    n.qb = function() {
        return !(!window || !Array)
    };
    n.bb = function() {
        return this.m
    };

    function Nl(a) {
        var b = bf(189, Fa(a.rb, a));
        a.i.setTimeout(b, 0)
    }
    n.rb = function() {
        if (0 == this.h && this.l.length) {
            var a = this.l.shift();
            this.h = 2;
            var b = bf(190, Fa(this.Qa, this, a));
            a.Y.setTimeout(b, 0);
            Nl(this)
        }
    };
    n.Qa = function(a) {
        this.h = 0;
        a.h()
    };

    function Ol(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function Pl() {
        if (Ll && Ol(Ll)) return Ll;
        var a;
        if (!vf) {
            for (var b = a = x, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, Uc(a)) b = a;
                else break;
            vf = b
        }
        a = vf;
        return (b = a.google_jobrunner) && ("object" === typeof b || "function" === typeof b) && Ol(b) && Bd(b.nq) && Bd(b.nqa) && Bd(b.al) && Bd(b.rl) ? Ll = b : a.google_jobrunner = Ll = new Kl(a)
    }

    function Ql(a, b) {
        Pl().nq(a, b)
    }

    function Rl(a, b) {
        Pl().nqa(a, b)
    }
    Kl.prototype.nq = Kl.prototype.ab;
    Kl.prototype.nqa = Kl.prototype.Ha;
    Kl.prototype.al = Kl.prototype.jb;
    Kl.prototype.rl = Kl.prototype.Pa;
    Kl.prototype.sz = Kl.prototype.qb;
    Kl.prototype.tc = Kl.prototype.bb;

    function Ml(a, b) {
        this.h = a;
        this.Y = b
    };
    var Sl = "undefined" === typeof sttc ? void 0 : sttc;

    function Tl(a) {
        try {
            return kc(a, Md), new we(JSON.parse(a))
        } catch (b) {
            P.D(838, b instanceof Error ? b : Error(String(b)), void 0, function(c) {
                c.jspb = String(a)
            })
        }
        return new we
    };

    function Ul(a, b) {
        var c = Jd(b);
        if (c) {
            c = Q(c);
            var d = Wc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Vl(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Wl(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            var d = c.search(Tc),
                e;
            b: {
                for (e = 0; 0 <= (e = c.indexOf("client", e)) && e < d;) {
                    var f = c.charCodeAt(e - 1);
                    if (38 == f || 63 == f)
                        if (f = c.charCodeAt(e + 6), !f || 61 == f || 38 == f || 35 == f) break b;
                    e += 7
                }
                e = -1
            }
            if (0 > e) c = null;
            else {
                f = c.indexOf("&", e);
                if (0 > f || f > d) f = d;
                e += 7;
                c = decodeURIComponent(c.substr(e, f - e).replace(/\+/g, " "))
            }
            c && (b.google_ad_client = Vl("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) f = a[d], /data-/.test(f.name) && (e = kb(f.name.replace("data-matched-content",
            "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), b.hasOwnProperty(e) || (f = Vl(e, f.value), null !== f && (b[e] = f)))
    }

    function Xl(a) {
        if (a = vd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Yl(a, b, c, d) {
        Wl(a, b);
        if (c.document && c.document.body && !Gl(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Ul(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Hc[e + "x" + g];
                var h = f;
                if (e) {
                    var k = Ic(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new O("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = zl(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                bl(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || Ij(a, c, "width", M) || b.google_ad_width || 0;
        f = Ga(zl, e, "auto", c, a, b, !1, !0);
        g = Jd(c) || c;
        h = b.google_ad_client;
        d = g.location && "#ftptohbh" === g.location.hash ? 2 : Kd(g.location, "google_responsive_slot_debug") || Kd(g.location, "google_responsive_slot_preview") || U(Zf) ? 1 : U(Xf) ? 2 : Lg(g, 1, h, d) ? 1 : 0;
        if (g = 0 !== d) b: if (!(488 > Q(c) || U(Yf)) || b.google_reactive_ad_format ||
            Gl(c, b) || vj(a, b)) g = !1;
        else {
            for (g = a; g; g = g.parentElement) {
                h = Wc(g, c);
                if (!h) {
                    b.gfwrnwer = 18;
                    g = !1;
                    break b
                }
                if (!Ua(["static", "relative"], h.position)) {
                    b.gfwrnwer = 17;
                    g = !1;
                    break b
                }
            }
            if (!U(Yf) && (g = Aj(c, a, e, .3, b), !0 !== g)) {
                b.gfwrnwer = g;
                g = !1;
                break b
            }
            g = c.top == c ? !0 : !1
        } g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, bl(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, d.ds && (b.ds = d.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1;
        if (e = Gl(c,
            b)) Il(e, a, b, c, d);
        else {
            if (vj(a, b)) {
                if (d = Wc(a, c)) a.style.width = d.width, a.style.height = d.height, uj(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Xl(c)
            } else uj(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Il(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Bj(a.offsetWidth ||
                parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Zl(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };
    var $l = {},
        am = ($l.google_ad_modifications = !0, $l.google_analytics_domain_name = !0, $l.google_analytics_uacct = !0, $l.google_pause_ad_requests = !0, $l.google_user_agent_client_hint = !0, $l);

    function bm(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
    }

    function cm(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null
    }

    function dm(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function em(a) {
        A.call(this, a, -1, fm)
    }
    u(em, A);
    var fm = [6];

    function gm(a) {
        A.call(this, a)
    }
    u(gm, A);

    function hm(a) {
        A.call(this, a)
    }
    u(hm, A);

    function im(a) {
        A.call(this, a)
    }
    u(im, A);

    function jm(a) {
        a = (new Ff(a)).get("FCCDCF", "");
        try {
            return a ? Nb(gm, a ? JSON.parse(a) : null) : null
        } catch (b) {
            return null
        }
    }

    function km(a) {
        return (a = jm(a)) ? G(a, hm, 4) : null
    };

    function lm(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var e = Oc(d.h, "IFRAME");
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = "__uspapiLocator";
                    c.body.appendChild(e)
                } else a.setTimeout(b, 5)
        }
        var c = a.document,
            d = a ? new Pc(9 == a.nodeType ? a : a.ownerDocument || a.document) : Ka || (Ka = new Pc);
        b()
    };

    function mm(a) {
        this.h = a;
        this.i = a.document;
        this.j = (a = (a = jm(this.i)) ? G(a, im, 5) || null : null) ? B(a, 2) : null;
        (a = km(this.i)) && null != B(a, 1) && B(a, 1);
        (a = km(this.i)) && null != B(a, 2) && B(a, 2)
    }

    function nm() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new mm(a), om(a))
    }

    function om(a) {
        !a.j || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", lm(a.h), Ha(function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.l.apply(a, ma(c))
        }))
    }
    mm.prototype.l = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.j
        }, !0)
    };
    var pm = ["AwfG8hAcHnPa/kJ1Co0EvG/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr//PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AysVDPGQTLD/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
    ];

    function qm() {
        var a = K.document;
        a = void 0 === a ? window.document : a;
        sd(pm, a)
    };
    var rm = ["A2YAd4xOntTGygIDjApOTtXOgVI3IWsd5OnOGq3RbRkIQwyqYWNl1JGRAcvtm6VOHDj4n07T/J19VqLuJn3MmQ8AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A2c5Ux+hivdkLh/KbZUGr6f7SCR0mZrBVfPJ+/OuDVHNwiYv+Lo83b9z5qL8sod78bQl0pSLtbvRWURo+xRl7AIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
        "AzNJ4sd3tVurolpdvWYZ4cmP9Po7RJhEHSqmC3pgxW9fFVZvchhtcMUgHAs97npxMD1jhXHO8s6q6Wy1MMLxKgEAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
    ];

    function sm() {
        var a = K.document;
        a = void 0 === a ? window.document : a;
        sd(rm, a)
    };

    function tm(a, b, c) {
        var d = window;
        return function() {
            var e = Le(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (Le() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function um(a, b) {
        return tm(a, b, function(c, d) {
            (new Xe).D(c, d)
        })
    };

    function vm(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function wm(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function xm() {
        var a = new p.Set;
        try {
            if ("undefined" === typeof googletag || !googletag.pubads) return a;
            for (var b = googletag.pubads(), c = t(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId())
        } catch (e) {}
        return a
    }

    function ym(a) {
        a = a.id;
        return null != a && (xm().has(a) || q(a, "startsWith").call(a, "google_ads_iframe_") || q(a, "startsWith").call(a, "aswift"))
    }

    function zm(a, b, c) {
        if (!a.sources) return !1;
        var d = wg(mg);
        switch (Am(a)) {
            case 2:
                var e = Bm(a);
                if (e) return c.some(function(g) {
                    return Cm(e, g, d)
                });
            case 1:
                var f = Dm(a);
                if (f) return b.some(function(g) {
                    return Cm(f, g, d)
                })
        }
        return !1
    }

    function Am(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Dm(a) {
        return Em(a, function(b) {
            return b.currentRect
        })
    }

    function Bm(a) {
        return Em(a, function(b) {
            return b.previousRect
        })
    }

    function Em(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Fm() {
        R.call(this);
        this.j = this.i = this.O = this.N = this.L = 0;
        this.za = this.wa = Number.NEGATIVE_INFINITY;
        this.sa = this.ua = this.va = this.xa = this.Ca = this.v = this.Ba = this.R = 0;
        this.ta = !1;
        this.P = this.M = this.F = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Aa = a ? a.getAttribute("data-google-query-id") : null;
        this.u = null;
        this.ya = !1;
        this.da = function() {}
    }
    u(Fm, R);

    function Gm() {
        var a = new Fm;
        if (U(jg) && !window.google_plmetrics && window.PerformanceObserver) {
            window.google_plmetrics = !0;
            for (var b = t(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, Hm(a).observe({
                type: c,
                buffered: !U(og)
            });
            Im(a)
        }
    }

    function Hm(a) {
        a.u || (a.u = new PerformanceObserver(um(640, function(b) {
            var c = Jm !== window.scrollX || Km !== window.scrollY ? [] : Lm,
                d = Mm();
            b = t(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput && (!U(kg) || .01 < e.value)) {
                        f.L += Number(e.value);
                        Number(e.value) > f.N && (f.N = Number(e.value));
                        f.O += 1;
                        var g = zm(e, c, d);
                        g && (f.v += e.value, f.xa++);
                        if (5E3 < e.startTime - f.wa || 1E3 < e.startTime - f.za) f.wa = e.startTime, f.i = 0, f.j = 0;
                        f.za = e.startTime;
                        f.i += e.value;
                        g && (f.j += e.value);
                        f.i > f.R && (f.R = f.i, f.Ca = f.j, f.Ba = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.va = Math.floor(e.renderTime || e.loadTime);
                    a.ua = e.size;
                    break;
                case "first-input":
                    a.sa = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ta = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.F += e, a.M = Math.max(a.M, e), a.P += 1
            }
        })));
        return a.u
    }

    function Im(a) {
        var b = um(641, function() {
                var f = document;
                2 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                } [f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Nm(a)
            }),
            c = um(641, function() {
                return void Nm(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        var d = wg(ng),
            e;
        0 < d && (e = setTimeout(c, 1E3 * d));
        a.da = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Hm(a).disconnect();
            e && clearTimeout(e)
        }
    }
    Fm.prototype.h = function() {
        R.prototype.h.call(this);
        this.da()
    };

    function Nm(a) {
        if (!a.ya) {
            a.ya = !0;
            Hm(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += wm("cls", a.L), b += wm("mls", a.N), b += vm("nls", a.O), window.LayoutShiftAttribution && (b += wm("cas", a.v), b += vm("nas", a.xa)), b += wm("wls", a.R), b += wm("tls", a.Ba), window.LayoutShiftAttribution && (b += wm("was", a.Ca)));
            window.LargestContentfulPaint && (b += vm("lcp", a.va), b += vm("lcps", a.ua));
            window.PerformanceEventTiming && a.ta && (b += vm("fid", a.sa));
            window.PerformanceLongTaskTiming &&
            (b += vm("cbt", a.F), b += vm("mbt", a.M), b += vm("nlt", a.P));
            for (var c = 0, d = t(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) ym(e.value) && c++;
            b += vm("nif", c);
            b += vm("ifi", Dd(window));
            c = T(Hh).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            b += a.Aa ? "&qqid=" + encodeURIComponent(a.Aa) : vm("pvsid", td(x));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.l || (a.l = !0, a.h())
        }
    }

    function Cm(a, b, c) {
        if (0 === c) return !0;
        var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= d || 0 >= a ? !1 : 100 * d * a / ((b.right - b.left) * (b.bottom - b.top)) >= c
    }

    function Mm() {
        var a = [].concat(ma(document.getElementsByTagName("iframe"))).filter(ym),
            b = [].concat(ma(xm())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Jm = window.scrollX;
        Km = window.scrollY;
        return Lm = [].concat(ma(a), ma(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Jm = void 0,
        Km = void 0,
        Lm = [];

    function Om(a) {
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }

    function Pm() {
        var a = void 0 === a ? window : a;
        if (!Om(a) && U(pg) || Om(a) && U(qg)) {
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        }
        return !1
    }
    var Qm = {
        issuerOrigin: "https://attestation.android.com",
        issuancePath: "/att/i",
        redemptionPath: "/att/r",
        shouldRedeemToken: function() {
            return Pm()
        },
        shouldRequestToken: function() {
            return Pm()
        }
    };
    var Rm = ["A88otRz1Fd3Nt567e2IYshC18LL3KGVXpVJW9oTCId4RYaygt23pbb4JqrbdIO/bwZPWEmRjBIRBu/bZbDR7Pg4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A0gCLbXCcL0R1Oc8tFPDs0G4Elz17w3zHp+Zst66+D17veE2o7fUcPsA114QtSTRqfVJLMeTSdeWOom0CcyCsgYAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "A9RQ+LxFazAousxUwSCzaihJjHLO1UyjQp0teZKHl7WdbVjPDfHSKMd6D/ZI5MTjqClFycbl70EFd7cBJWXqKQEAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6WKeWsdn1Ct+ZPqS9NCxxaiBoQ7wdTkK2/gE69Yu0gfBKJfo1gOvgkGmf5/xaIajT/RUb9AbnF1FsSZ47cCcQcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "A04ZCu7yjrHgwQJK5ISHhH1DSg0qqowEay3n70KO6wV3D2Mj+OX3Kw20aSMitzgdG1xfrN7sOJV/dZIk+RvCzA4AAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
    ];

    function Sm(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        R.call(this);
        U(sg) || Tm();
        this.j = b || [Qm];
        this.i = c;
        if (document.hasTrustToken && !U(rg) && !Array.isArray(window.goog_tt_state)) {
            var d = Um(this);
            Object.defineProperty(window, "goog_tt_state", {
                configurable: !1,
                get: function() {
                    return d.slice()
                }
            })
        }
    }
    u(Sm, R);

    function Tm() {
        var a = void 0 === a ? window.document : a;
        sd(Rm, a)
    }

    function Um(a) {
        return a.j.map(function(b) {
            return {
                issuerOrigin: b.issuerOrigin,
                state: U(sg) && !a.i ? 12 : 1
            }
        })
    }

    function Vm(a, b) {
        var c = q(window.goog_tt_state, "find").call(window.goog_tt_state, function(d) {
            return d.issuerOrigin === a
        });
        c && (c.state = b)
    }

    function Wm() {
        var a = window.goog_tt_state;
        return Array.isArray(a) && a.some(function(b) {
            return 1 != b.state
        })
    }

    function Xm(a) {
        var b = a.issuerOrigin + a.redemptionPath,
            c = {
                keepalive: !0,
                redirect: "follow",
                method: "get",
                trustToken: {
                    type: "token-redemption",
                    issuer: a.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Vm(a.issuerOrigin, 2);
        return window.fetch(b, c).then(function(d) {
            if (!d.ok) throw Error(d.status + ": Network response was not ok!");
            Vm(a.issuerOrigin, 6)
        }).catch(function(d) {
            d && "NoModificationAllowedError" === d.name ? Vm(a.issuerOrigin, 6) : Vm(a.issuerOrigin, 5)
        })
    }

    function Ym(a, b) {
        var c = a.issuerOrigin + a.issuancePath;
        Vm(a.issuerOrigin, 8);
        return window.fetch(c, {
            trustToken: {
                type: "token-request"
            }
        }).then(function(d) {
            if (!d.ok) throw Error(d.status + ": Network response was not ok!");
            Vm(a.issuerOrigin, 10);
            if (b) return Xm(a)
        }).catch(function(d) {
            if (d && "NoModificationAllowedError" === d.name) {
                if (Vm(a.issuerOrigin, 10), b) return Xm(a)
            } else Vm(a.issuerOrigin, 9)
        })
    }

    function Zm(a) {
        if (document.hasTrustToken && !U(rg) && (!U(sg) || a.i)) {
            if (Wm()) return window.goog_tt_promise;
            var b = [];
            a.j.forEach(function(c) {
                U(ug) && Vm(c.issuerOrigin, 13);
                var d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken();
                if (d || e) {
                    var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                        if (g) {
                            if (d) return Xm(c)
                        } else {
                            if (e) return Ym(c, d);
                            Vm(c.issuerOrigin, 3)
                        }
                    });
                    b.push(f)
                } else Vm(c.issuerOrigin, 7)
            });
            if (p.Promise && p.Promise.all) return a = p.Promise.all(b), "object" != typeof window.goog_tt_promise && Object.defineProperty(window,
                "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }), a
        }
    };
    var $m = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function an() {
        var a = K;
        return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues($m).then(function(b) {
            var c = new em;
            c = E(c, 1, b.platform);
            c = E(c, 2, b.platformVersion);
            c = E(c, 3, b.architecture);
            c = E(c, 4, b.model);
            c = E(c, 5, b.uaFullVersion);
            return E(c, 9, b.bitness)
        }) : null
    };

    function bn(a) {
        a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null)
    }

    function cn(a, b) {
        b.google_ad_host || (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute("content"))
    }

    function dn(a, b, c) {
        var d = K;
        c = void 0 === c ? "" : c;
        bn(d);
        d.google_sa_queue || (d.google_sa_queue = [], d.google_sl_win = d, d.google_process_slots = bf(215, function() {
            return en(d)
        }), a = fn(d, c, a, b), Vc(d.document, a).id = "google_shimpl")
    }

    function en(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || cf("shimpl", {
            t: "no_fn"
        });
        "function" === typeof c && af(216, c);
        b.length && a.setTimeout(bf(215, function() {
            return en(a)
        }), 0)
    }

    function gn(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function fn(a, b, c, d) {
        var e = Math.random() < wg(Vf) ? ib(Jc(c.mb).toString()) : null;
        c = Sb(d, 4) ? c.lb : c.nb;
        e = e ? e : ib(Jc(c).toString());
        c = {};
        a: {
            if (Sb(d, 4)) {
                if (d = b || hn(a)) {
                    var f = {};
                    d = (f.client = d, f.plah = a.location.host, f.amaexp = 1, f);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }
        jn(d, c);
        a: {
            if (d = wg(Pf))
                if (b = b || hn(a)) {
                    f = {};
                    a = (f.client = b, f.plah = a.location.host, f.eid = "" + d, f.ama_t = "adsense", f);
                    break a
                } a = {}
        }
        jn(a, c);
        jn(xg() ? {
            bust: xg()
        } : {}, c);
        return fb(e, c)
    }

    function jn(a, b) {
        ad(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function hn(a) {
        if (a.google_ad_client) return a.google_ad_client;
        if (Wf) {
            var b = J(a).head_tag_slot_vars;
            if (b && b.google_ad_client) return b.google_ad_client
        } else if (b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]')) return b.getAttribute("data-ad-client");
        if (b = a.document.querySelector(".adsbygoogle[data-ad-client]")) return b.getAttribute("data-ad-client");
        b: {
            b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(a) ||
            /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Id() ? bm : cm;
            for (var c = b.length - 1; 0 <= c; c--) {
                var d = b[c];
                if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                    b = d;
                    break b
                }
            }
            b = null
        }
        if (b) {
            a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            for (c = {}; d = a.exec(b);) c[d[1]] = dm(d[2]);
            b = c.google_ad_client ? c.google_ad_client : ""
        } else b = "";
        return b ? b : ""
    }

    function kn(a) {
        if (!Wk) a: {
            for (var b = [x.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (l) {}
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    Wk = h;
                    break a
                }
            } catch (l) {}
            Wk = null
        }
        if (Wk) return null;
        c = Oc(document, "IFRAME");
        c.id = "google_esf";
        c.name = "google_esf";
        a = a.tb;
        if (a instanceof sc) {
            var k;
            a = vc(a);
            a = (null === (k = pc()) || void 0 === k ? 0 : k.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
        } else a = hb(a).toString();
        c.src = a;
        c.style.display = "none";
        return c
    }

    function ln(a, b, c, d) {
        mn(a, b, c, d, function(e, f) {
            var g = e.document;
            e = void 0;
            for (var h = 0; !e || g.getElementById(e + "_anchor");) e = "aswift_" + h++;
            h = Number(f.google_ad_width || 0);
            var k = Number(f.google_ad_height || 0),
                l = f.ds || "";
            l && (l += q(l, "endsWith").call(l, ";") ? "" : ";");
            if (U(hg)) f = Oc(document, "INS"), f.id = e + "_anchor", Zl(f, h, k), f.style.display = "block", g = Oc(document, "INS"), g.id = e + "_expand", Zl(g, h, k), g.style.display = "inline-table", g.appendChild(f), c.appendChild(g);
            else {
                var m = "";
                m = void 0 === m ? "" : m;
                h = "border:none;height:" +
                    k + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (h + "px;background-color:transparent;");
                h = ['<ins id="' + (e + '_expand"'), ' style="display:inline-table;' + h + (void 0 === l ? "" : l) + '"', m ? ' data-ad-slot="' + m + '">' : ">", '<ins id="' + (e + '_anchor" style="display:block;') + h + '">', "</ins></ins>"].join("");
                16 == f.google_reactive_ad_format || f.rss ? (f = g.createElement("div"), g = wb(h), zb(f, g), c.appendChild(f.firstChild)) : (f = wb(h), zb(c, f))
            }
            return e
        })
    }

    function mn(a, b, c, d, e) {
        var f = e(a, b);
        nn(a, c, b);
        c = Ja;
        e = (new Date).getTime();
        b.google_lrv = I(d, 2);
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        b.dninfo = b.google_loader_used;
        c = (d = !!a.document.getElementById(f + "_anchor")) ? Ql : Rl;
        b.dninfo += "_" + d;
        var g = {
            pubWin: a,
            iframeWin: null,
            vars: b
        };
        gn(a, function() {
            b.dninfo += "_" + !!a.document.getElementById(f + "_anchor");
            var h = a.google_sa_impl(g);
            h && h.catch && h.catch(function(k) {
                P.D(911, k instanceof Error ? k : Error(k), void 0, void 0)
            })
        }, c)
    }

    function nn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Hc[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = bd(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var r = k[m];
                            if (r.nodeName && r.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === r) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var v = a.parent;
                for (e = 0; v && v !== a && 25 > e; ++e) {
                    var w = v.frames;
                    for (d = 0; d < w.length; ++d)
                        if (a === w[d]) {
                            b.push(d);
                            break
                        } a = v;
                    v = a.parent
                }
            } catch (z) {}
            c.google_ad_dom_fingerprint = bd(h + b.join()).toString()
        }
    };

    function on(a, b) {
        b = void 0 === b ? 500 : b;
        R.call(this);
        this.j = a;
        this.Ta = b;
        this.i = null;
        this.v = {};
        this.u = null
    }
    u(on, R);
    on.prototype.h = function() {
        this.v = {};
        this.u && (Nc(this.j, "message", this.u), delete this.u);
        delete this.v;
        delete this.j;
        delete this.i;
        R.prototype.h.call(this)
    };

    function pn(a) {
        R.call(this);
        this.j = a;
        this.i = null;
        this.u = !1
    }
    u(pn, R);
    var qn = null,
        rn = [],
        sn = new p.Map,
        tn = -1;

    function un(a) {
        return Hd.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }

    function vn(a, b, c) {
        a.setAttribute("data-adsbygoogle-status", "done");
        wn(a, b, c)
    }

    function wn(a, b, c) {
        var d = window,
            e = Gd();
        e.google_spfd || (e.google_spfd = Yl);
        (e = b.google_reactive_ads_config) || Yl(a, b, d, c);
        cn(d, b);
        if (!xn(a, b, d)) {
            e || (d.google_lpabyc = wj(a, d) + Ij(a, d, "height", M));
            if (e) {
                e = e.page_level_pubvars || {};
                if (J(K).page_contains_reactive_tag && !J(K).allow_second_reactive_tag) {
                    if (e.pltais) {
                        gc(!1);
                        return
                    }
                    throw new O("Only one 'enable_page_level_ads' allowed per page.");
                }
                J(K).page_contains_reactive_tag = !0;
                gc(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Cd(d);
            Ad(am, function(f, g) {
                b[g] =
                    b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (J(K).first_tag_on_page || 0);
            af(164, function() {
                ln(d, b, a, c)
            })
        }
    }

    function xn(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className),
            f = cc(c);
        if (f && f.Da && "on" != b.google_adtest && !e) {
            e = wj(a, c);
            var g = nf(c).clientHeight;
            if (!f.na || f.na && ((0 == g ? null : e / g) || 0) >= f.na) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Aa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.pb && (null !== hd(a.getAttribute("width")) &&
            a.setAttribute("width", 0), null !== hd(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Wc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
        !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function yn(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (un(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
        }
        return null
    }

    function zn(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    An(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function Bn() {
        var a = Oc(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        kd(a);
        return a
    }

    function Cn(a, b) {
        var c = {};
        Ad(jf, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = Bn();
        Gc.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!J(K).pause_ad_requests;
        vn(d, e, b)
    }

    function Dn(a, b) {
        function c() {
            return Cn(a, b)
        }
        mf(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = Na(bf(191, c));
            Mc(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function An(a, b, c) {
        var d = {};
        af(165, function() {
            En(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Fn(a) {
        delete a.google_checked_head;
        ad(a, function(b, c) {
            nc[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function Gn(a) {
        var b = K,
            c = U(Wf) && b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = J(window);
            if (d.head_tag_slot_vars) throw new O("Only one AdSense head tag supported per page. The second tag is ignored.");
            var e = {};
            Wl(c, e);
            Fn(e);
            var f = Ya(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            b.adsbygoogle || (b.adsbygoogle = []);
            b = b.adsbygoogle;
            b.loaded ? b.push(c) : b.splice(0, 0, c);
            e.google_adbreak_test && Hn(f, a);
            hf(function() {
                Hn(f, a)
            })
        }
    }

    function In(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks || "string" === typeof a.EXPERIMENTAL_userInteractionChecks) return 3
        }
        return 0
    }

    function En(a, b, c, d) {
        if (null == a) throw new O("push() called with no parameters.");
        Jn(a, I(d, 7), I(d, 2));
        var e = In(a);
        if (0 !== e) null == qn ? (Kn(a), rn.push(a)) : 3 === e ? af(787, function() {
            qn.handleAdConfig(a)
        }) : qn.handleAdBreak(a).catch(function(g) {
            P.D(730, g instanceof Error ? g : Error(String(g)), void 0, void 0)
        });
        else {
            Ja = (new Date).getTime();
            dn(c, d, Ln(a));
            Mn();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        c = !0;
                        break a
                    }
                    throw new O("'google_ad_client' is missing from the tag config.");
                }
                c = !1
            }
            if (c) Nn(a, d, b);
            else if ((c = a.params) && Ad(c, function(g, h) {
                b[h] = g
            }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                c = On(a.element);
                Wl(c, b);
                e = J(x).head_tag_slot_vars || {};
                ad(e, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (c.hasAttribute("data-require-head") && !J(x).head_tag_slot_vars) throw new O("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new O("Ad client is missing from the slot.");
                b.google_apsail = Qg(b.google_ad_client);
                var f = (e = 0 === (J(K).first_tag_on_page || 0) && Pk(b)) && Qk(e);
                e && !f && (Nn(e, d), J(K).skip_next_reactive_tag = !0);
                0 === (J(K).first_tag_on_page || 0) && (J(K).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!J(K).pause_ad_requests;
                vn(c, b, d);
                e && f && Pn(e)
            }
        }
    }
    var Qn = !1;

    function Jn(a, b, c) {
        var d = K;
        U(Uf) && !Qn && (Qn = !0, (a = Ln(a)) || (a = hn(d)), cf("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, 1))
    }

    function Ln(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Mn() {
        var a = K;
        if (U(Sf)) {
            var b = cc(a);
            if (!(b = b && b.Da)) {
                try {
                    var c = a.localStorage
                } catch (d) {
                    c = null
                }
                c = c ? lj(c) : null;
                b = !(c && mj(c) && c)
            }
            b || fc(a, 1)
        }
    }

    function Pn(a) {
        ud(function() {
            mf(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function Nn(a, b, c) {
        J(K).skip_next_reactive_tag ? J(K).skip_next_reactive_tag = !1 : (0 === (J(K).first_tag_on_page || 0) && (J(K).first_tag_on_page = 1), c && a.tag_partner && (ec(x, a.tag_partner), ec(c, a.tag_partner)), c = Sb(b, 6), J(K).ama_ran_on_page || Sk(new Rk(a, c)), Dn(a, b))
    }

    function On(a) {
        if (a) {
            if (!un(a) && (a.id ? a = yn(a.id) : a = null, !a)) throw new O("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new O("'element' is not a good DOM element.");
        } else if (a = yn(), !a) throw new O("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Rn() {
        var a = K,
            b = new yg(a),
            c = new on(a),
            d = new pn(a);
        a = a.__cmp ? 1 : 0;
        b = zg(b) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = c.j) || void 0 === e ? void 0 : e.__uspapi)) || (c.i ? c = c.i : (c.i = id(c.j, "__uspapiLocator"), c = c.i), f = null != c);
        d.u || (d.i || (d.j.googlefc ? d.i = d.j : d.i = id(d.j, "googlefcPresent")), d.u = !0);
        cf("cmpMet", {
            tcfv1: a,
            tcfv2: b,
            usp: f ? 1 : 0,
            fc: d.i ? 1 : 0,
            ptt: 9
        }, wg(Nf))
    }

    function Sn(a) {
        xf().S[zf(26)] = !!Number(a)
    }

    function Tn(a) {
        Number(a) ? J(K).pause_ad_requests = !0 : (J(K).pause_ad_requests = !1, a = function() {
            if (!J(K).pause_ad_requests) {
                var b = Gd(),
                    c = Gd();
                try {
                    if (Gc.createEvent) {
                        var d = Gc.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (Bd(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (Bd(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1
                        });
                        b.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
    }

    function Un(a) {
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        K._gfp_a_ = a
    }

    function Vn(a) {
        Bd(a) && window.setTimeout(a, 0)
    }

    function Hn(a, b) {
        (aa = Mk(fb(ib(Jc(b.ob).toString()), xg() ? {
            bust: xg()
        } : {})).then(function(c) {
            null == qn && (c.init(a), qn = c, Wn())
        }).catch(function(c) {
            P.D(723, c instanceof Error ? c : Error(String(c)), void 0, void 0)
        }), q(aa, "finally")).call(aa, function() {
            rn.length = 0;
            cf("slotcar", {
                event: "api_ld",
                time: Date.now() - Ja,
                time_pr: Date.now() - tn
            })
        })
    }

    function Wn() {
        for (var a = t(q(sn, "keys").call(sn)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = sn.get(b); - 1 !== c && (x.clearTimeout(c), sn.delete(b))
        }
        a = {};
        for (b = 0; b < rn.length; a = {
            ca: a.ca,
            Z: a.Z
        }, b++) sn.has(b) || (a.Z = rn[b], a.ca = In(a.Z), af(723, function(d) {
            return function() {
                3 === d.ca ? qn.handleAdConfig(d.Z) : 2 === d.ca && qn.handleAdBreakBeforeReady(d.Z).catch(function(e) {
                    P.D(730, e instanceof Error ? e : Error(String(e)), void 0, void 0)
                })
            }
        }(a)))
    }

    function Kn(a) {
        var b = rn.length;
        if (2 === In(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === tn && (tn = Date.now());
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), sn.set(b, -1), cf("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * wg(fg));
            sn.set(b, c)
        }
    };

    // Start Here
    (function(a, b, c, d) {
        // Check For Undefined
        d = void 0 === d ? function() {} : d;

        P.Ra(df);

        af(166, function() {
            var e = Tl(b);
            Yk(P, I(e, 2));
            Kg(Sb(e, 6));
            d();
            qj(16, [1, e.toJSON()]);
            var f = wd(vd(K)) || K,
                g = c(a, e);
            yi(f, e, null === K.document.currentScript ? 1 : mc(g.sb));
            if ((!y("Trident") && !y("MSIE") || 0 <= lb(rb(), 11)) && (null == (K.Prototype || {}).Version || !U(Tf))) {
                Ye(U(lg));
                U(sg) ? Tm() : bf(779, function() {
                    var r = new Sm;
                    0 < wg(tg) ? K.google_trust_token_operation_promise = Zm(r) : Zm(r)
                })();
                f = an();
                null != f && f.then(function(r) {
                    K.google_user_agent_client_hint = Yb(r)
                });
                sm();
                qm();
                nm();
                try {
                    Gm()
                } catch (r) {}
                if (f = Jd(x)) f = mf(f), f.tagSpecificState[1] || (f.tagSpecificState[1] = new Xk);
                Gn(g);
                f = window;

                var h = f.adsbygoogle;

                if (!h || !h.loaded) {
                    wg(Nf) && Rn();
                    var k = {
                        push: function(r) {
                            An(r, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: Sn
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: Tn
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: Un
                        }), Object.defineProperty(k, "onload", {
                            set: Vn
                        })
                    } catch (r) {}
                    if (h)
                        for (var l = t(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]),
                                 m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    zn(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload = h.onload);
                    (f = kn(g)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("m202108030101", Sl, function(a, b) {
        var c = 2012 < D(b, 1, 0) ? "_fy" + D(b, 1, 0) : "";
        I(b, 3);
        var d = I(b, 3).replace(/^\//, "");
        b = I(b, 2);
        var e = a ? wc(xc, a, c) : wc(yc, b, d, c),
            f = wc(zc, b, d);
        return {
            ob: e,
            nb: a ? wc(Ac, a, c) : wc(Bc, b, d, c),
            lb: a ? wc(Cc, a, c) : wc(Dc, b, d, c),
            mb: a ? wc(Ec, a, c) : wc(Fc, b, d, c),
            tb: f,
            sb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20210729\",\"\/r20190131\",null,[],null,null,\".google.co.th\",null,null,[],[[[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1010,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1049,null,null,[1]],[1078,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1074,null,null,[1]],[230,null,null,[1]],[1931,null,null,[1]],[377431981,null,null,[1]],[1945,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[374326588,null,null,[1]],[377105258,null,null,[1]]],[[10,[[10,[[44739547],[44739548,[[1049,null,null,[1]]]]]],[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[1,[[44743411],[44743412,[[null,1072,null,[null,0.75]]]],[44743413,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,100],[1,[[44743414],[44743415,[[null,1072,null,[null,0.75]]]],[44743416,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,120],[1,[[44743417],[44743418,[[null,1072,null,[null,0.75]]]],[44743419,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,140],[1,[[44745298],[44745299,[[1033,null,null,[1]]]],[44745300,[[1033,null,null,[1]]]],[44745301,[[1033,null,null,[1]]]],[44745302,[[1033,null,null,[1]]]],[44745303,[[1033,null,null,[1]]]]]],[10,[[44747620],[44747621,[[1084,null,null,[1]],[1082,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[50,[[31060004,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060005,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]]],[10,[[31060030],[31060031,[[1928,null,null,[1]]]]]],[10,[[31061380],[31061381,[[1073,null,null,[1]]]]]],[10,[[31061485],[31061486,[[1078,null,null,[1]]]]]],[10,[[31061971],[31061972,[[380254521,null,null,[1]]]]]],[1000,[[31061978,[[null,null,14,[null,null,\"31061978\"]]],[6,null,null,null,6,null,\"31060918\"]],[31061979,[[null,null,14,[null,null,\"31061979\"]]],[6,null,null,null,6,null,\"31060919\"]]],[4,null,55]],[50,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]]]],[12,[[1000,[[20211866,[[1064,null,null,[1]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]]]]]],[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,360245595,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[null,[[31061487],[31061488,[[379841917,null,null,[1]],[null,1935,null,[null,200]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[100,[[31062064],[31062065,[[385922407,null,null,[1]]]]]]]],[20,[[null,[[31061694],[31061695,[[380025941,null,null,[1]]]]],null,null,null,null,null,201,null,102]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[1000,[[31060474,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[100,[[31060744],[31060745,[[360245598,null,null,[1]],[null,1927,null,[null,100]]]]],[4,null,9,null,null,null,null,[\"document.interestCohort\"]]],[null,[[31060791,null,[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame_ctrl\"]]],[31060792,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame\"]]]]]]],[13,[[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"31061691\"]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]]],null,null,[0.001,\"1000\"]]]");
