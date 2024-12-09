export const JOIN_USER = "JOIN_USER"
export const JOIN_USER_REQUEST = "JOIN_USER_REQUEST"
export const JOIN_USER_ERROR = "JOIN_USER_ERROR"


const joinUserAction = (data) => {
    return {
        type: JOIN_USER,
        payload: data
    }
}


const joinUserRequestAction = () => {
    return {
        type: JOIN_USER_REQUEST
    }
}

const joinUserErrorAction = (err) => {
    return {
        type: JOIN_USER_ERROR,
        payload: err
    }
}

// join user api call 

export const joinUserApiCall = (url, data, navigate, errorMessage) => {
    return async (Dispatch) => {
        try {
            Dispatch(joinUserRequestAction())
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            let userData = await response.json()
            if (userData.user) {
                localStorage.setItem("chatUser", JSON.stringify(userData.user))
                localStorage.setItem("chatToken", JSON.stringify(userData.token))
                Dispatch(joinUserAction(userData.user))
                navigate("/")
            }
            else {
                console.log("ke", userData.message)
                Dispatch(joinUserErrorAction(userData.message))
                errorMessage(userData.message)
            }
        } catch (error) {
            Dispatch(joinUserErrorAction(error.message))
            errorMessage(error.message)
        }
    }
}