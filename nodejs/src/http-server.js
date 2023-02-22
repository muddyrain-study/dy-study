const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  console.log("请求来了");
  const urlobj = url.parse(req.url);
  //   console.log("请求地址", urlobj);
  //   console.log("请求头", req.headers);
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString("utf-8");
  });
  req.on("end", (chunk) => {
    console.log("请求体", body);
  });
  res.setHeader("a", "1");
  res.setHeader("b", "2");
  res.write("你好！！");
  res.end();
});

server.listen(3000);

server.on("listening", () => {
  console.log("server listening 3000");
});
