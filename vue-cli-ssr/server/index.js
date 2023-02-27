const express = require("express");
const fs = require("fs");
const { createBundleRenderer } = require("vue-server-renderer");
const path = require("path");
const serverBundle = require("../dist/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/vue-ssr-client-manifest.json");
const server = express();
server.use(
  express.static(path.resolve(__dirname, "../dist"), { index: false })
);
server.get("*", async (req, res) => {
  try {
    const url = req.url;
    // 2. 创建渲染器
    const render = createBundleRenderer(serverBundle, {
      template: fs.readFileSync(
        path.resolve(__dirname, "./index.ssr.html"),
        "utf-8"
      ),
      clientManifest,
    });
    const html = await render.renderToString({ url });
    res.send(html);
    // 3. 利用渲染器将vue实例转化成html字符串
  } catch (error) {
    if (error.code === 404) {
      res.status(404).send("找不到页面,404");
      return;
    }
    throw error;
  }
});

server.listen(3000, () => {
  console.log("listen port is 3000");
});
