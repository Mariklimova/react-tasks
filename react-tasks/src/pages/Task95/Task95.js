

import { useContext, useEffect, useMemo, useReducer, useRef, useState } from "react"


function reducer(state, data) {
    switch (data.action) {
        case 'addNewTask':

            return [...state, data.newVal];
        case 'removeTask':

            return state.filter((el) => el != data.currentVal);
        default:
            break;
    }
}
function Task87() {

    const inp = useRef();



    const [task, dispatch] = useReducer(reducer, ['do', 'make', 'sleep', 'go']);
    return <>
        <p>6. Список задач с использованием useReducer: Создайте компонент списка задач,
    //         который позволяет пользователю добавлять и удалять задачи из списка.</p>

        <div>{task.map((el,i) => <p key ={i}>{el}<button id={el} onClick={(e) => dispatch({ action: 'removeTask', currentVal: e.target.id })}>del</button></p>)}</div>

        <input type="text" ref={inp} />
        <button onClick={() => {
            dispatch({ action: 'addNewTask', newVal: inp.current.value })
        }}>Click</button>
    </>
}
export default Task87





// const [task, setTask] = useState(['do', 'make', 'sleep', 'go']);
    // const inp = useRef();

    // return <>
    //     <p>6. Список задач с использованием useReducer: Создайте компонент списка задач,
    //         который позволяет пользователю добавлять и удалять задачи из списка.</p>

    //     <input type="text" ref={inp} />
    //     <button onClick={() => {
    //         setTask([...task, inp.current.value])
    //         inp.current.value = ''
    //     }}>Click</button>

    //     <div>{task.map((el) => <p>{el}<button id={el} onClick={(e) => setTask(task.filter((el) => el != e.target.id))}>del</button></p>)}</div>
    // </>