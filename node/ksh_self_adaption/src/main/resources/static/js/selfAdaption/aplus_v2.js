!function e(t, n, r) {
    function a(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var s = "function" == typeof require && require;
                if (!u && s) return s(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return a(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }

    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) a(r[o]);
    return a
}({
    1: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            return e && e.getAttribute ? e.getAttribute(t) || "" : ""
        }

        function a(e) {
            return o = o || document.getElementsByTagName("head")[0], u && !e ? u : o ? u = o.getElementsByTagName("meta") : []
        }

        function i(e, t) {
            var n;
            if (document.querySelector) {
                var i = document.querySelector('meta[name="' + e + '"]');
                n = r(i, t || "content")
            } else for (var o = a(), u = o.length, s = 0; u > s; s++) {
                var l = o[s];
                r(l, "name") === e && (n = r(l, t || "content"))
            }
            return n || ""
        }

        var o, u, s = e("@ali/grey-publish").util;
        n.tryToGetAttribute = r, n.getMetaTags = a, n.getMetaCnt = i, n.indexof = function (e, t) {
            for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
            return -1
        };
        var l = function (e, t) {
            return e += "", e.length < t && (e = "0" + e), e
        };
        n.getDateMin = function () {
            var e = new Date, t = "";
            return t += e.getFullYear(), t += l(e.getMonth() + 1, 2), t += l(e.getDate(), 2), t += l(e.getHours(), 2), t += l(e.getMinutes(), 2)
        }, n.isMobile = function (e) {
            var t = /AliApp|Yunos|cyclone/i.test(e), n = /iPhone|iPad|iPod/i.test(e), r = /Android/i.test(e),
                a = /Windows Phone/i.test(e) || /IEMobile/i.test(e) || /WPDesktop/i.test(e), i = /BlackBerry/i.test(e),
                o = /Opera Mini/i.test(e);
            return t || n || r || a || i || o
        };
        var c = function () {
            var e;
            try {
                e = document.getElementById("beacon-aplus") || document.getElementById("tb-beacon-aplus")
            } catch (t) {
            }
            return e
        };
        n.getCurrentNode = c, n.loopAddScript = function (e, t) {
            try {
                if (t && t instanceof Array) {
                    var n = 0, r = function (a) {
                        a && s.addScript(e + "/" + a, function () {
                            r(t[++n])
                        })
                    };
                    r(t[n])
                }
            } catch (a) {
            }
        }, n.getCdnpath = function () {
            var e = "//g.alicdn.com", t = "//g-assets.daily.taobao.net", n = "//assets.alicdn.com/g",
                r = "//u.alicdn.com", a = "//laz-g-cdn.alicdn.com", i = (document, c()), o = e, u = [n, t, r, a],
                s = new RegExp(r);
            if (i) for (var l = 0; l < u.length; l++) {
                var g = new RegExp(u[l]);
                if (g.test(i.src)) {
                    o = u[l], s.test(i.src) && (o = n);
                    break
                }
            }
            return o
        }, n.catchException = function (e, t, n) {
            var r = window, a = r.goldlog_queue || (r.goldlog_queue = []), i = e;
            "object" == typeof t && t.message && (i = i + "_" + t.message), n && n.msg && (i += "_" + n.msg), a.push({
                action: "goldlog._aplus_cplugin_m.do_tracker_jserror",
                arguments: [{message: i, error: JSON.stringify(t), filename: e}]
            })
        }, n.aplusVersions = {
            V_O: "aplus_o.js",
            V_2: "aplus_v2.js",
            V_W: "aplus_wap.js",
            V_S: "aplus_std.js",
            V_I: "aplus_int.js",
            V_U: "aplus_u.js"
        }
    }, {"@ali/grey-publish": 2}], 2: [function (e, t, n) {
        "use strict";
        n.grey = e("./src/grey"), n.util = e("./src/util")
    }, {"./src/grey": 3, "./src/util": 4}], 3: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            return e + Math.floor(Math.random() * (t - e + 1))
        }

        function a(e) {
            var t = !1;
            try {
                var n = e.bingo_chars || "0aAbBc1CdDeE2fFgGh3HiIjJ4kKlLm5MnNoO6pPqQr7RsStT8uUvVw9WxXyY+zZ",
                    a = h.getCookie(e.bingo_cookiename || "cna") || "";
                if (a) {
                    var i = a.charAt(0), o = n.indexOf(i) / n.length;
                    t = o <= e.ratio / e.base
                } else t = r(1, e.base) <= e.ratio
            } catch (u) {
                t = r(1, e.base) <= e.ratio
            }
            return t
        }

        function i(e, t) {
            var n;
            for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        function o(e, t) {
            return function (n) {
                return e(i(t, n || {}))
            }
        }

        function u(e, t) {
            var n = document;
            if (t) {
                var r = n.getElementsByTagName("script")[0], a = n.createElement("script");
                e && e.nonce && a.setAttribute("nonce", e.nonce), a.appendChild(n.createTextNode(t)), r.parentNode.insertBefore(a, r)
            }
        }

        function s(e, t) {
            if (e && e.length > 0) for (var n = new RegExp("^" + t), r = 0; r < e.length; r++) {
                var a = e[r];
                n.test(a) && _.remove(a)
            }
        }

        function l(e, t, n) {
            try {
                _.remove(e);
                var r = _.get(t);
                if (r) {
                    var a = JSON.parse(r) || [];
                    s(a, n)
                }
            } catch (i) {
            }
            try {
                Object && Object.keys && s(Object.keys(localStorage), n)
            } catch (o) {
            }
        }

        function c(e, t, n) {
            try {
                if (!d) {
                    var r = function (r) {
                        r.key === e && r.newValue && l(e, t, n)
                    };
                    if (window.addEventListener) return window.addEventListener("storage", r, !1), !1;
                    window.attachEvent("storage", r)
                }
                d = !0
            } catch (a) {
            }
        }

        function g(e) {
            var t;
            try {
                var n = _.get(e.LS_KEY_CLUSTER);
                if (n) {
                    var r = JSON.parse(n);
                    t = _.get(r[0])
                }
            } catch (a) {
            }
            return t
        }

        function f(e, t) {
            h.addScript(t.url, e.callback, function () {
                t.oldCode && (u(e, t.oldCode), h.isFunction(e.callback) && e.callback.call(this, {from: "oldCode"}))
            })
        }

        function p(e, t) {
            var n, r = "cors", a = t.code, i = t.key, o = a ? a.split("\n").length : 0;
            o >= t.size && (u(e, a), l(i, e.LS_KEY_CLUSTER, e.LS_PREFIX), _.set(e.LS_KEY_CLUSTER, JSON.stringify([i])), _.set(i, a), n = !0), o < t.size && t.oldCode && (r = "oldCode", u(e, t.oldCode), n = !0), n || f(e, t), c(i, e.LS_KEY_CLUSTER, e.LS_PREFIX), h.isFunction(e.callback) && e.callback.call(this, {from: r})
        }

        function v(e, t, n) {
            var r = window, a = r.XDomainRequest, i = r.XMLHttpRequest && "withCredentials" in new r.XMLHttpRequest,
                o = t.after;
            if (!t.isDebug && _.test() && (i || a)) {
                var s = g(t), l = t.LS_KEY + h.hash(e), v = _.get(l), d = "local";
                v ? (c(l, t.LS_KEY_CLUSTER, t.LS_PREFIX), u(t, v), h.isFunction(o) && o.call(this, {from: d})) : h.requestJS(e, navigator.userAgent, function (r) {
                    p(t, {key: l, code: r, oldCode: s, size: n, url: e})
                }, function () {
                    f(t, {url: e, oldCode: s})
                })
            } else h.addScript(e, o)
        }

        var d, h = e("./util"), _ = {
            set: function (e, t) {
                try {
                    return localStorage.setItem(e, t), !0
                } catch (n) {
                    return !1
                }
            }, get: function (e) {
                return localStorage.getItem(e)
            }, test: function () {
                var e = "grey_test_key";
                try {
                    return localStorage.setItem(e, 1), localStorage.removeItem(e), !0
                } catch (t) {
                    return !1
                }
            }, remove: function (e) {
                localStorage.removeItem(e)
            }
        }, m = {base: 1e4}, b = {_config: m};
        b.load = function (e) {
            e = i({
                LS_KEY_CLUSTER: "",
                LS_KEY: "",
                isLoadDevVersion: "",
                dev: "",
                stable: "",
                grey: "",
                base: m.base,
                bingo: "",
                nonce: ""
            }, e);
            var t, n = {}, r = 0, u = "function" == typeof e.bingo ? e.bingo : a;
            e.ratio >= e.base || u(e) ? (t = e.grey, n.type = "grey", r = e.greySize) : (t = e.stable, n.type = "stable", r = e.stableSize);
            try {
                h.isFunction(e.isLoadDevVersion) && e.isLoadDevVersion() && (t = e.dev, n.type = "dev", r = e.devSize)
            } catch (s) {
            }
            return n.url = t, h.isFunction(e.before) ? e.before(n, function (t) {
                v(t, e, r)
            }) : v(t, e, r), h.isFunction(e.after) && (e.after = o(e.after, n)), this
        }, b.config = function (e) {
            return i(m, e || {}), this
        }, t.exports = b
    }, {"./util": 4}], 4: [function (e, t, n) {
        "use strict";
        var r = function (e) {
            return "function" == typeof e
        };
        n.isFunction = r;
        var a = function (e, t, n) {
            var a = document, i = a.getElementsByTagName("script")[0], o = a.getElementsByTagName("head")[0],
                u = a.createElement("script");
            u.type = "text/javascript", u.async = !0, u.src = e, u.onerror = function () {
                r(n) && n()
            }, i ? i.parentNode.insertBefore(u, i) : o && o.appendChild(u), r(t) && t.call(this, {from: "script"})
        };
        n.addScript = a, n.getCookie = function (e) {
            var t = document, n = t.cookie.match(new RegExp("(?:^|;)\\s*" + e + "=([^;]+)"));
            return n ? n[1] : ""
        };
        var i = {base: 1e4, timeout: 1e4}, o = function (e, t, n) {
            fetch(e).then(function (e) {
                return /application\/json/.test(e.headers.get("content-type")) ? e.json() : e.text()
            }).then(function (e) {
                t(e)
            })["catch"](function (e) {
                n(e)
            })
        }, u = function (e, t, n) {
            var r, a = "GET", o = function () {
                r.responseText ? t(r.responseText) : n()
            }, u = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
            u ? (r = new XMLHttpRequest, r.open(a, e, !0)) : (r = new XDomainRequest, r.open(a, e)), r.timeout = i.timeout, r.onload = o, r.onerror = n, r.ontimeout = n, r.send()
        }, s = function (e, t, n) {
            window.fetch ? o(e, t, n) : u(e, t, n)
        };
        n.request = s, n.requestJS = function (e, t, n, r) {
            return /blitz/i.test(t) ? void r() : void s(e, n, r)
        }, n.hash = function (e) {
            var t, n, r = 1315423911;
            for (t = e.length - 1; t >= 0; t--) n = e.charCodeAt(t), r ^= (r << 5) + n + (r >> 2);
            return (2147483647 & r).toString(16)
        }
    }, {}], 5: [function (e, t, n) {
        "use strict";
        !function () {
            try {
                var t = window, n = "g_aplus_grey_launched";
                if (t[n]) return;
                t[n] = 1;
                var r = e("./for_aplus_fns"), a = e("@ali/grey-publish").util, i = function () {
                    var n = t.goldlog || (t.goldlog = {}), a = e("@ali/grey-publish").grey, i = !0;
                    try {
                        var o = t.location.href.match(/aplusDebug=(true|false)/);
                        o && o.length > 0 && t.localStorage.setItem("aplusDebug", o[1]), i = "true" === t.localStorage.getItem("aplusDebug"), n.aplusDebug = i
                    } catch (u) {
                    }
                    var s = {
                        "aplus_o.js": {
                            stable_version: {value: "8.12.7"},
                            grey_version: {value: "8.12.8"},
                            dev_version: {}
                        },
                        "aplus_std.js": {
                            stable_version: {value: "8.12.7"},
                            grey_version: {value: "8.12.8"},
                            dev_version: {}
                        },
                        "aplus_wap.js": {
                            stable_version: {value: "8.12.7"},
                            grey_version: {value: "8.12.8"},
                            dev_version: {}
                        },
                        "aplus_int.js": {
                            stable_version: {value: "8.12.7"},
                            grey_version: {value: "8.12.8"},
                            dev_version: {}
                        },
                        "aplus_u.js": {
                            stable_version: {value: "8.12.7"},
                            grey_version: {value: "8.12.8"},
                            dev_version: {}
                        }
                    }, l = "APLUS_S_CORE_0.20.86_20191025165810_", c = e("../grey/util"), g = t.location.protocol;
                    0 !== g.indexOf("http") && (g = "https:");
                    var f = c.getCdnpath();
                    n.getCdnPath = c.getCdnpath;
                    var p = g + f + "/alilog", v = r.getAplusBuVersion(), d = v.v, h = v.BU, _ = 1e4, m = [],
                        b = function () {
                            var e = "";
                            if (m && m.length > 0) for (var t = c.getDateMin(), n = 0; n < m.length; n++) {
                                var r = m[n].key + "";
                                t >= r && (e = Math.floor(1e4 * m[n].value))
                            }
                            return e
                        }, y = e("./utilPlugins"), S = function (e) {
                            var t, n = i ? [] : y.getFrontPlugins({version: e, fn: d, BU: h, isDebug: i}),
                                r = [["s", e, d].join("/")], a = i ? [] : y.getPlugins({version: e, fn: d, BU: h}), o = 0;
                            try {
                                var u = [].concat(n, r, a);
                                t = p + "/??" + u.join(",") + "?v=20191025165810", o = u.length
                            } catch (s) {
                                t = p + "/??" + r.join(","), o = r.length
                            }
                            return {size: o, url: t}
                        }, j = b();
                    j && (_ = j), n.aplus_cplugin_ver = "0.7.8", n.record || (n.record = function (e, n, r, a) {
                        (t.goldlog_queue || (t.goldlog_queue = [])).push({
                            action: "goldlog.record",
                            arguments: [e, n, r, a]
                        })
                    });
                    var w = s[d] || {}, E = w.stable_version || {}, C = w.grey_version || {}, L = w.dev_version || {},
                        V = E.value || "8.5.9", k = C.value || V, B = L.value || k, A = S(B), P = S(V), x = S(k),
                        M = c.getCurrentNode(), R = M ? M.getAttribute("cspx") : "", U = {
                            LS_KEY_CLUSTER: "APLUS_LS_KEY",
                            LS_KEY: l,
                            LS_PREFIX: "APLUS_S_CORE",
                            isDebug: i,
                            isLoadDevVersion: !1,
                            dev: A.url,
                            devSize: A.size,
                            stable: P.url,
                            stableSize: P.size,
                            grey: x.url,
                            greySize: x.size,
                            ratio: _,
                            nonce: R,
                            before: function (e, t) {
                                switch (e.type) {
                                    case"grey":
                                        n.lver = B;
                                        break;
                                    case"stable":
                                        n.lver = V;
                                        break;
                                    case"dev":
                                        n.lver = B
                                }
                                if (i) {
                                    var r = {version: n.lver, fn: d, BU: h, isDebug: i};
                                    c.loopAddScript(p, y.getFrontPlugins(r))
                                }
                                if ("function" == typeof t) {
                                    var a = S(n.lver);
                                    t(a.url)
                                }
                            }
                        };
                    i && (U.after = function () {
                        var e = 0, r = function () {
                            if (!(e >= 100)) {
                                e++;
                                var a = n._$ || {};
                                t.setTimeout(function () {
                                    "complete" === a.status ? c.loopAddScript(p, y.getPlugins({
                                        version: n.lver,
                                        fn: d,
                                        BU: h
                                    })) : r()
                                }, 100)
                            }
                        };
                        r()
                    }), a.load(U)
                }, o = r.getNewCdnpathByMeta();
                o ? a.addScript(o, function () {
                }, function () {
                    i()
                }) : i()
            } catch (u) {
            }
        }()
    }, {"../grey/util": 1, "./for_aplus_fns": 6, "./utilPlugins": 9, "@ali/grey-publish": 2}], 6: [function (e, t, n) {
        "use strict";
        var r, a = e("./util"), i = a.aplusVersions, o = [i.V_O, i.V_S, i.V_I, i.V_W, i.V_U], u = function () {
            for (var e, t, n = [{
                version: i.V_O,
                domains: [/^https?:\/\/(.*\.)?youku\.com/i, /^https?:\/\/(.*\.)?tudou\.com/i, /^https?:\/\/(.*\.)?soku\.com/i, /^https?:\/\/(.*\.)?laifeng\.com/i],
                BU: "YT"
            }], r = 0; r < n.length; r++) for (var a = n[r].domains, o = n[r].version, u = 0; u < a.length; u++) if (location.href.match(a[u])) return {
                v: o,
                BU: n[r].BU
            };
            return {v: t, BU: e}
        }, s = function () {
            r || (r = a.getMetaCnt("aplus-version"));
            var e = r;
            return e && (e += ".js"), a.indexof(o, e) > -1 ? e : null
        };
        n.getNewCdnpathByMeta = function () {
            r || (r = a.getMetaCnt("aplus-version"));
            var e, t = r, n = t.split("@");
            return 2 === n.length && (e = "//d.alicdn.com/alilog/mlog/aplus.js?id=" + n[1]), e
        };
        var l = function () {
            try {
                for (var e = document, t = e.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                    var r = t[n].getAttribute("src");
                    if (/alilog\/mlog\/aplus_\w+\.js/.test(r) || /alicdn\.com\/js\/aplus_\w+\.js/.test(r)) return r
                }
                return ""
            } catch (a) {
                return ""
            }
        }, c = function () {
            var e = "";
            try {
                var t = (document, a.getCurrentNode());
                if (t && (e = t.getAttribute("src")), e || (e = l()), e) {
                    var n = e.match(/aplus_\w+\.js/);
                    "object" == typeof n && n.length > 0 && (e = n[0])
                }
            } catch (r) {
                e = ""
            } finally {
                return e
            }
        };
        n.getAplusBuVersion = function () {
            var e, t;
            try {
                e = i.V_S;
                var n = c();
                n && (e = n);
                var r = u();
                r && r.v && (e = r.v), t = r.BU;
                var a = s();
                a && (e = a), e === i.V_2 && (e = i.V_S)
            } catch (o) {
                e = e === i.V_O ? i.V_W : i.V_S
            } finally {
                return {v: e, BU: t}
            }
        }
    }, {"./util": 8}], 7: [function (e, t, n) {
        "use strict";

        function r() {
            var e = "", t = /Umeng4Aplus|UT4Aplus/i.test(v);
            return t && (e = "aplus4native.js"), e
        }

        function a(e) {
            return d && !g.WindVane && e.fn !== p.V_O
        }

        function i(e) {
            return (h || d && !g.WindVane) && e.fn === p.V_O
        }

        function o(e, t) {
            var n = e.trackerCfg || {}, r = n.points || [];
            if (r.length > 0) for (var a = new RegExp(t), i = 0; i < r.length; i++) if (a.test(r[i].trackerType)) return !0;
            return !1
        }

        function u(e) {
            return o(e, "exposure") || !!f.getMetaCnt("aplus-auto-exp")
        }

        function s(e) {
            return o(e, "click") || !!f.getMetaCnt("aplus-auto-clk")
        }

        function l() {
            return !!f.getMetaCnt("aplus-vt-cfg")
        }

        var c = document, g = window, f = e("./util"), p = f.aplusVersions,
            v = (e("@ali/grey-publish").util, g.navigator.userAgent), d = /WindVane/i.test(v),
            h = /AliBaichuan/i.test(v), _ = function () {
                return /_a_ig_v=@aplus/.test(location.search)
            }, m = function (e) {
                return e.fn !== p.V_O && e.fn !== p.V_U
            }, b = function () {
                try {
                    var e = g.localStorage, t = "aplus_track_debug_id", n = new RegExp("[?|&]" + t + "=(\\w*)"),
                        r = location.href.match(n);
                    if (r && r.length > 0) e.setItem(t, r[1]); else {
                        var a = c.referrer || "", i = a.match(n);
                        if (i && i.length > 0) e.setItem(t, i[1]); else {
                            var o = g.name || "", u = o.match(n);
                            u && u.length > 0 && e.setItem(t, u[1])
                        }
                    }
                    var s = e.getItem(t) || "";
                    return s && s.length > 50 ? !0 : !1
                } catch (l) {
                    return !1
                }
            }, y = function () {
                try {
                    return !!/lazada/.test(location.host)
                } catch (e) {
                    return !1
                }
            }, S = function (e) {
                try {
                    if ("function" == typeof g.WebSocket) {
                        var t = /alibaba-inc|aliway|alibabacorp\.com/.test(location.hostname),
                            n = f.getMetaCnt("aplus-channel"),
                            r = /aplus_ws=true/.test(location.search) || "WS" === n || "WS-ONLY" === n, a = location.host,
                            i = /tmall|taobao\.com/g.test(a), o = /Qianniu\/\d/.test(v),
                            u = t || r || i && !f.isMobile(v) && !o && e.fn !== p.V_W;
                        return u && (goldlog.aplusChannel = "WS"), u
                    }
                    return !1
                } catch (s) {
                    return !1
                }
            };
        n.getFrontPlugins = function (e) {
            var t = "s/" + e.version + "/plugin", n = goldlog.aplus_cplugin_ver, o = r(e.isDebug);
            return [{enable: a(e), path: [t, "aplus_windvane2.js"].join("/")}, {
                enable: i(e),
                path: [t, "aplus_bcbridge.js"].join("/")
            }, {enable: !!o, path: ["aplus_cplugin", n, o].join("/")}, {
                enable: l(),
                path: [t, "aplus_webvt.js"].join("/")
            }, {enable: !0, path: [t, "aplus_client.js"].join("/")}, {
                enable: !0,
                path: ["aplus_cplugin", n, "toolkit.js"].join("/")
            }, {enable: !0, path: ["aplus_cplugin", n, "monitor.js"].join("/")}, {
                enable: b(),
                path: ["aplus_cplugin", n, "track_deb.js"].join("/")
            }, {enable: y(), path: ["aplus_plugin_lazada", "lazadalog.js"].join("/")}, {
                enable: S(e),
                path: [t, "aplus_ws.js"].join("/")
            }, {enable: u(e), path: [t, "aplus_ae.js"].join("/")}, {enable: s(e), path: [t, "aplus_ac.js"].join("/")}]
        }, n.getPlugins = function (e) {
            var t = "s/" + e.version + "/plugin";
            return [{enable: _(e), path: "aplus_plugin_guide/index.js"}, {
                enable: m(e),
                path: [t, "aplus_spmact.js"].join("/")
            }]
        }
    }, {"./util": 8, "@ali/grey-publish": 2}], 8: [function (e, t, n) {
        t.exports = e(1)
    }, {"@ali/grey-publish": 2}], 9: [function (e, t, n) {
        "use strict";
        var r = e("./plugins"), a = e("./util"), i = (document, a.getCurrentNode()), o = function (e) {
            var t = [];
            try {
                if (i) {
                    var n = i.getAttribute(e || t);
                    t = n.split(",")
                }
            } catch (r) {
                t = []
            } finally {
                return t
            }
        }, u = function (e) {
            var t = [];
            if (e) for (var n = 0; n < e.length; n++) {
                var r = e[n].enable, a = e[n].path;
                r === !0 ? t.push(a) : "function" == typeof r && r() && t.push(a)
            }
            return t
        };
        n.getPlugins = function (e) {
            var t = r.getPlugins(e);
            return [].concat(u(t), o("plugins"))
        }, n.getFrontPlugins = function (e) {
            var t = r.getFrontPlugins(e);
            return [].concat(u(t), o("frontPlugins"))
        }, n.getTrackerCfg = r.getTrackerCfg
    }, {"./plugins": 7, "./util": 8}]
}, {}, [5]);