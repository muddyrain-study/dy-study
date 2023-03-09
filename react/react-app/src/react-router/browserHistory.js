import { createBrowserHistory } from "history";
window.createBrowserHistory = createBrowserHistory;
const h = createBrowserHistory({
  window: window,
});

window.unlisten = h.listen(({ location, action }) => {
  console.log("地址发生变化了", location, action);
});
window.h = h;
