import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import SelectDifficulty from './SelectDifficulty';
import Amount from './Amount';
import Question from './Question';


function App() {

  type MouseHandler = React.MouseEvent<HTMLButtonElement>;
  return (
    <div className="App">
      
      <Route exact path='/'> 
          <SelectDifficulty />
      </Route>
      <Route exact path='/amount'> 
          <Amount />
      </Route>
      <Route exact path='/question'> 
          <Question />
      </Route>

    </div>
  );
}

export default App;
