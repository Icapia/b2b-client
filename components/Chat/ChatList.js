import { ChatListMessage } from './ChatListMessage';
import {useContext, useEffect, useState} from 'react';
import { ButtonDefault } from '../Buttons/Buttons';
import ChatContext from '../Context/ChatContext'


export default function ChatList(props) {
  const messages = props.messages;
  const session = props.session;
  const [sessionTime, setSessionTime] = useState(0);
  const { chat, setChat } = useContext(ChatContext)
  const view = props.view || null;
  const className = view == true ? '' : "mt-20"

  const handlerSetChat = (id) => {
    setChat(id);
  }

  const handlerStartSession = () => {
    props.onChange()
  }

  
  useEffect(() => {
    const timer = setInterval(() => {
      if (session == true) {
        setSessionTime((time) => time + 1);
      }
      if(session == false) {
        setSessionTime((time) => 0);
      }
    }, 60000);

    return () => clearInterval(timer);
  }, [session]);
  
  
  return (
    <div className={"ChatList " + className}>
      {
        view == null ?
          <div className="ChatList-header">
            <ButtonDefault
              onClick={handlerStartSession}
            >
              {session == true ? "Stop Session" : "Start Session"}
            </ButtonDefault>
            <span>Session Time: {sessionTime + " min"}</span>
          </div> : <></>
      }

      <div className={session == true ? "ChatList-list " + className : "ChatList-list disabled mt-20"}>
        {
          messages.map((item, index) => {
            return (
              <ChatListMessage chat={chat} key={index} onChange={(id) => { handlerSetChat(id) }} message={item}>
              </ChatListMessage>
            )
          })
        }
      </div>
    </div>
  )
}

