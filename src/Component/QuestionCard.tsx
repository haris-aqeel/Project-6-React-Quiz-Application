import React, { useState } from "react";
import Photo from "../logo.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { QuestionProps } from "../Types/types";
import { makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {useHistory} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});
   
const QuestionCard = ({question,correct_answer,callback, options, amount}: QuestionProps) => {

  const [Value, setValue] = useState<string>();
  const [counter, setCounter] = useState<number>(0);
  const [total, settotal] = useState<number>(0);
  const classes = useStyles();
  let history = useHistory();

  const evaluateResult =(): void =>{
    if (total<amount){
    settotal(total+1)    
    
    if (correct_answer === Value) {
      setCounter(counter+1)
      setValue("")
    }}else{
      history.push({
          pathname: '/result',
          state: {
            counter: counter,
            amount: amount
          }
        })
    }
    
  }


  return (
    <div className="row QuestionCard">
      <div className="col col-12 col-sm-12 col-lg-6 col-md-6 QuestionIllustration">
      <div className={classes.root}>
        <Typography id="discrete-slider-small-steps" gutterBottom>
          Questions
        </Typography>
        <Slider
          defaultValue={total}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={0}
          max={amount}
          valueLabelDisplay="auto"
          value={total}
        />
    </div>
        <div className='display_Score'>
          Score: {counter}
        </div>
        <div 
        >

        <img src={Photo} width="50%" className="Photo__Illustration" />
        </div>
      </div>

      <div className="col col-12 col-sm-12 col-lg-6 col-md-6 QuestionTemplate">
        <h2>{question}</h2>
        <form onSubmit={callback}>
          <ul className="Options">
            {options.map((currentOption: string, index: number) => {
              return (
                <li className="option_number" key={index}>
                  <div className="option_Each">
                  <Radio
                    checked={Value === currentOption}
                    value={currentOption}
                    name="name"
                    style={{userSelect: 'none'}}
                    onChange={(e)=>setValue(e.target.value)}
                    />
                      {currentOption}
                  </div>
                </li>
              );
            })}

              {total < amount ?  

                <button type="submit" onClick={evaluateResult} className='submit_Button'>
                      Next Question        
                </button> 
              
              : 
              <button type="submit" onClick={evaluateResult} className='submit_Button'>
                      Submit
                </button> }
            
          </ul>
        </form>
      </div>
    </div>
  );
};

AOS.init();

export default QuestionCard;
