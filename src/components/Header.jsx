import logo from "../assets/img/investment-calculator-logo.png"

export function Header() {
    return (
        <div id="investementContainer">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </div>
    )
}