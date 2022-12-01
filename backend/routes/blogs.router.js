const express = require('express')
const { createBlog, deleteBlog, getAllBlogs, getBlog, getUsers, updateBlog } = require("../controllers/BlogController.js");
const { validatorHandler } = require("../middlewares/validator.handler.js");
const { createBlogSchema, updateBlogSchema, getBlogSchema } = require("../schemas/blog.schema.js");

const router = express.Router()

router.get('/', getAllBlogs)
router.get('/users', getUsers)
router.get('/:id', validatorHandler(getBlogSchema, 'params') ,getBlog)
router.post('/',validatorHandler(createBlogSchema, 'body'), createBlog)
router.put('/:id',validatorHandler(getBlogSchema, 'params'),validatorHandler(updateBlogSchema, 'body'), updateBlog)
router.delete('/:id',validatorHandler(getBlogSchema, 'params'), deleteBlog)


module.exports = router