import { useState } from "react"

function Task27() {
    const [num, setNum] = useState(0)

    function addPlus() {
        setNum(num + 1)
    };



    return <div>
        <p>7. Создайте компонент с кнопкой и параграфом для отображения результата
            счетчика (изначально счетчик равен 0). Ваша задача так реализовать функционал,
            чтобы при клике на кнопку автоматически прибавлялась +1 к стейту счетчика</p>

        <button onClick={addPlus}>+1</button>

        <h1>{num}</h1>
    </div>
}

export default Task27