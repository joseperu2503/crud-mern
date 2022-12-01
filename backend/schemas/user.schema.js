const Joi = require('joi')

const id = Joi.number().integer().min(1)
const title = Joi.string()
const content = Joi.string()
const name = Joi.string()

const createBlogSchema = Joi.object({
    title: title.required(),
    content: content.required(),
    name: name.required(),
})

const updateBlogSchema = Joi.object({
    title: title,
    content: content,
    name: name
})

const getBlogSchema = Joi.object({
    id: id.required()
})

module.exports = { createBlogSchema, updateBlogSchema, getBlogSchema}
