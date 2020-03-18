import React from 'react';
import Quiz from './components/quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizTitle: '',
      questions: [],
    };
  }

  fetchQuiz() {
    window.fetch('http://localhost:2300/api/quizzes/1')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          quizTitle: data.title,
          questions: data.questions
        });
      });
  }

  componentDidMount() {
    this.fetchQuiz();
  }

  render() {
    const {quizTitle, questions} = this.state;

    return (
        <div className="App">
          <h1>Language Learner Student App</h1>
        <Quiz title={quizTitle} questions={questions} />
        </div>
    );
  }
}

export default App;
