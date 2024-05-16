import { Link } from 'react-router-dom'
import { useRef } from "react"


function Task47() {


    const btn = useRef()

    



    return <>

        <p>6. Разработайте компонент для реализации "подсказок" (tooltips). При наведении на
            элемент интерфейса (например, кнопку), компонент отображает подсказку с
            текстом. (onMouseEnter срабатывает, когда курсор мыши входит в область
            элемента. onMouseLeave срабатывает, когда курсор мыши покидает область
            элемента.)</p>

        <div>
            <button onMouseLeave={{}}>Click</button>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47