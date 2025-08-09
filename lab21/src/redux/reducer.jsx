const initialState = {
    isLoggedIn: false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case "TOGGLE_LOGIN":
            return {...state, isLoggedIn: !state.isLoggedIn}
            
        default:
            return state;
    }
}

export default loginReducer;