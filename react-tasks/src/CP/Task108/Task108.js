
function Task108() {
    const arr = [15, 798, 45, 1, 36]
    return <>
        <p>2. Реализуйте компонент, который принимает статичный массив чисел и выводит
            минимальное и максимальное значения на странице.</p>
        <div>
            <p>min: {Math.min(...arr)}</p>
            <p>max: {Math.max(...arr)}</p>
        </div>
    </>
}
export default Task108