import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Cw7U-3JkyKfTXyE1TssDjmaiDMA_mJc",
  authDomain: "portfolio-e51d6.firebaseapp.com",
  projectId: "portfolio-e51d6",
  storageBucket: "portfolio-e51d6.appspot.com",
  messagingSenderId: "509447176150",
  appId: "1:509447176150:web:2a6123fa3bd2c7b2b8ee77",
  measurementId: "G-BWR3EMTCTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

require('./assets/style/common.css');


