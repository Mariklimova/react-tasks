import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState, useContext, useReducer } from "react"
import { task78Context } from '../../Context'

function reducer(state, data) {
    switch (data.type) {
        case 'value':
            return data.value

        default:
            break;
    }
}

function Task47() {
    const [inp_1, dispatch_1] = useReducer(reducer, 0);
    const [inp_2, dispatch_2] = useReducer(reducer, 0);


    return <>

        <p>5. Создайте компонент отслеживающий вводимое значение 2 input. Посчитать
            сумму 2 input. По клику на кнопку отображать результат в консоль</p>

        <div>
            <input type="text" onChange={(e) => dispatch_1({ type: 'value', value: e.target.value })} />
            <input type="text" onChange={(e) => dispatch_2({ type: 'value', value: e.target.value })} />

            <button onClick={() => console.log(+inp_1 + +inp_2)}>Click</button>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47