import { useState } from "react"

function Task139() {
    const [inp, setInp] = useState('')
    const [data, setData] = useState(['do', 'make', 'sleep', 'go']);

    const removeItem = (e) => setData(data.filter((el) => el != e.target.id))
    return <>
        <p>Список задач с использованием useState: Создайте компонент списка задач,
            который позволяет пользователю добавлять и удалять задачи из списка.
        </p>
        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <button onClick={() => {
            setData([...data, inp]);
            setInp('')
        }}>Click</button>

        <div>{data.map((el) => <p>{el}<button id={el} onClick={removeItem}>del</button></p>)}</div>
    </>
}
export default Task139