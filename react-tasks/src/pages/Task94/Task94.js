

import { useContext, useEffect, useMemo, useRef, useState } from "react"
import { task94Context } from "../../Context"

function Task87() {
   
const info = useContext(task94Context)


    return <>
        <p>5. Воспроизвести пример работы useContext</p>

        
        <h1>{info.press}</h1>
        <h1>{info.красочность}</h1>
        <h1>{info.переплет}</h1>
    </>
}
export default Task87