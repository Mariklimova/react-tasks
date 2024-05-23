import { useState } from "react"

function Task128() {
    const [count, setCount] = useState(0)
    return <>
        <p>8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом
            для отображения результата счетчика (изначально счетчик равен 0). Ваша задача
            так реализовать функционал, чтобы при клике на кнопку +1 автоматически
            прибавлялась +1 к стейту счетчика, а при клике на кнопку -1, происходило
            вычитание значения 1</p>

        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add +1</button>
        <button onClick={() => setCount(count - 1)}>Add -1</button>
    </>
}
export default Task128