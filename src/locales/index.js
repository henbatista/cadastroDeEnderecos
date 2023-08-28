import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  pt: {
    message: {
      hello: "hello world",
    },
  },
};

export default new VueI18n({
  locate: "en",
  messages,
});
