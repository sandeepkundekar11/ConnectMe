import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const SignupPage = React.lazy(() => import("./Pages/MainPage/SignupPage"));
const LoginPage = React.lazy(() => import("./Pages/MainPage/LoginPage"));
const PrivateComponent = React.lazy(() =>
  import("./Pages/HelperPages/PrivateComponent")
);
const Home = React.lazy(() => import("./Pages/MainPage/Home"));
const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* private Routes */}

          <Route path="/" element={<PrivateComponent />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
export default App;
