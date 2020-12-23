import * as express from 'express'
const dotenv = require('dotenv')
dotenv.config()
const { PORT } = process.env
const port = PORT ? PORT : 5000
const app = express()
const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
}

app.use(corsMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send('NOT GO, IT IS EXPRESS'))
console.log('\x1b[36m%s\x1b[34m\x1b[0m', `Listenning ${port}`)
app.listen(port)

export default app
