const fs = require("fs");
const path = require("path");

async function method1() {
  const from = path.resolve(__dirname, "./files/1.txt");
  const to = path.resolve(__dirname, "./files/2.txt");
  console.time("方式1");
  const content = await fs.promises.readFile(from);
  await fs.promises.writeFile(to, content);
  console.timeEnd("方式1");
  console.log("复制完成");
}

method1();

async function method2() {
  const from = path.resolve(__dirname, "./files/1.txt");
  const to = path.resolve(__dirname, "./files/3.txt");
  console.time("方式2");
  const rs = fs.createReadStream(from);
  const ws = fs.createWriteStream(to);
  //   rs.on("data", (chunk) => {
  //     const flag = ws.write(chunk);
  //     if (!flag) {
  //       rs.pause();
  //     }
  //   });
  //   ws.on("drain", () => {
  //     rs.resume();
  //   });
  rs.on("close", () => {
    console.timeEnd("方式2");
    console.log("复制完成");
  });
  rs.pipe(ws);
}
method2();
