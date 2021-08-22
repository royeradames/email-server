/*  Libraries */
import {config} from "dotenv"
import express, {Response, Request, NextFunction} from "express"
import helmet from "helmet"
import cors from "cors"

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
server.use(helmet())

// setup allow origin to access this resource
server.use(cors(
    {
        origin: process.env.DEVELOPMENT_WEBSITE_URL || process.env.PRODUCTION_WEBSITE_URL,
    }
))

// developer
server.use("/email", emailRouter)

// lets user know server is up
server.get("/", (req:Request, res:Response) => {
    res.status(200).send(`<h1>Server is up and running</h1>`)
})

// module.exports = server
export default server