const { Blog } = require("../db/models/Blog.js");
const boom = require('@hapi/boom')
const { User } = require("../db/models/User.js");

// Metodos para el crud

const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.findAll()
        res.json(blogs)
    } catch (error) {
        next(error)
    }
}

const getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

const getBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findOne({
            where: {
                id: req.params.id
            }
        })

        if(!blog){
            throw boom.notFound('Blog not found')
        }

        res.json(blog)
    } catch (error) {
        next(error)
    }
}

const createBlog = async (req, res, next) => {
    try {
        await Blog.create(req.body)
        res.status(201).json({message: 'Registro creado correctamente'})
    } catch (error) {
        next(error)
    }
}

const updateBlog = async (req, res, next) => {
    try {
        await Blog.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.json({message: 'Registro actualizado correctamente'})
    } catch (error) {
        next(error)
    }
}

const deleteBlog = async (req, res, next) => {
    try {
        await Blog.destroy({
            where: {
                id: req.params.id
            }
        })
        
        res.json({message: 'Registro eliminado correctamente'})
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllBlogs, getBlog, getUsers, createBlog, updateBlog, deleteBlog }