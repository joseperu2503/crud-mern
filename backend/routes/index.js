const blogsRouter = require("./blogs.router.js");
const usersRouter = require("./users.router.js");
const authRouter = require("./auth.router.js");

const express = require('express')

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1',router)
    router.use('/blogs', blogsRouter)
    router.use('/users', usersRouter)
    router.use('/auth', authRouter)
}

module.exports = routerApi