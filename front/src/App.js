import React, { Component } from 'react';
import Chat from './components/Chat.js'
import Login from './components/Login.js';
import { connect } from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { authLogin, getUser, authCheckState, logout, registerUser } from './actions/authActions.js';
import { getContacts, setReceiver, getMessages, createMessage } from './actions/chatActions.js';
import Register from './components/Register'


class App extends Component {
  componentDidMount(){
    this.props.tryAuth();
  }
  render() {
    
    return <Router>
      <Switch>
      <Route path="/signup/">
         <Register {...this.props}/>
      </Route>
      <Route exact path="/">
      {this.props.isAuthenticated ?
       <Chat {...this.props}/> : <Login {...this.props}/>
    }
      </Route>
      </Switch>
      
    </Router>
  
    }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  isAuthenticated: state.auth.token ? true: false,
  contacts: state.chat.contacts,
  receiver: state.chat.receiver,
  messages: state.chat.messages
});
const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(authLogin(username, password)),
  getUser: () => dispatch(getUser()),
  tryAuth: () => dispatch(authCheckState()),
  getContacts: () => dispatch(getContacts()),
  logout: () => dispatch(logout()),
  register: (email, username, password) => dispatch(registerUser(email, username, password)), 
  setRECEIVER: (id) => dispatch(setReceiver(id)),
  getMESSAGES: (id) => dispatch(getMessages(id)),
  createMessage: (message, receiver) => dispatch(createMessage(message, receiver)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
