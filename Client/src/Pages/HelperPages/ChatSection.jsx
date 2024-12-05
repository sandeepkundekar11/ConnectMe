import UserStatus from "./UserStatus";

const ChatSection = () => {
  return (
    <div className="w-[calc(100vw-24rem)] h-[calc(100vh-4.5rem)]  relative">
      {/* user Head */}
      <div className="w-[calc(100vw-24rem)] h-20  bg-white  flex justify-start items-center fixed top-[4.5rem]">
        <UserStatus />
      </div>
      {/* all chat Container */}
      <div className="h-[calc(100%-4.5rem)] w-full bg-blue-200"></div>
      {/* send message bottom bar */}
      <div className="fixed bottom-0 w-[calc(100vw-24rem)] h-20 bg-white shadow-md">
        <textarea
          name=""
          id=""
          className="w-3/4 bg-slate-200 rounded-md outline-none border"
        />
      </div>
    </div>
  );
};
export default ChatSection;
