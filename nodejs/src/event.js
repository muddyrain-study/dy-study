const { EventEmitter } = require("events");

const ee = new EventEmitter();

ee.on("abc", () => {
  console.log("abc 触发了");
});

ee.emit("abc");
