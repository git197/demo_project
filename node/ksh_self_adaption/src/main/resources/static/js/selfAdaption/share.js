Cube(52, [], function (a) {
    function b() {
    }

    var c = Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    };
    return b.prototype.setMaxListeners = function (a) {
        this._events || (this._events = {}), this._maxListeners = a
    }, b.prototype.emit = function () {
        var a = arguments[0];
        if ("error" === a && (!this._events || !this._events.error || c(this._events.error) && !this._events.error.length)) {
            if (arguments[1] instanceof Error) throw arguments[1]; else throw new Error("Uncaught, unspecified 'error' event.");
            return !1
        }
        if (!this._events) return !1;
        var b = this._events[a];
        if (!b) return !1;
        if ("function" == typeof b) {
            switch (arguments.length) {
                case 1:
                    b.call(this);
                    break;
                case 2:
                    b.call(this, arguments[1]);
                    break;
                case 3:
                    b.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    for (var d = arguments.length, e = Array(d - 1), f = 1; f < d; f++) e[f - 1] = arguments[f];
                    b.apply(this, e);
            }
            return !0
        }
        if (c(b)) {
            for (var d = arguments.length, e = Array(d - 1), f = 1; f < d; f++) e[f - 1] = arguments[f];
            for (var g = b.slice(), f = 0, d = g.length; f < d; f++) g[f].apply(this, e);
            return !0
        }
        return !1
    }, b.prototype.addListener = function (a, b) {
        if ("function" !== typeof b) throw new Error("addListener only takes instances of Function");
        if (this._events || (this._events = {}), this.emit("newListener", a, b), this._events[a] ? c(this._events[a]) ? this._events[a].push(b) : this._events[a] = [this._events[a], b] : this._events[a] = b, c(this._events[a]) && !this._events[a].warned) {
            var d;
            d = void 0 === this._maxListeners ? 20 : this._maxListeners, d && 0 < d && this._events[a].length > d && (this._events[a].warned = !0, console.error("Possible mem-leak detected. event[" + a + "] %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[a].length), console.trace())
        }
        return this
    }, b.prototype.on = b.prototype.addListener, b.prototype.once = function (a, b) {
        function c() {
            d.removeListener(a, c), b.apply(this, arguments)
        }

        if ("function" !== typeof b) throw new Error(".once only takes instances of Function");
        var d = this;
        return c.listener = b, d.on(a, c), this
    }, b.prototype.removeListener = function (a, b) {
        if ("function" !== typeof b) throw new Error("removeListener only takes instances of Function");
        if (!this._events || !this._events[a]) return this;
        var d = this._events[a];
        if (c(d)) {
            for (var e = -1, f = 0, g = d.length; f < g; f++) if (d[f] === b || d[f].listener && d[f].listener === b) {
                e = f;
                break
            }
            if (0 > e) return this;
            d.splice(e, 1), 0 == d.length && delete this._events[a]
        } else (d === b || d.listener && d.listener === b) && delete this._events[a];
        return this
    }, b.prototype.removeAllListeners = function (a) {
        return 0 === arguments.length ? (this._events = {}, this) : (a && this._events && this._events[a] && (this._events[a] = null), this)
    }, b.prototype.listeners = function (a) {
        return this._events || (this._events = {}), this._events[a] || (this._events[a] = []), c(this._events[a]) || (this._events[a] = [this._events[a]]), this._events[a]
    }, a.exports = b, a.exports
});
Cube(57, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a) {
        if (Array.isArray(a)) {
            for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
            return c
        }
        return Array.from(a)
    }

    function f(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function g(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && ("object" === typeof b || "function" === typeof b) ? b : a
    }

    function h(a, b) {
        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    Object.defineProperty(b, "__esModule", {value: !0});
    var i = function () {
            function a(a, b) {
                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), j = c(3), k = d(j), l = c(30), m = d(l), n = c(31), o = d(n), p = c(48), q = d(p), r = c(49), s = d(r),
        t = c(50), u = d(t), v = c(51), w = d(v), x = c(52), y = d(x), z = function (a) {
            function b(a, c) {
                f(this, b);
                var d = g(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
                return d._attr = a ? (0, k.default)(c || {}, a) : {}, d
            }

            return h(b, a), i(b, [{
                key: "length", value: function () {
                    return this._attr.length
                }
            }, {
                key: "insert", value: function (a, b) {
                    var c = a.split(".");
                    if (1 === c.length) {
                        var d;
                        (0, s.default)(b) ? (d = this._attr).splice.apply(d, [a, 0].concat(e(b))) : this._attr.splice(a, 0, b)
                    } else {
                        var f = "" + (0, u.default)(c).join(".");
                        (0, s.default)(b) ? w.default.apply(void 0, [this._attr, f + ".splice", (0, q.default)(c), 0].concat(e(b))) : (0, w.default)(this._attr, f + ".splice", (0, q.default)(c), 0, b)
                    }
                }
            }, {
                key: "delete", value: function (a) {
                    var b = a.split(".");
                    if (1 === b.length) this._attr.splice(a, 1); else {
                        var c = "" + (0, u.default)(b).join(".");
                        (0, w.default)(this._attr, c + ".splice", (0, q.default)(b), 1)
                    }
                }
            }, {
                key: "overwrite", value: function (a) {
                    return this._attr = a, this.get()
                }
            }, {
                key: "set", value: function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    var d = b.pop();
                    return (0, o.default)(this._attr, b, d), this.get(b)
                }
            }, {
                key: "get", value: function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    return b.length && "" !== b[0] ? (0, m.default)(this._attr, 1 === b.length && b[0] || b) : this._attr
                }
            }]), b
        }(y.default);
    return b.default = z, a.exports
});
Cube(106, [], function (a, b, c) {
    var d = c(30);
    return a.exports = function (a, b) {
        for (var c = -1, e = b.length, f = Array(e); ++c < e;) f[c] = null == a ? void 0 : d(a, b[c]);
        return f
    }, a.exports
});
Cube(90, [], function (a, b, c) {
    var d = c(105), e = c(106), f = c(107), g = c(108), h = c(109), i = c(110), j = h(function (a, b) {
        var c = null == a ? 0 : a.length, h = e(a, b);
        return f(a, d(b, function (a) {
            return i(a, c) ? +a : a
        }).sort(g)), h
    });
    return a.exports = j, a.exports
});
Cube(89, [], function (a, b, c) {
    var d = c(104), e = c(99);
    return a.exports = function (a, b, c) {
        var f = null == a ? 0 : a.length;
        return f ? (b = c || void 0 === b ? 1 : e(b), d(a, 0 > b ? 0 : b, f)) : []
    }, a.exports
});
Cube(82, [], function (a, b, c) {
    var d = c(100), e = c(101), f = c(102), g = c(103), h = f(function (a, b) {
        return g(a) ? d(a, e(b, 1, g, !0)) : []
    });
    return a.exports = h, a.exports
});
Cube(77, [], function (a, b, c) {
    var d = c(99);
    return a.exports = function (a) {
        return "number" == typeof a && a == d(a)
    }, a.exports
});
Cube(98, [], function (a) {
    return a.exports = function (a, b) {
        return a > b
    }, a.exports
});
Cube(68, [], function (a, b, c) {
    var d = c(95), e = c(98), f = c(96);
    return a.exports = function (a, b) {
        return a && a.length ? d(a, f(b, 2), e) : void 0
    }, a.exports
});
Cube(67, [], function (a, b, c) {
    var d = c(95), e = c(96), f = c(97);
    return a.exports = function (a, b) {
        return a && a.length ? d(a, e(b, 2), f) : void 0
    }, a.exports
});
Cube(63, [], function (a, b, c) {
    var d = c(94);
    return a.exports = function (a, b) {
        return null == a || d(a, b)
    }, a.exports
});
Cube(62, [], function (a, b, c) {
    return a.exports = c(93), a.exports
});
Cube(53, [], function (a) {
    var b = Array.prototype, c = b.reverse;
    return a.exports = function (a) {
        return null == a ? a : c.call(a)
    }, a.exports
});
Cube(44, ["/common/share.js"], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    Object.defineProperty(b, "__esModule", {value: !0}), b.nodeAxios = void 0;
    var e = c(38), f = d(e);
    c(39, "");
    var g = c(2), h = d(g), i = c(71), j = d(i), k = c(92), l = d(k), m = c("/common/share.js"), n = d(m);
    l.default.shim();
    var o = (0, n.default)(), p = o.getI18n("common"), q = !1, r = function (a) {
        return a && a.code && (0, j.default)(a.code, "NOT_LOGIN") ? (q = !0, !0) : (!a.isError && q && (q = !1), !1)
    };
    h.default.interceptors.response.use(function (a) {
        var b = a.data;
        return r(b) ? Promise.reject(new Error("Error from Node: " + p.get("error.loginLost"))) : a
    });
    var s = h.default.create();
    s.interceptors.response.use(function (a) {
        var b = a.data;
        if (b) {
            if (r(b)) return Promise.reject(new Error("Error from Node: " + p.get("error.loginLost")));
            if (b.isError) {
                var c = p.get("error." + b.code);
                return f.default.error(c || b.code || b.message || p.get("error.DC_QUERY_FAIL")), Promise.reject(new Error("Error from Node: " + (c || b.code || b.message || p.get("error.DC_QUERY_FAIL"))))
            }
            return b
        }
        return Promise.reject(new Error("Error from Editor: Response without data"))
    }, function (a) {
        if (a.response) {
            var b = parseInt(a.response.status / 100, 10), c = void 0;
            c = 3 === b ? p.get("error.status_3xx") : 4 === b ? p.get("error.status_4xx") : 5 === b ? p.get("error.status_5xx") : p.get("error.DC_QUERY_FAIL"), f.default.error(c)
        } else a.message && f.default.error((0, j.default)(a.message, "timeout") ? p.get("error.query_timeout") : a.message);
        return Promise.reject(a)
    });
    return b.nodeAxios = function (a) {
        return s(a)
    }, a.exports
});
Cube(60, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a) {
        if (Array.isArray(a)) {
            for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
            return c
        }
        return Array.from(a)
    }

    function f(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function g(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && ("object" === typeof b || "function" === typeof b) ? b : a
    }

    function h(a, b) {
        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    Object.defineProperty(b, "__esModule", {value: !0});
    var i = function () {
            function a(a, b) {
                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), j = c(51), k = d(j), l = c(40), m = d(l), n = c(33), o = d(n), p = c(48), q = d(p), r = c(56), s = d(r),
        t = c(88), u = d(t), v = c(89), w = d(v), x = c(74), y = d(x), z = c(55), A = d(z), B = c(49), C = d(B),
        D = c(90), E = d(D), F = c(71), G = d(F), H = c(91), I = d(H), J = c(57), K = d(J), L = c(84), M = 2,
        N = function (a) {
            function b(a, c) {
                f(this, b);
                var d = g(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a, []));
                return d.layerMap = c, d
            }

            var c = Math.max;
            return h(b, a), i(b, [{
                key: "fix", value: function (a) {
                    var b = this, c = {}, d = this.layerMap, e = !1;
                    (0, o.default)(a.get(), function (e, f) {
                        if (!a.isChildCom(f)) {
                            var g = d.getZListIndex(f);
                            if (!(g && "com" === e.type)) {
                                if (g) {
                                    var h = b.get(g).list && b.get(g).list.length;
                                    if ((0, L.isLayer)(e.type) && h && e.children.length === h) return
                                }
                                c[f] = {id: f, children: e.children, parent: e.parent, type: e.type || "com"}
                            }
                        }
                    });
                    for (var f = function () {
                        var f = (0, u.default)(c), g = f[0], h = c[g], j = d.getZListIndex(g), k = !!j;
                        if (!h.parent) {
                            var i = k ? b.get(j) : {id: g, type: h.type};
                            k || (b.insert("0", i), d.updateZIndex(b));
                            var l = a.get(g).children;
                            delete c[g];
                            var m = [];
                            h.children && (i.list = i.list || [], (0, o.default)(h.children, function (a, c) {
                                var e = d.getZListIndex(a);
                                return !!(k && j === b.getParentIndex(e)) || void (e ? m.push(e) : l.splice(c, 1))
                            })), (0, o.default)((0, w.default)(f), function (a) {
                                c[a].parent === g && (i.list = i.list || [], i.list.push({
                                    id: c[a].id,
                                    type: c[a].type
                                }), !(0, G.default)(l, a) && l.push(a), delete c[a])
                            }), b.move(m, k ? j + ".list.0" : "0.list.0"), d.updateZIndex(b), e = !0
                        } else {
                            var n = d.getZListIndex(h.parent);
                            if ((0, L.isLayer)(h.type)) a.componentCount--; else if (!n) b._attr.push({
                                id: g,
                                type: h.type
                            }), d.setZListIndex(g, "" + (b._attr.length - 1)); else {
                                var p = b.get(n);
                                p.list = p.list || [], p.list.push({
                                    id: g,
                                    type: h.type
                                }), d.setZListIndex(g, n + ".list." + (p.list.length - 1))
                            }
                            delete c[g]
                        }
                    }; !(0, s.default)(c);) f();
                    e && d.updateZIndex(this);
                    var g = [];
                    return this.deepLoop(this.get(), "", function (c, e) {
                        var f = d.getZListIndex(c.id);
                        if ("subCom" === c.type || !a.get(c.id)) f ? g.push(f) : g.push(e); else if (e !== f) {
                            for (var h = b.getDepth(e), i = a.get(c.id), j = 0; i && i.parent;) j++, i = a.get(i.parent);
                            j === h ? g.push(f) : g.push(e)
                        }
                    }), g.length && (e = !0, this.cleanDirty(g, !1)), e
                }
            }, {
                key: "deepLoop", value: function (a, b, c) {
                    var d = this;
                    (0, o.default)(a, function (a, e) {
                        return !(c && !1 === c(a, "" + b + e)) && void (a.list && d.deepLoop(a.list, "" + b + e + ".list.", c))
                    })
                }
            }, {
                key: "move", value: function (a, b) {
                    var c = this;
                    (0, C.default)(a) || (a = [a]);
                    var d = [], e = [], f = (0, y.default)(a, function (a) {
                        return c.isMaxIndex(a, b)
                    }), g = f.true, h = f.false;
                    h && (1 < h.length && h.sort(function (a, b) {
                        return c.isMaxIndex(a, b) ? -1 : 1
                    }), h.forEach(function (a) {
                        d.push((0, m.default)(c.get(a))), e.push(a)
                    }), this.cleanDirty(e, !0, b), this.insert(b, d)), g && (d = [], e = [], 1 < g.length && g.sort(function (a, b) {
                        return c.isMaxIndex(a, b) ? -1 : 1
                    }), g.forEach(function (a) {
                        d.push((0, m.default)(c.get(a))), e.push(a)
                    }), this.insert(b, d), this.cleanDirty(e))
                }
            }, {
                key: "drawBackIndex", value: function (a, b) {
                    var c = this.layerMap.getZListIndex(a), d = this.maxIndex(c, b);
                    if (d === c) return c;
                    var e = c.split("."), f = b.split(".");
                    return e[f.length - 1] = parseInt(e[f.length - 1], 10) + 1, e.join(".")
                }
            }, {
                key: "createNewZIndex", value: function (a, b, c, d) {
                    var e = this, f = {id: a, type: c, list: []}, g = [];
                    return (0, o.default)(b, function (a) {
                        var c = e.layerMap.getZListIndex(a), h = e.get(c);
                        f.list.push(h), g.push(c), d && d(a, c, b)
                    }), this.cleanDirty(g, !1), f
                }
            }, {
                key: "delete", value: function (a, b) {
                    var c = a.split(".");
                    if (1 === c.length) this._attr.splice(a, 1); else {
                        var d = this.getParentIndex(a), e = this.get(d);
                        e.list = e.list || [], (0, E.default)(e.list, (0, q.default)(c));
                        var f = 1 === (0, L.isPaternity2)(d, b);
                        !(0, L.isLayer)(e.type) || f || e.list.length || this.delete(d)
                    }
                }
            }, {
                key: "ungroup", value: function (a) {
                    var b = this, c = this.layerMap;
                    (0, o.default)(a, function (a) {
                        var d = c.getZListIndex(a), f = b.get(d);
                        if ((0, L.isLayer)(f.type)) {
                            var g = f.list, h = b.getParentIndex(d);
                            if (h) k.default.apply(void 0, [b._attr, h + ".list.splice", (0, q.default)(d.split(".")), 1].concat(e(g))); else {
                                var i;
                                (i = b._attr).splice.apply(i, [d, 1].concat(e(g)))
                            }
                        }
                    })
                }
            }, {
                key: "getChildrenId", value: function (a) {
                    var b = this.layerMap, c = b.getZListIndex(a);
                    if (!c) return [];
                    var d = this.get(c);
                    return d ? (0, o.default)(d.list || [], "id") : []
                }
            }, {
                key: "getParentIndex", value: function (a) {
                    if (!a) return null;
                    var b = a.split(".");
                    return 2 >= b.length ? null : b.slice(0, -2).join(".")
                }
            }, {
                key: "getPathIds", value: function (a) {
                    for (var b = []; null !== a;) {
                        var c = this.getParentIndex(a), d = this.get(c);
                        c && b.push(d.id), a = c
                    }
                    return b
                }
            }, {
                key: "getPathFromTo", value: function (a, b) {
                    if (!a) {
                        var c = this.getPathIds(b).reverse();
                        return c.push(this.get(b).id), c
                    }
                    for (var d, e = [this.get(a).id], f = this.getParentIndex(a); f && 1 !== (0, L.isPaternity2)(f, b);) d = this.get(f), f && e.push(d.id), a = f, f = this.getParentIndex(a);
                    if (!f) {
                        Array.prototype.push.apply(e, this.getPathIds(b).reverse());
                        var g = b && this.get(b).id;
                        return g && !e.includes(g) && e.push(g), (0, I.default)(e)
                    }
                    e.push(this.get(f).id), a = f;
                    for (var h = b.split("."), j = (h.length - a.split(".").length) / 2; j < h.length; j += 2) {
                        a = a + "." + h[j] + "." + h[j + 1];
                        var i = this.get(a);
                        i && e.push(i.id)
                    }
                    return e
                }
            }, {
                key: "createFromConfig", value: function (a, b) {
                    var c = this, d = {id: a.id, type: a.type};
                    return (0, L.isLayer)(a.type) && (d.list = (0, o.default)(a.children, function (a) {
                        var d = b.get(a);
                        return c.createFromConfig(d, b)
                    })), d
                }
            }, {
                key: "createFromNewLayers", value: function (a, b, c) {
                    var d = this, e = (0, y.default)(a, function (a) {
                        return !!b[a.id]
                    });
                    return (0, o.default)(e.true, function (a) {
                        return d.createFromConfig(a, c)
                    })
                }
            }, {
                key: "loopComIndex", value: function (a, b, c) {
                    return a[c] === b[c] ? (0, A.default)(a[c]) && (0, A.default)(b[c]) ? this.loopComIndex(a, b, c + 1) : !!(0, A.default)(a[c]) : (0, A.default)(a[c]) && (0, A.default)(b[c]) ? !!(0 < a[c] - b[c]) : !!(0, A.default)(a[c])
                }
            }, {
                key: "isMaxIndex", value: function (a, b) {
                    var c = (0, o.default)(a.match(/[0-9]+/g), function (a) {
                        return parseInt(a, 10)
                    }), d = (0, o.default)(b.match(/[0-9]+/g), function (a) {
                        return parseInt(a, 10)
                    }), e = this.loopComIndex(c, d, 0);
                    return !e
                }
            }, {
                key: "maxIndex", value: function (a, b) {
                    return this.isMaxIndex(a, b) && a || b
                }
            }, {
                key: "maxIndexArr", value: function (a) {
                    var b = this, c = "9999", d = this.layerMap;
                    return (0, o.default)(a, function (a) {
                        c = b.maxIndex(c, d.getZListIndex(a))
                    }), c
                }
            }, {
                key: "loopCompareIndex", value: function (c, d, e, f, g) {
                    var h = Math.abs, i = c[f] || 0, a = d[f] || 0, b = e[f] || 0, j = void 0;
                    return 0 === g ? (j = h(i - b) - h(a - b), 0 === j ? (g = i === a === b ? 0 : 0 > (i - b) * (a - b) ? 3 : 0 < i - b ? 1 : 2, this.loopCompareIndex(c, d, e, f + 1, g)) : j) : 1 === g ? a - i : 2 === g ? i - a : i - a
                }
            }, {
                key: "isCloser", value: function (a, b, c) {
                    var d = (0, o.default)(a.match(/[0-9]+/g), function (a) {
                        return parseInt(a, 10)
                    }), e = (0, o.default)(b.match(/[0-9]+/g), function (a) {
                        return parseInt(a, 10)
                    }), f = (0, o.default)(c.match(/[0-9]+/g), function (a) {
                        return parseInt(a, 10)
                    });
                    return this.loopCompareIndex(d, e, f, 0, 0)
                }
            }, {
                key: "getDepth", value: function (a) {
                    var b = a && a.match(/list/g) || [];
                    return b.length
                }
            }, {
                key: "getReverseDepth", value: function (a) {
                    var b = this;
                    if (!a) return 0;
                    if (!a.list || !a.list.length) return 1;
                    var d = 0;
                    return a.list.forEach(function (a) {
                        d = c(d, b.getReverseDepth(a))
                    }), 1 + d
                }
            }, {
                key: "exceedDepth", value: function (a, b) {
                    var c = this.get(a);
                    return c ? this.getDepth(b) + this.getReverseDepth(c) - 1 > M : void 0
                }
            }, {
                key: "enableGroup", value: function (a) {
                    var b = this.get(a);
                    return !!(a && b) && this.getDepth(a) + this.getReverseDepth(b) <= M
                }
            }, {
                key: "sort", value: function (a) {
                    var c = this, d = this.layerMap;
                    return a.sort(function (e, a) {
                        return c.isMaxIndex(d.getZListIndex(e), d.getZListIndex(a)) ? -1 : 1
                    })
                }
            }, {
                key: "loopFromTo", value: function (a, b, d) {
                    var e = this.getParentIndex(a), f = this.getParentIndex(b);
                    if (e === f) for (var g, h = parseInt(a.split(".").pop(), 10), j = parseInt(b.split(".").pop(), 10), k = Math.min(h, j), l = c(h, j), m = k; m <= l; m++) g = e ? e + ".list." + m : "" + m, d && d(g, this.get(g))
                }
            }, {
                key: "cleanDirty", value: function (a) {
                    var c = this, b = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        d = arguments[2];
                    a = a && a.length && a.filter(function (a) {
                        return !!a
                    }).sort(function (d, a) {
                        return c.isMaxIndex(d, a) ? 1 : -1
                    }) || [], (0, o.default)(a, function (a) {
                        var e = c.getParentIndex(a);
                        if (e) {
                            var f = c.get(e), g = 1 === (0, L.isPaternity2)(e, d), h = (0, q.default)(a.split("."));
                            f ? (0, E.default)(f.list, h) : (0, E.default)(c._attr, h), b && !g && (0, L.isLayer)(f.type) && !f.list.length && c.delete(e, d)
                        } else (0, E.default)(c._attr, a)
                    })
                }
            }]), b
        }(K.default);
    return b.default = N, a.exports
});
Cube(59, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && ("object" === typeof b || "function" === typeof b) ? b : a
    }

    function g(a, b) {
        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    Object.defineProperty(b, "__esModule", {value: !0});
    var h = Object.assign || function (a) {
            for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
            return a
        }, i = function () {
            function a(a, b) {
                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), j = c(66), k = d(j), l = c(33), m = d(l), n = c(67), o = d(n), p = c(68), q = d(p), r = c(69), s = d(r),
        t = c(70), u = d(t), v = c(71), w = d(v), x = c(56), y = d(x), z = c(72), A = d(z), B = c(73), C = d(B),
        D = c(74), E = d(D), F = c(49), G = d(F), H = c(75), I = d(H), J = c(41), K = d(J), L = c(3), M = d(L),
        N = c(76), O = d(N), P = c(77), Q = d(P), R = c(78), S = d(R), T = c(55), U = d(T), V = c(79), W = d(V),
        X = c(65), Y = d(X), Z = c(54), $ = d(Z), _ = c(80), aa = d(_), ba = c(81), ca = d(ba), da = c(82), ea = d(da),
        fa = c(83), ga = d(fa), ha = c(84), ia = c(57), ja = d(ia), ka = c(85), la = d(ka), ma = c(61), na = d(ma),
        oa = c(86), pa = c(87), qa = window.location.pathname.split("/").reverse()[0],
        ra = {x: 0, y: 0, w: 160, h: 90, deg: 0, opacity: 1, sizeLock: !1, flipH: !1, flipV: !1},
        sa = "//img.alicdn.com/tfs/TB1nLiDkMTqK1RjSZPhXXXfOFXa-200-200.png", ta = function (a) {
            function b(a, c, d) {
                e(this, b);
                var g = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, a));
                return g._server = d, g.layerMap = c, g.componentCount = 0, g
            }

            var c = Math.min, d = Math.max;
            return g(b, a), i(b, [{
                key: "fix", value: function () {
                    var a = this, b = {}, c = !1;
                    if (this.componentCount = 0, (0, m.default)(this.get(), function (d, e) {
                        if (!d.id) return c = !0, delete a._attr[e], !0;
                        if (!d.type) if (d.children && d.children.length) {
                            var f = a.get(d.children[0]);
                            f ? ("subCom" === f.type && (d.type = "com"), c = !0) : (c = !0, delete a._attr[e])
                        } else c = !0, delete a._attr[e];
                        if (d.parent) {
                            var g = a.get(d.parent);
                            if (!g) d.parent = null, c = !0; else {
                                g.children = g.children || [], (0, w.default)(g.children, e) || (g.children.push(e), c = !0);
                                var i = g.children.length;
                                (0, ca.default)(g.children, function (b) {
                                    return !a.get(b)
                                }), i !== g.children.length && (c = !0), "com" === g.type && "subCom" !== d.type && (d.type = "subCom", c = !0)
                            }
                        }
                        d.attr && a.fixedAttr(d) && (c = !0), !/^(com|subCom)$/.test(d.type) || d.icon && d.comType || (b[e] = d);
                        var j = function (b, e) {
                            if ("layer" === d.type && d.config && d.config[b] && d.children && (0, G.default)(d.children)) {
                                var f = d.config[b];
                                if (!Array.isArray(f) && (0, S.default)(f)) {
                                    c = !0;
                                    var g = Object.keys(f);
                                    f = (0, Y.default)((0, W.default)(f, function (a, b) {
                                        return h({}, a, {_id: g[b], _icon: a.icon})
                                    })), d.config[b] = f
                                }
                                var i = (0, $.default)(f.map(function (e) {
                                    var f = a.get(e._id);
                                    return f ? e._id : ((0, ca.default)(d.config[b], {_id: e._id}), c = !0, null)
                                }), function (a) {
                                    return !(0, y.default)(a)
                                }), j = (0, ea.default)(d.children, i);
                                j.length && (c = !0, j.forEach(function (c) {
                                    var f = i.indexOf(c);
                                    0 > f ? d.config[b].push(e(a.get(c))) : d.config[b].splice(f, 1)
                                }))
                            }
                        };
                        j("animation", pa.getDefaultAnimation), j("transform3d", pa.getDefaultTransform3D), "layer" === d.type && (!d.comName && (d.comName = "datav-layer", c = !0), !d.icon && (d.icon = sa, c = !0)), "subCom" !== d.type && d.type && a.componentCount++
                    }), "preview" === this._server.status) return void this.emit("layers-init-fixed");
                    if (!(0, y.default)(b)) {
                        var d = (0, E.default)(b, "requirePath");
                        (0, la.default)({
                            baseURL: this._server.componentcenter,
                            params: {screenId: qa},
                            method: "POST",
                            url: "/cube/com/basicInfo?i18n=" + this._server.locale,
                            data: {
                                coms: (0, m.default)(b, function (a) {
                                    return {name: a.comName, version: a.version}
                                })
                            },
                            timeout: 10000
                        }).then(function (a) {
                            var b = [];
                            return a.data.length && (0, m.default)(a.data, function (a) {
                                var c = "/coms/" + a.name + "/" + a.version;
                                d[c] && d[c].forEach(function (c) {
                                    c.icon = a.icon, c.comType = a.type, b.push({
                                        id: c.id,
                                        key: "icon",
                                        value: c.icon
                                    }), b.push({id: c.id, key: "comType", value: c.comType})
                                })
                            }), b
                        }).then(function (b) {
                            a.emit("layers-init-fixed"), (0, na.default)({
                                url: "/v3/coms/" + a._server.id,
                                method: "POST",
                                params: {screenId: qa},
                                data: {config: b}
                            }).then(function () {
                                console.log("icon fixed end.")
                            })
                        }).catch(function (a) {
                            console.error(a)
                        })
                    }
                    return c
                }
            }, {
                key: "fixedAttr", value: function (a) {
                    var b = !1, c = a.attr, d = a.type;
                    if ("subCom" !== d) return Object.keys(ra).forEach(function (a) {
                        (0, aa.default)(c, a) || (c[a] = ra[a], b = !0)
                    }), (0, ha.isLayer)(d) && (c.deg && 0 !== c.deg && (c.deg = 0) && (b = !0), (0, C.default)(c.apply3d) && (c.apply3d = !1) && (b = !0), (0, C.default)(c.perspective) && (c.perspective = 500) && (b = !0), (0, C.default)(c.perspectiveOrigin) && (c.perspectiveOrigin = {
                        x: 50,
                        y: 50
                    }) && (b = !0)), (0, m.default)(c, function (a, d) {
                        (0, u.default)(a) && !isNaN(parseInt(a, 10)) && (b = !0, c[d] = "opacity" === d ? parseInt(100 * parseFloat(a), 10) / 100 : parseInt(a, 10)), "opacity" !== d && !(0, Q.default)(c[d]) && (0, U.default)(c[d]) && (b = !0, c[d] = parseInt(c[d], 10))
                    }), b
                }
            }, {
                key: "newId", value: function (a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 5,
                        c = a.replace(/(\/|\.|[|])/g, "_") + "_" + (0, ha.randomWord)(!1, b);
                    return this.get(c) ? this.newId(a, b) : c
                }
            }, {
                key: "isChildCom", value: function (a) {
                    var b = this.get(a);
                    return !!b.parent && "subCom" === b.type
                }
            }, {
                key: "add", value: function (a) {
                    var b = this;
                    (0, G.default)(a) ? (0, m.default)(a, function (a) {
                        b.add(a)
                    }) : this._attr[a.id] = a
                }
            }, {
                key: "getName", value: function (a) {
                    return this.get(a, "alias")
                }
            }, {
                key: "setName", value: function (a, b) {
                    this.set(a, "alias", b)
                }
            }, {
                key: "addCom", value: function (a, b) {
                    if (a) {
                        var c = a.name, d = a.version, e = a.config, f = a.apis, g = a.type, i = a.icon, j = h({
                            id: this.newId(c),
                            type: "com",
                            comName: c,
                            requirePath: "/coms/" + c + "/" + d,
                            config: e,
                            data: f,
                            version: d,
                            comType: g[0],
                            icon: i
                        }, b);
                        return this.add(j), j
                    }
                }
            }, {
                key: "addChildren", value: function (a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, d = c.addHandler,
                        e = this.get(a), f = this.get(b);
                    e.children = e.children || [], e.children.push(b), f.parent = a, d && d(a, e)
                }
            }, {
                key: "removeChildren", value: function (a, b, c) {
                    var d = this.get(a);
                    d && (0, s.default)(d.children, b), "layer" === d.type && d.config && (d.config.animation || d.config.transform3d) && (d.config.animation && (0, ca.default)(d.config.animation, {_id: b}), d.config.transform3d && (0, ca.default)(d.config.transform3d, {_id: b}), c && c(a, d))
                }
            }, {
                key: "_loop", value: function (a, b) {
                    var c = this, d = this.get(a);
                    b && b(a, d), d && d.children && (0, m.default)(d.children, function (a) {
                        c._loop(a, b)
                    })
                }
            }, {
                key: "delete", value: function (a) {
                    var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = this.get(a),
                        e = d.parent, f = d.type, g = c.delHandler, h = c.configHandler;
                    e && this.removeChildren(e, a, h), "subCom" !== f && this.transformParent(e, c), this._loop(a, function (a) {
                        a && b._attr[a] && (g && g(a), delete b._attr[a])
                    })
                }
            }, {
                key: "deleteEmptyLayer", value: function (a, b, c) {
                    var d = this.get(a), e = this.get(d.parent);
                    if ((0, ha.isLayer)(d.type)) {
                        var f = 1 === (0, ha.isPaternity2)(this.layerMap.getZListIndex(a), c);
                        f || (e && (this.removeChildren(d.parent, a), !e.children.length && this.deleteEmptyLayer(d.parent, b, c)), b && b(a, e), delete this._attr[a])
                    }
                }
            }, {
                key: "getParentId", value: function (a) {
                    if (!a) return null;
                    var b = this.get(a);
                    return b ? b.parent : null
                }
            }, {
                key: "getParent", value: function (a) {
                    var b = this.getParentId(a);
                    return b ? this.get(b) : null
                }
            }, {
                key: "setAttr", value: function (a, b) {
                    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, e = this.get(a);
                    if (a && e) {
                        var f = e.attr, g = c.changeAttrHandler;
                        Object.keys(b).forEach(function (a) {
                            "opacity" === a ? f.opacity = d(b.opacity, 0) || 0 : f[a] = b[a]
                        }), g && g(a, e)
                    }
                }
            }, {
                key: "transform", value: function (a, b, c, d) {
                    var e = this, f = this.get(a);
                    if ((b.w || b.h) && (0, ha.isLayer)(f.type) && f.children && f.children.length) {
                        var g = b.w ? (b.w + f.attr.w) / f.attr.w : 1, h = b.h ? (b.h + f.attr.h) / f.attr.h : 1;
                        f.children.forEach(function (a) {
                            var b = e.get(a);
                            b.attr = e.transformChild(b, {
                                scaleX: g,
                                scaleY: h
                            }), c && c(a, b), (0, ha.isLayer)(b.type) && (b.children || []).forEach(function (a) {
                                var b = e.get(a);
                                b.attr = e.transformChild(b, {scaleX: g, scaleY: h}), c && c(a, b)
                            })
                        })
                    }
                    this.translate(a, b, c, null, d)
                }
            }, {
                key: "translate", value: function (a, b, c, d) {
                    var e = this, f = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1, g = this.get(a),
                        h = g.parent;
                    if ((0, ha.isLayer)(g.type) && (0, aa.default)(b, "deg") && g.children ? ((0, m.default)(g.children, function (a) {
                        e.translate(a, b, c)
                    }), g.attr.deg = 0) : g.attr = b && this.newPos(g, b, f), c && c(a, g), "subCom" !== g.type && h && !(0, aa.default)(b, "deg")) {
                        var i = this.get(h);
                        i || console.error(h + " \u5DF2\u7ECF\u4E0D\u5B58\u5728...");
                        var j = i.attr, k = (0, m.default)(i.children, function (a) {
                            return e.get(a)
                        });
                        if (!k.length && (0, ha.isLayer)(i.type)) this.deleteEmptyLayer(h, d); else {
                            var l = this.calView(i, k);
                            (l.x || l.y || j.w !== l.w || j.h !== l.h) && (l.w -= j.w, l.h -= j.h, delete l.deg, delete l.opacity, this.translate(h, l, c), i.children && (l.x || l.y) && (0, m.default)(k, function (a) {
                                a.attr = e.newPos(a, {x: -l.x, y: -l.y}, 1), c && c(a.id, a)
                            }))
                        }
                    }
                }
            }, {
                key: "justTranslate", value: function (a, b, c) {
                    var d = this.get(a);
                    a && d && b && (d.attr = this.newPos(d, b, 1), c && c(a, d))
                }
            }, {
                key: "transformParent", value: function (a) {
                    var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = arguments[2],
                        e = c.changeAttrHandler, f = c.delHandler, g = this.get(a);
                    if (a && g) {
                        var h = g.children, i = void 0 === h ? [] : h, j = g.parent,
                            k = 1 === (0, ha.isPaternity2)(this.layerMap.getZListIndex(a), d);
                        if (!k) {
                            if (!i.length) return this.deleteEmptyLayer(a, f, d), void (j && this.transformParent(j, c, d));
                            var l = i.map(function (a) {
                                return b.get(a)
                            }), m = this.calView(g, l);
                            this.justTranslate(a, m, e);
                            var n = m.x, o = m.y;
                            (n || o) && i.map(function (a) {
                                return b.justTranslate(a, {x: -n, y: -o}, e)
                            }), !(0, A.default)(m, {x: 0, y: 0, w: 0, h: 0}) && j && this.transformParent(j, c)
                        }
                    }
                }
            }, {
                key: "transformChild", value: function (a, b) {
                    var c = b.scaleX, e = b.scaleY, f = a.attr, g = h({}, f);
                    return g.x = d((0, oa.radixFixed)(g.x * c), 0), g.y = d((0, oa.radixFixed)(g.y * e), 0), g.w = d((0, oa.radixFixed)(g.w * c), 0), g.h = d((0, oa.radixFixed)(g.h * e), 0), g
                }
            }, {
                key: "newPos", value: function (a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, e = a.attr,
                        f = (0, M.default)({}, ra, e),
                        g = (0, M.default)({}, {x: 0, y: 0, w: 0, h: 0, deg: 0, opacity: 0}, b);
                    return Object.keys(e).forEach(function (a) {
                        switch (a) {
                            case"deg":
                                f.deg = (0, oa.radixFixed)(f.deg + g.deg), f.deg %= 360, f.deg = 0 > f.deg ? f.deg + 360 : f.deg;
                                break;
                            case"opacity":
                                f.opacity = (0, oa.radixFixed)(f.opacity + g.opacity, 2);
                                break;
                            case"x":
                            case"y":
                                f[a] = (0, oa.gridFixed)(f[a] + (g[a] || 0), g[a] ? c : 1);
                                break;
                            case"w":
                            case"h":
                                f[a] = d((0, oa.gridFixed)(f[a] + (g[a] || 0), g[a] ? c : 1), 0);
                                break;
                            default:
                        }
                    }), f
                }
            }, {
                key: "transform2", value: function (a, b) {
                    var c = this, d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                        e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, f = this.get(a),
                        g = f.type, h = f.parent, i = f.children, j = f.attr, k = e.changeAttrHandler;
                    if ("subCom" !== g && b) {
                        var l = (0, aa.default)(b, "deg"),
                            n = (0, aa.default)(b, "x") || (0, aa.default)(b, "y") || (0, aa.default)(b, "w") || (0, aa.default)(b, "h");
                        if (l && (0, ha.isLayer)(g) && i) return void (0, m.default)(i, function (a) {
                            c.transform2(a, b, 1, e)
                        });
                        if (f.attr = this.newPos(f, b, d), k && k(a, f), n) {
                            var o = (0, K.default)(j);
                            i && i.length && (0, ha.isLayer)(g) && this.transformChildren(a, {
                                scaleX: b.w ? (b.w + o.w) / o.w : 1,
                                scaleY: b.h ? (b.h + o.h) / o.h : 1,
                                boundary: o
                            }, e), h && this.get(h) && this.transformParent(h, e)
                        }
                    }
                }
            }, {
                key: "transformChildren", value: function (a, b) {
                    var c = this, d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, e = this.get(a);
                    if (a && e) {
                        var f = e.children, g = e.attr, h = e.parent, i = d.changeAttrHandler, j = d.delHandler;
                        if (f) {
                            if (!f.length) return this.deleteEmptyLayer(a, j), void (h && this.transformParent(h, d));
                            var k = b.scaleX, l = b.scaleY;
                            1 === k && 1 === l || (b.newBoundary = g, (0, m.default)(f, function (a) {
                                var e = c.get(a);
                                if (!a || !e) return !0;
                                var f = e.attr, g = e.type, h = (0, K.default)(f);
                                c.justScaleChild(a, b, i), (0, ha.isLayer)(g) && c.transformChildren(a, {
                                    scaleX: f.w / h.w,
                                    scaleY: f.h / h.h,
                                    boundary: h
                                }, d)
                            }))
                        }
                    }
                }
            }, {
                key: "justScaleChild", value: function (a, b, c) {
                    var e = this.get(a);
                    if (a && e) {
                        var f = e.attr, g = e.type, i = b.scaleX, j = b.scaleY, k = b.boundary, l = b.newBoundary;
                        if ("com" === g || (0, ha.isLayer)(g)) {
                            if (this.isFullOverlapping(f, k)) e.attr.w = l.w, e.attr.h = l.h; else {
                                var m = e.attr, n = m.x, o = m.y, p = m.w, q = m.h;
                                this.isHorizenOverlapping(f, k) ? (n = 0, p = l.w) : this.isRightOverlapping(f, k) ? (p = (0, oa.radixFixed)(p * i), n = l.w - p) : (n = (0, oa.radixFixed)(n * i), p = (0, oa.radixFixed)(p * i)), this.isVerticalOverlapping(f, k) ? (o = 0, q = l.h) : this.isBottomOverlapping(f, k) ? (q = (0, oa.radixFixed)(q * j), o = l.h - q) : (o = (0, oa.radixFixed)(o * j), q = (0, oa.radixFixed)(q * j));
                                var r = {x: n, y: o, w: p, h: q};
                                Object.keys(r).forEach(function (a) {
                                    r[a] = d(r[a], 0)
                                }), e.attr = (0, M.default)(e.attr, r)
                            }
                            c && c(a, e)
                        }
                    }
                }
            }, {
                key: "getAbsolutePos", value: function (a, b) {
                    for (var c = this.get(a), d = this.get(c.parent); c.parent && d;) b.x += d.attr.x, b.y += d.attr.y, c = d, d = this.get(c.parent);
                    return b
                }
            }, {
                key: "ungroup", value: function (a, b) {
                    var c = this;
                    (0, m.default)(a, function (a) {
                        var d = c.get(a);
                        if ((0, ha.isLayer)(d.type)) {
                            var e = c.get(d.parent), f = d.children;
                            e && (c.removeChildren(e.id, a), e.children = (e.children || []).concat(f || [])), f.length && (0, m.default)(f, function (b) {
                                var d = c.get(b);
                                c.ungroupAttr(b, [a]), d.parent = e && e.id || null
                            }), b && b(f, a), delete c._attr[a]
                        }
                    })
                }
            }, {
                key: "group", value: function (a, b, c) {
                    var d = this, e = this.newId("group"),
                        f = {id: e, type: "layer", children: [], icon: sa, alias: b, comName: "datav-layer"};
                    this._server.enableCarousel && (f = h({}, f, {
                        config: (0, pa.getDefaultConfig)((0, m.default)(a, function (a) {
                            return d.get(a)
                        })), version: "0.0.0"
                    }));
                    var g = [];
                    return (0, m.default)(a, function (a) {
                        var b = d.get(a);
                        b.parent && d.removeChildren(b.parent, a), b.parent = e, g.push(b), f.children.push(a)
                    }), f.attr = (0, M.default)({
                        deg: 0,
                        opacity: 1,
                        apply3d: !1,
                        perspective: 500,
                        perspectiveOrigin: {x: 50, y: 50}
                    }, this.calView({}, g)), (0, m.default)(a, function (a) {
                        var b = d.get(a);
                        b.attr.x -= f.attr.x, b.attr.y -= f.attr.y, c && c(a, e, b)
                    }), f
                }
            }, {
                key: "formGroup", value: function (a, b, c) {
                    var d = this, e = this.newId("form-group"), f = {
                        id: e,
                        type: "form-layer",
                        children: [],
                        icon: sa,
                        alias: b,
                        config: {},
                        version: "0.0.0",
                        comName: "datav-form-layer"
                    }, g = [];
                    return (0, m.default)(a, function (a) {
                        var b = d.get(a);
                        b.parent && d.removeChildren(b.parent, a), b.parent = e, g.push(b), f.children.push(a)
                    }), f.attr = (0, M.default)({deg: 0, opacity: 1}, this.calView({}, g)), (0, m.default)(a, function (a) {
                        var b = d.get(a);
                        b.attr.x -= f.attr.x, b.attr.y -= f.attr.y, c && c(a, e, b)
                    }), f
                }
            }, {
                key: "align", value: function (a, b, c) {
                    var d = this, e = (0, m.default)(a, function (a) {
                        return d.get(a)
                    }), f = b(e);
                    (0, m.default)(e, function (a, b) {
                        c(a, f, b)
                    })
                }
            }, {
                key: "alignLeft", value: function (a) {
                    this.align(a, function (a) {
                        return (0, o.default)(a, function (a) {
                            return a.attr.x
                        })
                    }, function (a, b) {
                        a.attr.x = b.attr.x
                    })
                }
            }, {
                key: "alignRight", value: function (a) {
                    this.align(a, function (a) {
                        return (0, q.default)(a, function (a) {
                            return a.attr.x + a.attr.w
                        })
                    }, function (a, b) {
                        a.attr.x = b.attr.x + b.attr.w - a.attr.w
                    })
                }
            }, {
                key: "alignTop", value: function (a) {
                    this.align(a, function (a) {
                        return (0, o.default)(a, function (a) {
                            return a.attr.y
                        })
                    }, function (a, b) {
                        a.attr.y = b.attr.y
                    })
                }
            }, {
                key: "alignBottom", value: function (a) {
                    this.align(a, function (a) {
                        return (0, q.default)(a, function (a) {
                            return a.attr.y + a.attr.h
                        })
                    }, function (a, b) {
                        a.attr.y = b.attr.y + b.attr.h - a.attr.h
                    })
                }
            }, {
                key: "alignCenter", value: function (a) {
                    this.align(a, function (a) {
                        for (var b, e = a[0].attr.x, f = e + a[0].attr.w, g = a.length, h = 1; h < g; h++) b = a[h], e = c(e, b.attr.x), f = d(f, b.attr.x + b.attr.w);
                        return e + (f - e) / 2
                    }, function (a, b) {
                        a.attr.x = b - a.attr.w / 2
                    })
                }
            }, {
                key: "alignMiddle", value: function (a) {
                    this.align(a, function (a) {
                        for (var b, e = a[0].attr.y, f = e + a[0].attr.h, g = a.length, h = 1; h < g; h++) b = a[h], e = c(e, b.attr.y), f = d(f, b.attr.y + b.attr.h);
                        return e + (f - e) / 2
                    }, function (a, b) {
                        a.attr.y = b - a.attr.h / 2
                    })
                }
            }, {
                key: "alignHorizontal", value: function (a) {
                    for (var b = this, e = (0, I.default)((0, m.default)(a, function (a) {
                        return b.get(a)
                    }), function (a) {
                        return a.attr.x + a.attr.w / 2
                    }), f = e[0].attr.x + e[0].attr.w / 2, g = f, h = e.length, j = 1; j < h; j++) {
                        var i = e[j], k = i.attr.x + i.attr.w / 2;
                        f = c(f, k), g = d(g, k)
                    }
                    var l = (g - f) / (h - 1);
                    (0, m.default)(e, function (a, b) {
                        a.attr.x = f + l * b - a.attr.w / 2
                    })
                }
            }, {
                key: "alignVertical", value: function (a) {
                    for (var b = this, e = (0, I.default)((0, m.default)(a, function (a) {
                        return b.get(a)
                    }), function (a) {
                        return a.attr.y + a.attr.h / 2
                    }), f = e[0].attr.y + e[0].attr.h / 2, g = f, h = e.length, j = 1; j < h; j++) {
                        var i = e[j], k = i.attr.y + i.attr.h / 2;
                        f = c(f, k), g = d(g, k)
                    }
                    var l = (g - f) / (h - 1);
                    (0, m.default)(e, function (a, b) {
                        a.attr.y = f + l * b - a.attr.h / 2
                    })
                }
            }, {
                key: "removeFromPath", value: function (a, b, c, d) {
                    var e = b[0], f = this.ungroupAttr(a, b);
                    return e && this.removeChildren(e, a), this.transformParent(e, d, c), f.parent = null, f
                }
            }, {
                key: "addToPath", value: function (a, b, c) {
                    if (b && b[0]) {
                        var d = b[0];
                        d ? (a = this.groupAttr(a, b), this.addChildren(d, a.id, c), this.transformParent(d, c)) : a.parent = null
                    }
                }
            }, {
                key: "calView", value: function () {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = arguments[1];
                    if (!b.length) return null;
                    var c = a.attr, d = void 0 === c ? {} : c, e = (0, m.default)(b, "attr"),
                        f = (0, k.default)((0, o.default)(e, "x").x), g = (0, k.default)((0, o.default)(e, "y").y),
                        h = (0, q.default)(e, function (a) {
                            return a.x + a.w
                        });
                    h = (0, k.default)(h.x) + (0, k.default)(h.w);
                    var i = (0, q.default)(e, function (a) {
                        return a.y + a.h
                    });
                    return i = (0, k.default)(i.y) + (0, k.default)(i.h), {
                        x: f,
                        y: g,
                        w: h - f - (d.w || 0),
                        h: i - g - (d.h || 0)
                    }
                }
            }, {
                key: "ungroupAttr", value: function (a, b) {
                    var c = this, d = this.get(a);
                    return (0, m.default)(b, function (a) {
                        var b = c.get(a);
                        d.attr.x += b.attr.x, d.attr.y += b.attr.y
                    }), d
                }
            }, {
                key: "groupAttr", value: function (a, b) {
                    var c = this;
                    return (0, m.default)(b, function (b) {
                        var d = c.get(b);
                        a.attr.x -= d.attr.x, a.attr.y -= d.attr.y
                    }), a
                }
            }, {
                key: "isHorizenOverlapping", value: function (a, b) {
                    return 0 === a.x && a.w === b.w
                }
            }, {
                key: "isRightOverlapping", value: function (a, b) {
                    return a.x + a.w === b.w
                }
            }, {
                key: "isVerticalOverlapping", value: function (a, b) {
                    return 0 === a.y && a.h === b.h
                }
            }, {
                key: "isBottomOverlapping", value: function (a, b) {
                    return a.y + a.h === b.h
                }
            }, {
                key: "isFullOverlapping", value: function (a, b) {
                    return a.w === b.w && a.h === b.h && 0 === a.x && 0 === a.y
                }
            }, {
                key: "orderLayerAnimation", value: function (a) {
                    var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], d = arguments[2];
                    if (a && a.config && a.config.animation && (0, ha.isLayer)(a.type)) {
                        var e = a.config.animation, f = [], g = a.config.transform3d, h = [];
                        c.forEach(function (a) {
                            var c = b.get(a), d = void 0, i = void 0, j = e.find(function (b) {
                                return b._id === a
                            });
                            d = j ? j : (0, pa.getDefaultAnimation)(c);
                            var k = g.find(function (b) {
                                return b._id === a
                            });
                            i = k ? k : (0, pa.getDefaultTransform3D)(c), d && f.push(d), i && h.push(i)
                        }), a.config.animation = f, a.config.transform3d = h, d && d()
                    }
                }
            }, {
                key: "loopCopyChildrenLayerAnimation", value: function (a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], c = this, d = arguments[2],
                        e = arguments[3], f = !1;
                    a && a.config && a.config.animation && (0, ha.isLayer)(a.type) && (f = !0);
                    var g, j, k, l;
                    f && (g = a.config.animation || [], j = [], k = a.config.transform3d || [], l = []), b.forEach(function (a, b) {
                        var i = c.get(a);
                        if (f && i) {
                            var m = g[b] ? h({}, (0, ga.default)(g[b]), {_id: a}) : (0, pa.getDefaultAnimation)(i),
                                n = k[b] ? h({}, (0, ga.default)(k[b]), {_id: a}) : (0, pa.getDefaultTransform3D)(i);
                            j.push(m), l.push(n)
                        }
                        (0, ha.isLayer)(i.type) && c.loopCopyChildrenLayerAnimation(i, d.getChildrenId(a), d, e)
                    }), f && (a.config.animation = j, a.config.transform3d = l, e && e(a))
                }
            }, {
                key: "copyLayerAnimationFromIdMap", value: function (a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], c = this, d = arguments[2],
                        e = arguments[3];
                    if (a && a.config && a.config.animation && (0, ha.isLayer)(a.type)) {
                        var f = a.config.animation || [], g = a.config.transform3d || [], i = function (a, e) {
                            var f = [];
                            return b.forEach(function (b) {
                                if (d[b]) {
                                    var g = (0, O.default)(a, {_id: d[b]});
                                    g && f.push(h({}, (0, ga.default)(g), {_id: b}))
                                } else {
                                    var i = (0, O.default)(a, {_id: b});
                                    if (i) f.push(i); else {
                                        var j = c.get(b);
                                        j && f.push(e(j))
                                    }
                                }
                            }), f
                        };
                        a.config.animation = i(f, pa.getDefaultAnimation), a.config.transform3d = i(g, pa.getDefaultTransform3D), e && e(a)
                    }
                }
            }, {
                key: "loopCopyLayerAnimation", value: function (a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], c = arguments[2],
                        d = arguments[3], e = arguments[4];
                    a.parent && this.copyLayerAnimationFromIdMap(this.get(a.parent), c.getChildrenId(a.parent), d, e), this.loopCopyChildrenLayerAnimation(a, b, c, e)
                }
            }]), b
        }(ja.default);
    return b.default = ta, a.exports
});
Cube(58, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && ("object" === typeof b || "function" === typeof b) ? b : a
    }

    function g(a, b) {
        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    Object.defineProperty(b, "__esModule", {value: !0});
    var h = function () {
            function a(a, b) {
                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), i = c(62), j = d(i), k = c(63), l = d(k), m = c(64), n = d(m), o = c(65), p = d(o), q = c(57), r = d(q),
        s = function (a) {
            function b() {
                return e(this, b), f(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
            }

            return g(b, a), h(b, [{
                key: "updateZIndex", value: function (a) {
                    var b = this, c = Object.assign({}, this._attr), d = this.rightLoopZList(a.get(), "", [], c),
                        e = (0, n.default)(c, function (a) {
                            return !0 === a
                        });
                    return Object.keys(e).forEach(function (a) {
                        b._attr[a] && delete b._attr[a]
                    }), Array.prototype.push.apply(d, (0, p.default)(e)), d
                }
            }, {
                key: "setZListIndex", value: function (a, b) {
                    this.set("_" + a + "_z_list_index", b)
                }
            }, {
                key: "getZListIndex", value: function (a) {
                    return this.get("_" + a + "_z_list_index")
                }
            }, {
                key: "delZListIndex", value: function (a) {
                    (0, l.default)(this._attr, "_" + a + "_z_list_index")
                }
            }, {
                key: "markDirty", value: function (a, b) {
                    a["_" + b + "_z_list_index"] = !0
                }
            }, {
                key: "rightLoopZList", value: function (a, b, c, d) {
                    var e = this;
                    return (0, j.default)(a, function (a, f) {
                        var g = a.id, h = e.getZListIndex(g), i = b ? b + "." + f : "" + f;
                        switch (h && h !== i && c.push(i), e.markDirty(d, g), a.type) {
                            case"layer":
                            case"form-layer":
                                a.list && e.rightLoopZList(a.list, i + ".list", c, d), e.setZListIndex(g, i);
                                break;
                            case"com":
                                e.setZListIndex(g, i);
                                break;
                            default:
                        }
                    }), c
                }
            }]), b
        }(r.default);
    return b.default = s, a.exports
});
Cube(35, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && ("object" === typeof b || "function" === typeof b) ? b : a
    }

    function g(a, b) {
        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    var h = function () {
            function a(a, b) {
                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), i = c(30), j = d(i), k = c(31), l = d(k), m = c(33), n = d(m), o = c(53), p = d(o), q = c(54), r = d(q),
        s = c(55), t = d(s), u = c(56), v = d(u), w = c(57), x = d(w), y = c(58), z = d(y), A = c(59), B = d(A),
        C = c(60), D = d(C), E = c(61), F = d(E), G = {
            version: 1,
            config: {
                width: 1920,
                height: 1080,
                grid: 8,
                display: 1,
                backgroundColor: "rgba(13,42,67,0)",
                backgroundImage: null,
                screenShot: null
            }
        }, H = function (a, b, c) {
            c.config || (c.config = G.config), a ? (c.config.zIndexList = (0, n.default)((0, p.default)(a), function (a) {
                return {id: a, type: "com"}
            }), delete c.config.comList) : c.config.zIndexList = (0, n.default)((0, r.default)(b[0].coms, function (a) {
                return !a.parent
            }), function (a) {
                return {id: a.com_id, type: "com"}
            })
        }, I = function (a) {
            H((0, j.default)(a, "config.comList"), (0, j.default)(a, "scenes[0].layers"), a);
            var b = (0, j.default)(a, "scenes[0].layers[0].coms"), c = {};
            return (0, n.default)(b, function (a) {
                a.id = a.com_id || a.id, a.com_id && delete a.com_id, a.type = a.parent && "subCom" || "com", a.comName = a.com.replace(/^\/coms\//, "").replace(new RegExp("/" + a.version.replace(".", "\\.") + "$"), ""), a.requirePath = "/coms/" + a.comName + "/" + a.version, delete a.com, a.pos_id && delete a.pos_id, a.attr && (a.attr.zIndex && delete a.attr.zIndex, a.attr.comId && delete a.attr.comId), c[a.id] = a
            }), (0, l.default)(a, "scenes[0].layers", c), a.snapshotId = a.snapshot_id, delete a.snapshot_id, a.authTime = a.auth_time, delete a.auth_time, a.version = 2, a
        }, J = function (a) {
            function b(a, c, d) {
                e(this, b);
                var g = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, c, G));
                return g._config = d, g.id = a, g._init(), g
            }

            return g(b, a), h(b, [{
                key: "_init", value: function () {
                    var a = this.get("version"), b = !a || 1 === a;
                    b && (this._attr = I(this._attr));
                    var c = this.get("config");
                    (0, t.default)(c.width) || (c.width = parseInt(c.width, 10) || 1920), (0, t.default)(c.height) || (c.height = parseInt(c.height, 10) || 1920);
                    var d = this.get("scenes[0].layers"), e = new z.default, f = new B.default(d, e, this._config),
                        g = new D.default(this.get("config.zIndexList"), e);
                    e.updateZIndex(g);
                    var h = {};
                    f.fix() && (this.set("scenes", "0", "layers", f.get()), !b && (h["scenes[0].layers"] = f.get())), g.fix(f) && (e.updateZIndex(g), this.set("config.zIndexList", g.get()), !b && (h["config.zIndexList"] = g.get())), b && (h = {
                        config: this.get("config"),
                        scenes: this.get("scenes"),
                        version: this.get("version")
                    }), this.convert(h), this.set("layers", f), this.set("layerMap", e), this.set("zIndexList", g)
                }
            }, {
                key: "convert", value: function (a) {
                    (0, v.default)(a) || "preview" === this._config.status || (0, F.default)({
                        url: "/v3/screen/" + this.id,
                        method: "POST",
                        params: {screenId: this.id},
                        data: {
                            config: (0, n.default)(a, function (a, b) {
                                return {key: b, value: a}
                            })
                        }
                    }).then(function () {
                        console.log("convert success")
                    }).catch(function (a) {
                        console.error("convert fail:"), console.error(a)
                    })
                }
            }]), b
        }(x.default);
    return a.exports = J, a.exports
});
Cube(45, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a) {
        if (Array.isArray(a)) {
            for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
            return c
        }
        return Array.from(a)
    }

    function f(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function g(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && ("object" === typeof b || "function" === typeof b) ? b : a
    }

    function h(a, b) {
        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    Object.defineProperty(b, "__esModule", {value: !0});
    var i = function () {
            function a(a, b) {
                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), j = c(3), k = d(j), l = c(30), m = d(l), n = c(31), o = d(n), p = c(48), q = d(p), r = c(49), s = d(r),
        t = c(50), u = d(t), v = c(51), w = d(v), x = c(52), y = d(x), z = function (a) {
            function b(a, c) {
                f(this, b);
                var d = g(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
                return d._attr = a ? (0, k.default)(c || {}, a) : {}, d
            }

            return h(b, a), i(b, [{
                key: "length", value: function () {
                    return this._attr.length
                }
            }, {
                key: "insert", value: function (a, b) {
                    var c = a.split(".");
                    if (1 === c.length) {
                        var d;
                        (0, s.default)(b) ? (d = this._attr).splice.apply(d, [a, 0].concat(e(b))) : this._attr.splice(a, 0, b)
                    } else {
                        var f = "" + (0, u.default)(c).join(".");
                        (0, s.default)(b) ? w.default.apply(void 0, [this._attr, f + ".splice", (0, q.default)(c), 0].concat(e(b))) : (0, w.default)(this._attr, f + ".splice", (0, q.default)(c), 0, b)
                    }
                }
            }, {
                key: "delete", value: function (a) {
                    var b = a.split(".");
                    if (1 === b.length) this._attr.splice(a, 1); else {
                        var c = "" + (0, u.default)(b).join(".");
                        (0, w.default)(this._attr, c + ".splice", (0, q.default)(b), 1)
                    }
                }
            }, {
                key: "overwrite", value: function (a) {
                    return this._attr = a, this.get()
                }
            }, {
                key: "set", value: function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    var d = b.pop();
                    return (0, o.default)(this._attr, b, d), this.get(b)
                }
            }, {
                key: "get", value: function () {
                    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
                    return b.length && "" !== b[0] ? (0, m.default)(this._attr, 1 === b.length && b[0] || b) : this._attr
                }
            }]), b
        }(y.default);
    return b.default = z, a.exports
});
Cube(36, ["/common/share.js"], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function f(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && ("object" === typeof b || "function" === typeof b) ? b : a
    }

    function g(a, b) {
        if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    function h(a) {
        return "ComponentNode" === a.Class
    }

    function i(a, b) {
        return a + "." + b
    }

    function j(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
        return a.forEach(function (a) {
            a.linked = b.some(function (b) {
                return b.id === a.id && b.type === a.type
            })
        }), a
    }

    function k(a) {
        if (!!!a) return [];
        var b = Object.keys(a).map(function (b) {
            var c = a[b], d = q({id: b}, c);
            return "children" in c && (d.children = k(c.children)), "optional" in c && (d.optional = "" + (c.optional ? "\u221A" : "x")), "default" in c && (d.default = JSON.stringify(c.default)), d
        });
        return b
    }

    function l(a, b) {
        var c = a.type, d = a.description, e = void 0 === d ? "" : d, f = a.fields, g = c, h = {
            null: L.get("fields.nullTips"),
            any: L.get("fields.anyTips"),
            array: L.get("fields.arrayTips"),
            object: L.get("fields.objectTips")
        };
        return !!c || (f ? g = ["api", "api$nohttp"].includes(b) ? "array" : "object" : g = "null"), "" + (void 0 === h[g] ? L.get("fields.commonTips", {type: c}) : "" + h[g]) + (void 0 === e ? "" : e)
    }

    function m(a) {
        var b = function (a) {
            return a
        }, c = function (a) {
            return a
        }, d = [{
            key: "apis", prefix: "api", endpointTypes: ["source"], format: function (a) {
                return L.get("apis.asSource", {str: a})
            }
        }, {
            key: "apis", prefix: "api", endpointTypes: ["target"], format: function (a) {
                return L.get("apis.asTarget", {str: a})
            }, preProcessor: function (a) {
                return Object.keys(a).forEach(function (b) {
                    a[b] = (0, w.default)(a[b]), a[b].type = "any", a[b].name = a[b].name || a[b].description, a[b].description = L.get("apis.asTargetDesc"), a[b].fields = {}
                }), a
            }
        }, {
            key: "apis", prefix: "api$nohttp", endpointTypes: ["target"], format: function (a) {
                return L.get("api$nohttp.asTarget", {str: a})
            }
        }, {key: "events", prefix: "event", endpointTypes: ["source"]}, {
            key: "publicHandler",
            prefix: "event",
            endpointTypes: ["target"],
            preProcessor: function (b) {
                if ([I].includes(a.name)) return b;
                var c = {
                    updateConfig: {
                        name: K.get("updateConfig"),
                        type: "object",
                        description: K.get("copyComConfig")
                    }, show: {name: K.get("show"), type: "null"}, hide: {name: K.get("hide"), type: "null"}
                };
                return Object.entries(c).forEach(function (c) {
                    var d = r(c, 2), e = d[0], f = d[1];
                    e in b || "updateConfig" === e && [F.FORM_LAYER_COM_NAME, F.LAYER_COM_NAME].includes(a.name) || (b[e] = (0, u.default)(f))
                }), b
            }
        }, {key: "broadcast", prefix: "broadcast", endpointType: ["target"]}].reduce(function (d, e) {
            var f = e.key, g = e.prefix, h = e.endpointTypes, j = e.preProcessor, m = void 0 === j ? b : j,
                n = e.format, o = void 0 === n ? c : n, p = a[f] || {};
            return p = m((0, w.default)(p)), Object.keys(p).forEach(function (a) {
                var b = i(g, a);
                h.forEach(function (c) {
                    var e = p[a], f = e.name, h = e.description, i = e.fields;
                    d.push({id: b, description: o(f || h), type: c, paramInfo: l(e, g), params: k(i)})
                })
            }), d
        }, []);
        return d
    }

    function n() {
        return {
            cn_name: L.get("node.global"),
            protocol: 2,
            apis: {},
            config: {},
            api_data: {},
            events: {
                coms_ready: {name: K.get("globalNode.events.coms_ready.name")},
                data_ready: {name: K.get("globalNode.events.data_ready.name")}
            },
            publicHandler: {
                updateGlobalVars: {
                    name: K.get("globalNode.publicHandler.updateGlobalVars.name"),
                    fields: {
                        data: {
                            name: K.get("globalNode.publicHandler.updateGlobalVars.data.name"),
                            type: "array",
                            children: {
                                name: {
                                    name: K.get("globalNode.publicHandler.updateGlobalVars.data.name.name"),
                                    type: "string"
                                },
                                value: {
                                    name: K.get("globalNode.publicHandler.updateGlobalVars.data.value.name"),
                                    type: "string | array",
                                    description: K.get("globalNode.publicHandler.updateGlobalVars.data.value.desc")
                                }
                            }
                        }
                    }
                },
                updatePageVars: {
                    name: K.get("globalNode.publicHandler.updatePageVars.name"),
                    fields: {
                        data: {
                            name: K.get("globalNode.publicHandler.updatePageVars.data.name"),
                            type: "array",
                            children: {
                                name: {
                                    name: K.get("globalNode.publicHandler.updatePageVars.data.name.name"),
                                    type: "string"
                                },
                                value: {
                                    name: K.get("globalNode.publicHandler.updatePageVars.data.value.name"),
                                    type: "any"
                                }
                            }
                        }
                    }
                },
                updateAllInstanceAPI: {name: K.get("globalNode.publicHandler.updateAllInstanceAPI.name")}
            },
            validate: {},
            name: "datav-global",
            version: "0.0.0"
        }
    }

    Object.defineProperty(b, "__esModule", {value: !0}), b.GLOBAL_LAYER_INFO = void 0;
    var o = c(38), p = d(o), q = Object.assign || function (a) {
        for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        return a
    }, r = function () {
        function a(a, b) {
            var c = [], d = !0, e = !1, f = void 0;
            try {
                for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !(b && c.length === b)); d = !0) ;
            } catch (a) {
                e = !0, f = a
            } finally {
                try {
                    !d && h["return"] && h["return"]()
                } finally {
                    if (e) throw f
                }
            }
            return c
        }

        return function (b, c) {
            if (Array.isArray(b)) return b;
            if (Symbol.iterator in Object(b)) return a(b, c);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), s = function () {
        function a(a, b) {
            for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }();
    c(39, "");
    var t = c(40), u = d(t), v = c(41), w = d(v), x = c(42), y = d(x), z = c("/common/share.js"), A = d(z), B = c(43),
        C = c(44), D = c(45), E = d(D), F = c(46), G = c(47), H = d(G), I = "datav-global", J = (0, A.default)(),
        K = J.getI18n("common"), L = J.getI18n("nodal"), M = b.GLOBAL_LAYER_INFO = {
            id: "global",
            type: "com",
            comName: L.get("node.global"),
            requirePath: null,
            version: "0.0.0",
            parent: null,
            children: null,
            comType: [],
            alias: L.get("node.global")
        }, N = {id: "global", type: "com"}, O = function (a) {
            function b(a, c) {
                e(this, b);
                var d = f(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, c, {}));
                return d.id = a, d.convertZIndexList(), d.set("GLOBAL_LAYER_INFO", M), d
            }

            return g(b, a), s(b, [{
                key: "_loopGetZIndex", value: function (a) {
                    var b = this, c = this.get("layers");
                    a.forEach(function (a) {
                        var d = a.list, e = void 0 === d ? [] : d, f = a.type, g = c[a.id] || {}, h = g.children,
                            i = void 0 === h ? [] : h;
                        "com" === f && e && !e.length && i && i.length ? a.list = i.map(function (a) {
                            return {id: a, type: c[a].type}
                        }) : b._loopGetZIndex(e)
                    })
                }
            }, {
                key: "convertZIndexList", value: function () {
                    var a = this.get("zIndexList") || [], b = this.get("layers") || {};
                    a.length && (a.unshift((0, u.default)(N)), b[M.id] = (0, u.default)(M), this._loopGetZIndex(a))
                }
            }, {
                key: "init", value: function () {
                    var a = this.get("config.nodes"), b = this.get("config.edges"), c = this.check(a, b), d = c.nodes,
                        e = c.edges;
                    return this.set("config.nodes", d), this.set("config.edges", e), this.parse(d, e)
                }
            }, {
                key: "check", value: function (a, b) {
                    var c = this.get("layers"), d = [], e = [], f = a.filter(function (a) {
                        var b = !h(a) || "global" === a.id || !!c[a.id];
                        return b || d.push(a.id), b
                    }), g = b.filter(function (b) {
                        var d = a.find(function (a) {
                            return a.id === b.sourceNode
                        }), f = a.find(function (a) {
                            return a.id === b.targetNode
                        }), g = [d, f].every(function (a) {
                            return !!a && (!h(a) || "global" === a.id || !!c[a.id])
                        });
                        return g || e.push(b.id), g
                    });
                    return (d.length || e.length) && H.default.processGraph({removeNodes: d, removeEdges: e}, function () {
                        return p.default.success(L.get("nodes.fitSuccess"))
                    }), {nodes: f, edges: g}
                }
            }, {
                key: "parse", value: function () {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                        b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                        c = Promise.resolve({nodes: a, edges: b});
                    if (!a.length) return c;
                    var d = this.get("layers"), e = a.reduce(function (a, b, c) {
                        if (!h(b)) return a;
                        var e = d[b.id];
                        return "layer" === e.type ? (b.name = e.alias || e.id || e.comName || "", b.thumbnail = $("<i class=\"datav-font icon-layer\" />"), a.add(F.LAYER_COM_NAME, c)) : "form-layer" === e.type ? (b.name = e.alias || e.id || e.comName || "", b.thumbnail = $("<i class=\"datav-font icon-layer\" />"), a.add(F.FORM_LAYER_COM_NAME, c)) : "global" === e.id ? (b.thumbnail = $("<i class=\"datav-font icon-global\" />"), a.add(I, c)) : (b.name = e.alias || e.id || e.comName || "", b.thumbnail = $((0, y.default)(e.comType && e.comType[0], e.comName)), a.add(e.comName + "/" + e.version, c)), a
                    }, new P).toArray();
                    if (!e.length) return c;
                    var f = e.map(function (a) {
                        var b = r(a, 1), c = b[0];
                        return c === F.LAYER_COM_NAME || c === F.FORM_LAYER_COM_NAME ? (0, B.getLayerInfo)(c) : c === I ? n() : (0, B.getComponentInfo)(C.nodeAxios, c)
                    });
                    return Promise.all(f).then(function (c) {
                        var d = c.map(m), f = b.reduce(function (a, b) {
                            return a.add(b.sourceNode, {type: "source", id: b.source}), a.add(b.targetNode, {
                                type: "target",
                                id: b.target
                            }), a
                        }, new P);
                        return e.forEach(function (b, c) {
                            var e = r(b, 2), g = e[1], h = d[c];
                            g.forEach(function (b) {
                                var c = a[b], d = (0, u.default)(h), e = f.get(c.id);
                                c.endpointList = j(d, e)
                            })
                        }), {nodes: a, edges: b}
                    })
                }
            }]), b
        }(E.default);
    a.exports = O;
    var P = function () {
        function a() {
            e(this, a), this._config = new Map
        }

        return s(a, [{
            key: "add", value: function (a, b) {
                var c = this._config;
                c.has(a) ? c.get(a).push(b) : c.set(a, [b])
            }
        }, {
            key: "toArray", value: function () {
                return Array.from(this._config)
            }
        }, {
            key: "get", value: function (a) {
                return a ? this._config.get(a) : this._config
            }
        }]), a
    }();
    return a.exports
});
Cube(34, [], function (a) {
    function b(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a
    }

    function c(a) {
        this._config = a, this._setNamespace(a.namespace), this._setLocale(a.locale), this._setDefaultLocale(a.defaultLocale), this._setDefaultValue(a.defaultValue), this._setLangPacks(a.parsePage ? this._parsePage() : {}), this._setLangPacks(a.langPacks), this._setData(a.data)
    }

    var d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (a) {
        return typeof a
    } : function (a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    };
    return c.prototype._inspectValue = function (a) {
        return a && "string" === typeof a ? a : ""
    }, c.prototype._parsePage = function () {
        var a = {}, b = document.querySelectorAll("script[type=\"json/i18n\"]");
        return Array.prototype.forEach.call(b, function (b) {
            var c = this._inspectValue(b.getAttribute("locale"));
            try {
                var d = JSON.parse(b.textContent);
                a[c] ? Object.assign(a[c], d) : a[c] = d
            } catch (a) {
                console && console.warn && console.warn("\u6587\u6848\u89E3\u6790\u5931\u8D25\uFF0C\u8282\u70B9\u5185\u5BB9\uFF1A\n%s", b.outerHTML)
            }
        }), a
    }, c.prototype._setNamespace = function (a) {
        this._namespace = this._inspectValue(a)
    }, c.prototype._setLocale = function (a) {
        this._locale = this._inspectValue(a)
    }, c.prototype._setDefaultLocale = function (a) {
        this._defaultLocale = this._inspectValue(a)
    }, c.prototype._setDefaultValue = function (a) {
        this._defaultValue = this._inspectValue(a)
    }, c.prototype._setLangPacks = function (a) {
        this._langPacks || (this._langPacks = {}), "object" !== ("undefined" === typeof a ? "undefined" : d(a)) && (a = {});
        var b = this;
        Object.keys(a).forEach(function (c) {
            var d = a[c];
            c = c || b._getLocal(), b._langPacks[c] ? Object.assign(b._langPacks[c], d) : b._langPacks[c] = d
        })
    }, c.prototype._setData = function (a) {
        this._data || (this._data = {}), Object.assign(this._data, a)
    }, c.prototype._getCookieLocal = function () {
        return (CookieInfo.getLocale() || "").replace(/_/, "-").toLowerCase()
    }, c.prototype._getBrowserLanguage = function () {
        return (navigator.language || navigator.browserLanguage || "").replace(/_/, "-").toLowerCase()
    }, c.prototype._getLocal = function () {
        var a = this._locale || this._defaultLocale || this._getCookieLocal() || this._getBrowserLanguage() || "en-us";
        return a
    }, c.prototype._getLangPack = function (a) {
        return a = a && "undefined" !== typeof a ? a : this._getLocal(), this._langPacks[a]
    }, c.prototype._getName = function (a) {
        var b = this._namespace;
        return "" === b ? a : b + "." + a
    }, c.prototype._getValue = function (a, b) {
        if ("string" !== typeof a) return console && console.warn && console.warn("\u6587\u6848\u7D22\u5F15 [%s] \u4E0D\u5408\u7B26\u8981\u6C42\u3002", a), !1;
        var c = this._getLangPack(b), d = this._getName(a);
        return c ? c[d] : void 0
    }, c.prototype._getCopy = function (a, b) {
        if ("string" === typeof a) {
            var c = "__i18n-react-split__", e = {}, f = this,
                g = a.replace(/\{\s*(?:([^}\s]+)\s+)?([^}\s]+)(?:\s+([^}]+))*\s*\}/g, function (a, g, h, i) {
                    var j;
                    if (b && (j = b[h]), "undefined" === typeof j && (j = f._data[h]), g) {
                        var k = Helpers[g];
                        if (k) try {
                            j = k.bind(f)(h, j, i)
                        } catch (a) {
                            console && console.warn && console.warn("\u8F85\u52A9\u65B9\u6CD5 [%s] \u6267\u884C\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u65B9\u6CD5\u4F53\u4EE3\u7801\u3002", g)
                        } else console && console.warn && console.warn("\u8F85\u52A9\u65B9\u6CD5 [%s] \u4E0D\u5B58\u5728\uFF0C\u8BF7\u786E\u8BA4\u6587\u6848\u5B9A\u4E49\u662F\u5426\u6B63\u786E\u3002", g)
                    } else j && "symbol" === d(j.$$typeof) && (e[h] = j, j = c + h + c);
                    return "" + j || a
                });
            return -1 < g.indexOf(c) ? g.split(c).map(function (a, b) {
                return e[a] ? cloneElement(e[a], {key: b}) : a
            }).filter(function (a) {
                return !!a
            }) : g
        }
        return a
    }, c.prototype.parsePage = function () {
        var a = this._parsePage();
        this._setLangPacks(a)
    }, c.prototype.has = function (a, b) {
        var c = this._getValue(a, b);
        return "undefined" !== typeof c
    }, c.prototype.get = function (a, b, c) {
        try {
            b && "object" === ("undefined" === typeof b ? "undefined" : d(b)) && (c = b, b = this._getLocal());
            var e = this.getOriginal(a, b);
            return e && c ? this._getCopy(e, c) : e
        } catch (c) {
            console.warn("i18n not found", a, b, this._locale)
        }
    }, c.prototype.getKeys = function (a) {
        var b = [], c = "" + a, d = this._config.region.toUpperCase(), e = (this._config.source || "").toUpperCase();
        return b.push(c), c = c + "_" + d, b.push(c), this._config.is4service && (c += "_SV", b.push(c), e && (c = c + "_" + e, b.push(c))), b
    }, c.prototype.getOriginal = function (a, c) {
        c = c || this._getLocal();
        for (var d = void 0, e = void 0, f = this.getKeys(a), g = f[f.length - 1]; f.length && (e = f.pop(), d = this._getValue(e, c), !d);) ;
        return e && e !== g && this._setLangPacks(b({}, c, b({}, this._namespace + "." + g, d))), !d && console && console.warn && console.warn("[" + this._namespace + "].[" + a + "] not found in [" + c + "]"), d
    }, c.prototype.getLocale = function () {
        return this._getLocal()
    }, c.prototype.setConfig = function (a) {
        "object" !== ("undefined" === typeof a ? "undefined" : d(a)) && (a = {}), Object.keys(a).forEach(function (b) {
            var c = "_set" + b.replace(/^(.)/, function (a) {
                return a.toUpperCase()
            });
            this[c] && this[c](a[b])
        })
    }, a.exports = c, a.exports
});
Cube("/common/share.js", ["/37.js"], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a) {
        this._attr = {}, this._init(a)
    }

    var f = c(30), g = d(f), h = c(31), i = d(h), j = c(32), k = d(j), l = c(3), m = d(l), n = c(33), o = d(n),
        p = c(34), q = d(p), r = c(35);
    e.prototype._init = function (a) {
        var b = this;
        (0, k.default)(a, function (a, c) {
            if ("datasourceList" === c || "rdsInnerRegions" === c || "rdsInnerRegions2" === c) try {
                a = JSON.parse(a)
            } catch (b) {
                console.error("\u6570\u636E\u6E90\u5217\u8868\u89E3\u6790\u9519\u8BEF"), a = null
            }
            b.set(c, a)
        });
        var c = !!a.ACLs && a.ACLs.fresh || "standard" !== this.get("level");
        if (a.config) {
            var d = this.set("screenConfig", new r(a.id, a.config, {
                status: a.status,
                componentcenter: a.componentcenter,
                datacenter: a.datacenter,
                id: a.id,
                locale: a.locale,
                enableCarousel: c,
                getI18n: this.getI18n.bind(this)
            }));
            this.set("screen", d.get("screen")), this.set("pageConfig", d.get("config")), this.set("layers", d.get("layers")), this.set("layerMap", d.get("layerMap")), this.set("zIndexList", d.get("zIndexList"))
        }
        this.prepareI18n(), this.set("isStandard", "standard" === this.get("level")), this.set("isAdvanced", "advanced" === this.get("level")), this.set("isDeveloper", "developer" === this.get("level")), this.set("isProfessional", "professional" === this.get("level")), this.set("is4service", "true" === this.get("is4service")), this.set("enableCarousel", c), delete window.localStorage.readyToCopy
    }, e.prototype.initNodalConfig = function () {
        var a = this.get("id"), b = this.get("nodalConfig");
        if (b) {
            var d = c(36), e = new d(a, b);
            this.set("nodalConfig", e), this.set("pageConfig", e.get("config.pageConfig")), this.set("layers", e.get("layers")), this.set("zIndexList", e.get("zIndexList")), this.set("ruleTemplateList", e.get("ruleTemplateList"))
        }
    }, e.prototype.prepareI18n = function () {
        var a = {}, b = document.querySelectorAll("script[type=\"json/i18n\"]");
        Array.prototype.forEach.call(b, function (b) {
            try {
                a = (0, m.default)(a, JSON.parse(b.textContent))
            } catch (a) {
                console && console.warn && console.warn("\u6587\u6848\u89E3\u6790\u5931\u8D25\uFF0C\u8282\u70B9\u5185\u5BB9\uFF1A\n%s", b.outerHTML)
            }
        }), this.set("i18n", a)
    }, e.prototype.getI18n = function (a, b) {
        var c = a + (b ? "_plain" : "");
        if (this.i18nMap || (this.i18nMap = {}), !this.i18nMap[c] && this.get("i18n")) if (b) {
            var d = {}, e = this.get("i18n");
            Object.keys(e).forEach(function (b) {
                0 == b.indexOf(a + ".") && (d[b.replace(a + ".", "")] = e[b])
            }), this.i18nMap[c] = d
        } else {
            var f = {
                namespace: a,
                parsePage: !1,
                locale: this.get("locale"),
                langPacks: {},
                region: this.get("region"),
                is4service: this.get("is4service"),
                source: this.get("source") || null
            };
            f.langPacks[this.get("locale")] = this.get("i18n"), this.i18nMap[c] = new q.default(f)
        }
        return this.i18nMap[c] || null
    }, e.prototype.getComponentClass = function (a, b) {
        var c = this, d = this.get("layers"), e = d.get(a);
        if (!e || !e.requirePath) return b && b();
        var f = e.requirePath, g = e.children, h = this.getComClass(f);
        if (!h) {
            var i = "datav:" + f.replace(/^\/coms\//, "/com/");
            Cube.use(i, function (a) {
                a && c.setComClass(f, a), c.getChildComponentClass(g, b && b.bind(b, a))
            })
        } else this.getChildComponentClass(g, b && b.bind(b, h))
    }, e.prototype.getChildComponentClass = function (a, b) {
        var c = this;
        if (!a || !a.length) return b && b();
        var d = 0, e = a.length;
        (0, o.default)(a, function (a) {
            c.getComponentClass(a, function () {
                d++, d >= e && b && b()
            })
        })
    }, e.prototype.getComClass = function (a) {
        return this.get("comClasses." + a.replace(/\./g, "_"))
    }, e.prototype.setComClass = function (a, b) {
        return this.set("comClasses." + a.replace(/\./g, "_"), b)
    }, e.prototype.set = function (a, b) {
        return (0, i.default)(this._attr, a, b), (0, g.default)(this._attr, a)
    }, e.prototype.get = function (a) {
        return (0, g.default)(this._attr, a)
    };
    var s = "__DATAV_HotKeyLock__";
    e.prototype.setHotKeyLock = function (a) {
        return this.set(s, a)
    }, e.prototype.getHotKeyLock = function () {
        return this.get(s)
    };
    var t = null;
    return a.exports = function (a) {
        return t || (t = new e(a), a.nodalConfig && t.initNodalConfig()), t
    }, a.exports
});