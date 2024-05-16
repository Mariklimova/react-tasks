import { Link } from 'react-router-dom'
import { useMemo, useState } from "react"
import axios from 'axios';


function Task47() {

    const [data, setData] = useState('');

    async function getData() {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setData(response.data.ip)
    };


    useMemo(() => {
     getData()
    
    }, [])


    return <>

        <p>5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
            должен быть получен с использованием useMemo при монтировании
            компонента и кэширован для избегания повторных запросов к API при
            обновлении других частей компонента. https://api.ipify.org/?format=json</p>

        <div>

            <h1>{data}</h1>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47