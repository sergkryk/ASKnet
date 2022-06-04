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
      isLoading: false,
    }
  },
  mutations: {
    setAuthHeader(state, payload) {
      state.authHeader = payload;
    },
    setIsModal(state, payload) {
      state.isModal = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    setAuthHeader(context, data) {
      const authHeader = { Authorization: `Bearer ${data}` };
      context.commit('setAuthHeader', authHeader);
    },
    setIsModal(context, data) {
      context.commit('setIsModal', data);
    },
    setIsLoading(context, data) {
      context.commit('setIsLoading', data);
    }
  },
  getters: {
    authHeader(state) {
      return state.authHeader;
    },
    isModal(state) {
      return state.isModal;
    },
    isLoading(state) {
      return state.isLoading;
    }
  },
});

export default store;