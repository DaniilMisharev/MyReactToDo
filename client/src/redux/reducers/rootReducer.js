import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  isAuth: authReducer,
});

export default rootReducer;
