import React from 'react';

export default class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', errorMsg: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.checkLogin();
    }

    checkLogin() {
        if(localStorage.getItem('isLogin')) {
            this.props.history.push('dashboard')
        }
    }

    setUsername(event) {
        this.setState({username: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let userData = localStorage.getItem('userDetails');
        if(userData) {
            userData = JSON.parse(userData);
            userData.forEach(element => {
                if(this.state.username === element.username && this.state.password === element.password) {
                    localStorage.setItem('isLogin', true);
                    this.props.history.push('dashboard');
                } else {
                    this.setState({errorMsg : 'Invalid Credentials!'})
                }
            });
        } else {
            console.log('Incalid credentials');
        }
        
    }

    handleRegister(event) {
        event.preventDefault();
        this.props.history.push('register');
    }

    render() {
        return (
            <div className="card">
                <h3 align="center">Login</h3>
                <div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input className="login-control" type="text" value={this.state.username} placeholder="Username" onChange={this.setUsername} required></input>
                        <input className="login-control" type="password" value={this.state.password} placeholder="Password" onChange={this.setPassword} required></input>
                        <button className="login-control" type="submit">Login</button>
                    </form>
                    <span className="reg" onClick={this.handleRegister}>Register</span>
        <span className="error">{this.state.errorMsg}</span>
                </div>
            </div>  
        )
    }
}