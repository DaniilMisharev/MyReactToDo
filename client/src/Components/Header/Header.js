/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeAuthStatus, checkAuth } from '../../redux/actionsCreators/auth';

function Header() {
  const isAuth = useSelector((store) => store.isAuth);
  const history = useHistory();
  const dispatch = useDispatch();

  async function handlerLogout(event) {
    event.preventDefault();
    const response = await fetch(process.env.REACT_APP_API_LOGOUT, {
      method: 'GET',
      credentials: 'include',
    });
    if (response.status === 200) {
      dispatch(changeAuthStatus(false));
      history.push('/');
    }
  }

  function handlerRegistration() {
    history.push('/registration');
  }

  function handlerLogin() {
    history.push('/login');
  }

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <div className={styles.Container}>
      <h1 className={styles.Logo}>
        <b>
          MyReact
          <span>
            <i>ToDo</i>
          </span>
        </b>
      </h1>
      <div>
        {!isAuth ? (
          <>
            <Button color="info" className={styles.Button} onClick={handlerRegistration}>
              Зарегистрироваться
            </Button>
            <Button color="info" className={styles.Button} onClick={handlerLogin}>
              Войти
            </Button>
          </>
        ) : (
          <Button color="info" className={styles.Button} onClick={handlerLogout}>
            Выйти
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
