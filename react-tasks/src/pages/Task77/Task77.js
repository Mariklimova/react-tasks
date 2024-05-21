import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from "react"



function Task47() {
    const [list, setList] = useState(['fcg', 'hkgl;l', 'hkjkghuo;']);
    const [inp, setInp] = useState('');


    const delList = useCallback((el) => setList(list.filter((elem) => elem != el)), [list]);

    const addList = () => setList([...list, inp])

    return <>

        <p>5. Создайте компонент, который позволяет пользователю добавлять и удалять
            элементы из списка. Используйте useCallback, чтобы оптимизировать функции
            добавления и удаления элементов.</p>

        <div>

            <input type="text" onChange={(e) => setInp(e.target.value)} />
            <button onClick={addList}>Add</button>
            {list.map((el) => <p>{el}<button onClick={() => delList(el)}>delete</button></p>)}


        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47