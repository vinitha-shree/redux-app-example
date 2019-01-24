import {NEW_POST} from '../actions/types';

const initialState ={
  
    item: []
}

export default function(state = initialState,action ){
    switch(action.type){
        case NEW_POST:
        return {
            ...state,
            item: action.payload
        }
        default:
            return state;
    }
}             
