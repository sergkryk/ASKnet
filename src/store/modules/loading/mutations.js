export default {
  setStatus(state, payload) {
    state.status = payload;
  },
  setMessage(state, payload) {
    state.message = payload;
  },
  setStatusCode(state, payload) {
    state.statusCode = payload;
  }
}