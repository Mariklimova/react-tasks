import { useState } from "react"

function Task31() {
    const [count, setCount] = useState(0);

    function sumCount() {
        setCount(count + 1)
    }


    return <div>

        <p>3. Разработайте компонент, который будет отслеживать количество кликов по кнопке и отображать это число.</p>



        <button onClick={sumCount}>Click</button>
        <h1>{count}</h1>
    </div>
}

export default Task31