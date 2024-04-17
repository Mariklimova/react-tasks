import { Link } from 'react-router-dom'
import { useState } from "react"

function Task31() {
    const [string, setString] = useState('');

    const arr = ['text_1', 'text_2', 'text_3', 'text_4', 'text_5']

    function chooseStr() {
        setString(arr[Math.floor(Math.random() * arr.length)])
    }

    return <div>

        <p>6. Создайте компонент, который при нажатии на кнопку будет показывать случайную строку в заголовке H1. Строки хранятся в массиве.</p>

        <button onClick={chooseStr}>Click</button>

        <h1>{string}</h1>

        <Link to={'/'}>Вернуться на главную страницу</Link>

    </div>
}

export default Task31