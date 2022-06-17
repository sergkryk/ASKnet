export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU');
}

export const dateToString = (milliseconds) => {
  const dateObj = new Date(milliseconds)
  const date = dateObj.toLocaleDateString("ru-RU");
  const time = dateObj.toLocaleTimeString();
  return `${date} ${time}`;
}

export const valueToMoney = (value) => {
  return value.toFixed(2);
}
