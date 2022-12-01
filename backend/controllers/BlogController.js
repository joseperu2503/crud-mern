import BlogModel from "../models/BlogModel.js";
import boom from "@hapi/boom";
import { User } from "../models/User.js";

// Metodos para el crud

export const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        next(error)
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

export const getBlog = async (req, res, next) => {
    try {
        const blog = await BlogModel.findOne({
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

export const createBlog = async (req, res, next) => {
    try {
        await BlogModel.create(req.body)
        res.status(201).json({message: 'Registro creado correctamente'})
    } catch (error) {
        next(error)
    }
}

export const updateBlog = async (req, res, next) => {
    try {
        await BlogModel.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.json({message: 'Registro actualizado correctamente'})
    } catch (error) {
        next(error)
    }
}

export const deleteBlog = async (req, res, next) => {
    try {
        await BlogModel.destroy({
            where: {
                id: req.params.id
            }
        })
        
        res.json({message: 'Registro eliminado correctamente'})
    } catch (error) {
        next(error)
    }
}