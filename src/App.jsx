import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import BackgroundBlobs from "./components/BackgroundBlobs";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const resetQuiz = () => {
    setQuizStarted(false);
    setGameOver(false);
  };

  return (
    <main>
      {quizStarted ? (
        <Quiz
          gameOver={gameOver}
          setGameOver={setGameOver}
          resetQuiz={resetQuiz}
        />
      ) : (
        <StartScreen setQuizStarted={setQuizStarted} />
      )}
      <BackgroundBlobs />
    </main>
  );
}

export default App;
