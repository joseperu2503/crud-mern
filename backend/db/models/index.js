const { User, UserSchema } = require("./User.js");
const { Blog, BlogSchema } = require("./Blog.js");

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))
    Blog.init(BlogSchema, Blog.config(sequelize))
    // User.sync({ alter: true })
}

module.exports = { setupModels }