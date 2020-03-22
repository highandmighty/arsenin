"use strict";var precacheConfig=[["/arsenin/404.html","6d794bc5c89cb662789889a0b888f427"],["/arsenin/about/index.html","5d6405b1a0549c46efcd4989fa0c94e4"],["/arsenin/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/arsenin/articles/index.html","0324a25202e806defab3d7e9ac149f2e"],["/arsenin/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/arsenin/configuration.html","a9408ba313aafb3dbca5ef534bbbb58e"],["/arsenin/creating-themes.html","4550147d5290b9bd9d5c75705d81ecb4"],["/arsenin/custom-color-scheme.html","c84f180a7e72cea96e11670816ead3b1"],["/arsenin/custom-css.html","9c7d18a494e2b0512e8d995348ccaece"],["/arsenin/custom-heading-background.html","8bf5c37e992bc46cead019feec9c85fe"],["/arsenin/custom-heading-image.html","ef53c031af6a9c251b0ed778e9f5e450"],["/arsenin/custom-html-markups.html","21c391f7409d80f9afb5c44743e359fd"],["/arsenin/customizing-styles.html","f75a954ca054df6b4386aeed5a6fd64e"],["/arsenin/deployment-methods.html","36870f26227296aa25e474bdb9ec78f1"],["/arsenin/external-link-post.html","21a6e796ce109ada4c26e4aee6b9f390"],["/arsenin/favicon.png","3d05f8132d73390b349cae0ce8c016d2"],["/arsenin/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/arsenin/first.html","e41bd69b3a871d3d45c336da67859df4"],["/arsenin/getting-started.html","4500df1df9d9f64d0010749472ee312a"],["/arsenin/github-pages-setup.html","32905651b2dfc4e1767f2fa5e6a41c30"],["/arsenin/index.html","017fa5bde006cd61f161ca4e95856c2d"],["/arsenin/jekyll-theme-compatibility.html","dbb9946efede94e28fca4c75e4900b69"],["/arsenin/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/arsenin/markdown-features-test.html","6ccccc0288e5e945b487cb845592312c"],["/arsenin/markup-example.html","a90905fb95c1ae07fc152710936ce3dc"],["/arsenin/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/arsenin/multiple-themes-support.html","977de6fb43c50f18749de199f8f4e265"],["/arsenin/news/index.html","d71f466fb893b16e62750196ac7594a4"],["/arsenin/open-graph.html","41c30efd17cfb8ad67ba9388879b63bf"],["/arsenin/second.html","a2901e096a380fc015ca05ed864bd349"],["/arsenin/svg-post-title.html","dfd145f9bbbc9e18ce481542b3aa2bd9"],["/arsenin/syntax-highlighting.html","8e69f60a07ffab9b995720324eec9687"],["/arsenin/theme-curtana.html","5b985b89731e1152451feb73f3f2b80f"],["/arsenin/themes.html","f791dfa90cf1db471c6ce443f6efe0f5"],["/arsenin/upgrading-from-v1-to-v2.html","d67abb27909de5d143166d05644c6b52"],["/arsenin/upgrading-guide-v1.1.0.html","184d87d315d6655d5f4ae9f0d4fdcb03"],["/arsenin/welcome.html","a12c05e470833a344d4f436e02a29488"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some((function(e){return t.match(e)}))},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return n.every((function(n){return!n.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then((function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then((function(n){return e.put(t,n)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(t){return Promise.all(t.map((function(t){if(!n.has(t.url))return e.delete(t)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));0,n&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(t)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(n){return fetch(e.request)})))}}));