import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueLazyload  from 'vue-lazyload'
// import Vant from 'vant';一次性全部引入vantui，但是不推荐这么做，会增加包的体积，推荐按需引入
import 'vant/lib/index.css';
import  'amfe-flexible';//自动设置html根字体

Vue.config.productionTip = false;
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: '../assets/img/1.jpg',
//   loading: '../assets/img/2.jpg',
//   attempt: 1
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
