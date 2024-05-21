import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from "react"



function Task47() {
    const [color, setColor] = useState('black');

    const chooseColor = useCallback((e) => setColor(e.target.textContent), [color])



    return <>

        <p>4. Создайте компонент, который предоставляет пользователю выбор цвета из
            списка. При выборе цвета, компонент должен отображать выбранный цвет на
            странице. Используйте useCallback, чтобы оптимизировать функцию выбора
            цвета.</p>

        <div>
            <div onClick={chooseColor}>
                <p >cyan</p>
                <p >magenta</p>
                <p >yellow</p>
                <p>black</p>
            </div>

            <p style={{ color: color }}>Text</p>


        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47