export default class {
  static getDefaulDatesPeriod() {
    const now = new Date();
    const endDate = now.getTime();
    const startDate = new Date(now.setMonth(now.getMonth() - 6, 1)).getTime();
    return {
      startDate,
      endDate,
    }
  }
  static dateToString(timeInMilliseconds) {
    return new Date(timeInMilliseconds).toISOString().slice(0, 10);
  }
}