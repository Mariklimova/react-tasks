import { Link } from 'react-router-dom'

function Task7() {
    const res = [1, -1, 2, -2, 3, -3].map((el) => {
        return <div>

            <p>{el > 0 ? `${el} положитеное` : `${el} отрицательное`}</p>

        </div>
    })
    return <div>
        <p>1. Создайте компонент, который принимает статичный массив чисел и выводит в
            параграф информацию о положительности и отрицательности числа.</p>

        <div>{res}</div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task7