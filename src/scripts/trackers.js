const GA_TOKEN="G-F0NV64MXSD"
const FB_TOKEN=""

window.axeptioSettings = {
  clientId: "64463c8cca5e0f7f2a0e94c7",
};

const loadPixel = ()=>{
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  fbq("init", FB_TOKEN);
  fbq("track", "PageView");
}

const loadGA=()=>{
  (function (d, s) {
    var t = d.getElementsByTagName(s)[0],
      e = d.createElement(s);
    e.async = true;
    e.src = "https://www.googletagmanager.com/gtag/js?id="+GA_TOKEN;
    t.parentNode.insertBefore(e, t);
  })(document, "script");
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_TOKEN);
}

(function (d, s) {
  var t = d.getElementsByTagName(s)[0],
    e = d.createElement(s);
  e.async = true;
  e.src = "//static.axept.io/sdk-slim.js";
  t.parentNode.insertBefore(e, t);
})(document, "script");

void 0 === window._axcb && (window._axcb = []);
window._axcb.push(function (axeptio) {
  axeptio.on("cookies:complete", function (choices) {
    if (choices.google_analytics) {
      loadGA()
    }
    if (choices.facebook_pixel) {
      loadPixel()
    }
  });
});