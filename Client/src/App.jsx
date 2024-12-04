import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const SignupPage = React.lazy(() => import("./Pages/MainPage/SignupPage"))
const LoginPage =React.lazy(()=>import("./Pages/MainPage/LoginPage"))
const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
export default App;
