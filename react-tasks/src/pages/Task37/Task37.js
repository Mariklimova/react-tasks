import { Link } from "react-router-dom";
import { useState } from "react"

function Task37() {
    const [value, setValue] = useState('');

    function getValue(e) {
        setValue(e.target.textContent)
    }



    return <>

        <p>7. У вас есть три кнопки: "О нас", "Цена", "Главная страница".
            Заголовок H1 должен отображать текст активной (нажатой) кнопки.
            Например, если нажата кнопка "Цена", в заголовке должно отображаться слово "Цена".</p>


        <button onClick={getValue}>О нас</button>
        <button onClick={getValue}>Цена</button>
        <button onClick={getValue}>Главная страница</button>


        <h1>{value}</h1>

        <Link to ={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task37