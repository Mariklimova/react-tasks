import { Link } from 'react-router-dom'
import { useMemo, useState } from "react"


function Task47() {

    const [num_1, setNum_1] = useState(0);
    const [num_2, setNum_2] = useState(0);


    // function getSum() {
    //     return num_1 + num_2
    // }

    // const res = getSum()

    const res = useMemo(() => num_1 + num_2, [num_1, num_2])

    return <>

        <p>1. Создайте компонент React, который отображает сумму двух чисел. Используй хук
            useState для хранения значений чисел и хук useMemo для кэширования
            результата суммы. При изменении значений чисел, сумма должна
            пересчитываться только тогда, когда необходимо.</p>

        <div>
            <input type="text" onChange={(e) => setNum_1(+e.target.value)} />
            <input type="text" onChange={(e) => setNum_2(+e.target.value)} />


            <p>{res}</p>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47