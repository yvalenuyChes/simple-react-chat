import React, { useState } from 'react'
import axios from 'axios'
import './EnterRoom.css'

function EnterRoom({ onLogin }) {
  const [roomId, setRoomId] = useState('')
  const [username, setUsername] = useState('')
  const [isLoading, setLoading] = useState(false)

  const onEnter = async () => {
    if (!roomId || !username) {
      return alert('Заполните все поля')
    }
    const obj = {
      roomId,
      username,
    }
    setLoading(true)
    await axios.post('/rooms', obj)
    onLogin(obj)
  }

  return (
    <div className="enter-room">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button disabled={isLoading} onClick={onEnter} className="enter-room__button">
        {isLoading ? 'Вход...' : 'Войти'}
      </button>
    </div>
  )
}

export default EnterRoom
