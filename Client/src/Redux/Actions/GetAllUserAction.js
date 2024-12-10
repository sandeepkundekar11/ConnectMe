export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_ALL_USERS_ERROR = "GET_ALL_USERS_ERROR"
export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST"

const getAllUsersAction = (data) => {
    return {
        type: GET_ALL_USERS,
        payload: data
    }
}

const getAllUsersErrorAction = (err) => {
    return {
        type: GET_ALL_USERS_ERROR,
        payload: err
    }
}

const getAllUsersRequestAciton = () => {
    return {
        type: GET_ALL_USERS_REQUEST
    }
}


// calling the api

export const getAllUsersApiCall = (Url) => {
    return async (Dispatch) => {
        try {
            Dispatch(getAllUsersRequestAciton())
            let token = JSON.parse(localStorage.getItem("chatToken"))
            let Response = await fetch(Url, {
                headers: {
                    "authorization": `Bearer ${token} `
                }
            })

            let responseBody = await Response.json()
            if (responseBody.message) {
                Dispatch(getAllUsersErrorAction(responseBody.message))
            }
            else {
                Dispatch(getAllUsersAction(responseBody))
            }
        } catch (error) {
            Dispatch(getAllUsersErrorAction(error.message))
        }
    }
}