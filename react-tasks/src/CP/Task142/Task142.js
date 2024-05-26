import axios from "axios";
import { useEffect, useState } from "react"

function Task142() {
    const [res, setRes] = useState('');

    const getIp = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json')
        setRes(response.data.ip)
    };
    useEffect(() => {
        getIp()
    }, []);

    return <>
        <p>2. При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
            https://api.ipify.org/?format=json. API возвращает ваш ip-адрес. Ваша задача
            отображать ip-адрес в тег h1.</p>
        <h1>{res}</h1>

    </>
}
export default Task142