import { useState } from "react"

function Task28() {
    const [num, setNum] = useState(0)

    function addPlus() {
        setNum(num + 1)
    };

    function addMinus() {
        setNum(num - 1)
    };


    return <div>
        <p>8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом
            для отображения результата счетчика (изначально счетчик равен 0). Ваша задача
            так реализовать функционал, чтобы при клике на кнопку +1 автоматически
            прибавлялась +1 к стейту счетчика, а при клике на кнопку -1, происходило
            вычитание значения 1</p>

        <button onClick={addPlus}>+1</button>
        <button onClick={addMinus}>-1</button>

        <h1>{num}</h1>
    </div>
}

export default Task28