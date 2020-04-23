import React, { Component } from 'react';
import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import Home from './components/Home.js';
import About from './components/About.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {v1 as uuid} from "uuid"; 

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  
  const newItem = {
    id: this.state.id,
    title: this.state.item
  };

  const updatedItems = [...this.state.items, newItem];

  this.setState({
    items:updatedItems,
    item:'',
    id:uuid(),
    editItem:false
  });
};

  clearList = ()=>{
    this.setState({
      items:[]
    });
  };

  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => 
      item.id !== id)

      this.setState({
        items:filteredItems
      });
  };

  handleEdit = (id) =>{
    const filteredItems = this.state.items.filter(item => 
      item.id !== id)

      const selectedItem = this.state.items.find(item => item.id === id)

      this.setState({
        items: filteredItems,
        item: selectedItem.title,
        editItem: true,
      });
  };

  render() {
    return (<Router>
      <div className="todo" style={{ textAlign: "center" }}> <h3>TodoList</h3>
        <nav style={{ margin: 10, textAlign: "center" }}>
          <Link to='/' style={{ padding: 10 }}>

          </Link>

          <Link to='/home' style={{ padding: 2, color: 'black' }}>
            Home
                    </Link>
                    |
                    <Link to='/about' style={{ padding: 2, color: 'black' }}>
            About
                    </Link>
        </nav>
        <Route path='/' exact component={''} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
      </div>



      <div>
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />

        <TodoList 
        items={this.state.items}  
        clearList={this.clearList}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}/>

      </div>
    </Router>
    );
  }
}

export default App;
