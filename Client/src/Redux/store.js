import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"
import { GetAllUsersReducer } from "./Reducers/GetAllUserReducer"
import { JoinUserReducer } from "./Reducers/UserReducer"


const rootReducer = combineReducers({
    joinUserData: JoinUserReducer,
    GetAllUsers: GetAllUsersReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
