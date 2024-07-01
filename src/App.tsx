import { useState } from "react";
import questions from "./assets/questions.json";
import "./App.css";

const questionSet = questions.questionSet;
type Question = { question: string; answer: string };
function App() {
  const chooseRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionSet.length);
    return questionSet[randomIndex];
  };

  const [question, setQuestion] = useState<Question>(chooseRandomQuestion());
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  const [stats, setStats] = useState({ correct: 0, total: 0 });

  const handleAnswerInput = (value: string) => {
    console.log(value);
    setUserAnswer(value);
  };

  const resetResultAndAnswer = () => {
    setResult("");
    setUserAnswer("");
    setQuestion(chooseRandomQuestion());
  };

  const handleSubmitAnswer = () => {
    if (userAnswer === question.answer) {
      setStats({ correct: stats.correct + 1, total: stats.total + 1 });
      setResult("Good answer");
    } else {
      setStats({ correct: stats.correct, total: stats.total + 1 });
      setResult("Wrong answer. The correct answer is " + question.answer);
    }
    setTimeout(resetResultAndAnswer, 2000);
  };

  return (
    <>
      <p>Math quiz</p>
      <p>{`${stats.correct} out of ${stats.total} correct`}</p>
      <br />
      <label>
        {question.question + " = "}
        <input
          value={userAnswer}
          onChange={(event) => handleAnswerInput(event.target.value)}
        />
      </label>
      <button onClick={handleSubmitAnswer}>Submit</button>
      <p>{result === "" ? "" : result}</p>
    </>
  );
}

export default App;
