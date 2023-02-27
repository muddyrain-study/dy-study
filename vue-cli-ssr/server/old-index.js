const express = require("express");
const fs = require("fs");
const { createRenderer } = require("vue-server-renderer");
const { default: createApp } = require("../old-dist/server.bundle");
const path = require("path");

const server = express();
server.use(
  express.static(path.resolve(__dirname, "../dist"), { index: false })
);
server.get("*", async (req, res) => {
  try {
    const app = createApp();
    const render = createRenderer({
      template: fs.readFileSync(
        path.resolve(__dirname, "./index.ssr.html"),
        "utf-8"
      ),
    });
    const html = await render.renderToString(app);
    res.send(html);
  } catch (error) {
    throw error;
  }
});

server.listen(3000, () => {
  console.log("listen port is 3000");
});
