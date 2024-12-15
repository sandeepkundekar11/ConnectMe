import { GET_SELECTED_USER_INFO, GET_SELECTED_USER_INFO_ERROR, GET_SELECTED_USER_INFO_REQUEST } from "../Actions/GetSelecteUserMessagesAction";

const initialData = {
    SelectedUserInfo: null,
    SelectedUserInfoLoading: false,
    SelectedUserInfoError: null
}

export const getSelectedUserMessagesReducer = (state = initialData, action) => {
    try {
        switch (action.type) {
            case GET_SELECTED_USER_INFO:
                return {
                    ...state,
                    SelectedUserInfo: action.payload,
                    SelectedUserInfoLoading: false,
                    SelectedUserInfoError: null
                }
            case GET_SELECTED_USER_INFO_REQUEST:
                return {
                    ...state,
                    SelectedUserInfoLoading: true,
                    SelectedUserInfoError: null
                }
            case GET_SELECTED_USER_INFO_ERROR:
                return {
                    ...state,
                    SelectedUserInfoLoading: false,
                    SelectedUserInfoError: action.payload
                }
            default:
                return state
        }
    } catch (err) {
        console.log(err)
    }
}