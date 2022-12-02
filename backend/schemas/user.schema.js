const Joi = require('joi')

const id = Joi.number().integer().min(1)
const name = Joi.string()
const email = Joi.string()
const pasword = Joi.string()

const createBlogSchema = Joi.object({
    name: name.required(),
    email: email.required(),
    name: name.required(),
})

const updateBlogSchema = Joi.object({
    name: name,
    content: content,
    pasword: pasword
})

const getBlogSchema = Joi.object({
    id: id.required()
})

module.exports = { createBlogSchema, updateBlogSchema, getBlogSchema}
