import createApp from "../main";

const { app, store } = createApp();

app.$mount("#app");
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}
