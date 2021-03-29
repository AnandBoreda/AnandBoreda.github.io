const staticCacheName = "site-static";

const assets = [
  "/",
  "/bootstrap/css/bootstrap.min.css",
  "/bootstrap/js/bootstrap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
  "https://unpkg.com/aos@next/dist/aos.js",
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
  "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
  "https://unpkg.com/aos@2.3.1/dist/aos.css",
  "/css/styles.css",
  "/css/responsive.css",
  "/images/dp3.jpg",
  "/javascripts/jquery-3.5.1.min.js",
  "/javascripts/script.js",
  "/javascripts/animations.js",
  "/javascripts/app.js",
  "/images/testimonials/mr.kubebea.jpg",
  "/images/fiverr.png",
  "/images/verzeo.png",
  "/images/microsoft-certification-min.jpg",
  "/images/CNSS-certificate.jpg",
  "/images/JavaScript-certificate-min.jpg",
  "/documents/Anand%20Boreda%20Resume.pdf",
  "/videos/bkvideo1.mp4",
  "/manifest.json",
  "/sw.js",
  "/cname",
];

// install service worker
self.addEventListener("install", (evt) => {
  console.log("service worker has been installed");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching assets");
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener("activate", (evt) => {
  console.log("service worker has been installed");
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", (evt) => {
  //   console.log("fetch event", evt);
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
