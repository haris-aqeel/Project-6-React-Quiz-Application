import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,Switch} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <React.StrictMode>
        <App />
    </React.StrictMode>
  </Switch>
  </Router>,
  document.getElementById('root')
);
