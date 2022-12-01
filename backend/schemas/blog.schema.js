import Joi from "joi";

const id = Joi.number().integer().min(1)
const title = Joi.string()
const content = Joi.string()

export const createBlogSchema = Joi.object({
    title: title.required(),
    content: content.required()
})

export const updateBlogSchema = Joi.object({
    title: title,
    content: content
})

export const getBlogSchema = Joi.object({
    id: id.required()
})