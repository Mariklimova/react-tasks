
function Task109() {
    const arr = ['sdvsdv', 'xffffyfxtfyuoippooo', 'hvhy', 'cgcgtccccghh'].filter((el) => el.length < 11)
    return <>
        <p>3. Создайте компонент, который принимает массив строк и фильтрует строки,
            оставляя только те, длина которых не превышает 10 символов.</p>
        {arr.map((el)=>`${el} `)}
    </>
}
export default Task109