const OPEN_MODAL_WIMDOW = 'OPEN_MODAL_WIMDOW'
const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW'



const initialState = {
   modalWindow: {
      isOpenWindow: false,
      data: {
         fullName: '',
         age: '',
         address: '',
         growth: '',
         weigh: '',
         phone: '',
         emal: '',
      }
   }
}

const modalWindowReducer = (state = initialState, action) => {
   switch (action.type) {


      default:
         return state;
   }
}




export default modalWindowReducer

