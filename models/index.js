const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment')

Blog.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

User.hasMany(Blog, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

Comment.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

User.hasMany(Comment, {
    foreignKey: "userId",
    onDelete: "CASCADE"
})

Comment.belongsTo(Blog, {
    foreignKey: "blogId",
    onDelete: "CASCADE"
})

Blog.hasMany(Comment, {
    foreignKey: "blogID",
    onDelete: "CASCADE"
})

// Blog.hasMany()
module.exports = {
    User,
    Blog,
    Comment,
};