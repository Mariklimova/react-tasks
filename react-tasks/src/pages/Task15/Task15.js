function Task15() {
    const str = 'gujidfgdfh2h2@';

    function checkStr() {
        try {
            if (!/^[\w\.\_\-\@\$\&]{8,}/gm.test(str)) throw new Error('неподхоящий пороль')
            alert(true)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <p>1. На входе переменная пароля. По клику на кнопку необходимо реализовать метод
            валидации. Написать регулярное выражение: пароль от 8 символов, содержит
            числа, буквы, !@#$^&*. Результат отобразить в консоль</p>

       <button onClick={checkStr}>Click</button>
    </div>
}

export default Task15