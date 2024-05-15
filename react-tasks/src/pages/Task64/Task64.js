import { Link } from 'react-router-dom'
import { useRef, useState } from "react"


function Task47() {

    // const [fontSize, setFontSize] = useState(20)

    // return <>

    //     <p>3. Создайте компонент, который при каждом клике на кнопку увеличивает размер
    //         шрифта текста в элементе на странице.</p>
    //     <div>

    //         <h1 style={{ fontSize: fontSize }}>Text</h1>

    //         <button onClick={() => setFontSize(fontSize + 1)}>Add</button>
    //         <button onClick={() => setFontSize(fontSize - 1)}>Del</button>
    //     </div>

    //     <Link to={'/'}>Вернуться на главную страницу</Link>
    // </>


    const h_1 = useRef()

    const changeSize = () => {
        // let curSize = fontSize.current.style.fontSize;
    
        h_1.current.style.fontSize = parseInt(h_1.current.style.fontSize) + 1+'px'
    }
    const changeSize_2 = () => {
        // let curSize = fontSize.current.style.fontSize;
    
        h_1.current.style.fontSize = parseInt(h_1.current.style.fontSize) - 1+'px'
    }


    return <>

        <p>3. Создайте компонент, который при каждом клике на кнопку увеличивает размер  шрифта текста в элементе на странице.</p>

        <div>
            <h1 ref={h_1} style={{fontSize:20}}>Text</h1>
            <button onClick={changeSize}>Add</button>
            <button onClick={changeSize_2}>Del</button>
        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47