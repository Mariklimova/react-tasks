import { Link } from 'react-router-dom'
import { useMemo, useState } from "react"


function Task47() {

    const [str, setStr] = useState('');


   

    const res = useMemo(() => str.split('').reverse().join(''), [str])


    return <>

        <p>4. Напишите программу, которая принимает строку от пользователя и выводит ее в
            обратном порядке. Используй хук useState для хранения строки и хук useMemo
            для кэширования результата.</p>

        <div>
            <input type="text" onChange={(e) => setStr(e.target.value)} />

            <h1>{res}</h1>

        </div >

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task47