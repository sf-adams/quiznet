import { decode } from "html-entities";
import "../styles/question.css";

export default function Question({ question }) {
  const answers = [...question.incorrect_answers, question.correct_answer];

  console.log(answers);
  const answerElements = answers.map((answer, index) => (
    <li className="question__item" key={index}>{decode(answer)}</li>
  ));

  return (
    <div className="question">
      <h2 className="question__title">{decode(question.question)}</h2>
      <ul className="question__list">{answerElements}</ul>
      <hr className="question__line" />
    </div>
  );
}
