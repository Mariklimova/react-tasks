
function Task119() {
    const arr = [1, 2, 3, 4, 5, 6].reduce((sum, el) => sum += el, 0);
    return <>
        <p>5. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку
            вычислите и выведите сумму всех чисел из массива в консоль.</p>
        <button onClick={()=>console.log(arr)}>Click</button>
    </>
}
export default Task119