const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "./files/1.txt");
const rs = fs.createReadStream(filePath, {
  encoding: "utf-8",
  highWaterMark: 64,
  autoClose: true,
});

rs.on("open", () => {
  console.log("文件被打开了");
});
rs.on("error", () => {
  console.log("文件出错了");
});
rs.on("close", () => {
  console.log("文件关闭了");
});
rs.on("data", (data) => {
  console.log("读到数据:", data);
});
rs.on("end", () => {
  console.log("全部数据读取完毕");
});
