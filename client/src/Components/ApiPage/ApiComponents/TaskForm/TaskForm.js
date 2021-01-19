/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styles from './TaskForm.module.css';
import { addNewTask } from '../../../../redux/actionsCreators/tasks';
import { useDispatch } from 'react-redux';

function TaskForm(props) {
  const { handlerTask, task, clearInput } = props;
  const dispatch = useDispatch();

  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (task) {
      dispatch(addNewTask(task));
    }
    clearInput();
  };

  return (
    <Form onSubmit={handlerSubmit} className={styles.Container}>
      <FormGroup>
        <Input
          className={styles.Input}
          type="text"
          name="Task"
          id="Task"
          placeholder="Что вы хотите сделать сегодня?"
          value={task}
          onChange={handlerTask}
        />
      </FormGroup>
      <Button className="d-flex justify-content-center" outline color="primary" size="lg">
        Создать
      </Button>
    </Form>
  );
}

export default TaskForm;
