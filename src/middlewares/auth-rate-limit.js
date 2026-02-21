const { RateLimit } = require("koa2-ratelimit");

module.exports = () => {
  return RateLimit.middleware({
    interval: { min: 1 },
    max: 10, // 10 login attempts per minute
    prefixKey: "auth",
    message: "Too many login attempts.",
  });
};
