import { JOIN_USER, JOIN_USER_ERROR, JOIN_USER_REQUEST } from "../Actions/UserAction";

const InitialData = {
    joinUserData: null,
    joinUserDataLoading: false,
    joinUserError: null
}

export const JoinUserReducer = (state = InitialData, action) => {
    switch (action.type) {
        case JOIN_USER:
            return {
                ...state,
                joinUserData: action.payload,
                joinUserDataLoading: false,
                joinUserError: null
            }
        case JOIN_USER_REQUEST:
            return {
                ...state,
                joinUserDataLoading: true,
                joinUserError: null
            }
        case JOIN_USER_ERROR:
            return {
                ...state,
                joinUserDataLoading: false,
                joinUserError: action.payload
            }

        default:
            return state
    }
}