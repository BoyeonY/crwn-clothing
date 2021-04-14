// reporesent all reducers -represent all of the state of our application 

import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
})
