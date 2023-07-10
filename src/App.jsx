import Quiz from "./components/Quiz";
import { reactQuiz } from "./data/react-questions";

function App() {
  return <Quiz questions={reactQuiz.questions} />;
}

export default App;
