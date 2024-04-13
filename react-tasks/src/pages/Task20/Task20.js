function Task20() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getEl() {
        const res = arr[Math.floor(Math.random() * 9)];
        console.log(res);
    };



    return <div>
        <p>6. Создайте компонент с массивом элементов и кнопкой. При каждом клике на
            кнопку выбирайте случайный элемент из массива и отображайте его в консоль.</p>

        <button onClick={getEl}>Click</button>
    </div>
}

export default Task20