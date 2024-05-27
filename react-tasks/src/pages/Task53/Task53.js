import { Link } from 'react-router-dom'

import { useState } from "react"

function Task47() {

    const [result, setResult] = useState(0);
    const [mathStr, setMathStr] = useState('');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const getMathStr = (e) => setMathStr(mathStr + e.target.textContent)
    const getResult = () => setResult(eval(mathStr));

    const getCancel = () =>{
        setResult(0);
        setMathStr('')
    }

    

    return <>
6. Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /
        <p></p>
        <div>
            <h1>{mathStr}={result}</h1>
            <div>
                {numbers.map((el, i) => <button  onClick={getMathStr} key={i}>{el}</button>)}

                <button onClick={getMathStr}>+</button>
                <button  onClick={getMathStr}>-</button>
                <button  onClick={getMathStr}>*</button>
                <button  onClick={getMathStr}>/</button>

                <button onClick={getResult}>Result</button>
                <button onClick={getCancel}>Cancel</button>

            </div>
 


        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47