export default {
  user(state) {
    return state.user;
  },
  cid(state) {
    return state.user.cid;
  },
  password(state) {
    return state.user.password;
  }
}