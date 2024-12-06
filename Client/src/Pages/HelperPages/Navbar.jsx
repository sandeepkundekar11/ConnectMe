import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AiChatImg from "../../assets/AiChat.png";
import chatHomeImg from "../../assets/chatHome.png";
import SingleChat from "../../assets/SingleChat.png";
const Navbar = () => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const navigate = useNavigate()
  const path = window.location.pathname;


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
    <div className="w-screen h-[4.5rem] bg-white border flex fixed top-0 z-50">
      <div className="h-full w-20 border pl-2 p-3 flex justify-center items-center">
        <img src={chatHomeImg} alt="" />
      </div>

      <div className="flex h-full items-center ml-6 space-x-6 w-3/4">
        {/* chat icon */}
        <button className={`${path==="/" ? "bg-slate-300":"bg-gray-200 "} w-[3rem] h-[3rem] rounded-full p-2 hover:bg-gray-300 transition-all"`} onClick={() => {
          navigate("/")
        }
        }>
          <img src={SingleChat} alt="" />
        </button>

        {/* Ai chat icons */}
        <button className={` ${path==="/Aichat"?"bg-slate-300":"bg-gray-200"} w-[3rem] h-[3rem]  rounded-full p-2 hover:bg-gray-300 transition-all`}onClick={()=>
          {
            navigate("/Aichat")
          }
        }>
          <img src={AiChatImg} alt="" />
        </button>
      </div>
      <div className="w-1/4 flex justify-end pr-4 items-center relative">
        <img
          className=" imageIcon w-14 h-14 rounded-full bg-slate-600"
          src=""
          alt=""
          onClick={() => setShowProfilePopup(!showProfilePopup)}
        />

        {showProfilePopup && (
          <div className="ProfilePopup w-52 h-auto   absolute bg-white border top-20 right-4 shadow-lg">
            <ul className="list-none p-4 space-y-6">

              <li className="flex items-center cursor-pointer" onClick={()=>
                {
                  navigate("/profile")
                  setShowProfilePopup(false)
                }
              }>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.3em" height="1.3em" fill="currentColor" className="bi bi-person"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path></svg>
                <p className="ml-2 hover:text-blue-600 font-medium ">Profile</p>
              </li>
              <li className="flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.3em" height="1.3em" fill="currentColor" className="bi bi-gear"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"></path></svg>
                <p className="ml-2 hover:text-blue-600 font-medium">Setting</p>
              </li>
              <li className="flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.3em" height="1.3em" fill="currentColor" className="bi bi-power"><path d="M7.5 1v7h1V1z"></path><path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"></path></svg>
                <p className="ml-2 hover:text-blue-600 font-medium">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
