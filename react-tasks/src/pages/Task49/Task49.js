import { Link } from 'react-router-dom'

import { useState } from "react"

function Task47() {

    const [flag, setFlag] = useState(false);


    return <>

        <p>2. Отображение текста с использованием useState: Создайте компонент, который
            предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
            отображается текст, а при нажатии на "Скрыть" текст скрывается.</p>
        <div>

            <button onClick={() => setFlag(true)}>Показать</button>
            <button onClick={() => setFlag(false)}>Скрыть</button>

            {flag ? <p>Text</p> : null}
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47