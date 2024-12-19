import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAllUsersApiCall } from "../../Redux/Actions/GetAllUserAction";
import { getSelectedUserInfoApiCall } from "../../Redux/Actions/GetSelecteUserMessagesAction";
import { getSideUserListApiCall } from "../../Redux/Actions/GetSideBarLastAction";
import ChatSection from "../HelperPages/ChatSection";
import SideBar from "../HelperPages/SideBar";
import AddGroup from "../Popups/AddGroup";
import AddUser from "../Popups/AddUser";
const Home = () => {
  // handling the search params
  const [searchParams,] = useSearchParams()
  const [showChatSection, setShowChatSection] = useState(false)
  const [SelectedUserId,setSelectedUserId]=useState("")
  useEffect(() => {
    const Id = searchParams.get('id');
    setSelectedUserId(Id)
    if (Id) {
      setShowChatSection(true)
    }
    else {
      setShowChatSection(false)
    }
  }, [searchParams])
  // end search params handling
  const [typeOfPopup, setTypeOfPopup] = useState(null);
  const Dispatch = useDispatch();
  // get all GroupUser  and get add user
  const { AllUsers } = useSelector((state) => state.GetAllUsers);
  const [GroupUsers, setGroupUsers] = useState([]);
  const [getAddUser, setAddUser] = useState([]);
  useEffect(() => {
    if (typeOfPopup === "addGroup") {
      Dispatch(getAllUsersApiCall("http://localhost:8000/user/getAllUser/All"));
    } else if (typeOfPopup === "addUser") {
      Dispatch(
        getAllUsersApiCall("http://localhost:8000/user/getAllUser/user")
      );
    }
  }, [Dispatch, typeOfPopup]);

  useEffect(() => {
    setGroupUsers(AllUsers);
    setAddUser(AllUsers);
  }, [AllUsers, Dispatch]);

  // get All groups and  get add user ends

  // get SideBar Info
  const { SideBarList } = useSelector(state => state.sideBarInfo)
  const [SideBarInfo, setSideBarInfo] = useState([])

  useEffect(() => {
    Dispatch(getSideUserListApiCall())
  }, [Dispatch])
  useEffect(() => {
    setSideBarInfo(SideBarList)
  }, [SideBarList])

  //  end of side bar info


  // getting selected userInfo and messages

  const [SelectedUserInfoMessages, setSelectedUserInfoMessages] = useState({})
  const { SelectedUserInfo } = useSelector((state) => state.GetSelectedUserMessages)


  useEffect(() => {
    let selectedUserId = searchParams.get("id")
    Dispatch(getSelectedUserInfoApiCall(selectedUserId))
  }, [Dispatch, searchParams])

  useEffect(() => {
    setSelectedUserInfoMessages(SelectedUserInfo)
  }, [SelectedUserInfo])

  // get selected userinfo and messages Ends


 

  // popup component Display Array
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
          Info={SideBarInfo}
          SelectedUserID={SelectedUserId}
        />
      </div>
      {/* chat Page */}
      <div>
        {
          showChatSection ?
            <ChatSection userInfoMessages={SelectedUserInfoMessages} ReceiverId={SelectedUserId}/> :
            <div className="w-[calc(100vw-24rem)] h-[calc(100vh-4.5rem)] bg-blue-200 flex flex-col justify-center items-center">
              <h1 className="text-4xl font-semibold text-slate-600">
                Start Chatting
              </h1>
              <p className="mt-4 text-base font-semibold text-gray-500">
                Select some to chat
              </p>
            </div>
        }
      </div>
      {
        // popups
        ReturnComponent(typeOfPopup)
      }
    </div>
  );
};
export default memo(Home);
