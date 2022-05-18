/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (C, e) {
  'use strict';
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = {type: !0, src: !0, nonce: !0, noModule: !0};
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement('script');
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? n[o.call(e)] || 'object'
      : typeof e;
  }
  var f = '3.6.0',
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || '[object Object]' !== o.call(e)) &&
          (!(t = r(e)) ||
            ('function' ==
              typeof (n = v.call(t, 'constructor') && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, {nonce: t && t.nonce}, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, 'string' == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = 'sizzle' + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        'checked|selected|async|autofocus|autoPlay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        M +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      W =
        '\\[' +
        M +
        '*(' +
        I +
        ')(?:' +
        M +
        '*([*^$|!~]?=)' +
        M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        I +
        '))|)' +
        M +
        '*\\]',
      F =
        ':(' +
        I +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        W +
        ')*)|.*)\\)|)',
      B = new RegExp(M + '+', 'g'),
      $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      _ = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp(M + '|>'),
      X = new RegExp(F),
      V = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + W),
        PSEUDO: new RegExp('^' + F),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        {dir: 'parentNode', next: 'legend'}
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + ' '] &&
          (!v || !v.test(t)) &&
          (1 !== p || 'object' !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute('id'))
                ? (s = s.replace(re, ie))
                : e.setAttribute('id', (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o]);
            c = l.join(',');
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute('id');
          }
        }
      }
      return g(t.replace($, '$1'), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split('|'),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || 'HTML');
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener('unload', oe, !1)
                : n.attachEvent && n.attachEvent('onunload', oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement('div')),
                'undefined' != typeof e.querySelectorAll &&
                  !e.querySelectorAll(':scope fieldset div').length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment('')),
                !e.getElementsByTagName('*').length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      'undefined' != typeof e.getAttributeNode &&
                      e.getAttributeNode('id');
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    v.push('\\[' + M + '*(?:value|' + R + ')'),
                  e.querySelectorAll('[id~=' + S + '-]').length || v.push('~='),
                  (t = C.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || v.push(':checked'),
                  e.querySelectorAll('a#' + S + '+*').length ||
                    v.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  v.push('[\\r\\n\\f]');
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    v.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    v.push(':enabled', ':disabled'),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    v.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  v.push(',.*:');
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, '*')),
                  c.call(e, "[s!='']:x"),
                  s.push('!=', F);
              }),
            (v = v.length && new RegExp(v.join('|'))),
            (s = s.length && new RegExp(s.join('|'))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + ' '] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          '>': {dir: 'parentNode', first: !0},
          ' ': {dir: 'parentNode'},
          '+': {dir: 'previousSibling', first: !0},
          '~': {dir: 'previousSibling'},
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                m(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute &&
                        e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                      ? t !== i
                      : '^=' === r
                      ? i && 0 === t.indexOf(i)
                      : '*=' === r
                      ? i && -1 < t.indexOf(i)
                      : '$=' === r
                      ? i && t.slice(-i.length) === i
                      : '~=' === r
                      ? -1 < (' ' + t.replace(B, ' ') + ' ').indexOf(i)
                      : '|=' === r &&
                        (t === i || t.slice(0, i.length + 1) === i + '-'));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = 'nth' !== h.slice(0, 3),
              m = 'last' !== h.slice(-4),
              x = 'of-type' === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = 'only' === h && !u && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error('unsupported pseudo: ' + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, '$1'));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || '') || se.error('unsupported lang: ' + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}))
      b.pseudos[e] = de(e);
    for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && 'parentNode' === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || '*', n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({value: ' ' === e[s - 2].type ? '*' : ''})
                ).replace($, '$1'),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + ' '];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({value: n, type: r[0].replace($, ' ')}),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({value: n, type: o, matches: r}),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + ' '];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              'ID' === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split('').sort(j).join('') === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[':'] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : 'string' != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), 'string' == typeof e)) {
      if (
        !(r =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = {children: !0, contents: !0, next: !0, prev: !0};
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return h(e, 'parentNode', n);
        },
        next: function (e) {
          return O(e, 'nextSibling');
        },
        prev: function (e) {
          return O(e, 'previousSibling');
        },
        nextAll: function (e) {
          return h(e, 'nextSibling');
        },
        prevAll: function (e) {
          return h(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return h(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return h(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && 'string' !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              S.Callbacks('memory'),
              S.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + 'With'](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError('Thenable self-resolution');
                        (t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          'pending' === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener('DOMContentLoaded', B),
      C.removeEventListener('load', B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)['catch'](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    'complete' === E.readyState ||
    ('loading' !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener('DOMContentLoaded', B),
        C.addEventListener('load', B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, 'ms-').replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf('data-') &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        while (a--)
          (n = Y.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = {composed: !0};
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ('px' !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((l[c] = Y.get(r, 'display') || null),
              l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === u && (u = 'block'),
                  (ue[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), Y.set(r, 'display', n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
    (fe = E.createElement('input')).setAttribute('type', 'radio'),
    fe.setAttribute('checked', 'checked'),
    fe.setAttribute('name', 't'),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = '<textarea>x</textarea>'),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = '<option></option>'),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement('div'))),
            (s = (de.exec(o) || ['', ''])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    (f.textContent = ''), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || '') && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return 'undefined' != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || '').match(P) || ['']).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || '').match(P) || ['']).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({elem: l, handlers: o});
          }
      return (
        (l = this), u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {noBubble: !0},
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click', we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, 'input') &&
              Y.get(t, 'click')) ||
            A(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
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
        code: !0,
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
        which: !0,
      },
      S.event.addProp
    ),
    S.each({focus: 'focusin', blur: 'focusout'}, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, 'table') &&
        A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        S(e).children('tbody')[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function qe(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, 'handle events'), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && 'string' == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, 'script'), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, 'script'))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || '') &&
              !Y.access(u, 'globalEval') &&
              S.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    {nonce: u.nonce || u.getAttribute('nonce')},
                    l
                  )
                : b(u.textContent.replace(Ne, ''), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join('|'), 'i');
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement('div'),
      l = E.createElement('div');
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement('table')),
              (t = E.createElement('tr')),
              (n = E.createElement('div')),
              (e.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ['Webkit', 'Moz', 'ms'],
    $e = E.createElement('div').style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = {position: 'absolute', visibility: 'hidden', display: 'block'},
    Ge = {letterSpacing: '0', fontWeight: '400'};
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)),
            'margin' !== n &&
              (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += S.css(e, 'padding' + ne[a], !0, i)),
            'padding' !== n
              ? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i))
              : (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        'border-box' === S.css(e, 'boxSizing', !1, r),
      o = i,
      a = We(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        'normal' === i && t in Ge && (i = Ge[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(['height', 'width'], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, 'border', !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Me(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    S.each({margin: '', padding: '', border: 'Width'}, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        'margin' !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = {height: e};
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = ne[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, {specialEasing: {}, easing: S.easing._default}, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, {elem: o, anim: l, queue: l.opts.queue})),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, 'display')),
            'none' === (c = S.css(e, 'display')) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, 'display')),
                  le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === S.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? 'hidden' in v && (g = v.hidden)
                : (v = Y.access(e, 'fxshow', {display: l})),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, 'fxshow'), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({opacity: t}, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, 'finish')) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st('show'),
        slideUp: st('hide'),
        slideToggle: st('toggle'),
        fadeIn: {opacity: 'show'},
        fadeOut: {opacity: 'hide'},
        fadeToggle: {opacity: 'toggle'},
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = {slow: 600, fast: 200, _default: 400}),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement('input')),
    (nt = E.createElement('select').appendChild(E.createElement('option'))),
    (tt.type = 'checkbox'),
    (y.checkOn = '' !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement('input')).value = 't'),
    (tt.type = 'radio'),
    (y.radioValue = 't' === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(' ');
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function vt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {for: 'htmlFor', class: 'className'},
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
              i !== (s = ht(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(' ' + o + ' '))
                  r = r.replace(' ' + o + ' ', ' ');
              i !== (s = ht(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = 'string' === o || Array.isArray(i);
        return 'boolean' == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && 'boolean' !== o) || ((e = gt(this)) && Y.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Y.get(this, '__className__') || ''));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = ' ' + e + ' ';
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (' ' + ht(gt(n)) + ' ').indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in r &&
          void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(yt, '')
          : null == e
          ? ''
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, 'value');
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(['radio', 'checkbox'], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (y.focusin = 'onfocusin' in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, 'type') ? e.type : e,
        h = v.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, 'events') || Object.create(null))[e.type] &&
              Y.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, {type: e, isSimulated: !0});
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({focus: 'focusin', blur: 'focusout'}, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = {guid: Date.now()},
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        S.error(
          'Invalid XML: ' +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join('\n')
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              r,
              i
            );
      });
    else if (r || 'object' !== w(e)) i(n, e);
    else for (t in e) At(n + '[' + t + ']', e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join('&');
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, 'elements');
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(':disabled') &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return {name: t.name, value: e.replace(Et, '\r\n')};
                })
              : {name: t.name, value: n.replace(Et, '\r\n')};
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = '*/'.concat('*'),
    Mt = E.createElement('a');
  function It(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return 'string' != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Rt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': S.parseXML,
        },
        flatOptions: {url: !0, context: !0},
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks('once memory'),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + '').replace(
            Ht,
            bt.protocol + '//'
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(P) || ['']),
          null == v.crossDomain)
        ) {
          r = E.createElement('a');
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + '//' + Mt.host != r.protocol + '//' + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            'string' != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger('ajaxStart'),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, '')),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (v.data = v.data.replace(Nt, '+'))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || 'string' == typeof v.data) &&
              ((f += (Tt.test(f) ? '&' : '?') + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, '$1')),
              (o = (Tt.test(f) ? '&' : '?') + '_=' + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader('If-Modified-Since', S.lastModified[f]),
          S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader('Content-Type', v.contentType),
        T.setRequestHeader(
          'Accept',
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ('*' !== v.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '')
            : v.accepts['*']
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = 'abort'),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort('timeout');
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, 'No Transport');
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ('*' === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray('script', v.dataTypes) &&
              S.inArray('json', v.dataTypes) < 0 &&
              (v.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return {state: 'success', data: t};
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) && (S.etag[f] = u)),
                204 === e || 'HEAD' === v.type
                  ? (l = 'nocontent')
                  : 304 === e
                  ? (l = 'notmodified')
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger('ajaxComplete', [T, v]),
              --S.active || S.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, 'script');
      },
    }),
    S.each(['get', 'post'], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              {url: e, type: i, dataType: r, data: t, success: n},
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: {'text script': function () {}},
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = {0: 200, 1223: 204},
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && 'withCredentials' in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') ||
                          'string' != typeof r.responseText
                          ? {binary: r.response}
                          : {text: r.responseText},
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: {script: /\b(?:java|ecma)script\b/},
      converters: {
        'text script': function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    S.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S('<script>')
              .attr(n.scriptAttrs || {})
              .prop({charset: n.scriptCharset, src: n.url})
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + '_' + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Ut.test(e.data) &&
              'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || S.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          'script'
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          S.ajax({url: e, type: i || 'GET', dataType: 'html', data: t})
            .done(function (e) {
              (o = arguments),
                a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, 'position'),
          c = S(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = S.css(e, 'top')),
          (u = S.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              {top: e.top + n.pageYOffset, left: e.left + n.pageXOffset})
            : {top: 0, left: 0}
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = {top: 0, left: 0};
          if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === S.css(e, 'position')
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)),
              (i.left += S.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - S.css(r, 'marginTop', !0),
            left: t.left - i.left - S.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && 'static' === S.css(e, 'position')) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      {scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'},
      function (t, i) {
        var o = 'pageYOffset' === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(['top', 'left'], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + 'px' : t;
      });
    }),
    S.each({Height: 'height', Width: 'width'}, function (a, s) {
      S.each(
        {padding: 'inner' + a, content: s, '': 'outer' + a},
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border');
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + a]
                    : e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body['scroll' + a],
                      r['scroll' + a],
                      e.body['offset' + a],
                      r['offset' + a],
                      r['client' + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? '' : (e + '').replace(Xt, '');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    'undefined' == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/**
 * @popperjs/core v2.9.2 - MIT License
 */

('use strict');
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        ((e =
          'undefined' != typeof globalThis ? globalThis : e || self).Popper =
          {})
      );
})(this, function (e) {
  function t(e) {
    return {
      width: (e = e.getBoundingClientRect()).width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top,
    };
  }
  function n(e) {
    return null == e
      ? window
      : '[object Window]' !== e.toString()
      ? ((e = e.ownerDocument) && e.defaultView) || window
      : e;
  }
  function o(e) {
    return {scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset};
  }
  function r(e) {
    return e instanceof n(e).Element || e instanceof Element;
  }
  function i(e) {
    return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
  }
  function a(e) {
    return (
      'undefined' != typeof ShadowRoot &&
      (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  function s(e) {
    return e ? (e.nodeName || '').toLowerCase() : null;
  }
  function f(e) {
    return (
      (r(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function p(e) {
    return t(f(e)).left + o(e).scrollLeft;
  }
  function c(e) {
    return n(e).getComputedStyle(e);
  }
  function l(e) {
    return (
      (e = c(e)),
      /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    );
  }
  function u(e, r, a) {
    void 0 === a && (a = !1);
    var c = f(r);
    e = t(e);
    var u = i(r),
      d = {scrollLeft: 0, scrollTop: 0},
      m = {x: 0, y: 0};
    return (
      (u || (!u && !a)) &&
        (('body' !== s(r) || l(c)) &&
          (d =
            r !== n(r) && i(r)
              ? {scrollLeft: r.scrollLeft, scrollTop: r.scrollTop}
              : o(r)),
        i(r)
          ? (((m = t(r)).x += r.clientLeft), (m.y += r.clientTop))
          : c && (m.x = p(c))),
      {
        x: e.left + d.scrollLeft - m.x,
        y: e.top + d.scrollTop - m.y,
        width: e.width,
        height: e.height,
      }
    );
  }
  function d(e) {
    var n = t(e),
      o = e.offsetWidth,
      r = e.offsetHeight;
    return (
      1 >= Math.abs(n.width - o) && (o = n.width),
      1 >= Math.abs(n.height - r) && (r = n.height),
      {x: e.offsetLeft, y: e.offsetTop, width: o, height: r}
    );
  }
  function m(e) {
    return 'html' === s(e)
      ? e
      : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e);
  }
  function h(e) {
    return 0 <= ['html', 'body', '#document'].indexOf(s(e))
      ? e.ownerDocument.body
      : i(e) && l(e)
      ? e
      : h(m(e));
  }
  function v(e, t) {
    var o;
    void 0 === t && (t = []);
    var r = h(e);
    return (
      (e = r === (null == (o = e.ownerDocument) ? void 0 : o.body)),
      (o = n(r)),
      (r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r),
      (t = t.concat(r)),
      e ? t : t.concat(v(m(r)))
    );
  }
  function g(e) {
    return i(e) && 'fixed' !== c(e).position ? e.offsetParent : null;
  }
  function y(e) {
    for (
      var t = n(e), o = g(e);
      o &&
      0 <= ['table', 'td', 'th'].indexOf(s(o)) &&
      'static' === c(o).position;

    )
      o = g(o);
    if (
      o &&
      ('html' === s(o) || ('body' === s(o) && 'static' === c(o).position))
    )
      return t;
    if (!o)
      e: {
        if (
          ((o = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox')),
          -1 === navigator.userAgent.indexOf('Trident') ||
            !i(e) ||
            'fixed' !== c(e).position)
        )
          for (e = m(e); i(e) && 0 > ['html', 'body'].indexOf(s(e)); ) {
            var r = c(e);
            if (
              'none' !== r.transform ||
              'none' !== r.perspective ||
              'paint' === r.contain ||
              -1 !== ['transform', 'perspective'].indexOf(r.willChange) ||
              (o && 'filter' === r.willChange) ||
              (o && r.filter && 'none' !== r.filter)
            ) {
              o = e;
              break e;
            }
            e = e.parentNode;
          }
        o = null;
      }
    return o || t;
  }
  function b(e) {
    function t(e) {
      o.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            o.has(e) || ((e = n.get(e)) && t(e));
          }),
        r.push(e);
    }
    var n = new Map(),
      o = new Set(),
      r = [];
    return (
      e.forEach(function (e) {
        n.set(e.name, e);
      }),
      e.forEach(function (e) {
        o.has(e.name) || t(e);
      }),
      r
    );
  }
  function w(e) {
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
  function x(e) {
    return e.split('-')[0];
  }
  function O(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && a(n))
      do {
        if (t && e.isSameNode(t)) return !0;
        t = t.parentNode || t.host;
      } while (t);
    return !1;
  }
  function j(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function E(e, r) {
    if ('viewport' === r) {
      r = n(e);
      var a = f(e);
      r = r.visualViewport;
      var s = a.clientWidth;
      a = a.clientHeight;
      var l = 0,
        u = 0;
      r &&
        ((s = r.width),
        (a = r.height),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
          ((l = r.offsetLeft), (u = r.offsetTop))),
        (e = j((e = {width: s, height: a, x: l + p(e), y: u})));
    } else i(r) ? (((e = t(r)).top += r.clientTop), (e.left += r.clientLeft), (e.bottom = e.top + r.clientHeight), (e.right = e.left + r.clientWidth), (e.width = r.clientWidth), (e.height = r.clientHeight), (e.x = e.left), (e.y = e.top)) : ((u = f(e)), (e = f(u)), (s = o(u)), (r = null == (a = u.ownerDocument) ? void 0 : a.body), (a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0)), (l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0)), (u = -s.scrollLeft + p(u)), (s = -s.scrollTop), 'rtl' === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), (e = j({width: a, height: l, x: u, y: s})));
    return e;
  }
  function D(e, t, n) {
    return (
      (t =
        'clippingParents' === t
          ? (function (e) {
              var t = v(m(e)),
                n =
                  0 <= ['absolute', 'fixed'].indexOf(c(e).position) && i(e)
                    ? y(e)
                    : e;
              return r(n)
                ? t.filter(function (e) {
                    return r(e) && O(e, n) && 'body' !== s(e);
                  })
                : [];
            })(e)
          : [].concat(t)),
      ((n = (n = [].concat(t, [n])).reduce(function (t, n) {
        return (
          (n = E(e, n)),
          (t.top = _(n.top, t.top)),
          (t.right = U(n.right, t.right)),
          (t.bottom = U(n.bottom, t.bottom)),
          (t.left = _(n.left, t.left)),
          t
        );
      }, E(e, n[0]))).width = n.right - n.left),
      (n.height = n.bottom - n.top),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function L(e) {
    return 0 <= ['top', 'bottom'].indexOf(e) ? 'x' : 'y';
  }
  function P(e) {
    var t = e.reference,
      n = e.element,
      o = (e = e.placement) ? x(e) : null;
    e = e ? e.split('-')[1] : null;
    var r = t.x + t.width / 2 - n.width / 2,
      i = t.y + t.height / 2 - n.height / 2;
    switch (o) {
      case 'top':
        r = {x: r, y: t.y - n.height};
        break;
      case 'bottom':
        r = {x: r, y: t.y + t.height};
        break;
      case 'right':
        r = {x: t.x + t.width, y: i};
        break;
      case 'left':
        r = {x: t.x - n.width, y: i};
        break;
      default:
        r = {x: t.x, y: t.y};
    }
    if (null != (o = o ? L(o) : null))
      switch (((i = 'y' === o ? 'height' : 'width'), e)) {
        case 'start':
          r[o] -= t[i] / 2 - n[i] / 2;
          break;
        case 'end':
          r[o] += t[i] / 2 - n[i] / 2;
      }
    return r;
  }
  function M(e) {
    return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, e);
  }
  function k(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function A(e, n) {
    void 0 === n && (n = {});
    var o = n;
    n = void 0 === (n = o.placement) ? e.placement : n;
    var i = o.boundary,
      a = void 0 === i ? 'clippingParents' : i,
      s = void 0 === (i = o.rootBoundary) ? 'viewport' : i;
    i = void 0 === (i = o.elementContext) ? 'popper' : i;
    var p = o.altBoundary,
      c = void 0 !== p && p;
    o = M(
      'number' != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C)
    );
    var l = e.elements.reference;
    (p = e.rects.popper),
      (a = D(
        r((c = e.elements[c ? ('popper' === i ? 'reference' : 'popper') : i]))
          ? c
          : c.contextElement || f(e.elements.popper),
        a,
        s
      )),
      (c = P({
        reference: (s = t(l)),
        element: p,
        strategy: 'absolute',
        placement: n,
      })),
      (p = j(Object.assign({}, p, c))),
      (s = 'popper' === i ? p : s);
    var u = {
      top: a.top - s.top + o.top,
      bottom: s.bottom - a.bottom + o.bottom,
      left: a.left - s.left + o.left,
      right: s.right - a.right + o.right,
    };
    if (((e = e.modifiersData.offset), 'popper' === i && e)) {
      var d = e[n];
      Object.keys(u).forEach(function (e) {
        var t = 0 <= ['right', 'bottom'].indexOf(e) ? 1 : -1,
          n = 0 <= ['top', 'bottom'].indexOf(e) ? 'y' : 'x';
        u[e] += d[n] * t;
      });
    }
    return u;
  }
  function W() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && 'function' == typeof e.getBoundingClientRect);
    });
  }
  function B(e) {
    void 0 === e && (e = {});
    var t = e.defaultModifiers,
      n = void 0 === t ? [] : t,
      o = void 0 === (e = e.defaultOptions) ? F : e;
    return function (e, t, i) {
      function a() {
        f.forEach(function (e) {
          return e();
        }),
          (f = []);
      }
      void 0 === i && (i = o);
      var s = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, F, o),
          modifiersData: {},
          elements: {reference: e, popper: t},
          attributes: {},
          styles: {},
        },
        f = [],
        p = !1,
        c = {
          state: s,
          setOptions: function (i) {
            return (
              a(),
              (s.options = Object.assign({}, o, s.options, i)),
              (s.scrollParents = {
                reference: r(e)
                  ? v(e)
                  : e.contextElement
                  ? v(e.contextElement)
                  : [],
                popper: v(t),
              }),
              (i = (function (e) {
                var t = b(e);
                return I.reduce(function (e, n) {
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
                })([].concat(n, s.options.modifiers))
              )),
              (s.orderedModifiers = i.filter(function (e) {
                return e.enabled;
              })),
              s.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options;
                (n = void 0 === n ? {} : n),
                  'function' == typeof (e = e.effect) &&
                    ((t = e({state: s, name: t, instance: c, options: n})),
                    f.push(t || function () {}));
              }),
              c.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var e = s.elements,
                t = e.reference;
              if (W(t, (e = e.popper)))
                for (
                  s.rects = {
                    reference: u(t, y(e), 'fixed' === s.options.strategy),
                    popper: d(e),
                  },
                    s.reset = !1,
                    s.placement = s.options.placement,
                    s.orderedModifiers.forEach(function (e) {
                      return (s.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    }),
                    t = 0;
                  t < s.orderedModifiers.length;
                  t++
                )
                  if (!0 === s.reset) (s.reset = !1), (t = -1);
                  else {
                    var n = s.orderedModifiers[t];
                    e = n.fn;
                    var o = n.options;
                    (o = void 0 === o ? {} : o),
                      (n = n.name),
                      'function' == typeof e &&
                        (s =
                          e({state: s, options: o, name: n, instance: c}) || s);
                  }
            }
          },
          update: w(function () {
            return new Promise(function (e) {
              c.forceUpdate(), e(s);
            });
          }),
          destroy: function () {
            a(), (p = !0);
          },
        };
      return W(e, t)
        ? (c.setOptions(i).then(function (e) {
            !p && i.onFirstUpdate && i.onFirstUpdate(e);
          }),
          c)
        : c;
    };
  }
  function T(e) {
    var t,
      o = e.popper,
      r = e.popperRect,
      i = e.placement,
      a = e.offsets,
      s = e.position,
      p = e.gpuAcceleration,
      l = e.adaptive;
    if (!0 === (e = e.roundOffsets)) {
      e = a.y;
      var u = window.devicePixelRatio || 1;
      e = {x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0};
    } else e = 'function' == typeof e ? e(a) : a;
    (e = void 0 === (e = (u = e).x) ? 0 : e),
      (u = void 0 === (u = u.y) ? 0 : u);
    var d = a.hasOwnProperty('x');
    a = a.hasOwnProperty('y');
    var m,
      h = 'left',
      v = 'top',
      g = window;
    if (l) {
      var b = y(o),
        w = 'clientHeight',
        x = 'clientWidth';
      b === n(o) &&
        'static' !== c((b = f(o))).position &&
        ((w = 'scrollHeight'), (x = 'scrollWidth')),
        'top' === i &&
          ((v = 'bottom'), (u -= b[w] - r.height), (u *= p ? 1 : -1)),
        'left' === i &&
          ((h = 'right'), (e -= b[x] - r.width), (e *= p ? 1 : -1));
    }
    return (
      (o = Object.assign({position: s}, l && J)),
      p
        ? Object.assign(
            {},
            o,
            (((m = {})[v] = a ? '0' : ''),
            (m[h] = d ? '0' : ''),
            (m.transform =
              2 > (g.devicePixelRatio || 1)
                ? 'translate(' + e + 'px, ' + u + 'px)'
                : 'translate3d(' + e + 'px, ' + u + 'px, 0)'),
            m)
          )
        : Object.assign(
            {},
            o,
            (((t = {})[v] = a ? u + 'px' : ''),
            (t[h] = d ? e + 'px' : ''),
            (t.transform = ''),
            t)
          )
    );
  }
  function H(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return $[e];
    });
  }
  function R(e) {
    return e.replace(/start|end/g, function (e) {
      return ee[e];
    });
  }
  function S(e, t, n) {
    return (
      void 0 === n && (n = {x: 0, y: 0}),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function q(e) {
    return ['top', 'right', 'bottom', 'left'].some(function (t) {
      return 0 <= e[t];
    });
  }
  var C = ['top', 'bottom', 'right', 'left'],
    N = C.reduce(function (e, t) {
      return e.concat([t + '-start', t + '-end']);
    }, []),
    V = [].concat(C, ['auto']).reduce(function (e, t) {
      return e.concat([t, t + '-start', t + '-end']);
    }, []),
    I =
      'beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite'.split(
        ' '
      ),
    _ = Math.max,
    U = Math.min,
    z = Math.round,
    F = {placement: 'bottom', modifiers: [], strategy: 'absolute'},
    X = {passive: !0},
    Y = {
      name: 'eventListeners',
      enabled: !0,
      phase: 'write',
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          o = e.instance,
          r = (e = e.options).scroll,
          i = void 0 === r || r,
          a = void 0 === (e = e.resize) || e,
          s = n(t.elements.popper),
          f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          i &&
            f.forEach(function (e) {
              e.addEventListener('scroll', o.update, X);
            }),
          a && s.addEventListener('resize', o.update, X),
          function () {
            i &&
              f.forEach(function (e) {
                e.removeEventListener('scroll', o.update, X);
              }),
              a && s.removeEventListener('resize', o.update, X);
          }
        );
      },
      data: {},
    },
    G = {
      name: 'popperOffsets',
      enabled: !0,
      phase: 'read',
      fn: function (e) {
        var t = e.state;
        t.modifiersData[e.name] = P({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: 'absolute',
          placement: t.placement,
        });
      },
      data: {},
    },
    J = {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'},
    K = {
      name: 'computeStyles',
      enabled: !0,
      phase: 'beforeWrite',
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = void 0 === (e = n.gpuAcceleration) || e;
        var o = n.adaptive;
        (o = void 0 === o || o),
          (n = void 0 === (n = n.roundOffsets) || n),
          (e = {
            placement: x(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: e,
          }),
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              T(
                Object.assign({}, e, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: o,
                  roundOffsets: n,
                })
              )
            )),
          null != t.modifiersData.arrow &&
            (t.styles.arrow = Object.assign(
              {},
              t.styles.arrow,
              T(
                Object.assign({}, e, {
                  offsets: t.modifiersData.arrow,
                  position: 'absolute',
                  adaptive: !1,
                  roundOffsets: n,
                })
              )
            )),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            'data-popper-placement': t.placement,
          }));
      },
      data: {},
    },
    Q = {
      name: 'applyStyles',
      enabled: !0,
      phase: 'write',
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var n = t.styles[e] || {},
            o = t.attributes[e] || {},
            r = t.elements[e];
          i(r) &&
            s(r) &&
            (Object.assign(r.style, n),
            Object.keys(o).forEach(function (e) {
              var t = o[e];
              !1 === t
                ? r.removeAttribute(e)
                : r.setAttribute(e, !0 === t ? '' : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: '0',
              top: '0',
              margin: '0',
            },
            arrow: {position: 'absolute'},
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var o = t.elements[e],
                r = t.attributes[e] || {};
              (e = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ''), e;
              }, {})),
                i(o) &&
                  s(o) &&
                  (Object.assign(o.style, e),
                  Object.keys(r).forEach(function (e) {
                    o.removeAttribute(e);
                  }));
            });
          }
        );
      },
      requires: ['computeStyles'],
    },
    Z = {
      name: 'offset',
      enabled: !0,
      phase: 'main',
      requires: ['popperOffsets'],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          o = void 0 === (e = e.options.offset) ? [0, 0] : e,
          r = (e = V.reduce(function (e, n) {
            var r = t.rects,
              i = x(n),
              a = 0 <= ['left', 'top'].indexOf(i) ? -1 : 1,
              s =
                'function' == typeof o
                  ? o(Object.assign({}, r, {placement: n}))
                  : o;
            return (
              (r = (r = s[0]) || 0),
              (s = ((s = s[1]) || 0) * a),
              (i =
                0 <= ['left', 'right'].indexOf(i)
                  ? {x: s, y: r}
                  : {x: r, y: s}),
              (e[n] = i),
              e
            );
          }, {}))[t.placement],
          i = r.x;
        (r = r.y),
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += i),
            (t.modifiersData.popperOffsets.y += r)),
          (t.modifiersData[n] = e);
      },
    },
    $ = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'},
    ee = {start: 'end', end: 'start'},
    te = {
      name: 'flip',
      enabled: !0,
      phase: 'main',
      fn: function (e) {
        var t = e.state,
          n = e.options;
        if (((e = e.name), !t.modifiersData[e]._skip)) {
          var o = n.mainAxis;
          o = void 0 === o || o;
          var r = n.altAxis;
          r = void 0 === r || r;
          var i = n.fallbackPlacements,
            a = n.padding,
            s = n.boundary,
            f = n.rootBoundary,
            p = n.altBoundary,
            c = n.flipVariations,
            l = void 0 === c || c,
            u = n.allowedAutoPlacements;
          (c = x((n = t.options.placement))),
            (i =
              i ||
              (c !== n && l
                ? (function (e) {
                    if ('auto' === x(e)) return [];
                    var t = H(e);
                    return [R(e), t, R(t)];
                  })(n)
                : [H(n)]));
          var d = [n].concat(i).reduce(function (e, n) {
            return e.concat(
              'auto' === x(n)
                ? (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t.boundary,
                      o = t.rootBoundary,
                      r = t.padding,
                      i = t.flipVariations,
                      a = t.allowedAutoPlacements,
                      s = void 0 === a ? V : a,
                      f = t.placement.split('-')[1];
                    0 ===
                      (i = (t = f
                        ? i
                          ? N
                          : N.filter(function (e) {
                              return e.split('-')[1] === f;
                            })
                        : C).filter(function (e) {
                        return 0 <= s.indexOf(e);
                      })).length && (i = t);
                    var p = i.reduce(function (t, i) {
                      return (
                        (t[i] = A(e, {
                          placement: i,
                          boundary: n,
                          rootBoundary: o,
                          padding: r,
                        })[x(i)]),
                        t
                      );
                    }, {});
                    return Object.keys(p).sort(function (e, t) {
                      return p[e] - p[t];
                    });
                  })(t, {
                    placement: n,
                    boundary: s,
                    rootBoundary: f,
                    padding: a,
                    flipVariations: l,
                    allowedAutoPlacements: u,
                  })
                : n
            );
          }, []);
          (n = t.rects.reference), (i = t.rects.popper);
          var m = new Map();
          c = !0;
          for (var h = d[0], v = 0; v < d.length; v++) {
            var g = d[v],
              y = x(g),
              b = 'start' === g.split('-')[1],
              w = 0 <= ['top', 'bottom'].indexOf(y),
              O = w ? 'width' : 'height',
              j = A(t, {
                placement: g,
                boundary: s,
                rootBoundary: f,
                altBoundary: p,
                padding: a,
              });
            if (
              ((b = w ? (b ? 'right' : 'left') : b ? 'bottom' : 'top'),
              n[O] > i[O] && (b = H(b)),
              (O = H(b)),
              (w = []),
              o && w.push(0 >= j[y]),
              r && w.push(0 >= j[b], 0 >= j[O]),
              w.every(function (e) {
                return e;
              }))
            ) {
              (h = g), (c = !1);
              break;
            }
            m.set(g, w);
          }
          if (c)
            for (
              o = function (e) {
                var t = d.find(function (t) {
                  if ((t = m.get(t)))
                    return t.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (h = t), 'break';
              },
                r = l ? 3 : 1;
              0 < r && 'break' !== o(r);
              r--
            );
          t.placement !== h &&
            ((t.modifiersData[e]._skip = !0),
            (t.placement = h),
            (t.reset = !0));
        }
      },
      requiresIfExists: ['offset'],
      data: {_skip: !1},
    },
    ne = {
      name: 'preventOverflow',
      enabled: !0,
      phase: 'main',
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = e.name;
        var o = n.mainAxis,
          r = void 0 === o || o,
          i = void 0 !== (o = n.altAxis) && o;
        o = void 0 === (o = n.tether) || o;
        var a = n.tetherOffset,
          s = void 0 === a ? 0 : a,
          f = A(t, {
            boundary: n.boundary,
            rootBoundary: n.rootBoundary,
            padding: n.padding,
            altBoundary: n.altBoundary,
          });
        n = x(t.placement);
        var p = t.placement.split('-')[1],
          c = !p,
          l = L(n);
        (n = 'x' === l ? 'y' : 'x'), (a = t.modifiersData.popperOffsets);
        var u = t.rects.reference,
          m = t.rects.popper,
          h =
            'function' == typeof s
              ? s(Object.assign({}, t.rects, {placement: t.placement}))
              : s;
        if (((s = {x: 0, y: 0}), a)) {
          if (r || i) {
            var v = 'y' === l ? 'top' : 'left',
              g = 'y' === l ? 'bottom' : 'right',
              b = 'y' === l ? 'height' : 'width',
              w = a[l],
              O = a[l] + f[v],
              j = a[l] - f[g],
              E = o ? -m[b] / 2 : 0,
              D = 'start' === p ? u[b] : m[b];
            (p = 'start' === p ? -m[b] : -u[b]),
              (m = t.elements.arrow),
              (m = o && m ? d(m) : {width: 0, height: 0});
            var P = t.modifiersData['arrow#persistent']
              ? t.modifiersData['arrow#persistent'].padding
              : {top: 0, right: 0, bottom: 0, left: 0};
            (v = P[v]),
              (g = P[g]),
              (m = _(0, U(u[b], m[b]))),
              (D = c ? u[b] / 2 - E - m - v - h : D - m - v - h),
              (u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h),
              (c = t.elements.arrow && y(t.elements.arrow)),
              (h = t.modifiersData.offset
                ? t.modifiersData.offset[t.placement][l]
                : 0),
              (c =
                a[l] +
                D -
                h -
                (c ? ('y' === l ? c.clientTop || 0 : c.clientLeft || 0) : 0)),
              (u = a[l] + u - h),
              r &&
                ((r = o ? U(O, c) : O),
                (j = o ? _(j, u) : j),
                (r = _(r, U(w, j))),
                (a[l] = r),
                (s[l] = r - w)),
              i &&
                ((r = (i = a[n]) + f['x' === l ? 'top' : 'left']),
                (f = i - f['x' === l ? 'bottom' : 'right']),
                (r = o ? U(r, c) : r),
                (o = o ? _(f, u) : f),
                (o = _(r, U(i, o))),
                (a[n] = o),
                (s[n] = o - i));
          }
          t.modifiersData[e] = s;
        }
      },
      requiresIfExists: ['offset'],
    },
    oe = {
      name: 'arrow',
      enabled: !0,
      phase: 'main',
      fn: function (e) {
        var t,
          n = e.state,
          o = e.name,
          r = e.options,
          i = n.elements.arrow,
          a = n.modifiersData.popperOffsets,
          s = x(n.placement);
        if (
          ((e = L(s)),
          (s = 0 <= ['left', 'right'].indexOf(s) ? 'height' : 'width'),
          i && a)
        ) {
          r = M(
            'number' !=
              typeof (r =
                'function' == typeof (r = r.padding)
                  ? r(Object.assign({}, n.rects, {placement: n.placement}))
                  : r)
              ? r
              : k(r, C)
          );
          var f = d(i),
            p = 'y' === e ? 'top' : 'left',
            c = 'y' === e ? 'bottom' : 'right',
            l =
              n.rects.reference[s] +
              n.rects.reference[e] -
              a[e] -
              n.rects.popper[s];
          (a = a[e] - n.rects.reference[e]),
            (a =
              (i = (i = y(i))
                ? 'y' === e
                  ? i.clientHeight || 0
                  : i.clientWidth || 0
                : 0) /
                2 -
              f[s] / 2 +
              (l / 2 - a / 2)),
            (s = _(r[p], U(a, i - f[s] - r[c]))),
            (n.modifiersData[o] =
              (((t = {})[e] = s), (t.centerOffset = s - a), t));
        }
      },
      effect: function (e) {
        var t = e.state;
        if (
          null !=
          (e = void 0 === (e = e.options.element) ? '[data-popper-arrow]' : e)
        ) {
          if ('string' == typeof e && !(e = t.elements.popper.querySelector(e)))
            return;
          O(t.elements.popper, e) && (t.elements.arrow = e);
        }
      },
      requires: ['popperOffsets'],
      requiresIfExists: ['preventOverflow'],
    },
    re = {
      name: 'hide',
      enabled: !0,
      phase: 'main',
      requiresIfExists: ['preventOverflow'],
      fn: function (e) {
        var t = e.state;
        e = e.name;
        var n = t.rects.reference,
          o = t.rects.popper,
          r = t.modifiersData.preventOverflow,
          i = A(t, {elementContext: 'reference'}),
          a = A(t, {altBoundary: !0});
        (n = S(i, n)),
          (o = S(a, o, r)),
          (r = q(n)),
          (a = q(o)),
          (t.modifiersData[e] = {
            referenceClippingOffsets: n,
            popperEscapeOffsets: o,
            isReferenceHidden: r,
            hasPopperEscaped: a,
          }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            'data-popper-reference-hidden': r,
            'data-popper-escaped': a,
          }));
      },
    },
    ie = B({defaultModifiers: [Y, G, K, Q]}),
    ae = [Y, G, K, Q, Z, te, ne, oe, re],
    se = B({defaultModifiers: ae});
  (e.applyStyles = Q),
    (e.arrow = oe),
    (e.computeStyles = K),
    (e.createPopper = se),
    (e.createPopperLite = ie),
    (e.defaultModifiers = ae),
    (e.detectOverflow = A),
    (e.eventListeners = Y),
    (e.flip = te),
    (e.hide = re),
    (e.offset = Z),
    (e.popperGenerator = B),
    (e.popperOffsets = G),
    (e.preventOverflow = ne),
    Object.defineProperty(e, '__esModule', {value: !0});
});
//# sourceMappingURL=popper.min.js.map

/*!
 * Bootstrap v5.0.0-beta3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e(require('@popperjs/core')))
    : 'function' == typeof define && define.amd
    ? define(['@popperjs/core'], e)
    : ((t =
        'undefined' != typeof globalThis ? globalThis : t || self).bootstrap =
        e(t.Popper));
})(this, function (t) {
  'use strict';
  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return (
      t &&
        Object.keys(t).forEach(function (s) {
          if ('default' !== s) {
            var i = Object.getOwnPropertyDescriptor(t, s);
            Object.defineProperty(
              e,
              s,
              i.get
                ? i
                : {
                    enumerable: !0,
                    get: function () {
                      return t[s];
                    },
                  }
            );
          }
        }),
      (e.default = t),
      Object.freeze(e)
    );
  }
  var s = e(t);
  const i = (t) => {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    n = (t) => {
      let e = t.getAttribute('data-bs-target');
      if (!e || '#' === e) {
        let s = t.getAttribute('href');
        if (!s || (!s.includes('#') && !s.startsWith('.'))) return null;
        s.includes('#') && !s.startsWith('#') && (s = '#' + s.split('#')[1]),
          (e = s && '#' !== s ? s.trim() : null);
      }
      return e;
    },
    o = (t) => {
      const e = n(t);
      return e && document.querySelector(e) ? e : null;
    },
    r = (t) => {
      const e = n(t);
      return e ? document.querySelector(e) : null;
    },
    a = (t) => {
      if (!t) return 0;
      let {transitionDuration: e, transitionDelay: s} =
        window.getComputedStyle(t);
      const i = Number.parseFloat(e),
        n = Number.parseFloat(s);
      return i || n
        ? ((e = e.split(',')[0]),
          (s = s.split(',')[0]),
          1e3 * (Number.parseFloat(e) + Number.parseFloat(s)))
        : 0;
    },
    l = (t) => {
      t.dispatchEvent(new Event('transitionend'));
    },
    c = (t) => (t[0] || t).nodeType,
    h = (t, e) => {
      let s = !1;
      const i = e + 5;
      t.addEventListener('transitionend', function e() {
        (s = !0), t.removeEventListener('transitionend', e);
      }),
        setTimeout(() => {
          s || l(t);
        }, i);
    },
    d = (t, e, s) => {
      Object.keys(s).forEach((i) => {
        const n = s[i],
          o = e[i],
          r =
            o && c(o)
              ? 'element'
              : null == (a = o)
              ? '' + a
              : {}.toString
                  .call(a)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var a;
        if (!new RegExp(n).test(r))
          throw new TypeError(
            t.toUpperCase() +
              ': ' +
              `Option "${i}" provided type "${r}" ` +
              `but expected type "${n}".`
          );
      });
    },
    u = (t) => {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        const e = getComputedStyle(t),
          s = getComputedStyle(t.parentNode);
        return (
          'none' !== e.display &&
          'none' !== s.display &&
          'hidden' !== e.visibility
        );
      }
      return !1;
    },
    g = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains('disabled') ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute('disabled') && 'false' !== t.getAttribute('disabled')),
    f = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? f(t.parentNode)
        : null;
    },
    p = () => function () {},
    m = (t) => t.offsetHeight,
    _ = () => {
      const {jQuery: t} = window;
      return t && !document.body.hasAttribute('data-bs-no-jquery') ? t : null;
    },
    b = () => 'rtl' === document.documentElement.dir,
    v = (t, e) => {
      var s;
      (s = () => {
        const s = _();
        if (s) {
          const i = s.fn[t];
          (s.fn[t] = e.jQueryInterface),
            (s.fn[t].Constructor = e),
            (s.fn[t].noConflict = () => ((s.fn[t] = i), e.jQueryInterface));
        }
      }),
        'loading' === document.readyState
          ? document.addEventListener('DOMContentLoaded', s)
          : s();
    },
    y = new Map();
  var w = {
    set(t, e, s) {
      y.has(t) || y.set(t, new Map());
      const i = y.get(t);
      i.has(e) || 0 === i.size
        ? i.set(e, s)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(i.keys())[0]
            }.`
          );
    },
    get: (t, e) => (y.has(t) && y.get(t).get(e)) || null,
    remove(t, e) {
      if (!y.has(t)) return;
      const s = y.get(t);
      s.delete(e), 0 === s.size && y.delete(t);
    },
  };
  const E = /[^.]*(?=\..*)\.|.*/,
    T = /\..*/,
    A = /::\d+$/,
    L = {};
  let k = 1;
  const C = {mouseenter: 'mouseover', mouseleave: 'mouseout'},
    D = new Set([
      'click',
      'dblclick',
      'mouseup',
      'mousedown',
      'contextmenu',
      'mousewheel',
      'DOMMouseScroll',
      'mouseover',
      'mouseout',
      'mousemove',
      'selectstart',
      'selectend',
      'keydown',
      'keypress',
      'keyup',
      'orientationchange',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointerleave',
      'pointercancel',
      'gesturestart',
      'gesturechange',
      'gestureend',
      'focus',
      'blur',
      'change',
      'reset',
      'select',
      'submit',
      'focusin',
      'focusout',
      'load',
      'unload',
      'beforeunload',
      'resize',
      'move',
      'DOMContentLoaded',
      'readystatechange',
      'error',
      'abort',
      'scroll',
    ]);
  function S(t, e) {
    return (e && `${e}::${k++}`) || t.uidEvent || k++;
  }
  function N(t) {
    const e = S(t);
    return (t.uidEvent = e), (L[e] = L[e] || {}), L[e];
  }
  function O(t, e, s = null) {
    const i = Object.keys(t);
    for (let n = 0, o = i.length; n < o; n++) {
      const o = t[i[n]];
      if (o.originalHandler === e && o.delegationSelector === s) return o;
    }
    return null;
  }
  function x(t, e, s) {
    const i = 'string' == typeof e,
      n = i ? s : e;
    let o = t.replace(T, '');
    const r = C[o];
    return r && (o = r), D.has(o) || (o = t), [i, n, o];
  }
  function I(t, e, s, i, n) {
    if ('string' != typeof e || !t) return;
    s || ((s = i), (i = null));
    const [o, r, a] = x(e, s, i),
      l = N(t),
      c = l[a] || (l[a] = {}),
      h = O(c, r, o ? s : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = S(r, e.replace(E, '')),
      u = o
        ? (function (t, e, s) {
            return function i(n) {
              const o = t.querySelectorAll(e);
              for (let {target: e} = n; e && e !== this; e = e.parentNode)
                for (let r = o.length; r--; )
                  if (o[r] === e)
                    return (
                      (n.delegateTarget = e),
                      i.oneOff && P.off(t, n.type, s),
                      s.apply(e, [n])
                    );
              return null;
            };
          })(t, s, i)
        : (function (t, e) {
            return function s(i) {
              return (
                (i.delegateTarget = t),
                s.oneOff && P.off(t, i.type, e),
                e.apply(t, [i])
              );
            };
          })(t, s);
    (u.delegationSelector = o ? s : null),
      (u.originalHandler = r),
      (u.oneOff = n),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function j(t, e, s, i, n) {
    const o = O(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }
  const P = {
    on(t, e, s, i) {
      I(t, e, s, i, !1);
    },
    one(t, e, s, i) {
      I(t, e, s, i, !0);
    },
    off(t, e, s, i) {
      if ('string' != typeof e || !t) return;
      const [n, o, r] = x(e, s, i),
        a = r !== e,
        l = N(t),
        c = e.startsWith('.');
      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void j(t, l, r, o, n ? s : null);
      }
      c &&
        Object.keys(l).forEach((s) => {
          !(function (t, e, s, i) {
            const n = e[s] || {};
            Object.keys(n).forEach((o) => {
              if (o.includes(i)) {
                const i = n[o];
                j(t, e, s, i.originalHandler, i.delegationSelector);
              }
            });
          })(t, l, s, e.slice(1));
        });
      const h = l[r] || {};
      Object.keys(h).forEach((s) => {
        const i = s.replace(A, '');
        if (!a || e.includes(i)) {
          const e = h[s];
          j(t, l, r, e.originalHandler, e.delegationSelector);
        }
      });
    },
    trigger(t, e, s) {
      if ('string' != typeof e || !t) return null;
      const i = _(),
        n = e.replace(T, ''),
        o = e !== n,
        r = D.has(n);
      let a,
        l = !0,
        c = !0,
        h = !1,
        d = null;
      return (
        o &&
          i &&
          ((a = i.Event(e, s)),
          i(t).trigger(a),
          (l = !a.isPropagationStopped()),
          (c = !a.isImmediatePropagationStopped()),
          (h = a.isDefaultPrevented())),
        r
          ? ((d = document.createEvent('HTMLEvents')), d.initEvent(n, l, !0))
          : (d = new CustomEvent(e, {bubbles: l, cancelable: !0})),
        void 0 !== s &&
          Object.keys(s).forEach((t) => {
            Object.defineProperty(d, t, {get: () => s[t]});
          }),
        h && d.preventDefault(),
        c && t.dispatchEvent(d),
        d.defaultPrevented && void 0 !== a && a.preventDefault(),
        d
      );
    },
  };
  class M {
    constructor(t) {
      (t = 'string' == typeof t ? document.querySelector(t) : t) &&
        ((this._element = t),
        w.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      w.remove(this._element, this.constructor.DATA_KEY),
        (this._element = null);
    }
    static getInstance(t) {
      return w.get(t, this.DATA_KEY);
    }
    static get VERSION() {
      return '5.0.0-beta3';
    }
  }
  class H extends M {
    static get DATA_KEY() {
      return 'bs.alert';
    }
    close(t) {
      const e = t ? this._getRootElement(t) : this._element,
        s = this._triggerCloseEvent(e);
      null === s || s.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(t) {
      return r(t) || t.closest('.alert');
    }
    _triggerCloseEvent(t) {
      return P.trigger(t, 'close.bs.alert');
    }
    _removeElement(t) {
      if ((t.classList.remove('show'), !t.classList.contains('fade')))
        return void this._destroyElement(t);
      const e = a(t);
      P.one(t, 'transitionend', () => this._destroyElement(t)), h(t, e);
    }
    _destroyElement(t) {
      t.parentNode && t.parentNode.removeChild(t),
        P.trigger(t, 'closed.bs.alert');
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, 'bs.alert');
        e || (e = new H(this)), 'close' === t && e[t](this);
      });
    }
    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }
  }
  P.on(
    document,
    'click.bs.alert.data-api',
    '[data-bs-dismiss="alert"]',
    H.handleDismiss(new H())
  ),
    v('alert', H);
  class R extends M {
    static get DATA_KEY() {
      return 'bs.button';
    }
    toggle() {
      this._element.setAttribute(
        'aria-pressed',
        this._element.classList.toggle('active')
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, 'bs.button');
        e || (e = new R(this)), 'toggle' === t && e[t]();
      });
    }
  }
  function B(t) {
    return (
      'true' === t ||
      ('false' !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : '' === t || 'null' === t
          ? null
          : t))
    );
  }
  function W(t) {
    return t.replace(/[A-Z]/g, (t) => '-' + t.toLowerCase());
  }
  P.on(
    document,
    'click.bs.button.data-api',
    '[data-bs-toggle="button"]',
    (t) => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      let s = w.get(e, 'bs.button');
      s || (s = new R(e)), s.toggle();
    }
  ),
    v('button', R);
  const $ = {
      setDataAttribute(t, e, s) {
        t.setAttribute('data-bs-' + W(e), s);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute('data-bs-' + W(e));
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith('bs'))
            .forEach((s) => {
              let i = s.replace(/^bs/, '');
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (e[i] = B(t.dataset[s]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => B(t.getAttribute('data-bs-' + W(e))),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: (t) => ({top: t.offsetTop, left: t.offsetLeft}),
    },
    U = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const s = [];
        let i = t.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
          i.matches(e) && s.push(i), (i = i.parentNode);
        return s;
      },
      prev(t, e) {
        let s = t.previousElementSibling;
        for (; s; ) {
          if (s.matches(e)) return [s];
          s = s.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let s = t.nextElementSibling;
        for (; s; ) {
          if (s.matches(e)) return [s];
          s = s.nextElementSibling;
        }
        return [];
      },
    },
    F = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0,
    },
    K = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    },
    z = 'next',
    Y = 'prev',
    q = 'left',
    Q = 'right';
  class X extends M {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = U.findOne(
          '.carousel-indicators',
          this._element
        )),
        (this._touchSupported =
          'ontouchstart' in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return F;
    }
    static get DATA_KEY() {
      return 'bs.carousel';
    }
    next() {
      this._isSliding || this._slide(z);
    }
    nextWhenVisible() {
      !document.hidden && u(this._element) && this.next();
    }
    prev() {
      this._isSliding || this._slide(Y);
    }
    pause(t) {
      t || (this._isPaused = !0),
        U.findOne('.carousel-item-next, .carousel-item-prev', this._element) &&
          (l(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = U.findOne('.active.carousel-item', this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void P.one(this._element, 'slid.bs.carousel', () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const s = t > e ? z : Y;
      this._slide(s, this._items[t]);
    }
    dispose() {
      P.off(this._element, '.bs.carousel'),
        (this._items = null),
        (this._config = null),
        (this._interval = null),
        (this._isPaused = null),
        (this._isSliding = null),
        (this._activeElement = null),
        (this._indicatorsElement = null),
        super.dispose();
    }
    _getConfig(t) {
      return (t = {...F, ...t}), d('carousel', t, K), t;
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? Q : q);
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, 'keydown.bs.carousel', (t) => this._keydown(t)),
        'hover' === this._config.pause &&
          (P.on(this._element, 'mouseenter.bs.carousel', (t) => this.pause(t)),
          P.on(this._element, 'mouseleave.bs.carousel', (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) => {
          !this._pointerEvent ||
          ('pen' !== t.pointerType && 'touch' !== t.pointerType)
            ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            : (this.touchStartX = t.clientX);
        },
        e = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        s = (t) => {
          !this._pointerEvent ||
            ('pen' !== t.pointerType && 'touch' !== t.pointerType) ||
            (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            'hover' === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      U.find('.carousel-item img', this._element).forEach((t) => {
        P.on(t, 'dragstart.bs.carousel', (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (P.on(this._element, 'pointerdown.bs.carousel', (e) => t(e)),
            P.on(this._element, 'pointerup.bs.carousel', (t) => s(t)),
            this._element.classList.add('pointer-event'))
          : (P.on(this._element, 'touchstart.bs.carousel', (e) => t(e)),
            P.on(this._element, 'touchmove.bs.carousel', (t) => e(t)),
            P.on(this._element, 'touchend.bs.carousel', (t) => s(t)));
    }
    _keydown(t) {
      /input|textarea/i.test(t.target.tagName) ||
        ('ArrowLeft' === t.key
          ? (t.preventDefault(), this._slide(q))
          : 'ArrowRight' === t.key && (t.preventDefault(), this._slide(Q)));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? U.find('.carousel-item', t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const s = t === z,
        i = t === Y,
        n = this._getItemIndex(e),
        o = this._items.length - 1;
      if (((i && 0 === n) || (s && n === o)) && !this._config.wrap) return e;
      const r = (n + (i ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }
    _triggerSlideEvent(t, e) {
      const s = this._getItemIndex(t),
        i = this._getItemIndex(
          U.findOne('.active.carousel-item', this._element)
        );
      return P.trigger(this._element, 'slide.bs.carousel', {
        relatedTarget: t,
        direction: e,
        from: i,
        to: s,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = U.findOne('.active', this._indicatorsElement);
        e.classList.remove('active'), e.removeAttribute('aria-current');
        const s = U.find('[data-bs-target]', this._indicatorsElement);
        for (let e = 0; e < s.length; e++)
          if (
            Number.parseInt(s[e].getAttribute('data-bs-slide-to'), 10) ===
            this._getItemIndex(t)
          ) {
            s[e].classList.add('active'),
              s[e].setAttribute('aria-current', 'true');
            break;
          }
      }
    }
    _updateInterval() {
      const t =
        this._activeElement ||
        U.findOne('.active.carousel-item', this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const s = this._directionToOrder(t),
        i = U.findOne('.active.carousel-item', this._element),
        n = this._getItemIndex(i),
        o = e || this._getItemByOrder(s, i),
        r = this._getItemIndex(o),
        l = Boolean(this._interval),
        c = s === z,
        d = c ? 'carousel-item-start' : 'carousel-item-end',
        u = c ? 'carousel-item-next' : 'carousel-item-prev',
        g = this._orderToDirection(s);
      if (o && o.classList.contains('active')) this._isSliding = !1;
      else if (!this._triggerSlideEvent(o, g).defaultPrevented && i && o) {
        if (
          ((this._isSliding = !0),
          l && this.pause(),
          this._setActiveIndicatorElement(o),
          (this._activeElement = o),
          this._element.classList.contains('slide'))
        ) {
          o.classList.add(u), m(o), i.classList.add(d), o.classList.add(d);
          const t = a(i);
          P.one(i, 'transitionend', () => {
            o.classList.remove(d, u),
              o.classList.add('active'),
              i.classList.remove('active', u, d),
              (this._isSliding = !1),
              setTimeout(() => {
                P.trigger(this._element, 'slid.bs.carousel', {
                  relatedTarget: o,
                  direction: g,
                  from: n,
                  to: r,
                });
              }, 0);
          }),
            h(i, t);
        } else
          i.classList.remove('active'),
            o.classList.add('active'),
            (this._isSliding = !1),
            P.trigger(this._element, 'slid.bs.carousel', {
              relatedTarget: o,
              direction: g,
              from: n,
              to: r,
            });
        l && this.cycle();
      }
    }
    _directionToOrder(t) {
      return [Q, q].includes(t)
        ? b()
          ? t === Q
            ? Y
            : z
          : t === Q
          ? z
          : Y
        : t;
    }
    _orderToDirection(t) {
      return [z, Y].includes(t)
        ? b()
          ? t === z
            ? q
            : Q
          : t === z
          ? Q
          : q
        : t;
    }
    static carouselInterface(t, e) {
      let s = w.get(t, 'bs.carousel'),
        i = {...F, ...$.getDataAttributes(t)};
      'object' == typeof e && (i = {...i, ...e});
      const n = 'string' == typeof e ? e : i.slide;
      if ((s || (s = new X(t, i)), 'number' == typeof e)) s.to(e);
      else if ('string' == typeof n) {
        if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
        s[n]();
      } else i.interval && i.ride && (s.pause(), s.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        X.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = r(this);
      if (!e || !e.classList.contains('carousel')) return;
      const s = {...$.getDataAttributes(e), ...$.getDataAttributes(this)},
        i = this.getAttribute('data-bs-slide-to');
      i && (s.interval = !1),
        X.carouselInterface(e, s),
        i && w.get(e, 'bs.carousel').to(i),
        t.preventDefault();
    }
  }
  P.on(
    document,
    'click.bs.carousel.data-api',
    '[data-bs-slide], [data-bs-slide-to]',
    X.dataApiClickHandler
  ),
    P.on(window, 'load.bs.carousel.data-api', () => {
      const t = U.find('[data-bs-ride="carousel"]');
      for (let e = 0, s = t.length; e < s; e++)
        X.carouselInterface(t[e], w.get(t[e], 'bs.carousel'));
    }),
    v('carousel', X);
  const V = {toggle: !0, parent: ''},
    G = {toggle: 'boolean', parent: '(string|element)'};
  class Z extends M {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = U.find(
          `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
        ));
      const s = U.find('[data-bs-toggle="collapse"]');
      for (let t = 0, e = s.length; t < e; t++) {
        const e = s[t],
          i = o(e),
          n = U.find(i).filter((t) => t === this._element);
        null !== i &&
          n.length &&
          ((this._selector = i), this._triggerArray.push(e));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return V;
    }
    static get DATA_KEY() {
      return 'bs.collapse';
    }
    toggle() {
      this._element.classList.contains('show') ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains('show'))
        return;
      let t, e;
      this._parent &&
        ((t = U.find('.show, .collapsing', this._parent).filter((t) =>
          'string' == typeof this._config.parent
            ? t.getAttribute('data-bs-parent') === this._config.parent
            : t.classList.contains('collapse')
        )),
        0 === t.length && (t = null));
      const s = U.findOne(this._selector);
      if (t) {
        const i = t.find((t) => s !== t);
        if (((e = i ? w.get(i, 'bs.collapse') : null), e && e._isTransitioning))
          return;
      }
      if (P.trigger(this._element, 'show.bs.collapse').defaultPrevented) return;
      t &&
        t.forEach((t) => {
          s !== t && Z.collapseInterface(t, 'hide'),
            e || w.set(t, 'bs.collapse', null);
        });
      const i = this._getDimension();
      this._element.classList.remove('collapse'),
        this._element.classList.add('collapsing'),
        (this._element.style[i] = 0),
        this._triggerArray.length &&
          this._triggerArray.forEach((t) => {
            t.classList.remove('collapsed'),
              t.setAttribute('aria-expanded', !0);
          }),
        this.setTransitioning(!0);
      const n = 'scroll' + (i[0].toUpperCase() + i.slice(1)),
        o = a(this._element);
      P.one(this._element, 'transitionend', () => {
        this._element.classList.remove('collapsing'),
          this._element.classList.add('collapse', 'show'),
          (this._element.style[i] = ''),
          this.setTransitioning(!1),
          P.trigger(this._element, 'shown.bs.collapse');
      }),
        h(this._element, o),
        (this._element.style[i] = this._element[n] + 'px');
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains('show'))
        return;
      if (P.trigger(this._element, 'hide.bs.collapse').defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] =
        this._element.getBoundingClientRect()[t] + 'px'),
        m(this._element),
        this._element.classList.add('collapsing'),
        this._element.classList.remove('collapse', 'show');
      const e = this._triggerArray.length;
      if (e > 0)
        for (let t = 0; t < e; t++) {
          const e = this._triggerArray[t],
            s = r(e);
          s &&
            !s.classList.contains('show') &&
            (e.classList.add('collapsed'), e.setAttribute('aria-expanded', !1));
        }
      this.setTransitioning(!0), (this._element.style[t] = '');
      const s = a(this._element);
      P.one(this._element, 'transitionend', () => {
        this.setTransitioning(!1),
          this._element.classList.remove('collapsing'),
          this._element.classList.add('collapse'),
          P.trigger(this._element, 'hidden.bs.collapse');
      }),
        h(this._element, s);
    }
    setTransitioning(t) {
      this._isTransitioning = t;
    }
    dispose() {
      super.dispose(),
        (this._config = null),
        (this._parent = null),
        (this._triggerArray = null),
        (this._isTransitioning = null);
    }
    _getConfig(t) {
      return (
        ((t = {...V, ...t}).toggle = Boolean(t.toggle)), d('collapse', t, G), t
      );
    }
    _getDimension() {
      return this._element.classList.contains('width') ? 'width' : 'height';
    }
    _getParent() {
      let {parent: t} = this._config;
      c(t)
        ? (void 0 === t.jquery && void 0 === t[0]) || (t = t[0])
        : (t = U.findOne(t));
      const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
      return (
        U.find(e, t).forEach((t) => {
          const e = r(t);
          this._addAriaAndCollapsedClass(e, [t]);
        }),
        t
      );
    }
    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const s = t.classList.contains('show');
      e.forEach((t) => {
        s ? t.classList.remove('collapsed') : t.classList.add('collapsed'),
          t.setAttribute('aria-expanded', s);
      });
    }
    static collapseInterface(t, e) {
      let s = w.get(t, 'bs.collapse');
      const i = {
        ...V,
        ...$.getDataAttributes(t),
        ...('object' == typeof e && e ? e : {}),
      };
      if (
        (!s &&
          i.toggle &&
          'string' == typeof e &&
          /show|hide/.test(e) &&
          (i.toggle = !1),
        s || (s = new Z(t, i)),
        'string' == typeof e)
      ) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Z.collapseInterface(this, t);
      });
    }
  }
  P.on(
    document,
    'click.bs.collapse.data-api',
    '[data-bs-toggle="collapse"]',
    function (t) {
      ('A' === t.target.tagName ||
        (t.delegateTarget && 'A' === t.delegateTarget.tagName)) &&
        t.preventDefault();
      const e = $.getDataAttributes(this),
        s = o(this);
      U.find(s).forEach((t) => {
        const s = w.get(t, 'bs.collapse');
        let i;
        s
          ? (null === s._parent &&
              'string' == typeof e.parent &&
              ((s._config.parent = e.parent), (s._parent = s._getParent())),
            (i = 'toggle'))
          : (i = e),
          Z.collapseInterface(t, i);
      });
    }
  ),
    v('collapse', Z);
  const J = new RegExp('ArrowUp|ArrowDown|Escape'),
    tt = b() ? 'top-end' : 'top-start',
    et = b() ? 'top-start' : 'top-end',
    st = b() ? 'bottom-end' : 'bottom-start',
    it = b() ? 'bottom-start' : 'bottom-end',
    nt = b() ? 'left-start' : 'right-start',
    ot = b() ? 'right-start' : 'left-start',
    rt = {
      offset: [0, 2],
      boundary: 'clippingParents',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null,
    },
    at = {
      offset: '(array|string|function)',
      boundary: '(string|element)',
      reference: '(string|element|object)',
      display: 'string',
      popperConfig: '(null|object|function)',
    };
  class lt extends M {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    static get Default() {
      return rt;
    }
    static get DefaultType() {
      return at;
    }
    static get DATA_KEY() {
      return 'bs.dropdown';
    }
    toggle() {
      if (
        this._element.disabled ||
        this._element.classList.contains('disabled')
      )
        return;
      const t = this._element.classList.contains('show');
      lt.clearMenus(), t || this.show();
    }
    show() {
      if (
        this._element.disabled ||
        this._element.classList.contains('disabled') ||
        this._menu.classList.contains('show')
      )
        return;
      const t = lt.getParentFromElement(this._element),
        e = {relatedTarget: this._element};
      if (!P.trigger(this._element, 'show.bs.dropdown', e).defaultPrevented) {
        if (this._inNavbar) $.setDataAttribute(this._menu, 'popper', 'none');
        else {
          if (void 0 === s)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          'parent' === this._config.reference
            ? (e = t)
            : c(this._config.reference)
            ? ((e = this._config.reference),
              void 0 !== this._config.reference.jquery &&
                (e = this._config.reference[0]))
            : 'object' == typeof this._config.reference &&
              (e = this._config.reference);
          const i = this._getPopperConfig(),
            n = i.modifiers.find(
              (t) => 'applyStyles' === t.name && !1 === t.enabled
            );
          (this._popper = s.createPopper(e, this._menu, i)),
            n && $.setDataAttribute(this._menu, 'popper', 'static');
        }
        'ontouchstart' in document.documentElement &&
          !t.closest('.navbar-nav') &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.on(t, 'mouseover', null, function () {})),
          this._element.focus(),
          this._element.setAttribute('aria-expanded', !0),
          this._menu.classList.toggle('show'),
          this._element.classList.toggle('show'),
          P.trigger(this._element, 'shown.bs.dropdown', e);
      }
    }
    hide() {
      if (
        this._element.disabled ||
        this._element.classList.contains('disabled') ||
        !this._menu.classList.contains('show')
      )
        return;
      const t = {relatedTarget: this._element};
      P.trigger(this._element, 'hide.bs.dropdown', t).defaultPrevented ||
        (this._popper && this._popper.destroy(),
        this._menu.classList.toggle('show'),
        this._element.classList.toggle('show'),
        $.removeDataAttribute(this._menu, 'popper'),
        P.trigger(this._element, 'hidden.bs.dropdown', t));
    }
    dispose() {
      P.off(this._element, '.bs.dropdown'),
        (this._menu = null),
        this._popper && (this._popper.destroy(), (this._popper = null)),
        super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _addEventListeners() {
      P.on(this._element, 'click.bs.dropdown', (t) => {
        t.preventDefault(), this.toggle();
      });
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...$.getDataAttributes(this._element),
          ...t,
        }),
        d('dropdown', t, this.constructor.DefaultType),
        'object' == typeof t.reference &&
          !c(t.reference) &&
          'function' != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          'dropdown'.toUpperCase() +
            ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
        );
      return t;
    }
    _getMenuElement() {
      return U.next(this._element, '.dropdown-menu')[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains('dropend')) return nt;
      if (t.classList.contains('dropstart')) return ot;
      const e =
        'end' ===
        getComputedStyle(this._menu).getPropertyValue('--bs-position').trim();
      return t.classList.contains('dropup') ? (e ? et : tt) : e ? it : st;
    }
    _detectNavbar() {
      return null !== this._element.closest('.navbar');
    }
    _getOffset() {
      const {offset: t} = this._config;
      return 'string' == typeof t
        ? t.split(',').map((t) => Number.parseInt(t, 10))
        : 'function' == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {name: 'preventOverflow', options: {boundary: this._config.boundary}},
          {name: 'offset', options: {offset: this._getOffset()}},
        ],
      };
      return (
        'static' === this._config.display &&
          (t.modifiers = [{name: 'applyStyles', enabled: !1}]),
        {
          ...t,
          ...('function' == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    static dropdownInterface(t, e) {
      let s = w.get(t, 'bs.dropdown');
      if (
        (s || (s = new lt(t, 'object' == typeof e ? e : null)),
        'string' == typeof e)
      ) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        lt.dropdownInterface(this, t);
      });
    }
    static clearMenus(t) {
      if (t) {
        if (2 === t.button || ('keyup' === t.type && 'Tab' !== t.key)) return;
        if (/input|select|textarea|form/i.test(t.target.tagName)) return;
      }
      const e = U.find('[data-bs-toggle="dropdown"]');
      for (let s = 0, i = e.length; s < i; s++) {
        const i = w.get(e[s], 'bs.dropdown'),
          n = {relatedTarget: e[s]};
        if ((t && 'click' === t.type && (n.clickEvent = t), !i)) continue;
        const o = i._menu;
        if (e[s].classList.contains('show')) {
          if (t) {
            if ([i._element].some((e) => t.composedPath().includes(e)))
              continue;
            if ('keyup' === t.type && 'Tab' === t.key && o.contains(t.target))
              continue;
          }
          P.trigger(e[s], 'hide.bs.dropdown', n).defaultPrevented ||
            ('ontouchstart' in document.documentElement &&
              []
                .concat(...document.body.children)
                .forEach((t) => P.off(t, 'mouseover', null, function () {})),
            e[s].setAttribute('aria-expanded', 'false'),
            i._popper && i._popper.destroy(),
            o.classList.remove('show'),
            e[s].classList.remove('show'),
            $.removeDataAttribute(o, 'popper'),
            P.trigger(e[s], 'hidden.bs.dropdown', n));
        }
      }
    }
    static getParentFromElement(t) {
      return r(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? 'Space' === t.key ||
            ('Escape' !== t.key &&
              (('ArrowDown' !== t.key && 'ArrowUp' !== t.key) ||
                t.target.closest('.dropdown-menu')))
          : !J.test(t.key)
      )
        return;
      if (
        (t.preventDefault(),
        t.stopPropagation(),
        this.disabled || this.classList.contains('disabled'))
      )
        return;
      const e = lt.getParentFromElement(this),
        s = this.classList.contains('show');
      if ('Escape' === t.key)
        return (
          (this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : U.prev(this, '[data-bs-toggle="dropdown"]')[0]
          ).focus(),
          void lt.clearMenus()
        );
      if (!s && ('ArrowUp' === t.key || 'ArrowDown' === t.key))
        return void (
          this.matches('[data-bs-toggle="dropdown"]')
            ? this
            : U.prev(this, '[data-bs-toggle="dropdown"]')[0]
        ).click();
      if (!s || 'Space' === t.key) return void lt.clearMenus();
      const i = U.find(
        '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
        e
      ).filter(u);
      if (!i.length) return;
      let n = i.indexOf(t.target);
      'ArrowUp' === t.key && n > 0 && n--,
        'ArrowDown' === t.key && n < i.length - 1 && n++,
        (n = -1 === n ? 0 : n),
        i[n].focus();
    }
  }
  P.on(
    document,
    'keydown.bs.dropdown.data-api',
    '[data-bs-toggle="dropdown"]',
    lt.dataApiKeydownHandler
  ),
    P.on(
      document,
      'keydown.bs.dropdown.data-api',
      '.dropdown-menu',
      lt.dataApiKeydownHandler
    ),
    P.on(document, 'click.bs.dropdown.data-api', lt.clearMenus),
    P.on(document, 'keyup.bs.dropdown.data-api', lt.clearMenus),
    P.on(
      document,
      'click.bs.dropdown.data-api',
      '[data-bs-toggle="dropdown"]',
      function (t) {
        t.preventDefault(), lt.dropdownInterface(this);
      }
    ),
    v('dropdown', lt);
  const ct = {backdrop: !0, keyboard: !0, focus: !0},
    ht = {backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean'};
  class dt extends M {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = U.findOne('.modal-dialog', this._element)),
        (this._backdrop = null),
        (this._isShown = !1),
        (this._isBodyOverflowing = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollbarWidth = 0);
    }
    static get Default() {
      return ct;
    }
    static get DATA_KEY() {
      return 'bs.modal';
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      if (this._isShown || this._isTransitioning) return;
      this._isAnimated() && (this._isTransitioning = !0);
      const e = P.trigger(this._element, 'show.bs.modal', {relatedTarget: t});
      this._isShown ||
        e.defaultPrevented ||
        ((this._isShown = !0),
        this._checkScrollbar(),
        this._setScrollbar(),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.on(
          this._element,
          'click.dismiss.bs.modal',
          '[data-bs-dismiss="modal"]',
          (t) => this.hide(t)
        ),
        P.on(this._dialog, 'mousedown.dismiss.bs.modal', () => {
          P.one(this._element, 'mouseup.dismiss.bs.modal', (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide(t) {
      if ((t && t.preventDefault(), !this._isShown || this._isTransitioning))
        return;
      if (P.trigger(this._element, 'hide.bs.modal').defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      if (
        (e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.off(document, 'focusin.bs.modal'),
        this._element.classList.remove('show'),
        P.off(this._element, 'click.dismiss.bs.modal'),
        P.off(this._dialog, 'mousedown.dismiss.bs.modal'),
        e)
      ) {
        const t = a(this._element);
        P.one(this._element, 'transitionend', (t) => this._hideModal(t)),
          h(this._element, t);
      } else this._hideModal();
    }
    dispose() {
      [window, this._element, this._dialog].forEach((t) =>
        P.off(t, '.bs.modal')
      ),
        super.dispose(),
        P.off(document, 'focusin.bs.modal'),
        (this._config = null),
        (this._dialog = null),
        (this._backdrop = null),
        (this._isShown = null),
        (this._isBodyOverflowing = null),
        (this._ignoreBackdropClick = null),
        (this._isTransitioning = null),
        (this._scrollbarWidth = null);
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _getConfig(t) {
      return (t = {...ct, ...t}), d('modal', t, ht), t;
    }
    _showElement(t) {
      const e = this._isAnimated(),
        s = U.findOne('.modal-body', this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.appendChild(this._element),
        (this._element.style.display = 'block'),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        (this._element.scrollTop = 0),
        s && (s.scrollTop = 0),
        e && m(this._element),
        this._element.classList.add('show'),
        this._config.focus && this._enforceFocus();
      const i = () => {
        this._config.focus && this._element.focus(),
          (this._isTransitioning = !1),
          P.trigger(this._element, 'shown.bs.modal', {relatedTarget: t});
      };
      if (e) {
        const t = a(this._dialog);
        P.one(this._dialog, 'transitionend', i), h(this._dialog, t);
      } else i();
    }
    _enforceFocus() {
      P.off(document, 'focusin.bs.modal'),
        P.on(document, 'focusin.bs.modal', (t) => {
          document === t.target ||
            this._element === t.target ||
            this._element.contains(t.target) ||
            this._element.focus();
        });
    }
    _setEscapeEvent() {
      this._isShown
        ? P.on(this._element, 'keydown.dismiss.bs.modal', (t) => {
            this._config.keyboard && 'Escape' === t.key
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                'Escape' !== t.key ||
                this._triggerBackdropTransition();
          })
        : P.off(this._element, 'keydown.dismiss.bs.modal');
    }
    _setResizeEvent() {
      this._isShown
        ? P.on(window, 'resize.bs.modal', () => this._adjustDialog())
        : P.off(window, 'resize.bs.modal');
    }
    _hideModal() {
      (this._element.style.display = 'none'),
        this._element.setAttribute('aria-hidden', !0),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        (this._isTransitioning = !1),
        this._showBackdrop(() => {
          document.body.classList.remove('modal-open'),
            this._resetAdjustments(),
            this._resetScrollbar(),
            P.trigger(this._element, 'hidden.bs.modal');
        });
    }
    _removeBackdrop() {
      this._backdrop.parentNode.removeChild(this._backdrop),
        (this._backdrop = null);
    }
    _showBackdrop(t) {
      const e = this._isAnimated();
      if (this._isShown && this._config.backdrop) {
        if (
          ((this._backdrop = document.createElement('div')),
          (this._backdrop.className = 'modal-backdrop'),
          e && this._backdrop.classList.add('fade'),
          document.body.appendChild(this._backdrop),
          P.on(this._element, 'click.dismiss.bs.modal', (t) => {
            this._ignoreBackdropClick
              ? (this._ignoreBackdropClick = !1)
              : t.target === t.currentTarget &&
                ('static' === this._config.backdrop
                  ? this._triggerBackdropTransition()
                  : this.hide());
          }),
          e && m(this._backdrop),
          this._backdrop.classList.add('show'),
          !e)
        )
          return void t();
        const s = a(this._backdrop);
        P.one(this._backdrop, 'transitionend', t), h(this._backdrop, s);
      } else if (!this._isShown && this._backdrop) {
        this._backdrop.classList.remove('show');
        const s = () => {
          this._removeBackdrop(), t();
        };
        if (e) {
          const t = a(this._backdrop);
          P.one(this._backdrop, 'transitionend', s), h(this._backdrop, t);
        } else s();
      } else t();
    }
    _isAnimated() {
      return this._element.classList.contains('fade');
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, 'hidePrevented.bs.modal').defaultPrevented)
        return;
      const t =
        this._element.scrollHeight > document.documentElement.clientHeight;
      t || (this._element.style.overflowY = 'hidden'),
        this._element.classList.add('modal-static');
      const e = a(this._dialog);
      P.off(this._element, 'transitionend'),
        P.one(this._element, 'transitionend', () => {
          this._element.classList.remove('modal-static'),
            t ||
              (P.one(this._element, 'transitionend', () => {
                this._element.style.overflowY = '';
              }),
              h(this._element, e));
        }),
        h(this._element, e),
        this._element.focus();
    }
    _adjustDialog() {
      const t =
        this._element.scrollHeight > document.documentElement.clientHeight;
      ((!this._isBodyOverflowing && t && !b()) ||
        (this._isBodyOverflowing && !t && b())) &&
        (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
        ((this._isBodyOverflowing && !t && !b()) ||
          (!this._isBodyOverflowing && t && b())) &&
          (this._element.style.paddingRight = this._scrollbarWidth + 'px');
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ''),
        (this._element.style.paddingRight = '');
    }
    _checkScrollbar() {
      const t = document.body.getBoundingClientRect();
      (this._isBodyOverflowing =
        Math.round(t.left + t.right) < window.innerWidth),
        (this._scrollbarWidth = this._getScrollbarWidth());
    }
    _setScrollbar() {
      this._isBodyOverflowing &&
        (this._setElementAttributes(
          '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
          'paddingRight',
          (t) => t + this._scrollbarWidth
        ),
        this._setElementAttributes(
          '.sticky-top',
          'marginRight',
          (t) => t - this._scrollbarWidth
        ),
        this._setElementAttributes(
          'body',
          'paddingRight',
          (t) => t + this._scrollbarWidth
        )),
        document.body.classList.add('modal-open');
    }
    _setElementAttributes(t, e, s) {
      U.find(t).forEach((t) => {
        if (
          t !== document.body &&
          window.innerWidth > t.clientWidth + this._scrollbarWidth
        )
          return;
        const i = t.style[e],
          n = window.getComputedStyle(t)[e];
        $.setDataAttribute(t, e, i),
          (t.style[e] = s(Number.parseFloat(n)) + 'px');
      });
    }
    _resetScrollbar() {
      this._resetElementAttributes(
        '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
        'paddingRight'
      ),
        this._resetElementAttributes('.sticky-top', 'marginRight'),
        this._resetElementAttributes('body', 'paddingRight');
    }
    _resetElementAttributes(t, e) {
      U.find(t).forEach((t) => {
        const s = $.getDataAttribute(t, e);
        void 0 === s && t === document.body
          ? (t.style[e] = '')
          : ($.removeDataAttribute(t, e), (t.style[e] = s));
      });
    }
    _getScrollbarWidth() {
      const t = document.createElement('div');
      (t.className = 'modal-scrollbar-measure'), document.body.appendChild(t);
      const e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        let s = w.get(this, 'bs.modal');
        const i = {
          ...ct,
          ...$.getDataAttributes(this),
          ...('object' == typeof t && t ? t : {}),
        };
        if ((s || (s = new dt(this, i)), 'string' == typeof t)) {
          if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
          s[t](e);
        }
      });
    }
  }
  P.on(
    document,
    'click.bs.modal.data-api',
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = r(this);
      ('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault(),
        P.one(e, 'show.bs.modal', (t) => {
          t.defaultPrevented ||
            P.one(e, 'hidden.bs.modal', () => {
              u(this) && this.focus();
            });
        });
      let s = w.get(e, 'bs.modal');
      if (!s) {
        const t = {...$.getDataAttributes(e), ...$.getDataAttributes(this)};
        s = new dt(e, t);
      }
      s.toggle(this);
    }
  ),
    v('modal', dt);
  const ut = () => {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    },
    gt = (t, e, s) => {
      const i = ut();
      U.find(t).forEach((t) => {
        if (t !== document.body && window.innerWidth > t.clientWidth + i)
          return;
        const n = t.style[e],
          o = window.getComputedStyle(t)[e];
        $.setDataAttribute(t, e, n),
          (t.style[e] = s(Number.parseFloat(o)) + 'px');
      });
    },
    ft = (t, e) => {
      U.find(t).forEach((t) => {
        const s = $.getDataAttribute(t, e);
        void 0 === s && t === document.body
          ? t.style.removeProperty(e)
          : ($.removeDataAttribute(t, e), (t.style[e] = s));
      });
    },
    pt = {backdrop: !0, keyboard: !0, scroll: !1},
    mt = {backdrop: 'boolean', keyboard: 'boolean', scroll: 'boolean'};
  class _t extends M {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        this._addEventListeners();
    }
    static get Default() {
      return pt;
    }
    static get DATA_KEY() {
      return 'bs.offcanvas';
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, 'show.bs.offcanvas', {relatedTarget: t})
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = 'visible'),
        this._config.backdrop &&
          document.body.classList.add('offcanvas-backdrop'),
        this._config.scroll ||
          ((t = ut()) => {
            (document.body.style.overflow = 'hidden'),
              gt(
                '.fixed-top, .fixed-bottom, .is-fixed',
                'paddingRight',
                (e) => e + t
              ),
              gt('.sticky-top', 'marginRight', (e) => e - t),
              gt('body', 'paddingRight', (e) => e + t);
          })(),
        this._element.classList.add('offcanvas-toggling'),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        this._element.classList.add('show'),
        setTimeout(() => {
          this._element.classList.remove('offcanvas-toggling'),
            P.trigger(this._element, 'shown.bs.offcanvas', {relatedTarget: t}),
            this._enforceFocusOnElement(this._element);
        }, a(this._element)));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, 'hide.bs.offcanvas').defaultPrevented ||
          (this._element.classList.add('offcanvas-toggling'),
          P.off(document, 'focusin.bs.offcanvas'),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove('show'),
          setTimeout(() => {
            this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              this._element.removeAttribute('role'),
              (this._element.style.visibility = 'hidden'),
              this._config.backdrop &&
                document.body.classList.remove('offcanvas-backdrop'),
              this._config.scroll ||
                ((document.body.style.overflow = 'auto'),
                ft('.fixed-top, .fixed-bottom, .is-fixed', 'paddingRight'),
                ft('.sticky-top', 'marginRight'),
                ft('body', 'paddingRight')),
              P.trigger(this._element, 'hidden.bs.offcanvas'),
              this._element.classList.remove('offcanvas-toggling');
          }, a(this._element))));
    }
    _getConfig(t) {
      return (
        (t = {
          ...pt,
          ...$.getDataAttributes(this._element),
          ...('object' == typeof t ? t : {}),
        }),
        d('offcanvas', t, mt),
        t
      );
    }
    _enforceFocusOnElement(t) {
      P.off(document, 'focusin.bs.offcanvas'),
        P.on(document, 'focusin.bs.offcanvas', (e) => {
          document === e.target ||
            t === e.target ||
            t.contains(e.target) ||
            t.focus();
        }),
        t.focus();
    }
    _addEventListeners() {
      P.on(
        this._element,
        'click.dismiss.bs.offcanvas',
        '[data-bs-dismiss="offcanvas"]',
        () => this.hide()
      ),
        P.on(document, 'keydown', (t) => {
          this._config.keyboard && 'Escape' === t.key && this.hide();
        }),
        P.on(document, 'click.bs.offcanvas.data-api', (t) => {
          const e = U.findOne(o(t.target));
          this._element.contains(t.target) ||
            e === this._element ||
            this.hide();
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e =
          w.get(this, 'bs.offcanvas') ||
          new _t(this, 'object' == typeof t ? t : {});
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    'click.bs.offcanvas.data-api',
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = r(this);
      if ((['A', 'AREA'].includes(this.tagName) && t.preventDefault(), g(this)))
        return;
      P.one(e, 'hidden.bs.offcanvas', () => {
        u(this) && this.focus();
      });
      const s = U.findOne('.offcanvas.show, .offcanvas-toggling');
      (s && s !== e) || (w.get(e, 'bs.offcanvas') || new _t(e)).toggle(this);
    }
  ),
    P.on(window, 'load.bs.offcanvas.data-api', () => {
      U.find('.offcanvas.show').forEach((t) =>
        (w.get(t, 'bs.offcanvas') || new _t(t)).show()
      );
    }),
    v('offcanvas', _t);
  const bt = new Set([
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ]),
    vt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    yt =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    wt = (t, e) => {
      const s = t.nodeName.toLowerCase();
      if (e.includes(s))
        return (
          !bt.has(s) || Boolean(vt.test(t.nodeValue) || yt.test(t.nodeValue))
        );
      const i = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = i.length; t < e; t++) if (i[t].test(s)) return !0;
      return !1;
    };
  function Et(t, e, s) {
    if (!t.length) return t;
    if (s && 'function' == typeof s) return s(t);
    const i = new window.DOMParser().parseFromString(t, 'text/html'),
      n = Object.keys(e),
      o = [].concat(...i.body.querySelectorAll('*'));
    for (let t = 0, s = o.length; t < s; t++) {
      const s = o[t],
        i = s.nodeName.toLowerCase();
      if (!n.includes(i)) {
        s.parentNode.removeChild(s);
        continue;
      }
      const r = [].concat(...s.attributes),
        a = [].concat(e['*'] || [], e[i] || []);
      r.forEach((t) => {
        wt(t, a) || s.removeAttribute(t.nodeName);
      });
    }
    return i.body.innerHTML;
  }
  const Tt = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
    At = new Set(['sanitize', 'allowList', 'sanitizeFn']),
    Lt = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(array|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacements: 'array',
      boundary: '(string|element)',
      customClass: '(string|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      allowList: 'object',
      popperConfig: '(null|object|function)',
    },
    kt = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: b() ? 'left' : 'right',
      BOTTOM: 'bottom',
      LEFT: b() ? 'right' : 'left',
    },
    Ct = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ['top', 'right', 'bottom', 'left'],
      boundary: 'clippingParents',
      customClass: '',
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Dt = {
      HIDE: 'hide.bs.tooltip',
      HIDDEN: 'hidden.bs.tooltip',
      SHOW: 'show.bs.tooltip',
      SHOWN: 'shown.bs.tooltip',
      INSERTED: 'inserted.bs.tooltip',
      CLICK: 'click.bs.tooltip',
      FOCUSIN: 'focusin.bs.tooltip',
      FOCUSOUT: 'focusout.bs.tooltip',
      MOUSEENTER: 'mouseenter.bs.tooltip',
      MOUSELEAVE: 'mouseleave.bs.tooltip',
    };
  class St extends M {
    constructor(t, e) {
      if (void 0 === s)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ''),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this.config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return Ct;
    }
    static get NAME() {
      return 'tooltip';
    }
    static get DATA_KEY() {
      return 'bs.tooltip';
    }
    static get Event() {
      return Dt;
    }
    static get EVENT_KEY() {
      return '.bs.tooltip';
    }
    static get DefaultType() {
      return Lt;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains('show'))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(this._element, this.constructor.EVENT_KEY),
        P.off(
          this._element.closest('.modal'),
          'hide.bs.modal',
          this._hideModalHandler
        ),
        this.tip &&
          this.tip.parentNode &&
          this.tip.parentNode.removeChild(this.tip),
        (this._isEnabled = null),
        (this._timeout = null),
        (this._hoverState = null),
        (this._activeTrigger = null),
        this._popper && this._popper.destroy(),
        (this._popper = null),
        (this.config = null),
        (this.tip = null),
        super.dispose();
    }
    show() {
      if ('none' === this._element.style.display)
        throw new Error('Please use show on visible elements');
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.Event.SHOW),
        e = f(this._element),
        n =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !n) return;
      const o = this.getTipElement(),
        r = i(this.constructor.NAME);
      o.setAttribute('id', r),
        this._element.setAttribute('aria-describedby', r),
        this.setContent(),
        this.config.animation && o.classList.add('fade');
      const l =
          'function' == typeof this.config.placement
            ? this.config.placement.call(this, o, this._element)
            : this.config.placement,
        c = this._getAttachment(l);
      this._addAttachmentClass(c);
      const d = this._getContainer();
      w.set(o, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (d.appendChild(o),
          P.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = s.createPopper(
              this._element,
              o,
              this._getPopperConfig(c)
            )),
        o.classList.add('show');
      const u =
        'function' == typeof this.config.customClass
          ? this.config.customClass()
          : this.config.customClass;
      u && o.classList.add(...u.split(' ')),
        'ontouchstart' in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            P.on(t, 'mouseover', function () {});
          });
      const g = () => {
        const t = this._hoverState;
        (this._hoverState = null),
          P.trigger(this._element, this.constructor.Event.SHOWN),
          'out' === t && this._leave(null, this);
      };
      if (this.tip.classList.contains('fade')) {
        const t = a(this.tip);
        P.one(this.tip, 'transitionend', g), h(this.tip, t);
      } else g();
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement(),
        e = () => {
          this._isWithActiveTrigger() ||
            ('show' !== this._hoverState &&
              t.parentNode &&
              t.parentNode.removeChild(t),
            this._cleanTipClass(),
            this._element.removeAttribute('aria-describedby'),
            P.trigger(this._element, this.constructor.Event.HIDDEN),
            this._popper && (this._popper.destroy(), (this._popper = null)));
        };
      if (
        !P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      ) {
        if (
          (t.classList.remove('show'),
          'ontouchstart' in document.documentElement &&
            []
              .concat(...document.body.children)
              .forEach((t) => P.off(t, 'mouseover', p)),
          (this._activeTrigger.click = !1),
          (this._activeTrigger.focus = !1),
          (this._activeTrigger.hover = !1),
          this.tip.classList.contains('fade'))
        ) {
          const s = a(t);
          P.one(t, 'transitionend', e), h(t, s);
        } else e();
        this._hoverState = '';
      }
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement('div');
      return (
        (t.innerHTML = this.config.template),
        (this.tip = t.children[0]),
        this.tip
      );
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(U.findOne('.tooltip-inner', t), this.getTitle()),
        t.classList.remove('fade', 'show');
    }
    setElementContent(t, e) {
      if (null !== t)
        return 'object' == typeof e && c(e)
          ? (e.jquery && (e = e[0]),
            void (this.config.html
              ? e.parentNode !== t && ((t.innerHTML = ''), t.appendChild(e))
              : (t.textContent = e.textContent)))
          : void (this.config.html
              ? (this.config.sanitize &&
                  (e = Et(e, this.config.allowList, this.config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      let t = this._element.getAttribute('data-bs-original-title');
      return (
        t ||
          (t =
            'function' == typeof this.config.title
              ? this.config.title.call(this._element)
              : this.config.title),
        t
      );
    }
    updateAttachment(t) {
      return 'right' === t ? 'end' : 'left' === t ? 'start' : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      const s = this.constructor.DATA_KEY;
      return (
        (e = e || w.get(t.delegateTarget, s)) ||
          ((e = new this.constructor(
            t.delegateTarget,
            this._getDelegateConfig()
          )),
          w.set(t.delegateTarget, s, e)),
        e
      );
    }
    _getOffset() {
      const {offset: t} = this.config;
      return 'string' == typeof t
        ? t.split(',').map((t) => Number.parseInt(t, 10))
        : 'function' == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: 'flip',
            options: {
              altBoundary: !0,
              fallbackPlacements: this.config.fallbackPlacements,
            },
          },
          {name: 'offset', options: {offset: this._getOffset()}},
          {name: 'preventOverflow', options: {boundary: this.config.boundary}},
          {
            name: 'arrow',
            options: {element: `.${this.constructor.NAME}-arrow`},
          },
          {
            name: 'onChange',
            enabled: !0,
            phase: 'afterWrite',
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...('function' == typeof this.config.popperConfig
          ? this.config.popperConfig(e)
          : this.config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        'bs-tooltip-' + this.updateAttachment(t)
      );
    }
    _getContainer() {
      return !1 === this.config.container
        ? document.body
        : c(this.config.container)
        ? this.config.container
        : U.findOne(this.config.container);
    }
    _getAttachment(t) {
      return kt[t.toUpperCase()];
    }
    _setListeners() {
      this.config.trigger.split(' ').forEach((t) => {
        if ('click' === t)
          P.on(
            this._element,
            this.constructor.Event.CLICK,
            this.config.selector,
            (t) => this.toggle(t)
          );
        else if ('manual' !== t) {
          const e =
              'hover' === t
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            s =
              'hover' === t
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          P.on(this._element, e, this.config.selector, (t) => this._enter(t)),
            P.on(this._element, s, this.config.selector, (t) => this._leave(t));
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        P.on(
          this._element.closest('.modal'),
          'hide.bs.modal',
          this._hideModalHandler
        ),
        this.config.selector
          ? (this.config = {...this.config, trigger: 'manual', selector: ''})
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute('title'),
        e = typeof this._element.getAttribute('data-bs-original-title');
      (t || 'string' !== e) &&
        (this._element.setAttribute('data-bs-original-title', t || ''),
        !t ||
          this._element.getAttribute('aria-label') ||
          this._element.textContent ||
          this._element.setAttribute('aria-label', t),
        this._element.setAttribute('title', ''));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger['focusin' === t.type ? 'focus' : 'hover'] = !0),
        e.getTipElement().classList.contains('show') || 'show' === e._hoverState
          ? (e._hoverState = 'show')
          : (clearTimeout(e._timeout),
            (e._hoverState = 'show'),
            e.config.delay && e.config.delay.show
              ? (e._timeout = setTimeout(() => {
                  'show' === e._hoverState && e.show();
                }, e.config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger['focusout' === t.type ? 'focus' : 'hover'] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = 'out'),
          e.config.delay && e.config.delay.hide
            ? (e._timeout = setTimeout(() => {
                'out' === e._hoverState && e.hide();
              }, e.config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = $.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          At.has(t) && delete e[t];
        }),
        t &&
          'object' == typeof t.container &&
          t.container.jquery &&
          (t.container = t.container[0]),
        'number' ==
          typeof (t = {
            ...this.constructor.Default,
            ...e,
            ...('object' == typeof t && t ? t : {}),
          }).delay && (t.delay = {show: t.delay, hide: t.delay}),
        'number' == typeof t.title && (t.title = t.title.toString()),
        'number' == typeof t.content && (t.content = t.content.toString()),
        d('tooltip', t, this.constructor.DefaultType),
        t.sanitize && (t.template = Et(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      if (this.config)
        for (const e in this.config)
          this.constructor.Default[e] !== this.config[e] &&
            (t[e] = this.config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute('class').match(Tt);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _handlePopperPlacementChange(t) {
      const {state: e} = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, 'bs.tooltip');
        const s = 'object' == typeof t && t;
        if (
          (e || !/dispose|hide/.test(t)) &&
          (e || (e = new St(this, s)), 'string' == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v('tooltip', St);
  const Nt = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
    Ot = {
      ...St.Default,
      placement: 'right',
      offset: [0, 8],
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    xt = {...St.DefaultType, content: '(string|element|function)'},
    It = {
      HIDE: 'hide.bs.popover',
      HIDDEN: 'hidden.bs.popover',
      SHOW: 'show.bs.popover',
      SHOWN: 'shown.bs.popover',
      INSERTED: 'inserted.bs.popover',
      CLICK: 'click.bs.popover',
      FOCUSIN: 'focusin.bs.popover',
      FOCUSOUT: 'focusout.bs.popover',
      MOUSEENTER: 'mouseenter.bs.popover',
      MOUSELEAVE: 'mouseleave.bs.popover',
    };
  class jt extends St {
    static get Default() {
      return Ot;
    }
    static get NAME() {
      return 'popover';
    }
    static get DATA_KEY() {
      return 'bs.popover';
    }
    static get Event() {
      return It;
    }
    static get EVENT_KEY() {
      return '.bs.popover';
    }
    static get DefaultType() {
      return xt;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent() {
      const t = this.getTipElement();
      this.setElementContent(U.findOne('.popover-header', t), this.getTitle());
      let e = this._getContent();
      'function' == typeof e && (e = e.call(this._element)),
        this.setElementContent(U.findOne('.popover-body', t), e),
        t.classList.remove('fade', 'show');
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        'bs-popover-' + this.updateAttachment(t)
      );
    }
    _getContent() {
      return (
        this._element.getAttribute('data-bs-content') || this.config.content
      );
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute('class').match(Nt);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, 'bs.popover');
        const s = 'object' == typeof t ? t : null;
        if (
          (e || !/dispose|hide/.test(t)) &&
          (e || ((e = new jt(this, s)), w.set(this, 'bs.popover', e)),
          'string' == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  v('popover', jt);
  const Pt = {offset: 10, method: 'auto', target: ''},
    Mt = {offset: 'number', method: 'string', target: '(string|element)'};
  class Ht extends M {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          'BODY' === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        P.on(this._scrollElement, 'scroll.bs.scrollspy', () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Pt;
    }
    static get DATA_KEY() {
      return 'bs.scrollspy';
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window
            ? 'offset'
            : 'position',
        e = 'auto' === this._config.method ? t : this._config.method,
        s = 'position' === e ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        U.find(this._selector)
          .map((t) => {
            const i = o(t),
              n = i ? U.findOne(i) : null;
            if (n) {
              const t = n.getBoundingClientRect();
              if (t.width || t.height) return [$[e](n).top + s, i];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      super.dispose(),
        P.off(this._scrollElement, '.bs.scrollspy'),
        (this._scrollElement = null),
        (this._config = null),
        (this._selector = null),
        (this._offsets = null),
        (this._targets = null),
        (this._activeTarget = null),
        (this._scrollHeight = null);
    }
    _getConfig(t) {
      if (
        'string' !=
          typeof (t = {...Pt, ...('object' == typeof t && t ? t : {})})
            .target &&
        c(t.target)
      ) {
        let {id: e} = t.target;
        e || ((e = i('scrollspy')), (t.target.id = e)), (t.target = '#' + e);
      }
      return d('scrollspy', t, Mt), t;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        s = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= s)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = this._selector
          .split(',')
          .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
        s = U.findOne(e.join(','));
      s.classList.contains('dropdown-item')
        ? (U.findOne('.dropdown-toggle', s.closest('.dropdown')).classList.add(
            'active'
          ),
          s.classList.add('active'))
        : (s.classList.add('active'),
          U.parents(s, '.nav, .list-group').forEach((t) => {
            U.prev(t, '.nav-link, .list-group-item').forEach((t) =>
              t.classList.add('active')
            ),
              U.prev(t, '.nav-item').forEach((t) => {
                U.children(t, '.nav-link').forEach((t) =>
                  t.classList.add('active')
                );
              });
          })),
        P.trigger(this._scrollElement, 'activate.bs.scrollspy', {
          relatedTarget: t,
        });
    }
    _clear() {
      U.find(this._selector)
        .filter((t) => t.classList.contains('active'))
        .forEach((t) => t.classList.remove('active'));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, 'bs.scrollspy');
        if (
          (e || (e = new Ht(this, 'object' == typeof t && t)),
          'string' == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, 'load.bs.scrollspy.data-api', () => {
    U.find('[data-bs-spy="scroll"]').forEach(
      (t) => new Ht(t, $.getDataAttributes(t))
    );
  }),
    v('scrollspy', Ht);
  class Rt extends M {
    static get DATA_KEY() {
      return 'bs.tab';
    }
    show() {
      if (
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          this._element.classList.contains('active')) ||
        g(this._element)
      )
        return;
      let t;
      const e = r(this._element),
        s = this._element.closest('.nav, .list-group');
      if (s) {
        const e =
          'UL' === s.nodeName || 'OL' === s.nodeName
            ? ':scope > li > .active'
            : '.active';
        (t = U.find(e, s)), (t = t[t.length - 1]);
      }
      const i = t
        ? P.trigger(t, 'hide.bs.tab', {relatedTarget: this._element})
        : null;
      if (
        P.trigger(this._element, 'show.bs.tab', {relatedTarget: t})
          .defaultPrevented ||
        (null !== i && i.defaultPrevented)
      )
        return;
      this._activate(this._element, s);
      const n = () => {
        P.trigger(t, 'hidden.bs.tab', {relatedTarget: this._element}),
          P.trigger(this._element, 'shown.bs.tab', {relatedTarget: t});
      };
      e ? this._activate(e, e.parentNode, n) : n();
    }
    _activate(t, e, s) {
      const i = (
          !e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
            ? U.children(e, '.active')
            : U.find(':scope > li > .active', e)
        )[0],
        n = s && i && i.classList.contains('fade'),
        o = () => this._transitionComplete(t, i, s);
      if (i && n) {
        const t = a(i);
        i.classList.remove('show'), P.one(i, 'transitionend', o), h(i, t);
      } else o();
    }
    _transitionComplete(t, e, s) {
      if (e) {
        e.classList.remove('active');
        const t = U.findOne(':scope > .dropdown-menu .active', e.parentNode);
        t && t.classList.remove('active'),
          'tab' === e.getAttribute('role') &&
            e.setAttribute('aria-selected', !1);
      }
      t.classList.add('active'),
        'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !0),
        m(t),
        t.classList.contains('fade') && t.classList.add('show'),
        t.parentNode &&
          t.parentNode.classList.contains('dropdown-menu') &&
          (t.closest('.dropdown') &&
            U.find('.dropdown-toggle').forEach((t) =>
              t.classList.add('active')
            ),
          t.setAttribute('aria-expanded', !0)),
        s && s();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = w.get(this, 'bs.tab') || new Rt(this);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(
    document,
    'click.bs.tab.data-api',
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      t.preventDefault(), (w.get(this, 'bs.tab') || new Rt(this)).show();
    }
  ),
    v('tab', Rt);
  const Bt = {animation: 'boolean', autohide: 'boolean', delay: 'number'},
    Wt = {animation: !0, autohide: !0, delay: 5e3};
  class $t extends M {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        this._setListeners();
    }
    static get DefaultType() {
      return Bt;
    }
    static get Default() {
      return Wt;
    }
    static get DATA_KEY() {
      return 'bs.toast';
    }
    show() {
      if (P.trigger(this._element, 'show.bs.toast').defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add('fade');
      const t = () => {
        this._element.classList.remove('showing'),
          this._element.classList.add('show'),
          P.trigger(this._element, 'shown.bs.toast'),
          this._config.autohide &&
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay));
      };
      if (
        (this._element.classList.remove('hide'),
        m(this._element),
        this._element.classList.add('showing'),
        this._config.animation)
      ) {
        const e = a(this._element);
        P.one(this._element, 'transitionend', t), h(this._element, e);
      } else t();
    }
    hide() {
      if (!this._element.classList.contains('show')) return;
      if (P.trigger(this._element, 'hide.bs.toast').defaultPrevented) return;
      const t = () => {
        this._element.classList.add('hide'),
          P.trigger(this._element, 'hidden.bs.toast');
      };
      if ((this._element.classList.remove('show'), this._config.animation)) {
        const e = a(this._element);
        P.one(this._element, 'transitionend', t), h(this._element, e);
      } else t();
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains('show') &&
          this._element.classList.remove('show'),
        P.off(this._element, 'click.dismiss.bs.toast'),
        super.dispose(),
        (this._config = null);
    }
    _getConfig(t) {
      return (
        (t = {
          ...Wt,
          ...$.getDataAttributes(this._element),
          ...('object' == typeof t && t ? t : {}),
        }),
        d('toast', t, this.constructor.DefaultType),
        t
      );
    }
    _setListeners() {
      P.on(
        this._element,
        'click.dismiss.bs.toast',
        '[data-bs-dismiss="toast"]',
        () => this.hide()
      );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        let e = w.get(this, 'bs.toast');
        if (
          (e || (e = new $t(this, 'object' == typeof t && t)),
          'string' == typeof t)
        ) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    v('toast', $t),
    {
      Alert: H,
      Button: R,
      Carousel: X,
      Collapse: Z,
      Dropdown: lt,
      Modal: dt,
      Offcanvas: _t,
      Popover: jt,
      ScrollSpy: Ht,
      Tab: Rt,
      Toast: $t,
      Tooltip: St,
    }
  );
});
//# sourceMappingURL=bootstrap.min.js.map
/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!(function (n) {
  'function' == typeof define && define.amd
    ? define(['jquery'], n)
    : 'object' == typeof module && module.exports
    ? (module.exports = function (e, t) {
        return (
          void 0 === t &&
            (t =
              'undefined' != typeof window
                ? require('jquery')
                : require('jquery')(e)),
          n(t),
          t
        );
      })
    : n(jQuery);
})(function (t) {
  var e,
    n,
    p,
    o,
    r,
    h,
    f,
    g,
    m,
    v,
    y,
    s,
    i,
    _,
    a,
    a =
      (t && t.fn && t.fn.select2 && t.fn.select2.amd && (u = t.fn.select2.amd),
      (u && u.requirejs) ||
        (u ? (n = u) : (u = {}),
        (g = {}),
        (m = {}),
        (v = {}),
        (y = {}),
        (s = Object.prototype.hasOwnProperty),
        (i = [].slice),
        (_ = /\.js$/),
        (h = function (e, t) {
          var n,
            s,
            i = c(e),
            o = i[0],
            t = t[1];
          return (
            (e = i[1]),
            o && (n = x((o = l(o, t)))),
            o
              ? (e =
                  n && n.normalize
                    ? n.normalize(
                        e,
                        ((s = t),
                        function (e) {
                          return l(e, s);
                        })
                      )
                    : l(e, t))
              : ((o = (i = c((e = l(e, t))))[0]), (e = i[1]), o && (n = x(o))),
            {f: o ? o + '!' + e : e, n: e, pr: o, p: n}
          );
        }),
        (f = {
          require: function (e) {
            return w(e);
          },
          exports: function (e) {
            var t = g[e];
            return void 0 !== t ? t : (g[e] = {});
          },
          module: function (e) {
            return {
              id: e,
              uri: '',
              exports: g[e],
              config:
                ((t = e),
                function () {
                  return (v && v.config && v.config[t]) || {};
                }),
            };
            var t;
          },
        }),
        (o = function (e, t, n, s) {
          var i,
            o,
            r,
            a,
            l,
            c = [],
            u = typeof n,
            d = A((s = s || e));
          if ('undefined' == u || 'function' == u) {
            for (
              t = !t.length && n.length ? ['require', 'exports', 'module'] : t,
                a = 0;
              a < t.length;
              a += 1
            )
              if ('require' === (o = (r = h(t[a], d)).f)) c[a] = f.require(e);
              else if ('exports' === o) (c[a] = f.exports(e)), (l = !0);
              else if ('module' === o) i = c[a] = f.module(e);
              else if (b(g, o) || b(m, o) || b(y, o)) c[a] = x(o);
              else {
                if (!r.p) throw new Error(e + ' missing ' + o);
                r.p.load(
                  r.n,
                  w(s, !0),
                  (function (t) {
                    return function (e) {
                      g[t] = e;
                    };
                  })(o),
                  {}
                ),
                  (c[a] = g[o]);
              }
            (u = n ? n.apply(g[e], c) : void 0),
              e &&
                (i && i.exports !== p && i.exports !== g[e]
                  ? (g[e] = i.exports)
                  : (u === p && l) || (g[e] = u));
          } else e && (g[e] = n);
        }),
        (e =
          n =
          r =
            function (e, t, n, s, i) {
              if ('string' == typeof e) return f[e] ? f[e](t) : x(h(e, A(t)).f);
              if (!e.splice) {
                if (((v = e).deps && r(v.deps, v.callback), !t)) return;
                t.splice ? ((e = t), (t = n), (n = null)) : (e = p);
              }
              return (
                (t = t || function () {}),
                'function' == typeof n && ((n = s), (s = i)),
                s
                  ? o(p, e, t, n)
                  : setTimeout(function () {
                      o(p, e, t, n);
                    }, 4),
                r
              );
            }),
        (r.config = function (e) {
          return r(e);
        }),
        (e._defined = g),
        ((a = function (e, t, n) {
          if ('string' != typeof e)
            throw new Error(
              'See almond README: incorrect module build, no module name'
            );
          t.splice || ((n = t), (t = [])),
            b(g, e) || b(m, e) || (m[e] = [e, t, n]);
        }).amd = {jQuery: !0}),
        (u.requirejs = e),
        (u.require = n),
        (u.define = a)),
      u.define('almond', function () {}),
      u.define('jquery', [], function () {
        var e = t || $;
        return (
          null == e &&
            console &&
            console.error &&
            console.error(
              'Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.'
            ),
          e
        );
      }),
      u.define('select2/utils', ['jquery'], function (o) {
        var s = {};
        function c(e) {
          var t,
            n = e.prototype,
            s = [];
          for (t in n)
            'function' == typeof n[t] && 'constructor' !== t && s.push(t);
          return s;
        }
        (s.Extend = function (e, t) {
          var n,
            s = {}.hasOwnProperty;
          function i() {
            this.constructor = e;
          }
          for (n in t) s.call(t, n) && (e[n] = t[n]);
          return (
            (i.prototype = t.prototype),
            (e.prototype = new i()),
            (e.__super__ = t.prototype),
            e
          );
        }),
          (s.Decorate = function (s, i) {
            var e = c(i),
              t = c(s);
            function o() {
              var e = Array.prototype.unshift,
                t = i.prototype.constructor.length,
                n = s.prototype.constructor;
              0 < t &&
                (e.call(arguments, s.prototype.constructor),
                (n = i.prototype.constructor)),
                n.apply(this, arguments);
            }
            (i.displayName = s.displayName),
              (o.prototype = new (function () {
                this.constructor = o;
              })());
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              o.prototype[r] = s.prototype[r];
            }
            for (var a = 0; a < e.length; a++) {
              var l = e[a];
              o.prototype[l] = (function (e) {
                var t = function () {};
                e in o.prototype && (t = o.prototype[e]);
                var n = i.prototype[e];
                return function () {
                  return (
                    Array.prototype.unshift.call(arguments, t),
                    n.apply(this, arguments)
                  );
                };
              })(l);
            }
            return o;
          });
        function e() {
          this.listeners = {};
        }
        (e.prototype.on = function (e, t) {
          (this.listeners = this.listeners || {}),
            e in this.listeners
              ? this.listeners[e].push(t)
              : (this.listeners[e] = [t]);
        }),
          (e.prototype.trigger = function (e) {
            var t = Array.prototype.slice,
              n = t.call(arguments, 1);
            (this.listeners = this.listeners || {}),
              null == n && (n = []),
              0 === n.length && n.push({}),
              (n[0]._type = e) in this.listeners &&
                this.invoke(this.listeners[e], t.call(arguments, 1)),
              '*' in this.listeners &&
                this.invoke(this.listeners['*'], arguments);
          }),
          (e.prototype.invoke = function (e, t) {
            for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t);
          }),
          (s.Observable = e),
          (s.generateChars = function (e) {
            for (var t = '', n = 0; n < e; n++)
              t += Math.floor(36 * Math.random()).toString(36);
            return t;
          }),
          (s.bind = function (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }),
          (s._convertData = function (e) {
            for (var t in e) {
              var n = t.split('-'),
                s = e;
              if (1 !== n.length) {
                for (var i = 0; i < n.length; i++) {
                  var o = n[i];
                  (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in s ||
                    (s[o] = {}),
                    i == n.length - 1 && (s[o] = e[t]),
                    (s = s[o]);
                }
                delete e[t];
              }
            }
            return e;
          }),
          (s.hasScroll = function (e, t) {
            var n = o(t),
              s = t.style.overflowX,
              i = t.style.overflowY;
            return (
              (s !== i || ('hidden' !== i && 'visible' !== i)) &&
              ('scroll' === s ||
                'scroll' === i ||
                n.innerHeight() < t.scrollHeight ||
                n.innerWidth() < t.scrollWidth)
            );
          }),
          (s.escapeMarkup = function (e) {
            var t = {
              '\\': '&#92;',
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
              '/': '&#47;',
            };
            return 'string' != typeof e
              ? e
              : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                  return t[e];
                });
          }),
          (s.__cache = {});
        var n = 0;
        return (
          (s.GetUniqueElementId = function (e) {
            var t = e.getAttribute('data-select2-id');
            return (
              null != t ||
                ((t = e.id
                  ? 'select2-data-' + e.id
                  : 'select2-data-' +
                    (++n).toString() +
                    '-' +
                    s.generateChars(4)),
                e.setAttribute('data-select2-id', t)),
              t
            );
          }),
          (s.StoreData = function (e, t, n) {
            e = s.GetUniqueElementId(e);
            s.__cache[e] || (s.__cache[e] = {}), (s.__cache[e][t] = n);
          }),
          (s.GetData = function (e, t) {
            var n = s.GetUniqueElementId(e);
            return t
              ? s.__cache[n] && null != s.__cache[n][t]
                ? s.__cache[n][t]
                : o(e).data(t)
              : s.__cache[n];
          }),
          (s.RemoveData = function (e) {
            var t = s.GetUniqueElementId(e);
            null != s.__cache[t] && delete s.__cache[t],
              e.removeAttribute('data-select2-id');
          }),
          (s.copyNonInternalCssClasses = function (e, t) {
            var n = (n = e.getAttribute('class').trim().split(/\s+/)).filter(
                function (e) {
                  return 0 === e.indexOf('select2-');
                }
              ),
              t = (t = t.getAttribute('class').trim().split(/\s+/)).filter(
                function (e) {
                  return 0 !== e.indexOf('select2-');
                }
              ),
              t = n.concat(t);
            e.setAttribute('class', t.join(' '));
          }),
          s
        );
      }),
      u.define('select2/results', ['jquery', './utils'], function (d, p) {
        function s(e, t, n) {
          (this.$element = e),
            (this.data = n),
            (this.options = t),
            s.__super__.constructor.call(this);
        }
        return (
          p.Extend(s, p.Observable),
          (s.prototype.render = function () {
            var e = d(
              '<ul class="select2-results__options" role="listbox"></ul>'
            );
            return (
              this.options.get('multiple') &&
                e.attr('aria-multiselectable', 'true'),
              (this.$results = e)
            );
          }),
          (s.prototype.clear = function () {
            this.$results.empty();
          }),
          (s.prototype.displayMessage = function (e) {
            var t = this.options.get('escapeMarkup');
            this.clear(), this.hideLoading();
            var n = d(
                '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
              ),
              s = this.options.get('translations').get(e.message);
            n.append(t(s(e.args))),
              (n[0].className += ' select2-results__message'),
              this.$results.append(n);
          }),
          (s.prototype.hideMessages = function () {
            this.$results.find('.select2-results__message').remove();
          }),
          (s.prototype.append = function (e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
              e.results = this.sort(e.results);
              for (var n = 0; n < e.results.length; n++) {
                var s = e.results[n],
                  s = this.option(s);
                t.push(s);
              }
              this.$results.append(t);
            } else
              0 === this.$results.children().length &&
                this.trigger('results:message', {message: 'noResults'});
          }),
          (s.prototype.position = function (e, t) {
            t.find('.select2-results').append(e);
          }),
          (s.prototype.sort = function (e) {
            return this.options.get('sorter')(e);
          }),
          (s.prototype.highlightFirstItem = function () {
            var e = this.$results.find('.select2-results__option--selectable'),
              t = e.filter('.select2-results__option--selected');
            (0 < t.length ? t : e).first().trigger('mouseenter'),
              this.ensureHighlightVisible();
          }),
          (s.prototype.setClasses = function () {
            var t = this;
            this.data.current(function (e) {
              var s = e.map(function (e) {
                return e.id.toString();
              });
              t.$results
                .find('.select2-results__option--selectable')
                .each(function () {
                  var e = d(this),
                    t = p.GetData(this, 'data'),
                    n = '' + t.id;
                  (null != t.element && t.element.selected) ||
                  (null == t.element && -1 < s.indexOf(n))
                    ? (this.classList.add('select2-results__option--selected'),
                      e.attr('aria-selected', 'true'))
                    : (this.classList.remove(
                        'select2-results__option--selected'
                      ),
                      e.attr('aria-selected', 'false'));
                });
            });
          }),
          (s.prototype.showLoading = function (e) {
            this.hideLoading();
            (e = {
              disabled: !0,
              loading: !0,
              text: this.options.get('translations').get('searching')(e),
            }),
              (e = this.option(e));
            (e.className += ' loading-results'), this.$results.prepend(e);
          }),
          (s.prototype.hideLoading = function () {
            this.$results.find('.loading-results').remove();
          }),
          (s.prototype.option = function (e) {
            var t = document.createElement('li');
            t.classList.add('select2-results__option'),
              t.classList.add('select2-results__option--selectable');
            var n,
              s = {role: 'option'},
              i =
                window.Element.prototype.matches ||
                window.Element.prototype.msMatchesSelector ||
                window.Element.prototype.webkitMatchesSelector;
            for (n in (((null != e.element && i.call(e.element, ':disabled')) ||
              (null == e.element && e.disabled)) &&
              ((s['aria-disabled'] = 'true'),
              t.classList.remove('select2-results__option--selectable'),
              t.classList.add('select2-results__option--disabled')),
            null == e.id &&
              t.classList.remove('select2-results__option--selectable'),
            null != e._resultId && (t.id = e._resultId),
            e.title && (t.title = e.title),
            e.children &&
              ((s.role = 'group'),
              (s['aria-label'] = e.text),
              t.classList.remove('select2-results__option--selectable'),
              t.classList.add('select2-results__option--group')),
            s)) {
              var o = s[n];
              t.setAttribute(n, o);
            }
            if (e.children) {
              var r = d(t),
                a = document.createElement('strong');
              (a.className = 'select2-results__group'), this.template(e, a);
              for (var l = [], c = 0; c < e.children.length; c++) {
                var u = e.children[c],
                  u = this.option(u);
                l.push(u);
              }
              i = d('<ul></ul>', {
                class:
                  'select2-results__options select2-results__options--nested',
                role: 'none',
              });
              i.append(l), r.append(a), r.append(i);
            } else this.template(e, t);
            return p.StoreData(t, 'data', e), t;
          }),
          (s.prototype.bind = function (t, e) {
            var i = this,
              n = t.id + '-results';
            this.$results.attr('id', n),
              t.on('results:all', function (e) {
                i.clear(),
                  i.append(e.data),
                  t.isOpen() && (i.setClasses(), i.highlightFirstItem());
              }),
              t.on('results:append', function (e) {
                i.append(e.data), t.isOpen() && i.setClasses();
              }),
              t.on('query', function (e) {
                i.hideMessages(), i.showLoading(e);
              }),
              t.on('select', function () {
                t.isOpen() &&
                  (i.setClasses(),
                  i.options.get('scrollAfterSelect') && i.highlightFirstItem());
              }),
              t.on('unselect', function () {
                t.isOpen() &&
                  (i.setClasses(),
                  i.options.get('scrollAfterSelect') && i.highlightFirstItem());
              }),
              t.on('open', function () {
                i.$results.attr('aria-expanded', 'true'),
                  i.$results.attr('aria-hidden', 'false'),
                  i.setClasses(),
                  i.ensureHighlightVisible();
              }),
              t.on('close', function () {
                i.$results.attr('aria-expanded', 'false'),
                  i.$results.attr('aria-hidden', 'true'),
                  i.$results.removeAttr('aria-activedescendant');
              }),
              t.on('results:toggle', function () {
                var e = i.getHighlightedResults();
                0 !== e.length && e.trigger('mouseup');
              }),
              t.on('results:select', function () {
                var e,
                  t = i.getHighlightedResults();
                0 !== t.length &&
                  ((e = p.GetData(t[0], 'data')),
                  t.hasClass('select2-results__option--selected')
                    ? i.trigger('close', {})
                    : i.trigger('select', {data: e}));
              }),
              t.on('results:previous', function () {
                var e,
                  t = i.getHighlightedResults(),
                  n = i.$results.find('.select2-results__option--selectable'),
                  s = n.index(t);
                s <= 0 ||
                  ((e = s - 1),
                  0 === t.length && (e = 0),
                  (s = n.eq(e)).trigger('mouseenter'),
                  (t = i.$results.offset().top),
                  (n = s.offset().top),
                  (s = i.$results.scrollTop() + (n - t)),
                  0 === e
                    ? i.$results.scrollTop(0)
                    : n - t < 0 && i.$results.scrollTop(s));
              }),
              t.on('results:next', function () {
                var e,
                  t = i.getHighlightedResults(),
                  n = i.$results.find('.select2-results__option--selectable'),
                  s = n.index(t) + 1;
                s >= n.length ||
                  ((e = n.eq(s)).trigger('mouseenter'),
                  (t = i.$results.offset().top + i.$results.outerHeight(!1)),
                  (n = e.offset().top + e.outerHeight(!1)),
                  (e = i.$results.scrollTop() + n - t),
                  0 === s
                    ? i.$results.scrollTop(0)
                    : t < n && i.$results.scrollTop(e));
              }),
              t.on('results:focus', function (e) {
                e.element[0].classList.add(
                  'select2-results__option--highlighted'
                ),
                  e.element[0].setAttribute('aria-selected', 'true');
              }),
              t.on('results:message', function (e) {
                i.displayMessage(e);
              }),
              d.fn.mousewheel &&
                this.$results.on('mousewheel', function (e) {
                  var t = i.$results.scrollTop(),
                    n = i.$results.get(0).scrollHeight - t + e.deltaY,
                    t = 0 < e.deltaY && t - e.deltaY <= 0,
                    n = e.deltaY < 0 && n <= i.$results.height();
                  t
                    ? (i.$results.scrollTop(0),
                      e.preventDefault(),
                      e.stopPropagation())
                    : n &&
                      (i.$results.scrollTop(
                        i.$results.get(0).scrollHeight - i.$results.height()
                      ),
                      e.preventDefault(),
                      e.stopPropagation());
                }),
              this.$results.on(
                'mouseup',
                '.select2-results__option--selectable',
                function (e) {
                  var t = d(this),
                    n = p.GetData(this, 'data');
                  t.hasClass('select2-results__option--selected')
                    ? i.options.get('multiple')
                      ? i.trigger('unselect', {originalEvent: e, data: n})
                      : i.trigger('close', {})
                    : i.trigger('select', {originalEvent: e, data: n});
                }
              ),
              this.$results.on(
                'mouseenter',
                '.select2-results__option--selectable',
                function (e) {
                  var t = p.GetData(this, 'data');
                  i
                    .getHighlightedResults()
                    .removeClass('select2-results__option--highlighted')
                    .attr('aria-selected', 'false'),
                    i.trigger('results:focus', {data: t, element: d(this)});
                }
              );
          }),
          (s.prototype.getHighlightedResults = function () {
            return this.$results.find('.select2-results__option--highlighted');
          }),
          (s.prototype.destroy = function () {
            this.$results.remove();
          }),
          (s.prototype.ensureHighlightVisible = function () {
            var e,
              t,
              n,
              s,
              i = this.getHighlightedResults();
            0 !== i.length &&
              ((e = this.$results
                .find('.select2-results__option--selectable')
                .index(i)),
              (s = this.$results.offset().top),
              (t = i.offset().top),
              (n = this.$results.scrollTop() + (t - s)),
              (s = t - s),
              (n -= 2 * i.outerHeight(!1)),
              e <= 2
                ? this.$results.scrollTop(0)
                : (s > this.$results.outerHeight() || s < 0) &&
                  this.$results.scrollTop(n));
          }),
          (s.prototype.template = function (e, t) {
            var n = this.options.get('templateResult'),
              s = this.options.get('escapeMarkup'),
              e = n(e, t);
            null == e
              ? (t.style.display = 'none')
              : 'string' == typeof e
              ? (t.innerHTML = s(e))
              : d(t).append(e);
          }),
          s
        );
      }),
      u.define('select2/keys', [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46,
        };
      }),
      u.define(
        'select2/selection/base',
        ['jquery', '../utils', '../keys'],
        function (n, s, i) {
          function o(e, t) {
            (this.$element = e),
              (this.options = t),
              o.__super__.constructor.call(this);
          }
          return (
            s.Extend(o, s.Observable),
            (o.prototype.render = function () {
              var e = n(
                '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
              );
              return (
                (this._tabindex = 0),
                null != s.GetData(this.$element[0], 'old-tabindex')
                  ? (this._tabindex = s.GetData(
                      this.$element[0],
                      'old-tabindex'
                    ))
                  : null != this.$element.attr('tabindex') &&
                    (this._tabindex = this.$element.attr('tabindex')),
                e.attr('title', this.$element.attr('title')),
                e.attr('tabindex', this._tabindex),
                e.attr('aria-disabled', 'false'),
                (this.$selection = e)
              );
            }),
            (o.prototype.bind = function (e, t) {
              var n = this,
                s = e.id + '-results';
              (this.container = e),
                this.$selection.on('focus', function (e) {
                  n.trigger('focus', e);
                }),
                this.$selection.on('blur', function (e) {
                  n._handleBlur(e);
                }),
                this.$selection.on('keydown', function (e) {
                  n.trigger('keypress', e),
                    e.which === i.SPACE && e.preventDefault();
                }),
                e.on('results:focus', function (e) {
                  n.$selection.attr('aria-activedescendant', e.data._resultId);
                }),
                e.on('selection:update', function (e) {
                  n.update(e.data);
                }),
                e.on('open', function () {
                  n.$selection.attr('aria-expanded', 'true'),
                    n.$selection.attr('aria-owns', s),
                    n._attachCloseHandler(e);
                }),
                e.on('close', function () {
                  n.$selection.attr('aria-expanded', 'false'),
                    n.$selection.removeAttr('aria-activedescendant'),
                    n.$selection.removeAttr('aria-owns'),
                    n.$selection.trigger('focus'),
                    n._detachCloseHandler(e);
                }),
                e.on('enable', function () {
                  n.$selection.attr('tabindex', n._tabindex),
                    n.$selection.attr('aria-disabled', 'false');
                }),
                e.on('disable', function () {
                  n.$selection.attr('tabindex', '-1'),
                    n.$selection.attr('aria-disabled', 'true');
                });
            }),
            (o.prototype._handleBlur = function (e) {
              var t = this;
              window.setTimeout(function () {
                document.activeElement == t.$selection[0] ||
                  n.contains(t.$selection[0], document.activeElement) ||
                  t.trigger('blur', e);
              }, 1);
            }),
            (o.prototype._attachCloseHandler = function (e) {
              n(document.body).on('mousedown.select2.' + e.id, function (e) {
                var t = n(e.target).closest('.select2');
                n('.select2.select2-container--open').each(function () {
                  this != t[0] && s.GetData(this, 'element').select2('close');
                });
              });
            }),
            (o.prototype._detachCloseHandler = function (e) {
              n(document.body).off('mousedown.select2.' + e.id);
            }),
            (o.prototype.position = function (e, t) {
              t.find('.selection').append(e);
            }),
            (o.prototype.destroy = function () {
              this._detachCloseHandler(this.container);
            }),
            (o.prototype.update = function (e) {
              throw new Error(
                'The `update` method must be defined in child classes.'
              );
            }),
            (o.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (o.prototype.isDisabled = function () {
              return this.options.get('disabled');
            }),
            o
          );
        }
      ),
      u.define(
        'select2/selection/single',
        ['jquery', './base', '../utils', '../keys'],
        function (e, t, n, s) {
          function i() {
            i.__super__.constructor.apply(this, arguments);
          }
          return (
            n.Extend(i, t),
            (i.prototype.render = function () {
              var e = i.__super__.render.call(this);
              return (
                e[0].classList.add('select2-selection--single'),
                e.html(
                  '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                ),
                e
              );
            }),
            (i.prototype.bind = function (t, e) {
              var n = this;
              i.__super__.bind.apply(this, arguments);
              var s = t.id + '-container';
              this.$selection
                .find('.select2-selection__rendered')
                .attr('id', s)
                .attr('role', 'textbox')
                .attr('aria-readonly', 'true'),
                this.$selection.attr('aria-labelledby', s),
                this.$selection.attr('aria-controls', s),
                this.$selection.on('mousedown', function (e) {
                  1 === e.which && n.trigger('toggle', {originalEvent: e});
                }),
                this.$selection.on('focus', function (e) {}),
                this.$selection.on('blur', function (e) {}),
                t.on('focus', function (e) {
                  t.isOpen() || n.$selection.trigger('focus');
                });
            }),
            (i.prototype.clear = function () {
              var e = this.$selection.find('.select2-selection__rendered');
              e.empty(), e.removeAttr('title');
            }),
            (i.prototype.display = function (e, t) {
              var n = this.options.get('templateSelection');
              return this.options.get('escapeMarkup')(n(e, t));
            }),
            (i.prototype.selectionContainer = function () {
              return e('<span></span>');
            }),
            (i.prototype.update = function (e) {
              var t, n;
              0 !== e.length
                ? ((n = e[0]),
                  (t = this.$selection.find('.select2-selection__rendered')),
                  (e = this.display(n, t)),
                  t.empty().append(e),
                  (n = n.title || n.text)
                    ? t.attr('title', n)
                    : t.removeAttr('title'))
                : this.clear();
            }),
            i
          );
        }
      ),
      u.define(
        'select2/selection/multiple',
        ['jquery', './base', '../utils'],
        function (i, e, c) {
          function o(e, t) {
            o.__super__.constructor.apply(this, arguments);
          }
          return (
            c.Extend(o, e),
            (o.prototype.render = function () {
              var e = o.__super__.render.call(this);
              return (
                e[0].classList.add('select2-selection--multiple'),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
              );
            }),
            (o.prototype.bind = function (e, t) {
              var n = this;
              o.__super__.bind.apply(this, arguments);
              var s = e.id + '-container';
              this.$selection
                .find('.select2-selection__rendered')
                .attr('id', s),
                this.$selection.on('click', function (e) {
                  n.trigger('toggle', {originalEvent: e});
                }),
                this.$selection.on(
                  'click',
                  '.select2-selection__choice__remove',
                  function (e) {
                    var t;
                    n.isDisabled() ||
                      ((t = i(this).parent()),
                      (t = c.GetData(t[0], 'data')),
                      n.trigger('unselect', {originalEvent: e, data: t}));
                  }
                ),
                this.$selection.on(
                  'keydown',
                  '.select2-selection__choice__remove',
                  function (e) {
                    n.isDisabled() || e.stopPropagation();
                  }
                );
            }),
            (o.prototype.clear = function () {
              var e = this.$selection.find('.select2-selection__rendered');
              e.empty(), e.removeAttr('title');
            }),
            (o.prototype.display = function (e, t) {
              var n = this.options.get('templateSelection');
              return this.options.get('escapeMarkup')(n(e, t));
            }),
            (o.prototype.selectionContainer = function () {
              return i(
                '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
              );
            }),
            (o.prototype.update = function (e) {
              if ((this.clear(), 0 !== e.length)) {
                for (
                  var t = [],
                    n =
                      this.$selection
                        .find('.select2-selection__rendered')
                        .attr('id') + '-choice-',
                    s = 0;
                  s < e.length;
                  s++
                ) {
                  var i = e[s],
                    o = this.selectionContainer(),
                    r = this.display(i, o),
                    a = n + c.generateChars(4) + '-';
                  i.id ? (a += i.id) : (a += c.generateChars(4)),
                    o
                      .find('.select2-selection__choice__display')
                      .append(r)
                      .attr('id', a);
                  var l = i.title || i.text;
                  l && o.attr('title', l);
                  (r = this.options.get('translations').get('removeItem')),
                    (l = o.find('.select2-selection__choice__remove'));
                  l.attr('title', r()),
                    l.attr('aria-label', r()),
                    l.attr('aria-describedby', a),
                    c.StoreData(o[0], 'data', i),
                    t.push(o);
                }
                this.$selection.find('.select2-selection__rendered').append(t);
              }
            }),
            o
          );
        }
      ),
      u.define('select2/selection/placeholder', [], function () {
        function e(e, t, n) {
          (this.placeholder = this.normalizePlaceholder(n.get('placeholder'))),
            e.call(this, t, n);
        }
        return (
          (e.prototype.normalizePlaceholder = function (e, t) {
            return 'string' == typeof t && (t = {id: '', text: t}), t;
          }),
          (e.prototype.createPlaceholder = function (e, t) {
            var n = this.selectionContainer();
            n.html(this.display(t)),
              n[0].classList.add('select2-selection__placeholder'),
              n[0].classList.remove('select2-selection__choice');
            t = t.title || t.text || n.text();
            return (
              this.$selection
                .find('.select2-selection__rendered')
                .attr('title', t),
              n
            );
          }),
          (e.prototype.update = function (e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || n) return e.call(this, t);
            this.clear();
            t = this.createPlaceholder(this.placeholder);
            this.$selection.find('.select2-selection__rendered').append(t);
          }),
          e
        );
      }),
      u.define(
        'select2/selection/allowClear',
        ['jquery', '../keys', '../utils'],
        function (i, s, a) {
          function e() {}
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                null == this.placeholder &&
                  this.options.get('debug') &&
                  window.console &&
                  console.error &&
                  console.error(
                    'Select2: The `allowClear` option should be used in combination with the `placeholder` option.'
                  ),
                this.$selection.on(
                  'mousedown',
                  '.select2-selection__clear',
                  function (e) {
                    s._handleClear(e);
                  }
                ),
                t.on('keypress', function (e) {
                  s._handleKeyboardClear(e, t);
                });
            }),
            (e.prototype._handleClear = function (e, t) {
              if (!this.isDisabled()) {
                var n = this.$selection.find('.select2-selection__clear');
                if (0 !== n.length) {
                  t.stopPropagation();
                  var s = a.GetData(n[0], 'data'),
                    i = this.$element.val();
                  this.$element.val(this.placeholder.id);
                  var o = {data: s};
                  if ((this.trigger('clear', o), o.prevented))
                    this.$element.val(i);
                  else {
                    for (var r = 0; r < s.length; r++)
                      if (
                        ((o = {data: s[r]}),
                        this.trigger('unselect', o),
                        o.prevented)
                      )
                        return void this.$element.val(i);
                    this.$element.trigger('input').trigger('change'),
                      this.trigger('toggle', {});
                  }
                }
              }
            }),
            (e.prototype._handleKeyboardClear = function (e, t, n) {
              n.isOpen() ||
                (t.which != s.DELETE && t.which != s.BACKSPACE) ||
                this._handleClear(t);
            }),
            (e.prototype.update = function (e, t) {
              var n, s;
              e.call(this, t),
                this.$selection.find('.select2-selection__clear').remove(),
                this.$selection[0].classList.remove(
                  'select2-selection--clearable'
                ),
                0 <
                  this.$selection.find('.select2-selection__placeholder')
                    .length ||
                  0 === t.length ||
                  ((n = this.$selection
                    .find('.select2-selection__rendered')
                    .attr('id')),
                  (s = this.options.get('translations').get('removeAllItems')),
                  (e = i(
                    '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                  )).attr('title', s()),
                  e.attr('aria-label', s()),
                  e.attr('aria-describedby', n),
                  a.StoreData(e[0], 'data', t),
                  this.$selection.prepend(e),
                  this.$selection[0].classList.add(
                    'select2-selection--clearable'
                  ));
            }),
            e
          );
        }
      ),
      u.define(
        'select2/selection/search',
        ['jquery', '../utils', '../keys'],
        function (s, a, l) {
          function e(e, t, n) {
            e.call(this, t, n);
          }
          return (
            (e.prototype.render = function (e) {
              var t = this.options.get('translations').get('search'),
                n = s(
                  '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                );
              (this.$searchContainer = n),
                (this.$search = n.find('textarea')),
                this.$search.prop(
                  'autocomplete',
                  this.options.get('autocomplete')
                ),
                this.$search.attr('aria-label', t());
              e = e.call(this);
              return (
                this._transferTabIndex(), e.append(this.$searchContainer), e
              );
            }),
            (e.prototype.bind = function (e, t, n) {
              var s = this,
                i = t.id + '-results',
                o = t.id + '-container';
              e.call(this, t, n),
                s.$search.attr('aria-describedby', o),
                t.on('open', function () {
                  s.$search.attr('aria-controls', i),
                    s.$search.trigger('focus');
                }),
                t.on('close', function () {
                  s.$search.val(''),
                    s.resizeSearch(),
                    s.$search.removeAttr('aria-controls'),
                    s.$search.removeAttr('aria-activedescendant'),
                    s.$search.trigger('focus');
                }),
                t.on('enable', function () {
                  s.$search.prop('disabled', !1), s._transferTabIndex();
                }),
                t.on('disable', function () {
                  s.$search.prop('disabled', !0);
                }),
                t.on('focus', function (e) {
                  s.$search.trigger('focus');
                }),
                t.on('results:focus', function (e) {
                  e.data._resultId
                    ? s.$search.attr('aria-activedescendant', e.data._resultId)
                    : s.$search.removeAttr('aria-activedescendant');
                }),
                this.$selection.on(
                  'focusin',
                  '.select2-search--inline',
                  function (e) {
                    s.trigger('focus', e);
                  }
                ),
                this.$selection.on(
                  'focusout',
                  '.select2-search--inline',
                  function (e) {
                    s._handleBlur(e);
                  }
                ),
                this.$selection.on(
                  'keydown',
                  '.select2-search--inline',
                  function (e) {
                    var t;
                    e.stopPropagation(),
                      s.trigger('keypress', e),
                      (s._keyUpPrevented = e.isDefaultPrevented()),
                      e.which !== l.BACKSPACE ||
                        '' !== s.$search.val() ||
                        (0 <
                          (t = s.$selection
                            .find('.select2-selection__choice')
                            .last()).length &&
                          ((t = a.GetData(t[0], 'data')),
                          s.searchRemoveChoice(t),
                          e.preventDefault()));
                  }
                ),
                this.$selection.on(
                  'click',
                  '.select2-search--inline',
                  function (e) {
                    s.$search.val() && e.stopPropagation();
                  }
                );
              var t = document.documentMode,
                r = t && t <= 11;
              this.$selection.on(
                'input.searchcheck',
                '.select2-search--inline',
                function (e) {
                  r
                    ? s.$selection.off('input.search input.searchcheck')
                    : s.$selection.off('keyup.search');
                }
              ),
                this.$selection.on(
                  'keyup.search input.search',
                  '.select2-search--inline',
                  function (e) {
                    var t;
                    r && 'input' === e.type
                      ? s.$selection.off('input.search input.searchcheck')
                      : (t = e.which) != l.SHIFT &&
                        t != l.CTRL &&
                        t != l.ALT &&
                        t != l.TAB &&
                        s.handleSearch(e);
                  }
                );
            }),
            (e.prototype._transferTabIndex = function (e) {
              this.$search.attr('tabindex', this.$selection.attr('tabindex')),
                this.$selection.attr('tabindex', '-1');
            }),
            (e.prototype.createPlaceholder = function (e, t) {
              this.$search.attr('placeholder', t.text);
            }),
            (e.prototype.update = function (e, t) {
              var n = this.$search[0] == document.activeElement;
              this.$search.attr('placeholder', ''),
                e.call(this, t),
                this.resizeSearch(),
                n && this.$search.trigger('focus');
            }),
            (e.prototype.handleSearch = function () {
              var e;
              this.resizeSearch(),
                this._keyUpPrevented ||
                  ((e = this.$search.val()), this.trigger('query', {term: e})),
                (this._keyUpPrevented = !1);
            }),
            (e.prototype.searchRemoveChoice = function (e, t) {
              this.trigger('unselect', {data: t}),
                this.$search.val(t.text),
                this.handleSearch();
            }),
            (e.prototype.resizeSearch = function () {
              this.$search.css('width', '25px');
              var e = '100%';
              '' === this.$search.attr('placeholder') &&
                (e = 0.75 * (this.$search.val().length + 1) + 'em'),
                this.$search.css('width', e);
            }),
            e
          );
        }
      ),
      u.define('select2/selection/selectionCss', ['../utils'], function (n) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              e = this.options.get('selectionCssClass') || '';
            return (
              -1 !== e.indexOf(':all:') &&
                ((e = e.replace(':all:', '')),
                n.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(e),
              t
            );
          }),
          e
        );
      }),
      u.define('select2/selection/eventRelay', ['jquery'], function (r) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this,
              i = [
                'open',
                'opening',
                'close',
                'closing',
                'select',
                'selecting',
                'unselect',
                'unselecting',
                'clear',
                'clearing',
              ],
              o = [
                'opening',
                'closing',
                'selecting',
                'unselecting',
                'clearing',
              ];
            e.call(this, t, n),
              t.on('*', function (e, t) {
                var n;
                -1 !== i.indexOf(e) &&
                  ((t = t || {}),
                  (n = r.Event('select2:' + e, {params: t})),
                  s.$element.trigger(n),
                  -1 !== o.indexOf(e) &&
                    (t.prevented = n.isDefaultPrevented()));
              });
          }),
          e
        );
      }),
      u.define('select2/translation', ['jquery', 'require'], function (t, n) {
        function s(e) {
          this.dict = e || {};
        }
        return (
          (s.prototype.all = function () {
            return this.dict;
          }),
          (s.prototype.get = function (e) {
            return this.dict[e];
          }),
          (s.prototype.extend = function (e) {
            this.dict = t.extend({}, e.all(), this.dict);
          }),
          (s._cache = {}),
          (s.loadPath = function (e) {
            var t;
            return (
              e in s._cache || ((t = n(e)), (s._cache[e] = t)),
              new s(s._cache[e])
            );
          }),
          s
        );
      }),
      u.define('select2/diacritics', [], function () {
        return {
          'Ⓐ': 'A',
          Ａ: 'A',
          À: 'A',
          Á: 'A',
          Â: 'A',
          Ầ: 'A',
          Ấ: 'A',
          Ẫ: 'A',
          Ẩ: 'A',
          Ã: 'A',
          Ā: 'A',
          Ă: 'A',
          Ằ: 'A',
          Ắ: 'A',
          Ẵ: 'A',
          Ẳ: 'A',
          Ȧ: 'A',
          Ǡ: 'A',
          Ä: 'A',
          Ǟ: 'A',
          Ả: 'A',
          Å: 'A',
          Ǻ: 'A',
          Ǎ: 'A',
          Ȁ: 'A',
          Ȃ: 'A',
          Ạ: 'A',
          Ậ: 'A',
          Ặ: 'A',
          Ḁ: 'A',
          Ą: 'A',
          Ⱥ: 'A',
          Ɐ: 'A',
          Ꜳ: 'AA',
          Æ: 'AE',
          Ǽ: 'AE',
          Ǣ: 'AE',
          Ꜵ: 'AO',
          Ꜷ: 'AU',
          Ꜹ: 'AV',
          Ꜻ: 'AV',
          Ꜽ: 'AY',
          'Ⓑ': 'B',
          Ｂ: 'B',
          Ḃ: 'B',
          Ḅ: 'B',
          Ḇ: 'B',
          Ƀ: 'B',
          Ƃ: 'B',
          Ɓ: 'B',
          'Ⓒ': 'C',
          Ｃ: 'C',
          Ć: 'C',
          Ĉ: 'C',
          Ċ: 'C',
          Č: 'C',
          Ç: 'C',
          Ḉ: 'C',
          Ƈ: 'C',
          Ȼ: 'C',
          Ꜿ: 'C',
          'Ⓓ': 'D',
          Ｄ: 'D',
          Ḋ: 'D',
          Ď: 'D',
          Ḍ: 'D',
          Ḑ: 'D',
          Ḓ: 'D',
          Ḏ: 'D',
          Đ: 'D',
          Ƌ: 'D',
          Ɗ: 'D',
          Ɖ: 'D',
          Ꝺ: 'D',
          Ǳ: 'DZ',
          Ǆ: 'DZ',
          ǲ: 'Dz',
          ǅ: 'Dz',
          'Ⓔ': 'E',
          Ｅ: 'E',
          È: 'E',
          É: 'E',
          Ê: 'E',
          Ề: 'E',
          Ế: 'E',
          Ễ: 'E',
          Ể: 'E',
          Ẽ: 'E',
          Ē: 'E',
          Ḕ: 'E',
          Ḗ: 'E',
          Ĕ: 'E',
          Ė: 'E',
          Ë: 'E',
          Ẻ: 'E',
          Ě: 'E',
          Ȅ: 'E',
          Ȇ: 'E',
          Ẹ: 'E',
          Ệ: 'E',
          Ȩ: 'E',
          Ḝ: 'E',
          Ę: 'E',
          Ḙ: 'E',
          Ḛ: 'E',
          Ɛ: 'E',
          Ǝ: 'E',
          'Ⓕ': 'F',
          Ｆ: 'F',
          Ḟ: 'F',
          Ƒ: 'F',
          Ꝼ: 'F',
          'Ⓖ': 'G',
          Ｇ: 'G',
          Ǵ: 'G',
          Ĝ: 'G',
          Ḡ: 'G',
          Ğ: 'G',
          Ġ: 'G',
          Ǧ: 'G',
          Ģ: 'G',
          Ǥ: 'G',
          Ɠ: 'G',
          Ꞡ: 'G',
          Ᵹ: 'G',
          Ꝿ: 'G',
          'Ⓗ': 'H',
          Ｈ: 'H',
          Ĥ: 'H',
          Ḣ: 'H',
          Ḧ: 'H',
          Ȟ: 'H',
          Ḥ: 'H',
          Ḩ: 'H',
          Ḫ: 'H',
          Ħ: 'H',
          Ⱨ: 'H',
          Ⱶ: 'H',
          Ɥ: 'H',
          'Ⓘ': 'I',
          Ｉ: 'I',
          Ì: 'I',
          Í: 'I',
          Î: 'I',
          Ĩ: 'I',
          Ī: 'I',
          Ĭ: 'I',
          İ: 'I',
          Ï: 'I',
          Ḯ: 'I',
          Ỉ: 'I',
          Ǐ: 'I',
          Ȉ: 'I',
          Ȋ: 'I',
          Ị: 'I',
          Į: 'I',
          Ḭ: 'I',
          Ɨ: 'I',
          'Ⓙ': 'J',
          Ｊ: 'J',
          Ĵ: 'J',
          Ɉ: 'J',
          'Ⓚ': 'K',
          Ｋ: 'K',
          Ḱ: 'K',
          Ǩ: 'K',
          Ḳ: 'K',
          Ķ: 'K',
          Ḵ: 'K',
          Ƙ: 'K',
          Ⱪ: 'K',
          Ꝁ: 'K',
          Ꝃ: 'K',
          Ꝅ: 'K',
          Ꞣ: 'K',
          'Ⓛ': 'L',
          Ｌ: 'L',
          Ŀ: 'L',
          Ĺ: 'L',
          Ľ: 'L',
          Ḷ: 'L',
          Ḹ: 'L',
          Ļ: 'L',
          Ḽ: 'L',
          Ḻ: 'L',
          Ł: 'L',
          Ƚ: 'L',
          Ɫ: 'L',
          Ⱡ: 'L',
          Ꝉ: 'L',
          Ꝇ: 'L',
          Ꞁ: 'L',
          Ǉ: 'LJ',
          ǈ: 'Lj',
          'Ⓜ': 'M',
          Ｍ: 'M',
          Ḿ: 'M',
          Ṁ: 'M',
          Ṃ: 'M',
          Ɱ: 'M',
          Ɯ: 'M',
          'Ⓝ': 'N',
          Ｎ: 'N',
          Ǹ: 'N',
          Ń: 'N',
          Ñ: 'N',
          Ṅ: 'N',
          Ň: 'N',
          Ṇ: 'N',
          Ņ: 'N',
          Ṋ: 'N',
          Ṉ: 'N',
          Ƞ: 'N',
          Ɲ: 'N',
          Ꞑ: 'N',
          Ꞥ: 'N',
          Ǌ: 'NJ',
          ǋ: 'Nj',
          'Ⓞ': 'O',
          Ｏ: 'O',
          Ò: 'O',
          Ó: 'O',
          Ô: 'O',
          Ồ: 'O',
          Ố: 'O',
          Ỗ: 'O',
          Ổ: 'O',
          Õ: 'O',
          Ṍ: 'O',
          Ȭ: 'O',
          Ṏ: 'O',
          Ō: 'O',
          Ṑ: 'O',
          Ṓ: 'O',
          Ŏ: 'O',
          Ȯ: 'O',
          Ȱ: 'O',
          Ö: 'O',
          Ȫ: 'O',
          Ỏ: 'O',
          Ő: 'O',
          Ǒ: 'O',
          Ȍ: 'O',
          Ȏ: 'O',
          Ơ: 'O',
          Ờ: 'O',
          Ớ: 'O',
          Ỡ: 'O',
          Ở: 'O',
          Ợ: 'O',
          Ọ: 'O',
          Ộ: 'O',
          Ǫ: 'O',
          Ǭ: 'O',
          Ø: 'O',
          Ǿ: 'O',
          Ɔ: 'O',
          Ɵ: 'O',
          Ꝋ: 'O',
          Ꝍ: 'O',
          Œ: 'OE',
          Ƣ: 'OI',
          Ꝏ: 'OO',
          Ȣ: 'OU',
          'Ⓟ': 'P',
          Ｐ: 'P',
          Ṕ: 'P',
          Ṗ: 'P',
          Ƥ: 'P',
          Ᵽ: 'P',
          Ꝑ: 'P',
          Ꝓ: 'P',
          Ꝕ: 'P',
          'Ⓠ': 'Q',
          Ｑ: 'Q',
          Ꝗ: 'Q',
          Ꝙ: 'Q',
          Ɋ: 'Q',
          'Ⓡ': 'R',
          Ｒ: 'R',
          Ŕ: 'R',
          Ṙ: 'R',
          Ř: 'R',
          Ȑ: 'R',
          Ȓ: 'R',
          Ṛ: 'R',
          Ṝ: 'R',
          Ŗ: 'R',
          Ṟ: 'R',
          Ɍ: 'R',
          Ɽ: 'R',
          Ꝛ: 'R',
          Ꞧ: 'R',
          Ꞃ: 'R',
          'Ⓢ': 'S',
          Ｓ: 'S',
          ẞ: 'S',
          Ś: 'S',
          Ṥ: 'S',
          Ŝ: 'S',
          Ṡ: 'S',
          Š: 'S',
          Ṧ: 'S',
          Ṣ: 'S',
          Ṩ: 'S',
          Ș: 'S',
          Ş: 'S',
          Ȿ: 'S',
          Ꞩ: 'S',
          Ꞅ: 'S',
          'Ⓣ': 'T',
          Ｔ: 'T',
          Ṫ: 'T',
          Ť: 'T',
          Ṭ: 'T',
          Ț: 'T',
          Ţ: 'T',
          Ṱ: 'T',
          Ṯ: 'T',
          Ŧ: 'T',
          Ƭ: 'T',
          Ʈ: 'T',
          Ⱦ: 'T',
          Ꞇ: 'T',
          Ꜩ: 'TZ',
          'Ⓤ': 'U',
          Ｕ: 'U',
          Ù: 'U',
          Ú: 'U',
          Û: 'U',
          Ũ: 'U',
          Ṹ: 'U',
          Ū: 'U',
          Ṻ: 'U',
          Ŭ: 'U',
          Ü: 'U',
          Ǜ: 'U',
          Ǘ: 'U',
          Ǖ: 'U',
          Ǚ: 'U',
          Ủ: 'U',
          Ů: 'U',
          Ű: 'U',
          Ǔ: 'U',
          Ȕ: 'U',
          Ȗ: 'U',
          Ư: 'U',
          Ừ: 'U',
          Ứ: 'U',
          Ữ: 'U',
          Ử: 'U',
          Ự: 'U',
          Ụ: 'U',
          Ṳ: 'U',
          Ų: 'U',
          Ṷ: 'U',
          Ṵ: 'U',
          Ʉ: 'U',
          'Ⓥ': 'V',
          Ｖ: 'V',
          Ṽ: 'V',
          Ṿ: 'V',
          Ʋ: 'V',
          Ꝟ: 'V',
          Ʌ: 'V',
          Ꝡ: 'VY',
          'Ⓦ': 'W',
          Ｗ: 'W',
          Ẁ: 'W',
          Ẃ: 'W',
          Ŵ: 'W',
          Ẇ: 'W',
          Ẅ: 'W',
          Ẉ: 'W',
          Ⱳ: 'W',
          'Ⓧ': 'X',
          Ｘ: 'X',
          Ẋ: 'X',
          Ẍ: 'X',
          'Ⓨ': 'Y',
          Ｙ: 'Y',
          Ỳ: 'Y',
          Ý: 'Y',
          Ŷ: 'Y',
          Ỹ: 'Y',
          Ȳ: 'Y',
          Ẏ: 'Y',
          Ÿ: 'Y',
          Ỷ: 'Y',
          Ỵ: 'Y',
          Ƴ: 'Y',
          Ɏ: 'Y',
          Ỿ: 'Y',
          'Ⓩ': 'Z',
          Ｚ: 'Z',
          Ź: 'Z',
          Ẑ: 'Z',
          Ż: 'Z',
          Ž: 'Z',
          Ẓ: 'Z',
          Ẕ: 'Z',
          Ƶ: 'Z',
          Ȥ: 'Z',
          Ɀ: 'Z',
          Ⱬ: 'Z',
          Ꝣ: 'Z',
          'ⓐ': 'a',
          ａ: 'a',
          ẚ: 'a',
          à: 'a',
          á: 'a',
          â: 'a',
          ầ: 'a',
          ấ: 'a',
          ẫ: 'a',
          ẩ: 'a',
          ã: 'a',
          ā: 'a',
          ă: 'a',
          ằ: 'a',
          ắ: 'a',
          ẵ: 'a',
          ẳ: 'a',
          ȧ: 'a',
          ǡ: 'a',
          ä: 'a',
          ǟ: 'a',
          ả: 'a',
          å: 'a',
          ǻ: 'a',
          ǎ: 'a',
          ȁ: 'a',
          ȃ: 'a',
          ạ: 'a',
          ậ: 'a',
          ặ: 'a',
          ḁ: 'a',
          ą: 'a',
          ⱥ: 'a',
          ɐ: 'a',
          ꜳ: 'aa',
          æ: 'ae',
          ǽ: 'ae',
          ǣ: 'ae',
          ꜵ: 'ao',
          ꜷ: 'au',
          ꜹ: 'av',
          ꜻ: 'av',
          ꜽ: 'ay',
          'ⓑ': 'b',
          ｂ: 'b',
          ḃ: 'b',
          ḅ: 'b',
          ḇ: 'b',
          ƀ: 'b',
          ƃ: 'b',
          ɓ: 'b',
          'ⓒ': 'c',
          ｃ: 'c',
          ć: 'c',
          ĉ: 'c',
          ċ: 'c',
          č: 'c',
          ç: 'c',
          ḉ: 'c',
          ƈ: 'c',
          ȼ: 'c',
          ꜿ: 'c',
          ↄ: 'c',
          'ⓓ': 'd',
          ｄ: 'd',
          ḋ: 'd',
          ď: 'd',
          ḍ: 'd',
          ḑ: 'd',
          ḓ: 'd',
          ḏ: 'd',
          đ: 'd',
          ƌ: 'd',
          ɖ: 'd',
          ɗ: 'd',
          ꝺ: 'd',
          ǳ: 'dz',
          ǆ: 'dz',
          'ⓔ': 'e',
          ｅ: 'e',
          è: 'e',
          é: 'e',
          ê: 'e',
          ề: 'e',
          ế: 'e',
          ễ: 'e',
          ể: 'e',
          ẽ: 'e',
          ē: 'e',
          ḕ: 'e',
          ḗ: 'e',
          ĕ: 'e',
          ė: 'e',
          ë: 'e',
          ẻ: 'e',
          ě: 'e',
          ȅ: 'e',
          ȇ: 'e',
          ẹ: 'e',
          ệ: 'e',
          ȩ: 'e',
          ḝ: 'e',
          ę: 'e',
          ḙ: 'e',
          ḛ: 'e',
          ɇ: 'e',
          ɛ: 'e',
          ǝ: 'e',
          'ⓕ': 'f',
          ｆ: 'f',
          ḟ: 'f',
          ƒ: 'f',
          ꝼ: 'f',
          'ⓖ': 'g',
          ｇ: 'g',
          ǵ: 'g',
          ĝ: 'g',
          ḡ: 'g',
          ğ: 'g',
          ġ: 'g',
          ǧ: 'g',
          ģ: 'g',
          ǥ: 'g',
          ɠ: 'g',
          ꞡ: 'g',
          ᵹ: 'g',
          ꝿ: 'g',
          'ⓗ': 'h',
          ｈ: 'h',
          ĥ: 'h',
          ḣ: 'h',
          ḧ: 'h',
          ȟ: 'h',
          ḥ: 'h',
          ḩ: 'h',
          ḫ: 'h',
          ẖ: 'h',
          ħ: 'h',
          ⱨ: 'h',
          ⱶ: 'h',
          ɥ: 'h',
          ƕ: 'hv',
          'ⓘ': 'i',
          ｉ: 'i',
          ì: 'i',
          í: 'i',
          î: 'i',
          ĩ: 'i',
          ī: 'i',
          ĭ: 'i',
          ï: 'i',
          ḯ: 'i',
          ỉ: 'i',
          ǐ: 'i',
          ȉ: 'i',
          ȋ: 'i',
          ị: 'i',
          į: 'i',
          ḭ: 'i',
          ɨ: 'i',
          ı: 'i',
          'ⓙ': 'j',
          ｊ: 'j',
          ĵ: 'j',
          ǰ: 'j',
          ɉ: 'j',
          'ⓚ': 'k',
          ｋ: 'k',
          ḱ: 'k',
          ǩ: 'k',
          ḳ: 'k',
          ķ: 'k',
          ḵ: 'k',
          ƙ: 'k',
          ⱪ: 'k',
          ꝁ: 'k',
          ꝃ: 'k',
          ꝅ: 'k',
          ꞣ: 'k',
          'ⓛ': 'l',
          ｌ: 'l',
          ŀ: 'l',
          ĺ: 'l',
          ľ: 'l',
          ḷ: 'l',
          ḹ: 'l',
          ļ: 'l',
          ḽ: 'l',
          ḻ: 'l',
          ſ: 'l',
          ł: 'l',
          ƚ: 'l',
          ɫ: 'l',
          ⱡ: 'l',
          ꝉ: 'l',
          ꞁ: 'l',
          ꝇ: 'l',
          ǉ: 'lj',
          'ⓜ': 'm',
          ｍ: 'm',
          ḿ: 'm',
          ṁ: 'm',
          ṃ: 'm',
          ɱ: 'm',
          ɯ: 'm',
          'ⓝ': 'n',
          ｎ: 'n',
          ǹ: 'n',
          ń: 'n',
          ñ: 'n',
          ṅ: 'n',
          ň: 'n',
          ṇ: 'n',
          ņ: 'n',
          ṋ: 'n',
          ṉ: 'n',
          ƞ: 'n',
          ɲ: 'n',
          ŉ: 'n',
          ꞑ: 'n',
          ꞥ: 'n',
          ǌ: 'nj',
          'ⓞ': 'o',
          ｏ: 'o',
          ò: 'o',
          ó: 'o',
          ô: 'o',
          ồ: 'o',
          ố: 'o',
          ỗ: 'o',
          ổ: 'o',
          õ: 'o',
          ṍ: 'o',
          ȭ: 'o',
          ṏ: 'o',
          ō: 'o',
          ṑ: 'o',
          ṓ: 'o',
          ŏ: 'o',
          ȯ: 'o',
          ȱ: 'o',
          ö: 'o',
          ȫ: 'o',
          ỏ: 'o',
          ő: 'o',
          ǒ: 'o',
          ȍ: 'o',
          ȏ: 'o',
          ơ: 'o',
          ờ: 'o',
          ớ: 'o',
          ỡ: 'o',
          ở: 'o',
          ợ: 'o',
          ọ: 'o',
          ộ: 'o',
          ǫ: 'o',
          ǭ: 'o',
          ø: 'o',
          ǿ: 'o',
          ɔ: 'o',
          ꝋ: 'o',
          ꝍ: 'o',
          ɵ: 'o',
          œ: 'oe',
          ƣ: 'oi',
          ȣ: 'ou',
          ꝏ: 'oo',
          'ⓟ': 'p',
          ｐ: 'p',
          ṕ: 'p',
          ṗ: 'p',
          ƥ: 'p',
          ᵽ: 'p',
          ꝑ: 'p',
          ꝓ: 'p',
          ꝕ: 'p',
          'ⓠ': 'q',
          ｑ: 'q',
          ɋ: 'q',
          ꝗ: 'q',
          ꝙ: 'q',
          'ⓡ': 'r',
          ｒ: 'r',
          ŕ: 'r',
          ṙ: 'r',
          ř: 'r',
          ȑ: 'r',
          ȓ: 'r',
          ṛ: 'r',
          ṝ: 'r',
          ŗ: 'r',
          ṟ: 'r',
          ɍ: 'r',
          ɽ: 'r',
          ꝛ: 'r',
          ꞧ: 'r',
          ꞃ: 'r',
          'ⓢ': 's',
          ｓ: 's',
          ß: 's',
          ś: 's',
          ṥ: 's',
          ŝ: 's',
          ṡ: 's',
          š: 's',
          ṧ: 's',
          ṣ: 's',
          ṩ: 's',
          ș: 's',
          ş: 's',
          ȿ: 's',
          ꞩ: 's',
          ꞅ: 's',
          ẛ: 's',
          'ⓣ': 't',
          ｔ: 't',
          ṫ: 't',
          ẗ: 't',
          ť: 't',
          ṭ: 't',
          ț: 't',
          ţ: 't',
          ṱ: 't',
          ṯ: 't',
          ŧ: 't',
          ƭ: 't',
          ʈ: 't',
          ⱦ: 't',
          ꞇ: 't',
          ꜩ: 'tz',
          'ⓤ': 'u',
          ｕ: 'u',
          ù: 'u',
          ú: 'u',
          û: 'u',
          ũ: 'u',
          ṹ: 'u',
          ū: 'u',
          ṻ: 'u',
          ŭ: 'u',
          ü: 'u',
          ǜ: 'u',
          ǘ: 'u',
          ǖ: 'u',
          ǚ: 'u',
          ủ: 'u',
          ů: 'u',
          ű: 'u',
          ǔ: 'u',
          ȕ: 'u',
          ȗ: 'u',
          ư: 'u',
          ừ: 'u',
          ứ: 'u',
          ữ: 'u',
          ử: 'u',
          ự: 'u',
          ụ: 'u',
          ṳ: 'u',
          ų: 'u',
          ṷ: 'u',
          ṵ: 'u',
          ʉ: 'u',
          'ⓥ': 'v',
          ｖ: 'v',
          ṽ: 'v',
          ṿ: 'v',
          ʋ: 'v',
          ꝟ: 'v',
          ʌ: 'v',
          ꝡ: 'vy',
          'ⓦ': 'w',
          ｗ: 'w',
          ẁ: 'w',
          ẃ: 'w',
          ŵ: 'w',
          ẇ: 'w',
          ẅ: 'w',
          ẘ: 'w',
          ẉ: 'w',
          ⱳ: 'w',
          'ⓧ': 'x',
          ｘ: 'x',
          ẋ: 'x',
          ẍ: 'x',
          'ⓨ': 'y',
          ｙ: 'y',
          ỳ: 'y',
          ý: 'y',
          ŷ: 'y',
          ỹ: 'y',
          ȳ: 'y',
          ẏ: 'y',
          ÿ: 'y',
          ỷ: 'y',
          ẙ: 'y',
          ỵ: 'y',
          ƴ: 'y',
          ɏ: 'y',
          ỿ: 'y',
          'ⓩ': 'z',
          ｚ: 'z',
          ź: 'z',
          ẑ: 'z',
          ż: 'z',
          ž: 'z',
          ẓ: 'z',
          ẕ: 'z',
          ƶ: 'z',
          ȥ: 'z',
          ɀ: 'z',
          ⱬ: 'z',
          ꝣ: 'z',
          Ά: 'Α',
          Έ: 'Ε',
          Ή: 'Η',
          Ί: 'Ι',
          Ϊ: 'Ι',
          Ό: 'Ο',
          Ύ: 'Υ',
          Ϋ: 'Υ',
          Ώ: 'Ω',
          ά: 'α',
          έ: 'ε',
          ή: 'η',
          ί: 'ι',
          ϊ: 'ι',
          ΐ: 'ι',
          ό: 'ο',
          ύ: 'υ',
          ϋ: 'υ',
          ΰ: 'υ',
          ώ: 'ω',
          ς: 'σ',
          '’': "'",
        };
      }),
      u.define('select2/data/base', ['../utils'], function (n) {
        function s(e, t) {
          s.__super__.constructor.call(this);
        }
        return (
          n.Extend(s, n.Observable),
          (s.prototype.current = function (e) {
            throw new Error(
              'The `current` method must be defined in child classes.'
            );
          }),
          (s.prototype.query = function (e, t) {
            throw new Error(
              'The `query` method must be defined in child classes.'
            );
          }),
          (s.prototype.bind = function (e, t) {}),
          (s.prototype.destroy = function () {}),
          (s.prototype.generateResultId = function (e, t) {
            e = e.id + '-result-';
            return (
              (e += n.generateChars(4)),
              null != t.id
                ? (e += '-' + t.id.toString())
                : (e += '-' + n.generateChars(4)),
              e
            );
          }),
          s
        );
      }),
      u.define(
        'select2/data/select',
        ['./base', '../utils', 'jquery'],
        function (e, a, l) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            a.Extend(n, e),
            (n.prototype.current = function (e) {
              var t = this;
              e(
                Array.prototype.map.call(
                  this.$element[0].querySelectorAll(':checked'),
                  function (e) {
                    return t.item(l(e));
                  }
                )
              );
            }),
            (n.prototype.select = function (i) {
              var e,
                o = this;
              if (
                ((i.selected = !0),
                null != i.element &&
                  'option' === i.element.tagName.toLowerCase())
              )
                return (
                  (i.element.selected = !0),
                  void this.$element.trigger('input').trigger('change')
                );
              this.$element.prop('multiple')
                ? this.current(function (e) {
                    var t = [];
                    (i = [i]).push.apply(i, e);
                    for (var n = 0; n < i.length; n++) {
                      var s = i[n].id;
                      -1 === t.indexOf(s) && t.push(s);
                    }
                    o.$element.val(t),
                      o.$element.trigger('input').trigger('change');
                  })
                : ((e = i.id),
                  this.$element.val(e),
                  this.$element.trigger('input').trigger('change'));
            }),
            (n.prototype.unselect = function (i) {
              var o = this;
              if (this.$element.prop('multiple')) {
                if (
                  ((i.selected = !1),
                  null != i.element &&
                    'option' === i.element.tagName.toLowerCase())
                )
                  return (
                    (i.element.selected = !1),
                    void this.$element.trigger('input').trigger('change')
                  );
                this.current(function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var s = e[n].id;
                    s !== i.id && -1 === t.indexOf(s) && t.push(s);
                  }
                  o.$element.val(t),
                    o.$element.trigger('input').trigger('change');
                });
              }
            }),
            (n.prototype.bind = function (e, t) {
              var n = this;
              (this.container = e).on('select', function (e) {
                n.select(e.data);
              }),
                e.on('unselect', function (e) {
                  n.unselect(e.data);
                });
            }),
            (n.prototype.destroy = function () {
              this.$element.find('*').each(function () {
                a.RemoveData(this);
              });
            }),
            (n.prototype.query = function (t, e) {
              var n = [],
                s = this;
              this.$element.children().each(function () {
                var e;
                ('option' !== this.tagName.toLowerCase() &&
                  'optgroup' !== this.tagName.toLowerCase()) ||
                  ((e = l(this)),
                  (e = s.item(e)),
                  null !== (e = s.matches(t, e)) && n.push(e));
              }),
                e({results: n});
            }),
            (n.prototype.addOptions = function (e) {
              this.$element.append(e);
            }),
            (n.prototype.option = function (e) {
              var t;
              e.children
                ? ((t = document.createElement('optgroup')).label = e.text)
                : void 0 !== (t = document.createElement('option')).textContent
                ? (t.textContent = e.text)
                : (t.innerText = e.text),
                void 0 !== e.id && (t.value = e.id),
                e.disabled && (t.disabled = !0),
                e.selected && (t.selected = !0),
                e.title && (t.title = e.title);
              e = this._normalizeItem(e);
              return (e.element = t), a.StoreData(t, 'data', e), l(t);
            }),
            (n.prototype.item = function (e) {
              var t = {};
              if (null != (t = a.GetData(e[0], 'data'))) return t;
              var n = e[0];
              if ('option' === n.tagName.toLowerCase())
                t = {
                  id: e.val(),
                  text: e.text(),
                  disabled: e.prop('disabled'),
                  selected: e.prop('selected'),
                  title: e.prop('title'),
                };
              else if ('optgroup' === n.tagName.toLowerCase()) {
                t = {
                  text: e.prop('label'),
                  children: [],
                  title: e.prop('title'),
                };
                for (
                  var s = e.children('option'), i = [], o = 0;
                  o < s.length;
                  o++
                ) {
                  var r = l(s[o]),
                    r = this.item(r);
                  i.push(r);
                }
                t.children = i;
              }
              return (
                ((t = this._normalizeItem(t)).element = e[0]),
                a.StoreData(e[0], 'data', t),
                t
              );
            }),
            (n.prototype._normalizeItem = function (e) {
              e !== Object(e) && (e = {id: e, text: e});
              return (
                null != (e = l.extend({}, {text: ''}, e)).id &&
                  (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId &&
                  e.id &&
                  null != this.container &&
                  (e._resultId = this.generateResultId(this.container, e)),
                l.extend({}, {selected: !1, disabled: !1}, e)
              );
            }),
            (n.prototype.matches = function (e, t) {
              return this.options.get('matcher')(e, t);
            }),
            n
          );
        }
      ),
      u.define(
        'select2/data/array',
        ['./select', '../utils', 'jquery'],
        function (e, t, c) {
          function s(e, t) {
            (this._dataToConvert = t.get('data') || []),
              s.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(s, e),
            (s.prototype.bind = function (e, t) {
              s.__super__.bind.call(this, e, t),
                this.addOptions(this.convertToOptions(this._dataToConvert));
            }),
            (s.prototype.select = function (n) {
              var e = this.$element.find('option').filter(function (e, t) {
                return t.value == n.id.toString();
              });
              0 === e.length && ((e = this.option(n)), this.addOptions(e)),
                s.__super__.select.call(this, n);
            }),
            (s.prototype.convertToOptions = function (e) {
              var t = this,
                n = this.$element.find('option'),
                s = n
                  .map(function () {
                    return t.item(c(this)).id;
                  })
                  .get(),
                i = [];
              for (var o = 0; o < e.length; o++) {
                var r,
                  a,
                  l = this._normalizeItem(e[o]);
                0 <= s.indexOf(l.id)
                  ? ((r = n.filter(
                      (function (e) {
                        return function () {
                          return c(this).val() == e.id;
                        };
                      })(l)
                    )),
                    (a = this.item(r)),
                    (a = c.extend(!0, {}, l, a)),
                    (a = this.option(a)),
                    r.replaceWith(a))
                  : ((a = this.option(l)),
                    l.children &&
                      ((l = this.convertToOptions(l.children)), a.append(l)),
                    i.push(a));
              }
              return i;
            }),
            s
          );
        }
      ),
      u.define(
        'select2/data/ajax',
        ['./array', '../utils', 'jquery'],
        function (e, t, o) {
          function n(e, t) {
            (this.ajaxOptions = this._applyDefaults(t.get('ajax'))),
              null != this.ajaxOptions.processResults &&
                (this.processResults = this.ajaxOptions.processResults),
              n.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(n, e),
            (n.prototype._applyDefaults = function (e) {
              var t = {
                data: function (e) {
                  return o.extend({}, e, {q: e.term});
                },
                transport: function (e, t, n) {
                  e = o.ajax(e);
                  return e.then(t), e.fail(n), e;
                },
              };
              return o.extend({}, t, e, !0);
            }),
            (n.prototype.processResults = function (e) {
              return e;
            }),
            (n.prototype.query = function (t, n) {
              var s = this;
              null != this._request &&
                ('function' == typeof this._request.abort &&
                  this._request.abort(),
                (this._request = null));
              var i = o.extend({type: 'GET'}, this.ajaxOptions);
              function e() {
                var e = i.transport(
                  i,
                  function (e) {
                    e = s.processResults(e, t);
                    s.options.get('debug') &&
                      window.console &&
                      console.error &&
                      ((e && e.results && Array.isArray(e.results)) ||
                        console.error(
                          'Select2: The AJAX results did not return an array in the `results` key of the response.'
                        )),
                      n(e);
                  },
                  function () {
                    ('status' in e && (0 === e.status || '0' === e.status)) ||
                      s.trigger('results:message', {message: 'errorLoading'});
                  }
                );
                s._request = e;
              }
              'function' == typeof i.url &&
                (i.url = i.url.call(this.$element, t)),
                'function' == typeof i.data &&
                  (i.data = i.data.call(this.$element, t)),
                this.ajaxOptions.delay && null != t.term
                  ? (this._queryTimeout &&
                      window.clearTimeout(this._queryTimeout),
                    (this._queryTimeout = window.setTimeout(
                      e,
                      this.ajaxOptions.delay
                    )))
                  : e();
            }),
            n
          );
        }
      ),
      u.define('select2/data/tags', ['jquery'], function (t) {
        function e(e, t, n) {
          var s = n.get('tags'),
            i = n.get('createTag');
          void 0 !== i && (this.createTag = i);
          i = n.get('insertTag');
          if (
            (void 0 !== i && (this.insertTag = i),
            e.call(this, t, n),
            Array.isArray(s))
          )
            for (var o = 0; o < s.length; o++) {
              var r = s[o],
                r = this._normalizeItem(r),
                r = this.option(r);
              this.$element.append(r);
            }
        }
        return (
          (e.prototype.query = function (e, c, u) {
            var d = this;
            this._removeOldTags(),
              null != c.term && null == c.page
                ? e.call(this, c, function e(t, n) {
                    for (var s = t.results, i = 0; i < s.length; i++) {
                      var o = s[i],
                        r = null != o.children && !e({results: o.children}, !0);
                      if (
                        (o.text || '').toUpperCase() ===
                          (c.term || '').toUpperCase() ||
                        r
                      )
                        return !n && ((t.data = s), void u(t));
                    }
                    if (n) return !0;
                    var a,
                      l = d.createTag(c);
                    null != l &&
                      ((a = d.option(l)).attr('data-select2-tag', 'true'),
                      d.addOptions([a]),
                      d.insertTag(s, l)),
                      (t.results = s),
                      u(t);
                  })
                : e.call(this, c, u);
          }),
          (e.prototype.createTag = function (e, t) {
            if (null == t.term) return null;
            t = t.term.trim();
            return '' === t ? null : {id: t, text: t};
          }),
          (e.prototype.insertTag = function (e, t, n) {
            t.unshift(n);
          }),
          (e.prototype._removeOldTags = function (e) {
            this.$element.find('option[data-select2-tag]').each(function () {
              this.selected || t(this).remove();
            });
          }),
          e
        );
      }),
      u.define('select2/data/tokenizer', ['jquery'], function (c) {
        function e(e, t, n) {
          var s = n.get('tokenizer');
          void 0 !== s && (this.tokenizer = s), e.call(this, t, n);
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n),
              (this.$search =
                t.dropdown.$search ||
                t.selection.$search ||
                n.find('.select2-search__field'));
          }),
          (e.prototype.query = function (e, t, n) {
            var s = this;
            t.term = t.term || '';
            var i = this.tokenizer(t, this.options, function (e) {
              var t,
                n = s._normalizeItem(e);
              s.$element.find('option').filter(function () {
                return c(this).val() === n.id;
              }).length ||
                ((t = s.option(n)).attr('data-select2-tag', !0),
                s._removeOldTags(),
                s.addOptions([t])),
                (t = n),
                s.trigger('select', {data: t});
            });
            i.term !== t.term &&
              (this.$search.length &&
                (this.$search.val(i.term), this.$search.trigger('focus')),
              (t.term = i.term)),
              e.call(this, t, n);
          }),
          (e.prototype.tokenizer = function (e, t, n, s) {
            for (
              var i = n.get('tokenSeparators') || [],
                o = t.term,
                r = 0,
                a =
                  this.createTag ||
                  function (e) {
                    return {id: e.term, text: e.term};
                  };
              r < o.length;

            ) {
              var l = o[r];
              -1 !== i.indexOf(l)
                ? ((l = o.substr(0, r)),
                  null != (l = a(c.extend({}, t, {term: l})))
                    ? (s(l), (o = o.substr(r + 1) || ''), (r = 0))
                    : r++)
                : r++;
            }
            return {term: o};
          }),
          e
        );
      }),
      u.define('select2/data/minimumInputLength', [], function () {
        function e(e, t, n) {
          (this.minimumInputLength = n.get('minimumInputLength')),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ''),
              t.term.length < this.minimumInputLength
                ? this.trigger('results:message', {
                    message: 'inputTooShort',
                    args: {
                      minimum: this.minimumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define('select2/data/maximumInputLength', [], function () {
        function e(e, t, n) {
          (this.maximumInputLength = n.get('maximumInputLength')),
            e.call(this, t, n);
        }
        return (
          (e.prototype.query = function (e, t, n) {
            (t.term = t.term || ''),
              0 < this.maximumInputLength &&
              t.term.length > this.maximumInputLength
                ? this.trigger('results:message', {
                    message: 'inputTooLong',
                    args: {
                      maximum: this.maximumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, n);
          }),
          e
        );
      }),
      u.define('select2/data/maximumSelectionLength', [], function () {
        function e(e, t, n) {
          (this.maximumSelectionLength = n.get('maximumSelectionLength')),
            e.call(this, t, n);
        }
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on('select', function () {
                s._checkIfMaximumSelected();
              });
          }),
          (e.prototype.query = function (e, t, n) {
            var s = this;
            this._checkIfMaximumSelected(function () {
              e.call(s, t, n);
            });
          }),
          (e.prototype._checkIfMaximumSelected = function (e, t) {
            var n = this;
            this.current(function (e) {
              e = null != e ? e.length : 0;
              0 < n.maximumSelectionLength && e >= n.maximumSelectionLength
                ? n.trigger('results:message', {
                    message: 'maximumSelected',
                    args: {maximum: n.maximumSelectionLength},
                  })
                : t && t();
            });
          }),
          e
        );
      }),
      u.define('select2/dropdown', ['jquery', './utils'], function (t, e) {
        function n(e, t) {
          (this.$element = e),
            (this.options = t),
            n.__super__.constructor.call(this);
        }
        return (
          e.Extend(n, e.Observable),
          (n.prototype.render = function () {
            var e = t(
              '<span class="select2-dropdown"><span class="select2-results"></span></span>'
            );
            return e.attr('dir', this.options.get('dir')), (this.$dropdown = e);
          }),
          (n.prototype.bind = function () {}),
          (n.prototype.position = function (e, t) {}),
          (n.prototype.destroy = function () {
            this.$dropdown.remove();
          }),
          n
        );
      }),
      u.define('select2/dropdown/search', ['jquery'], function (o) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              n = this.options.get('translations').get('search'),
              e = o(
                '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
              );
            return (
              (this.$searchContainer = e),
              (this.$search = e.find('input')),
              this.$search.prop(
                'autocomplete',
                this.options.get('autocomplete')
              ),
              this.$search.attr('aria-label', n()),
              t.prepend(e),
              t
            );
          }),
          (e.prototype.bind = function (e, t, n) {
            var s = this,
              i = t.id + '-results';
            e.call(this, t, n),
              this.$search.on('keydown', function (e) {
                s.trigger('keypress', e),
                  (s._keyUpPrevented = e.isDefaultPrevented());
              }),
              this.$search.on('input', function (e) {
                o(this).off('keyup');
              }),
              this.$search.on('keyup input', function (e) {
                s.handleSearch(e);
              }),
              t.on('open', function () {
                s.$search.attr('tabindex', 0),
                  s.$search.attr('aria-controls', i),
                  s.$search.trigger('focus'),
                  window.setTimeout(function () {
                    s.$search.trigger('focus');
                  }, 0);
              }),
              t.on('close', function () {
                s.$search.attr('tabindex', -1),
                  s.$search.removeAttr('aria-controls'),
                  s.$search.removeAttr('aria-activedescendant'),
                  s.$search.val(''),
                  s.$search.trigger('blur');
              }),
              t.on('focus', function () {
                t.isOpen() || s.$search.trigger('focus');
              }),
              t.on('results:all', function (e) {
                (null != e.query.term && '' !== e.query.term) ||
                  (s.showSearch(e)
                    ? s.$searchContainer[0].classList.remove(
                        'select2-search--hide'
                      )
                    : s.$searchContainer[0].classList.add(
                        'select2-search--hide'
                      ));
              }),
              t.on('results:focus', function (e) {
                e.data._resultId
                  ? s.$search.attr('aria-activedescendant', e.data._resultId)
                  : s.$search.removeAttr('aria-activedescendant');
              });
          }),
          (e.prototype.handleSearch = function (e) {
            var t;
            this._keyUpPrevented ||
              ((t = this.$search.val()), this.trigger('query', {term: t})),
              (this._keyUpPrevented = !1);
          }),
          (e.prototype.showSearch = function (e, t) {
            return !0;
          }),
          e
        );
      }),
      u.define('select2/dropdown/hidePlaceholder', [], function () {
        function e(e, t, n, s) {
          (this.placeholder = this.normalizePlaceholder(n.get('placeholder'))),
            e.call(this, t, n, s);
        }
        return (
          (e.prototype.append = function (e, t) {
            (t.results = this.removePlaceholder(t.results)), e.call(this, t);
          }),
          (e.prototype.normalizePlaceholder = function (e, t) {
            return 'string' == typeof t && (t = {id: '', text: t}), t;
          }),
          (e.prototype.removePlaceholder = function (e, t) {
            for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
              var i = t[s];
              this.placeholder.id === i.id && n.splice(s, 1);
            }
            return n;
          }),
          e
        );
      }),
      u.define('select2/dropdown/infiniteScroll', ['jquery'], function (n) {
        function e(e, t, n, s) {
          (this.lastParams = {}),
            e.call(this, t, n, s),
            (this.$loadingMore = this.createLoadingMore()),
            (this.loading = !1);
        }
        return (
          (e.prototype.append = function (e, t) {
            this.$loadingMore.remove(),
              (this.loading = !1),
              e.call(this, t),
              this.showLoadingMore(t) &&
                (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded());
          }),
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on('query', function (e) {
                (s.lastParams = e), (s.loading = !0);
              }),
              t.on('query:append', function (e) {
                (s.lastParams = e), (s.loading = !0);
              }),
              this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
          }),
          (e.prototype.loadMoreIfNeeded = function () {
            var e = n.contains(document.documentElement, this.$loadingMore[0]);
            !this.loading &&
              e &&
              ((e = this.$results.offset().top + this.$results.outerHeight(!1)),
              this.$loadingMore.offset().top +
                this.$loadingMore.outerHeight(!1) <=
                e + 50 && this.loadMore());
          }),
          (e.prototype.loadMore = function () {
            this.loading = !0;
            var e = n.extend({}, {page: 1}, this.lastParams);
            e.page++, this.trigger('query:append', e);
          }),
          (e.prototype.showLoadingMore = function (e, t) {
            return t.pagination && t.pagination.more;
          }),
          (e.prototype.createLoadingMore = function () {
            var e = n(
                '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
              ),
              t = this.options.get('translations').get('loadingMore');
            return e.html(t(this.lastParams)), e;
          }),
          e
        );
      }),
      u.define(
        'select2/dropdown/attachBody',
        ['jquery', '../utils'],
        function (u, r) {
          function e(e, t, n) {
            (this.$dropdownParent = u(
              n.get('dropdownParent') || document.body
            )),
              e.call(this, t, n);
          }
          return (
            (e.prototype.bind = function (e, t, n) {
              var s = this;
              e.call(this, t, n),
                t.on('open', function () {
                  s._showDropdown(),
                    s._attachPositioningHandler(t),
                    s._bindContainerResultHandlers(t);
                }),
                t.on('close', function () {
                  s._hideDropdown(), s._detachPositioningHandler(t);
                }),
                this.$dropdownContainer.on('mousedown', function (e) {
                  e.stopPropagation();
                });
            }),
            (e.prototype.destroy = function (e) {
              e.call(this), this.$dropdownContainer.remove();
            }),
            (e.prototype.position = function (e, t, n) {
              t.attr('class', n.attr('class')),
                t[0].classList.remove('select2'),
                t[0].classList.add('select2-container--open'),
                t.css({position: 'absolute', top: -999999}),
                (this.$container = n);
            }),
            (e.prototype.render = function (e) {
              var t = u('<span></span>'),
                e = e.call(this);
              return t.append(e), (this.$dropdownContainer = t);
            }),
            (e.prototype._hideDropdown = function (e) {
              this.$dropdownContainer.detach();
            }),
            (e.prototype._bindContainerResultHandlers = function (e, t) {
              var n;
              this._containerResultsHandlersBound ||
                ((n = this),
                t.on('results:all', function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on('results:append', function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on('results:message', function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on('select', function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                t.on('unselect', function () {
                  n._positionDropdown(), n._resizeDropdown();
                }),
                (this._containerResultsHandlersBound = !0));
            }),
            (e.prototype._attachPositioningHandler = function (e, t) {
              var n = this,
                s = 'scroll.select2.' + t.id,
                i = 'resize.select2.' + t.id,
                o = 'orientationchange.select2.' + t.id,
                t = this.$container.parents().filter(r.hasScroll);
              t.each(function () {
                r.StoreData(this, 'select2-scroll-position', {
                  x: u(this).scrollLeft(),
                  y: u(this).scrollTop(),
                });
              }),
                t.on(s, function (e) {
                  var t = r.GetData(this, 'select2-scroll-position');
                  u(this).scrollTop(t.y);
                }),
                u(window).on(s + ' ' + i + ' ' + o, function (e) {
                  n._positionDropdown(), n._resizeDropdown();
                });
            }),
            (e.prototype._detachPositioningHandler = function (e, t) {
              var n = 'scroll.select2.' + t.id,
                s = 'resize.select2.' + t.id,
                t = 'orientationchange.select2.' + t.id;
              this.$container.parents().filter(r.hasScroll).off(n),
                u(window).off(n + ' ' + s + ' ' + t);
            }),
            (e.prototype._positionDropdown = function () {
              var e = u(window),
                t = this.$dropdown[0].classList.contains(
                  'select2-dropdown--above'
                ),
                n = this.$dropdown[0].classList.contains(
                  'select2-dropdown--below'
                ),
                s = null,
                i = this.$container.offset();
              i.bottom = i.top + this.$container.outerHeight(!1);
              var o = {height: this.$container.outerHeight(!1)};
              (o.top = i.top), (o.bottom = i.top + o.height);
              var r = this.$dropdown.outerHeight(!1),
                a = e.scrollTop(),
                l = e.scrollTop() + e.height(),
                c = a < i.top - r,
                e = l > i.bottom + r,
                a = {left: i.left, top: o.bottom},
                l = this.$dropdownParent;
              'static' === l.css('position') && (l = l.offsetParent());
              i = {top: 0, left: 0};
              (u.contains(document.body, l[0]) || l[0].isConnected) &&
                (i = l.offset()),
                (a.top -= i.top),
                (a.left -= i.left),
                t || n || (s = 'below'),
                e || !c || t ? !c && e && t && (s = 'below') : (s = 'above'),
                ('above' == s || (t && 'below' !== s)) &&
                  (a.top = o.top - i.top - r),
                null != s &&
                  (this.$dropdown[0].classList.remove(
                    'select2-dropdown--below'
                  ),
                  this.$dropdown[0].classList.remove('select2-dropdown--above'),
                  this.$dropdown[0].classList.add('select2-dropdown--' + s),
                  this.$container[0].classList.remove(
                    'select2-container--below'
                  ),
                  this.$container[0].classList.remove(
                    'select2-container--above'
                  ),
                  this.$container[0].classList.add('select2-container--' + s)),
                this.$dropdownContainer.css(a);
            }),
            (e.prototype._resizeDropdown = function () {
              var e = {width: this.$container.outerWidth(!1) + 'px'};
              this.options.get('dropdownAutoWidth') &&
                ((e.minWidth = e.width),
                (e.position = 'relative'),
                (e.width = 'auto')),
                this.$dropdown.css(e);
            }),
            (e.prototype._showDropdown = function (e) {
              this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown();
            }),
            e
          );
        }
      ),
      u.define('select2/dropdown/minimumResultsForSearch', [], function () {
        function e(e, t, n, s) {
          (this.minimumResultsForSearch = n.get('minimumResultsForSearch')),
            this.minimumResultsForSearch < 0 &&
              (this.minimumResultsForSearch = 1 / 0),
            e.call(this, t, n, s);
        }
        return (
          (e.prototype.showSearch = function (e, t) {
            return (
              !(
                (function e(t) {
                  for (var n = 0, s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.children ? (n += e(i.children)) : n++;
                  }
                  return n;
                })(t.data.results) < this.minimumResultsForSearch
              ) && e.call(this, t)
            );
          }),
          e
        );
      }),
      u.define('select2/dropdown/selectOnClose', ['../utils'], function (s) {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on('close', function (e) {
                s._handleSelectOnClose(e);
              });
          }),
          (e.prototype._handleSelectOnClose = function (e, t) {
            if (t && null != t.originalSelect2Event) {
              var n = t.originalSelect2Event;
              if ('select' === n._type || 'unselect' === n._type) return;
            }
            n = this.getHighlightedResults();
            n.length < 1 ||
              (null != (n = s.GetData(n[0], 'data')).element &&
                n.element.selected) ||
              (null == n.element && n.selected) ||
              this.trigger('select', {data: n});
          }),
          e
        );
      }),
      u.define('select2/dropdown/closeOnSelect', [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            var s = this;
            e.call(this, t, n),
              t.on('select', function (e) {
                s._selectTriggered(e);
              }),
              t.on('unselect', function (e) {
                s._selectTriggered(e);
              });
          }),
          (e.prototype._selectTriggered = function (e, t) {
            var n = t.originalEvent;
            (n && (n.ctrlKey || n.metaKey)) ||
              this.trigger('close', {
                originalEvent: n,
                originalSelect2Event: t,
              });
          }),
          e
        );
      }),
      u.define('select2/dropdown/dropdownCss', ['../utils'], function (n) {
        function e() {}
        return (
          (e.prototype.render = function (e) {
            var t = e.call(this),
              e = this.options.get('dropdownCssClass') || '';
            return (
              -1 !== e.indexOf(':all:') &&
                ((e = e.replace(':all:', '')),
                n.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(e),
              t
            );
          }),
          e
        );
      }),
      u.define(
        'select2/dropdown/tagsSearchHighlight',
        ['../utils'],
        function (s) {
          function e() {}
          return (
            (e.prototype.highlightFirstItem = function (e) {
              var t = this.$results.find(
                '.select2-results__option--selectable:not(.select2-results__option--selected)'
              );
              if (0 < t.length) {
                var n = t.first(),
                  t = s.GetData(n[0], 'data').element;
                if (
                  t &&
                  t.getAttribute &&
                  'true' === t.getAttribute('data-select2-tag')
                )
                  return void n.trigger('mouseenter');
              }
              e.call(this);
            }),
            e
          );
        }
      ),
      u.define('select2/i18n/en', [], function () {
        return {
          errorLoading: function () {
            return 'The results could not be loaded.';
          },
          inputTooLong: function (e) {
            var t = e.input.length - e.maximum,
              e = 'Please delete ' + t + ' character';
            return 1 != t && (e += 's'), e;
          },
          inputTooShort: function (e) {
            return (
              'Please enter ' +
              (e.minimum - e.input.length) +
              ' or more characters'
            );
          },
          loadingMore: function () {
            return 'Loading more results…';
          },
          maximumSelected: function (e) {
            var t = 'You can only select ' + e.maximum + ' item';
            return 1 != e.maximum && (t += 's'), t;
          },
          noResults: function () {
            return 'No results found';
          },
          searching: function () {
            return 'Searching…';
          },
          removeAllItems: function () {
            return 'Remove all items';
          },
          removeItem: function () {
            return 'Remove item';
          },
          search: function () {
            return 'Search';
          },
        };
      }),
      u.define(
        'select2/defaults',
        [
          'jquery',
          './results',
          './selection/single',
          './selection/multiple',
          './selection/placeholder',
          './selection/allowClear',
          './selection/search',
          './selection/selectionCss',
          './selection/eventRelay',
          './utils',
          './translation',
          './diacritics',
          './data/select',
          './data/array',
          './data/ajax',
          './data/tags',
          './data/tokenizer',
          './data/minimumInputLength',
          './data/maximumInputLength',
          './data/maximumSelectionLength',
          './dropdown',
          './dropdown/search',
          './dropdown/hidePlaceholder',
          './dropdown/infiniteScroll',
          './dropdown/attachBody',
          './dropdown/minimumResultsForSearch',
          './dropdown/selectOnClose',
          './dropdown/closeOnSelect',
          './dropdown/dropdownCss',
          './dropdown/tagsSearchHighlight',
          './i18n/en',
        ],
        function (
          l,
          o,
          r,
          a,
          c,
          u,
          d,
          p,
          h,
          f,
          g,
          t,
          m,
          v,
          y,
          _,
          b,
          w,
          $,
          x,
          A,
          D,
          S,
          O,
          L,
          E,
          C,
          T,
          q,
          I,
          e
        ) {
          function n() {
            this.reset();
          }
          return (
            (n.prototype.apply = function (e) {
              var t;
              null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter &&
                (null != e.ajax
                  ? (e.dataAdapter = y)
                  : null != e.data
                  ? (e.dataAdapter = v)
                  : (e.dataAdapter = m),
                0 < e.minimumInputLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, w)),
                0 < e.maximumInputLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, $)),
                0 < e.maximumSelectionLength &&
                  (e.dataAdapter = f.Decorate(e.dataAdapter, x)),
                e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)),
                (null == e.tokenSeparators && null == e.tokenizer) ||
                  (e.dataAdapter = f.Decorate(e.dataAdapter, b))),
                null == e.resultsAdapter &&
                  ((e.resultsAdapter = o),
                  null != e.ajax &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, O)),
                  null != e.placeholder &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)),
                  e.selectOnClose &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, C)),
                  e.tags &&
                    (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))),
                null == e.dropdownAdapter &&
                  (e.multiple
                    ? (e.dropdownAdapter = A)
                    : ((t = f.Decorate(A, D)), (e.dropdownAdapter = t)),
                  0 !== e.minimumResultsForSearch &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, E)),
                  e.closeOnSelect &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)),
                  null != e.dropdownCssClass &&
                    (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)),
                  (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, L))),
                null == e.selectionAdapter &&
                  (e.multiple
                    ? (e.selectionAdapter = a)
                    : (e.selectionAdapter = r),
                  null != e.placeholder &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)),
                  e.allowClear &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)),
                  e.multiple &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)),
                  null != e.selectionCssClass &&
                    (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)),
                  (e.selectionAdapter = f.Decorate(e.selectionAdapter, h))),
                (e.language = this._resolveLanguage(e.language)),
                e.language.push('en');
              for (var n = [], s = 0; s < e.language.length; s++) {
                var i = e.language[s];
                -1 === n.indexOf(i) && n.push(i);
              }
              return (
                (e.language = n),
                (e.translations = this._processTranslations(
                  e.language,
                  e.debug
                )),
                e
              );
            }),
            (n.prototype.reset = function () {
              function a(e) {
                return e.replace(/[^\u0000-\u007E]/g, function (e) {
                  return t[e] || e;
                });
              }
              this.defaults = {
                amdLanguageBase: './i18n/',
                autocomplete: 'off',
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: f.escapeMarkup,
                language: {},
                matcher: function e(t, n) {
                  if (null == t.term || '' === t.term.trim()) return n;
                  if (n.children && 0 < n.children.length) {
                    for (
                      var s = l.extend(!0, {}, n), i = n.children.length - 1;
                      0 <= i;
                      i--
                    )
                      null == e(t, n.children[i]) && s.children.splice(i, 1);
                    return 0 < s.children.length ? s : e(t, s);
                  }
                  var o = a(n.text).toUpperCase(),
                    r = a(t.term).toUpperCase();
                  return -1 < o.indexOf(r) ? n : null;
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                scrollAfterSelect: !1,
                sorter: function (e) {
                  return e;
                },
                templateResult: function (e) {
                  return e.text;
                },
                templateSelection: function (e) {
                  return e.text;
                },
                theme: 'default',
                width: 'resolve',
              };
            }),
            (n.prototype.applyFromElement = function (e, t) {
              var n = e.language,
                s = this.defaults.language,
                i = t.prop('lang'),
                t = t.closest('[lang]').prop('lang'),
                t = Array.prototype.concat.call(
                  this._resolveLanguage(i),
                  this._resolveLanguage(n),
                  this._resolveLanguage(s),
                  this._resolveLanguage(t)
                );
              return (e.language = t), e;
            }),
            (n.prototype._resolveLanguage = function (e) {
              if (!e) return [];
              if (l.isEmptyObject(e)) return [];
              if (l.isPlainObject(e)) return [e];
              for (
                var t, n = Array.isArray(e) ? e : [e], s = [], i = 0;
                i < n.length;
                i++
              )
                s.push(n[i]),
                  'string' == typeof n[i] &&
                    0 < n[i].indexOf('-') &&
                    ((t = n[i].split('-')[0]), s.push(t));
              return s;
            }),
            (n.prototype._processTranslations = function (e, t) {
              for (var n = new g(), s = 0; s < e.length; s++) {
                var i = new g(),
                  o = e[s];
                if ('string' == typeof o)
                  try {
                    i = g.loadPath(o);
                  } catch (e) {
                    try {
                      (o = this.defaults.amdLanguageBase + o),
                        (i = g.loadPath(o));
                    } catch (e) {
                      t &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The language file for "' +
                            o +
                            '" could not be automatically loaded. A fallback will be used instead.'
                        );
                    }
                  }
                else i = l.isPlainObject(o) ? new g(o) : o;
                n.extend(i);
              }
              return n;
            }),
            (n.prototype.set = function (e, t) {
              var n = {};
              n[l.camelCase(e)] = t;
              n = f._convertData(n);
              l.extend(!0, this.defaults, n);
            }),
            new n()
          );
        }
      ),
      u.define(
        'select2/options',
        ['jquery', './defaults', './utils'],
        function (c, n, u) {
          function e(e, t) {
            (this.options = e),
              null != t && this.fromElement(t),
              null != t && (this.options = n.applyFromElement(this.options, t)),
              (this.options = n.apply(this.options));
          }
          return (
            (e.prototype.fromElement = function (e) {
              var t = ['select2'];
              null == this.options.multiple &&
                (this.options.multiple = e.prop('multiple')),
                null == this.options.disabled &&
                  (this.options.disabled = e.prop('disabled')),
                null == this.options.autocomplete &&
                  e.prop('autocomplete') &&
                  (this.options.autocomplete = e.prop('autocomplete')),
                null == this.options.dir &&
                  (e.prop('dir')
                    ? (this.options.dir = e.prop('dir'))
                    : e.closest('[dir]').prop('dir')
                    ? (this.options.dir = e.closest('[dir]').prop('dir'))
                    : (this.options.dir = 'ltr')),
                e.prop('disabled', this.options.disabled),
                e.prop('multiple', this.options.multiple),
                u.GetData(e[0], 'select2Tags') &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                    ),
                  u.StoreData(e[0], 'data', u.GetData(e[0], 'select2Tags')),
                  u.StoreData(e[0], 'tags', !0)),
                u.GetData(e[0], 'ajaxUrl') &&
                  (this.options.debug &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.'
                    ),
                  e.attr('ajax--url', u.GetData(e[0], 'ajaxUrl')),
                  u.StoreData(e[0], 'ajax-Url', u.GetData(e[0], 'ajaxUrl')));
              var n = {};
              function s(e, t) {
                return t.toUpperCase();
              }
              for (var i = 0; i < e[0].attributes.length; i++) {
                var o = e[0].attributes[i].name,
                  r = 'data-';
                o.substr(0, r.length) == r &&
                  ((o = o.substring(r.length)),
                  (r = u.GetData(e[0], o)),
                  (n[o.replace(/-([a-z])/g, s)] = r));
              }
              c.fn.jquery &&
                '1.' == c.fn.jquery.substr(0, 2) &&
                e[0].dataset &&
                (n = c.extend(!0, {}, e[0].dataset, n));
              var a,
                l = c.extend(!0, {}, u.GetData(e[0]), n);
              for (a in (l = u._convertData(l)))
                -1 < t.indexOf(a) ||
                  (c.isPlainObject(this.options[a])
                    ? c.extend(this.options[a], l[a])
                    : (this.options[a] = l[a]));
              return this;
            }),
            (e.prototype.get = function (e) {
              return this.options[e];
            }),
            (e.prototype.set = function (e, t) {
              this.options[e] = t;
            }),
            e
          );
        }
      ),
      u.define(
        'select2/core',
        ['jquery', './options', './utils', './keys'],
        function (t, i, o, s) {
          var r = function (e, t) {
            null != o.GetData(e[0], 'select2') &&
              o.GetData(e[0], 'select2').destroy(),
              (this.$element = e),
              (this.id = this._generateId(e)),
              (t = t || {}),
              (this.options = new i(t, e)),
              r.__super__.constructor.call(this);
            var n = e.attr('tabindex') || 0;
            o.StoreData(e[0], 'old-tabindex', n), e.attr('tabindex', '-1');
            t = this.options.get('dataAdapter');
            this.dataAdapter = new t(e, this.options);
            n = this.render();
            this._placeContainer(n);
            t = this.options.get('selectionAdapter');
            (this.selection = new t(e, this.options)),
              (this.$selection = this.selection.render()),
              this.selection.position(this.$selection, n);
            t = this.options.get('dropdownAdapter');
            (this.dropdown = new t(e, this.options)),
              (this.$dropdown = this.dropdown.render()),
              this.dropdown.position(this.$dropdown, n);
            n = this.options.get('resultsAdapter');
            (this.results = new n(e, this.options, this.dataAdapter)),
              (this.$results = this.results.render()),
              this.results.position(this.$results, this.$dropdown);
            var s = this;
            this._bindAdapters(),
              this._registerDomEvents(),
              this._registerDataEvents(),
              this._registerSelectionEvents(),
              this._registerDropdownEvents(),
              this._registerResultsEvents(),
              this._registerEvents(),
              this.dataAdapter.current(function (e) {
                s.trigger('selection:update', {data: e});
              }),
              e[0].classList.add('select2-hidden-accessible'),
              e.attr('aria-hidden', 'true'),
              this._syncAttributes(),
              o.StoreData(e[0], 'select2', this),
              e.data('select2', this);
          };
          return (
            o.Extend(r, o.Observable),
            (r.prototype._generateId = function (e) {
              return (
                'select2-' +
                (null != e.attr('id')
                  ? e.attr('id')
                  : null != e.attr('name')
                  ? e.attr('name') + '-' + o.generateChars(2)
                  : o.generateChars(4)
                ).replace(/(:|\.|\[|\]|,)/g, '')
              );
            }),
            (r.prototype._placeContainer = function (e) {
              e.insertAfter(this.$element);
              var t = this._resolveWidth(
                this.$element,
                this.options.get('width')
              );
              null != t && e.css('width', t);
            }),
            (r.prototype._resolveWidth = function (e, t) {
              var n =
                /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ('resolve' == t) {
                var s = this._resolveWidth(e, 'style');
                return null != s ? s : this._resolveWidth(e, 'element');
              }
              if ('element' == t) {
                s = e.outerWidth(!1);
                return s <= 0 ? 'auto' : s + 'px';
              }
              if ('style' != t)
                return 'computedstyle' != t
                  ? t
                  : window.getComputedStyle(e[0]).width;
              e = e.attr('style');
              if ('string' != typeof e) return null;
              for (var i = e.split(';'), o = 0, r = i.length; o < r; o += 1) {
                var a = i[o].replace(/\s/g, '').match(n);
                if (null !== a && 1 <= a.length) return a[1];
              }
              return null;
            }),
            (r.prototype._bindAdapters = function () {
              this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container);
            }),
            (r.prototype._registerDomEvents = function () {
              var t = this;
              this.$element.on('change.select2', function () {
                t.dataAdapter.current(function (e) {
                  t.trigger('selection:update', {data: e});
                });
              }),
                this.$element.on('focus.select2', function (e) {
                  t.trigger('focus', e);
                }),
                (this._syncA = o.bind(this._syncAttributes, this)),
                (this._syncS = o.bind(this._syncSubtree, this)),
                (this._observer = new window.MutationObserver(function (e) {
                  t._syncA(), t._syncS(e);
                })),
                this._observer.observe(this.$element[0], {
                  attributes: !0,
                  childList: !0,
                  subtree: !1,
                });
            }),
            (r.prototype._registerDataEvents = function () {
              var n = this;
              this.dataAdapter.on('*', function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerSelectionEvents = function () {
              var n = this,
                s = ['toggle', 'focus'];
              this.selection.on('toggle', function () {
                n.toggleDropdown();
              }),
                this.selection.on('focus', function (e) {
                  n.focus(e);
                }),
                this.selection.on('*', function (e, t) {
                  -1 === s.indexOf(e) && n.trigger(e, t);
                });
            }),
            (r.prototype._registerDropdownEvents = function () {
              var n = this;
              this.dropdown.on('*', function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerResultsEvents = function () {
              var n = this;
              this.results.on('*', function (e, t) {
                n.trigger(e, t);
              });
            }),
            (r.prototype._registerEvents = function () {
              var n = this;
              this.on('open', function () {
                n.$container[0].classList.add('select2-container--open');
              }),
                this.on('close', function () {
                  n.$container[0].classList.remove('select2-container--open');
                }),
                this.on('enable', function () {
                  n.$container[0].classList.remove(
                    'select2-container--disabled'
                  );
                }),
                this.on('disable', function () {
                  n.$container[0].classList.add('select2-container--disabled');
                }),
                this.on('blur', function () {
                  n.$container[0].classList.remove('select2-container--focus');
                }),
                this.on('query', function (t) {
                  n.isOpen() || n.trigger('open', {}),
                    this.dataAdapter.query(t, function (e) {
                      n.trigger('results:all', {data: e, query: t});
                    });
                }),
                this.on('query:append', function (t) {
                  this.dataAdapter.query(t, function (e) {
                    n.trigger('results:append', {data: e, query: t});
                  });
                }),
                this.on('keypress', function (e) {
                  var t = e.which;
                  n.isOpen()
                    ? t === s.ESC || (t === s.UP && e.altKey)
                      ? (n.close(e), e.preventDefault())
                      : t === s.ENTER || t === s.TAB
                      ? (n.trigger('results:select', {}), e.preventDefault())
                      : t === s.SPACE && e.ctrlKey
                      ? (n.trigger('results:toggle', {}), e.preventDefault())
                      : t === s.UP
                      ? (n.trigger('results:previous', {}), e.preventDefault())
                      : t === s.DOWN &&
                        (n.trigger('results:next', {}), e.preventDefault())
                    : (t === s.ENTER ||
                        t === s.SPACE ||
                        (t === s.DOWN && e.altKey)) &&
                      (n.open(), e.preventDefault());
                });
            }),
            (r.prototype._syncAttributes = function () {
              this.options.set('disabled', this.$element.prop('disabled')),
                this.isDisabled()
                  ? (this.isOpen() && this.close(), this.trigger('disable', {}))
                  : this.trigger('enable', {});
            }),
            (r.prototype._isChangeMutation = function (e) {
              var t = this;
              if (e.addedNodes && 0 < e.addedNodes.length) {
                for (var n = 0; n < e.addedNodes.length; n++)
                  if (e.addedNodes[n].selected) return !0;
              } else {
                if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                if (Array.isArray(e))
                  return e.some(function (e) {
                    return t._isChangeMutation(e);
                  });
              }
              return !1;
            }),
            (r.prototype._syncSubtree = function (e) {
              var e = this._isChangeMutation(e),
                t = this;
              e &&
                this.dataAdapter.current(function (e) {
                  t.trigger('selection:update', {data: e});
                });
            }),
            (r.prototype.trigger = function (e, t) {
              var n = r.__super__.trigger,
                s = {
                  open: 'opening',
                  close: 'closing',
                  select: 'selecting',
                  unselect: 'unselecting',
                  clear: 'clearing',
                };
              if ((void 0 === t && (t = {}), e in s)) {
                var i = s[e],
                  s = {prevented: !1, name: e, args: t};
                if ((n.call(this, i, s), s.prevented))
                  return void (t.prevented = !0);
              }
              n.call(this, e, t);
            }),
            (r.prototype.toggleDropdown = function () {
              this.isDisabled() || (this.isOpen() ? this.close() : this.open());
            }),
            (r.prototype.open = function () {
              this.isOpen() || this.isDisabled() || this.trigger('query', {});
            }),
            (r.prototype.close = function (e) {
              this.isOpen() && this.trigger('close', {originalEvent: e});
            }),
            (r.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (r.prototype.isDisabled = function () {
              return this.options.get('disabled');
            }),
            (r.prototype.isOpen = function () {
              return this.$container[0].classList.contains(
                'select2-container--open'
              );
            }),
            (r.prototype.hasFocus = function () {
              return this.$container[0].classList.contains(
                'select2-container--focus'
              );
            }),
            (r.prototype.focus = function (e) {
              this.hasFocus() ||
                (this.$container[0].classList.add('select2-container--focus'),
                this.trigger('focus', {}));
            }),
            (r.prototype.enable = function (e) {
              this.options.get('debug') &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                ),
                (null != e && 0 !== e.length) || (e = [!0]);
              e = !e[0];
              this.$element.prop('disabled', e);
            }),
            (r.prototype.data = function () {
              this.options.get('debug') &&
                0 < arguments.length &&
                window.console &&
                console.warn &&
                console.warn(
                  'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                );
              var t = [];
              return (
                this.dataAdapter.current(function (e) {
                  t = e;
                }),
                t
              );
            }),
            (r.prototype.val = function (e) {
              if (
                (this.options.get('debug') &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                  ),
                null == e || 0 === e.length)
              )
                return this.$element.val();
              e = e[0];
              Array.isArray(e) &&
                (e = e.map(function (e) {
                  return e.toString();
                })),
                this.$element.val(e).trigger('input').trigger('change');
            }),
            (r.prototype.destroy = function () {
              o.RemoveData(this.$container[0]),
                this.$container.remove(),
                this._observer.disconnect(),
                (this._observer = null),
                (this._syncA = null),
                (this._syncS = null),
                this.$element.off('.select2'),
                this.$element.attr(
                  'tabindex',
                  o.GetData(this.$element[0], 'old-tabindex')
                ),
                this.$element[0].classList.remove('select2-hidden-accessible'),
                this.$element.attr('aria-hidden', 'false'),
                o.RemoveData(this.$element[0]),
                this.$element.removeData('select2'),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                (this.dataAdapter = null),
                (this.selection = null),
                (this.dropdown = null),
                (this.results = null);
            }),
            (r.prototype.render = function () {
              var e = t(
                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
              );
              return (
                e.attr('dir', this.options.get('dir')),
                (this.$container = e),
                this.$container[0].classList.add(
                  'select2-container--' + this.options.get('theme')
                ),
                o.StoreData(e[0], 'element', this.$element),
                e
              );
            }),
            r
          );
        }
      ),
      u.define('select2/dropdown/attachContainer', [], function () {
        function e(e, t, n) {
          e.call(this, t, n);
        }
        return (
          (e.prototype.position = function (e, t, n) {
            n.find('.dropdown-wrapper').append(t),
              t[0].classList.add('select2-dropdown--below'),
              n[0].classList.add('select2-container--below');
          }),
          e
        );
      }),
      u.define('select2/dropdown/stopPropagation', [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$dropdown.on(
              [
                'blur',
                'change',
                'click',
                'dblclick',
                'focus',
                'focusin',
                'focusout',
                'input',
                'keydown',
                'keyup',
                'keypress',
                'mousedown',
                'mouseenter',
                'mouseleave',
                'mousemove',
                'mouseover',
                'mouseup',
                'search',
                'touchend',
                'touchstart',
              ].join(' '),
              function (e) {
                e.stopPropagation();
              }
            );
          }),
          e
        );
      }),
      u.define('select2/selection/stopPropagation', [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, n) {
            e.call(this, t, n);
            this.$selection.on(
              [
                'blur',
                'change',
                'click',
                'dblclick',
                'focus',
                'focusin',
                'focusout',
                'input',
                'keydown',
                'keyup',
                'keypress',
                'mousedown',
                'mouseenter',
                'mouseleave',
                'mousemove',
                'mouseover',
                'mouseup',
                'search',
                'touchend',
                'touchstart',
              ].join(' '),
              function (e) {
                e.stopPropagation();
              }
            );
          }),
          e
        );
      }),
      (a = function (u) {
        var d,
          p,
          e = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
          t =
            'onwheel' in document || 9 <= document.documentMode
              ? ['wheel']
              : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
          h = Array.prototype.slice;
        if (u.event.fixHooks)
          for (var n = e.length; n; )
            u.event.fixHooks[e[--n]] = u.event.mouseHooks;
        var f = (u.event.special.mousewheel = {
          version: '3.1.12',
          setup: function () {
            if (this.addEventListener)
              for (var e = t.length; e; ) this.addEventListener(t[--e], s, !1);
            else this.onmousewheel = s;
            u.data(this, 'mousewheel-line-height', f.getLineHeight(this)),
              u.data(this, 'mousewheel-page-height', f.getPageHeight(this));
          },
          teardown: function () {
            if (this.removeEventListener)
              for (var e = t.length; e; )
                this.removeEventListener(t[--e], s, !1);
            else this.onmousewheel = null;
            u.removeData(this, 'mousewheel-line-height'),
              u.removeData(this, 'mousewheel-page-height');
          },
          getLineHeight: function (e) {
            var t = u(e),
              e = t['offsetParent' in u.fn ? 'offsetParent' : 'parent']();
            return (
              e.length || (e = u('body')),
              parseInt(e.css('fontSize'), 10) ||
                parseInt(t.css('fontSize'), 10) ||
                16
            );
          },
          getPageHeight: function (e) {
            return u(e).height();
          },
          settings: {adjustOldDeltas: !0, normalizeOffset: !0},
        });
        function s(e) {
          var t,
            n = e || window.event,
            s = h.call(arguments, 1),
            i = 0,
            o = 0,
            r = 0,
            a = 0,
            l = 0,
            c = 0;
          if (
            ((e = u.event.fix(n)),
            (e.type = 'mousewheel'),
            'detail' in n && (r = -1 * n.detail),
            'wheelDelta' in n && (r = n.wheelDelta),
            'wheelDeltaY' in n && (r = n.wheelDeltaY),
            'wheelDeltaX' in n && (o = -1 * n.wheelDeltaX),
            'axis' in n &&
              n.axis === n.HORIZONTAL_AXIS &&
              ((o = -1 * r), (r = 0)),
            (i = 0 === r ? o : r),
            'deltaY' in n && (i = r = -1 * n.deltaY),
            'deltaX' in n && ((o = n.deltaX), 0 === r && (i = -1 * o)),
            0 !== r || 0 !== o)
          )
            return (
              1 === n.deltaMode
                ? ((i *= t = u.data(this, 'mousewheel-line-height')),
                  (r *= t),
                  (o *= t))
                : 2 === n.deltaMode &&
                  ((i *= t = u.data(this, 'mousewheel-page-height')),
                  (r *= t),
                  (o *= t)),
              (a = Math.max(Math.abs(r), Math.abs(o))),
              (!p || a < p) && m(n, (p = a)) && (p /= 40),
              m(n, a) && ((i /= 40), (o /= 40), (r /= 40)),
              (i = Math[1 <= i ? 'floor' : 'ceil'](i / p)),
              (o = Math[1 <= o ? 'floor' : 'ceil'](o / p)),
              (r = Math[1 <= r ? 'floor' : 'ceil'](r / p)),
              f.settings.normalizeOffset &&
                this.getBoundingClientRect &&
                ((a = this.getBoundingClientRect()),
                (l = e.clientX - a.left),
                (c = e.clientY - a.top)),
              (e.deltaX = o),
              (e.deltaY = r),
              (e.deltaFactor = p),
              (e.offsetX = l),
              (e.offsetY = c),
              (e.deltaMode = 0),
              s.unshift(e, i, o, r),
              d && clearTimeout(d),
              (d = setTimeout(g, 200)),
              (u.event.dispatch || u.event.handle).apply(this, s)
            );
        }
        function g() {
          p = null;
        }
        function m(e, t) {
          return (
            f.settings.adjustOldDeltas &&
            'mousewheel' === e.type &&
            t % 120 == 0
          );
        }
        u.fn.extend({
          mousewheel: function (e) {
            return e ? this.bind('mousewheel', e) : this.trigger('mousewheel');
          },
          unmousewheel: function (e) {
            return this.unbind('mousewheel', e);
          },
        });
      }),
      'function' == typeof u.define && u.define.amd
        ? u.define('jquery-mousewheel', ['jquery'], a)
        : 'object' == typeof exports
        ? (module.exports = a)
        : a(t),
      u.define(
        'jquery.select2',
        [
          'jquery',
          'jquery-mousewheel',
          './select2/core',
          './select2/defaults',
          './select2/utils',
        ],
        function (i, e, o, t, r) {
          var a;
          return (
            null == i.fn.select2 &&
              ((a = ['open', 'close', 'destroy']),
              (i.fn.select2 = function (t) {
                if ('object' == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var e = i.extend(!0, {}, t);
                      new o(i(this), e);
                    }),
                    this
                  );
                if ('string' != typeof t)
                  throw new Error('Invalid arguments for Select2: ' + t);
                var n,
                  s = Array.prototype.slice.call(arguments, 1);
                return (
                  this.each(function () {
                    var e = r.GetData(this, 'select2');
                    null == e &&
                      window.console &&
                      console.error &&
                      console.error(
                        "The select2('" +
                          t +
                          "') method was called on an element that is not using Select2."
                      ),
                      (n = e[t].apply(e, s));
                  }),
                  -1 < a.indexOf(t) ? this : n
                );
              })),
            null == i.fn.select2.defaults && (i.fn.select2.defaults = t),
            o
          );
        }
      ),
      {define: u.define, require: u.require});
  function b(e, t) {
    return s.call(e, t);
  }
  function l(e, t) {
    var n,
      s,
      i,
      o,
      r,
      a,
      l,
      c,
      u,
      d,
      p = t && t.split('/'),
      h = v.map,
      f = (h && h['*']) || {};
    if (e) {
      for (
        t = (e = e.split('/')).length - 1,
          v.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, '')),
          '.' === e[0].charAt(0) &&
            p &&
            (e = p.slice(0, p.length - 1).concat(e)),
          c = 0;
        c < e.length;
        c++
      )
        '.' === (d = e[c])
          ? (e.splice(c, 1), --c)
          : '..' === d &&
            (0 === c ||
              (1 === c && '..' === e[2]) ||
              '..' === e[c - 1] ||
              (0 < c && (e.splice(c - 1, 2), (c -= 2))));
      e = e.join('/');
    }
    if ((p || f) && h) {
      for (c = (n = e.split('/')).length; 0 < c; --c) {
        if (((s = n.slice(0, c).join('/')), p))
          for (u = p.length; 0 < u; --u)
            if (((i = h[p.slice(0, u).join('/')]), (i = i && i[s]))) {
              (o = i), (r = c);
              break;
            }
        if (o) break;
        !a && f && f[s] && ((a = f[s]), (l = c));
      }
      !o && a && ((o = a), (r = l)),
        o && (n.splice(0, r, o), (e = n.join('/')));
    }
    return e;
  }
  function w(t, n) {
    return function () {
      var e = i.call(arguments, 0);
      return (
        'string' != typeof e[0] && 1 === e.length && e.push(null),
        r.apply(p, e.concat([t, n]))
      );
    };
  }
  function x(e) {
    var t;
    if (
      (b(m, e) && ((t = m[e]), delete m[e], (y[e] = !0), o.apply(p, t)),
      !b(g, e) && !b(y, e))
    )
      throw new Error('No ' + e);
    return g[e];
  }
  function c(e) {
    var t,
      n = e ? e.indexOf('!') : -1;
    return (
      -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))),
      [t, e]
    );
  }
  function A(e) {
    return e ? c(e) : [];
  }
  var u = a.require('jquery.select2');
  return (t.fn.select2.amd = a), u;
});
/*!
 * Flickity PACKAGED v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function (e, i) {
  if (typeof define == 'function' && define.amd) {
    define('jquery-bridget/jquery-bridget', ['jquery'], function (t) {
      return i(e, t);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = i(e, require('jquery'));
  } else {
    e.jQueryBridget = i(e, e.jQuery);
  }
})(window, function t(e, r) {
  'use strict';
  var o = Array.prototype.slice;
  var i = e.console;
  var u =
    typeof i == 'undefined'
      ? function () {}
      : function (t) {
          i.error(t);
        };
  function n(h, s, c) {
    c = c || r || e.jQuery;
    if (!c) {
      return;
    }
    if (!s.prototype.option) {
      s.prototype.option = function (t) {
        if (!c.isPlainObject(t)) {
          return;
        }
        this.options = c.extend(true, this.options, t);
      };
    }
    c.fn[h] = function (t) {
      if (typeof t == 'string') {
        var e = o.call(arguments, 1);
        return i(this, t, e);
      }
      n(this, t);
      return this;
    };
    function i(t, r, o) {
      var a;
      var l = '$().' + h + '("' + r + '")';
      t.each(function (t, e) {
        var i = c.data(e, h);
        if (!i) {
          u(h + ' not initialized. Cannot call methods, i.e. ' + l);
          return;
        }
        var n = i[r];
        if (!n || r.charAt(0) == '_') {
          u(l + ' is not a valid method');
          return;
        }
        var s = n.apply(i, o);
        a = a === undefined ? s : a;
      });
      return a !== undefined ? a : t;
    }
    function n(t, n) {
      t.each(function (t, e) {
        var i = c.data(e, h);
        if (i) {
          i.option(n);
          i._init();
        } else {
          i = new s(e, n);
          c.data(e, h, i);
        }
      });
    }
    a(c);
  }
  function a(t) {
    if (!t || (t && t.bridget)) {
      return;
    }
    t.bridget = n;
  }
  a(r || e.jQuery);
  return n;
});
(function (t, e) {
  if (typeof define == 'function' && define.amd) {
    define('ev-emitter/ev-emitter', e);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = e();
  } else {
    t.EvEmitter = e();
  }
})(typeof window != 'undefined' ? window : this, function () {
  function t() {}
  var e = t.prototype;
  e.on = function (t, e) {
    if (!t || !e) {
      return;
    }
    var i = (this._events = this._events || {});
    var n = (i[t] = i[t] || []);
    if (n.indexOf(e) == -1) {
      n.push(e);
    }
    return this;
  };
  e.once = function (t, e) {
    if (!t || !e) {
      return;
    }
    this.on(t, e);
    var i = (this._onceEvents = this._onceEvents || {});
    var n = (i[t] = i[t] || {});
    n[e] = true;
    return this;
  };
  e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (!i || !i.length) {
      return;
    }
    var n = i.indexOf(e);
    if (n != -1) {
      i.splice(n, 1);
    }
    return this;
  };
  e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (!i || !i.length) {
      return;
    }
    i = i.slice(0);
    e = e || [];
    var n = this._onceEvents && this._onceEvents[t];
    for (var s = 0; s < i.length; s++) {
      var r = i[s];
      var o = n && n[r];
      if (o) {
        this.off(t, r);
        delete n[r];
      }
      r.apply(this, e);
    }
    return this;
  };
  e.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };
  return t;
});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function (t, e) {
  if (typeof define == 'function' && define.amd) {
    define('get-size/get-size', e);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = e();
  } else {
    t.getSize = e();
  }
})(window, function t() {
  'use strict';
  function m(t) {
    var e = parseFloat(t);
    var i = t.indexOf('%') == -1 && !isNaN(e);
    return i && e;
  }
  function e() {}
  var i =
    typeof console == 'undefined'
      ? e
      : function (t) {
          console.error(t);
        };
  var y = [
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderBottomWidth',
  ];
  var b = y.length;
  function E() {
    var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
    };
    for (var e = 0; e < b; e++) {
      var i = y[e];
      t[i] = 0;
    }
    return t;
  }
  function S(t) {
    var e = getComputedStyle(t);
    if (!e) {
      i(
        'Style returned ' +
          e +
          '. Are you running this code in a hidden iframe on Firefox? ' +
          'See https://bit.ly/getsizebug1'
      );
    }
    return e;
  }
  var n = false;
  var C;
  function x() {
    if (n) {
      return;
    }
    n = true;
    var t = document.createElement('div');
    t.style.width = '200px';
    t.style.padding = '1px 2px 3px 4px';
    t.style.borderStyle = 'solid';
    t.style.borderWidth = '1px 2px 3px 4px';
    t.style.boxSizing = 'border-box';
    var e = document.body || document.documentElement;
    e.appendChild(t);
    var i = S(t);
    C = Math.round(m(i.width)) == 200;
    s.isBoxSizeOuter = C;
    e.removeChild(t);
  }
  function s(t) {
    x();
    if (typeof t == 'string') {
      t = document.querySelector(t);
    }
    if (!t || typeof t != 'object' || !t.nodeType) {
      return;
    }
    var e = S(t);
    if (e.display == 'none') {
      return E();
    }
    var i = {};
    i.width = t.offsetWidth;
    i.height = t.offsetHeight;
    var n = (i.isBorderBox = e.boxSizing == 'border-box');
    for (var s = 0; s < b; s++) {
      var r = y[s];
      var o = e[r];
      var a = parseFloat(o);
      i[r] = !isNaN(a) ? a : 0;
    }
    var l = i.paddingLeft + i.paddingRight;
    var h = i.paddingTop + i.paddingBottom;
    var c = i.marginLeft + i.marginRight;
    var u = i.marginTop + i.marginBottom;
    var d = i.borderLeftWidth + i.borderRightWidth;
    var f = i.borderTopWidth + i.borderBottomWidth;
    var p = n && C;
    var v = m(e.width);
    if (v !== false) {
      i.width = v + (p ? 0 : l + d);
    }
    var g = m(e.height);
    if (g !== false) {
      i.height = g + (p ? 0 : h + f);
    }
    i.innerWidth = i.width - (l + d);
    i.innerHeight = i.height - (h + f);
    i.outerWidth = i.width + c;
    i.outerHeight = i.height + u;
    return i;
  }
  return s;
});
(function (t, e) {
  'use strict';
  if (typeof define == 'function' && define.amd) {
    define('desandro-matches-selector/matches-selector', e);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = e();
  } else {
    t.matchesSelector = e();
  }
})(window, function t() {
  'use strict';
  var n = (function () {
    var t = window.Element.prototype;
    if (t.matches) {
      return 'matches';
    }
    if (t.matchesSelector) {
      return 'matchesSelector';
    }
    var e = ['webkit', 'moz', 'ms', 'o'];
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      var s = n + 'MatchesSelector';
      if (t[s]) {
        return s;
      }
    }
  })();
  return function t(e, i) {
    return e[n](i);
  };
});
(function (e, i) {
  if (typeof define == 'function' && define.amd) {
    define('fizzy-ui-utils/utils', [
      'desandro-matches-selector/matches-selector',
    ], function (t) {
      return i(e, t);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = i(e, require('desandro-matches-selector'));
  } else {
    e.fizzyUIUtils = i(e, e.matchesSelector);
  }
})(window, function t(h, r) {
  var c = {};
  c.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }
    return t;
  };
  c.modulo = function (t, e) {
    return ((t % e) + e) % e;
  };
  var i = Array.prototype.slice;
  c.makeArray = function (t) {
    if (Array.isArray(t)) {
      return t;
    }
    if (t === null || t === undefined) {
      return [];
    }
    var e = typeof t == 'object' && typeof t.length == 'number';
    if (e) {
      return i.call(t);
    }
    return [t];
  };
  c.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    if (i != -1) {
      t.splice(i, 1);
    }
  };
  c.getParent = function (t, e) {
    while (t.parentNode && t != document.body) {
      t = t.parentNode;
      if (r(t, e)) {
        return t;
      }
    }
  };
  c.getQueryElement = function (t) {
    if (typeof t == 'string') {
      return document.querySelector(t);
    }
    return t;
  };
  c.handleEvent = function (t) {
    var e = 'on' + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  c.filterFindElements = function (t, n) {
    t = c.makeArray(t);
    var s = [];
    t.forEach(function (t) {
      if (!(t instanceof HTMLElement)) {
        return;
      }
      if (!n) {
        s.push(t);
        return;
      }
      if (r(t, n)) {
        s.push(t);
      }
      var e = t.querySelectorAll(n);
      for (var i = 0; i < e.length; i++) {
        s.push(e[i]);
      }
    });
    return s;
  };
  c.debounceMethod = function (t, e, n) {
    n = n || 100;
    var s = t.prototype[e];
    var r = e + 'Timeout';
    t.prototype[e] = function () {
      var t = this[r];
      clearTimeout(t);
      var e = arguments;
      var i = this;
      this[r] = setTimeout(function () {
        s.apply(i, e);
        delete i[r];
      }, n);
    };
  };
  c.docReady = function (t) {
    var e = document.readyState;
    if (e == 'complete' || e == 'interactive') {
      setTimeout(t);
    } else {
      document.addEventListener('DOMContentLoaded', t);
    }
  };
  c.toDashed = function (t) {
    return t
      .replace(/(.)([A-Z])/g, function (t, e, i) {
        return e + '-' + i;
      })
      .toLowerCase();
  };
  var u = h.console;
  c.htmlInit = function (a, l) {
    c.docReady(function () {
      var t = c.toDashed(l);
      var s = 'data-' + t;
      var e = document.querySelectorAll('[' + s + ']');
      var i = document.querySelectorAll('.js-' + t);
      var n = c.makeArray(e).concat(c.makeArray(i));
      var r = s + '-options';
      var o = h.jQuery;
      n.forEach(function (e) {
        var t = e.getAttribute(s) || e.getAttribute(r);
        var i;
        try {
          i = t && JSON.parse(t);
        } catch (t) {
          if (u) {
            u.error('Error parsing ' + s + ' on ' + e.className + ': ' + t);
          }
          return;
        }
        var n = new a(e, i);
        if (o) {
          o.data(e, l, n);
        }
      });
    });
  };
  return c;
});
(function (e, i) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/cell', ['get-size/get-size'], function (t) {
      return i(e, t);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = i(e, require('get-size'));
  } else {
    e.Flickity = e.Flickity || {};
    e.Flickity.Cell = i(e, e.getSize);
  }
})(window, function t(e, i) {
  function n(t, e) {
    this.element = t;
    this.parent = e;
    this.create();
  }
  var s = n.prototype;
  s.create = function () {
    this.element.style.position = 'absolute';
    this.element.setAttribute('aria-hidden', 'true');
    this.x = 0;
    this.shift = 0;
  };
  s.destroy = function () {
    this.unselect();
    this.element.style.position = '';
    var t = this.parent.originSide;
    this.element.style[t] = '';
    this.element.removeAttribute('aria-hidden');
  };
  s.getSize = function () {
    this.size = i(this.element);
  };
  s.setPosition = function (t) {
    this.x = t;
    this.updateTarget();
    this.renderPosition(t);
  };
  s.updateTarget = s.setDefaultTarget = function () {
    var t = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
    this.target =
      this.x + this.size[t] + this.size.width * this.parent.cellAlign;
  };
  s.renderPosition = function (t) {
    var e = this.parent.originSide;
    this.element.style[e] = this.parent.getPositionValue(t);
  };
  s.select = function () {
    this.element.classList.add('is-selected');
    this.element.removeAttribute('aria-hidden');
  };
  s.unselect = function () {
    this.element.classList.remove('is-selected');
    this.element.setAttribute('aria-hidden', 'true');
  };
  s.wrapShift = function (t) {
    this.shift = t;
    this.renderPosition(this.x + this.parent.slideableWidth * t);
  };
  s.remove = function () {
    this.element.parentNode.removeChild(this.element);
  };
  return n;
});
(function (t, e) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/slide', e);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = e();
  } else {
    t.Flickity = t.Flickity || {};
    t.Flickity.Slide = e();
  }
})(window, function t() {
  'use strict';
  function e(t) {
    this.parent = t;
    this.isOriginLeft = t.originSide == 'left';
    this.cells = [];
    this.outerWidth = 0;
    this.height = 0;
  }
  var i = e.prototype;
  i.addCell = function (t) {
    this.cells.push(t);
    this.outerWidth += t.size.outerWidth;
    this.height = Math.max(t.size.outerHeight, this.height);
    if (this.cells.length == 1) {
      this.x = t.x;
      var e = this.isOriginLeft ? 'marginLeft' : 'marginRight';
      this.firstMargin = t.size[e];
    }
  };
  i.updateTarget = function () {
    var t = this.isOriginLeft ? 'marginRight' : 'marginLeft';
    var e = this.getLastCell();
    var i = e ? e.size[t] : 0;
    var n = this.outerWidth - (this.firstMargin + i);
    this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
  };
  i.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };
  i.select = function () {
    this.cells.forEach(function (t) {
      t.select();
    });
  };
  i.unselect = function () {
    this.cells.forEach(function (t) {
      t.unselect();
    });
  };
  i.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  };
  return e;
});
(function (e, i) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/animate', ['fizzy-ui-utils/utils'], function (t) {
      return i(e, t);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = i(e, require('fizzy-ui-utils'));
  } else {
    e.Flickity = e.Flickity || {};
    e.Flickity.animatePrototype = i(e, e.fizzyUIUtils);
  }
})(window, function t(e, i) {
  var n = {};
  n.startAnimation = function () {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;
    this.restingFrames = 0;
    this.animate();
  };
  n.animate = function () {
    this.applyDragForce();
    this.applySelectedAttraction();
    var t = this.x;
    this.integratePhysics();
    this.positionSlider();
    this.settle(t);
    if (this.isAnimating) {
      var e = this;
      requestAnimationFrame(function t() {
        e.animate();
      });
    }
  };
  n.positionSlider = function () {
    var t = this.x;
    if (this.options.wrapAround && this.cells.length > 1) {
      t = i.modulo(t, this.slideableWidth);
      t -= this.slideableWidth;
      this.shiftWrapCells(t);
    }
    this.setTranslateX(t, this.isAnimating);
    this.dispatchScrollEvent();
  };
  n.setTranslateX = function (t, e) {
    t += this.cursorPosition;
    t = this.options.rightToLeft ? -t : t;
    var i = this.getPositionValue(t);
    this.slider.style.transform = e
      ? 'translate3d(' + i + ',0,0)'
      : 'translateX(' + i + ')';
  };
  n.dispatchScrollEvent = function () {
    var t = this.slides[0];
    if (!t) {
      return;
    }
    var e = -this.x - t.target;
    var i = e / this.slidesWidth;
    this.dispatchEvent('scroll', null, [i, e]);
  };
  n.positionSliderAtSelected = function () {
    if (!this.cells.length) {
      return;
    }
    this.x = -this.selectedSlide.target;
    this.velocity = 0;
    this.positionSlider();
  };
  n.getPositionValue = function (t) {
    if (this.options.percentPosition) {
      return Math.round((t / this.size.innerWidth) * 1e4) * 0.01 + '%';
    } else {
      return Math.round(t) + 'px';
    }
  };
  n.settle = function (t) {
    var e =
      !this.isPointerDown && Math.round(this.x * 100) == Math.round(t * 100);
    if (e) {
      this.restingFrames++;
    }
    if (this.restingFrames > 2) {
      this.isAnimating = false;
      delete this.isFreeScrolling;
      this.positionSlider();
      this.dispatchEvent('settle', null, [this.selectedIndex]);
    }
  };
  n.shiftWrapCells = function (t) {
    var e = this.cursorPosition + t;
    this._shiftCells(this.beforeShiftCells, e, -1);
    var i =
      this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
    this._shiftCells(this.afterShiftCells, i, 1);
  };
  n._shiftCells = function (t, e, i) {
    for (var n = 0; n < t.length; n++) {
      var s = t[n];
      var r = e > 0 ? i : 0;
      s.wrapShift(r);
      e -= s.size.outerWidth;
    }
  };
  n._unshiftCells = function (t) {
    if (!t || !t.length) {
      return;
    }
    for (var e = 0; e < t.length; e++) {
      t[e].wrapShift(0);
    }
  };
  n.integratePhysics = function () {
    this.x += this.velocity;
    this.velocity *= this.getFrictionFactor();
  };
  n.applyForce = function (t) {
    this.velocity += t;
  };
  n.getFrictionFactor = function () {
    return (
      1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction']
    );
  };
  n.getRestingPosition = function () {
    return this.x + this.velocity / (1 - this.getFrictionFactor());
  };
  n.applyDragForce = function () {
    if (!this.isDraggable || !this.isPointerDown) {
      return;
    }
    var t = this.dragX - this.x;
    var e = t - this.velocity;
    this.applyForce(e);
  };
  n.applySelectedAttraction = function () {
    var t = this.isDraggable && this.isPointerDown;
    if (t || this.isFreeScrolling || !this.slides.length) {
      return;
    }
    var e = this.selectedSlide.target * -1 - this.x;
    var i = e * this.options.selectedAttraction;
    this.applyForce(i);
  };
  return n;
});
(function (o, a) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/flickity', [
      'ev-emitter/ev-emitter',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './cell',
      './slide',
      './animate',
    ], function (t, e, i, n, s, r) {
      return a(o, t, e, i, n, s, r);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = a(
      o,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./cell'),
      require('./slide'),
      require('./animate')
    );
  } else {
    var t = o.Flickity;
    o.Flickity = a(
      o,
      o.EvEmitter,
      o.getSize,
      o.fizzyUIUtils,
      t.Cell,
      t.Slide,
      t.animatePrototype
    );
  }
})(window, function t(n, e, i, a, s, o, r) {
  var l = n.jQuery;
  var h = n.getComputedStyle;
  var c = n.console;
  function u(t, e) {
    t = a.makeArray(t);
    while (t.length) {
      e.appendChild(t.shift());
    }
  }
  var d = 0;
  var f = {};
  function p(t, e) {
    var i = a.getQueryElement(t);
    if (!i) {
      if (c) {
        c.error('Bad element for Flickity: ' + (i || t));
      }
      return;
    }
    this.element = i;
    if (this.element.flickityGUID) {
      var n = f[this.element.flickityGUID];
      if (n) n.option(e);
      return n;
    }
    if (l) {
      this.$element = l(this.element);
    }
    this.options = a.extend({}, this.constructor.defaults);
    this.option(e);
    this._create();
  }
  p.defaults = {
    accessibility: true,
    cellAlign: 'center',
    freeScrollFriction: 0.075,
    friction: 0.28,
    namespaceJQueryEvents: true,
    percentPosition: true,
    resize: true,
    selectedAttraction: 0.025,
    setGallerySize: true,
  };
  p.createMethods = [];
  var v = p.prototype;
  a.extend(v, e.prototype);
  v._create = function () {
    var t = (this.guid = ++d);
    this.element.flickityGUID = t;
    f[t] = this;
    this.selectedIndex = 0;
    this.restingFrames = 0;
    this.x = 0;
    this.velocity = 0;
    this.originSide = this.options.rightToLeft ? 'right' : 'left';
    this.viewport = document.createElement('div');
    this.viewport.className = 'flickity-viewport';
    this._createSlider();
    if (this.options.resize || this.options.watchCSS) {
      n.addEventListener('resize', this);
    }
    for (var e in this.options.on) {
      var i = this.options.on[e];
      this.on(e, i);
    }
    p.createMethods.forEach(function (t) {
      this[t]();
    }, this);
    if (this.options.watchCSS) {
      this.watchCSS();
    } else {
      this.activate();
    }
  };
  v.option = function (t) {
    a.extend(this.options, t);
  };
  v.activate = function () {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.element.classList.add('flickity-enabled');
    if (this.options.rightToLeft) {
      this.element.classList.add('flickity-rtl');
    }
    this.getSize();
    var t = this._filterFindCellElements(this.element.children);
    u(t, this.slider);
    this.viewport.appendChild(this.slider);
    this.element.appendChild(this.viewport);
    this.reloadCells();
    if (this.options.accessibility) {
      this.element.tabIndex = 0;
      this.element.addEventListener('keydown', this);
    }
    this.emitEvent('activate');
    this.selectInitialIndex();
    this.isInitActivated = true;
    this.dispatchEvent('ready');
  };
  v._createSlider = function () {
    var t = document.createElement('div');
    t.className = 'flickity-slider';
    t.style[this.originSide] = 0;
    this.slider = t;
  };
  v._filterFindCellElements = function (t) {
    return a.filterFindElements(t, this.options.cellSelector);
  };
  v.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children);
    this.positionCells();
    this._getWrapShiftCells();
    this.setGallerySize();
  };
  v._makeCells = function (t) {
    var e = this._filterFindCellElements(t);
    var i = e.map(function (t) {
      return new s(t, this);
    }, this);
    return i;
  };
  v.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };
  v.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  };
  v.positionCells = function () {
    this._sizeCells(this.cells);
    this._positionCells(0);
  };
  v._positionCells = function (t) {
    t = t || 0;
    this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
    var e = 0;
    if (t > 0) {
      var i = this.cells[t - 1];
      e = i.x + i.size.outerWidth;
    }
    var n = this.cells.length;
    for (var s = t; s < n; s++) {
      var r = this.cells[s];
      r.setPosition(e);
      e += r.size.outerWidth;
      this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight);
    }
    this.slideableWidth = e;
    this.updateSlides();
    this._containSlides();
    this.slidesWidth = n
      ? this.getLastSlide().target - this.slides[0].target
      : 0;
  };
  v._sizeCells = function (t) {
    t.forEach(function (t) {
      t.getSize();
    });
  };
  v.updateSlides = function () {
    this.slides = [];
    if (!this.cells.length) {
      return;
    }
    var n = new o(this);
    this.slides.push(n);
    var t = this.originSide == 'left';
    var s = t ? 'marginRight' : 'marginLeft';
    var r = this._getCanCellFit();
    this.cells.forEach(function (t, e) {
      if (!n.cells.length) {
        n.addCell(t);
        return;
      }
      var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
      if (r.call(this, e, i)) {
        n.addCell(t);
      } else {
        n.updateTarget();
        n = new o(this);
        this.slides.push(n);
        n.addCell(t);
      }
    }, this);
    n.updateTarget();
    this.updateSelectedSlide();
  };
  v._getCanCellFit = function () {
    var t = this.options.groupCells;
    if (!t) {
      return function () {
        return false;
      };
    } else if (typeof t == 'number') {
      var e = parseInt(t, 10);
      return function (t) {
        return t % e !== 0;
      };
    }
    var i = typeof t == 'string' && t.match(/^(\d+)%$/);
    var n = i ? parseInt(i[1], 10) / 100 : 1;
    return function (t, e) {
      return e <= (this.size.innerWidth + 1) * n;
    };
  };
  v._init = v.reposition = function () {
    this.positionCells();
    this.positionSliderAtSelected();
  };
  v.getSize = function () {
    this.size = i(this.element);
    this.setCellAlign();
    this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };
  var g = {
    center: {left: 0.5, right: 0.5},
    left: {left: 0, right: 1},
    right: {right: 0, left: 1},
  };
  v.setCellAlign = function () {
    var t = g[this.options.cellAlign];
    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
  };
  v.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var t =
        this.options.adaptiveHeight && this.selectedSlide
          ? this.selectedSlide.height
          : this.maxCellHeight;
      this.viewport.style.height = t + 'px';
    }
  };
  v._getWrapShiftCells = function () {
    if (!this.options.wrapAround) {
      return;
    }
    this._unshiftCells(this.beforeShiftCells);
    this._unshiftCells(this.afterShiftCells);
    var t = this.cursorPosition;
    var e = this.cells.length - 1;
    this.beforeShiftCells = this._getGapCells(t, e, -1);
    t = this.size.innerWidth - this.cursorPosition;
    this.afterShiftCells = this._getGapCells(t, 0, 1);
  };
  v._getGapCells = function (t, e, i) {
    var n = [];
    while (t > 0) {
      var s = this.cells[e];
      if (!s) {
        break;
      }
      n.push(s);
      e += i;
      t -= s.size.outerWidth;
    }
    return n;
  };
  v._containSlides = function () {
    if (
      !this.options.contain ||
      this.options.wrapAround ||
      !this.cells.length
    ) {
      return;
    }
    var t = this.options.rightToLeft;
    var e = t ? 'marginRight' : 'marginLeft';
    var i = t ? 'marginLeft' : 'marginRight';
    var n = this.slideableWidth - this.getLastCell().size[i];
    var s = n < this.size.innerWidth;
    var r = this.cursorPosition + this.cells[0].size[e];
    var o = n - this.size.innerWidth * (1 - this.cellAlign);
    this.slides.forEach(function (t) {
      if (s) {
        t.target = n * this.cellAlign;
      } else {
        t.target = Math.max(t.target, r);
        t.target = Math.min(t.target, o);
      }
    }, this);
  };
  v.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;
    this.emitEvent(t, n);
    if (l && this.$element) {
      t += this.options.namespaceJQueryEvents ? '.flickity' : '';
      var s = t;
      if (e) {
        var r = new l.Event(e);
        r.type = t;
        s = r;
      }
      this.$element.trigger(s, i);
    }
  };
  v.select = function (t, e, i) {
    if (!this.isActive) {
      return;
    }
    t = parseInt(t, 10);
    this._wrapSelect(t);
    if (this.options.wrapAround || e) {
      t = a.modulo(t, this.slides.length);
    }
    if (!this.slides[t]) {
      return;
    }
    var n = this.selectedIndex;
    this.selectedIndex = t;
    this.updateSelectedSlide();
    if (i) {
      this.positionSliderAtSelected();
    } else {
      this.startAnimation();
    }
    if (this.options.adaptiveHeight) {
      this.setGallerySize();
    }
    this.dispatchEvent('select', null, [t]);
    if (t != n) {
      this.dispatchEvent('change', null, [t]);
    }
    this.dispatchEvent('cellSelect');
  };
  v._wrapSelect = function (t) {
    var e = this.slides.length;
    var i = this.options.wrapAround && e > 1;
    if (!i) {
      return t;
    }
    var n = a.modulo(t, e);
    var s = Math.abs(n - this.selectedIndex);
    var r = Math.abs(n + e - this.selectedIndex);
    var o = Math.abs(n - e - this.selectedIndex);
    if (!this.isDragSelect && r < s) {
      t += e;
    } else if (!this.isDragSelect && o < s) {
      t -= e;
    }
    if (t < 0) {
      this.x -= this.slideableWidth;
    } else if (t >= e) {
      this.x += this.slideableWidth;
    }
  };
  v.previous = function (t, e) {
    this.select(this.selectedIndex - 1, t, e);
  };
  v.next = function (t, e) {
    this.select(this.selectedIndex + 1, t, e);
  };
  v.updateSelectedSlide = function () {
    var t = this.slides[this.selectedIndex];
    if (!t) {
      return;
    }
    this.unselectSelectedSlide();
    this.selectedSlide = t;
    t.select();
    this.selectedCells = t.cells;
    this.selectedElements = t.getCellElements();
    this.selectedCell = t.cells[0];
    this.selectedElement = this.selectedElements[0];
  };
  v.unselectSelectedSlide = function () {
    if (this.selectedSlide) {
      this.selectedSlide.unselect();
    }
  };
  v.selectInitialIndex = function () {
    var t = this.options.initialIndex;
    if (this.isInitActivated) {
      this.select(this.selectedIndex, false, true);
      return;
    }
    if (t && typeof t == 'string') {
      var e = this.queryCell(t);
      if (e) {
        this.selectCell(t, false, true);
        return;
      }
    }
    var i = 0;
    if (t && this.slides[t]) {
      i = t;
    }
    this.select(i, false, true);
  };
  v.selectCell = function (t, e, i) {
    var n = this.queryCell(t);
    if (!n) {
      return;
    }
    var s = this.getCellSlideIndex(n);
    this.select(s, e, i);
  };
  v.getCellSlideIndex = function (t) {
    for (var e = 0; e < this.slides.length; e++) {
      var i = this.slides[e];
      var n = i.cells.indexOf(t);
      if (n != -1) {
        return e;
      }
    }
  };
  v.getCell = function (t) {
    for (var e = 0; e < this.cells.length; e++) {
      var i = this.cells[e];
      if (i.element == t) {
        return i;
      }
    }
  };
  v.getCells = function (t) {
    t = a.makeArray(t);
    var i = [];
    t.forEach(function (t) {
      var e = this.getCell(t);
      if (e) {
        i.push(e);
      }
    }, this);
    return i;
  };
  v.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  };
  v.getParentCell = function (t) {
    var e = this.getCell(t);
    if (e) {
      return e;
    }
    t = a.getParent(t, '.flickity-slider > *');
    return this.getCell(t);
  };
  v.getAdjacentCellElements = function (t, e) {
    if (!t) {
      return this.selectedSlide.getCellElements();
    }
    e = e === undefined ? this.selectedIndex : e;
    var i = this.slides.length;
    if (1 + t * 2 >= i) {
      return this.getCellElements();
    }
    var n = [];
    for (var s = e - t; s <= e + t; s++) {
      var r = this.options.wrapAround ? a.modulo(s, i) : s;
      var o = this.slides[r];
      if (o) {
        n = n.concat(o.getCellElements());
      }
    }
    return n;
  };
  v.queryCell = function (t) {
    if (typeof t == 'number') {
      return this.cells[t];
    }
    if (typeof t == 'string') {
      if (t.match(/^[#.]?[\d/]/)) {
        return;
      }
      t = this.element.querySelector(t);
    }
    return this.getCell(t);
  };
  v.uiChange = function () {
    this.emitEvent('uiChange');
  };
  v.childUIPointerDown = function (t) {
    if (t.type != 'touchstart') {
      t.preventDefault();
    }
    this.focus();
  };
  v.onresize = function () {
    this.watchCSS();
    this.resize();
  };
  a.debounceMethod(p, 'onresize', 150);
  v.resize = function () {
    if (!this.isActive) {
      return;
    }
    this.getSize();
    if (this.options.wrapAround) {
      this.x = a.modulo(this.x, this.slideableWidth);
    }
    this.positionCells();
    this._getWrapShiftCells();
    this.setGallerySize();
    this.emitEvent('resize');
    var t = this.selectedElements && this.selectedElements[0];
    this.selectCell(t, false, true);
  };
  v.watchCSS = function () {
    var t = this.options.watchCSS;
    if (!t) {
      return;
    }
    var e = h(this.element, ':after').content;
    if (e.indexOf('flickity') != -1) {
      this.activate();
    } else {
      this.deactivate();
    }
  };
  v.onkeydown = function (t) {
    var e = document.activeElement && document.activeElement != this.element;
    if (!this.options.accessibility || e) {
      return;
    }
    var i = p.keyboardHandlers[t.keyCode];
    if (i) {
      i.call(this);
    }
  };
  p.keyboardHandlers = {
    37: function () {
      var t = this.options.rightToLeft ? 'next' : 'previous';
      this.uiChange();
      this[t]();
    },
    39: function () {
      var t = this.options.rightToLeft ? 'previous' : 'next';
      this.uiChange();
      this[t]();
    },
  };
  v.focus = function () {
    var t = n.pageYOffset;
    this.element.focus({preventScroll: true});
    if (n.pageYOffset != t) {
      n.scrollTo(n.pageXOffset, t);
    }
  };
  v.deactivate = function () {
    if (!this.isActive) {
      return;
    }
    this.element.classList.remove('flickity-enabled');
    this.element.classList.remove('flickity-rtl');
    this.unselectSelectedSlide();
    this.cells.forEach(function (t) {
      t.destroy();
    });
    this.element.removeChild(this.viewport);
    u(this.slider.children, this.element);
    if (this.options.accessibility) {
      this.element.removeAttribute('tabIndex');
      this.element.removeEventListener('keydown', this);
    }
    this.isActive = false;
    this.emitEvent('deactivate');
  };
  v.destroy = function () {
    this.deactivate();
    n.removeEventListener('resize', this);
    this.allOff();
    this.emitEvent('destroy');
    if (l && this.$element) {
      l.removeData(this.element, 'flickity');
    }
    delete this.element.flickityGUID;
    delete f[this.guid];
  };
  a.extend(v, r);
  p.data = function (t) {
    t = a.getQueryElement(t);
    var e = t && t.flickityGUID;
    return e && f[e];
  };
  a.htmlInit(p, 'flickity');
  if (l && l.bridget) {
    l.bridget('flickity', p);
  }
  p.setJQuery = function (t) {
    l = t;
  };
  p.Cell = s;
  p.Slide = o;
  return p;
});
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
(function (e, i) {
  if (typeof define == 'function' && define.amd) {
    define('unipointer/unipointer', ['ev-emitter/ev-emitter'], function (t) {
      return i(e, t);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = i(e, require('ev-emitter'));
  } else {
    e.Unipointer = i(e, e.EvEmitter);
  }
})(window, function t(s, e) {
  function i() {}
  function n() {}
  var r = (n.prototype = Object.create(e.prototype));
  r.bindStartEvent = function (t) {
    this._bindStartEvent(t, true);
  };
  r.unbindStartEvent = function (t) {
    this._bindStartEvent(t, false);
  };
  r._bindStartEvent = function (t, e) {
    e = e === undefined ? true : e;
    var i = e ? 'addEventListener' : 'removeEventListener';
    var n = 'mousedown';
    if (s.PointerEvent) {
      n = 'pointerdown';
    } else if ('ontouchstart' in s) {
      n = 'touchstart';
    }
    t[i](n, this);
  };
  r.handleEvent = function (t) {
    var e = 'on' + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  r.getTouch = function (t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      if (i.identifier == this.pointerIdentifier) {
        return i;
      }
    }
  };
  r.onmousedown = function (t) {
    var e = t.button;
    if (e && e !== 0 && e !== 1) {
      return;
    }
    this._pointerDown(t, t);
  };
  r.ontouchstart = function (t) {
    this._pointerDown(t, t.changedTouches[0]);
  };
  r.onpointerdown = function (t) {
    this._pointerDown(t, t);
  };
  r._pointerDown = function (t, e) {
    if (t.button || this.isPointerDown) {
      return;
    }
    this.isPointerDown = true;
    this.pointerIdentifier =
      e.pointerId !== undefined ? e.pointerId : e.identifier;
    this.pointerDown(t, e);
  };
  r.pointerDown = function (t, e) {
    this._bindPostStartEvents(t);
    this.emitEvent('pointerDown', [t, e]);
  };
  var o = {
    mousedown: ['mousemove', 'mouseup'],
    touchstart: ['touchmove', 'touchend', 'touchcancel'],
    pointerdown: ['pointermove', 'pointerup', 'pointercancel'],
  };
  r._bindPostStartEvents = function (t) {
    if (!t) {
      return;
    }
    var e = o[t.type];
    e.forEach(function (t) {
      s.addEventListener(t, this);
    }, this);
    this._boundPointerEvents = e;
  };
  r._unbindPostStartEvents = function () {
    if (!this._boundPointerEvents) {
      return;
    }
    this._boundPointerEvents.forEach(function (t) {
      s.removeEventListener(t, this);
    }, this);
    delete this._boundPointerEvents;
  };
  r.onmousemove = function (t) {
    this._pointerMove(t, t);
  };
  r.onpointermove = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerMove(t, t);
    }
  };
  r.ontouchmove = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerMove(t, e);
    }
  };
  r._pointerMove = function (t, e) {
    this.pointerMove(t, e);
  };
  r.pointerMove = function (t, e) {
    this.emitEvent('pointerMove', [t, e]);
  };
  r.onmouseup = function (t) {
    this._pointerUp(t, t);
  };
  r.onpointerup = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerUp(t, t);
    }
  };
  r.ontouchend = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerUp(t, e);
    }
  };
  r._pointerUp = function (t, e) {
    this._pointerDone();
    this.pointerUp(t, e);
  };
  r.pointerUp = function (t, e) {
    this.emitEvent('pointerUp', [t, e]);
  };
  r._pointerDone = function () {
    this._pointerReset();
    this._unbindPostStartEvents();
    this.pointerDone();
  };
  r._pointerReset = function () {
    this.isPointerDown = false;
    delete this.pointerIdentifier;
  };
  r.pointerDone = i;
  r.onpointercancel = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerCancel(t, t);
    }
  };
  r.ontouchcancel = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerCancel(t, e);
    }
  };
  r._pointerCancel = function (t, e) {
    this._pointerDone();
    this.pointerCancel(t, e);
  };
  r.pointerCancel = function (t, e) {
    this.emitEvent('pointerCancel', [t, e]);
  };
  n.getPointerPoint = function (t) {
    return {x: t.pageX, y: t.pageY};
  };
  return n;
});
/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */
(function (e, i) {
  if (typeof define == 'function' && define.amd) {
    define('unidragger/unidragger', ['unipointer/unipointer'], function (t) {
      return i(e, t);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = i(e, require('unipointer'));
  } else {
    e.Unidragger = i(e, e.Unipointer);
  }
})(window, function t(r, e) {
  function i() {}
  var n = (i.prototype = Object.create(e.prototype));
  n.bindHandles = function () {
    this._bindHandles(true);
  };
  n.unbindHandles = function () {
    this._bindHandles(false);
  };
  n._bindHandles = function (t) {
    t = t === undefined ? true : t;
    var e = t ? 'addEventListener' : 'removeEventListener';
    var i = t ? this._touchActionValue : '';
    for (var n = 0; n < this.handles.length; n++) {
      var s = this.handles[n];
      this._bindStartEvent(s, t);
      s[e]('click', this);
      if (r.PointerEvent) {
        s.style.touchAction = i;
      }
    }
  };
  n._touchActionValue = 'none';
  n.pointerDown = function (t, e) {
    var i = this.okayPointerDown(t);
    if (!i) {
      return;
    }
    this.pointerDownPointer = {pageX: e.pageX, pageY: e.pageY};
    t.preventDefault();
    this.pointerDownBlur();
    this._bindPostStartEvents(t);
    this.emitEvent('pointerDown', [t, e]);
  };
  var s = {TEXTAREA: true, INPUT: true, SELECT: true, OPTION: true};
  var o = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true,
  };
  n.okayPointerDown = function (t) {
    var e = s[t.target.nodeName];
    var i = o[t.target.type];
    var n = !e || i;
    if (!n) {
      this._pointerReset();
    }
    return n;
  };
  n.pointerDownBlur = function () {
    var t = document.activeElement;
    var e = t && t.blur && t != document.body;
    if (e) {
      t.blur();
    }
  };
  n.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);
    this.emitEvent('pointerMove', [t, e, i]);
    this._dragMove(t, e, i);
  };
  n._dragPointerMove = function (t, e) {
    var i = {
      x: e.pageX - this.pointerDownPointer.pageX,
      y: e.pageY - this.pointerDownPointer.pageY,
    };
    if (!this.isDragging && this.hasDragStarted(i)) {
      this._dragStart(t, e);
    }
    return i;
  };
  n.hasDragStarted = function (t) {
    return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
  };
  n.pointerUp = function (t, e) {
    this.emitEvent('pointerUp', [t, e]);
    this._dragPointerUp(t, e);
  };
  n._dragPointerUp = function (t, e) {
    if (this.isDragging) {
      this._dragEnd(t, e);
    } else {
      this._staticClick(t, e);
    }
  };
  n._dragStart = function (t, e) {
    this.isDragging = true;
    this.isPreventingClicks = true;
    this.dragStart(t, e);
  };
  n.dragStart = function (t, e) {
    this.emitEvent('dragStart', [t, e]);
  };
  n._dragMove = function (t, e, i) {
    if (!this.isDragging) {
      return;
    }
    this.dragMove(t, e, i);
  };
  n.dragMove = function (t, e, i) {
    t.preventDefault();
    this.emitEvent('dragMove', [t, e, i]);
  };
  n._dragEnd = function (t, e) {
    this.isDragging = false;
    setTimeout(
      function () {
        delete this.isPreventingClicks;
      }.bind(this)
    );
    this.dragEnd(t, e);
  };
  n.dragEnd = function (t, e) {
    this.emitEvent('dragEnd', [t, e]);
  };
  n.onclick = function (t) {
    if (this.isPreventingClicks) {
      t.preventDefault();
    }
  };
  n._staticClick = function (t, e) {
    if (this.isIgnoringMouseUp && t.type == 'mouseup') {
      return;
    }
    this.staticClick(t, e);
    if (t.type != 'mouseup') {
      this.isIgnoringMouseUp = true;
      setTimeout(
        function () {
          delete this.isIgnoringMouseUp;
        }.bind(this),
        400
      );
    }
  };
  n.staticClick = function (t, e) {
    this.emitEvent('staticClick', [t, e]);
  };
  i.getPointerPoint = e.getPointerPoint;
  return i;
});
(function (n, s) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/drag', [
      './flickity',
      'unidragger/unidragger',
      'fizzy-ui-utils/utils',
    ], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = s(
      n,
      require('./flickity'),
      require('unidragger'),
      require('fizzy-ui-utils')
    );
  } else {
    n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils);
  }
})(window, function t(n, e, i, a) {
  a.extend(e.defaults, {draggable: '>1', dragThreshold: 3});
  e.createMethods.push('_createDrag');
  var s = e.prototype;
  a.extend(s, i.prototype);
  s._touchActionValue = 'pan-y';
  var r = 'createTouch' in document;
  var o = false;
  s._createDrag = function () {
    this.on('activate', this.onActivateDrag);
    this.on('uiChange', this._uiChangeDrag);
    this.on('deactivate', this.onDeactivateDrag);
    this.on('cellChange', this.updateDraggable);
    if (r && !o) {
      n.addEventListener('touchmove', function () {});
      o = true;
    }
  };
  s.onActivateDrag = function () {
    this.handles = [this.viewport];
    this.bindHandles();
    this.updateDraggable();
  };
  s.onDeactivateDrag = function () {
    this.unbindHandles();
    this.element.classList.remove('is-draggable');
  };
  s.updateDraggable = function () {
    if (this.options.draggable == '>1') {
      this.isDraggable = this.slides.length > 1;
    } else {
      this.isDraggable = this.options.draggable;
    }
    if (this.isDraggable) {
      this.element.classList.add('is-draggable');
    } else {
      this.element.classList.remove('is-draggable');
    }
  };
  s.bindDrag = function () {
    this.options.draggable = true;
    this.updateDraggable();
  };
  s.unbindDrag = function () {
    this.options.draggable = false;
    this.updateDraggable();
  };
  s._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  };
  s.pointerDown = function (t, e) {
    if (!this.isDraggable) {
      this._pointerDownDefault(t, e);
      return;
    }
    var i = this.okayPointerDown(t);
    if (!i) {
      return;
    }
    this._pointerDownPreventDefault(t);
    this.pointerDownFocus(t);
    if (document.activeElement != this.element) {
      this.pointerDownBlur();
    }
    this.dragX = this.x;
    this.viewport.classList.add('is-pointer-down');
    this.pointerDownScroll = h();
    n.addEventListener('scroll', this);
    this._pointerDownDefault(t, e);
  };
  s._pointerDownDefault = function (t, e) {
    this.pointerDownPointer = {pageX: e.pageX, pageY: e.pageY};
    this._bindPostStartEvents(t);
    this.dispatchEvent('pointerDown', t, [e]);
  };
  var l = {INPUT: true, TEXTAREA: true, SELECT: true};
  s.pointerDownFocus = function (t) {
    var e = l[t.target.nodeName];
    if (!e) {
      this.focus();
    }
  };
  s._pointerDownPreventDefault = function (t) {
    var e = t.type == 'touchstart';
    var i = t.pointerType == 'touch';
    var n = l[t.target.nodeName];
    if (!e && !i && !n) {
      t.preventDefault();
    }
  };
  s.hasDragStarted = function (t) {
    return Math.abs(t.x) > this.options.dragThreshold;
  };
  s.pointerUp = function (t, e) {
    delete this.isTouchScrolling;
    this.viewport.classList.remove('is-pointer-down');
    this.dispatchEvent('pointerUp', t, [e]);
    this._dragPointerUp(t, e);
  };
  s.pointerDone = function () {
    n.removeEventListener('scroll', this);
    delete this.pointerDownScroll;
  };
  s.dragStart = function (t, e) {
    if (!this.isDraggable) {
      return;
    }
    this.dragStartPosition = this.x;
    this.startAnimation();
    n.removeEventListener('scroll', this);
    this.dispatchEvent('dragStart', t, [e]);
  };
  s.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);
    this.dispatchEvent('pointerMove', t, [e, i]);
    this._dragMove(t, e, i);
  };
  s.dragMove = function (t, e, i) {
    if (!this.isDraggable) {
      return;
    }
    t.preventDefault();
    this.previousDragX = this.dragX;
    var n = this.options.rightToLeft ? -1 : 1;
    if (this.options.wrapAround) {
      i.x %= this.slideableWidth;
    }
    var s = this.dragStartPosition + i.x * n;
    if (!this.options.wrapAround && this.slides.length) {
      var r = Math.max(-this.slides[0].target, this.dragStartPosition);
      s = s > r ? (s + r) * 0.5 : s;
      var o = Math.min(-this.getLastSlide().target, this.dragStartPosition);
      s = s < o ? (s + o) * 0.5 : s;
    }
    this.dragX = s;
    this.dragMoveTime = new Date();
    this.dispatchEvent('dragMove', t, [e, i]);
  };
  s.dragEnd = function (t, e) {
    if (!this.isDraggable) {
      return;
    }
    if (this.options.freeScroll) {
      this.isFreeScrolling = true;
    }
    var i = this.dragEndRestingSelect();
    if (this.options.freeScroll && !this.options.wrapAround) {
      var n = this.getRestingPosition();
      this.isFreeScrolling =
        -n > this.slides[0].target && -n < this.getLastSlide().target;
    } else if (!this.options.freeScroll && i == this.selectedIndex) {
      i += this.dragEndBoostSelect();
    }
    delete this.previousDragX;
    this.isDragSelect = this.options.wrapAround;
    this.select(i);
    delete this.isDragSelect;
    this.dispatchEvent('dragEnd', t, [e]);
  };
  s.dragEndRestingSelect = function () {
    var t = this.getRestingPosition();
    var e = Math.abs(this.getSlideDistance(-t, this.selectedIndex));
    var i = this._getClosestResting(t, e, 1);
    var n = this._getClosestResting(t, e, -1);
    var s = i.distance < n.distance ? i.index : n.index;
    return s;
  };
  s._getClosestResting = function (t, e, i) {
    var n = this.selectedIndex;
    var s = Infinity;
    var r =
      this.options.contain && !this.options.wrapAround
        ? function (t, e) {
            return t <= e;
          }
        : function (t, e) {
            return t < e;
          };
    while (r(e, s)) {
      n += i;
      s = e;
      e = this.getSlideDistance(-t, n);
      if (e === null) {
        break;
      }
      e = Math.abs(e);
    }
    return {distance: s, index: n - i};
  };
  s.getSlideDistance = function (t, e) {
    var i = this.slides.length;
    var n = this.options.wrapAround && i > 1;
    var s = n ? a.modulo(e, i) : e;
    var r = this.slides[s];
    if (!r) {
      return null;
    }
    var o = n ? this.slideableWidth * Math.floor(e / i) : 0;
    return t - (r.target + o);
  };
  s.dragEndBoostSelect = function () {
    if (
      this.previousDragX === undefined ||
      !this.dragMoveTime ||
      new Date() - this.dragMoveTime > 100
    ) {
      return 0;
    }
    var t = this.getSlideDistance(-this.dragX, this.selectedIndex);
    var e = this.previousDragX - this.dragX;
    if (t > 0 && e > 0) {
      return 1;
    } else if (t < 0 && e < 0) {
      return -1;
    }
    return 0;
  };
  s.staticClick = function (t, e) {
    var i = this.getParentCell(t.target);
    var n = i && i.element;
    var s = i && this.cells.indexOf(i);
    this.dispatchEvent('staticClick', t, [e, n, s]);
  };
  s.onscroll = function () {
    var t = h();
    var e = this.pointerDownScroll.x - t.x;
    var i = this.pointerDownScroll.y - t.y;
    if (Math.abs(e) > 3 || Math.abs(i) > 3) {
      this._pointerDone();
    }
  };
  function h() {
    return {x: n.pageXOffset, y: n.pageYOffset};
  }
  return e;
});
(function (n, s) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/prev-next-button', [
      './flickity',
      'unipointer/unipointer',
      'fizzy-ui-utils/utils',
    ], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = s(
      n,
      require('./flickity'),
      require('unipointer'),
      require('fizzy-ui-utils')
    );
  } else {
    s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  }
})(window, function t(e, i, n, s) {
  'use strict';
  var r = 'http://www.w3.org/2000/svg';
  function o(t, e) {
    this.direction = t;
    this.parent = e;
    this._create();
  }
  o.prototype = Object.create(n.prototype);
  o.prototype._create = function () {
    this.isEnabled = true;
    this.isPrevious = this.direction == -1;
    var t = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == t;
    var e = (this.element = document.createElement('button'));
    e.className = 'flickity-button flickity-prev-next-button';
    e.className += this.isPrevious ? ' previous' : ' next';
    e.setAttribute('type', 'button');
    this.disable();
    e.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next');
    var i = this.createSVG();
    e.appendChild(i);
    this.parent.on('select', this.update.bind(this));
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };
  o.prototype.activate = function () {
    this.bindStartEvent(this.element);
    this.element.addEventListener('click', this);
    this.parent.element.appendChild(this.element);
  };
  o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element);
    this.unbindStartEvent(this.element);
    this.element.removeEventListener('click', this);
  };
  o.prototype.createSVG = function () {
    var t = document.createElementNS(r, 'svg');
    t.setAttribute('class', 'flickity-button-icon');
    t.setAttribute('viewBox', '0 0 100 100');
    var e = document.createElementNS(r, 'path');
    var i = a(this.parent.options.arrowShape);
    e.setAttribute('d', i);
    e.setAttribute('class', 'arrow');
    if (!this.isLeft) {
      e.setAttribute('transform', 'translate(100, 100) rotate(180) ');
    }
    t.appendChild(e);
    return t;
  };
  function a(t) {
    if (typeof t == 'string') {
      return t;
    }
    return (
      'M ' +
      t.x0 +
      ',50' +
      ' L ' +
      t.x1 +
      ',' +
      (t.y1 + 50) +
      ' L ' +
      t.x2 +
      ',' +
      (t.y2 + 50) +
      ' L ' +
      t.x3 +
      ',50 ' +
      ' L ' +
      t.x2 +
      ',' +
      (50 - t.y2) +
      ' L ' +
      t.x1 +
      ',' +
      (50 - t.y1) +
      ' Z'
    );
  }
  o.prototype.handleEvent = s.handleEvent;
  o.prototype.onclick = function () {
    if (!this.isEnabled) {
      return;
    }
    this.parent.uiChange();
    var t = this.isPrevious ? 'previous' : 'next';
    this.parent[t]();
  };
  o.prototype.enable = function () {
    if (this.isEnabled) {
      return;
    }
    this.element.disabled = false;
    this.isEnabled = true;
  };
  o.prototype.disable = function () {
    if (!this.isEnabled) {
      return;
    }
    this.element.disabled = true;
    this.isEnabled = false;
  };
  o.prototype.update = function () {
    var t = this.parent.slides;
    if (this.parent.options.wrapAround && t.length > 1) {
      this.enable();
      return;
    }
    var e = t.length ? t.length - 1 : 0;
    var i = this.isPrevious ? 0 : e;
    var n = this.parent.selectedIndex == i ? 'disable' : 'enable';
    this[n]();
  };
  o.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };
  s.extend(i.defaults, {
    prevNextButtons: true,
    arrowShape: {x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30},
  });
  i.createMethods.push('_createPrevNextButtons');
  var l = i.prototype;
  l._createPrevNextButtons = function () {
    if (!this.options.prevNextButtons) {
      return;
    }
    this.prevButton = new o(-1, this);
    this.nextButton = new o(1, this);
    this.on('activate', this.activatePrevNextButtons);
  };
  l.activatePrevNextButtons = function () {
    this.prevButton.activate();
    this.nextButton.activate();
    this.on('deactivate', this.deactivatePrevNextButtons);
  };
  l.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate();
    this.nextButton.deactivate();
    this.off('deactivate', this.deactivatePrevNextButtons);
  };
  i.PrevNextButton = o;
  return i;
});
(function (n, s) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/page-dots', [
      './flickity',
      'unipointer/unipointer',
      'fizzy-ui-utils/utils',
    ], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = s(
      n,
      require('./flickity'),
      require('unipointer'),
      require('fizzy-ui-utils')
    );
  } else {
    s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  }
})(window, function t(e, i, n, s) {
  function r(t) {
    this.parent = t;
    this._create();
  }
  r.prototype = Object.create(n.prototype);
  r.prototype._create = function () {
    this.holder = document.createElement('ol');
    this.holder.className = 'flickity-page-dots';
    this.dots = [];
    this.handleClick = this.onClick.bind(this);
    this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
  };
  r.prototype.activate = function () {
    this.setDots();
    this.holder.addEventListener('click', this.handleClick);
    this.bindStartEvent(this.holder);
    this.parent.element.appendChild(this.holder);
  };
  r.prototype.deactivate = function () {
    this.holder.removeEventListener('click', this.handleClick);
    this.unbindStartEvent(this.holder);
    this.parent.element.removeChild(this.holder);
  };
  r.prototype.setDots = function () {
    var t = this.parent.slides.length - this.dots.length;
    if (t > 0) {
      this.addDots(t);
    } else if (t < 0) {
      this.removeDots(-t);
    }
  };
  r.prototype.addDots = function (t) {
    var e = document.createDocumentFragment();
    var i = [];
    var n = this.dots.length;
    var s = n + t;
    for (var r = n; r < s; r++) {
      var o = document.createElement('li');
      o.className = 'dot';
      o.setAttribute('aria-label', 'Page dot ' + (r + 1));
      e.appendChild(o);
      i.push(o);
    }
    this.holder.appendChild(e);
    this.dots = this.dots.concat(i);
  };
  r.prototype.removeDots = function (t) {
    var e = this.dots.splice(this.dots.length - t, t);
    e.forEach(function (t) {
      this.holder.removeChild(t);
    }, this);
  };
  r.prototype.updateSelected = function () {
    if (this.selectedDot) {
      this.selectedDot.className = 'dot';
      this.selectedDot.removeAttribute('aria-current');
    }
    if (!this.dots.length) {
      return;
    }
    this.selectedDot = this.dots[this.parent.selectedIndex];
    this.selectedDot.className = 'dot is-selected';
    this.selectedDot.setAttribute('aria-current', 'step');
  };
  r.prototype.onTap = r.prototype.onClick = function (t) {
    var e = t.target;
    if (e.nodeName != 'LI') {
      return;
    }
    this.parent.uiChange();
    var i = this.dots.indexOf(e);
    this.parent.select(i);
  };
  r.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };
  i.PageDots = r;
  s.extend(i.defaults, {pageDots: true});
  i.createMethods.push('_createPageDots');
  var o = i.prototype;
  o._createPageDots = function () {
    if (!this.options.pageDots) {
      return;
    }
    this.pageDots = new r(this);
    this.on('activate', this.activatePageDots);
    this.on('select', this.updateSelectedPageDots);
    this.on('cellChange', this.updatePageDots);
    this.on('resize', this.updatePageDots);
    this.on('deactivate', this.deactivatePageDots);
  };
  o.activatePageDots = function () {
    this.pageDots.activate();
  };
  o.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  };
  o.updatePageDots = function () {
    this.pageDots.setDots();
  };
  o.deactivatePageDots = function () {
    this.pageDots.deactivate();
  };
  i.PageDots = r;
  return i;
});
(function (t, n) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/player', [
      'ev-emitter/ev-emitter',
      'fizzy-ui-utils/utils',
      './flickity',
    ], function (t, e, i) {
      return n(t, e, i);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = n(
      require('ev-emitter'),
      require('fizzy-ui-utils'),
      require('./flickity')
    );
  } else {
    n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  }
})(window, function t(e, i, n) {
  function s(t) {
    this.parent = t;
    this.state = 'stopped';
    this.onVisibilityChange = this.visibilityChange.bind(this);
    this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }
  s.prototype = Object.create(e.prototype);
  s.prototype.play = function () {
    if (this.state == 'playing') {
      return;
    }
    var t = document.hidden;
    if (t) {
      document.addEventListener('visibilitychange', this.onVisibilityPlay);
      return;
    }
    this.state = 'playing';
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    this.tick();
  };
  s.prototype.tick = function () {
    if (this.state != 'playing') {
      return;
    }
    var t = this.parent.options.autoPlay;
    t = typeof t == 'number' ? t : 3e3;
    var e = this;
    this.clear();
    this.timeout = setTimeout(function () {
      e.parent.next(true);
      e.tick();
    }, t);
  };
  s.prototype.stop = function () {
    this.state = 'stopped';
    this.clear();
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  };
  s.prototype.clear = function () {
    clearTimeout(this.timeout);
  };
  s.prototype.pause = function () {
    if (this.state == 'playing') {
      this.state = 'paused';
      this.clear();
    }
  };
  s.prototype.unpause = function () {
    if (this.state == 'paused') {
      this.play();
    }
  };
  s.prototype.visibilityChange = function () {
    var t = document.hidden;
    this[t ? 'pause' : 'unpause']();
  };
  s.prototype.visibilityPlay = function () {
    this.play();
    document.removeEventListener('visibilitychange', this.onVisibilityPlay);
  };
  i.extend(n.defaults, {pauseautoPlayOnHover: true});
  n.createMethods.push('_createPlayer');
  var r = n.prototype;
  r._createPlayer = function () {
    this.player = new s(this);
    this.on('activate', this.activatePlayer);
    this.on('uiChange', this.stopPlayer);
    this.on('pointerDown', this.stopPlayer);
    this.on('deactivate', this.deactivatePlayer);
  };
  r.activatePlayer = function () {
    if (!this.options.autoPlay) {
      return;
    }
    this.player.play();
    this.element.addEventListener('mouseenter', this);
  };
  r.playPlayer = function () {
    this.player.play();
  };
  r.stopPlayer = function () {
    this.player.stop();
  };
  r.pausePlayer = function () {
    this.player.pause();
  };
  r.unpausePlayer = function () {
    this.player.unpause();
  };
  r.deactivatePlayer = function () {
    this.player.stop();
    this.element.removeEventListener('mouseenter', this);
  };
  r.onmouseenter = function () {
    if (!this.options.pauseautoPlayOnHover) {
      return;
    }
    this.player.pause();
    this.element.addEventListener('mouseleave', this);
  };
  r.onmouseleave = function () {
    this.player.unpause();
    this.element.removeEventListener('mouseleave', this);
  };
  n.Player = s;
  return n;
});
(function (i, n) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/add-remove-cell', [
      './flickity',
      'fizzy-ui-utils/utils',
    ], function (t, e) {
      return n(i, t, e);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = n(i, require('./flickity'), require('fizzy-ui-utils'));
  } else {
    n(i, i.Flickity, i.fizzyUIUtils);
  }
})(window, function t(e, i, n) {
  function l(t) {
    var e = document.createDocumentFragment();
    t.forEach(function (t) {
      e.appendChild(t.element);
    });
    return e;
  }
  var s = i.prototype;
  s.insert = function (t, e) {
    var i = this._makeCells(t);
    if (!i || !i.length) {
      return;
    }
    var n = this.cells.length;
    e = e === undefined ? n : e;
    var s = l(i);
    var r = e == n;
    if (r) {
      this.slider.appendChild(s);
    } else {
      var o = this.cells[e].element;
      this.slider.insertBefore(s, o);
    }
    if (e === 0) {
      this.cells = i.concat(this.cells);
    } else if (r) {
      this.cells = this.cells.concat(i);
    } else {
      var a = this.cells.splice(e, n - e);
      this.cells = this.cells.concat(i).concat(a);
    }
    this._sizeCells(i);
    this.cellChange(e, true);
  };
  s.append = function (t) {
    this.insert(t, this.cells.length);
  };
  s.prepend = function (t) {
    this.insert(t, 0);
  };
  s.remove = function (t) {
    var e = this.getCells(t);
    if (!e || !e.length) {
      return;
    }
    var i = this.cells.length - 1;
    e.forEach(function (t) {
      t.remove();
      var e = this.cells.indexOf(t);
      i = Math.min(e, i);
      n.removeFrom(this.cells, t);
    }, this);
    this.cellChange(i, true);
  };
  s.cellSizeChange = function (t) {
    var e = this.getCell(t);
    if (!e) {
      return;
    }
    e.getSize();
    var i = this.cells.indexOf(e);
    this.cellChange(i);
  };
  s.cellChange = function (t, e) {
    var i = this.selectedElement;
    this._positionCells(t);
    this._getWrapShiftCells();
    this.setGallerySize();
    var n = this.getCell(i);
    if (n) {
      this.selectedIndex = this.getCellSlideIndex(n);
    }
    this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
    this.emitEvent('cellChange', [t]);
    this.select(this.selectedIndex);
    if (e) {
      this.positionSliderAtSelected();
    }
  };
  return i;
});
(function (i, n) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/lazyload', [
      './flickity',
      'fizzy-ui-utils/utils',
    ], function (t, e) {
      return n(i, t, e);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = n(i, require('./flickity'), require('fizzy-ui-utils'));
  } else {
    n(i, i.Flickity, i.fizzyUIUtils);
  }
})(window, function t(e, i, o) {
  'use strict';
  i.createMethods.push('_createLazyload');
  var n = i.prototype;
  n._createLazyload = function () {
    this.on('select', this.lazyLoad);
  };
  n.lazyLoad = function () {
    var t = this.options.lazyLoad;
    if (!t) {
      return;
    }
    var e = typeof t == 'number' ? t : 0;
    var i = this.getAdjacentCellElements(e);
    var n = [];
    i.forEach(function (t) {
      var e = s(t);
      n = n.concat(e);
    });
    n.forEach(function (t) {
      new r(t, this);
    }, this);
  };
  function s(t) {
    if (t.nodeName == 'IMG') {
      var e = t.getAttribute('data-flickity-lazyload');
      var i = t.getAttribute('data-flickity-lazyload-src');
      var n = t.getAttribute('data-flickity-lazyload-srcset');
      if (e || i || n) {
        return [t];
      }
    }
    var s =
      'img[data-flickity-lazyload], ' +
      'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
    var r = t.querySelectorAll(s);
    return o.makeArray(r);
  }
  function r(t, e) {
    this.img = t;
    this.flickity = e;
    this.load();
  }
  r.prototype.handleEvent = o.handleEvent;
  r.prototype.load = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    var t =
      this.img.getAttribute('data-flickity-lazyload') ||
      this.img.getAttribute('data-flickity-lazyload-src');
    var e = this.img.getAttribute('data-flickity-lazyload-srcset');
    this.img.src = t;
    if (e) {
      this.img.setAttribute('srcset', e);
    }
    this.img.removeAttribute('data-flickity-lazyload');
    this.img.removeAttribute('data-flickity-lazyload-src');
    this.img.removeAttribute('data-flickity-lazyload-srcset');
  };
  r.prototype.onload = function (t) {
    this.complete(t, 'flickity-lazyloaded');
  };
  r.prototype.onerror = function (t) {
    this.complete(t, 'flickity-lazyerror');
  };
  r.prototype.complete = function (t, e) {
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
    var i = this.flickity.getParentCell(this.img);
    var n = i && i.element;
    this.flickity.cellSizeChange(n);
    this.img.classList.add(e);
    this.flickity.dispatchEvent('lazyLoad', t, n);
  };
  i.LazyLoader = r;
  return i;
});
/*!
 * Flickity v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function (t, e) {
  if (typeof define == 'function' && define.amd) {
    define('flickity/js/index', [
      './flickity',
      './drag',
      './prev-next-button',
      './page-dots',
      './player',
      './add-remove-cell',
      './lazyload',
    ], e);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = e(
      require('./flickity'),
      require('./drag'),
      require('./prev-next-button'),
      require('./page-dots'),
      require('./player'),
      require('./add-remove-cell'),
      require('./lazyload')
    );
  }
})(window, function t(e) {
  return e;
});
/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */
(function (t, e) {
  if (typeof define == 'function' && define.amd) {
    define('flickity-as-nav-for/as-nav-for', [
      'flickity/js/index',
      'fizzy-ui-utils/utils',
    ], e);
  } else if (typeof module == 'object' && module.exports) {
    module.exports = e(require('flickity'), require('fizzy-ui-utils'));
  } else {
    t.Flickity = e(t.Flickity, t.fizzyUIUtils);
  }
})(window, function t(n, s) {
  n.createMethods.push('_createAsNavFor');
  var e = n.prototype;
  e._createAsNavFor = function () {
    this.on('activate', this.activateAsNavFor);
    this.on('deactivate', this.deactivateAsNavFor);
    this.on('destroy', this.destroyAsNavFor);
    var e = this.options.asNavFor;
    if (!e) {
      return;
    }
    var i = this;
    setTimeout(function t() {
      i.setNavCompanion(e);
    });
  };
  e.setNavCompanion = function (t) {
    t = s.getQueryElement(t);
    var e = n.data(t);
    if (!e || e == this) {
      return;
    }
    this.navCompanion = e;
    var i = this;
    this.onNavCompanionSelect = function () {
      i.navCompanionSelect();
    };
    e.on('select', this.onNavCompanionSelect);
    this.on('staticClick', this.onNavStaticClick);
    this.navCompanionSelect(true);
  };
  e.navCompanionSelect = function (t) {
    var e = this.navCompanion && this.navCompanion.selectedCells;
    if (!e) {
      return;
    }
    var i = e[0];
    var n = this.navCompanion.cells.indexOf(i);
    var s = n + e.length - 1;
    var r = Math.floor(a(n, s, this.navCompanion.cellAlign));
    this.selectCell(r, false, t);
    this.removeNavSelectedElements();
    if (r >= this.cells.length) {
      return;
    }
    var o = this.cells.slice(n, s + 1);
    this.navSelectedElements = o.map(function (t) {
      return t.element;
    });
    this.changeNavSelectedClass('add');
  };
  function a(t, e, i) {
    return (e - t) * i + t;
  }
  e.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]('is-nav-selected');
    });
  };
  e.activateAsNavFor = function () {
    this.navCompanionSelect(true);
  };
  e.removeNavSelectedElements = function () {
    if (!this.navSelectedElements) {
      return;
    }
    this.changeNavSelectedClass('remove');
    delete this.navSelectedElements;
  };
  e.onNavStaticClick = function (t, e, i, n) {
    if (typeof n == 'number') {
      this.navCompanion.selectCell(n);
    }
  };
  e.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  };
  e.destroyAsNavFor = function () {
    if (!this.navCompanion) {
      return;
    }
    this.navCompanion.off('select', this.onNavCompanionSelect);
    this.off('staticClick', this.onNavStaticClick);
    delete this.navCompanion;
  };
  return n;
});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function (e, i) {
  'use strict';
  if (typeof define == 'function' && define.amd) {
    define('imagesloaded/imagesloaded', ['ev-emitter/ev-emitter'], function (
      t
    ) {
      return i(e, t);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = i(e, require('ev-emitter'));
  } else {
    e.imagesLoaded = i(e, e.EvEmitter);
  }
})(typeof window !== 'undefined' ? window : this, function t(e, i) {
  var s = e.jQuery;
  var r = e.console;
  function o(t, e) {
    for (var i in e) {
      t[i] = e[i];
    }
    return t;
  }
  var n = Array.prototype.slice;
  function a(t) {
    if (Array.isArray(t)) {
      return t;
    }
    var e = typeof t == 'object' && typeof t.length == 'number';
    if (e) {
      return n.call(t);
    }
    return [t];
  }
  function l(t, e, i) {
    if (!(this instanceof l)) {
      return new l(t, e, i);
    }
    var n = t;
    if (typeof t == 'string') {
      n = document.querySelectorAll(t);
    }
    if (!n) {
      r.error('Bad element for imagesLoaded ' + (n || t));
      return;
    }
    this.elements = a(n);
    this.options = o({}, this.options);
    if (typeof e == 'function') {
      i = e;
    } else {
      o(this.options, e);
    }
    if (i) {
      this.on('always', i);
    }
    this.getImages();
    if (s) {
      this.jqDeferred = new s.Deferred();
    }
    setTimeout(this.check.bind(this));
  }
  l.prototype = Object.create(i.prototype);
  l.prototype.options = {};
  l.prototype.getImages = function () {
    this.images = [];
    this.elements.forEach(this.addElementImages, this);
  };
  l.prototype.addElementImages = function (t) {
    if (t.nodeName == 'IMG') {
      this.addImage(t);
    }
    if (this.options.background === true) {
      this.addElementBackgroundImages(t);
    }
    var e = t.nodeType;
    if (!e || !h[e]) {
      return;
    }
    var i = t.querySelectorAll('img');
    for (var n = 0; n < i.length; n++) {
      var s = i[n];
      this.addImage(s);
    }
    if (typeof this.options.background == 'string') {
      var r = t.querySelectorAll(this.options.background);
      for (n = 0; n < r.length; n++) {
        var o = r[n];
        this.addElementBackgroundImages(o);
      }
    }
  };
  var h = {1: true, 9: true, 11: true};
  l.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (!e) {
      return;
    }
    var i = /url\((['"])?(.*?)\1\)/gi;
    var n = i.exec(e.backgroundImage);
    while (n !== null) {
      var s = n && n[2];
      if (s) {
        this.addBackground(s, t);
      }
      n = i.exec(e.backgroundImage);
    }
  };
  l.prototype.addImage = function (t) {
    var e = new c(t);
    this.images.push(e);
  };
  l.prototype.addBackground = function (t, e) {
    var i = new u(t, e);
    this.images.push(i);
  };
  l.prototype.check = function () {
    var n = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    if (!this.images.length) {
      this.complete();
      return;
    }
    function e(t, e, i) {
      setTimeout(function () {
        n.progress(t, e, i);
      });
    }
    this.images.forEach(function (t) {
      t.once('progress', e);
      t.check();
    });
  };
  l.prototype.progress = function (t, e, i) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
    this.emitEvent('progress', [this, t, e]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, t);
    }
    if (this.progressedCount == this.images.length) {
      this.complete();
    }
    if (this.options.debug && r) {
      r.log('progress: ' + i, t, e);
    }
  };
  l.prototype.complete = function () {
    var t = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent(t, [this]);
    this.emitEvent('always', [this]);
    if (this.jqDeferred) {
      var e = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[e](this);
    }
  };
  function c(t) {
    this.img = t;
  }
  c.prototype = Object.create(i.prototype);
  c.prototype.check = function () {
    var t = this.getIsImageComplete();
    if (t) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      return;
    }
    this.proxyImage = new Image();
    this.proxyImage.addEventListener('load', this);
    this.proxyImage.addEventListener('error', this);
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.proxyImage.src = this.img.src;
  };
  c.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  };
  c.prototype.confirm = function (t, e) {
    this.isLoaded = t;
    this.emitEvent('progress', [this, this.img, e]);
  };
  c.prototype.handleEvent = function (t) {
    var e = 'on' + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  c.prototype.onload = function () {
    this.confirm(true, 'onload');
    this.unbindEvents();
  };
  c.prototype.onerror = function () {
    this.confirm(false, 'onerror');
    this.unbindEvents();
  };
  c.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener('load', this);
    this.proxyImage.removeEventListener('error', this);
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };
  function u(t, e) {
    this.url = t;
    this.element = e;
    this.img = new Image();
  }
  u.prototype = Object.create(c.prototype);
  u.prototype.check = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.img.src = this.url;
    var t = this.getIsImageComplete();
    if (t) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  };
  u.prototype.unbindEvents = function () {
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };
  u.prototype.confirm = function (t, e) {
    this.isLoaded = t;
    this.emitEvent('progress', [this, this.element, e]);
  };
  l.makeJQueryPlugin = function (t) {
    t = t || e.jQuery;
    if (!t) {
      return;
    }
    s = t;
    s.fn.imagesLoaded = function (t, e) {
      var i = new l(this, t, e);
      return i.jqDeferred.promise(s(this));
    };
  };
  l.makeJQueryPlugin();
  return l;
});
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
(function (i, n) {
  if (typeof define == 'function' && define.amd) {
    define(['flickity/js/index', 'imagesloaded/imagesloaded'], function (t, e) {
      return n(i, t, e);
    });
  } else if (typeof module == 'object' && module.exports) {
    module.exports = n(i, require('flickity'), require('imagesloaded'));
  } else {
    i.Flickity = n(i, i.Flickity, i.imagesLoaded);
  }
})(window, function t(e, i, s) {
  'use strict';
  i.createMethods.push('_createImagesLoaded');
  var n = i.prototype;
  n._createImagesLoaded = function () {
    this.on('activate', this.imagesLoaded);
  };
  n.imagesLoaded = function () {
    if (!this.options.imagesLoaded) {
      return;
    }
    var n = this;
    function t(t, e) {
      var i = n.getParentCell(e.img);
      n.cellSizeChange(i && i.element);
      if (!n.options.freeScroll) {
        n.positionSliderAtSelected();
      }
    }
    s(this.slider).on('progress', t);
  };
  return i;
});
('use strict');
function _typeof(e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function _possibleConstructorReturn(e, t) {
  return !t || ('object' !== _typeof(t) && 'function' != typeof t)
    ? _assertThisInitialized(e)
    : t;
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _inherits(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: {value: e, writable: !0, configurable: !0},
  })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
var Emitter = (function () {
    function e() {
      _classCallCheck(this, e);
    }
    return (
      _createClass(e, [
        {
          key: 'on',
          value: function (e, t) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks[e] || (this._callbacks[e] = []),
              this._callbacks[e].push(t),
              this
            );
          },
        },
        {
          key: 'emit',
          value: function (e) {
            this._callbacks = this._callbacks || {};
            var t = this._callbacks[e];
            if (t) {
              for (
                var n = arguments.length,
                  i = new Array(1 < n ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                i[r - 1] = arguments[r];
              var o = !0,
                a = !1,
                l = void 0;
              try {
                for (
                  var s, u = t[Symbol.iterator]();
                  !(o = (s = u.next()).done);
                  o = !0
                ) {
                  s.value.apply(this, i);
                }
              } catch (e) {
                (a = !0), (l = e);
              } finally {
                try {
                  o || null == u.return || u.return();
                } finally {
                  if (a) throw l;
                }
              }
            }
            return this;
          },
        },
        {
          key: 'off',
          value: function (e, t) {
            if (!this._callbacks || 0 === arguments.length)
              return (this._callbacks = {}), this;
            var n = this._callbacks[e];
            if (!n) return this;
            if (1 === arguments.length) return delete this._callbacks[e], this;
            for (var i = 0; i < n.length; i++) {
              if (n[i] === t) {
                n.splice(i, 1);
                break;
              }
            }
            return this;
          },
        },
      ]),
      e
    );
  })(),
  Dropzone = (function () {
    function C(e, t) {
      var n, i, r;
      if (
        (_classCallCheck(this, C),
        ((n = _possibleConstructorReturn(
          this,
          _getPrototypeOf(C).call(this)
        )).element = e),
        (n.version = C.version),
        (n.defaultOptions.previewTemplate =
          n.defaultOptions.previewTemplate.replace(/\n*/g, '')),
        (n.clickableElements = []),
        (n.listeners = []),
        (n.files = []),
        'string' == typeof n.element &&
          (n.element = document.querySelector(n.element)),
        !n.element || null == n.element.nodeType)
      )
        throw new Error('Invalid dropzone element.');
      if (n.element.dropzone) throw new Error('Dropzone already attached.');
      C.instances.push(_assertThisInitialized(n)),
        (n.element.dropzone = _assertThisInitialized(n));
      var o = null != (r = C.optionsForElement(n.element)) ? r : {};
      if (
        ((n.options = C.extend({}, n.defaultOptions, o, null != t ? t : {})),
        n.options.forceFallback || !C.isBrowserSupported())
      )
        return _possibleConstructorReturn(
          n,
          n.options.fallback.call(_assertThisInitialized(n))
        );
      if (
        (null == n.options.url &&
          (n.options.url = n.element.getAttribute('action')),
        !n.options.url)
      )
        throw new Error('No URL provided.');
      if (n.options.acceptedFiles && n.options.acceptedMimeTypes)
        throw new Error(
          "You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."
        );
      if (n.options.uploadMultiple && n.options.chunking)
        throw new Error('You cannot set both: uploadMultiple and chunking.');
      return (
        n.options.acceptedMimeTypes &&
          ((n.options.acceptedFiles = n.options.acceptedMimeTypes),
          delete n.options.acceptedMimeTypes),
        null != n.options.renameFilename &&
          (n.options.renameFile = function (e) {
            return n.options.renameFilename.call(
              _assertThisInitialized(n),
              e.name,
              e
            );
          }),
        (n.options.method = n.options.method.toUpperCase()),
        (i = n.getExistingFallback()) &&
          i.parentNode &&
          i.parentNode.removeChild(i),
        !1 !== n.options.previewsContainer &&
          (n.options.previewsContainer
            ? (n.previewsContainer = C.getElement(
                n.options.previewsContainer,
                'previewsContainer'
              ))
            : (n.previewsContainer = n.element)),
        n.options.clickable &&
          (!0 === n.options.clickable
            ? (n.clickableElements = [n.element])
            : (n.clickableElements = C.getElements(
                n.options.clickable,
                'clickable'
              ))),
        n.init(),
        n
      );
    }
    return (
      _inherits(C, Emitter),
      _createClass(C, null, [
        {
          key: 'initClass',
          value: function () {
            (this.prototype.Emitter = Emitter),
              (this.prototype.events = [
                'drop',
                'dragstart',
                'dragend',
                'dragenter',
                'dragover',
                'dragleave',
                'addedfile',
                'addedfiles',
                'removedfile',
                'thumbnail',
                'error',
                'errormultiple',
                'processing',
                'processingmultiple',
                'uploadprogress',
                'totaluploadprogress',
                'sending',
                'sendingmultiple',
                'success',
                'successmultiple',
                'canceled',
                'canceledmultiple',
                'complete',
                'completemultiple',
                'reset',
                'maxfilesexceeded',
                'maxfilesreached',
                'queuecomplete',
              ]),
              (this.prototype.defaultOptions = {
                url: null,
                method: 'post',
                withCredentials: !1,
                timeout: 3e4,
                parallelUploads: 2,
                uploadMultiple: !1,
                chunking: !1,
                forceChunking: !1,
                chunkSize: 2e6,
                parallelChunkUploads: !1,
                retryChunks: !1,
                retryChunksLimit: 3,
                maxFilesize: 256,
                paramName: 'file',
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                thumbnailMethod: 'crop',
                resizeWidth: null,
                resizeHeight: null,
                resizeMimeType: null,
                resizeQuality: 0.8,
                resizeMethod: 'contain',
                filesizeBase: 1e3,
                maxFiles: null,
                headers: null,
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                hiddenInputContainer: 'body',
                capture: null,
                renameFilename: null,
                renameFile: null,
                forceFallback: !1,
                dictDefaultMessage: 'Drop files here to upload',
                dictFallbackMessage:
                  "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText:
                  'Please use the fallback form below to upload your files like in the olden days.',
                dictFileTooBig:
                  'File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.',
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: 'Server responded with {{statusCode}} code.',
                dictCancelUpload: 'Cancel upload',
                dictUploadCanceled: 'Upload canceled.',
                dictCancelUploadConfirmation:
                  'Are you sure you want to cancel this upload?',
                dictRemoveFile: 'Remove file',
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: 'You can not upload any more files.',
                dictFileSizeUnits: {
                  tb: 'TB',
                  gb: 'GB',
                  mb: 'MB',
                  kb: 'KB',
                  b: 'b',
                },
                init: function () {},
                params: function (e, t, n) {
                  if (n)
                    return {
                      dzuuid: n.file.upload.uuid,
                      dzchunkindex: n.index,
                      dztotalfilesize: n.file.size,
                      dzchunksize: this.options.chunkSize,
                      dztotalchunkcount: n.file.upload.totalChunkCount,
                      dzchunkbyteoffset: n.index * this.options.chunkSize,
                    };
                },
                accept: function (e, t) {
                  return t();
                },
                chunksUploaded: function (e, t) {
                  t();
                },
                fallback: function () {
                  var e;
                  this.element.className = ''.concat(
                    this.element.className,
                    ' dz-browser-not-supported'
                  );
                  var t = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (
                      var r,
                        o = this.element
                          .getElementsByTagName('div')
                          [Symbol.iterator]();
                      !(t = (r = o.next()).done);
                      t = !0
                    ) {
                      var a = r.value;
                      if (/(^| )dz-message($| )/.test(a.className)) {
                        (e = a).className = 'dz-message';
                        break;
                      }
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      t || null == o.return || o.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                  e ||
                    ((e = C.createElement(
                      '<div class="dz-message"><span></span></div>'
                    )),
                    this.element.appendChild(e));
                  var l = e.getElementsByTagName('span')[0];
                  return (
                    l &&
                      (null != l.textContent
                        ? (l.textContent = this.options.dictFallbackMessage)
                        : null != l.innerText &&
                          (l.innerText = this.options.dictFallbackMessage)),
                    this.element.appendChild(this.getFallbackForm())
                  );
                },
                resize: function (e, t, n, i) {
                  var r = {
                      srcX: 0,
                      srcY: 0,
                      srcWidth: e.width,
                      srcHeight: e.height,
                    },
                    o = e.width / e.height;
                  null == t && null == n
                    ? ((t = r.srcWidth), (n = r.srcHeight))
                    : null == t
                    ? (t = n * o)
                    : null == n && (n = t / o);
                  var a =
                    (t = Math.min(t, r.srcWidth)) /
                    (n = Math.min(n, r.srcHeight));
                  if (r.srcWidth > t || r.srcHeight > n)
                    if ('crop' === i)
                      a < o
                        ? ((r.srcHeight = e.height),
                          (r.srcWidth = r.srcHeight * a))
                        : ((r.srcWidth = e.width),
                          (r.srcHeight = r.srcWidth / a));
                    else {
                      if ('contain' !== i)
                        throw new Error(
                          "Unknown resizeMethod '".concat(i, "'")
                        );
                      a < o ? (n = t / o) : (t = n * o);
                    }
                  return (
                    (r.srcX = (e.width - r.srcWidth) / 2),
                    (r.srcY = (e.height - r.srcHeight) / 2),
                    (r.trgWidth = t),
                    (r.trgHeight = n),
                    r
                  );
                },
                transformFile: function (e, t) {
                  return (this.options.resizeWidth ||
                    this.options.resizeHeight) &&
                    e.type.match(/image.*/)
                    ? this.resizeImage(
                        e,
                        this.options.resizeWidth,
                        this.options.resizeHeight,
                        this.options.resizeMethod,
                        t
                      )
                    : t(e);
                },
                previewTemplate:
                  '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Check</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Error</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                drop: function () {
                  return this.element.classList.remove('dz-drag-hover');
                },
                dragstart: function () {},
                dragend: function () {
                  return this.element.classList.remove('dz-drag-hover');
                },
                dragenter: function () {
                  return this.element.classList.add('dz-drag-hover');
                },
                dragover: function () {
                  return this.element.classList.add('dz-drag-hover');
                },
                dragleave: function () {
                  return this.element.classList.remove('dz-drag-hover');
                },
                paste: function () {},
                reset: function () {
                  return this.element.classList.remove('dz-started');
                },
                addedfile: function (t) {
                  var n = this;
                  if (
                    (this.element === this.previewsContainer &&
                      this.element.classList.add('dz-started'),
                    this.previewsContainer)
                  ) {
                    (t.previewElement = C.createElement(
                      this.options.previewTemplate.trim()
                    )),
                      (t.previewTemplate = t.previewElement),
                      this.previewsContainer.appendChild(t.previewElement);
                    var e = !0,
                      i = !1,
                      r = void 0;
                    try {
                      for (
                        var o,
                          a = t.previewElement
                            .querySelectorAll('[data-dz-name]')
                            [Symbol.iterator]();
                        !(e = (o = a.next()).done);
                        e = !0
                      ) {
                        var l = o.value;
                        l.textContent = t.name;
                      }
                    } catch (e) {
                      (i = !0), (r = e);
                    } finally {
                      try {
                        e || null == a.return || a.return();
                      } finally {
                        if (i) throw r;
                      }
                    }
                    var s = !0,
                      u = !1,
                      c = void 0;
                    try {
                      for (
                        var d,
                          p = t.previewElement
                            .querySelectorAll('[data-dz-size]')
                            [Symbol.iterator]();
                        !(s = (d = p.next()).done);
                        s = !0
                      )
                        (l = d.value).innerHTML = this.filesize(t.size);
                    } catch (e) {
                      (u = !0), (c = e);
                    } finally {
                      try {
                        s || null == p.return || p.return();
                      } finally {
                        if (u) throw c;
                      }
                    }
                    this.options.addRemoveLinks &&
                      ((t._removeLink = C.createElement(
                        '<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(
                          this.options.dictRemoveFile,
                          '</a>'
                        )
                      )),
                      t.previewElement.appendChild(t._removeLink));
                    var h = function (e) {
                        return (
                          e.preventDefault(),
                          e.stopPropagation(),
                          t.status === C.UPLOADING
                            ? C.confirm(
                                n.options.dictCancelUploadConfirmation,
                                function () {
                                  return n.removeFile(t);
                                }
                              )
                            : n.options.dictRemoveFileConfirmation
                            ? C.confirm(
                                n.options.dictRemoveFileConfirmation,
                                function () {
                                  return n.removeFile(t);
                                }
                              )
                            : n.removeFile(t)
                        );
                      },
                      f = !0,
                      v = !1,
                      m = void 0;
                    try {
                      for (
                        var y,
                          g = t.previewElement
                            .querySelectorAll('[data-dz-remove]')
                            [Symbol.iterator]();
                        !(f = (y = g.next()).done);
                        f = !0
                      ) {
                        y.value.addEventListener('click', h);
                      }
                    } catch (e) {
                      (v = !0), (m = e);
                    } finally {
                      try {
                        f || null == g.return || g.return();
                      } finally {
                        if (v) throw m;
                      }
                    }
                  }
                },
                removedfile: function (e) {
                  return (
                    null != e.previewElement &&
                      null != e.previewElement.parentNode &&
                      e.previewElement.parentNode.removeChild(e.previewElement),
                    this._updateMaxFilesReachedClass()
                  );
                },
                thumbnail: function (e, t) {
                  if (e.previewElement) {
                    e.previewElement.classList.remove('dz-file-preview');
                    var n = !0,
                      i = !1,
                      r = void 0;
                    try {
                      for (
                        var o,
                          a = e.previewElement
                            .querySelectorAll('[data-dz-thumbnail]')
                            [Symbol.iterator]();
                        !(n = (o = a.next()).done);
                        n = !0
                      ) {
                        var l = o.value;
                        (l.alt = e.name), (l.src = t);
                      }
                    } catch (e) {
                      (i = !0), (r = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (i) throw r;
                      }
                    }
                    return setTimeout(function () {
                      return e.previewElement.classList.add('dz-image-preview');
                    }, 1);
                  }
                },
                error: function (e, t) {
                  if (e.previewElement) {
                    e.previewElement.classList.add('dz-error'),
                      'String' != typeof t && t.error && (t = t.error);
                    var n = !0,
                      i = !1,
                      r = void 0;
                    try {
                      for (
                        var o,
                          a = e.previewElement
                            .querySelectorAll('[data-dz-errormessage]')
                            [Symbol.iterator]();
                        !(n = (o = a.next()).done);
                        n = !0
                      ) {
                        o.value.textContent = t;
                      }
                    } catch (e) {
                      (i = !0), (r = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (i) throw r;
                      }
                    }
                  }
                },
                errormultiple: function () {},
                processing: function (e) {
                  if (
                    e.previewElement &&
                    (e.previewElement.classList.add('dz-processing'),
                    e._removeLink)
                  )
                    return (e._removeLink.innerHTML =
                      this.options.dictCancelUpload);
                },
                processingmultiple: function () {},
                uploadprogress: function (e, t) {
                  if (e.previewElement) {
                    var n = !0,
                      i = !1,
                      r = void 0;
                    try {
                      for (
                        var o,
                          a = e.previewElement
                            .querySelectorAll('[data-dz-uploadprogress]')
                            [Symbol.iterator]();
                        !(n = (o = a.next()).done);
                        n = !0
                      ) {
                        var l = o.value;
                        'PROGRESS' === l.nodeName
                          ? (l.value = t)
                          : (l.style.width = ''.concat(t, '%'));
                      }
                    } catch (e) {
                      (i = !0), (r = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (i) throw r;
                      }
                    }
                  }
                },
                totaluploadprogress: function () {},
                sending: function () {},
                sendingmultiple: function () {},
                success: function (e) {
                  if (e.previewElement)
                    return e.previewElement.classList.add('dz-success');
                },
                successmultiple: function () {},
                canceled: function (e) {
                  return this.emit('error', e, this.options.dictUploadCanceled);
                },
                canceledmultiple: function () {},
                complete: function (e) {
                  if (
                    (e._removeLink &&
                      (e._removeLink.innerHTML = this.options.dictRemoveFile),
                    e.previewElement)
                  )
                    return e.previewElement.classList.add('dz-complete');
                },
                completemultiple: function () {},
                maxfilesexceeded: function () {},
                maxfilesreached: function () {},
                queuecomplete: function () {},
                addedfiles: function () {},
              }),
              (this.prototype._thumbnailQueue = []),
              (this.prototype._processingThumbnail = !1);
          },
        },
        {
          key: 'extend',
          value: function (e) {
            for (
              var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              n[i - 1] = arguments[i];
            for (var r = 0, o = n; r < o.length; r++) {
              var a = o[r];
              for (var l in a) {
                var s = a[l];
                e[l] = s;
              }
            }
            return e;
          },
        },
      ]),
      _createClass(
        C,
        [
          {
            key: 'getAcceptedFiles',
            value: function () {
              return this.files
                .filter(function (e) {
                  return e.accepted;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: 'getRejectedFiles',
            value: function () {
              return this.files
                .filter(function (e) {
                  return !e.accepted;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: 'getFilesWithStatus',
            value: function (t) {
              return this.files
                .filter(function (e) {
                  return e.status === t;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: 'getQueuedFiles',
            value: function () {
              return this.getFilesWithStatus(C.QUEUED);
            },
          },
          {
            key: 'getUploadingFiles',
            value: function () {
              return this.getFilesWithStatus(C.UPLOADING);
            },
          },
          {
            key: 'getAddedFiles',
            value: function () {
              return this.getFilesWithStatus(C.ADDED);
            },
          },
          {
            key: 'getActiveFiles',
            value: function () {
              return this.files
                .filter(function (e) {
                  return e.status === C.UPLOADING || e.status === C.QUEUED;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: 'init',
            value: function () {
              var s = this;
              if (
                ('form' === this.element.tagName &&
                  this.element.setAttribute('enctype', 'multipart/form-data'),
                this.element.classList.contains('dropzone') &&
                  !this.element.querySelector('.dz-message') &&
                  this.element.appendChild(
                    C.createElement(
                      '<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(
                        this.options.dictDefaultMessage,
                        '</button></div>'
                      )
                    )
                  ),
                this.clickableElements.length)
              ) {
                !(function l() {
                  return (
                    s.hiddenFileInput &&
                      s.hiddenFileInput.parentNode.removeChild(
                        s.hiddenFileInput
                      ),
                    (s.hiddenFileInput = document.createElement('input')),
                    s.hiddenFileInput.setAttribute('type', 'file'),
                    (null === s.options.maxFiles || 1 < s.options.maxFiles) &&
                      s.hiddenFileInput.setAttribute('multiple', 'multiple'),
                    (s.hiddenFileInput.className = 'dz-hidden-input'),
                    null !== s.options.acceptedFiles &&
                      s.hiddenFileInput.setAttribute(
                        'accept',
                        s.options.acceptedFiles
                      ),
                    null !== s.options.capture &&
                      s.hiddenFileInput.setAttribute(
                        'capture',
                        s.options.capture
                      ),
                    (s.hiddenFileInput.style.visibility = 'hidden'),
                    (s.hiddenFileInput.style.position = 'absolute'),
                    (s.hiddenFileInput.style.top = '0'),
                    (s.hiddenFileInput.style.left = '0'),
                    (s.hiddenFileInput.style.height = '0'),
                    (s.hiddenFileInput.style.width = '0'),
                    C.getElement(
                      s.options.hiddenInputContainer,
                      'hiddenInputContainer'
                    ).appendChild(s.hiddenFileInput),
                    s.hiddenFileInput.addEventListener('change', function () {
                      var e = s.hiddenFileInput.files;
                      if (e.length) {
                        var t = !0,
                          n = !1,
                          i = void 0;
                        try {
                          for (
                            var r, o = e[Symbol.iterator]();
                            !(t = (r = o.next()).done);
                            t = !0
                          ) {
                            var a = r.value;
                            s.addFile(a);
                          }
                        } catch (e) {
                          (n = !0), (i = e);
                        } finally {
                          try {
                            t || null == o.return || o.return();
                          } finally {
                            if (n) throw i;
                          }
                        }
                      }
                      return s.emit('addedfiles', e), l();
                    })
                  );
                })();
              }
              this.URL = null !== window.URL ? window.URL : window.webkitURL;
              var e = !0,
                t = !1,
                n = void 0;
              try {
                for (
                  var i, r = this.events[Symbol.iterator]();
                  !(e = (i = r.next()).done);
                  e = !0
                ) {
                  var o = i.value;
                  this.on(o, this.options[o]);
                }
              } catch (e) {
                (t = !0), (n = e);
              } finally {
                try {
                  e || null == r.return || r.return();
                } finally {
                  if (t) throw n;
                }
              }
              this.on('uploadprogress', function () {
                return s.updateTotalUploadProgress();
              }),
                this.on('removedfile', function () {
                  return s.updateTotalUploadProgress();
                }),
                this.on('canceled', function (e) {
                  return s.emit('complete', e);
                }),
                this.on('complete', function (e) {
                  if (
                    0 === s.getAddedFiles().length &&
                    0 === s.getUploadingFiles().length &&
                    0 === s.getQueuedFiles().length
                  )
                    return setTimeout(function () {
                      return s.emit('queuecomplete');
                    }, 0);
                });
              function a(e) {
                var t;
                return (
                  (t = e).dataTransfer.types &&
                  t.dataTransfer.types.some(function (e) {
                    return 'Files' == e;
                  }) &&
                  (e.stopPropagation(),
                  e.preventDefault ? e.preventDefault() : (e.returnValue = !1))
                );
              }
              return (
                (this.listeners = [
                  {
                    element: this.element,
                    events: {
                      dragstart: function (e) {
                        return s.emit('dragstart', e);
                      },
                      dragenter: function (e) {
                        return a(e), s.emit('dragenter', e);
                      },
                      dragover: function (e) {
                        var t;
                        try {
                          t = e.dataTransfer.effectAllowed;
                        } catch (e) {}
                        return (
                          (e.dataTransfer.dropEffect =
                            'move' === t || 'linkMove' === t ? 'move' : 'copy'),
                          a(e),
                          s.emit('dragover', e)
                        );
                      },
                      dragleave: function (e) {
                        return s.emit('dragleave', e);
                      },
                      drop: function (e) {
                        return a(e), s.drop(e);
                      },
                      dragend: function (e) {
                        return s.emit('dragend', e);
                      },
                    },
                  },
                ]),
                this.clickableElements.forEach(function (t) {
                  return s.listeners.push({
                    element: t,
                    events: {
                      click: function (e) {
                        return (
                          (t === s.element &&
                            e.target !== s.element &&
                            !C.elementInside(
                              e.target,
                              s.element.querySelector('.dz-message')
                            )) ||
                            s.hiddenFileInput.click(),
                          !0
                        );
                      },
                    },
                  });
                }),
                this.enable(),
                this.options.init.call(this)
              );
            },
          },
          {
            key: 'destroy',
            value: function () {
              return (
                this.disable(),
                this.removeAllFiles(!0),
                null != this.hiddenFileInput &&
                  this.hiddenFileInput.parentNode &&
                  (this.hiddenFileInput.parentNode.removeChild(
                    this.hiddenFileInput
                  ),
                  (this.hiddenFileInput = null)),
                delete this.element.dropzone,
                C.instances.splice(C.instances.indexOf(this), 1)
              );
            },
          },
          {
            key: 'updateTotalUploadProgress',
            value: function () {
              var e,
                t = 0,
                n = 0;
              if (this.getActiveFiles().length) {
                var i = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var a, l = this.getActiveFiles()[Symbol.iterator]();
                    !(i = (a = l.next()).done);
                    i = !0
                  ) {
                    var s = a.value;
                    (t += s.upload.bytesSent), (n += s.upload.total);
                  }
                } catch (e) {
                  (r = !0), (o = e);
                } finally {
                  try {
                    i || null == l.return || l.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                e = (100 * t) / n;
              } else e = 100;
              return this.emit('totaluploadprogress', e, n, t);
            },
          },
          {
            key: '_getParamName',
            value: function (e) {
              return 'function' == typeof this.options.paramName
                ? this.options.paramName(e)
                : ''
                    .concat(this.options.paramName)
                    .concat(
                      this.options.uploadMultiple ? '['.concat(e, ']') : ''
                    );
            },
          },
          {
            key: '_renameFile',
            value: function (e) {
              return 'function' != typeof this.options.renameFile
                ? e.name
                : this.options.renameFile(e);
            },
          },
          {
            key: 'getFallbackForm',
            value: function () {
              var e, t;
              if ((e = this.getExistingFallback())) return e;
              var n = '<div class="dz-fallback">';
              this.options.dictFallbackText &&
                (n += '<p>'.concat(this.options.dictFallbackText, '</p>')),
                (n += '<input type="file" name="'
                  .concat(this._getParamName(0), '" ')
                  .concat(
                    this.options.uploadMultiple
                      ? 'multiple="multiple"'
                      : void 0,
                    ' /><input type="submit" value="Upload!"></div>'
                  ));
              var i = C.createElement(n);
              return (
                'FORM' !== this.element.tagName
                  ? (t = C.createElement(
                      '<form action="'
                        .concat(
                          this.options.url,
                          '" enctype="multipart/form-data" method="'
                        )
                        .concat(this.options.method, '"></form>')
                    )).appendChild(i)
                  : (this.element.setAttribute(
                      'enctype',
                      'multipart/form-data'
                    ),
                    this.element.setAttribute('method', this.options.method)),
                null != t ? t : i
              );
            },
          },
          {
            key: 'getExistingFallback',
            value: function () {
              for (
                var e = function (e) {
                    var t = !0,
                      n = !1,
                      i = void 0;
                    try {
                      for (
                        var r, o = e[Symbol.iterator]();
                        !(t = (r = o.next()).done);
                        t = !0
                      ) {
                        var a = r.value;
                        if (/(^| )fallback($| )/.test(a.className)) return a;
                      }
                    } catch (e) {
                      (n = !0), (i = e);
                    } finally {
                      try {
                        t || null == o.return || o.return();
                      } finally {
                        if (n) throw i;
                      }
                    }
                  },
                  t = 0,
                  n = ['div', 'form'];
                t < n.length;
                t++
              ) {
                var i,
                  r = n[t];
                if ((i = e(this.element.getElementsByTagName(r)))) return i;
              }
            },
          },
          {
            key: 'setupEventListeners',
            value: function () {
              return this.listeners.map(function (i) {
                return (function () {
                  var e = [];
                  for (var t in i.events) {
                    var n = i.events[t];
                    e.push(i.element.addEventListener(t, n, !1));
                  }
                  return e;
                })();
              });
            },
          },
          {
            key: 'removeEventListeners',
            value: function () {
              return this.listeners.map(function (i) {
                return (function () {
                  var e = [];
                  for (var t in i.events) {
                    var n = i.events[t];
                    e.push(i.element.removeEventListener(t, n, !1));
                  }
                  return e;
                })();
              });
            },
          },
          {
            key: 'disable',
            value: function () {
              var t = this;
              return (
                this.clickableElements.forEach(function (e) {
                  return e.classList.remove('dz-clickable');
                }),
                this.removeEventListeners(),
                (this.disabled = !0),
                this.files.map(function (e) {
                  return t.cancelUpload(e);
                })
              );
            },
          },
          {
            key: 'enable',
            value: function () {
              return (
                delete this.disabled,
                this.clickableElements.forEach(function (e) {
                  return e.classList.add('dz-clickable');
                }),
                this.setupEventListeners()
              );
            },
          },
          {
            key: 'filesize',
            value: function (e) {
              var t = 0,
                n = 'b';
              if (0 < e) {
                for (
                  var i = ['tb', 'gb', 'mb', 'kb', 'b'], r = 0;
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  if (Math.pow(this.options.filesizeBase, 4 - r) / 10 <= e) {
                    (t = e / Math.pow(this.options.filesizeBase, 4 - r)),
                      (n = o);
                    break;
                  }
                }
                t = Math.round(10 * t) / 10;
              }
              return '<strong>'
                .concat(t, '</strong> ')
                .concat(this.options.dictFileSizeUnits[n]);
            },
          },
          {
            key: '_updateMaxFilesReachedClass',
            value: function () {
              return null != this.options.maxFiles &&
                this.getAcceptedFiles().length >= this.options.maxFiles
                ? (this.getAcceptedFiles().length === this.options.maxFiles &&
                    this.emit('maxfilesreached', this.files),
                  this.element.classList.add('dz-max-files-reached'))
                : this.element.classList.remove('dz-max-files-reached');
            },
          },
          {
            key: 'drop',
            value: function (e) {
              if (e.dataTransfer) {
                this.emit('drop', e);
                for (var t = [], n = 0; n < e.dataTransfer.files.length; n++)
                  t[n] = e.dataTransfer.files[n];
                if (t.length) {
                  var i = e.dataTransfer.items;
                  i && i.length && null != i[0].webkitGetAsEntry
                    ? this._addFilesFromItems(i)
                    : this.handleFiles(t);
                }
                this.emit('addedfiles', t);
              }
            },
          },
          {
            key: 'paste',
            value: function (e) {
              if (
                null !=
                __guard__(null != e ? e.clipboardData : void 0, function (e) {
                  return e.items;
                })
              ) {
                this.emit('paste', e);
                var t = e.clipboardData.items;
                return t.length ? this._addFilesFromItems(t) : void 0;
              }
            },
          },
          {
            key: 'handleFiles',
            value: function (e) {
              var t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, o = e[Symbol.iterator]();
                  !(t = (r = o.next()).done);
                  t = !0
                ) {
                  var a = r.value;
                  this.addFile(a);
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (n) throw i;
                }
              }
            },
          },
          {
            key: '_addFilesFromItems',
            value: function (s) {
              var u = this;
              return (function () {
                var e = [],
                  t = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var r, o = s[Symbol.iterator]();
                    !(t = (r = o.next()).done);
                    t = !0
                  ) {
                    var a,
                      l = r.value;
                    null != l.webkitGetAsEntry && (a = l.webkitGetAsEntry())
                      ? a.isFile
                        ? e.push(u.addFile(l.getAsFile()))
                        : a.isDirectory
                        ? e.push(u._addFilesFromDirectory(a, a.name))
                        : e.push(void 0)
                      : null != l.getAsFile &&
                        (null == l.kind || 'file' === l.kind)
                      ? e.push(u.addFile(l.getAsFile()))
                      : e.push(void 0);
                  }
                } catch (e) {
                  (n = !0), (i = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (n) throw i;
                  }
                }
                return e;
              })();
            },
          },
          {
            key: '_addFilesFromDirectory',
            value: function (e, s) {
              function t(t) {
                return __guardMethod__(console, 'log', function (e) {
                  return e.log(t);
                });
              }
              var u = this,
                n = e.createReader();
              return (function l() {
                return n.readEntries(function (e) {
                  if (0 < e.length) {
                    var t = !0,
                      n = !1,
                      i = void 0;
                    try {
                      for (
                        var r, o = e[Symbol.iterator]();
                        !(t = (r = o.next()).done);
                        t = !0
                      ) {
                        var a = r.value;
                        a.isFile
                          ? a.file(function (e) {
                              if (
                                !u.options.ignoreHiddenFiles ||
                                '.' !== e.name.substring(0, 1)
                              )
                                return (
                                  (e.fullPath = ''
                                    .concat(s, '/')
                                    .concat(e.name)),
                                  u.addFile(e)
                                );
                            })
                          : a.isDirectory &&
                            u._addFilesFromDirectory(
                              a,
                              ''.concat(s, '/').concat(a.name)
                            );
                      }
                    } catch (e) {
                      (n = !0), (i = e);
                    } finally {
                      try {
                        t || null == o.return || o.return();
                      } finally {
                        if (n) throw i;
                      }
                    }
                    l();
                  }
                  return null;
                }, t);
              })();
            },
          },
          {
            key: 'accept',
            value: function (e, t) {
              this.options.maxFilesize &&
              e.size > 1024 * this.options.maxFilesize * 1024
                ? t(
                    this.options.dictFileTooBig
                      .replace(
                        '{{filesize}}',
                        Math.round(e.size / 1024 / 10.24) / 100
                      )
                      .replace('{{maxFilesize}}', this.options.maxFilesize)
                  )
                : C.isValidFile(e, this.options.acceptedFiles)
                ? null != this.options.maxFiles &&
                  this.getAcceptedFiles().length >= this.options.maxFiles
                  ? (t(
                      this.options.dictMaxFilesExceeded.replace(
                        '{{maxFiles}}',
                        this.options.maxFiles
                      )
                    ),
                    this.emit('maxfilesexceeded', e))
                  : this.options.accept.call(this, e, t)
                : t(this.options.dictInvalidFileType);
            },
          },
          {
            key: 'addFile',
            value: function (t) {
              var n = this;
              (t.upload = {
                uuid: C.uuidv4(),
                progress: 0,
                total: t.size,
                bytesSent: 0,
                filename: this._renameFile(t),
              }),
                this.files.push(t),
                (t.status = C.ADDED),
                this.emit('addedfile', t),
                this._enqueueThumbnail(t),
                this.accept(t, function (e) {
                  e
                    ? ((t.accepted = !1), n._errorProcessing([t], e))
                    : ((t.accepted = !0),
                      n.options.autoQueue && n.enqueueFile(t)),
                    n._updateMaxFilesReachedClass();
                });
            },
          },
          {
            key: 'enqueueFiles',
            value: function (e) {
              var t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, o = e[Symbol.iterator]();
                  !(t = (r = o.next()).done);
                  t = !0
                ) {
                  var a = r.value;
                  this.enqueueFile(a);
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (n) throw i;
                }
              }
              return null;
            },
          },
          {
            key: 'enqueueFile',
            value: function (e) {
              var t = this;
              if (e.status !== C.ADDED || !0 !== e.accepted)
                throw new Error(
                  "This file can't be queued because it has already been processed or was rejected."
                );
              if (((e.status = C.QUEUED), this.options.autoProcessQueue))
                return setTimeout(function () {
                  return t.processQueue();
                }, 0);
            },
          },
          {
            key: '_enqueueThumbnail',
            value: function (e) {
              var t = this;
              if (
                this.options.createImageThumbnails &&
                e.type.match(/image.*/) &&
                e.size <= 1024 * this.options.maxThumbnailFilesize * 1024
              )
                return (
                  this._thumbnailQueue.push(e),
                  setTimeout(function () {
                    return t._processThumbnailQueue();
                  }, 0)
                );
            },
          },
          {
            key: '_processThumbnailQueue',
            value: function () {
              var t = this;
              if (
                !this._processingThumbnail &&
                0 !== this._thumbnailQueue.length
              ) {
                this._processingThumbnail = !0;
                var n = this._thumbnailQueue.shift();
                return this.createThumbnail(
                  n,
                  this.options.thumbnailWidth,
                  this.options.thumbnailHeight,
                  this.options.thumbnailMethod,
                  !0,
                  function (e) {
                    return (
                      t.emit('thumbnail', n, e),
                      (t._processingThumbnail = !1),
                      t._processThumbnailQueue()
                    );
                  }
                );
              }
            },
          },
          {
            key: 'removeFile',
            value: function (e) {
              if (
                (e.status === C.UPLOADING && this.cancelUpload(e),
                (this.files = without(this.files, e)),
                this.emit('removedfile', e),
                0 === this.files.length)
              )
                return this.emit('reset');
            },
          },
          {
            key: 'removeAllFiles',
            value: function (e) {
              null == e && (e = !1);
              var t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, o = this.files.slice()[Symbol.iterator]();
                  !(t = (r = o.next()).done);
                  t = !0
                ) {
                  var a = r.value;
                  (a.status === C.UPLOADING && !e) || this.removeFile(a);
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (n) throw i;
                }
              }
              return null;
            },
          },
          {
            key: 'resizeImage',
            value: function (r, e, t, n, o) {
              var a = this;
              return this.createThumbnail(r, e, t, n, !0, function (e, t) {
                if (null == t) return o(r);
                var n = a.options.resizeMimeType;
                null == n && (n = r.type);
                var i = t.toDataURL(n, a.options.resizeQuality);
                return (
                  ('image/jpeg' !== n && 'image/jpg' !== n) ||
                    (i = ExifRestore.restore(r.dataURL, i)),
                  o(C.dataURItoBlob(i))
                );
              });
            },
          },
          {
            key: 'createThumbnail',
            value: function (e, t, n, i, r, o) {
              var a = this,
                l = new FileReader();
              (l.onload = function () {
                (e.dataURL = l.result),
                  'image/svg+xml' !== e.type
                    ? a.createThumbnailFromUrl(e, t, n, i, r, o)
                    : null != o && o(l.result);
              }),
                l.readAsDataURL(e);
            },
          },
          {
            key: 'displayExistingFile',
            value: function (t, e, n, i, r) {
              var o = this,
                a = !(4 < arguments.length && void 0 !== r) || r;
              if ((this.emit('addedfile', t), this.emit('complete', t), a)) {
                (t.dataURL = e),
                  this.createThumbnailFromUrl(
                    t,
                    this.options.thumbnailWidth,
                    this.options.thumbnailHeight,
                    this.options.resizeMethod,
                    this.options.fixOrientation,
                    function (e) {
                      o.emit('thumbnail', t, e), n && n();
                    },
                    i
                  );
              } else this.emit('thumbnail', t, e), n && n();
            },
          },
          {
            key: 'createThumbnailFromUrl',
            value: function (o, a, l, s, t, u, e) {
              var c = this,
                d = document.createElement('img');
              return (
                e && (d.crossOrigin = e),
                (d.onload = function () {
                  var e = function (e) {
                    return e(1);
                  };
                  return (
                    'undefined' != typeof EXIF &&
                      null !== EXIF &&
                      t &&
                      (e = function (e) {
                        return EXIF.getData(d, function () {
                          return e(EXIF.getTag(this, 'Orientation'));
                        });
                      }),
                    e(function (e) {
                      (o.width = d.width), (o.height = d.height);
                      var t = c.options.resize.call(c, o, a, l, s),
                        n = document.createElement('canvas'),
                        i = n.getContext('2d');
                      switch (
                        ((n.width = t.trgWidth),
                        (n.height = t.trgHeight),
                        4 < e &&
                          ((n.width = t.trgHeight), (n.height = t.trgWidth)),
                        e)
                      ) {
                        case 2:
                          i.translate(n.width, 0), i.scale(-1, 1);
                          break;
                        case 3:
                          i.translate(n.width, n.height), i.rotate(Math.PI);
                          break;
                        case 4:
                          i.translate(0, n.height), i.scale(1, -1);
                          break;
                        case 5:
                          i.rotate(0.5 * Math.PI), i.scale(1, -1);
                          break;
                        case 6:
                          i.rotate(0.5 * Math.PI), i.translate(0, -n.width);
                          break;
                        case 7:
                          i.rotate(0.5 * Math.PI),
                            i.translate(n.height, -n.width),
                            i.scale(-1, 1);
                          break;
                        case 8:
                          i.rotate(-0.5 * Math.PI), i.translate(-n.height, 0);
                      }
                      drawImageIOSFix(
                        i,
                        d,
                        null != t.srcX ? t.srcX : 0,
                        null != t.srcY ? t.srcY : 0,
                        t.srcWidth,
                        t.srcHeight,
                        null != t.trgX ? t.trgX : 0,
                        null != t.trgY ? t.trgY : 0,
                        t.trgWidth,
                        t.trgHeight
                      );
                      var r = n.toDataURL('image/png');
                      if (null != u) return u(r, n);
                    })
                  );
                }),
                null != u && (d.onerror = u),
                (d.src = o.dataURL)
              );
            },
          },
          {
            key: 'processQueue',
            value: function () {
              var e = this.options.parallelUploads,
                t = this.getUploadingFiles().length,
                n = t;
              if (!(e <= t)) {
                var i = this.getQueuedFiles();
                if (0 < i.length) {
                  if (this.options.uploadMultiple)
                    return this.processFiles(i.slice(0, e - t));
                  for (; n < e; ) {
                    if (!i.length) return;
                    this.processFile(i.shift()), n++;
                  }
                }
              }
            },
          },
          {
            key: 'processFile',
            value: function (e) {
              return this.processFiles([e]);
            },
          },
          {
            key: 'processFiles',
            value: function (e) {
              var t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, o = e[Symbol.iterator]();
                  !(t = (r = o.next()).done);
                  t = !0
                ) {
                  var a = r.value;
                  (a.processing = !0),
                    (a.status = C.UPLOADING),
                    this.emit('processing', a);
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (n) throw i;
                }
              }
              return (
                this.options.uploadMultiple &&
                  this.emit('processingmultiple', e),
                this.uploadFiles(e)
              );
            },
          },
          {
            key: '_getFilesWithXhr',
            value: function (t) {
              return this.files
                .filter(function (e) {
                  return e.xhr === t;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: 'cancelUpload',
            value: function (e) {
              if (e.status === C.UPLOADING) {
                var t = this._getFilesWithXhr(e.xhr),
                  n = !0,
                  i = !1,
                  r = void 0;
                try {
                  for (
                    var o, a = t[Symbol.iterator]();
                    !(n = (o = a.next()).done);
                    n = !0
                  ) {
                    o.value.status = C.CANCELED;
                  }
                } catch (e) {
                  (i = !0), (r = e);
                } finally {
                  try {
                    n || null == a.return || a.return();
                  } finally {
                    if (i) throw r;
                  }
                }
                void 0 !== e.xhr && e.xhr.abort();
                var l = !0,
                  s = !1,
                  u = void 0;
                try {
                  for (
                    var c, d = t[Symbol.iterator]();
                    !(l = (c = d.next()).done);
                    l = !0
                  ) {
                    var p = c.value;
                    this.emit('canceled', p);
                  }
                } catch (e) {
                  (s = !0), (u = e);
                } finally {
                  try {
                    l || null == d.return || d.return();
                  } finally {
                    if (s) throw u;
                  }
                }
                this.options.uploadMultiple && this.emit('canceledmultiple', t);
              } else
                (e.status !== C.ADDED && e.status !== C.QUEUED) ||
                  ((e.status = C.CANCELED),
                  this.emit('canceled', e),
                  this.options.uploadMultiple &&
                    this.emit('canceledmultiple', [e]));
              if (this.options.autoProcessQueue) return this.processQueue();
            },
          },
          {
            key: 'resolveOption',
            value: function (e) {
              if ('function' != typeof e) return e;
              for (
                var t = arguments.length,
                  n = new Array(1 < t ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                n[i - 1] = arguments[i];
              return e.apply(this, n);
            },
          },
          {
            key: 'uploadFile',
            value: function (e) {
              return this.uploadFiles([e]);
            },
          },
          {
            key: 'uploadFiles',
            value: function (s) {
              var u = this;
              this._transformFiles(s, function (e) {
                if (u.options.chunking) {
                  var t = e[0];
                  (s[0].upload.chunked =
                    u.options.chunking &&
                    (u.options.forceChunking || t.size > u.options.chunkSize)),
                    (s[0].upload.totalChunkCount = Math.ceil(
                      t.size / u.options.chunkSize
                    ));
                }
                if (s[0].upload.chunked) {
                  var r = s[0],
                    o = e[0];
                  r.upload.chunks = [];
                  var i = function () {
                    for (var e = 0; void 0 !== r.upload.chunks[e]; ) e++;
                    if (!(e >= r.upload.totalChunkCount)) {
                      0;
                      var t = e * u.options.chunkSize,
                        n = Math.min(t + u.options.chunkSize, r.size),
                        i = {
                          name: u._getParamName(0),
                          data: o.webkitSlice
                            ? o.webkitSlice(t, n)
                            : o.slice(t, n),
                          filename: r.upload.filename,
                          chunkIndex: e,
                        };
                      (r.upload.chunks[e] = {
                        file: r,
                        index: e,
                        dataBlock: i,
                        status: C.UPLOADING,
                        progress: 0,
                        retries: 0,
                      }),
                        u._uploadData(s, [i]);
                    }
                  };
                  if (
                    ((r.upload.finishedChunkUpload = function (e) {
                      var t = !0;
                      (e.status = C.SUCCESS),
                        (e.dataBlock = null),
                        (e.xhr = null);
                      for (var n = 0; n < r.upload.totalChunkCount; n++) {
                        if (void 0 === r.upload.chunks[n]) return i();
                        r.upload.chunks[n].status !== C.SUCCESS && (t = !1);
                      }
                      t &&
                        u.options.chunksUploaded(r, function () {
                          u._finished(s, '', null);
                        });
                    }),
                    u.options.parallelChunkUploads)
                  )
                    for (var n = 0; n < r.upload.totalChunkCount; n++) i();
                  else i();
                } else {
                  for (var a = [], l = 0; l < s.length; l++)
                    a[l] = {
                      name: u._getParamName(l),
                      data: e[l],
                      filename: s[l].upload.filename,
                    };
                  u._uploadData(s, a);
                }
              });
            },
          },
          {
            key: '_getChunk',
            value: function (e, t) {
              for (var n = 0; n < e.upload.totalChunkCount; n++)
                if (
                  void 0 !== e.upload.chunks[n] &&
                  e.upload.chunks[n].xhr === t
                )
                  return e.upload.chunks[n];
            },
          },
          {
            key: '_uploadData',
            value: function (t, e) {
              var n = this,
                i = new XMLHttpRequest(),
                r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var l, s = t[Symbol.iterator]();
                  !(r = (l = s.next()).done);
                  r = !0
                ) {
                  l.value.xhr = i;
                }
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (o) throw a;
                }
              }
              t[0].upload.chunked &&
                (t[0].upload.chunks[e[0].chunkIndex].xhr = i);
              var u = this.resolveOption(this.options.method, t),
                c = this.resolveOption(this.options.url, t);
              i.open(u, c, !0),
                (i.timeout = this.resolveOption(this.options.timeout, t)),
                (i.withCredentials = !!this.options.withCredentials),
                (i.onload = function (e) {
                  n._finishedUploading(t, i, e);
                }),
                (i.ontimeout = function () {
                  n._handleUploadError(
                    t,
                    i,
                    'Request timedout after '.concat(
                      n.options.timeout,
                      ' seconds'
                    )
                  );
                }),
                (i.onerror = function () {
                  n._handleUploadError(t, i);
                }),
                ((null != i.upload ? i.upload : i).onprogress = function (e) {
                  return n._updateFilesUploadProgress(t, i, e);
                });
              var d = {
                Accept: 'application/json',
                'Cache-Control': 'no-cache',
                'X-Requested-With': 'XMLHttpRequest',
              };
              for (var p in (this.options.headers &&
                C.extend(d, this.options.headers),
              d)) {
                var h = d[p];
                h && i.setRequestHeader(p, h);
              }
              var f = new FormData();
              if (this.options.params) {
                var v = this.options.params;
                for (var m in ('function' == typeof v &&
                  (v = v.call(
                    this,
                    t,
                    i,
                    t[0].upload.chunked ? this._getChunk(t[0], i) : null
                  )),
                v)) {
                  var y = v[m];
                  f.append(m, y);
                }
              }
              var g = !0,
                b = !1,
                k = void 0;
              try {
                for (
                  var w, F = t[Symbol.iterator]();
                  !(g = (w = F.next()).done);
                  g = !0
                ) {
                  var z = w.value;
                  this.emit('sending', z, i, f);
                }
              } catch (e) {
                (b = !0), (k = e);
              } finally {
                try {
                  g || null == F.return || F.return();
                } finally {
                  if (b) throw k;
                }
              }
              this.options.uploadMultiple &&
                this.emit('sendingmultiple', t, i, f),
                this._addFormElementData(f);
              for (var x = 0; x < e.length; x++) {
                var E = e[x];
                f.append(E.name, E.data, E.filename);
              }
              this.submitRequest(i, f, t);
            },
          },
          {
            key: '_transformFiles',
            value: function (n, i) {
              for (
                var e = this,
                  r = [],
                  o = 0,
                  t = function (t) {
                    e.options.transformFile.call(e, n[t], function (e) {
                      (r[t] = e), ++o === n.length && i(r);
                    });
                  },
                  a = 0;
                a < n.length;
                a++
              )
                t(a);
            },
          },
          {
            key: '_addFormElementData',
            value: function (e) {
              if ('FORM' === this.element.tagName) {
                var t = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var r,
                      o = this.element
                        .querySelectorAll('input, textarea, select, button')
                        [Symbol.iterator]();
                    !(t = (r = o.next()).done);
                    t = !0
                  ) {
                    var a = r.value,
                      l = a.getAttribute('name'),
                      s = a.getAttribute('type');
                    if (((s = s && s.toLowerCase()), null != l))
                      if (
                        'SELECT' === a.tagName &&
                        a.hasAttribute('multiple')
                      ) {
                        var u = !0,
                          c = !1,
                          d = void 0;
                        try {
                          for (
                            var p, h = a.options[Symbol.iterator]();
                            !(u = (p = h.next()).done);
                            u = !0
                          ) {
                            var f = p.value;
                            f.selected && e.append(l, f.value);
                          }
                        } catch (e) {
                          (c = !0), (d = e);
                        } finally {
                          try {
                            u || null == h.return || h.return();
                          } finally {
                            if (c) throw d;
                          }
                        }
                      } else
                        (!s ||
                          ('checkbox' !== s && 'radio' !== s) ||
                          a.checked) &&
                          e.append(l, a.value);
                  }
                } catch (e) {
                  (n = !0), (i = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (n) throw i;
                  }
                }
              }
            },
          },
          {
            key: '_updateFilesUploadProgress',
            value: function (e, t, n) {
              var i;
              if (void 0 !== n) {
                if (((i = (100 * n.loaded) / n.total), e[0].upload.chunked)) {
                  var r = e[0],
                    o = this._getChunk(r, t);
                  (o.progress = i),
                    (o.total = n.total),
                    (o.bytesSent = n.loaded);
                  (r.upload.progress = 0), (r.upload.total = 0);
                  for (
                    var a = (r.upload.bytesSent = 0);
                    a < r.upload.totalChunkCount;
                    a++
                  )
                    void 0 !== r.upload.chunks[a] &&
                      void 0 !== r.upload.chunks[a].progress &&
                      ((r.upload.progress += r.upload.chunks[a].progress),
                      (r.upload.total += r.upload.chunks[a].total),
                      (r.upload.bytesSent += r.upload.chunks[a].bytesSent));
                  r.upload.progress =
                    r.upload.progress / r.upload.totalChunkCount;
                } else {
                  var l = !0,
                    s = !1,
                    u = void 0;
                  try {
                    for (
                      var c, d = e[Symbol.iterator]();
                      !(l = (c = d.next()).done);
                      l = !0
                    ) {
                      var p = c.value;
                      (p.upload.progress = i),
                        (p.upload.total = n.total),
                        (p.upload.bytesSent = n.loaded);
                    }
                  } catch (e) {
                    (s = !0), (u = e);
                  } finally {
                    try {
                      l || null == d.return || d.return();
                    } finally {
                      if (s) throw u;
                    }
                  }
                }
                var h = !0,
                  f = !1,
                  v = void 0;
                try {
                  for (
                    var m, y = e[Symbol.iterator]();
                    !(h = (m = y.next()).done);
                    h = !0
                  ) {
                    var g = m.value;
                    this.emit(
                      'uploadprogress',
                      g,
                      g.upload.progress,
                      g.upload.bytesSent
                    );
                  }
                } catch (e) {
                  (f = !0), (v = e);
                } finally {
                  try {
                    h || null == y.return || y.return();
                  } finally {
                    if (f) throw v;
                  }
                }
              } else {
                var b = !0,
                  k = !0,
                  w = !(i = 100),
                  F = void 0;
                try {
                  for (
                    var z, x = e[Symbol.iterator]();
                    !(k = (z = x.next()).done);
                    k = !0
                  ) {
                    var E = z.value;
                    (100 === E.upload.progress &&
                      E.upload.bytesSent === E.upload.total) ||
                      (b = !1),
                      (E.upload.progress = i),
                      (E.upload.bytesSent = E.upload.total);
                  }
                } catch (e) {
                  (w = !0), (F = e);
                } finally {
                  try {
                    k || null == x.return || x.return();
                  } finally {
                    if (w) throw F;
                  }
                }
                if (b) return;
                var C = !0,
                  _ = !1,
                  S = void 0;
                try {
                  for (
                    var D, T = e[Symbol.iterator]();
                    !(C = (D = T.next()).done);
                    C = !0
                  ) {
                    var L = D.value;
                    this.emit('uploadprogress', L, i, L.upload.bytesSent);
                  }
                } catch (e) {
                  (_ = !0), (S = e);
                } finally {
                  try {
                    C || null == T.return || T.return();
                  } finally {
                    if (_) throw S;
                  }
                }
              }
            },
          },
          {
            key: '_finishedUploading',
            value: function (e, t, n) {
              var i;
              if (e[0].status !== C.CANCELED && 4 === t.readyState) {
                if (
                  'arraybuffer' !== t.responseType &&
                  'blob' !== t.responseType &&
                  ((i = t.responseText),
                  t.getResponseHeader('content-type') &&
                    ~t
                      .getResponseHeader('content-type')
                      .indexOf('application/json'))
                )
                  try {
                    i = JSON.parse(i);
                  } catch (e) {
                    (n = e), (i = 'Invalid JSON response from server.');
                  }
                this._updateFilesUploadProgress(e),
                  200 <= t.status && t.status < 300
                    ? e[0].upload.chunked
                      ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t))
                      : this._finished(e, i, n)
                    : this._handleUploadError(e, t, i);
              }
            },
          },
          {
            key: '_handleUploadError',
            value: function (e, t, n) {
              if (e[0].status !== C.CANCELED) {
                if (e[0].upload.chunked && this.options.retryChunks) {
                  var i = this._getChunk(e[0], t);
                  if (i.retries++ < this.options.retryChunksLimit)
                    return void this._uploadData(e, [i.dataBlock]);
                  console.warn('Retried this chunk too often. Giving up.');
                }
                this._errorProcessing(
                  e,
                  n ||
                    this.options.dictResponseError.replace(
                      '{{statusCode}}',
                      t.status
                    ),
                  t
                );
              }
            },
          },
          {
            key: 'submitRequest',
            value: function (e, t) {
              e.send(t);
            },
          },
          {
            key: '_finished',
            value: function (e, t, n) {
              var i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, l = e[Symbol.iterator]();
                  !(i = (a = l.next()).done);
                  i = !0
                ) {
                  var s = a.value;
                  (s.status = C.SUCCESS),
                    this.emit('success', s, t, n),
                    this.emit('complete', s);
                }
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  i || null == l.return || l.return();
                } finally {
                  if (r) throw o;
                }
              }
              if (
                (this.options.uploadMultiple &&
                  (this.emit('successmultiple', e, t, n),
                  this.emit('completemultiple', e)),
                this.options.autoProcessQueue)
              )
                return this.processQueue();
            },
          },
          {
            key: '_errorProcessing',
            value: function (e, t, n) {
              var i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var a, l = e[Symbol.iterator]();
                  !(i = (a = l.next()).done);
                  i = !0
                ) {
                  var s = a.value;
                  (s.status = C.ERROR),
                    this.emit('error', s, t, n),
                    this.emit('complete', s);
                }
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  i || null == l.return || l.return();
                } finally {
                  if (r) throw o;
                }
              }
              if (
                (this.options.uploadMultiple &&
                  (this.emit('errormultiple', e, t, n),
                  this.emit('completemultiple', e)),
                this.options.autoProcessQueue)
              )
                return this.processQueue();
            },
          },
        ],
        [
          {
            key: 'uuidv4',
            value: function () {
              return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                /[xy]/g,
                function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ('x' === e ? t : (3 & t) | 8).toString(16);
                }
              );
            },
          },
        ]
      ),
      C
    );
  })();
Dropzone.initClass(),
  (Dropzone.version = '5.7.0'),
  (Dropzone.options = {}),
  (Dropzone.optionsForElement = function (e) {
    return e.getAttribute('id')
      ? Dropzone.options[camelize(e.getAttribute('id'))]
      : void 0;
  }),
  (Dropzone.instances = []),
  (Dropzone.forElement = function (e) {
    if (
      ('string' == typeof e && (e = document.querySelector(e)),
      null == (null != e ? e.dropzone : void 0))
    )
      throw new Error(
        "No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."
      );
    return e.dropzone;
  }),
  (Dropzone.autoDiscover = !0),
  (Dropzone.discover = function () {
    var s;
    if (document.querySelectorAll) s = document.querySelectorAll('.dropzone');
    else {
      s = [];
      var e = function (l) {
        return (function () {
          var e = [],
            t = !0,
            n = !1,
            i = void 0;
          try {
            for (
              var r, o = l[Symbol.iterator]();
              !(t = (r = o.next()).done);
              t = !0
            ) {
              var a = r.value;
              /(^| )dropzone($| )/.test(a.className)
                ? e.push(s.push(a))
                : e.push(void 0);
            }
          } catch (e) {
            (n = !0), (i = e);
          } finally {
            try {
              t || null == o.return || o.return();
            } finally {
              if (n) throw i;
            }
          }
          return e;
        })();
      };
      e(document.getElementsByTagName('div')),
        e(document.getElementsByTagName('form'));
    }
    return (function () {
      var e = [],
        t = !0,
        n = !1,
        i = void 0;
      try {
        for (
          var r, o = s[Symbol.iterator]();
          !(t = (r = o.next()).done);
          t = !0
        ) {
          var a = r.value;
          !1 !== Dropzone.optionsForElement(a)
            ? e.push(new Dropzone(a))
            : e.push(void 0);
        }
      } catch (e) {
        (n = !0), (i = e);
      } finally {
        try {
          t || null == o.return || o.return();
        } finally {
          if (n) throw i;
        }
      }
      return e;
    })();
  }),
  (Dropzone.blacklistedBrowsers = [
    /opera.*(Macintosh|Windows Phone).*version\/12/i,
  ]),
  (Dropzone.isBrowserSupported = function () {
    var e = !0;
    if (
      window.File &&
      window.FileReader &&
      window.FileList &&
      window.Blob &&
      window.FormData &&
      document.querySelector
    )
      if ('classList' in document.createElement('a')) {
        var t = !0,
          n = !1,
          i = void 0;
        try {
          for (
            var r, o = Dropzone.blacklistedBrowsers[Symbol.iterator]();
            !(t = (r = o.next()).done);
            t = !0
          ) {
            r.value.test(navigator.userAgent) && (e = !1);
          }
        } catch (e) {
          (n = !0), (i = e);
        } finally {
          try {
            t || null == o.return || o.return();
          } finally {
            if (n) throw i;
          }
        }
      } else e = !1;
    else e = !1;
    return e;
  }),
  (Dropzone.dataURItoBlob = function (e) {
    for (
      var t = atob(e.split(',')[1]),
        n = e.split(',')[0].split(':')[1].split(';')[0],
        i = new ArrayBuffer(t.length),
        r = new Uint8Array(i),
        o = 0,
        a = t.length,
        l = 0 <= a;
      l ? o <= a : a <= o;
      l ? o++ : o--
    )
      r[o] = t.charCodeAt(o);
    return new Blob([i], {type: n});
  });
var without = function (e, t) {
    return e
      .filter(function (e) {
        return e !== t;
      })
      .map(function (e) {
        return e;
      });
  },
  camelize = function (e) {
    return e.replace(/[\-_](\w)/g, function (e) {
      return e.charAt(1).toUpperCase();
    });
  };
(Dropzone.createElement = function (e) {
  var t = document.createElement('div');
  return (t.innerHTML = e), t.childNodes[0];
}),
  (Dropzone.elementInside = function (e, t) {
    if (e === t) return !0;
    for (; (e = e.parentNode); ) if (e === t) return !0;
    return !1;
  }),
  (Dropzone.getElement = function (e, t) {
    var n;
    if (
      ('string' == typeof e
        ? (n = document.querySelector(e))
        : null != e.nodeType && (n = e),
      null == n)
    )
      throw new Error(
        'Invalid `'.concat(
          t,
          '` option provided. Please provide a CSS selector or a plain HTML element.'
        )
      );
    return n;
  }),
  (Dropzone.getElements = function (e, t) {
    var n, i;
    if (e instanceof Array) {
      i = [];
      try {
        var r = !0,
          o = !1,
          a = void 0;
        try {
          for (
            var l, s = e[Symbol.iterator]();
            !(r = (l = s.next()).done);
            r = !0
          )
            (n = l.value), i.push(this.getElement(n, t));
        } catch (e) {
          (o = !0), (a = e);
        } finally {
          try {
            r || null == s.return || s.return();
          } finally {
            if (o) throw a;
          }
        }
      } catch (e) {
        i = null;
      }
    } else if ('string' == typeof e) {
      var u = !0,
        c = !(i = []),
        d = void 0;
      try {
        for (
          var p, h = document.querySelectorAll(e)[Symbol.iterator]();
          !(u = (p = h.next()).done);
          u = !0
        )
          (n = p.value), i.push(n);
      } catch (e) {
        (c = !0), (d = e);
      } finally {
        try {
          u || null == h.return || h.return();
        } finally {
          if (c) throw d;
        }
      }
    } else null != e.nodeType && (i = [e]);
    if (null == i || !i.length)
      throw new Error(
        'Invalid `'.concat(
          t,
          '` option provided. Please provide a CSS selector, a plain HTML element or a list of those.'
        )
      );
    return i;
  }),
  (Dropzone.confirm = function (e, t, n) {
    return window.confirm(e) ? t() : null != n ? n() : void 0;
  }),
  (Dropzone.isValidFile = function (e, t) {
    if (!t) return !0;
    t = t.split(',');
    var n = e.type,
      i = n.replace(/\/.*$/, ''),
      r = !0,
      o = !1,
      a = void 0;
    try {
      for (
        var l, s = t[Symbol.iterator]();
        !(r = (l = s.next()).done);
        r = !0
      ) {
        var u = l.value;
        if ('.' === (u = u.trim()).charAt(0)) {
          if (
            -1 !==
            e.name
              .toLowerCase()
              .indexOf(u.toLowerCase(), e.name.length - u.length)
          )
            return !0;
        } else if (/\/\*$/.test(u)) {
          if (i === u.replace(/\/.*$/, '')) return !0;
        } else if (n === u) return !0;
      }
    } catch (e) {
      (o = !0), (a = e);
    } finally {
      try {
        r || null == s.return || s.return();
      } finally {
        if (o) throw a;
      }
    }
    return !1;
  }),
  'undefined' != typeof jQuery &&
    null !== jQuery &&
    (jQuery.fn.dropzone = function (e) {
      return this.each(function () {
        return new Dropzone(this, e);
      });
    }),
  'undefined' != typeof module && null !== module
    ? (module.exports = Dropzone)
    : (window.Dropzone = Dropzone),
  (Dropzone.ADDED = 'added'),
  (Dropzone.QUEUED = 'queued'),
  (Dropzone.ACCEPTED = Dropzone.QUEUED),
  (Dropzone.UPLOADING = 'uploading'),
  (Dropzone.PROCESSING = Dropzone.UPLOADING),
  (Dropzone.CANCELED = 'canceled'),
  (Dropzone.ERROR = 'error'),
  (Dropzone.SUCCESS = 'success');
var detectVerticalSquash = function (e) {
    e.naturalWidth;
    var t = e.naturalHeight,
      n = document.createElement('canvas');
    (n.width = 1), (n.height = t);
    var i = n.getContext('2d');
    i.drawImage(e, 0, 0);
    for (
      var r = i.getImageData(1, 0, 1, t).data, o = 0, a = t, l = t;
      o < l;

    ) {
      0 === r[4 * (l - 1) + 3] ? (a = l) : (o = l), (l = (a + o) >> 1);
    }
    var s = l / t;
    return 0 == s ? 1 : s;
  },
  drawImageIOSFix = function (e, t, n, i, r, o, a, l, s, u) {
    var c = detectVerticalSquash(t);
    return e.drawImage(t, n, i, r, o, a, l, s, u / c);
  },
  ExifRestore = (function () {
    function e() {
      _classCallCheck(this, e);
    }
    return (
      _createClass(e, null, [
        {
          key: 'initClass',
          value: function () {
            this.KEY_STR =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
          },
        },
        {
          key: 'encode64',
          value: function (e) {
            for (
              var t = '',
                n = void 0,
                i = void 0,
                r = '',
                o = void 0,
                a = void 0,
                l = void 0,
                s = '',
                u = 0;
              (o = (n = e[u++]) >> 2),
                (a = ((3 & n) << 4) | ((i = e[u++]) >> 4)),
                (l = ((15 & i) << 2) | ((r = e[u++]) >> 6)),
                (s = 63 & r),
                isNaN(i) ? (l = s = 64) : isNaN(r) && (s = 64),
                (t =
                  t +
                  this.KEY_STR.charAt(o) +
                  this.KEY_STR.charAt(a) +
                  this.KEY_STR.charAt(l) +
                  this.KEY_STR.charAt(s)),
                (n = i = r = ''),
                (o = a = l = s = ''),
                u < e.length;

            );
            return t;
          },
        },
        {
          key: 'restore',
          value: function (e, t) {
            if (!e.match('data:image/jpeg;base64,')) return t;
            var n = this.decode64(e.replace('data:image/jpeg;base64,', '')),
              i = this.slice2Segments(n),
              r = this.exifManipulation(t, i);
            return 'data:image/jpeg;base64,'.concat(this.encode64(r));
          },
        },
        {
          key: 'exifManipulation',
          value: function (e, t) {
            var n = this.getExifArray(t),
              i = this.insertExif(e, n);
            return new Uint8Array(i);
          },
        },
        {
          key: 'getExifArray',
          value: function (e) {
            for (var t = void 0, n = 0; n < e.length; ) {
              if ((255 === (t = e[n])[0]) & (225 === t[1])) return t;
              n++;
            }
            return [];
          },
        },
        {
          key: 'insertExif',
          value: function (e, t) {
            var n = e.replace('data:image/jpeg;base64,', ''),
              i = this.decode64(n),
              r = i.indexOf(255, 3),
              o = i.slice(0, r),
              a = i.slice(r),
              l = o;
            return (l = (l = l.concat(t)).concat(a));
          },
        },
        {
          key: 'slice2Segments',
          value: function (e) {
            for (var t = 0, n = []; ; ) {
              if ((255 === e[t]) & (218 === e[t + 1])) break;
              if ((255 === e[t]) & (216 === e[t + 1])) t += 2;
              else {
                var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
                  r = e.slice(t, i);
                n.push(r), (t = i);
              }
              if (t > e.length) break;
            }
            return n;
          },
        },
        {
          key: 'decode64',
          value: function (e) {
            var t = void 0,
              n = void 0,
              i = '',
              r = void 0,
              o = void 0,
              a = '',
              l = 0,
              s = [];
            for (
              /[^A-Za-z0-9\+\/\=]/g.exec(e) &&
                console.warn(
                  "There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."
                ),
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
              (t =
                (this.KEY_STR.indexOf(e.charAt(l++)) << 2) |
                ((r = this.KEY_STR.indexOf(e.charAt(l++))) >> 4)),
                (n =
                  ((15 & r) << 4) |
                  ((o = this.KEY_STR.indexOf(e.charAt(l++))) >> 2)),
                (i =
                  ((3 & o) << 6) | (a = this.KEY_STR.indexOf(e.charAt(l++)))),
                s.push(t),
                64 !== o && s.push(n),
                64 !== a && s.push(i),
                (t = n = i = ''),
                (r = o = a = ''),
                l < e.length;

            );
            return s;
          },
        },
      ]),
      e
    );
  })();
ExifRestore.initClass();
var contentLoaded = function (t, n) {
  function i(e) {
    if ('readystatechange' !== e.type || 'complete' === o.readyState)
      return (
        ('load' === e.type ? t : o)[s](u + e.type, i, !1),
        !r && (r = !0) ? n.call(t, e.type || e) : void 0
      );
  }
  var r = !1,
    e = !0,
    o = t.document,
    a = o.documentElement,
    l = o.addEventListener ? 'addEventListener' : 'attachEvent',
    s = o.addEventListener ? 'removeEventListener' : 'detachEvent',
    u = o.addEventListener ? '' : 'on';
  if ('complete' !== o.readyState) {
    if (o.createEventObject && a.doScroll) {
      try {
        e = !t.frameElement;
      } catch (e) {}
      e &&
        !(function t() {
          try {
            a.doScroll('left');
          } catch (e) {
            return void setTimeout(t, 50);
          }
          return i('poll');
        })();
    }
    return (
      o[l](u + 'DOMContentLoaded', i, !1),
      o[l](u + 'readystatechange', i, !1),
      t[l](u + 'load', i, !1)
    );
  }
};
function __guard__(e, t) {
  return null != e ? t(e) : void 0;
}
function __guardMethod__(e, t, n) {
  return null != e && 'function' == typeof e[t] ? n(e, t) : void 0;
}
(Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) return Dropzone.discover();
}),
  contentLoaded(window, Dropzone._autoDiscoverFunction);
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t());
})(this, function () {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = (n[o] = {exports: {}, id: o, loaded: !1});
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
    }
    var n = {};
    return (t.m = e), (t.c = n), (t.p = 'dist/'), t(0);
  })([
    function (e, t, n) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : {default: e};
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = document.all && !window.atob,
        j = {
          offset: 120,
          delay: 0,
          easing: 'ease',
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: 'DOMContentLoaded',
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1,
        },
        O = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, j)), (0, b.default)(w, j.once), w;
        },
        _ = function () {
          (w = (0, h.default)()), O();
        },
        S = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute('data-aos'),
              e.node.removeAttribute('data-aos-easing'),
              e.node.removeAttribute('data-aos-duration'),
              e.node.removeAttribute('data-aos-delay');
          });
        },
        z = function (e) {
          return (
            e === !0 ||
            ('mobile' === e && p.default.mobile()) ||
            ('phone' === e && p.default.phone()) ||
            ('tablet' === e && p.default.tablet()) ||
            ('function' == typeof e && e() === !0)
          );
        },
        A = function (e) {
          return (
            (j = i(j, e)),
            (w = (0, h.default)()),
            z(j.disable) || x
              ? S()
              : (document
                  .querySelector('body')
                  .setAttribute('data-aos-easing', j.easing),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-duration', j.duration),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-delay', j.delay),
                'DOMContentLoaded' === j.startEvent &&
                ['complete', 'interactive'].indexOf(document.readyState) > -1
                  ? O(!0)
                  : 'load' === j.startEvent
                  ? window.addEventListener(j.startEvent, function () {
                      O(!0);
                    })
                  : document.addEventListener(j.startEvent, function () {
                      O(!0);
                    }),
                window.addEventListener(
                  'resize',
                  (0, f.default)(O, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  'orientationchange',
                  (0, f.default)(O, j.debounceDelay, !0)
                ),
                window.addEventListener(
                  'scroll',
                  (0, u.default)(function () {
                    (0, b.default)(w, j.once);
                  }, j.throttleDelay)
                ),
                j.disableMutationObserver || (0, d.default)('[data-aos]', _),
                w)
          );
        };
      e.exports = {init: A, refresh: O, refreshHard: _};
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      (function (t) {
        'use strict';
        function n(e, t, n) {
          function o(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (k = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g;
          }
          function a(e) {
            var n = e - w,
              o = e - k,
              i = t - n;
            return S ? j(i, y - o) : i;
          }
          function c(e) {
            var n = e - w,
              o = e - k;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = O();
            return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? o(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(O());
          }
          function m() {
            var e = O(),
              n = c(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), o(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ('function' != typeof e) throw new TypeError(f);
          return (
            (t = u(t) || 0),
            i(n) &&
              ((_ = !!n.leading),
              (S = 'maxWait' in n),
              (y = S ? x(u(n.maxWait) || 0, t) : y),
              (z = 'trailing' in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e, t, o) {
          var r = !0,
            a = !0;
          if ('function' != typeof e) throw new TypeError(f);
          return (
            i(o) &&
              ((r = 'leading' in o ? !!o.leading : r),
              (a = 'trailing' in o ? !!o.trailing : a)),
            n(e, t, {leading: r, maxWait: t, trailing: a})
          );
        }
        function i(e) {
          var t = 'undefined' == typeof e ? 'undefined' : c(e);
          return !!e && ('object' == t || 'function' == t);
        }
        function r(e) {
          return (
            !!e && 'object' == ('undefined' == typeof e ? 'undefined' : c(e))
          );
        }
        function a(e) {
          return (
            'symbol' == ('undefined' == typeof e ? 'undefined' : c(e)) ||
            (r(e) && k.call(e) == d)
          );
        }
        function u(e) {
          if ('number' == typeof e) return e;
          if (a(e)) return s;
          if (i(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = i(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(l, '');
          var n = m.test(e);
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
        }
        var c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          f = 'Expected a function',
          s = NaN,
          d = '[object Symbol]',
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            'object' == ('undefined' == typeof t ? 'undefined' : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            'object' == ('undefined' == typeof self ? 'undefined' : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function('return this')(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now();
          };
        e.exports = o;
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      (function (t) {
        'use strict';
        function n(e, t, n) {
          function i(t) {
            var n = b,
              o = v;
            return (b = v = void 0), (O = t), (g = e.apply(o, n));
          }
          function r(e) {
            return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g;
          }
          function u(e) {
            var n = e - w,
              o = e - O,
              i = t - n;
            return S ? x(i, y - o) : i;
          }
          function f(e) {
            var n = e - w,
              o = e - O;
            return void 0 === w || n >= t || n < 0 || (S && o >= y);
          }
          function s() {
            var e = j();
            return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
          }
          function d(e) {
            return (h = void 0), z && b ? i(e) : ((b = v = void 0), g);
          }
          function l() {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
          }
          function p() {
            return void 0 === h ? g : d(j());
          }
          function m() {
            var e = j(),
              n = f(e);
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w);
              if (S) return (h = setTimeout(s, t)), i(w);
            }
            return void 0 === h && (h = setTimeout(s, t)), g;
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            _ = !1,
            S = !1,
            z = !0;
          if ('function' != typeof e) throw new TypeError(c);
          return (
            (t = a(t) || 0),
            o(n) &&
              ((_ = !!n.leading),
              (S = 'maxWait' in n),
              (y = S ? k(a(n.maxWait) || 0, t) : y),
              (z = 'trailing' in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          );
        }
        function o(e) {
          var t = 'undefined' == typeof e ? 'undefined' : u(e);
          return !!e && ('object' == t || 'function' == t);
        }
        function i(e) {
          return (
            !!e && 'object' == ('undefined' == typeof e ? 'undefined' : u(e))
          );
        }
        function r(e) {
          return (
            'symbol' == ('undefined' == typeof e ? 'undefined' : u(e)) ||
            (i(e) && w.call(e) == s)
          );
        }
        function a(e) {
          if ('number' == typeof e) return e;
          if (r(e)) return f;
          if (o(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = e.replace(d, '');
          var n = p.test(e);
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
        }
        var u =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          c = 'Expected a function',
          f = NaN,
          s = '[object Symbol]',
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            'object' == ('undefined' == typeof t ? 'undefined' : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            'object' == ('undefined' == typeof self ? 'undefined' : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function('return this')(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now();
          };
        e.exports = n;
      }.call(
        t,
        (function () {
          return this;
        })()
      ));
    },
    function (e, t) {
      'use strict';
      function n(e, t) {
        var n = new r(o);
        (a = t),
          n.observe(i.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0,
          });
      }
      function o(e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              n = Array.prototype.slice.call(e.removedNodes),
              o = t.concat(n).filter(function (e) {
                return e.hasAttribute && e.hasAttribute('data-aos');
              }).length;
            o && a();
          });
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var i = window.document,
        r =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver,
        a = function () {};
      t.default = n;
    },
    function (e, t) {
      'use strict';
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || '';
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = (function () {
          function e() {
            n(this, e);
          }
          return (
            i(e, [
              {
                key: 'phone',
                value: function () {
                  var e = o();
                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                },
              },
              {
                key: 'mobile',
                value: function () {
                  var e = o();
                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                },
              },
              {
                key: 'tablet',
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
            ]),
            e
          );
        })();
      t.default = new f();
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var n = function (e, t, n) {
          var o = e.node.getAttribute('data-aos-once');
          t > e.position
            ? e.node.classList.add('aos-animate')
            : 'undefined' != typeof o &&
              ('false' === o || (!n && 'true' !== o)) &&
              e.node.classList.remove('aos-animate');
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, i + o, t);
          });
        };
      t.default = o;
    },
    function (e, t, n) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : {default: e};
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add('aos-init'),
                (e.position = (0, r.default)(e.node, t.offset));
            }),
            e
          );
        };
      t.default = a;
    },
    function (e, t, n) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : {default: e};
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute('data-aos-offset'),
              anchor: e.getAttribute('data-aos-anchor'),
              anchorPlacement: e.getAttribute('data-aos-anchor-placement'),
            };
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case 'top-bottom':
              break;
            case 'center-bottom':
              n += e.offsetHeight / 2;
              break;
            case 'bottom-bottom':
              n += e.offsetHeight;
              break;
            case 'top-center':
              n += i / 2;
              break;
            case 'bottom-center':
              n += i / 2 + e.offsetHeight;
              break;
            case 'center-center':
              n += i / 2 + e.offsetHeight / 2;
              break;
            case 'top-top':
              n += i;
              break;
            case 'bottom-top':
              n += e.offsetHeight + i;
              break;
            case 'center-top':
              n += e.offsetHeight / 2 + i;
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
        };
      t.default = a;
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent);
        return {top: n, left: t};
      };
      t.default = n;
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var n = function (e) {
        return (
          (e = e || document.querySelectorAll('[data-aos]')),
          Array.prototype.map.call(e, function (e) {
            return {node: e};
          })
        );
      };
      t.default = n;
    },
  ]);
});
