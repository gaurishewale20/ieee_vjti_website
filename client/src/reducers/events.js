import {
    FETCH_ALL,
    CREATE
  } from "../constants/actionTypes";
  
  export default (state = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return {...state, 
          events: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
        };
      case CREATE:
          return [...state, action.payload];
         default:
        return state;
    }
  };
  