import { Link } from 'react-router-dom'

function Task2() {
    const arr = [1, 2, 3, 4].map((el) => <h1>{Math.sqrt(el)}</h1>)
    return <div>
        <p>2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
            отобразить на странице в виде h1</p>

        {arr}


        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task2