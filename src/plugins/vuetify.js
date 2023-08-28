import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: {
          base: "#314156",
          lighten1: "#5a6778",
          darken1: "#273445",
        },
        secondary: {
          base: "#b8fc3c",
          lighten1: "#dcfe9e",
          darken1: "#5c7e1e",
        },
        aqua: {
          base: "#3FF1FF",
        },
      },
    },
  },
});
