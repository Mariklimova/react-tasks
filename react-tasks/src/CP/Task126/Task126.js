import { useState } from "react"

function Task126() {
    const [flag, setFlag] = useState(false)
    return <>
        <p>6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
            текст должен появляться или исчезать</p>

        <button onClick={() => setFlag(flag ? false : true)}>Показать/Скрыть текст</button>
        {flag && <p>Text</p>}
    </>
}
export default Task126