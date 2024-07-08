import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "../Locales/EN/translation.json";
import translationKy from "../Locales/KYR/translaton.json"
import translationRu from "../Locales/RUS/translation.json"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
    ky: {
      translation: translationKy,
    },
  },
  lng: "ky",
});

export default i18n;
