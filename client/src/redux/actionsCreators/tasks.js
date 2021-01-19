import * as TYPES from '../types/task';

export const addAllTasks = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: 'GET',
    credentials: 'include',
  });
  if (response.status === 200) {
    const data = await response.json();
    dispatch(addAll(data));
  } else {
    dispatch(addAll([]));
  }
};

export const deleteOneTask = (_id) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _id,
    }),
  });
  if (response.status === 200) {
    dispatch(deleteTask(_id));
  }
};

export const changeTaskStatus = (_id) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _id,
    }),
    credentials: 'include',
    redirect: 'follow',
  });
  if (response.status === 200) {
    const data = await response.json();
    dispatch(changeStatus(data));
  }
};

export const addNewTask = (task) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      task,
    }),
  });
  if (response.status === 200) {
    const data = await response.json();
    dispatch(addNew(data));
  }
};

export function addAll(taskArr) {
  return {
    type: TYPES.ADD_ALL,
    payload: taskArr,
  };
}

export function addNew(newTask) {
  return {
    type: TYPES.ADD_NEW,
    payload: newTask,
  };
}

export function deleteTask(id) {
  return {
    type: TYPES.DELETE,
    payload: id,
  };
}

export function changeStatus(task) {
  return {
    type: TYPES.CHANGE_STATUS,
    payload: task,
  };
}
