const ACTION_MODAL_WIMDOW = 'ACTION_MODAL_WIMDOW'
const SET_DATA_USERS = ' SET_DATA_USERS'



const initialState = {
   isOpenWindow: false,
   dataModuleWindow: {}
}

const modalWindowReducer = (state = initialState, action) => {
   switch (action.type) {
      case ACTION_MODAL_WIMDOW: {
         return {
            ...state,
            isOpenWindow: action.isOpenWindow
         }
      }
      case SET_DATA_USERS: {
         return {
            ...state,
            dataModuleWindow: action.dataUsers
         }
      }
      default:
         return state;
   }
}

const toogleIsWindow = (isOpenWindow) => ({ type: ACTION_MODAL_WIMDOW, isOpenWindow })
const setDataUsers = (dataUsers) => ({ type: SET_DATA_USERS, dataUsers })

//здесь проприсана логика открытия модального окна(диспатчим функции, 1.которая открывает/закрывает окно 2.которая отправляет данные, которые отобразяться в модальном окне)
export const actionModalWindow = (isOpen, dataUsers) => (dispatch) => {
   dispatch(toogleIsWindow(isOpen))
   dispatch(setDataUsers({ dataUsers }))
}

export default modalWindowReducer

