import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTask } from "../../action/TaskActions";

class ProjectTaskItem extends Component {
    onDeleteClick = id => {
        this.props.deleteTask(id)};
    render() {
        const {task} = this.props;
        return (
            <div className="container">


                <Link to="/addprojectboardtask" >
                    <i className="fas fa-plus-circle">Create Project Task </i>
                </Link>
                <br />
                <hr />

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>


                            <div className="card mb-1 bg-light">

                                <div className="card-header text-primary">
                                <span className="mx-auto">{task.id}</span> <span className="mx-auto">{task.priority}</span> 
                        </div>
                                <div className="card-body bg-light">
                                    <h5 className="card-title">task.summary</h5>
                                    <p className="card-text text-truncate ">
                                    <span className="mx-auto">{task.acceptanceCriteria}</span> 
                            </p>
                                    <a href='#' className="btn btn-primary">
                                        View / Update
                            </a>

                                    <button className="btn btn-danger ml-4">
                                        Delete
                            </button>
                                </div>
                            </div>


                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

ProjectTaskItem.propTypes = {
    deleteTask : PropTypes.func.isRequired,
};
export default connect(null, { deleteTask })(ProjectTaskItem);
