import chatHomeImg from "../../assets/chatHome.png";
import SingleChat from "../../assets/SingleChat.png";
import AiChatImg from "../../assets/AiChat.png";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  useEffect(() => {
    const OutsideClick = (event) => {
      // if we click on popup then popup will not close
      if (!event.target.closest(".ProfilePopup")) {
        setShowProfilePopup(false);
      }
      //   if we click on image icon then popup should open
      if (event.target.closest(".imageIcon")) {
        setShowProfilePopup(true);
      }
    };

    if (showProfilePopup) {
      window.addEventListener("click", OutsideClick);
    }

    return () => {
      window.removeEventListener("click", OutsideClick);
    };
  }, [showProfilePopup]);
  return (
    <div className="w-screen h-[4.5rem] bg-white shadow-md flex fixed top-0">
      <div className="h-full w-20 border pl-2 p-3 flex justify-center items-center">
        <img src={chatHomeImg} alt="" />
      </div>

      <div className="flex h-full items-center ml-6 space-x-6 w-5/6">
        {/* chat icon */}
        <button className="w-[3rem] h-[3rem] bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-all">
          <img src={SingleChat} alt="" />
        </button>

        {/* Ai chat icons */}
        <button className="w-[3rem] h-[3rem] bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-all">
          <img src={AiChatImg} alt="" />
        </button>
      </div>
      <div className="w-1/6 flex justify-end pr-4 items-center relative">
        <img
          className=" imageIcon w-14 h-14 rounded-full bg-slate-600"
          src=""
          alt=""
          onClick={() => setShowProfilePopup(!showProfilePopup)}
        />

        {showProfilePopup && (
          <div className="ProfilePopup w-60 h-64  absolute bg-white border top-20 right-4 shadow-lg"></div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
