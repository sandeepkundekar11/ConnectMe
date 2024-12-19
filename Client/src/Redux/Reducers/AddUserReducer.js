import { ADD_USER, ADD_USER_ERROR, ADD_USER_REQUEST } from "../Actions/AddUserAction";

const initialData = {
    Add_User_Message: null,
    Add_User_loading: false,
    Add_User_Error: null
}

export const AddUserReducer = (State = initialData, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...State,
                Add_User_Message: action.payload,
                Add_User_loading: false,
                Add_User_Error: null
            }
        case ADD_USER_REQUEST:
            return {
                ...State,
                Add_User_loading: true,
                Add_User_Error: null
            }
        case ADD_USER_ERROR:
            return {
                ...State,
                Add_User_loading: false,
                Add_User_Error: action.payload
            }

        default:
            return State
    }
}