export const GET_SIDE_LIST = "GET_SIDE_LIST";
export const GET_SIDE_LIST_ERROR = "GET_SIDE_LIST_ERROR";
export const GET_SIDE_LIST_REQUEST = "GET_SIDE_LIST_REQUEST"

const getSideListAction = (data) => {
    return {
        type: GET_SIDE_LIST,
        payload: data
    }
}

const getSideListRequestAction = () => {
    return {
        type: GET_SIDE_LIST_REQUEST
    }
}


const getSideListErrorAction = (err) => {
    return {
        type: GET_SIDE_LIST_ERROR,
        payload: err
    }
}


// api call

export  const getSideUserListApiCall = () => {
    return async (Dispatch) => {
        try {
            Dispatch(getSideListRequestAction())
            let token = JSON.parse(localStorage.getItem("chatToken"))
            let response = await fetch("http://localhost:8000/add/getChatInfo", {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
            let responseData = await response.json()
            if (responseData.message) {
                Dispatch(getSideListErrorAction(responseData.message))
            }
            else {
                Dispatch(getSideListAction(responseData))
            }
        } catch (error) {
            Dispatch(getSideListErrorAction(error.message))
        }
    }
}