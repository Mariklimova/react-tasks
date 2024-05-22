import { useState } from "react"

function Task123() {
    const [inp, setInp] = useState('')

    function checkEmail() {
        try {
            if (!/^[a-zA-Z1-9]+@[a-zA-Z]+\.[a-zA-Z]+/gm.test(inp)) throw new Error('email is not valid')
            console.log('email is valid');
        } catch (error) {
            console.log(error.message);
        }
    }

    return <>
        <p>3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
            данные из input и проверить вводимую строку на почту. Результат отображать в
            консоль</p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <button onClick={checkEmail}>Click</button>

    </>
}
export default Task123