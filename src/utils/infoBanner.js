export default class {
  static show(
    store,
    options = {
      message: "Успешно выполнено",
      statusCode: "200",
    }
  ) {
    store.dispatch("loading/setStatus", true);
    store.dispatch("loading/setMessage", options.message);
    store.dispatch("loading/setStatusCode", options.statusCode);
    setTimeout(() => {
      this.hide(store);
    }, 10000)
  }
  static hide(store) {
    store.dispatch("loading/setStatus", false);
    store.dispatch("loading/setMessage", "");
    store.dispatch("loading/setStatusCode", "");
  }
}
