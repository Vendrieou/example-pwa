const staticCacheName = 'site-static'
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
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

// fetch event
self.addEventListener('fetch', e => {
    // console.log('fetch event', e)
});

