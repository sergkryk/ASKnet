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
