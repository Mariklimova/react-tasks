
import { useMemo, useState } from "react"

function Task87() {
    const [inp, setInp] = useState('')

    const getSum = useMemo(() => {
        let sum = 0;
        for (let i = 0; i <= inp; i++) {
            sum += i
        }
        return sum
    },[inp])

    return <>
        <p>Создайте компонент, который включает в себя текстовое поле для ввода числа.
            Когда пользователь вводит число, компонент должен вычислить сумму всех чисел от 1 до введенного числа (включительно) с использованием хука useMemo для оптимизации производительности.
            (решаете задание в VSC. Код компонета прикрепить в поле для ввода ниже)</p>

        <input type="text" onChange={(e) => setInp(e.target.value)} />
        <h1>{getSum}</h1>
    </>
}
export default Task87