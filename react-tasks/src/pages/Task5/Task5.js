import { Link } from 'react-router-dom'

function Task5() {
    const res = ['gghjj2vgh', 465232, 'xffcv', 7981].map((el) => {
        if (isNaN(el)) {
            return <p>{el}</p>
        } else {
            return el % 2 === 0 ? `${el} - четное` : `${el} - нечетное`
        }


    })
    return <>
        <p>5. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
            случае числа четность и нечетность текущего значения в параграфе, в случае
            строки отобразить саму строку в параграфе</p>

        <div>{res}</div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task5