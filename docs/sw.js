var serviceWorkerOption = {"assets":["/todo-pwa/bundle.js"]};
        
        !function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/todo-pwa/",n(n.s=1)}([function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";(function(e){function n(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function t(e,t){var r,o=["[SW] "+e];t&&(o=o.concat(t)),(r=console).log.apply(r,n(o))}console.log("service worker option: ",e.serviceWorkerOption);var r=e.serviceWorkerOption.assets,o=(new Date).toISOString(),c=[].concat(n(r),["./"]).map(function(n){return new URL(n,e.location).toString()});self.addEventListener("install",function(n){t("install event"),n.waitUntil(e.caches.open(o).then(function(e){return e.addAll(c)}).then(function(){return t("cached assets: main",c)}).catch(function(e){throw console.error(e),e}))}),self.addEventListener("activate",function(n){t("activate event"),n.waitUntil(e.caches.keys().then(function(n){return Promise.all(n.map(function(n){return 0===n.indexOf(o)?null:e.caches.delete(n)}))}))}),self.addEventListener("message",function(e){t("message event")}),self.addEventListener("fetch",function(n){t("fetch event");var r=n.request;if("GET"!==r.method)return void console.log("[SW] Ignore non GET request "+r.method);var c=new URL(r.url);if(c.origin!==location.origin)return void console.log("[SW] Ignore difference origin "+c.origin);var i=e.caches.match(r).then(function(t){return t?(console.log("[SW] fetch URL "+c.href+" from cache"),t):fetch(r).then(function(n){if(!n||!n.ok)return console.log("[SW] URL ["+c.toString()+"] wrong responseNetwork: "+n.status+" "+n.type),n;console.log("[SW] URL "+c.href+" fetched");var t=n.clone();return e.caches.open(o).then(function(e){return e.put(r,t)}).then(function(){console.log("[SW] Cache asset: "+c.href)}),n}).catch(function(){return"navigate"===n.request.mode?e.caches.match("./"):null})});n.respondWith(i)})}).call(n,t(0))}]);