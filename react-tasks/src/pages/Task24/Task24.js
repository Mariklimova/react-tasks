import { Link } from 'react-router-dom'
import { useState } from "react"

function Task24() {
    const [inp1, setInp1] = useState('')
    const [inp2, setInp2] = useState('')

    function fillInp1(e) {
        setInp1(e.target.value)
    };
    function fillInp2(e) {
        setInp2(e.target.value)
    };
    function checkInp() {
        console.log(inp1 === inp2 ? true : false);
    }

    return <div>
        <p>4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать
            данные из двух input (2 разных state). Сравнить значения 2 input на равенство.
            Результат отображать в консоль
        </p>
        <div>
            <input type="text" onChange={fillInp1} />
            <input type="text" onChange={fillInp2} />

            <button onClick={checkInp}>Click</button>

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task24