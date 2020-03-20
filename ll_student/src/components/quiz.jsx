import React from 'react';
import Form from 'react-bootstrap/Form';
import Question from './question';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: props.initialQuestion
    };
  }

  questions() {
    const { questions } = this.props;
    const { currentQuestion } = this.state;

    return questions.map((question, index) => (
      <div key={index}>
        <Question
          type={question.type}
          answers={question.answers}
          enunciate={question.enunciate}
          currentQuestion={currentQuestion}
          questionIndex={index}
          handleChange={this.handleChange}
          />
      </div>
    ));
  }

  next = () => {
    const questionsLength = this.props.questions.length;
    let { currentQuestion } = this.state;

    currentQuestion = currentQuestion >= questionsLength - 1 ? questionsLength : currentQuestion + 1;
    this.setState({
      currentQuestion: currentQuestion
    })
  }

  prev = () => {
    let { currentQuestion } = this.state;

    currentQuestion = currentQuestion <= 0 ? 0 : currentQuestion - 1;
    this.setState({
      currentQuestion: currentQuestion
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('this.state');
    console.log(this.state);
  }

  previousButton() {
    const { currentQuestion } = this.state;
    if (currentQuestion !== 0){
      return (
        <button
          className="btn btn-primary float-left"
          type="button" onClick={this.prev}>
          Previous
        </button>
      )
    }

    return null;
  }


  nextButton() {
    const { currentQuestion } = this.state;

    if (currentQuestion < this.props.questions.length - 1){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this.next}>
          Next
        </button>
      )
    }

    return null;
  }

  submitButton() {
    const { currentQuestion } = this.state;

    console.log(`currentQuestion => ${currentQuestion}`);
    console.log(`questions.length => ${this.props.questions.length}`);

    if (currentQuestion === this.props.questions.length - 1) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this.handleSubmit}>
          Submit Answers
        </button>
      )
    }

    return null;
  }


  render() {
    const { title, questions } = this.props;
    const { currentQuestion } = this.state;

    return(
      <div>
        <Form>
          <h2>{title}</h2>
          <p>Question {currentQuestion + 1} of {questions.length}</p>
          {this.questions()}
          {this.previousButton()}
          {this.nextButton()}
          {this.submitButton()}
        </Form>
      </div>
    );
  }
}

export default Quiz;
