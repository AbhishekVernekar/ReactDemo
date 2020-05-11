import React, { Component } from 'react'
import { createTask } from "../../action/TaskActions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class AddProjectBoardTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      summary: "",
      acceptanceCriteria: " ",
      dueDate: " ",
      priority: " ",
      status: " ",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(event) {
    event.preventDefault();
    const newTask = {
      id: this.state.id,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      dueDate: this.state.dueDate,
      priority: this.state.priority,
      status: this.state.status
    };
    this.props.createTask(newTask, this.props.history);

    console.log(newTask);
  }
  onChange(event) {

    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">


              <Link to="/projectboardtask" >
                <i className="btn btn-light">Back to Project Board </i>
              </Link>

              <h4 className="display-4 text-center">Add /Update Project Task</h4>
              <p className="lead text-center">Project Name + Project Code</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" value={this.state.summary}
                    onChange={this.onChange} name="summary" placeholder="Project Task summary" />
                </div>
                <div className="form-group">
                  <textarea className="form-control form-control-lg" value={this.state.acceptanceCriteria}
                    onChange={this.onChange} placeholder="Acceptance Criteria" name="acceptanceCriteria"></textarea>
                </div>
                <h6>Due Date</h6>
                <div className="form-group">
                  <input type="date" className="form-control form-control-lg" value={this.state.dueDate}
                    onChange={this.onChange} name="dueDate" />
                </div>
                <div className="form-group">
                  <select className="form-control form-control-lg" value={this.state.priority}
                    onChange={this.onChange} name="priority">
                    <option value={0}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>

                <div className="form-group">
                  <select className="form-control form-control-lg" value={this.state.status}
                    onChange={this.onChange} name="status">
                    <option value="">Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>

                <input type="submit" className="btn btn-primary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

AddProjectBoardTask.propTypes = {
  createTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createTask })(AddProjectBoardTask);