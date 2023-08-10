import Quiz from "./components/Quiz/Quiz";
import { reactQuiz } from "./data/react-questions";
import "./sass/style.scss";

function App() {
  return <Quiz questions={reactQuiz.questions} />;
}

export default App;
