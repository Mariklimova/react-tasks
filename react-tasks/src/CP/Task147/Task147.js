import axios from "axios";
import { useEffect, useState } from "react"

function Task147() {
    const [flag, setFlag] = useState(false);
    const [res, setRes] = useState([]);
    const [active, setAcive] = useState('Univercity')

    const getData = async () => {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus');
        setRes(response.data)
    }

    useEffect(() => {
        getData()
    }, []);



    return <>
        <p>7. Совместить задачи 3 и 6. По клику на кнопку отображать университеты выбранной
            страны</p>
        <button onClick={() => setFlag(!flag)}>{active}</button>
        {flag ? res.map((el) => <p onClick={(e) => setAcive(e.target.textContent)}>{el.name}</p>) : ''}
    </>
}
export default Task147