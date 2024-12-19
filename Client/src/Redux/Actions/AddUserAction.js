export const ADD_USER = "ADD_USER"
export const ADD_USER_ERROR = "ADD_USER_ERR"
export const ADD_USER_REQUEST = "ADD_USER_REQUEST"

const addUserAction = (data) => {
    return {
        type: ADD_USER,
        payload: data
    }
}

const addUserErrorAction = (err) => {
    return {
        type: ADD_USER_ERROR,
        payload: err
    }
}

const addUserRequestAction = () => {
    return {
        type: ADD_USER_REQUEST,
    }
}


// calling the api


export const AddUserApiCall = (UserId, success, cancel) => {
    return async (Dispatch) => {
        try {
            Dispatch(addUserRequestAction)
            let token = JSON.parse(localStorage.getItem("chatToken"))
            let response = await fetch("http://localhost:8000/add/adduser", {
                method: "PUT",
                headers: {
                    "content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ UserIdToAddUser: UserId })
            })
            let responseBody = await response.json()
            if (responseBody.message === "user added successfully") {
                Dispatch(addUserAction(responseBody.message))
                success(responseBody.message)
                //calling cancel function
                cancel()
            }
            else {
                Dispatch(addUserErrorAction(responseBody.message))
            }
        } catch (error) {
            Dispatch(addUserErrorAction(error.message))
        }
    }
}