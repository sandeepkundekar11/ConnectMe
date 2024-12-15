import { GET_SIDE_LIST, GET_SIDE_LIST_ERROR, GET_SIDE_LIST_REQUEST } from "../Actions/GetSideBarLastAction";

const InitialData = {
    SideBarList: [],
    SideBarListLoading: false,
    SideBarListError: null
}

export const getSideBarReducer = (state = InitialData, action) => {
    try {
        switch (action.type) {
            case GET_SIDE_LIST:
                return {
                    ...state,
                    SideBarList: action.payload,
                    SideBarListLoading: false,
                    SideBarListError: null
                }
            case GET_SIDE_LIST_ERROR:
                return {
                    ...state,
                    SideBarListLoading: false,
                    SideBarListError: action.payload
                }
            case GET_SIDE_LIST_REQUEST:
                return {
                    ...state,
                    SideBarListLoading: true,
                    SideBarListError: null
                }
            default:
                return state
        }
    } catch (error) {
        console.log(error)
    }
}