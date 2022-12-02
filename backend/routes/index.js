const blogsRouter = require("./blogs.router.js");
const usersRouter = require("./users.router.js");

const express = require('express')

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1',router)
    router.use('/blogs', blogsRouter)
    router.use('/users', usersRouter)
}

module.exports = routerApi