import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

/*
state : merkezi storage'dır. seçili kategoriyi global de tutacak.
action: action içerisinde seçilen kategori gelir
*/
export default function changeCategoryReducer(state=initialState.currentCategory,action){
   
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload    
        default:
           return state;
    }
}