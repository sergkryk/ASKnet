import { createStore } from 'vuex';
import userStore from './modules/user/index';

const store = createStore({
  modules: {
    user: userStore,
  },
  state() {
    return {
      authHeader: null,
    }
  },
  mutations: {
    setAuthHeader(state, payload) {
      state.authHeader = payload;
    }
  },
  actions: {
    setAuthHeader(context, data) {
      const authHeader = { Authorization: `Bearer ${data}` };
      context.commit('setAuthHeader', authHeader);
    }
  },
  getters: {
    authHeader(state) {
      return state.authHeader;
    }
  },
});

export default store;