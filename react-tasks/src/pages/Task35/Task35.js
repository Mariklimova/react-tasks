import { Link } from 'react-router-dom';
import { useState } from "react"

function Task35() {
    const [text, setText1] = useState({ name: '', surname: '', age: '' });


    function showInputs(e) {
        setText1({ ...text, [e.target.id]: e.target.value });

    }

    return <>

        <p>5. Напишите компонент, который будет получать значения из двух полей ввода (input) и выводить их в консоль по нажатию на кнопку. Используйте для этого только один useState.</p>

        <div>
            <input type="text" id='name' onChange={showInputs} />
            <input type="text" id='surname' onChange={showInputs} />
            <input type="text" id='age' onChange={showInputs} />

            <button onClick={() => console.log(text)}>Click</button>

        </div>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}

export default Task35