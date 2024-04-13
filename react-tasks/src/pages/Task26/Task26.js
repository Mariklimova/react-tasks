import { useState } from "react"

function Task26() {
    const [flage, setFlage] = useState(false)

    function changeFlage() {
        setFlage(flage ? false : true);
    };



    return <div>
        <p>6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку
            текст должен появляться или исчезать</p>

        <button onClick={changeFlage}>Click</button>

        <h1>{flage ? 'text' : null}</h1>

    </div>
}

export default Task26