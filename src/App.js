import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from"./components/Dashboard";
import Header from"./components/Header";
import AddProject from "./components/projects/AddProject";
import updateProject from "./components/projects/updateProject";
import ProjectBoardTask from "./components/ProjectBoardTask";
import AddProjectBoardTask from "./components/projects/AddProjectBoardTask";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter as Router,Route} from 'react-router-dom';
import{Provider} from 'react-redux';
import store from './store';


class App extends React.Component {
  render()
  {
  return (
    <Provider store={store}>
   <Router>
   <div className="App">
   <Header/>
    </div>
   <Route path ="/dashboard" component={Dashboard}/>
   <Route path ="/addproject" component={AddProject}/>
   <Route path ="/updateproject/:id" component={updateProject}/>
   <Route path ="/projectboardtask" component={ProjectBoardTask}/>
   <Route path ="/addprojectboardtask" component={AddProjectBoardTask}/>
  </Router>
  </Provider>
    );
}
}

export default App;
