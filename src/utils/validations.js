export default class {
  static isPayCardSerialValid(value) {
    const valueLength = value.toString().trim().length;
    if (valueLength !== 16 && valueLength > 0) {
      const error = new Error('Длина серийного номера должна быть 15 символов');
      throw error;
    }
  }

  static isPayCardPinValid(value) {
    const valueLength = value.toString().trim().length;
    if (valueLength !== 8 && valueLength > 0) {
      const error = new Error('Длина пин-кода должна быть 8 символов');
      throw error;
    }
  }

  static isLoginValid(value) {
    const regExp = /^(user_)([\d]{4}$)/;
    if (!regExp.test(value)) {
      throw new Error('Неврно введён лицевой счёт. Образец "user_0001"')
    }
   }
  
  static isUserPasswordValid(value) {
    const regExp = /^([\d]{6}$)/;
    if (!regExp.test(value)) {
      throw new Error('Пароль должен состоять из 6 цифр без пробелов')
    }
   }
}