import { Link } from 'react-router-dom'
import { useState } from "react"

function Task39() {
    const [data, setData] = useState(['do', 'make', 'sleep', 'go']);
    const [inp, setInp] = useState('');

    const removeItem = (e) => {
       const filtered =  data.filter((el) => el != e.target.id)
        setData(filtered)
    }


    return <>
        <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
        <button onClick={() => {
            setData([...data, inp])
            setInp('')
        }}>Click</button>

        <div>{data.map((el) => <p>{el}<button id={el} onClick={removeItem}>delete</button></p>)}</div>


        <Link to={'/'}>Вернуться на главную страницу</Link>

    </>
}

export default Task39