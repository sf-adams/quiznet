import { decode } from "html-entities";
import "../styles/question.css";

export default function Question({ question }) {
  const answers = [...question.incorrect_answers, question.correct_answer];

  // Fisher-Yates shuffle used to randomise the array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomAnswers = shuffle(answers.slice());

  const answerElements = randomAnswers.map((answer, index) => (
    <li
      className="question__item"
      // style={{
      //   backgroundColor:
      //     answer === question.correct_answer ? "#94D7A2" : "#F8BCBC",
      // }}
      key={index}
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
