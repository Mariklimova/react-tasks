import { useState } from "react"

function Task122() {
    const [inp, setInp] = useState('')
    return <>
        <p>2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
            данные из input и проверить вводимую строку на палиндром. Результат
            отображать в консоль</p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <button onClick={() => console.log(inp == inp.split('').reverse().join('') ? 'polindrom' : 'not polindrom')}>Check</button>
    </>
}
export default Task122