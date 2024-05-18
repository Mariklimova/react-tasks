import { Link } from 'react-router-dom'
import { useRef} from "react"


function Task47() {


    const inp = useRef()





    return <>

        <p>4. Создайте компонент, который при фокусе на текстовом поле добавляет
            background (onFocus, onBlur)</p>

        <div>
            <input type="text" ref={inp} onFocus={()=>inp.current.style.background = 'green'} onBlur={()=>inp.current.style.background = 'white'} />

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47