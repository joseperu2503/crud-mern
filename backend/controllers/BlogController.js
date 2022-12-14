const { Blog } = require("../db/models/Blog.js");
const boom = require('@hapi/boom')
const { User } = require("../db/models/User.js");

class BlogController {
    static index = async (req, res, next) => {
        try {
            const blogs = await Blog.findAll({
                include: ['user']
            })
            res.json(blogs)
        } catch (error) {
            next(error)
        }
    }
 
    static show = async (req, res, next) => {
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
    
    static store = async (req, res, next) => {
        try {
            await Blog.create(req.body)
            res.status(201).json({message: 'Registro creado correctamente'})
        } catch (error) {
            next(error)
        }
    }
    
    static update = async (req, res, next) => {
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
    
    static destroy = async (req, res, next) => {
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
}


module.exports = BlogController