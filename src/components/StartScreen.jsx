import "../styles/start-screen.css";

export default function StartScreen({ setQuizStarted }) {
  return (
    <div className="start">
      <h1 className="start__title">Quiznet</h1>
      <p className="start__text">Testing mental mettle.</p>
      <button className="start__button" onClick={() => setQuizStarted(true)}>Start quiz</button>
    </div>
  );
}
