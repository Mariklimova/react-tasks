import axios from "axios"
import { useEffect, useState } from "react"

function Task87() {
    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setData(response.data.ip)
    }

    useEffect(() => {
        getData()
    }, [])
    return <>
        <p>Создайте компонент, который использует useState и useEffect для получения данных с API при первом рендере компонента. (решаете задание в VSC. Код компонета прикрепить в поле для ввода ниже)
            API: https://api.ipify.org/?format=json</p>

        <h1>{data}</h1>
    </>
}
export default Task87