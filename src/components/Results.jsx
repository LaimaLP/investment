import { calculateInvestmentResults } from "./util/investment1";
import { formatter } from "./util/investment1";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestments =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

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

            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestments;
            const totalAmount = yearData.valueEndOfYear - totalInterest;

            console.log(yearData);
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmount)}</td>
             
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
