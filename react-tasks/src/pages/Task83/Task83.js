import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState, useContext, useReducer } from "react"
import { task78Context } from '../../Context'


function reducer(state) {
    return state == 'on' ? 'off' : 'on'
}

function Task47() {

    const [data, dispatch] = useReducer(reducer, 'on')

    return <>

        <p>2. Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
            По клику на кнопку текст меняется на противоположный</p>

        <div>


            <button onClick={dispatch}>{data}</button>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47