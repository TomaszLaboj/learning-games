import { useState, useEffect } from "react";
import questions from "./assests/questions.json";
import useInterval from "use-interval";
import QuestionComponent from "./Question";

const questionSet = questions.questionSet;
export type QuestionType = { question: string; answer: string };

type MathQuizProps = {
  updatePoints: (points: number) => void;
};

function MathQuiz({ updatePoints }: MathQuizProps) {
  const chooseRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionSet.length);
    return questionSet[randomIndex];
  };

  const [question, setQuestion] = useState<QuestionType>(
    chooseRandomQuestion()
  );
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  const [stats, setStats] = useState({ correct: 0, total: 0 });
  const [remainingTime, setRemainingTime] = useState(120);
  const [delay, setDelay] = useState<number | null>(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  useInterval(() => {
    setRemainingTime(remainingTime - 1);
  }, delay);

  useEffect(() => {
    const checkForBestScore = () => {
      if (stats.correct > bestScore) {
        setBestScore(stats.correct);
      }
    };
    if (remainingTime <= 0) {
      setTimerStarted(false);
      setDelay(null);
      checkForBestScore();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingTime, delay]);

  const handleStartTime = () => {
    setTimerStarted(true);
    setDelay(1000);
    setRemainingTime(120);
    setStats({ correct: 0, total: 0 });
    setQuestion(chooseRandomQuestion());
  };

  const handleAnswerInput = (value: string) => {
    setUserAnswer(value);
  };

  const resetResultAndAnswer = () => {
    setResult("");
  };

  const updateTotalPoints = (points: number) => {
    updatePoints(points);
  };
  const handleSubmitAnswer = () => {
    if (userAnswer === question.answer) {
      setStats({ correct: stats.correct + 1, total: stats.total + 1 });
      setResult("Good answer");
      updateTotalPoints(1);
    } else {
      setStats({ correct: stats.correct, total: stats.total + 1 });
      setResult("Wrong answer. The correct answer is " + question.answer);
    }
    setUserAnswer("");
    setQuestion(chooseRandomQuestion());
    setTimeout(resetResultAndAnswer, 2000);
  };

  const minsLeft = String(Math.floor(remainingTime / 60)).padStart(2, "0");
  const secsLeft = String(Math.floor(remainingTime % 60)).padStart(2, "0");

  return (
    <>
      <h3>Math quiz</h3>
      <p>BEST SCORE: {bestScore}</p>
      <p>
        Timer: {minsLeft}:{secsLeft}
      </p>

      {!delay ? (
        <button onClick={handleStartTime}>Start time</button>
      ) : (
        <button disabled>Start time</button>
      )}
      {timerStarted && (
        <p>{`${stats.correct} out of ${stats.total} correct`}</p>
      )}

      <br />
      <QuestionComponent
        question={question}
        userAnswer={userAnswer}
        handleAnswerInput={handleAnswerInput}
        handleSubmitAnswer={handleSubmitAnswer}
      />
      <p>{result === "" ? "" : result}</p>
    </>
  );
}

export default MathQuiz;
