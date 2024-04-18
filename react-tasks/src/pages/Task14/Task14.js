import { Link } from 'react-router-dom'

function Task14() {
    const arr = [1, 7, 15, 2, 42, 2, 7, 105, 15];

    const res = [];

    arr.forEach((el) => {
        if (!res.includes(el)) res.push(el);
    })

    return <div>
        <p>8. Реализуйте компонент, который принимает статичный массив и отображает
            только уникальные значения, убирая повторяющиеся.</p>

        <div>{res}</div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task14