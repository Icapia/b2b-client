import Image from "next/image";
import {useContext, useState} from "react";
import ChatContext from "../Context/ChatContext";

export function ChatListMessage(props) {
  const message = props.message;
  const [active, setActive] = useState(false);
  const { chat, setChat } = useContext(ChatContext)

  const messageHandler = (e) => {
    setActive(!active);
  }

  const handlerClickChat = (id) => {
    setChat(id);
  }
  
  return(
    <div onClick={() => {messageHandler(); handlerClickChat(props.message.id)}} className={chat == props.message.id ? "ChatListMessage active": "ChatListMessage"}>
      <div className="ChatListMessage-image">
        <Image width={35} height={35} src={`http://localhost:3000/image${message.avatarUrl}`}></Image>
      </div>
      <div className="ChatListMessage-content">
        <div className="ChatListMessage-header">
          <h6>{message.userName}</h6>
          <span>{message.date}</span>
        </div>
        <div className="ChatListMessage-footer">
          <p>{message.lastMessage}</p>
          {
            message.newMessage > 0 ? 
            <span className="counter">{message.newMessage}</span> :
            <span></span>
          }
        </div>
      </div>
    </div>
  )
}