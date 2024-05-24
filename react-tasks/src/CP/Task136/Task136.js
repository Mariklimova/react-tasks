import { useState } from "react"
import { useSearchParams } from "react-router-dom"

function Task136() {
    const [string, setString] = useState('')
    const arr = ['acdscf', 'xd', 'aqdSFSWF', 'DASFAFESDG']
    return <>
        <p>6. Создайте компонент, который при нажатии на кнопку будет показывать случайную строку в заголовке H1. Строки хранятся в массиве.</p>
        <button onClick={() => setString(arr[Math.floor(Math.random() * arr.length)])}>Click</button>

        <h1>{string}</h1>
    </>
}
export default Task136