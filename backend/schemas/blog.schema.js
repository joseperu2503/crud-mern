const Joi = require('joi')

const id = Joi.number().integer().min(1)
const title = Joi.string()
const content = Joi.string()

const createBlogSchema = Joi.object({
    title: title.required(),
    content: content.required(),
})

const updateBlogSchema = Joi.object({
    title: title,
    content: content,
})

const getBlogSchema = Joi.object({
    id: id.required()
})

module.exports = { createBlogSchema, updateBlogSchema, getBlogSchema}