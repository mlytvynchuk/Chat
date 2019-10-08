import React, { Component } from 'react';
import '../assets/css/chat.css';
import Contact from './Contact';
import SendInput from './SendInput';
import MessageBox from './MessageBox'
export default class Chat extends Component {
  intervalGetMessage = 0
  componentDidMount(){
    this.props.getContacts();
    this.intervalGetMessage =setInterval( this.repeatGettingMessages, 1500);
    
      
  }
  repeatGettingMessages = () => {
      if (this.props.token && this.props.receiver){
              this.props.getMESSAGES(this.props.receiver)

      }
  }
  componentWillUnmount(){
    clearInterval(this.intervalGetMessage);
  }
  
  
  
    render() {
        return (
            <div>
                <div className="container">
<div className='d-flex justify-content-between p-b-20'>
<h3 className="">Messaging</h3>
<button className="btn bg-primary btn-primary" onClick={() => this.props.logout()}>Logout</button>
</div>
<div className="messaging">
      <div className="inbox_msg">
        <div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4>Contacts</h4>
            </div>
            <div className="srch_bar">
              <div className="stylish-input-group">
                <input type="text" className="search-bar"  placeholder="Search" />
                <span className="input-group-addon">
                <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                </span> 
                </div>
            </div>
          </div>
          <div className="inbox_chat">
          {this.props.contacts && this.props.contacts.map((item, key) => (
              <div key={key} className="contact-box" onClick={() => this.props.setRECEIVER(item.id)}><Contact username={item.username} id={item.id}/></div>
            ) )}
            
          </div>
        </div>
        {this.props.receiver ? ( <div className="mesgs" >
          <MessageBox {...this.props}/>
          <SendInput scrollMessagesBottom={this.scrollMessagesBottom} {...this.props}/>
        </div>

      
      
): <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:600}}><h4>Choose contact to start chatting</h4></div>}
   

      </div>
    </div>
    </div>
    </div>


        )
    }
}