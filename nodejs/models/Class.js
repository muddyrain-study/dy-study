const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const Student = require("./Student");

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
Class.hasMany(Student);
module.exports = Class;
