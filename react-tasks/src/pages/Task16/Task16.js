

function Task16() {
    const inpValue = (event) => {
        console.log(event.target.value);
    };



    return <div>
        <p>2. По событию изменения input отображать в консоль каждое вводимое значение</p>

        <input type = 'text' onChange={inpValue}/>
    </div>
}

export default Task16