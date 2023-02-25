const express = require("express");
const serverRender = require("vue-server-renderer");
const Vue = require("vue");
const server = express();
const fs = require("fs");
const desc = {
  title: "这是一个 ssr页面",
  meta: '<meta name="description" content="Collection of essential Vue Composition Utilities">',
};
server.get("*", async (req, res) => {
  try {
    const app = new Vue({
      data() {
        return {
          msg: "hello ssr 哈哈哈11哈哈",
        };
      },
      template: `
      <div>
        <span>{{ msg }}</span>
      </div>
      `,
    });

    const render = serverRender.createRenderer({
      template: fs.readFileSync("./index.html", "utf-8"),
    });

    const html = await render.renderToString(app, desc);
    res.send(html);
  } catch (error) {
    throw error;
  }
});

server.listen(3000);
