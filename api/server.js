/*  Libraries */
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

/* routers */
const emailRouter = require("./email")

/* Start server */
const server = express()

/* Middlewares */
// application level
server.use(express.json())

// third party
server.use(helmet())
server.use(cors())

// developer
server.use("/email", emailRouter)

// lets user know server is up
server.get("/", (req, res) => {
    res.status(200).send(`<h1>Server is up and running</h1>`)
})

// catch errors
server.use((err, req, res, next) => {
    res.status(500).json({err})
})

module.exports = server