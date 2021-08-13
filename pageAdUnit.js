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
        a.Bb = b.prototype
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
            return h.L = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ka(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.L;
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
                        u: r
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                u: void 0
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
            l.u ? l.u.value = k : (l.u = {
                next: this.h,
                L: this.h.L,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.u), this.h.L.next = l.u, this.h.L = l.u, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.u && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.u.L.next = h.u.next, h.u.next.L = h.u.L, h.u.head = null, this.size--,
                !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.L = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).u
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).u) && h.value
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
            this.D = !1;
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
                h ? this.N(g) : this.v(g)
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
            "function" == typeof h ? this.da(h, g) : this.v(g)
        };
        b.prototype.m = function(g) {
            this.A(2, g)
        };
        b.prototype.v = function(g) {
            this.A(1, g)
        };
        b.prototype.A = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.P();
            this.I()
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
                if (this.D) return !1;
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
        b.prototype.I = function() {
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
            this.D = !0
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
            Array.isArray(a) && a.hb && Ib(d);
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
        hb: {
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
        return A.call(this, a, -1, ac) || this
    }
    u($b, A);

    function bc(a) {
        return A.call(this, a) || this
    }
    u(bc, A);
    var ac = [2, 3];

    function cc(a) {
        return null !== a && void 0 !== a
    }

    function dc(a, b) {
        if (!b(a)) throw Error(String(a));
    };

    function ec(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function fc(a) {
        var b = J.document;
        if (b.currentScript) return ec(b.currentScript, a);
        b = t(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === ec(c.value, a)) return 0;
        return 1
    };
    var K = {},
        gc = (K.google_ad_channel = !0, K.google_ad_client = !0, K.google_ad_host = !0, K.google_ad_host_channel = !0, K.google_adtest = !0, K.google_tag_for_child_directed_treatment = !0, K.google_tag_for_under_age_of_consent = !0, K.google_tag_partner = !0, K.google_restrict_data_processing = !0, K.google_page_url = !0, K.google_debug_params = !0, K.google_adbreak_test = !0, K.google_ad_frequency_hint = !0, K.google_admob_interstitial_slot = !0, K.google_admob_rewarded_slot = !0, K.google_max_ad_content_rating = !0, K);
    var hc = {};

    function ic() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var jc;

    function kc() {
        var a, b;
        if (void 0 === jc) try {
            jc = null !== (b = null === (a = ic()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null
        } catch (c) {
            jc = null, console.log(c)
        }
        return jc
    };

    function lc() {}

    function nc(a, b) {
        if (b !== hc) throw Error("Bad secret");
        this.h = a
    }
    u(nc, lc);
    nc.prototype.toString = function() {
        return this.h.toString()
    };

    function oc(a) {
        var b, c = null === (b = kc()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new nc(null !== c && void 0 !== c ? c : a, hc)
    }

    function pc(a) {
        var b;
        if (null === (b = ic()) || void 0 === b ? 0 : b.isScriptURL(a)) return a;
        if (a instanceof nc) return a.h;
        throw Error("wrong type");
    };

    function qc(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (!Array.isArray(a) || !Array.isArray(a.raw)) throw new TypeError("trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
        if (0 === c.length) return oc(a[0]);
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
        return oc(d.join(""))
    };
    var rc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        sc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/slotcar_library", ".js"]),
        tc = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        uc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        vc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl", ".js"]),
        wc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/",
            "/show_ads_impl_with_ama", ".js"
        ]),
        xc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_with_ama", ".js"]),
        yc = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]),
        zc = la(["https://pagead2.googlesyndication.com/pagead/js/", "/", "/show_ads_impl_instrumented", ".js"]);
    var Ac = document,
        J = window;
    var Bc = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Cc(a, b) {
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

    function Dc(a) {
        return a instanceof lc ? pc(a) : hb(a)
    };

    function Ec(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Fc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Gc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Hc(a) {
        this.h = a || x.document || document
    }
    Hc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Ic() {
        return !Jc() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }

    function Jc() {
        return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    };
    var Kc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Lc = /#|$/;

    function Mc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Bb(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Nc(a, b) {
        var c = a.createElement("script");
        c.src = Dc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        (d = (b = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Oc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Pc(a, b) {
        if (!Qc() && !Rc()) {
            var c = Math.random();
            if (c < b) return c = Sc(x), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Sc(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function Tc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Uc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Rc = Ma(function() {
        return Ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Vc) || 1E-4 > Math.random()
    });

    function Wc(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function Xc(a, b, c) {
        a = Rc() ? null : Math.floor(1E3 * Sc(a));
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
    var Qc = Ma(function() {
        return Vc("MSIE")
    });

    function Vc(a) {
        return -1 != nb.indexOf(a)
    }
    var Yc = /^([0-9.]+)px$/,
        Zc = /^(-?[0-9.]{1,30})$/;

    function $c(a) {
        return Zc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function L(a) {
        return (a = Yc.exec(a)) ? +a[1] : null
    }

    function ad(a, b) {
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
    var bd = Ma(function() {
        return Ic() ? 2 : Jc() ? 1 : 0
    });

    function cd(a) {
        var b = {
            display: "none"
        };
        a.style.setProperty ? Tc(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = dd(ed(fd(a.style.cssText), gd(b, function(c) {
            return c + " !important"
        })))
    }
    var ed = q(Object, "assign") || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function gd(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }

    function dd(a) {
        var b = [];
        Tc(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    }

    function fd(a) {
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
    var hd = [];

    function id() {
        var a = hd;
        hd = [];
        a = t(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function jd(a, b) {
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

    function kd(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function md(a) {
        "complete" === Ac.readyState || "interactive" === Ac.readyState ? (hd.push(a), 1 == hd.length && (p.Promise ? p.Promise.resolve().then(id) : window.setImmediate ? setImmediate(id) : setTimeout(id, 0))) : Ac.addEventListener("DOMContentLoaded", a)
    };

    function nd(a) {
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

    function od(a) {
        return (a = a || nd()) ? Mc(a.master) ? a.master : null : null
    };

    function pd(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        if (c) {
            var e = function(f) {
                c && c(f);
                Fc(d, "load", e);
                Fc(d, "error", e)
            };
            Ec(d, "load", e);
            Ec(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function qd(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Tc(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        rd(c)
    }

    function rd(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : pd(b, a, null)
    };

    function sd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function td(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function ud(a) {
        var b = void 0 === b ? 1 : b;
        a = od(nd(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function vd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var wd = !!window.google_async_iframe_id,
        xd = wd && window.parent || window;

    function yd() {
        if (wd && !Mc(xd)) {
            var a = "." + Ac.domain;
            try {
                for (; 2 < a.split(".").length && !Mc(xd);) Ac.domain = a = a.substr(a.indexOf(".") + 1), xd = window.parent
            } catch (b) {}
            Mc(xd) || (xd = window)
        }
        return xd
    }
    var zd = /(^| )adsbygoogle($| )/;

    function Ad() {
        var a = void 0 === a ? J : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Bd(a) {
        a = a.top;
        return Mc(a) ? a : null
    }

    function Cd(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function Dd(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Ed(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Ed(a) {
        var b = "";
        sd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    var Fd = null;

    function Gd(a) {
        return "string" === typeof a
    }

    function Hd(a) {
        return void 0 === a
    };

    function Id(a) {
        return A.call(this, a, -1, Jd, Kd) || this
    }
    u(Id, A);
    var Jd = [2, 8],
        Kd = [
            [3, 4, 5],
            [6, 7]
        ];
    var Ld;
    Ld = {
        wb: 0,
        Va: 3,
        Wa: 4,
        Xa: 5
    };
    var Md = Ld.Va,
        Nd = Ld.Wa,
        Od = Ld.Xa;

    function Pd(a) {
        return null != a ? !a : a
    }

    function Qd(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Rd(a, b) {
        var c = H(a, Id, 2);
        if (!c.length) return Sd(a, b);
        a = D(a, 1, 0);
        if (1 === a) return Pd(Rd(c[0], b));
        c = Qa(c, function(d) {
            return function() {
                return Rd(d, b)
            }
        });
        switch (a) {
            case 2:
                return Qd(c, !1);
            case 3:
                return Qd(c, !0)
        }
    }

    function Sd(a, b) {
        var c = Qb(a, Kd[0]);
        a: {
            switch (c) {
                case Md:
                    var d = D(a, 3, 0);
                    break a;
                case Nd:
                    d = D(a, 4, 0);
                    break a;
                case Od:
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
                    case Nd:
                        a = Tb(a, 6);
                        break a;
                    case Od:
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
                        return Gd(a) && Gd(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === lb(String(e), a);
                    case 11:
                        return null != e && 1 === lb(String(e), a)
                }
            }
        }
    }

    function Td(a, b) {
        return !a || !(!b || !Rd(a, b))
    };
    var Ud = null;

    function Vd(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Ud) {
                Ud = !1;
                try {
                    var d = Bd(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Ud = !0);
                    x.localStorage.getItem("google_logging") && (Ud = !0)
                } catch (e) {}
            }
            a = Ud
        }
        a && (d = x.document, a = new ab(bb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = ib(a instanceof ab && a.constructor === ab && a.h === cb ? a.i : "type_error:Const"), Nc(d, a))
    };

    function Wd(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Ec(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function Xd() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function Yd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Zd(a, b, c, d, e) {
        var f = [];
        Tc(a, function(g, h) {
            (g = $d(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function $d(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push($d(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Zd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ae(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = be(a) - c.length;
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
                var l = Zd(h[k], a.j, ",$");
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

    function be(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function ce(a, b, c, d, e, f) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof Xd) var g = c;
            else g = new Xd, Tc(c, function(k, l) {
                var m = g,
                    r = m.l++;
                k = Yd(l, k);
                m.h.push(r);
                m.i[r] = k
            });
            var h = ae(g, a.i, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? pd(x, h, void 0 === f ? null : f) : pd(x, h, null))
        } catch (k) {}
    };
    var de = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function ee() {
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
        this.floatingAdsStacking = new fe
    }

    function ge(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new fe) : a.google_reactive_ads_global_state = new ee;
        return a.google_reactive_ads_global_state
    }

    function fe() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function he(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function M(a) {
        return he(a).clientWidth
    };

    function ie(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function je(a) {
        return !!(a.error && a.meta && a.id)
    };
    var ke = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function le(a, b) {
        this.h = a;
        this.i = b
    }

    function me(a, b, c) {
        this.url = a;
        this.Y = b;
        this.Ja = !!c;
        this.depth = null
    };
    var ne = null;

    function oe() {
        if (null === ne) {
            ne = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    ne = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return ne
    };

    function pe() {
        var a = x.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function qe() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function re(a, b) {
        var c = qe() || pe();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var se = x.performance,
        te = !!(se && se.mark && se.measure && se.clearMarks),
        ue = Ma(function() {
            var a;
            if (a = te) a = oe(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function ve() {
        var a = we;
        this.events = [];
        this.i = a || x;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.h = ue() || (null != b ? b : 1 > Math.random())
    }

    function xe(a) {
        a && se && ue() && (se.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), se.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    ve.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new re(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        se && ue() && se.mark(b);
        return a
    };
    ve.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (qe() || pe()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            se && ue() && se.mark(b);
            !this.h || 2048 < this.events.length || this.events.push(a)
        }
    };

    function ye() {
        var a = ze;
        this.m = Ae;
        this.i = null;
        this.l = this.F;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = ye.prototype;
    n.Ra = function(a) {
        this.l = a
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
                xe(d), b = this.l(a, new ie(h, {
                    message: Be(h)
                }), void 0, c)
            } catch (k) {
                this.F(217, k)
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
    n.F = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Xd;
            f.h.push(1);
            f.i[1] = Yd("context", a);
            je(b) || (b = new ie(b, {
                message: Be(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = Yd("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (mc) {}
            if (d) try {
                d(h)
            } catch (mc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if (Mc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new me(l || "", k));
                try {
                    d = k.parent
                } catch (mc) {
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
            var v = new me(x.location.href, x, !1);
            k = null;
            var w = b.length - 1;
            for (r = w; 0 <= r; --r) {
                var z = b[r];
                !k && ke.test(z.url) && (k = z);
                if (z.url && !z.Ja) {
                    v = z;
                    break
                }
            }
            z = null;
            var F = b.length && b[w].url;
            0 != v.depth && F && (z = b[w]);
            var C = new le(v, z);
            if (C.i) {
                var ea = C.i.url || "";
                f.h.push(4);
                f.i[4] = Yd("top", ea)
            }
            var za = {
                url: C.h.url || ""
            };
            if (C.h.url) {
                var ld = C.h.url.match(Kc),
                    zf = ld[1],
                    Af = ld[3],
                    Bf = ld[4];
                v = "";
                zf && (v += zf + ":");
                Af && (v += "//", v += Af, Bf && (v += ":" + Bf));
                var Cf = v
            } else Cf = "";
            za = [za, {
                url: Cf
            }];
            f.h.push(5);
            f.i[5] = za;
            ce(this.m, e, f, this.j, c)
        } catch (mc) {
            try {
                ce(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Be(mc),
                    url: C && C.h.url
                }, this.j, c)
            } catch (ao) {}
        }
        return !0
    };

    function Be(a) {
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

    function N(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, N) : this.stack = Error().stack || ""
    }
    u(N, Error);

    function Ce() {
        this.h = null;
        this.j = !1;
        this.l = Math.random();
        this.i = this.F
    }
    n = Ce.prototype;
    n.qa = function(a) {
        this.h = a
    };
    n.Sa = function(a) {
        this.j = a
    };
    n.Ra = function(a) {
        this.i = a
    };
    n.F = function(a, b, c, d, e) {
        if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        je(b) || (b = new ie(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (Nc(x.document, ib(x.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), x.error_rep_loaded = !0);
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
    var Ae, O, we = yd(),
        ze = new ve;

    function De(a) {
        null != a && (we.google_measure_js_timing = a);
        we.google_measure_js_timing || (a = ze, a.h = !1, a.events != a.i.google_js_reporting_queue && (ue() && Oa(a.events, xe), a.events.length = 0))
    }
    Ae = new function() {
        var a = void 0 === a ? J : a;
        this.i = "http:" === a.location.protocol ? "http:" : "https:";
        this.h = Math.random()
    };
    "number" !== typeof we.google_srt && (we.google_srt = Math.random());
    var Ee = Ae,
        Fe = we.google_srt;
    0 <= Fe && 1 >= Fe && (Ee.h = Fe);
    O = new ye;
    O.qa(function() {});
    O.Sa(!0);
    "complete" == we.document.readyState ? De() : ze.h && Ec(we, "load", function() {
        De()
    });

    function Ge(a, b, c) {
        return O.la(a, b, c)
    }

    function He(a, b) {
        return O.Ma(a, b, void 0, void 0)
    }

    function Ie(a, b, c) {
        ce(Ae, a, b, !0, c, void 0)
    }

    function Je(a, b, c, d) {
        var e;
        je(b) ? e = b.msg || Be(b.error) : e = Be(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof ie ? b.error : b, c.pbr || (c.pbr = !0, O.F(a, b, .1, d, "puberror")), !1) : O.F(a, b, c, d)
    };
    var Ke = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function P(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function Le(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    var Me = new P(1084),
        Ne = new P(1082),
        Oe = new Le(62, .001),
        Pe = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Qe = new Le(1077),
        Re = new P(316),
        Se = new P(313),
        Te = new P(369),
        Ue = new P(1026),
        Ve = new P(1053),
        We = new Le(1046),
        Xe = new P(1049, !0),
        Ye = new P(218),
        Ze = new P(216),
        $e = new P(217),
        af = new P(1002),
        bf = new P(233),
        cf = new P(232),
        df = new P(227),
        ef = new P(208),
        ff = new P(282),
        gf = new Le(1079, 5),
        hf = new P(251),
        jf = new P(1059),
        kf = new P(1936, !0),
        lf = new P(203),
        mf = new P(241),
        nf = new P(84),
        of = new Le(1929, 50),
        pf = new Le(1905),
        qf = new P(240),
        rf = new P(1928),
        sf = new P(1941),
        tf = new P(370946349),
        uf = new P(379841917),
        vf = new Le(1935),
        wf = new P(385922407);

    function Q(a) {
        if (a.pa && a.hasOwnProperty("pa")) return a.pa;
        var b = new a;
        return a.pa = b
    };

    function xf() {
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

    function R(a) {
        return Q(xf).h(a.h, a.defaultValue)
    }

    function yf(a) {
        return Q(xf).i(a.h, a.defaultValue)
    }

    function Df() {
        return Q(xf).j(Pe.h, Pe.defaultValue)
    };

    function Ef(a, b) {
        do {
            var c = Oc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function Ff(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = L(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Gf(a, b) {
        return !((Zc.test(b.google_ad_width) || Yc.test(a.style.width)) && (Zc.test(b.google_ad_height) || Yc.test(a.style.height)))
    }

    function Hf(a, b) {
        return (a = If(a, b)) ? a.y : 0
    }

    function If(a, b) {
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

    function Jf(a) {
        var b = 0,
            c;
        for (c in Ke) - 1 != a.indexOf(c) && (b |= Ke[c]);
        return b
    }

    function Kf(a, b, c, d, e) {
        if (a.top != a) return Bd(a) ? 3 : 16;
        if (!(488 > M(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = M(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = M(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Oc(b, a)) && (e = L(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    } c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Lf(a, b, c, d) {
        var e = Kf(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || Ef(c, b) ? Mf(b) ? a = !0 : (b = M(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Nf(a, b, c) {
        a = a.style;
        "rtl" == b ? R(hf) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : R(hf) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
    }

    function Of(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Oc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Pf(a, b) {
        for (var c = 0; 100 > c && b.parentElement; ++c) {
            for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                var f = d[e];
                if (f != b && Of(a, f)) return
            }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto"
        }
    }

    function Qf(a, b, c) {
        a = If(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Rf(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Oc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Nf(b, c, "0px");
            b.style.width = M(a) + "px";
            if (0 !== Qf(a, b, c)) {
                Nf(b, c, "0px");
                var d = Qf(a, b, c);
                Nf(b, c, -1 * d + "px");
                a = Qf(a, b, c);
                0 !== a && a !== d && Nf(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    }

    function Mf(a) {
        return R(bf) || a.location && "#bffwroe2etoq" == a.location.hash
    };

    function Sf() {
        this.h = {};
        this.i = {}
    }
    Sf.prototype.set = function(a, b) {
        var c = Tf(a);
        this.h[c] = b;
        this.i[c] = a
    };
    Sf.prototype.get = function(a, b) {
        a = Tf(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };

    function Tf(a) {
        return a instanceof Object ? String(Aa(a)) : a + ""
    };

    function Uf() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Vf() {
        var a = new Uf;
        this.promise = a.promise;
        this.resolve = a.resolve
    }

    function Wf(a) {
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp;
        b[7] || (b[7] = new Vf, a && a());
        return b[7]
    }

    function Xf(a) {
        return Wf(function() {
            Nc(x.document, a)
        }).promise
    };

    function Yf(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function S(a) {
        return A.call(this, a, -1, Zf) || this
    }
    u(S, A);
    S.prototype.getId = function() {
        return B(this, 3)
    };
    var Zf = [4];

    function $f(a) {
        return A.call(this, a) || this
    }
    u($f, A);

    function ag(a) {
        return A.call(this, a) || this
    }
    u(ag, A);

    function bg(a) {
        return A.call(this, a) || this
    }
    u(bg, A);

    function cg(a) {
        return A.call(this, a, -1, dg) || this
    }
    u(cg, A);
    var dg = [6, 7, 9, 10, 11];

    function eg(a) {
        return A.call(this, a) || this
    }
    u(eg, A);

    function fg(a) {
        return A.call(this, a) || this
    }
    u(fg, A);

    function gg(a) {
        return A.call(this, a, -1, hg) || this
    }
    u(gg, A);
    var hg = [4];

    function ig(a) {
        return A.call(this, a) || this
    }
    u(ig, A);

    function jg(a) {
        return A.call(this, a, -1, kg, lg) || this
    }
    u(jg, A);
    var kg = [5],
        lg = [
            [1, 2, 3, 6, 7]
        ];

    function mg(a) {
        return A.call(this, a, -1, ng) || this
    }
    u(mg, A);
    mg.prototype.getId = function() {
        return D(this, 1, 0)
    };
    mg.prototype.aa = function() {
        return D(this, 7, 0)
    };
    var ng = [2];

    function og(a) {
        return A.call(this, a, -1, pg) || this
    }
    u(og, A);
    og.prototype.aa = function() {
        return D(this, 5, 0)
    };
    var pg = [2];

    function qg(a) {
        return A.call(this, a, -1, rg) || this
    }
    u(qg, A);

    function sg(a) {
        return A.call(this, a, -1, tg) || this
    }
    u(sg, A);
    sg.prototype.aa = function() {
        return D(this, 1, 0)
    };

    function ug(a) {
        return A.call(this, a) || this
    }
    u(ug, A);
    var rg = [1, 4, 2, 3],
        tg = [2];

    function vg(a) {
        return A.call(this, a, -1, void 0, wg) || this
    }
    u(vg, A);
    var wg = [
        [13, 14]
    ];

    function xg(a, b) {
        this.h = a;
        this.i = b
    }

    function yg(a) {
        return null != a.h ? a.h.value : null
    }

    function zg(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    xg.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof xg ? a : Ag(a)) : this
    };

    function Bg(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function Ag(a) {
        return new xg({
            value: a
        }, null)
    }

    function Cg(a) {
        return new xg(null, a)
    }

    function Dg(a) {
        try {
            return Ag(a())
        } catch (b) {
            return Cg(b)
        }
    };
    var Eg = null;

    function Fg() {
        this.S = {}
    }

    function Gg() {
        if (Hg) return Hg;
        var a = od() || yd(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Hg = b : a.google_persistent_state_async = Hg = new Fg
    }

    function Ig(a) {
        return Jg[a] || "google_ps_" + a
    }

    function Kg(a, b, c) {
        b = Ig(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var Hg = null,
        Lg = {},
        Jg = (Lg[8] = "google_prev_ad_formats_by_region", Lg[9] = "google_prev_ad_slotnames_by_region", Lg);

    function Mg(a) {
        return A.call(this, a) || this
    }
    u(Mg, A);

    function Ng(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Dg(function() {
            return Nb(Mg, c ? JSON.parse(c) : null)
        }) : Ag(null)
    };

    function Og(a) {
        return A.call(this, a) || this
    }
    u(Og, A);

    function Pg(a) {
        var b = new Og;
        return E(b, 5, a)
    };

    function Qg(a) {
        this.h = a || {
            cookie: ""
        }
    }
    Qg.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.zb;
            d = c.Ab || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.xb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    Qg.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = kb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    Qg.prototype.isEmpty = function() {
        return !this.h.cookie
    };

    function T() {
        this.v = this.v;
        this.D = this.D
    }
    T.prototype.v = !1;
    T.prototype.j = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function Rg(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Sg(a, b) {
        b = void 0 === b ? 500 : b;
        T.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.I = 0;
        this.A = b;
        this.l = null
    }
    u(Sg, T);
    Sg.prototype.j = function() {
        this.m = {};
        this.l && (Fc(this.h, "message", this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        T.prototype.j.call(this)
    };

    function Tg(a) {
        return "function" === typeof a.h.__tcfapi || null != Ug(a)
    }
    Sg.prototype.addEventListener = function(a) {
        function b(f, g) {
            clearTimeout(e);
            f ? (c = f, c.internalErrorState = Rg(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        }
        var c = {},
            d = Na(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.A && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.A));
        try {
            Vg(this, "addEventListener", b)
        } catch (f) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
                e = 0), d()
        }
    };
    Sg.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vg(this, "removeEventListener", null, a.listenerId)
    };

    function Vg(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (Ug(a)) {
            Wg(a);
            var e = ++a.I;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function Ug(a) {
        if (a.i) return a.i;
        a.i = ad(a.h, "__tcfapiLocator");
        return a.i
    }

    function Wg(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Ec(a.h, "message", a.l))
    };

    function Xg(a) {
        var b = a.Y,
            c = a.Ta,
            d = a.$a;
        a = Yg({
            Y: b,
            ja: a.ja,
            ha: void 0 === a.ha ? !1 : a.ha,
            ia: void 0 === a.ia ? !1 : a.ia
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Zg(b, c).then(function(e) {
            return e.map($g)
        }).then(function(e) {
            return e.map(function(f) {
                return ah(b, f)
            })
        }).then(d)
    }

    function Yg(a) {
        var b = a.Y,
            c = a.ja,
            d = void 0 === a.ha ? !1 : a.ha;
        if (!(a = !(void 0 === a.ia ? 0 : a.ia) && Tg(new Sg(b)))) {
            if (d = !d) {
                if (c) {
                    c = Ng(b);
                    if (null == c.h) O.F(806, c.i, void 0, void 0), c = !1;
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
        if (!a) return ah(b, Pg(!0));
        c = Gg();
        return (c = Kg(c, 24, void 0)) ? ah(b, $g(c)) : Cg(Error("tcunav"))
    }

    function Zg(a, b) {
        return p.Promise.race([bh(), ch(a, b)])
    }

    function bh() {
        return (new p.Promise(function(a) {
            var b = Gg();
            a = {
                resolve: a
            };
            var c = Kg(b, 25, []);
            c.push(a);
            b.S[Ig(25)] = c
        })).then(dh)
    }

    function ch(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, Cg(Error("tcto")))
        })
    }

    function dh(a) {
        return a ? Ag(a) : Cg(Error("tcnull"))
    }

    function $g(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = Rg(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                    void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && ("DE" === a.publisherCC || R(kf) && "CH" === a.publisherCC) ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return Pg(a)
    }

    function ah(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Rb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Ag(b) : Cg(Error("unav"))
    };
    var eh = void 0;

    function fh() {
        dc(eh, cc);
        return eh
    }

    function gh(a) {
        dc(eh, Hd);
        eh = a
    };

    function hh(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? null : d;
        return ih(a, c, function(e) {
            return Ra(H(e, bc, 2), function(f) {
                return B(f, 1) === b
            })
        }) ? !0 : 1 === b ? jh(c, d) : !1
    }

    function jh(a, b) {
        return b ? null != B(b, 13) ? Sb(G(b, eg, 13), 1) : null != B(b, 14) && "" !== a && I(b, 7) === a ? Sb(G(G(b, fg, 14), eg, 2), 1) : !1 : !1
    }

    function kh(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = Bd(a) || a;
        return lh(d, b) ? !0 : ih(a, c, function(e) {
            return Ra(B(e, 3), function(f) {
                return f === b
            })
        })
    }

    function mh(a) {
        return ih(x, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function lh(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ua(a.split(","), b.toString())
    }

    function ih(a, b, c) {
        a = Bd(a) || a;
        var d = nh(a);
        b && (b = Cd(String(b)));
        return Wa(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function nh(a) {
        a = oh(a);
        var b = {};
        sd(a, function(c, d) {
            try {
                var e = new $b(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function oh(a) {
        return R(Ne) ? (a = Yg({
            Y: a,
            ja: fh()
        }), null != a.h ? (ph("ok"), a = qh(a.h.value)) : (ph(a.i.message), a = {}), a) : qh(a.localStorage)
    }

    function qh(a) {
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

    function ph(a) {
        R(Me) && Ie("abg_adsensesettings_lserr", {
            s: a,
            g: R(Ne),
            c: fh(),
            r: .01
        }, .01)
    };

    function rh(a, b) {
        var c = {};
        this[Md] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(d) {
            return hh(J, parseInt(d, 10))
        }, c[24] = function(d) {
            return kh(J, parseInt(d, 10))
        }, c);
        c = {};
        this[Nd] = (c[7] = function(d) {
            try {
                var e = window.localStorage
            } catch (h) {
                e = null
            }
            var f = d;
            d = window;
            f = void 0 === f ? 0 : f;
            f = 0 != f ? "google_experiment_mod" + f : "google_experiment_mod";
            var g = Wc(e, f);
            e = null === g ? Xc(d, e, f) : g;
            return null != e ? e : void 0
        }, c);
        c = {};
        this[Od] = (c[6] = function() {
            return I(b, 15)
        }, c)
    };

    function U(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function sh(a) {
        a = U(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Da: !0,
            rb: b,
            na: a.ablation_viewport_offset
        } : null
    }

    function th(a) {
        a = U(a);
        a.eids || (a.eids = []);
        return a.eids
    }

    function uh(a, b) {
        a = U(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function vh(a, b) {
        a = U(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function wh(a) {
        U(J).allow_second_reactive_tag = a
    };

    function xh() {
        var a = {};
        this.h = (a[Md] = {}, a[Nd] = {}, a[Od] = {}, a)
    };
    var yh = /^true$/.test("false");

    function zh(a, b) {
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

    function Ah(a, b) {
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
    var Bh = Ma(function() {
        if (!yh) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Ch(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        var e = Bh();
        if (null != e[b]) return e[b];
        b = Dh(d)[b];
        if (!b) return c;
        b = new jg(b);
        b = Eh(b);
        a = Ah(b, a);
        return null != a ? a : c
    }

    function Eh(a) {
        var b = Q(xh).h;
        if (b) {
            var c = Ta(H(a, ig, 5), function(d) {
                return Td(G(d, Id, 1), b)
            });
            if (c) return G(c, gg, 2)
        }
        return G(a, gg, 4)
    }

    function Fh() {
        this.h = {};
        this.i = []
    }

    function Gh(a, b, c) {
        return !!Ch(1, a, void 0 === b ? !1 : b, c)
    }

    function Hh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Ch(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Ih(a, b, c) {
        return Ch(3, a, void 0 === b ? "" : b, c)
    }

    function Jh(a, b, c) {
        b = void 0 === b ? [] : b;
        return Ch(6, a, b, c)
    }

    function Dh(a) {
        return Q(Fh).h[a] || (Q(Fh).h[a] = {})
    }

    function Kh(a, b) {
        var c = Dh(b);
        Tc(a, function(d, e) {
            return c[e] = d
        })
    }

    function Lh(a, b) {
        var c = Dh(b);
        Oa(a, function(d) {
            var e = Qb(d, lg[0]);
            (e = zh(d, e)) && (c[e] = d.toJSON())
        })
    }

    function Mh(a, b) {
        var c = Dh(b);
        Oa(a, function(d) {
            var e = new jg(d),
                f = Qb(e, lg[0]);
            (e = zh(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Nh() {
        return Qa(q(Object, "keys").call(Object, Q(Fh).h), function(a) {
            return Number(a)
        })
    }

    function Oh(a) {
        Ua(Q(Fh).i, a) || Kh(Dh(4), a)
    };

    function V(a) {
        this.methodName = a
    }
    var Ph = new V(1),
        Qh = new V(15),
        Rh = new V(2),
        Sh = new V(3),
        Th = new V(4),
        Uh = new V(5),
        Vh = new V(6),
        Wh = new V(7),
        Xh = new V(8),
        Yh = new V(9),
        Zh = new V(10),
        $h = new V(11),
        ai = new V(12),
        bi = new V(13),
        ci = new V(14);

    function W(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function di(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function ei(a) {
        W(Uh, Gh, a);
        W(Vh, Hh, a);
        W(Wh, Ih, a);
        W(Xh, Jh, a);
        W(bi, Mh, a);
        W(Qh, Oh, a)
    }

    function fi(a) {
        W(Th, function(b) {
            Q(xh).h = b
        }, a);
        W(Yh, function(b, c) {
            var d = Q(xh);
            d.h[Md][b] || (d.h[Md][b] = c)
        }, a);
        W(Zh, function(b, c) {
            var d = Q(xh);
            d.h[Nd][b] || (d.h[Nd][b] = c)
        }, a);
        W($h, function(b, c) {
            var d = Q(xh);
            d.h[Od][b] || (d.h[Od][b] = c)
        }, a);
        W(ci, function(b) {
            for (var c = Q(xh), d = t([Md, Nd, Od]), e = d.next(); !e.done; e = d.next()) e = e.value, q(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function gi(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function hi(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function ii() {
        this.i = function() {};
        this.h = function() {
            return []
        }
    }

    function ji(a, b, c) {
        a.i = function(d) {
            di(Rh, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return di(Sh, b, function() {
                return []
            })(c)
        }
    };

    function ki(a, b) {
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

    function li() {
        var a = {};
        this[Md] = (a[8] = function(b) {
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
            return Ua(Q(ii).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = ki(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a);
        a = {};
        this[Nd] = (a[3] = function() {
            return bd()
        }, a[6] = function(b) {
            b = ki(b, "number");
            return void 0 !==
            b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = x;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Kc)[3] || null) ? decodeURI(c) : c) ? Uc(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[Od] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = ki(b, "string");
            return void 0 !== b ? b : void 0
        }, a)
    };

    function mi(a) {
        return A.call(this, a, -1, ni) || this
    }
    u(mi, A);

    function oi(a, b) {
        a.h || (a.h = {});
        var c = b ? Xb(b) : b;
        a.h[1] = b;
        return E(a, 1, c)
    }

    function pi(a, b) {
        return Wb(a, 2, b)
    }

    function qi(a, b) {
        return E(a, 4, Ib(b || []))
    }

    function ri(a, b) {
        return Wb(a, 5, b)
    }

    function si(a) {
        return A.call(this, a) || this
    }
    u(si, A);
    si.prototype.aa = function() {
        return D(this, 1, 0)
    };

    function ti(a, b) {
        return Ub(a, 1, b)
    }

    function ui(a, b) {
        return Ub(a, 2, b)
    }

    function vi(a) {
        return A.call(this, a, -1, void 0, wi) || this
    }
    u(vi, A);
    var ni = [2, 4, 5],
        wi = [
            [1, 2]
        ];

    function xi(a) {
        return function() {
            return Sc(window) <= a
        }
    }

    function yi(a, b) {
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

    function zi(a, b, c) {
        c = void 0 === c ? yi : c;
        this.h = a;
        this.j = void 0 === b ? "https://pagead2.googlesyndication.com/pagead/ping" : b;
        this.i = c
    };

    function Ai() {
        zi.apply(this, arguments)
    }
    u(Ai, zi);

    function Bi(a, b) {
        try {
            a.h() && a.i(a.j + "?e=1", '[[[{"4":' + Yb(b()) + "}]]]")
        } catch (c) {}
    };

    function Ci(a) {
        return A.call(this, a, -1, void 0, Di) || this
    }
    u(Ci, A);

    function Ei(a) {
        var b = new Ci,
            c = Di[0];
        b.h || (b.h = {});
        var d = a ? Xb(a) : a;
        b.h[4] = a;
        return Vb(b, 4, c, d)
    }
    var Di = [
        [4, 5]
    ];

    function Fi(a) {
        var b = void 0 === b ? new Ai(Ma(xi(0 < a ? 1 / a : 0))) : b;
        this.j = a;
        this.i = b;
        this.h = []
    }

    function Gi(a, b, c, d, e) {
        b = ui(ti(new si, b), c);
        d = pi(oi(ri(qi(new mi, d), e), b), a.h);
        var f = Ei(d);
        Bi(a.i, function() {
            var g = Ub(f, 1, Date.now());
            var h = kd(window);
            g = Ub(g, 2, h);
            return Ub(g, 6, a.j)
        });
        a.h.push(b);
        100 < a.h.length && a.h.shift()
    };
    var Hi = [12, 13, 20];

    function Ii() {}
    Ii.prototype.init = function(a, b, c, d) {
        var e = this;
        c = void 0 === c ? {} : c;
        var f = void 0 === c.Ia ? !1 : c.Ia,
            g = void 0 === c.ib ? {} : c.ib;
        c = void 0 === c.lb ? [] : c.lb;
        d = void 0 === d ? null : d;
        this.j = a;
        this.v = {};
        this.D = f;
        this.l = g;
        a = {};
        this.h = (a[b] = [], a[4] = [], a);
        this.i = {};
        (b = oe()) && Oa(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.i[h] = !0)
        });
        Oa(c, function(h) {
            e.i[h] = !0
        });
        this.m = d;
        return this
    };

    function Ji(a, b, c) {
        if (a.v[b]) return .001 >= Math.random() && qd({
            b: c,
            dp: b
        }, "tagging_dupdiv"), !0;
        a.v[b] = !0;
        return !1
    }

    function Ki(a, b, c) {
        var d = [],
            e = Li(a.j, b);
        if (9 !== b && Ji(a, b, c) || !e.length) {
            var f;
            null == (f = a.m) || Gi(f, b, c, d, []);
            return d
        }
        var g = Ua(Hi, b),
            h = [];
        Oa(e, function(l) {
            var m = new vi;
            if (l = Mi(a, l, c, m)) {
                0 !== Qb(m, wi[0]) && h.push(m);
                m = l.getId();
                d.push(m);
                Ni(a, m, g ? 4 : c);
                var r = H(l, jg, 2);
                r && (g ? Oa(Nh(), function(v) {
                    return Lh(r, v)
                }) : Lh(r, c))
            }
        });
        var k;
        null == (k = a.m) || Gi(k, b, c, d, h);
        return d
    }

    function Ni(a, b, c) {
        a.h[c] || (a.h[c] = []);
        a = a.h[c];
        Ua(a, b) ? qd({
            eids: JSON.stringify(a),
            dup: b
        }, "gpt_dupeid") : a.push(b)
    }

    function Oi(a, b) {
        a.j.push.apply(a.j, ma(Pa(Qa(b, function(c) {
            return new sg(c)
        }), function(c) {
            return !Ua(Hi, c.aa())
        })))
    }

    function Mi(a, b, c, d) {
        var e = Q(xh).h;
        if (!Td(G(b, Id, 3), e)) return null;
        var f = H(b, mg, 2),
            g = f.length * D(b, 1, 0),
            h = D(b, 6, 0);
        if (h) {
            Vb(d, 1, wi[0], h);
            g = e[Nd];
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
            return (b = Pi(b, c)) ? Qi(a, [b], 1) : null
        }
        if (h = D(b, 10, 0)) {
            Vb(d, 2, wi[0], h);
            g = null;
            switch (c) {
                case 1:
                    g = e[Nd][9];
                    break;
                case 2:
                    g = e[Nd][10];
                    break;
                default:
                    return null
            }
            c = g ? g(String(h)) : void 0;
            if (void 0 === c && 1 === D(b, 11, 0)) return null;
            void 0 !== c && Ub(d, 3, c);
            return (b = Pi(b, c)) ? Qi(a, [b],
                1) : null
        }
        d = e ? Pa(f, function(l) {
            return Td(G(l, Id, 3), e)
        }) : f;
        return d.length ? (b = D(b, 4, 0)) ? Ri(a, b, g, d) : Qi(a, d, g / 1E3) : null
    }

    function Ri(a, b, c, d) {
        var e = null != a.l[b] ? a.l[b] : 1E3;
        if (0 >= e) return null;
        d = Qi(a, d, c / e);
        a.l[b] = d ? 0 : e - c;
        return d
    }

    function Qi(a, b, c) {
        var d = a.i,
            e = Sa(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.D ? null : Pc(b, c)
    }

    function Si(a, b) {
        W(Ph, function(c) {
            a.i[c] = !0
        }, b);
        W(Rh, function(c, d) {
            return Ki(a, c, d)
        }, b);
        W(Sh, function(c) {
            return (a.h[c] || []).concat(a.h[4])
        }, b);
        W(ai, function(c) {
            return Oi(a, c)
        }, b)
    }

    function Li(a, b) {
        return (a = Sa(a, function(c) {
            return c.aa() == b
        })) && H(a, og, 2) || []
    }

    function Pi(a, b) {
        var c = H(a, mg, 2),
            d = c.length,
            e = D(a, 1, 0);
        a = D(a, 8, 0);
        b = void 0 !== b ? b : Math.floor(1E3 * Sc(window));
        var f = (b - a) % d;
        if (b < a || b - a - f >= d * e - 1) return null;
        c = c[f];
        d = Q(xh).h;
        return !c || d && !Td(G(c, Id, 3), d) ? null : c
    };

    function Ti() {
        this.h = function() {}
    }

    function Ui(a) {
        Q(Ti).h(a)
    };
    var Vi, Wi;

    function Xi(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? hi() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new Fi(null != (Wi = null == (Vi = G(a, ug, 5)) ? void 0 : D(Vi, 2, 0)) ? Wi : 0) : f;
        d.hasOwnProperty("init-done") ? (di(ai, d)(Qa(H(a, sg, 2), function(g) {
            return g.toJSON()
        })), di(bi, d)(Qa(H(a, jg, 1), function(g) {
            return g.toJSON()
        }), e), b && di(ci, d)(b), Yi(d, e)) : (Si(Q(Ii).init(H(a, sg, 2), e, c, f), d), ei(d), fi(d), gi(d), Yi(d, e), Lh(H(a, jg, 1), e), yh = yh || !(!c || !c.fb), Ui(Q(li)), b && Ui(b))
    }

    function Yi(a, b) {
        a = void 0 === a ? hi() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        ji(Q(ii), c, d);
        Zi(a, b);
        Q(Ti).h = di(ci, a);
        Q(xf).l()
    }

    function Zi(a, b) {
        var c = Q(xf);
        c.h = function(d, e) {
            return di(Uh, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return di(Vh, a, function() {
                return 0
            })(d, e, b)
        };
        c.j = function(d, e) {
            return di(Wh, a, function() {
                return ""
            })(d, e, b)
        };
        c.m = function(d, e) {
            return di(Xh, a, function() {
                return []
            })(d, e, b)
        };
        c.l = function() {
            di(Qh, a)(b)
        }
    };

    function $i(a, b, c) {
        var d = U(a);
        if (d.plle) Yi(hi(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == Wc(d, "goog_pem_mod") && Xc(a, d, "goog_pem_mod");
            d = G(b, qg, 12);
            e = Sb(b, 9);
            Xi(d, new rh(c, b), {
                Ia: e && !!a.google_disable_experiments,
                fb: e
            }, hi(a));
            Q(ii).i(12);
            Q(ii).i(10);
            c = th(a);
            (b = I(b, 10)) && c.push(b);
            a = Bd(a) || a;
            Dd(a.location, "google_mc_lab") && c.push("44738307")
        }
    };

    function aj(a, b) {
        a.qa(function(c) {
            c.shv = String(b);
            c.mjsv = "m202108100101";
            var d = Q(ii).h();
            var e = th(x);
            (d = d.concat(e).join(",")) && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
        })
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

    function Y(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        X.call(this, a, b);
        this.ba = c;
        this.gb = d
    }
    u(Y, X);
    Y.prototype.ma = function() {
        return this.ba
    };
    Y.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function bj(a) {
        return function(b) {
            return !!(b.ba & a)
        }
    };

    function cj(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Oc(a, b)) && e[c] && d(e[c]) || null
    }

    function dj(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function ej(a, b, c, d) {
        var e = a && fj(c, b),
            f = gj(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function hj(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function fj(a, b) {
        return Hf(a, b) < he(b).clientHeight - 100
    }

    function ij(a, b) {
        var c = cj(b, a, "height", L);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = cj(b, a, "height", L);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && L(b.style.height)) && (c = Math.min(c, d)), (d = cj(b, a, "maxHeight", L)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function gj(a, b) {
        var c = 0 == vd(a);
        return b && c ? Math.max(250, 2 * he(a).clientHeight / 3) : 250
    };
    var jj = Bb("script");

    function kj(a, b, c, d, e, f, g, h, k, l, m, r) {
        this.v = a;
        this.R = b;
        this.ba = void 0 === c ? null : c;
        this.i = void 0 === d ? null : d;
        this.O = void 0 === e ? null : e;
        this.h = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.I = void 0 === h ? null : h;
        this.M = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.N = void 0 === r ? null : r;
        this.P = this.A = this.D = null
    }
    kj.prototype.size = function() {
        return this.R
    };

    function lj(a, b, c) {
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
            c.google_responsive_auto_format = a.v;
            null != a.i && (c.armr = a.i);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.h && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.I && (c.gfwroml = a.I);
        null != a.M && (c.gfwromr = a.M);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.N && (c.gfwroz = a.N);
        null != a.D && (c.gml = a.D);
        null != a.A && (c.gmr = a.A);
        null != a.P && (c.gzi = a.P);
        b = yd();
        b = Bd(b) || b;
        Dd(b.location, "google_responsive_slot_debug") &&
        (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.h || !0 !== a.j ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        Dd(b.location, "google_responsive_dummy_ad") && (Ua([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.i) && 2 !== a.i && (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = "<" + jj + ">window.top.postMessage('" + a + "', '*');\n          </" + jj + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' +
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
    var mj = {},
        nj = (mj.image_stacked = 1 / 1.91, mj.image_sidebyside = 1 / 3.82, mj.mobile_banner_image_sidebyside = 1 / 3.82, mj.pub_control_image_stacked = 1 / 1.91, mj.pub_control_image_sidebyside = 1 / 3.82, mj.pub_control_image_card_stacked = 1 / 1.91, mj.pub_control_image_card_sidebyside = 1 / 3.74, mj.pub_control_text = 0, mj.pub_control_text_card = 0, mj),
        oj = {},
        pj = (oj.image_stacked = 80, oj.image_sidebyside = 0, oj.mobile_banner_image_sidebyside = 0, oj.pub_control_image_stacked = 80, oj.pub_control_image_sidebyside = 0, oj.pub_control_image_card_stacked =
            85, oj.pub_control_image_card_sidebyside = 0, oj.pub_control_text = 80, oj.pub_control_text_card = 80, oj),
        qj = {},
        rj = (qj.pub_control_image_stacked = 100, qj.pub_control_image_sidebyside = 200, qj.pub_control_image_card_stacked = 150, qj.pub_control_image_card_sidebyside = 250, qj.pub_control_text = 100, qj.pub_control_text_card = 150, qj);

    function sj(a) {
        var b = 0;
        a.K && b++;
        a.G && b++;
        a.H && b++;
        if (3 > b) return {
            J: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.K.split(",");
        var c = a.H.split(",");
        a = a.G.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            J: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            J: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (isNaN(g) || 0 === g) return {
                J: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {
                J: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            H: d,
            G: e,
            La: b
        }
    }

    function tj(a) {
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
    var uj = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function vj(a, b) {
        X.call(this, a, b)
    }
    u(vj, X);
    vj.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function wj(a, b) {
        xj(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new kj(9, new vj(a, Math.floor(a * b.google_phwr)));
        var c = Ic();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * nj.mobile_banner_image_sidebyside + pj.mobile_banner_image_sidebyside) + 96), a = {
            X: a,
            V: c,
            G: 1,
            H: 12,
            K: "mobile_banner_image_sidebyside"
        }) : (a = tj(a), a = {
            X: a.width,
            V: a.height,
            G: 1,
            H: 13,
            K: "image_sidebyside"
        }) : (a = tj(a), a = {
            X: a.width,
            V: a.height,
            G: 4,
            H: 2,
            K: "image_stacked"
        });
        yj(b, a);
        return new kj(9, new vj(a.X, a.V))
    }

    function zj(a, b) {
        xj(a, b);
        var c = sj({
            H: b.google_content_recommendation_rows_num,
            G: b.google_content_recommendation_columns_num,
            K: b.google_content_recommendation_ui_type
        });
        if (c.J) a = {
            X: 0,
            V: 0,
            G: 0,
            H: 0,
            K: "image_stacked",
            J: c.J
        };
        else {
            var d = 2 === c.La.length && 468 <= a ? 1 : 0;
            var e = c.La[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = rj[e];
            for (var g = c.G[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.H[d];
            d = Math.floor(((a - 8 * f - 8) / f * nj[e] + pj[e]) * c + 8 * c + 8);
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
                K: e,
                J: a.ra
            } : {
                X: a.width,
                V: a.height,
                G: f,
                H: c,
                K: e
            }
        }
        if (a.J) throw new N(a.J);
        yj(b, a);
        return new kj(9, new vj(a.X, a.V))
    }

    function xj(a, b) {
        if (0 >= a) throw new N("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function yj(a, b) {
        a.google_content_recommendation_ui_type = b.K;
        a.google_content_recommendation_columns_num = b.G;
        a.google_content_recommendation_rows_num = b.H
    };

    function Aj(a, b) {
        X.call(this, a, b)
    }
    u(Aj, X);
    Aj.prototype.h = function() {
        return this.minWidth()
    };
    Aj.prototype.i = function(a, b, c) {
        Rf(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var Bj = {
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

    function Cj(a, b) {
        X.call(this, a, b)
    }
    u(Cj, X);
    Cj.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function Dj(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = Kf(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g;
            else if (g = M(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (Pf(b, c), Rf(b, c), a = g)
        }
        if (250 > a) throw new N("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" +
                f);
            return new kj(11, new X(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new N("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new N("Invalid height: height=" + f);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new N("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new kj(11, new X(a, f))
        }
        d = Bj[f];
        if (!d) throw new N("Invalid data-ad-layout value: " + f);
        c = fj(c, b);
        b = M(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new kj(11, "in-article" == f ? new Cj(a, b) : new X(a, b))
    };

    function Ej(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Fj(a, b) {
        for (var c = Gj.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        Gj = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];

    function Hj(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            B: a,
            C: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || Ij(b) || e.google_ad_resize ? (488 > M(c) && (Mf(c) || R(af)) && Pf(c, d), b = Lf(a, c, d, e), c = !0 !== b ? {
            B: a,
            C: b
        } : {
            B: M(c) || a,
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

    function Jj(a, b, c, d, e) {
        var f = Ge(247, function() {
                return Hj(a, b, c, d, e)
            }),
            g = f.B;
        f = f.C;
        var h = !0 === f,
            k = L(d.style.width),
            l = L(d.style.height),
            m = Kj(g, b, c, d, e, h);
        g = m.W;
        h = m.T;
        var r = m.ma;
        m = m.Ka;
        var v = Lj(b, r),
            w, z = (w = cj(d, c, "marginLeft", L)) ? w + "px" : "",
            F = (w = cj(d, c, "marginRight", L)) ? w + "px" : "";
        w = cj(d, c, "zIndex") || "";
        return new kj(v, g, r, null, m, f, h, z, F, l, k, w)
    }

    function Ij(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Kj(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, M(c)) ? 4 : 3 : Jf(b);
        var g = !1,
            h = !1;
        if (488 > M(c)) {
            var k = Ef(d, c);
            var l = fj(d, c);
            g = !l && k;
            h = l && k
        }
        l = 488 > M(c);
        var m = [dj(a), bj(b)];
        Mf(c) || m.push(ej(l, c, d, h));
        null != e.google_max_responsive_height && m.push(hj(e.google_max_responsive_height));
        var r = [function(w) {
            return !w.gb
        }];
        !g && !h || Mf(c) || (g = ij(c, d), r.push(hj(g)));
        var v = l && !f && 3 === b && Mj(c) ? new Y(a, Math.floor(a / 1.2), 1) : Fj(Ej(m), Ej(r));
        if (!v) throw new N("No slot size for availableWidth=" + a);
        l = Ge(248, function() {
            var w;
            a: if (f) {
                if (e.gfwrnh && (w = L(e.gfwrnh))) {
                    w = {
                        W: new Aj(a, w),
                        T: !0
                    };
                    break a
                }
                w = a / 1.2;
                if (Mf(c)) var z = w;
                else {
                    z = Math;
                    var F = z.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var C = Infinity;
                    else {
                        C = d;
                        var ea = Infinity;
                        do {
                            var za = cj(C, c, "height", L);
                            za && (ea = Math.min(ea, za));
                            (za = cj(C, c, "maxHeight", L)) && (ea = Math.min(ea, za))
                        } while ((C = C.parentElement) && "HTML" != C.tagName);
                        C = ea
                    }
                    z = F.call(z, w, C);
                    if (z < .5 * w || 100 > z) z = w
                }
                R(ff) && !fj(d, c) && (z = Math.max(z, .5 * he(c).clientHeight));
                w = {
                    W: new Aj(a, Math.floor(z)),
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
        return "in-article" === e.google_ad_layout && Nj(c) ? {
            W: Oj(a, c, d, g, e),
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

    function Lj(a, b) {
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

    function Oj(a, b, c, d, e) {
        var f = e.google_ad_height || cj(c, b, "height", L);
        b = Dj(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new Y(b.minWidth(), b.height(), 1) : d
    }

    function Nj(a) {
        return R(df) || a.location && "#hffwroe2etoq" == a.location.hash
    }

    function Mj(a) {
        return R(cf) || a.location && "#affwroe2etoq" == a.location.hash
    };

    function Pj(a, b, c, d, e) {
        var f;
        (f = M(b)) ? 488 > M(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Rf(b, c), f = {
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
        if (!0 !== g || a == f) return new kj(12, new X(a, d), null, null, !0, g, 100);
        a = Kj(f, "auto", b, c, e, !0);
        return new kj(1, a.W, a.ma, 2, !0, g, a.T)
    };

    function Qj(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = t(uj), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        } b = !1
            }
            return b ? 9 : 5
        }
        if (Ij(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = R(ef) || R(df) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (Rj(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return Rj(b), 1
    }

    function Sj(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && cj(b, d, "width", L) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = Tj(a, e, b, c, d)) ? f : Jj(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        lj(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function Tj(a, b, c, d, e) {
        var f = d.google_ad_height || cj(c, e, "height", L);
        switch (a) {
            case 5:
                return f = Ge(247, function() {
                    return Hj(b, d.google_ad_format, e, c, d)
                }), a = f.B, f = f.C, !0 === f && b != a && Rf(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), wj(a, d);
            case 9:
                return zj(b, d);
            case 8:
                return Dj(b, e, c, f, d);
            case 10:
                return Pj(b, e, c, f, d)
        }
    }

    function Rj(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function Uj(a) {
        this.l = [];
        this.i = a || window;
        this.h = 0;
        this.j = null;
        this.m = 0
    }
    var Vj;
    n = Uj.prototype;
    n.bb = function(a, b) {
        0 != this.h || 0 != this.l.length || b && b != window ? this.Ha(a, b) : (this.h = 2, this.Qa(new Wj(a, window)))
    };
    n.Ha = function(a, b) {
        this.l.push(new Wj(a, b || this.i));
        Xj(this)
    };
    n.kb = function(a) {
        this.h = 1;
        if (a) {
            var b = He(188, Fa(this.Pa, this, !0));
            this.j = this.i.setTimeout(b, a)
        }
    };
    n.Pa = function(a) {
        a && ++this.m;
        1 == this.h && (null != this.j && (this.i.clearTimeout(this.j), this.j = null), this.h = 0);
        Xj(this)
    };
    n.sb = function() {
        return !(!window || !Array)
    };
    n.cb = function() {
        return this.m
    };

    function Xj(a) {
        var b = He(189, Fa(a.tb, a));
        a.i.setTimeout(b, 0)
    }
    n.tb = function() {
        if (0 == this.h && this.l.length) {
            var a = this.l.shift();
            this.h = 2;
            var b = He(190, Fa(this.Qa, this, a));
            a.Y.setTimeout(b, 0);
            Xj(this)
        }
    };
    n.Qa = function(a) {
        this.h = 0;
        a.h()
    };

    function Yj(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function Zj() {
        if (Vj && Yj(Vj)) return Vj;
        var a;
        if (!Eg) {
            for (var b = a = x, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, Mc(a)) b = a;
                else break;
            Eg = b
        }
        a = Eg;
        return (b = a.google_jobrunner) && ("object" === typeof b || "function" === typeof b) && Yj(b) && td(b.nq) && td(b.nqa) && td(b.al) && td(b.rl) ? Vj = b : a.google_jobrunner = Vj = new Uj(a)
    }

    function ak(a, b) {
        Zj().nq(a, b)
    }

    function bk(a, b) {
        Zj().nqa(a, b)
    }
    Uj.prototype.nq = Uj.prototype.bb;
    Uj.prototype.nqa = Uj.prototype.Ha;
    Uj.prototype.al = Uj.prototype.kb;
    Uj.prototype.rl = Uj.prototype.Pa;
    Uj.prototype.sz = Uj.prototype.sb;
    Uj.prototype.tc = Uj.prototype.cb;

    function Wj(a, b) {
        this.h = a;
        this.Y = b
    };
    var ck = "undefined" === typeof sttc ? void 0 : sttc;

    function dk(a) {
        try {
            return dc(a, Gd), new vg(JSON.parse(a))
        } catch (b) {
            O.F(838, b instanceof Error ? b : Error(String(b)), void 0, function(c) {
                c.jspb = String(a)
            })
        }
        return new vg
    };

    function ek(a, b, c) {
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
    var fk = {},
        gk = (fk.google_ad_modifications = !0, fk.google_analytics_domain_name = !0, fk.google_analytics_uacct = !0, fk.google_pause_ad_requests = !0, fk.google_user_agent_client_hint = !0, fk);

    function hk(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
    }

    function ik(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
        return null
    }

    function jk(a) {
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

    function kk() {
        this.i = new lk(this);
        this.h = 0
    }
    kk.prototype.resolve = function(a) {
        mk(this);
        this.h = 1;
        this.l = a;
        nk(this.i)
    };
    kk.prototype.reject = function(a) {
        mk(this);
        this.h = 2;
        this.j = a;
        nk(this.i)
    };

    function mk(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function lk(a) {
        this.h = a
    }
    lk.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        nk(this)
    };

    function nk(a) {
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

    function ok(a) {
        this.h = a.slice(0)
    }
    ok.prototype.apply = function(a) {
        return new ok(a(this.h.slice(0)))
    };
    ok.prototype.get = function(a) {
        return this.h[a]
    };
    ok.prototype.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new ok(b)
    };

    function pk(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function qk(a) {
        this.h = new Sf;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    qk.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    qk.prototype.contains = function(a) {
        return void 0 !== this.h.h[Tf(a)]
    };

    function rk() {
        this.h = new Sf
    }
    rk.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new qk, this.h.set(a, c));
        c.add(b)
    };

    function sk(a) {
        var b = void 0 === a.Ea ? void 0 : a.Ea,
            c = void 0 === a.eb ? void 0 : a.eb,
            d = void 0 === a.Oa ? void 0 : a.Oa;
        this.h = void 0 === a.Za ? void 0 : a.Za;
        this.l = new ok(b || []);
        this.j = d;
        this.i = c
    };

    function tk(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            U: "a",
            $: uk(c)
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

    function uk(a) {
        a = a.h.slice(0).map(vk);
        a = JSON.stringify(a);
        return Uc(a)
    }

    function vk(a) {
        var b = {};
        null != B(a, 7) && (b.q = B(a, 7));
        null != B(a, 2) && (b.o = B(a, 2));
        null != B(a, 5) && (b.p = B(a, 5));
        return b
    };

    function wk(a, b) {
        this.Ga = a;
        this.Na = b
    }

    function xk(a) {
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
        return new wk(c, d)
    }

    function yk(a) {
        switch (a) {
            case 1:
                return new wk(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new wk(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new wk(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new wk(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function zk(a) {
        if (null == a) a = null;
        else {
            var b = tk(a);
            a = [];
            b = t(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.$);
                a.push(c.U + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new wk(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var Ak = {},
        Bk = new wk(["google-auto-placed"], (Ak.google_reactive_ad_format = 40, Ak.google_tag_origin = "qs", Ak));

    function Ck(a) {
        return A.call(this, a, -1, void 0, Dk) || this
    }
    u(Ck, A);

    function Ek(a) {
        return A.call(this, a) || this
    }
    u(Ek, A);

    function Fk(a) {
        return A.call(this, a) || this
    }
    u(Fk, A);

    function Gk(a) {
        return A.call(this, a) || this
    }
    u(Gk, A);
    var Dk = [
        [1, 2, 3]
    ];

    function Hk(a) {
        return A.call(this, a, -1, Ik) || this
    }
    u(Hk, A);

    function Jk(a) {
        return A.call(this, a, -1, void 0, Kk) || this
    }
    u(Jk, A);

    function Lk(a) {
        return A.call(this, a) || this
    }
    u(Lk, A);
    var Ik = [1],
        Kk = [
            [1, 2]
        ];

    function Mk(a) {
        return A.call(this, a, -1, Nk) || this
    }
    u(Mk, A);

    function Ok(a) {
        return A.call(this, a) || this
    }
    u(Ok, A);

    function Pk(a) {
        return A.call(this, a, -1, Qk) || this
    }
    u(Pk, A);

    function Rk(a) {
        return A.call(this, a) || this
    }
    u(Rk, A);

    function Sk(a) {
        return A.call(this, a) || this
    }
    u(Sk, A);

    function Tk(a) {
        return A.call(this, a) || this
    }
    u(Tk, A);
    var Nk = [1, 2, 5, 7],
        Qk = [2, 5, 6, 11];

    function Uk(a) {
        return A.call(this, a) || this
    }
    u(Uk, A);

    function Vk(a) {
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

    function Wk(a, b, c) {
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
        Vk(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Xk(a, b, c) {
        function d(f) {
            f = Yk(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Yk(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Zk(a.previousSibling, e), ga: function(f) {
                        return Zk(f.previousSibling, e)
                    }, ka: 0
                };
            case 2:
                return {
                    init: Zk(a.lastChild, e), ga: function(f) {
                        return Zk(f.previousSibling, e)
                    }, ka: 0
                };
            case 3:
                return {
                    init: Zk(a.nextSibling, d), ga: function(f) {
                        return Zk(f.nextSibling, d)
                    }, ka: 3
                };
            case 1:
                return {
                    init: Zk(a.firstChild, d), ga: function(f) {
                        return Zk(f.nextSibling, d)
                    }, ka: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Yk(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Zk(a, b) {
        return a && b(a) ? a : null
    };

    function $k(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Ab(d.yb);
            a[e] = d.value
        }
    };

    function al(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function bl(a, b) {
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
        b = cl(a, b);
        "number" === typeof a.i && (c = a.i, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.j) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = dl(b[d]);
                var f = a.j;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    al.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function cl(a, b) {
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

    function dl(a) {
        var b = [];
        pk(a.getElementsByTagName("p"), function(c) {
            100 <= el(c) && b.push(c)
        });
        return b
    }

    function el(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        pk(a.childNodes, function(c) {
            b += el(c)
        });
        return b
    }

    function fl(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function gl(a) {
        if (!a) return null;
        var b = B(a, 7);
        if (B(a, 1) || a.getId() || 0 < B(a, 4).length) {
            var c = a.getId(),
                d = B(a, 1),
                e = B(a, 4);
            b = B(a, 2);
            var f = B(a, 5);
            a = hl(B(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + fl(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + fl(e[c]);
            b = (e = g) ? new al(e, b, f, a) : null
        } else b = b ? new al(b, B(a, 2), B(a, 5), hl(B(a, 6))) : null;
        return b
    }
    var il = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function hl(a) {
        return null == a ? a : il[a]
    }
    var jl = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function kl(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function ll(a) {
        a = kl(a);
        return a.optimization = a.optimization || {}
    };

    function ml(a) {
        switch (B(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = G(a, S, 1), null == b ? b = null : (a = B(a, 2), b = null == a ? null : new sk({
                    Ea: [b],
                    Oa: a
                }));
                return null != b ? Ag(b) : Cg(Error("Missing dimension when creating placement id"));
            case 3:
                return Cg(Error("Missing dimension when creating placement id"));
            default:
                return Cg(Error("Invalid type: " + B(a, 8)))
        }
    };

    function nl(a, b) {
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

    function ol(a, b) {
        this.i = a;
        this.h = b
    }

    function pl(a, b) {
        var c = new rk,
            d = new qk;
        b.forEach(function(e) {
            if (G(e, Ek, 1)) {
                e = G(e, Ek, 1);
                if (G(e, $f, 1) && G(G(e, $f, 1), S, 1) && G(e, $f, 2) && G(G(e, $f, 2), S, 1)) {
                    var f = ql(a, G(G(e, $f, 1), S, 1)),
                        g = ql(a, G(G(e, $f, 2), S, 1));
                    if (f && g)
                        for (f = t(nl({
                            anchor: f,
                            position: B(G(e, $f, 1), 2)
                        }, {
                            anchor: g,
                            position: B(G(e, $f, 2), 2)
                        })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Aa(g.anchor), g.position)
                }
                G(e, $f, 3) && G(G(e, $f, 3), S, 1) && (f = ql(a, G(G(e, $f, 3), S, 1))) && c.set(Aa(f), B(G(e, $f, 3), 2))
            } else G(e, Fk, 2) ? rl(a, G(e, Fk, 2), c) : G(e, Gk, 3) && sl(a, G(e,
                Gk, 3), d)
        });
        return new ol(c, d)
    }

    function rl(a, b, c) {
        G(b, S, 1) && (a = tl(a, G(b, S, 1))) && a.forEach(function(d) {
            d = Aa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function sl(a, b, c) {
        G(b, S, 1) && (a = tl(a, G(b, S, 1))) && a.forEach(function(d) {
            c.add(Aa(d))
        })
    }

    function ql(a, b) {
        return (a = tl(a, b)) && 0 < a.length ? a[0] : null
    }

    function tl(a, b) {
        return (b = gl(b)) ? bl(b, a) : null
    };

    function ul(a, b) {
        if (!a) return !1;
        a = Oc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function vl(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function wl(a) {
        return !!a.nextSibling || !!a.parentNode && wl(a.parentNode)
    };

    function xl(a, b) {
        return a && null != B(a, 4) && b[B(G(a, bg, 4), 2)] ? !1 : !0
    }

    function yl(a) {
        var b = {};
        a && B(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function zl(a, b, c, d, e) {
        this.h = a;
        this.A = b;
        this.j = c;
        this.m = e || null;
        this.v = (this.D = d) ? pl(a.document, H(d, Ck, 5)) : pl(a.document, []);
        this.i = 0;
        this.l = !1
    }

    function Al(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = H(a.j, cg, 1);
        a.i = 0;
        var d = yl(a.D);
        try {
            var e = a.h.localStorage.getItem("google_ama_settings");
            var f = e ? Nb(Uk, e ? JSON.parse(e) : null) : null
        } catch (m) {
            f = null
        }
        if (null !== f && Sb(f, 2, !1)) return kl(a.h).eatf = !0, Vd(7, [!0, 0, !1]), !0;
        f = new qk([2]);
        for (e = 0; e < c.length; e++) {
            var g = a;
            var h = c[e],
                k = e,
                l = b;
            if (G(h, bg, 4) && f.contains(B(G(h, bg, 4), 1)) && 1 === B(h, 8) && xl(h, d)) {
                g.i++;
                if (h = Bl(g, h, l, d)) l = kl(g.h), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++,
                    l.placed.push({
                        index: k,
                        element: h.ea
                    }), Vd(7, [!1, g.i, !0]);
                g = h
            } else g = null;
            if (g) return !0
        }
        Vd(7, [!1, a.i, !1]);
        return !1
    }

    function Bl(a, b, c, d) {
        if (!xl(b, d) || 1 != B(b, 8)) return null;
        d = G(b, S, 1);
        if (!d) return null;
        d = gl(d);
        if (!d) return null;
        d = bl(d, a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = B(b, 2);
        e = jl[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = ul(vl(d), f);
                        break a;
                    case 3:
                        f = ul(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = ul(g ? 1 == g.nodeType ? g : vl(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !wl(d))) c = 1 == e || 2 == e ? d : d.parentNode,
                c = !(c && !Vk(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.v;
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
        c = G(b, ag, 3);
        f = {};
        c && (f.Ua = B(c, 1), f.Fa = B(c, 2), f.clearBoth = !!Rb(c, 3));
        c = G(b, bg, 4) && B(G(b, bg, 4), 2) ? B(G(b, bg, 4), 2) : null;
        c = yk(c);
        g = null == B(b, 12) ? null : B(b, 12);
        g = null == g ? null : new wk(null, {
            google_ml_rank: g
        });
        b = Cl(a, b);
        b = xk(a.m, c, g, b);
        c = a.h;
        a = a.A;
        var h = c.document,
            k = f.clearBoth ||
                !1;
        g = Gc((new Hc(h)).h, "DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.jb && $k(k, f.jb);
        h = Gc((new Hc(h)).h, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Ua && (k.marginTop = f.Ua);
        f.Fa && (k.marginBottom = f.Fa);
        f.Ya && $k(k, f.Ya);
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
                if (R(Se)) {
                    r = void 0 === r ? 0 : r;
                    var v = Xk(d, e, r);
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
                    Wk(m, z.anchor, z.position)
                } else Wk(m, d, e);
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
                (F = f.oa) && F.parentNode && (C = F.parentNode, C.removeChild(F), Vk(C) && (C.style.display = C.getAttribute("data-init-display") || "none"));
                F = !1;
                break a
            }
            F = !0
        }
        return F ? f : null
    }

    function Cl(a, b) {
        return yg(Bg(ml(b).map(zk), function(c) {
            kl(a.h).exception = c
        }))
    };

    function Dl(a) {
        if (R(Re)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Nb(Mk, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function El(a) {
        this.exception = a
    }

    function Fl(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    Fl.prototype.start = function() {
        this.l()
    };
    Fl.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    Al(this.h, !0);
                    Gl(this);
                    break;
                default:
                    Al(this.h, !1) ? Gl(this) : this.j.setTimeout(Fa(this.l, this), 100)
            }
        } catch (a) {
            Gl(this, a)
        }
    };

    function Gl(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            kl(e.h);
            H(e.j, cg, 1);
            d.call(c, new El(b))
        } catch (f) {
            a.i.reject(f)
        }
    };

    function Hl(a) {
        return A.call(this, a, -1, Il) || this
    }
    u(Hl, A);
    var Il = [6];

    function Jl(a) {
        return A.call(this, a) || this
    }
    u(Jl, A);

    function Kl(a) {
        return A.call(this, a) || this
    }
    u(Kl, A);

    function Ll(a) {
        return A.call(this, a) || this
    }
    u(Ll, A);

    function Ml(a) {
        a = (new Qg(a)).get("FCCDCF", "");
        try {
            return a ? Nb(Jl, a ? JSON.parse(a) : null) : null
        } catch (b) {
            return null
        }
    }

    function Nl(a) {
        return (a = Ml(a)) ? G(a, Kl, 4) : null
    };

    function Ol(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var e = Gc(d.h, "IFRAME");
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
            d = a ? new Hc(9 == a.nodeType ? a : a.ownerDocument || a.document) : Ka || (Ka = new Hc);
        b()
    };

    function Pl(a) {
        this.h = a;
        this.i = a.document;
        this.j = (a = (a = Ml(this.i)) ? G(a, Ll, 5) || null : null) ? B(a, 2) : null;
        (a = Nl(this.i)) && null != B(a, 1) && B(a, 1);
        (a = Nl(this.i)) && null != B(a, 2) && B(a, 2)
    }

    function Ql() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new Pl(a), Rl(a))
    }

    function Rl(a) {
        !a.j || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Ol(a.h), Ha(function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.l.apply(a, ma(c))
        }))
    }
    Pl.prototype.l = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.j
        }, !0)
    };

    function Sl(a) {
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

    function Tl(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function Ul(a, b) {
        a = Tl(Sl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Uc(a),
            d = Vl(a);
        return q(b, "find").call(b, function(e) {
            var f = null != B(e, 7) ? B(G(e, Rk, 7), 1) : B(e, 1);
            e = null != B(e, 7) ? B(G(e, Rk, 7), 2) : 2;
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

    function Vl(a) {
        for (var b = {};;) {
            b[Uc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Wl = {},
        Xl = (Wl.google_ad_channel = !0, Wl.google_ad_host = !0, Wl);

    function Yl(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        Ie("ama", b, .01)
    }

    function Zl(a) {
        var b = {};
        Tc(Xl, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function $l(a) {
        a = G(a, Ok, 3);
        return !a || B(a, 1) <= Date.now() ? !1 : !0
    }

    function am(a) {
        return (a = Dl(a)) ? $l(a) ? a : null : null
    }

    function bm(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            Yl(a, {
                lserr: 1
            })
        }
    };

    function cm(a) {
        Yl(a, {
            atf: 1
        })
    }

    function dm(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Yl(a, {
            atf: 0
        })
    };

    function em(a) {
        var b = kh(x, 12, a.google_ad_client);
        a = "google_ad_host" in a;
        var c = .5 > Math.random(),
            d = Dd(x.location, "google_ads_preview");
        return b && !a && c || d
    }

    function fm(a) {
        if (x.google_apltlad || x.top != x || !a.google_ad_client) return null;
        var b = em(a);
        x.google_apltlad = !0;
        var c = Yf(a.google_ad_client),
            d = c.enable_page_level_ads;
        Tc(a, function(e, f) {
            gc[f] && "google_ad_client" !== f && (d[f] = e)
        });
        if (b) d.google_ad_channel = "AutoInsertAutoAdCode";
        else if (d.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) d.google_ad_section = a.google_ad_section || a.google_ad_region;
        return c
    }

    function gm(a) {
        return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function hm(a, b) {
        this.h = x;
        this.j = a;
        this.i = b
    }

    function im(a) {
        Xg({
            Y: a.h,
            ja: a.i,
            Ta: 50,
            $a: function(b) {
                return jm(a, b)
            }
        })
    }

    function jm(a, b) {
        Bg(zg(b, function(c) {
            km("ok");
            lm(a.h, a.j, c)
        }), function(c) {
            return km(c.message)
        })
    }

    function km(a) {
        Ie("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function lm(a, b, c) {
        if (!U(J).ama_ran_on_page) {
            var d = am(c);
            if (d) {
                if (null != B(d, 24)) {
                    c = ll(a);
                    c.availableAbg = !0;
                    var e, f;
                    c.ablationFromStorage = !!(null == (e = G(d, Hk, 24)) ? 0 : null == (f = G(e, Jk, 3)) ? 0 : G(f, Lk, 2))
                }
                if (gm(b) && (e = Ul(a, H(d, Pk, 7)), !e || !Rb(e, 8))) return;
                U(J).ama_ran_on_page = !0;
                if ((e = G(d, Sk, 13)) && 1 === B(e, 1)) {
                    var g = 0,
                        h = G(e, Tk, 6);
                    h && B(h, 3) && (g = B(h, 3) || 0);
                    vh(a, g)
                } else if (null == (g = G(d, Hk, 24)) ? 0 : null == (h = G(g, Jk, 3)) ? 0 : G(h, Lk, 2)) ll(a).ablatingThisPageview = !0, vh(a, 1);
                Vd(3, [d.toJSON()]);
                var k = b.google_ad_client || "";
                b = Zl(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
                var l = xk(Bk, new wk(null, b));
                Ge(782, function() {
                    var m = l;
                    try {
                        var r = Ul(a, H(d, Pk, 7)),
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
                                var F = new wk(null, (v.google_package = B(r, 4), v));
                                m = xk(m, F)
                            }
                            var C = new zl(a, k, d, r, m),
                                ea = new kk;
                            (new Fl(a, C, ea)).start();
                            ea.i.then(Ga(cm, a), Ga(dm, a))
                        }
                    } catch (za) {
                        Yl(a, {
                            atf: -1
                        })
                    }
                })
            } else bm(a, c)
        }
    };

    function mm(a, b) {
        var c = Bd(b);
        if (c) {
            c = M(c);
            var d = Oc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function nm(a) {
        var b = a.mb;
        return a.ab || ("dev" === b ? "dev" : "")
    };
    var om = ["AwfG8hAcHnPa/kJ1Co0EvG/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr//PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "AysVDPGQTLD/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
    ];

    function pm() {
        var a = J.document;
        a = void 0 === a ? window.document : a;
        jd(om, a)
    };
    var qm = ["A2YAd4xOntTGygIDjApOTtXOgVI3IWsd5OnOGq3RbRkIQwyqYWNl1JGRAcvtm6VOHDj4n07T/J19VqLuJn3MmQ8AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A2c5Ux+hivdkLh/KbZUGr6f7SCR0mZrBVfPJ+/OuDVHNwiYv+Lo83b9z5qL8sod78bQl0pSLtbvRWURo+xRl7AIAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
        "AzNJ4sd3tVurolpdvWYZ4cmP9Po7RJhEHSqmC3pgxW9fFVZvchhtcMUgHAs97npxMD1jhXHO8s6q6Wy1MMLxKgEAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjMxNjYzOTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
    ];

    function rm() {
        var a = J.document;
        a = void 0 === a ? window.document : a;
        jd(qm, a)
    };

    function sm(a, b, c) {
        var d = window;
        return function() {
            var e = qe(),
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
                    duration: (qe() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function tm(a, b) {
        return sm(a, b, function(c, d) {
            (new Ce).F(c, d)
        })
    };

    function um(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function vm(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function wm() {
        var a = new p.Set;
        try {
            if ("undefined" === typeof googletag || !googletag.pubads) return a;
            for (var b = googletag.pubads(), c = t(b.getSlots()), d = c.next(); !d.done; d = c.next()) a.add(d.value.getSlotId().getDomId())
        } catch (e) {}
        return a
    }

    function xm(a) {
        a = a.id;
        return null != a && (wm().has(a) || q(a, "startsWith").call(a, "google_ads_iframe_") || q(a, "startsWith").call(a, "aswift"))
    }

    function ym(a, b, c) {
        if (!a.sources) return !1;
        var d = yf( of );
        switch (zm(a)) {
            case 2:
                var e = Am(a);
                if (e) return c.some(function(g) {
                    return Bm(e, g, d)
                });
            case 1:
                var f = Cm(a);
                if (f) return b.some(function(g) {
                    return Bm(f, g, d)
                })
        }
        return !1
    }

    function zm(a) {
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

    function Cm(a) {
        return Dm(a, function(b) {
            return b.currentRect
        })
    }

    function Am(a) {
        return Dm(a, function(b) {
            return b.previousRect
        })
    }

    function Dm(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Em() {
        T.call(this);
        this.i = this.h = this.O = this.N = this.I = 0;
        this.za = this.wa = Number.NEGATIVE_INFINITY;
        this.sa = this.ua = this.va = this.xa = this.Ca = this.m = this.Ba = this.R = 0;
        this.ta = !1;
        this.P = this.M = this.A = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Aa = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.ya = !1;
        this.da = function() {}
    }
    u(Em, T);

    function Fm() {
        var a = new Em;
        if (R(lf) && !window.google_plmetrics && window.PerformanceObserver) {
            window.google_plmetrics = !0;
            for (var b = t(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]), c = b.next(); !c.done; c = b.next()) c = c.value, Gm(a).observe({
                type: c,
                buffered: !R(qf)
            });
            Hm(a)
        }
    }

    function Gm(a) {
        a.l || (a.l = new PerformanceObserver(tm(640, function(b) {
            var c = Im !== window.scrollX || Jm !== window.scrollY ? [] : Km,
                d = Lm();
            b = t(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput && (!R(mf) || .01 < e.value)) {
                        f.I += Number(e.value);
                        Number(e.value) > f.N && (f.N = Number(e.value));
                        f.O += 1;
                        var g = ym(e, c, d);
                        g && (f.m += e.value, f.xa++);
                        if (5E3 < e.startTime - f.wa || 1E3 < e.startTime - f.za) f.wa = e.startTime, f.h = 0, f.i = 0;
                        f.za = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.R && (f.R = f.h, f.Ca = f.i, f.Ba = e.startTime + e.duration)
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
                    e = Math.max(0, e.duration - 50), a.A += e, a.M = Math.max(a.M, e), a.P += 1
            }
        })));
        return a.l
    }

    function Hm(a) {
        var b = tm(641, function() {
                var f = document;
                2 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                } [f.visibilityState || f.webkitVisibilityState || f.mozVisibilityState || ""] || 0) && Mm(a)
            }),
            c = tm(641, function() {
                return void Mm(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        var d = yf(pf),
            e;
        0 < d && (e = setTimeout(c, 1E3 * d));
        a.da = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            Gm(a).disconnect();
            e && clearTimeout(e)
        }
    }
    Em.prototype.j = function() {
        T.prototype.j.call(this);
        this.da()
    };

    function Mm(a) {
        if (!a.ya) {
            a.ya = !0;
            Gm(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += vm("cls", a.I), b += vm("mls", a.N), b += um("nls", a.O), window.LayoutShiftAttribution && (b += vm("cas", a.m), b += um("nas", a.xa)), b += vm("wls", a.R), b += vm("tls", a.Ba), window.LayoutShiftAttribution && (b += vm("was", a.Ca)));
            window.LargestContentfulPaint && (b += um("lcp", a.va), b += um("lcps", a.ua));
            window.PerformanceEventTiming && a.ta && (b += um("fid", a.sa));
            window.PerformanceLongTaskTiming &&
            (b += um("cbt", a.A), b += um("mbt", a.M), b += um("nlt", a.P));
            for (var c = 0, d = t(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) xm(e.value) && c++;
            b += um("nif", c);
            b += um("ifi", vd(window));
            c = Q(ii).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            b += a.Aa ? "&qqid=" + encodeURIComponent(a.Aa) : um("pvsid", kd(x));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.v || (a.v = !0, a.j())
        }
    }

    function Bm(a, b, c) {
        if (0 === c) return !0;
        var d = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= d || 0 >= a ? !1 : 100 * d * a / ((b.right - b.left) * (b.bottom - b.top)) >= c
    }

    function Lm() {
        var a = [].concat(ma(document.getElementsByTagName("iframe"))).filter(xm),
            b = [].concat(ma(wm())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Im = window.scrollX;
        Jm = window.scrollY;
        return Km = [].concat(ma(a), ma(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Im = void 0,
        Jm = void 0,
        Km = [];

    function Nm(a) {
        a = void 0 === a ? window : a;
        return !a.PeriodicSyncManager
    }

    function Om() {
        var a = void 0 === a ? window : a;
        if (!Nm(a) && R(rf) || Nm(a) && R(sf)) {
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        }
        return !1
    }
    var Pm = {
        issuerOrigin: "https://attestation.android.com",
        issuancePath: "/att/i",
        redemptionPath: "/att/r",
        shouldRedeemToken: function() {
            return Om()
        },
        shouldRequestToken: function() {
            return Om()
        }
    };
    var Qm = ["A88otRz1Fd3Nt567e2IYshC18LL3KGVXpVJW9oTCId4RYaygt23pbb4JqrbdIO/bwZPWEmRjBIRBu/bZbDR7Pg4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A0gCLbXCcL0R1Oc8tFPDs0G4Elz17w3zHp+Zst66+D17veE2o7fUcPsA114QtSTRqfVJLMeTSdeWOom0CcyCsgYAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "A9RQ+LxFazAousxUwSCzaihJjHLO1UyjQp0teZKHl7WdbVjPDfHSKMd6D/ZI5MTjqClFycbl70EFd7cBJWXqKQEAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6WKeWsdn1Ct+ZPqS9NCxxaiBoQ7wdTkK2/gE69Yu0gfBKJfo1gOvgkGmf5/xaIajT/RUb9AbnF1FsSZ47cCcQcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
        "A04ZCu7yjrHgwQJK5ISHhH1DSg0qqowEay3n70KO6wV3D2Mj+OX3Kw20aSMitzgdG1xfrN7sOJV/dZIk+RvCzA4AAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
    ];

    function Rm(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        T.call(this);
        R(uf) || Sm();
        this.i = b || [Pm];
        this.h = c;
        if (document.hasTrustToken && !R(tf) && !Array.isArray(window.goog_tt_state)) {
            var d = Tm(this);
            Object.defineProperty(window, "goog_tt_state", {
                configurable: !1,
                get: function() {
                    return d.slice()
                }
            })
        }
    }
    u(Rm, T);

    function Sm() {
        var a = void 0 === a ? window.document : a;
        jd(Qm, a)
    }

    function Tm(a) {
        return a.i.map(function(b) {
            return {
                issuerOrigin: b.issuerOrigin,
                state: R(uf) && !a.h ? 12 : 1
            }
        })
    }

    function Um(a, b) {
        var c = q(window.goog_tt_state, "find").call(window.goog_tt_state, function(d) {
            return d.issuerOrigin === a
        });
        c && (c.state = b)
    }

    function Vm() {
        var a = window.goog_tt_state;
        return Array.isArray(a) && a.some(function(b) {
            return 1 != b.state
        })
    }

    function Wm(a) {
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
        Um(a.issuerOrigin, 2);
        return window.fetch(b, c).then(function(d) {
            if (!d.ok) throw Error(d.status + ": Network response was not ok!");
            Um(a.issuerOrigin, 6)
        }).catch(function(d) {
            d && "NoModificationAllowedError" === d.name ? Um(a.issuerOrigin, 6) : Um(a.issuerOrigin, 5)
        })
    }

    function Xm(a, b) {
        var c = a.issuerOrigin + a.issuancePath;
        Um(a.issuerOrigin, 8);
        return window.fetch(c, {
            trustToken: {
                type: "token-request"
            }
        }).then(function(d) {
            if (!d.ok) throw Error(d.status + ": Network response was not ok!");
            Um(a.issuerOrigin, 10);
            if (b) return Wm(a)
        }).catch(function(d) {
            if (d && "NoModificationAllowedError" === d.name) {
                if (Um(a.issuerOrigin, 10), b) return Wm(a)
            } else Um(a.issuerOrigin, 9)
        })
    }

    function Ym(a) {
        if (document.hasTrustToken && !R(tf) && (!R(uf) || a.h)) {
            if (Vm()) return window.goog_tt_promise;
            var b = [];
            a.i.forEach(function(c) {
                R(wf) && Um(c.issuerOrigin, 13);
                var d = c.shouldRedeemToken(),
                    e = c.shouldRequestToken();
                if (d || e) {
                    var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                        if (g) {
                            if (d) return Wm(c)
                        } else {
                            if (e) return Xm(c, d);
                            Um(c.issuerOrigin, 3)
                        }
                    });
                    b.push(f)
                } else Um(c.issuerOrigin, 7)
            });
            if (p.Promise && p.Promise.all) return a = p.Promise.all(b), "object" != typeof window.goog_tt_promise && Object.defineProperty(window,
                "goog_tt_promise", {
                    configurable: !1,
                    value: a,
                    writable: !1
                }), a
        }
    };
    var Zm = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function $m() {
        var a = J;
        return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(Zm).then(function(b) {
            var c = new Hl;
            c = E(c, 1, b.platform);
            c = E(c, 2, b.platformVersion);
            c = E(c, 3, b.architecture);
            c = E(c, 4, b.model);
            c = E(c, 5, b.uaFullVersion);
            return E(c, 9, b.bitness)
        }) : null
    };

    function an(a) {
        a.google_sa_impl && !a.document.getElementById("google_shimpl") && (a.google_sa_queue = null, a.google_sl_win = null, a.google_sa_impl = null)
    }

    function bn(a, b) {
        b.google_ad_host || (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute("content"))
    }

    function cn(a, b, c) {
        var d = J;
        c = void 0 === c ? "" : c;
        an(d);
        d.google_sa_queue || (d.google_sa_queue = [], d.google_sl_win = d, d.google_process_slots = He(215, function() {
            return dn(d)
        }), a = en(d, c, a, b), Nc(d.document, a).id = "google_shimpl")
    }

    function dn(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || Ie("shimpl", {
            t: "no_fn"
        });
        "function" === typeof c && Ge(216, c);
        b.length && a.setTimeout(He(215, function() {
            return dn(a)
        }), 0)
    }

    function fn(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function en(a, b, c, d) {
        var e = Math.random() < yf(We) ? ib(Dc(c.ob).toString()) : null;
        c = Sb(d, 4) ? c.nb : c.pb;
        e = e ? e : ib(Dc(c).toString());
        c = {};
        a: {
            if (Sb(d, 4)) {
                if (d = b || gn(a)) {
                    var f = {};
                    d = (f.client = d, f.plah = a.location.host, f);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }
        hn(d, c);
        a: {
            if (d = yf(Qe))
                if (b = b || gn(a)) {
                    f = {};
                    a = (f.client = b, f.plah = a.location.host, f.eid = "" + d, f.ama_t = "adsense", f);
                    break a
                } a = {}
        }
        hn(a, c);
        hn(Df() ? {
            bust: Df()
        } : {}, c);
        return fb(e, c)
    }

    function hn(a, b) {
        Tc(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function gn(a) {
        if (a.google_ad_client) return a.google_ad_client;
        if (Xe) {
            var b = U(a).head_tag_slot_vars;
            if (b && b.google_ad_client) return b.google_ad_client
        } else if (b = a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]')) return b.getAttribute("data-ad-client");
        if (b = a.document.querySelector(".adsbygoogle[data-ad-client]")) return b.getAttribute("data-ad-client");
        b: {
            b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(a) ||
            /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Ad() ? hk : ik;
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
            for (c = {}; d = a.exec(b);) c[d[1]] = jk(d[2]);
            b = c.google_ad_client ? c.google_ad_client : ""
        } else b = "";
        return b ? b : ""
    }

    function jn(a) {
        if (!Fd) a: {
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
                    Fd = h;
                    break a
                }
            } catch (l) {}
            Fd = null
        }
        if (Fd) return null;
        c = Gc(document, "IFRAME");
        c.id = "google_esf";
        c.name = "google_esf";
        a = a.vb;
        if (a instanceof lc) {
            var k;
            a = pc(a);
            a = (null === (k = ic()) || void 0 === k ? 0 : k.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
        } else a = hb(a).toString();
        c.src = a;
        c.style.display = "none";
        return c
    }

    function kn(a, b, c, d) {
        ln(a, b, c, d, function(e, f) {
            var g = e.document;
            e = void 0;
            for (var h = 0; !e || g.getElementById(e + "_anchor");) e = "aswift_" + h++;
            h = Number(f.google_ad_width || 0);
            var k = Number(f.google_ad_height || 0),
                l = f.ds || "";
            l && (l += q(l, "endsWith").call(l, ";") ? "" : ";");
            if (R(jf)) f = Gc(document, "INS"), f.id = e + "_anchor", ek(f, h, k), f.style.display = "block", g = Gc(document, "INS"), g.id = e + "_expand", ek(g, h, k), g.style.display = "inline-table", g.appendChild(f), c.appendChild(g);
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

    function ln(a, b, c, d, e) {
        var f = e(a, b);
        mn(a, c, b);
        c = Ja;
        e = (new Date).getTime();
        b.google_lrv = I(d, 2);
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        b.dninfo = b.google_loader_used;
        c = (d = !!a.document.getElementById(f + "_anchor")) ? ak : bk;
        b.dninfo += "_" + d;
        var g = {
            pubWin: a,
            iframeWin: null,
            vars: b
        };
        fn(a, function() {
            b.dninfo += "_" + !!a.document.getElementById(f + "_anchor");
            var h = a.google_sa_impl(g);
            h && h.catch && h.catch(function(k) {
                O.F(911, k instanceof Error ? k : Error(k), void 0, void 0)
            })
        }, c)
    }

    function mn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Bc[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
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
            c.google_ad_unit_key = Uc(e.join(":")).toString();
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
            c.google_ad_dom_fingerprint = Uc(h + b.join()).toString()
        }
    }

    function nn() {
        var a = Bd(x);
        a && (a = ge(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    };

    function on(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function pn(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            var d = c.search(Lc),
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
            c && (b.google_ad_client = on("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) f = a[d], /data-/.test(f.name) && (e = kb(f.name.replace("data-matched-content",
            "google_content_recommendation").replace("data", "google").replace(/-/g, "_")), b.hasOwnProperty(e) || (f = on(e, f.value), null !== f && (b[e] = f)))
    }

    function qn(a) {
        if (a = nd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function rn(a, b, c, d) {
        pn(a, b);
        if (c.document && c.document.body && !Qj(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = mm(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Bc[e + "x" + g];
                var h = f;
                if (e) {
                    var k = Cc(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new N("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = Jj(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                lj(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || cj(a, c, "width", L) || b.google_ad_width || 0;
        f = Ga(Jj, e, "auto", c, a, b, !1, !0);
        g = Bd(c) || c;
        h = b.google_ad_client;
        d = g.location && "#ftptohbh" === g.location.hash ? 2 : Dd(g.location, "google_responsive_slot_debug") || Dd(g.location, "google_responsive_slot_preview") || R($e) ? 1 : R(Ye) ? 2 : hh(g, 1, h, d) ? 1 : 0;
        if (g = 0 !== d) b: if (!(488 > M(c) || R(Ze)) || b.google_reactive_ad_format ||
            Qj(c, b) || Gf(a, b)) g = !1;
        else {
            for (g = a; g; g = g.parentElement) {
                h = Oc(g, c);
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
            if (!R(Ze) && (g = Kf(c, a, e, .3, b), !0 !== g)) {
                b.gfwrnwer = g;
                g = !1;
                break b
            }
            g = c.top == c ? !0 : !1
        } g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, lj(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, d.ds && (b.ds = d.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1;
        if (e = Qj(c,
            b)) Sj(e, a, b, c, d);
        else {
            if (Gf(a, b)) {
                if (d = Oc(a, c)) a.style.width = d.width, a.style.height = d.height, Ff(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = qn(c)
            } else Ff(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Sj(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Lf(a.offsetWidth ||
                parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function sn(a, b) {
        b = void 0 === b ? 500 : b;
        T.call(this);
        this.i = a;
        this.Ta = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    u(sn, T);
    sn.prototype.j = function() {
        this.m = {};
        this.l && (Fc(this.i, "message", this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        T.prototype.j.call(this)
    };

    function tn(a) {
        T.call(this);
        this.i = a;
        this.h = null;
        this.l = !1
    }
    u(tn, T);
    var un = null,
        vn = [],
        wn = new p.Map,
        xn = -1;

    function yn(a) {
        return zd.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }

    function zn(a, b, c) {
        a.setAttribute("data-adsbygoogle-status", "done");
        An(a, b, c)
    }

    function An(a, b, c) {
        var d = window,
            e = yd();
        e.google_spfd || (e.google_spfd = rn);
        (e = b.google_reactive_ads_config) || rn(a, b, d, c);
        bn(d, b);
        if (!Bn(a, b, d)) {
            e || (d.google_lpabyc = Hf(a, d) + cj(a, d, "height", L));
            if (e) {
                e = e.page_level_pubvars || {};
                if (U(J).page_contains_reactive_tag && !U(J).allow_second_reactive_tag) {
                    if (e.pltais) {
                        wh(!1);
                        return
                    }
                    throw new N("Only one 'enable_page_level_ads' allowed per page.");
                }
                U(J).page_contains_reactive_tag = !0;
                wh(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = ud(d);
            sd(gk, function(f, g) {
                b[g] =
                    b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (U(J).first_tag_on_page || 0);
            Ge(164, function() {
                kn(d, b, a, c)
            })
        }
    }

    function Bn(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className),
            f = sh(c);
        if (f && f.Da && "on" != b.google_adtest && !e) {
            e = Hf(a, c);
            var g = he(c).clientHeight;
            if (!f.na || f.na && ((0 == g ? null : e / g) || 0) >= f.na) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Aa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.rb && (null !== $c(a.getAttribute("width")) &&
            a.setAttribute("width", 0), null !== $c(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Oc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
        !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Cn(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (yn(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
        }
        return null
    }

    function Dn(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    En(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function Fn() {
        var a = Gc(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        cd(a);
        return a
    }

    function Gn(a, b) {
        var c = {};
        sd(de, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = Fn();
        Ac.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!U(J).pause_ad_requests;
        zn(d, e, b)
    }

    function Hn(a, b) {
        function c() {
            return Gn(a, b)
        }
        ge(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = Na(He(191, c));
            Ec(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function En(a, b, c) {
        var d = {};
        Ge(165, function() {
            In(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Jn(a) {
        delete a.google_checked_head;
        Tc(a, function(b, c) {
            gc[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function Kn(a) {
        var b = J,
            c = R(Xe) && b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || b.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = U(window);
            if (d.head_tag_slot_vars) throw new N("Only one AdSense head tag supported per page. The second tag is ignored.");
            var e = {};
            pn(c, e);
            Jn(e);
            var f = Ya(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            b.adsbygoogle || (b.adsbygoogle = []);
            b = b.adsbygoogle;
            b.loaded ? b.push(c) : b.splice(0, 0, c);
            e.google_adbreak_test && Ln(f, a);
            Wd(function() {
                Ln(f, a)
            })
        }
    }

    function Mn(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks || "string" === typeof a.EXPERIMENTAL_userInteractionChecks) return 3
        }
        return 0
    }

    function In(a, b, c, d) {
        if (null == a) throw new N("push() called with no parameters.");
        Nn(a, I(d, 7), I(d, 2));
        var e = Mn(a);
        if (0 !== e) null == un ? (On(a), vn.push(a)) : 3 === e ? Ge(787, function() {
            un.handleAdConfig(a)
        }) : un.handleAdBreak(a).catch(function(g) {
            O.F(730, g instanceof Error ? g : Error(String(g)), void 0, void 0)
        });
        else {
            Ja = (new Date).getTime();
            cn(c, d, Pn(a));
            Qn();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        c = !0;
                        break a
                    }
                    throw new N("'google_ad_client' is missing from the tag config.");
                }
                c = !1
            }
            if (c) Rn(a, d, b);
            else if ((c = a.params) && sd(c, function(g, h) {
                b[h] = g
            }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                c = Sn(a.element);
                pn(c, b);
                e = U(x).head_tag_slot_vars || {};
                Tc(e, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (c.hasAttribute("data-require-head") && !U(x).head_tag_slot_vars) throw new N("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new N("Ad client is missing from the slot.");
                b.google_apsail = mh(b.google_ad_client);
                var f = (e = 0 === (U(J).first_tag_on_page || 0) && fm(b)) && gm(e);
                e && !f && (Rn(e, d), U(J).skip_next_reactive_tag = !0);
                0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!U(J).pause_ad_requests;
                zn(c, b, d);
                e && f && Tn(e)
            }
        }
    }
    var Un = !1;

    function Nn(a, b, c) {
        var d = J;
        R(Ve) && !Un && (Un = !0, (a = Pn(a)) || (a = gn(d)), Ie("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, 1))
    }

    function Pn(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Qn() {
        var a = J;
        if (R(Te)) {
            var b = sh(a);
            if (!(b = b && b.Da)) {
                try {
                    var c = a.localStorage
                } catch (d) {
                    c = null
                }
                c = c ? Dl(c) : null;
                b = !(c && $l(c) && c)
            }
            b || vh(a, 1)
        }
    }

    function Tn(a) {
        md(function() {
            ge(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function Rn(a, b, c) {
        U(J).skip_next_reactive_tag ? U(J).skip_next_reactive_tag = !1 : (0 === (U(J).first_tag_on_page || 0) && (U(J).first_tag_on_page = 1), c && a.tag_partner && (uh(x, a.tag_partner), uh(c, a.tag_partner)), c = Sb(b, 6), U(J).ama_ran_on_page || im(new hm(a, c)), Hn(a, b))
    }

    function Sn(a) {
        if (a) {
            if (!yn(a) && (a.id ? a = Cn(a.id) : a = null, !a)) throw new N("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new N("'element' is not a good DOM element.");
        } else if (a = Cn(), !a) throw new N("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Vn() {
        var a = J,
            b = new Sg(a),
            c = new sn(a),
            d = new tn(a);
        a = a.__cmp ? 1 : 0;
        b = Tg(b) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = c.i) || void 0 === e ? void 0 : e.__uspapi)) || (c.h ? c = c.h : (c.h = ad(c.i, "__uspapiLocator"), c = c.h), f = null != c);
        d.l || (d.h || (d.i.googlefc ? d.h = d.i : d.h = ad(d.i, "googlefcPresent")), d.l = !0);
        Ie("cmpMet", {
            tcfv1: a,
            tcfv2: b,
            usp: f ? 1 : 0,
            fc: d.h ? 1 : 0,
            ptt: 9
        }, yf(Oe))
    }

    function Wn(a) {
        Gg().S[Ig(26)] = !!Number(a)
    }

    function Xn(a) {
        Number(a) ? U(J).pause_ad_requests = !0 : (U(J).pause_ad_requests = !1, a = function() {
            if (!U(J).pause_ad_requests) {
                var b = yd(),
                    c = yd();
                try {
                    if (Ac.createEvent) {
                        var d = Ac.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (td(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (td(c.Event)) {
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

    function Yn(a) {
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
        J._gfp_a_ = a
    }

    function Zn(a) {
        td(a) && window.setTimeout(a, 0)
    }

    function Ln(a, b) {
        (aa = Xf(fb(ib(Dc(b.qb).toString()), Df() ? {
            bust: Df()
        } : {})).then(function(c) {
            null == un && (c.init(a), un = c, $n())
        }).catch(function(c) {
            O.F(723, c instanceof Error ? c : Error(String(c)), void 0, void 0)
        }), q(aa, "finally")).call(aa, function() {
            vn.length = 0;
            Ie("slotcar", {
                event: "api_ld",
                time: Date.now() - Ja,
                time_pr: Date.now() - xn
            })
        })
    }

    function $n() {
        for (var a = t(q(wn, "keys").call(wn)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = wn.get(b); - 1 !== c && (x.clearTimeout(c), wn.delete(b))
        }
        a = {};
        for (b = 0; b < vn.length; a = {
            ca: a.ca,
            Z: a.Z
        }, b++) wn.has(b) || (a.Z = vn[b], a.ca = Mn(a.Z), Ge(723, function(d) {
            return function() {
                3 === d.ca ? un.handleAdConfig(d.Z) : 2 === d.ca && un.handleAdBreakBeforeReady(d.Z).catch(function(e) {
                    O.F(730, e instanceof Error ? e : Error(String(e)), void 0, void 0)
                })
            }
        }(a)))
    }

    function On(a) {
        var b = vn.length;
        if (2 === Mn(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === xn && (xn = Date.now());
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), wn.set(b, -1), Ie("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * yf(gf));
            wn.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        O.Ra(Je);
        Ge(166, function() {
            var e = dk(b);
            aj(O, I(e, 2));
            gh(Sb(e, 6));
            d();
            Vd(16, [1, e.toJSON()]);
            var f = od(nd(J)) || J,
                g = nm({
                    ab: a,
                    mb: I(e, 2)
                }),
                h = c(g, e);
            $i(f, e, null === J.document.currentScript ? 1 : fc(h.ub));
            if ((!y("Trident") && !y("MSIE") || 0 <= lb(rb(), 11)) && (null == (J.Prototype || {}).Version || !R(Ue))) {
                De(R(nf));
                R(uf) ? Sm() : He(779, function() {
                    var r = new Rm;
                    0 < yf(vf) ? J.google_trust_token_operation_promise = Ym(r) : Ym(r)
                })();
                f = $m();
                null != f && f.then(function(r) {
                    J.google_user_agent_client_hint =
                        Yb(r)
                });
                rm();
                pm();
                Ql();
                try {
                    Fm()
                } catch (r) {}
                nn();
                Kn(h);
                f = window;
                g = f.adsbygoogle;
                if (!g || !g.loaded) {
                    yf(Oe) && Vn();
                    var k = {
                        push: function(r) {
                            En(r, h, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: Wn
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: Xn
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: Yn
                        }), Object.defineProperty(k, "onload", {
                            set: Zn
                        })
                    } catch (r) {}
                    if (g)
                        for (var l = t(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !==
                        g[m] && (k[m] = g[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Dn(g, h, e);
                    f.adsbygoogle = k;
                    g && (k.onload = g.onload);
                    (f = jn(h)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("m202108100101", ck, function(a, b) {
        var c = 2012 < D(b, 1, 0) ? "_fy" + D(b, 1, 0) : "";
        I(b, 3);
        var d = I(b, 3).replace(/^\//, "");
        b = I(b, 2);
        var e = a ? qc(rc, a, c) : qc(sc, b, d, c),
            f = qc(tc, b, d);
        return {
            qb: e,
            pb: a ? qc(uc, a, c) : qc(vc, b, d, c),
            nb: a ? qc(wc, a, c) : qc(xc, b, d, c),
            ob: a ? qc(yc, a, c) : qc(zc, b, d, c),
            vb: f,
            ub: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20210809\",\"\/r20190131\",null,[],null,null,\".google.co.th\",null,\"31062164\",[],[[[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1010,null,[null,1]],[null,1017,null,[null,-1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1064,null,null,[1]],[null,1041,null,[null,50]],[1042,null,null,[1]],[1040,null,null,[1]],[1049,null,null,[1]],[1078,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]],[1036,null,null,[1]],[1051,null,null,[1]],[325,null,null,[1]],[1007,null,null,[1]],[null,1008,null,[null,2]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1055,null,null,[1]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,64,null,[null,300]],[1074,null,null,[1]],[230,null,null,[1]],[1931,null,null,[1]],[377431981,null,null,[1]],[1945,null,null,[1]],[3655606,null,null,[1]],[1938,null,null,[1]],[null,1929,null,[null,50]],[374326588,null,null,[1]],[377105258,null,null,[1]],[385922407,null,null,[1]]],[[10,[[10,[[44739547],[44739548,[[1049,null,null,[1]]]]]],[10,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[10,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[150,[[42530671],[42530672,[[1004,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[1,[[44743411],[44743412,[[null,1072,null,[null,0.75]]]],[44743413,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,100],[1,[[44743414],[44743415,[[null,1072,null,[null,0.75]]]],[44743416,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,120],[1,[[44743417],[44743418,[[null,1072,null,[null,0.75]]]],[44743419,[[null,1072,null,[null,0.75]]]]],null,null,null,53,null,140],[1,[[44745298],[44745299,[[1033,null,null,[1]]]],[44745300,[[1033,null,null,[1]]]],[44745301,[[1033,null,null,[1]]]],[44745302,[[1033,null,null,[1]]]],[44745303,[[1033,null,null,[1]]]]]],[10,[[44748448],[44748449,[[1033,null,null,[1]]]],[44748450,[[1033,null,null,[1]]]],[44748451,[[1033,null,null,[1]]]]]],[50,[[44747620],[44747621,[[1084,null,null,[1]],[1082,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31061380],[31061381,[[1073,null,null,[1]]]]]],[10,[[31061485],[31061486,[[1078,null,null,[1]]]]]],[null,[[31061971],[31061972,[[380254521,null,null,[1]]]]]],[1000,[[31061978,[[null,null,14,[null,null,\"31061978\"]]],[6,null,null,null,6,null,\"31060918\"]],[31061979,[[null,null,14,[null,null,\"31061979\"]]],[6,null,null,null,6,null,\"31060919\"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.01]]]]]],[45,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]],[5,[[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31062229]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]]]]],[12,[[1000,[[20211866,[[1064,null,null,[1]],[null,1056,null,[null,3000]],[null,1057,null,[null,650]]]]]],[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,360245595,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,517,null,[null,1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]]],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[31062178],[31062179,[[null,360245595,null,[null,200]],[379841917,null,null,[1]],[null,1935,null,[null,200]]]],[31062180,[[null,360245595,null,[null,250]],[379841917,null,null,[1]],[null,1935,null,[null,250]]]],[31062181,[[null,360245595,null,[null,300]],[379841917,null,null,[1]],[null,1935,null,[null,300]]]],[31062182,[[null,360245595,null,[null,500]],[379841917,null,null,[1]],[null,1935,null,[null,500]]]]]],[10,[[31062216],[31062217,[[1949,null,null,[1]]]]]],[10,[[44748552],[44748553,[[1948,null,null,[1]]]]]]]],[20,[[10,[[31062093],[31062094,[[380025941,null,null,[1]]]]],null,null,null,null,null,201,null,102]]],[13,[[10,[[44748388],[44748389,[[1947,null,null,[1]]]]]],[10,[[44748390],[44748391]]],[10,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"31061691\"]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[10,[[21067664,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21067665,[[null,1905,null,[null,30]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067666,[[null,1905,null,[null,60]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21067667,[[null,1905,null,[null,120]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[21069888,[[null,1929,null,[null,50]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069889,[[null,1929,null,[null,25]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069890,[[null,1929,null,[null,1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069891,[[null,1929,null,[null,75]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21069892,[[null,1929,null,[null,100]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31062296]],[6,null,null,6,null,1,null,[\"performance.navigation.type\"]]],[1000,[[31062297]],[6,null,null,6,null,0,null,[\"performance.navigation.type\"]]],[1000,[[31062298]],[6,null,null,6,null,2,null,[\"performance.navigation.type\"]]],[1000,[[31062299]],[6,null,null,6,null,255,null,[\"performance.navigation.type\"]]],[1000,[[31062300]],[1,[[4,null,8,null,null,null,null,[\"performance.navigation.type\"]]]]]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[11,[[100,[[31060744],[31060745,[[360245598,null,null,[1]],[null,1927,null,[null,100]]]]],[4,null,9,null,null,null,null,[\"document.interestCohort\"]]],[null,[[31060791,null,[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame_ctrl\"]]],[31060792,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,[\"window.top.frames.google_ads_top_frame\"]]]]]]]],null,null,[0.001,\"1000\"]]]");
