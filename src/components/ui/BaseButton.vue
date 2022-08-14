<template>
  <button :type="buttonType" :class="buttonMods ? buttonMods : ''" :disabled="buttonIsDisabled">
    {{ buttonLabel }}
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: false,
      default: "button",
    },
    buttonLabel: {
      type: String,
      required: false,
    },
    buttonMods: {
      type: Array,
      required: false,
    },
    buttonIsDisabled: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 8px 22px;
  width: 100%;
  min-width: 64px;
  min-height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  appearance: none;
  text-decoration: none;

  font-size: 1rem;
  line-height: 1.7rem;
  font-weight: 700;
  text-transform: capitalize;
  
  border-radius: 8px;
  color: var(--color-white);
  background-color: rgb(0, 171, 85);
  box-shadow: rgb(0 171 85 / 24%) 0px 8px 16px 0px;
  
  transition: 
    background-color var(--default-transition),
    box-shadow var(--default-transition),
    border-color var(--default-transition);

  &:hover {
    background-color: rgb(0, 123, 85);
    box-shadow: rgb(145 158 171 / 20%) 0px 2px 4px -1px, rgb(145 158 171 / 14%) 0px 4px 5px 0px, rgb(145 158 171 / 12%) 0px 1px 10px 0px;
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
    box-shadow: initial;
  }
}
</style>
