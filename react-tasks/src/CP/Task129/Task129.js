import { useState } from "react"

function Task129() {
    const [count, setCount] = useState(0)
    return <>
        <p>9. Дополните предыдущую задачу. Создайте компонент, который отображает
            счетчик и кнопку "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в
            ноль. Используйте useState, чтобы управлять значением счетчика.</p>

        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add +1</button>
        <button onClick={() => setCount(count - 1)}>Add -1</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </>
}
export default Task129