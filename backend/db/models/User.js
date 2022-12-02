const { Model, DataTypes, Sequelize } = require("sequelize");
// const { Blog } = require("./Blog");

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
    static associate(){
        // this.hasMany(Blog)
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}


module.exports = { USER_TABLE, UserSchema, User  }
