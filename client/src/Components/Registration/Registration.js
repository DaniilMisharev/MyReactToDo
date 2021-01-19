/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { changeAuthStatus } from '../../redux/actionsCreators/auth';
import styles from './registration.module.css';

function Registration() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const { name, email, password } = inputs;

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(process.env.REACT_APP_API_REGISTRATION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      credentials: 'include',
      redirect: 'follow',
    });
    if (response.status === 200) {
      dispatch(changeAuthStatus(true));
      return history.push('/api');
    }
    return setError('Повторите регистрацию');
  }

  return (
    <Form inline onSubmit={handleSubmit} className={styles.ContainerForm}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input
          type="name"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
      </FormGroup>{' '}
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
      </FormGroup>{' '}
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
      </FormGroup>{' '}
      <Button outline color="primary">
        Зарегистрироваться
      </Button>
      <div className="error">{error}</div>
    </Form>
  );
}

export default Registration;
