import { decode } from "html-entities";
import "../styles/question.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

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
    shuffleArray();
  }, [])

  const shuffleArray = () => {
    const randomAnswers = shuffle(answers.slice());
    setShuffledAnswers(randomAnswers);
  }

  const answerElements = shuffledAnswers.map((answer, index) => (
    <li
      className="question__item"
      style={{
        backgroundColor:
          answer === question.selectedAnswer ? "#D6DBF5" : "",
      }}
      key={index}
      onClick={() => selectAnswer(answer, question.id)}
    >
      {decode(answer)}
    </li>
  ));

  console.log(question.selectedAnswer);

  return (
    <div className="question">
      <h2 className="question__title">{decode(question.question)}</h2>
      <ul className="question__list">{answerElements}</ul>
      <hr className="question__line" />
    </div>
  );
}
