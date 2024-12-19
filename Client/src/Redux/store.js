import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"
import { AddUserReducer } from "./Reducers/AddUserReducer"
import { GetAllUsersReducer } from "./Reducers/GetAllUserReducer"
import { getSelectedUserMessagesReducer } from "./Reducers/GetSelectedUserMessagesReducer"
import { getSideBarReducer } from "./Reducers/GetSideBarLastReducer"
import { SendMessageReducer } from "./Reducers/SendMessageReducer"
import { JoinUserReducer } from "./Reducers/UserReducer"


const rootReducer = combineReducers({
    joinUserData: JoinUserReducer,
    GetAllUsers: GetAllUsersReducer,
    sideBarInfo: getSideBarReducer,
    GetSelectedUserMessages: getSelectedUserMessagesReducer,
    AddUser: AddUserReducer,
    SendMessage: SendMessageReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
