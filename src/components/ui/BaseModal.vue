<template>
  <div class="modal" v-if="visible">
    <div class="modal__content">
      <button @click="close">Close Modal</button>
      <slot></slot>
    </div>  
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 100;

  padding: 5rem;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
}
.modal__content {
  padding: 2rem;

  background-color: white;
}
</style>>