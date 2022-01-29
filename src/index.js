import React from 'react';
import ReactDOM from 'react-dom';
import tachyons from 'tachyons';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Redux/rootReducer";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./base";
import {createFirestoreInstance} from "redux-firestore"

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase }))));
const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}
// function AuthIsLoaded({ children }) {
//   const auth = useSelector(state => state.firebase.auth);
//   if (!isLoaded(auth)) {
//     return(
//       <div>Loading spinner</div>
//     )
//   }
//   return children
// }
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {/* <AuthIsLoaded> */}
          <App />
        {/* </AuthIsLoaded> */}
        
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
