
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react"

function Task87() {
    const inp = useRef();


    return <>
        <p>2. useRef. По клику на кнопку получить value инпута</p>
        <input type="text" ref={inp} />
        <button onClick={() => console.log(inp.current.value)}>Click</button>
    </>
}
export default Task87