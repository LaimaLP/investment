export function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="inputGroup">
        <p>
          <label> Initial Investment </label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(ev) => {
              handleChange("initialInvestment", ev.target.value);
            }}
            required
          />
        </p>
        <p>
          <label> Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(ev) => {
              handleChange("annualInvestment", ev.target.value);
            }}
            required
          />
        </p>
      </div>
      <div className="inputGroup">
        <p>
          <label> Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(ev) => {
              handleChange("expectedReturn", ev.target.value);
            }}
            required
          />
        </p>
        <p>
          <label> Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(ev) => {
              handleChange("duration", ev.target.value);
            }}
            required
          />
        </p>
      </div>
    </section>
  );
}
