import { useState } from "react";
import Header from "./components/Header"
import InputGroup from "./components/InputGroup"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const  isValidInput = userInput.duration >= 1;

  function handleChange(inputIdentifire, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifire]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <InputGroup handleChange={handleChange}  userInput={userInput}/>
      {isValidInput && <Results input={userInput}/>}
      {!isValidInput && <p className="center">Please enter the duration greater thaan zero</p>}
    </>
  )
}

export default App
