import { Link } from 'react-router-dom'
import { useState } from "react"

function Task34() {
  const [value, setValue] = useState('');

  function showValue(e) {
    setValue(e.target.value);
  }



  return <div>

    <p>4. Выводите каждое введенное значение из поля ввода (input) в заголовке H1.</p>

    <input type="text" onChange={showValue} />

    <h1>{value}</h1>

    <Link to={'/'}>Вернуться на главную страницу</Link>

  </div>
}

export default Task34