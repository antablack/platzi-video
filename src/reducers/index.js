import data from "./data";
import modal from "./modal";

import { combineReducers } from "redux-immutable";

const rootReducers = combineReducers({
    data: data,
    modal: modal
})
export default rootReducers;