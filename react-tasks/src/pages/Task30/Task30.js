import { useState } from "react"

function Task30() {
    const [data, setData] = useState({
        name: '',
        surname: ''
    });

    function setInpValue(e) {
        setData({ ...data, [e.target.name]: e.target.value });

    };

    const check = () => console.log(data);

    return <div>

        <p>10. По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
            state, первоначальное значение которого name:'',surname:'' . Проверить
            значения 2 input на пустоту. Структура state:</p>

        <input name="name" type="text" placeholder="name" onChange={setInpValue} />
        <input name="surname" type="text" placeholder="surname" onChange={setInpValue} />

        <button onClick={check}>Click</button>

    </div>
}

export default Task30