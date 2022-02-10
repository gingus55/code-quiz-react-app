import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import "./components/Header/header.css";
import { QuestionPage } from "./components/QuestionPage";
import { StartPage } from "./components/StartPage";
import "./components/QuestionPage/questionPage.css";

import { questionArray } from "./data/questionArray";

function App() {
  return (
    <>
      <h1>Code Quiz</h1>
      <Header />
      <StartPage />
      <Counter />
      <QuestionPage questionProp={[questionArray]} />
    </>
  );
}

export default App;
