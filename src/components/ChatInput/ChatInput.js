import React, { useState } from "react";
import firebase from "firebase"

import "./ChatInput.css";
import db from "../../firebase"
import { useStateValue } from "../../store/StateProvider";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{user}] = useStateValue()
  const sendMessage = (event) => {
    event.preventDefault();

    if (channelId) {
      db.collection('channels').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL
      })
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
