const staticCacheName = 'site-static'

const assets = [
    '/example-pwa/',
    '/example-pwa/index.html',
    '/example-pwa/index.js',
    '/example-pwa/js/materialize.min.js',
    '/example-pwa/js/materialize.js',
    '/example-pwa/js/app.js',
    '/example-pwa/js/ui.js',
    '/example-pwa/css/materialize.min.css',
    '/example-pwa/css/materialize.css',
    '/example-pwa/css/style.css',
    '/example-pwa/img/dish.ppg',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
]

self.addEventListener('install', e => {
    // console.log('service worker has been installed')
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
    
});

// activate event
self.addEventListener('activate', e => {
    // console.log('service worker has been activated')
});

// // fetch event
// self.addEventListener('fetch', e => {
//     // console.log('fetch event', e)
// });

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});


// const assets = [
//     '/',
//     '/index.html',
//     '/js/app.js',
//     '/js/ui.js',
//     '/js/materialize.min.js',
//     '/css/styles.css',
//     '/css/materialize.min.css',
//     '/img/dish.png',
//     'https://fonts.googleapis.com/icon?family=Material+Icons',
// ]