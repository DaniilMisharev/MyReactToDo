import React from 'react';
import styles from './main.module.css';

function MainPage() {
  return (
    <>
      <div className={styles.Container}>
        <h1 className="text-primary">
          Welcome to <b>MyReactToDo</b>
        </h1>
        <p>Зарегистрируйтесь и создавайте свой список дел!</p>
      </div>
    </>
  );
}

export default MainPage;
