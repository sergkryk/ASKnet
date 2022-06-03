function isEmpty(value) {
  if (value === "") {
    throw new Error("Поле не должно быть пустым")
  }
}

function isDigits(value) {
  const regExp = new RegExp(/^[0-9]+$/);
  if (!regExp.test(value)) {
    throw new Error("В пароле должны быть только цифры")
  }
}

function isProperLength(value) {
  if (value.length !== 6) {
    throw new Error("Длина пароля должна быть 6 символов");
  }
}

export default [isEmpty, isDigits, isProperLength];
