import { useEffect, useState } from "react";
import fetchQuestions from "../lib/fetch";
import Question from "./Question";

function Quiz({ gameOver, setGameOver, resetQuiz }) {
  const [questionsArray, setQuestionsArray] = useState(null);
  const [questionElements, setQuestionElements] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchQuestions();
      setQuestionsArray(result);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (questionsArray) {
      const questions = questionsArray.map((question, index) => (
        <Question key={index} question={question} />
      ));
      setQuestionElements(questions);
    }
  }, [questionsArray]);

  return (
    <div className="quiz">
      {questionElements}

      {gameOver ? (
        <button className="button" onClick={resetQuiz}>
          Play Again
        </button>
      ) : (
        <button className="button" onClick={() => setGameOver(true)}>
          Check Answers
        </button>
      )}
    </div>
  );
}

export default Quiz;
