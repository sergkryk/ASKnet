<template>
  <section class="login"> 
    <div class="login__container container">
      <h2>Вход в личный кабинет</h2>
      <p>Введите ваши учётные данные для входа в личный кабинет</p>
      <form @submit.prevent="requestAuthorization">
        <div class="login__input-wrapper">
          <label for="userLogin">Лицевой счёт</label>
          <input type="text" id="userLogin" v-model="login">
        </div>
        <div class="login__input-wrapper">
          <label for="userPassword">Пароль</label>
          <input type="text" id="userPassword" v-model="password">
        </div>
        <button>Войти</button>
      </form>
    </div>
  </section>
</template>

<script>
import { LOGIN_URL } from '@/config/config.js';

export default {
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    async requestAuthorization() {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({login: this.login, password: this.password}),
      })
      if (response.status !== 200) {
        return;
      }
      const resData = await response.json();
      this.$store.dispatch('setToken', resData);
    }
  }
}
</script>

<style lang="scss" scoped>

.login__container {
  max-width: 800px;
}

form {
  display: flex;
  flex-flow: column nowrap;
}

.login__input-wrapper {
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
}

label {
  min-width: 40%;
}

input {
  padding: 5px;
  min-width: 60%;
  border-radius: 5px;
}

</style>