import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@material-ui/icons";
import React from "react";
import "./Chat.css";
import Chatheader from "./ChatHeader";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <Chatheader />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input placeholder={`test channel`} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>
        <dic className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </dic>
      </div>
    </div>
  );
}

export default Chat;
