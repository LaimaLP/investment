import { calculateInvestmentResults } from "./util/investment 1";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th> Year </th>
            <th> Investments Value </th>
            <th> Interest (year) </th>
            <th> Total Interest </th>
            <th>Invested Capital </th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            console.log(yearData);
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>$ {(yearData.valueEndOfYear / 1000).toFixed(3)}</td>
                <td>${yearData.interest.toFixed(0)}</td>
                <td>${yearData.interest.toFixed(0)+}</td>
                <td>{input.initialInvestment + yearData.annualInvestment*yearData.year}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
