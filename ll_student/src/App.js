import React from 'react';
import Quiz from './components/quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizId: null,
      quizTitle: '',
      quizQuestions: [],
      initialQuestion: 0
    };
  }

  fetchQuiz() {
    window.fetch('http://localhost:2300/api/quizzes/1')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          quizId: data.id,
          quizTitle: data.title,
          quizQuestions: data.questions
        });
      });
  }

  componentDidMount() {
    this.fetchQuiz();
  }

  render() {
    const {quizId, quizTitle, quizQuestions, initialQuestion} = this.state;

    return (
        <div className="App">
          <h1>Language Learner Student App</h1>
          <Quiz
           title={quizTitle}
           questions={quizQuestions}
           id={quizId}
           initialQuestion={initialQuestion}
        />
        </div>
    );
  }
}

export default App;
