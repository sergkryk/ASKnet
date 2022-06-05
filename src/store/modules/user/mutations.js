export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setCid(state, payload) {
    state.user.cid = payload;
  },
  setPassword(state, payload) {
    state.user.password = payload;
  }
}
