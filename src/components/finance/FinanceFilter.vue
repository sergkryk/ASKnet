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
          v-for="el in datepickers"
          :key="el.datepickerId"
          :class="el.mods"
          :inputId="el.datepickerId"
          :labelText="el.datepickerLabel"
          :valueOnLoad="el.initValue"
          @handleDateInput="handleDateInput"
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
        dateStart: this.startDate,
        dateEnd: this.endDate,
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
      
      datepickers: [
        {
          mods: ["filter__date"],
          datepickerId: "dateStart",
          datepickerLabel: "Начало",
          initValue: '',
        },
        {
          mods: ["filter__date"],
          datepickerId: "dateEnd",
          datepickerLabel: "Конец",
          initValue: '',
        },
      ],
    };
  },
  methods: {
    handleDateInput(data) {
      this.filters[data.name] = data.value;
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
    setInitialFilterDates(dateStart, dateEnd) {
      this.datepickers.forEach((el) => {
        if (el.datepickerId === 'dateStart') {
          el.initValue = dateStart;
        }
        if (el.datepickerId === 'dateEnd') {
          el.initValue = dateEnd;
        }
      })
    },
    calcInitialFilterDates() {
      const today = new Date();
      const dateEnd = today.toISOString().slice(0, 10);
      today.setMonth(today.getMonth() - 1, 1);
      const dateStart = today.toISOString().slice(0, 10);
      return {
        dateStart,
        dateEnd
      }
    },
    initFilterDatesOnLoad() {
      const { dateStart, dateEnd } = this.calcInitialFilterDates();
      this.setInitialFilterDates(dateStart, dateEnd)
      this.$emit("filterChange", {dateStart, dateEnd, type: ''})
    }
  },
  beforeMount() {
    this.initFilterDatesOnLoad();
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
