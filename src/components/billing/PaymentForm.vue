<template>
  <form @submit.prevent="formSubmitHandler">
    <base-input
      inputType="text"
      inputId="serial"
      inputPlaceholder="Серийный номер"
      labelText="Введите серийный номер вашей карты"
      :invalidMessage="serial.error"
      @user-input="handleSerialInput"
    ></base-input>
    <base-input
      inputType="number"
      inputId="pin"
      inputPlaceholder="Пин-код карты оплаты"
      labelText="Введите пин-код вашей карты оплаты"
      :invalidMessage="pin.error"
      @user-input="handlePinInput"
    ></base-input>
    <button type="submit" class="site-button site-button--green" :disabled="!formIsValid">
      Отправить
    </button>
  </form>
</template>

<script>
import Validator from '@/utils/validations.js'
// import Req from '@/utils/network.js';

export default {
  data() {
    return {
      serial: {
        value: '',
        isValid: false,
        error: '',
      },
      pin: {
        value: '',
        isValid: false,
        error: '',
      },
    };
  },
  methods: {
    formSubmitHandler() {
      // console.log({serial: this.serial, pin: this.pin});
    },
    handleSerialInput(data) {
      try {
        Validator.isPayCardSerialValid(data)
        this.serial.error = '';
        this.serial.isValid = true,
        this.serial.value = data;
      } catch (error) {
        this.serial.isValid = false,
        this.serial.error = error.message;
      }
    },
    handlePinInput(data) {
      try {
        Validator.isPayCardPinValid(data);
        this.pin.error = '';
        this.pin.isValid = true,
        this.pin.value = data;
      } catch (error) {
        this.pin.isValid = false,
        this.pin.error = error.message;
      }
    },
  },
  computed: {
      formIsValid() {
        return this.serial.isValid && this.pin.isValid;
      }
    }
}
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
