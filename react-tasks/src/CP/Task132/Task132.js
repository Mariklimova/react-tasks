import { useState } from "react"

function Task132() {
    const [flag, setFlag] = useState(false)
    return <>
        <p>2. Напишите компонент, включающий в себя выезжающее меню из трех параграфов.
            По нажатию на кнопку "Открыть" меню должно отображаться.</p>

        <button onClick={() => setFlag(!flag ? true : false)}>{!flag ? 'Open' : 'Close'}</button>

        {flag &&
            <>
                <p>first</p>
                <p>second</p>
                <p>last</p>
            </>}

    </>
}
export default Task132