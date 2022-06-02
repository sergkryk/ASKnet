<template>
  <form>
    <div class="valid">
      <input type="text" id="oldValue" @focus="setClass" placeholder="Old">
      <label for="oldValue">Старый пароль</label>
    </div>
    <div class="invalid">
      <input type="password" id="newValue" placeholder="New">
      <label for="newValue">Новый пароль</label>
    </div>
    <div>
      <input type="password" id="confirmedValue" placeholder="Confirmed">
      <label for="confirmedValue">Подтверждение пароля</label>
    </div>
      <button type="button" class="site-button site-button--green">
        Сохранить
      </button>
</form>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    async fetchPassword() {
      // await this.$store.dispatch('user/setCid');
    },
    async updatePassword() {
      //  await this.$store.dispatch('user/resetCid');
    },
  }
}
</script>
<style lang="scss" scoped>
form {
  padding: 1rem;

  display: flex;
  flex-flow: column nowrap;
}
div {
  --inputPadding: 1rem;
  --fsize: 1rem;
  --lheight: 1.4rem;
  --border: 1px;

  position: relative;
  display: flex;

  font-size: var(--fsize);
  line-height: var(--lheight);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  & .valid {
    --border-color: var(--color-green);
    color: var(--color-green);
  }
  & .invalid {
    --border-color: var(--color-lightred);
    color: var(--color-red);
  }
}
label {
  --labelPadding: 3px;

  padding: 0 var(--labelPadding);
  position: absolute;
  top: calc(((var(--inputPadding) * 2 + var(--border) * 2 + var(--lheight)) / 2) - var(--lheight) / 2);
  left: calc(var(--inputPadding) - var(--labelPadding));

  font-size: inherit;
  line-height: inherit;
  color: currentColor;

  transition: top 0.3s ease-in-out, left  0.3s ease-in-out, font-size 0.3s ease-in-out;
}
input {
  padding: var(--inputPadding);
  min-width: 100%;
  min-height: 100%;

  font-size: inherit;
  line-height: inherit;
  color: var(--font-color);

  border: var(--border) solid var(--border-color);
  border-radius: 0.5rem;

  &::placeholder {
    opacity: 0;
    font-size: 0;
  }
  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
  }
}
input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  font-size: 0.8rem;
  line-height: 1.2rem;
  top: calc(1.2rem / 2) * -1;
  background-color: var(--color-white);
}
</style>
