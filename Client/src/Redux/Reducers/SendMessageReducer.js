import { SEND_MESSAGE, SEND_MESSAGE_ERROR, SEND_MESSAGE_REQUEST } from "../Actions/SendMessageAction";

const InitialData = {
    SendMessageInfo: null,
    SendMessageLoading: false,
    SendMessageError: null
}


export const SendMessageReducer = (state = InitialData, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                SendMessageInfo: action.payload,
                SendMessageLoading: false,
                SendMessageError: null
            }
        case SEND_MESSAGE_REQUEST:
            return {
                ...state,
                SendMessageLoading: true,
                SendMessageError: null
            }
        case SEND_MESSAGE_ERROR:
            return {
                ...state,
                SendMessageLoading: false,
                SendMessageError: action.payload
            }

        default:
            return state
    }
}