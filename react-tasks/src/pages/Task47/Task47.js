import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react"

function Task47() {
    const [flag, setFlag] = useState(false);
    const [res, setRes] = useState([]);
    const [active, setAcive] = useState('University');

    const getUnivercity = async () => {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus');

        setRes(response.data)
    }

    useEffect(() => {
        getUnivercity()

    }, [])

    return <>

        <p>7. Совместить задачи 3 и 6. По клику на кнопку отображать университеты выбранной
            страны</p>
        <div>

            <button onClick={() => setFlag(!flag)}>{active}</button>

            {flag ? res.map((el) => <p onClick={((e) => setAcive(e.target.textContent))}>{el.name}</p>) : ''}
        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47