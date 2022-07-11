<template>
  <form @submit.prevent="formSubmitHandler">
    <base-input
      inputId="currentPassword"
      inputPlaceholder="Текущий пароль"
      labelText="Введите ваш текущий пароль"
      :validations="validations"
      @user-input="setCurrent"
    ></base-input>
    <base-input
      inputType="password"
      inputId="newPassword"
      inputPlaceholder="Новый пароль"
      labelText="Введите новый пароль"
      :validations="validations"
      @user-input="setNew"
    ></base-input>
    <base-input
      inputType="password"
      inputId="confirmedPassword"
      inputPlaceholder="Подтверждение пароля"
      labelText="Введите подтверждение пароля"
      :validations="validations"
      @user-input="setConfirmed"
    ></base-input>
    <button type="submit" class="site-button site-button--green" :disabled="!formIsValid">
      Сохранить
    </button>
  </form>
</template>

<script>
import { CHANGE_PASS_URL } from '@/config/config.js'
import passwordValidations from "@/utils/passwordValidations";

export default {
  emits: ['close'],
  data() {
    return {
      status: 'ready',
      currentPassword: "",
      newPassword: "",
      confirmedPassword: "",
    };
  },
  methods: {
    async formSubmitHandler() {
      if (this.formIsValid && this.status === 'ready') {
        this.status = 'pending';
        this.$store.dispatch('loading/setStatusCode', '102');
        this.$store.dispatch('loading/setMessage', 'Ожидаю ответ от сервера');
        this.$store.dispatch('loading/setStatus', true);
        
        const authHeader = this.$store.getters["authHeader"];
        const response = await fetch(CHANGE_PASS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authHeader.Authorization,
          },
          body: JSON.stringify({
            previous: this.currentPassword,
            candidate: this.newPassword,
            confirmed: this.confirmedPassword,
          }),
        });
        const data = await response.json();
        if (response.status === 200) {
          this.$store.dispatch('user/setPassword');
          this.$emit('close');
        }
        this.$store.dispatch('loading/setStatusCode', response.status);
        this.$store.dispatch('loading/setMessage', data.message);
        setTimeout(() => {
          this.$store.dispatch('loading/setStatus', false);
          this.status = 'ready';
        }, 2000)
      }
    },
    setCurrent(value) {
      this.currentPassword = value;
    },
    setNew(value) {
      this.newPassword = value;
    },
    setConfirmed(value) {
      this.confirmedPassword = value;
    },
  },
  computed: {
    formIsValid() {
      if (this.currentPassword && this.newPassword && this.confirmedPassword && this.status === 'ready') {
        return true;
      }
      return false;
    },
    validations() {
      return passwordValidations;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  padding: 1rem;

  display: flex;
  flex-flow: column nowrap;
}
button:disabled {
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.5;
}
</style>
