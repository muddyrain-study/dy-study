const fs = require("fs");
const path = require("path");

class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.size = size;
    this.isFile = isFile;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }
  async getContent(isBuffer = false) {
    if (this.isFile) {
      if (isBuffer) {
        return await fs.promises.readFile(this.filename);
      } else {
        return await fs.promises.readFile(this.filename, "utf-8");
      }
    }
    return null;
  }
  async getChildren() {
    if (this.isFile) {
      return [];
    }
    let children = await fs.promises.readdir(this.filename);
    children = children.map((name) => {
      const newPath = path.resolve(this.filename, name);
      return File.getFile(newPath);
    });
    return Promise.all(children);
  }
  static async getFile(filename) {
    const stat = await fs.promises.stat(filename);
    const name = path.basename(filename);
    const ext = path.extname(name);
    const isFile = await stat.isFile(filename);
    return new File(
      filename,
      name,
      ext,
      isFile,
      stat.size,
      new Date(stat.birthtime),
      new Date(stat.mtime)
    );
  }
}
async function readDir(dirname) {
  const file = File.getFile(dirname);
  return (await file).getChildren();
}

async function test() {
  const dirname = path.resolve(__dirname, "./files");
  const res = await readDir(dirname);
  console.log(res);
}
test();
