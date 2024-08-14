import { usersApi } from "../API/usersApi";


const SET_ALL_USERS = 'SET_ALL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


const initialState = {
   users: [],
   IsFetching: false,
}


const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ALL_USERS: {
         return { ...state, users: [...action.users] }
      }
      default:
         return state;
   }
}



const setUsers = (users) => ({ type: SET_ALL_USERS, users })
const toogleIsFetching = (IsFetching) => ({ type: SET_CURRENT_PAGE, IsFetching })



export const getUsers = () => {
   return (dispatch) => {
      dispatch(toogleIsFetching(true));
      usersApi.getUsers()
         .then(response => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(response.users));
         })
   }
}





export default usersReducer;



