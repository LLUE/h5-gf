import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageStack: [],
    uid: 0
  },
  mutations: {
    ["push"](state, data) {
      state.pageStack.push(data);
    },
    ["pop"](state) {
      state.pageStack.pop();
    },
    ["replace"](state, data) {
      state.pageStack.pop();
      state.pageStack.push(data);
    }
  },
  actions: {}
});
