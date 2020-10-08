import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import SelectDifficulty from './SelectDifficulty';
import Amount from './Amount';
import Question from './Question';
import Result from './Result'

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
      <Route exact path='/result'> 
          <Result />
      </Route>

    </div>
  );
}

export default App;
