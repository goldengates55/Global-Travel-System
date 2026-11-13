// Marks the page when it runs inside the native app, so buttons that need a browser can be hidden.
(function () {
  var c = window.Capacitor;
  if (c && c.isNativePlatform && c.isNativePlatform()) document.documentElement.classList.add("native");
})();
