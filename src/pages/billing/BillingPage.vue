<template>
  <login-form v-if="!authHeader"></login-form>
  <user-details v-if="authHeader"></user-details>
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
    authHeader() {
      return this.$store.getters.authHeader;
    }
  }
};
</script>

<style lang="scss">
</style>
