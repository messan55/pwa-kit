self.importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"),workbox.setConfig({debug:!1}),workbox.routing.registerRoute(/^http:\/\/localhost:3000\/__mrt/,new workbox.strategies.NetworkOnly),workbox.routing.registerRoute(/^http:\/\/localhost:3000/,new workbox.strategies.NetworkFirst),workbox.routing.registerRoute(/^https:\/\/.+\.mobify-storefront.com/,new workbox.strategies.NetworkFirst);