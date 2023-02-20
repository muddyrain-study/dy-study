(async () => {
  const fs = require("fs");
  const path = require("path");

  async function exists(filename) {
    try {
      const res = await fs.promises.stat(filename);
    } catch (error) {
      if (error.code === "ENOENT") {
        // 文件不存在
        return false;
      }
      throw error;
    }
  }

  const files = path.resolve(__dirname, "./files");
  const filename = path.resolve(__dirname, "./files/avatar.jpg");
  fs.promises.readdir(files).then((a) => {
    console.log(a);
  });
  const a = await exists(filename);
  console.log(a);
  const stat = await fs.promises.stat(filename);
  const buffer = await fs.promises.readFile(filename);
  const toFilename = path.resolve(__dirname, "./files/avatar2.jpg");
  fs.promises.writeFile(toFilename, buffer).then(() => {
    console.log("写入成功");
  });

  console.log("----- end -----");
})();
