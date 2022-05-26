import { createStore } from 'vuex';
import userStore from './modules/user/index';

const store = createStore({
  modules: {
    user: userStore,
  },
  state() {
    return {
      token: null,
    }
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    }
  },
  actions: {
    setToken(context, data) {
      context.commit('setToken', data);
    }
  },
  getters: {
    token(state) {
      return state.token;
    }
  },
});

export default store;