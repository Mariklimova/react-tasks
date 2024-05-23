import { useState } from "react"

function Task127() {
    const [count, setCount] = useState(0)
    return <>
        <p>7. Создайте компонент с кнопкой и параграфом для отображения результата
            счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал,
            чтобы при клике на кнопку автоматически прибавлялась +1 к стейту счетчика</p>


        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add +1</button>
    </>

}
export default Task127