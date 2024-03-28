// useTranslation.js
import { useTranslation } from "next-i18next";

export default function useCustomTranslation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (locale) => {
    if (i18n && i18n.changeLanguage) {
      i18n.changeLanguage(locale);
    }
  };

  return { t, changeLanguage };
}
