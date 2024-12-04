
import { memo } from "react"
import { NavLink } from "react-router-dom"
import chatHomeImg from "../../assets/chatHome.png"
import googleImag from "../../assets/Google.png"
const SignupPage = () => {
    return (
        <div className="w-screen h-screen bg-blue-100 flex justify-center items-center">

            <div className="md:w-[550px] w-80 md:h-[450px] h-auto">
                <div className="flex mb-3 justify-center items-center">
                    <img src={chatHomeImg} className="h-12 " alt="" />
                    <p className="font-medium text-2xl ml-3">ConnectMe</p>
                </div>
                {/* main form */}
                <div className="w-full md:h-[410px] h-auto bg-white rounded-md shadow-sm  p-5">
                    <h1 className="font-semibold text-2xl text-gray-700">Create Account</h1>

                    {/* form */}
                    {/* 1 */}
                    <div className="md:flex mt-3 w-full  ">
                        <div className=" md:w-2/4 w-full float-start">
                            <div className="w-full">
                                <p className="text-gray-600 font-medium">Your Name</p>
                                <input type="text" className="w-[95%] pl-2 mt-2 h-10 rounded-md outline-none border focus:border-blue-400" placeholder="YourName" />
                            </div>
                            <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4"></p>
                        </div>

                        <div className="md:w-2/4 w-full float-end md:mt-0 mt-2">
                            <div className="w-full md:ml-3">
                                <p className=" text-gray-600 text-base font-medium">Email Address</p>
                                <input type="text" className="w-[95%] h-10 pl-2 mt-2 outline-none rounded-md border focus:border-blue-400" placeholder="youremail@gmail.com" />
                            </div>
                            <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4"></p>
                        </div>

                    </div>

                    {/* 2 */}
                    <div className="md:flex  w-full  md:mt-4 mt-2">
                        <div className="md:w-2/4 w-full float-start">
                            <div className="w-full">
                                <p className="text-gray-600 font-medium">Password</p>
                                <input type="text" className="w-[95%] pl-2 mt-2 h-10 rounded-md outline-none border focus:border-blue-400" placeholder="Password" />
                            </div>
                            <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4"></p>
                        </div>

                        <div className="md:w-2/4 w-full md:mt-0 mt-2 float-end">
                            <div className="w-full md:ml-3">
                                <p className=" text-gray-600 text-base font-medium">Account Privacy</p>
                                <select className="w-[95%] h-10 border rounded-md mt-2 outline-none focus:border-blue-400">
                                    <option value="0">Select Privacy</option>
                                    <option value="1">Private</option>
                                    <option value="2">Public</option>
                                </select>
                            </div>
                            <p className="warnings text-sm font-medium text-red-600 mt-1 ml-4"></p>
                        </div>

                    </div>
                    {/* submit button */}

                    <button className="h-10 w-full rounded-md bg-blue-500 hover:bg-blue-600 mt-6 mb-3  text-white ">Account Register</button>

                    <hr/>
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