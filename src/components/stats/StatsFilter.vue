<template>
  <div class="filter">
    <h3 class="filter__title">Фильтр по дате:</h3>
    <form class="filter__form">
      <base-datepicker
        class="filter__form-wrapper"
        inputId="begin"
        labelText="Начало"
        :initialValue="initialDates.begin"
        @userDateInput="handleDateInput"
      ></base-datepicker>
      <base-datepicker
        class="filter__form-wrapper"
        inputId="end"
        labelText="Конец"
        :initialValue="initialDates.end"
        @userDateInput="handleDateInput"
      ></base-datepicker>
      <span class="filter__error" v-if="error">{{ error }}</span>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['dateChange'],
  props: {
    initialDates: {
      type: Object,
      required: false,
    },
    error: {
      type: String,
      required: false,
    }
  },
  data() {
    return {

    };
  },
  methods: {
    handleDateInput(data) {
      this.$emit("dateChange", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  margin-bottom: 1rem;
}
.filter__title {
  margin: 0 0 1rem;
  font-weight: 500;
}
.filter__form {
  position: relative;

  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 1rem;

  @media(min-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-column-gap: 0.625rem;
  }
}
.filter__form-wrapper {
  min-width: 200px;
}
.filter__error {
  --height: 1.2rem;

  position: absolute;
  left: 0;
  bottom: calc(var(--height) * -1);

  line-height: var(--height);
  color: var(--color-red);
}
</style>
