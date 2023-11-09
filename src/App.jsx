import { useEffect, useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import fetchQuestions from "./lib/fetch";
import BackgroundBlobs from "./components/BackgroundBlobs";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [data, setData] = useState(null);
  const [questionElements, setQuestionElements] = useState(null);

  useEffect(() => {
    const result = fetchQuestions();
    setData(result);
    console.log(data);
  }, []);

  // useEffect(() => {
  //   async function fetchQuestions() {
  //     try {
  //       const response = await fetch(
  //         "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchQuestions();
  // }, []);

  // useEffect(() => {
  //   if (quizStarted && data) {
  //     const questions = data.results.map((question, index) => (
  //       <Question key={index} question={question} />
  //     ));
  //     setQuestionElements(questions);
  //   }
  // }, [quizStarted, data]);

  // const finishQuiz = () => {
  //   setQuizEnded(true);
  // };

  return (
    <main>
      {quizStarted ? (
        <div className="quiz">
          {/* {questionElements}
          {!quizEnded ? (
            <button className="button" onClick={() => finishQuiz()}>
              Check Answers
            </button>
          ) : (
            <button className="button" onClick={() => setQuizStarted(false)}>
              Play Again
            </button>
          )} */}
        </div>
      ) : (
        <StartScreen setQuizStarted={setQuizStarted} />
      )}

      <BackgroundBlobs />
    </main>
  );
}

export default App;
