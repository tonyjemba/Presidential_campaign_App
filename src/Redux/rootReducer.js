import { combineReducers } from "redux";
import AdminReducer from "./Admin/AdminReducer";
import { firebaseReducer} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

//combines all reducers so that they can be put in the store as rootReducer
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, 
  Admin: AdminReducer
});

export default rootReducer;
