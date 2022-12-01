const { Model, DataTypes, Sequelize } = require("sequelize");

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
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW,
    },
};

class Blog extends Model {
    static associate(){

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