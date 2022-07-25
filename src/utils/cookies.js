export const checkAuthorization = function() {
  const cookies = {};
  const cookiesArr = document.cookie.split("; ");
  cookiesArr.forEach((el) => {
    const values = el.split("=");
    const [key, value] = values;
    cookies[key] = Boolean(+value);
  });
  return cookies?.authorized;
}