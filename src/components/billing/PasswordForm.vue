<template>
  <form>
    <div>
      <label for="oldValue">Старый пароль</label>
      <input type="text" id="oldValue">
    </div>
    <div>
      <label for="newValue">Новый пароль</label>
      <input type="password" id="newValue">
    </div>
    <div>
      <label for="confirmedValue">Подтверждение пароля</label>
      <input type="password" id="confirmedValue">
    </div>
</form>
</template>

<script>
export default {
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
  margin-bottom: 0.5rem;
  display: flex;
  flex-flow: column nowrap;

  &:last-child {
    margin-bottom: 0;
  }
}
input {
  padding: 1rem calc(1rem - 2px);
  min-width: 100%;
  min-height: 100%;
}
</style>
