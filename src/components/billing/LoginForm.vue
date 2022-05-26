<template>
  <section class="login"> 
    <div class="login__container container">
      <h2>Вход в личный кабинет</h2>
      <p>Введите ваши учётные данные для входа в личный кабинет</p>
      <form>
        <div class="login__input-wrapper">
          <label for="userLogin">Лицевой счёт</label>
          <input type="text" name="userLogin" id="userLogin">
        </div>
        <div class="login__input-wrapper">
          <label for="userPassword">Пароль</label>
          <input type="text" name="userPassword" id="userPassword">
        </div>
        <button>Войти</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.login__container {
  max-width: 800px;
}

form {
  display: flex;
  flex-flow: column nowrap;
}

.login__input-wrapper {
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
}

label {
  min-width: 40%;
}

input {
  padding: 5px;
  min-width: 60%;
  border-radius: 5px;
}

</style>