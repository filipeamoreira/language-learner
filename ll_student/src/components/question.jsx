import React from 'react';
import FreeText from './answers/freeText';
import MultipleChoice from './answers/multipleChoice';

function Question(props) {

  const { type, answers, enunciate, currentQuestion, questionIndex } = props;

  const answerComponent = (type, answers, enunciate) => {
    switch(type){
    case 'free-text':
      return <FreeText />;
    case 'multiple-choice':
      return <MultipleChoice answers={answers} enunciate={enunciate}/>;
    default:
      console.log('Out of switch scope');
    }
  };

  if (currentQuestion !== questionIndex) {
    return null;
  }

  return(
    <div>
      <h2 className="enunciate">{enunciate}</h2>
      {answerComponent(type, answers, enunciate)}
    </div>
  );
}

export default Question;
