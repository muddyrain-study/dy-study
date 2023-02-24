require("./init");

const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(""));

// 应用token中间件
app.use(require("./tokenMiddleware"));

// 处理 api 的请求
app.use("/api/student", require("./api/student"));
// app.use("/api/book", require("./api/book"));
// app.use("/api/class", require("./api/class"));
app.use("/api/admin", require("./api/admin"));

// 处理错误的中间件
app.use(require("./errorMiddleware"));

app.listen(9527, () => {
  console.log("server start");
});
