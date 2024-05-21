
function Task113() {
    const color = ['cyan', 'magenta', 'yellow', 'black']
    const arr = ['jbjn', 'jghoioi', 'hg', 'r6toio'].map((el) => <p style={{ color: color[Math.floor(Math.random() * color.length)] }}>{el}</p>)
    return <>
        <p>7. Создайте компонент, который принимает статичный массив элементов и
            присваивает каждому элементу случайный цвет фона. Выведите элементы с их
            цветами на странице.</p>
        {arr}
    </>
}
export default Task113