import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "./locales/en.js";
import esLocale from "./locales/es.js";
import ptLocale from "./locales/pt.js";

Vue.use(VueI18n);

const messages = {
  en: enLocale,
  es: esLocale,
  pt: ptLocale,
};

const i18n = new VueI18n({
  locale: "pt", // idioma padrão
  fallbackLocale: "pt", // idioma de fallback
  messages,
});

export default i18n;
