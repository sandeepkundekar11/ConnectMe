import { useCallback, useEffect, useMemo, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import PopupProvider from "./PopUpProvider";

// eslint-disable-next-line react/prop-types, no-unused-vars
const AddGroup = ({ onCancel,userData=[] }) => {
  const [selectedUser, setSelectedUsers] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  //   above data we will get from api respose

  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    let users = userData?.map((ele) => {
      return {
        ...ele,
        selected: false,
      };
    });
    setUsersData(users);
  }, []);

  const onUserSelect = useCallback(
    (obj, index) => {
      let newArr = usersData.map((ele, eleIndex) => {
        if (eleIndex === index) {
          return {
            ...ele,
            selected: usersData[index]?.selected ? false : true,
          };
        } else {
          return {
            ...ele,
          };
        }
      });
      setUsersData(newArr);
      // Create a new array of selected users
      const selectedUsers = newArr.filter((user) => user.selected);

      // Update the state with the new array of selected users
      setSelectedUsers(selectedUsers);
    },
    [usersData]
  );

  const filterList = useMemo(() => {
    let selectedUsers = usersData.filter((ele) => {
      if (searchedName === "") {
        return ele;
      }

      return ele.name.includes(searchedName);
    });
    return selectedUsers;
  }, [searchedName, usersData]);

  return (
    <PopupProvider>
      <div className="w-[900px] h-[550px] p-4 bg-white shadow-md rounded-md relative">
        <button
          className="bg-white shadow-md hover:bg-slate-100 rounded-full absolute right-0 -mt-4 -mr-2"
          onClick={onCancel}
        >
          <MdOutlineCancel className="w-8 h-8 " />
        </button>
        <div className="flex w-full h-[94%]">
          {/* half1 */}
          <div className="w-2/4">
            <div className="flex">
              <div>
                <img
                  className="w-20 h-20 rounded-full bg-slate-200"
                  src=""
                  alt=""
                />
                <button className="w-20 rounded-md mt-2 h-9 bg-blue-400"></button>
              </div>
              <h1 className="ml-2 font-semibold text-3xl text-gray-700">
                Create Group
              </h1>
            </div>
            <div className="mt-2">
              {/* add name  */}
              <input
                type="text"
                className="w-11/12 h-10 outline-none border rounded-md pl-2"
                placeholder="Enter Group Name"
                name=""
                id=""
              />

              <h1 className="mt-2 text-xl font-medium text-gray-600">
                Selected Users
              </h1>

              {/* selected user list */}

              <div className="w-11/12 mt-4 h-64 bg-white space-y-2 overflow-scroll overflow-x-hidden">
                {selectedUser.map((ele, index) => {
                  return (
                    <div
                      className="w-full h-12 flex items-center pl-2 rounded-md shadow-sm bg-slate-100"
                      key={index}
                    >
                      {ele.name}
                    </div>
                  );
                })}
                {selectedUser.length === 0 && (
                  <h1 className="text-base font-medium text-gray-600">
                    User not selected
                  </h1>
                )}
              </div>
            </div>
          </div>
          {/* half2 */}
          <div className="w-2/4 h-full border-l-2  ">
            <div className="w-full flex justify-center">
              {/* search user */}
              <input
                className="w-11/12  h-10 pl-2 outline-none bg-slate-100 rounded-md m-auto border-b"
                type="text"
                name=""
                placeholder="Search Users"
                onChange={(e) => setSearchedName(e.target.value)}
                id=""
              />
            </div>
            <div className=" h-[calc(100%-3rem)] overflow-x-hidden overflow-scroll">
              {/* user to select */}
              {filterList.map((ele, index) => {
                return (
                  <div
                    className="w-11/12 space-x-3 flex items-center m-auto rounded-md mt-2 h-12 bg-slate-100 px-4 "
                    key={index}
                  >
                    <p className="w-11/12"> {ele.name}</p>
                    <input
                      type="checkbox"
                      checked={ele?.selected}
                      className="w-5 h-5"
                      onChange={() => {
                        onUserSelect(ele, index);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* add group button */}
        <div className="flex justify-end items-center">
          <button className="w-36 h-10 bg-blue-500 text-white rounded-md shadow-sm">
            Add
          </button>
        </div>
      </div>
    </PopupProvider>
  );
};
export default AddGroup;
