import { Link } from 'react-router-dom'

function Task20() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getEl() {
        const res = arr[Math.floor(Math.random() * arr.length)];
        console.log(res);
    };



    return <div>
        <p>6. Создайте компонент с массивом элементов и кнопкой. При каждом клике на
            кнопку выбирайте случайный элемент из массива и отображайте его в консоль.</p>
        <div>

            <button onClick={getEl}>Click</button>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task20