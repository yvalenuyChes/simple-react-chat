import React, { useState, useEffect, useRef } from 'react';
import socket from '../../socket';

function Chat({ users, messages, username, roomId, onAddMessage }) {
  const [messageValue, setMessageValue] = useState('')
  const messagesRef = useRef(null)

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      username,
      roomId,
      text: messageValue,
    });
    onAddMessage({ username, text: messageValue })
    setMessageValue('');
  };

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

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
          {messages.map((message, index) => (
            <li key={index}>
              <div className="message">
                <p>{message.text}</p>
                <div>
                  <span>{message.username}</span>
                </div>
              </div>
            </li>

          ))}
        </ul>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            rows="3"></textarea>
          <button onClick={onSendMessage} type="button" className="btn btn-primary">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
