import { Link } from 'react-router-dom'

function Task10() {
    const res = [1, 15, 'sdvsdv', 'vfguhu', 42].map((el) => {
        if (isNaN(el)) {
            return <p style={{ color: 'blue' }}>{el}</p>
        } else {
            return <p style={{ color: 'green' }}>{el}</p>
        }
    })
    return <div>
        <p>4. Создайте компонент, который принимает статичный массив чисел и строк. Если
            элемент - число, то отобразите его в параграфе с зеленым цветом текста, если
            строка - с синим.</p>

        <div>{res}</div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task10