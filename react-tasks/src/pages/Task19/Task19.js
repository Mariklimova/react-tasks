import { Link } from 'react-router-dom'

function Task19() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getSum() {
        const res = arr.reduce((sum, el) => sum += el, 0);
        console.log(res);
    };



    return <div>
        <p>5. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку
            вычислите и выведите сумму всех чисел из массива в консоль.</p>
        <div>

            <button onClick={getSum}>Click</button>
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task19