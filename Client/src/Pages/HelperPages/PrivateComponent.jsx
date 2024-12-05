import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const PrivateComponent = () => {
  const [isUserAuthorized, setIsUserAuthorized] = useState(true);
  useEffect(() => {
    let ChatToken = localStorage.getItem("chatToken");
    if (!ChatToken) {
      setIsUserAuthorized(true);
    } else {
      setIsUserAuthorized(false);
    }
  }, []);
  return (
    <>
      {/* toster container */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
