import { Link } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios';

function Task47() {

    const [inputVal, setInputVal] = useState('');
    const [answer, setAnswer] = useState('');

    async function getAnswer() {
        const response = await axios.get('https://yesno.wtf/api');
        setAnswer(response.data.answer)
    }


    return <>

        <p>9. Форма с отправкой запроса к API с использованием useState: Создайте
            компонент, который предоставляет input, button. После ввода данных в input по
            нажатию кнопку необходимо отправлять асинхронный запрос к API
            https://yesno.wtf/api с получением рандомно сгенерированного “да/нет”.
            Отобразить результат в заголовок. Таким образом у вас получается игра в
            предсказателя: где пользователь вводит вопрос в input, а далее получает ответ на
            заданный вопрос.</p>

        <div>
            <input type="text" onChange={(e)=>setInputVal(e.target.value)} />
            <button onClick={getAnswer}>Ответ</button>

            <h1>{inputVal} : {answer}</h1>


        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47