import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterComponent from './Register';
import DashboardComponent from './Dashboard';

const RouterComponent = () => (
  <Router>
    <Route exact path='/' component={LoginComponent}></Route>
    <Route path='/login' component={LoginComponent}></Route>
    <Route path='/register' component={RegisterComponent}></Route>
    <Route path='/dashboard' component={DashboardComponent}></Route>
  </Router>
)
ReactDOM.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();