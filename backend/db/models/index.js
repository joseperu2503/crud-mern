const { User, UserSchema } = require("./User.js");
const { Blog, BlogSchema } = require("./Blog.js");

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))
    Blog.init(BlogSchema, Blog.config(sequelize))

    // User.associate()
    Blog.associate(sequelize.models)
    
    // User.sync({ alter: true })
}

module.exports = { setupModels }