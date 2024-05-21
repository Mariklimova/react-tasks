import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from "react"



function Task47() {
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);

    const changeArr = useCallback((currentEl) => setArr(arr.filter((el) => el != currentEl)), [arr]);



    return <>

        <p>2. Создайте компонент, который отображает список элементов с кнопками
            "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
            Используйте useCallback, чтобы оптимизировать функцию удаления элемента</p>

        <div>

            {arr.map((currentEl) => <p>{currentEl} <button onClick={() => changeArr(currentEl)}>Delete</button></p>)}


        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47