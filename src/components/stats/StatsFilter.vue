<template>
  <base-filter
    :inputs="[
      {
        name: 'datepickers',
        heading: 'Период',
        mods: ['dates'],
      },
    ]"
  >
    <template v-slot:datepickers>
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
    </template>
  </base-filter>
</template>

<script>
export default {
  emits: ["dateChange"],
  props: {
    initialDates: {
      type: Object,
      required: false,
    },
    error: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleDateInput(data) {
      this.$emit("dateChange", data);
    },
  },
};
</script>
