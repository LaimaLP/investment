import logo from "../assets/img/investment-calculator-logo.png"
import style from "../components/Header.module.css"



export function Header() {
    return (
        <div className={style.investementContainer}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </div>


    )

}