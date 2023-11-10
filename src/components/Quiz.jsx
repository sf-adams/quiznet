import { useEffect, useState } from "react";
import fetchQuestions from "../lib/fetch";
import Question from "./Question";
import { nanoid } from "nanoid";
import "../styles/quiz.css";

function Quiz({ setQuizStarted }) {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions().then((questions) => {
      setQuestionsArray(
        questions.map((question) => {
          return {
            ...question,
            id: nanoid(),
            selectedAnswer: "",
            reveal: false,
          };
        })
      );
    });
  }, []);

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

  const eachQuestionAnswered = questionsArray.every(
    (question) => question.selectedAnswer
  );

  const checkAnswers = () => {
    if (eachQuestionAnswered) {
      setGameOver(true);

      const currentScore = questionsArray.reduce((totalScore, question) => {
        return (
          totalScore +
          (question.selectedAnswer === question.correct_answer ? 1 : 0)
        );
      }, 0);

      setScore(currentScore);

      setQuestionsArray((prevQuestionsArray) => {
        return prevQuestionsArray.map((question) => ({
          ...question,
          reveal: true,
        }));
      });
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setGameOver(false);
    setScore(0);
  };

  const questionElements = questionsArray.map((question) => (
    <Question
      key={question.id}
      question={question}
      selectAnswer={selectAnswer}
    />
  ));

  return (
    <div className="quiz">
      {questionElements}

      {gameOver ? (
        <div className="quiz__results">
          <h2>
            You scored {score}/{questionsArray.length} correct answers
          </h2>
          <button className="button" onClick={resetQuiz}>
            Play Again
          </button>
        </div>
      ) : (
        <button
          className="button"
          onClick={checkAnswers}
          disabled={!eachQuestionAnswered}
        >
          Check Answers
        </button>
      )}
    </div>
  );
}

export default Quiz;
