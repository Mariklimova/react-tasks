
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react"

function Task87() {
    const inp = useRef();
    const h_1 = useRef();

    const getData = async () => {
        const response = await axios.get(`http://numbersapi.com/${inp.current.value}`);
        h_1.current.textContent = response.data
    }

    return <>
        <p>4. Дополнить задачу №3. Результат, полученный из http://numbersapi.com/:id
            отобразить в заголовке с помощью useRef</p>

        <input type="number" ref={inp} />
        <button onClick={async () => console.log(await getData())}>Click</button>
        <h1 ref={h_1}></h1>
    </>
}
export default Task87