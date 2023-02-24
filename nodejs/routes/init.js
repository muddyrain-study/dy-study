require("./init");

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(9527, () => {
  console.log("server start");
});
