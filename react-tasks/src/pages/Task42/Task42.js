import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react"

function Task41() {
    const [ip, setIp] = useState('');

    const getIp = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json');

        setIp(response.data.ip)
    }

    useEffect(() => {
        getIp()

    }, [])

    return <>

        <p>2. При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
            https://api.ipify.org/?format=json. API возвращает ваш ip-адрес. Ваша задача
            отображать ip-адрес в тег h1.</p>

        <h1>{ip}</h1>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task41