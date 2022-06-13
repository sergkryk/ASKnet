.<template>
  <div>
    <input type="radio" :name="radioName" :id="radioId">
    <label :for="radioId">{{ radioLabel }}</label>
  </div>
</template>

<script>
export default {
  props: {
    radioId: {
      type: String,
      required: true,
    },
    radioName: {
      type: String,
      required: true,
    },
    radioLabel: {
      type: String,
      required: false,
      default: '',
    },
  }
}
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
  input[type="radio"] {
    --size: 1.5rem;
    --borderColor: #637281;
    --shadow: #dfe9e4;
    --fillColor: #ffffff;
    
    --radioSize: calc(var(--size) / 2.5);
    --radioColor: #ffffff;

    -webkit-appearance: none;
    -moz-appearance: none;

    position: relative;

    width: var(--size);
    height: var(--size);

    margin-right: 0.5rem;

    outline: none;
    background-color: var(--fillColor);
    border: 1px solid var(--borderColor);
    border-radius: 50%;

    transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;

    &:after {
      content: "";
      
      position: absolute;
      top: calc(50% - var(--radioSize) / 2);
      left: calc(50% - var(--radioSize) / 2);
      
      height: var(--radioSize);
      width: var(--radioSize);
      
      opacity: 0;
      border-radius: 50%;
      background-color: var(--radioColor);

      transform: scale(0);
      transform-origin: center;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

    }
    &:checked {
      --fillColor: #04ab55;
      --borderColor: #04ab55;

      &::after {
        transform: scale(1);
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