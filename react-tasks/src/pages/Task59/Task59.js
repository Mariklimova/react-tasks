import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'

function Task47() {

    const [data, setData] = useState('');

    async function getData() {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setData(response.data.ip)
    }

    useEffect(() => {
        getData();
    }, [])



    return <>

        <p>3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
            выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
            данные в заголовок.</p>
        <div>

            <h1>{data}</h1>

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47