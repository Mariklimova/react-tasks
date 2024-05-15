import { Link } from 'react-router-dom'
import { useRef } from "react"


function Task47() {


    const btn = useRef(0)

    const countClick = () => {
        btn.current++
        console.log(btn.current);
    }



    return <>

        <p>5. Реализуйте компонент, который отслеживает количество кликов на кнопку с
            помощью useRef и выводит это число в консоль при каждом клике</p>

        <div>
            <button onClick={countClick}>Click</button>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47