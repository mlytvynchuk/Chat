import React, { Component, useRef, useEffect } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';





export default function MessageBox(props) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    return (
        <ScrollToBottom debounce="10" className="msg_history">
                {props.messages.length > 0? props.messages.map((item, key) => {
              if (props.user && item.sender == props.user.id){
                return(
                  <div key={key} className="outgoing_msg">
                    <div className="sent_msg">
                      <p>{item.message}</p>
                      <span className="time_date"> {new Date(item.timestamp).getUTCHours()+3}:{new Date(item.timestamp).getUTCMinutes()}   |{monthNames[new Date(item.timestamp).getUTCMonth()]} {new Date(item.timestamp).getUTCDay()}</span> </div>
                  </div>
                )
              }else{
                return(
                  <div key={key} className="incoming_msg">
                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>{item.message}</p>
                        <span className="time_date"> 11:01 AM    |    June 9</span></div>
                    </div>
                  </div>
                )
              }
                }) : "No messages yet"}
                   
            </ScrollToBottom>
    )
}