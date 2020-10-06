import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const Question = () => {
const [response, setresponse] =useState<QuestionType[]>()

  type QuestionType = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
 

  const location: {
    state: {
      level: string;
      amount: string;
    };
  } = useLocation();

  const { state } = location;
  let { level, amount } = state;
  var data;
  useEffect(() => {

    const getData = async () => {
      let data = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`);
      let fetchData = await data.json();
      setresponse(fetchData.results)
    };
    getData();
    
  }, [amount, level]);

  

return <div><h1>{response!==undefined ? response.map((curr)=>curr.category): '...Loading'}</h1></div>;
};

export default Question;
