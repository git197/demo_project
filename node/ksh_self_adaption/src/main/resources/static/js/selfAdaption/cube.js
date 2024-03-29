/*!
 * Cube v3.1.14-beta.3
 */
(function (a, b) {
    function c() {
    }

    function d(a, b) {
        if (1 === arguments.length) return j(a);
        var c = j(a);
        return l.css(c, b, a), a
    }

    function e(a) {
        return function (b, c, d) {
            2 === arguments.length && 'function' === typeof c ? (d = c, c = null, l.use(b, a, d)) : l.use(b, a,
                function (a) {
                    a = l.css(a, c, b), d && d(a)
                })
        }
    }

    function f(a) {
        var b = a.indexOf ? a.indexOf(s) : 0;
        return 0 < b ? q[a.substr(0, b)] + a.substr(b + 1) : ''
    }

    function g(a) {
        for (var b, c = a.length, d = 0; d < c; d++) b = a[d], -1 === b.indexOf(s) && (0 === b.indexOf('./') ? a[d] =
            b.substr(1) : '/' !== b[0] && (a[d] = '/' + b));
        return a
    }

    function h() {
        if (D.length) return !1;
        for (var a in A)
            if (A.hasOwnProperty(a)) return !1;
        return !0
    }

    function i(a, b) {
        return 'string' === typeof a && (a = [a]), C ? void (a.forEach(function (a) {
            if (!z[a]) {
                var c = o.createElement('script');
                c.type = 'text/javascript', c.async = 'true', c.charset = t, c.onerror = () => {
                    l(a, [], () => {
                        console.error(`load module: ${a} failed.`)
                    })
                };
                var d = f(a),
                    e = d || r + a,
                    g = [];
                m && g.push(m), v && (g.push('m'), g.push('ref=' + b)), c.src = g.length ? e + '?' + g.join(
                    '&') : e, B.appendChild(c), z[a] = {
                    exports: {},
                    loaded: !1,
                    fired: !1
                }, A[a] = !0
            }
        }), h() && k()) : void D.push([a, b])
    }

    function j(b) {
        function c() {
            var c = z[b];
            if (!c) throw new Error('Cube Error: Cannot find module \'' + b + '\'');
            return c.fired || (c.fired = !0, c.exports = c.fn.apply(a, [c, c.exports, d, e(b), x, y])), c.exports
        }

        if (u) return c();
        try {
            return c()
        } catch (a) {
            return p.error(a), {}
        }
    }

    function k() {
        var a, b;
        for (a in w) w.hasOwnProperty(a) && (b = a.split(','), b.forEach(function (b) {
            var c = 0;
            j(b), w[a].forEach(function (a) {
                var d = a(z[b].exports);
                d && c++
            }), w[a].length === c && delete w[a]
        }))
    }

    function l(a, b, c) {
        z[a] || (z[a] = {
            exports: {},
            loaded: !1,
            fired: !1
        });
        var d = z[a];
        d.fn = c, d.loaded = !0, delete A[a], i(b, a)
    }

    var m, n = window,
        o = document,
        p = console,
        r = '',
        q = {},
        s = ':',
        t = 'utf-8',
        u = !0,
        v = !0,
        w = {},
        x = {
            env: {
                NODE_ENV: 'production'
            }
        },
        y = void 0,
        z = {},
        A = {},
        B = o.querySelector('head'),
        C = !1,
        D = [];
    l.toString = function () {
        return 'Cube:v3.1.14-beta.3'
    }, l.init = function (a) {
        if (a.base && '/' !== a.base && (r = a.base.replace(/\/$/, '')), a.remoteBase)
            for (var b in a.remoteBase) a.remoteBase.hasOwnProperty(b) && (q[b] = a.remoteBase[b].replace(/\/$/,
                ''));
        for (a.charset && (t = a.charset), a.version && (m = a.version), void 0 !== a.debug && (v = a.debug),
             void 0 !== a.strict && (u = a.strict), a.env && (x.env.NODE_ENV = a.env), a.global && (y = a.global),
                 C = !0; D.length;) {
            var c = D.shift();
            i(c[0], c[1])
        }
        return this
    },


        l.use = function (b, d, e, f) {
            if (!b) throw new Error('Cube.use(moduleName) moduleName is undefined!');
            return 'function' === typeof d && (f = e, e = d, d = void 0), d || (d = 'Cube.use'), e = e || c,
            'string' === typeof b && (b = [b]), f || (b = g(b)), w[b] || (w[b] = []), w[b].push(
                function () {
                    var c = [],
                        d = b.length,
                        f = !1;
                    return function (b) {
                        if (!f) return (c.push(b), c.length === d) ? (f = !0, e.apply(a, c), !0) : void 0
                    }
                }()),


                i(b, d), this
        },


        l.register = function (a, b) {
            return z[a] ? p.error('Cube Error: Module \'' + a + '\' already registered') : (z[a] = {
                exports: b,
                fn: c,
                loaded: !0,
                fired: !0
            }, this)
        };
    var E = /([^};]+)(\{[^}]+\})/g,
        F = {};
    l.css = function (a, b, c) {
        if (a) {
            var d = c + '@' + b;
            if (!F[d]) {
                F[d] = !0, b && (a = a.replace(E, function (a, c, d) {
                    var e = c.split(',').map(function (a) {
                        return b + ' ' + a.trim()
                    });
                    return e.join(',') + d
                }));
                var e = o.createElement('style');
                return e.setAttribute('type', 'text/css'), e.setAttribute('mod', c), b && e.setAttribute('ns',
                    b), B.appendChild(e), e.innerHTML = a, a
            }
        }
    }, l.debug = function () {
        n.localStorage && n.addEventListener ? (localStorage.cube = 'debug', location.reload()) : p.error(
            'Cube Error: Cannot debug, your browser does not support localStorage or addEventListener')
    }, l.cache = function () {
        var a, b, c = {},
            d = {};
        for (a in z) z.hasOwnProperty(a) && (b = z[a], b.loaded || (c[a] = b), b.fired || (d[a] = b));
        p.info('modules:', z), p.info('unloaded:', c), p.info('unfired:', d)
    }, n.localStorage && 'debug' === localStorage.cube && (v = !0, n.addEventListener('load', l.cache)), b = b ||
        'Cube', a[b] ? p.error('Cube Error: window.' + b +
        ' already in using, replace the last "null" param in cube.js') : a[b] = l;
    var G = o.currentScript;
    if (G) {
        var H = G.dataset;
        H.base && (l.init(H), l.use(H.main || 'index.js', function (a) {
            a.run && a.run()
        }))
    }
})(window, null);