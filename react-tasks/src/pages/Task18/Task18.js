import { Link } from 'react-router-dom'

function Task18() {
    const color = ['red', 'white', 'blue']

    function randomColor(event) {
        event.target.style = `background-color:${color[Math.floor(Math.random() * 3)]}`;
    };



    return <div>
        <p>4. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет
            в соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный
            выбор цвета из массива при каждом клике.</p>
        <div>
            <button onClick={randomColor}>Click</button>

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task18