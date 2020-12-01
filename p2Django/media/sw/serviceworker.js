
/*
var nombreCache = 'login-v1';

self.addEventListener("install", function(event){
    console.log("Instalado");
    event.waitUntil(
        caches.open(nombreCache)
        .then(function(cacheEncontrada){
            return cacheEncontrada.addAll([
                '/inicio',
                '/media/css/materialize.css',
                '/media/css/style.css',
                '/media/css/estilo.css',
                '/media/js/api.js',
                '/media/js/init.js',
                '/media/js/js.js',                
                '/media/js/materialize.js',
                '/media/js/materialize.min.js',
                '/manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(cacheEncontrada){
            if(cacheEncontrada){
                return cacheEncontrada;
            }
            return fetch(event.request)
            .then(function(peticion){
                return peticion;
            })
        })
    )
})*/



var CACHE_STATIC_NAME = 'my_site_cache';

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
            '/inicio',
            '/media/css/materialize.css',
            '/media/css/style.css',
            '/media/css/estilo.css',
            '/media/js/api.js',
            '/media/js/init.js',
            '/media/js/js.js',                
            '/media/js/materialize.js',
            '/media/js/materialize.min.js',
            '/manifest.json'
        ]);
      })
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
   event.waitUntil(
      caches.keys()
         .then(function (keyList){
            return Promise.all(keyList.map(function (key){
               if(key!==CACHE_STATIC_NAME){
                  return caches.delete(key);
               }
            }));
         })
   );
  return self.clients.claim();
});



self.addEventListener('fetch', function(event) {
   console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(

      fetch(event.request)
      .then((result)=>{
        return caches.open(CACHE_STATIC_NAME)
        .then(function(c) {
          c.put(event.request.url, result.clone())
          return result;
        })

      })
      .catch(function(e){
          return caches.match(event.request)
      })



    );
});
