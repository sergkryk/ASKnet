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
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmedPassword: "",
    };
  },
  methods: {
    // async fetchPassword() {
    //   await this.$store.dispatch('user/setCid');
    // },
    // async updatePassword() {
    //    await this.$store.dispatch('user/resetCid');
    // },
    async formSubmitHandler() {
      if (this.formIsValid) {
        this.$store.dispatch('setIsLoading', true);
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
        this.$store.dispatch('setIsLoading', false);
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
        }
        return;
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
      if (this.currentPassword && this.newPassword && this.confirmedPassword) {
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
