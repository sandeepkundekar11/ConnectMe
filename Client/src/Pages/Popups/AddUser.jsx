/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";

import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import AllTosters from "../../Logic/TosterLogic";
import { AddUserApiCall } from "../../Redux/Actions/AddUserAction";
import ChatUser from "./ChatUser";
import PopupProvider from "./PopUpProvider";

const AddUser = ({ onCancel, Users = [] }) => {

  const { SuccessToster } = AllTosters()
  // calling the add UserInfo
  const Dispatch = useDispatch()
  return (
    <PopupProvider>
      <div className="w-96 h-[450px] bg-white rounded-md shadow-lg relative p-4">
        <button
          className="bg-white shadow-md hover:bg-slate-100 rounded-full absolute right-0 -mt-4 -mr-2"
          onClick={onCancel}
        >
          <MdOutlineCancel className="w-8 h-8 " />
        </button>

        <div className="w-full h-full mt-3 pl-2 ">
          <h1 className="text-start font-bold text-gray-700 text-xl">
            Search by Name
          </h1>
          <div className="flex w-[95%] mt-4 bg-blue-50 h-10 items-center pl-1 rounded-md border">
            <CiSearch className="w-8 h-8" />
            <input
              className="w-full bg-transparent outline-none pl-2"
              type="text"
              placeholder="Search Contact"
              name=""
              id=""
            />
          </div>
          {/* user List */}
          <div className="overflow-auto h-80 mt-2">
            {Users?.map((ele, index) => {
              return <ChatUser key={index} userName={ele?.name} OnStartChatting={() => {
                Dispatch(AddUserApiCall(ele?._id,SuccessToster,onCancel))

              }} />;
            })}
          </div>
        </div>
      </div>
    </PopupProvider>
  );
};
export default AddUser;
