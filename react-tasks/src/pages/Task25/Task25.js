import { useState } from "react"

function Task25() {
    const [inp, setInp] = useState('')

    function getInp(e) {
        setInp(e.target.value)
    };

    function giveInp() {
        alert(`Hello,${inp}`)
    }


    return <div>
        <p>5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в
            поле и нажатии на кнопку, компонент должен отображать приветственное
            сообщение с именем, введенным пользователем
        </p>

       

        <button onClick={giveInp}>Привет</button>
    </div>
}

export default Task25