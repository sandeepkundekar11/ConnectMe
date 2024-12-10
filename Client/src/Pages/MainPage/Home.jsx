import { memo, useEffect, useState } from "react";
import SideBar from "../HelperPages/SideBar";
// import ChatSection from "../HelperPages/ChatSection";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersApiCall } from "../../Redux/Actions/GetAllUserAction";
import AddGroup from "../Popups/AddGroup";
import AddUser from "../Popups/AddUser";
const Home = () => {
  const [typeOfPopup, setTypeOfPopup] = useState("");
  const Dispatch = useDispatch()
  // get all GroupUser  and get add user
  const { AllUsers } = useSelector(state => state.GetAllUsers)
  const [GroupUsers, setGroupUsers] = useState([])
  const [getAddUser, setAddUser] = useState([])
  useEffect(() => {
    if (typeOfPopup === "addGroup") {
      Dispatch(getAllUsersApiCall("http://localhost:8000/user/getAllUser/All"))
    }
    else if (typeOfPopup === "addUser") {
      Dispatch(getAllUsersApiCall("http://localhost:8000/user/getAllUser/user"))
    }
  }, [typeOfPopup])

  useEffect(() => {
    setGroupUsers(AllUsers)
    setAddUser(AllUsers)
  }, [AllUsers])

  // get All groups and  get add user ends



  const PopupComponents = [
    {
      title: "addUser",
      component: (
        <AddUser
          Users={getAddUser}
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
          userData={GroupUsers}
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
