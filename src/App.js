import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import socket from './socket'
import reducer from './reducer'
import EnterRoom from './components/EnterRoom/EnterRoom'
import ChatRoom from './components/ChatRoom/ChatRoom'

import './style/nullstyle.css'

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    username: null,
    date: null,
    users: [],
    messages: [],
  })

  const setUsers = users => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    })
  }

  const addMessage = ({ text, username, date }) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: {
        text,
        username,
        date
      }
    })
  }

  const onLogin = async (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj,
    })
    socket.emit('ROOM:JOIN', obj)
    const { data } = await axios.get(`/rooms/${obj.roomId}`)
    dispatch({
      type: 'SET_DATA',
      payload: data,
    })
  }

  useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers)
    socket.on('ROOM:NEW_MESSAGE', addMessage)
  }, [])

  window.socket = socket

  return (
    <div className="wrapper">
      {!state.joined ? (
        <EnterRoom onLogin={onLogin} />
      ) : (
          <ChatRoom {...state} onAddMessage={addMessage} />
        )}
    </div>
  )
}

export default App
