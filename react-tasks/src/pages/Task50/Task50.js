import { Link } from 'react-router-dom'

import { useState } from "react"

function Task47() {

    const [colorText, setColorText] = useState('black');
    // const arrColors = ['cyan', 'magenta', 'yellow']

    return <>

        <p>3. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
            который позволяет пользователю выбирать цвет из списка и отображает цвет
            выбранного цвета на экране.</p>
        <div>

            <h1 style={{ color: colorText }}>Text</h1>

            <ul onClick={(e) => setColorText(e.target.textContent)}>
                <li>cyan</li>
                <li>magenta</li>
                <li>yellow</li>
            </ul>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47