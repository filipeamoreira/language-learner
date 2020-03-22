import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Question from './question';

function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(props.initialQuestion);
  const [formData, setFormData] = useState({});

  const { questions, title } = props;

  const questionItems = () => {

    return questions.map((question, index) => (
      <div key={index}>
        <Question
          type={question.type}
          answers={question.answers}
          enunciate={question.enunciate}
          currentQuestion={currentQuestion}
          questionIndex={index}
          handleChange={handleChange}
          />
      </div>
    ));
  }

  const next = () => {
    const newCurrentQuestion = currentQuestion >= questions.length - 1 ? questions.length : currentQuestion + 1;
    setCurrentQuestion(newCurrentQuestion);
  }

  const prev = () => {
    const newCurrentQuestion = currentQuestion <= 0 ? 0 : currentQuestion - 1;
    setCurrentQuestion(newCurrentQuestion);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    let data = { ...formData };
    formData[name] = value;
    setFormData(formData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('formData');
    console.log(formData);
  }

  const previousButton = () => {
    if (currentQuestion !== 0){
      return (
        <button
          className="btn btn-primary float-left"
          type="button" onClick={prev}>
          Previous
        </button>
      )
    }

    return null;
  }


  const nextButton = () => {

    if (currentQuestion < questions.length - 1){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={next}>
          Next
        </button>
      )
    }

    return null;
  }

  const submitButton = () => {
    console.log(`currentQuestion => ${currentQuestion}`);
    console.log(`questions.length => ${questions.length}`);

    if (currentQuestion === questions.length - 1) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={handleSubmit}>
          Submit Answers
        </button>
      )
    }

    return null;
  }


  return(
    <div>
      <Form>
        <h2>{title}</h2>
        <p>Question {currentQuestion + 1} of {questions.length}</p>
        {questionItems()}
        {previousButton()}
        {nextButton()}
        {submitButton()}
      </Form>
    </div>
  );
}

export default Quiz;
