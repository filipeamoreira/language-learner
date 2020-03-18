import React from 'react';
import Form from 'react-bootstrap/Form';

function MultipleChoice(props) {
  const { answers, enunciate } = props;
  const answerItems = answers.map((answer, index) => (
    <div key={`default-${index}`} className="mb-3">
      <Form.Check
        type="radio"
        id={`default-radio`}
        name={enunciate}
        label={answer}

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
