<template>
  <div class="filter">
    <div class="filter__container">
      <div class="filter__wrapper filter__checkboxes">
        <h4>Тип операции</h4>
        <base-checkbox class="filter__checkbox" checkboxName="type" checkboxId="all-types" checkboxLabel="Все операции"></base-checkbox>
        <base-checkbox class="filter__checkbox" checkboxName="type" checkboxId="payment-type" checkboxLabel="Оплаты"></base-checkbox>
        <base-checkbox class="filter__checkbox" checkboxName="type" checkboxId="fee-type" checkboxLabel="Списания"></base-checkbox>
      </div>
      <!-- <div class="filter__wrapper filter__radios">
        <h4>Сортировка</h4>
        <base-radio radioName="sort" radioId="desc" radioLabel="От конца"></base-radio>
        <base-radio radioName="sort" radioId="asc" radioLabel="С начала"></base-radio>
      </div> -->
      <div class="filter__wrapper filter__dates">
        <h4>Период</h4>
        <base-datepicker class="filter__date" inputId="start" labelText="Начало" ></base-datepicker>
        <base-datepicker class="filter__date" inputId="end" labelText="Конец" ></base-datepicker>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
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
// .filter__wrapper {
  // width: calc(100% / 3);
// }
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
// .filter__date {
  // &:not(:last-child) {
    // margin-right: 1rem;
  // }
// }
.filter__checkboxes {
  width: 100%;
  max-width: 400px;
  grid-column: 2 / -1;
  // grid-row: 2 / 3;


  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  grid-gap: 1rem;
  // justify-items: start;

  h4 {
    margin: 0 0 0.5rem;
    grid-column: 1 / -1;
  }
}
.filter__checkbox {

}
// .filter__radios {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(2, auto);
//   justify-content: start;

//   & {
//     h4 {
//       margin: 0 0 0.5rem;
//       grid-column: span 2;
//     }
//   }
// }
</style>