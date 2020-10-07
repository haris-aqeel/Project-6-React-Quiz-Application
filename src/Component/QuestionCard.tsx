import React from "react";
import Photo from '../logo.svg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


type QuestionCardProp = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const QuestionCard = ({
  question,
  correct_answer,
  incorrect_answers,
}: QuestionCardProp) => {
  incorrect_answers.push(correct_answer);
  let unshuffled = incorrect_answers;

  let options: string[] = unshuffled
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return (
    <div className="row QuestionCard">
      <div className="col col-12 col-sm-12 col-lg-6 col-md-6 QuestionIllustration">
        <img 
        src={Photo} 
        width= '50%'
        className='Photo__Illustration'/>
      </div>
      <div className="col col-12 col-sm-12 col-lg-6 col-md-6 QuestionTemplate">
        <h2>{question}</h2>
        <div className='Options'>
          {options.map((currentOption) => {
            return (
            <div className='option_Each'>
                
                    <p className='option_number'>
                        {currentOption}
                    </p>
                
            </div>);
          })}

</div>
        
      </div>
    </div>
  );
};

export default QuestionCard;
