import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [ {user}, dispatch ] = useStateValue();

  return (
    <div className="App">
      <Router >
        {!user ? (
          <Login />
        ) : (
          <>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                  <h1>Welcome to Slack-clone</h1>
                  <Redirect to='/room/CATuksHYNbZZoJ6Sympn'/>;
              </Route>
            </Switch>
          </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
