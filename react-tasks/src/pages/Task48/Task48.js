import { Link } from 'react-router-dom'

import { useState } from "react"

function Task47() {

    const [valueInp, setValueInp] = useState('');


    return <>

        <p>1. Форма с использованием useState: Создайте компонент текстового поля, который
            позволяет пользователю по изменению значения инпута отображать значение в
            консоль.</p>
        <div>

            <input type="text" onChange={(e) => setValueInp(e.target.value)} />

            <p>{valueInp}</p>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47