// import { createStore } from "vuex";
import { defineStore, createPinia } from 'pinia';

// vuex 和 pinia 二选一  强烈推荐pinia 语法十分简单

export const piniaStore = defineStore('user', {
  state: () => {
    return {
      name: '张三',
    };
  },
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});

const pinia = createPinia();
export default pinia;




// vuex 版本
// export const vuexStore = createStore({
//   state: {
//     isLoading: false,
//     userName: ""
//   },
//   getters: {

//   },
//   mutations: {
//     changeIsLoading(state, val) {
//       state.isLoading = val;
//     },

//     getUserNmae(state, data) {
//       state.userName = data
//     }

//   },
//   actions: {

//   },
//   modules: {},
// });
// export default vuexStore;