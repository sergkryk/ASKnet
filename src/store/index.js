import { createStore } from 'vuex';
import userStore from './modules/user/index';
import loadingStore from './modules/loading/index';

const store = createStore({
  modules: {
    user: userStore,
    loading: loadingStore,
  },
  state() {
    return {
      isModal: false,
      isLoading: false,
    }
  },
  mutations: {
    setIsModal(state, payload) {
      state.isModal = payload;
    }
  },
  actions: {
    setIsModal(context, data) {
      context.commit('setIsModal', data);
    }
  },
  getters: {
    isModal(state) {
      return state.isModal;
    }
  },
});

export default store;