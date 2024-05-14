import { Link } from 'react-router-dom'
import { useState } from "react"

function Task47() {

    const [flag, setFlag] = useState(false);


    return <>

        <p>8. Отображение навигации с использованием useState: По нажатию на кнопку
            “бургер” отображать блок навигации из 4 параграфов.</p>
        <div>


            <button onClick={() => setFlag(!flag)}>“бургер”</button>

            {flag ? <div>
                <p>Text 1</p>
                <p>Text 2</p>
                <p>Text 3</p>
                <p>Text 4</p>
            </div> : null}


        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47