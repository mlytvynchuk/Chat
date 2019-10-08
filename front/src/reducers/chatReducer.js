
import * as actionTypes from '../actions/index';


const initialState = {
    contacts: [],
    messages: [],
    receiver: null,

}

const chatReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_CONTACTS:
            return {
                ...state,
                contacts : action.contacts
            }
        case actionTypes.SET_RECEIVER:
            return {
                ...state,
                receiver: action.receiver
            }
        case actionTypes.GET_MESSAGES:
            return{
                ...state,
                messages: action.messages
            }
        default:
            return state;
    }
}

export default chatReducer;