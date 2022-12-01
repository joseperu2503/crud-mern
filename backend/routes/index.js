import blogsRouter from "./blogs.router.js";
import express from "express";


function routerApi(app){
    const router = express.Router()
    app.use('/api/v1',router)
    router.use('/blogs', blogsRouter)
}

export default routerApi