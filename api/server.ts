/*  Libraries */
import express, {Response, Request, ErrorRequestHandler} from "express"
import helmet from "helmet"

/* routers */
import emailRouter from "./email"

/* Start server */
const server = express()

/* Middlewares */
// application level
server.use(express.json())

// third party
server.use(helmet())







// module.exports = server
export default server