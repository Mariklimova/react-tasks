
function Task110() {
    const arr = ['jnk', 45, 'gjguji', 789].map((el)=>{
        if (isNaN(el)) {
            return <p style={{color:"blue"}}>{el}</p>
        } else {
            return <p style={{color:"green"}}>{el}</p>
        }
    })
    return <>
        <p>4. Создайте компонент, который принимает статичный массив чисел и строк. Если
            элемент - число, то отобразите его в параграфе с зеленым цветом текста, если
            строка - с синим.</p>

            {arr}
    </>
}
export default Task110