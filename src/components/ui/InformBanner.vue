<template>
  <div class="banner">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.getters['loading/message']
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 999;

  padding: 1rem;

  display: flex;
  flex-flow: column nowrap;

  background-color: var(--color-white);
  border-radius: 0.5rem;

  box-shadow: 5px 5px 10px 0 rgba(#04ab55,0.75);
}
</style>