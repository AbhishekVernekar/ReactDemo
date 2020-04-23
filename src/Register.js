import React from 'react';

export default class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setFname = this.setFname.bind(this);
        this.setLname = this.setLname.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.state = { fname: '', lname: '', username: '', password: ''}
    }

    handleSubmit(event) {
        event.preventDefault();
        let userData = localStorage.getItem('userDetails');
        if(userData) {
            userData = JSON.parse(userData);
            userData.push(this.state);
            localStorage.setItem('userDetails', JSON.stringify(userData));
        } else {
            userData = [];
            userData.push(this.state);
            localStorage.setItem('userDetails', JSON.stringify(userData));
        }
        this.props.history.push('login');
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('login');
    }
    
    setFname(event) {
        this.setState({fname: event.target.value});
    }
    setLname(event) {
        this.setState({lname: event.target.value});
    }
    setUsername(event) {
        this.setState({username: event.target.value});
    }

    setPassword(event) {
        this.setState({password: event.target.value});
    }


    render() {
        return (
            <div className="card">
                <h3>Register</h3>
                <div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input className="login-control" type="text" value={this.state.fname} onChange={this.setFname} placeholder="First name" required></input>
                        <input className="login-control" type="text" value={this.state.lname} onChange={this.setLname} placeholder="Last name" required></input>
                        <input className="login-control" type="text" value={this.state.username} onChange={this.setUsername} placeholder="Username" required></input>
                        <input className="login-control" type="password" value={this.state.password} onChange={this.setPassword} placeholder="Password" required></input>
                        <button className="login-control" type="submit">Register</button>
                    </form>
                    <button className="cancel-btn" onClick={this.handleCancel}>Cancel</button>
                </div>
            </div>
        )
    }

}