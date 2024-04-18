import { Link } from 'react-router-dom'

function Task17() {
    function inpCheck(event) {
        if (event.key === 'Enter') {
            event.target.value === event.target.value.split('').reverse().join('')
                ? console.log(true) : console.log(false);

            event.target.value = '';
        }


    };



    return <>
        <p>3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
            палиндромом. Результат проверки отобразить в консоль</p>
        <div>

            <input type='text' onKeyDown={inpCheck} />
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task17