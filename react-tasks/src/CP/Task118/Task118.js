
function Task118() {
    const color = ['red', 'white', 'blue']
    return <>
        <p>4. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет
            в соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный
            выбор цвета из массива при каждом клике.</p>

        <button onClick={(e) => e.target.style = `background-color:${color[Math.floor(Math.random() * color.length)]}`}>Color</button>
    </>
}
export default Task118