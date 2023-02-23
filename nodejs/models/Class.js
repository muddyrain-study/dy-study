const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Class = sequelize.define(
  "Class",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    openDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // 这是其他模型参数
    paranoid: true,
  }
);
module.exports = Class;
