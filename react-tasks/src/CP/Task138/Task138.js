import { useState } from "react"

function Task138() {
    const [inpValue, setInpValue] = useState('')
    return <>
        <p>8. Создайте поле ввода, в которое пользователь вводит математическое выражение.
            По нажатию на кнопку необходимо вычислить результат выражения (используйте функцию eval()) и отобразить его в заголовке H1.</p>
      
        <input type="text" onChange={(e) => setInpValue(e.target.value)} />
        <button onClick={()=>setInpValue(eval(inpValue))}>Result</button>
        <h1>{inpValue}</h1>
    </>
}
export default Task138