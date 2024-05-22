
function Task120() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return <>
        <p>6. Создайте компонент с массивом элементов и кнопкой. При каждом клике на
            кнопку выбирайте случайный элемент из массива и отображайте его в консоль.</p>

        <button onClick={() => console.log(arr[Math.floor(Math.random() * arr.length)])}>Click</button>
    </>
}
export default Task120