import React from 'react'
import axios from 'axios'

function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [isLoading, setLoading] = React.useState(false)

  const onEnter = async () => {
    if (!roomId || !username) {
      return alert('Заполните все поля')
    }
    const obj = {
      roomId,
      username,
    };
    setLoading(true);
    await axios.post('/rooms', obj)
    onLogin(obj)
  };

  return (
    <div className="join-block">
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
      <button disabled={isLoading} onClick={onEnter} className="btn btn-success">
        {isLoading ? 'Вход...' : 'Войти'}
      </button>
    </div>
  );
}

export default JoinBlock;
