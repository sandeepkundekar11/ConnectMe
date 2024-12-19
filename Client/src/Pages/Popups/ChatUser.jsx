import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const ChatUser = ({ userName, OnStartChatting }) => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopup(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex w-full p-1 relative">
            <div className="flex justify-between">
                <div className="w-56 flex">
                    <img className="w-12 h-12 bg-slate-500 rounded-md" src="" alt="User" />
                    <h1 className="text-sm ml-2 w-1/2 font-semibold text-gray-500">
                        {userName}
                    </h1>
                </div>
                <button
                    className={`w-10 h-10 flex items-center ml-12 rounded-full hover:bg-blue-100 ${showPopup ? "bg-blue-100" : ""
                        }`}
                    onClick={() => setShowPopup(!showPopup)}
                >
                    <BsThreeDots className="w-12 h-6" />
                </button>
            </div>
            {/* popup */}
            {showPopup && (
                <div
                    ref={popupRef}
                    className="w-36 text-slate-600 hover:text-blue-400 cursor-pointer p-3 border bg-white shadow-xl absolute top-10 right-20 z-30 rounded-md "
                >
                    {/* popup */}
                    <div className="flex items-center">
                        <MdOutlineMessage />
                        <p className="text-sm  ml-3" onClick={OnStartChatting}>Add User</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatUser;
