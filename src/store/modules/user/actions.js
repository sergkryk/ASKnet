import { USER_DETAILS_URL, CHANGE_PASS_URL } from "@/config/config";

export default {
  async setUser(contex) {
    const response = await fetch(USER_DETAILS_URL, {
      credentials: "include",
    })
    const userData = await response.json()
    contex.commit('setUser', userData)
  },
  async setCid(context) {
    const response = await fetch(`${USER_DETAILS_URL}/cid`, {
      credentials: "include",
    });
    if (response.status === 200) {
      const data = await response.json()
      const cid = data[0].cid
      context.commit('setCid', cid)
    }
  },
  async setUid(context) {
    const response = await fetch(`${USER_DETAILS_URL}/uid`, {
      credentials: "include",
    });
    if (response.status === 200) {
      const data = await response.json()
      const { uid } = data
      context.commit('setUid', uid)
    }
  },
  async setPassword(context) {
    const response = await fetch(CHANGE_PASS_URL, {
      credentials: "include",
    });
    if (response.status === 200) {
      const data = await response.json()
      const pass = data[0].password
      context.commit('setPassword', pass)
    }
  },
}