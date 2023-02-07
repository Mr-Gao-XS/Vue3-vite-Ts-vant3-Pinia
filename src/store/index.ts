import { defineStore, createPinia } from 'pinia';

export const piniaStore = defineStore('Store', {
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




