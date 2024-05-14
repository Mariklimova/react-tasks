import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"

function Task47() {

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            timer === 60 ? setTimer(0) : setTimer(timer + 1);
        }, 1000)

        return () => clearInterval(interval);

    }, [timer]);

    return <>

        <p>2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
            который увеличивает значение счетчика на 1 каждую секунду с использованием
            useEffect.</p>
        <div>

            <h1>{timer}</h1>

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>

}

export default Task47