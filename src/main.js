import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "normalize.css";
import store from "@/store/register";

import "./plugins/axios";
import i18n from "./i18n";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
