import { useEffect, useState } from "react"

function Task140() {
    const [ip, setIp] = useState({})
    const getIp = async () => {
        const response = await fetch('https://api.ipify.org/?format=json', { method: 'GET' })
        const parsedData = await response.json()
        setIp(parsedData)
    }
    useEffect(() => {
        getIp();
        document.querySelector('h1').style = 'color:pink'
    }, [])
    return <>

        <h1>{ip.ip}</h1>
    </>
}
export default Task140