import { Link } from 'react-router-dom'
import { useState } from "react"

function Task25() {
    const [inp, setInp] = useState('')

    function getInp(e) {
        setInp(e.target.value)
    };

    function giveInp() {
        alert(`Hello,${inp}`)
    }


    return <>
        <p>5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
            поле и нажатии на кнопку, компонент должен отображать приветственное
            сообщение с именем, введенным пользователем
        </p>

        <div>
            
            <input type="text" placeholder = 'name' onChange={getInp}/>
            <button onClick={giveInp}>Привет</button>

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task25