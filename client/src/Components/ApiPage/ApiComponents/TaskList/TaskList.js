/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card, CardText, Label, Input } from 'reactstrap';
import styles from './TaskList.module.css';
import { deleteOneTask, changeTaskStatus } from '../../../../redux/actionsCreators/tasks';
import { useDispatch } from 'react-redux';

function TaskList(props) {
  const dispatch = useDispatch();
  const { list } = props;

  const handlerDelete = (_id) => dispatch(deleteOneTask(_id));
  const handlerChangeStatus = (_id) => dispatch(changeTaskStatus(_id));

  return (
    <div className={styles.ListContainer}>
      {list.length ? (
        list.map((el) => (
          <Card
            key={el.id}
            body
            inverse
            color={!el.status ? 'danger' : 'success'}
            className={styles.Card}
          >
            <div className={styles.Task}>
              <Label check className={styles.Check}>
                <Input
                  checked={el.status}
                  onChange={() => {
                    handlerChangeStatus(el._id);
                  }}
                  type="checkbox"
                  className={styles.Check}
                />{' '}
                <CardText className={styles.Text}>{el.description}</CardText>
              </Label>
              <Button
                onClick={() => {
                  handlerDelete(el._id);
                }}
                color="primary"
              >
                Удалить
              </Button>
            </div>
          </Card>
        ))
      ) : (
        <h4 className="text-primary">Нет активных задач!</h4>
      )}
    </div>
  );
}

export default TaskList;
