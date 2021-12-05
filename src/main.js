import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import firebase from 'firebase'
// const config = {
//   apiKey: "AIzaSyA1Cw7U-3JkyKfTXyE1TssDjmaiDMA_mJc",
//   authDomain: "portfolio-e51d6.firebaseapp.com",
//   projectId: "portfolio-e51d6",
//   storageBucket: "portfolio-e51d6.appspot.com",
//   messagingSenderId: "509447176150",
//   appId: "1:509447176150:web:1b89e7da62beb0dbb8ee77",
//   measurementId: "G-FFM8LPYZEX"
// };
// firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

require('./assets/style/common.css');

