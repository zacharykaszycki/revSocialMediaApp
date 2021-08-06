import { combineReducers, createStore, Store } from "redux";
import { myReducer } from "../reducer-logic/Reducer";
import loggedReducer from "../reducer-logic/isLogged";

const allOfMyReducers = combineReducers({
    myStateReducer: myReducer,
    isLogged : loggedReducer
})

//export const store: Store<any> = createStore(allOfMyReducers);
export default allOfMyReducers;