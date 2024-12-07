import { memo, useState } from "react";
import SideBar from "../HelperPages/SideBar";
// import ChatSection from "../HelperPages/ChatSection";
import AddUser from "../Popups/AddUser";
import AddGroup from "../Popups/AddGroup";
const Home = () => {
  const [typeOfPopup, setTypeOfPopup] = useState("");
  const PopupComponents = [
    {
      title: "addUser",
      component: (
        <AddUser
          onCancel={() => {
            setTypeOfPopup("");
          }}
        />
      ),
    },
    {
      title: "addGroup",
      component: (
        <AddGroup
          onCancel={() => {
            setTypeOfPopup("");
          }}
        />
      ),
    },
  ];

  const ReturnComponent = (title) => {
    let comp = PopupComponents.find((ele) => {
      return ele.title === title;
    });
    if (!comp) {
      return <></>;
    } else {
      return comp.component;
    }
  };
  return (
    <div className="flex pt-[4.5rem] ">
      {/* sidebar */}
      <div>
        <SideBar
          onAddUser={() => {
            setTypeOfPopup("addUser");
          }}
          onAddGroup={() => {
            setTypeOfPopup("addGroup");
          }}
        />
      </div>
      {/* chat Page */}
      <div>
        {
          <div className="w-[calc(100vw-24rem)] h-[calc(100vh-4.5rem)] bg-blue-200 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold text-slate-600">
              Start Chatting
            </h1>
            <p className="mt-4 text-base font-semibold text-gray-500">
              Select some to chat
            </p>
          </div>
        }
        {/* <ChatSection /> */}
      </div>
      {
        // popups
        ReturnComponent(typeOfPopup)
      }
    </div>
  );
};
export default memo(Home);
