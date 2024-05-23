import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState, useContext, useReducer } from "react"
import { task78Context } from '../../Context'

function reducer(_state, action) {
    switch (action) {
        case 'red':
            return action;
        case 'blue':
            return action;
        case 'purple':
            return action;
        case 'pink':
            return action;

        default:
            break;
    }
}

function Task47() {
    const [color, dispatch] = useReducer(reducer, 'black')
    const arr = ['red', 'blue', 'purple', 'pink']
    return <>

        <p>4. Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
            кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
            кнопке.</p>

        <div>
            <h1 style={{ color: color }}>Text</h1>

            {arr.map((el) => (<button onClick={(e) => dispatch(e.target.textContent)}>{el}</button>))}

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47