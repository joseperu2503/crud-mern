const express = require('express')
const passport = require('passport')
const BlogController = require("../controllers/BlogController.js");
const { validatorHandler } = require("../middlewares/validator.handler.js");
const { createBlogSchema, updateBlogSchema, getBlogSchema } = require("../schemas/blog.schema.js");

const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}),BlogController.index)
router.get('/:id', validatorHandler(getBlogSchema, 'params') ,BlogController.show)
router.post('/',validatorHandler(createBlogSchema, 'body'), BlogController.store)
router.put('/:id',validatorHandler(getBlogSchema, 'params'),validatorHandler(updateBlogSchema, 'body'), BlogController.update)
router.delete('/:id',validatorHandler(getBlogSchema, 'params'), BlogController.destroy)


module.exports = router