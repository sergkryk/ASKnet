<template>
  <section class="login">
    <div class="login__container container">
      <h2>Вход в личный кабинет</h2>
      <p>Введите ваши учётные данные для входа</p>
      <form @submit.prevent="requestAuthorization">
        <base-input
          inputId="userLogin"
          labelText="Лицевой счёт"
          invalidMessage=""
          inputPlaceholder="Введите лицевой счёт"
          @user-input="loginInputHandler"
        >
        </base-input>
        <base-input
          inputId="userPassword"
          labelText="Пароль"
          invalidMessage=""
          inputPlaceholder="Введите пароль"
          @user-input="passwordInputHandler"
        >
        </base-input>
        <base-button
          buttonLabel="Войти"
          buttonType="submit"
          :buttonMods="['green', 'long']"
        ></base-button>
      </form>
    </div>
  </section>
</template>

<script>
import { LOGIN_URL } from "@/config/config.js";

export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    async requestAuthorization() {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: this.login, password: this.password }),
      });
      if (response.status !== 200) {
        return;
      }
      const resData = await response.json();
      this.$store.dispatch("setAuthHeader", resData);
    },
    loginInputHandler(data) {
      this.login = data;
    },
    passwordInputHandler(data) {
      this.password = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  flex-grow: 1;

  display: grid;
  justify-content: center;
  align-items: center;
}

.login__container {
  max-width: 800px;
}

h2 {
  margin: 0 0 8px;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 700;
}

p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  color: var(--font-color-light);
}

form {
  padding: 2rem 0;
  display: flex;
  flex-flow: column nowrap;
}
</style>
