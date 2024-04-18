import { Link } from 'react-router-dom'

function Task12() {
    const res = [1, 15, 42, 2, 7, 105].map((el) =>
        el % 2 === 0 ? <p>{el} :четное число</p> : <p>{el} :нечетное число</p>
    )

    return <div>
        <p>6. Создайте компонент, который принимает статичный массив чисел и выводит
            информацию о том, является ли каждое число четным или нечетным.</p>

        <div>{res}</div>

        
        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task12