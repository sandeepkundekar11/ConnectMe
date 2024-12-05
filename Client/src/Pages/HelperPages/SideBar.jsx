import SidebarUserContact from "./SidebarUserContact";

/* eslint-disable react/jsx-key */
const SideBar = () => {
  return (
    <div className="md:w-96 h-[calc(100vh-4.5rem)] bg-white md:static fixed top-[4.5rem] w-full border-t border shadow-xl z-40 ">
      {/* head */}
      <div className="Head flex justify-between px-8 pt-4">
        <h1 className="text-2xl font-bold dark:text-white text-gray-700">
          Chats
        </h1>
        <div className="flex">
          <button className=" flex items-center  font-medium text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
            </svg>
            <p className="pl-1 hover:text-blue-500">User</p>
          </button>
          <button className=" font-medium ml-4 flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
            </svg>
            <p className="pl-1 hover:text-blue-500 ">Group</p>
          </button>
        </div>
      </div>
      {/* search Input */}
      <div className=" flex bg-slate-200 h-10 rounded-3xl items-center p-2 mx-8 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="1.2em"
          className="pl-1"
          height="1.2em"
          fill="currentColor"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
        </svg>
        <input
          type="text"
          className="bg-transparent w-full h-9 outline-none pl-2 text-gray-700 "
          name=""
          placeholder="Search Contact / Chats"
          id=""
        />
      </div>
      {/* added User and Groups will be listed Here */}
      <div className="mt-3">
        {[1, 2, 3, 4].map(() => {
          return <SidebarUserContact />;
        })}
      </div>
    </div>
  );
};
export default SideBar;
