import { Link } from 'react-router-dom'
import { useState} from "react"

function Task45() {
    const [res, setRes] = useState('');




    return <>

        <p>5. Создайте форму ввода, в которой пользователь может вводить своё имя и
            отображать его под формой.</p>

        <input type="text" onChange={((e)=>setRes(e.target.value))}/>
        <h1>{res}</h1>

        <Link to={'/'}>Вернуться на главную страницу</Link>

    </>
}

export default Task45