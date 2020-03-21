"use strict";var precacheConfig=[["/arsenin/404.html","f84eff11cbd6a8e791434a9cc5008953"],["/arsenin/about/index.html","b2e427f324e1867e2236a2e7d9622427"],["/arsenin/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/arsenin/articles/index.html","f48381855f820c42f920a28aeb54739e"],["/arsenin/configuration.html","5456b9aef5ca090bd6c23bbc15925485"],["/arsenin/creating-themes.html","6771c0e2e8adc9d59a78b90330dce027"],["/arsenin/custom-color-scheme.html","60b71b859d47b1f904be3888e890c059"],["/arsenin/custom-css.html","3b4f520b2c47bc53b484ab8e56e2bafc"],["/arsenin/custom-heading-background.html","5001a583e2e0d2ac837206e4a8baece6"],["/arsenin/custom-heading-image.html","6a8c413aa0a30d376a7bc1c95a1fc617"],["/arsenin/custom-html-markups.html","5b6c75fcf59a8c8d6ce95963c89c0c08"],["/arsenin/customizing-styles.html","d4d6658a6227a7e04776b12a9634a20a"],["/arsenin/deployment-methods.html","f389f29fe552629457d34f01e0f8c04f"],["/arsenin/external-link-post.html","b522055740632d79062a130d7bc428c7"],["/arsenin/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/arsenin/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/arsenin/getting-started.html","4a9521830290899c055e537efa6eb1ed"],["/arsenin/github-pages-setup.html","3951e100bc9574ed191750d5df82595b"],["/arsenin/index.html","fa95da6115675490f9ff55a47e7867cc"],["/arsenin/jekyll-theme-compatibility.html","d06bf5b6ea250e892ab6b55d332ad5c7"],["/arsenin/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/arsenin/markdown-features-test.html","2263dd36f39e5ce24e5f5bbeba913540"],["/arsenin/markup-example.html","93ef732e184351481a29a09694173647"],["/arsenin/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/arsenin/multiple-themes-support.html","f28a9f558e92dccf53621a999e2ddb7b"],["/arsenin/news/index.html","b1550c6983fbe9800af23d3d76d3f4ef"],["/arsenin/open-graph.html","9fb055ab004988655e7dad0be7c5cec6"],["/arsenin/svg-post-title.html","e7dea24844d5ed7b9b8dbbd419eb242a"],["/arsenin/syntax-highlighting.html","f27ee8cc3e5e80e664c11afbd5b9eb17"],["/arsenin/theme-curtana.html","d3698998169a38739e939856f56d5b94"],["/arsenin/themes.html","d43b7e49fefe432b6a7d6e218990daa3"],["/arsenin/upgrading-from-v1-to-v2.html","52f4a90c4bd7d2a3e5a7977af2f97125"],["/arsenin/upgrading-guide-v1.1.0.html","287cc98f9024227fdce07404f8681d41"],["/arsenin/welcome.html","e3bbd7a1eb0731a088e89e88180239cc"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return n.every((function(n){return!n.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then((function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then((function(n){return e.put(t,n)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!n.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));0,n&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(n){return fetch(e.request)})))}}));