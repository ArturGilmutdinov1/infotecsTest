import { usersApi } from "../API/usersApi";


const SET_ALL_USERS = 'SET_ALL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_ASCENDING_USERS = 'SET_ASCENDING_USERS'

const initialState = {
   users: [],
   isFetching: false,
   valueFilter: {
      valueKey: '',
      picked: '',
   }
}

const usersReducer = (state = initialState, action) => {
   debugger
   switch (action.type) {
      case SET_ALL_USERS: {
         return { ...state, users: [...action.users] }
      }
      case SET_CURRENT_PAGE: {
         return { ...state, isFetching: action.isFetching }
      }
      case SET_ASCENDING_USERS: {
         return {
            ...state,
            valueFilter: {
               valueKey: action.dataValue.dataCheketValue,
               picked: action.dataValue.picked,
            }
         }
      }
      default:
         return state;
   }
}

const setUsers = (users) => ({ type: SET_ALL_USERS, users })
const toogleIsFetching = (isFetching) => ({ type: SET_CURRENT_PAGE, isFetching })
const setSortAscendingUsers = (dataValue) => ({ type: SET_ASCENDING_USERS, dataValue })

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

export const sortAscendingUsers = (dataSortUsers) => (dispatch) => {
   dispatch(setSortAscendingUsers({ dataCheketValue: dataSortUsers.checked, picked: dataSortUsers.picked }));
}

export default usersReducer;



