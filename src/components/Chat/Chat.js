import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";

import "./Chat.css";
import db from "../../firebase";
import Message from "../Message/Message";
import ChatInput from '../ChatInput/ChatInput'

const Chat = () => {
  const { channelId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .onSnapshot((snap) => setRoomDetails(snap.data()));
    }
    db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => {
        setRoomMessages(snap.docs.map((doc) => doc.data()));
        console.log(roomMessages)
      });
  }, [channelId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
            key={(timestamp + user)}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={channelId} />
    </div>
  );
};

export default Chat;
