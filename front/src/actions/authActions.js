import * as actionTypes from "."
import axios from 'axios'
export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.defaults.headers = {
            'Content-Type': 'application/json; charset=UTF-8'
        }
        axios.post('http://localhost:8000/auth/token/login/', {
            username: username,
            password: password
        }).then((res) => {
            const token = res.data.auth_token;
            localStorage.setItem('token', token);
            dispatch(getUser());
            localStorage.setItem('expirationDate', new Date(new Date() + 36000));
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(36000));
        })
        .catch((err) => {
            dispatch(authFail(err));
            alert("Credentials are not valid")
        })
    }
}

export const getUserSuccess = (user) => {
    return{
        type: actionTypes.GET_USER,
        user: user
    }
}

export const getUser = () => {
    return dispatch => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: 'Token '+ localStorage.getItem('token')
        }
        return axios.get('http://localhost:8000/auth/users/me/')
        .then(res => {
            dispatch(getUserSuccess(res.data));
        })
        .catch(e => {
            alert("User error")
        })
    }
    
}

export const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return{
        type: actionTypes.AUTH_LOGOUT
        }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token == null){
            dispatch(logout());
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()){
                dispatch(logout());
            }
            else{
                dispatch(getUser()).then(() => {
                    dispatch(authSuccess(token));
                });
                
                
                dispatch(checkAuthTimeout(7200));
            }
        }
    }
}
const registerUserSuccess = (user) => {
    return {
        type: "USER_REGISTER",
        user: user
    }
}
export const registerUser = (email, username, password) =>{
    return dispatch => {
        axios.post('http://localhost:8000/auth/users/',{
        username:username,
        password: password,
        email: email
    }).then(res => {
        dispatch(registerUserSuccess(res.data));
        window.location = "/";
    }).catch(e => {
        alert("Some error")
    })
    }
    
}

