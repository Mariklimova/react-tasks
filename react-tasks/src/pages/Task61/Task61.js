import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'

function Task47() {

    // const randomId = Math.floor(Math.random() * 200)
    
    async function getResult() {
        const response = await axios.get('http://numbersapi.com/10');
        // console.log(response.data.fragment);
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