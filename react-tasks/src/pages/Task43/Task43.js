import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from "react"

function Task43() {
    const [res, setRes] = useState([]);

    const getUnivercity = async () => {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Belarus');

        setRes(response.data)
    }

    useEffect(() => {
        getUnivercity()

    }, [])

    return <>

        <p>3. При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
            http://universities.hipolabs.com/search?country=Belarus. API возвращает
            университеты страны переданной в качестве одного из доментов url. Ваша задача
            отображать все университеты в тег параграф.</p>

        <div>{res.map((el) => <p>{el.name}</p>)}</div>
        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task43