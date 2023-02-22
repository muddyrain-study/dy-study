require("./Admin");
require("./Class");
require("./Student");
require("./Book");

const sequelize = require("./db");
sequelize.sync({ alter: true }).then(() => {
  console.log("所有模型同步完毕");
});
