import {useContext, useState} from 'react'
import ChatList from '../components/Chat/ChatList.js'
import { ChatContainer } from '../components/Chat/ChatBox.js'
import ChatUser from '../components/Chat/ChatUser.js'
import { MainLayout } from '../components/layouts/MainLayout.js';
import ChatContext from '../components/Context/ChatContext';
import Notification from "../components/Chat/Notification";

const messages = [
  {
    id: 1,
    userName: "Lindsey Stroud",
    avatarUrl: "/avatars/Avatar04.jpg",
    date: "23 Jan 2022, 12:34",
    lastMessage: "Your idea for this application is nice!",
    newMessage: 3
  },
  {
    id: 2,
    userName: "Nicci Troiani",
    avatarUrl: "/avatars/Avatar05.jpg",
    date: "23 Jan 2022, 12:34",
    lastMessage: "Nicci is typing a message...",
    newMessage: 0
  },
  {
    id: 3,
    userName: "Rebecca Moore",
    avatarUrl: "/avatars/Avatar02.jpg",
    date: "23 Jan 2022, 12:34",
    lastMessage: "You: I’m not sure about this..",
    newMessage: 2
  },
  {
    id: 4,
    userName: "Jones Dermot",
    avatarUrl: "/avatars/Avatar01.jpg",
    date: "23 Jan 2022, 12:34",
    lastMessage: "Your idea for this application is nice! ",
    newMessage: 0
  },
  {
    id: 5,
    userName: "Lindsey Stroud",
    avatarUrl: "/avatars/Avatar04.jpg",
    date: "23 Jan 2022, 12:34",
    lastMessage: "Your idea for this application is nice!",
    newMessage: 3
  },
  {
    id: 6,
    userName: "Nicci Troiani",
    avatarUrl: "/avatars/Avatar05.jpg",
    date: "23 Jan 2022, 12:34",
    lastMessage: "Nicci is typing a message...",
    newMessage: 0
  },
  {
    id: 7,
    userName: "Rebecca Moore",
    avatarUrl: "/avatars/Avatar02.jpg",
    date: "23 Jan 2022, 12:34",
    lastMessage: "You: I’m not sure about this..",
    newMessage: 2
  },
  {
    id: 8,
    userName: "Jones Dermot",
    avatarUrl: "/avatars/Avatar01.jpg",
    date: "23 Jan 2022, 12:34",
    lastMessage: "Your idea for this application is nice! ",
    newMessage: 0
  },
]

const pageData = {
  pageTitle: 'Chat Manager'
}

export default function ChatManager() {
  const [session, setSession] = useState(false);
  const [chat, setChat] = useState(1);

  const handlerSetSession = () => {
    setSession(!session);
  }

  const handlerSetChat = (id) => {
    setChat(id);
  }
  
  return (
    <MainLayout name={pageData.pageTitle}>
      <ChatContext.Provider value={{ chat, setChat }}>
        <div className="box">
          <div className="box-left">
            <ChatUser></ChatUser>
            <ChatList messages={messages} session={session} onChange={handlerSetSession}></ChatList>
          </div>
          <div className="box-right">
            {
              session == true ?
                <ChatContainer session={session}></ChatContainer>:
                <>
                  <Notification/>
                  <ChatContainer className={"disabled"}></ChatContainer>
                </>
            }
          </div>
        </div>
      </ChatContext.Provider>
    </MainLayout>
  )
}
