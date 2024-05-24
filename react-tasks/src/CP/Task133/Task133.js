import { useState } from "react"

function Task133() {
    let [count, setCount] = useState(0)
    return <>
        <p>3. Разработайте компонент, который будет отслеживать количество кликов по кнопке и отображать это число.</p>
        <button onClick={() => setCount(count+1)}>Add</button>
        <p>{count}</p>
    </>
}
export default Task133