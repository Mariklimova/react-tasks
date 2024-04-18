import { Link } from 'react-router-dom'

function Task9() {
    const res = ['sdvsdv', 'xffffyfxtfyuoippooo', 'hvhy', 'cgcgtccccghh'].filter((el) => el.length <= 10)
    return <div>
        <p>3. Создайте компонент, который принимает массив строк и фильтрует строки,
            оставляя только те, длина которых не превышает 10 символов.</p>

        <div>{res}</div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task9