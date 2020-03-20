import React from 'react';
import FreeText from './answers/freeText';
import MultipleChoice from './answers/multipleChoice';

function Question(props) {

  const { type, answers, enunciate, currentQuestion, questionIndex, handleChange } = props;

  const answerComponent = () => {
    switch(type){
    case 'free-text':
      return <FreeText handleChange={props.handleChange} questionIndex={questionIndex} />;
    case 'multiple-choice':
      return <MultipleChoice answers={answers} enunciate={enunciate} handleChange={handleChange} questionIndex={questionIndex} />;
    default:
      console.log('Out of switch scope');
    }
  };

  if (currentQuestion !== questionIndex) {
    return null;
  }

  return(
    <div className="question">
      <h2 className="enunciate">{enunciate}</h2>
      {answerComponent()}
    </div>
  );
}

export default Question;
