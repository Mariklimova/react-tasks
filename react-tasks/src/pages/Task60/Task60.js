import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"

function Task47() {

    const [time, setTime] = useState(new Date());



    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(interval);
    }, [time])



    return <>

        <p>4. Таймер с использованием useState и useEffect: Создайте компонент, который
            отображает текущее время и обновляет его каждую секунду.</p>
        <div>

            <h1>
                {+time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()} :
                {+time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()} :
                {+time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}

            </h1>

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47