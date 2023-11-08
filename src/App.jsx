import { useEffect, useState } from "react";
import "./App.css";
import { decode } from "html-entities";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <>
      {quizStarted && data && data.results ? (
        data.results.map((question, index) => (
          <div key={index}>
            <h2>{decode(question.question)}</h2>
            <p>{decode(question.correct_answer)}</p>
            <hr />
          </div>
        ))
      ) : (
        <div>
          <h1>Quiznet</h1>
          <p>Testing mental mettle.</p>
          <button onClick={() => setQuizStarted(true)}>Start quiz</button>
        </div>
      )}
    </>
  );
}

export default App;
