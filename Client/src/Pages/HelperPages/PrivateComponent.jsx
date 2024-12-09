import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const PrivateComponent = () => {
  const [isUserAuthorized, setIsUserAuthorized] = useState(true);
  useEffect(() => {
    let ChatToken = localStorage.getItem("chatToken");
    if (ChatToken) {
      setIsUserAuthorized(true);
    } else {
      setIsUserAuthorized(false);
    }
  }, []);
  return (
    <>
      {isUserAuthorized ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
export default PrivateComponent;
