// import express from "express";
// import cors from "cors";
// import db from "./database/db.js";
// import routerApi from "./routes/index.js";
// import "dotenv/config.js";
// import { logErrors, errorHandler, boomErrorHandler } from "./middlewares/error.handler.js";

const express = require('express')
const cors = require('cors')
const db = require('./config/database.js')
const routerApi = require("./routes/index.js");
require('dotenv').config()
const { logErrors, errorHandler, boomErrorHandler } = require("./middlewares/error.handler.js");
const { checkApiKey } = require('./middlewares/auth.handler')

const port = process.env.PORT || 3000;

const app = express()
app.use(cors())
app.use(express.json())
require('./utils/auth/index')
routerApi(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.get('/ruta-prueba',checkApiKey, (req, res) => {
    res.send('Ruta de prueba')
})

// try {
//     await db.authenticate()
//     console.log('conexion exitosa a la BD')
// } catch (error) {
//     console.log('error de conexion a la BD: ', error)
// }


app.listen(8000, () => {
    console.log('server up running in port: ' + port)
})