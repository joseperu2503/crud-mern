const Joi = require('joi')

const id = Joi.number().integer().min(1)
const title = Joi.string()
const content = Joi.string()
const userId = Joi.number().integer().min(1)

const createBlogSchema = Joi.object({
    title: title.required(),
    content: content.required(),
    userId: userId.required(),
})

const updateBlogSchema = Joi.object({
    title: title,
    content: content,
    userId: userId,
})

const getBlogSchema = Joi.object({
    id: id.required()
})

module.exports = { createBlogSchema, updateBlogSchema, getBlogSchema}
