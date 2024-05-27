import { useState } from "react"

function Task151() {
    const [inp, setInp] = useState('')
    const [task, setTask] = useState(['go to work', 'read', 'sleep'])
    return <>
        <p>4. Список задач с использованием useState: Создайте компонент списка задач,
            который позволяет пользователю добавлять и удалять задачи из списка.</p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <button onClick={() => setTask([...task, inp])}>Add</button>

        {task.map((el, i) =><> <p key={i}>{el}</p><button id={el} onClick={(e) => setTask(task.filter((el) => el != e.target.id))}>Del</button></>)}

    </>
}
export default Task151