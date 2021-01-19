import * as TYPES from '../types/auth';

function authReducer(state = false, action) {
  switch (action.type) {
    case TYPES.CHANGE_AUTH_STATUS:
      return action.payload;
    default:
      return state;
  }
}

export default authReducer;
