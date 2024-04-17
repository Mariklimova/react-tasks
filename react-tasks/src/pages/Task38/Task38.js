import {Link} from 'react-router-dom'
import { useState } from "react"

function Task38() {
    const [inpValue, setInpValue] = useState('');

    function getValue(e) {
        setInpValue(e.target.value)
    }

    function getResult() {
        setInpValue(eval(inpValue))
    }

    return <div>

        <p>8. Создайте поле ввода, в которое пользователь вводит математическое выражение.
            По нажатию на кнопку необходимо вычислить результат выражения (используйте функцию eval()) и отобразить его в заголовке H1.</p>


        <input type="text" onChange={getValue} />

        <button onClick={getResult}>Click</button>

        <h1>{inpValue}</h1>

        <Link to = {'/'}>Вернуться на главную страницу</Link>

    </div>
}

export default Task38