import { Link } from 'react-router-dom'

function Task13() {
    const arr = ['vhbgujhu', 42, 'dfgguhkh', 105];
    const color = ['cyan', 'magenta', 'yellow', 'green', 'purple', 'blue', 'orange']

    const res = arr.map((el) => {
        const randomColor = color[Math.floor(Math.random() * color.length)];
        return <p style={{ color: randomColor }}>
            {el} - цвет {randomColor};
        </p>
    })

    return <div>
        <p>7. Создайте компонент, который принимает статичный массив элементов и
            присваивает каждому элементу случайный цвет фона. Выведите элементы с их
            цветами на странице.</p>

        <div>{res}</div>

        
        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task13