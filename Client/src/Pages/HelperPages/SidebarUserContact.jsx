/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const SidebarUserContact = ({ name, message, profle, onClick, SelectedUserID, userId }) => {
  return (
    <div className={`flex pt-2 hover:bg-slate-100 w-full  cursor-pointer px-4 py-2 ${userId === SelectedUserID && "bg-slate-200"}`} onClick={onClick}>
      <div className="w-14 h-14 bg-slate-600 rounded-lg">
        <img className="w-full h-full rounded-lg" src={profle} alt="" />
      </div>
      <div className="ml-2">
        <h1 className="text-slate-800 font-medium">{name}</h1>
        <p className="text-slate-500 text-sm">{message}</p>
      </div>
    </div>
  );
};
export default SidebarUserContact;
