import { Link } from 'react-router-dom'
import { useState } from "react"


function Task21() {

    const [inp, setInp] = useState('');

    function getInpValue(event) {
        setInp(event.target.value)
    };



    return <div>
        <p>1. Создайте компонент с полем ввода и параграфом. При вводе данных в input
            отображать вводимое значение в параграф текущей страницы</p>
        <div>
            <p>{inp}</p>
            <input type='text' onChange={getInpValue} />

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task21