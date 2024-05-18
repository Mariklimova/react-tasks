import { Link } from 'react-router-dom'
import { useRef } from "react"


function Task47() {


    const p = useRef()

    return <>

        <p>6. Разработайте компонент для реализации "подсказок" (tooltips). При наведении на
            элемент интерфейса (например, кнопку), компонент отображает подсказку с
            текстом. (onMouseEnter срабатывает, когда курсор мыши входит в область
            элемента. onMouseLeave срабатывает, когда курсор мыши покидает область
            элемента.)</p>

        <div>
            <button onMouseEnter={() => p.current.style.display = 'block'} onMouseLeave={() => p.current.style.display = 'none'}>SHOW</button>
          

            <p ref = {p}>tooltips</p>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47