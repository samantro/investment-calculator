import Input from "./Input";

export default function InputGroup({handleChange, userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input userInput={userInput} inputIdentifire="initialInvestment" handleChange={handleChange}>initial investment</Input>
        <Input userInput={userInput} inputIdentifire="annualInvestment" handleChange={handleChange}>annual investment</Input>
        <Input userInput={userInput} inputIdentifire="expectedReturn" handleChange={handleChange}>expected return</Input>
        <Input userInput={userInput} inputIdentifire="duration" handleChange={handleChange}>duration</Input>
      </div>
    </section>
  );
}
