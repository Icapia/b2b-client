import {createContext} from "react";

function noop() {}

const ChatContext = createContext({
  chat: null,
  setChat: noop()
})

export default ChatContext;