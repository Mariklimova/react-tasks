import { Link } from 'react-router-dom'
import { useRef, useState } from "react"


function Task47() {

    // const [color, setColor] = useState('black')

    // const changeColor = () => {
    //     setColor(Math.floor(Math.random() * 999))
    // }


    // return <>

    //     <p>2. Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет
    //         текста</p>
    //     <div>

    //         <h1 style={{ color: `#${color}`}}>Text</h1>
    //         <button onClick={changeColor}>Click</button>
    //     </div>

    //     <Link to={'/'}>Вернуться на главную страницу</Link>
    // </>


    const h_1 = useRef()

    const changeColor = () => {
        h_1.current.style.color = `#${Math.floor(Math.random() * 999)}`
    }


    return <>

        <p>2. Создайте компонент, который по клику на кнопку рандомно у h1 меняет цвет  текста</p>
        <div>

            <h1 ref={h_1}>Text</h1>
            <button onClick={changeColor}>Click</button>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47