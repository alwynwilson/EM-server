
const jsonServer = require('json-server')
const EMServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT

EMServer.use(middleware)
EMServer.use(route)
EMServer.listen(PORT,()=>{console.log(`Media player server started at port ${PORT} and waiting for client request`)})