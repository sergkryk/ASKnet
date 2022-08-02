<template>
  <base-filter
    :inputs="[
      {
        name: 'datepickers',
        heading: 'Период',
        mods: ['dates'],
      },
      {
        name: 'types',
        heading: 'Тип операции',
        mods: ['radios'],
      },
    ]"
  >
    <template v-slot:datepickers>
      <base-datepicker
        v-for="el in datepickers"
        :key="el.datepickerId"
        :inputId="el.datepickerId"
        :labelText="el.datepickerLabel"
        :initialValue="el.initialValue"
        @userDateInput="handleDateInput"
      ></base-datepicker>
    </template>
    <template v-slot:types>
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
    </template>
  </base-filter>
</template>

<script>
export default {
  emits: ["typeChange", "dateChange"],
  props: {
    initialDates: {
      type: Object,
      required: true,
    },
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
      this.$emit("typeChange", value);
    },
  },
};
</script>
