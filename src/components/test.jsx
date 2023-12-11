
import React from "react"
import { useState } from "react"

export function Test() {
    const [color, setColor] = useState("black")


    function handleClick(c) {
        setColor(c)
        console.log("color:", color)
    }

    return <div>
        <button onClick={()=>handleClick("red")}>Blue</button>
        <p>{color}</p>
    </div>

}