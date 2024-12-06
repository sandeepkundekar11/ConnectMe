import { memo, useRef } from "react";

import AiChatUserQuestion from "../HelperPages/AiChatUserQuestion";

const ChatWithAiPage = () => {
  const messageRef = useRef();
  const OnSendMessage = () => {
    messageRef.current.style.height = "auto";
    messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
  };
  return (
    <div className="w-screen h-screen bg-blue-100 pt-[4.5rem] flex ">
      {/* chat Achiver sidebar */}
      <div className="w-80 h-[calc(100vh-4.5rem)] bg-white ">
        {/* head */}
        <div className="flex justify-between p-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-600">Chat Achiver</h1>
            <p className="text-base font-semibold text-gray-400">
              10+ conversation
            </p>
          </div>
          <button className="w-8 h-8 bg-slate-200  flex justify-center items-center rounded-full text-2xl  pb-1 hover:bg-slate-300">
            +
          </button>
        </div>

        {/* chats */}
        <div className="w-full h-3/4">
          {[1, 2, 3, 4, 5].map((ele) => {
            return (
              <div
                className="w-full h-14 hover:bg-slate-200 flex items-center pl-2"
                key={ele}
              >
                <button className="p-2 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"></path>
                  </svg>
                </button>
                <div className="ml-4  text-gray-500 text-sm">
                  what can you do for me ?
                </div>
              </div>
            );
          })}
        </div>

        {/* Delete All Chat Button */}
        <button className="w-40 h-20 ml-2 bg-slate-200 rounded-md text-slate-600 flex flex-col items-center justify-center hover:bg-slate-300 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="1.6em"
            height="1.6em"
            fill="currentColor"
            className="bi bi-trash"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
          </svg>
          <p className="text-base font-semibold ">Clear Achive</p>
        </button>
      </div>

      {/* main chat section */}
      <div className="w-[calc(100vw-20rem)] h-[calc[100vh-4.5rem]] pt-5 relative flex flex-col items-center ">
        <div
          className="w-[800px] bg-white  overflow-auto shadow rounded-md"
          style={{ height: `${window.innerHeight - 200}px` }}
        >
          <AiChatUserQuestion />
          <AiChatUserQuestion />
          <AiChatUserQuestion />
        </div>
        {/* chat input */}
        <div className="w-[800px] shadow-sm mt-2  min-h-14 fixed bottom-5  bg-white p-2 flex rounded-md">
          <textarea
            className="w-11/12 max-h-32 outline-none p-2"
            placeholder="Ask to Ai..."
            name=""
            ref={messageRef}
            onChange={OnSendMessage}
            id=""
          ></textarea>
          <button className="rounded-full h-10 w-10 hover:bg-slate-200 flex justify-center items-center ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="1.3em"
              height="1.3em"
              fill="currentColor"
              className="bi bi-send-fill "
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(ChatWithAiPage);
