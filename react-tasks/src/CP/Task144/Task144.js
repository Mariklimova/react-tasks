import { useState } from "react"

function Task144() {
    const [count, setCount] = useState(0)
    return <>
        <p>4. Создайте три кнопки с названиями: "+1", "-1", "Сброс". При нажатии на кнопку "+1"
            значение счётчика увеличивается на 1, при нажатии на кнопку "-1" значение
            счётчика уменьшается на 1, а при нажатии на кнопку "Сброс" значение счётчика
            обнуляется. Значение счетчика отображать в h1.</p>

        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </>
}
export default Task144