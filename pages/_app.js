// import "../styles/tailwind.css";
// import "../styles/slick.css";
// import { appWithTranslation } from "next-i18next";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default appWithTranslation(MyApp);

// _app.js
import "../styles/tailwind.css";
import "../styles/slick.css";
import { appWithTranslation } from "next-i18next";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  // Initial configuration options here
  // For example:
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: require("../public/locales/en.json"),
    },
    es: {
      translation: require("../public/locales/es.json"),
    },
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
