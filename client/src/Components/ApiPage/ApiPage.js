/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './ApiComponents/TaskForm/TaskForm';
import TaskList from './ApiComponents/TaskList/TaskList';
import { addAllTasks } from '../../redux/actionsCreators/tasks';

function ApiPage() {
  const list = useSelector((store) => store.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const clearInput = () => {
    setTask('');
  };

  const handlerTask = (event) => {
    setTask(event.target.value);
  };

  useEffect(() => {
    dispatch(addAllTasks());
  }, []);

  return (
    <>
      <TaskForm handlerTask={handlerTask} task={task} clearInput={clearInput} />
      <TaskList list={list} />
    </>
  );
}

export default ApiPage;
