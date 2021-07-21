const sequelize = require("../config/connection.js");
const { Model, Sequelize, DataTypes } = require("sequelize");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    commentContent: {
      type: DataTypes.TEXT,
      allowNull: false,
      // unique: true,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    // timestamps: false,
    modelName: "comment",
  }
);

module.exports = Comment;
