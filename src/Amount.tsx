import React from "react";
import Start from "./Component/Start";



const Amount = () => {

  return (
    <Start
      pageredirect="/question"
      header="Select Number Of Questions"
      option1='3'
      option2='5'
      option3='10'
    />
  );
};

export default Amount;
