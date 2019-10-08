import * as actionTypes from '../actions/index';


const initialState = {
    token: null,
    error: null,
    loading: false,
    user: null
}


const authReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:{
            return {
                ...state,
                error: null,
                loading: true
            }
        }
        case actionTypes.AUTH_SUCCESS:{
            return{
                ...state,
                loading: false,
                token: action.token
            }
        }
        case actionTypes.AUTH_FAIL: {
            return{
                ...state,
                error: action.error
            }
        }
        case actionTypes.GET_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        case actionTypes.AUTH_LOGOUT:{
            return{
                ...state,
                user: null,
                token: null
            }
        }
        default:
            return state;
    }
}

export default authReducer;