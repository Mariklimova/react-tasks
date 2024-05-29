import { Link } from 'react-router-dom'
import { useContext } from "react"
import { task80Context } from '../../Context'



function Task47() {
const info = useContext(task80Context)





    return <>

        <p>3. Разработайте приложение для отображения текущей погоды. Используйте
            useContext, чтобы хранить информацию о погоде (температура, влажность,
            скорость ветра и т. д.). В компоненте отобразите эту информацию о погоде.</p>

        <div>
            <h1>Температура: {info.temperature}</h1>
            <h1>Влажность: {info.humidity}</h1>
            <h1>Скорость ветра: {info.windSpeed}</h1>
           

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>


}
export default Task47