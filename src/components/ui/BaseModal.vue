<template>
  <div class="modal" v-if="visible">
    <div class="modal__overlay" @click="close"></div>
    <div class="modal__content" :class="modsClassNames">
      <button-close @click="close"></button-close>
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
    },
    mods: {
      type: Array,
      required: false,
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
  computed: {
    modsClassNames() {
      if (this.mods && this.mods.length > 0) {
        return this.mods.map(el => `modal__content--${el}`)
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  --padding: clamp(1.25rem, 5vw, 2.5rem);
  position: fixed;
  z-index: 100;

  padding: var(--padding);

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
}
.modal__overlay {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(black, 0.4);
}
.modal__content {
  position: relative;

  width: 100%;
  max-width: 1024px;

  padding: var(--padding);

  background-color: var(--color-white);
  border-radius: 1rem;

  &--compact {
    width: auto;
  }

  &--password {
    max-width: 550px;
  }
}
button {
  position: absolute;
  top: calc(var(--padding) * 0.7);
  right: calc(var(--padding) * 0.7);
}
</style>>