import { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import BackgroundBlobs from "./components/BackgroundBlobs";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <main>
      {quizStarted ? (
        <Quiz
          setQuizStarted={setQuizStarted}
        />
      ) : (
        <StartScreen setQuizStarted={setQuizStarted} />
      )}
      <BackgroundBlobs />
    </main>
  );
}

export default App;
