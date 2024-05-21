import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from "react"



function Task47() {

    const [count, setCount] = useState(0);


    const getCount = useCallback(() => setCount(count + 1),[count]);




    return <>

        <p>1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
            счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
            оптимизировать обработчик клика на кнопке.</p>

        <div>

            <button onClick={getCount}>Click</button>

            <h1>{count}</h1>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47