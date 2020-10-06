import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";

let yes: boolean = true;
type Props = {
  pageredirect: string;
  header: string;
  option1: string;
  option2: string;
  option3: string;
};

const Start = (props: Props) => {
  
  const [Difficult, setDifficult] = useState("");
  const [numberOfQuestions, setnumberOfQuestions] = useState("");
  type Location = {
    state: {
      level: string;
      amount: string;
    }
  }

  type MouseHandler = React.MouseEvent<HTMLButtonElement>;
  const location:Location = useLocation();
  let history = useHistory();

  useEffect(() => {
    

    const redirectPage = async () => {
      if (Difficult && !numberOfQuestions){
        
        history.push({
          pathname: props.pageredirect,
          state: {level: Difficult}
        })
      }else if (numberOfQuestions) {
        let x = location.state;
        history.push({
          pathname: props.pageredirect,
          state: {...x,  amount: numberOfQuestions}
        })
        
      } 
    
    }
    redirectPage()
    
  }, [Difficult, numberOfQuestions, props.pageredirect,location.state, history]);
  
  const handleClick = (e: string) => {
    switch (e) {
      case "easy":
      case "medium":
      case "hard":
        setDifficult(e);
        break;

      case "3":
      case "5":
      case "10":
        setnumberOfQuestions(e);
        break;

      default:
        console.log("Not any case");
    }
  };

  return (
    <div className="LevelSelection">
      <h1 className="level__Header"> {props.header} </h1>
      <div>
        <Button
          variant="contained"
          color="secondary"
          fullWidth={yes}
          className="Button"
          style={{ width: "350px", margin: "8px 0px" }}
          onClick={(e: MouseHandler) => handleClick(props.option1)}
        >
          {props.option1}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth={yes}
          className="Button"
          style={{ width: "350px", margin: "8px 0px" }}
          onClick={(e: MouseHandler) => handleClick(props.option2)}
        >
          {props.option2}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth={yes}
          className="Button"
          style={{ width: "350px", margin: "8px 0px" }}
          onClick={(e: MouseHandler) => handleClick(props.option3)}
        >
          {props.option3}
        </Button>
      </div>
    </div>
  );
};

export default Start;
