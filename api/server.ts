/*  Libraries */
import {config} from "dotenv"
import express, {Response, Request} from "express"
// import helmet from "helmet"

/* routers */
import emailRouter from "./email"

/* loads environment variables from a .env */
config()

/* Start server */
const server = express()

/* Middlewares */
// application level
server.use(express.json())

// third party
// server.use(helmet())

// developer
server.use("/email", emailRouter)

// lets user know server is up
server.get("/", (req:Request, res:Response) => {
    res.status(200).send(`<h1>Server is up and running</h1>`)
})

// module.exports = server
export default server