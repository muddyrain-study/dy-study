const { DataTypes } = require("sequelize");
const sequelize = require("./db");

module.exports = sequelize.define(
  "Book",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgurl: {
      type: DataTypes.STRING,
    },
    publishDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // 这是其他模型参数
    paranoid: true,
  }
);
