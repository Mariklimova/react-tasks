import {Link} from 'react-router-dom'
import { useState } from "react"

function Task33() {
    const [count, setCount] = useState(0);

    function sumCount() {
        setCount(count + 1);
    }


    return <div>

        <p>3. Разработайте компонент, который будет отслеживать количество кликов по кнопке и отображать это число.</p>



        <button onClick={sumCount}>Click</button>
        <h1>{count}</h1>

        <Link to = {'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task33