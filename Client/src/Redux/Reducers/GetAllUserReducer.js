import { GET_ALL_USERS, GET_ALL_USERS_ERROR, GET_ALL_USERS_REQUEST } from "../Actions/GetAllUserAction";

const InitialData = {
    AllUsers: [],
    AllUserEr: null,
    AllUserLoading: false
}

export const GetAllUsersReducer = (state = InitialData, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                AllUsers: action.payload,
                AllUserEr: null,
                AllUserLoading: false
            }
        case GET_ALL_USERS_REQUEST:
            return {
                ...state,
                AllUserEr: null,
                AllUserLoading: true
            }
        case GET_ALL_USERS_ERROR:
            return {
                ...state,
                AllUserEr: action.payload,
                AllUserLoading: false
            }
        default:
            return state
    }
}