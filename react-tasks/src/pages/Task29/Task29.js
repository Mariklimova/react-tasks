import { Link } from 'react-router-dom'
import { useState } from "react"

function Task29() {
    const [num, setNum] = useState(0)

    function addPlus() {
        setNum(num + 1)
    };

    function addMinus() {
        setNum(num - 1)
    };


    function reset() {
        setNum(0)
    };



    return <div>
        <p>9. Дополните предыдущую задачу. Создайте компонент, который отображает
            счетчик и кнопку "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в
            ноль. Используйте useState, чтобы управлять значением счетчика.</p>

        <button onClick={addPlus}>+1</button>
        <button onClick={addMinus}>-1</button>
        <button onClick={reset}>Сброс</button>

        <h1>{num}</h1>
        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task29