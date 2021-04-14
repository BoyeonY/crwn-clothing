import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser : null
}

// If state is not ever undefined, take INITIAL_STATE value. Null is state value.
const userReducer = (state = INITIAL_STATE, action) => {
    //action.type = which will be string.
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        
        default:
            return state; 
    }
}

export default userReducer;