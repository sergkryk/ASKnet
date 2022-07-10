<template>
  <div class="filter">
    <h3 class="filter__title">Фильтр по дате:</h3>
    <form class="filter__form">
      <base-datepicker
        class="filter__forw-wrapper"
        inputId="begin"
        labelText="Начало"
        :initialValue="initialDates.begin"
        @userDateInput="handleDateInput"
      ></base-datepicker>
      <base-datepicker
        class="filter__forw-wrapper"
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
    // handleDatesInput() {
    //   if (this.startDate && this.endDate) {
    //     try {
    //       this.compareDates();
    //       this.$emit("userDatesInput", {
    //         start: this.startDate,
    //         end: this.endDate,
    //       });
    //       this.errorMessage = '';
    //     } catch (error) {
    //       this.errorMessage = error.message;
    //     }
    //   }
    // },
    handleDateInput(data) {
      this.$emit("dateChange", data);
    },
  },
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
  position: relative;
  display: flex;
  flex-flow: row wrap;
}
.filter__forw-wrapper {
  margin-right: 2rem;
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
