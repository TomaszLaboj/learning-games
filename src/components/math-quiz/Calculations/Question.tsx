import type { QuestionType } from "./MathQuiz";

interface QuestionProps {
  question: QuestionType;
  userAnswer: string;
  handleAnswerInput: (value: string) => void;
  handleSubmitAnswer: () => void;
}

function QuestionComponent({
  question,
  userAnswer,
  handleAnswerInput,
  handleSubmitAnswer,
}: QuestionProps) {
  const handleInput = (value: string) => {
    handleAnswerInput(value);
  };
  return (
    <>
      <p>
        {question.question + " = "}
        <input
          value={userAnswer}
          onChange={(event) => handleInput(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              document.getElementById("submit")?.click();
            }
          }}
        />
      </p>
      <button id="submit" onClick={handleSubmitAnswer}>
        Submit
      </button>
    </>
  );
}
export default QuestionComponent;
