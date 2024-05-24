import { useState } from "react"

function Task137() {
    const [value, setValue] = useState('');
    return <>
        <p>7. У вас есть три кнопки: "О нас", "Цена", "Главная страница".
            Заголовок H1 должен отображать текст активной (нажатой) кнопки.
            Например, если нажата кнопка "Цена", в заголовке должно отображаться слово "Цена".</p>

        <button onClick={(e)=>setValue(e.target.textContent)}>"О нас"</button>
        <button onClick={(e)=>setValue(e.target.textContent)}>"Цена"</button>
        <button onClick={(e)=>setValue(e.target.textContent)}>"Главная страница"</button>

        <h1>{value}</h1>
    </>
}
export default Task137