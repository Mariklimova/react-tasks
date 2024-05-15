import { Link } from 'react-router-dom'
import { useEffect} from "react"
import axios from 'axios'

function Task47() {

    
    async function getResult() {
        // const randomId = Math.floor(Math.random() * 9000)
        // console.log(randomId);
        const response = await axios.get(`http://numbersapi.com/${Math.floor(Math.random() * 9000)}`);
        console.log(response.data);
    }


    useEffect(() => {
        getResult()
    }, [])



    return <>

        <p>5. Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте
            компонент React, который при первичном рендеринге отправляет запрос к APIс
            рандомно сгенерированным числом и отображает результат в консоль.</p>
        <div>

        
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47