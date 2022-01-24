import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:[],
    isSignIn: false,
    posts:[],
  },
  mutations: {
    onAuthStateChanged(state, user){
      state.user = user;
      
    },
    onUserStatusChanged(state, isSignIn){
      state.isSignIn = isSignIn;
    }
    // postadd(state, )
  },
  getters: {
    user(state){
      return state.user;
    },
    isSignIn(state){
      return state.isSignIn;
    },
    text(state){
      return state.message;
    }
  },
  // actions: {
  //   user_info_add: function(context){
  //     context.commit("onAuthStateChanged")
  //   }
  // },
  modules: {},
});
