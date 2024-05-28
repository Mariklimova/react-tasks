import { Link } from 'react-router-dom'
import { useState, useContext } from "react"
import { task79Context } from '../../Context'



function Task47() {
    const userInfo = useContext(task79Context);
    const [data, setData] = useState('Привет')




    return <>

        <p>2. Создайте приложение, где пользователь сможет выбирать язык интерфейса
            (например, английский или испанский). Используйте useContext для сохранения
            текущего выбранного языка и перевода текста в выбранный язык в компонентах</p>

        <div>
            <h1>{data}</h1>
            <button onClick={(e)=>setData(userInfo[e.target.textContent])}>ru</button>
            <button onClick={(e)=>setData(userInfo[e.target.textContent])}>en</button>
            <button onClick={(e)=>setData(userInfo[e.target.textContent])}>bel</button>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47