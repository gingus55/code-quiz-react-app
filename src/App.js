import Counter from "./components/Counter";
import { Header } from "./components/Header";
import "./components/Header/header.css";
import { StartPage } from "./components/StartPage";

function App() {
  return (
    <>
      <h1>Code Quiz</h1>
      <Header />
      <StartPage />
      <Counter />
    </>
  );
}

export default App;
