import {applyMiddleware, combineReducers, createStore} from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
import CinemasReducer from "./reducers/CinemasReducer";
import reduxThunk from "redux-thunk"
import{composeWithDevTools} from 'redux-devtools-extension'
const reducer = combineReducers({
    CityReducer, TabbarReducer, CinemasReducer
})


const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk)))
export default store