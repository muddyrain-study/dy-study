import createApp from "../main.js";

export default function (ctx) {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    router.push(ctx.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (matchedComponents.length == 0) {
        reject({ code: 404 });
      }
      resolve(app);
    });
  });
}
