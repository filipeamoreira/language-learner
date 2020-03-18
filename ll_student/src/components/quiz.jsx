import React from 'react';
import Question from './question';
import FreeTextAnswer from './freeTextAnswer';

function Quiz(props) {
  const questions = props.questions;
  const questionItems = questions.map((question) => (
    <div>
      <Question enunciate={question.enunciate} />
      <FreeTextAnswer />
    </div>
  ));

  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.questions.length} questions</p>
      {questionItems}
    </div>
  );
}

export default Quiz;
