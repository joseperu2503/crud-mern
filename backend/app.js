import express from "express";
import cors from "cors";
import db from "./database/db.js";
import routerApi from "./routes/index.js";
import "dotenv/config.js";

const port = process.env.PORT;

const app = express()
app.use(cors())
app.use(express.json())
routerApi(app)

try {
    await db.authenticate()
    console.log('conexion exitosa a la BD')
} catch (error) {
    console.log('error de conexion a la BD: ', error)
}


app.listen(8000, () => {
    console.log('server up running in port: ' + port)
})