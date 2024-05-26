import { useState } from "react"

function Task149() {
    const [flag, setFlag] = useState(false)
    return <>
        <p>2. Отображение текста с использованием useState: Создайте компонент, который
            предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
            отображается текст, а при нажатии на "Скрыть" текст скрывается.</p>
        <button onClick={() => setFlag(true)}>Показать</button>
        <button onClick={() => setFlag(false)}>Скрыть</button>
        {flag && <h1>TEXT</h1>}
    </>
}
export default Task149