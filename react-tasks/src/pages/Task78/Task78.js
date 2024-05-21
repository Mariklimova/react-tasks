import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState, useContext } from "react"
import { task78Context } from '../../Context'



function Task47() {

    const userInfo = useContext(task78Context);




    return <>

        <p>1. Используйте useContext, чтобы сохранять данные о текущем пользователе.
            Отобразите эту информацию в компоненте, используя контекст.</p>

        <div>
            <h1>{userInfo.id}</h1>
            <h1>{userInfo.name}</h1>
            <h1>{userInfo.surname}</h1>



        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47