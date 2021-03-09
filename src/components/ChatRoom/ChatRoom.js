import React, { useState, useEffect, useRef } from 'react'
import socket from '../../socket'
import './ChatRoom.css'
import Button from '../ui/Button/Button'

function ChatRoom({ users, messages, username, roomId, onAddMessage }) {


  const [messageValue, setMessageValue] = useState('')

  const messagesRef = useRef(null)

  const onSendMessage = () => {
    if (messageValue === '') {
      alert('Введите сообщение')
    } else {
      socket.emit('ROOM:NEW_MESSAGE', {
        username,
        roomId,
        text: messageValue,
        date: new Date().toLocaleTimeString()
      })
      onAddMessage({ username, text: messageValue, date: new Date().toLocaleTimeString() })
      setMessageValue('')
    }
  }


  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999)
  }, [messages])

  const onEnterByKey = e => {
    if (e.key === 'Enter') {
      onSendMessage()
    }
  }


  return (
    <div className="chat">
      <div className="chat-users">
        Комната: <b>{roomId}</b>
        <hr />
        <b>Онлайн ({users.length}):</b>
        <ul>
          {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="chat-messages">
        <ul ref={messagesRef} className="messages">
          {
            messages.map((message, index) => (
              <li key={index}>
                <div className="message">
                  <p>{message.text}</p>
                  <div className="message-info">
                    <span>{message.username}</span>
                    <span>{message.date}</span>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            onKeyDown={onEnterByKey}
            rows="3"></textarea>
          <Button
            buttonText={"Отправить"}
            onClick={onSendMessage}
          />
        </form>
      </div>
    </div>
  )
}

export default ChatRoom
