import { useState, useEffect } from "react";
import questions from "./assets/questions.json";
import "./App.css";
import useInterval from "use-interval";

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
  const [remainingTime, setRemainingTime] = useState(120);
  const [delay, setDelay] = useState<number | null>(null);
  const [timesUp, setTimesUp] = useState(false);

  useInterval(() => {
    setRemainingTime(remainingTime - 1);
  }, delay);

  useEffect(() => {
    if (remainingTime <= 0) {
      setTimesUp(true);
      setDelay(null);
    }
  }, [remainingTime, delay]);

  const handleStartTime = () => {
    setTimesUp(false);
    setDelay(1000);
    setRemainingTime(120);
    setStats({ correct: 0, total: 0 });
    setQuestion(chooseRandomQuestion());
  };

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
  const minsLeft = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const secsLeft = String(Math.floor(remainingTime % 60)).padStart(2, "0");
  return (
    <>
      <p>Math quiz</p>
      {!timesUp ? (
        <p>
          Timer: {minsLeft}:{secsLeft}
        </p>
      ) : (
        "Time's up!"
      )}
      {!delay ? (
        <button onClick={handleStartTime}>Start time</button>
      ) : (
        <button disabled>Start time</button>
      )}
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
