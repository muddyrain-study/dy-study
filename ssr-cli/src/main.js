import Vue from "vue";
import App from "./app.vue";
import createRouter from "./router";
import createStore from "./store";
export default function () {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  return { app, router, store };
}
