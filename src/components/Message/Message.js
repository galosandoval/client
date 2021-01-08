import React from "react"
import './Message.css'

const Message = ({message, timestamp, user, userImg}) => {
  return (
    <div className="message">
      <img src={userImg} alt="" />
      <div className="message__info">
        <h4>
          {user}<span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span> {new Date(timestamp?.toDate()).toUTCString()}
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message