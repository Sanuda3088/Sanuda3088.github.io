'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa62cba149c51923916eff46f80fe74c",
".git/config": "5534a374efce91c219a687bd4085e9f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5a618999be159237c16b966495a92b41",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4f742db1353aee2d7edfb902c65121fe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d820a81179bbc019807d9173fdfd706",
".git/logs/refs/heads/main": "6e44ed36179eb0d918e8ef553e0ea47e",
".git/logs/refs/remotes/origin/main": "ed6abd6a18304b1a425f2ede5e30ffa1",
".git/objects/01/1b98f01d2c252cb5bebc6c87bd42c677c4e86d": "92d4159052384d89a868aa0e98c61ef5",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/bcd8a1b55c6c8c5786be5a5b5e14870bbec807": "742ceb4ef062bab569819f86866c9b89",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/14/95c0ae9f79bd77c6f95a9f966b48e1f721f026": "ea4300b60cdd0a649fd9d97fe0293923",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/27/b41e4007d2f0d2788e1ed2ce3a28454ee50484": "53a4a2bc66bbfe00fcb26edfd10d9323",
".git/objects/29/897037e89cb3c8ec880ff608d9426bf0477fef": "6b113e55f97f7729f15808e53cb8e0a2",
".git/objects/2e/ab0efa930f4cf83a57256d59b2526d5106adf5": "43c5c7ac45dc45d3414f9ae49026bc5f",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/31/339456772afd1f37bacbd2c75864b31fcaae18": "32383c1c75e1f8a02fd1942081dc5721",
".git/objects/33/a6623c1a9660ba4e9a96c157d0683847eaa4e3": "85712834863fba8d13a6a1aab150de3d",
".git/objects/34/de14be2f52c42b7afbf2f82b3822a3249c67cd": "c5322ba8113a02b60b14ccb27455847f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/9272efde540b5efd85a310bca76a1711a2a888": "5e1bd730d480b43be61ccbc5c8cc9c00",
".git/objects/3e/fc2455d851bd919935477ec2e008b34871c61f": "5253d61c65d37d6d1146e71b64afd681",
".git/objects/43/0dcaacd7c0d157ad737696a6ed906540e901c7": "f9b683df686cfb34a2a24f25e33a6db2",
".git/objects/45/176bd058f92c6cbb34ebd62161ac3323591fa5": "55d6718080ce194d5c6e205c5ecf5672",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/6f814f72a079ee1ece3192c36d175ccf87de26": "eda90a2d85c9ebb98ba269ebc6debc2e",
".git/objects/4c/c6c98ad430e3d8979edfbee3b1a2010aa1346b": "36ebf402fff0f4f31a60eb1b77f9f7f3",
".git/objects/4d/e8ddabe85eaabe42d1a1afe84e40f49285ac1b": "acf12fd964aaed714e3a8a6c25111730",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/2ccfe5a8416917a661cba6baf8747ee0eaf35c": "af5332b9f1b52f30b47f8a6d64a9e98f",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/24e2367f7fa2696e0b9339b600ed22ce676a17": "ec2d0bae5f0b4b122af25972e477daf8",
".git/objects/74/2620a02cbfcd58b554468f4a842f6ece03adfc": "7e8d6be9f7f7fab6f72fc091131d4328",
".git/objects/79/dcb3f6b7e0849b84959dc16188d06b137fd16a": "d4dd467859fc5468a1ca54d521a9f784",
".git/objects/7a/048ddde8ee36d6e810d1ac259fb9a3c7cd5120": "f341f674cb48fac8da830aa5107e9349",
".git/objects/7d/a2f438977d53214573530057f35f453e4c5f0a": "be29ce84cc64f02cb79f9e330b7dea1a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cdf967c8c2fc2444665c20535db39afca97e21": "805d506c520499bdd3c28ebd3f505b9a",
".git/objects/8d/6c31161daba8935a4db7a4273b70111f6fdfc1": "3cd51413fb39c773ecedc82771631a5a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/78ddf712b3e8feb5ad089a6460ea12c127d694": "f006fc22afd81cb05aca10b950c27253",
".git/objects/90/c1c098e8872ca33a09ce1f834b9d8f7be63fea": "4907b86872c27a6d93782bcc65106b8f",
".git/objects/92/5a093ef00dc8e7d34a70b154c1e54941179574": "a83ae474f36b75f6163c0e855f9d6bc4",
".git/objects/92/ebb8b67cd24cc813c887bfd74befafa121c8fa": "b12f3076e62ab614896cd01be0ed3339",
".git/objects/93/6929328b7ebfab02d833fd409579c00979342e": "2bcd405bbc2b2b7b5dfc6267e313d7b3",
".git/objects/93/8138dac3c116c91f08b1eae6e97a0ec14fe88a": "5fef04596660bfe7b627cfff9ca49970",
".git/objects/99/56830b50941ddde4aa78a151f090c2223bce0a": "96b56a411ff243a5962f704da4acbd79",
".git/objects/9c/ea3c8bd4e6c7718ff16c3992bcaaf8af7d96cc": "e40623ed4b242740c4f6dbf4012589bb",
".git/objects/a2/120aa5940b7490503247a89f5e0f3f872d7600": "04aa2e89b9105a55e7d518ca3d0e7103",
".git/objects/a3/a9badf33d1f733a3379cf9cd129f38505d52dd": "836f0369d6326e2396bb74788ab5b7f4",
".git/objects/a5/210687373f040ad1ff1e56d8579a4ef2bfdc6f": "a5fa6b707a6c5e612644c6fbfbd1b13e",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c8/edae86def4dad84219eb033c42f3f10ddffa74": "4a793154a45acd512d3617c91d79ea98",
".git/objects/cb/8159a8c7449f7ceebe8d51bd5dfa4734486433": "a3b0fbdf0febed3e0ab7ae09ee568a9e",
".git/objects/cd/e384cfc32481544efa94ad51f9fddc6d04a586": "4c0173dcf2115897cca4fa3aec7e1489",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/67343a6c16fd0b829bcb7c138166113bc5f88d": "ecf1f67ef164c5d5732debe3891803de",
".git/objects/d5/69426b4cebc2d1eb08a394207d0bbc0d162918": "280902cd5cccc3c413e36a3dabdacd49",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b004d74aa88d22354cec82092f50cc943a192b": "1a46796242fcc0e637c3bc0e6c698e14",
".git/objects/d7/7ae6ab8da2eccf81829609841e65ca0860102e": "cb24d246f1ca6ad6219f71020996a7e2",
".git/objects/da/514e14d5c3bdb58877d659b1de33a97ff4639b": "09faad0f1a1a8aad150a0860147e44a2",
".git/objects/e1/ae8bfcf1fc19c9f276dac45e70cfee44f18ab1": "fa283e0e9ee10d48e8e9ea3722d436fd",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/55ca9422e2394df2a97e1ce5d41a722da4409b": "c02e8a051e661750a6b18e2b435ed30b",
".git/objects/f2/bedc92e46789e5b894b7caccc52d76181678bf": "5116ff5e3bcfc3686cabb3ffdd5d2567",
".git/refs/heads/main": "bf160e15e1a9862f119ec03800cd49e7",
".git/refs/remotes/origin/main": "bf160e15e1a9862f119ec03800cd49e7",
"assets/AssetManifest.bin": "0a1343cf1e243388f81c6722cb10257b",
"assets/AssetManifest.json": "3fc6f3c48a5b5fac3ae3f8e0d70a2908",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4febfece94701ff144f9feb23669ecff",
"assets/lib/Assets/belowicon.png": "d7034c38d3f133f225cb9a6af9d6c4fd",
"assets/lib/Assets/DL.png": "59e495973da67871c13298e74c209caf",
"assets/lib/Assets/homepagepic.png": "445721037461f44c953492af40ad0ec2",
"assets/lib/Assets/ID.png": "66b35a251ee0ffda07d813793bf883ae",
"assets/lib/Assets/Inquiry.png": "6fa854e77862457fc81794455d728cef",
"assets/lib/Assets/lists.png": "efbb1989bdf5e86240327bec1cbdc579",
"assets/lib/Assets/Login.png": "6e07a8fb30262151de1655a775bf5982",
"assets/lib/Assets/logo.png": "10871a2b15251783606437ed634ef5d6",
"assets/lib/Assets/Passport.png": "5a1c44e8cf0238e4006a03d10faf86c8",
"assets/lib/Assets/people.png": "2efe48b199f49f0d6d2ea6fe5b59dc00",
"assets/lib/Assets/person.png": "b63b5a5ef1ec1e57b0e58b0bcfd5ad8f",
"assets/lib/Assets/RegisterPages/adminLogin.jpg": "b59695ab8880be45a9827f4e2cb6b001",
"assets/lib/Assets/RegisterPages/adminRegister.png": "6006caf7acbba305177dc75c508db7a0",
"assets/lib/Assets/RegisterPages/apple.png": "d1d8c4c61532c1a0f595661e813ae852",
"assets/lib/Assets/RegisterPages/facebook.png": "a304a3d1bb7983865263383a6611ed1f",
"assets/lib/Assets/RegisterPages/google.png": "855cffeb015e2b513cc96eda92f6c452",
"assets/lib/Assets/RegisterPages/user.png": "fe358aaa440815e407dc3213719b3f36",
"assets/lib/Assets/serve.png": "c66bceecc7fb49f1ca043bf2ae1b1a3a",
"assets/lib/Assets/signup.png": "92e2a101d80231d1e62964b0af270321",
"assets/NOTICES": "6fd829ebed2af2e9b87919e0511e1c70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0521741b2c15cf20d826e2f26fa7c02",
"/": "c0521741b2c15cf20d826e2f26fa7c02",
"main.dart.js": "7cf97a66a01156738cdfb80735fd8a88",
"manifest.json": "4ce0e7078e3d5d1fa44f2e8564079767",
"shims/file_picker.shim.dart": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "79d35fc39415b6933bc27f48a3431dbd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
