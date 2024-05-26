import { useState } from "react"

function Task148() {
    const [inp, setInp] = useState('')
    return <>
        <p>1. Форма с использованием useState: Создайте компонент текстового поля, который
            позволяет пользователю по изменению значения инпута отображать значение в
            консоль.</p>
        <input type="text" onChange={(e) => setInp(console.log(e.target.value))} />


    </>
}
export default Task148