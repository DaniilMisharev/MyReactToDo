/* eslint-disable no-underscore-dangle */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import ApiPage from './Components/ApiPage/ApiPage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/api">
            <ApiPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
