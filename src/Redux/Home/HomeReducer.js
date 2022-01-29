import {CHANGESTATE} from "./Constants";
import update from 'immutability-helper';


 const initialState = {
   input:""
}

export const HomeReducer = (state = initialState , action) => {
    switch(action.type){
    case CHANGESTATE:
        return {...state,input:action.payload}
    default:
        return state;
    }

}