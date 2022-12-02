const { Model, DataTypes, Sequelize } = require("sequelize");
const { User, USER_TABLE } = require("./User");

const BLOG_TABLE = "blogs";

const BlogSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    content: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE'
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW,
    },
};

class Blog extends Model {
    static associate(models){
        this.belongsTo(models.User, {as: 'user'})
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: BLOG_TABLE,
            modelName: 'Blog',
            timestamps: false
        }
    }
}


module.exports = { BLOG_TABLE, BlogSchema, Blog  }