import { useState } from "react"

function Task153() {
    const [res, setRes] = useState(0)
    const [mathStr, setMathStr] = useState('');
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const getMathStr = (e) => setMathStr(mathStr + e.target.textContent);
    const getResult = () => setRes(eval(mathStr));
    const getReset = () => {
        setRes(0);
        setMathStr('')
    };
    return <>
        <p>6. Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /</p>
        <button onClick={getMathStr}>+</button>
        <button onClick={getMathStr}>-</button>
        <button onClick={getMathStr}>*</button>
        <button onClick={getMathStr}>/</button>

        <button onClick={getResult}>Result</button>
        <button onClick={getReset}>Reset</button>

        <h1>{mathStr}={res}</h1>

        {arr.map((el,i)=><button onClick={getMathStr} key ={i}>{el}</button>)}
    </>
}
export default Task153