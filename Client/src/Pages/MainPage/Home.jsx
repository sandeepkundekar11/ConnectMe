import { memo } from "react";
import SideBar from "../HelperPages/SideBar";
import ChatSection from "../HelperPages/ChatSection";

const Home = () => {
  return (
    <div className="flex pt-[4.5rem] ">
      {/* sidebar */}
      <div>
        <SideBar />
      </div>
      {/* chat Page */}
      <div>
        <ChatSection />
      </div>
    </div>
  );
};
export default memo(Home);
