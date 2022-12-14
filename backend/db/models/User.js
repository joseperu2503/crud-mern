const { Model, DataTypes, Sequelize } = require("sequelize");
// const { Blog } = require("./Blog");
const bcrypt = require('bcrypt')
const USER_TABLE = "users";

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW,
    },
};

class User extends Model {
    static associate(models){
        this.hasMany(models.Blog,{
            as: 'blogs',
            foreignKey: 'userId'
        })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false,
            hooks: {
                beforeCreate: async (user, options) => {
                  const password = await bcrypt.hash(user.password, 10);
                  user.password = password;
                },
            }
        }
    }
}


module.exports = { USER_TABLE, UserSchema, User  }
