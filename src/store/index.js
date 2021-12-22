import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{},
    isSignIn: false,
  },
  mutations: {
    onAuthStateChanged(state, user){
      state.user = user;
    },
    onUserStatusChanged(state, isSignIn){
      state.isSignIn = isSignIn;
    }
  },
  getters: {
    user(state){
      return state.user;
    },
    isSignIn(state){
      return state.isSignIn;
    }
  },
  actions: {},
  modules: {},
});
