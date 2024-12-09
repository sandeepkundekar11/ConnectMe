
import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import chatHomeImg from "../../assets/chatHome.png"
import googleImag from "../../assets/Google.png"
import AllTosters from "../../Logic/TosterLogic"
import { joinUserApiCall } from "../../Redux/Actions/UserAction"
const SignupPage = () => {
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    const { joinUserDataLoading } = useSelector(state => state.joinUserData)
    // using toster logic
    const { ErrorToster } = AllTosters()
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        privacy: 0
    })

    const [userWarnings, setUserWarnings] = useState({
        nameWarning: "",
        emailWarning: "",
        passwordWarning: "",
        privacyWaring: ""
    })
    // input change
    const onInputChange = (e) => {
        const { name, value } = e.target
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }
    const onFormSubmit = () => {
        //   name should be greater then 2 characters
        // email should be greater then 5 characters
        //password should be greater then 6 characters
        // and privacy should be selected

        let newWarnings = {
            nameWarning: "",
            emailWarning: "",
            passwordWarning: "",
            privacyWaring: "",
        }
        // name
        if (userInfo.name.length < 3) {
            newWarnings.nameWarning = "name can't be less then 2 characters"
        }
        else {
            newWarnings.nameWarning = ""
        }
        // email

        if (userInfo.email.length < 6) {
            newWarnings.emailWarning = "email can't be less then 5 characters"
        }
        else {
            newWarnings.emailWarning = ""
        }

        // password

        if (userInfo.password.length < 7) {
            newWarnings.passwordWarning = "password can't be less then 6 characters"
        }
        else {
            newWarnings.passwordWarning = ""
        }
        // privacy
        if (userInfo.privacy === 0) {
            newWarnings.privacyWaring = "Please select the privacy"
        }
        else {
            newWarnings.privacyWaring = ""
        }

        setUserWarnings(newWarnings)
        // 
        if (Object.values(newWarnings).every((ele) => ele.length === 0)) {
            // api call 
            console.log(userInfo)

            Dispatch(joinUserApiCall("http://localhost:8000/user/signup", {
                name: userInfo.name,
                email: userInfo.email,
                password: userInfo.password,
                privacy: userInfo.privacy === 1
            }, navigate, ErrorToster))
            // 
        }
    }

    // 

    useEffect(() => {
        let ChatToken = localStorage.getItem("chatToken");
        if (ChatToken) {
            navigate("/")
        }
    }, [])
    return (
        <div className="w-screen h-screen bg-blue-100 flex justify-center items-center">

            <div className="md:w-[550px] w-80 md:min-h-[450px] max-h-max h-auto">
                <div className="flex mb-3 justify-center items-center">
                    <img src={chatHomeImg} className="h-12 " alt="" />
                    <p className="font-medium text-2xl ml-3">ConnectMe</p>
                </div>
                {/* main form */}
                <div className="w-full md:min-h-[410px] max-h-max h-auto bg-white rounded-md shadow-sm  p-5">
                    <h1 className="font-semibold text-2xl text-gray-700">Create Account</h1>

                    {/* form */}
                    {/* 1 */}
                    <div className="md:flex mt-3 w-full  ">
                        <div className=" md:w-2/4 w-full float-start">
                            <div className="w-full">
                                <p className="text-gray-600 font-medium">Your Name</p>
                                <input type="text" name="name" value={userInfo.name} onChange={onInputChange} className="w-[95%] pl-2 mt-2 h-10 rounded-md outline-none border focus:border-blue-400" placeholder="YourName" />
                            </div>
                            <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4">{userWarnings.nameWarning}</p>
                        </div>

                        <div className="md:w-2/4 w-full float-end md:mt-0 mt-2">
                            <div className="w-full md:ml-3">
                                <p className=" text-gray-600 text-base font-medium">Email Address</p>
                                <input type="text" name="email" onChange={onInputChange} value={userInfo.email} className="w-[95%] h-10 pl-2 mt-2 outline-none rounded-md border focus:border-blue-400" placeholder="youremail@gmail.com" />
                            </div>
                            <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4">{userWarnings.emailWarning}</p>
                        </div>

                    </div>

                    {/* 2 */}
                    <div className="md:flex  w-full  md:mt-4 mt-2">
                        <div className="md:w-2/4 w-full float-start">
                            <div className="w-full">
                                <p className="text-gray-600 font-medium">Password</p>
                                <input type="text" value={userInfo.password} onChange={onInputChange} name="password" className="w-[95%] pl-2 mt-2 h-10 rounded-md outline-none border focus:border-blue-400" placeholder="Password" />
                            </div>
                            <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4">{userWarnings.passwordWarning}</p>
                        </div>

                        <div className="md:w-2/4 w-full md:mt-0 mt-2 float-end">
                            <div className="w-full md:ml-3">
                                <p className=" text-gray-600 text-base font-medium">Account Privacy</p>
                                <select name="privacy" className="w-[95%] h-10 border rounded-md mt-2 outline-none focus:border-blue-400" onChange={onInputChange}>
                                    <option value={0}>Select Privacy</option>
                                    <option value={1}>Private</option>
                                    <option value={2}>Public</option>
                                </select>
                            </div>
                            <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4">{userWarnings.privacyWaring}</p>
                        </div>

                    </div>
                    {/* submit button */}

                    <button onClick={onFormSubmit} className="h-10 w-full rounded-md bg-blue-500 hover:bg-blue-600 mt-6 mb-3  text-white flex justify-center items-center ">

                        {
                            joinUserDataLoading ? <div className="w-7 h-7 bg-transparent rounded-full border-l-2 border-b-2 border-white "></div>
                                : "Account Register"
                        }


                    </button>

                    <hr />
                    <h1 className="text-xs font-bold text-gray-400 text-center mt-2 mb-2">OR SIGNUP WITH</h1>
                    <button className="w-full h-10 p-2 border rounded-md bg-slate-300 flex justify-center items-center hover:bg-slate-400">
                        <img className=" w-8 h-8 mr-2" src={googleImag} alt="" />
                        <p>Google</p>
                    </button>
                </div>
                <span className=" flex  mt-2 justify-center text-center">Already have an account? <NavLink className="ml-1 text-blue-600" to="/login">Login</NavLink></span>
            </div>
        </div>
    )
}
export default memo(SignupPage)