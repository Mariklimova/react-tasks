import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from "react"



function Task47() {
    const [status, setStatus] = useState('notactiv');

    const changeStatus = useCallback(() => setStatus(status == 'notactiv' ? 'activ' : 'notactiv'), [status])



    return <>

        <p>3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
            на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
            Используйте useCallback, чтобы оптимизировать функцию изменения статуса.</p>

        <div>

            <h1>{status}</h1>

            <button onClick={changeStatus}>Change Status</button>


        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47