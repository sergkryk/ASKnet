export const checkAuthorization = function() {
  const cookies = {};
  console.log(document.cookie);
  const cookiesArr = document.cookie.split("; ");
  cookiesArr.forEach((el) => {
    const values = el.split("=");
    const [key, value] = values;
    cookies[key] = Boolean(+value);
  });
  return cookies?.authorized;
}

export const setCookie = function(name, value, options = {}) {

  options = {
    path: '/',
    // add other defaults here if necessary
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)} = ${encodeURIComponent(value)}`;

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}