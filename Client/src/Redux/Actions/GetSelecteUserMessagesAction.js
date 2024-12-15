export const GET_SELECTED_USER_INFO = "GET_SELECTED_USER_INFO"
export const GET_SELECTED_USER_INFO_REQUEST = "GET_SELECTED_USER_INFO_REQUEST"
export const GET_SELECTED_USER_INFO_ERROR = 'GET_SELECTED_USER_INFO_ERROR'


const getSelectedUserInfoAction = (data) => {
    return {
        type: GET_SELECTED_USER_INFO,
        payload: data
    }
}

const getSelectedUserInfoRequest = () => {
    return {
        type: GET_SELECTED_USER_INFO_REQUEST
    }
}


const getSelectedUserInfoErrorAction = (err) => {
    return {
        type: GET_SELECTED_USER_INFO_ERROR,
        payload: err
    }
}

// get Selected user Info api call

export const getSelectedUserInfoApiCall = (receiverID) => {
    return async (Dispatch) => {
        try {
            Dispatch(getSelectedUserInfoRequest())
            let token = JSON.parse(localStorage.getItem("chatToken"))
            let Response = await fetch(`http://localhost:8000/add/getMessages/${receiverID}`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
            let ResponseBody = await Response.json()
            if (ResponseBody.message) {
                Dispatch(getSelectedUserInfoErrorAction(ResponseBody.message))
            }
            else {
                Dispatch(getSelectedUserInfoAction(ResponseBody))
            }
        } catch (error) {
            Dispatch(getSelectedUserInfoErrorAction(error.message))
        }
    }
}