export default class {
  static getDefaulDatesPeriod() {
    const now = new Date();
    const endDate = now.getTime();
    const startDate = new Date(now.setMonth(now.getMonth() - 1, 1)).getTime();
    return {
      startDate,
      endDate,
    }
  }
}