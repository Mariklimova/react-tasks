

function Task103() {
    const arr = ['hgjkh', 'gvbjk@nbhvjk', 'hg@h', 'gvkhjnl'];
    const result = arr.filter((el) => el.includes('@')).map((el)=>`${el} `)
    return <>
        <p>3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
            странице только те строки, которые содержат знак @</p>

        <h1>{result}</h1>
    </>
}
export default Task103