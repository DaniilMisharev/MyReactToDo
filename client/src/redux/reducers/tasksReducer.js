import * as TYPES from '../types/task';

function tasksReducer(state = [], action) {
  switch (action.type) {
    case TYPES.ADD_ALL:
      return [...action.payload];

    case TYPES.ADD_NEW:
      return [...state, action.payload];

    case TYPES.DELETE:
      return state.filter((el) => el._id !== action.payload);

    case TYPES.CHANGE_STATUS:
      return state.map((el) => {
        if (el._id === action.payload._id) {
          el.status = action.payload.status;
        }
        return el;
      });
    default:
      return state;
  }
}

export default tasksReducer;
