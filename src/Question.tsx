import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionCard from "./Component/QuestionCard";
import {QuestionType} from './Types/types'
import {Location} from './Types/types'

const Question = () => {
  const [response, setresponse] = useState<QuestionType[]>();
  const [currentStep, setcurrentStep] = useState<number>(0)
  

  const location: Location = useLocation();

  const { state } = location;
  let { level, amount } = state;
 
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`
      );
      let fetchData = await data.json();
      setresponse(fetchData.results);
    };
    getData();
  }, [amount, level]);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (currentStep < (+amount-1)){
      setcurrentStep(currentStep+1)
    }else{
      setcurrentStep(currentStep)
    }}



  return (
    <div>
      <h1>
        {response !== undefined
          ? 
            
        
               <QuestionCard
                amount={+amount}
                question={response[currentStep].question}
                correct_answer= {response[currentStep].correct_answer}
                incorrect_answers= {response[currentStep].incorrect_answers}
                callback ={handleSubmit}
                options={[...response[currentStep].incorrect_answers,response[currentStep].correct_answer ]
                .map((a) => ({ sort: Math.random(), value: a }))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value)
                }
                />
              
          : "...Loading"}
      </h1>
    </div>
  );
};

export default Question;
