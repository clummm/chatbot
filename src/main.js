import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import rHelper from "./routeHelper";
import "./plugins/element.js";

Vue.config.productionTip = false;

// 全局引用axios
Vue.prototype.$http = axios;

// 总线
// Vue.prototype.$EventBus = new Vue();

Vue.prototype.rHelper = rHelper;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
