import { User, UserSchema } from "./User.js";

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize))

    User.sync({ alter: true })
}

export { setupModels }