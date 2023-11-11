import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import fetchQuestions from "../lib/fetch";
import Question from "./Question";
import "../styles/quiz.css";

function Quiz({ setQuizStarted }) {
  const [questionsArray, setQuestionsArray] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Fetch questions when the component mounts
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

  // Function to handle answer selection for a question
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

  // Check if all questions have been answered
  const allQuestionsAnswered = questionsArray.every(
    (question) => question.selectedAnswer
  );

  // Function to check answers and reveal correct answers
  const checkAnswers = () => {
    if (allQuestionsAnswered) {
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

  // Function to reset the quiz and all necessary states
  const resetQuiz = () => {
    setQuizStarted(false);
    setGameOver(false);
    setScore(0);
  };

  // Render each question
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
          disabled={!allQuestionsAnswered}
        >
          Check Answers
        </button>
      )}
    </div>
  );
}

export default Quiz;
