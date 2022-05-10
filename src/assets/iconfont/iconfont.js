!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    d =
      '<svg><symbol id="icon-jiantou-copy" viewBox="0 0 1024 1024"><path d="M671.807 927.804l-415.632-415.804 415.632-415.803 63.445 63.616-352.017 352.209 352.017 352.102z"  ></path></symbol><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M477.8 816.4l304.1-304.6-303.8-303.2c-18.5-18.5-18.5-48.5 0-67.1 18.5-18.6 48.6-18.6 67.1-0.1l337.3 336.7c18.5 18.5 18.5 48.5 0 67.1L544.9 883.4c-18.5 18.6-48.6 18.6-67.1 0.1-18.5-18.5-18.5-48.5 0-67.1z"  ></path></symbol></svg>',
    l = (l = document.getElementsByTagName('script'))[
      l.length - 1
    ].getAttribute('data-injectcss'),
    a = function (e, t) {
      t.parentNode.insertBefore(e, t);
    };
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    c || ((c = !0), o());
  }
  function r() {
    try {
      i.documentElement.doScroll('left');
    } catch (e) {
      return void setTimeout(r, 50);
    }
    s();
  }
  (t = function () {
    var e,
      t = document.createElement('div');
    (t.innerHTML = d),
      (d = null),
      (t = t.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (t = t),
        (e = document.body).firstChild ? a(t, e.firstChild) : e.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        r(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
