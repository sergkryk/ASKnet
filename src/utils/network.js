import { LOGIN_URL, CHANGE_PASS_URL, USER_DETAILS_URL } from "@/config/config";

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
        "Content-Type": "application/json",
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

  static async resetUserCid() {
    const response = await fetch(`${USER_DETAILS_URL}/cid`, {
      method: 'PUT',
      credentials: "include",
    });
    if (response.status !== 200) {
      throw new Error("Не удалось сбросить мак-адрес");
    }
  }

  static async updateUserPassword(updated) {
    const response = await fetch(CHANGE_PASS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(updated),
    });
    if (response.status !== 200) {
      throw new Error("Не удалось обновить пароль.");
    }
  }
}
