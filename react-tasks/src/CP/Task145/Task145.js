import { useState } from "react"

function Task145() {
    const [name, setName] = useState('')
    return <>
        <p>5. Создайте форму ввода, в которой пользователь может вводить своё имя и
            отображать его под формой.</p>

        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <h1>{name}</h1>

    </>
}
export default Task145