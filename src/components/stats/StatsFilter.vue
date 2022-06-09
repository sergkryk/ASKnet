<template>
  <div class="filter">
    <h3 class="filter__title">Фильтр по дате:</h3>
    <form class="filter__form">
      <base-datepicker
        class="filter__forw-wrapper"
        inputId="start"
        labelText="Начало"
        :mods="['stats__date']"
      ></base-datepicker>
      <base-datepicker
        class="filter__forw-wrapper"
        inputId="end"
        labelText="Конец"
        :mods="['stats__date']"
      ></base-datepicker>
    </form>
  </div>
</template>

<script>
export default {};
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
