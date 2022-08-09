export default {
  user(state) {
    return state.user;
  },
  cid(state) {
    return state.user?.cid;
  },
  uid(state) {
    return state.user?.uid;
  },
  password(state) {
    return state.user?.password;
  }
}