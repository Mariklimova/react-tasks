import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import { task81Context } from '../../Context'



function Task47() {
    const [black, white] = useContext(task81Context);
    const [flag, setFlag] = useState(false)

    return <>

        <p>4. Разработайте простое приложение для переключения между светлой и темной
            темами. Используйте useContext, чтобы хранить информацию о текущей теме
            (светлая или темная). В компоненте отобразите интерфейс, который позволяет
            пользователю переключаться между темами.</p>

        <div style={flag ? black : white}>
            <h1>TEXT</h1>
            <button style={!flag ? black : white} onClick={() => setFlag(!flag)}>{!flag ? 'BLACK' : 'WHITE'}</button>


        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47