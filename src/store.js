import { combineReducers, createStore } from "redux";
import { signalStatus } from "./reducers";
const reducer = {
    signalStatus,
}

const rootReducer = combineReducers(reducer);

const configureStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}

export default configureStore;