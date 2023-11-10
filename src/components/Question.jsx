import { decode } from "html-entities";
import "../styles/question.css";
import { useEffect,useState } from "react";

export default function Question({ question, selectAnswer }) {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const answers = [...question.incorrect_answers, question.correct_answer];

  // Fisher-Yates shuffle used to randomise the array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const randomAnswers = shuffle(answers.slice());
    setShuffledAnswers(randomAnswers);
  }, []);

  const answerStyles = (answer) => {
    const styles = {
      backgroundColor: "",
      border: "",
      opacity: "",
    };

    if (question.reveal) {
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
      styles.backgroundColor =
        answer === question.selectedAnswer ? "#D6DBF5" : "";
      styles.border =
        answer === question.selectedAnswer ? "1px solid #D6DBF5" : "";
    }

    return styles;
  };

  const answerElements = shuffledAnswers.map((answer, index) => (
    <li
      className="question__item"
      style={
        question.reveal
          ? answerStyles(answer)
          : {
              backgroundColor:
                answer === question.selectedAnswer ? "#D6DBF5" : "",
              border:
                answer === question.selectedAnswer ? "1px solid #D6DBF5" : "",
            }
      }
      key={index}
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
