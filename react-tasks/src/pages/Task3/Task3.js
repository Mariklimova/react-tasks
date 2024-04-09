function Task3() {
    const arr = ['gghjj2vgh', 'hfdf@gfh', 'xffcv', 'chjkk@cjgb'].filter((el) => <p>{el.includes('@')}</p>)
    return <div>
        <p>3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
            странице только те строки, которые содержат знак @</p>

        <p>{arr}</p>
    </div>
}

export default Task3