<template>
  <div class="filter">
    <h3 class="filter__title">Фильтр по дате:</h3>
    <form class="filter__form">
      <base-datepicker
        class="filter__forw-wrapper"
        inputId="start"
        labelText="Начало"
        :defaultValue="initialDates.startDate"
        @inputDateHandle="setStart"
      ></base-datepicker>
      <base-datepicker
        class="filter__forw-wrapper"
        inputId="end"
        labelText="Конец"
        :defaultValue="initialDates.endDate"
        @inputDateHandle="setEnd"
      ></base-datepicker>
      <span v-if="errorMessage">{{ errorMessage }}</span>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['requestByDates'],
  data() {
    return {
      currentDate: new Date(),
      startDate: "",
      endDate: "",
      errorMessage: "",
    };
  },
  methods: {
    compareDates() {
      if (this.startDate > this.endDate) {
        throw new Error("Начальная дата не должна быть позднее конечной");
      }
      if (this.startDate > this.currentDate || this.endDate > this.currentDate) {
        throw new Error("Это архив, нельзя выбирать даты из будущего!")
      }
    },
    handleDatesInput() {
      if (this.startDate && this.endDate) {
        try {
          this.compareDates();
          this.$emit("requestByDates", {
            start: this.startDate,
            end: this.endDate,
          });
          this.errorMessage = '';
        } catch (error) {
          this.errorMessage = error.message;
        }
      }
    },
    setStart(data) {
      this.startDate = new Date(data);
      this.handleDatesInput();
    },
    setEnd(data) {
      this.endDate = new Date(data);
      this.handleDatesInput();
    },
  },
  computed: {
    initialDates() {
      const start = this.currentDate.setMonth(this.currentDate.getMonth() - 1, 1);
      const end = this.currentDate.setMonth(this.currentDate.getMonth() + 2, 0);

      const startDate = new Date(start).toISOString().slice(0, 10);
      const endDate = new Date(end).toISOString().slice(0, 10);
      return {
        startDate,
        endDate
      };
    }
  },
  beforeMount() {
    this.handleDatesInput;
  }
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2rem;
}
.filter__title {
  margin: 0 2rem 0 0;
  font-weight: 500;
}
.filter__form {
  display: flex;
  flex-flow: row wrap;
}
.filter__forw-wrapper {
  margin-right: 2rem;
  min-width: 200px;
}
</style>
