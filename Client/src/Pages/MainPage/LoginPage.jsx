import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import chatHomeImg from "../../assets/chatHome.png";
import googleImag from "../../assets/Google.png";
import AllTosters from "../../Logic/TosterLogic";
import { joinUserApiCall } from "../../Redux/Actions/UserAction";
const LoginPage = () => {
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    const { joinUserDataLoading } = useSelector(state => state.joinUserData)
    // using toster logic
    const { ErrorToster } = AllTosters()
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const [userInfoWarning, setUserInfoWarning] = useState({
        emailWarning: "",
        passwordWarning: ""
    })

    const onInputChange = (e) => {
        const { name, value } = e.target

        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const OnFormSubmit = () => {
        const newWarning = {
            emailWarning: "",
            passwordWarning: ""
        }
        if (userInfo.email.length < 6) {
            newWarning.emailWarning = "email can't be less then 5 characters"
        }
        else {
            newWarning.emailWarning = ""
        }
        // password

        if (userInfo.password.length < 7) {
            newWarning.passwordWarning = "password can't be less then 6 characters"
        }
        else {
            newWarning.passwordWarning = ""
        }


        setUserInfoWarning(newWarning)
        // 

        if (Object.values(newWarning).every((ele) => ele.length === 0)) {
            // api call
            console.log("user info")
            Dispatch(joinUserApiCall("http://localhost:8000/user/login", {
                email: userInfo.email,
                password: userInfo.password,
            }, navigate, ErrorToster))
        }
    }

    useEffect(() => {
        let ChatToken = localStorage.getItem("chatToken");
        if (ChatToken) {
            navigate("/")
        }
    }, [])
    return (
        <div className="w-screen h-screen bg-blue-100 flex justify-center items-center">
            <div className="md:w-96 w-80 md:h-[450px] h-auto">
                <div className="flex mb-3 justify-center items-center">
                    <img src={chatHomeImg} className="h-12 " alt="" />
                    <p className="font-medium text-2xl ml-3">ConnectMe</p>
                </div>

                <div className="w-full md:h-[410px] h-auto bg-white rounded-md shadow-sm  p-5">
                    <h1 className="font-semibold text-2xl text-gray-700">Login</h1>

                    {/* email */}
                    <div className=" w-full float-end  mt-4">
                        <div className="w-full ">
                            <p className=" text-gray-600 text-base font-medium">
                                Email Address
                            </p>
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                onChange={onInputChange}
                                className="w-[95%] h-10 pl-2 mt-2 outline-none rounded-md border focus:border-blue-400"
                                placeholder="youremail@gmail.com"
                            />
                        </div>
                        <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4">{userInfoWarning.emailWarning}</p>
                    </div>

                    {/* password */}
                    <div className="w-full float-start mt-3">
                        <div className="w-full">
                            <p className="text-gray-600 font-medium">Password</p>
                            <input
                                type="text"
                                name="password"
                                value={userInfo.password}
                                onChange={onInputChange}
                                className="w-[95%] pl-2 mt-2 h-10 rounded-md outline-none border focus:border-blue-400"
                                placeholder="Password"
                            />
                        </div>
                        <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4">{userInfoWarning.passwordWarning}</p>
                    </div>

                    {/* submit button */}

                    <button className="h-10 w-full rounded-md bg-blue-500 hover:bg-blue-600 mt-6 text-white flex justify-center items-center " onClick={OnFormSubmit}>

                        {
                            joinUserDataLoading ? <div className="w-7 h-7 bg-transparent rounded-full border-l-2 border-b-2 border-white "></div>
                                : "Login"
                        }

                    </button>
                    <hr />
                    <h1 className="text-xs font-bold text-gray-400 text-center mt-2 mb-2">
                        OR SIGNUP WITH
                    </h1>
                    <button className="w-full h-10 p-2 border rounded-md bg-slate-300 flex justify-center items-center hover:bg-slate-400">
                        <img className=" w-8 h-8 mr-2" src={googleImag} alt="" />
                        <p>Google</p>
                    </button>
                </div>
                <span className=" mt-2 text-center flex justify-center">

                    Don&apos;t have an account?{" "}
                    <NavLink className="text-blue-600 ml-1" to="/Signup">
                        Signup
                    </NavLink>
                </span>
            </div>
        </div>
    );
};
export default memo(LoginPage);
