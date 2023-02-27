import createApp from "../main.js";

export default function (ctx) {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    router.push(ctx.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (matchedComponents.length == 0) {
        reject({ code: 404 });
      }
      Promise.all(
        matchedComponents.map((c) => {
          if (c.asyncData) {
            return c.asyncData(store);
          }
        })
      )
        .then(() => {
          // window.__INITIAL_STATE__
          ctx.state = store.state;
          resolve(app);
        })
        .catch(reject);
    });
  });
}
