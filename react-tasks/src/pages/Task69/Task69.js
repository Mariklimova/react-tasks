import { Link } from 'react-router-dom'
import { useMemo, useState } from "react"


function Task47() {

    const [num, setNum] = useState(0);


    const factorial = (num) => {
        if (num === 0) return num
        if (num === 1) return num
        return num * factorial(num - 1)
    }

    const res = useMemo(() => factorial(num), [num])


    return <>

        <p>2. Разработайте компонент, который выполняет факториал числа при вводе
            значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
            вычислений для разных введенных значений и отображать их без повторных
            вычислений.</p>

        <div>
            <input type="text" onChange={(e) => setNum(+e.target.value)} />

            <p>{res}</p>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47