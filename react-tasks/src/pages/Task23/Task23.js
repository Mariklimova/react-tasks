import { Link } from 'react-router-dom'
import { useState } from "react"

function Task23() {
    const [inp, setInp] = useState('')

    function changeValue(e) {
        setInp(e.target.value)
    };

    function checkEmail() {
        try {
            if (/^[a-zA-Z1-9]+@[a-zA-Z]+\.[a-zA-Z]+/gm.test(inp)) {
                alert('email is valid')
            }

        } catch (error) {
            alert('email is not valid')
        }

    }

    return <>
        <p>3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
            данные из input и проверить вводимую строку на почту. Результат отображать в
            консоль</p>

        <div>
            <input type="text" onChange={changeValue} />
            <button onClick={checkEmail}>Click</button>

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task23