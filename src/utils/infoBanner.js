export default class {
  static show(
    store,
    options = {
      status: true,
      message: "Успешно выполнено",
      statusCode: "200",
    }
  ) {
    store.dispatch("loading/setStatus", options.status);
    store.dispatch("loading/setMessage", options.message);
    store.dispatch("loading/setStatusCode", options.statusCode);
  }
  static hide(store) {
    store.dispatch("loading/setStatus", false);
    store.dispatch("loading/setMessage", "");
    store.dispatch("loading/setStatusCode", "");
  }
}
