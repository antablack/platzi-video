import React from "react";
import { render } from "react-dom";
import Home from "../pages/containers/home"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import { Map as map } from "immutable";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
 function logger_({ getState, dispatch }) {
    return (next) => {
        return (action) => {
            console.log("vamos a enviar una accion", action);
            const value = next(action);
            console.log("new estado", getState().toJS());
            return value;
        }
    }
}
 
const store = createStore(
    reducer,
    map({}),
    composeWithDevTools(applyMiddleware(logger, logger_, thunk))
);

console.log(store.getState())

const homeContainer = document.getElementById("home-container");
render(
    <Provider store={store}>
        <Home />
    </Provider>, homeContainer)