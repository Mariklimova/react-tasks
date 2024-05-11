import { Link } from 'react-router-dom'

import { useState } from "react"

function Task47() {

    const [inpVal, setInpVal] = useState('');
    const [task, setTask] = useState(['go to work', 'read', 'sleep'])

    return <>

        <p>4. Список задач с использованием useState: Создайте компонент списка задач,
            который позволяет пользователю добавлять и удалять задачи из списка.</p>
        <div>

            {task.map((el, i) => (
                <>
                    <p key={i}>{el}</p>
                    <button id={el} onClick={(e) => setTask(task.filter((el) => el != e.target.id))}>Delete</button>
                </>
            ))
            }
            <div>
                <input type="text" onChange={(e) => setInpVal(e.target.value)} />
                <button onClick={() => setTask([...task, inpVal])}>Add</button>

            </div>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47