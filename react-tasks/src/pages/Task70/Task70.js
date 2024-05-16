import { Link } from 'react-router-dom'
import { useMemo, useState } from "react"


function Task47() {

    const [num, setNum] = useState(1);


    const getSum = useMemo(() => {
        let sum = 0;
        for (let i = 0; i <= num; i++) {
            sum += i;
        }
        return sum
    },[num])


    return <>

        <p>3. Создайте компонент для отображения списка чисел от 1 до N, где N - число,
            введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
            сумму списка чисел только при изменении N.</p>

        <div>
            <input type="text" onChange={(e) => setNum(+e.target.value)} />

            <p>{getSum}</p>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}


export default Task47