import { usersApi } from "../API/usersApi";


const SET_ALL_USERS = 'SET_ALL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


const initialState = {
   users: [],
   isFetching: false,
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ALL_USERS: {
         return { ...state, users: [...action.users] }
      }
      case SET_CURRENT_PAGE: {
         return { ...state, isFetching: action.isFetching }
      }

      default:
         return state;
   }
}

const setUsers = (users) => ({ type: SET_ALL_USERS, users })
const toogleIsFetching = (isFetching) => ({ type: SET_CURRENT_PAGE, isFetching })


export const getUsers = () => async (dispatch) => {
   dispatch(toogleIsFetching(true));
   let response = await usersApi.getUsers()
   dispatch(toogleIsFetching(false));
   dispatch(setUsers(response.users));
}


export const setSearchUsers = (valueMessage) => async (dispatch) => {
   let arrayKey = ['firstName', 'lastName', 'maidenName', 'age', 'gender', 'phone', 'address.city', 'address.address']
   let usersArray = []
   dispatch(toogleIsFetching(true))
   if (valueMessage === "") {
      let response = await usersApi.getUsers()
      dispatch(setUsers(response.users))
      dispatch(toogleIsFetching(false))
   }
   else {
      for (let i = 0; i < arrayKey.length; i++) {
         let response = await usersApi.filterUsers(arrayKey[i], valueMessage)
         usersArray = usersArray.concat(response.users)
         dispatch(toogleIsFetching(false))
         dispatch(setUsers(usersArray))
      }
   }
}


export default usersReducer;



