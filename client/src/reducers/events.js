import {
    FETCH_ALL,
    FETCH_EVENT,
    CREATE,
    UPDATE,
    DELETE,
    START_LOADING,
    END_LOADING
  } from "../constants/actionTypes";
  
  export default (state = { isLoading: true, events : [] }, action) => {

    switch (action.type) {
    
      case START_LOADING :
        return {...state, isLoading: true};

      case END_LOADING :
        return {...state, isLoading: false};
        
      case FETCH_EVENT:
        return {...state, event : action.payload};
        
      case FETCH_ALL:
        return {...state, 
          events: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
        };
      case CREATE:
          return {...state, events: [...state.events, action.payload]};
      case UPDATE:
            return {...state, events: [state.events.map((event) =>
              event._id === action.payload._id ? action.payload : event
            )]};
      case DELETE:
            return {...state, events:[state.events.filter((event) => event._id !== action.payload)]};
      default:
        return state;
    }
  };
  