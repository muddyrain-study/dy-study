const https = require("https");
const path = require("path");
const url = require("url");
const fs = require("fs");
async function exists(filename) {
  try {
    return await fs.promises.stat(filename);
  } catch (error) {
    return null;
  }
}

async function getFileName(_url) {
  const urlObj = url.parse(_url);
  let filename = path.resolve(
    __dirname,
    "public",
    urlObj.pathname.substring(1)
  );
  let stat = await exists(filename);
  if (!stat) {
    // 文件不存在
    return null;
  } else if (stat.isDirectory()) {
    filename = path.resolve(
      __dirname,
      "public",
      urlObj.pathname.substr(1),
      "index.html"
    );
    stat = await exists(filename);
    if (!stat) {
      return null;
    } else {
      return await fs.promises.readFile(filename);
    }
  } else {
    return await fs.promises.readFile(filename);
  }
}

async function handler(req, res) {
  const info = await getFileName(req.url);
  if (info) {
    res.write(info);
  } else {
    res.statusCode = 404;
    res.write("Resource is not exist");
  }
  res.end();
}

const server = https.createServer(
  {
    key: fs.readFileSync(path.resolve(__dirname, "./server-key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "./server-cert.crt")),
  },
  handler
);

server.listen(3000);
