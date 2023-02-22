const http = require("http");

const request = http.request(
  "http://61.164.59.206:2359",
  {
    method: "GET",
  },
  (resp) => {
    console.log("服务器响应的状态码", resp.statusCode);
    let result = "";
    resp.on("data", (chunk) => {
      result += chunk.toString("utf-8");
    });
    resp.on("end", (chunk) => {
      console.log(result);
    });
  }
);

request.end();
