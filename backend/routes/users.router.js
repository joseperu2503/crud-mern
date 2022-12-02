const express = require('express')
const UserController = require("../controllers/UserController.js");
const { validatorHandler } = require("../middlewares/validator.handler.js");
const { createBlogSchema, updateBlogSchema, getBlogSchema } = require("../schemas/blog.schema.js");

const router = express.Router()

router.get('/', UserController.index)
router.get('/:id', validatorHandler(getBlogSchema, 'params') ,UserController.show)
router.post('/',validatorHandler(createBlogSchema, 'body'), UserController.store)
router.put('/:id',validatorHandler(getBlogSchema, 'params'),validatorHandler(updateBlogSchema, 'body'), UserController.update)
router.delete('/:id',validatorHandler(getBlogSchema, 'params'), UserController.destroy)
router.get('/:id/blogs',validatorHandler(getBlogSchema, 'params'), UserController.blogs)


module.exports = router