import { Link } from 'react-router-dom'

import img from './assets/landing.png'

function Task4() {
    const arr = ['gghjj2vgh', 'hfdf@gfh', 'xffcv', 'chjkk@cjgb'].map((el) =>
        <div><p>{el}</p><img src={img} /></div>);
    return <div>
        <p>4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
            массива, а также картинку. Каждая итерация будет возвращать</p>


        {arr}

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task4