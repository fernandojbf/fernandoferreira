const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
  swcMinify: true,
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
});
