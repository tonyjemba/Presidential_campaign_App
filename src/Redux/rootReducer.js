import { combineReducers } from "redux";
import { HomeReducer } from "./Home/HomeReducer";

//combines all reducers so that they can be put in the store as rootReducer
const rootReducer = combineReducers({
  Home: HomeReducer,
});

export default rootReducer;
