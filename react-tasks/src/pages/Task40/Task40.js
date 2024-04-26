import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"

function Task38() {
    const [ip, setIp] = useState({});

    const getIp = async () => {
        const response = await fetch('https://api.ipify.org/?format=json', { method: 'GET' })
        const parsedData = await response.json()
        setIp(parsedData)
    }
    useEffect(() => {
        getIp()
        document.querySelector('h1').style = 'color:blue'
    }, [])

    return <div>

        <h1>{ip.ip}</h1>
        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>
}

export default Task38