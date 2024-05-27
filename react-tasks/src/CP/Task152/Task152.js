import { useState } from "react";

function Task152() {
const [inp,setInp] = useState('');
const [check, setCheck] = useState('')
return <>
    <p>5. Форма с использованием useState: Создайте компонент текстового поля, который
        позволяет пользователю вводить текст и проверять введенный текст регулярным
        выражением на почту по нажатию на кнопку. В заголовок отобразить true если
        введенная строка удовлетворяет регулярному выражению и false в противном
        случае.</p>

        <input type="text" onChange={(e)=>setInp(e.target.value)} />
        <button onClick={()=>setCheck(/^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(inp))}>Check</button>
        <h1>{String(check)}</h1>
</>
}
export default Task152