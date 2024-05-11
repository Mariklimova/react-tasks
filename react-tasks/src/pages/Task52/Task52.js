import { Link } from 'react-router-dom'

import { useState } from "react"

function Task47() {

    const [inpVal, setInpVal] = useState('');
    const [result, setResult] = useState('');

    function check() {
        setResult(/^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(inpVal))
    }

    return <>

        <p>5. Форма с использованием useState: Создайте компонент текстового поля, который
            позволяет пользователю вводить текст и проверять введенный текст регулярным
            выражением на почту по нажатию на кнопку. В заголовок отобразить true если
            введенная строка удовлетворяет регулярному выражению и false в противном
            случае.</p>
        <div>

            <input type="text" onChange={(e)=>setInpVal(e.target.value)}/>
            <button onClick={check}>Check</button>

            <h1>{String(result)}</h1>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47