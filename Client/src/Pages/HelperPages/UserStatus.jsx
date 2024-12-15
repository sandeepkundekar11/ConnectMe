/* eslint-disable react/prop-types */
const UserStatus = ({ info }) => {
  const { name, status, profile } = info
  return (
    <div className="flex mt-2  w-80  cursor-pointer px-4 ">
      <div className="w-12 h-12 bg-slate-600 rounded-lg">
        <img className="w-full h-full rounded-lg" src={profile} alt="" />
      </div>
      <div className="ml-2">
        <h1 className="text-slate-600 font-medium">{name}</h1>
        <p className="text-slate-600 text-sm">{status}</p>
      </div>
    </div>
  );
};
export default UserStatus;
