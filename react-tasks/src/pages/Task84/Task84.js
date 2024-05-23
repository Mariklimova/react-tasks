import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState, useContext, useReducer } from "react"
import { task78Context } from '../../Context'


function reducer(state, data) {
    switch (data.action) {
        case 'addValue':

            return data.value;

        default:
            break;
    }
}

function Task47() {

    const [inpValue, dispatch] = useReducer(reducer, '')

    return <>

        <p>3. Создайте компонент отслеживающий вводимое значение в input. Результат
            отображать в h1</p>

        <div>

            <h1>{inpValue}</h1>
            <input type="text" onChange={(e) => dispatch({ action: 'addValue', value: e.target.value })} />


        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47