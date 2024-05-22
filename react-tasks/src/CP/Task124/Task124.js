import { useState } from "react"

function Task124() {
    const [inp1, setInp1] = useState('')
    const [inp2, setInp2] = useState('')

    return <>
        <p>4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать
            данные из двух input (2 разных state). Сравнить значения 2 input на равенство.
            Результат отображать в консоль</p>

        <input type="text" onChange={(e) => setInp1(e.target.value)} />
        <input type="text" onChange={(e) => setInp2(e.target.value)} />

        <button onClick={() => console.log(inp1 == inp2)}>Check</button>

    </>
}
export default Task124