import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const MessageBlock = ({ info }) => {
  const { content, senderId, time } = info;
  const [IsMe, setIsMe] = useState(false);
  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("chatUser"))._id;
    if (senderId === userId) {
      setIsMe(true);
    } else {
      setIsMe(false);
    }
  }, []);
  return (
    <div
      className={` px-3 mt-2 flex ${IsMe ? "justify-end" : "justify-start"}`}
    >
      <div className="flex items-start space-x-3">
        {!IsMe && (
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        )}
        <div>
          <div className="bg-gray-100 text-gray-800 max-w-72 rounded-lg px-4 py-2 break-words">
            <p className="text-sm">{content}</p>
          </div>
          <p className="text-xs text-gray-500 mt-1">{time}</p>
        </div>
        {IsMe && (
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        )}
      </div>
    </div>
  );
};
export default MessageBlock;
