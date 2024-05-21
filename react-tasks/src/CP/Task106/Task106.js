
function Task106() {
    const res = [{ title: 'lost', description: 'text1' }, { title: 'joker', description: 'text2' }].map((el) => {
        return <>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
        </>
    })
    return <>

        <p>6. На входе массив из объектов. каждый объект содержит title с названием фильма и
            description с кратким описанием фильма. В h1 отобразить каждый title, в p -
            description</p>

        <div>{res}</div>

    </>
}
export default Task106