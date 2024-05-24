import { useState } from "react"

function Task135() {
    const [inpVal, setInpVal] = useState({ name: '', surname: '' });

    const concatInputs = (e) => setInpVal({...inpVal, [e.target.id]:e.target.value})
    return <>
        <p>5. Напишите компонент, который будет получать значения из двух полей ввода (input) и выводить их в консоль по нажатию на кнопку. Используйте для этого только один useState.</p>

        <input type="text" id='name' onChange={concatInputs} />
        <input type="text" id='surname' onChange={concatInputs} />

        <button onClick={() => console.log(inpVal)}>Click</button>
    </>
}
export default Task135