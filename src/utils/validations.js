export default class {
  static isPayCardSerialValid(value) {
    const valueLength = value.toString().trim().length;
    if (valueLength !== 15 && valueLength > 0) {
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
}