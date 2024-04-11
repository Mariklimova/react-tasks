function Task7() {
    const res = ['sdvsdv'].map((el) => {
        return <div>
            
            <p>{el>0?`${el} положитеное`:`${el} отрицательное`}</p>

        </div>
    })
    return <div>
        <p>3. Создайте компонент, который принимает массив строк и фильтрует строки,
оставляя только те, длина которых не превышает 10 символов.</p>

        <div>{res}</div>
    </div>
}

export default Task7