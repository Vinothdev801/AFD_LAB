import { UPDATE_DISPLAY_NAME } from "./action";

const initialState = {name: 'John Doe'}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_DISPLAY_NAME:
            return {...state, name: action.payload};
    
        default:
            return state;
    }
}

export default profileReducer