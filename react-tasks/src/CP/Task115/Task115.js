
function Task115() {
    const str = 'gujid@';
    const checkStr = () => {
        try {
            if (!/^[\w\.\_\-\@\$\&]{8,}/gm.test(str)) throw new Error('неподхоящий пороль');
            console.log(true)
        } catch (error) {
            console.log(error.message)
        }
    }
    return <>
        <p>1. На входе переменная пароля. По клику на кнопку необходимо реализовать метод
            валидации. Написать регулярное выражение: пароль от 8 символов, содержит
            числа, буквы, !@#$^&*. Результат отобразить в консоль</p>

        <button onClick={checkStr}>Check</button>
    </>
}
export default Task115