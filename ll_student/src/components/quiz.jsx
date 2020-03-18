import React from 'react';
import Form from 'react-bootstrap/Form';
import Question from './question';
import FreeText from './answers/freeText';
import MultipleChoice from './answers/multipleChoice';

function Quiz(props) {
  const questions = props.questions;

  const questionTypeComponent = (type, answers, enunciate) => {
    switch(type){
    case 'free-text':
      return <FreeText />;
    case 'multiple-choice':
      return <MultipleChoice answers={answers} enunciate={enunciate}/>;
    default:
      console.log('Out of switch scope');
    }
  };

  const questionItems = questions.map((question, index) => (
    <div key={index}>
      <Question enunciate={question.enunciate} />
      {questionTypeComponent(question.type, question.answers, question.enunciate)}
    </div>
  ));

  return(
    <div>
      <Form>
        <h2>{props.title}</h2>
        <p>{props.questions.length} questions</p>
        {questionItems}
        <input type="submit" value="Submit answers" />
      </Form>
    </div>
  );
}

export default Quiz;
