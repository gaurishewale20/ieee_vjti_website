import {
    FETCH_ALL,
    FETCH_PROJECT,
    CREATE,
    UPDATE,
    DELETE,
    START_LOADING,
    END_LOADING
} from "../constants/actionTypes";

export default (state = { isLoading: true, projects: [] }, action) => {

    switch (action.type) {

        case START_LOADING:
            return {...state, isLoading: true };

        case END_LOADING:
            return {...state, isLoading: false };

        case FETCH_PROJECT:
            return {...state, project: action.payload };

        case FETCH_ALL:
            return {...state,
                projects: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case CREATE:
            return {...state, projects: [...state.projects, action.payload] };
        case UPDATE:
            return {...state,
                projects: [state.projects.map((project) =>
                    project._id === action.payload._id ? action.payload : project
                )]
            };
        case DELETE:
            return {...state,
                projects: [state.projects.filter((project) => project._id !== action.payload)]
            };
        default:
            return state;
    }
};