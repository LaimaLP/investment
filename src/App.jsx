import "./App.css";
import { Header } from "./components/Header";
import Results from "./components/Results";
import { UserInput } from "./components/UserInput";
import { useState } from "react";

function App() {
  
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(previousInput => {
      return {
        ...previousInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <div id="mainContain">
        <Header />
        <UserInput userInput={userInput} handleChange={handleChange} />
        <Results input={userInput} />
      </div>
    </>
  );
}

export default App;
