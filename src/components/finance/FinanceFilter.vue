<template>
  <div class="filter">
    <h2>Фильтр</h2>
    <div class="filter__container">
      <div class="filter__dates">
        <base-datepicker inputId="start" labelText="Начало" ></base-datepicker>
        <base-datepicker inputId="end" labelText="Конец" ></base-datepicker>
      </div>
      <div class="filter__checkboxes">
        <base-checkbox checkboxName="type" checkboxId="all-types" checkboxLabel="Все операции"></base-checkbox>
        <base-checkbox checkboxName="type" checkboxId="payment-type" checkboxLabel="Оплаты"></base-checkbox>
        <base-checkbox checkboxName="type" checkboxId="fee-type" checkboxLabel="Списания"></base-checkbox>
      </div>
      <div class="filter__checkboxes">
        <base-radio radioName="sort" radioId="desc" radioLabel="От конца"></base-radio>
        <base-radio radioName="sort" radioId="asc" radioLabel="С начала"></base-radio>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>