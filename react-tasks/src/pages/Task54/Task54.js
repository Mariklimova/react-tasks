import { Link } from 'react-router-dom'
import { useState } from "react"

function Task47() {

    const [fontSize, setFontSize] = useState('12');


    return <>

        <p>7. Изменение размера шрифта с использованием useState: Создайте компонент,
            который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
            эти кнопки значение font-size изменяется соответствующим образом на +/– 1px.</p>
        <div>
            <h1 style={{fontSize:fontSize}}>textContent</h1>

            <button onClick={() => setFontSize(+fontSize + 1)}>Увеличить</button>
            <button onClick={() => setFontSize(+fontSize - 1)}>Уменьшить</button>





        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47