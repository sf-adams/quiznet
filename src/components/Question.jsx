import { useEffect,useState } from "react";
import { decode } from "html-entities";
import "../styles/question.css";

export default function Question({ question, selectAnswer }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // Fisher-Yates shuffle used to randomise the array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the answers when the question changes
  useEffect(() => {
    console.log("Run");
    const answers = [...question.incorrect_answers, question.correct_answer]
    const randomAnswers = shuffle(answers.slice());
    setShuffledAnswers(randomAnswers);
  }, [question.incorrect_answers, question.correct_answer]);

  // Function to determine styling based on reveal and user's selection
  const getAnswerStyles = (answer) => {
    const styles = {
      backgroundColor: "",
      border: "",
      opacity: "",
    };

    if (question.reveal) {
      // Styling for revealed answers
      if (answer === question.correct_answer) {
        styles.backgroundColor = "#94d7a2";
        styles.border = "1px solid #94d7a2";
      } else if (answer === question.selectedAnswer) {
        styles.backgroundColor = "#F8BCBC";
        styles.border = "1px solid #F8BCBC";
      } else {
        styles.opacity = "0.5";
      }
    } else {
      // Styling for unrevealed answers
      styles.backgroundColor =
        answer === question.selectedAnswer ? "#D6DBF5" : "";
      styles.border =
        answer === question.selectedAnswer ? "1px solid #D6DBF5" : "";
    }

    return styles;
  };

  // Map shuffled answers to list items
  const answerElements = shuffledAnswers.map((answer) => (
    <li
      className="question__item"
      style={
        question.reveal
          ? getAnswerStyles(answer)
          : {
              backgroundColor:
                answer === question.selectedAnswer ? "#D6DBF5" : "",
              border:
                answer === question.selectedAnswer ? "1px solid #D6DBF5" : "",
            }
      }
      key={answer}
      onClick={() => selectAnswer(answer, question.id)}
    >
      {decode(answer)}
    </li>
  ));

  return (
    <div className="question">
      <h2 className="question__title">{decode(question.question)}</h2>
      <ul className="question__list">{answerElements}</ul>
      <hr className="question__line" />
    </div>
  );
}
