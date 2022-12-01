import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js";
import "dotenv/config.js";

const port = process.env.PORT;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa a la BD')
} catch (error) {
    console.log('error de conexion a la BD: ', error)
}


app.listen(8000, () => {
    console.log('server up running in port: ' + port)
})