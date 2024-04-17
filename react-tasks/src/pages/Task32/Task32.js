import { Link } from 'react-router-dom'
import { useState } from "react"

function Task32() {
    const [flag, setFlag] = useState(false);

    function change() {
        setFlag(!flag ? true : false)
    }



    return <div>

        <p>2. Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По нажатию на кнопку "Открыть" меню должно отображаться.</p>


        <div>
            <button onClick={change}>Open</button>
            {flag ?
                <>
                    <p>text 1</p>
                    <p>text 2</p>
                    <p>text 3</p>
                </> : null
            }
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>

    </div>
}

export default Task32