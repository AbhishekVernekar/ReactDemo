import axios from 'axios';
import {
    GET_TASK_ERRORS,
    GET_TASKS,
    GET_TASK,
    DELETE_TASK,
    UPDATE_TASK
} from './types';
export const createTask = (task, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:3000/tasks", task);
        history.push("/projectbooardtask");
    } catch (error) {
        dispatch({
            type: GET_TASK_ERRORS,
            payload: error.response ? error.response.data : "",
        });
    }
};

export const getTasks = () => async dispatch => {
    const res = await axios.get("http://localhost:3000/tasks");
    console.log("response is "+res.data);
    dispatch({
        type: GET_TASKS,
        payload: res.data
    });
};

export const getTask = (id, history) => async dispatch => {
    const res = await axios.get(`http://localhost:3000/tasks/${id}`);
    console.log(res.data);
    dispatch({
        type: GET_TASK,
        payload: res.data
    });
};


export const deleteTask = id => async dispatch => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    dispatch({
        type: DELETE_TASK,
        payload: id
    });
};

export const taskUpdate = (task, history) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:3000/tasks/${task.id}`, task);
        history.push("/projectboardtask");
    } catch (error) {
        dispatch({
            type: UPDATE_TASK,
            payload: error.response ? error.response.data : "",
        });
    }
};