import { Link } from 'react-router-dom'
import { useState} from "react"

function Task46() {
    const [flag, setFlag] = useState(false);


    return <>

        <p>6. Реализовать селектор, где по клику на копку отображается 3 параграфа. При
            повторном клике параграфы скрываются.</p>
<div>
        <button onClick={() => setFlag(!flag)}>Click</button>

        { flag?<div>
            <p>Paragraf 1</p>
            <p>Paragraf 2</p>
            <p>Paragraf 3</p>
        </div>:null}

</div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task46