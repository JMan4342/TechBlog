const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comment");

Blog.belongsTo(User, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

User.hasMany(Blog, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

Comment.belongsTo(Blog, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

Blog.hasMany(Comment, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Blog,
  Comment,
};
