import { useState } from "react"

function Task146() {
    const [flag, setFlag] = useState(false)
    return <>
        <p>6. Реализовать селектор, где по клику на копку отображается 3 параграфа. При
            повторном клике параграфы скрываются.</p>

        <button onClick={() => setFlag(!flag ? true : false)}>Click</button>
        <div>{flag &&
            <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                </div>}
        </div>
    </>
}
export default Task146