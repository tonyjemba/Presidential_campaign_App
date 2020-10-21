import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

//Contains the big state source of all pages
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;