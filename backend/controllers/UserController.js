const boom = require('@hapi/boom')
const { User } = require("../db/models/User.js");

class UserController {
    static index = async (req, res, next) => {
        try {
            const users = await User.findAll()
            res.json(users)
        } catch (error) {
            next(error)
        }
    }

    static show = async (req, res, next) => {
        try {
            const user = await User.findOne({
                include: ['blogs'],
                where: {
                    id: req.params.id
                }
            })
    
            if(!user){
                throw boom.notFound('User not found')
            }
    
            res.json(user)
        } catch (error) {
            next(error)
        }
    }

    static findByEmail = async (email) => {
        const user = await User.findOne({
            where: {email}
        })

        return user
    }
    
    static store = async (req, res, next) => {
        try {
            await User.create(req.body)
            res.status(201).json({message: 'Registro creado correctamente'})
        } catch (error) {
            next(error)
        }
    }
    
    static update = async (req, res, next) => {
        try {
            await User.update(req.body,{
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
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            
            res.json({message: 'Registro eliminado correctamente'})
        } catch (error) {
            next(error)
        }
    }

    static blogs = async (req, res, next) => {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.id
                }
            })

            const blogs = await  user.getBlogs()

            res.json(blogs)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = UserController