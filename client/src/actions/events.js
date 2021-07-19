import { FETCH_ALL,CREATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getEvents = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents(page);
console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createEvent = (event) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(event);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};