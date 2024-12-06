import { memo } from "react";
import SideBar from "../HelperPages/SideBar";
import ChatSection from "../HelperPages/ChatSection";
import AddUser from "../Popups/AddUser"
const Home = () => {
  return (
    <div className="flex pt-[4.5rem] ">
      {/* sidebar */}
      <div>
        <SideBar onAddUser={()=>
          {
            // 
          }
        }/>
      </div>
      {/* chat Page */}
      <div>
        <ChatSection />
      </div>
      {
        // popups
        <AddUser/>
      }
    </div>
  );
};
export default memo(Home);
