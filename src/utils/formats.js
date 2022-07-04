export default class {
  static traffic(value) {
    const mbytes = (value / 1048576).toFixed(2);
    if (mbytes > 1024) {
      return `${(mbytes / 1024).toFixed(2)} Гбайт`;
    }
    return `${mbytes} Мбайт`;
  }
  static duration(value) {
    if (value < 60) {
      return "менее 1й минуты";
    }
    const seconds = value % 60;
    const durationInMinutes = (value - seconds) / 60;
    if (durationInMinutes < 60) {
      return `00:${("0" + durationInMinutes).slice(-2)}:${(
        "0" + seconds
      ).slice(-2)}`;
    }
    const minutes = durationInMinutes % 60;
    const hours = (durationInMinutes - minutes) / 60;
    return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${(
      "0" + seconds
    ).slice(-2)}`;
  }
  static datetime(value) {
    const dateObj = new Date(value);
    const date = dateObj.toLocaleDateString("ru-RU");
    const time = dateObj.toLocaleTimeString();
    return `${date} ${time}`;
  }
}