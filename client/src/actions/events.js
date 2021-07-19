import {
  FETCH_ALL,
  FETCH_EVENT,
  CREATE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchEvent(id);
    // console.log(data);
    dispatch({ type: FETCH_EVENT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getEvents = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchEvents(page);
    // console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createEvent = (event) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createEvent(event);

    dispatch({ type: CREATE, payload: data });
    
  } catch (error) {
    console.log(error);
  }
};
