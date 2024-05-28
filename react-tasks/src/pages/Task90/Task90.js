
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react"

function Task87() {
    const h_1 = useRef();
    const getData = async () => {
        const response = await axios.get('https://api.ipify.org/?format=json');
        h_1.current.textContent = response.data.ip
    }

    useEffect(() => {
        getData()
    }, [])

    return <>
        <p>1. useRef, useEffect. По условию useRef хранит ссылку на тег h1 в html. Ваша задача
            при первичном рендеринге отправить запрос на https://api.ipify.org/?format=json и
            отобразить в textContent h1 результат</p>

<h1 ref={h_1}></h1>
    </>
}
export default Task87