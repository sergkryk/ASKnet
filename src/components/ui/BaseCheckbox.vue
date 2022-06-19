.
<template>
  <div :class="mods">
    <input type="checkbox" :name="checkboxName" :id="checkboxId" :checked="isChecked" v-model="isChecked"/>
    <label :for="checkboxId">{{ checkboxLabel }}</label>
  </div>
</template>

<script>
export default {
  emits: ['inputEvent'],
  props: {
    checkboxId: {
      type: String,
      required: true,
    },
    checkboxName: {
      type: String,
      required: true,
    },
    checkboxLabel: {
      type: String,
      required: false,
      default: "",
    },
    checkboxState: {
      type: Boolean,
      required: false,
      default: false,
    },
    mods: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      isChecked: this.checkboxState,
    }
  },
  watch: {
    isChecked(newValue) {
      this.$emit('inputEvent', {name: this.checkboxId, isChecked: newValue});
    }
  }
};
</script>

<style lang="scss" scoped>
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  div {
    padding: 0.5rem 0;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  input[type="checkbox"] {
    --size: 1.5rem;
    --borderColor: #637281;
    --shadow: #dfe9e4;
    --fillColor: #ffffff;
    
    --checkmarkHeight: 14px;
    --checkmarkWidth: 7px;
    --checkmarkColor: #ffffff;
    --checkmarkBorderWidth: 3px;

    -webkit-appearance: none;
    -moz-appearance: none;

    position: relative;

    width: var(--size);
    height: var(--size);

    margin-right: 0.5rem;

    outline: none;
    background-color: var(--fillColor);
    border: 1px solid var(--borderColor);
    border-radius: 0.4rem;

    transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;

    &:after {
      content: "";
      position: absolute;
      top: calc(50% - var(--checkmarkHeight) / 2 - 2px);
      left: calc(50% - var(--checkmarkWidth) / 2);
      
      width: var(--checkmarkWidth);
      height: var(--checkmarkHeight);
      
      border-bottom: var(--checkmarkBorderWidth) solid var(--checkmarkColor);
      border-right: var(--checkmarkBorderWidth) solid var(--checkmarkColor);

      transform: rotate(45deg);
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;

      opacity: 0;
    }
    &:checked {
      --fillColor: #04ab55;
      --borderColor: #04ab55;

      &::after {
        opacity: 1;
      }
    }
    &:disabled {
      --fillColor: #dbe0e4;
      cursor: not-allowed;
      pointer-events: none;
    }
    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          box-shadow: 0 0 0 calc(var(--size) / 5) var(--shadow);
        }
      }
    }
    &:focus {
      border-color: #04ab55;
      outline-color: #04ab55;
    }
  }
  label {

  }
}
</style>
