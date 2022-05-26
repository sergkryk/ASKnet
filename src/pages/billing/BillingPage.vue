<template>
  <section class="user">
    <login-form v-if="!token"></login-form>
    <user-details v-if="token"></user-details>
  </section>
</template>

<script>
import LoginForm from '@/components/billing/LoginForm.vue';
import UserDetails from '@/pages/billing/UserDetails.vue'

export default {
  components: {
    LoginForm,
    UserDetails,
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  }
};
</script>

<style lang="scss">
</style>
