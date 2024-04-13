import { useState } from "react"

function Task22() {
    const [inp, setInp] = useState('');

    function getInp(e) {
        setInp(e.target.value)
    }

    function checkPolindrom() {
        console.log(inp == inp.split('').reverse().join('') ? true : false);
    };



    return <div>
        <p>2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
            данные из input и проверить вводимую строку на палиндром. Результат
            отображать в консоль
        </p>
        <input type="text" onChange={getInp} />
        
        <button onClick={checkPolindrom}>Click</button>
    </div>
}

export default Task22