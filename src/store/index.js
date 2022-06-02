import { createStore } from 'vuex';
import userStore from './modules/user/index';

const store = createStore({
  modules: {
    user: userStore,
  },
  state() {
    return {
      authHeader: null,
      isModal: false,
    }
  },
  mutations: {
    setAuthHeader(state, payload) {
      state.authHeader = payload;
    },
    setIsModal(state, payload) {
      state.isModal = payload;
    }
  },
  actions: {
    setAuthHeader(context, data) {
      const authHeader = { Authorization: `Bearer ${data}` };
      context.commit('setAuthHeader', authHeader);
    },
    setIsModal(context, data) {
      context.commit('setIsModal', data);
    }
  },
  getters: {
    authHeader(state) {
      return state.authHeader;
    },
    isModal(state) {
      return state.isModal;
    }
  },
});

export default store;