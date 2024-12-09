import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"
import { JoinUserReducer } from "./Reducers/UserReducer"


const rootReducer = combineReducers({
    joinUserData: JoinUserReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
