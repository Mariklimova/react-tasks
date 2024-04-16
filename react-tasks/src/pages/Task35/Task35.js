import { useState } from "react"

function Task31() {
    const [text, setText1] = useState({});
    // const [text2, setText2] = useState('');

    function showInputs(e) {
        setText1({...text, [e.target.id]:e.target.value});

    }







    return <div>

        <p>5. Напишите компонент, который будет получать значения из двух полей ввода (input) и выводить их в консоль по нажатию на кнопку. Используйте для этого только один useState.</p>


        <input type="text" id = 'name' onChange={showInputs} />
        <input type="text" id = 'surname'onChange={showInputs} />
        <input type="text" id = 'age'onChange={showInputs} />
       
        <button onClick={()=>console.log(text)}>Click</button>

    </div>
}

export default Task31