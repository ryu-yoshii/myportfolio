import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebaseConfig from "./firebase/firebase.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(analytics)




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

require('./assets/style/common.css');




