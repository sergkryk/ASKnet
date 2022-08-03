<template>
  <form @submit.prevent="formSubmitHandler">
    <base-input
      inputType="text"
      inputId="serial"
      inputPlaceholder="Серийный номер"
      labelText="Введите серийный номер"
      :invalidMessage="serial.error"
      @user-input="handleSerialInput"
    ></base-input>
    <base-input
      inputType="number"
      inputId="pin"
      inputPlaceholder="Пин-код карты оплаты"
      labelText="Введите пин-код"
      :invalidMessage="pin.error"
      @user-input="handlePinInput"
    ></base-input>
    <button
      type="submit"
      class="site-button site-button--green"
      :disabled="!formIsValid"
    >
      Отправить
    </button>
  </form>
</template>

<script>
import Validator from "@/utils/validations.js";
import Api from "@/utils/network.js";
import { PAY_CARD_URL } from "@/config/config.js";

export default {
  data() {
    return {
      serial: {
        value: "",
        isValid: false,
        error: "",
      },
      pin: {
        value: "",
        isValid: false,
        error: "",
      },
    };
  },
  methods: {
    async formSubmitHandler() {
      await Api.post(PAY_CARD_URL, {
        serial: this.serial.value,
        pin: this.pin.value,
      });
    },
    handleSerialInput(data) {
      try {
        Validator.isPayCardSerialValid(data);
        this.serial.error = "";
        this.serial.isValid = true;
        this.serial.value = data;
      } catch (error) {
        this.serial.isValid = false;
        this.serial.error = error.message;
      }
    },
    handlePinInput(data) {
      try {
        Validator.isPayCardPinValid(data);
        this.pin.error = "";
        (this.pin.isValid = true), (this.pin.value = data);
      } catch (error) {
        (this.pin.isValid = false), (this.pin.error = error.message);
      }
    },
  },
  computed: {
    formIsValid() {
      return this.serial.isValid && this.pin.isValid;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-flow: column nowrap;
}
button {
  margin: 0 auto;
  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.5;
  }
}
</style>
