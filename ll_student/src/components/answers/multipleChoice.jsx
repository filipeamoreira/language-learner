import React from 'react';
import Form from 'react-bootstrap/Form';

function MultipleChoice(props) {
  const { answers, enunciate, handleChange, questionIndex } = props;
  const answerItems = answers.map((answer, index) => (
    <div key={`default-${index}`} className="mb-3">
      <Form.Check
        type="radio"
        id={`default-radio`}
        name={questionIndex}
        value={index}
        label={answer}
        onChange={handleChange}
        />
    </div>
  ));

  return(
    <React.Fragment>
      {answerItems}
    </React.Fragment>
  )
}

export default MultipleChoice;
