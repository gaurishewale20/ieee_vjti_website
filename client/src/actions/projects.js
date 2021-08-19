import {
    FETCH_ALL,
    FETCH_PROJECT,
    CREATE,
    UPDATE,
    DELETE,
    START_LOADING,
    END_LOADING,
} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getProjects = (page) => async(dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchProjects(page);

        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};


export const createProject = (project) => async(dispatch) => {
    try {
        const { data } = await api.createProject(project);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updateProject = (id, project) => async(dispatch) => {
    try {
        const { data } = await api.updateProject(id, project);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};


export const deleteProject = (id) => async(dispatch) => {
    try {
        await await api.deleteProject(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};