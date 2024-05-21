import { Link } from 'react-router-dom'

function Task16() {
    const inpValue = (event) => {
        console.log(event.target.value);
    };



    return <div>
        <p>2. По событию изменения input отображать в консоль каждое вводимое значение</p>
        <div>

            <input type='text' onChange={inpValue} />
        </div>
        
        <Link to={'/'}>Вернуться на главную страницу</Link>
    </div>

}

export default Task16