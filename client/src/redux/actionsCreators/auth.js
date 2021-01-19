import * as TYPES from '../types/auth';

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_AUTH, {
    method: 'GET',
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(changeAuthStatus(true));
  }
};

export function changeAuthStatus(isAuth) {
  return {
    type: TYPES.CHANGE_AUTH_STATUS,
    payload: isAuth,
  };
}
