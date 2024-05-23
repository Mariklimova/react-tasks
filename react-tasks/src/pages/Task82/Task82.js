import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState, useContext, useReducer } from "react"



function reducer(state, data) {
    switch (data.action) {
        case 'plus':
            return state + 1
        case 'minus':
            return state - 1;
        case 'reset':
            return 0

        default:
            break;
    }
}


function Task47() {


    const [count, dispatch] = useReducer(reducer, 0)
    return <>
        <p>1. Создайте компонент счетчика, который может увеличивать, уменьшать,
            сбрасывать значение при нажатии на соответствующие кнопки.</p>

        <div>

            <h1>{count}</h1>

            <button onClick={()=>dispatch({action:'plus'})}>add+1</button>
            <button onClick={()=>dispatch({action:'minus'})}>add-1</button>
            <button onClick={()=>dispatch({action:'reset'})}>reset</button>


        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47