export default {
  setUser(state, payload) {
    state.user = payload;
  },
  setUid(state, payload) {
    state.user.uid = payload;
  },
  setCid(state, payload) {
    state.user.cid = payload;
  },
  setPassword(state, payload) {
    state.user.password = payload;
  }
}
