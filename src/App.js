import { useState } from "react";
import "./App.css";
import Question from "./components/question";
import questions from "./constants/questions.json";
import Result from "./components/result";

function App() {
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  const [UserAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(CurrentQuestion + 1);
    setUserAnswers([...UserAnswers, isCorrect]);
  };

  const resetQuiz=()=>{
    setCurrentQuestion(0);
    setUserAnswers([]);
  }

  return (
    <div className="App">
      <h1>World Quiz</h1>
      {/* questions component */}
      {CurrentQuestion < questions.length && (
        <Question
          question={questions[CurrentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {/* Result component */}
      {CurrentQuestion===questions.length &&(<Result 
      UserAnswers={UserAnswers}
      questions={questions}
      resetQuiz={resetQuiz}
      />)}
    </div>
  );
}

export default App;
