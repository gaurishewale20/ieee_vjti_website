import * as actionType from '../constants/actionTypes';

const adminReducer = (state = { adminData: null }, action) => {
    switch (action.type) {
      case actionType.ADMIN:
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
  
        return { ...state, adminData: action.data, loading: false, errors: null };
      case actionType.LOGOUT:
        localStorage.clear();
  
        return { ...state, adminData: null, loading: false, errors: null };
      default:
        return state;
    }
  };
  
// const adminReducer=(state ={adminData: null}, action)=>{
//     switch(action.type)
//     {
//         case ADMIN:
//             console.log(action?.data);
//             return state;
//         default: return state;
//     }
// }

  export default adminReducer;