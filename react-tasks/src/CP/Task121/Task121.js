import { useState } from "react"

function Task121() {
    const [inp, setInp] = useState('')
    return <>
        <p>1. Создайте компонент с полем ввода и параграфом. При вводе данных в input
            отображать вводимое значение в параграф текущей страницы</p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <p>{inp}</p>
    </>
}
export default Task121