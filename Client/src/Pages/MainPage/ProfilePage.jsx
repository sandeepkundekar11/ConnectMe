import { memo } from "react"
import editEnableImg from "../../assets/EditEnable.png"
const ProfilePage = () => {
    return (
        <div className="w-full min-h-screen h-full bg-blue-100 pt-[6rem] pb-4">
            {/* head */}
            <div className="md:w-4/5 h-44 bg-white mt-6 m-auto relative flex rounded-md">
                <div className="profileImag w-44 rounded-md -mt-9 ml-4   h-44 bg-slate-500">
                    {/* profile img */}
                    <img className="w-full h-full" src="" alt="" />
                </div>
                <div className="ml-3">
                    <h1 className="font-bold text-xl text-gray-700">Marie George</h1>
                    <span className="mt-2 text-gray-500 text-sm flex"> <p className="font-medium mr-3">290 Contacts</p>- 8 Groups</span>
                    {/* connected users profiles */}
                    <div className="flex items-center ml-4 mt-3">
                        <div className="flex">
                            {
                                [1, 2, 3, 4, 5].map((ele) => {
                                    return (
                                        <div key={ele} className="w-12 h-12 bg-slate-500 rounded-full border-2 -ml-5"></div>
                                    )
                                })
                            }
                        </div>
                        <p>+9</p>
                    </div>
                </div>
            </div>

            {/* profile info */}
            <div className="md:w-4/5 w-11/12 m-auto p-4 bg-white mt-6 overflow-y-hidden">
                <div className=" md:flex">
                    {/* side left */}
                    <div className="md:w-2/12 w-full mt-4">
                        <h1 className="font-medium text-gray-600">Personal Information</h1>
                        <p className="text-sm text-gray-400">Edit Your personal Info</p>
                    </div>
                    {/* side right */}
                    <div className="md:ml-8 md:mt-0 mt-3  md:w-10/12 w-full relative">
                    <div className=" flex right-1 absolute  "> 
                        {/* edit enable button */}
                        <button className="w-9 h-9 border flex justify-center items-center">
                            <img src={editEnableImg} alt="" />
                        </button>
                    </div>
                        {/* info */}
                        <div className="md:flex">
                            <div className="md:w-2/4 w-full">
                                <p className=" font-medium text-gray-600">YourName</p>
                                <input className="md:w-10/12 w-full h-10 outline-none border mt-2 pl-2 rounded-md" type="text" name="" id="" />
                            </div>
                            <div className="md:w-2/4 w-full">
                                <p className=" font-medium text-gray-600">YourEmail</p>
                                <input className=" md:w-10/12 w-full h-10 outline-none border mt-2 pl-2 rounded-md" type="text" name="" id="" />
                            </div>
                        </div>

                        <div className=" md:w-11/12 w-full mt-6">
                            <p className=" font-medium text-gray-600">Bio</p>
                            <textarea rows={4} className="w-full mt-2 border outline-none rounded-md p-2 "></textarea>
                        </div>

                        {/* edit button */}
                        <div className="flex space-x-3">
                            <button className="w-28 h-10 hover:bg-blue-600 bg-blue-500 rounded-lg border text-white">Save</button>
                            <button className="w-28 h-10 hover:bg-red-600 bg-red-500 rounded-lg border text-white">cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(ProfilePage)