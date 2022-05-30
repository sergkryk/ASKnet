export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setCid(state, payload) {
    state.user.cid = payload;
  }
}
