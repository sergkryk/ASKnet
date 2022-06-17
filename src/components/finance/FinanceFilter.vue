<template>
  <div class="filter">
    <div class="filter__container">
      <div class="filter__wrapper filter__checkboxes">
        <h4>Тип операции</h4>
        <base-checkbox
          v-for="box in checkboxes"
          :key="box.name"
          class="filter__checkbox"
          checkboxName="type"
          :checkboxId="box.name"
          :checkboxLabel="box.label"
          :checkboxState="box.isChecked"
          @inputEvent="handleCheckboxInput"
        ></base-checkbox>
      </div>
      <div class="filter__wrapper filter__dates">
        <h4>Период</h4>
        <base-datepicker
          class="filter__date"
          inputId="start"
          labelText="Начало"
          @inputDateHandle="setStart"
        ></base-datepicker>
        <base-datepicker
          class="filter__date"
          inputId="end"
          labelText="Конец"
          @inputDateHandle="setEnd"
        ></base-datepicker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["filterChange"],
  data() {
    return {
      filters: {
        dateStart: '',
        dateEnd: '',
        type: [],
      },
      checkboxes: [
        {
          name: "payment",
          isChecked: false,
          label: "Оплаты",
        },
        {
          name: "fee",
          isChecked: false,
          label: "Списания",
        },
      ],
    };
  },
  methods: {
    setStart(value) {
      this.filters.dateStart = value;
      this.handleFilterInputs();
    },
    setEnd(value) {
      this.filters.dateEnd = value;
      this.handleFilterInputs();
    },
    handleCheckboxInput(value) {
      if (value.isChecked) {
        this.filters.type.push(value.name);
      } else {
        this.filters.type = this.filters.type.filter((el) => el !== value.name);
      }
      this.handleFilterInputs();
    },
    handleFilterInputs() {
      this.$emit("filterChange", this.filters);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  margin-bottom: 1.5rem;
}
.filter__container {
  display: grid;
  grid-template-columns: 480px 400px;
  grid-gap: 1.5rem;
  justify-content: space-between;
}

.filter__dates {
  width: 100%;

  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-self: start;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 10px;

  & h4 {
    margin: 0 0 0.5rem;
    grid-column: span 2;
  }
}

.filter__checkboxes {
  width: 100%;
  max-width: 400px;
  grid-column: 2 / -1;

  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  grid-gap: 1rem;

  h4 {
    margin: 0 0 0.5rem;
    grid-column: 1 / -1;
  }
}
</style>
