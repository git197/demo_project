Cube(706, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    var f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (a) {
        return typeof a
    } : function (a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    }, g = function () {
        function a(a, b) {
            for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
        }

        return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
        }
    }(), h = c(91), i = d(h), j = c(398), k = d(j), l = function () {
        function a() {
            e(this, a), this.variables = {}, this.components = {}, this.componentsView = {}, this.publishersView = {}, this.subscribersView = {}, this.globalVars = k.default.globalVars
        }

        return g(a, [{
            key: "init", value: function (a) {
                this.componentsView = a.componentsView || {}, this.publishersView = a.publishersView || {}, this.subscribersView = a.subscribersView || {}
            }
        }, {
            key: "bindEvent", value: function (a, b) {
                var c = this, d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function () {
                };
                this.components[a] = b;
                var e = this.componentsView[a], g = !1;
                return e ? void (Object.keys(e).forEach(function (a) {
                    var d = e[a];
                    if (d.enable) {
                        var h = d.fields || {}, i = d.customs || {};
                        g = !0, b.on(a, function (a) {
                            var b = [];
                            if ("string" === typeof a || "number" === typeof a) ; else if (null === a) ; else if (Array.isArray(a)) {
                                var d = {};
                                a.forEach(function (a) {
                                    "object" !== ("undefined" === typeof a ? "undefined" : f(a)) || null === a || Object.keys(a).forEach(function (c) {
                                        var e = h[c];
                                        e && (!d[e] && (d[e] = []), d[e].push(a[c]), b.push(e)), Object.keys(i).forEach(function (e) {
                                            var f = i[e].variable;
                                            i[e].field === c && f && (!d[f] && (d[f] = []), d[f].push(a[c]), b.push(f))
                                        })
                                    })
                                }), Object.assign(c.variables, d)
                            } else "object" === ("undefined" === typeof a ? "undefined" : f(a)) && Object.keys(a).forEach(function (d) {
                                var e = h[d];
                                e && (c.variables[e] = a[d], b.push(e)), Object.keys(i).forEach(function (e) {
                                    var f = i[e].variable;
                                    i[e].field === d && f && (c.variables[f] = a[d], b.push(f))
                                })
                            });
                            c.notice(b)
                        })
                    }
                }), !g && this.compatible(b, d)) : void this.compatible(b, d)
            }
        }, {
            key: "notice", value: function (a) {
                var b = this, c = [], d = this.subscribersView;
                a.forEach(function (a) {
                    d[a] && (c = c.concat(d[a])), b.globalVars.set(a, b.variables[a])
                }), c = (0, i.default)(c), c.forEach(function (a) {
                    var c = b.components[a];
                    c && Object.keys(c.__datav_dataconfig || {}).forEach(function (a) {
                        var b = c.__datav_dataconfig[a].handler, d = c.__datav_datasources[a];
                        d && b && c[b] && d(function (a, b) {
                            return function (c, d) {
                                try {
                                    a[b](d)
                                } catch (a) {
                                    console.error(a), console.error(a.stack)
                                }
                            }
                        }(c, b))
                    })
                })
            }
        }, {
            key: "compatible", value: function (a, b) {
                a && a.on("global_var", b)
            }
        }, {
            key: "setVariables", value: function () {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                Object.assign(this.variables, a)
            }
        }]), a
    }();
    return a.exports = new l, a.exports
});
Cube(707, ["/common/share.js"], function (a, b, c) {
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

    var g = Object.assign || function (a) {
            for (var b, c = 1; c < arguments.length; c++) for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
            return a
        }, h = function () {
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
        }(), i = function () {
            function a(a, b) {
                for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c)
            }

            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(), j = c(657), k = d(j), l = c(28), m = d(l), n = c(202), o = d(n), p = c(40), q = d(p), r = c(398), s = d(r),
        t = c(142), u = d(t), v = c(46), w = c(678), x = c("/common/share.js"), y = d(x), z = (0, y.default)(),
        A = z.getI18n("common"), B = new w.LogClient, C = {
            id: {required: 0},
            source: {required: 1},
            target: {required: 1},
            sourceFunction: {required: 1},
            targetFunction: {required: 1},
            disabled: {required: 0},
            rules: {required: 0}
        }, D = function () {
            var a = !1;
            try {
                a = window.parent.location.pathname.includes("/admin/node/")
            } catch (a) {
            }
            if (a) {
                var b;
                (b = console).info.apply(b, arguments)
            }
        }, E = function () {
            function a() {
                f(this, a), this.components = {}, this.events = [], this.rules = [], this.globalVars = s.default.globalVars, this.pageVars = new F
            }

            return i(a, [{
                key: "init", value: function (a, b) {
                    this.addNewEvents(a), this.addNewRules(b)
                }
            }, {
                key: "_checkEventIllegal", value: function (a) {
                    return Object.keys(C).every(function (b) {
                        return !C[b].required || a[b]
                    })
                }
            }, {
                key: "_isTarget", value: function (a, b) {
                    return Object.keys(b).every(function (c) {
                        return b[c] === a[c]
                    })
                }
            }, {
                key: "_rearrage", value: function (a) {
                    a.sort(function (c, a) {
                        var b = "global" === c.target, d = "global" === a.target;
                        return b && !d ? -1 : !b && d ? 1 : 0
                    })
                }
            }, {
                key: "has", value: function (a) {
                    return a && !!this.events.find(function (b) {
                        return b.id === a
                    })
                }
            }, {
                key: "_getRealFuncName", value: function (a) {
                    var b = a.match(v.FUNCNAME_TYPE_REGX);
                    return 3 === b.length ? [b[1], b[2]] : (console.error(a + " is invalid event name, please use 'event.'\u3001 'api.'\u3001'api$nohttp' as prefix."), !1)
                }
            }, {
                key: "getEventsByFilter", value: function () {
                    var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, c = this.events,
                        d = void 0 === c ? [] : c;
                    return d.filter(function (c) {
                        return a._isTarget(c, b)
                    }) || []
                }
            }, {
                key: "bindEvent", value: function (a, b) {
                    this.addComponent(a, b);
                    var c = this.getEventsByFilter({source: a});
                    return this._doBind(c), this
                }
            }, {
                key: "excuteTargetFunction", value: function (a, b, c, d) {
                    var e = b.id, f = b.target, g = b.targetFunction, i = b._tgtFunction, j = h(i, 2), k = j[0], l = j[1];
                    try {
                        switch (k) {
                            case"event":
                                if ("global" !== f) {
                                    if (!u.default.hasFun(f, l)) return console.error("No " + l + " publicHandler in " + f + ".Please check the component."), void D("[" + e + "]: interrupt.");
                                    u.default.exec(f, l, c)
                                } else a[l] && (0, o.default)(a[l]) && a[l](c);
                                break;
                            case"api":
                                u.default.updateData(f, l, c);
                                break;
                            case"api$nohttp":
                                c.nohttp = !0, u.default.updateData(f, l, c);
                                break;
                            case"broadcast":
                                break;
                            default:
                        }
                        D("[" + e + "-TARGET]: ", f, "|", g, "|", c), B.send({
                            timestamp: d,
                            type: "target",
                            eventId: e,
                            entityId: f,
                            apiId: g,
                            data: c
                        })
                    } catch (a) {
                        console.error("[" + e + "-TARGET]: ", f, "|", g, "|", c, a), B.send({
                            timestamp: d,
                            type: "target",
                            eventId: e,
                            entityId: f,
                            apiId: g,
                            data: c,
                            error: a.message
                        })
                    }
                }
            }, {
                key: "excuteRules", value: function (a, b, c) {
                    var d = this, e = a.id, f = a.rules, g = !0, h = this.globalVars.get.bind(this.globalVars),
                        i = this.pageVars.get.bind(this.pageVars);
                    return (0, m.default)(f, function (a) {
                        var f = a.type, j = a.children;
                        return (0, m.default)(j, function (a) {
                            var j = d.rules[a] || {}, k = j.code, l = j.name;
                            if (!(0, o.default)(k)) return void console.error(a + " " + l + " is omitted, because it isn't function.");
                            try {
                                "trigger" === f ? (g = !!k(Object.freeze((0, q.default)(b)), h, i), D("[" + e + "-" + f.toUpperCase() + "]: ", a, "|", l, "|", !!g), B.send({
                                    timestamp: c,
                                    type: f,
                                    eventId: e,
                                    entityId: a,
                                    entityName: l,
                                    data: g
                                })) : "transform" === f && (b = k(b, h, i), D("[" + e + "-" + f.toUpperCase() + "]: ", a, "|", l, "|", b), B.send({
                                    timestamp: c,
                                    type: f,
                                    eventId: e,
                                    entityId: a,
                                    entityName: l,
                                    data: b
                                }))
                            } catch (b) {
                                console.error("[" + e + "-" + f.toUpperCase() + "-ERROR]: ", a, "|", l, "|", b), B.send({
                                    timestamp: c,
                                    type: f,
                                    eventId: e,
                                    entityId: a,
                                    entityName: l,
                                    error: b.message
                                }), g = !1
                            }
                            return g
                        }), g
                    }), {allowed: g, data: g ? b : null}
                }
            }, {
                key: "_doBind", value: function (a) {
                    var b = this;
                    a.forEach(function (a) {
                        a._bound || (a.handler = function (c) {
                            var d = b.components[a.target], e = "global" === a.target;
                            if (!d && !e) return void console.error(a.target + " target component is not existed!");
                            D("[" + a.id + "-SOURCE]: ", a.source, "|", a.sourceFunction, "|", c);
                            var f = new Date().getTime();
                            B.send({
                                timestamp: f,
                                type: "source",
                                eventId: a.id,
                                entityId: a.source,
                                apiId: a.sourceFunction,
                                data: c
                            });
                            var g = b.excuteRules(a, Object.freeze((0, q.default)(c)), f), h = g.allowed, i = g.data;
                            return h ? void b.excuteTargetFunction(d, a, i, f) : (D("[" + a.id + "]: interrupt."), !1)
                        }, a._bound = !0, !a.disabled && b.enableEventsByFilter(null, [a]))
                    })
                }
            }, {
                key: "_getRules", value: function () {
                    var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                    return b.forEach(function (b) {
                        var c = b.children;
                        Array.isArray(c) || (c = []), b.children = c.map(function (b) {
                            if (!(0, o.default)(b)) return b;
                            var c = (0, k.default)(7),
                                d = [{id: (0, k.default)(7), name: A.get("common.nodal.rule"), code: b}];
                            return a.addNewRules(d), c
                        })
                    }), b
                }
            }, {
                key: "addComponent", value: function (a, b) {
                    return b ? this.components[a] && this.components[a] !== b ? void console.warn(a + " must not be changed, events will bind on the original component!") : void (this.components[a] = b) : void 0
                }
            }, {
                key: "addNewEvents", value: function () {
                    var a, b = this, c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                        d = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                    this._rearrage(c);
                    var f = null, g = null;
                    d.forEach(function (a) {
                        return b.addComponent(a.id, a.com)
                    });
                    var h = c.reduce(function (a, c) {
                        return b.has(c.id) ? (console.error("Event " + c.id + " is already exist!"), a) : b._checkEventIllegal(c) ? (f = b._getRealFuncName(c.sourceFunction), g = b._getRealFuncName(c.targetFunction), f && g ? a.concat({
                            id: c.id || (0, k.default)(7),
                            source: c.source,
                            target: c.target,
                            sourceFunction: c.sourceFunction,
                            targetFunction: c.targetFunction,
                            disabled: !!c.disabled,
                            rules: b._getRules(c.rules),
                            _srcFunction: f,
                            _tgtFunction: g,
                            _bound: !1
                        }) : a) : (console.error("There're empty values in " + c + "!"), a)
                    }, []);
                    return (a = this.events).push.apply(a, e(h)), d.length && this._doBind(h), this
                }
            }, {
                key: "addNewRules", value: function () {
                    var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                    return b.forEach(function (b) {
                        var c = b.id, d = b.code;
                        return ("string" === typeof d && (d = new Function("data", "getCallbackValue", "getLocalValue", d)), !(0, o.default)(d)) ? void console.warn("The code of rule " + c + " must be a \"Function\" or a \"String\"!") : void (void 0 !== a.rules[c] && console.warn("Rule " + c + " has already existed and will be overwrited"), a.rules[c] = g({}, b, {code: d}))
                    }), this
                }
            }, {
                key: "removeEventsByFilter", value: function (a) {
                    var b = this, c = this.events, d = this.components, f = !1;
                    return this.events = c.filter(function (c) {
                        return f = b._isTarget(c, a), f && d[c.source].removeListener(c._srcFunction[1], c.handler), f
                    }), this
                }
            }, {
                key: "disableEventsByFilter", value: function (a, b) {
                    var c = this.components;
                    return b = b || this.getEventsByFilter(a), b.forEach(function (a) {
                        c[a.source] && (c[a.source].removeListener(a._srcFunction[1], a.handler), a.disabled = !0)
                    }), this
                }
            }, {
                key: "enableEventsByFilter", value: function (a, b) {
                    var c = this.components;
                    return b = b || this.getEventsByFilter(a), b.forEach(function (a) {
                        c[a.source] && (c[a.source].on(a._srcFunction[1], a.handler), a.disabled = !1)
                    }), this
                }
            }, {
                key: "toggleEventsByFilter", value: function (a, b) {
                    var c = this;
                    return b = b || this.getEventsByFilter(a), b.forEach(function (a) {
                        a.disabled ? c.enableEventsByFilter(null, [a]) : c.disableEventsByFilter(null, [a])
                    }), this
                }
            }, {
                key: "getAllEvents", value: function () {
                    return this.events
                }
            }]), a
        }(), F = function () {
            function a() {
                f(this, a), this.variableMap = {}
            }

            return i(a, [{
                key: "regist", value: function () {
                }
            }, {
                key: "set", value: function (a, b) {
                    a && (this.variableMap[a] = b)
                }
            }, {
                key: "get", value: function (a) {
                    return a ? this.variableMap[a] : void console.error("There's no " + a + " page var.")
                }
            }, {
                key: "getAll", value: function () {
                    return this.variableMap
                }
            }]), a
        }();
    return a.exports = new E, a.exports
});
Cube(704, [], function (a) {
    var b = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (a) {
        return typeof a
    } : function (a) {
        return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    };
    return function (c, d) {
        "use strict";
        "object" === ("undefined" === typeof a ? "undefined" : b(a)) && "object" === b(a.exports) ? a.exports = c.document ? d(c, !0) : function (a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return d(a)
        } : d(c)
    }("undefined" === typeof window ? void 0 : window, function (a, c) {
        "use strict";

        function d(a, b, c) {
            b = b || ja;
            var d, e = b.createElement("script");
            if (e.text = a, c) for (d in xa) c[d] && (e[d] = c[d]);
            b.head.appendChild(e).parentNode.removeChild(e)
        }

        function e(a) {
            return null == a ? a + "" : "object" === ("undefined" === typeof a ? "undefined" : b(a)) || "function" === typeof a ? pa[qa.call(a)] || "object" : "undefined" === typeof a ? "undefined" : b(a)
        }

        function f(a) {
            var b = !!a && "length" in a && a.length, c = e(a);
            return !(va(a) || wa(a)) && ("array" === c || 0 === b || "number" === typeof b && 0 < b && b - 1 in a)
        }

        function g(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }

        function h(a, b, c) {
            return va(b) ? za.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            }) : b.nodeType ? za.grep(a, function (a) {
                return a === b !== c
            }) : "string" === typeof b ? za.filter(b, a, c) : za.grep(a, function (a) {
                return -1 < oa.call(b, a) !== c
            })
        }

        function i(a, b) {
            for (; (a = a[b]) && 1 !== a.nodeType;) ;
            return a
        }

        function j(a) {
            var b = {};
            return za.each(a.match(La) || [], function (a, c) {
                b[c] = !0
            }), b
        }

        function k(a) {
            return a
        }

        function l(a) {
            throw a
        }

        function m(a, b, c, d) {
            var e;
            try {
                a && va(e = a.promise) ? e.call(a).done(b).fail(c) : a && va(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
            } catch (a) {
                c.apply(void 0, [a])
            }
        }

        function n() {
            ja.removeEventListener("DOMContentLoaded", n), a.removeEventListener("load", n), za.ready()
        }

        function o(a, b) {
            return b.toUpperCase()
        }

        function p(a) {
            return a.replace(Pa, "ms-").replace(Qa, o)
        }

        function q() {
            this.expando = za.expando + q.uid++
        }

        function r(a) {
            return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Ua.test(a) ? JSON.parse(a) : a)
        }

        function s(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Va, "-$&").toLowerCase(), c = a.getAttribute(d), "string" === typeof c) {
                try {
                    c = r(c)
                } catch (a) {
                }
                Ta.set(a, b, c)
            } else c = void 0;
            return c
        }

        function t(a, b, c, d) {
            var e, f, g = 20, h = d ? function () {
                    return d.cur()
                } : function () {
                    return za.css(a, b, "")
                }, i = h(), j = c && c[3] || (za.cssNumber[b] ? "" : "px"),
                k = (za.cssNumber[b] || "px" !== j && +i) && Xa.exec(za.css(a, b));
            if (k && k[3] !== j) {
                for (i /= 2, j = j || k[3], k = +i || 1; g--;) za.style(a, b, k + j), 0 >= (1 - f) * (1 - (f = h() / i || .5)) && (g = 0), k /= f;
                k *= 2, za.style(a, b, k + j), c = c || []
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }

        function u(a) {
            var b, c = a.ownerDocument, d = a.nodeName, e = _a[d];
            return e ? e : (b = c.body.appendChild(c.createElement(d)), e = za.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), _a[d] = e, e)
        }

        function v(a, b) {
            for (var c, d, e = [], f = 0, g = a.length; f < g; f++) (d = a[f], !!d.style) && (c = d.style.display, b ? ("none" === c && (e[f] = Sa.get(d, "display") || null, !e[f] && (d.style.display = "")), "" === d.style.display && Za(d) && (e[f] = u(d))) : "none" !== c && (e[f] = "none", Sa.set(d, "display", c)));
            for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
            return a
        }

        function w(a, b) {
            var c;
            return c = "undefined" === typeof a.getElementsByTagName ? "undefined" === typeof a.querySelectorAll ? [] : a.querySelectorAll(b || "*") : a.getElementsByTagName(b || "*"), void 0 === b || b && g(a, b) ? za.merge([a], c) : c
        }

        function x(a, b) {
            for (var c = 0, d = a.length; c < d; c++) Sa.set(a[c], "globalEval", !b || Sa.get(b[c], "globalEval"))
        }

        function y(a, b, c, d, f) {
            for (var g, h, k, m, n, o, j = b.createDocumentFragment(), p = [], q = 0, i = a.length; q < i; q++) if (g = a[q], g || 0 === g) if ("object" === e(g)) za.merge(p, g.nodeType ? [g] : g); else if (!eb.test(g)) p.push(b.createTextNode(g)); else {
                for (h = h || j.appendChild(b.createElement("div")), k = (bb.exec(g) || ["", ""])[1].toLowerCase(), m = db[k] || db._default, h.innerHTML = m[1] + za.htmlPrefilter(g) + m[2], o = m[0]; o--;) h = h.lastChild;
                za.merge(p, h.childNodes), h = j.firstChild, h.textContent = ""
            }
            for (j.textContent = "", q = 0; g = p[q++];) {
                if (d && -1 < za.inArray(g, d)) {
                    f && f.push(g);
                    continue
                }
                if (n = za.contains(g.ownerDocument, g), h = w(j.appendChild(g), "script"), n && x(h), c) for (o = 0; g = h[o++];) cb.test(g.type || "") && c.push(g)
            }
            return j
        }

        function z() {
            return !0
        }

        function A() {
            return !1
        }

        function B() {
            try {
                return ja.activeElement
            } catch (a) {
            }
        }

        function C(a, c, d, e, f, g) {
            var h, i;
            if ("object" === ("undefined" === typeof c ? "undefined" : b(c))) {
                for (i in "string" !== typeof d && (e = e || d, d = void 0), c) C(a, i, d, e, c[i], g);
                return a
            }
            if (null == e && null == f ? (f = d, e = d = void 0) : null == f && ("string" === typeof d ? (f = e, e = void 0) : (f = e, e = d, d = void 0)), !1 === f) f = A; else if (!f) return a;
            return 1 === g && (h = f, f = function (a) {
                return za().off(a), h.apply(this, arguments)
            }, f.guid = h.guid || (h.guid = za.guid++)), a.each(function () {
                za.event.add(this, c, f, e, d)
            })
        }

        function D(a, b) {
            return g(a, "table") && g(11 === b.nodeType ? b.firstChild : b, "tr") ? za(a).children("tbody")[0] || a : a
        }

        function E(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function F(a) {
            return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a
        }

        function G(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (Sa.hasData(a) && (f = Sa.access(a), g = Sa.set(b, f), j = f.events, j)) for (e in delete g.handle, g.events = {}, j) for (c = 0, d = j[e].length; c < d; c++) za.event.add(b, e, j[e][c]);
                Ta.hasData(a) && (h = Ta.access(a), i = za.extend({}, h), Ta.set(b, i))
            }
        }

        function H(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && ab.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }

        function I(a, b, c, e) {
            b = ma.apply([], b);
            var f, g, h, j, k, m, n = 0, i = a.length, l = b[0], o = va(l);
            if (o || 1 < i && "string" === typeof l && !ua.checkClone && lb.test(l)) return a.each(function (d) {
                var f = a.eq(d);
                o && (b[0] = l.call(this, d, f.html())), I(f, b, c, e)
            });
            if (i && (f = y(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
                for (h = za.map(w(f, "script"), E), j = h.length; n < i; n++) k = f, n !== i - 1 && (k = za.clone(k, !0, !0), j && za.merge(h, w(k, "script"))), c.call(a[n], k, n);
                if (j) for (m = h[h.length - 1].ownerDocument, za.map(h, F), n = 0; n < j; n++) k = h[n], cb.test(k.type || "") && !Sa.access(k, "globalEval") && za.contains(m, k) && (k.src && "module" !== (k.type || "").toLowerCase() ? za._evalUrl && za._evalUrl(k.src) : d(k.textContent.replace(mb, ""), m, k))
            }
            return a
        }

        function J(a, b, c) {
            for (var d, e = b ? za.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || za.cleanData(w(d)), d.parentNode && (c && za.contains(d.ownerDocument, d) && x(w(d, "script")), d.parentNode.removeChild(d));
            return a
        }

        function K(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || ob(a), c && (g = c.getPropertyValue(b) || c[b], "" === g && !za.contains(a.ownerDocument, a) && (g = za.style(a, b)), !ua.pixelBoxStyles() && nb.test(g) && pb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
        }

        function L(a, b) {
            return {
                get: function () {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function M(a) {
            if (a in vb) return a;
            for (var b = a[0].toUpperCase() + a.slice(1), c = ub.length; c--;) if (a = ub[c] + b, a in vb) return a
        }

        function N(a) {
            var b = za.cssProps[a];
            return b || (b = za.cssProps[a] = M(a) || a), b
        }

        function O(a, b, c) {
            var d = Xa.exec(b);
            return d ? ha(0, d[2] - (c || 0)) + (d[3] || "px") : b
        }

        function P(a, b, c, d, e, f) {
            var g = "width" === b ? 1 : 0, h = 0, i = 0;
            if (c === (d ? "border" : "content")) return 0;
            for (; 4 > g; g += 2) "margin" === c && (i += za.css(a, c + Ya[g], !0, e)), d ? ("content" === c && (i -= za.css(a, "padding" + Ya[g], !0, e)), "margin" !== c && (i -= za.css(a, "border" + Ya[g] + "Width", !0, e))) : (i += za.css(a, "padding" + Ya[g], !0, e), "padding" === c ? h += za.css(a, "border" + Ya[g] + "Width", !0, e) : i += za.css(a, "border" + Ya[g] + "Width", !0, e));
            return !d && 0 <= f && (i += ha(0, ga(a["offset" + b[0].toUpperCase() + b.slice(1)] - f - i - h - .5))), i
        }

        function Q(a, b, c) {
            var d = ob(a), e = K(a, b, d), f = "border-box" === za.css(a, "boxSizing", !1, d), g = f;
            if (nb.test(e)) {
                if (!c) return e;
                e = "auto"
            }
            return g = g && (ua.boxSizingReliable() || e === a.style[b]), "auto" !== e && (parseFloat(e) || "inline" !== za.css(a, "display", !1, d)) || (e = a["offset" + b[0].toUpperCase() + b.slice(1)], g = !0), e = parseFloat(e) || 0, e + P(a, b, c || (f ? "border" : "content"), g, d, e) + "px"
        }

        function R(a, b, c, d, e) {
            return new R.prototype.init(a, b, c, d, e)
        }

        function S() {
            xb && (!1 === ja.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(S) : a.setTimeout(S, za.fx.interval), za.fx.tick())
        }

        function T() {
            return a.setTimeout(function () {
                wb = void 0
            }), wb = Date.now()
        }

        function U(a, b) {
            var c, d = 0, e = {height: a};
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Ya[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function V(a, b, c) {
            for (var d, e = (Y.tweeners[b] || []).concat(Y.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d
        }

        function W(a, b, c) {
            var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style,
                p = a.nodeType && Za(a), q = Sa.get(a, "fxshow");
            for (d in c.queue || (g = za._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
                g.unqueued || h()
            }), g.unqueued++, m.always(function () {
                m.always(function () {
                    g.unqueued--, za.queue(a, "fx").length || g.empty.fire()
                })
            })), b) if (e = b[d], yb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) if ("show" === e && q && void 0 !== q[d]) p = !0; else continue;
                n[d] = q && q[d] || za.style(a, d)
            }
            if (i = !za.isEmptyObject(b), i || !za.isEmptyObject(n)) for (d in l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = Sa.get(a, "display")), k = za.css(a, "display"), "none" === k && (j ? k = j : (v([a], !0), j = a.style.display || j, k = za.css(a, "display"), v([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === za.css(a, "float") && (!i && (m.done(function () {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1, n) i || (q ? "hidden" in q && (p = q.hidden) : q = Sa.access(a, "fxshow", {display: j}), f && (q.hidden = !p), p && v([a], !0), m.done(function () {
                for (d in p || v([a]), Sa.remove(a, "fxshow"), n) za.style(a, d, n[d])
            })), i = V(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }

        function X(a, b) {
            var c, d, e, f, g;
            for (c in a) if (d = p(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = za.cssHooks[d], g && "expand" in g) for (c in f = g.expand(f), delete a[d], f) c in a || (a[c] = f[c], b[c] = e); else b[d] = e
        }

        function Y(a, b, c) {
            var d, e, f = 0, g = Y.prefilters.length, h = za.Deferred().always(function () {
                delete i.elem
            }), i = function () {
                if (e) return !1;
                for (var b = wb || T(), c = ha(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return (h.notifyWith(a, [j, f, c]), 1 > f && i) ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: za.extend({}, b),
                opts: za.extend(!0, {specialEasing: {}, easing: za.easing._default}, c),
                originalProperties: b,
                originalOptions: c,
                startTime: wb || T(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = za.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }), k = j.props;
            for (X(k, j.opts.specialEasing); f < g; f++) if (d = Y.prefilters[f].call(j, a, k, j.opts), d) return va(d.stop) && (za._queueHooks(j.elem, j.opts.queue).stop = d.stop.bind(d)), d;
            return za.map(k, V, j), va(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), za.fx.timer(za.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j
        }

        function Z(a) {
            var b = a.match(La) || [];
            return b.join(" ")
        }

        function $(a) {
            return a.getAttribute && a.getAttribute("class") || ""
        }

        function _(a) {
            return Array.isArray(a) ? a : "string" === typeof a ? a.match(La) || [] : []
        }

        function aa(a, c, d, f) {
            if (Array.isArray(c)) za.each(c, function (c, e) {
                d || Kb.test(a) ? f(a, e) : aa(a + "[" + ("object" === ("undefined" === typeof e ? "undefined" : b(e)) && null != e ? c : "") + "]", e, d, f)
            }); else if (!d && "object" === e(c)) for (var g in c) aa(a + "[" + g + "]", c[g], d, f); else f(a, c)
        }

        function ba(a) {
            return function (b, c) {
                "string" !== typeof b && (c = b, b = "*");
                var d, e = 0, f = b.toLowerCase().match(La) || [];
                if (va(c)) for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function ca(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, za.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" !== typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }

            var f = {}, g = a === Wb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function da(a, b) {
            var c, d, e = za.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && za.extend(!0, a, d), a
        }

        function ea(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d) for (e in h) if (h[e] && h[e].test(d)) {
                i.unshift(e);
                break
            }
            if (i[0] in c) f = i[0]; else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function fa(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift(), f) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]], g)) {
                    !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                    break
                }
                if (!0 !== g) if (g && a.throws) b = g(b); else try {
                    b = g(b)
                } catch (a) {
                    return {state: "parsererror", error: g ? a : "No conversion from " + i + " to " + f}
                }
            }
            return {state: "success", data: b}
        }

        var ga = Math.ceil, ha = Math.max, ia = [], ja = a.document, ka = Object.getPrototypeOf, la = ia.slice,
            ma = ia.concat, na = ia.push, oa = ia.indexOf, pa = {}, qa = pa.toString, ra = pa.hasOwnProperty,
            sa = ra.toString, ta = sa.call(Object), ua = {}, va = function (a) {
                return "function" === typeof a && "number" !== typeof a.nodeType
            }, wa = function (a) {
                return null != a && a === a.window
            }, xa = {type: !0, src: !0, noModule: !0}, ya = "3.3.1", za = function a(b, c) {
                return new a.fn.init(b, c)
            }, Aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        za.fn = za.prototype = {
            jquery: ya, constructor: za, length: 0, toArray: function () {
                return la.call(this)
            }, get: function (a) {
                return null == a ? la.call(this) : 0 > a ? this[a + this.length] : this[a]
            }, pushStack: function (a) {
                var b = za.merge(this.constructor(), a);
                return b.prevObject = this, b
            }, each: function (a) {
                return za.each(this, a)
            }, map: function (a) {
                return this.pushStack(za.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, slice: function () {
                return this.pushStack(la.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (a) {
                var b = this.length, c = +a + (0 > a ? b : 0);
                return this.pushStack(0 <= c && c < b ? [this[c]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: na, sort: ia.sort, splice: ia.splice
        }, za.extend = za.fn.extend = function () {
            var a, c, d, e, f, g, h = arguments[0] || {}, j = 1, i = arguments.length, k = !1;
            for ("boolean" === typeof h && (k = h, h = arguments[j] || {}, j++), "object" === ("undefined" === typeof h ? "undefined" : b(h)) || va(h) || (h = {}), j === i && (h = this, j--); j < i; j++) if (null != (a = arguments[j])) for (c in a) (d = h[c], e = a[c], h !== e) && (k && e && (za.isPlainObject(e) || (f = Array.isArray(e))) ? (f ? (f = !1, g = d && Array.isArray(d) ? d : []) : g = d && za.isPlainObject(d) ? d : {}, h[c] = za.extend(k, g, e)) : void 0 !== e && (h[c] = e));
            return h
        }, za.extend({
            expando: "jQuery" + (ya + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
                throw new Error(a)
            }, noop: function () {
            }, isPlainObject: function (a) {
                var b, c;
                return !!(a && "[object Object]" === qa.call(a)) && ((b = ka(a), !!!b) || (c = ra.call(b, "constructor") && b.constructor, "function" === typeof c && sa.call(c) === ta))
            }, isEmptyObject: function (a) {
                for (var b in a) return !1;
                return !0
            }, globalEval: function (a) {
                d(a)
            }, each: function (a, b) {
                var c, d = 0;
                if (f(a)) for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++) ; else for (d in a) if (!1 === b.call(a[d], d, a[d])) break;
                return a
            }, trim: function (a) {
                return null == a ? "" : (a + "").replace(Aa, "")
            }, makeArray: function (a, b) {
                var c = b || [];
                return null != a && (f(Object(a)) ? za.merge(c, "string" === typeof a ? [a] : a) : na.call(c, a)), c
            }, inArray: function (a, b, c) {
                return null == b ? -1 : oa.call(b, a, c)
            }, merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
                return a.length = e, a
            }, grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length; f < g; f++) d = !b(a[f], f), d !== !c && e.push(a[f]);
                return e
            }, map: function (a, b, c) {
                var d, e, g = 0, h = [];
                if (f(a)) for (d = a.length; g < d; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
                return ma.apply([], h)
            }, guid: 1, support: ua
        }), "function" === typeof Symbol && (za.fn[Symbol.iterator] = ia[Symbol.iterator]), za.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"], function (a, b) {
            pa["[object " + b + "]"] = b.toLowerCase()
        });
        var Ba = function (a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, k, l = b && b.ownerDocument, n = b ? b.nodeType : 9;
                if (c = c || [], "string" !== typeof a || !a || 1 !== n && 9 !== n && 11 !== n) return c;
                if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                    if (11 !== n && (i = pa.exec(a))) if (!(e = i[1])) {
                        if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = i[3]) && x.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                    } else if (9 === n) {
                        if (!(g = b.getElementById(e))) return c;
                        if (g.id === e) return c.push(g), c
                    } else if (l && (g = l.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c;
                    if (x.qsa && !U[a + " "] && (!K || !K.test(a))) {
                        if (1 !== n) l = b, k = a; else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((h = b.getAttribute("id")) ? h = h.replace(ta, ua) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + o(j[f]);
                            k = j.join(","), l = qa.test(a) && m(b.parentNode) || b
                        }
                        if (k) try {
                            return $.apply(c, l.querySelectorAll(k)), c
                        } catch (a) {
                        } finally {
                            h === O && b.removeAttribute("id")
                        }
                    }
                }
                return C(a.replace(fa, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d
                }

                var b = [];
                return a
            }

            function d(a) {
                return a[O] = !0, a
            }

            function e(a) {
                var b = H.createElement("fieldset");
                try {
                    return !!a(b)
                } catch (a) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = c.length; d--;) y.attrHandle[c[d]] = b
            }

            function g(c, a) {
                var b = a && c, d = b && 1 === c.nodeType && 1 === a.nodeType && c.sourceIndex - a.sourceIndex;
                if (d) return d;
                if (b) for (; b = b.nextSibling;) if (b === a) return -1;
                return c ? 1 : -1
            }

            function h(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function j(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function k(a) {
                return function (b) {
                    return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && wa(b) === a : b.disabled === a : !!("label" in b) && b.disabled === a
                }
            }

            function l(a) {
                return d(function (b) {
                    return b = +b, d(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function m(a) {
                return a && "undefined" !== typeof a.getElementsByTagName && a
            }

            function n() {
            }

            function o(a) {
                for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                return d
            }

            function p(a, b, c) {
                var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = R++;
                return b.first ? function (b, c, e) {
                    for (; b = b[d];) if (1 === b.nodeType || g) return a(b, c, e);
                    return !1
                } : function (b, c, i) {
                    var j, k, l, m = [Q, h];
                    if (i) {
                        for (; b = b[d];) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                    } else for (; b = b[d];) if (1 === b.nodeType || g) if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
                        if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                        if (k[f] = m, m[2] = a(b, c, i)) return !0
                    }
                    return !1
                }
            }

            function q(a) {
                return 1 < a.length ? function (b, c, d) {
                    for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function r(a, c, d) {
                for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
                return d
            }

            function s(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length; h < i; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), null != b && b.push(h));
                return g
            }

            function t(a, b, c, e, f, g) {
                return e && !e[O] && (e = t(e)), f && !f[O] && (f = t(f, g)), d(function (d, g, h, j) {
                    var k, l, i, m = [], n = [], o = g.length, p = d || r(b || "*", h.nodeType ? [h] : h, []),
                        q = a && (d || !b) ? s(p, m, a, h, j) : p, t = c ? f || (d ? a : o || e) ? [] : g : q;
                    if (c && c(q, t, h, j), e) for (k = s(t, n), e(k, [], h, j), l = k.length; l--;) (i = k[l]) && (t[n[l]] = !(q[n[l]] = i));
                    if (!d) t = s(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, j) : $.apply(g, t); else if (f || a) {
                        if (f) {
                            for (k = [], l = t.length; l--;) (i = t[l]) && k.push(q[l] = i);
                            f(null, t = [], k, j)
                        }
                        for (l = t.length; l--;) (i = t[l]) && -1 < (k = f ? aa(d, i) : m[l]) && (d[k] = !(g[k] = i))
                    }
                })
            }

            function u(a) {
                for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = p(function (a) {
                    return a === b
                }, g, !0), j = p(function (a) {
                    return -1 < aa(b, a)
                }, g, !0), k = [function (a, c, d) {
                    var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; h < e; h++) if (c = y.relative[a[h].type]) k = [p(q(k), c)]; else {
                    if (c = y.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                        for (d = ++h; d < e && !y.relative[a[d].type]; d++) ;
                        return t(1 < h && q(k), 1 < h && o(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(fa, "$1"), c, h < d && u(a.slice(h, d)), d < e && u(a = a.slice(d)), d < e && o(a))
                    }
                    k.push(c)
                }
                return q(k)
            }

            function v(a, c) {
                var e = 0 < c.length, f = 0 < a.length, g = function (d, g, h, k, l) {
                    var m, n, j, o = 0, p = "0", i = d && [], q = [], r = D, t = d || f && y.find.TAG("*", l),
                        u = Q += null == r ? 1 : Math.random() || .1, v = t.length;
                    for (l && (D = g === H || g || l); p !== v && null != (m = t[p]); p++) {
                        if (f && m) {
                            for (n = 0, g || m.ownerDocument === H || (G(m), h = !J); j = a[n++];) if (j(m, g || H, h)) {
                                k.push(m);
                                break
                            }
                            l && (Q = u)
                        }
                        e && ((m = !j && m) && o--, d && i.push(m))
                    }
                    if (o += p, e && p !== o) {
                        for (n = 0; j = c[n++];) j(i, q, g, h);
                        if (d) {
                            if (0 < o) for (; p--;) i[p] || q[p] || (q[p] = Y.call(k));
                            q = s(q)
                        }
                        $.apply(k, q), l && !d && 0 < q.length && 1 < o + c.length && b.uniqueSort(k)
                    }
                    return l && (Q = u, D = r), i
                };
                return e ? d(g) : g
            }

            var w, x, y, z, i, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date, P = a.document,
                Q = 0, R = 0, S = c(), T = c(), U = c(), V = function (c, a) {
                    return c === a && (F = !0), 0
                }, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function (a, b) {
                    for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ea = /[\x20\t\r\n\f]+/g,
                fa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, ga = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                ha = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                ia = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
                ja = /:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                ka = /^(?:\\.|[\w-]|[^\0-\xa0])+$/, la = {
                    ID: /^#((?:\\.|[\w-]|[^\0-\xa0])+)/,
                    CLASS: /^\.((?:\\.|[\w-]|[^\0-\xa0])+)/,
                    TAG: /^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/,
                    ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                    PSEUDO: /^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                    CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                    bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                    needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                }, ma = /^(?:input|select|textarea|button)$/i, na = /^h\d$/i, oa = /^[^{]+\{\s*\[native \w/,
                pa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, qa = /[+~]/,
                ra = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, sa = function (a, b, c) {
                    var d = String.fromCharCode, e = "0x" + b - 65536;
                    return e !== e || c ? b : 0 > e ? d(e + 65536) : d(55296 | e >> 10, 56320 | 1023 & e)
                }, ta = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ua = function (a, b) {
                    return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                }, va = function () {
                    G()
                }, wa = p(function (a) {
                    return !0 === a.disabled && ("form" in a || "label" in a)
                }, {dir: "parentNode", next: "legend"});
            try {
                $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
            } catch (a) {
                $ = {
                    apply: X.length ? function (a, b) {
                        Z.apply(a, _.call(b))
                    } : function (a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];) ;
                        a.length = c - 1
                    }
                }
            }
            for (w in x = b.support = {}, i = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, G = b.setDocument = function (a) {
                var b, c, d = a ? a.ownerDocument || a : P;
                return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !i(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", va, !1) : c.attachEvent && c.attachEvent("onunload", va)), x.attributes = e(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), x.getElementsByTagName = e(function (a) {
                    return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
                }), x.getElementsByClassName = oa.test(H.getElementsByClassName), x.getById = e(function (a) {
                    return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
                }), x.getById ? (y.filter.ID = function (a) {
                    var b = a.replace(ra, sa);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }, y.find.ID = function (a, b) {
                    if ("undefined" !== typeof b.getElementById && J) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }) : (y.filter.ID = function (a) {
                    var b = a.replace(ra, sa);
                    return function (a) {
                        var c = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }, y.find.ID = function (a, b) {
                    if ("undefined" !== typeof b.getElementById && J) {
                        var c, d, e, f = b.getElementById(a);
                        if (f) {
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                            for (e = b.getElementsByName(a), d = 0; f = e[d++];) if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                        }
                        return []
                    }
                }), y.find.TAG = x.getElementsByTagName ? function (a, b) {
                    return "undefined" === typeof b.getElementsByTagName ? x.qsa ? b.querySelectorAll(a) : void 0 : b.getElementsByTagName(a)
                } : function (a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, y.find.CLASS = x.getElementsByClassName && function (a, b) {
                    if ("undefined" !== typeof b.getElementsByClassName && J) return b.getElementsByClassName(a)
                }, L = [], K = [], (x.qsa = oa.test(H.querySelectorAll)) && (e(function (a) {
                    I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
                }), e(function (a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = H.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
                })), (x.matchesSelector = oa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function (a) {
                    x.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ("\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]") + ")*)|.*)\\)|)")
                }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = oa.test(I.compareDocumentPosition), N = b || oa.test(I.contains) ? function (c, a) {
                    var b = 9 === c.nodeType ? c.documentElement : c, d = a && a.parentNode;
                    return c === d || !!(d && 1 === d.nodeType && (b.contains ? b.contains(d) : c.compareDocumentPosition && 16 & c.compareDocumentPosition(d)))
                } : function (c, a) {
                    if (a) for (; a = a.parentNode;) if (a === c) return !0;
                    return !1
                }, V = b ? function (c, a) {
                    if (c === a) return F = !0, 0;
                    var b = !c.compareDocumentPosition - !a.compareDocumentPosition;
                    return b ? b : (b = (c.ownerDocument || c) === (a.ownerDocument || a) ? c.compareDocumentPosition(a) : 1, 1 & b || !x.sortDetached && a.compareDocumentPosition(c) === b ? c === H || c.ownerDocument === P && N(P, c) ? -1 : a === H || a.ownerDocument === P && N(P, a) ? 1 : E ? aa(E, c) - aa(E, a) : 0 : 4 & b ? -1 : 1)
                } : function (c, a) {
                    if (c === a) return F = !0, 0;
                    var b, d = 0, e = c.parentNode, f = a.parentNode, h = [c], i = [a];
                    if (!e || !f) return c === H ? -1 : a === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, c) - aa(E, a) : 0;
                    if (e === f) return g(c, a);
                    for (b = c; b = b.parentNode;) h.unshift(b);
                    for (b = a; b = b.parentNode;) i.unshift(b);
                    for (; h[d] === i[d];) d++;
                    return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
                }, H) : H
            }, b.matches = function (a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function (a, c) {
                if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ia, "='$1']"), x.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
                    var d = M.call(a, c);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (a) {
                }
                return 0 < b(c, H, null, [a]).length
            }, b.contains = function (a, b) {
                return (a.ownerDocument || a) !== H && G(a), N(a, b)
            }, b.attr = function (a, b) {
                (a.ownerDocument || a) !== H && G(a);
                var c = y.attrHandle[b.toLowerCase()],
                    d = c && W.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
                return void 0 === d ? x.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null : d
            }, b.escape = function (a) {
                return (a + "").replace(ta, ua)
            }, b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function (a) {
                var b, c = [], d = 0, e = 0;
                if (F = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), F) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return E = null, a
            }, z = b.getText = function (a) {
                var b, c = "", d = 0, e = a.nodeType;
                if (!e) for (; b = a[d++];) c += z(b); else if (1 === e || 9 === e || 11 === e) {
                    if ("string" === typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
                } else if (3 === e || 4 === e) return a.nodeValue;
                return c
            }, y = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: la,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(ra, sa), a[3] = (a[3] || a[4] || a[5] || "").replace(ra, sa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    }, CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (!a[3] && b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    }, PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return la.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ja.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(ra, sa).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    }, CLASS: function (a) {
                        var b = S[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function (a) {
                            return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    }, ATTR: function (a, c, d) {
                        return function (e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && -1 < f.indexOf(d) : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? -1 < (" " + f.replace(ea, " ") + " ").indexOf(d) : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    }, CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f === g ? "previousSibling" : "nextSibling", q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();) if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [Q, n, t];
                                        break
                                    }
                                } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), !1 === t) for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && !((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m === b));) ;
                                return t -= e, t === d || 0 === t % d && 0 <= t / d
                            }
                        }
                    }, PSEUDO: function (a, c) {
                        var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[O] ? f(c) : 1 < f.length ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function (a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function (a) {
                        var b = [], c = [], e = B(a.replace(fa, "$1"));
                        return e[O] ? d(function (a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;) (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }), has: d(function (a) {
                        return function (c) {
                            return 0 < b(a, c).length
                        }
                    }), contains: d(function (a) {
                        return a = a.replace(ra, sa), function (b) {
                            return -1 < (b.textContent || b.innerText || z(b)).indexOf(a)
                        }
                    }), lang: d(function (a) {
                        return ka.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ra, sa).toLowerCase(), function (b) {
                            var c;
                            do if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                    }), target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    }, root: function (a) {
                        return a === I
                    }, focus: function (a) {
                        return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    }, enabled: k(!1), disabled: k(!0), checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    }, selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                    }, empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling) if (6 > a.nodeType) return !1;
                        return !0
                    }, parent: function (a) {
                        return !y.pseudos.empty(a)
                    }, header: function (a) {
                        return na.test(a.nodeName)
                    }, input: function (a) {
                        return ma.test(a.nodeName)
                    }, button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    }, text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    }, first: l(function () {
                        return [0]
                    }), last: l(function (a, b) {
                        return [b - 1]
                    }), eq: l(function (a, b, c) {
                        return [0 > c ? c + b : c]
                    }), even: l(function (a, b) {
                        for (var c = 0; c < b; c += 2) a.push(c);
                        return a
                    }), odd: l(function (a, b) {
                        for (var c = 1; c < b; c += 2) a.push(c);
                        return a
                    }), lt: l(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; 0 <= --d;) a.push(d);
                        return a
                    }), gt: l(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, y.pseudos.nth = y.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) y.pseudos[w] = h(w);
            for (w in {submit: !0, reset: !0}) y.pseudos[w] = j(w);
            return n.prototype = y.filters = y.pseudos, y.setFilters = new n, A = b.tokenize = function (a, c) {
                var d, e, f, g, h, i, j, k = T[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = y.preFilter; h;) {
                    for (g in (!d || (e = ga.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ha.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(fa, " ")
                    }), h = h.slice(d.length)), y.filter) (e = la[g].exec(h)) && (!j[g] || (e = j[g](e))) && (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
            }, B = b.compile = function (a, b) {
                var c, d = [], e = [], f = U[a + " "];
                if (!f) {
                    for (b || (b = A(a)), c = b.length; c--;) f = u(b[c]), f[O] ? d.push(f) : e.push(f);
                    f = U(a, v(e, d)), f.selector = a
                }
                return f
            }, C = b.select = function (a, b, c, d) {
                var e, f, g, h, i, j = "function" === typeof a && a, k = !d && A(a = j.selector || a);
                if (c = c || [], 1 === k.length) {
                    if (f = k[0] = k[0].slice(0), 2 < f.length && "ID" === (g = f[0]).type && 9 === b.nodeType && J && y.relative[f[1].type]) {
                        if (b = (y.find.ID(g.matches[0].replace(ra, sa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = la.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);) if ((i = y.find[h]) && (d = i(g.matches[0].replace(ra, sa), qa.test(f[0].type) && m(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && o(f), !a) return $.apply(c, d), c;
                        break
                    }
                }
                return (j || B(a, k))(d, b, !J, c, !b || qa.test(a) && m(b.parentNode) || b), c
            }, x.sortStable = O.split("").sort(V).join("") === O, x.detectDuplicates = !!F, G(), x.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
            }), e(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function (a, b, c) {
                if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), x.attributes && e(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function (a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
            }), e(function (a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function (a, b, c) {
                var d;
                if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        za.find = Ba, za.expr = Ba.selectors, za.expr[":"] = za.expr.pseudos, za.uniqueSort = za.unique = Ba.uniqueSort, za.text = Ba.getText, za.isXMLDoc = Ba.isXML, za.contains = Ba.contains, za.escapeSelector = Ba.escape;
        var Ca = function (a, b, c) {
            for (var d = []; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
                if (void 0 !== c && za(a).is(c)) break;
                d.push(a)
            }
            return d
        }, Da = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }, Ea = za.expr.match.needsContext, Fa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        za.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? za.find.matchesSelector(d, a) ? [d] : [] : za.find.matches(a, za.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        }, za.fn.extend({
            find: function (a) {
                var b, c, d = this.length, e = this;
                if ("string" !== typeof a) return this.pushStack(za(a).filter(function () {
                    for (b = 0; b < d; b++) if (za.contains(e[b], this)) return !0
                }));
                for (c = this.pushStack([]), b = 0; b < d; b++) za.find(a, e[b], c);
                return 1 < d ? za.uniqueSort(c) : c
            }, filter: function (a) {
                return this.pushStack(h(this, a || [], !1))
            }, not: function (a) {
                return this.pushStack(h(this, a || [], !0))
            }, is: function (a) {
                return !!h(this, "string" === typeof a && Ea.test(a) ? za(a) : a || [], !1).length
            }
        });
        var Ga, Ha = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ia = za.fn.init = function (a, b, c) {
            var d, e;
            if (!a) return this;
            if (c = c || Ga, "string" === typeof a) {
                if (d = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Ha.exec(a), d && (d[1] || !b)) {
                    if (d[1]) {
                        if (b = b instanceof za ? b[0] : b, za.merge(this, za.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ja, !0)), Fa.test(d[1]) && za.isPlainObject(b)) for (d in b) va(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                        return this
                    }
                    return e = ja.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
                }
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : va(a) ? void 0 === c.ready ? a(za) : c.ready(a) : za.makeArray(a, this)
        };
        Ia.prototype = za.fn, Ga = za(ja);
        var Ja = /^(?:parents|prev(?:Until|All))/, Ka = {children: !0, contents: !0, next: !0, prev: !0};
        za.fn.extend({
            has: function (a) {
                var b = za(a, this), c = b.length;
                return this.filter(function () {
                    for (var a = 0; a < c; a++) if (za.contains(this, b[a])) return !0
                })
            }, closest: function (a, b) {
                var c, d = 0, e = this.length, f = [], g = "string" !== typeof a && za(a);
                if (!Ea.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (g ? -1 < g.index(c) : 1 === c.nodeType && za.find.matchesSelector(c, a))) {
                    f.push(c);
                    break
                }
                return this.pushStack(1 < f.length ? za.uniqueSort(f) : f)
            }, index: function (a) {
                return a ? "string" === typeof a ? oa.call(za(a), this[0]) : oa.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (a, b) {
                return this.pushStack(za.uniqueSort(za.merge(this.get(), za(a, b))))
            }, addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), za.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            }, parents: function (a) {
                return Ca(a, "parentNode")
            }, parentsUntil: function (a, b, c) {
                return Ca(a, "parentNode", c)
            }, next: function (a) {
                return i(a, "nextSibling")
            }, prev: function (a) {
                return i(a, "previousSibling")
            }, nextAll: function (a) {
                return Ca(a, "nextSibling")
            }, prevAll: function (a) {
                return Ca(a, "previousSibling")
            }, nextUntil: function (a, b, c) {
                return Ca(a, "nextSibling", c)
            }, prevUntil: function (a, b, c) {
                return Ca(a, "previousSibling", c)
            }, siblings: function (a) {
                return Da((a.parentNode || {}).firstChild, a)
            }, children: function (a) {
                return Da(a.firstChild)
            }, contents: function (a) {
                return g(a, "iframe") ? a.contentDocument : (g(a, "template") && (a = a.content || a), za.merge([], a.childNodes))
            }
        }, function (a, b) {
            za.fn[a] = function (c, d) {
                var e = za.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" === typeof d && (e = za.filter(d, e)), 1 < this.length && (!Ka[a] && za.uniqueSort(e), Ja.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var La = /[^\x20\t\r\n\f]+/g;
        za.Callbacks = function (a) {
            a = "string" === typeof a ? j(a) : za.extend({}, a);
            var b, c, d, f, g = [], h = [], i = -1, k = function () {
                for (f = f || a.once, d = b = !0; h.length; i = -1) for (c = h.shift(); ++i < g.length;) !1 === g[i].apply(c[0], c[1]) && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, f && (c ? g = [] : g = "")
            }, l = {
                add: function () {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function b(c) {
                        za.each(c, function (c, d) {
                            va(d) ? (!a.unique || !l.has(d)) && g.push(d) : d && d.length && "string" !== e(d) && b(d)
                        })
                    }(arguments), c && !b && k()), this
                }, remove: function () {
                    return za.each(arguments, function (a, b) {
                        for (var c; -1 < (c = za.inArray(b, g, c));) g.splice(c, 1), c <= i && i--
                    }), this
                }, has: function (a) {
                    return a ? -1 < za.inArray(a, g) : 0 < g.length
                }, empty: function () {
                    return g && (g = []), this
                }, disable: function () {
                    return f = h = [], g = c = "", this
                }, disabled: function () {
                    return !g
                }, lock: function () {
                    return f = h = [], c || b || (g = c = ""), this
                }, locked: function () {
                    return !!f
                }, fireWith: function (a, c) {
                    return f || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), !b && k()), this
                }, fire: function () {
                    return l.fireWith(this, arguments), this
                }, fired: function () {
                    return !!d
                }
            };
            return l
        }, za.extend({
            Deferred: function (c) {
                var d = [["notify", "progress", za.Callbacks("memory"), za.Callbacks("memory"), 2], ["resolve", "done", za.Callbacks("once memory"), za.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", za.Callbacks("once memory"), za.Callbacks("once memory"), 1, "rejected"]],
                    e = "pending", f = {
                        state: function () {
                            return e
                        }, always: function () {
                            return g.done(arguments).fail(arguments), this
                        }, catch: function (a) {
                            return f.then(null, a)
                        }, pipe: function () {
                            var a = arguments;
                            return za.Deferred(function (b) {
                                za.each(d, function (c, d) {
                                    var e = va(a[d[4]]) && a[d[4]];
                                    g[d[1]](function () {
                                        var a = e && e.apply(this, arguments);
                                        a && va(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        }, then: function (c, e, f) {
                            function g(c, d, f, e) {
                                return function () {
                                    var i = this, j = arguments, m = function () {
                                        var a, m;
                                        if (!(c < h)) {
                                            if (a = f.apply(i, j), a === d.promise()) throw new TypeError("Thenable self-resolution");
                                            m = a && ("object" === ("undefined" === typeof a ? "undefined" : b(a)) || "function" === typeof a) && a.then, va(m) ? e ? m.call(a, g(h, d, k, e), g(h, d, l, e)) : (h++, m.call(a, g(h, d, k, e), g(h, d, l, e), g(h, d, k, d.notifyWith))) : (f !== k && (i = void 0, j = [a]), (e || d.resolveWith)(i, j))
                                        }
                                    }, n = e ? m : function () {
                                        try {
                                            m()
                                        } catch (a) {
                                            za.Deferred.exceptionHook && za.Deferred.exceptionHook(a, n.stackTrace), c + 1 >= h && (f !== l && (i = void 0, j = [a]), d.rejectWith(i, j))
                                        }
                                    };
                                    c ? n() : (za.Deferred.getStackHook && (n.stackTrace = za.Deferred.getStackHook()), a.setTimeout(n))
                                }
                            }

                            var h = 0;
                            return za.Deferred(function (a) {
                                d[0][3].add(g(0, a, va(f) ? f : k, a.notifyWith)), d[1][3].add(g(0, a, va(c) ? c : k)), d[2][3].add(g(0, a, va(e) ? e : l))
                            }).promise()
                        }, promise: function (a) {
                            return null == a ? f : za.extend(a, f)
                        }
                    }, g = {};
                return za.each(d, function (a, b) {
                    var c = b[2], h = b[5];
                    f[b[1]] = c.add, h && c.add(function () {
                        e = h
                    }, d[3 - a][2].disable, d[3 - a][3].disable, d[0][2].lock, d[0][3].lock), c.add(b[3].fire), g[b[0]] = function () {
                        return g[b[0] + "With"](this === g ? void 0 : this, arguments), this
                    }, g[b[0] + "With"] = c.fireWith
                }), f.promise(g), c && c.call(g, g), g
            }, when: function (a) {
                var b = arguments.length, c = b, d = Array(c), e = la.call(arguments), f = za.Deferred(),
                    g = function (a) {
                        return function (c) {
                            d[a] = this, e[a] = 1 < arguments.length ? la.call(arguments) : c, --b || f.resolveWith(d, e)
                        }
                    };
                if (1 >= b && (m(a, f.done(g(c)).resolve, f.reject, !b), "pending" === f.state() || va(e[c] && e[c].then))) return f.then();
                for (; c--;) m(e[c], g(c), f.reject);
                return f.promise()
            }
        });
        var Ma = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        za.Deferred.exceptionHook = function (b, c) {
            a.console && a.console.warn && b && Ma.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
        }, za.readyException = function (b) {
            a.setTimeout(function () {
                throw b
            })
        };
        var Na = za.Deferred();
        za.fn.ready = function (a) {
            return Na.then(a).catch(function (a) {
                za.readyException(a)
            }), this
        }, za.extend({
            isReady: !1, readyWait: 1, ready: function (a) {
                (!0 === a ? !--za.readyWait : !za.isReady) && (za.isReady = !0, !0 !== a && 0 < --za.readyWait || Na.resolveWith(ja, [za]))
            }
        }), za.ready.then = Na.then, "complete" !== ja.readyState && ("loading" === ja.readyState || ja.documentElement.doScroll) ? (ja.addEventListener("DOMContentLoaded", n), a.addEventListener("load", n)) : a.setTimeout(za.ready);
        var Oa = function a(b, c, d, f, g, h, j) {
            var k = 0, i = b.length, l = null == d;
            if ("object" === e(d)) for (k in g = !0, d) a(b, c, k, d[k], !0, h, j); else if (void 0 !== f && (g = !0, va(f) || (j = !0), l && (j ? (c.call(b, f), c = null) : (l = c, c = function (a, b, c) {
                return l.call(za(a), c)
            })), c)) for (; k < i; k++) c(b[k], d, j ? f : f.call(b[k], k, c(b[k], d)));
            return g ? b : l ? c.call(b) : i ? c(b[0], d) : h
        }, Pa = /^-ms-/, Qa = /-([a-z])/g, Ra = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
        q.uid = 1, q.prototype = {
            cache: function (a) {
                var b = a[this.expando];
                return b || (b = {}, Ra(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                }))), b
            }, set: function (a, b, c) {
                var d, e = this.cache(a);
                if ("string" === typeof b) e[p(b)] = c; else for (d in b) e[p(d)] = b[d];
                return e
            }, get: function (a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][p(b)]
            }, access: function (a, b, c) {
                return void 0 === b || b && "string" === typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 === c ? b : c)
            }, remove: function (a, b) {
                var c, d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) for (Array.isArray(b) ? b = b.map(p) : (b = p(b), b = (b in d) ? [b] : b.match(La) || []), c = b.length; c--;) delete d[b[c]];
                    (void 0 === b || za.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            }, hasData: function (a) {
                var b = a[this.expando];
                return void 0 !== b && !za.isEmptyObject(b)
            }
        };
        var Sa = new q, Ta = new q, Ua = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Va = /[A-Z]/g;
        za.extend({
            hasData: function (a) {
                return Ta.hasData(a) || Sa.hasData(a)
            }, data: function (a, b, c) {
                return Ta.access(a, b, c)
            }, removeData: function (a, b) {
                Ta.remove(a, b)
            }, _data: function (a, b, c) {
                return Sa.access(a, b, c)
            }, _removeData: function (a, b) {
                Sa.remove(a, b)
            }
        }), za.fn.extend({
            data: function (a, c) {
                var d, e, f, g = this[0], h = g && g.attributes;
                if (void 0 === a) {
                    if (this.length && (f = Ta.get(g), 1 === g.nodeType && !Sa.get(g, "hasDataAttrs"))) {
                        for (d = h.length; d--;) h[d] && (e = h[d].name, 0 === e.indexOf("data-") && (e = p(e.slice(5)), s(g, e, f[e])));
                        Sa.set(g, "hasDataAttrs", !0)
                    }
                    return f
                }
                return "object" === ("undefined" === typeof a ? "undefined" : b(a)) ? this.each(function () {
                    Ta.set(this, a)
                }) : Oa(this, function (b) {
                    var c;
                    return g && void 0 === b ? (c = Ta.get(g, a), void 0 !== c) ? c : (c = s(g, a), void 0 === c ? void 0 : c) : void this.each(function () {
                        Ta.set(this, a, b)
                    })
                }, null, c, 1 < arguments.length, null, !0)
            }, removeData: function (a) {
                return this.each(function () {
                    Ta.remove(this, a)
                })
            }
        }), za.extend({
            queue: function (a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = Sa.get(a, b), c && (!d || Array.isArray(c) ? d = Sa.access(a, b, za.makeArray(c)) : d.push(c)), d || []
            }, dequeue: function (a, b) {
                b = b || "fx";
                var c = za.queue(a, b), d = c.length, e = c.shift(), f = za._queueHooks(a, b), g = function () {
                    za.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            }, _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return Sa.get(a, c) || Sa.access(a, c, {
                    empty: za.Callbacks("once memory").add(function () {
                        Sa.remove(a, [b + "queue", c])
                    })
                })
            }
        }), za.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" !== typeof a && (b = a, a = "fx", c--), arguments.length < c ? za.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = za.queue(this, a, b);
                    za._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && za.dequeue(this, a)
                })
            }, dequeue: function (a) {
                return this.each(function () {
                    za.dequeue(this, a)
                })
            }, clearQueue: function (a) {
                return this.queue(a || "fx", [])
            }, promise: function (a, b) {
                var c, d = 1, e = za.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f])
                };
                for ("string" !== typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = Sa.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Wa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Xa = new RegExp("^(?:([+-])=|)(" + Wa + ")([a-z%]*)$", "i"), Ya = ["Top", "Right", "Bottom", "Left"],
            Za = function (a, b) {
                return a = b || a, "none" === a.style.display || "" === a.style.display && za.contains(a.ownerDocument, a) && "none" === za.css(a, "display")
            }, $a = function (a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                for (f in e = c.apply(a, d || []), b) a.style[f] = g[f];
                return e
            }, _a = {};
        za.fn.extend({
            show: function () {
                return v(this, !0)
            }, hide: function () {
                return v(this)
            }, toggle: function (a) {
                return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    Za(this) ? za(this).show() : za(this).hide()
                })
            }
        });
        var ab = /^(?:checkbox|radio)$/i, bb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            cb = /^$|^module$|\/(?:java|ecma)script/i, db = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        db.optgroup = db.option, db.tbody = db.tfoot = db.colgroup = db.caption = db.thead, db.th = db.td;
        var eb = /<|&#?\w+;/;
        (function () {
            var a = ja.createDocumentFragment(), b = a.appendChild(ja.createElement("div")),
                c = ja.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ua.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ua.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        })();
        var fb = ja.documentElement, gb = /^key/, hb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ib = /^([^.]*)(?:\.(.+)|)/;
        za.event = {
            global: {}, add: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Sa.get(a);
                if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), e && za.find.matchesSelector(fb, e), c.guid || (c.guid = za.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" !== typeof za && za.event.triggered !== b.type ? za.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(La) || [""], j = b.length; j--;) (h = ib.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), !!n) && (l = za.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = za.event.special[n] || {}, k = za.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && za.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, (!l.setup || !1 === l.setup.call(a, d, o, g)) && a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), !k.handler.guid && (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), za.event.global[n] = !0)
            }, remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Sa.hasData(a) && Sa.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(La) || [""], j = b.length; j--;) {
                        if (h = ib.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), !n) {
                            for (n in i) za.event.remove(a, n + b[j], c, d, !0);
                            continue
                        }
                        for (l = za.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], (e || p === k.origType) && (!c || c.guid === k.guid) && (!h || h.test(k.namespace)) && (!d || d === k.selector || "**" === d && k.selector) && (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && ((!l.teardown || !1 === l.teardown.call(a, o, q.handle)) && za.removeEvent(a, n, q.handle), delete i[n])
                    }
                    za.isEmptyObject(i) && Sa.remove(a, "handle events")
                }
            }, dispatch: function (a) {
                var b, c, d, e, f, g, h = za.event.fix(a), i = Array(arguments.length),
                    j = (Sa.get(this, "events") || {})[h.type] || [], k = za.event.special[h.type] || {};
                for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
                if (h.delegateTarget = this, !(k.preDispatch && !1 === k.preDispatch.call(this, h))) {
                    for (g = za.event.handlers.call(this, h, j), b = 0; (e = g[b++]) && !h.isPropagationStopped();) for (h.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) (!h.rnamespace || h.rnamespace.test(f.namespace)) && (h.handleObj = f, h.data = f.data, d = ((za.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i), void 0 !== d && !1 === (h.result = d) && (h.preventDefault(), h.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, h), h.result
                }
            }, handlers: function (a, b) {
                var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
                if (i && j.nodeType && !("click" === a.type && 1 <= a.button)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                    for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? -1 < za(e, this).index(j) : za.find(e, this, null, [j]).length), g[e] && f.push(d);
                    f.length && h.push({elem: j, handlers: f})
                }
                return j = this, i < b.length && h.push({elem: j, handlers: b.slice(i)}), h
            }, addProp: function (a, b) {
                Object.defineProperty(za.Event.prototype, a, {
                    enumerable: !0,
                    configurable: !0,
                    get: va(b) ? function () {
                        if (this.originalEvent) return b(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[a]
                    },
                    set: function (b) {
                        Object.defineProperty(this, a, {enumerable: !0, configurable: !0, writable: !0, value: b})
                    }
                })
            }, fix: function (a) {
                return a[za.expando] ? a : new za.Event(a)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== B() && this.focus) return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === B() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && g(this, "input")) return this.click(), !1
                    }, _default: function (a) {
                        return g(a.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            }
        }, za.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }, za.Event = function (a, b) {
            return this instanceof za.Event ? void (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? z : A, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && za.extend(this, b), this.timeStamp = a && a.timeStamp || Date.now(), this[za.expando] = !0) : new za.Event(a, b)
        }, za.Event.prototype = {
            constructor: za.Event,
            isDefaultPrevented: A,
            isPropagationStopped: A,
            isImmediatePropagationStopped: A,
            isSimulated: !1,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = z, a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = z, a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = z, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, za.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (a) {
                var b = a.button;
                return null == a.which && gb.test(a.type) ? null == a.charCode ? a.keyCode : a.charCode : !a.which && void 0 !== b && hb.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
            }
        }, za.event.addProp), za.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (a, b) {
            za.event.special[a] = {
                delegateType: b, bindType: b, handle: function (a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return e && (e === d || za.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), za.fn.extend({
            on: function (a, b, c, d) {
                return C(this, a, b, c, d)
            }, one: function (a, b, c, d) {
                return C(this, a, b, c, d, 1)
            }, off: function (a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, za(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if ("object" === ("undefined" === typeof a ? "undefined" : b(a))) {
                    for (f in a) this.off(f, c, a[f]);
                    return this
                }
                return (!1 === c || "function" === typeof c) && (d = c, c = void 0), !1 === d && (d = A), this.each(function () {
                    za.event.remove(this, a, d, c)
                })
            }
        });
        var jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            kb = /<script|<style|<link/i, lb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            mb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        za.extend({
            htmlPrefilter: function (a) {
                return a.replace(jb, "<$1></$2>")
            }, clone: function (a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0), i = za.contains(a.ownerDocument, a);
                if (!ua.noCloneChecked && (1 === a.nodeType || 11 === a.nodeType) && !za.isXMLDoc(a)) for (g = w(h), f = w(a), (d = 0, e = f.length); d < e; d++) H(f[d], g[d]);
                if (b) if (c) for (f = f || w(a), g = g || w(h), (d = 0, e = f.length); d < e; d++) G(f[d], g[d]); else G(a, h);
                return g = w(h, "script"), 0 < g.length && x(g, !i && w(a, "script")), h
            }, cleanData: function (a) {
                for (var b, c, d, e = za.event.special, f = 0; void 0 !== (c = a[f]); f++) if (Ra(c)) {
                    if (b = c[Sa.expando]) {
                        if (b.events) for (d in b.events) e[d] ? za.event.remove(c, d) : za.removeEvent(c, d, b.handle);
                        c[Sa.expando] = void 0
                    }
                    c[Ta.expando] && (c[Ta.expando] = void 0)
                }
            }
        }), za.fn.extend({
            detach: function (a) {
                return J(this, a, !0)
            }, remove: function (a) {
                return J(this, a)
            }, text: function (a) {
                return Oa(this, function (a) {
                    return void 0 === a ? za.text(this) : this.empty().each(function () {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
                }, null, a, arguments.length)
            }, append: function () {
                return I(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = D(this, a);
                        b.appendChild(a)
                    }
                })
            }, prepend: function () {
                return I(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = D(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            }, before: function () {
                return I(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            }, after: function () {
                return I(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            }, empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (za.cleanData(w(a, !1)), a.textContent = "");
                return this
            }, clone: function (a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function () {
                    return za.clone(this, a, b)
                })
            }, html: function (a) {
                return Oa(this, function (a) {
                    var b = this[0] || {}, c = 0, d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" === typeof a && !kb.test(a) && !db[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = za.htmlPrefilter(a);
                        try {
                            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (za.cleanData(w(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (a) {
                        }
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            }, replaceWith: function () {
                var a = [];
                return I(this, arguments, function (b) {
                    var c = this.parentNode;
                    0 > za.inArray(this, a) && (za.cleanData(w(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), za.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            za.fn[a] = function (a) {
                for (var c, d = [], e = za(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), za(e[g])[b](c), na.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var nb = new RegExp("^(" + Wa + ")(?!px)[a-z%]+$", "i"), ob = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        }, pb = new RegExp(Ya.join("|"), "i");
        (function () {
            function b() {
                if (j) {
                    i.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", j.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", fb.appendChild(i).appendChild(j);
                    var b = a.getComputedStyle(j);
                    d = "1%" !== b.top, h = 12 === c(b.marginLeft), j.style.right = "60%", g = 36 === c(b.right), e = 36 === c(b.width), j.style.position = "absolute", f = 36 === j.offsetWidth || "absolute", fb.removeChild(i), j = null
                }
            }

            function c(a) {
                return Math.round(parseFloat(a))
            }

            var d, e, f, g, h, i = ja.createElement("div"), j = ja.createElement("div");
            j.style && (j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", ua.clearCloneStyle = "content-box" === j.style.backgroundClip, za.extend(ua, {
                boxSizingReliable: function () {
                    return b(), e
                }, pixelBoxStyles: function () {
                    return b(), g
                }, pixelPosition: function () {
                    return b(), d
                }, reliableMarginLeft: function () {
                    return b(), h
                }, scrollboxSize: function () {
                    return b(), f
                }
            }))
        })();
        var qb = /^(none|table(?!-c[ea]).+)/, rb = /^--/,
            sb = {position: "absolute", visibility: "hidden", display: "block"},
            tb = {letterSpacing: "0", fontWeight: "400"}, ub = ["Webkit", "Moz", "ms"],
            vb = ja.createElement("div").style;
        za.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = K(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g, h, i = p(c), j = rb.test(c), k = a.style;
                    if (j || (c = N(i)), h = za.cssHooks[c] || za.cssHooks[i], void 0 !== d) {
                        if (g = "undefined" === typeof d ? "undefined" : b(d), "string" === g && (f = Xa.exec(d)) && f[1] && (d = t(a, c, f), g = "number"), null == d || d !== d) return;
                        "number" === g && (d += f && f[3] || (za.cssNumber[i] ? "" : "px")), ua.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (k[c] = "inherit"), h && "set" in h && void 0 === (d = h.set(a, d, e)) || (j ? k.setProperty(c, d) : k[c] = d)
                    } else return h && "get" in h && void 0 !== (f = h.get(a, !1, e)) ? f : k[c]
                }
            },
            css: function (a, b, c, d) {
                var e, f, g, h = p(b), i = rb.test(b);
                return i || (b = N(h)), g = za.cssHooks[b] || za.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = K(a, b, d)), "normal" === e && b in tb && (e = tb[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e
            }
        }), za.each(["height", "width"], function (a, b) {
            za.cssHooks[b] = {
                get: function (a, c, d) {
                    if (c) return !qb.test(za.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Q(a, b, d) : $a(a, sb, function () {
                        return Q(a, b, d)
                    })
                }, set: function (a, c, d) {
                    var e, f = ob(a), g = "border-box" === za.css(a, "boxSizing", !1, f), h = d && P(a, b, d, g, f);
                    return g && ua.scrollboxSize() === f.position && (h -= ga(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(f[b]) - P(a, b, "border", !1, f) - .5)), h && (e = Xa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = za.css(a, b)), O(a, c, h)
                }
            }
        }), za.cssHooks.marginLeft = L(ua.reliableMarginLeft, function (a, b) {
            if (b) return (parseFloat(K(a, "marginLeft")) || a.getBoundingClientRect().left - $a(a, {marginLeft: 0}, function () {
                return a.getBoundingClientRect().left
            })) + "px"
        }), za.each({margin: "", padding: "", border: "Width"}, function (a, b) {
            za.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ya[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, "margin" !== a && (za.cssHooks[a + b].set = O)
        }), za.fn.extend({
            css: function (a, b) {
                return Oa(this, function (a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (Array.isArray(b)) {
                        for (d = ob(a), e = b.length; g < e; g++) f[b[g]] = za.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 === c ? za.css(a, b) : za.style(a, b, c)
                }, a, b, 1 < arguments.length)
            }
        }), za.Tween = R, R.prototype = {
            constructor: R, init: function (a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || za.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (za.cssNumber[c] ? "" : "px")
            }, cur: function () {
                var a = R.propHooks[this.prop];
                return a && a.get ? a.get(this) : R.propHooks._default.get(this)
            }, run: function (a) {
                var b, c = R.propHooks[this.prop];
                return this.pos = this.options.duration ? b = za.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = za.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
                }, set: function (a) {
                    za.fx.step[a.prop] ? za.fx.step[a.prop](a) : 1 === a.elem.nodeType && (null != a.elem.style[za.cssProps[a.prop]] || za.cssHooks[a.prop]) ? za.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, za.easing = {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }, _default: "swing"
        }, za.fx = R.prototype.init, za.fx.step = {};
        var wb, xb, yb = /^(?:toggle|show|hide)$/, zb = /queueHooks$/;
        za.Animation = za.extend(Y, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return t(c.elem, a, Xa.exec(b), c), c
                }]
            }, tweener: function (a, b) {
                va(a) ? (b = a, a = ["*"]) : a = a.match(La);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], Y.tweeners[c] = Y.tweeners[c] || [], Y.tweeners[c].unshift(b)
            }, prefilters: [W], prefilter: function (a, b) {
                b ? Y.prefilters.unshift(a) : Y.prefilters.push(a)
            }
        }), za.speed = function (a, c, d) {
            var e = a && "object" === ("undefined" === typeof a ? "undefined" : b(a)) ? za.extend({}, a) : {
                complete: d || !d && c || va(a) && a,
                duration: a,
                easing: d && c || c && !va(c) && c
            };
            return za.fx.off ? e.duration = 0 : "number" !== typeof e.duration && (e.duration in za.fx.speeds ? e.duration = za.fx.speeds[e.duration] : e.duration = za.fx.speeds._default), (null == e.queue || !0 === e.queue) && (e.queue = "fx"), e.old = e.complete, e.complete = function () {
                va(e.old) && e.old.call(this), e.queue && za.dequeue(this, e.queue)
            }, e
        }, za.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Za).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
            }, animate: function (a, b, c, d) {
                var e = za.isEmptyObject(a), f = za.speed(b, c, d), g = function () {
                    var b = Y(this, za.extend({}, a), f);
                    (e || Sa.get(this, "finish")) && b.stop(!0)
                };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            }, stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" !== typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                    var b = !0, e = null != a && a + "queueHooks", f = za.timers, g = Sa.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && zb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem === this && (null == a || f[e].queue === a) && (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && za.dequeue(this, a)
                })
            }, finish: function (a) {
                return !1 !== a && (a = a || "fx"), this.each(function () {
                    var b, c = Sa.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = za.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, za.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), za.each(["toggle", "show", "hide"], function (a, b) {
            var c = za.fn[b];
            za.fn[b] = function (a, d, e) {
                return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(U(b, !0), a, d, e)
            }
        }), za.each({
            slideDown: U("show"),
            slideUp: U("hide"),
            slideToggle: U("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (a, b) {
            za.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), za.timers = [], za.fx.tick = function () {
            var a, b = 0, c = za.timers;
            for (wb = Date.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || za.fx.stop(), wb = void 0
        }, za.fx.timer = function (a) {
            za.timers.push(a), za.fx.start()
        }, za.fx.interval = 13, za.fx.start = function () {
            xb || (xb = !0, S())
        }, za.fx.stop = function () {
            xb = null
        }, za.fx.speeds = {slow: 600, fast: 200, _default: 400}, za.fn.delay = function (b, c) {
            return b = za.fx ? za.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        }, function () {
            var a = ja.createElement("input"), b = ja.createElement("select"),
                c = b.appendChild(ja.createElement("option"));
            a.type = "checkbox", ua.checkOn = "" !== a.value, ua.optSelected = c.selected, a = ja.createElement("input"), a.value = "t", a.type = "radio", ua.radioValue = "t" === a.value
        }();
        var Ab, Bb = za.expr.attrHandle;
        za.fn.extend({
            attr: function (a, b) {
                return Oa(this, za.attr, a, b, 1 < arguments.length)
            }, removeAttr: function (a) {
                return this.each(function () {
                    za.removeAttr(this, a)
                })
            }
        }), za.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return "undefined" === typeof a.getAttribute ? za.prop(a, b, c) : (1 === f && za.isXMLDoc(a) || (e = za.attrHooks[b.toLowerCase()] || (za.expr.match.bool.test(b) ? Ab : void 0)), void 0 !== c) ? null === c ? void za.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = za.find.attr(a, b), null == d ? void 0 : d)
            }, attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!ua.radioValue && "radio" === b && g(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }, removeAttr: function (a, b) {
                var c, d = 0, e = b && b.match(La);
                if (e && 1 === a.nodeType) for (; c = e[d++];) a.removeAttribute(c)
            }
        }), Ab = {
            set: function (a, b, c) {
                return !1 === b ? za.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, za.each(za.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = Bb[b] || za.find.attr;
            Bb[b] = function (a, b, d) {
                var e, f, g = b.toLowerCase();
                return d || (f = Bb[g], Bb[g] = e, e = null == c(a, b, d) ? null : g, Bb[g] = f), e
            }
        });
        var Cb = /^(?:input|select|textarea|button)$/i, Db = /^(?:a|area)$/i;
        za.fn.extend({
            prop: function (a, b) {
                return Oa(this, za.prop, a, b, 1 < arguments.length)
            }, removeProp: function (a) {
                return this.each(function () {
                    delete this[za.propFix[a] || a]
                })
            }
        }), za.extend({
            prop: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f) return 1 === f && za.isXMLDoc(a) || (b = za.propFix[b] || b, e = za.propHooks[b]), void 0 === c ? e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c
            }, propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = za.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Cb.test(a.nodeName) || Db.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), ua.optSelected || (za.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }, set: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), za.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            za.propFix[this.toLowerCase()] = this
        }), za.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h, j = 0;
                if (va(a)) return this.each(function (b) {
                    za(this).addClass(a.call(this, b, $(this)))
                });
                if (b = _(a), b.length) for (; c = this[j++];) if (e = $(c), d = 1 === c.nodeType && " " + Z(e) + " ", d) {
                    for (g = 0; f = b[g++];) 0 > d.indexOf(" " + f + " ") && (d += f + " ");
                    h = Z(d), e !== h && c.setAttribute("class", h)
                }
                return this
            }, removeClass: function (a) {
                var b, c, d, e, f, g, h, j = 0;
                if (va(a)) return this.each(function (b) {
                    za(this).removeClass(a.call(this, b, $(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (b = _(a), b.length) for (; c = this[j++];) if (e = $(c), d = 1 === c.nodeType && " " + Z(e) + " ", d) {
                    for (g = 0; f = b[g++];) for (; -1 < d.indexOf(" " + f + " ");) d = d.replace(" " + f + " ", " ");
                    h = Z(d), e !== h && c.setAttribute("class", h)
                }
                return this
            }, toggleClass: function (a, c) {
                var d = "undefined" === typeof a ? "undefined" : b(a), e = "string" === d || Array.isArray(a);
                return "boolean" === typeof c && e ? c ? this.addClass(a) : this.removeClass(a) : va(a) ? this.each(function (b) {
                    za(this).toggleClass(a.call(this, b, $(this), c), c)
                }) : this.each(function () {
                    var b, c, f, g;
                    if (e) for (c = 0, f = za(this), g = _(a); b = g[c++];) f.hasClass(b) ? f.removeClass(b) : f.addClass(b); else (void 0 === a || "boolean" === d) && (b = $(this), b && Sa.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Sa.get(this, "__className__") || ""))
                })
            }, hasClass: function (a) {
                var b, c, d = 0;
                for (b = " " + a + " "; c = this[d++];) if (1 === c.nodeType && -1 < (" " + Z($(c)) + " ").indexOf(b)) return !0;
                return !1
            }
        });
        var Eb = /\r/g;
        za.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = va(a), this.each(function (c) {
                    var e;
                    1 !== this.nodeType || (e = d ? a.call(this, c, za(this).val()) : a, null == e ? e = "" : "number" === typeof e ? e += "" : Array.isArray(e) && (e = za.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = za.valHooks[this.type] || za.valHooks[this.nodeName.toLowerCase()], (!b || !("set" in b) || void 0 === b.set(this, e, "value")) && (this.value = e))
                })) : e ? (b = za.valHooks[e.type] || za.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value"))) ? c : (c = e.value, "string" === typeof c ? c.replace(Eb, "") : null == c ? "" : c) : void 0
            }
        }), za.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = za.find.attr(a, "value");
                        return null == b ? Z(za.text(a)) : b
                    }
                }, select: {
                    get: function (a) {
                        var b, c, d, e = a.options, f = a.selectedIndex, h = "select-one" === a.type, i = h ? null : [],
                            j = h ? f + 1 : e.length;
                        for (d = 0 > f ? j : h ? f : 0; d < j; d++) if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !g(c.parentNode, "optgroup"))) {
                            if (b = za(c).val(), h) return b;
                            i.push(b)
                        }
                        return i
                    }, set: function (a, b) {
                        for (var c, d, e = a.options, f = za.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = -1 < za.inArray(za.valHooks.option.get(d), f)) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), za.each(["radio", "checkbox"], function () {
            za.valHooks[this] = {
                set: function (a, b) {
                    if (Array.isArray(b)) return a.checked = -1 < za.inArray(za(a).val(), b)
                }
            }, ua.checkOn || (za.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        }), ua.focusin = "onfocusin" in a;
        var Fb = /^(?:focusinfocus|focusoutblur)$/, Gb = function (a) {
            a.stopPropagation()
        };
        za.extend(za.event, {
            trigger: function (c, d, e, f) {
                var g, h, i, j, k, l, m, n, o = [e || ja], p = ra.call(c, "type") ? c.type : c,
                    q = ra.call(c, "namespace") ? c.namespace.split(".") : [];
                if ((h = n = i = e = e || ja, 3 !== e.nodeType && 8 !== e.nodeType) && !Fb.test(p + za.event.triggered) && (-1 < p.indexOf(".") && (q = p.split("."), p = q.shift(), q.sort()), k = 0 > p.indexOf(":") && "on" + p, c = c[za.expando] ? c : new za.Event(p, "object" === ("undefined" === typeof c ? "undefined" : b(c)) && c), c.isTrigger = f ? 2 : 3, c.namespace = q.join("."), c.rnamespace = c.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = e), d = null == d ? [c] : za.makeArray(d, [c]), m = za.event.special[p] || {}, f || !m.trigger || !1 !== m.trigger.apply(e, d))) {
                    if (!f && !m.noBubble && !wa(e)) {
                        for (j = m.delegateType || p, Fb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                        i === (e.ownerDocument || ja) && o.push(i.defaultView || i.parentWindow || a)
                    }
                    for (g = 0; (h = o[g++]) && !c.isPropagationStopped();) n = h, c.type = 1 < g ? j : m.bindType || p, l = (Sa.get(h, "events") || {})[c.type] && Sa.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && l.apply && Ra(h) && (c.result = l.apply(h, d), !1 === c.result && c.preventDefault());
                    return c.type = p, f || c.isDefaultPrevented() || m._default && !1 !== m._default.apply(o.pop(), d) || !Ra(e) || !k || !va(e[p]) || wa(e) || (i = e[k], i && (e[k] = null), za.event.triggered = p, c.isPropagationStopped() && n.addEventListener(p, Gb), e[p](), c.isPropagationStopped() && n.removeEventListener(p, Gb), za.event.triggered = void 0, i && (e[k] = i)), c.result
                }
            }, simulate: function (a, b, c) {
                var d = za.extend(new za.Event, c, {type: a, isSimulated: !0});
                za.event.trigger(d, null, b)
            }
        }), za.fn.extend({
            trigger: function (a, b) {
                return this.each(function () {
                    za.event.trigger(a, b, this)
                })
            }, triggerHandler: function (a, b) {
                var c = this[0];
                if (c) return za.event.trigger(a, b, c, !0)
            }
        }), ua.focusin || za.each({focus: "focusin", blur: "focusout"}, function (a, b) {
            var c = function (a) {
                za.event.simulate(b, a.target, za.event.fix(a))
            };
            za.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this, e = Sa.access(d, b);
                    e || d.addEventListener(a, c, !0), Sa.access(d, b, (e || 0) + 1)
                }, teardown: function () {
                    var d = this.ownerDocument || this, e = Sa.access(d, b) - 1;
                    e ? Sa.access(d, b, e) : (d.removeEventListener(a, c, !0), Sa.remove(d, b))
                }
            }
        });
        var Hb = a.location, Ib = Date.now(), Jb = /\?/;
        za.parseXML = function (b) {
            var c;
            if (!b || "string" !== typeof b) return null;
            try {
                c = new a.DOMParser().parseFromString(b, "text/xml")
            } catch (a) {
                c = void 0
            }
            return (!c || c.getElementsByTagName("parsererror").length) && za.error("Invalid XML: " + b), c
        };
        var Kb = /\[\]$/, Lb = /\r?\n/g, Mb = /^(?:submit|button|image|reset|file)$/i,
            Nb = /^(?:input|select|textarea|keygen)/i;
        za.param = function (b, a) {
            var c, d = [], e = function (a, b) {
                var c = va(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
            if (Array.isArray(b) || b.jquery && !za.isPlainObject(b)) za.each(b, function () {
                e(this.name, this.value)
            }); else for (c in b) aa(c, b[c], a, e);
            return d.join("&")
        }, za.fn.extend({
            serialize: function () {
                return za.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var a = za.prop(this, "elements");
                    return a ? za.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !za(this).is(":disabled") && Nb.test(this.nodeName) && !Mb.test(a) && (this.checked || !ab.test(a))
                }).map(function (a, b) {
                    var c = za(this).val();
                    return null == c ? null : Array.isArray(c) ? za.map(c, function (a) {
                        return {name: b.name, value: a.replace(Lb, "\r\n")}
                    }) : {name: b.name, value: c.replace(Lb, "\r\n")}
                }).get()
            }
        });
        var Ob = /%20/g, Pb = /#.*$/, Qb = /([?&])_=[^&]*/, Rb = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            Sb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tb = /^(?:GET|HEAD)$/, Ub = /^\/\//,
            Vb = {}, Wb = {}, Xb = "*/".concat("*"), Yb = ja.createElement("a");
        Yb.href = Hb.href, za.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Hb.href,
                type: "GET",
                isLocal: Sb.test(Hb.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": za.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (a, b) {
                return b ? da(da(a, za.ajaxSettings), b) : da(za.ajaxSettings, a)
            },
            ajaxPrefilter: ba(Vb),
            ajaxTransport: ba(Wb),
            ajax: function (c, d) {
                function f(b, c, d, f) {
                    var i, j, l, o, v, w = c;
                    m || (m = !0, k && a.clearTimeout(k), e = void 0, h = f || "", y.readyState = 0 < b ? 4 : 0, i = 200 <= b && 300 > b || 304 === b, d && (o = ea(p, y, d)), o = fa(p, o, y, i), i ? (p.ifModified && (v = y.getResponseHeader("Last-Modified"), v && (za.lastModified[g] = v), v = y.getResponseHeader("etag"), v && (za.etag[g] = v)), 204 === b || "HEAD" === p.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = o.state, j = o.data, l = o.error, i = !l)) : (l = w, (b || !w) && (w = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || w) + "", i ? s.resolveWith(q, [j, w, y]) : s.rejectWith(q, [y, w, l]), y.statusCode(u), u = void 0, n && r.trigger(i ? "ajaxSuccess" : "ajaxError", [y, p, i ? j : l]), t.fireWith(q, [y, w]), n && (r.trigger("ajaxComplete", [y, p]), !--za.active && za.event.trigger("ajaxStop")))
                }

                "object" === ("undefined" === typeof c ? "undefined" : b(c)) && (d = c, c = void 0), d = d || {};
                var e, g, h, j, k, l, m, n, o, i, p = za.ajaxSetup({}, d), q = p.context || p,
                    r = p.context && (q.nodeType || q.jquery) ? za(q) : za.event, s = za.Deferred(),
                    t = za.Callbacks("once memory"), u = p.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
                        readyState: 0, getResponseHeader: function (a) {
                            var b;
                            if (m) {
                                if (!j) for (j = {}; b = Rb.exec(h);) j[b[1].toLowerCase()] = b[2];
                                b = j[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        }, getAllResponseHeaders: function () {
                            return m ? h : null
                        }, setRequestHeader: function (a, b) {
                            return null == m && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                        }, overrideMimeType: function (a) {
                            return null == m && (p.mimeType = a), this
                        }, statusCode: function (a) {
                            if (a) if (m) y.always(a[y.status]); else for (var b in a) u[b] = [u[b], a[b]];
                            return this
                        }, abort: function (a) {
                            var b = a || x;
                            return e && e.abort(b), f(0, b), this
                        }
                    };
                if (s.promise(y), p.url = ((c || p.url || Hb.href) + "").replace(Ub, Hb.protocol + "//"), p.type = d.method || d.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(La) || [""], null == p.crossDomain) {
                    l = ja.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = Yb.protocol + "//" + Yb.host !== l.protocol + "//" + l.host
                    } catch (a) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" !== typeof p.data && (p.data = za.param(p.data, p.traditional)), ca(Vb, p, d, y), m) return y;
                for (o in n = za.event && p.global, n && 0 === za.active++ && za.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Tb.test(p.type), g = p.url.replace(Pb, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ob, "+")) : (i = p.url.slice(g.length), p.data && (p.processData || "string" === typeof p.data) && (g += (Jb.test(g) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (g = g.replace(Qb, "$1"), i = (Jb.test(g) ? "&" : "?") + "_=" + Ib++ + i), p.url = g + i), p.ifModified && (za.lastModified[g] && y.setRequestHeader("If-Modified-Since", za.lastModified[g]), za.etag[g] && y.setRequestHeader("If-None-Match", za.etag[g])), (p.data && p.hasContent && !1 !== p.contentType || d.contentType) && y.setRequestHeader("Content-Type", p.contentType), y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" === p.dataTypes[0] ? "" : ", " + Xb + "; q=0.01") : p.accepts["*"]), p.headers) y.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (!1 === p.beforeSend.call(q, y, p) || m)) return y.abort();
                if (x = "abort", t.add(p.complete), y.done(p.success), y.fail(p.error), e = ca(Wb, p, d, y), !e) f(-1, "No Transport"); else {
                    if (y.readyState = 1, n && r.trigger("ajaxSend", [y, p]), m) return y;
                    p.async && 0 < p.timeout && (k = a.setTimeout(function () {
                        y.abort("timeout")
                    }, p.timeout));
                    try {
                        m = !1, e.send(v, f)
                    } catch (a) {
                        if (m) throw a;
                        f(-1, a)
                    }
                }
                return y
            },
            getJSON: function (a, b, c) {
                return za.get(a, b, c, "json")
            },
            getScript: function (a, b) {
                return za.get(a, void 0, b, "script")
            }
        }), za.each(["get", "post"], function (a, b) {
            za[b] = function (a, c, d, e) {
                return va(c) && (e = e || d, d = c, c = void 0), za.ajax(za.extend({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                }, za.isPlainObject(a) && a))
            }
        }), za._evalUrl = function (a) {
            return za.ajax({url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, za.fn.extend({
            wrapAll: function (a) {
                var b;
                return this[0] && (va(a) && (a = a.call(this[0])), b = za(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this
            }, wrapInner: function (a) {
                return va(a) ? this.each(function (b) {
                    za(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = za(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            }, wrap: function (a) {
                var b = va(a);
                return this.each(function (c) {
                    za(this).wrapAll(b ? a.call(this, c) : a)
                })
            }, unwrap: function (a) {
                return this.parent(a).not("body").each(function () {
                    za(this).replaceWith(this.childNodes)
                }), this
            }
        }), za.expr.pseudos.hidden = function (a) {
            return !za.expr.pseudos.visible(a)
        }, za.expr.pseudos.visible = function (a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        }, za.ajaxSettings.xhr = function () {
            try {
                return new a.XMLHttpRequest
            } catch (a) {
            }
        };
        var Zb = {0: 200, 1223: 204}, $b = za.ajaxSettings.xhr();
        ua.cors = !!$b && "withCredentials" in $b, ua.ajax = $b = !!$b, za.ajaxTransport(function (b) {
            var c, d;
            if (ua.cors || $b && !b.crossDomain) return {
                send: function (e, f) {
                    var g, h = b.xhr();
                    if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                    for (g in b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) h.setRequestHeader(g, e[g]);
                    c = function (a) {
                        return function () {
                            c && (c = d = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" === typeof h.status ? f(h.status, h.statusText) : f(0, "error") : f(Zb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" !== typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
                        }
                    }, h.onload = c(), d = h.onerror = h.ontimeout = c("error"), void 0 === h.onabort ? h.onreadystatechange = function () {
                        4 === h.readyState && a.setTimeout(function () {
                            c && d()
                        })
                    } : h.onabort = d, c = c("abort");
                    try {
                        h.send(b.hasContent && b.data || null)
                    } catch (a) {
                        if (c) throw a
                    }
                }, abort: function () {
                    c && c()
                }
            }
        }), za.ajaxPrefilter(function (a) {
            a.crossDomain && (a.contents.script = !1)
        }), za.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (a) {
                    return za.globalEval(a), a
                }
            }
        }), za.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), za.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (d, e) {
                        b = za("<script>").prop({
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function (a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), ja.head.appendChild(b[0])
                    }, abort: function () {
                        c && c()
                    }
                }
            }
        });
        var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
        za.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var a = _b.pop() || za.expando + "_" + Ib++;
                return this[a] = !0, a
            }
        }), za.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g,
                h = !1 !== b.jsonp && (ac.test(b.url) ? "url" : "string" === typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
            if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = va(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : !1 !== b.jsonp && (b.url += (Jb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || za.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                void 0 === f ? za(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && va(f) && f(g[0]), g = f = void 0
            }), "script"
        }), ua.createHTMLDocument = function () {
            var a = ja.implementation.createHTMLDocument("").body;
            return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
        }(), za.parseHTML = function (a, b, c) {
            if ("string" !== typeof a) return [];
            "boolean" === typeof b && (c = b, b = !1);
            var d, e, f;
            return (b || (ua.createHTMLDocument ? (b = ja.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = ja.location.href, b.head.appendChild(d)) : b = ja), e = Fa.exec(a), f = !c && [], e) ? [b.createElement(e[1])] : (e = y([a], b, f), f && f.length && za(f).remove(), za.merge([], e.childNodes))
        }, za.fn.load = function (a, c, d) {
            var e, f, g, h = this, i = a.indexOf(" ");
            return -1 < i && (e = Z(a.slice(i)), a = a.slice(0, i)), va(c) ? (d = c, c = void 0) : c && "object" === ("undefined" === typeof c ? "undefined" : b(c)) && (f = "POST"), 0 < h.length && za.ajax({
                url: a,
                type: f || "GET",
                dataType: "html",
                data: c
            }).done(function (a) {
                g = arguments, h.html(e ? za("<div>").append(za.parseHTML(a)).find(e) : a)
            }).always(d && function (a, b) {
                h.each(function () {
                    d.apply(this, g || [a.responseText, b, a])
                })
            }), this
        }, za.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            za.fn[b] = function (a) {
                return this.on(b, a)
            }
        }), za.expr.pseudos.animated = function (a) {
            return za.grep(za.timers, function (b) {
                return a === b.elem
            }).length
        }, za.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = za.css(a, "position"), l = za(a), m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = za.css(a, "top"), i = za.css(a, "left"), j = ("absolute" === k || "fixed" === k) && -1 < (f + i).indexOf("auto"), j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), va(b) && (b = b.call(a, c, za.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, za.fn.extend({
            offset: function (a) {
                if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                    za.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0];
                if (d) return d.getClientRects().length ? (b = d.getBoundingClientRect(), c = d.ownerDocument.defaultView, {
                    top: b.top + c.pageYOffset,
                    left: b.left + c.pageXOffset
                }) : {top: 0, left: 0}
            }, position: function () {
                if (this[0]) {
                    var a, b, c, d = this[0], e = {top: 0, left: 0};
                    if ("fixed" === za.css(d, "position")) b = d.getBoundingClientRect(); else {
                        for (b = this.offset(), c = d.ownerDocument, a = d.offsetParent || c.documentElement; a && (a === c.body || a === c.documentElement) && "static" === za.css(a, "position");) a = a.parentNode;
                        a && a !== d && 1 === a.nodeType && (e = za(a).offset(), e.top += za.css(a, "borderTopWidth", !0), e.left += za.css(a, "borderLeftWidth", !0))
                    }
                    return {
                        top: b.top - e.top - za.css(d, "marginTop", !0),
                        left: b.left - e.left - za.css(d, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent; a && "static" === za.css(a, "position");) a = a.offsetParent;
                    return a || fb
                })
            }
        }), za.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
            var c = "pageYOffset" === b;
            za.fn[a] = function (d) {
                return Oa(this, function (a, d, e) {
                    var f;
                    return wa(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }), za.each(["top", "left"], function (a, b) {
            za.cssHooks[b] = L(ua.pixelPosition, function (a, c) {
                if (c) return c = K(a, b), nb.test(c) ? za(a).position()[b] + "px" : c
            })
        }), za.each({Height: "height", Width: "width"}, function (a, b) {
            za.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
                za.fn[d] = function (e, f) {
                    var g = arguments.length && (c || "boolean" !== typeof e),
                        h = c || (!0 === e || !0 === f ? "margin" : "border");
                    return Oa(this, function (b, c, e) {
                        var f;
                        return wa(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, ha(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? za.css(b, c, h) : za.style(b, c, e, h)
                    }, b, g ? e : void 0, g)
                }
            })
        }), za.each(["blur", "focus", "focusin", "focusout", "resize", "scroll", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "contextmenu"], function (a, b) {
            za.fn[b] = function (a, c) {
                return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), za.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), za.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            }, unbind: function (a, b) {
                return this.off(a, null, b)
            }, delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            }, undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }), za.proxy = function (a, b) {
            var c, d, e;
            if ("string" === typeof b && (c = a[b], b = a, a = c), !!va(a)) return d = la.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(la.call(arguments)))
            }, e.guid = a.guid = a.guid || za.guid++, e
        }, za.holdReady = function (a) {
            a ? za.readyWait++ : za.ready(!0)
        }, za.isArray = Array.isArray, za.parseJSON = JSON.parse, za.nodeName = g, za.isFunction = va, za.isWindow = wa, za.camelCase = p, za.type = e, za.now = Date.now, za.isNumeric = function (a) {
            var b = za.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        }, "function" === typeof define && define.amd && define("jquery", [], function () {
            return za
        });
        var bc = a.jQuery, cc = a.$;
        return za.noConflict = function (b) {
            return a.$ === za && (a.$ = cc), b && a.jQuery === za && (a.jQuery = bc), za
        }, c || (a.jQuery = a.$ = za), za
    }), a.exports
});
Cube(708, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    Object.defineProperty(b, "__esModule", {value: !0});
    var e = c(704), f = d(e), g = c(336), h = d(g), i = function (a) {
        var b = a.backgroundColor, c = a.backgroundImage;
        return new Promise(function (a) {
            c && "none" !== c ? h.default.extractColorsFromImage(c).then(function () {
                var b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, c = b.bgColor;
                a(h.default.getTextColorFromBg(c))
            }).catch(function () {
                a(h.default.getTextColorFromBg(b))
            }) : a(h.default.getTextColorFromBg(b))
        })
    };
    return b.default = function (a) {
        var b = a.backgroundImage, c = a.backgroundColor, d = new URL(window.location.href);
        if (d && d.searchParams && d.searchParams.get("workid")) {
            var e = d.searchParams.get("workid");
            i({backgroundImage: b, backgroundColor: c}).then(function (a) {
                var b = (0, f.default)("<svg width=\"100%\" height=\"100%\" style=\"position: absolute; pointer-events: none; z-index:1;\">\n              <pattern id=\"DataVUserInfoWaterMarker\" x=\"0\" y=\"0\" width=\"200\" height=\"200\" patternUnits=\"userSpaceOnUse\">\n                <text x=\"100\" y=\"100\" fill=" + a + " fill-opacity=\"0.4\" transform=\"rotate(-30)\">" + e + "</text>\n              </pattern>\n              <rect class=\"rect\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" stroke=\"none\" fill=\"url(#DataVUserInfoWaterMarker)\"></rect>\n            </svg>");
                (0, f.default)("body").append(b)
            })
        }
    }, a.exports
});
Cube(712, ["/common/share.js"], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    var e = c(704), f = d(e), g = c("/common/share.js"), h = d(g), i = c(142), j = d(i);
    return window.$getComponentById = function (a) {
        return "string" === typeof a && document.querySelector("[data-id=" + a.trim() + "]")
    }, a.exports = function (a, b, c, d) {
        var e = Number.isNaN,
            g = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {initCB: null, dataCB: null},
            i = (0, h.default)(), k = i.get("layers"), l = k.get(a), m = void 0, n = void 0;
        if ("com" === b && c) {
            m = (0, f.default)("<div class=\"-datav-com\">").appendTo(c), n = (0, f.default)("<div class='-datav-wraper'>").appendTo(m);
            var o = e(parseFloat(l.attr.deg)) ? 0 : parseFloat(l.attr.deg),
                p = e(parseFloat(l.attr.opacity)) ? 1 : parseFloat(l.attr.opacity), q = {
                    width: l.attr.w,
                    height: l.attr.h,
                    "z-index": 0,
                    transform: "rotate(" + o + "deg) " + (l.attr.flipH ? "scaleX(-1)" : "") + " " + (l.attr.flipV ? "scaleY(-1)" : ""),
                    opacity: p,
                    "pointer-events": "none"
                }, r = i.get("config"), s = r.config;
            if (s) {
                var t = s.styleFilterParams || {}, u = t.enable, v = t.hue, w = t.contrast, x = t.opacity,
                    y = t.brightness, z = t.saturate;
                u && (q.filter = "hue-rotate(" + v + "deg) contrast(" + w + "%) opacity(" + x + "%) saturate(" + z + "%) brightness(" + y + "%)")
            }
            m.css(q), d || (m.css({
                left: l.attr.x,
                top: l.attr.y
            }), m.addClass("absolute"), m[0].dataset.id = a, m[0].dataset.version = l.version);
            var A = {width: l.attr.w, height: l.attr.h, "pointer-events": "auto"};
            n.css(A)
        }
        i.getComponentClass(a, function () {
            var b = j.default.register(a, n ? n.get(0) : null);
            b && (j.default.autoUpdateAll(a, function () {
                g.dataCB && g.dataCB(a, b, l)
            }), g.initCB && g.initCB(a, b, l))
        })
    }, a.exports
});
Cube(711, ["/common/share.js"], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a) {
        function b(a, c, e, h) {
            if (e = e || l, /^(com)$/.test(a.type)) try {
                (0, u.default)(a.id, "com", c, h, null, {
                    initCB: function (a, b, c) {
                        s.default.bindEvent(a, b, l.emit.bind(l, "global_var")), y.default.bindEvent(a, b), c.children && c.children.length && c.children.forEach(function (a) {
                            w.default.instances[a] && (s.default.bindEvent(a, w.default.instances[a], l.emit.bind(l, "global_var")), y.default.bindEvent(a, w.default.instances[a]))
                        }), e.emit("com_init")
                    }, dataCB: function () {
                        e.emit("data_init")
                    }
                })
            } catch (b) {
                console.error("com init error", a.id, b)
            } else if ((0, z.isLayer)(a.type)) {
                var i = a.id, j = f.get(i);
                a.list = a.list || [];
                var n = !(0, o.default)(j.config), p = n && j.config.slider && j.config.slider.show,
                    q = j.attr.apply3d ? "style=\"perspective:" + j.attr.perspective + "px;perspective-origin:" + j.attr.perspectiveOrigin.x + "% " + j.attr.perspectiveOrigin.y + "%\"" : "",
                    r = n ? "\n        <div class=\"-datav-layer slider\" " + q + ">\n          <div class='slider-wrap slider-wrap-" + i + "'></div>\n        </div>\n      " : "<div class=\"-datav-layer\" " + q + ">",
                    t = (0, g.default)(r).appendTo(c);
                j && (t.css({
                    "pointer-events": "none",
                    width: j.attr.w,
                    height: j.attr.h,
                    opacity: (0, m.default)(j.attr, "opacity") ? j.attr.opacity : 1,
                    position: "absolute"
                }), !h && t.css({transform: "translate(" + j.attr.x + "px, " + j.attr.y + "px)"}));
                var v = w.default.register(i, t ? t.get(0) : null, {enableSlider: d}), x = a.list.length, A = 0, B = 0;
                0 === x ? (e.emit("com_init"), v.run(), e.emit("data_init"), y.default.bindEvent(i, v)) : (v && v.on("com_init", function () {
                    A++, A >= x && (e.emit("com_init"), y.default.bindEvent(i, v))
                }), v && v.on("data_init", function () {
                    B++, B >= x && (v.run(), e.emit("data_init"), j.hide && v.hide && v.hide())
                }), n && (t = t.find(".slider-wrap")), (0, k.default)(a.list, function (a) {
                    var c = n ? (0, g.default)("<div class=\"slider-item slider-item-" + i + "\" data-comid=\"" + a.id + "\">").appendTo(t) : t;
                    b(a, c, v, p)
                }))
            }
        }

        var c = (0, q.default)(), d = !0, e = c.get("zIndexList").get(), f = c.get("layers"), h = e.length, i = 0,
            j = 0, l = this, n = (0, g.default)("<div class=\"layer\"></div>");
        a.container.append(n), 0 === h && setTimeout(function () {
            l.emit("coms_ready"), l.emit("data_ready")
        }, 1e3), this.on("com_init", function () {
            i++, i >= h && setTimeout(function () {
                l.emit("coms_ready")
            }, 1e3)
        }), this.on("data_init", function () {
            j++, j >= h && setTimeout(function () {
                l.emit("data_ready")
            }, 1e3)
        }), (0, k.default)(e, function (a) {
            b(a, n)
        }), (0, g.default)(".datav-layout .-datav-com").length && (0, g.default)(".datav-layout").siblings(".screen").remove()
    }

    var f = c(704), g = d(f), h = c(709), i = d(h), j = c(93), k = d(j), l = c(80), m = d(l), n = c(56), o = d(n),
        p = c("/common/share.js"), q = d(p), r = c(706), s = d(r), t = c(712), u = d(t), v = c(142), w = d(v),
        x = c(707), y = d(x), z = c(84);
    return i.default.extend(e, {}), a.exports = e, a.exports
});
Cube(710, [], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a) {
        var b = (0, g.default)("<div class=\"scene\"></div>");
        a.container.append(b);
        var c = [], d = new s.default({container: b, getCom: a.getCom});
        d.on("broadcast", this.emit.bind(this, "broadcast")), d.on("com_init", this.emit.bind(this, "com_init")), d.on("coms_ready", this.emit.bind(this, "coms_ready")), d.on("data_ready", this.emit.bind(this, "data_ready")), d.on("global_var", this.emit.bind(this, "global_var")), c.push(d), this._layers = c
    }

    var f = c(704), g = d(f), h = c(709), i = d(h), j = c(70), k = d(j), l = c(142), m = d(l), n = c(707), o = d(n),
        p = c(706), q = d(p), r = c(711), s = d(r);
    return i.default.extend(e, {
        broadcast: function () {
        }, updateAllInstanceAPI: function () {
            m.default.updateAllInstanceAPI()
        }, updateGlobalVars: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = a.data;
            if (b && Array.isArray(b)) {
                var c = b.reduce(function (a, b) {
                    return a[b.name] = b.value, a
                }, {});
                q.default.setVariables(c), q.default.notice(Object.keys(c))
            }
        }, updatePageVars: function () {
            var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = a.data;
            b && Array.isArray(b) && b.forEach(function (a) {
                var b = a.name, c = a.value;
                (0, k.default)(b) && o.default.pageVars.set(b, c)
            })
        }
    }), a.exports = e, a.exports
});
Cube(705, ["/common/share.js"], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    function e(a, b) {
        this._coms = [], this._scenes = {}, this._currentSceneId = null, this.init(a, b), this.globalVars = k.default.globalVars
    }

    var f = c(709), g = d(f), h = c(710), i = d(h), j = c(398), k = d(j), l = c(142), m = d(l), n = c(707), o = d(n),
        p = c("/common/share.js"), q = d(p), r = (0, q.default)();
    return g.default.extend(e, {
        init: function (a, b) {
            var c = this;
            b.name && this.setName(b.name);
            var d = b.scenes, e = void 0;
            if (d.forEach(function (a) {
                a.selected && (e = a)
            }), e || (e = d[Object.keys(d)[0]]), this._currentSceneId = e.id, !this._scenes[e.id]) {
                e.container = b.container, e.getCom = b.getCom;
                var f = new i.default(e);
                o.default.bindEvent("global", f), this._scenes[e.id] = f, f.on("coms_ready", this.emit.bind(this, "coms_ready")), f.on("data_ready", this.emit.bind(this, "data_ready")), f.on("global_var", function (a, b) {
                    c.globalVars.set(a, b);
                    var d = m.default.instances;
                    Object.keys(d).forEach(function (b) {
                        var c = d[b];
                        c && Object.keys(c.__datav_dataconfig || {}).forEach(function (b) {
                            var d = c.__datav_dataconfig[b].dcConfig;
                            if (d) {
                                var e = !1;
                                if (Object.keys(d).forEach(function (b) {
                                    ("api" == b || "sql" == b) && "string" === typeof d[b] && -1 < d[b].indexOf(":" + a) && (e = !0)
                                }), !e) return
                            }
                            var f = c.__datav_dataconfig[b].handler, g = c.__datav_datasources[b];
                            g && f && c[f] && g(function (a, b) {
                                return function (c, d) {
                                    try {
                                        a[b](d)
                                    } catch (a) {
                                        console.error(a), console.error(a.stack)
                                    }
                                }
                            }(c, f))
                        })
                    })
                })
            }
        }, setName: function () {
        }, get: function (a) {
            return m.default.instances[a]
        }, getAll: function () {
            return m.default.instances
        }, getEventManager: function () {
            return o.default
        }
    }), a.exports = e, a.exports
});
Cube("/preview/index.js", ["/common/share.js", "/37.js"], function (a, b, c) {
    function d(a) {
        return a && a.__esModule ? a : {default: a}
    }

    var e = c(704), f = d(e), g = c(705), h = d(g), i = c(706), j = d(i), k = c(707), l = d(k),
        m = c("/common/share.js"), n = d(m), o = c(142), p = d(o), q = c(708), r = d(q);
    return a.exports = {
        stage: null, run: function (a, b, c) {
            function d() {
                q || "function" !== typeof c || c(m, o, function () {
                }), q = !0
            }

            var e = (0, n.default)();
            if (p.default.initConfig(e.get("layers")), b && b.config) {
                var g = b.config, i = g.backgroundImage, k = g.backgroundColor;
                (0, f.default)("body").css({
                    "background-image": i && "none" !== i ? "url(" + i + ")" : "none",
                    "background-color": k || "transparent"
                }), b.config.ifUserWatermark && (0, r.default)({backgroundImage: i, backgroundColor: k})
            }
            "undefined" === typeof b.config.ifLogo || b.config.ifLogo || (0, f.default)("#datav-text-logo").hide(), document.title = b.name, b.container = (0, f.default)(".datav-layout"), j.default.init(b.variables || {}), l.default.init(b.events || [], b.rules || []);
            var m = new h.default(a, b), o = null;
            this.stage = m;
            var q = !1;
            m.on("coms_ready", d), setTimeout(d, 20000)
        }
    }, a.exports
});