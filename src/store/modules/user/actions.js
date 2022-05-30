import { USER_DETAILS_URL } from "@/config/config";

export default {
  setUser(contex, data) {
    contex.commit('setUser', data);
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
  }
}