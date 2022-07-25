import { USER_DETAILS_URL, CHANGE_PASS_URL } from "@/config/config";

export default {
  async setUser(contex) {
    const response = await fetch(USER_DETAILS_URL, {
      credentials: "include",
    });
    const userData = await response.json();
    contex.commit('setUser', userData);
    console.log(contex.getters.user);
  },
  async setCid(context) {
    const response = await fetch(`${USER_DETAILS_URL}/cid`, {
      headers: context.rootGetters.authHeader,
    });
    if (response.status === 200) {
      const data = await response.json();
      const cid = data[0].cid;
      context.commit('setCid', cid);
    }
  },
  async resetCid(context) {
    const response = await fetch(`${USER_DETAILS_URL}/cid`, {
      method: 'PUT',
      headers: context.rootGetters.authHeader,
    });
    if (response.status === 200) {
      context.dispatch('setCid');
      return;
    } else {
      throw new Error('CID cannot be reseted');
    }
  },
  async setPassword(context) {
    const response = await fetch(CHANGE_PASS_URL, {
      headers: context.rootGetters.authHeader,
    });
    if (response.status === 200) {
      const data = await response.json();
      const pass = data[0].password;
      context.commit('setPassword', pass);
    }
  },
}