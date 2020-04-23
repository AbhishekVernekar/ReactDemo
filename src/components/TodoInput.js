import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {

        const{item,handleChange, handleSubmit} = this.props

        return (
        <div className="card card-body my-3">
            <form onSubmit ={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        
                            <div className ="input-group-text bg-secondary text-white">
                            <i className="fas fa-cart-plus"></i>    
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize"
                        placeholder="add a todo item" value={item}
                        onChange={handleChange}
                        />
                        
                    </div>
                    <div className="text-center">
      <button className="btn btn-primary my-3">Add Item</button>
    </div>
            </form>
                </div>
        );         
    }
}
