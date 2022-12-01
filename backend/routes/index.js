const blogsRouter = require("./blogs.router.js");
const express = require('express')

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1',router)
    router.use('/blogs', blogsRouter)
}

module.exports = routerApi