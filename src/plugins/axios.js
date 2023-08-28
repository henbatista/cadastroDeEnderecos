import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://viacep.com.br/ws";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  },
});
