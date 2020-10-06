import React, { useState } from "react";
import Start from "./Component/Start";


const SelectDifficulty = () => {
  return (
    <Start
      pageredirect="/amount"
      header="Select Difficulty"
      option1="easy"
      option2="medium"
      option3="hard"
    />
  );
};

export default SelectDifficulty;
