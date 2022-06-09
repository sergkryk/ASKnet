<template>
  <div>
    <input
      type="date"
      :id="inputId"
      :class="mods"
      v-model="inputValue"
    />
    <label :for="inputId">{{ labelText }}</label>
  </div>
</template>

<script>
export default {
  props: {
    inputId: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: false,
      default: "",
    },
    mods: {
      type: Array,
      required: false,
    }
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  --inputPadding: 0.6rem;
  --fsize: 1rem;
  --lheight: 1.4rem;
  --border: 1px;

  position: relative;
  display: flex;
  flex-flow: column nowrap;

  font-size: var(--fsize);
  line-height: var(--lheight);

  & .valid {
    --border-color: var(--color-green);
    color: var(--color-green);
  }
  & .invalid {
    --border-color: var(--color-lightred);
    color: var(--color-red);
  }
}
input {
  padding: var(--inputPadding);
  min-width: 100%;
  min-height: 100%;

  font-size: inherit;
  line-height: inherit;
  color: var(--font-color);

  border: var(--border) solid var(--border-color);
  border-radius: 0.5rem;

  &::placeholder {
    opacity: 0;
    font-size: 0;
  }
  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
  }
}
label {
  --labelPadding: 3px;
  --lineHeight: 1.2rem;

  padding: 0 var(--labelPadding);
  position: absolute;
  top: calc((var(--lineHeight) / 2) * -1);
  left: calc(var(--inputPadding) - var(--labelPadding));

  font-size: 0.8rem;
  line-height: var(--lineHeight);
  color: var(--font-color);

  background-color: var(--color-white);
}
</style>
