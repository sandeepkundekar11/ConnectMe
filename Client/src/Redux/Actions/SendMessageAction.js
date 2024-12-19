export const SEND_MESSAGE = "SEND_MESSAGE"
export const SEND_MESSAGE_ERROR = "SEND_MESSAGE_ERROR"
export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST"



const sendMessageAction = (message) => {
    return {
        type: SEND_MESSAGE,
        payload: message
    }
}


const sendMessageErrorAction = (err) => {
    return {
        type: SEND_MESSAGE_ERROR,
        payload: err
    }
}


const sendMessageRequestAction = () => {
    return {
        type: SEND_MESSAGE_REQUEST,
    }
}


//api call

export const SendMessageApiCall = (ReceiverId, contentMessage,errorToster) => {
    return async (Dispatch) => {
        try {
            Dispatch(sendMessageRequestAction())
            let token = JSON.parse(localStorage.getItem("chatToken"))
            let response = await fetch(`http://localhost:8000/add/sendMessage/${ReceiverId}`, {
                method: "PUT",
                headers: {
                    "content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ content: contentMessage })
            })

            let responseBody = await response.json()
            if (responseBody.message === "message Sent successfully") {
                Dispatch(sendMessageAction(responseBody.message))
            }
            else {
                Dispatch(sendMessageErrorAction(responseBody.message))
                errorToster(responseBody.message)
            }
        } catch (error) {
            Dispatch(sendMessageErrorAction(error.message))
            errorToster(error.message)
        }
    }
}