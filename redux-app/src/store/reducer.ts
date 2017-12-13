import { combineReducers } from 'redux';
import  { users } from './user';

export const rootReducer = combineReducers({
    user: users
});