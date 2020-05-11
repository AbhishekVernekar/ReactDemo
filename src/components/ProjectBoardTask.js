import React from 'react'
import ProjectTaskItem from './projects/ProjectTaskItem.js';
import{connect} from'react-redux';
import PropTypes from 'prop-types';
import {getTasks} from "../action/TaskActions";

class ProjectBoardTask extends React.Component {
    componentDidMount()
    {
        this.props.getTasks();
    }
    render() {
        const tasks =this.props.tasks;
        return (
            <div>
                <hr></hr>
                <ProjectTaskItem/>
                {tasks.map(task =>(
                        <ProjectTaskItem key={task.id} task={task}/>
                    ))}
            </div>
        );
    }
}

ProjectBoardTask.propTypes={
    tasks:PropTypes.object.isRequired,
    getTasks:PropTypes.func.isRequired
};
const mapStateToProps = state =>(
{
tasks:state.tasks
});

export default connect(mapStateToProps,{getTasks})(ProjectBoardTask);