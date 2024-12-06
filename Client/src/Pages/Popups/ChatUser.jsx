import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const ChatUser = () => {
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
            <img className="w-12 h-12 bg-slate-500 rounded-md" src="" alt="User" />
            <h1 className="text-sm ml-2 font-semibold text-gray-500">Sandeep N Kundekar</h1>
            <button
                className="w-10 h-10 flex items-center ml-12 rounded-full hover:bg-blue-100"
                onClick={() => setShowPopup(!showPopup)}
            >
                <BsThreeDots className="w-12 h-6" />
            </button>
            {/* popup */}
            {showPopup && (
                <div
                    ref={popupRef}
                    className="w-24 bg-blue-400 shadow-sm absolute top-7 right-1 rounded-md p-2"
                >
                    <p className="text-sm text-white">Option 1</p>
                    <p className="text-sm text-white mt-1">Option 2</p>
                </div>
            )}
        </div>
    );
};

export default ChatUser