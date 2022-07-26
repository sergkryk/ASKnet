import { LOGIN_URL } from "@/config/config";

export default class {
  static async post(url, body) {
    const response = await fetch(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  }

  static async authorize(credentials) {
    const { login, password } = credentials;

    const response = await fetch(LOGIN_URL, {
      credentials: "include",
      headers: { 
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    });
    if (response.status !== 200) {
      throw new Error(
        "Не могу войти на сервер статистики! Проверьте правильность вводимых данных"
      );
    }
  }
}
