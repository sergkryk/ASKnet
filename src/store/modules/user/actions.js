import { API_URL } from "@/config/config";

export default {
  async setUser(contex) {
    const response = await fetch(`${API_URL}/user`, {
      credentials: "include",
    })
    const userData = await response.json()
    contex.commit('setUser', userData)
  },
  async setCid(context) {
    const response = await fetch(`${API_URL}/user/cid`, {
      credentials: "include",
    });
    if (response.status === 200) {
      const data = await response.json()
      const cid = data[0].cid
      context.commit('setCid', cid)
    }
  },
  async setUid(context) {
    const response = await fetch(`${API_URL}/user/uid`, {
      credentials: "include",
    });
    if (response.status === 200) {
      const data = await response.json()
      const { uid } = data
      context.commit('setUid', uid)
    }
  },
  async setPassword(context) {
    const response = await fetch(`${API_URL}/user/password`, {
      credentials: "include",
    });
    if (response.status === 200) {
      const data = await response.json()
      const pass = data[0].password
      context.commit('setPassword', pass)
    }
  },
}