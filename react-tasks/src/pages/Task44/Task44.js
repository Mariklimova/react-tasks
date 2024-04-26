import { Link } from 'react-router-dom'
import { useState} from "react"

function Task44() {
    const [res, setRes] = useState(0);




    return <>

        <p>4. Создайте три кнопки с названиями: "+1", "-1", "Сброс". При нажатии на кнопку "+1"
            значение счётчика увеличивается на 1, при нажатии на кнопку "-1" значение
            счётчика уменьшается на 1, а при нажатии на кнопку "Сброс" значение счётчика
            обнуляется. Значение счетчика отображать в h1.</p>

        <button onClick={() => setRes(res + 1)}>+1</button>
        <button onClick={() => setRes(res - 1)}>-1</button>
        <button onClick={() => setRes(0)}>Сброс</button>
        <button onClick={() => setRes(res*2)}>Multyplay</button>
        <h1>{res}</h1>
        
        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task44