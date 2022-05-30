import { USER_DETAILS_URL } from "@/config/config";

export default {
  setUser(contex, data) {
    contex.commit('setUser', data);
  },
  async setCid(context) {
    const headers = context.rootGetters['headers'];
    console.log(headers);
    const response = await fetch(`${USER_DETAILS_URL}/cid`, {
      headers,
    });
    if (response.status === 200) {
      const data = await response.json();
      const cid = data[0].cid;
      context.commit('setCid', cid);
    }
  }
}