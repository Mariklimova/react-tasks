import { useState } from "react"

function Task130() {
    const [data, setData] = useState({ name: '', surname: '' })

    
    return <>
        <p>10. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
            state, первоначальное значение которого name:'',surname:'' . Проверить
            значения 2 input на пустоту. Структура state:</p>

<input id = 'name' type="text" placeholder = 'name' onChange={(e)=>setData({...data,[e.target.id]:e.target.value})} />
<input id = 'surname'type="text" placeholder = 'surname' onChange={(e)=>setData({...data,[e.target.id]:e.target.value})} />

<button onClick={()=>console.log(data)}>Click</button>
    </>
}
export default Task130