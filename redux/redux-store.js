import {applyMiddleware, combineReducers, createStore} from "redux";
import mainReducer from "./mainReduser";
import ThunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const redusers = combineReducers({
    appMain: mainReducer,
})

let store = createStore(redusers, composeWithDevTools(applyMiddleware(ThunkMiddleware)));


export default store;
