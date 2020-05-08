import axios from 'axios';
import {
    GET_ERRORS,
    GET_PROJECTS,
    GET_PROJECT,
    DELETE_PROJECT,
    UPDATE_PROJECT
} from './types';
export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:3000/projects", project);
        history.push("/dashboard");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response ? error.response.data : "",
        });
    }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:3000/projects");
    console.log(res.data);
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};

export const getProject = (id, history) => async dispatch => {
    const res = await axios.get(`http://localhost:3000/projects/${id}`);
    console.log(res.data);
    dispatch({
        type: GET_PROJECT,
        payload: res.data
    });
};


export const deleteProject = id => async dispatch => {
    await axios.delete(`http://localhost:3000/projects/${id}`);
    dispatch({
        type: DELETE_PROJECT,
        payload: id
    });
};

export const projectUpdate = (project, history) => async dispatch => {
    try {
        console.log('update id is'+project.id);
        const res = await axios.put(`http://localhost:3000/projects/${project.id}`, project);
        history.push("/dashboard");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response ? error.response.data : "",
        });
    }
};