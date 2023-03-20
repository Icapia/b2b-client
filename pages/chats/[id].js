import { MainLayout } from "../../components/Layouts/MainLayout";
import ChatList from "../../components/Chat/ChatList";
import { ChatContainer } from "../../components/Chat/ChatBox";
import { useState } from "react";
import ChatContext from '../../components/Context/ChatContext';

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


export default function ViewChats(props) {
  const [session, setSession] = useState(true);
  const [chat, setChat] = useState(1);

  const handlerSetSession = () => {
    setSession(!session);
  }

  const handlerSetChat = (id) => {
    setChat(id);
  }

  return (
    <MainLayout name={'View Chats'}>
      <ChatContext.Provider value={{ chat, setChat }}>
      <div className="box">
        <div className="box-left">
          <ChatList messages={messages} view={true} session={session} onChange={handlerSetSession}></ChatList>
        </div>
        <div className="box-right">
          <ChatContainer session={session}></ChatContainer>
        </div>
      </div>
      </ChatContext.Provider>
    </MainLayout>
  )
}