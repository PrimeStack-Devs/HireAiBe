module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "global::auth-rate-limit",
    config: {
      path: "/api/auth",
    },
  },

  {
    name: "global::upload-rate-limit",
    config: {
      path: "/api/upload",
    },
  },

  {
    name: "strapi::body",
    config: {
      formLimit: "10mb",
      jsonLimit: "10mb",
      textLimit: "10mb",
      formidable: {
        maxFileSize: 10 * 1024 * 1024,
      },
    },
  },

  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
