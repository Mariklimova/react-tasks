import { useState } from "react"

function Task125() {
    const [inp, setInp] = useState('')
    return <>
        <p>5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
            поле и нажатии на кнопку, компонент должен отображать приветственное
            сообщение с именем, введенным пользователем</p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <button onClick={() => alert(`Hello,${inp}`)}>Click</button>
    </>
}
export default Task125