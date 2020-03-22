import React, { useState, useEffect } from 'react';
import Quiz from './components/quiz';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizId, setQuizId] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);


  useEffect(() => {
    const fetchQuiz = async () => {
      let response = await fetch('http://localhost:2300/api/quizzes/1');
      const data = await response.json();

      setQuizId(data.id);
      setQuizTitle(data.title);
      setQuizQuestions(data.questions);
    };

    fetchQuiz();

  }, []);

  return (
    <Container>
      <h1>Language Learner Student App</h1>
      <Quiz
        title={quizTitle}
        questions={quizQuestions}
        id={quizId}
        initialQuestion={0}
        />
    </Container>
  );
}

export default App;
