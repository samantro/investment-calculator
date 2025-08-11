export default function Input({children, userInput, inputIdentifire, handleChange}) {
    return <p>
        <label>{children}</label>
          <input
            type="number"
            required
            value={userInput[inputIdentifire]}
            onChange={(event) =>
              handleChange(inputIdentifire, event.target.value)
            }
          />
    </p>
}