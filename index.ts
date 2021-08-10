/* import server */
import server from "./api/server"

// allow dynamic port
const PORT = process.env.PORT || 5000

/* listen for req in specify port */
server.listen(PORT, () => {
  const isInDevelopmentEnviroment = process.env.PORT ? false : true
  if(isInDevelopmentEnviroment) console.log(`\n=== Server listening on port ${PORT} ===\n`)
})
