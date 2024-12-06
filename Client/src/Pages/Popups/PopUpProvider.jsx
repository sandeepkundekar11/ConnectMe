/* eslint-disable react/prop-types */
const PopupProvider=({children})=>
{
    return(
        <div className="w-screen h-screen fixed top-0 left-0  flex justify-center items-center popup">
         {children}
        </div>
    )
}
export default PopupProvider