import * as actionTypes from './index';
import axios from 'axios';
export * from './authActions'
export const getContactsSuccess = (contacts) =>{
    return{
        type: actionTypes.GET_CONTACTS,
        contacts: contacts
    }
}
export const getContacts = () => {
    return dispatch => {
        axios.defaults.headers = {
            'Authorization': 'Token '+ localStorage.getItem('token')
        }
        return axios.get('http://localhost:8000/api/users/')
        .then(res => {
            dispatch(getContactsSuccess(res.data))
        })
    }
}
const getMessagesSuccess = (messages) => {
    return{
        type: actionTypes.GET_MESSAGES,
        messages: messages
    }
}
export const getMessages = id => {
    return dispatch => {
        axios.defaults.headers = {
            'Authorization': 'Token '+ localStorage.getItem('token')
        }
        axios.get(`http://localhost:8000/api/messages/${id}/`)
        .then(res => {
            console.log(res.data);
            dispatch(getMessagesSuccess(res.data));
        })

    }
}

export const setReceiver = (id) => {
    localStorage.setItem('receiver', id);
    return dispatch => {
        dispatch(getMessages(id));
        dispatch({
            type: actionTypes.SET_RECEIVER,
            receiver: id
        })
    }
}
export const createMessage = (message,receiver) => {
    if (receiver){
        return dispatch => {
            axios.post('http://localhost:8000/api/messages/', {
                message: message,
                receiver: receiver
            }).then(() => {
                dispatch(getMessages(receiver));
            })
        }
    }
}