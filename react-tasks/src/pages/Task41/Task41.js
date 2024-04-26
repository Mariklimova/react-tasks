import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react"

function Task41() {
    const [res, setRes] = useState('');

    const getImg = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');

        setRes(response.data.message)
    }
    useEffect(() => {
        getImg()

    }, [])

    return <>

        <p>1. При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
            https://dog.ceo/api/breeds/image/random. API возвращает ссылку на случайные
            изображения. Ваша задача отображать картинки в img.</p>
        <div>

            <img src={res} alt="" />
        </div>
        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task41