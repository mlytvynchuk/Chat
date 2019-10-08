import React from 'react'

export default function Contact({id, username}) {
    
    return (
            <div className="chat_list">
              <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div className="chat_ib">
                  <h5>{username}</h5>
                  {/* <span className="chat_date">Dec 25</span> */}
                  {/* <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p> */}
                </div>
              </div>
            </div>
    )
}
