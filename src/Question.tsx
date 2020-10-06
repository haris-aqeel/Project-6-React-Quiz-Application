import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import getData from './getData'

const Question = () => {
    type QuestionType = {
        category: string;
        type: string;
        difficulty: string;
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
    }
    
   var y : {
    response_code: string;
    results: QuestionType[];
};
    useEffect(() => {
        let data =  getData(`https://opentdb.com/api.php?amount=${amount}&difficulty=${level}&type=multiple`);
        data.then(
            (resolve: {
                response_code: string;
                results: QuestionType[];
            })=>{
             var x = resolve;
            }
            
        )  
        
    }, [])
    

    const location: {
        state: {
            level: string,
            amount: string
        }
    } = useLocation();

    const {state} = location;

    const {level, amount} = state;

    
    
   
     
    return (
        <div>
          
        </div>
    )
}

export default Question
