import { Link } from 'react-router-dom'

function Task8() {
    const arr = [1, 2, 3, 4, 5]

    const min = Math.min(...arr);
    const max = Math.max(...arr);


    return <>
        <p>2. Реализуйте компонент, который принимает статичный массив чисел и выводит
            минимальное и максимальное значения на странице.</p>

        <div>
            <p>массив:{arr}</p>
            <p>min:{min}</p>
            <p>max:{max}</p>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>

}

export default Task8