<template>
  <div class="banner" :class="statusClass">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.getters['loading/message']
    },
    statusClass() {
      const code = this.$store.getters['loading/statusCode'];
      const codes = {
        102: 'processing',
        200: 'completed',
        400: 'rejected',
      };
      return codes[code];
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


  &.processing {
    box-shadow: 5px 5px 10px 0 rgba(#ffc107,0.75);
  }
  &.completed {
    box-shadow: 5px 5px 10px 0 rgba(#04ab55,0.75);
  }
  &.rejected {
    color: var(--color-lightred);
    box-shadow: 5px 5px 10px 0 rgba(#f30827,0.75);
  }
}
</style>