self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("hangarinsite-cache-v1").then(function (cache) {
      return cache.addAll([
        "/",
        "/static/css/styles.min.css",
        "/static/css/styles.css",
        "/static/js/app.min.js",
        "/static/js/dashboard.js",
        "/static/js/sidebarmenu.js",
        
      ]);
    })
  );
});
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
