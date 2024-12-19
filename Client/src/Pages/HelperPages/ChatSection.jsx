import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AllTosters from "../../Logic/TosterLogic";
import { SendMessageApiCall } from "../../Redux/Actions/SendMessageAction";
import MessageBlock from "./MessageBlock";
import UserStatus from "./UserStatus";
// eslint-disable-next-line react/prop-types
const ChatSection = ({ userInfoMessages = {}, ReceiverId }) => {
  const messageContainerRef = useRef()
  const InputRef = useRef()
  const Dispatch = useDispatch()
  const { ErrorToster } = AllTosters()
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
    }

  }, [])

  //send message info
  const [Message, setMessage] = useState("")
  const [Messages, setMessages] = useState([])
  useEffect(() => {
    setMessages(userInfoMessages?.messages)
  }, [userInfoMessages])
  const onInputChange = (e) => {
    InputRef.current.style.height = "auto"
    InputRef.current.style.height = `${InputRef.current.scrollHeight}px`
    setMessage(e.target.value)
  }

  const SendMessage = () => {
    if (Message.length > 0) {
      Dispatch(SendMessageApiCall(ReceiverId, Message, ErrorToster))
      setMessage("")
      InputRef.current.style.height = "auto"
    }
  }



  return (
    <div className="w-[calc(100vw-24rem)] h-[calc(100vh-4.5rem)]  relative">
      {/* user Head */}
      <div className="w-[calc(100vw-24rem)] h-20  bg-white  flex justify-start items-center fixed top-[4.5rem]">
        <UserStatus info={{ name: userInfoMessages?.user.name, status: userInfoMessages?.user.status, profile: userInfoMessages?.user.profile }} />
      </div>
      {/* all chat Container */}
      <div className="h-[calc(100%-4.5rem)] w-full bg-blue-200 flex  flex-col-reverse overflow-scroll" ref={messageContainerRef}>
        {
          Messages?.map((message) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <MessageBlock info={{ content: message.content, senderId: message?.sender?._id, time: message?.time }} />
            )
          })
        }
      </div>
      {/* send message bottom bar */}
      <div className="fixed bottom-0 w-[calc(100vw-24rem)] h-auto  bg-white shadow-md flex justify-center items-end py-4">
        <textarea
          name=""
          id=""
          ref={InputRef}
          onChange={onInputChange}
          value={Message}
          placeholder="Send Message..."
          className="w-3/4 bg-slate-100 rounded-md outline-none border pl-2 p-1 max-h-48 "
        />
        <button className="rounded-full h-10 w-10 hover:bg-slate-200 flex justify-center items-center ml-2" onClick={SendMessage}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.3em" height="1.3em" fill="currentColor"
            className="bi bi-send-fill ">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z">
            </path></svg>
        </button>
      </div>
    </div>
  );
};
export default ChatSection;
