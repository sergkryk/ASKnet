<template>
  <section class="login">
    <div class="login__container container">
      <h2>Вход в личный кабинет</h2>
      <p>Введите ваши учётные данные для входа</p>
      <form @submit.prevent="requestAuthorization">
        <base-input
          inputId="userLogin"
          labelText="Лицевой счёт"
          :invalidMessage="login.error"
          inputPlaceholder="Введите лицевой счёт"
          defaultValue="user_"
          @user-input="loginInputHandler"
        >
        </base-input>
        <base-input
          inputId="userPassword"
          labelText="Пароль"
          :invalidMessage="password.error"
          inputPlaceholder="Введите пароль"
          @user-input="passwordInputHandler"
        >
        </base-input>
        <base-button
          buttonLabel="Войти"
          buttonType="submit"
          :buttonIsDisabled="!formIsValid"
          :buttonMods="['green', 'long']"
        ></base-button>
        <span class="login__error" v-if="requestError">{{ requestError }}</span>
      </form>
    </div>
  </section>
</template>

<script>
import Validator from "@/utils/validations.js"
import Network from "@/utils/network.js"
import { checkAuthorization } from '@/utils/cookies.js'

export default {
  data() {
    return {
      login: {
        value: "",
        error: "",
        valid: false,
      },
      password: {
        value: "",
        error: "",
        valid: false,
      },
      requestError: "",
    };
  },
  methods: {
    async requestAuthorization() {
      try {
        await Network.authorize({
          login: this.login.value,
          password: this.password.value,
        });
        this.$router.push("/billing");
      } catch (error) {
        this.requestError = error.message;
      }
    },

    loginInputHandler(data) {
      this.requestError = "";
      try {
        Validator.isLoginValid(data);
        this.login.value = data;
        this.login.error = "";
        this.login.valid = true;
      } catch (error) {
        this.login.error = error.message;
        this.login.valid = false;
      }
    },

    passwordInputHandler(data) {
      this.requestError = "";
      try {
        Validator.isUserPasswordValid(data);
        this.password.value = data;
        this.password.error = "";
        this.password.valid = true;
      } catch (error) {
        this.password.error = error.message;
        this.password.valid = false;
      }
    },
  },
  computed: {
    formIsValid() {
      return this.login.valid && this.password.valid;
    },
  },
  beforeCreate() {
    if (checkAuthorization()) {
      this.$router.push('/billing')
    }
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

.login__error {
  --line-height: 1.25rem;
  position: absolute;
  left: 0;
  bottom: calc(var(--line-height) * -1.8);

  color: var(--color-red);
  font-size: 1rem;
  line-height: var(--line-height);

  text-transform: lowercase;
  text-align: center;
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
  position: relative;
  padding: 2rem 0;
  display: flex;
  flex-flow: column nowrap;
}
</style>
