// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localePath: path.resolve("./public/locales"),
  },
  serverLanguageDetection: true,
};
