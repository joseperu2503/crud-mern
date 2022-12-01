import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/BlogController.js";
import { validatorHandler } from "../middlewares/validator.handler.js";
import { createBlogSchema, updateBlogSchema, getBlogSchema } from "../schemas/blog.schema.js";

const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:id', validatorHandler(getBlogSchema, 'params') ,getBlog)
router.post('/',validatorHandler(createBlogSchema, 'body'), createBlog)
router.put('/:id',validatorHandler(getBlogSchema, 'params'),validatorHandler(updateBlogSchema, 'body'), updateBlog)
router.delete('/:id',validatorHandler(getBlogSchema, 'params'), deleteBlog)

export default router