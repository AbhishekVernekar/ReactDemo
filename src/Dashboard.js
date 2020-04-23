import React from 'react';

export default class DashboardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.checkLogin();
    }

    checkLogin() {
        if(!localStorage.getItem('isLogin')) {
            this.props.history.push('login')
        }
    }

    logout(event) {
        localStorage.removeItem('isLogin');
        this.props.history.push('login');
    }

    render() {
        return (
            <div>
                <h3> Welcome to Dashboard Page!! </h3>
                <button onClick={this.logout}> Logout </button>
            </div>
        )
    }

}