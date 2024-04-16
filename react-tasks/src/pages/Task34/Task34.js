import { useState } from "react"

function Task31() {
    const [value, setValue] = useState('');

  function showValue(e) {
    setValue(e.target.value)
  }



    return <div>

        <p>4. Выводите каждое введенное значение из поля ввода (input) в заголовке H1.</p>

        <input type="text"  onChange = {showValue} />

       <h1>{value}</h1>

    </div>
}

export default Task31