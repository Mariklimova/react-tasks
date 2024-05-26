import { useState } from "react"

function Task150() {
    const [color, setColor] = useState('black');
    return <>
        <p>3. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
            который позволяет пользователю выбирать цвет из списка и отображает цвет
            выбранного цвета на экране.</p>

        <h1 style={{ color: color }}>TEXT</h1>

        <ul onClick={(e) => setColor(e.target.textContent)}>
            <li>cyan</li>
            <li>magenta</li>
            <li>yellow</li>
            <li>black</li>
        </ul>

    </>
}
export default Task150