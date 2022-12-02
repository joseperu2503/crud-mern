const express = require('express')
const UserController = require("../controllers/UserController.js");
const { validatorHandler } = require("../middlewares/validator.handler.js");
const { createUserSchema, updateUserSchema, getUserSchema } = require("../schemas/user.schema.js");

const router = express.Router()

router.get('/', UserController.index)
router.get('/:id', validatorHandler(getUserSchema, 'params') ,UserController.show)
router.post('/',validatorHandler(createUserSchema, 'body'), UserController.store)
router.put('/:id',validatorHandler(getUserSchema, 'params'),validatorHandler(updateUserSchema, 'body'), UserController.update)
router.delete('/:id',validatorHandler(getUserSchema, 'params'), UserController.destroy)
router.get('/:id/blogs',validatorHandler(getUserSchema, 'params'), UserController.blogs)


module.exports = router