import { CHECK_STOCK_START, CHECK_STOCK_SUCCESS, RESET_STOCK } from "../actions/stockStock"

const initialState = {
    status: 'idle',
    stock: 'null',
}


const stockReducer = (state = initialState, action) => {
  switch(action.type){
    case CHECK_STOCK_START:
      return {...state, status: 'loading'}
    case CHECK_STOCK_SUCCESS:
      return {...state, status: 'loaded', stock: action.payload}
    case RESET_STOCK:
      return initialState
    default:
      return state;
  }
}

export default stockReducer