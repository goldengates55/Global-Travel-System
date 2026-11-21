/* Global Visa service worker: keeps the app working offline. Change VERSION on every update. */
var VERSION = "visaguide-56";
var FILES = ["./", "./index.html", "./intake.html", "./status.html", "./practice.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./training-en.pdf", "./training-fr.pdf"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return Promise.all(FILES.map(function (f) { return c.add(f).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});
var FONTS = "vg-fonts";
function isFont(u) { return /^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(u); }
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION && k !== FONTS; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET") return;
  var u = r.url;
  if (isFont(u)) {
    e.respondWith(caches.open(FONTS).then(function (c) {
      return c.match(r).then(function (hit) {
        var net = fetch(r).then(function (res) { if (res && (res.ok || res.type === "opaque")) c.put(r, res.clone()); return res; }).catch(function () { return hit; });
        return hit || net;
      });
    }));
    return;
  }
  if (u.indexOf(self.location.origin) !== 0) return;
  /* same-origin: try the network first so updates arrive, fall back to the saved copy when offline */
  e.respondWith(fetch(r).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(r, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(r).then(function (hit) { return hit || (r.mode === "navigate" ? caches.match("./index.html") : undefined); });
  }));
});
