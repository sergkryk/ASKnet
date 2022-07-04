<template>
  <div class="filter">
    <div class="filter__container">
      <div class="filter__wrapper filter__checkboxes">
        <h4>Тип операции</h4>
        <base-radio
          v-for="radio in radios"
          :key="radio.name"
          class="filter__radio"
          radioName="type"
          :radioId="radio.name"
          :radioLabel="radio.label"
          :radioState="radio.isChecked"
          @userTypeInput="handleTypeInput"
        ></base-radio>
      </div>
      <div class="filter__wrapper filter__dates">
        <h4>Период</h4>
        <base-datepicker
          v-for="el in datepickers"
          :key="el.datepickerId"
          :class="el.mods"
          :inputId="el.datepickerId"
          :labelText="el.datepickerLabel"
          :initialValue="el.initialValue"
          @userDateInput="handleDateInput"
        ></base-datepicker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["typeChange", "dateChange"],
  props: {
    initialDates: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      radios: [
        {
          name: "all",
          isChecked: true,
          label: "Все",
        },
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
      
      datepickers: [
        {
          mods: ["filter__date"],
          datepickerId: "begin",
          datepickerLabel: "Начало",
          initialValue: this.initialDates.begin,
        },
        {
          mods: ["filter__date"],
          datepickerId: "end",
          datepickerLabel: "Конец",
          initialValue: this.initialDates.end,
        },
      ],
    };
  },
  methods: {
    handleDateInput(data) {
      this.$emit("dateChange", data);
    },
    handleTypeInput(value) {
      this.$emit("typeChange", value)
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
