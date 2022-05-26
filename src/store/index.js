import { createStore } from 'vuex';
import userStore from './modules/user/index';

const store = createStore({
  modules: {
    user: userStore,
  },
  state() {
    return {
      userId: 412,
    }
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    }
  },
});

export default store;