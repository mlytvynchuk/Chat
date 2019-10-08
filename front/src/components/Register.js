import React, { Component } from 'react'
import '../assets/css/login.css'
import '../assets/css/login_util.css'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        email: ""
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: String(e.target.value)
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.props.register(this.state.email, this.state.username, this.state.password);
        
    }
    render() {
        return (
            <div>
                <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
				<form className="login100-form validate-form" onSubmit={e => this.handleSubmit(e)}>
					<span className="login100-form-title p-b-33">
						Sign Up
					</span>

                    <div className="wrap-input100 validate-input">
						<input className="input100" type="email" name="email" placeholder="Email" onChange={e => this.handleInput(e)}  />
						<span className="focus-input100-1"></span>
						<span className="focus-input100-2"></span>
					</div>

					<div className="wrap-input100 validate-input">
						<input className="input100" type="text" name="username" placeholder="Username" onChange={e => this.handleInput(e)}  />
						<span className="focus-input100-1"></span>
						<span className="focus-input100-2"></span>
					</div>

					<div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
						<input className="input100" type="password" name="password" placeholder="Password" onChange={e => this.handleInput(e)}  />
						<span className="focus-input100-1"></span>
						<span className="focus-input100-2"></span>
					</div>

					<div className="container-login100-form-btn m-t-20">
						<button className="login100-form-btn" onClick={e => this.handleSubmit(e)}>
							Sign in
						</button>
					</div>

					

					<div className="text-center p-t-45">
						<span className="txt1">
							Have an account?
						</span>

						<Link to="/" className="txt2 hov1 p-l-3">
							Log In
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>

            </div>
        )
    }
}
