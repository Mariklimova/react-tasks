

function Task10() {
    const res = [1, 15, 'sdvsdv', 'vfguhu', 42].map((el) => {
       if (isNaN(el)) {
        return <p style={{color:'blue'}}>{el}</p>
       } else{
        return <p style={{color:'green'}}>{el}</p>
       }
    })
    return <div>
        <p>3. Создайте компонент, который принимает массив строк и фильтрует строки,
            оставляя только те, длина которых не превышает 10 символов.</p>

        <div>{res}</div>
    </div>
}

export default Task10