import * as express from 'express'
import * as http from 'http'
import { addUser, users } from './mocks/users'
// import * as io from 'socket.io'
const dotenv = require('dotenv')
const io = require('socket.io')
dotenv.config()
const { PORT } = process.env
const port = PORT ? PORT : 5000
const app = express()
const server = http.createServer(app)
const socket = io(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
}
socket.on('connection', (connection) => {
  connection.on('init', function (msg) {
    addUser()
    socket.emit('newUser', { users: users })
  })
})
app.use(corsMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send('NOT GO, IT IS EXPRESS'))
server.listen(port, () => console.log('\x1b[36m%s\x1b[34m\x1b[0m', `Listenning ${port}`))

export default server
