import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
let yes: boolean = true;
type Props = {
    pageredirect: string;
    header: string;
    option1: string;
    option2: string;
    option3: string;
}

const Start = (props: Props) => {
  const [Difficult, setDifficult] = useState("");
  const [numberOfQuestions, setnumberOfQuestions] = useState("");

  type MouseHandler = React.MouseEvent<HTMLButtonElement>;
  let history = useHistory();

  const handleClick = (e: string) => {

    history.push({
      pathname: props.pageredirect,
      state: {
        difficult: 
        e === 'easy' || 'medium' || 'hard' ? setDifficult(e): null,
        numberOfQuestion: e === '3' || '5' || '10' ? setnumberOfQuestions(e): null
        
      }

      

    });
  };

  return (
    <div className="LevelSelection">
      <h1 className="level__Header"> {props.header} </h1>
      <div>
        <Button
          variant="contained"
          color="secondary"
          fullWidth={yes}
          className='Button'
          style={{width: '350px', margin: '8px 0px'}}
          onClick={(e: MouseHandler) => handleClick(props.option1)}
        >
          {props.option1}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth={yes}
          className='Button'
          style={{width: '350px', margin: '8px 0px'}}
          onClick={(e: MouseHandler) => handleClick(props.option2)}
        >
          {props.option2}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth={yes}
          className='Button'
          style={{width: '350px', margin: '8px 0px'}}
          onClick={(e: MouseHandler) => handleClick(props.option3)}
        >
          {props.option3}
        </Button>
      </div>
    </div>
  );
};

export default Start;
