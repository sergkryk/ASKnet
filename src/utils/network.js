export default class {
  static async post(url, authHeader, body) {
    if (!authHeader) {
      return;
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  }
}