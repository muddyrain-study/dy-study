const net = require("net");

const server = net.createServer();

server.listen(9527);

server.on("listening", () => {
  console.log("server listen 9527");
});
server.on("connection", (socket) => {
  console.log("有客户端连接来");
  socket.on("data", async (chunk) => {
    console.log(chunk.toString("utf-8"));
    socket.write(`HTTP/1.1 200 OK

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>你好</h1>
</body>
</html>`);
    socket.end();
  });
  socket.on("end", () => {
    console.log("客户端关闭");
  });
});
