import { Link } from 'react-router-dom'

import { useEffect, useState } from "react"

function Task47() {

    const [inpVal, setInpVal] = useState('');

    useEffect(() => {
        console.log(inpVal);
    }, [inpVal])



    return <>

        <p>1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
            который содержит форму с полем ввода. Используйте хук useState для хранения
            значения введенного текста и хук useEffect для отслеживания изменений этого
            значения. При каждом изменении значения в поле ввода, выводить его в консоль
            с помощью useEffect.</p>
        <div>

            <input type="text" onChange={(e) => setInpVal(e.target.value)} />



        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47