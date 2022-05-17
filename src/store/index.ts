import { createStore } from "vuex";

const vuexStore = createStore({
  state: {
    isLoading: false,
    userName: ""
  },
  getters: {

  },
  mutations: {
    changeIsLoading(state, val) {
      state.isLoading = val;
    },

    getUserNmae(state, data) {
      state.userName = data
    }

  },
  actions: {

  },
  modules: {},
});

export default vuexStore