import { useState } from "react"

function Task131() {
    const [color, setColor] = useState('black');
    const [flag, setFlag] = useState(false);

    const arrColor = ['cyan', 'magenta', 'yellow', 'green']

    function changeColor() {
        setFlag(flag ? false : true);
        setColor(!flag ? arrColor[Math.floor(Math.random() * arrColor.length)] : 'black')
    }

    return <>
        <p>1. Создайте кнопку с названием "Добавить цвет".
            При клике на эту кнопку цвет шрифта заголовка H1 должен измениться.
            При следующем клике цвет должен вернуться в первоначальное состояние.
            Текст кнопки также должен меняться с "Открыто" на "Закрыто" при нажатии на саму кнопку.</p>

        <h1 style={{ color: color }}>TEXT</h1>


        <button onClick={changeColor}>{!flag ? 'Добавить цвет' : 'Убрать цвет'}</button>
    </>
}
export default Task131