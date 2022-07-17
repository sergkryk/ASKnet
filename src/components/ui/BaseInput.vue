<template>
  <div :class="invalidMessage ? 'invalid' : ''">
    <input
      :type="inputType"
      :id="inputId"
      :placeholder="inputPlaceholder"
      v-model="inputValue"
      @input="inputHandler"
    />
    <label :for="inputId">{{ labelText }}</label>
    <span v-if="invalidMessage">{{ invalidMessage }}</span>
  </div>
</template>

<script>
export default {
  emits: ['user-input'],
  props: {
    inputType: {
      type: String,
      required: false,
      default: "text",
    },
    inputId: {
      type: String,
      required: true,
    },
    inputPlaceholder: {
      type: String,
      required: false,
      default: "",
    },
    labelText: {
      type: String,
      required: false,
      default: "",
    },
    invalidMessage: {
      type: String,
      required: false,
      default: '',
    }
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    inputHandler() {
      this.$emit("user-input", this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  --inputPadding: 1rem;
  --fsize: 1rem;
  --lheight: 1.4rem;
  --border: 1px;

  position: relative;
  display: flex;
  flex-flow: column nowrap;

  font-size: var(--fsize);
  line-height: var(--lheight);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  & .valid {
    --border-color: var(--color-green);
    color: var(--color-green);
  }
  & .invalid {
    --border-color: var(--color-lightred);
    color: var(--color-red);
  }
}
label {
  --labelPadding: 3px;

  padding: 0 var(--labelPadding);
  position: absolute;
  top: calc(
    ((var(--inputPadding) * 2 + var(--border) * 2 + var(--lheight)) / 2) -
      var(--lheight) / 2
  );
  left: calc(var(--inputPadding) - var(--labelPadding));

  font-size: inherit;
  line-height: inherit;
  color: var(--font-color-light);

  transition: top 0.3s ease-in-out, left 0.3s ease-in-out,
    font-size 0.3s ease-in-out;
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
input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  font-size: 0.8rem;
  line-height: 1.2rem;
  top: calc(1.2rem / 2) * -1;
  background-color: var(--color-white);
  color: currentColor;
}
span {
  font-size: 0.75rem;
  position: absolute;
  left: 0;
  color: inherit;
  bottom: calc(var(--inputPadding) * -1.3);
}
</style>
