import { useEffect, useState } from "react";
import fetchQuestions from "../lib/fetch";
import Question from "./Question";
import { nanoid } from "nanoid";

function Quiz({ gameOver, setGameOver, resetQuiz }) {
  const [questionsArray, setQuestionsArray] = useState(null);
  const [questionElements, setQuestionElements] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchQuestions();
      setQuestionsArray(
        result.map((question) => {
          return {
            id: nanoid(),
            ...question,
            selectedAnswer: "",
          };
        })
      );
    };
    fetch();
  }, []);

  useEffect(() => {
    if (questionsArray) {
      const questions = questionsArray.map((question) => (
        <Question
          key={question.id}
          question={question}
          selectAnswer={selectAnswer}
        />
      ));
      setQuestionElements(questions);
    }
  }, [questionsArray]);

  const selectAnswer = (answer, id) => {
    setQuestionsArray((prevArray) => {
      return prevArray.map((prevQuestion) => {
        return prevQuestion.id === id
          ? {
              ...prevQuestion,
              selectedAnswer: answer,
            }
          : {
              ...prevQuestion,
            };
      });
    });
  };

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
