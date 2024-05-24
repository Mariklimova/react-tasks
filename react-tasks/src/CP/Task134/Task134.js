import { useState } from "react"
import { useSearchParams } from "react-router-dom"

function Task134() {
    const [inp, setInp] = useState('')
    return <>
        <p>4. Выводите каждое введенное значение из поля ввода (input) в заголовке H1.</p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <h1>{inp}</h1>
    </>
}
export default Task134