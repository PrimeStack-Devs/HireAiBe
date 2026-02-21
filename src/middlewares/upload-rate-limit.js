const { RateLimit } = require("koa2-ratelimit");

module.exports = () => {
  return RateLimit.middleware({
    interval: { min: 1 },
    max: 20, // 20 uploads per minute
    prefixKey: "upload",
    message: "Too many uploads, slow down.",
  });
};
