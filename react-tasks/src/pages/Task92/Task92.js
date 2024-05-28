
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react"

function Task87() {
    const inp = useRef();

    const getData = async () => {
        const response = await axios.get(`http://numbersapi.com/${inp.current.value}`);
       
        return response.data
    }
    return <>
        <p>3. useRef. По клику на кнопку получить числовое value инпута и отправить запрос к
            http://numbersapi.com/:id (где id – значение input). Результат отобразить в консоль</p>
        
        <input type="number" ref={inp} />
        <button onClick={async() => console.log(await getData())}>Click</button>
    </>
}
export default Task87