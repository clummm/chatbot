import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// import qs from "qs";
import "./plugins/element.js";

Vue.config.productionTip = false;

// 全局引用axios
Vue.prototype.$http = axios;
// axios.defaults.baseURL = 'http://192.168.43.206:8080';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
