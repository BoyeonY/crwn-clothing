const INITIAL_STATE = {
    currentUser : null
}

// If state is not ever undefined, take INITIAL_STATE value. Null is state value.
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        
        default:
            return state; 
    }
}

export default userReducer;