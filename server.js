const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.json())

const rooms = new Map()

app.get('/rooms/:id', (req, res) => {
  const { id: roomId } = req.params
  const obj = rooms.has(roomId)
    ? {
      users: [...rooms.get(roomId).get('users').values()],
      messages: [...rooms.get(roomId).get('messages').values()],
    }
    : { users: [], messages: [] }
  res.json(obj)
})

app.post('/rooms', (req, res) => {
  const { roomId, username } = req.body
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ['users', new Map()],
        ['messages', []],
      ]),
    )
  }
  res.send()
})

io.on('connection', (socket) => {
  console.log('user connected', socket.id)
})

server.listen(9999, (err) => {
  if (err) {
    throw Error(err)
  }
  console.log('server start')
})
