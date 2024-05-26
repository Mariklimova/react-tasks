import axios from "axios";
import { useEffect, useState } from "react"

function Task143() {
    const [res, setRes] = useState([]);

    const getDate = async () => {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus');
        setRes(response.data)
    };

    useEffect(() => {
        getDate()
    }, []);

    return <>
        <p>3. При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
            http://universities.hipolabs.com/search?country=Belarus. API возвращает
            университеты страны переданной в качестве одного из доментов url. Ваша задача
            отображать все университеты в тег параграф.</p>
       <div> {res.map((el,i) => <p key={i}>{el.name}</p>)}</div>
    </>
}
export default Task143