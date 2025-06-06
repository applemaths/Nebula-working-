(() => {
  "use strict";
  self.__osana$config = {
    prefix: "/service/~osana/",
    bare: "http://localhost:3000/bare/", // or your hosted backend
    codec: self.__osana$bundle.codecs.base64, // FIXED 👇
    files: {
      config: "/osana/osana.config.js",
      client: "/osana/osana.client.js",
      bundle: "/osana/osana.bundle.js",
      worker: "/osana/osana.worker.js"
    },
    blacklist: [
      /^accounts\.google\.com$/,
      /^www\.netflix\.com$/
    ]
  };
})();
