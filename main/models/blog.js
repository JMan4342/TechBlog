const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  blogContent: {
    type: DataTypes.STRING.VARCHAR(max),
    allowNull: false,
    unique: true,
    },
  },
);

module.exports = Blog;
