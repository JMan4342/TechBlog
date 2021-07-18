const User = require('./user');
const Blog = require('./blog');

Blog.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

User.hasMany(Blog, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

module.exports = {
    User,
    Blog,
};