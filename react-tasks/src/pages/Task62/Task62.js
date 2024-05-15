import { Link } from 'react-router-dom'
import { useRef, useState } from "react"


function Task47() {

    // const [color, setColor] = useState('black')

    // const changeColor = () => {
    //     setColor('red')
    // }


    // return <>

    //     <p>1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный</p>
    //     <div>

    //         <h1 style={{ color: color }}>Text</h1>
    //         <button onClick={changeColor}>Click</button>
    //     </div>

    //     <Link to={'/'}>Вернуться на главную страницу</Link>
    // </>


    const color = useRef()

    const changeColor = () => {
        color.current.style.color = 'red'
    }


    return <>

        <p>1. Создайте компонент, который по клику на кнопку меняет цвет текста на красный</p>
        <div>

            <h1 ref={color}>Text</h1>
            <button onClick={changeColor}>Click</button>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47