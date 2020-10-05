import React, {useEffect, useState} from 'react';
import './App.css';
import getData from './getData'


function App() {

  const [difficulty, setDifficulty] = useState('easy');
  const [amount, setAmount] = useState('1');
  const [type, setType] = useState('multiple');
  const [Data, setData] = useState();


  useEffect(()=> {
    
    let data =  getData(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`);
    data.then
    ((resolve)=>setData(resolve.results), console.error)

  }, [difficulty, amount, type])

  type MouseHandler = React.MouseEvent<HTMLButtonElement>;
  const checkAnswer = (e: MouseHandler) => {
    console.log(e)   
  }


  
  return (
    <div className="App">
      <button  onClick={(e : MouseHandler)=>setDifficulty('easy')}>Easy</button>
      <button onClick={(e : MouseHandler)=>setDifficulty('medium')}>Medium</button>
      <button onClick={(e : MouseHandler)=>setDifficulty('hard')} >Hard</button>
      
    </div>
  );
}

export default App;
