export default {
  setStatus(contex, data) {
    contex.commit('setStatus', data);
  },
  setMessage(contex, data) {
    contex.commit('setMessage', data);
  },
  setStatusCode(contex, data) {
    contex.commit('setStatusCode', data);
  },
}