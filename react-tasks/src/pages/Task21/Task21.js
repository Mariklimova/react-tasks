import { useState } from "react"


function Task21() {

    const [inp, setInp] = useState('');

    function getInpValue(event) {
        setInp(event.target.value)
    };



    return <div>
        <p>1. Создайте компонент с полем ввода и параграфом. При вводе данных в input
            отображать вводимое значение в параграф текущей страницы</p>

        <p>{inp}</p>
        <input type='text' onChange={getInpValue} />
    </div>
}

export default Task21