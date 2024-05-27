
import { useRef } from "react"

function Task87() {
    const h_1 = useRef()

    const changeColor = () => h_1.current.style.color = `#${Math.floor(Math.random()*999)}`

    return <>
        <p>Создайте компонент использующий useRef, где по клику на кнопку рандомно у заголовка h1 меняется цвет текста
            (решаете задание в VSC. Код компонета прикрепить в поле для ввода ниже)</p>

        <button onClick={changeColor}>Click</button>
        <h1 ref={h_1}>TEXT</h1>
    </>
}
export default Task87