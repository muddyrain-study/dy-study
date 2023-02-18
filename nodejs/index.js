console.log(__dirname);
console.log(__filename);
const buffer = Buffer.from("abcdefg", "utf-8");
console.log(buffer);
const timer = setTimeout(() => {
  console.log("timer");
}, 1000);

console.log(process.cwd());
console.log(process.argv);
console.log("platform", process.platform);
console.log(process.env);
process.exit();
