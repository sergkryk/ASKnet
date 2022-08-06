<template>
  <form @submit.prevent="formSubmitHandler">
    <base-input
      inputId="currentPassword"
      inputPlaceholder="Текущий пароль"
      labelText="Введите ваш текущий пароль"
      :invalidMessage="currentPassword.error"
      @user-input="currentPassHandler"
    ></base-input>
    <base-input
      inputType="password"
      inputId="candidatePassword"
      inputPlaceholder="Новый пароль"
      labelText="Введите новый пароль"
      :invalidMessage="candidatePassword.error"
      @user-input="candidatePassHandler"
    ></base-input>
    <base-input
      inputType="password"
      inputId="confirmedPassword"
      inputPlaceholder="Подтверждение пароля"
      labelText="Введите подтверждение пароля"
      :invalidMessage="confirmedPassword.error"
      @user-input="confirmedPassHandler"
    ></base-input>
    <button
      type="submit"
      class="site-button site-button--green"
      :disabled="!formIsValid"
    >
      Сохранить
    </button>
  </form>
</template>

<script>
import passwordValidations from "@/utils/passwordValidations"
import Api from "@/utils/network.js"
import Validator from "@/utils/validations.js"
import Banner from "@/utils/infoBanner.js"

export default {
  emits: ["close"],
  data() {
    return {
      currentPassword: {
        value: "",
        valid: false,
        error: "",
      },
      candidatePassword: {
        value: "",
        valid: false,
        error: "",
      },
      confirmedPassword: {
        value: "",
        valid: false,
        error: "",
      },
    };
  },
  methods: {
    async formSubmitHandler() {
      try {
        await Api.updateUserPassword({
          previous: this.currentPassword.value,
          candidate: this.candidatePassword.value,
          confirmed: this.confirmedPassword.value,
        });
        this.$store.dispatch("user/setPassword");
        this.$emit("close");
        Banner.show(this.$store, {message: "Пароль успешно обновлён", statusCode: "200"})
      } catch (error) {
        this.$emit("close");
        Banner.show(this.$store, {message: "Ошибка! Повторите запрос позже", statusCode: "400"})
      }
    },
    setValid(credential, data) {
      this.responseMessage = '';
      credential.value = data;
      credential.error = "";
      credential.valid = true;
    },
    setInvalid(credential, error) {
      credential.error = error.message;
      credential.valid = false;
    },
    currentPassHandler(value) {
      try {
        Validator.isUserPasswordValid(value)
        this.setValid(this.currentPassword, value)
      } catch (error) {
        this.setInvalid(this.currentPassword, error)
      }
    },
    candidatePassHandler(value) {
      try {
        Validator.isUserPasswordValid(value)
        this.setValid(this.candidatePassword, value)
      } catch (error) {
        this.setInvalid(this.candidatePassword, error)
      }
    },
    confirmedPassHandler(value) {
      try {
        Validator.isUserPasswordValid(value)
        this.setValid(this.confirmedPassword, value)
      } catch (error) {
        this.setInvalid(this.confirmedPassword, error)
      }
    },
  },
  computed: {
    formIsValid() {
      return (
        this.currentPassword.valid &&
        this.candidatePassword.valid &&
        this.confirmedPassword.valid
      );
    },
    validations() {
      return passwordValidations;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-flow: column nowrap;
}
button:disabled {
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.5;
}
</style>
