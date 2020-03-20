import React from 'react';
import Form from 'react-bootstrap/Form';

function FreeText(props) {
  const { handleChange, questionIndex } = props;

  return(
    <Form.Control
      type="text"
      placeholder="Enter your answer here"
      onBlur={handleChange}
      name={questionIndex}
      />
  )
}

export default FreeText;
