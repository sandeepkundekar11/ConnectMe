import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { store } from "./Redux/store";
const SignupPage = React.lazy(() => import("./Pages/MainPage/SignupPage"));
const LoginPage = React.lazy(() => import("./Pages/MainPage/LoginPage"));
const PrivateComponent = React.lazy(() =>
  import("./Pages/HelperPages/PrivateComponent")
);
const Home = React.lazy(() => import("./Pages/MainPage/Home"));
const ProfilePage = React.lazy(() => import("./Pages/MainPage/ProfilePage"));
const ChatWithAiPage = React.lazy(() =>
  import("./Pages/MainPage/ChatWithAiPage")
);
const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
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
          <Routes>
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* private Routes */}

            <Route path="/" element={<PrivateComponent />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/Aichat" element={<ChatWithAiPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};
export default App;
