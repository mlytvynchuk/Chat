import React, { Component } from 'react'

export default class SendInput extends Component {
    state = {
        text: ""
    }
    onSubmit = e => {
        e.preventDefault();
        if (this.state.text != ""){
            this.props.createMessage(this.state.text, this.props.receiver);
        this.setState({
            text: ""
        })
        
        }
        
    }
    handleInput = e => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div className="type_msg">
            <div className="input_msg_write">
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" className="write_msg" placeholder="Type a message" onChange={(e) => this.handleInput(e)} value={this.state.text ? this.state.text: ""} />
                    <button onClick={(e) => this.onSubmit(e)} className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
              </form>
            </div>
          </div>
        )
    }
}
