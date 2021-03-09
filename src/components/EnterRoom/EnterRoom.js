import React, { useState } from 'react'
import axios from 'axios'
import './EnterRoom.css'
import Button from '../ui/Button/Button'

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

  const onEnterByKey = e => {
    if (e.key === 'Enter') {
      onEnter()
    }
  }

  return (
    <div className="enter-room">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        onKeyPress={onEnterByKey}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={onEnterByKey}
      />
      <Button
        disabled={isLoading}
        onClick={onEnter}
        buttonText={isLoading ? 'Вход...' : 'Войти'}
      />
    </div>
  )
}

export default EnterRoom
